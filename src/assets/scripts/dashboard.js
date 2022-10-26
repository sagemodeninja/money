var accountsCont;
var closedAccounts;
var contextMenu;

const refreshCommand = document.querySelector("#refresh_command");
const toggleCommand = document.querySelector("#toggle_closed_command");

$(document).ready(() => {
    var isShowClosed = false;
    
    accountsCont = $("#accounts_grid");
    closedAccounts = [];
    contextMenu = globalContext.addMenu("accounts_card", accountsCont[0]);
    
    refreshCommand.addEventListener("click", refreshAccounts);
    
    // Toggle show/hide closed accounts...
    toggleCommand.addEventListener("click", () => {
        toggleCommand.icon = isShowClosed ? "View" : "Hide";
        toggleCommand.label = isShowClosed ? "Show Closed Accounts" : "Hide Closed Accounts";
        
        closedAccounts.forEach(card => {
            if(isShowClosed)
              card.hide();
            else
              card.show();
        });
        isShowClosed = !isShowClosed;
    });
    
    // Context menu options...
    let closeOption = new ContextMenuOption("Close");
    let deleteOption = new ContextMenuOption("Delete");
    
    closeOption.visible(d => d.Status === "Active");
    deleteOption.visible(d => d.Status === "Active");
    
    closeOption.onClick(acct => {
        let conf = confirm(`Close account \"${acct.Title}\"?`);
        if(conf) {
            $.ajax({
                url: "account/crud/close.php",
                method: "POST",
                data: { Id: acct.Id },
                dataType: "JSON",
                success: payload=> {
                    if(payload.state) {
                        refreshCategories();
                    } else {
                        alert(payload.content);
                    }
                }
            });
        }
    });
    
    deleteOption.onClick(acct => {
        let conf = confirm(`Delete account \"${acct.Title}\"?`);
        if(conf) {
            $.ajax({
                url: "account/crud/delete.php",
                method: "POST",
                data: { Id: acct.Id },
                dataType: "JSON",
                success: payload=> {
                    if(payload.state) {
                        refreshCategories();
                    } else {
                        alert(payload.content);
                    }
                }
            });
        }
    });
    
    contextMenu.addOptions(closeOption, deleteOption);
    
    refreshAccounts(); // Auto refresh @ start.
});

function refreshAccounts() {
    accountsCont.html('<p style="text-align: center;">Fetching Accounts...</p>');

    axios.get("account/crud/read_categorized.php")
         .then(response => {
            accountsCont.empty();

            let accounts = response.data;
            if(accounts.state){
                let content = accounts.content;
                
                let categories = content.reduce((arr, acct) => {
                    let categoryId = acct.CategoryId;
                    
                    if(!arr.some(cat => cat.Id == acct.CategoryId))
                        arr.push({
                            Id: categoryId,
                            Title: acct.Category,
                            Color: acct.CategoryColor
                        });
                        
                    return arr;
                }, []);
                let categorized = content.reduce((map, acct) => map.set(acct.CategoryId, [...map.get(acct.CategoryId) ?? [], acct]), new Map());
                refreshBalances(categories, categorized);
            } else {
                accountsCont.html(`<p class="centered">Oops! ${accounts.content}</p>`);
            }
         })
         .catch(error => {
             console.dir(error);
         });
}

function refreshBalances(categories, categorized) {
    categorized.forEach((accounts, _category) => {
        let category = categories.find(cat => cat.Id == _category) ?? {};
        let catColor = category?.Color ?? "9E9E9E";
        let catTitle = category?.Title ?? "Uncategorized";
        let catDiv = $(`<div style="display: flex; align-items: center; margin-top: 15px; margin-bottom: 8px;"></div>`);
        let catIcon = $(`<span style="display: inline-block; background-color: #${catColor}; height: 8px; width: 8px; border-radius: 50%; margin-right: 8px;"></span>`);
        let catLbl = $(`<span>${catTitle}</span>`);
        
        catDiv.append(catIcon);
        catDiv.append(catLbl);
        accountsCont.append(catDiv);
        
        $.each(accounts, (idx, account)=>{
            let card = newCard(account, catTitle);
            accountsCont.append(card);
        });
    });
}

// HELPERS
function newCard(account, category) {
    let accountNumber = account.AccountNumber?.slice(-4) ?? "••••";
    let bankIcon = account.BankIcon;
    
    let card = $("<div>").addClass("account-card");
    let body = $("<div>").addClass("account-card-body");
    let title = $(`<p class="account-name">${account.Title}</p>`);
    let runningContainer = $("<p>").addClass("account-balance");
    let runningFigure = $(`<span class="amount-figure">Loading...</span>`);
    let runningSymbol = $(`<span class="currency-symbol">PHP</span>`);
    let accountNoContainer = $("<p>").addClass("account-number");
    let accountBankIcon = $("<img>").addClass("account-bank-icon");
    let accountCategory = $(`<p class="account-category">${category}</p>`)
    
    runningContainer.append(runningFigure);
    runningContainer.append(runningSymbol);
    
    accountNoContainer.append($("<span>••••</span>"));
    accountNoContainer.append($("<span>••••</span>"));
    accountNoContainer.append($("<span>••••</span>"));
    accountNoContainer.append($(`<span>${accountNumber}</span>`));
    
    body.append(title);
    body.append(runningContainer);
    body.append(accountNoContainer);
    body.append(accountCategory);
    
    if(bankIcon != null)
    {
        accountBankIcon.attr("src", `assets/images/bank_icons/${bankIcon}.svg`);
        
        if(bankIcon == "master_card")
            accountBankIcon.attr("style", "bottom:16px;height:35px;");
        if(bankIcon == "ubp" || bankIcon == "gcash")
            accountBankIcon.attr("style", "bottom:20px;height:30px;right:25px;");
        if(bankIcon == "cimb")
            accountBankIcon.attr("style", "bottom:20px;height:28px;right:25px;");
    }
    
    card.append(body);
    card.append(accountBankIcon);
  
    // Context menu...
    card[0].addContext(contextMenu, account);
  
    // Visibility...
    if(account.Status !== "Active") {
        closedAccounts.push(card);
        card.hide();
    }

    $.ajax({
        url: "report/account_balance.php?accountId=" + account.Id,
        method: "GET",
        dataType: "JSON",
        success: payload => {
            if(payload.state) {
                let balance = payload.content;
                runningFigure.text(toCurrency(balance.Balance));
                //projFig.text(toCurrency(balance.Projection));
            } else {
                // accountsCont.append( $(`<p class="centered">Oops! ${payload.content}</p>`) );
                /*
                runFig.text("N/A");
                projFig.text("N/A");
                */
            }
        }
    });
    
    card.click(() => {
        location.href = `transaction/?title=${account.Title}&id=${account.Id}&number=${accountNumber}&category=${category}`;
    });

    return card;
}

function  toCurrency(value) {
    return Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}




