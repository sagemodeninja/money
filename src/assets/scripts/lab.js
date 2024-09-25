/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@sagemodeninja/custom-component/dist/custom-component.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@sagemodeninja/custom-component/dist/custom-component.js ***!
  \********************************************************************************/
/***/ ((module) => {

/*! For license information please see custom-component.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={660:(t,e,r)=>{var n;!function(t){!function(e){var n="object"==typeof r.g?r.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===n.Reflect?n.Reflect=t:o=i(n.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,u={__proto__:[]}instanceof Array,a=!i&&!u,s={create:i?function(){return H(Object.create(null))}:u?function(){return H({__proto__:null})}:function(){return H({})},has:a?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:a?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),f="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,p=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,l=new(f||"function"!=typeof WeakMap?function(){var t=16,r=s.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+a()}while(s.has(r,t));return r[t]=!0,t}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:s.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function a(){var e,r=(e=t,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):u(new Uint8Array(e),e):u(new Array(e),e));r[6]=79&r[6]|64,r[8]=191&r[8]|128;for(var n="",o=0;o<t;++o){var i=r[o];4!==o&&6!==o&&8!==o||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}():WeakMap);function y(t,e,r){var n=l.get(t);if(j(n)){if(!r)return;n=new h,l.set(t,n)}var o=n.get(e);if(j(o)){if(!r)return;o=new h,n.set(e,o)}return o}function d(t,e,r){if(v(t,e,r))return!0;var n=I(e);return!T(n)&&d(t,n,r)}function v(t,e,r){var n=y(e,r,!1);return!j(n)&&!!n.has(t)}function _(t,e,r){if(v(t,e,r))return g(t,e,r);var n=I(e);return T(n)?void 0:_(t,n,r)}function g(t,e,r){var n=y(e,r,!1);if(!j(n))return n.get(t)}function w(t,e,r,n){y(r,n,!0).set(t,e)}function b(t,e){var r=m(t,e),n=I(t);if(null===n)return r;var o=b(n,e);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new p,u=[],a=0,s=r;a<s.length;a++){var c=s[a];i.has(c)||(i.add(c),u.push(c))}for(var f=0,h=o;f<h.length;f++)c=h[f],i.has(c)||(i.add(c),u.push(c));return u}function m(t,e){var r=[],n=y(t,e,!1);if(j(n))return r;for(var i=function(t){var e=C(t,o);if(!x(e))throw new TypeError;var r=e.call(t);if(!k(r))throw new TypeError;return r}(n.keys()),u=0;;){var a=A(i);if(!a)return r.length=u,r;var s=a.value;try{r[u]=s}catch(t){try{R(i)}finally{throw t}}u++}}function O(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function j(t){return void 0===t}function T(t){return null===t}function k(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(O(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",o=C(t,n);if(void 0!==o){var i=o.call(t,r);if(k(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(x(r)&&!k(o=r.call(t)))return o;if(x(n=t.valueOf)&&!k(o=n.call(t)))return o}else{var n;if(x(n=t.valueOf)&&!k(o=n.call(t)))return o;var o,i=t.toString;if(x(i)&&!k(o=i.call(t)))return o}throw new TypeError}(t,"default"===r?"number":r)}function S(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function M(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function x(t){return"function"==typeof t}function P(t){return"function"==typeof t}function C(t,e){var r=t[e];if(null!=r){if(!x(r))throw new TypeError;return r}}function A(t){var e=t.next();return!e.done&&e}function R(t){var e=t.return;e&&e.call(t)}function I(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o||o===t?e:o}function H(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,r,n){if(j(r)){if(!M(t))throw new TypeError;if(!P(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!j(n)&&!T(n)){if(!P(n))throw new TypeError;e=n}}return e}(t,e)}if(!M(t))throw new TypeError;if(!k(e))throw new TypeError;if(!k(n)&&!j(n)&&!T(n))throw new TypeError;return T(n)&&(n=void 0),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=(0,t[o])(e,r,n);if(!j(i)&&!T(i)){if(!k(i))throw new TypeError;n=i}}return n}(t,e,r=S(r),n)})),t("metadata",(function(t,e){return function(r,n){if(!k(r))throw new TypeError;if(!j(n)&&!function(t){switch(O(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}})),t("defineMetadata",(function(t,e,r,n){if(!k(r))throw new TypeError;return j(n)||(n=S(n)),w(t,e,r,n)})),t("hasMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),d(t,e,r)})),t("hasOwnMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),v(t,e,r)})),t("getMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),_(t,e,r)})),t("getOwnMetadata",(function(t,e,r){if(!k(e))throw new TypeError;return j(r)||(r=S(r)),g(t,e,r)})),t("getMetadataKeys",(function(t,e){if(!k(t))throw new TypeError;return j(e)||(e=S(e)),b(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!k(t))throw new TypeError;return j(e)||(e=S(e)),m(t,e)})),t("deleteMetadata",(function(t,e,r){if(!k(e))throw new TypeError;j(r)||(r=S(r));var n=y(e,r,!1);if(j(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=l.get(e);return o.delete(r),o.size>0||l.delete(e),!0}))}(o)}()}(n||(n={}))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t){return function(e){window.customElements.define(t,e)}}r.r(n),r.d(n,{CustomComponent:()=>c,OBSERVED_PROPERTIES:()=>i,customComponent:()=>t,property:()=>u,query:()=>s,state:()=>a}),r(660);const e=new class{from(t,e){if(t)switch(e.name){case"String":case"Number":return e(t);case"Boolean":return t&&"true"===t.toLowerCase();default:return JSON.parse(t)}}to(t){return"object"==typeof t?t&&JSON.stringify(t):t.toString()}};class o{}const i=Symbol("observed_properties");function u(t){return null!=t||(t=new o),function(r,n){var o,u,a,s;const c=`_${n}`,f=null!==(o=t.converter)&&void 0!==o?o:e;if(Object.defineProperty(r,n,{get:function(){const t=Reflect.getMetadata("design:type",this,n),e=f.from(this[c],t);return"object"==typeof e?function(t,e,r){return new Proxy(r,{set:(r,n,o)=>(r[n]=o,Array.isArray(o)&&"length"!==n||t.notifyStateHasChanged(e,o),!0)})}(this,n,e):e},set:function(t){const e=this[n];if(t!==e){const r=Reflect.getMetadata("design:type",this,n);this[c]=f.to(t,r),this.notifyStateHasChanged(n,e)}},enumerable:!0,configurable:!0}),null===(u=t.attribute)||void 0===u||u){const e=r.constructor,o=null!==(a=Reflect.getMetadata(i,e))&&void 0!==a?a:{},u=null!==(s=t.attribute)&&void 0!==s?s:n,c=Object.assign(Object.assign({},o),{[u.toString()]:n});Reflect.defineMetadata(i,c,e)}}}function a(t){return u(Object.assign(Object.assign({},t),{attribute:!1}))}function s(t){return function(e,r){Object.defineProperty(e,r,{get:function(){return this.shadowRoot.querySelector(t)},enumerable:!0,configurable:!0})}}class c extends HTMLElement{static get observedAttributes(){const t=Reflect.getMetadata(i,this);return t?Object.keys(t):[]}constructor(){super(),this._changes=new Map;const t=this.resolveTemplate();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}render(){throw new Error("Not implemented!")}attributeChangedCallback(t,e,r){const n=Reflect.getMetadata(i,this.constructor)[t],o=this[n];this[`_${n}`]=r,this.notifyStateHasChanged(n,o)}stateHasChanged(t){}resolveTemplate(){const t=this.constructor.name;return t in c._templates?c._templates[t]:this.createTemplate(t)}createTemplate(t){var e;const r=document.createElement("template"),n=Object.getPrototypeOf(this).constructor;return r.innerHTML=`<style>${null!==(e=n.styles)&&void 0!==e?e:""}</style>`,c._templates[t]=r,r}notifyStateHasChanged(t,e){clearTimeout(this._changeDebounce),this._changeDebounce=setTimeout((()=>{this.stateHasChanged(this._changes),this._changes.clear()}),50),this._changes.set(t,e)}}c._templates={}})(),n})()));
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
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "../node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
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
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "../node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
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
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "../node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
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

let WalletCard = class WalletCard extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    render() {
        return `
            <div>
                <span class="name"></span>
                <span class="amount">P0.00</span>
            </div>
        `;
    }
    stateHasChanged(changes) {
        if (changes.has('name'))
            this._nameSpan.innerText = this.name;
    }
};
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.query)('.name'),
    __metadata("design:type", HTMLSpanElement)
], WalletCard.prototype, "_nameSpan", void 0);
__decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.property)(),
    __metadata("design:type", String)
], WalletCard.prototype, "name", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1tb25leS8uLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9wYWdlLWluZGljYXRvci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3NuYXAtdmlldy50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3ZpZXdzL2xhYi12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBGb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGN1c3RvbS1jb21wb25lbnQuanMuTElDRU5TRS50eHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PWUoKTp0LkN1c3RvbUNvbXBvbmVudD1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17NjYwOih0LGUscik9Pnt2YXIgbjshZnVuY3Rpb24odCl7IWZ1bmN0aW9uKGUpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiByLmc/ci5nOlwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIHRoaXM/dGhpczpGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpLG89aSh0KTtmdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7XCJmdW5jdGlvblwiIT10eXBlb2YgdFtyXSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KSxlJiZlKHIsbil9fXZvaWQgMD09PW4uUmVmbGVjdD9uLlJlZmxlY3Q9dDpvPWkobi5SZWZsZWN0LG8pLGZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wsbj1yJiZ2b2lkIDAhPT1TeW1ib2wudG9QcmltaXRpdmU/U3ltYm9sLnRvUHJpbWl0aXZlOlwiQEB0b1ByaW1pdGl2ZVwiLG89ciYmdm9pZCAwIT09U3ltYm9sLml0ZXJhdG9yP1N5bWJvbC5pdGVyYXRvcjpcIkBAaXRlcmF0b3JcIixpPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5jcmVhdGUsdT17X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXksYT0haSYmIXUscz17Y3JlYXRlOmk/ZnVuY3Rpb24oKXtyZXR1cm4gSChPYmplY3QuY3JlYXRlKG51bGwpKX06dT9mdW5jdGlvbigpe3JldHVybiBIKHtfX3Byb3RvX186bnVsbH0pfTpmdW5jdGlvbigpe3JldHVybiBIKHt9KX0saGFzOmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscil9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUgaW4gdH0sZ2V0OmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscik/dFtyXTp2b2lkIDB9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV19fSxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbiksZj1cIm9iamVjdFwiPT10eXBlb2YgcHJvY2VzcyYmcHJvY2Vzcy5lbnYmJlwidHJ1ZVwiPT09cHJvY2Vzcy5lbnYuUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMLGg9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXt2YXIgdD17fSxlPVtdLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt0aGlzLl9pbmRleD0wLHRoaXMuX2tleXM9dCx0aGlzLl92YWx1ZXM9ZSx0aGlzLl9zZWxlY3Rvcj1yfXJldHVybiB0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2luZGV4O2lmKHQ+PTAmJnQ8dGhpcy5fa2V5cy5sZW5ndGgpe3ZhciByPXRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbdF0sdGhpcy5fdmFsdWVzW3RdKTtyZXR1cm4gdCsxPj10aGlzLl9rZXlzLmxlbmd0aD8odGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKTp0aGlzLl9pbmRleCsrLHt2YWx1ZTpyLGRvbmU6ITF9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19LHQucHJvdG90eXBlLnRocm93PWZ1bmN0aW9uKHQpe3Rocm93IHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx0fSx0LnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx7dmFsdWU6dCxkb25lOiEwfX0sdH0oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5fa2V5cz1bXSx0aGlzLl92YWx1ZXM9W10sdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ZpbmQodCwhMSk+PTB9LGUucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9maW5kKHQsITEpO3JldHVybiBlPj0wP3RoaXMuX3ZhbHVlc1tlXTp2b2lkIDB9LGUucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX2ZpbmQodCwhMCk7cmV0dXJuIHRoaXMuX3ZhbHVlc1tyXT1lLHRoaXN9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgcj10aGlzLl9maW5kKGUsITEpO2lmKHI+PTApe2Zvcih2YXIgbj10aGlzLl9rZXlzLmxlbmd0aCxvPXIrMTtvPG47bysrKXRoaXMuX2tleXNbby0xXT10aGlzLl9rZXlzW29dLHRoaXMuX3ZhbHVlc1tvLTFdPXRoaXMuX3ZhbHVlc1tvXTtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGgtLSx0aGlzLl92YWx1ZXMubGVuZ3RoLS0sZT09PXRoaXMuX2NhY2hlS2V5JiYodGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yKSwhMH1yZXR1cm4hMX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXlzLmxlbmd0aD0wLHRoaXMuX3ZhbHVlcy5sZW5ndGg9MCx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9LGUucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsbil9LGUucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxpKX0sZS5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyx1KX0sZS5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGUuX2ZpbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fY2FjaGVLZXkhPT10JiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXk9dCkpLHRoaXMuX2NhY2hlSW5kZXg8MCYmZSYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5sZW5ndGgsdGhpcy5fa2V5cy5wdXNoKHQpLHRoaXMuX3ZhbHVlcy5wdXNoKHZvaWQgMCkpLHRoaXMuX2NhY2hlSW5kZXh9LGV9KCk7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0fWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuW3QsZV19fSgpOk1hcCxwPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldHx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX21hcD1uZXcgaH1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuaGFzKHQpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5zZXQodCx0KSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5kZWxldGUodCl9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fbWFwLmNsZWFyKCl9LHQucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmtleXMoKX0sdC5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKX0sdC5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuZW50cmllcygpfSx0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0fSgpOlNldCxsPW5ldyhmfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBXZWFrTWFwP2Z1bmN0aW9uKCl7dmFyIHQ9MTYscj1zLmNyZWF0ZSgpLG49bygpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9rZXk9bygpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmcy5oYXMoZSx0aGlzLl9rZXkpfSx0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZT9zLmdldChlLHRoaXMuX2tleSk6dm9pZCAwfSx0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaSh0LCEwKVt0aGlzLl9rZXldPWUsdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJmRlbGV0ZSBlW3RoaXMuX2tleV19LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5PW8oKX0sdH0oKTtmdW5jdGlvbiBvKCl7dmFyIHQ7ZG97dD1cIkBAV2Vha01hcEBAXCIrYSgpfXdoaWxlKHMuaGFzKHIsdCkpO3JldHVybiByW3RdPSEwLHR9ZnVuY3Rpb24gaSh0LHIpe2lmKCFlLmNhbGwodCxuKSl7aWYoIXIpcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOnMuY3JlYXRlKCl9KX1yZXR1cm4gdFtuXX1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciByPTA7cjxlOysrcil0W3JdPTI1NSpNYXRoLnJhbmRvbSgpfDA7cmV0dXJuIHR9ZnVuY3Rpb24gYSgpe3ZhciBlLHI9KGU9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBVaW50OEFycmF5P1widW5kZWZpbmVkXCIhPXR5cGVvZiBjcnlwdG8/Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1zQ3J5cHRvP21zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6dShuZXcgVWludDhBcnJheShlKSxlKTp1KG5ldyBBcnJheShlKSxlKSk7cls2XT03OSZyWzZdfDY0LHJbOF09MTkxJnJbOF18MTI4O2Zvcih2YXIgbj1cIlwiLG89MDtvPHQ7KytvKXt2YXIgaT1yW29dOzQhPT1vJiY2IT09byYmOCE9PW98fChuKz1cIi1cIiksaTwxNiYmKG4rPVwiMFwiKSxuKz1pLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpfXJldHVybiBufX0oKTpXZWFrTWFwKTtmdW5jdGlvbiB5KHQsZSxyKXt2YXIgbj1sLmdldCh0KTtpZihqKG4pKXtpZighcilyZXR1cm47bj1uZXcgaCxsLnNldCh0LG4pfXZhciBvPW4uZ2V0KGUpO2lmKGoobykpe2lmKCFyKXJldHVybjtvPW5ldyBoLG4uc2V0KGUsbyl9cmV0dXJuIG99ZnVuY3Rpb24gZCh0LGUscil7aWYodih0LGUscikpcmV0dXJuITA7dmFyIG49SShlKTtyZXR1cm4hVChuKSYmZCh0LG4scil9ZnVuY3Rpb24gdih0LGUscil7dmFyIG49eShlLHIsITEpO3JldHVybiFqKG4pJiYhIW4uaGFzKHQpfWZ1bmN0aW9uIF8odCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiBnKHQsZSxyKTt2YXIgbj1JKGUpO3JldHVybiBUKG4pP3ZvaWQgMDpfKHQsbixyKX1mdW5jdGlvbiBnKHQsZSxyKXt2YXIgbj15KGUsciwhMSk7aWYoIWoobikpcmV0dXJuIG4uZ2V0KHQpfWZ1bmN0aW9uIHcodCxlLHIsbil7eShyLG4sITApLnNldCh0LGUpfWZ1bmN0aW9uIGIodCxlKXt2YXIgcj1tKHQsZSksbj1JKHQpO2lmKG51bGw9PT1uKXJldHVybiByO3ZhciBvPWIobixlKTtpZihvLmxlbmd0aDw9MClyZXR1cm4gcjtpZihyLmxlbmd0aDw9MClyZXR1cm4gbztmb3IodmFyIGk9bmV3IHAsdT1bXSxhPTAscz1yO2E8cy5sZW5ndGg7YSsrKXt2YXIgYz1zW2FdO2kuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKX1mb3IodmFyIGY9MCxoPW87ZjxoLmxlbmd0aDtmKyspYz1oW2ZdLGkuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKTtyZXR1cm4gdX1mdW5jdGlvbiBtKHQsZSl7dmFyIHI9W10sbj15KHQsZSwhMSk7aWYoaihuKSlyZXR1cm4gcjtmb3IodmFyIGk9ZnVuY3Rpb24odCl7dmFyIGU9Qyh0LG8pO2lmKCF4KGUpKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9ZS5jYWxsKHQpO2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9KG4ua2V5cygpKSx1PTA7Oyl7dmFyIGE9QShpKTtpZighYSlyZXR1cm4gci5sZW5ndGg9dSxyO3ZhciBzPWEudmFsdWU7dHJ5e3JbdV09c31jYXRjaCh0KXt0cnl7UihpKX1maW5hbGx5e3Rocm93IHR9fXUrK319ZnVuY3Rpb24gTyh0KXtpZihudWxsPT09dClyZXR1cm4gMTtzd2l0Y2godHlwZW9mIHQpe2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiAwO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gMjtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gMztjYXNlXCJzeW1ib2xcIjpyZXR1cm4gNDtjYXNlXCJudW1iZXJcIjpyZXR1cm4gNTtjYXNlXCJvYmplY3RcIjpyZXR1cm4gbnVsbD09PXQ/MTo2O2RlZmF1bHQ6cmV0dXJuIDZ9fWZ1bmN0aW9uIGoodCl7cmV0dXJuIHZvaWQgMD09PXR9ZnVuY3Rpb24gVCh0KXtyZXR1cm4gbnVsbD09PXR9ZnVuY3Rpb24gayh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEUodCxlKXtzd2l0Y2goTyh0KSl7Y2FzZSAwOmNhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6cmV0dXJuIHR9dmFyIHI9Mz09PWU/XCJzdHJpbmdcIjo1PT09ZT9cIm51bWJlclwiOlwiZGVmYXVsdFwiLG89Qyh0LG4pO2lmKHZvaWQgMCE9PW8pe3ZhciBpPW8uY2FsbCh0LHIpO2lmKGsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaX1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiPT09ZSl7dmFyIHI9dC50b1N0cmluZztpZih4KHIpJiYhayhvPXIuY2FsbCh0KSkpcmV0dXJuIG87aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gb31lbHNle3ZhciBuO2lmKHgobj10LnZhbHVlT2YpJiYhayhvPW4uY2FsbCh0KSkpcmV0dXJuIG87dmFyIG8saT10LnRvU3RyaW5nO2lmKHgoaSkmJiFrKG89aS5jYWxsKHQpKSlyZXR1cm4gb310aHJvdyBuZXcgVHlwZUVycm9yfSh0LFwiZGVmYXVsdFwiPT09cj9cIm51bWJlclwiOnIpfWZ1bmN0aW9uIFModCl7dmFyIGU9RSh0LDMpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIit0fShlKX1mdW5jdGlvbiBNKHQpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkodCk6dCBpbnN0YW5jZW9mIE9iamVjdD90IGluc3RhbmNlb2YgQXJyYXk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBQKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gQyh0LGUpe3ZhciByPXRbZV07aWYobnVsbCE9cil7aWYoIXgocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn19ZnVuY3Rpb24gQSh0KXt2YXIgZT10Lm5leHQoKTtyZXR1cm4hZS5kb25lJiZlfWZ1bmN0aW9uIFIodCl7dmFyIGU9dC5yZXR1cm47ZSYmZS5jYWxsKHQpfWZ1bmN0aW9uIEkodCl7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQ9PT1jKXJldHVybiBlO2lmKGUhPT1jKXJldHVybiBlO3ZhciByPXQucHJvdG90eXBlLG49ciYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2lmKG51bGw9PW58fG49PT1PYmplY3QucHJvdG90eXBlKXJldHVybiBlO3ZhciBvPW4uY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8bz09PXQ/ZTpvfWZ1bmN0aW9uIEgodCl7cmV0dXJuIHQuX189dm9pZCAwLGRlbGV0ZSB0Ll9fLHR9dChcImRlY29yYXRlXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKGoocikpe2lmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIVAoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5sZW5ndGgtMTtyPj0wOy0tcil7dmFyIG49KDAsdFtyXSkoZSk7aWYoIWoobikmJiFUKG4pKXtpZighUChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO2U9bn19cmV0dXJuIGV9KHQsZSl9aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKG4pJiYhaihuKSYmIVQobikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChuKSYmKG49dm9pZCAwKSxmdW5jdGlvbih0LGUscixuKXtmb3IodmFyIG89dC5sZW5ndGgtMTtvPj0wOy0tbyl7dmFyIGk9KDAsdFtvXSkoZSxyLG4pO2lmKCFqKGkpJiYhVChpKSl7aWYoIWsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtuPWl9fXJldHVybiBufSh0LGUscj1TKHIpLG4pfSkpLHQoXCJtZXRhZGF0YVwiLChmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWoobikmJiFmdW5jdGlvbih0KXtzd2l0Y2goTyh0KSl7Y2FzZSAzOmNhc2UgNDpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX0obikpdGhyb3cgbmV3IFR5cGVFcnJvcjt3KHQsZSxyLG4pfX0pKSx0KFwiZGVmaW5lTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihuKXx8KG49UyhuKSksdyh0LGUscixuKX0pKSx0KFwiaGFzTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGQodCxlLHIpfSkpLHQoXCJoYXNPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksdih0LGUscil9KSksdChcImdldE1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSxfKHQsZSxyKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGcodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighayh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKGUpfHwoZT1TKGUpKSxiKHQsZSl9KSksdChcImdldE93bk1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLG0odCxlKX0pKSx0KFwiZGVsZXRlTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aihyKXx8KHI9UyhyKSk7dmFyIG49eShlLHIsITEpO2lmKGoobikpcmV0dXJuITE7aWYoIW4uZGVsZXRlKHQpKXJldHVybiExO2lmKG4uc2l6ZT4wKXJldHVybiEwO3ZhciBvPWwuZ2V0KGUpO3JldHVybiBvLmRlbGV0ZShyKSxvLnNpemU+MHx8bC5kZWxldGUoZSksITB9KSl9KG8pfSgpfShufHwobj17fSkpfX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIuZz1mdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzKXJldHVybiBnbG9iYWxUaGlzO3RyeXtyZXR1cm4gdGhpc3x8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3d9fSgpLHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiBmdW5jdGlvbihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXIucihuKSxyLmQobix7Q3VzdG9tQ29tcG9uZW50OigpPT5jLE9CU0VSVkVEX1BST1BFUlRJRVM6KCk9PmksY3VzdG9tQ29tcG9uZW50OigpPT50LHByb3BlcnR5OigpPT51LHF1ZXJ5OigpPT5zLHN0YXRlOigpPT5hfSkscig2NjApO2NvbnN0IGU9bmV3IGNsYXNze2Zyb20odCxlKXtpZih0KXN3aXRjaChlLm5hbWUpe2Nhc2VcIlN0cmluZ1wiOmNhc2VcIk51bWJlclwiOnJldHVybiBlKHQpO2Nhc2VcIkJvb2xlYW5cIjpyZXR1cm4gdCYmXCJ0cnVlXCI9PT10LnRvTG93ZXJDYXNlKCk7ZGVmYXVsdDpyZXR1cm4gSlNPTi5wYXJzZSh0KX19dG8odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/dCYmSlNPTi5zdHJpbmdpZnkodCk6dC50b1N0cmluZygpfX07Y2xhc3Mgb3t9Y29uc3QgaT1TeW1ib2woXCJvYnNlcnZlZF9wcm9wZXJ0aWVzXCIpO2Z1bmN0aW9uIHUodCl7cmV0dXJuIG51bGwhPXR8fCh0PW5ldyBvKSxmdW5jdGlvbihyLG4pe3ZhciBvLHUsYSxzO2NvbnN0IGM9YF8ke259YCxmPW51bGwhPT0obz10LmNvbnZlcnRlcikmJnZvaWQgMCE9PW8/bzplO2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4se2dldDpmdW5jdGlvbigpe2NvbnN0IHQ9UmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsdGhpcyxuKSxlPWYuZnJvbSh0aGlzW2NdLHQpO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbmV3IFByb3h5KHIse3NldDoocixuLG8pPT4ocltuXT1vLEFycmF5LmlzQXJyYXkobykmJlwibGVuZ3RoXCIhPT1ufHx0Lm5vdGlmeVN0YXRlSGFzQ2hhbmdlZChlLG8pLCEwKX0pfSh0aGlzLG4sZSk6ZX0sc2V0OmZ1bmN0aW9uKHQpe2NvbnN0IGU9dGhpc1tuXTtpZih0IT09ZSl7Y29uc3Qgcj1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pO3RoaXNbY109Zi50byh0LHIpLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sZSl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLG51bGw9PT0odT10LmF0dHJpYnV0ZSl8fHZvaWQgMD09PXV8fHUpe2NvbnN0IGU9ci5jb25zdHJ1Y3RvcixvPW51bGwhPT0oYT1SZWZsZWN0LmdldE1ldGFkYXRhKGksZSkpJiZ2b2lkIDAhPT1hP2E6e30sdT1udWxsIT09KHM9dC5hdHRyaWJ1dGUpJiZ2b2lkIDAhPT1zP3M6bixjPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxvKSx7W3UudG9TdHJpbmcoKV06bn0pO1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEoaSxjLGUpfX19ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2F0dHJpYnV0ZTohMX0pKX1mdW5jdGlvbiBzKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcih0KX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19Y2xhc3MgYyBleHRlbmRzIEhUTUxFbGVtZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKGksdGhpcyk7cmV0dXJuIHQ/T2JqZWN0LmtleXModCk6W119Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuX2NoYW5nZXM9bmV3IE1hcDtjb25zdCB0PXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsZSxyKXtjb25zdCBuPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzLmNvbnN0cnVjdG9yKVt0XSxvPXRoaXNbbl07dGhpc1tgXyR7bn1gXT1yLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sbyl9c3RhdGVIYXNDaGFuZ2VkKHQpe31yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCB0PXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gdCBpbiBjLl90ZW1wbGF0ZXM/Yy5fdGVtcGxhdGVzW3RdOnRoaXMuY3JlYXRlVGVtcGxhdGUodCl9Y3JlYXRlVGVtcGxhdGUodCl7dmFyIGU7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIHIuaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGU9bi5zdHlsZXMpJiZ2b2lkIDAhPT1lP2U6XCJcIn08L3N0eWxlPmAsYy5fdGVtcGxhdGVzW3RdPXIscn1ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodCxlKXtjbGVhclRpbWVvdXQodGhpcy5fY2hhbmdlRGVib3VuY2UpLHRoaXMuX2NoYW5nZURlYm91bmNlPXNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZUhhc0NoYW5nZWQodGhpcy5fY2hhbmdlcyksdGhpcy5fY2hhbmdlcy5jbGVhcigpfSksNTApLHRoaXMuX2NoYW5nZXMuc2V0KHQsZSl9fWMuX3RlbXBsYXRlcz17fX0pKCksbn0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ3BhZ2UtaW5kaWNhdG9yJylcclxuZXhwb3J0IGNsYXNzIFBhZ2VJbmRpY2F0b3IgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICAuY29udHJvbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MyAxNTMgMTUzIC8gMC40NDMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvci5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzIDE1MyAxNTMpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnc2l6ZScsICdhY3RpdmUtaW5kZXgnXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pbmRpY2F0b3JzOiBIVE1MU3BhbkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRyb2w6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIC8qIEF0dHJpYnV0ZXMgKi9cclxuICAgIHNldCBzaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhY3RpdmVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRE9NICovXHJcbiAgICBnZXQgY29udHJvbCgpIHtcclxuICAgICAgICB0aGlzLl9jb250cm9sID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRyb2wnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBwYXJ0PVwiY29udHJvbFwiPjwvZGl2PmBcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBfLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2l6ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUocGFyc2VJbnQobmV3VmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhY3RpdmUtaW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleChwYXJzZUludChuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZShuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBuZXdWYWx1ZSAtIHRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlbHRhIH0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRpY2F0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLl9pbmRpY2F0b3JzLnNwbGljZShkZWx0YSwgTWF0aC5hYnMoZGVsdGEpLCAuLi5hZGRlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC5hcHBlbmQoLi4uYWRkZWQpO1xyXG4gICAgICAgIHJlbW92ZWQuZm9yRWFjaChpbmRpY2F0b3IgPT4gaW5kaWNhdG9yLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzaXplJywgbmV3VmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVBY3RpdmVJbmRleChuZXdJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUluZGV4ID09PSBuZXdJbmRleCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW3RoaXMuX2FjdGl2ZUluZGV4XT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1tuZXdJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1pbmRleCcsIG5ld0luZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlSW5kaWNhdG9yIH0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcclxuXHJcbmVudW0gU25hcERpcmVjdGlvbiB7XHJcbiAgICBMZWZ0ID0gLTEsXHJcbiAgICBSaWdodCA9IDFcclxufVxyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3JylcclxuZXhwb3J0IGNsYXNzIFNuYXBWaWV3IGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuYXBCdXR0b24ge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gKDI0cHggLyAyKSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuYXBCdXR0b24ubGVmdCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbi5yaWdodCB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuYXBCdXR0b246YWN0aXZlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbjpub3QoOmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIDpob3N0KDpob3ZlcikgLnNuYXBCdXR0b246bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NuYXBFdmVudDogRXZlbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9wYW5lbENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9zbG90OiBIVE1MU2xvdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9sZWZ0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3JpZ2h0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luZGljYXRvcjogUGFnZUluZGljYXRvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3NuYXBFdmVudCA9IG5ldyBFdmVudCgnc25hcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRE9NICovXHJcbiAgICBnZXQgY29udGFpbmVyKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0U2xvdCgpIHtcclxuICAgICAgICB0aGlzLl9zbG90ID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZWZ0QnRuKCkge1xyXG4gICAgICAgIHRoaXMuX2xlZnRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZWZ0QnRuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgcmlnaHRCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5fcmlnaHRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmlnaHRCdG47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBpbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmluZGljYXRvcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2F0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiBsZWZ0XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI5IDEyLjcxbDggOCAxLjQxLTEuNDEtNi4yOS02LjI5SDI0di0ySDMuNDFsNi4yOS02LjI5LTEuNDEtMS40MS04IDhhMSAxIDAgMCAwIDAgMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBMZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzEgMTEuMjlsLTgtOC0xLjQxIDEuNDEgNi4yOSA2LjI5SDB2MmgyMC41OWwtNi4yOSA2LjI5IDEuNDEgMS40MSA4LThhMSAxIDAgMCAwIDAtMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBSaWdodFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwYWdlLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHBhcnQ9XCJpbmRpY2F0b3JcIj48L3BhZ2UtaW5kaWNhdG9yPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gdGhpcy5kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gbGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlc29sdmVJbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpbmRleCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJ0bi5kaXNhYmxlZCA9IGluZGV4ID09PSB0aGlzLl9wYW5lbENvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc25hcEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc29sdmVJbmRleCgpIHtcclxuICAgICAgICBjb25zdCB7c2Nyb2xsTGVmdDogbGVmdH0gPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGxlZnQgLyB3aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbmFwKGRpcmVjdGlvbjogU25hcERpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXHJcbmV4cG9ydCBjbGFzcyBTbmFwVmlld1BhbmVsIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICBgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCwgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCdcclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ3dhbGxldC1jYXJkJylcclxuZXhwb3J0IGNsYXNzIFdhbGxldENhcmQgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgQHF1ZXJ5KCcubmFtZScpXHJcbiAgICBwcml2YXRlIF9uYW1lU3BhbjogSFRNTFNwYW5FbGVtZW50XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmdcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudFwiPlAwLjAwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRlSGFzQ2hhbmdlZChjaGFuZ2VzOiBNYXA8c3RyaW5nLCBhbnk+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzKCduYW1lJykpXHJcbiAgICAgICAgICAgIHRoaXMuX25hbWVTcGFuLmlubmVyVGV4dCA9IHRoaXMubmFtZVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQC9jb21wb25lbnRzL3dhbGxldC1jYXJkJztcclxuaW1wb3J0ICdAL2NvbXBvbmVudHMvc25hcC12aWV3JztcclxuaW1wb3J0IHsgU25hcFZpZXcgfSBmcm9tICdAL2NvbXBvbmVudHMvc25hcC12aWV3JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RfY29udGFpbmVyJykgYXMgU25hcFZpZXc7XHJcblxyXG4gICAgdGVzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzbmFwJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RDb250YWluZXIuYWN0aXZlSW5kZXgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==