/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/custom-component/dist/custom-component.js ***!
  \*******************************************************************************/
/***/ ((module) => {

/*! For license information please see custom-component.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={660:(t,e,r)=>{var n;!function(t){!function(e){var n="object"==typeof r.g?r.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===n.Reflect?n.Reflect=t:o=i(n.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,u={__proto__:[]}instanceof Array,a=!i&&!u,s={create:i?function(){return H(Object.create(null))}:u?function(){return H({__proto__:null})}:function(){return H({})},has:a?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:a?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),f="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,p=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,l=new(f||"function"!=typeof WeakMap?function(){var t=16,r=s.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+a()}while(s.has(r,t));return r[t]=!0,t}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:s.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function a(){var e,r=(e=t,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):u(new Uint8Array(e),e):u(new Array(e),e));r[6]=79&r[6]|64,r[8]=191&r[8]|128;for(var n="",o=0;o<t;++o){var i=r[o];4!==o&&6!==o&&8!==o||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}():WeakMap);function y(t,e,r){var n=l.get(t);if(j(n)){if(!r)return;n=new h,l.set(t,n)}var o=n.get(e);if(j(o)){if(!r)return;o=new h,n.set(e,o)}return o}function d(t,e,r){if(v(t,e,r))return!0;var n=I(e);return!T(n)&&d(t,n,r)}function v(t,e,r){var n=y(e,r,!1);return!j(n)&&!!n.has(t)}function _(t,e,r){if(v(t,e,r))return g(t,e,r);var n=I(e);return T(n)?void 0:_(t,n,r)}function g(t,e,r){var n=y(e,r,!1);if(!j(n))return n.get(t)}function w(t,e,r,n){y(r,n,!0).set(t,e)}function b(t,e){var r=m(t,e),n=I(t);if(null===n)return r;var o=b(n,e);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new p,u=[],a=0,s=r;a<s.length;a++){var c=s[a];i.has(c)||(i.add(c),u.push(c))}for(var f=0,h=o;f<h.length;f++)c=h[f],i.has(c)||(i.add(c),u.push(c));return u}function m(t,e){var r=[],n=y(t,e,!1);if(j(n))return r;for(var i=function(t){var e=C(t,o);if(!x(e))throw new TypeError;var r=e.call(t);if(!k(r))throw new TypeError;return r}(n.keys()),u=0;;){var a=A(i);if(!a)return r.length=u,r;var s=a.value;try{r[u]=s}catch(t){try{R(i)}finally{throw t}}u++}}function O(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function j(t){return void 0===t}function T(t){return null===t}function k(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(O(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",o=C(t,n);if(void 0!==o){var i=o.call(t,r);if(k(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(x(r)&&!k(o=r.call(t)))return o;if(x(n=t.valueOf)&&!k(o=n.call(t)))return o}else{var n;if(x(n=t.valueOf)&&!k(o=n.call(t)))return o;var o,i=t.toString;if(x(i)&&!k(o=i.call(t)))return o}throw new TypeError}(t,"default"===r?"number":r)}function S(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function M(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function x(t){return"function"==typeof t}function P(t){return"function"==typeof t}function C(t,e){var r=t[e];if(null!=r){if(!x(r))throw new TypeError;return r}}function A(t){var e=t.next();return!e.done&&e}function R(t){var e=t.return;e&&e.call(t)}function I(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o||o===t?e:o}function H(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,r,n){if(j(r)){if(!M(t))throw new TypeError;if(!P(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!j(n)&&!T(n)){if(!P(n))throw new TypeError;e=n}}return e}(t,e)}if(!M(t))throw new TypeError;if(!k(e))throw new TypeError;if(!k(n)&&!j(n)&&!T(n))throw new TypeError;return T(n)&&(n=void 0),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=(0,t[o])(e,r,n);if(!j(i)&&!T(i)){if(!k(i))throw new TypeError;n=i}}return n}(t,e,r=S(r),n)})),t("metadata",(function(t,e){return function(r,n){if(!k(r))throw new TypeError;if(!j(n)&&!function(t){switch(O(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}})),t("defineMetadata",(function(t,e,r,n){if(!k(r))throw new TypeError;return j(n)||(n=S(n)),w(t,e,r,n)})),t("hasMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),d(t,e,r)})),t("hasOwnMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),v(t,e,r)})),t("getMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),_(t,e,r)})),t("getOwnMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),g(t,e,r)})),t("getMetadataKeys",(function(t,e){if(!k(t))throw new TypeError;return j(e)||(e=S(e)),b(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!k(t))throw new TypeError;return j(e)||(e=S(e)),m(t,e)})),t("deleteMetadata",(function(t,e,r){if(!k(e))throw new TypeError;j(r)||(r=S(r));var n=y(e,r,!1);if(j(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=l.get(e);return o.delete(r),o.size>0||l.delete(e),!0}))}(o)}()}(n||(n={}))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t){return function(e){window.customElements.define(t,e)}}r.r(n),r.d(n,{CustomComponent:()=>c,OBSERVED_PROPERTIES:()=>i,customComponent:()=>t,property:()=>u,query:()=>s,state:()=>a}),r(660);const e=new class{from(t,e){if(t)switch(e.name){case"String":case"Number":return e(t);case"Boolean":return t&&"true"===t.toLowerCase();default:return JSON.parse(t)}}to(t){return"object"==typeof t?t&&JSON.stringify(t):t.toString()}};class o{}const i=Symbol("observed_properties");function u(t){return null!=t||(t=new o),function(r,n){var o,u,a,s;const c=`_${n}`,f=null!==(o=t.converter)&&void 0!==o?o:e;if(Object.defineProperty(r,n,{get:function(){const t=Reflect.getMetadata("design:type",this,n),e=f.from(this[c],t);return"object"==typeof e?function(t,e,r){return new Proxy(r,{set:(r,n,o)=>(r[n]=o,Array.isArray(o)&&"length"!==n||t.notifyStateHasChanged(e,o),!0)})}(this,n,e):e},set:function(t){const e=this[n];if(t!==e){const r=Reflect.getMetadata("design:type",this,n);this[c]=f.to(t,r),this.notifyStateHasChanged(n,e)}},enumerable:!0,configurable:!0}),null===(u=t.attribute)||void 0===u||u){const e=r.constructor,o=null!==(a=Reflect.getMetadata(i,e))&&void 0!==a?a:{},u=null!==(s=t.attribute)&&void 0!==s?s:n,c=Object.assign(Object.assign({},o),{[u.toString()]:n});Reflect.defineMetadata(i,c,e)}}}function a(t){return u(Object.assign(Object.assign({},t),{attribute:!1}))}function s(t){return function(e,r){Object.defineProperty(e,r,{get:function(){return this.shadowRoot.querySelector(t)},enumerable:!0,configurable:!0})}}class c extends HTMLElement{static get observedAttributes(){const t=Reflect.getMetadata(i,this);return t?Object.keys(t):[]}constructor(){super(),this._changes=new Map;const t=this.resolveTemplate();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}render(){throw new Error("Not implemented!")}attributeChangedCallback(t,e,r){const n=Reflect.getMetadata(i,this.constructor)[t],o=this[n];this[`_${n}`]=r,this.notifyStateHasChanged(n,o)}stateHasChanged(t){}resolveTemplate(){const t=this.constructor.name;return t in c._templates?c._templates[t]:this.createTemplate(t)}createTemplate(t){var e;const r=document.createElement("template"),n=Object.getPrototypeOf(this).constructor;return r.innerHTML=`<style>${null!==(e=n.styles)&&void 0!==e?e:""}</style>`,c._templates[t]=r,r}notifyStateHasChanged(t,e){clearTimeout(this._changeDebounce),this._changeDebounce=setTimeout((()=>{this.stateHasChanged(this._changes),this._changes.clear()}),50),this._changes.set(t,e)}}c._templates={}})(),n})()));
//# sourceMappingURL=custom-component.js.map

/***/ }),

