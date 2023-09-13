// (function (){
//     const template = document.createElement("template");
//     template.innerHTML = `
//     <style>
//     :host {
//         align-items: center;
//         background-color: rgba(3, 106, 196, 0.2);
//         border-radius: 5px;
//         color: var(--accent-fill-rest);
//         cursor: pointer;
//         display: flex;
//         flex-grow: 1;
//         font-family: var(--body-font);
//         font-size: 14px;
//         font-weight: 500;
//         gap: 10px;
//         justify-content: center;
//         padding: 10px;
//         user-select: none;
//         -webkit-user-select: none;
//     }

//     :host(:hover) {
//         background-color: rgba(3, 106, 196, 0.25);
//     }
    
//     :host(:active) {
//         background-color: rgba(3, 106, 196, 0.3);
//     }
//     </style>
//     <fluent-symbol-icon></fluent-symbol-icon> 
//     <span>
//         <slot></slot>
//     </span>
//     `;

//     class ActionButton extends HTMLElement {
//         _symbolIcon: any;

//         constructor() {
//             super();

//             this.attachShadow({ mode: "open" });
//             this.shadowRoot.appendChild(template.content.cloneNode(true));
//         }

//         static get observedAttributes() {
//             return ["data-icon"];
//         }

//         /* Attributes */
//         get icon() {
//             return this.getAttribute("data-icon");
//         }

//         set icon(value) {
//             this.setAttribute("data-icon", value);
//             this.setIcon();
//         }

//         /* DOM */
//         get symbolIcon() {
//             this._symbolIcon ??= this.shadowRoot.querySelector("fluent-symbol-icon");
//             return this._symbolIcon;
//         }

//         /* Functions */
//         connectedCallback() {
//             this.setIcon();
//         }

//         attributeChangedCallback(name) {
//             if (name != "data-icon")
//                 return;

//             this.setIcon();
//         }

//         setIcon() {
//             this.symbolIcon.symbol = this.icon;
//         }
//     }

//     customElements.define("action-button", ActionButton);
// })();