/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/custom-component/dist/custom-component.js ***!
  \*******************************************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){return function(t){window.customElements.define(e,t)}}function n(e){return function(t,o){let n=t[o];Object.defineProperty(t,o,{get:function(){return n},set:function(t){const r=n;n=t,t!=r&&(this.setAttribute(null!=e?e:o,n),this.stateHasChanged())},enumerable:!0,configurable:!0}),t.observeAttribute(o,null!=e?e:o)}}e.r(t),e.d(t,{CustomComponent:()=>r,customComponent:()=>o,parameter:()=>n});class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.renderDOM()}attributeChangedCallback(e,t,o){}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}renderDOM(){const e=this.resolveTemplate();this.shadowRoot.innerHTML=null,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}resolveTemplate(){const e=this.localName;return e in r._templates?r._templates[e]:this.createTemplate(e)}createTemplate(e){var t;const o=document.createElement("template"),n=Object.getPrototypeOf(this).constructor;return o.innerHTML=`<style>${null!==(t=n.styles)&&void 0!==t?t:""}</style>`,r._templates[e]=o,o}}return r._templates={},t})()));
//# sourceMappingURL=custom-component.js.map

/***/ }),

/***/ "./scripts/components/cards/account-card.ts":
/*!**************************************************!*\
  !*** ./scripts/components/cards/account-card.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountCard: () => (/* binding */ AccountCard)
/* harmony export */ });
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AccountCard = class AccountCard extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    render() {
        return `
            <div class="control">
                <div class="details">
                    <span class="title">A very long text that should be ellipsed</span>
                    <span class="subtitle">Cash</span>
                </div>
                <span class="balance">
                    <span class="amount">1,502,023.03</span>
                    <span class="currrencyCode">PHP</span>
                </span>
            </div>
        `;
    }
};
AccountCard.styles = `
        :host {
            background-color: #151612;
            border-radius: 18px;
            color: #fff;
            cursor: pointer;
            display: block;
            font-family: 'Manrope', sans-serif;
            overflow: hidden;
            padding: 16px 24px;
            position: relative;
        }

        :host(:active) {
            box-shadow: 0 0 0 3px var(--fill-accent-color-secondary);
        }

        .details {
            flex-grow: 1;
            overflow: hidden;
        }

        .control {
            align-items: center;
            display: flex;
            gap: 32px;
        }

        .title {
            display: block;
            font-size: 15px;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .subtitle {
            color: rgb(255 255 255 / 0.75);
            display: block;
            font-size: 14px;
            font-weight: 500;
        }

        .balance {
            align-items: start;
            display: flex;
            flex-grow: 1;
            flex-shrink: 0;
            gap: 8px;
            justify-content: end;
        }

        .currrencyCode,
        .amount {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            line-height: 0.8;
        }

        .currrencyCode {
            color: var(--fill-accent-color-secondary);
            font-size: 14px;
        }

        .amount {
            font-size: 21px;
        }
    `;
AccountCard = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('account-card')
], AccountCard);



/***/ }),

/***/ "./scripts/components/page-indicator.ts":
/*!**********************************************!*\
  !*** ./scripts/components/page-indicator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageIndicator: () => (/* binding */ PageIndicator)
