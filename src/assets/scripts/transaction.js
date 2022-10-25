const CREATE = 0;
const UPDATE = 1;

// BALANCES
var runBal = 0;
var projBal = 0;

// TRANSACTION
var operation = CREATE;
var tables = {};
var tabs = {};
var activeTabKey, editor;

var contextMenu;

const refreshCommand = document.querySelector("#refresh_command");
const createCommand = document.querySelector("#create_command");
const transactionTab = document.querySelector("#transaction_tab");
const editorDialog = document.querySelector("#editor_dialog");
const dissmissEditorBtn = document.querySelector("#dismiss_editor_dialog_btn");

document.addEventListener("DOMContentLoaded", () => {
    if(ACCOUNT_ID === -1) {
        alert("Account not set!");
        window.location.href = "../index.php";
    }

    editor = $("#editor");
    initContextMenu();
    registerTabs();

    // Auto refresh @ start.
    loadBalances();

    refreshCommand.addEventListener("click", () => loadBalances());
    
    createCommand.addEventListener("click", () => {
        operation = CREATE;
        
        editorDialog.show();
        editor.find("input").each((idx, ipt)=>{
            $(ipt).val("");
        });
    });
    
    dissmissEditorBtn.addEventListener("click", () => editorDialog.hide());
    
    transactionTab.addEventListener("change", e => {
        activeTabKey = e.detail.id;
        refreshTable();
    });
    
    $("#save_btn").click(e=>{
        let url = operation == CREATE ? "crud/create.php" : "crud/update.php";
        
        $.ajax({
            url: url,
            method: "POST",
            data: editor.serialize() + `&AccountId=${ACCOUNT_ID}`,
            dataType: "JSON",
            success: payload=>{
                if(payload.state) {
                    loadBalances();
                }

                operation = CREATE;
                editorDialog.hide();
                alert(payload.content);
            }
        });
    });
});

function registerTabs() {
    $(".transaction_tab").each((idx, tab)=>{
        tab = $(tab);
        let key = tab.data("tab");
        tabs[key] = tab;
        
        activeTabKey = "actual";
    });
}

function initContextMenu() {
    // Context menu...
    let container = document.querySelector("#transaction_tab");
    contextMenu = globalContext.addMenu("transactions_row", container);
    
    // Context menu options...
    let updateOption = new ContextMenuOption("Update");
    let postOption = new ContextMenuOption("Post");
    let deleteOption = new ContextMenuOption("Delete");
    let cancelOption = new ContextMenuOption("Cancel");
    
    updateOption.visible(d => d.status == "projection");
    postOption.visible(d => d.status == "projection");
    deleteOption.visible(d => d.status == "projection");
    cancelOption.visible(d => d.status == "actual");
    
    updateOption.onClick(d => updateBtnClicked(d.data));
    postOption.onClick(d => postBtnClicked(d.data.Id));
    deleteOption.onClick(d=> deleteBtnClicked(d.data.Id));
    cancelOption.onClick(d => cancelBtnClicked(d.data.Id));
    
    contextMenu.addOptions(updateOption, postOption, deleteOption, cancelOption);
}

// BALANCES
function loadBalances() {
    const data = { AccountId: ACCOUNT_ID };
    
    axios.get("../report/balances.php", { params: data })
        .then(response => {
            const payload = response.data;
            const content = payload.content;
            
            if(payload.state) {
                runBal = content.Running;
                projBal = content.Projected;

                $("#running_balance").text( toCurrency( runBal.toString() ) );
                $("#projected_balance").text( toCurrency( projBal.toString() ) );

                refreshTable();
            }
            else
            {
                alert(`Oops! ${content}`);
            }
        })
        .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
}

function refreshTable() {
    const data = { 
        AccountId: ACCOUNT_ID,
        Status: activeTabKey
    };
    
    axios.get("crud/read.php", { params: data })
        .then(response => {
            const payload = response.data;
            const content = payload.content;
            const tab = tabs[activeTabKey];
            
            if(payload.state) {
                tab.empty();
                let transactions = groupTransactions(content);
                
                $.each(transactions, (idx, data) => {
                    let group = newGroup(idx, data, activeTabKey);
                    tab.append(group);
                });
            }
            else
            {
                tab.html(`<p class="centered">Oops! ${content}</p>`);
            }
        })
        .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
}


