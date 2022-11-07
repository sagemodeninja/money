const CREATE = 0;
const UPDATE = 1;

class TransactionManager {
    constructor(config) {
        this.card = config.card;
        this.container = config.container;
        this.editor = config.editor;
        this.command = config.command;

        this.account;
        this.operation = CREATE;

        this.registerMenu();
        this.registerEditor();
    }
    
    // TODO: Refactor?
    registerMenu() {
        // Menu
        this.contextMenu = globalContext.addMenu("transactions_row", this.container);
        
        // Options
        let updateOption = new ContextMenuOption("Update");
        let postOption = new ContextMenuOption("Post");
        let deleteOption = new ContextMenuOption("Delete");
        let cancelOption = new ContextMenuOption("Cancel");
        
        updateOption.visible(isProjection);
        postOption.visible(isProjection);
        deleteOption.visible(isProjection);
        cancelOption.visible(trans => trans.Posted);

        function isProjection(trans) { 
            return !trans.Posted;
        };
        
        updateOption.onClick(trans => this.updateBtnClicked(trans));
        postOption.onClick(trans => this.postBtnClicked(trans.Id));
        deleteOption.onClick(d=> this.deleteBtnClicked(trans.Id));
        cancelOption.onClick(trans => this.cancelBtnClicked(trans.Id));
        
        this.contextMenu.addOptions(updateOption, postOption, deleteOption, cancelOption);
    }

    registerEditor() {
        // TODO: Refactor
        let editor = $("#editor");

        this.command.addEventListener("click", () => {
            this.operation = CREATE;
        
            editor.find("input").each((idx, ipt)=>{
                $(ipt).val("");
            });

            this.editor.show();
            this.changeTheme("#999999");
        });
        
        // TODO: Refactor
        const dissmissEditorBtn = document.querySelector("#dismiss_editor_dialog_btn");
        dissmissEditorBtn.addEventListener("click", () => {
            this.changeTheme("#dadada");
            this.editor.hide()
        });
        
        $("#save_btn").click(e => {
            let url = this.operation == CREATE ? "transaction/crud/create.php" : "transaction/crud/update.php";
            
            $.ajax({
                url: url,
                method: "POST",
                data: editor.serialize() + `&AccountId=${this.account.Id}`,
                dataType: "JSON",
                success: payload => {
                    if(payload.state)
                        this.refresh();

                    this.operation = CREATE;
                    this.editor.hide();
                    this.changeTheme("#dadada");
                }
            });
        });
    }

    // TODO: Better name?
    load(account) {
        this.account = account;

        this.refresh();
    }

    refresh() {
        this.loadCard();
        this.loadBalances();
        this.loadTransactions();
    }

    loadCard() {
        const account = this.account;

        this.card.title = account.Title;
        this.card.number = account.AccountNumber;
        this.card.category = account.Category;
    }
    
    loadBalances() {
        const data = { AccountId: this.account.Id };
        const balances = this.card.querySelectorAll("card-balance");

        axios.get("report/balances.php", { params: data })
            .then(response => {
                const payload = response.data;
                const content = payload.content;
                
                if(!payload.state) {
                    alert(`Oops! ${content}`);
                    return;
                }

                balances[0].innerText = toCurrency(content.Running);
                balances[1].innerText = toCurrency(content.Projected);
            })
            .catch(error => {
                alert("An error occured.");
                console.log(error);
            });
    }
    
    loadTransactions() {
        const data = { AccountId: this.account.Id };
        
        axios.get("transaction/crud/read.php", { params: data })
            .then(response => {
                const payload = response.data;
                const content = payload.content;
                
                if(!payload.state) {
                    this.container.innerHTML = `<p class="centered">Oops! ${content}</p>`;
                    return;
                }

                this.container.innerHTML = null;
                let transactions = this.groupTransactions(content);

                Object.keys(transactions).forEach(key => {
                    let group = this.newGroup(key, transactions[key]);

                    this.container.appendChild(group);
                });
            })
            .catch(error => {
                alert("An error occured.");
                console.log(error);
            });
    }

    // TODO: Try refactoring?
    groupTransactions(trans) {
        var groups = trans.reduce((g, t) => {
            const key = `${t.Date}_${t.Posted}`;
            g[key] ??= [];
            g[key].push(t);
            
            return g;
        }, {});
        
        // NOTE: .sort(() => -1) is used to reverse order.
        var sorted = Object.keys(groups).sort(() => -1).reduce((o, k) => {
            o[k] = groups[k].sort(() => -1);
            return o;
        }, {});
        
        return sorted;
    }

