class TransactionManager {
    // DOM
    card: Element;
    container: Element;
    editor: any; // TODO: Strong type
    command: Element;

    // State
    isRegistered: boolean;
    operation: Operation;
    contextMenu: ContextMenu;
    account: Account;

    constructor() {
        this.operation = Operation.Create;
    }

    loadAccount(account: Account) {
        this.account = account;

        this.registerComponents();
        this.refresh();
    }

    refresh() {
        this.loadCard();
        this.loadBalances();
        this.loadTransactions();
    }

    registerComponents() {
        if (this.isRegistered) return;
        
        this.registerMenu();
        this.registerEditor();
        
        this.isRegistered = true;
    }
    
    registerMenu() {
        // Menu
        this.contextMenu = globalContext.addMenu("transactions_row", this.container);
        
        // Options
        let options = ["Update", "Post", "Delete", "Cancel"];
        let menuOptions = options.reduce((mo, o) => {
            const option = new ContextMenuOption(o);

            option.visible((trans: Transaction) => trans.Posted == (o == "Cancel"));
            mo.push(option);

            return mo;
        }, []);
        
        menuOptions[0].onClick(trans => this.updateBtnClicked(trans));
        menuOptions[1].onClick(trans => this.post(trans));
        menuOptions[2].onClick(trans => this.delete(trans));
        menuOptions[3].onClick(trans => this.cancel(trans));
        
        this.contextMenu.addOptions(...menuOptions);
    }

    registerEditor() {
        // TODO: Refactor
        let editor = $("#editor");

        this.command.addEventListener("click", () => {
            this.operation = Operation.Create;
        
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
        
        $("#save_btn").click(() => this.save());
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

                for(let key in transactions) {
                    const group = this.newGroup(key, transactions[key]);
                    this.container.appendChild(group);
                }
            })
            .catch(error => {
                alert("An error occured.");
                console.log(error);
            });
    }

    groupTransactions(trans) {
        let groups = {};

        for(let t of trans) {
            const key = t.Date + t.Posted;
            (groups[key] ??= []).push(t);
        }

        return groups;
    }

    newGroup(date, trans) {
        let group = $("<div>").addClass("transaction-group");
        let header = $("<p>").addClass("transaction-group-header");
        let body = $("<div>").addClass("transaction-group-body");

        // Title/header...
        let dateTime = DateTime.parse(date.slice(0, -1));
        header.text(dateTime.toString("MMM. dd, yyyy"));
        
        const status = trans[0].Posted ? "actual" : "projection";
        header.addClass(status);
        
        group.append(header);
        group.append(body);
        
        for(let t of trans) {
            let row = this.newRow(t);
            body.append(row);
        }
        
        // TODO: Refactor
        return group[0];
    }

    newRow(trans) {
        // TODO: Refactor?
        const status = trans.Posted ? "actual" : "projection";

        let row = $(`<div class="transaction-row ${status}">`);

        let main = $("<div>").addClass("main-content");
        let desc = $(`<div class='transaction-description'><p>${trans.Description}</p></div>`);
        let summary = $("<div class='transaction-summary'>");
        
        main.append(desc);
        main.append(summary);
        row.append(main);
        
        let isDebit = trans.Debit > trans.Credit;
        let transAmount = isDebit ? trans.Debit : trans.Credit;
        transAmount = toCurrency(transAmount.toString());
        
        let amount = $(`<p>${!isDebit ? "-" : ""} PHP ${transAmount}</p>`);
        let ref = $("<p>REF: N/A</p>");
        
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
                this.post(trans.Id);
            });

            deleteAction.click(() => {
                collapseActions();
                this.delete(trans.Id);
            });

            actions.append(editAction);
            actions.append(postAction);
            actions.append(deleteAction);
        } else {
            const cancelAction = this.newAction("delete", "Cancel");
            actions.append(cancelAction);

            cancelAction.click(() => {
                collapseActions();
                this.cancel(trans.Id);
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
        this.operation = Operation.Update;

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

    save() {
        let endpoint = `transaction/crud/${Operation[this.operation]}.php`;

        // TODO: Refactor
        let form = this.editor.querySelector("form");
        let data = new FormData(form);
        data.append("AccountId", this.account.Id.toString());
        let trans = Object.fromEntries(data.entries());

        axios
            .post(endpoint, trans)
            .then(response => {
                if (response.data.state)
                    this.refresh();

                this.operation = Operation.Create;
                this.editor.hide();
                this.changeTheme("#dadada");
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    delete(trans: Transaction) {
        this.handlePost("transaction/crud/delete.php", trans);
    }
    
    post(trans: Transaction) {
        this.handlePost("transaction/post/post.php", trans);
    }
    
    cancel(trans: Transaction) {
        this.handlePost("transaction/post/cancel.php", trans);
    }

    handlePost(endpoint: string, trans: Transaction) {
        axios
            .post(endpoint, trans)
            .then(response => {
                if (response.data.state)
                    this.refresh();
            })
            .catch(error => {
                console.log(error);
            });
    }

    changeTheme(theme: string) {
        document.querySelector(`meta[name="theme-color"]`)
                .setAttribute("content", theme);
    }
}