function groupTransactions(trans) {
    var groups = trans.reduce((g, t) => {
      g[t.Date] ??= [];
      g[t.Date].push(t);
      
      return g;
    }, {});
    
    // NOTE: .sort(() => -1) is used to reverse order.
    var sorted = Object.keys(groups).sort(() => -1).reduce((o, k) => {
        o[k] = groups[k].sort(() => -1);
        return o;
    }, {});
    
    return sorted;
}

function newGroup(date, trans, status) {
    var group = $("<div>").addClass("transaction-group");
    var header = $("<p>").addClass("transaction-group-header");
    var body = $("<div>").addClass("transaction-group-body");
    
    // Title/header...
    var dateTime = DateTime.parse(date);
    header.text(dateTime.toString("MMM. dd, yyyy"));
    
    group.append(header);
    group.append(body);
    
    $.each(trans, (i, t) => {
        let row = newRow(status, t);
        body.append(row);
    });
    
    return group;
}

function newRow(status, trans) {
    var row = $("<div>").addClass("transaction-row");

    var main = $("<div>").addClass("main-content");
    var desc = $(`<div class='transaction-description'><p>${trans.Description}</p></div>`);
    var summary = $("<div class='transaction-summary'>");
    
    main.append(desc);
    main.append(summary);
    row.append(main);
    
    var isDebit = trans.Debit > trans.Credit;
    var transAmount = isDebit ? trans.Debit : trans.Credit;
    transAmount = toCurrency(transAmount.toString());
    
    var amount = $(`<p>${!isDebit ? "-" : ""} PHP ${transAmount}</p>`);
    var ref = $("<p>REF: N/A</p>");
    
    summary.append(amount);
    summary.append(ref);
    
    row[0].addContext(contextMenu, { status: status, data: trans });

    const actions = $("<div>").addClass("actions-container");
    row.append(actions);

    // Touch events...
    let initialTouch;

    main[0].addEventListener("touchstart", e => {
        e.preventDefault();
        initialTouch = e.changedTouches[0];
    });

    main[0].addEventListener("touchmove", e => {
        e.preventDefault();

        const touch = Array.from(e.changedTouches)
                        .find(tch => tch.identifier === initialTouch.identifier);

        if (touch === undefined) {
            console.log("No matches found of the initial touch.");
            return;
        }

        let delta = Math.min(0, touch.pageX - initialTouch.pageX);
        main.css({ transform: `translateX(${delta}px)` });
    });

    main[0].addEventListener("touchend", e => {
        e.preventDefault();

        const touch = Array.from(e.changedTouches)
                        .find(tch => tch.identifier === initialTouch.identifier);

        if (touch === undefined) {
            console.log("No matches found of the initial touch.");
            return;
        }

        const finalDelta = Math.max(0, initialTouch.pageX - touch.pageX);
        const actionWidth = actions[0].clientWidth;
        const threshold = actionWidth / 2;
        const snapPoint = actionWidth * (finalDelta > threshold);

        main.css({ transform: `translateX(${-snapPoint}px)` });
    });
    
    return row;
}

function updateBtnClicked(data) {
    operation = UPDATE;
    editor.find("input").each((idx, ipt)=>{
        ipt = $(ipt);
        let name = ipt.attr("name");
        ipt.val( data[name] );
    });

    editorDialog.show();
}

function deleteBtnClicked(id) {
    $.ajax({
        url: "crud/delete.php",
        method: "POST",
        data: { Id: id },
        dataType: "JSON",
        success: payload=>{
            if(payload.state) {
                loadBalances();
            }

            alert(payload.content);
        }
    });
}

function postBtnClicked(id) {
    $.ajax({
        url: "post/post.php",
        method: "POST",
        data: { Id: id },
        dataType: "JSON",
        success: payload=>{
            if(payload.state) {
                loadBalances();
            }

            alert(payload.content);
        }
    });
}

function cancelBtnClicked(id) {
    $.ajax({
        url: "post/cancel.php",
        method: "POST",
        data: { Id: id },
        dataType: "JSON",
        success: payload=>{
            if(payload.state) {
                loadBalances();
            }

            alert(payload.content);
        }
    });
}

// HELPERS
function  toCurrency(value) {
    return Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}