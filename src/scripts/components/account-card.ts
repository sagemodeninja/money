import { CustomComponent, customComponent } from "@sagemodeninja/custom-component";

@customComponent('account-card')
export class AccountCard extends CustomComponent {
    static styles = `
        :host {
            background-image: -webkit-linear-gradient(-45deg, #252A32 50%, #2d343e 50%);
            border-radius: 10px;
            box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
            box-sizing: border-box;
            color: #FFF;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            height: 180px;
            max-height: 180px;
            max-width: 320px;
            min-height: 180px;
            min-width: 320px;
            outline: none;
            padding: 20px;
            position: relative;
            user-select: none;
            width: 320px;
        }
        
        :host::before {
            border: solid 3px #4D90FE;
            border-radius: 13px;
            box-sizing: border-box;
            content: "";
            display: none;
            height: calc(100% + 6px);
            left: -3px;
            position: absolute;
            top: -3px;
            width: calc(100% + 6px);
            z-index: 0;
        }
        
        :host:active::before {
            display: block;
        }
        
        .body {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .body > .title {
            font-size: 16px;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .balances {
            align-items: center;
            display: flex;
            flex-grow: 1;
        }

        .numbers,
        .category {
            color: #ffffffcc;
            font-size: 13px;
            height: 13px;
            line-height: 13px;
            margin: 0;
        }

        .numbers {
            display: flex;
            margin-bottom: 8px;
        }
        
        .numbers span {
            margin-right: 8px;
        }

        ::slotted(img[slot=icon]) {
            bottom: 23px;
            height: 22px;
            position: absolute;
            right: 18px;
            shape-rendering: geometricPrecision;
        }
    `;

    static get observedAttributes() {
        return ["data-title", "data-number", "data-category"];
    }

    private _titleSpan: HTMLSpanElement;
    private _numberSpan: HTMLSpanElement;
    private _categorySpan: HTMLSpanElement;
    
    /* Attributes */
    get title() {
        return this.getAttribute("data-title");
    }

    set title(value) {
        this.setAttribute("data-title", value);
        this.setTitle();
    }

    get number() {
        return this.getAttribute("data-number");
    }

    set number(value) {
        this.setAttribute("data-number", value ?? "••••");
        this.setNumber();
    }

    get category() {
        return this.getAttribute("data-category");
    }

    set category(value) {
        this.setAttribute("data-category", value);
        this.setCategory();
    }

    /* DOM */
    get titleSpan() {
        this._titleSpan ??= this.shadowRoot.querySelector(".title");
        return this._titleSpan;
    }

    get numberSpan() {
        this._numberSpan ??= this.shadowRoot.querySelector(".number");
        return this._numberSpan;
    }

    get categorySpan() {
        this._categorySpan ??= this.shadowRoot.querySelector(".category");
        return this._categorySpan;
    }

    public render() {
        return `
            <div class="body">
                <span class="title"></span>
                <div class="balances">
                    <slot></slot>
                </div>
                <p class="numbers">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span class="number">••••</span>
                </p>
                <span class="category"></span>
            </div>
            <slot name="icon"></slot>
        `;
    }

    /* Functions */
    connectedCallback() {
        this.setTitle();
        this.setNumber();
        this.setCategory();
    }

    attributeChangedCallback(name) {
        switch(name) {
            case "data-title": this.setTitle(); break;
            case "data-number": this.setNumber(); break;
            case "data-category": this.setCategory(); break;
        }
    }

    setTitle() {
        this.titleSpan.innerHTML = this.title;
    }

    setNumber() {
        const number = this.number?.slice(-4);
        this.numberSpan.innerHTML = number;
    }

    setCategory() {
        this.categorySpan.innerHTML = this.category;
    }
}