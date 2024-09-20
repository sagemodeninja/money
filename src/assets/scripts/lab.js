/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/custom-component/dist/custom-component.js ***!
  \*******************************************************************************/
/***/ ((module) => {

/*! For license information please see custom-component.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={660:(t,e,r)=>{var n;!function(t){!function(e){var n="object"==typeof r.g?r.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===n.Reflect?n.Reflect=t:o=i(n.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,u={__proto__:[]}instanceof Array,s=!i&&!u,a={create:i?function(){return K(Object.create(null))}:u?function(){return K({__proto__:null})}:function(){return K({})},has:s?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:s?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),f="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,l=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,p=new(f||"function"!=typeof WeakMap?function(){var t=16,r=a.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&a.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?a.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+s()}while(a.has(r,t));return r[t]=!0,t}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:a.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function s(){var e,r=(e=t,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):u(new Uint8Array(e),e):u(new Array(e),e));r[6]=79&r[6]|64,r[8]=191&r[8]|128;for(var n="",o=0;o<t;++o){var i=r[o];4!==o&&6!==o&&8!==o||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}():WeakMap);function y(t,e,r){var n=p.get(t);if(T(n)){if(!r)return;n=new h,p.set(t,n)}var o=n.get(e);if(T(o)){if(!r)return;o=new h,n.set(e,o)}return o}function d(t,e,r){if(v(t,e,r))return!0;var n=I(e);return!O(n)&&d(t,n,r)}function v(t,e,r){var n=y(e,r,!1);return!T(n)&&!!n.has(t)}function _(t,e,r){if(v(t,e,r))return g(t,e,r);var n=I(e);return O(n)?void 0:_(t,n,r)}function g(t,e,r){var n=y(e,r,!1);if(!T(n))return n.get(t)}function w(t,e,r,n){y(r,n,!0).set(t,e)}function b(t,e){var r=m(t,e),n=I(t);if(null===n)return r;var o=b(n,e);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new l,u=[],s=0,a=r;s<a.length;s++){var c=a[s];i.has(c)||(i.add(c),u.push(c))}for(var f=0,h=o;f<h.length;f++)c=h[f],i.has(c)||(i.add(c),u.push(c));return u}function m(t,e){var r=[],n=y(t,e,!1);if(T(n))return r;for(var i=function(t){var e=A(t,o);if(!S(e))throw new TypeError;var r=e.call(t);if(!j(r))throw new TypeError;return r}(n.keys()),u=0;;){var s=C(i);if(!s)return r.length=u,r;var a=s.value;try{r[u]=a}catch(t){try{R(i)}finally{throw t}}u++}}function k(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function T(t){return void 0===t}function O(t){return null===t}function j(t){return"object"==typeof t?null!==t:"function"==typeof t}function x(t,e){switch(k(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",o=A(t,n);if(void 0!==o){var i=o.call(t,r);if(j(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(S(r)&&!j(o=r.call(t)))return o;if(S(n=t.valueOf)&&!j(o=n.call(t)))return o}else{var n;if(S(n=t.valueOf)&&!j(o=n.call(t)))return o;var o,i=t.toString;if(S(i)&&!j(o=i.call(t)))return o}throw new TypeError}(t,"default"===r?"number":r)}function E(t){var e=x(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function M(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function S(t){return"function"==typeof t}function P(t){return"function"==typeof t}function A(t,e){var r=t[e];if(null!=r){if(!S(r))throw new TypeError;return r}}function C(t){var e=t.next();return!e.done&&e}function R(t){var e=t.return;e&&e.call(t)}function I(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o||o===t?e:o}function K(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,r,n){if(T(r)){if(!M(t))throw new TypeError;if(!P(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!T(n)&&!O(n)){if(!P(n))throw new TypeError;e=n}}return e}(t,e)}if(!M(t))throw new TypeError;if(!j(e))throw new TypeError;if(!j(n)&&!T(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=(0,t[o])(e,r,n);if(!T(i)&&!O(i)){if(!j(i))throw new TypeError;n=i}}return n}(t,e,r=E(r),n)})),t("metadata",(function(t,e){return function(r,n){if(!j(r))throw new TypeError;if(!T(n)&&!function(t){switch(k(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}})),t("defineMetadata",(function(t,e,r,n){if(!j(r))throw new TypeError;return T(n)||(n=E(n)),w(t,e,r,n)})),t("hasMetadata",(function(t,e,r){if(!j(e))throw new TypeError;return T(r)||(r=E(r)),d(t,e,r)})),t("hasOwnMetadata",(function(t,e,r){if(!j(e))throw new TypeError;return T(r)||(r=E(r)),v(t,e,r)})),t("getMetadata",(function(t,e,r){if(!j(e))throw new TypeError;return T(r)||(r=E(r)),_(t,e,r)})),t("getOwnMetadata",(function(t,e,r){if(!j(e))throw new TypeError;return T(r)||(r=E(r)),g(t,e,r)})),t("getMetadataKeys",(function(t,e){if(!j(t))throw new TypeError;return T(e)||(e=E(e)),b(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!j(t))throw new TypeError;return T(e)||(e=E(e)),m(t,e)})),t("deleteMetadata",(function(t,e,r){if(!j(e))throw new TypeError;T(r)||(r=E(r));var n=y(e,r,!1);if(T(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=p.get(e);return o.delete(r),o.size>0||p.delete(e),!0}))}(o)}()}(n||(n={}))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t){return function(e){customElements.get(t)||window.customElements.define(t,e)}}r.r(n),r.d(n,{CustomComponent:()=>y,customComponent:()=>t,property:()=>f,query:()=>l,queryAll:()=>p,state:()=>h}),r(660);const e="component:attributes";class o{static register(t,r){const n=[...this.get(t.constructor),r];Reflect.defineMetadata(e,n,t.constructor)}static get(t){const r=Reflect.getMetadata(e,t);return null!=r?r:[]}}const i=new class{from(t,e){if("undefined"!==t){if("null"===t)return null;switch(e.name){case"String":case"Number":return e(t);case"Boolean":return""===t||t&&"true"===t.toLowerCase();default:return JSON.parse(t)}}}to(t){return null==t?void 0:t.toString()}},u="component:properties";class s{constructor(t,e){this._key=t,this._options=e}get key(){return this._key}get field(){return`_${this._key}`}get attribute(){const t=this._options.attribute;return t&&"boolean"!=typeof t?t:this._key}get converter(){var t;return null!==(t=this._options.converter)&&void 0!==t?t:i}getType(t){return Reflect.getMetadata("design:type",t,this._key)}static register(t,e){Reflect.defineMetadata(u,e,t.constructor,e.attribute)}static get(t,e){return Reflect.getMetadata(u,t.constructor,e)}}class a{}class c{static get(t,e){const r=e[t.field];return r&&"object"==typeof r?this.createProxy(r,((t,r)=>{Array.isArray(r)&&"length"!==t||e.notifyStateHasChanged(t.key,r)})):r}static parse(t,e,r){const n=s.get(t,e),o=n.getType(t),i=n.converter.from(r,o);this.set(n,t,i)}static set(t,e,r){const n=e[t.field];r!==n&&(e[t.field]=r,e.notifyStateHasChanged(t.key,n))}static createProxy(t,e){return new Proxy(t,{set:(t,r,n)=>(e(r,t),Reflect.set(t,r,n))})}}function f(t){return null!=t||(t=new a),function(e,r){var n,u,a;const f=new s(r,t);if(s.register(e,f),Object.defineProperty(e,r,{get:function(){return c.get(f,this)},set:function(e){var r;c.set(f,this,e);const n=t.attribute;if("boolean"!=typeof n||n){const n=f.getType(this);if("Boolean"!==n.name){const o=(null!==(r=t.converter)&&void 0!==r?r:i).to(e,n);this.setAttribute(f.attribute,o)}else this.toggleAttribute(f.attribute,e)}},enumerable:!0,configurable:!0}),null===(n=t.attribute)||void 0===n||n){const n=null!==(a=null===(u=t.attribute)||void 0===u?void 0:u.toString())&&void 0!==a?a:r;o.register(e,n)}}}function h(){return f({attribute:!1})}function l(t,e=!1){return function(r,n){Object.defineProperty(r,n,{get:function(){return(e?this:this.shadowRoot).querySelector(t)},enumerable:!0,configurable:!0})}}function p(t,e=!1){return function(r,n){Object.defineProperty(r,n,{get:function(){const r=(e?this:this.shadowRoot).querySelectorAll(t);return Array.from(r)},enumerable:!0,configurable:!0})}}class y extends HTMLElement{static get observedAttributes(){return o.get(this)}constructor(){super(),this._changes=new Map;const t=this.resolveTemplate();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}render(){throw new Error("Not implemented!")}attributeChangedCallback(t,e,r){c.parse(this,t,r)}stateHasChanged(t){}resolveTemplate(){const t=this.constructor.name;return t in y._templates?y._templates[t]:this.createTemplate(t)}createTemplate(t){var e;const r=document.createElement("template"),n=Object.getPrototypeOf(this).constructor;return r.innerHTML=`<style>${null!==(e=n.styles)&&void 0!==e?e:""}</style>`,y._templates[t]=r,r}notifyStateHasChanged(t,e){clearTimeout(this._changeDebounce),this._changeDebounce=setTimeout((()=>{this.stateHasChanged(this._changes),this._changes.clear()}),50),this._changes.set(t,e)}}y._templates={}})(),n})()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUdoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQWEsQ0FBQztJQUU1RSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50L2Rpc3QvY3VzdG9tLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvc25hcC12aWV3LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvdmlld3MvbGFiLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEZvciBsaWNlbnNlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgY3VzdG9tLWNvbXBvbmVudC5qcy5MSUNFTlNFLnR4dCAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DdXN0b21Db21wb25lbnQ9ZSgpOnQuQ3VzdG9tQ29tcG9uZW50PWUoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciB0PXs2NjA6KHQsZSxyKT0+e3ZhciBuOyFmdW5jdGlvbih0KXshZnVuY3Rpb24oZSl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHIuZz9yLmc6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgdGhpcz90aGlzOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCksbz1pKHQpO2Z1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W3JdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pLGUmJmUocixuKX19dm9pZCAwPT09bi5SZWZsZWN0P24uUmVmbGVjdD10Om89aShuLlJlZmxlY3QsbyksZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCxuPXImJnZvaWQgMCE9PVN5bWJvbC50b1ByaW1pdGl2ZT9TeW1ib2wudG9QcmltaXRpdmU6XCJAQHRvUHJpbWl0aXZlXCIsbz1yJiZ2b2lkIDAhPT1TeW1ib2wuaXRlcmF0b3I/U3ltYm9sLml0ZXJhdG9yOlwiQEBpdGVyYXRvclwiLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmNyZWF0ZSx1PXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxzPSFpJiYhdSxhPXtjcmVhdGU6aT9mdW5jdGlvbigpe3JldHVybiBLKE9iamVjdC5jcmVhdGUobnVsbCkpfTp1P2Z1bmN0aW9uKCl7cmV0dXJuIEsoe19fcHJvdG9fXzpudWxsfSl9OmZ1bmN0aW9uKCl7cmV0dXJuIEsoe30pfSxoYXM6cz9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKX06ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSBpbiB0fSxnZXQ6cz9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKT90W3JdOnZvaWQgMH06ZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXX19LGM9T2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzJiZwcm9jZXNzLmVudiYmXCJ0cnVlXCI9PT1wcm9jZXNzLmVudi5SRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTEwsaD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXB8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe3ZhciB0PXt9LGU9W10scj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3RoaXMuX2luZGV4PTAsdGhpcy5fa2V5cz10LHRoaXMuX3ZhbHVlcz1lLHRoaXMuX3NlbGVjdG9yPXJ9cmV0dXJuIHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5faW5kZXg7aWYodD49MCYmdDx0aGlzLl9rZXlzLmxlbmd0aCl7dmFyIHI9dGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1t0XSx0aGlzLl92YWx1ZXNbdF0pO3JldHVybiB0KzE+PXRoaXMuX2tleXMubGVuZ3RoPyh0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpOnRoaXMuX2luZGV4Kysse3ZhbHVlOnIsZG9uZTohMX19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX0sdC5wcm90b3R5cGUudGhyb3c9ZnVuY3Rpb24odCl7dGhyb3cgdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHR9LHQucHJvdG90eXBlLnJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHt2YWx1ZTp0LGRvbmU6ITB9fSx0fSgpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLl9rZXlzPVtdLHRoaXMuX3ZhbHVlcz1bXSx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RofSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fZmluZCh0LCExKT49MH0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2ZpbmQodCwhMSk7cmV0dXJuIGU+PTA/dGhpcy5fdmFsdWVzW2VdOnZvaWQgMH0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fZmluZCh0LCEwKTtyZXR1cm4gdGhpcy5fdmFsdWVzW3JdPWUsdGhpc30sZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciByPXRoaXMuX2ZpbmQoZSwhMSk7aWYocj49MCl7Zm9yKHZhciBuPXRoaXMuX2tleXMubGVuZ3RoLG89cisxO288bjtvKyspdGhpcy5fa2V5c1tvLTFdPXRoaXMuX2tleXNbb10sdGhpcy5fdmFsdWVzW28tMV09dGhpcy5fdmFsdWVzW29dO3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aC0tLHRoaXMuX3ZhbHVlcy5sZW5ndGgtLSxlPT09dGhpcy5fY2FjaGVLZXkmJih0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTIpLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleXMubGVuZ3RoPTAsdGhpcy5fdmFsdWVzLmxlbmd0aD0wLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn0sZS5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxuKX0sZS5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLGkpfSxlLnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLHUpfSxlLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZS5fZmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9jYWNoZUtleSE9PXQmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleT10KSksdGhpcy5fY2FjaGVJbmRleDwwJiZlJiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmxlbmd0aCx0aGlzLl9rZXlzLnB1c2godCksdGhpcy5fdmFsdWVzLnB1c2godm9pZCAwKSksdGhpcy5fY2FjaGVJbmRleH0sZX0oKTtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBlfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm5bdCxlXX19KCk6TWFwLGw9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fbWFwPW5ldyBofXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuc2l6ZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5oYXModCl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLnNldCh0LHQpLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh0KX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9tYXAuY2xlYXIoKX0sdC5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAua2V5cygpfSx0LnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpfSx0LnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCl9LHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHR9KCk6U2V0LHA9bmV3KGZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdlYWtNYXA/ZnVuY3Rpb24oKXt2YXIgdD0xNixyPWEuY3JlYXRlKCksbj1vKCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX2tleT1vKCl9cmV0dXJuIHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZhLmhhcyhlLHRoaXMuX2tleSl9LHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lP2EuZ2V0KGUsdGhpcy5fa2V5KTp2b2lkIDB9LHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiBpKHQsITApW3RoaXMuX2tleV09ZSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmZGVsZXRlIGVbdGhpcy5fa2V5XX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXk9bygpfSx0fSgpO2Z1bmN0aW9uIG8oKXt2YXIgdDtkb3t0PVwiQEBXZWFrTWFwQEBcIitzKCl9d2hpbGUoYS5oYXMocix0KSk7cmV0dXJuIHJbdF09ITAsdH1mdW5jdGlvbiBpKHQscil7aWYoIWUuY2FsbCh0LG4pKXtpZighcilyZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6YS5jcmVhdGUoKX0pfXJldHVybiB0W25dfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIHI9MDtyPGU7KytyKXRbcl09MjU1Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4gdH1mdW5jdGlvbiBzKCl7dmFyIGUscj0oZT10LFwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4QXJyYXk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNyeXB0bz9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbXNDcnlwdG8/bXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTp1KG5ldyBVaW50OEFycmF5KGUpLGUpOnUobmV3IEFycmF5KGUpLGUpKTtyWzZdPTc5JnJbNl18NjQscls4XT0xOTEmcls4XXwxMjg7Zm9yKHZhciBuPVwiXCIsbz0wO288dDsrK28pe3ZhciBpPXJbb107NCE9PW8mJjYhPT1vJiY4IT09b3x8KG4rPVwiLVwiKSxpPDE2JiYobis9XCIwXCIpLG4rPWkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCl9cmV0dXJuIG59fSgpOldlYWtNYXApO2Z1bmN0aW9uIHkodCxlLHIpe3ZhciBuPXAuZ2V0KHQpO2lmKFQobikpe2lmKCFyKXJldHVybjtuPW5ldyBoLHAuc2V0KHQsbil9dmFyIG89bi5nZXQoZSk7aWYoVChvKSl7aWYoIXIpcmV0dXJuO289bmV3IGgsbi5zZXQoZSxvKX1yZXR1cm4gb31mdW5jdGlvbiBkKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4hMDt2YXIgbj1JKGUpO3JldHVybiFPKG4pJiZkKHQsbixyKX1mdW5jdGlvbiB2KHQsZSxyKXt2YXIgbj15KGUsciwhMSk7cmV0dXJuIVQobikmJiEhbi5oYXModCl9ZnVuY3Rpb24gXyh0LGUscil7aWYodih0LGUscikpcmV0dXJuIGcodCxlLHIpO3ZhciBuPUkoZSk7cmV0dXJuIE8obik/dm9pZCAwOl8odCxuLHIpfWZ1bmN0aW9uIGcodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtpZighVChuKSlyZXR1cm4gbi5nZXQodCl9ZnVuY3Rpb24gdyh0LGUscixuKXt5KHIsbiwhMCkuc2V0KHQsZSl9ZnVuY3Rpb24gYih0LGUpe3ZhciByPW0odCxlKSxuPUkodCk7aWYobnVsbD09PW4pcmV0dXJuIHI7dmFyIG89YihuLGUpO2lmKG8ubGVuZ3RoPD0wKXJldHVybiByO2lmKHIubGVuZ3RoPD0wKXJldHVybiBvO2Zvcih2YXIgaT1uZXcgbCx1PVtdLHM9MCxhPXI7czxhLmxlbmd0aDtzKyspe3ZhciBjPWFbc107aS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpfWZvcih2YXIgZj0wLGg9bztmPGgubGVuZ3RoO2YrKyljPWhbZl0saS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpO3JldHVybiB1fWZ1bmN0aW9uIG0odCxlKXt2YXIgcj1bXSxuPXkodCxlLCExKTtpZihUKG4pKXJldHVybiByO2Zvcih2YXIgaT1mdW5jdGlvbih0KXt2YXIgZT1BKHQsbyk7aWYoIVMoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgcj1lLmNhbGwodCk7aWYoIWoocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn0obi5rZXlzKCkpLHU9MDs7KXt2YXIgcz1DKGkpO2lmKCFzKXJldHVybiByLmxlbmd0aD11LHI7dmFyIGE9cy52YWx1ZTt0cnl7clt1XT1hfWNhdGNoKHQpe3RyeXtSKGkpfWZpbmFsbHl7dGhyb3cgdH19dSsrfX1mdW5jdGlvbiBrKHQpe2lmKG51bGw9PT10KXJldHVybiAxO3N3aXRjaCh0eXBlb2YgdCl7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuIDA7Y2FzZVwiYm9vbGVhblwiOnJldHVybiAyO2Nhc2VcInN0cmluZ1wiOnJldHVybiAzO2Nhc2VcInN5bWJvbFwiOnJldHVybiA0O2Nhc2VcIm51bWJlclwiOnJldHVybiA1O2Nhc2VcIm9iamVjdFwiOnJldHVybiBudWxsPT09dD8xOjY7ZGVmYXVsdDpyZXR1cm4gNn19ZnVuY3Rpb24gVCh0KXtyZXR1cm4gdm9pZCAwPT09dH1mdW5jdGlvbiBPKHQpe3JldHVybiBudWxsPT09dH1mdW5jdGlvbiBqKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24geCh0LGUpe3N3aXRjaChrKHQpKXtjYXNlIDA6Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gdH12YXIgcj0zPT09ZT9cInN0cmluZ1wiOjU9PT1lP1wibnVtYmVyXCI6XCJkZWZhdWx0XCIsbz1BKHQsbik7aWYodm9pZCAwIT09byl7dmFyIGk9by5jYWxsKHQscik7aWYoaihpKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBpfXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwic3RyaW5nXCI9PT1lKXt2YXIgcj10LnRvU3RyaW5nO2lmKFMocikmJiFqKG89ci5jYWxsKHQpKSlyZXR1cm4gbztpZihTKG49dC52YWx1ZU9mKSYmIWoobz1uLmNhbGwodCkpKXJldHVybiBvfWVsc2V7dmFyIG47aWYoUyhuPXQudmFsdWVPZikmJiFqKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt2YXIgbyxpPXQudG9TdHJpbmc7aWYoUyhpKSYmIWoobz1pLmNhbGwodCkpKXJldHVybiBvfXRocm93IG5ldyBUeXBlRXJyb3J9KHQsXCJkZWZhdWx0XCI9PT1yP1wibnVtYmVyXCI6cil9ZnVuY3Rpb24gRSh0KXt2YXIgZT14KHQsMyk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiK3R9KGUpfWZ1bmN0aW9uIE0odCl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheSh0KTp0IGluc3RhbmNlb2YgT2JqZWN0P3QgaW5zdGFuY2VvZiBBcnJheTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24gUyh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIFAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBBKHQsZSl7dmFyIHI9dFtlXTtpZihudWxsIT1yKXtpZighUyhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfX1mdW5jdGlvbiBDKHQpe3ZhciBlPXQubmV4dCgpO3JldHVybiFlLmRvbmUmJmV9ZnVuY3Rpb24gUih0KXt2YXIgZT10LnJldHVybjtlJiZlLmNhbGwodCl9ZnVuY3Rpb24gSSh0KXt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dD09PWMpcmV0dXJuIGU7aWYoZSE9PWMpcmV0dXJuIGU7dmFyIHI9dC5wcm90b3R5cGUsbj1yJiZPYmplY3QuZ2V0UHJvdG90eXBlT2Yocik7aWYobnVsbD09bnx8bj09PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuIGU7dmFyIG89bi5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBvfHxvPT09dD9lOm99ZnVuY3Rpb24gSyh0KXtyZXR1cm4gdC5fXz12b2lkIDAsZGVsZXRlIHQuX18sdH10KFwiZGVjb3JhdGVcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoVChyKSl7aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighUChlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbj0oMCx0W3JdKShlKTtpZighVChuKSYmIU8obikpe2lmKCFQKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7ZT1ufX1yZXR1cm4gZX0odCxlKX1pZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWoobikmJiFUKG4pJiYhTyhuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBPKG4pJiYobj12b2lkIDApLGZ1bmN0aW9uKHQsZSxyLG4pe2Zvcih2YXIgbz10Lmxlbmd0aC0xO28+PTA7LS1vKXt2YXIgaT0oMCx0W29dKShlLHIsbik7aWYoIVQoaSkmJiFPKGkpKXtpZighaihpKSl0aHJvdyBuZXcgVHlwZUVycm9yO249aX19cmV0dXJuIG59KHQsZSxyPUUociksbil9KSksdChcIm1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7aWYoIWoocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighVChuKSYmIWZ1bmN0aW9uKHQpe3N3aXRjaChrKHQpKXtjYXNlIDM6Y2FzZSA0OnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fShuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3codCxlLHIsbil9fSkpLHQoXCJkZWZpbmVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscixuKXtpZighaihyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKG4pfHwobj1FKG4pKSx3KHQsZSxyLG4pfSkpLHQoXCJoYXNNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChyKXx8KHI9RShyKSksZCh0LGUscil9KSksdChcImhhc093bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKHIpfHwocj1FKHIpKSx2KHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQocil8fChyPUUocikpLF8odCxlLHIpfSkpLHQoXCJnZXRPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChyKXx8KHI9RShyKSksZyh0LGUscil9KSksdChcImdldE1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFqKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQoZSl8fChlPUUoZSkpLGIodCxlKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWoodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChlKXx8KGU9RShlKSksbSh0LGUpfSkpLHQoXCJkZWxldGVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtUKHIpfHwocj1FKHIpKTt2YXIgbj15KGUsciwhMSk7aWYoVChuKSlyZXR1cm4hMTtpZighbi5kZWxldGUodCkpcmV0dXJuITE7aWYobi5zaXplPjApcmV0dXJuITA7dmFyIG89cC5nZXQoZSk7cmV0dXJuIG8uZGVsZXRlKHIpLG8uc2l6ZT4wfHxwLmRlbGV0ZShlKSwhMH0pKX0obyl9KCl9KG58fChuPXt9KSl9fSxlPXt9O2Z1bmN0aW9uIHIobil7dmFyIG89ZVtuXTtpZih2b2lkIDAhPT1vKXJldHVybiBvLmV4cG9ydHM7dmFyIGk9ZVtuXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbbl0oaSxpLmV4cG9ydHMsciksaS5leHBvcnRzfXIuZD0odCxlKT0+e2Zvcih2YXIgbiBpbiBlKXIubyhlLG4pJiYhci5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OmVbbl19KX0sci5nPWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMpcmV0dXJuIGdsb2JhbFRoaXM7dHJ5e3JldHVybiB0aGlzfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvd319KCksci5vPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyLnI9dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBuPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2N1c3RvbUVsZW1lbnRzLmdldCh0KXx8d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LGUpfX1yLnIobiksci5kKG4se0N1c3RvbUNvbXBvbmVudDooKT0+eSxjdXN0b21Db21wb25lbnQ6KCk9PnQscHJvcGVydHk6KCk9PmYscXVlcnk6KCk9PmwscXVlcnlBbGw6KCk9PnAsc3RhdGU6KCk9Pmh9KSxyKDY2MCk7Y29uc3QgZT1cImNvbXBvbmVudDphdHRyaWJ1dGVzXCI7Y2xhc3Mgb3tzdGF0aWMgcmVnaXN0ZXIodCxyKXtjb25zdCBuPVsuLi50aGlzLmdldCh0LmNvbnN0cnVjdG9yKSxyXTtSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGUsbix0LmNvbnN0cnVjdG9yKX1zdGF0aWMgZ2V0KHQpe2NvbnN0IHI9UmVmbGVjdC5nZXRNZXRhZGF0YShlLHQpO3JldHVybiBudWxsIT1yP3I6W119fWNvbnN0IGk9bmV3IGNsYXNze2Zyb20odCxlKXtpZihcInVuZGVmaW5lZFwiIT09dCl7aWYoXCJudWxsXCI9PT10KXJldHVybiBudWxsO3N3aXRjaChlLm5hbWUpe2Nhc2VcIlN0cmluZ1wiOmNhc2VcIk51bWJlclwiOnJldHVybiBlKHQpO2Nhc2VcIkJvb2xlYW5cIjpyZXR1cm5cIlwiPT09dHx8dCYmXCJ0cnVlXCI9PT10LnRvTG93ZXJDYXNlKCk7ZGVmYXVsdDpyZXR1cm4gSlNPTi5wYXJzZSh0KX19fXRvKHQpe3JldHVybiBudWxsPT10P3ZvaWQgMDp0LnRvU3RyaW5nKCl9fSx1PVwiY29tcG9uZW50OnByb3BlcnRpZXNcIjtjbGFzcyBze2NvbnN0cnVjdG9yKHQsZSl7dGhpcy5fa2V5PXQsdGhpcy5fb3B0aW9ucz1lfWdldCBrZXkoKXtyZXR1cm4gdGhpcy5fa2V5fWdldCBmaWVsZCgpe3JldHVybmBfJHt0aGlzLl9rZXl9YH1nZXQgYXR0cmlidXRlKCl7Y29uc3QgdD10aGlzLl9vcHRpb25zLmF0dHJpYnV0ZTtyZXR1cm4gdCYmXCJib29sZWFuXCIhPXR5cGVvZiB0P3Q6dGhpcy5fa2V5fWdldCBjb252ZXJ0ZXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX29wdGlvbnMuY29udmVydGVyKSYmdm9pZCAwIT09dD90Oml9Z2V0VHlwZSh0KXtyZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsdCx0aGlzLl9rZXkpfXN0YXRpYyByZWdpc3Rlcih0LGUpe1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEodSxlLHQuY29uc3RydWN0b3IsZS5hdHRyaWJ1dGUpfXN0YXRpYyBnZXQodCxlKXtyZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YSh1LHQuY29uc3RydWN0b3IsZSl9fWNsYXNzIGF7fWNsYXNzIGN7c3RhdGljIGdldCh0LGUpe2NvbnN0IHI9ZVt0LmZpZWxkXTtyZXR1cm4gciYmXCJvYmplY3RcIj09dHlwZW9mIHI/dGhpcy5jcmVhdGVQcm94eShyLCgodCxyKT0+e0FycmF5LmlzQXJyYXkocikmJlwibGVuZ3RoXCIhPT10fHxlLm5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LmtleSxyKX0pKTpyfXN0YXRpYyBwYXJzZSh0LGUscil7Y29uc3Qgbj1zLmdldCh0LGUpLG89bi5nZXRUeXBlKHQpLGk9bi5jb252ZXJ0ZXIuZnJvbShyLG8pO3RoaXMuc2V0KG4sdCxpKX1zdGF0aWMgc2V0KHQsZSxyKXtjb25zdCBuPWVbdC5maWVsZF07ciE9PW4mJihlW3QuZmllbGRdPXIsZS5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodC5rZXksbikpfXN0YXRpYyBjcmVhdGVQcm94eSh0LGUpe3JldHVybiBuZXcgUHJveHkodCx7c2V0Oih0LHIsbik9PihlKHIsdCksUmVmbGVjdC5zZXQodCxyLG4pKX0pfX1mdW5jdGlvbiBmKHQpe3JldHVybiBudWxsIT10fHwodD1uZXcgYSksZnVuY3Rpb24oZSxyKXt2YXIgbix1LGE7Y29uc3QgZj1uZXcgcyhyLHQpO2lmKHMucmVnaXN0ZXIoZSxmKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXQoZix0aGlzKX0sc2V0OmZ1bmN0aW9uKGUpe3ZhciByO2Muc2V0KGYsdGhpcyxlKTtjb25zdCBuPXQuYXR0cmlidXRlO2lmKFwiYm9vbGVhblwiIT10eXBlb2Ygbnx8bil7Y29uc3Qgbj1mLmdldFR5cGUodGhpcyk7aWYoXCJCb29sZWFuXCIhPT1uLm5hbWUpe2NvbnN0IG89KG51bGwhPT0ocj10LmNvbnZlcnRlcikmJnZvaWQgMCE9PXI/cjppKS50byhlLG4pO3RoaXMuc2V0QXR0cmlidXRlKGYuYXR0cmlidXRlLG8pfWVsc2UgdGhpcy50b2dnbGVBdHRyaWJ1dGUoZi5hdHRyaWJ1dGUsZSl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLG51bGw9PT0obj10LmF0dHJpYnV0ZSl8fHZvaWQgMD09PW58fG4pe2NvbnN0IG49bnVsbCE9PShhPW51bGw9PT0odT10LmF0dHJpYnV0ZSl8fHZvaWQgMD09PXU/dm9pZCAwOnUudG9TdHJpbmcoKSkmJnZvaWQgMCE9PWE/YTpyO28ucmVnaXN0ZXIoZSxuKX19fWZ1bmN0aW9uIGgoKXtyZXR1cm4gZih7YXR0cmlidXRlOiExfSl9ZnVuY3Rpb24gbCh0LGU9ITEpe3JldHVybiBmdW5jdGlvbihyLG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4se2dldDpmdW5jdGlvbigpe3JldHVybihlP3RoaXM6dGhpcy5zaGFkb3dSb290KS5xdWVyeVNlbGVjdG9yKHQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX1mdW5jdGlvbiBwKHQsZT0hMSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsbix7Z2V0OmZ1bmN0aW9uKCl7Y29uc3Qgcj0oZT90aGlzOnRoaXMuc2hhZG93Um9vdCkucXVlcnlTZWxlY3RvckFsbCh0KTtyZXR1cm4gQXJyYXkuZnJvbShyKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19Y2xhc3MgeSBleHRlbmRzIEhUTUxFbGVtZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuIG8uZ2V0KHRoaXMpfWNvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl9jaGFuZ2VzPW5ldyBNYXA7Y29uc3QgdD10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHQuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0LGUscil7Yy5wYXJzZSh0aGlzLHQscil9c3RhdGVIYXNDaGFuZ2VkKHQpe31yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCB0PXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gdCBpbiB5Ll90ZW1wbGF0ZXM/eS5fdGVtcGxhdGVzW3RdOnRoaXMuY3JlYXRlVGVtcGxhdGUodCl9Y3JlYXRlVGVtcGxhdGUodCl7dmFyIGU7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIHIuaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGU9bi5zdHlsZXMpJiZ2b2lkIDAhPT1lP2U6XCJcIn08L3N0eWxlPmAseS5fdGVtcGxhdGVzW3RdPXIscn1ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodCxlKXtjbGVhclRpbWVvdXQodGhpcy5fY2hhbmdlRGVib3VuY2UpLHRoaXMuX2NoYW5nZURlYm91bmNlPXNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZUhhc0NoYW5nZWQodGhpcy5fY2hhbmdlcyksdGhpcy5fY2hhbmdlcy5jbGVhcigpfSksNTApLHRoaXMuX2NoYW5nZXMuc2V0KHQsZSl9fXkuX3RlbXBsYXRlcz17fX0pKCksbn0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcblxuQGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxuZXhwb3J0IGNsYXNzIFBhZ2VJbmRpY2F0b3IgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MyAxNTMgMTUzIC8gMC40NDMpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvci5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MyAxNTMgMTUzKTtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3NpemUnLCAnYWN0aXZlLWluZGV4J107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaW5kaWNhdG9yczogSFRNTFNwYW5FbGVtZW50W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfYWN0aXZlSW5kZXg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2NvbnRyb2w6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgLyogQXR0cmlidXRlcyAqL1xuICAgIHNldCBzaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBET00gKi9cbiAgICBnZXQgY29udHJvbCgpIHtcbiAgICAgICAgdGhpcy5fY29udHJvbCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBwYXJ0PVwiY29udHJvbFwiPjwvZGl2PmBcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBfLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzaXplJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUocGFyc2VJbnQobmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZS1pbmRleCc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleChwYXJzZUludChuZXdWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBuZXdWYWx1ZSAtIHRoaXMuX3NpemU7XG5cbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBkZWx0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5kaWNhdG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVkID0gdGhpcy5faW5kaWNhdG9ycy5zcGxpY2UoZGVsdGEsIE1hdGguYWJzKGRlbHRhKSwgLi4uYWRkZWQpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC5hcHBlbmQoLi4uYWRkZWQpO1xuICAgICAgICByZW1vdmVkLmZvckVhY2goaW5kaWNhdG9yID0+IGluZGljYXRvci5yZW1vdmUoKSk7XG5cbiAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc2l6ZScsIG5ld1ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQWN0aXZlSW5kZXgobmV3SW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlSW5kZXggPT09IG5ld0luZGV4KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1t0aGlzLl9hY3RpdmVJbmRleF0/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IG5ld0luZGV4O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlLWluZGV4JywgbmV3SW5kZXgudG9TdHJpbmcoKSk7XG4gICAgfVxufSIsImltcG9ydCAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlSW5kaWNhdG9yIH0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcblxuZW51bSBTbmFwRGlyZWN0aW9uIHtcbiAgICBMZWZ0ID0gLTEsXG4gICAgUmlnaHQgPSAxXG59XG5cbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldycpXG5leHBvcnQgY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gKDI0cHggLyAyKSk7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbjpub3QoOmFjdGl2ZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgOmhvc3QoOmhvdmVyKSAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zbmFwRXZlbnQ6IEV2ZW50O1xuXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcGFuZWxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2xvdDogSFRNTFNsb3RFbGVtZW50O1xuICAgIHByaXZhdGUgX2xlZnRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHByaXZhdGUgX3JpZ2h0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcml2YXRlIF9pbmRpY2F0b3I6IFBhZ2VJbmRpY2F0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XG4gICAgfVxuXG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuXG4gICAgLyogRE9NICovXG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cblxuICAgIGdldCBkZWZhdWx0U2xvdCgpIHtcbiAgICAgICAgdGhpcy5fc2xvdCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxlZnRCdG4oKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVmdEJ0bjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHJpZ2h0QnRuKCkge1xuICAgICAgICB0aGlzLl9yaWdodEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmlnaHRCdG47XG4gICAgfVxuICAgIFxuICAgIGdldCBpbmRpY2F0b3IoKSB7XG4gICAgICAgIHRoaXMuX2luZGljYXRvciA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3InKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGljYXRvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gbGVmdFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI5IDEyLjcxbDggOCAxLjQxLTEuNDEtNi4yOS02LjI5SDI0di0ySDMuNDFsNi4yOS02LjI5LTEuNDEtMS40MS04IDhhMSAxIDAgMCAwIDAgMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBMZWZ0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiByaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gdGhpcy5kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSBsZW5ndGggLSAxO1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uTGVmdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXNvbHZlSW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpbmRleCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcbiAgICAgICAgICAgIHRoaXMucmlnaHRCdG4uZGlzYWJsZWQgPSBpbmRleCA9PT0gdGhpcy5fcGFuZWxDb3VudDtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc25hcEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHtzY3JvbGxMZWZ0OiBsZWZ0fSA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobGVmdCAvIHdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNuYXAoZGlyZWN0aW9uOiBTbmFwRGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbkBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXG5leHBvcnQgY2xhc3MgU25hcFZpZXdQYW5lbCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gXG4gICAgfVxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50J1xuXG5AY3VzdG9tQ29tcG9uZW50KCd3YWxsZXQtY2FyZCcpXG5leHBvcnQgY2xhc3MgV2FsbGV0Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgQHF1ZXJ5KCcubmFtZScpXG4gICAgcHJpdmF0ZSBfbmFtZVNwYW46IEhUTUxTcGFuRWxlbWVudFxuXG4gICAgQHByb3BlcnR5KClcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW91bnRcIj5QMC4wMDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRlSGFzQ2hhbmdlZChjaGFuZ2VzOiBNYXA8c3RyaW5nLCBhbnk+KTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhcygnbmFtZScpKVxuICAgICAgICAgICAgdGhpcy5fbmFtZVNwYW4uaW5uZXJUZXh0ID0gdGhpcy5uYW1lXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0AvY29tcG9uZW50cy93YWxsZXQtY2FyZCc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9zbmFwLXZpZXcnO1xuaW1wb3J0IHsgU25hcFZpZXcgfSBmcm9tICdAL2NvbXBvbmVudHMvc25hcC12aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RfY29udGFpbmVyJykgYXMgU25hcFZpZXc7XG5cbiAgICB0ZXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3NuYXAnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3RDb250YWluZXIuYWN0aXZlSW5kZXgpO1xuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9