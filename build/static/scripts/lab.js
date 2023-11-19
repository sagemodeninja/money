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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3NjcmlwdHMvbGFiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsZUFBZSxLQUFpRCxvQkFBb0IsQ0FBNkgsQ0FBQyxpQkFBaUIsT0FBTyxjQUFjLE1BQU0sYUFBYSxhQUFhLDJHQUEyRyxZQUFZLGdCQUFnQixxQkFBcUIsb0RBQW9ELG9DQUFvQyxhQUFhLDREQUE0RCx1T0FBdU8sYUFBYSw2QkFBNkIsb0JBQW9CLDhCQUE4QixjQUFjLFVBQVUsZUFBZSxFQUFFLFlBQVksV0FBVyxFQUFFLHFCQUFxQixtQkFBbUIsZUFBZSxjQUFjLHFCQUFxQiwrQkFBK0IsZUFBZSxhQUFhLG9OQUFvTixRQUFRLG1CQUFtQixrQkFBa0IsMkRBQTJELDRDQUE0QyxZQUFZLDJCQUEyQixZQUFZLDZCQUE2QixrQkFBa0IsOEJBQThCLG9EQUFvRCwwRkFBMEYsaUJBQWlCLE9BQU8sc0JBQXNCLCtCQUErQixxRUFBcUUsZ0NBQWdDLHFFQUFxRSxpQkFBaUIsR0FBRyxHQUFHLGtCQUFrQixhQUFhLG1FQUFtRSxpREFBaUQsZUFBZSx5QkFBeUIsK0JBQStCLDhCQUE4QiwyQkFBMkIsNkJBQTZCLHVCQUF1QixtQ0FBbUMsK0JBQStCLHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLHVCQUF1QixTQUFTLGtDQUFrQyxJQUFJLG9FQUFvRSwrR0FBK0csU0FBUyw4QkFBOEIsK0VBQStFLDZCQUE2Qix3Q0FBd0MsK0JBQStCLHdDQUF3QyxnQ0FBZ0Msd0NBQXdDLHNDQUFzQyxzQkFBc0IsMkJBQTJCLHNCQUFzQixpQ0FBaUMsNk1BQTZNLEdBQUcsR0FBRyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsYUFBYSx3RkFBd0YsYUFBYSxnQkFBZ0IsaURBQWlELGVBQWUsc0JBQXNCLCtCQUErQiw4QkFBOEIsd0JBQXdCLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLDJCQUEyQiw4QkFBOEIsa0JBQWtCLDZCQUE2Qix3QkFBd0IsK0JBQStCLDBCQUEwQixnQ0FBZ0MsMkJBQTJCLHNDQUFzQyxtQkFBbUIsMkJBQTJCLG1CQUFtQixHQUFHLHNEQUFzRCw0QkFBNEIsa0JBQWtCLGFBQWEsY0FBYyxtQ0FBbUMsY0FBYyxzQ0FBc0MsNkJBQTZCLGNBQWMsNENBQTRDLCtCQUErQixpQ0FBaUMsZ0NBQWdDLGNBQWMsdUNBQXVDLDhCQUE4QixjQUFjLEdBQUcsR0FBRyxhQUFhLE1BQU0sR0FBRyxvQkFBb0Isa0JBQWtCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGFBQWEsMkJBQTJCLGlCQUFpQixFQUFFLFlBQVksZ0JBQWdCLFlBQVksSUFBSSw2QkFBNkIsU0FBUyxhQUFhLG1PQUFtTyxrQ0FBa0MsaUJBQWlCLElBQUksS0FBSyxXQUFXLDZFQUE2RSxVQUFVLFlBQVksa0JBQWtCLGVBQWUsU0FBUyxhQUFhLG1CQUFtQixlQUFlLFNBQVMsYUFBYSxtQkFBbUIsU0FBUyxrQkFBa0IscUJBQXFCLFdBQVcsc0JBQXNCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLGtCQUFrQiw0QkFBNEIsV0FBVyw0QkFBNEIsa0JBQWtCLGdCQUFnQix5QkFBeUIsb0JBQW9CLG1CQUFtQixnQkFBZ0Isb0JBQW9CLHFCQUFxQixhQUFhLHdCQUF3Qix3QkFBd0IsNkJBQTZCLFdBQVcsS0FBSyxXQUFXLCtCQUErQixnQkFBZ0IsV0FBVywwQ0FBMEMsU0FBUyxnQkFBZ0IscUJBQXFCLGlCQUFpQixzQkFBc0IsYUFBYSw2QkFBNkIsZ0JBQWdCLDZCQUE2QixTQUFTLGdCQUFnQixFQUFFLFdBQVcsMEJBQTBCLGNBQWMsSUFBSSxPQUFPLFNBQVMsSUFBSSxLQUFLLFFBQVEsU0FBUyxLQUFLLGNBQWMscUJBQXFCLGlCQUFpQix5QkFBeUIsdUJBQXVCLHNCQUFzQixzQkFBc0Isc0JBQXNCLGlDQUFpQyxrQkFBa0IsY0FBYyxrQkFBa0IsY0FBYyxnQkFBZ0IsY0FBYyx1REFBdUQsZ0JBQWdCLGFBQWEsbURBQW1ELHVEQUF1RCxlQUFlLGtCQUFrQiw0QkFBNEIsU0FBUyxxQkFBcUIsaUJBQWlCLGlCQUFpQixrQ0FBa0MsNENBQTRDLEtBQUssTUFBTSw0Q0FBNEMsbUJBQW1CLGtDQUFrQyxvQkFBb0IsNkJBQTZCLGNBQWMsYUFBYSx1Q0FBdUMsV0FBVyxJQUFJLGNBQWMsa0lBQWtJLGNBQWMsMkJBQTJCLGNBQWMsMkJBQTJCLGdCQUFnQixXQUFXLFlBQVksNkJBQTZCLFVBQVUsY0FBYyxlQUFlLGlCQUFpQixjQUFjLGVBQWUsYUFBYSxjQUFjLCtCQUErQix3Q0FBd0Msa0JBQWtCLGdEQUFnRCwwQ0FBMEMsb0JBQW9CLHNDQUFzQyxjQUFjLGlDQUFpQyxnQ0FBZ0MsU0FBUyw2QkFBNkIsNkJBQTZCLHFCQUFxQixxQkFBcUIsS0FBSyxLQUFLLGtCQUFrQixpQkFBaUIsNkJBQTZCLEtBQUssU0FBUyxNQUFNLDZCQUE2Qiw2QkFBNkIsMkNBQTJDLDBDQUEwQyxxQkFBcUIsS0FBSyxLQUFLLHNCQUFzQixpQkFBaUIsNkJBQTZCLEtBQUssU0FBUyxlQUFlLCtCQUErQixxQkFBcUIsNkJBQTZCLHVCQUF1QixhQUFhLHVCQUF1QixrQkFBa0Isd0JBQXdCLFlBQVkseUNBQXlDLDZCQUE2QixpQ0FBaUMsb0NBQW9DLDZCQUE2QiwrQkFBK0IsdUNBQXVDLDZCQUE2QiwrQkFBK0Isb0NBQW9DLDZCQUE2QiwrQkFBK0IsdUNBQXVDLDZCQUE2QiwrQkFBK0Isc0NBQXNDLDZCQUE2Qiw2QkFBNkIseUNBQXlDLDZCQUE2Qiw2QkFBNkIsdUNBQXVDLDZCQUE2QixlQUFlLGdCQUFnQixpQkFBaUIseUJBQXlCLHFCQUFxQixlQUFlLDRDQUE0QyxHQUFHLElBQUksR0FBRyxTQUFTLElBQUksTUFBTSxjQUFjLFdBQVcsK0JBQStCLFlBQVksWUFBWSxxQ0FBcUMsWUFBWSwrREFBK0QsdUJBQXVCLEVBQUUsZ0JBQWdCLGlEQUFpRCxJQUFJLDJDQUEyQyxTQUFTLDBDQUEwQyxnRUFBZ0UsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsR0FBRyxTQUFTLFlBQVksYUFBYSxjQUFjLG1CQUFtQixtQ0FBbUMsY0FBYyw2R0FBNkcsU0FBUyxrQkFBa0IsVUFBVSxvQkFBb0Isc0NBQXNDLGlEQUFpRCw4QkFBOEIsTUFBTSw2REFBNkQsU0FBUyxzQ0FBc0MsY0FBYyx3Q0FBd0MsWUFBWSxZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixlQUFlLHNFQUFzRSx5Q0FBeUMsb0JBQW9CLHNGQUFzRixFQUFFLGFBQWEsaUJBQWlCLGdCQUFnQixVQUFVLGtEQUFrRCxtREFBbUQsK0JBQStCLHlDQUF5Qyw0RUFBNEUsMEVBQTBFLEtBQUssaUJBQWlCLEVBQUUsZ0NBQWdDLGNBQWMsdUNBQXVDLEtBQUssYUFBYSxHQUFHLGNBQWMscUJBQXFCLDJCQUEyQixlQUFlLHdDQUF3QywrQkFBK0IsR0FBRyw0QkFBNEIsZ0NBQWdDLG9DQUFvQywyQkFBMkIsY0FBYyw4QkFBOEIsK0JBQStCLG1CQUFtQixZQUFZLGtHQUFrRyxpQkFBaUIsK0VBQStFLFNBQVMsb0NBQW9DLGdDQUFnQyw2REFBNkQsU0FBUyxFQUFFLHFDQUFxQyxvQkFBb0Isa0JBQWtCLDhCQUE4QixnRUFBZ0Usa0JBQWtCLE1BQU0scUZBQXFGLDZCQUE2QixxQ0FBcUMsOEJBQThCLDJCQUEyQix5RUFBeUUsMERBQTBELDhCQUE4QixnQkFBZ0IsTUFBTTtBQUNydFo7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDbUY7QUFDbkYsNENBQTRDLDRFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0Isa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0Esa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDcUc7QUFDckcsZ0RBQWdELDRFQUFlO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLElBQUkseUVBQVEsR0FBRywyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RnpCLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ3FDO0FBQ3VCO0FBQzhCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkMsc0NBQXNDLDRFQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0IsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1QsOEJBQThCLHFFQUFhO0FBQzNDO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ0E7QUFDb0I7QUFDcEIsZ0RBQWdELDRFQUFlO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUN5Qjs7Ozs7OztVQ25NekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNNO0FBQ0o7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zdHlsZXMvbGFiLnNjc3MiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZHMvYWNjb3VudC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NhcmRzL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NuYXAtdmlldy50cyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL2FwcC9sYWIvdmlldy5waHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEZvciBsaWNlbnNlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgY3VzdG9tLWNvbXBvbmVudC5qcy5MSUNFTlNFLnR4dCAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DdXN0b21Db21wb25lbnQ9ZSgpOnQuQ3VzdG9tQ29tcG9uZW50PWUoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciB0PXs2NjA6KHQsZSxyKT0+e3ZhciBuOyFmdW5jdGlvbih0KXshZnVuY3Rpb24oZSl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHIuZz9yLmc6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgdGhpcz90aGlzOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCksbz1pKHQpO2Z1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W3JdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pLGUmJmUocixuKX19dm9pZCAwPT09bi5SZWZsZWN0P24uUmVmbGVjdD10Om89aShuLlJlZmxlY3QsbyksZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCxuPXImJnZvaWQgMCE9PVN5bWJvbC50b1ByaW1pdGl2ZT9TeW1ib2wudG9QcmltaXRpdmU6XCJAQHRvUHJpbWl0aXZlXCIsbz1yJiZ2b2lkIDAhPT1TeW1ib2wuaXRlcmF0b3I/U3ltYm9sLml0ZXJhdG9yOlwiQEBpdGVyYXRvclwiLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmNyZWF0ZSx1PXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxhPSFpJiYhdSxzPXtjcmVhdGU6aT9mdW5jdGlvbigpe3JldHVybiBIKE9iamVjdC5jcmVhdGUobnVsbCkpfTp1P2Z1bmN0aW9uKCl7cmV0dXJuIEgoe19fcHJvdG9fXzpudWxsfSl9OmZ1bmN0aW9uKCl7cmV0dXJuIEgoe30pfSxoYXM6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKX06ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSBpbiB0fSxnZXQ6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKT90W3JdOnZvaWQgMH06ZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXX19LGM9T2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzJiZwcm9jZXNzLmVudiYmXCJ0cnVlXCI9PT1wcm9jZXNzLmVudi5SRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTEwsaD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXB8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe3ZhciB0PXt9LGU9W10scj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3RoaXMuX2luZGV4PTAsdGhpcy5fa2V5cz10LHRoaXMuX3ZhbHVlcz1lLHRoaXMuX3NlbGVjdG9yPXJ9cmV0dXJuIHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5faW5kZXg7aWYodD49MCYmdDx0aGlzLl9rZXlzLmxlbmd0aCl7dmFyIHI9dGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1t0XSx0aGlzLl92YWx1ZXNbdF0pO3JldHVybiB0KzE+PXRoaXMuX2tleXMubGVuZ3RoPyh0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpOnRoaXMuX2luZGV4Kysse3ZhbHVlOnIsZG9uZTohMX19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX0sdC5wcm90b3R5cGUudGhyb3c9ZnVuY3Rpb24odCl7dGhyb3cgdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHR9LHQucHJvdG90eXBlLnJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHt2YWx1ZTp0LGRvbmU6ITB9fSx0fSgpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLl9rZXlzPVtdLHRoaXMuX3ZhbHVlcz1bXSx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RofSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fZmluZCh0LCExKT49MH0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2ZpbmQodCwhMSk7cmV0dXJuIGU+PTA/dGhpcy5fdmFsdWVzW2VdOnZvaWQgMH0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fZmluZCh0LCEwKTtyZXR1cm4gdGhpcy5fdmFsdWVzW3JdPWUsdGhpc30sZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciByPXRoaXMuX2ZpbmQoZSwhMSk7aWYocj49MCl7Zm9yKHZhciBuPXRoaXMuX2tleXMubGVuZ3RoLG89cisxO288bjtvKyspdGhpcy5fa2V5c1tvLTFdPXRoaXMuX2tleXNbb10sdGhpcy5fdmFsdWVzW28tMV09dGhpcy5fdmFsdWVzW29dO3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aC0tLHRoaXMuX3ZhbHVlcy5sZW5ndGgtLSxlPT09dGhpcy5fY2FjaGVLZXkmJih0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTIpLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleXMubGVuZ3RoPTAsdGhpcy5fdmFsdWVzLmxlbmd0aD0wLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn0sZS5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxuKX0sZS5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLGkpfSxlLnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLHUpfSxlLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZS5fZmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9jYWNoZUtleSE9PXQmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleT10KSksdGhpcy5fY2FjaGVJbmRleDwwJiZlJiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmxlbmd0aCx0aGlzLl9rZXlzLnB1c2godCksdGhpcy5fdmFsdWVzLnB1c2godm9pZCAwKSksdGhpcy5fY2FjaGVJbmRleH0sZX0oKTtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBlfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm5bdCxlXX19KCk6TWFwLHA9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fbWFwPW5ldyBofXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuc2l6ZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5oYXModCl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLnNldCh0LHQpLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh0KX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9tYXAuY2xlYXIoKX0sdC5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAua2V5cygpfSx0LnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpfSx0LnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCl9LHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHR9KCk6U2V0LGw9bmV3KGZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdlYWtNYXA/ZnVuY3Rpb24oKXt2YXIgdD0xNixyPXMuY3JlYXRlKCksbj1vKCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX2tleT1vKCl9cmV0dXJuIHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZzLmhhcyhlLHRoaXMuX2tleSl9LHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lP3MuZ2V0KGUsdGhpcy5fa2V5KTp2b2lkIDB9LHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiBpKHQsITApW3RoaXMuX2tleV09ZSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmZGVsZXRlIGVbdGhpcy5fa2V5XX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXk9bygpfSx0fSgpO2Z1bmN0aW9uIG8oKXt2YXIgdDtkb3t0PVwiQEBXZWFrTWFwQEBcIithKCl9d2hpbGUocy5oYXMocix0KSk7cmV0dXJuIHJbdF09ITAsdH1mdW5jdGlvbiBpKHQscil7aWYoIWUuY2FsbCh0LG4pKXtpZighcilyZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6cy5jcmVhdGUoKX0pfXJldHVybiB0W25dfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIHI9MDtyPGU7KytyKXRbcl09MjU1Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4gdH1mdW5jdGlvbiBhKCl7dmFyIGUscj0oZT10LFwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4QXJyYXk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNyeXB0bz9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbXNDcnlwdG8/bXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTp1KG5ldyBVaW50OEFycmF5KGUpLGUpOnUobmV3IEFycmF5KGUpLGUpKTtyWzZdPTc5JnJbNl18NjQscls4XT0xOTEmcls4XXwxMjg7Zm9yKHZhciBuPVwiXCIsbz0wO288dDsrK28pe3ZhciBpPXJbb107NCE9PW8mJjYhPT1vJiY4IT09b3x8KG4rPVwiLVwiKSxpPDE2JiYobis9XCIwXCIpLG4rPWkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCl9cmV0dXJuIG59fSgpOldlYWtNYXApO2Z1bmN0aW9uIHkodCxlLHIpe3ZhciBuPWwuZ2V0KHQpO2lmKGoobikpe2lmKCFyKXJldHVybjtuPW5ldyBoLGwuc2V0KHQsbil9dmFyIG89bi5nZXQoZSk7aWYoaihvKSl7aWYoIXIpcmV0dXJuO289bmV3IGgsbi5zZXQoZSxvKX1yZXR1cm4gb31mdW5jdGlvbiBkKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4hMDt2YXIgbj1JKGUpO3JldHVybiFUKG4pJiZkKHQsbixyKX1mdW5jdGlvbiB2KHQsZSxyKXt2YXIgbj15KGUsciwhMSk7cmV0dXJuIWoobikmJiEhbi5oYXModCl9ZnVuY3Rpb24gXyh0LGUscil7aWYodih0LGUscikpcmV0dXJuIGcodCxlLHIpO3ZhciBuPUkoZSk7cmV0dXJuIFQobik/dm9pZCAwOl8odCxuLHIpfWZ1bmN0aW9uIGcodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtpZighaihuKSlyZXR1cm4gbi5nZXQodCl9ZnVuY3Rpb24gdyh0LGUscixuKXt5KHIsbiwhMCkuc2V0KHQsZSl9ZnVuY3Rpb24gYih0LGUpe3ZhciByPW0odCxlKSxuPUkodCk7aWYobnVsbD09PW4pcmV0dXJuIHI7dmFyIG89YihuLGUpO2lmKG8ubGVuZ3RoPD0wKXJldHVybiByO2lmKHIubGVuZ3RoPD0wKXJldHVybiBvO2Zvcih2YXIgaT1uZXcgcCx1PVtdLGE9MCxzPXI7YTxzLmxlbmd0aDthKyspe3ZhciBjPXNbYV07aS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpfWZvcih2YXIgZj0wLGg9bztmPGgubGVuZ3RoO2YrKyljPWhbZl0saS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpO3JldHVybiB1fWZ1bmN0aW9uIG0odCxlKXt2YXIgcj1bXSxuPXkodCxlLCExKTtpZihqKG4pKXJldHVybiByO2Zvcih2YXIgaT1mdW5jdGlvbih0KXt2YXIgZT1DKHQsbyk7aWYoIXgoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgcj1lLmNhbGwodCk7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn0obi5rZXlzKCkpLHU9MDs7KXt2YXIgYT1BKGkpO2lmKCFhKXJldHVybiByLmxlbmd0aD11LHI7dmFyIHM9YS52YWx1ZTt0cnl7clt1XT1zfWNhdGNoKHQpe3RyeXtSKGkpfWZpbmFsbHl7dGhyb3cgdH19dSsrfX1mdW5jdGlvbiBPKHQpe2lmKG51bGw9PT10KXJldHVybiAxO3N3aXRjaCh0eXBlb2YgdCl7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuIDA7Y2FzZVwiYm9vbGVhblwiOnJldHVybiAyO2Nhc2VcInN0cmluZ1wiOnJldHVybiAzO2Nhc2VcInN5bWJvbFwiOnJldHVybiA0O2Nhc2VcIm51bWJlclwiOnJldHVybiA1O2Nhc2VcIm9iamVjdFwiOnJldHVybiBudWxsPT09dD8xOjY7ZGVmYXVsdDpyZXR1cm4gNn19ZnVuY3Rpb24gaih0KXtyZXR1cm4gdm9pZCAwPT09dH1mdW5jdGlvbiBUKHQpe3JldHVybiBudWxsPT09dH1mdW5jdGlvbiBrKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gRSh0LGUpe3N3aXRjaChPKHQpKXtjYXNlIDA6Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gdH12YXIgcj0zPT09ZT9cInN0cmluZ1wiOjU9PT1lP1wibnVtYmVyXCI6XCJkZWZhdWx0XCIsbz1DKHQsbik7aWYodm9pZCAwIT09byl7dmFyIGk9by5jYWxsKHQscik7aWYoayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBpfXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwic3RyaW5nXCI9PT1lKXt2YXIgcj10LnRvU3RyaW5nO2lmKHgocikmJiFrKG89ci5jYWxsKHQpKSlyZXR1cm4gbztpZih4KG49dC52YWx1ZU9mKSYmIWsobz1uLmNhbGwodCkpKXJldHVybiBvfWVsc2V7dmFyIG47aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt2YXIgbyxpPXQudG9TdHJpbmc7aWYoeChpKSYmIWsobz1pLmNhbGwodCkpKXJldHVybiBvfXRocm93IG5ldyBUeXBlRXJyb3J9KHQsXCJkZWZhdWx0XCI9PT1yP1wibnVtYmVyXCI6cil9ZnVuY3Rpb24gUyh0KXt2YXIgZT1FKHQsMyk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiK3R9KGUpfWZ1bmN0aW9uIE0odCl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheSh0KTp0IGluc3RhbmNlb2YgT2JqZWN0P3QgaW5zdGFuY2VvZiBBcnJheTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24geCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIFAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBDKHQsZSl7dmFyIHI9dFtlXTtpZihudWxsIT1yKXtpZigheChyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfX1mdW5jdGlvbiBBKHQpe3ZhciBlPXQubmV4dCgpO3JldHVybiFlLmRvbmUmJmV9ZnVuY3Rpb24gUih0KXt2YXIgZT10LnJldHVybjtlJiZlLmNhbGwodCl9ZnVuY3Rpb24gSSh0KXt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dD09PWMpcmV0dXJuIGU7aWYoZSE9PWMpcmV0dXJuIGU7dmFyIHI9dC5wcm90b3R5cGUsbj1yJiZPYmplY3QuZ2V0UHJvdG90eXBlT2Yocik7aWYobnVsbD09bnx8bj09PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuIGU7dmFyIG89bi5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBvfHxvPT09dD9lOm99ZnVuY3Rpb24gSCh0KXtyZXR1cm4gdC5fXz12b2lkIDAsZGVsZXRlIHQuX18sdH10KFwiZGVjb3JhdGVcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoaihyKSl7aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighUChlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbj0oMCx0W3JdKShlKTtpZighaihuKSYmIVQobikpe2lmKCFQKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7ZT1ufX1yZXR1cm4gZX0odCxlKX1pZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWsobikmJiFqKG4pJiYhVChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKG4pJiYobj12b2lkIDApLGZ1bmN0aW9uKHQsZSxyLG4pe2Zvcih2YXIgbz10Lmxlbmd0aC0xO28+PTA7LS1vKXt2YXIgaT0oMCx0W29dKShlLHIsbik7aWYoIWooaSkmJiFUKGkpKXtpZighayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO249aX19cmV0dXJuIG59KHQsZSxyPVMociksbil9KSksdChcIm1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighaihuKSYmIWZ1bmN0aW9uKHQpe3N3aXRjaChPKHQpKXtjYXNlIDM6Y2FzZSA0OnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fShuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3codCxlLHIsbil9fSkpLHQoXCJkZWZpbmVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscixuKXtpZighayhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKG4pfHwobj1TKG4pKSx3KHQsZSxyLG4pfSkpLHQoXCJoYXNNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZCh0LGUscil9KSksdChcImhhc093bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSx2KHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLF8odCxlLHIpfSkpLHQoXCJnZXRPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZyh0LGUscil9KSksdChcImdldE1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLGIodCxlKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWsodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihlKXx8KGU9UyhlKSksbSh0LGUpfSkpLHQoXCJkZWxldGVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtqKHIpfHwocj1TKHIpKTt2YXIgbj15KGUsciwhMSk7aWYoaihuKSlyZXR1cm4hMTtpZighbi5kZWxldGUodCkpcmV0dXJuITE7aWYobi5zaXplPjApcmV0dXJuITA7dmFyIG89bC5nZXQoZSk7cmV0dXJuIG8uZGVsZXRlKHIpLG8uc2l6ZT4wfHxsLmRlbGV0ZShlKSwhMH0pKX0obyl9KCl9KG58fChuPXt9KSl9fSxlPXt9O2Z1bmN0aW9uIHIobil7dmFyIG89ZVtuXTtpZih2b2lkIDAhPT1vKXJldHVybiBvLmV4cG9ydHM7dmFyIGk9ZVtuXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbbl0oaSxpLmV4cG9ydHMsciksaS5leHBvcnRzfXIuZD0odCxlKT0+e2Zvcih2YXIgbiBpbiBlKXIubyhlLG4pJiYhci5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OmVbbl19KX0sci5nPWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMpcmV0dXJuIGdsb2JhbFRoaXM7dHJ5e3JldHVybiB0aGlzfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvd319KCksci5vPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyLnI9dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBuPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodCxlKX19ci5yKG4pLHIuZChuLHtDdXN0b21Db21wb25lbnQ6KCk9PmMsT0JTRVJWRURfUFJPUEVSVElFUzooKT0+aSxjdXN0b21Db21wb25lbnQ6KCk9PnQscHJvcGVydHk6KCk9PnUscXVlcnk6KCk9PnMsc3RhdGU6KCk9PmF9KSxyKDY2MCk7Y29uc3QgZT1uZXcgY2xhc3N7ZnJvbSh0LGUpe2lmKHQpc3dpdGNoKGUubmFtZSl7Y2FzZVwiU3RyaW5nXCI6Y2FzZVwiTnVtYmVyXCI6cmV0dXJuIGUodCk7Y2FzZVwiQm9vbGVhblwiOnJldHVybiB0JiZcInRydWVcIj09PXQudG9Mb3dlckNhc2UoKTtkZWZhdWx0OnJldHVybiBKU09OLnBhcnNlKHQpfX10byh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD90JiZKU09OLnN0cmluZ2lmeSh0KTp0LnRvU3RyaW5nKCl9fTtjbGFzcyBve31jb25zdCBpPVN5bWJvbChcIm9ic2VydmVkX3Byb3BlcnRpZXNcIik7ZnVuY3Rpb24gdSh0KXtyZXR1cm4gbnVsbCE9dHx8KHQ9bmV3IG8pLGZ1bmN0aW9uKHIsbil7dmFyIG8sdSxhLHM7Y29uc3QgYz1gXyR7bn1gLGY9bnVsbCE9PShvPXQuY29udmVydGVyKSYmdm9pZCAwIT09bz9vOmU7aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsbix7Z2V0OmZ1bmN0aW9uKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pLGU9Zi5mcm9tKHRoaXNbY10sdCk7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/ZnVuY3Rpb24odCxlLHIpe3JldHVybiBuZXcgUHJveHkocix7c2V0OihyLG4sbyk9PihyW25dPW8sQXJyYXkuaXNBcnJheShvKSYmXCJsZW5ndGhcIiE9PW58fHQubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKGUsbyksITApfSl9KHRoaXMsbixlKTplfSxzZXQ6ZnVuY3Rpb24odCl7Y29uc3QgZT10aGlzW25dO2lmKHQhPT1lKXtjb25zdCByPVJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLHRoaXMsbik7dGhpc1tjXT1mLnRvKHQsciksdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixlKX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbnVsbD09PSh1PXQuYXR0cmlidXRlKXx8dm9pZCAwPT09dXx8dSl7Y29uc3QgZT1yLmNvbnN0cnVjdG9yLG89bnVsbCE9PShhPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSxlKSkmJnZvaWQgMCE9PWE/YTp7fSx1PW51bGwhPT0ocz10LmF0dHJpYnV0ZSkmJnZvaWQgMCE9PXM/czpuLGM9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG8pLHtbdS50b1N0cmluZygpXTpufSk7UmVmbGVjdC5kZWZpbmVNZXRhZGF0YShpLGMsZSl9fX1mdW5jdGlvbiBhKHQpe3JldHVybiB1KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7YXR0cmlidXRlOiExfSkpfWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX1jbGFzcyBjIGV4dGVuZHMgSFRNTEVsZW1lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtjb25zdCB0PVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzKTtyZXR1cm4gdD9PYmplY3Qua2V5cyh0KTpbXX1jb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fY2hhbmdlcz1uZXcgTWFwO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxlLHIpe2NvbnN0IG49UmVmbGVjdC5nZXRNZXRhZGF0YShpLHRoaXMuY29uc3RydWN0b3IpW3RdLG89dGhpc1tuXTt0aGlzW2BfJHtufWBdPXIsdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixvKX1zdGF0ZUhhc0NoYW5nZWQodCl7fXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIGMuX3RlbXBsYXRlcz9jLl90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gci5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1uLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCxjLl90ZW1wbGF0ZXNbdF09cixyfW5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LGUpe2NsZWFyVGltZW91dCh0aGlzLl9jaGFuZ2VEZWJvdW5jZSksdGhpcy5fY2hhbmdlRGVib3VuY2U9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlSGFzQ2hhbmdlZCh0aGlzLl9jaGFuZ2VzKSx0aGlzLl9jaGFuZ2VzLmNsZWFyKCl9KSw1MCksdGhpcy5fY2hhbmdlcy5zZXQodCxlKX19Yy5fdGVtcGxhdGVzPXt9fSkoKSxufSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IEFjY291bnRDYXJkID0gY2xhc3MgQWNjb3VudENhcmQgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkEgdmVyeSBsb25nIHRleHQgdGhhdCBzaG91bGQgYmUgZWxsaXBzZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VidGl0bGVcIj5DYXNoPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFsYW5jZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudFwiPjEuMDVLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnJyZW5jeVwiPlBIUDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59O1xuQWNjb3VudENhcmQuc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNjEyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoOmFjdGl2ZSkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAwLjc1KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJycmVuY3kge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc7XG4gICAgICAgIH1cbiAgICBgO1xuQWNjb3VudENhcmQgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ2FjY291bnQtY2FyZCcpXG5dLCBBY2NvdW50Q2FyZCk7XG5leHBvcnQgeyBBY2NvdW50Q2FyZCB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LWNhcmQnO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBwcm9wZXJ0eSwgcXVlcnksIH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgUGFnZUluZGljYXRvciA9IGNsYXNzIFBhZ2VJbmRpY2F0b3IgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzID0gW107XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIHBhcnQ9XCJjb250cm9sXCI+PC9kaXY+YDtcbiAgICB9XG4gICAgc3RhdGVIYXNDaGFuZ2VkKGNoYW5nZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgY2hhbmdlcykge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzaXplJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWN0aXZlSW5kZXgnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2l6ZShvbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMuc2l6ZSAtIChvbGRWYWx1ZSAhPT0gbnVsbCAmJiBvbGRWYWx1ZSAhPT0gdm9pZCAwID8gb2xkVmFsdWUgOiAwKTtcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBhZGRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlbHRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRpY2F0b3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW1vdmVkID0gdGhpcy5faW5kaWNhdG9ycy5zcGxpY2UoZGVsdGEsIE1hdGguYWJzKGRlbHRhKSwgLi4uYWRkZWQpO1xuICAgICAgICB0aGlzLl9jb250cm9sLmFwcGVuZCguLi5hZGRlZCk7XG4gICAgICAgIHJlbW92ZWQuZm9yRWFjaChpbmRpY2F0b3IgPT4gaW5kaWNhdG9yLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlSW5kZXgob2xkSW5kZXgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gb2xkSW5kZXgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChfYSA9IHRoaXMuX2luZGljYXRvcnNbb2xkSW5kZXhdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5hY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufTtcblBhZ2VJbmRpY2F0b3Iuc3R5bGVzID0gYFxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwIDAgMCAvIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICAgIGA7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLmNvbnRyb2wnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTERpdkVsZW1lbnQpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJfY29udHJvbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuXSwgUGFnZUluZGljYXRvci5wcm90b3R5cGUsIFwic2l6ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhY3RpdmUtaW5kZXgnIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJhY3RpdmVJbmRleFwiLCB2b2lkIDApO1xuUGFnZUluZGljYXRvciA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxuXSwgUGFnZUluZGljYXRvcik7XG5leHBvcnQgeyBQYWdlSW5kaWNhdG9yIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgUGFnZUluZGljYXRvciB9IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCwgcXVlcnkgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbnZhciBTbmFwRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChTbmFwRGlyZWN0aW9uKSB7XG4gICAgU25hcERpcmVjdGlvbltTbmFwRGlyZWN0aW9uW1wiTGVmdFwiXSA9IC0xXSA9IFwiTGVmdFwiO1xuICAgIFNuYXBEaXJlY3Rpb25bU25hcERpcmVjdGlvbltcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XG59KShTbmFwRGlyZWN0aW9uIHx8IChTbmFwRGlyZWN0aW9uID0ge30pKTtcbmxldCBTbmFwVmlldyA9IGNsYXNzIFNuYXBWaWV3IGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XG4gICAgfVxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiBsZWZ0XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuMjkgMTIuNzFsOCA4IDEuNDEtMS40MS02LjI5LTYuMjlIMjR2LTJIMy40MWw2LjI5LTYuMjktMS40MS0xLjQxLTggOGExIDEgMCAwIDAgMCAxLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IExlZnRcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzLjcxIDExLjI5bC04LTgtMS40MSAxLjQxIDYuMjkgNi4yOUgwdjJoMjAuNTlsLTYuMjkgNi4yOSAxLjQxIDEuNDEgOC04YTEgMSAwIDAgMCAwLTEuNDF6XCIgZGF0YS1uYW1lPVwiQXJyb3cgUmlnaHRcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cGFnZS1pbmRpY2F0b3IgY2xhc3M9XCJpbmRpY2F0b3JcIiBwYXJ0PVwiaW5kaWNhdG9yXCI+PC9wYWdlLWluZGljYXRvcj5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRTbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5fZGVmYXVsdFNsb3QuYXNzaWduZWRFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy5fcGFuZWxDb3VudCA9IGxlbmd0aCAtIDE7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2xlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5MZWZ0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzb2x2ZUluZGV4KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGluZGV4KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QnRuLmRpc2FibGVkID0gaW5kZXggPT09IHRoaXMuX3BhbmVsQ291bnQ7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3IuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zbmFwRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzb2x2ZUluZGV4KCkge1xuICAgICAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzY3JvbGxMZWZ0IC8gd2lkdGgpO1xuICAgIH1cbiAgICBzbmFwKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblNuYXBWaWV3LnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24ge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gKDI0cHggLyAyKSk7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbjpub3QoOmFjdGl2ZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgOmhvc3QoOmhvdmVyKSAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLmNvbnRhaW5lcicpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MRGl2RWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfY29udGFpbmVyXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnc2xvdCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MU2xvdEVsZW1lbnQpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2RlZmF1bHRTbG90XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLmxlZnQnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTEJ1dHRvbkVsZW1lbnQpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2xlZnRCdG5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcucmlnaHQnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTEJ1dHRvbkVsZW1lbnQpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX3JpZ2h0QnRuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLmluZGljYXRvcicpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBQYWdlSW5kaWNhdG9yKVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9pbmRpY2F0b3JcIiwgdm9pZCAwKTtcblNuYXBWaWV3ID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXcnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTbmFwVmlldyk7XG5leHBvcnQgeyBTbmFwVmlldyB9O1xubGV0IFNuYXBWaWV3UGFuZWwgPSBjbGFzcyBTbmFwVmlld1BhbmVsIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgPHNsb3Q+PC9zbG90PmA7XG4gICAgfVxufTtcblNuYXBWaWV3UGFuZWwuc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGA7XG5TbmFwVmlld1BhbmVsID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXctcGFuZWwnKVxuXSwgU25hcFZpZXdQYW5lbCk7XG5leHBvcnQgeyBTbmFwVmlld1BhbmVsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAc3R5bGVzL2xhYi5zY3NzJztcbmltcG9ydCAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9jYXJkcyc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdF9jb250YWluZXInKTtcbiAgICB0ZXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NuYXAnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RDb250YWluZXIuYWN0aXZlSW5kZXgpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=