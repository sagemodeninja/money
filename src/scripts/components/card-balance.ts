import { CustomComponent, customComponent } from "@sagemodeninja/custom-component";

@customComponent('card-balance')
export class CardBalance extends CustomComponent {
    static styles = `
        :host {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 5px;
        }

        .title {
            color: #ffffffcc;
            font-size: 13px;
            height: 13px;
            margin: 0;
        }
        
        .figure {
            font-size: 18px;
            font-weight: 500;
            height: 20px;
            line-height: 20px;
        }

        .figure.medium {
            font-size: 16px;
        }

        .figure.small {
            font-size: 15px;
        }

        .figure::after {
            display: inline-block;
            color: #ffffff80;
            font-size: 13px;
            font-weight: 500;
            line-height: 13px;
            margin-left: 5px;
            vertical-align: top;
        }

        .figure.medium::after {
            font-size: 12px;
            margin-left: 4px;
        }

        .figure.small::after {
            font-size: 11px;
            margin-left: 0;
        }

        .currency-php::after {
            content: "PHP";
        }
    `;

    static get observedAttributes() {
        return ["data-title", "data-currency"];
    }

    private _titleSpan: HTMLSpanElement;
    private _figureSpan: HTMLSpanElement;
    private _slot: HTMLSlotElement;

    /* Attributes */
    get title() {
        return this.getAttribute("data-title");
    }

    set title(value) {
        this.setAttribute("data-title", value);
        this.setTitle();
    }

    get currency() {
        return this.getAttribute("data-currency") ?? "php";
    }

    set currency(value) {
        this.setAttribute("data-currency", value);
        this.setCurrency();
    }

    /* DOM */
    get titleSpan() {
        this._titleSpan ??= this.shadowRoot.querySelector(".title");
        return this._titleSpan;
    }

    get figureSpan() {
        this._figureSpan ??= this.shadowRoot.querySelector(".figure");
        return this._figureSpan;
    }

    get slotElement() {
        this._slot ??= this.shadowRoot.querySelector("slot");
        return this._slot;
    }

    public render() {
        return `
            <span class="title">Projection</span>
            <span class="figure currency-php">
                <slot></slot>
            </span>
        `;
    }

    /* Functions */
    connectedCallback() {
        this.setTitle();
        this.setCurrency();

        this.slotElement.addEventListener("slotchange", () => {
            const nodes = this.slotElement.assignedNodes();
            const content = nodes[0].textContent.replace(/,/g, '');
            const balance = parseFloat(content);

            if(isNaN(balance)) return;
            
            if (balance >= 1000000)
                this.figureSpan.classList.add("small");
            else if (balance >= 100000)
                this.figureSpan.classList.add("medium");
        });
    }

    attributeChangedCallback(name) {
        switch(name) {
            case "data-title": this.setTitle(); break;
            case "data-currency": this.setCurrency(); break;
        }
    }

    setTitle() {
        this.titleSpan.innerHTML = this.title;
    }

    setCurrency() {
        this.setAttribute("class", `figure currency-${this.currency}`);
    }
}