/***/ "./src/styles/lab.scss":
/*!*****************************!*\
  !*** ./src/styles/lab.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/components/cards/account-card.ts":
/*!******************************************************!*\
  !*** ./src/scripts/components/cards/account-card.ts ***!
  \******************************************************/
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
                    <span class="amount">1.05K</span>
                    <span class="currrency">PHP</span>
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
            user-select: none;
        }

        :host(:active) {
            box-shadow: 0 0 0 3px var(--fill-accent-color);
        }

        .control {
            align-items: center;
            display: flex;
            gap: 32px;
        }

        .details {
            flex-grow: 1;
            overflow: hidden;
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

        .amount {
            font-family: 'JetBrains Mono', monospace;
            font-size: 21px;
            font-weight: 600;
            line-height: 0.8;
        }

        .currrency {
            color: var(--fill-accent-color-secondary);
            font-family: 'Manrope', sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 0.7;
        }
    `;
AccountCard = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('account-card')
], AccountCard);



/***/ }),

/***/ "./src/scripts/components/cards/index.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/cards/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountCard: () => (/* reexport safe */ _account_card__WEBPACK_IMPORTED_MODULE_0__.AccountCard)
/* harmony export */ });
/* harmony import */ var _account_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-card */ "./src/scripts/components/cards/account-card.ts");



/***/ }),

/***/ "./src/scripts/components/page-indicator.ts":
/*!**************************************************!*\
  !*** ./src/scripts/components/page-indicator.ts ***!
  \**************************************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageIndicator = class PageIndicator extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    constructor() {
        super(...arguments);
        this._indicators = [];
    }
    render() {
        return `<div class="control" part="control"></div>`;
    }
    stateHasChanged(changes) {
        for (const [key, value] of changes) {
            switch (key) {
                case 'size':
                    this.updateSize(value);
                    break;
                case 'activeIndex':
                    this.updateActiveIndex(value);
                    break;
            }
        }
    }
    updateSize(oldValue) {
        const delta = this.size - (oldValue !== null && oldValue !== void 0 ? oldValue : 0);
        if (delta === 0)
            return;
        const added = Array.from({ length: delta }, () => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            return indicator;
        });
        const removed = this._indicators.splice(delta, Math.abs(delta), ...added);
        this._control.append(...added);
        removed.forEach(indicator => indicator.remove());
    }
    updateActiveIndex(oldIndex) {
        var _a;
        if (this.activeIndex === oldIndex)
            return;
        (_a = this._indicators[oldIndex]) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        this._indicators[this.activeIndex].classList.add('active');
    }
};
PageIndicator.styles = `
        .control {
            display: flex;
            gap: 5px;
            justify-content: center;
        }

        .indicator {
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
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.query)('.control'),
    __metadata("design:type", HTMLDivElement)
], PageIndicator.prototype, "_control", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.property)(),
    __metadata("design:type", Number)
], PageIndicator.prototype, "size", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.property)({ attribute: 'active-index' }),
    __metadata("design:type", Number)
], PageIndicator.prototype, "activeIndex", void 0);
PageIndicator = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('page-indicator')
], PageIndicator);



/***/ }),

