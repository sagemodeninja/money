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
            background-color: rgba(153 153 153 / 0.443);
            border-radius: 4px;
            display: block;
            height: 7px;
            transition: width 0.25s;
            transition-timing-function: ease;
            width: 7px;
        }

        .indicator.active {
            background-color: rgb(153 153 153);
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
            position: absolute;
            top: calc(50% - (24px / 2));
            width: 24px;
        }

        .snapButton.left {
            left: 12px;
        }

        .snapButton.right {
            right: 12px;
        }

        .snapButton:not(:disabled):active {
            height: 22px;
            margin: 1px;
            width: 22px;
        }

        .snapButton:not(:active) {
            transition: all 0.25s;
        }

        .snapButton:disabled {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            opacity: 0.8;
        }

        .snapButton:disabled svg path {
            fill: #888;
        }

        .indicator {
            bottom: 16px;
            position: absolute;
            width: 100%;
        }
        
        @media only screen and (min-width: 768px) {
            .snapButton {
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


document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container');
    testContainer.addEventListener('snap', () => {
        console.log(testContainer.activeIndex);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRzVFLElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVcsU0FBUSw0RUFBZTtJQStCcEMsTUFBTTtRQUNULE9BQU87OztTQUdOLENBQUM7SUFDTixDQUFDOztBQW5DTSxpQkFBTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJmLENBQUM7QUE3Qk8sVUFBVTtJQUR0QixnRkFBZSxDQUFDLGFBQWEsQ0FBQztHQUNsQixVQUFVLENBcUN0Qjs7Ozs7Ozs7VUN4Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFHaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFhLENBQUM7SUFFNUUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9wYWdlLWluZGljYXRvci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3NuYXAtdmlldy50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3ZpZXdzL2xhYi12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PXQoKTplLkN1c3RvbUNvbXBvbmVudD10KCl9KHNlbGYsKCgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDoodCxvKT0+e2Zvcih2YXIgbiBpbiBvKWUubyhvLG4pJiYhZS5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0Om9bbl19KX0sbzooZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LHQ9e307ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZnVuY3Rpb24odCl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShlLHQpfX1mdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbih0LG8pe2xldCBuPXRbb107T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG59LHNldDpmdW5jdGlvbih0KXtjb25zdCByPW47bj10LHQhPXImJih0aGlzLnNldEF0dHJpYnV0ZShudWxsIT1lP2U6byxuKSx0aGlzLnN0YXRlSGFzQ2hhbmdlZCgpKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0Lm9ic2VydmVBdHRyaWJ1dGUobyxudWxsIT1lP2U6byl9fWUucih0KSxlLmQodCx7Q3VzdG9tQ29tcG9uZW50OigpPT5yLGN1c3RvbUNvbXBvbmVudDooKT0+byxwYXJhbWV0ZXI6KCk9Pm59KTtjbGFzcyByIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5yZW5kZXJET00oKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSx0LG8pe31nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlckRPTSgpe2NvbnN0IGU9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MPW51bGwsdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGUuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgZT10aGlzLmxvY2FsTmFtZTtyZXR1cm4gZSBpbiByLl90ZW1wbGF0ZXM/ci5fdGVtcGxhdGVzW2VdOnRoaXMuY3JlYXRlVGVtcGxhdGUoZSl9Y3JlYXRlVGVtcGxhdGUoZSl7dmFyIHQ7Y29uc3Qgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIG8uaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KHQ9bi5zdHlsZXMpJiZ2b2lkIDAhPT10P3Q6XCJcIn08L3N0eWxlPmAsci5fdGVtcGxhdGVzW2VdPW8sb319cmV0dXJuIHIuX3RlbXBsYXRlcz17fSx0fSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxyXG5leHBvcnQgY2xhc3MgUGFnZUluZGljYXRvciBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIC5jb250cm9sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzIDE1MyAxNTMgLyAwLjQ0Myk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMgMTUzIDE1Myk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gWydzaXplJywgJ2FjdGl2ZS1pbmRleCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luZGljYXRvcnM6IEhUTUxTcGFuRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2FjdGl2ZUluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgLyogQXR0cmlidXRlcyAqL1xyXG4gICAgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFjdGl2ZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBjb250cm9sKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2wgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIHBhcnQ9XCJjb250cm9sXCI+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIF8sIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdzaXplJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShwYXJzZUludChuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZS1pbmRleCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHBhcnNlSW50KG5ld1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IG5ld1ZhbHVlIC0gdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuX2luZGljYXRvcnMuc3BsaWNlKGRlbHRhLCBNYXRoLmFicyhkZWx0YSksIC4uLmFkZGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmFwcGVuZCguLi5hZGRlZCk7XHJcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9zaXplID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXdWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlSW5kZXggPT09IG5ld0luZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5fYWN0aXZlSW5kZXhdPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlLWluZGV4JywgbmV3SW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XHJcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VJbmRpY2F0b3IgfSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xyXG5cclxuZW51bSBTbmFwRGlyZWN0aW9uIHtcclxuICAgIExlZnQgPSAtMSxcclxuICAgIFJpZ2h0ID0gMVxyXG59XHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXcnKVxyXG5leHBvcnQgY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbi5sZWZ0IHtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOm5vdCg6YWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOmRpc2FibGVkIHN2ZyBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogIzg4ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnNuYXBCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NuYXBFdmVudDogRXZlbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9wYW5lbENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9zbG90OiBIVE1MU2xvdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9sZWZ0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3JpZ2h0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luZGljYXRvcjogUGFnZUluZGljYXRvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3NuYXBFdmVudCA9IG5ldyBFdmVudCgnc25hcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRE9NICovXHJcbiAgICBnZXQgY29udGFpbmVyKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0U2xvdCgpIHtcclxuICAgICAgICB0aGlzLl9zbG90ID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZWZ0QnRuKCkge1xyXG4gICAgICAgIHRoaXMuX2xlZnRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZWZ0QnRuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgcmlnaHRCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5fcmlnaHRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmlnaHRCdG47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBpbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmluZGljYXRvcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2F0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiBsZWZ0XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI5IDEyLjcxbDggOCAxLjQxLTEuNDEtNi4yOS02LjI5SDI0di0ySDMuNDFsNi4yOS02LjI5LTEuNDEtMS40MS04IDhhMSAxIDAgMCAwIDAgMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBMZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzEgMTEuMjlsLTgtOC0xLjQxIDEuNDEgNi4yOSA2LjI5SDB2MmgyMC41OWwtNi4yOSA2LjI5IDEuNDEgMS40MSA4LThhMSAxIDAgMCAwIDAtMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBSaWdodFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwYWdlLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHBhcnQ9XCJpbmRpY2F0b3JcIj48L3BhZ2UtaW5kaWNhdG9yPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gdGhpcy5kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gbGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlc29sdmVJbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpbmRleCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ0bi5kaXNhYmxlZCA9IGluZGV4ID09PSB0aGlzLl9wYW5lbENvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc25hcEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVJbmRleCgpIHtcclxuICAgICAgICBjb25zdCB7c2Nyb2xsTGVmdDogbGVmdH0gPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGxlZnQgLyB3aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbmFwKGRpcmVjdGlvbjogU25hcERpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXHJcbmV4cG9ydCBjbGFzcyBTbmFwVmlld1BhbmVsIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjdXN0b21Db21wb25lbnQsIEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgnd2FsbGV0LWNhcmQnKVxyXG5leHBvcnQgY2xhc3MgV2FsbGV0Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRyb2wge1xyXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoODBweCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJBMzI5OTtcclxuICAgICAgICAgICAgaW5zZXQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvYiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig0MHB4KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYlwiPjwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQnO1xyXG5pbXBvcnQgJ0AvY29tcG9uZW50cy9zbmFwLXZpZXcnO1xyXG5pbXBvcnQgeyBTbmFwVmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9zbmFwLXZpZXcnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHRlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdF9jb250YWluZXInKSBhcyBTbmFwVmlldztcclxuXHJcbiAgICB0ZXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NuYXAnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGVzdENvbnRhaW5lci5hY3RpdmVJbmRleCk7XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9