/* harmony export */ });
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PageIndicator = class PageIndicator extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    constructor() {
        super(...arguments);
        this._indicators = [];
        this._size = 0;
    }
    static get observedAttributes() {
        return ['size', 'active-index'];
    }
    /* Attributes */
    set size(value) {
        this.updateSize(value);
    }
    set activeIndex(value) {
        this.updateActiveIndex(value);
    }
    /* DOM */
    get control() {
        var _a;
        (_a = this._control) !== null && _a !== void 0 ? _a : (this._control = this.shadowRoot.querySelector('.control'));
        return this._control;
    }
    render() {
        return `<div class="control" part="control"></div>`;
    }
    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case 'size':
                this.updateSize(parseInt(newValue));
                break;
            case 'active-index':
                this.updateActiveIndex(parseInt(newValue));
                break;
        }
    }
    updateSize(newValue) {
        const delta = newValue - this._size;
        if (delta === 0)
            return;
        const added = Array.from({ length: delta }, () => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            return indicator;
        });
        const removed = this._indicators.splice(delta, Math.abs(delta), ...added);
        this.control.append(...added);
        removed.forEach(indicator => indicator.remove());
        this._size = newValue;
        this.setAttribute('size', newValue.toString());
    }
    updateActiveIndex(newIndex) {
        var _a;
        if (this._activeIndex === newIndex)
            return;
        (_a = this._indicators[this._activeIndex]) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        this._indicators[newIndex].classList.add('active');
        this._activeIndex = newIndex;
        this.setAttribute('active-index', newIndex.toString());
    }
};
PageIndicator.styles = `
        .control {
            display: flex;
            gap: 5px;
            justify-content: center;
        }

        .indicator {
            background-color: rgba(0 0 0 / 0.4);
            background-color: rgba(0 0 0 / 0.2);
            border-radius: 4px;
            display: block;
            height: 7px;
            transition: width 0.25s;
            transition-timing-function: ease;
            width: 7px;
        }

        .indicator.active {
            background-color: var(--fill-accent-color);
            width: 30px;
        }
    `;
PageIndicator = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('page-indicator')
], PageIndicator);



/***/ }),

/***/ "./scripts/components/snap-view.ts":
/*!*****************************************!*\
  !*** ./scripts/components/snap-view.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapView: () => (/* binding */ SnapView),
/* harmony export */   SnapViewPanel: () => (/* binding */ SnapViewPanel)
/* harmony export */ });
/* harmony import */ var _components_page_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/page-indicator */ "./scripts/components/page-indicator.ts");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnapDirection;
(function (SnapDirection) {
    SnapDirection[SnapDirection["Left"] = -1] = "Left";
    SnapDirection[SnapDirection["Right"] = 1] = "Right";
})(SnapDirection || (SnapDirection = {}));
let SnapView = class SnapView extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.CustomComponent {
    constructor() {
        super();
        this._index = 0;
        this._panelCount = 0;
        this._snapEvent = new Event('snap');
    }
    get activeIndex() {
        return this._index;
    }
    /* DOM */
    get container() {
        var _a;
        (_a = this._container) !== null && _a !== void 0 ? _a : (this._container = this.shadowRoot.querySelector('.container'));
        return this._container;
    }
    get defaultSlot() {
        var _a;
        (_a = this._slot) !== null && _a !== void 0 ? _a : (this._slot = this.shadowRoot.querySelector('slot'));
        return this._slot;
    }
    get leftBtn() {
        var _a;
        (_a = this._leftBtn) !== null && _a !== void 0 ? _a : (this._leftBtn = this.shadowRoot.querySelector('.left'));
        return this._leftBtn;
    }
    get rightBtn() {
        var _a;
        (_a = this._rightBtn) !== null && _a !== void 0 ? _a : (this._rightBtn = this.shadowRoot.querySelector('.right'));
        return this._rightBtn;
    }
    get indicator() {
        var _a;
        (_a = this._indicator) !== null && _a !== void 0 ? _a : (this._indicator = this.shadowRoot.querySelector('.indicator'));
        return this._indicator;
    }
    render() {
        return `
            <div class="container">
                <slot></slot>
            </div>
            <button class="snapButton left" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M0.29 12.71l8 8 1.41-1.41-6.29-6.29H24v-2H3.41l6.29-6.29-1.41-1.41-8 8a1 1 0 0 0 0 1.41z" data-name="Arrow Left"/>
                </svg>
            </button>
            <button class="snapButton right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M23.71 11.29l-8-8-1.41 1.41 6.29 6.29H0v2h20.59l-6.29 6.29 1.41 1.41 8-8a1 1 0 0 0 0-1.41z" data-name="Arrow Right"/>
                </svg>          
            </button>
            <page-indicator class="indicator" part="indicator"></page-indicator>
        `;
    }
    connectedCallback() {
        this.addEventListeners();
    }
    addEventListeners() {
        this.defaultSlot.addEventListener('slotchange', () => {
            const { length } = this.defaultSlot.assignedElements();
            this._panelCount = length - 1;
            this.indicator.size = length;
            this.indicator.activeIndex = 0;
        });
        this.rightBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Right);
        });
        this.leftBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Left);
        });
        this.container.addEventListener('scroll', () => {
            const index = this.resolveIndex();
            if (this._index === index)
                return;
            this._index = index;
            this.leftBtn.disabled = index <= 0;
            this.rightBtn.disabled = index === this._panelCount;
            this.indicator.activeIndex = index;
            this.dispatchEvent(this._snapEvent);
        });
    }
    resolveIndex() {
        const { scrollLeft: left } = this.container;
        const { width } = this.container.getBoundingClientRect();
        return Math.round(left / width);
    }
    snap(direction) {
        const { width } = this.container.getBoundingClientRect();
        this.container.scrollTo({
            left: (this._index + direction) * width,
            behavior: 'smooth'
        });
    }
};
SnapView.styles = `
        :host {
            display: block;
            position: relative;
        }

        .container {
            -ms-overflow-style: none;
            display: flex;
            height: 100%;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
        }

        .container::-webkit-scrollbar {
            display: none;
        }

        .snapButton {
            align-items: center;
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 50px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: none;
            height: 24px;
            justify-content: center;
            padding: 4px;
            position: absolute;
            top: calc(50% - (24px / 2));
            width: 24px;
        }

        .snapButton svg path {
            fill: var(--fill-accent-color);
        }

        .snapButton.left {
            left: 12px;
        }

        .snapButton.right {
            right: 12px;
        }

        .snapButton:active {
            height: 22px;
            margin: 1px;
            width: 22px;
        }

        .snapButton:not(:active) {
            transition: all 0.25s;
        }

        .indicator {
            bottom: 16px;
            position: absolute;
            width: 100%;
        }
        
        @media only screen and (min-width: 768px) {
            :host(:hover) .snapButton:not(:disabled) {
                display: flex;
            }
        }
    `;