    newGroup(date, trans) {
        var group = $("<div>").addClass("transaction-group");
        var header = $("<p>").addClass("transaction-group-header");
        var body = $("<div>").addClass("transaction-group-body");
        
        // Title/header...
        var dateTime = DateTime.parse(date.slice(0, -2));
        header.text(dateTime.toString("MMM. dd, yyyy"));
        
        if (!trans[0].Posted) {
            const status = trans.Posted ? "actual" : "projection";
            header.addClass(status);
        }
        
        group.append(header);
        group.append(body);
        
        $.each(trans, (i, t) => {
            let row = this.newRow(t);
            body.append(row);
        });
        
        // TODO: Refactor
        return group[0];
    }

    newRow(trans) {
        // TODO: Refactor?
        const status = trans.Posted ? "actual" : "projection";

        var row = $(`<div class="transaction-row ${status}">`);

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
        
        row[0].addContext(this.contextMenu, trans);

        const actions = $("<div>").addClass("actions-container");
        row.append(actions);

        if (status === "projection") {
            const editAction = this.newAction("edit", "Edit");
            const postAction = this.newAction("post", "CompletedSolid");
            const deleteAction = this.newAction("delete", "Delete");

            editAction.click(() => {
                collapseActions();
                this.updateBtnClicked(trans);
            });

            postAction.click(() => {
                collapseActions();
                this.postBtnClicked(trans.Id);
            });

            deleteAction.click(() => {
                collapseActions();
                this.deleteBtnClicked(trans.Id);
            });

            actions.append(editAction);
            actions.append(postAction);
            actions.append(deleteAction);
        } else {
            const cancelAction = this.newAction("delete", "Cancel");
            actions.append(cancelAction);

            cancelAction.click(() => {
                collapseActions();
                this.cancelBtnClicked(trans.Id);
            });
        }

        // Touch events...
        let initialTouch;
        let initialLeft;

        main[0].addEventListener("touchstart", e => {
            initialTouch = e.changedTouches[0];

            initialLeft = parseInt(main.css("left"));
        });

        main[0].addEventListener("touchmove", e => {
            const touch = Array.from(e.changedTouches)
                            .find(tch => tch.identifier === initialTouch.identifier);

            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }

            const delta = touch.pageX - initialTouch.pageX;
            const left = Math.min(0, initialLeft + delta);

            if (Math.abs(delta) > 0)
                e.preventDefault();

            main.css({ left: left });
        });

        main[0].addEventListener("touchend", e => {
            const touch = Array.from(e.changedTouches)
                            .find(tch => tch.identifier === initialTouch.identifier);

            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }

            const left = parseInt(main.css("left"));
            const actionWidth = actions[0].clientWidth;
            const threshold = actionWidth / 2;
            const snapPoint = actionWidth * (Math.abs(left) > threshold);

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
    }

    newAction(name, symbol) {
        const action = $(`<div class="action action-${name}" tabindex="-1">`);
        const icon = $(`<fluent-symbol-icon></fluent-symbol-icon>`);

        // Icon
        action.append(icon);
        icon.attr("symbol", symbol);
        icon.attr("font-size", 20);
        icon.attr("foreground", "#fff");

        return action;
    }

    updateBtnClicked(data) {
        this.operation = UPDATE;

        // TODO: Refactor.
        let editor = $("#editor");
        editor.find("input").each((idx, ipt)=>{
            ipt = $(ipt);
            let name = ipt.attr("name");
            ipt.val( data[name] );
        });
    
        this.changeTheme("#999999");
        this.editor.show();
    }
    
    deleteBtnClicked(id) {
        $.ajax({
            url: "transaction/crud/delete.php",
            method: "POST",
            data: { Id: id },
            dataType: "JSON",
            success: payload => {
                if(payload.state)
                    this.refresh();
            }
        });
    }
    
    postBtnClicked(id) {
        $.ajax({
            url: "transaction/post/post.php",
            method: "POST",
            data: { Id: id },
            dataType: "JSON",
            success: payload => {
                if (payload.state)
                    this.refresh();
            }
        });
    }
    
    cancelBtnClicked(id) {
        $.ajax({
            url: "transaction/post/cancel.php",
            method: "POST",
            data: { Id: id },
            dataType: "JSON",
            success: payload => {
                if (payload.state)
                    this.refresh();
            }
        });
    }

    changeTheme(theme) {
        document.querySelector('meta[name="theme-color"]')
                .setAttribute("content", theme);
    }
}