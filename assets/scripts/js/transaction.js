var TransactionManager = /** @class */ (function () {
    function TransactionManager() {
        this.operation = Operation.Create;
    }
    TransactionManager.prototype.loadAccount = function (account) {
        this.account = account;
        this.registerComponents();
        this.refresh();
    };
    TransactionManager.prototype.refresh = function () {
        this.loadCard();
        this.loadBalances();
        this.loadTransactions();
    };
    TransactionManager.prototype.registerComponents = function () {
        if (this.isRegistered)
            return;
        this.registerMenu();
        this.registerEditor();
        this.isRegistered = true;
    };
    TransactionManager.prototype.registerMenu = function () {
        var _a;
        var _this = this;
        // Menu
        this.contextMenu = globalContext.addMenu("transactions_row", this.container);
        // Options
        var options = ["Update", "Post", "Delete", "Cancel"];
        var menuOptions = options.reduce(function (mo, o) {
            var option = new ContextMenuOption(o);
            option.visible(function (trans) { return trans.Posted == (o == "Cancel"); });
            mo.push(option);
            return mo;
        }, []);
        menuOptions[0].onClick(function (trans) { return _this.updateBtnClicked(trans); });
        menuOptions[1].onClick(function (trans) { return _this.post(trans); });
        menuOptions[2].onClick(function (trans) { return _this.delete(trans); });
        menuOptions[3].onClick(function (trans) { return _this.cancel(trans); });
        (_a = this.contextMenu).addOptions.apply(_a, menuOptions);
    };
    TransactionManager.prototype.registerEditor = function () {
        var _this = this;
        // TODO: Refactor
        var editor = $("#editor");
        this.command.addEventListener("click", function () {
            _this.operation = Operation.Create;
            editor.find("input").each(function (idx, ipt) {
                $(ipt).val("");
            });
            _this.editor.show();
            _this.changeTheme("#999999");
        });
        // TODO: Refactor
        var dissmissEditorBtn = document.querySelector("#dismiss_editor_dialog_btn");
        dissmissEditorBtn.addEventListener("click", function () {
            _this.changeTheme("#dadada");
            _this.editor.hide();
        });
        $("#save_btn").click(function () { return _this.save(); });
    };
    TransactionManager.prototype.loadCard = function () {
        var account = this.account;
        this.card.title = account.Title;
        this.card.number = account.AccountNumber;
        this.card.category = account.Category;
    };
    TransactionManager.prototype.loadBalances = function () {
        var data = { AccountId: this.account.Id };
        var balances = this.card.querySelectorAll("card-balance");
        axios.get("report/balances.php", { params: data })
            .then(function (response) {
            var payload = response.data;
            var content = payload.content;
            if (!payload.state) {
                alert("Oops! ".concat(content));
                return;
            }
            balances[0].innerText = toCurrency(content.Running);
            balances[1].innerText = toCurrency(content.Projected);
        })
            .catch(function (error) {
            alert("An error occured.");
            console.log(error);
        });
    };
    TransactionManager.prototype.loadTransactions = function () {
        var _this = this;
        var data = { AccountId: this.account.Id };
        axios.get("transaction/crud/read.php", { params: data })
            .then(function (response) {
            var payload = response.data;
            var content = payload.content;
            if (!payload.state) {
                _this.container.innerHTML = "<p class=\"centered\">Oops! ".concat(content, "</p>");
                return;
            }
            _this.container.innerHTML = null;
            var transactions = _this.groupTransactions(content);
            for (var key in transactions) {
                var group = _this.newGroup(key, transactions[key]);
                _this.container.appendChild(group);
            }
        })
            .catch(function (error) {
            alert("An error occured.");
            console.log(error);
        });
    };
    TransactionManager.prototype.groupTransactions = function (trans) {
        var _a;
        var groups = {};
        for (var _i = 0, trans_1 = trans; _i < trans_1.length; _i++) {
            var t = trans_1[_i];
            var key = t.Date + t.Posted;
            ((_a = groups[key]) !== null && _a !== void 0 ? _a : (groups[key] = [])).push(t);
        }
        return groups;
    };
    TransactionManager.prototype.newGroup = function (date, trans) {
        var group = $("<div>").addClass("transaction-group");
        var header = $("<p>").addClass("transaction-group-header");
        var body = $("<div>").addClass("transaction-group-body");
        // Title/header...
        var dateTime = DateTime.parse(date.slice(0, -1));
        header.text(dateTime.toString("MMM. dd, yyyy"));
        var status = trans[0].Posted ? "actual" : "projection";
        header.addClass(status);
        group.append(header);
        group.append(body);
        for (var _i = 0, trans_2 = trans; _i < trans_2.length; _i++) {
            var t = trans_2[_i];
            var row = this.newRow(t);
            body.append(row);
        }
        // TODO: Refactor
        return group[0];
    };
    TransactionManager.prototype.newRow = function (trans) {
        var _this = this;
        // TODO: Refactor?
        var status = trans.Posted ? "actual" : "projection";
        var row = $("<div class=\"transaction-row ".concat(status, "\">"));
        var main = $("<div>").addClass("main-content");
        var desc = $("<div class='transaction-description'><p>".concat(trans.Description, "</p></div>"));
        var summary = $("<div class='transaction-summary'>");
        main.append(desc);
        main.append(summary);
        row.append(main);
        var isDebit = trans.Debit > trans.Credit;
        var transAmount = isDebit ? trans.Debit : trans.Credit;
        transAmount = toCurrency(transAmount.toString());
        var amount = $("<p>".concat(!isDebit ? "-" : "", " PHP ").concat(transAmount, "</p>"));
        var ref = $("<p>REF: N/A</p>");
        summary.append(amount);
        summary.append(ref);
        row[0].addContext(this.contextMenu, trans);
        var actions = $("<div>").addClass("actions-container");
        row.append(actions);
        if (status === "projection") {
            var editAction = this.newAction("edit", "Edit");
            var postAction = this.newAction("post", "CompletedSolid");
            var deleteAction = this.newAction("delete", "Delete");
            editAction.click(function () {
                collapseActions();
                _this.updateBtnClicked(trans);
            });
            postAction.click(function () {
                collapseActions();
                _this.post(trans.Id);
            });
            deleteAction.click(function () {
                collapseActions();
                _this.delete(trans.Id);
            });
            actions.append(editAction);
            actions.append(postAction);
            actions.append(deleteAction);
        }
        else {
            var cancelAction = this.newAction("delete", "Cancel");
            actions.append(cancelAction);
            cancelAction.click(function () {
                collapseActions();
                _this.cancel(trans.Id);
            });
        }
        // Touch events...
        var initialTouch;
        var initialLeft;
        main[0].addEventListener("touchstart", function (e) {
            initialTouch = e.changedTouches[0];
            initialLeft = parseInt(main.css("left"));
        });
        main[0].addEventListener("touchmove", function (e) {
            var touch = Array.from(e.changedTouches)
                .find(function (tch) { return tch.identifier === initialTouch.identifier; });
            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }
            var delta = touch.pageX - initialTouch.pageX;
            var left = Math.min(0, initialLeft + delta);
            if (Math.abs(delta) > 0)
                e.preventDefault();
            main.css({ left: left });
        });
        main[0].addEventListener("touchend", function (e) {
            var touch = Array.from(e.changedTouches)
                .find(function (tch) { return tch.identifier === initialTouch.identifier; });
            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }
            var left = parseInt(main.css("left"));
            var actionWidth = actions[0].clientWidth;
            var threshold = actionWidth / 2;
            var snapPoint = actionWidth * (Math.abs(left) > threshold);
            anime({
                targets: main[0],
                left: -snapPoint,
                duration: 200,
                easing: "easeInOutQuad"
            });
        });
        function collapseActions() {
            anime({
                targets: main[0],
                left: 0,
                duration: 200,
                easing: "easeInOutQuad"
            });
        }
        return row;
    };
    TransactionManager.prototype.newAction = function (name, symbol) {
        var action = $("<div class=\"action action-".concat(name, "\" tabindex=\"-1\">"));
        var icon = $("<fluent-symbol-icon></fluent-symbol-icon>");
        // Icon
        action.append(icon);
        icon.attr("symbol", symbol);
        icon.attr("font-size", 20);
        icon.attr("foreground", "#fff");
        return action;
    };
    TransactionManager.prototype.updateBtnClicked = function (data) {
        this.operation = Operation.Update;
        // TODO: Refactor.
        var editor = $("#editor");
        editor.find("input").each(function (idx, ipt) {
            ipt = $(ipt);
            var name = ipt.attr("name");
            ipt.val(data[name]);
        });
        this.changeTheme("#999999");
        this.editor.show();
    };
    TransactionManager.prototype.save = function () {
        var _this = this;
        var endpoint = "transaction/crud/".concat(Operation[this.operation], ".php");
        // TODO: Refactor
        var form = this.editor.querySelector("form");
        var data = new FormData(form);
        data.append("AccountId", this.account.Id.toString());
        var trans = Object.fromEntries(data.entries());
        axios
            .post(endpoint, trans)
            .then(function (response) {
            if (response.data.state)
                _this.refresh();
            _this.operation = Operation.Create;
            _this.editor.hide();
            _this.changeTheme("#dadada");
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TransactionManager.prototype.delete = function (trans) {
        this.handlePost("transaction/crud/delete.php", trans);
    };
    TransactionManager.prototype.post = function (trans) {
        this.handlePost("transaction/post/post.php", trans);
    };
    TransactionManager.prototype.cancel = function (trans) {
        this.handlePost("transaction/post/cancel.php", trans);
    };
    TransactionManager.prototype.handlePost = function (endpoint, trans) {
        var _this = this;
        axios
            .post(endpoint, trans)
            .then(function (response) {
            if (response.data.state)
                _this.refresh();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TransactionManager.prototype.changeTheme = function (theme) {
        document.querySelector("meta[name=\"theme-color\"]")
            .setAttribute("content", theme);
    };
    return TransactionManager;
}());
