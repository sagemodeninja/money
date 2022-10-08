const CREATE = 0;
const UPDATE = 1;

// BALANCES
var begBal = 0;
var runBal = 0;

// TRANSACTION
var operation = CREATE;
var periods = {};
var tables = {};
var tabs = {};
var period, activeTabKey, editor;

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
    
    initContextMenu();
    registerTabs();

    period = $("#period");
    loadPeriods();

    refreshCommand.addEventListener("click", () => loadBalances());
    
    createCommand.addEventListener("click", () => {
        operation = CREATE;
        
        editorDialog.show();
        editor = $("#editor");
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
            data: editor.serialize() + `&PeriodId=${period.val()}&AccountId=${ACCOUNT_ID}`,
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

// PERIODS
function loadPeriods() {
    axios.get("../period/read.php")
        .then(response => {
            const payload = response.data;
            const content = payload.content;
            
            period.empty();
            
            if(payload.state) {
                $.each(content, (idx, data)=>{
                    let id = data.Id;
                    let fromDate = data.FromDate.replace(/-/g, "/");
                    let toDate = data.ToDate.replace(/-/g, "/");
                    let open = data.Status === "Open";
            
                    let text = open ? "(Current Period)" : `${fromDate} - ${toDate}`;
                    period.append( $(`<option value="${id}">${text}</option>`) );
            
                    periods[id] = { open: open };
                });
            
                loadBalances(); // Auto refresh @ start.
            } else {
                period.append( $("<option>No Periods...</option>") );
                alert(`Oops! ${content}`);
            }
        })
        .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
}

// BALANCES
function loadBalances() {
    const periodId = period.val();

    const data = {
        AccountId: ACCOUNT_ID,
        PeriodId: periodId
    };
    
    axios.get("../report/balances.php", { params: data })
        .then(response => {
            const payload = response.data;
            const content = payload.content;
            
            if(payload.state) {
                begBal = content.Beginning;
                runBal = content.Running;
                
                let projBal = content.Projected;
                let open = periods[periodId].open;

                $("#beginning_balance").text( toCurrency( begBal.toString() ));
                $("#running_balance").text( toCurrency( runBal.toString() ) );
                $("#projected_balance").text( open ? toCurrency( projBal.toString() ) : "-" );

                $("#running_balance_head").text( open ? "Running Balance" : "Ending Balance" );

                createCommand.toggleAttribute("disabled", !open);
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
        PeriodId: period.val(), 
        Status: activeTabKey
    };
    
    axios.get("crud/read.php", { params: data })
        .then(response => {
            const payload = response.data;
            const content = payload.content;
            const tab = tabs[activeTabKey];
            
            if(payload.state) {
                tab.empty();
                let balance = activeTabKey === "actual" ? begBal : runBal;
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
    var desc = $(`<div class='transaction-description'><p>${trans.Description}</p></div>`);
    var summary = $("<div class='transaction-summary'>");
    
    row.append(desc);
    row.append(summary);
    
    var isDebit = trans.Debit > trans.Credit;
    var transAmount = isDebit ? trans.Debit : trans.Credit;
    transAmount = toCurrency(transAmount.toString());
    
    var amount = $(`<p>${!isDebit ? "-" : ""} PHP ${transAmount}</p>`);
    var ref = $("<p>REF: N/A</p>");
    
    summary.append(amount);
    summary.append(ref);
    
    row[0].addContext(contextMenu, { status: status, data: trans });
    
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