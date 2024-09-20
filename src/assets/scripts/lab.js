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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFhLENBQUM7SUFFNUUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9wYWdlLWluZGljYXRvci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3NuYXAtdmlldy50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3ZpZXdzL2xhYi12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBGb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGN1c3RvbS1jb21wb25lbnQuanMuTElDRU5TRS50eHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PWUoKTp0LkN1c3RvbUNvbXBvbmVudD1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17NjYwOih0LGUscik9Pnt2YXIgbjshZnVuY3Rpb24odCl7IWZ1bmN0aW9uKGUpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiByLmc/ci5nOlwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIHRoaXM/dGhpczpGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpLG89aSh0KTtmdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7XCJmdW5jdGlvblwiIT10eXBlb2YgdFtyXSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KSxlJiZlKHIsbil9fXZvaWQgMD09PW4uUmVmbGVjdD9uLlJlZmxlY3Q9dDpvPWkobi5SZWZsZWN0LG8pLGZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wsbj1yJiZ2b2lkIDAhPT1TeW1ib2wudG9QcmltaXRpdmU/U3ltYm9sLnRvUHJpbWl0aXZlOlwiQEB0b1ByaW1pdGl2ZVwiLG89ciYmdm9pZCAwIT09U3ltYm9sLml0ZXJhdG9yP1N5bWJvbC5pdGVyYXRvcjpcIkBAaXRlcmF0b3JcIixpPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5jcmVhdGUsdT17X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkscz0haSYmIXUsYT17Y3JlYXRlOmk/ZnVuY3Rpb24oKXtyZXR1cm4gSyhPYmplY3QuY3JlYXRlKG51bGwpKX06dT9mdW5jdGlvbigpe3JldHVybiBLKHtfX3Byb3RvX186bnVsbH0pfTpmdW5jdGlvbigpe3JldHVybiBLKHt9KX0saGFzOnM/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscil9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUgaW4gdH0sZ2V0OnM/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscik/dFtyXTp2b2lkIDB9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV19fSxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbiksZj1cIm9iamVjdFwiPT10eXBlb2YgcHJvY2VzcyYmcHJvY2Vzcy5lbnYmJlwidHJ1ZVwiPT09cHJvY2Vzcy5lbnYuUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMLGg9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXt2YXIgdD17fSxlPVtdLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt0aGlzLl9pbmRleD0wLHRoaXMuX2tleXM9dCx0aGlzLl92YWx1ZXM9ZSx0aGlzLl9zZWxlY3Rvcj1yfXJldHVybiB0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2luZGV4O2lmKHQ+PTAmJnQ8dGhpcy5fa2V5cy5sZW5ndGgpe3ZhciByPXRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbdF0sdGhpcy5fdmFsdWVzW3RdKTtyZXR1cm4gdCsxPj10aGlzLl9rZXlzLmxlbmd0aD8odGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKTp0aGlzLl9pbmRleCsrLHt2YWx1ZTpyLGRvbmU6ITF9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19LHQucHJvdG90eXBlLnRocm93PWZ1bmN0aW9uKHQpe3Rocm93IHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx0fSx0LnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx7dmFsdWU6dCxkb25lOiEwfX0sdH0oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5fa2V5cz1bXSx0aGlzLl92YWx1ZXM9W10sdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ZpbmQodCwhMSk+PTB9LGUucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9maW5kKHQsITEpO3JldHVybiBlPj0wP3RoaXMuX3ZhbHVlc1tlXTp2b2lkIDB9LGUucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX2ZpbmQodCwhMCk7cmV0dXJuIHRoaXMuX3ZhbHVlc1tyXT1lLHRoaXN9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgcj10aGlzLl9maW5kKGUsITEpO2lmKHI+PTApe2Zvcih2YXIgbj10aGlzLl9rZXlzLmxlbmd0aCxvPXIrMTtvPG47bysrKXRoaXMuX2tleXNbby0xXT10aGlzLl9rZXlzW29dLHRoaXMuX3ZhbHVlc1tvLTFdPXRoaXMuX3ZhbHVlc1tvXTtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGgtLSx0aGlzLl92YWx1ZXMubGVuZ3RoLS0sZT09PXRoaXMuX2NhY2hlS2V5JiYodGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yKSwhMH1yZXR1cm4hMX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXlzLmxlbmd0aD0wLHRoaXMuX3ZhbHVlcy5sZW5ndGg9MCx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9LGUucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsbil9LGUucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxpKX0sZS5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyx1KX0sZS5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGUuX2ZpbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fY2FjaGVLZXkhPT10JiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXk9dCkpLHRoaXMuX2NhY2hlSW5kZXg8MCYmZSYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5sZW5ndGgsdGhpcy5fa2V5cy5wdXNoKHQpLHRoaXMuX3ZhbHVlcy5wdXNoKHZvaWQgMCkpLHRoaXMuX2NhY2hlSW5kZXh9LGV9KCk7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0fWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuW3QsZV19fSgpOk1hcCxsPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldHx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX21hcD1uZXcgaH1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuaGFzKHQpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5zZXQodCx0KSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5kZWxldGUodCl9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fbWFwLmNsZWFyKCl9LHQucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmtleXMoKX0sdC5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKX0sdC5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuZW50cmllcygpfSx0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0fSgpOlNldCxwPW5ldyhmfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBXZWFrTWFwP2Z1bmN0aW9uKCl7dmFyIHQ9MTYscj1hLmNyZWF0ZSgpLG49bygpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9rZXk9bygpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmYS5oYXMoZSx0aGlzLl9rZXkpfSx0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZT9hLmdldChlLHRoaXMuX2tleSk6dm9pZCAwfSx0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaSh0LCEwKVt0aGlzLl9rZXldPWUsdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJmRlbGV0ZSBlW3RoaXMuX2tleV19LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5PW8oKX0sdH0oKTtmdW5jdGlvbiBvKCl7dmFyIHQ7ZG97dD1cIkBAV2Vha01hcEBAXCIrcygpfXdoaWxlKGEuaGFzKHIsdCkpO3JldHVybiByW3RdPSEwLHR9ZnVuY3Rpb24gaSh0LHIpe2lmKCFlLmNhbGwodCxuKSl7aWYoIXIpcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOmEuY3JlYXRlKCl9KX1yZXR1cm4gdFtuXX1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciByPTA7cjxlOysrcil0W3JdPTI1NSpNYXRoLnJhbmRvbSgpfDA7cmV0dXJuIHR9ZnVuY3Rpb24gcygpe3ZhciBlLHI9KGU9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBVaW50OEFycmF5P1widW5kZWZpbmVkXCIhPXR5cGVvZiBjcnlwdG8/Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1zQ3J5cHRvP21zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6dShuZXcgVWludDhBcnJheShlKSxlKTp1KG5ldyBBcnJheShlKSxlKSk7cls2XT03OSZyWzZdfDY0LHJbOF09MTkxJnJbOF18MTI4O2Zvcih2YXIgbj1cIlwiLG89MDtvPHQ7KytvKXt2YXIgaT1yW29dOzQhPT1vJiY2IT09byYmOCE9PW98fChuKz1cIi1cIiksaTwxNiYmKG4rPVwiMFwiKSxuKz1pLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpfXJldHVybiBufX0oKTpXZWFrTWFwKTtmdW5jdGlvbiB5KHQsZSxyKXt2YXIgbj1wLmdldCh0KTtpZihUKG4pKXtpZighcilyZXR1cm47bj1uZXcgaCxwLnNldCh0LG4pfXZhciBvPW4uZ2V0KGUpO2lmKFQobykpe2lmKCFyKXJldHVybjtvPW5ldyBoLG4uc2V0KGUsbyl9cmV0dXJuIG99ZnVuY3Rpb24gZCh0LGUscil7aWYodih0LGUscikpcmV0dXJuITA7dmFyIG49SShlKTtyZXR1cm4hTyhuKSYmZCh0LG4scil9ZnVuY3Rpb24gdih0LGUscil7dmFyIG49eShlLHIsITEpO3JldHVybiFUKG4pJiYhIW4uaGFzKHQpfWZ1bmN0aW9uIF8odCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiBnKHQsZSxyKTt2YXIgbj1JKGUpO3JldHVybiBPKG4pP3ZvaWQgMDpfKHQsbixyKX1mdW5jdGlvbiBnKHQsZSxyKXt2YXIgbj15KGUsciwhMSk7aWYoIVQobikpcmV0dXJuIG4uZ2V0KHQpfWZ1bmN0aW9uIHcodCxlLHIsbil7eShyLG4sITApLnNldCh0LGUpfWZ1bmN0aW9uIGIodCxlKXt2YXIgcj1tKHQsZSksbj1JKHQpO2lmKG51bGw9PT1uKXJldHVybiByO3ZhciBvPWIobixlKTtpZihvLmxlbmd0aDw9MClyZXR1cm4gcjtpZihyLmxlbmd0aDw9MClyZXR1cm4gbztmb3IodmFyIGk9bmV3IGwsdT1bXSxzPTAsYT1yO3M8YS5sZW5ndGg7cysrKXt2YXIgYz1hW3NdO2kuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKX1mb3IodmFyIGY9MCxoPW87ZjxoLmxlbmd0aDtmKyspYz1oW2ZdLGkuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKTtyZXR1cm4gdX1mdW5jdGlvbiBtKHQsZSl7dmFyIHI9W10sbj15KHQsZSwhMSk7aWYoVChuKSlyZXR1cm4gcjtmb3IodmFyIGk9ZnVuY3Rpb24odCl7dmFyIGU9QSh0LG8pO2lmKCFTKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9ZS5jYWxsKHQpO2lmKCFqKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9KG4ua2V5cygpKSx1PTA7Oyl7dmFyIHM9QyhpKTtpZighcylyZXR1cm4gci5sZW5ndGg9dSxyO3ZhciBhPXMudmFsdWU7dHJ5e3JbdV09YX1jYXRjaCh0KXt0cnl7UihpKX1maW5hbGx5e3Rocm93IHR9fXUrK319ZnVuY3Rpb24gayh0KXtpZihudWxsPT09dClyZXR1cm4gMTtzd2l0Y2godHlwZW9mIHQpe2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiAwO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gMjtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gMztjYXNlXCJzeW1ib2xcIjpyZXR1cm4gNDtjYXNlXCJudW1iZXJcIjpyZXR1cm4gNTtjYXNlXCJvYmplY3RcIjpyZXR1cm4gbnVsbD09PXQ/MTo2O2RlZmF1bHQ6cmV0dXJuIDZ9fWZ1bmN0aW9uIFQodCl7cmV0dXJuIHZvaWQgMD09PXR9ZnVuY3Rpb24gTyh0KXtyZXR1cm4gbnVsbD09PXR9ZnVuY3Rpb24gaih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIHgodCxlKXtzd2l0Y2goayh0KSl7Y2FzZSAwOmNhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6cmV0dXJuIHR9dmFyIHI9Mz09PWU/XCJzdHJpbmdcIjo1PT09ZT9cIm51bWJlclwiOlwiZGVmYXVsdFwiLG89QSh0LG4pO2lmKHZvaWQgMCE9PW8pe3ZhciBpPW8uY2FsbCh0LHIpO2lmKGooaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaX1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiPT09ZSl7dmFyIHI9dC50b1N0cmluZztpZihTKHIpJiYhaihvPXIuY2FsbCh0KSkpcmV0dXJuIG87aWYoUyhuPXQudmFsdWVPZikmJiFqKG89bi5jYWxsKHQpKSlyZXR1cm4gb31lbHNle3ZhciBuO2lmKFMobj10LnZhbHVlT2YpJiYhaihvPW4uY2FsbCh0KSkpcmV0dXJuIG87dmFyIG8saT10LnRvU3RyaW5nO2lmKFMoaSkmJiFqKG89aS5jYWxsKHQpKSlyZXR1cm4gb310aHJvdyBuZXcgVHlwZUVycm9yfSh0LFwiZGVmYXVsdFwiPT09cj9cIm51bWJlclwiOnIpfWZ1bmN0aW9uIEUodCl7dmFyIGU9eCh0LDMpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIit0fShlKX1mdW5jdGlvbiBNKHQpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkodCk6dCBpbnN0YW5jZW9mIE9iamVjdD90IGluc3RhbmNlb2YgQXJyYXk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIFModCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBQKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gQSh0LGUpe3ZhciByPXRbZV07aWYobnVsbCE9cil7aWYoIVMocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn19ZnVuY3Rpb24gQyh0KXt2YXIgZT10Lm5leHQoKTtyZXR1cm4hZS5kb25lJiZlfWZ1bmN0aW9uIFIodCl7dmFyIGU9dC5yZXR1cm47ZSYmZS5jYWxsKHQpfWZ1bmN0aW9uIEkodCl7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQ9PT1jKXJldHVybiBlO2lmKGUhPT1jKXJldHVybiBlO3ZhciByPXQucHJvdG90eXBlLG49ciYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2lmKG51bGw9PW58fG49PT1PYmplY3QucHJvdG90eXBlKXJldHVybiBlO3ZhciBvPW4uY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8bz09PXQ/ZTpvfWZ1bmN0aW9uIEsodCl7cmV0dXJuIHQuX189dm9pZCAwLGRlbGV0ZSB0Ll9fLHR9dChcImRlY29yYXRlXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKFQocikpe2lmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIVAoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5sZW5ndGgtMTtyPj0wOy0tcil7dmFyIG49KDAsdFtyXSkoZSk7aWYoIVQobikmJiFPKG4pKXtpZighUChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO2U9bn19cmV0dXJuIGV9KHQsZSl9aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFqKG4pJiYhVChuKSYmIU8obikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gTyhuKSYmKG49dm9pZCAwKSxmdW5jdGlvbih0LGUscixuKXtmb3IodmFyIG89dC5sZW5ndGgtMTtvPj0wOy0tbyl7dmFyIGk9KDAsdFtvXSkoZSxyLG4pO2lmKCFUKGkpJiYhTyhpKSl7aWYoIWooaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtuPWl9fXJldHVybiBufSh0LGUscj1FKHIpLG4pfSkpLHQoXCJtZXRhZGF0YVwiLChmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe2lmKCFqKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIVQobikmJiFmdW5jdGlvbih0KXtzd2l0Y2goayh0KSl7Y2FzZSAzOmNhc2UgNDpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX0obikpdGhyb3cgbmV3IFR5cGVFcnJvcjt3KHQsZSxyLG4pfX0pKSx0KFwiZGVmaW5lTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoIWoocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChuKXx8KG49RShuKSksdyh0LGUscixuKX0pKSx0KFwiaGFzTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQocil8fChyPUUocikpLGQodCxlLHIpfSkpLHQoXCJoYXNPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChyKXx8KHI9RShyKSksdih0LGUscil9KSksdChcImdldE1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKHIpfHwocj1FKHIpKSxfKHQsZSxyKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQocil8fChyPUUocikpLGcodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighaih0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKGUpfHwoZT1FKGUpKSxiKHQsZSl9KSksdChcImdldE93bk1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFqKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQoZSl8fChlPUUoZSkpLG0odCxlKX0pKSx0KFwiZGVsZXRlTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7VChyKXx8KHI9RShyKSk7dmFyIG49eShlLHIsITEpO2lmKFQobikpcmV0dXJuITE7aWYoIW4uZGVsZXRlKHQpKXJldHVybiExO2lmKG4uc2l6ZT4wKXJldHVybiEwO3ZhciBvPXAuZ2V0KGUpO3JldHVybiBvLmRlbGV0ZShyKSxvLnNpemU+MHx8cC5kZWxldGUoZSksITB9KSl9KG8pfSgpfShufHwobj17fSkpfX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIuZz1mdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzKXJldHVybiBnbG9iYWxUaGlzO3RyeXtyZXR1cm4gdGhpc3x8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3d9fSgpLHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiBmdW5jdGlvbihlKXtjdXN0b21FbGVtZW50cy5nZXQodCl8fHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodCxlKX19ci5yKG4pLHIuZChuLHtDdXN0b21Db21wb25lbnQ6KCk9PnksY3VzdG9tQ29tcG9uZW50OigpPT50LHByb3BlcnR5OigpPT5mLHF1ZXJ5OigpPT5sLHF1ZXJ5QWxsOigpPT5wLHN0YXRlOigpPT5ofSkscig2NjApO2NvbnN0IGU9XCJjb21wb25lbnQ6YXR0cmlidXRlc1wiO2NsYXNzIG97c3RhdGljIHJlZ2lzdGVyKHQscil7Y29uc3Qgbj1bLi4udGhpcy5nZXQodC5jb25zdHJ1Y3Rvcikscl07UmVmbGVjdC5kZWZpbmVNZXRhZGF0YShlLG4sdC5jb25zdHJ1Y3Rvcil9c3RhdGljIGdldCh0KXtjb25zdCByPVJlZmxlY3QuZ2V0TWV0YWRhdGEoZSx0KTtyZXR1cm4gbnVsbCE9cj9yOltdfX1jb25zdCBpPW5ldyBjbGFzc3tmcm9tKHQsZSl7aWYoXCJ1bmRlZmluZWRcIiE9PXQpe2lmKFwibnVsbFwiPT09dClyZXR1cm4gbnVsbDtzd2l0Y2goZS5uYW1lKXtjYXNlXCJTdHJpbmdcIjpjYXNlXCJOdW1iZXJcIjpyZXR1cm4gZSh0KTtjYXNlXCJCb29sZWFuXCI6cmV0dXJuXCJcIj09PXR8fHQmJlwidHJ1ZVwiPT09dC50b0xvd2VyQ2FzZSgpO2RlZmF1bHQ6cmV0dXJuIEpTT04ucGFyc2UodCl9fX10byh0KXtyZXR1cm4gbnVsbD09dD92b2lkIDA6dC50b1N0cmluZygpfX0sdT1cImNvbXBvbmVudDpwcm9wZXJ0aWVzXCI7Y2xhc3Mgc3tjb25zdHJ1Y3Rvcih0LGUpe3RoaXMuX2tleT10LHRoaXMuX29wdGlvbnM9ZX1nZXQga2V5KCl7cmV0dXJuIHRoaXMuX2tleX1nZXQgZmllbGQoKXtyZXR1cm5gXyR7dGhpcy5fa2V5fWB9Z2V0IGF0dHJpYnV0ZSgpe2NvbnN0IHQ9dGhpcy5fb3B0aW9ucy5hdHRyaWJ1dGU7cmV0dXJuIHQmJlwiYm9vbGVhblwiIT10eXBlb2YgdD90OnRoaXMuX2tleX1nZXQgY29udmVydGVyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9vcHRpb25zLmNvbnZlcnRlcikmJnZvaWQgMCE9PXQ/dDppfWdldFR5cGUodCl7cmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLHQsdGhpcy5fa2V5KX1zdGF0aWMgcmVnaXN0ZXIodCxlKXtSZWZsZWN0LmRlZmluZU1ldGFkYXRhKHUsZSx0LmNvbnN0cnVjdG9yLGUuYXR0cmlidXRlKX1zdGF0aWMgZ2V0KHQsZSl7cmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEodSx0LmNvbnN0cnVjdG9yLGUpfX1jbGFzcyBhe31jbGFzcyBje3N0YXRpYyBnZXQodCxlKXtjb25zdCByPWVbdC5maWVsZF07cmV0dXJuIHImJlwib2JqZWN0XCI9PXR5cGVvZiByP3RoaXMuY3JlYXRlUHJveHkociwoKHQscik9PntBcnJheS5pc0FycmF5KHIpJiZcImxlbmd0aFwiIT09dHx8ZS5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodC5rZXkscil9KSk6cn1zdGF0aWMgcGFyc2UodCxlLHIpe2NvbnN0IG49cy5nZXQodCxlKSxvPW4uZ2V0VHlwZSh0KSxpPW4uY29udmVydGVyLmZyb20ocixvKTt0aGlzLnNldChuLHQsaSl9c3RhdGljIHNldCh0LGUscil7Y29uc3Qgbj1lW3QuZmllbGRdO3IhPT1uJiYoZVt0LmZpZWxkXT1yLGUubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKHQua2V5LG4pKX1zdGF0aWMgY3JlYXRlUHJveHkodCxlKXtyZXR1cm4gbmV3IFByb3h5KHQse3NldDoodCxyLG4pPT4oZShyLHQpLFJlZmxlY3Quc2V0KHQscixuKSl9KX19ZnVuY3Rpb24gZih0KXtyZXR1cm4gbnVsbCE9dHx8KHQ9bmV3IGEpLGZ1bmN0aW9uKGUscil7dmFyIG4sdSxhO2NvbnN0IGY9bmV3IHMocix0KTtpZihzLnJlZ2lzdGVyKGUsZiksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGMuZ2V0KGYsdGhpcyl9LHNldDpmdW5jdGlvbihlKXt2YXIgcjtjLnNldChmLHRoaXMsZSk7Y29uc3Qgbj10LmF0dHJpYnV0ZTtpZihcImJvb2xlYW5cIiE9dHlwZW9mIG58fG4pe2NvbnN0IG49Zi5nZXRUeXBlKHRoaXMpO2lmKFwiQm9vbGVhblwiIT09bi5uYW1lKXtjb25zdCBvPShudWxsIT09KHI9dC5jb252ZXJ0ZXIpJiZ2b2lkIDAhPT1yP3I6aSkudG8oZSxuKTt0aGlzLnNldEF0dHJpYnV0ZShmLmF0dHJpYnV0ZSxvKX1lbHNlIHRoaXMudG9nZ2xlQXR0cmlidXRlKGYuYXR0cmlidXRlLGUpfX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxudWxsPT09KG49dC5hdHRyaWJ1dGUpfHx2b2lkIDA9PT1ufHxuKXtjb25zdCBuPW51bGwhPT0oYT1udWxsPT09KHU9dC5hdHRyaWJ1dGUpfHx2b2lkIDA9PT11P3ZvaWQgMDp1LnRvU3RyaW5nKCkpJiZ2b2lkIDAhPT1hP2E6cjtvLnJlZ2lzdGVyKGUsbil9fX1mdW5jdGlvbiBoKCl7cmV0dXJuIGYoe2F0dHJpYnV0ZTohMX0pfWZ1bmN0aW9uIGwodCxlPSExKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkocixuLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4oZT90aGlzOnRoaXMuc2hhZG93Um9vdCkucXVlcnlTZWxlY3Rvcih0KX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19ZnVuY3Rpb24gcCh0LGU9ITEpe3JldHVybiBmdW5jdGlvbihyLG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4se2dldDpmdW5jdGlvbigpe2NvbnN0IHI9KGU/dGhpczp0aGlzLnNoYWRvd1Jvb3QpLnF1ZXJ5U2VsZWN0b3JBbGwodCk7cmV0dXJuIEFycmF5LmZyb20ocil9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9fWNsYXNzIHkgZXh0ZW5kcyBIVE1MRWxlbWVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybiBvLmdldCh0aGlzKX1jb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fY2hhbmdlcz1uZXcgTWFwO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxlLHIpe2MucGFyc2UodGhpcyx0LHIpfXN0YXRlSGFzQ2hhbmdlZCh0KXt9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgdD10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIHQgaW4geS5fdGVtcGxhdGVzP3kuX3RlbXBsYXRlc1t0XTp0aGlzLmNyZWF0ZVRlbXBsYXRlKHQpfWNyZWF0ZVRlbXBsYXRlKHQpe3ZhciBlO2NvbnN0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiByLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShlPW4uc3R5bGVzKSYmdm9pZCAwIT09ZT9lOlwiXCJ9PC9zdHlsZT5gLHkuX3RlbXBsYXRlc1t0XT1yLHJ9bm90aWZ5U3RhdGVIYXNDaGFuZ2VkKHQsZSl7Y2xlYXJUaW1lb3V0KHRoaXMuX2NoYW5nZURlYm91bmNlKSx0aGlzLl9jaGFuZ2VEZWJvdW5jZT1zZXRUaW1lb3V0KCgoKT0+e3RoaXMuc3RhdGVIYXNDaGFuZ2VkKHRoaXMuX2NoYW5nZXMpLHRoaXMuX2NoYW5nZXMuY2xlYXIoKX0pLDUwKSx0aGlzLl9jaGFuZ2VzLnNldCh0LGUpfX15Ll90ZW1wbGF0ZXM9e319KSgpLG59KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tY29tcG9uZW50LmpzLm1hcCIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5cbkBjdXN0b21Db21wb25lbnQoJ3BhZ2UtaW5kaWNhdG9yJylcbmV4cG9ydCBjbGFzcyBQYWdlSW5kaWNhdG9yIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMgMTUzIDE1MyAvIDAuNDQzKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3IuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMgMTUzIDE1Myk7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWydzaXplJywgJ2FjdGl2ZS1pbmRleCddO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luZGljYXRvcnM6IEhUTUxTcGFuRWxlbWVudFtdID0gW107XG5cbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2FjdGl2ZUluZGV4OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9jb250cm9sOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIC8qIEF0dHJpYnV0ZXMgKi9cbiAgICBzZXQgc2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0IGFjdGl2ZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyogRE9NICovXG4gICAgZ2V0IGNvbnRyb2woKSB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb250cm9sXCIgcGFydD1cImNvbnRyb2xcIj48L2Rpdj5gXG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgXywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBzd2l0Y2gobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc2l6ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKHBhcnNlSW50KG5ld1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhY3RpdmUtaW5kZXgnOlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlSW5kZXgocGFyc2VJbnQobmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZShuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gbmV3VmFsdWUgLSB0aGlzLl9zaXplO1xuXG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuX2luZGljYXRvcnMuc3BsaWNlKGRlbHRhLCBNYXRoLmFicyhkZWx0YSksIC4uLmFkZGVkKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kKC4uLmFkZGVkKTtcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xuXG4gICAgICAgIHRoaXMuX3NpemUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXdWYWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUluZGV4ID09PSBuZXdJbmRleCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5fYWN0aXZlSW5kZXhdPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1tuZXdJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZS1pbmRleCcsIG5ld0luZGV4LnRvU3RyaW5nKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUluZGljYXRvciB9IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5cbmVudW0gU25hcERpcmVjdGlvbiB7XG4gICAgTGVmdCA9IC0xLFxuICAgIFJpZ2h0ID0gMVxufVxuXG5AY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXcnKVxuZXhwb3J0IGNsYXNzIFNuYXBWaWV3IGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtICgyNHB4IC8gMikpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbi5sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbi5yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b246bm90KDphY3RpdmUpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIDpob3N0KDpob3ZlcikgLnNuYXBCdXR0b246bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc25hcEV2ZW50OiBFdmVudDtcblxuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3BhbmVsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9jb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgX3Nsb3Q6IEhUTUxTbG90RWxlbWVudDtcbiAgICBwcml2YXRlIF9sZWZ0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcml2YXRlIF9yaWdodEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfaW5kaWNhdG9yOiBQYWdlSW5kaWNhdG9yO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NuYXBFdmVudCA9IG5ldyBFdmVudCgnc25hcCcpO1xuICAgIH1cblxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cblxuICAgIC8qIERPTSAqL1xuICAgIGdldCBjb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdFNsb3QoKSB7XG4gICAgICAgIHRoaXMuX3Nsb3QgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xuICAgIH1cblxuICAgIGdldCBsZWZ0QnRuKCkge1xuICAgICAgICB0aGlzLl9sZWZ0QnRuID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlZnRCdG47XG4gICAgfVxuICAgIFxuICAgIGdldCByaWdodEJ0bigpIHtcbiAgICAgICAgdGhpcy5fcmlnaHRCdG4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpZ2h0QnRuO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaW5kaWNhdG9yKCkge1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3IgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRpY2F0b3I7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4yOSAxMi43MWw4IDggMS40MS0xLjQxLTYuMjktNi4yOUgyNHYtMkgzLjQxbDYuMjktNi4yOS0xLjQxLTEuNDEtOCA4YTEgMSAwIDAgMCAwIDEuNDF6XCIgZGF0YS1uYW1lPVwiQXJyb3cgTGVmdFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzEgMTEuMjlsLTgtOC0xLjQxIDEuNDEgNi4yOSA2LjI5SDB2MmgyMC41OWwtNi4yOSA2LjI5IDEuNDEgMS40MSA4LThhMSAxIDAgMCAwIDAtMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBSaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwYWdlLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHBhcnQ9XCJpbmRpY2F0b3JcIj48L3BhZ2UtaW5kaWNhdG9yPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRTbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7bGVuZ3RofSA9IHRoaXMuZGVmYXVsdFNsb3QuYXNzaWduZWRFbGVtZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLnNpemUgPSBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5SaWdodCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLkxlZnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzb2x2ZUluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gaW5kZXgpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMubGVmdEJ0bi5kaXNhYmxlZCA9IGluZGV4IDw9IDA7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnRuLmRpc2FibGVkID0gaW5kZXggPT09IHRoaXMuX3BhbmVsQ291bnQ7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX3NuYXBFdmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZUluZGV4KCkge1xuICAgICAgICBjb25zdCB7c2Nyb2xsTGVmdDogbGVmdH0gPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGxlZnQgLyB3aWR0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzbmFwKGRpcmVjdGlvbjogU25hcERpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgbGVmdDogKHRoaXMuX2luZGV4ICsgZGlyZWN0aW9uKSAqIHdpZHRoLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5AY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXctcGFuZWwnKVxuZXhwb3J0IGNsYXNzIFNuYXBWaWV3UGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8c2xvdD48L3Nsb3Q+YFxuICAgIH1cbn0iLCJpbXBvcnQgeyBjdXN0b21Db21wb25lbnQsIEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xuXG5AY3VzdG9tQ29tcG9uZW50KCd3YWxsZXQtY2FyZCcpXG5leHBvcnQgY2xhc3MgV2FsbGV0Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDgwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkEzMjk5O1xuICAgICAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvYiB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2JcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQC9jb21wb25lbnRzL3dhbGxldC1jYXJkJztcbmltcG9ydCAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XG5pbXBvcnQgeyBTbmFwVmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9zbmFwLXZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdF9jb250YWluZXInKSBhcyBTbmFwVmlldztcblxuICAgIHRlc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc25hcCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGVzdENvbnRhaW5lci5hY3RpdmVJbmRleCk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=