/***/ "./src/scripts/components/snap-view.ts":
/*!*********************************************!*\
  !*** ./src/scripts/components/snap-view.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapView: () => (/* binding */ SnapView),
/* harmony export */   SnapViewPanel: () => (/* binding */ SnapViewPanel)
/* harmony export */ });
/* harmony import */ var _components_page_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/page-indicator */ "./src/scripts/components/page-indicator.ts");
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
        this._defaultSlot.addEventListener('slotchange', () => {
            const { length } = this._defaultSlot.assignedElements();
            this._panelCount = length - 1;
            this._indicator.size = length;
            this._indicator.activeIndex = 0;
        });
        this._rightBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Right);
        });
        this._leftBtn.addEventListener('click', () => {
            this.snap(SnapDirection.Left);
        });
        this._container.addEventListener('scroll', () => {
            const index = this.resolveIndex();
            if (this._index === index)
                return;
            this._index = index;
            this._leftBtn.disabled = index <= 0;
            this._rightBtn.disabled = index === this._panelCount;
            this._indicator.activeIndex = index;
            this.dispatchEvent(this._snapEvent);
        });
    }
    resolveIndex() {
        const { scrollLeft } = this._container;
        const { width } = this._container.getBoundingClientRect();
        return Math.round(scrollLeft / width);
    }
    snap(direction) {
        const { width } = this._container.getBoundingClientRect();
        this._container.scrollTo({
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
            border: 1px solid rgba(0, 0, 0, 0.08);
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
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.query)('.container'),
    __metadata("design:type", HTMLDivElement)
], SnapView.prototype, "_container", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.query)('slot'),
    __metadata("design:type", HTMLSlotElement)
], SnapView.prototype, "_defaultSlot", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.query)('.left'),
    __metadata("design:type", HTMLButtonElement)
], SnapView.prototype, "_leftBtn", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.query)('.right'),
    __metadata("design:type", HTMLButtonElement)
], SnapView.prototype, "_rightBtn", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.query)('.indicator'),
    __metadata("design:type", _components_page_indicator__WEBPACK_IMPORTED_MODULE_0__.PageIndicator)
], SnapView.prototype, "_indicator", void 0);
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
/*!*********************************!*\
  !*** ./src/app/lab/view.php.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_lab_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/lab.scss */ "./src/styles/lab.scss");
/* harmony import */ var _components_snap_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/snap-view */ "./src/scripts/components/snap-view.ts");
/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/cards */ "./src/scripts/components/cards/index.ts");