SnapView = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.customComponent)('snap-view'),
    __metadata("design:paramtypes", [])
], SnapView);

let SnapViewPanel = class SnapViewPanel extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.CustomComponent {
    render() {
        return `<slot></slot>`;
    }
};
SnapViewPanel.styles = `
        :host {
            flex-shrink: 0;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            width: 100%;
        }
    `;
SnapViewPanel = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.customComponent)('snap-view-panel')
], SnapViewPanel);



/***/ }),

/***/ "./scripts/components/wallet-card.ts":
/*!*******************************************!*\
  !*** ./scripts/components/wallet-card.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletCard: () => (/* binding */ WalletCard)
/* harmony export */ });
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let WalletCard = class WalletCard extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    render() {
        return `
            <div class="control"></div>
            <div class="blob"></div>
        `;
    }
};
WalletCard.styles = `
        :host {
            background-color: black;
            border-radius: 10px;
            display: block;
            height: 180px;
            overflow: hidden;
            position: relative;
            width: 320px;
        }
        
        .control {
            backdrop-filter: blur(80px);
            background-color: #252A3299;
            inset: 0;
        }

        .blob {
            filter: blur(40px);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgb(255, 255, 255, 0.5);
        }
    `;
WalletCard = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('wallet-card')
], WalletCard);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./scripts/views/lab-view.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_wallet_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/wallet-card */ "./scripts/components/wallet-card.ts");
/* harmony import */ var _components_snap_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/snap-view */ "./scripts/components/snap-view.ts");
/* harmony import */ var _components_cards_account_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/cards/account-card */ "./scripts/components/cards/account-card.ts");



