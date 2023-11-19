import { CustomComponent, customComponent } from '@sagemodeninja/custom-component';

@customComponent('action-button')
export class ActionButton extends CustomComponent {
    static styles = `
        :host {
            align-items: center;
            background-color: rgba(3, 106, 196, 0.2);
            border-radius: 5px;
            color: var(--accent-fill-rest);
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            font-family: var(--body-font);
            font-size: 14px;
            font-weight: 500;
            gap: 10px;
            justify-content: center;
            padding: 10px;
            user-select: none;
            -webkit-user-select: none;
        }

        :host(:hover) {
            background-color: rgba(3, 106, 196, 0.25);
        }
        
        :host(:active) {
            background-color: rgba(3, 106, 196, 0.3);
        }
    `;

    static get observedAttributes() {
        return ['data-icon'];
    }

    private _symbolIcon: any;
    
    /* Attributes */
    get icon() {
        return this.getAttribute('data-icon');
    }

    set icon(value) {
        this.setAttribute('data-icon', value);
        this.setIcon();
    }

    /* DOM */
    get symbolIcon() {
        this._symbolIcon ??= this.shadowRoot.querySelector('fluent-symbol-icon');
        return this._symbolIcon;
    }

    public render() {
        return `
            <fluent-symbol-icon></fluent-symbol-icon> 
            <span>
                <slot></slot>
            </span>
        `;
    }

    /* Functions */
    connectedCallback() {
        this.setIcon();
    }

    attributeChangedCallback(name) {
        if (name != 'data-icon')
            return;

        this.setIcon();
    }

    setIcon() {
        this.symbolIcon.symbol = this.icon;
    }
}