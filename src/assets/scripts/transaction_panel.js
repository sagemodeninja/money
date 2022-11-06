(function (){
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
    :host {
        --radius: 5px;
        --radius-mob: 15px;
        --margin: 15px;
        --top: calc(44px / 2);
    }
    
    :host {
        background-color: rgba(0, 0, 0, 0.1);
        display: none;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 4;
    }

    :host(.visible) {
        display: block;
    }
    
    .panel {
        background-color: #fff;
        border-top-left-radius: var(--radius-mob);
        border-top-right-radius: var(--radius-mob);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 calc(32 * 0.5px) calc((32 * 1px)) rgba(0, 0, 0, 0.24);
        overflow: hidden;
        position: absolute;
        right: 0;
        top: var(--top);
        height: calc(100% - var(--top));
        width: 100%;
    }

    slot {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
        max-height: 100%;
        padding: 15px;
    }
    
    /* Tablet & Up */
    @media only screen and (min-width: 768px) {
        .panel {
            border-radius: var(--radius);
            height: calc(100% - var(--margin) * 2);
            right: var(--margin);
            top: var(--margin);
            width: 500px;
        }
    }
    </style>

    <div class="panel">
        <slot></slot>
    </div>
    `;

    class TransactionPanel extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            this.clickedThroughPanel;
        }

        /* DOM */
        get panel() {
            this._panel ??= this.shadowRoot.querySelector(".panel");
            return this._panel;
        }

        connectedCallback() {
            this.addEventListener("click", this.hide);
            this.panel.addEventListener("click", () => this.clickedThroughPanel = true);
        }

        show() {
            this.classList.add("visible");
            this.changeTheme("#dadada");
        }

        hide() {
            if(this.clickedThroughPanel) {
                this.clickedThroughPanel = false;
                return;
            }

            this.classList.remove("visible");
            this.changeTheme("#f2f2f2");
        }

        changeTheme(theme) {
            document.querySelector('meta[name="theme-color"]')
                    .setAttribute("content", theme);
        }
    }

    customElements.define("transaction-panel", TransactionPanel);
})();