document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container');
    testContainer.addEventListener('snap', () => {
        console.log(testContainer.activeIndex);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDO0lBRTVFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQvZGlzdC9jdXN0b20tY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMvYWNjb3VudC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3IudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9zbmFwLXZpZXcudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy93YWxsZXQtY2FyZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy92aWV3cy9sYWItdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkN1c3RvbUNvbXBvbmVudD10KCk6ZS5DdXN0b21Db21wb25lbnQ9dCgpfShzZWxmLCgoKT0+KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsbyk9Pntmb3IodmFyIG4gaW4gbyllLm8obyxuKSYmIWUubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpvW25dfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoZSx0KX19ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24odCxvKXtsZXQgbj10W29dO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8se2dldDpmdW5jdGlvbigpe3JldHVybiBufSxzZXQ6ZnVuY3Rpb24odCl7Y29uc3Qgcj1uO249dCx0IT1yJiYodGhpcy5zZXRBdHRyaWJ1dGUobnVsbCE9ZT9lOm8sbiksdGhpcy5zdGF0ZUhhc0NoYW5nZWQoKSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5vYnNlcnZlQXR0cmlidXRlKG8sbnVsbCE9ZT9lOm8pfX1lLnIodCksZS5kKHQse0N1c3RvbUNvbXBvbmVudDooKT0+cixjdXN0b21Db21wb25lbnQ6KCk9Pm8scGFyYW1ldGVyOigpPT5ufSk7Y2xhc3MgciBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMucmVuZGVyRE9NKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsdCxvKXt9Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXJET00oKXtjb25zdCBlPXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5zaGFkb3dSb290LmlubmVySFRNTD1udWxsLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlLmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IGU9dGhpcy5sb2NhbE5hbWU7cmV0dXJuIGUgaW4gci5fdGVtcGxhdGVzP3IuX3RlbXBsYXRlc1tlXTp0aGlzLmNyZWF0ZVRlbXBsYXRlKGUpfWNyZWF0ZVRlbXBsYXRlKGUpe3ZhciB0O2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBvLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PSh0PW4uc3R5bGVzKSYmdm9pZCAwIT09dD90OlwiXCJ9PC9zdHlsZT5gLHIuX3RlbXBsYXRlc1tlXT1vLG99fXJldHVybiByLl90ZW1wbGF0ZXM9e30sdH0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcblxuQGN1c3RvbUNvbXBvbmVudCgnYWNjb3VudC1jYXJkJylcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxMjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCg6YWN0aXZlKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZmlsbC1hY2NlbnQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAwLjc1KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycnJlbmN5Q29kZSxcbiAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycnJlbmN5Q29kZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC1hY2NlbnQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkEgdmVyeSBsb25nIHRleHQgdGhhdCBzaG91bGQgYmUgZWxsaXBzZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VidGl0bGVcIj5DYXNoPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFsYW5jZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudFwiPjEsNTAyLDAyMy4wMzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJycmVuY3lDb2RlXCI+UEhQPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5cbkBjdXN0b21Db21wb25lbnQoJ3BhZ2UtaW5kaWNhdG9yJylcbmV4cG9ydCBjbGFzcyBQYWdlSW5kaWNhdG9yIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwIDAgMCAvIDAuNCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAgMCAwIC8gMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3IuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3NpemUnLCAnYWN0aXZlLWluZGV4J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaW5kaWNhdG9yczogSFRNTFNwYW5FbGVtZW50W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfYWN0aXZlSW5kZXg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2NvbnRyb2w6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgLyogQXR0cmlidXRlcyAqL1xuICAgIHNldCBzaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBET00gKi9cbiAgICBnZXQgY29udHJvbCgpIHtcbiAgICAgICAgdGhpcy5fY29udHJvbCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBwYXJ0PVwiY29udHJvbFwiPjwvZGl2PmBcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBfLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzaXplJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUocGFyc2VJbnQobmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZS1pbmRleCc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleChwYXJzZUludChuZXdWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBuZXdWYWx1ZSAtIHRoaXMuX3NpemU7XG5cbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBkZWx0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5kaWNhdG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVkID0gdGhpcy5faW5kaWNhdG9ycy5zcGxpY2UoZGVsdGEsIE1hdGguYWJzKGRlbHRhKSwgLi4uYWRkZWQpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC5hcHBlbmQoLi4uYWRkZWQpO1xuICAgICAgICByZW1vdmVkLmZvckVhY2goaW5kaWNhdG9yID0+IGluZGljYXRvci5yZW1vdmUoKSk7XG5cbiAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc2l6ZScsIG5ld1ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWN0aXZlSW5kZXgobmV3SW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlSW5kZXggPT09IG5ld0luZGV4KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1t0aGlzLl9hY3RpdmVJbmRleF0/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IG5ld0luZGV4O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlLWluZGV4JywgbmV3SW5kZXgudG9TdHJpbmcoKSk7XG4gICAgfVxufSIsImltcG9ydCAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlSW5kaWNhdG9yIH0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcblxuZW51bSBTbmFwRGlyZWN0aW9uIHtcbiAgICBMZWZ0ID0gLTEsXG4gICAgUmlnaHQgPSAxXG59XG5cbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldycpXG5leHBvcnQgY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gKDI0cHggLyAyKSk7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbjpub3QoOmFjdGl2ZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgOmhvc3QoOmhvdmVyKSAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zbmFwRXZlbnQ6IEV2ZW50O1xuXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcGFuZWxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2xvdDogSFRNTFNsb3RFbGVtZW50O1xuICAgIHByaXZhdGUgX2xlZnRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHByaXZhdGUgX3JpZ2h0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcml2YXRlIF9pbmRpY2F0b3I6IFBhZ2VJbmRpY2F0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XG4gICAgfVxuXG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuXG4gICAgLyogRE9NICovXG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0U2xvdCgpIHtcbiAgICAgICAgdGhpcy5fc2xvdCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxlZnRCdG4oKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVmdEJ0bjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHJpZ2h0QnRuKCkge1xuICAgICAgICB0aGlzLl9yaWdodEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmlnaHRCdG47XG4gICAgfVxuICAgIFxuICAgIGdldCBpbmRpY2F0b3IoKSB7XG4gICAgICAgIHRoaXMuX2luZGljYXRvciA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3InKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGljYXRvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gbGVmdFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI5IDEyLjcxbDggOCAxLjQxLTEuNDEtNi4yOS02LjI5SDI0di0ySDMuNDFsNi4yOS02LjI5LTEuNDEtMS40MS04IDhhMSAxIDAgMCAwIDAgMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBMZWZ0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiByaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gdGhpcy5kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSBsZW5ndGggLSAxO1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uTGVmdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXNvbHZlSW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpbmRleCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdG4uZGlzYWJsZWQgPSBpbmRleCA9PT0gdGhpcy5fcGFuZWxDb3VudDtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc25hcEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHtzY3JvbGxMZWZ0OiBsZWZ0fSA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobGVmdCAvIHdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNuYXAoZGlyZWN0aW9uOiBTbmFwRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXG5leHBvcnQgY2xhc3MgU25hcFZpZXdQYW5lbCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gXG4gICAgfVxufSIsImltcG9ydCB7IGN1c3RvbUNvbXBvbmVudCwgQ3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5cbkBjdXN0b21Db21wb25lbnQoJ3dhbGxldC1jYXJkJylcbmV4cG9ydCBjbGFzcyBXYWxsZXRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoODBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyQTMyOTk7XG4gICAgICAgICAgICBpbnNldDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9iIHtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYlwiPjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQnO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvc25hcC12aWV3JztcbmltcG9ydCAnQC9jb21wb25lbnRzL2NhcmRzL2FjY291bnQtY2FyZCc7XG5pbXBvcnQgeyBTbmFwVmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9zbmFwLXZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdF9jb250YWluZXInKSBhcyBTbmFwVmlldztcblxuICAgIHRlc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc25hcCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGVzdENvbnRhaW5lci5hY3RpdmVJbmRleCk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=