document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container');
    testContainer.addEventListener('snap', () => {
        console.log(testContainer.activeIndex);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1QsOEJBQThCLHFFQUFhO0FBQzNDO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ0E7QUFDb0I7QUFDcEIsZ0RBQWdELDRFQUFlO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUN5Qjs7Ozs7OztVQ25NekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNNO0FBQ0o7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zdHlsZXMvbGFiLnNjc3M/YmY4YyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jYXJkcy9hY2NvdW50LWNhcmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3IudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc25hcC12aWV3LnRzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvYXBwL2xhYi92aWV3LnBocC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgRm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gcGxlYXNlIHNlZSBjdXN0b20tY29tcG9uZW50LmpzLkxJQ0VOU0UudHh0ICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkN1c3RvbUNvbXBvbmVudD1lKCk6dC5DdXN0b21Db21wb25lbnQ9ZSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIHQ9ezY2MDoodCxlLHIpPT57dmFyIG47IWZ1bmN0aW9uKHQpeyFmdW5jdGlvbihlKXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2Ygci5nP3IuZzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiB0aGlzP3RoaXM6RnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSxvPWkodCk7ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHRbcl0mJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSksZSYmZShyLG4pfX12b2lkIDA9PT1uLlJlZmxlY3Q/bi5SZWZsZWN0PXQ6bz1pKG4uUmVmbGVjdCxvKSxmdW5jdGlvbih0KXt2YXIgZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sLG49ciYmdm9pZCAwIT09U3ltYm9sLnRvUHJpbWl0aXZlP1N5bWJvbC50b1ByaW1pdGl2ZTpcIkBAdG9QcmltaXRpdmVcIixvPXImJnZvaWQgMCE9PVN5bWJvbC5pdGVyYXRvcj9TeW1ib2wuaXRlcmF0b3I6XCJAQGl0ZXJhdG9yXCIsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuY3JlYXRlLHU9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LGE9IWkmJiF1LHM9e2NyZWF0ZTppP2Z1bmN0aW9uKCl7cmV0dXJuIEgoT2JqZWN0LmNyZWF0ZShudWxsKSl9OnU/ZnVuY3Rpb24oKXtyZXR1cm4gSCh7X19wcm90b19fOm51bGx9KX06ZnVuY3Rpb24oKXtyZXR1cm4gSCh7fSl9LGhhczphP2Z1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbCh0LHIpfTpmdW5jdGlvbih0LGUpe3JldHVybiBlIGluIHR9LGdldDphP2Z1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbCh0LHIpP3Rbcl06dm9pZCAwfTpmdW5jdGlvbih0LGUpe3JldHVybiB0W2VdfX0sYz1PYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pLGY9XCJvYmplY3RcIj09dHlwZW9mIHByb2Nlc3MmJnByb2Nlc3MuZW52JiZcInRydWVcIj09PXByb2Nlc3MuZW52LlJFRkxFQ1RfTUVUQURBVEFfVVNFX01BUF9QT0xZRklMTCxoPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcHx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7dmFyIHQ9e30sZT1bXSxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUscil7dGhpcy5faW5kZXg9MCx0aGlzLl9rZXlzPXQsdGhpcy5fdmFsdWVzPWUsdGhpcy5fc2VsZWN0b3I9cn1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9pbmRleDtpZih0Pj0wJiZ0PHRoaXMuX2tleXMubGVuZ3RoKXt2YXIgcj10aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW3RdLHRoaXMuX3ZhbHVlc1t0XSk7cmV0dXJuIHQrMT49dGhpcy5fa2V5cy5sZW5ndGg/KHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSk6dGhpcy5faW5kZXgrKyx7dmFsdWU6cixkb25lOiExfX1yZXR1cm57dmFsdWU6dm9pZCAwLGRvbmU6ITB9fSx0LnByb3RvdHlwZS50aHJvdz1mdW5jdGlvbih0KXt0aHJvdyB0aGlzLl9pbmRleD49MCYmKHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSksdH0sdC5wcm90b3R5cGUucmV0dXJuPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbmRleD49MCYmKHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSkse3ZhbHVlOnQsZG9uZTohMH19LHR9KCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuX2tleXM9W10sdGhpcy5fdmFsdWVzPVtdLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGh9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9maW5kKHQsITEpPj0wfSxlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZmluZCh0LCExKTtyZXR1cm4gZT49MD90aGlzLl92YWx1ZXNbZV06dm9pZCAwfSxlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9maW5kKHQsITApO3JldHVybiB0aGlzLl92YWx1ZXNbcl09ZSx0aGlzfSxlLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcy5fZmluZChlLCExKTtpZihyPj0wKXtmb3IodmFyIG49dGhpcy5fa2V5cy5sZW5ndGgsbz1yKzE7bzxuO28rKyl0aGlzLl9rZXlzW28tMV09dGhpcy5fa2V5c1tvXSx0aGlzLl92YWx1ZXNbby0xXT10aGlzLl92YWx1ZXNbb107cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoLS0sdGhpcy5fdmFsdWVzLmxlbmd0aC0tLGU9PT10aGlzLl9jYWNoZUtleSYmKHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMiksITB9cmV0dXJuITF9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5cy5sZW5ndGg9MCx0aGlzLl92YWx1ZXMubGVuZ3RoPTAsdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfSxlLnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLG4pfSxlLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsaSl9LGUucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsdSl9LGUucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlLl9maW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuX2NhY2hlS2V5IT09dCYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5pbmRleE9mKHRoaXMuX2NhY2hlS2V5PXQpKSx0aGlzLl9jYWNoZUluZGV4PDAmJmUmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMubGVuZ3RoLHRoaXMuX2tleXMucHVzaCh0KSx0aGlzLl92YWx1ZXMucHVzaCh2b2lkIDApKSx0aGlzLl9jYWNoZUluZGV4fSxlfSgpO2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4gdH1mdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGV9ZnVuY3Rpb24gdSh0LGUpe3JldHVyblt0LGVdfX0oKTpNYXAscD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9tYXA9bmV3IGh9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5zaXplfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmhhcyh0KX0sdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuc2V0KHQsdCksdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuZGVsZXRlKHQpfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX21hcC5jbGVhcigpfSx0LnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5rZXlzKCl9LHQucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAudmFsdWVzKCl9LHQucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKX0sdC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdH0oKTpTZXQsbD1uZXcoZnx8XCJmdW5jdGlvblwiIT10eXBlb2YgV2Vha01hcD9mdW5jdGlvbigpe3ZhciB0PTE2LHI9cy5jcmVhdGUoKSxuPW8oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fa2V5PW8oKX1yZXR1cm4gdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJnMuaGFzKGUsdGhpcy5fa2V5KX0sdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWU/cy5nZXQoZSx0aGlzLl9rZXkpOnZvaWQgMH0sdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGkodCwhMClbdGhpcy5fa2V5XT1lLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZkZWxldGUgZVt0aGlzLl9rZXldfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleT1vKCl9LHR9KCk7ZnVuY3Rpb24gbygpe3ZhciB0O2Rve3Q9XCJAQFdlYWtNYXBAQFwiK2EoKX13aGlsZShzLmhhcyhyLHQpKTtyZXR1cm4gclt0XT0hMCx0fWZ1bmN0aW9uIGkodCxyKXtpZighZS5jYWxsKHQsbikpe2lmKCFyKXJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHt2YWx1ZTpzLmNyZWF0ZSgpfSl9cmV0dXJuIHRbbl19ZnVuY3Rpb24gdSh0LGUpe2Zvcih2YXIgcj0wO3I8ZTsrK3IpdFtyXT0yNTUqTWF0aC5yYW5kb20oKXwwO3JldHVybiB0fWZ1bmN0aW9uIGEoKXt2YXIgZSxyPShlPXQsXCJmdW5jdGlvblwiPT10eXBlb2YgVWludDhBcnJheT9cInVuZGVmaW5lZFwiIT10eXBlb2YgY3J5cHRvP2NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoZSkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtc0NyeXB0bz9tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoZSkpOnUobmV3IFVpbnQ4QXJyYXkoZSksZSk6dShuZXcgQXJyYXkoZSksZSkpO3JbNl09Nzkmcls2XXw2NCxyWzhdPTE5MSZyWzhdfDEyODtmb3IodmFyIG49XCJcIixvPTA7bzx0Oysrbyl7dmFyIGk9cltvXTs0IT09byYmNiE9PW8mJjghPT1vfHwobis9XCItXCIpLGk8MTYmJihuKz1cIjBcIiksbis9aS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKX1yZXR1cm4gbn19KCk6V2Vha01hcCk7ZnVuY3Rpb24geSh0LGUscil7dmFyIG49bC5nZXQodCk7aWYoaihuKSl7aWYoIXIpcmV0dXJuO249bmV3IGgsbC5zZXQodCxuKX12YXIgbz1uLmdldChlKTtpZihqKG8pKXtpZighcilyZXR1cm47bz1uZXcgaCxuLnNldChlLG8pfXJldHVybiBvfWZ1bmN0aW9uIGQodCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiEwO3ZhciBuPUkoZSk7cmV0dXJuIVQobikmJmQodCxuLHIpfWZ1bmN0aW9uIHYodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtyZXR1cm4haihuKSYmISFuLmhhcyh0KX1mdW5jdGlvbiBfKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4gZyh0LGUscik7dmFyIG49SShlKTtyZXR1cm4gVChuKT92b2lkIDA6Xyh0LG4scil9ZnVuY3Rpb24gZyh0LGUscil7dmFyIG49eShlLHIsITEpO2lmKCFqKG4pKXJldHVybiBuLmdldCh0KX1mdW5jdGlvbiB3KHQsZSxyLG4pe3kocixuLCEwKS5zZXQodCxlKX1mdW5jdGlvbiBiKHQsZSl7dmFyIHI9bSh0LGUpLG49SSh0KTtpZihudWxsPT09bilyZXR1cm4gcjt2YXIgbz1iKG4sZSk7aWYoby5sZW5ndGg8PTApcmV0dXJuIHI7aWYoci5sZW5ndGg8PTApcmV0dXJuIG87Zm9yKHZhciBpPW5ldyBwLHU9W10sYT0wLHM9cjthPHMubGVuZ3RoO2ErKyl7dmFyIGM9c1thXTtpLmhhcyhjKXx8KGkuYWRkKGMpLHUucHVzaChjKSl9Zm9yKHZhciBmPTAsaD1vO2Y8aC5sZW5ndGg7ZisrKWM9aFtmXSxpLmhhcyhjKXx8KGkuYWRkKGMpLHUucHVzaChjKSk7cmV0dXJuIHV9ZnVuY3Rpb24gbSh0LGUpe3ZhciByPVtdLG49eSh0LGUsITEpO2lmKGoobikpcmV0dXJuIHI7Zm9yKHZhciBpPWZ1bmN0aW9uKHQpe3ZhciBlPUModCxvKTtpZigheChlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciByPWUuY2FsbCh0KTtpZighayhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfShuLmtleXMoKSksdT0wOzspe3ZhciBhPUEoaSk7aWYoIWEpcmV0dXJuIHIubGVuZ3RoPXUscjt2YXIgcz1hLnZhbHVlO3RyeXtyW3VdPXN9Y2F0Y2godCl7dHJ5e1IoaSl9ZmluYWxseXt0aHJvdyB0fX11Kyt9fWZ1bmN0aW9uIE8odCl7aWYobnVsbD09PXQpcmV0dXJuIDE7c3dpdGNoKHR5cGVvZiB0KXtjYXNlXCJ1bmRlZmluZWRcIjpyZXR1cm4gMDtjYXNlXCJib29sZWFuXCI6cmV0dXJuIDI7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIDM7Y2FzZVwic3ltYm9sXCI6cmV0dXJuIDQ7Y2FzZVwibnVtYmVyXCI6cmV0dXJuIDU7Y2FzZVwib2JqZWN0XCI6cmV0dXJuIG51bGw9PT10PzE6NjtkZWZhdWx0OnJldHVybiA2fX1mdW5jdGlvbiBqKHQpe3JldHVybiB2b2lkIDA9PT10fWZ1bmN0aW9uIFQodCl7cmV0dXJuIG51bGw9PT10fWZ1bmN0aW9uIGsodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBFKHQsZSl7c3dpdGNoKE8odCkpe2Nhc2UgMDpjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OnJldHVybiB0fXZhciByPTM9PT1lP1wic3RyaW5nXCI6NT09PWU/XCJudW1iZXJcIjpcImRlZmF1bHRcIixvPUModCxuKTtpZih2b2lkIDAhPT1vKXt2YXIgaT1vLmNhbGwodCxyKTtpZihrKGkpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGl9cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJzdHJpbmdcIj09PWUpe3ZhciByPXQudG9TdHJpbmc7aWYoeChyKSYmIWsobz1yLmNhbGwodCkpKXJldHVybiBvO2lmKHgobj10LnZhbHVlT2YpJiYhayhvPW4uY2FsbCh0KSkpcmV0dXJuIG99ZWxzZXt2YXIgbjtpZih4KG49dC52YWx1ZU9mKSYmIWsobz1uLmNhbGwodCkpKXJldHVybiBvO3ZhciBvLGk9dC50b1N0cmluZztpZih4KGkpJiYhayhvPWkuY2FsbCh0KSkpcmV0dXJuIG99dGhyb3cgbmV3IFR5cGVFcnJvcn0odCxcImRlZmF1bHRcIj09PXI/XCJudW1iZXJcIjpyKX1mdW5jdGlvbiBTKHQpe3ZhciBlPUUodCwzKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZT9lOmZ1bmN0aW9uKHQpe3JldHVyblwiXCIrdH0oZSl9ZnVuY3Rpb24gTSh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KHQpOnQgaW5zdGFuY2VvZiBPYmplY3Q/dCBpbnN0YW5jZW9mIEFycmF5OlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1mdW5jdGlvbiB4KHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gUCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEModCxlKXt2YXIgcj10W2VdO2lmKG51bGwhPXIpe2lmKCF4KHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9fWZ1bmN0aW9uIEEodCl7dmFyIGU9dC5uZXh0KCk7cmV0dXJuIWUuZG9uZSYmZX1mdW5jdGlvbiBSKHQpe3ZhciBlPXQucmV0dXJuO2UmJmUuY2FsbCh0KX1mdW5jdGlvbiBJKHQpe3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0PT09YylyZXR1cm4gZTtpZihlIT09YylyZXR1cm4gZTt2YXIgcj10LnByb3RvdHlwZSxuPXImJk9iamVjdC5nZXRQcm90b3R5cGVPZihyKTtpZihudWxsPT1ufHxuPT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4gZTt2YXIgbz1uLmNvbnN0cnVjdG9yO3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIG98fG89PT10P2U6b31mdW5jdGlvbiBIKHQpe3JldHVybiB0Ll9fPXZvaWQgMCxkZWxldGUgdC5fXyx0fXQoXCJkZWNvcmF0ZVwiLChmdW5jdGlvbih0LGUscixuKXtpZihqKHIpKXtpZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFQKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQubGVuZ3RoLTE7cj49MDstLXIpe3ZhciBuPSgwLHRbcl0pKGUpO2lmKCFqKG4pJiYhVChuKSl7aWYoIVAobikpdGhyb3cgbmV3IFR5cGVFcnJvcjtlPW59fXJldHVybiBlfSh0LGUpfWlmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighayhuKSYmIWoobikmJiFUKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQobikmJihuPXZvaWQgMCksZnVuY3Rpb24odCxlLHIsbil7Zm9yKHZhciBvPXQubGVuZ3RoLTE7bz49MDstLW8pe3ZhciBpPSgwLHRbb10pKGUscixuKTtpZighaihpKSYmIVQoaSkpe2lmKCFrKGkpKXRocm93IG5ldyBUeXBlRXJyb3I7bj1pfX1yZXR1cm4gbn0odCxlLHI9UyhyKSxuKX0pKSx0KFwibWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtpZighayhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFqKG4pJiYhZnVuY3Rpb24odCl7c3dpdGNoKE8odCkpe2Nhc2UgMzpjYXNlIDQ6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19KG4pKXRocm93IG5ldyBUeXBlRXJyb3I7dyh0LGUscixuKX19KSksdChcImRlZmluZU1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoobil8fChuPVMobikpLHcodCxlLHIsbil9KSksdChcImhhc01ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSxkKHQsZSxyKX0pKSx0KFwiaGFzT3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLHYodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksXyh0LGUscil9KSksdChcImdldE93bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSxnKHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWsodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihlKXx8KGU9UyhlKSksYih0LGUpfSkpLHQoXCJnZXRPd25NZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighayh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKGUpfHwoZT1TKGUpKSxtKHQsZSl9KSksdChcImRlbGV0ZU1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO2oocil8fChyPVMocikpO3ZhciBuPXkoZSxyLCExKTtpZihqKG4pKXJldHVybiExO2lmKCFuLmRlbGV0ZSh0KSlyZXR1cm4hMTtpZihuLnNpemU+MClyZXR1cm4hMDt2YXIgbz1sLmdldChlKTtyZXR1cm4gby5kZWxldGUociksby5zaXplPjB8fGwuZGVsZXRlKGUpLCEwfSkpfShvKX0oKX0obnx8KG49e30pKX19LGU9e307ZnVuY3Rpb24gcihuKXt2YXIgbz1lW25dO2lmKHZvaWQgMCE9PW8pcmV0dXJuIG8uZXhwb3J0czt2YXIgaT1lW25dPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtuXShpLGkuZXhwb3J0cyxyKSxpLmV4cG9ydHN9ci5kPSh0LGUpPT57Zm9yKHZhciBuIGluIGUpci5vKGUsbikmJiFyLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZVtuXX0pfSxyLmc9ZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsVGhpcylyZXR1cm4gZ2xvYmFsVGhpczt0cnl7cmV0dXJuIHRoaXN8fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2godCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdylyZXR1cm4gd2luZG93fX0oKSxyLm89KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLHIucj10PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG49e307cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LGUpfX1yLnIobiksci5kKG4se0N1c3RvbUNvbXBvbmVudDooKT0+YyxPQlNFUlZFRF9QUk9QRVJUSUVTOigpPT5pLGN1c3RvbUNvbXBvbmVudDooKT0+dCxwcm9wZXJ0eTooKT0+dSxxdWVyeTooKT0+cyxzdGF0ZTooKT0+YX0pLHIoNjYwKTtjb25zdCBlPW5ldyBjbGFzc3tmcm9tKHQsZSl7aWYodClzd2l0Y2goZS5uYW1lKXtjYXNlXCJTdHJpbmdcIjpjYXNlXCJOdW1iZXJcIjpyZXR1cm4gZSh0KTtjYXNlXCJCb29sZWFuXCI6cmV0dXJuIHQmJlwidHJ1ZVwiPT09dC50b0xvd2VyQ2FzZSgpO2RlZmF1bHQ6cmV0dXJuIEpTT04ucGFyc2UodCl9fXRvKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P3QmJkpTT04uc3RyaW5naWZ5KHQpOnQudG9TdHJpbmcoKX19O2NsYXNzIG97fWNvbnN0IGk9U3ltYm9sKFwib2JzZXJ2ZWRfcHJvcGVydGllc1wiKTtmdW5jdGlvbiB1KHQpe3JldHVybiBudWxsIT10fHwodD1uZXcgbyksZnVuY3Rpb24ocixuKXt2YXIgbyx1LGEscztjb25zdCBjPWBfJHtufWAsZj1udWxsIT09KG89dC5jb252ZXJ0ZXIpJiZ2b2lkIDAhPT1vP286ZTtpZihPYmplY3QuZGVmaW5lUHJvcGVydHkocixuLHtnZXQ6ZnVuY3Rpb24oKXtjb25zdCB0PVJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLHRoaXMsbiksZT1mLmZyb20odGhpc1tjXSx0KTtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUscil7cmV0dXJuIG5ldyBQcm94eShyLHtzZXQ6KHIsbixvKT0+KHJbbl09byxBcnJheS5pc0FycmF5KG8pJiZcImxlbmd0aFwiIT09bnx8dC5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQoZSxvKSwhMCl9KX0odGhpcyxuLGUpOmV9LHNldDpmdW5jdGlvbih0KXtjb25zdCBlPXRoaXNbbl07aWYodCE9PWUpe2NvbnN0IHI9UmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsdGhpcyxuKTt0aGlzW2NdPWYudG8odCxyKSx0aGlzLm5vdGlmeVN0YXRlSGFzQ2hhbmdlZChuLGUpfX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxudWxsPT09KHU9dC5hdHRyaWJ1dGUpfHx2b2lkIDA9PT11fHx1KXtjb25zdCBlPXIuY29uc3RydWN0b3Isbz1udWxsIT09KGE9UmVmbGVjdC5nZXRNZXRhZGF0YShpLGUpKSYmdm9pZCAwIT09YT9hOnt9LHU9bnVsbCE9PShzPXQuYXR0cmlidXRlKSYmdm9pZCAwIT09cz9zOm4sYz1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbykse1t1LnRvU3RyaW5nKCldOm59KTtSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGksYyxlKX19fWZ1bmN0aW9uIGEodCl7cmV0dXJuIHUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHthdHRyaWJ1dGU6ITF9KSl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IodCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9fWNsYXNzIGMgZXh0ZW5kcyBIVE1MRWxlbWVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe2NvbnN0IHQ9UmVmbGVjdC5nZXRNZXRhZGF0YShpLHRoaXMpO3JldHVybiB0P09iamVjdC5rZXlzKHQpOltdfWNvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl9jaGFuZ2VzPW5ldyBNYXA7Y29uc3QgdD10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHQuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0LGUscil7Y29uc3Qgbj1SZWZsZWN0LmdldE1ldGFkYXRhKGksdGhpcy5jb25zdHJ1Y3RvcilbdF0sbz10aGlzW25dO3RoaXNbYF8ke259YF09cix0aGlzLm5vdGlmeVN0YXRlSGFzQ2hhbmdlZChuLG8pfXN0YXRlSGFzQ2hhbmdlZCh0KXt9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgdD10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIHQgaW4gYy5fdGVtcGxhdGVzP2MuX3RlbXBsYXRlc1t0XTp0aGlzLmNyZWF0ZVRlbXBsYXRlKHQpfWNyZWF0ZVRlbXBsYXRlKHQpe3ZhciBlO2NvbnN0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiByLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShlPW4uc3R5bGVzKSYmdm9pZCAwIT09ZT9lOlwiXCJ9PC9zdHlsZT5gLGMuX3RlbXBsYXRlc1t0XT1yLHJ9bm90aWZ5U3RhdGVIYXNDaGFuZ2VkKHQsZSl7Y2xlYXJUaW1lb3V0KHRoaXMuX2NoYW5nZURlYm91bmNlKSx0aGlzLl9jaGFuZ2VEZWJvdW5jZT1zZXRUaW1lb3V0KCgoKT0+e3RoaXMuc3RhdGVIYXNDaGFuZ2VkKHRoaXMuX2NoYW5nZXMpLHRoaXMuX2NoYW5nZXMuY2xlYXIoKX0pLDUwKSx0aGlzLl9jaGFuZ2VzLnNldCh0LGUpfX1jLl90ZW1wbGF0ZXM9e319KSgpLG59KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tY29tcG9uZW50LmpzLm1hcCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgQWNjb3VudENhcmQgPSBjbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+QSB2ZXJ5IGxvbmcgdGV4dCB0aGF0IHNob3VsZCBiZSBlbGxpcHNlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJ0aXRsZVwiPkNhc2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWxhbmNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW1vdW50XCI+MS4wNUs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VycnJlbmN5XCI+UEhQPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn07XG5BY2NvdW50Q2FyZC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE2MTI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCg6YWN0aXZlKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZmlsbC1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDAuNzUpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbGFuY2Uge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJyZW5jeSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC1hY2NlbnQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNztcbiAgICAgICAgfVxuICAgIGA7XG5BY2NvdW50Q2FyZCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnYWNjb3VudC1jYXJkJylcbl0sIEFjY291bnRDYXJkKTtcbmV4cG9ydCB7IEFjY291bnRDYXJkIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2FjY291bnQtY2FyZCc7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQsIHByb3BlcnR5LCBxdWVyeSwgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBQYWdlSW5kaWNhdG9yID0gY2xhc3MgUGFnZUluZGljYXRvciBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnMgPSBbXTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb250cm9sXCIgcGFydD1cImNvbnRyb2xcIj48L2Rpdj5gO1xuICAgIH1cbiAgICBzdGF0ZUhhc0NoYW5nZWQoY2hhbmdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NpemUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhY3RpdmVJbmRleCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlSW5kZXgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTaXplKG9sZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGhpcy5zaXplIC0gKG9sZFZhbHVlICE9PSBudWxsICYmIG9sZFZhbHVlICE9PSB2b2lkIDAgPyBvbGRWYWx1ZSA6IDApO1xuICAgICAgICBpZiAoZGVsdGEgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLl9pbmRpY2F0b3JzLnNwbGljZShkZWx0YSwgTWF0aC5hYnMoZGVsdGEpLCAuLi5hZGRlZCk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wuYXBwZW5kKC4uLmFkZGVkKTtcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVJbmRleChvbGRJbmRleCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSBvbGRJbmRleClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKF9hID0gdGhpcy5faW5kaWNhdG9yc1tvbGRJbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1t0aGlzLmFjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59O1xuUGFnZUluZGljYXRvci5zdHlsZXMgPSBgXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAgMCAwIC8gMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3IuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgYDtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuY29udHJvbCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MRGl2RWxlbWVudClcbl0sIFBhZ2VJbmRpY2F0b3IucHJvdG90eXBlLCBcIl9jb250cm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJzaXplXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FjdGl2ZS1pbmRleCcgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbl0sIFBhZ2VJbmRpY2F0b3IucHJvdG90eXBlLCBcImFjdGl2ZUluZGV4XCIsIHZvaWQgMCk7XG5QYWdlSW5kaWNhdG9yID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdwYWdlLWluZGljYXRvcicpXG5dLCBQYWdlSW5kaWNhdG9yKTtcbmV4cG9ydCB7IFBhZ2VJbmRpY2F0b3IgfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5pbXBvcnQgeyBQYWdlSW5kaWNhdG9yIH0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBxdWVyeSB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xudmFyIFNuYXBEaXJlY3Rpb247XG4oZnVuY3Rpb24gKFNuYXBEaXJlY3Rpb24pIHtcbiAgICBTbmFwRGlyZWN0aW9uW1NuYXBEaXJlY3Rpb25bXCJMZWZ0XCJdID0gLTFdID0gXCJMZWZ0XCI7XG4gICAgU25hcERpcmVjdGlvbltTbmFwRGlyZWN0aW9uW1wiUmlnaHRcIl0gPSAxXSA9IFwiUmlnaHRcIjtcbn0pKFNuYXBEaXJlY3Rpb24gfHwgKFNuYXBEaXJlY3Rpb24gPSB7fSkpO1xubGV0IFNuYXBWaWV3ID0gY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9zbmFwRXZlbnQgPSBuZXcgRXZlbnQoJ3NuYXAnKTtcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4yOSAxMi43MWw4IDggMS40MS0xLjQxLTYuMjktNi4yOUgyNHYtMkgzLjQxbDYuMjktNi4yOS0xLjQxLTEuNDEtOCA4YTEgMSAwIDAgMCAwIDEuNDF6XCIgZGF0YS1uYW1lPVwiQXJyb3cgTGVmdFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzEgMTEuMjlsLTgtOC0xLjQxIDEuNDEgNi4yOSA2LjI5SDB2MmgyMC41OWwtNi4yOSA2LjI5IDEuNDEgMS40MSA4LThhMSAxIDAgMCAwIDAtMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBSaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwYWdlLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHBhcnQ9XCJpbmRpY2F0b3JcIj48L3BhZ2UtaW5kaWNhdG9yPlxuICAgICAgICBgO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzLl9kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5zaXplID0gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uUmlnaHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLkxlZnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXNvbHZlSW5kZXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gaW5kZXgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRCdG4uZGlzYWJsZWQgPSBpbmRleCA8PSAwO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRCdG4uZGlzYWJsZWQgPSBpbmRleCA9PT0gdGhpcy5fcGFuZWxDb3VudDtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX3NuYXBFdmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXNvbHZlSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gdGhpcy5fY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNjcm9sbExlZnQgLyB3aWR0aCk7XG4gICAgfVxuICAgIHNuYXAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl9pbmRleCArIGRpcmVjdGlvbikgKiB3aWR0aCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuU25hcFZpZXcuc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24gc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tZmlsbC1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24ubGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24ucmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uOm5vdCg6YWN0aXZlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICA6aG9zdCg6aG92ZXIpIC5zbmFwQnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuY29udGFpbmVyJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxEaXZFbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9jb250YWluZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCdzbG90JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxTbG90RWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfZGVmYXVsdFNsb3RcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcubGVmdCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MQnV0dG9uRWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfbGVmdEJ0blwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5yaWdodCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MQnV0dG9uRWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfcmlnaHRCdG5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuaW5kaWNhdG9yJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFBhZ2VJbmRpY2F0b3IpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2luZGljYXRvclwiLCB2b2lkIDApO1xuU25hcFZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldycpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNuYXBWaWV3KTtcbmV4cG9ydCB7IFNuYXBWaWV3IH07XG5sZXQgU25hcFZpZXdQYW5lbCA9IGNsYXNzIFNuYXBWaWV3UGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8c2xvdD48L3Nsb3Q+YDtcbiAgICB9XG59O1xuU25hcFZpZXdQYW5lbC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgYDtcblNuYXBWaWV3UGFuZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXG5dLCBTbmFwVmlld1BhbmVsKTtcbmV4cG9ydCB7IFNuYXBWaWV3UGFuZWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0BzdHlsZXMvbGFiLnNjc3MnO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvc25hcC12aWV3JztcbmltcG9ydCAnQC9jb21wb25lbnRzL2NhcmRzJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdGVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0X2NvbnRhaW5lcicpO1xuICAgIHRlc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc25hcCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGVzdENvbnRhaW5lci5hY3RpdmVJbmRleCk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==