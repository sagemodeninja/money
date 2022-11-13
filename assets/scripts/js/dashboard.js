var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var body;
var refreshCommand;
var toggleCommand;
var closedAccounts;
var contextMenu;
var transactionPanel;
var transaction;
$(document).ready(function () {
    var isShowClosed = false;
    body = document.querySelector("#layout_body");
    refreshCommand = document.querySelector("#refresh_command");
    toggleCommand = document.querySelector("#toggle_closed_command");
    transactionPanel = document.querySelector("transaction_panel");
    transaction = new TransactionManager();
    transaction.card = document.querySelector("#transaction_card");
    transaction.container = document.querySelector(".transaction-container");
    transaction.editor = document.querySelector("#editor_dialog");
    transaction.command = document.querySelector("#create_command");
    closedAccounts = [];
    contextMenu = globalContext.addMenu("accounts_card", body);
    refreshCommand === null || refreshCommand === void 0 ? void 0 : refreshCommand.addEventListener("click", refreshAccounts);
    // Toggle show/hide closed accounts...
    toggleCommand === null || toggleCommand === void 0 ? void 0 : toggleCommand.addEventListener("click", function () {
        toggleCommand.icon = isShowClosed ? "View" : "Hide";
        toggleCommand.label = isShowClosed ? "Show Closed Accounts" : "Hide Closed Accounts";
        closedAccounts.forEach(function (card) {
            if (isShowClosed)
                card.hide();
            else
                card.show();
        });
        isShowClosed = !isShowClosed;
    });
    // Context menu options...
    var closeOption = new ContextMenuOption("Close");
    var deleteOption = new ContextMenuOption("Delete");
    closeOption.visible(function (d) { return d.Status === "Active"; });
    deleteOption.visible(function (d) { return d.Status === "Active"; });
    closeOption.onClick(function (acct) {
        var conf = confirm("Close account \"".concat(acct.Title, "\"?"));
        if (conf) {
            $.ajax({
                url: "account/crud/close.php",
                method: "POST",
                data: { Id: acct.Id },
                dataType: "JSON",
                success: function (payload) {
                    if (payload.state) {
                        refreshCategories();
                    }
                    else {
                        alert(payload.content);
                    }
                }
            });
        }
    });
    deleteOption.onClick(function (acct) {
        var conf = confirm("Delete account \"".concat(acct.Title, "\"?"));
        if (conf) {
            $.ajax({
                url: "account/crud/delete.php",
                method: "POST",
                data: { Id: acct.Id },
                dataType: "JSON",
                success: function (payload) {
                    if (payload.state) {
                        refreshCategories();
                    }
                    else {
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
    body.innerHTML = '<p style="text-align: center;">Fetching Accounts...</p>';
    axios.get("account/crud/read_categorized.php")
        .then(function (response) {
        body.innerHTML = null;
        var accounts = response.data;
        if (accounts.state) {
            var content = accounts.content;
            var categories = content.reduce(function (arr, acct) {
                var categoryId = acct.CategoryId;
                if (!arr.some(function (cat) { return cat.Id == acct.CategoryId; }))
                    arr.push({
                        Id: categoryId,
                        Title: acct.Category,
                        Color: acct.CategoryColor
                    });
                return arr;
            }, []);
            var categorized = content.reduce(function (map, acct) { var _a; return map.set(acct.CategoryId, __spreadArray(__spreadArray([], (_a = map.get(acct.CategoryId)) !== null && _a !== void 0 ? _a : [], true), [acct], false)); }, new Map());
            refreshBalances(categories, categorized);
        }
        else {
            body.innerHTML = "<p class=\"centered\">Oops! ".concat(accounts.content, "</p>");
        }
    })
        .catch(function (error) {
        console.dir(error);
    });
}
function refreshBalances(categories, categorized) {
    categorized.forEach(function (accounts, _category) {
        var _a, _b, _c;
        var category = (_a = categories.find(function (cat) { return cat.Id == _category; })) !== null && _a !== void 0 ? _a : {};
        var color = (_b = category === null || category === void 0 ? void 0 : category.Color) !== null && _b !== void 0 ? _b : "9E9E9E";
        var title = (_c = category === null || category === void 0 ? void 0 : category.Title) !== null && _c !== void 0 ? _c : "Uncategorized";
        var container = $('<div class="category"></div>');
        var accountsGrid = $('<div class="accounts-grid"></div>');
        var tag = $("<fluent-symbol-icon symbol=\"Tag\" foreground=\"#".concat(color, "\" font-size=\"13\" class=\"tag\"></fluent-symbol-icon>"));
        var label = $("<span class=\"title\">".concat(title, "</span>"));
        body.appendChild(container[0]);
        body.appendChild(accountsGrid[0]);
        container.append(tag);
        container.append(label);
        $.each(accounts, function (idx, account) {
            var card = newCard(account, title);
            accountsGrid.append(card);
        });
    });
}
// HELPERS
function newCard(account, category) {
    var _a, _b;
    var accountNumber = (_b = (_a = account.AccountNumber) === null || _a === void 0 ? void 0 : _a.slice(-4)) !== null && _b !== void 0 ? _b : "••••";
    var bankIcon = account.BankIcon;
    var card = $("<account-card>");
    var runningBalance = $("<card-balance>...</card-balance>");
    var projectedBalance = $("<card-balance>...</card-balance>");
    var accountBankIcon = $('<img class="account-bank-icon" slot="icon">');
    card.append(runningBalance);
    card.append(projectedBalance);
    card.append(accountBankIcon);
    card.prop("title", account.Title);
    card.prop("number", accountNumber);
    card.prop("category", category);
    runningBalance.prop("title", "Actual");
    projectedBalance.prop("title", "Projection");
    if (bankIcon != null) {
        accountBankIcon.attr("src", "assets/images/bank_icons/".concat(bankIcon, ".svg"));
        if (bankIcon == "master_card")
            accountBankIcon.attr("style", "bottom:16px;height:35px;");
        if (bankIcon == "ubp" || bankIcon == "gcash")
            accountBankIcon.attr("style", "bottom:20px;height:30px;right:25px;");
        if (bankIcon == "cimb")
            accountBankIcon.attr("style", "bottom:20px;height:28px;right:25px;");
    }
    // Context menu...
    card[0].addContext(contextMenu, account);
    // Visibility...
    if (account.Status !== "Active") {
        closedAccounts.push(card);
        card.hide();
    }
    $.ajax({
        url: "report/account_balance.php?accountId=" + account.Id,
        method: "GET",
        dataType: "JSON",
        success: function (payload) {
            if (payload.state) {
                var balances = payload.content;
                runningBalance.text(toCurrency(balances.Balance));
                projectedBalance.text(toCurrency(balances.Projection));
            }
            else {
                runningBalance.text("!");
                projectedBalance.text("!");
                console.error(payload.content);
            }
        }
    });
    card.click(function () {
        transaction_panel.show();
        transaction.loadAccount(account);
    });
    return card;
}
function toCurrency(value) {
    return Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}
