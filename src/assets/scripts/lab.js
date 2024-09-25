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

/***/ "./scripts/components/wallet-card.component.scss":
/*!*******************************************************!*\
  !*** ./scripts/components/wallet-card.component.scss ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  background-color: blueviolet;
  border-radius: 12px;
  color: white;
  display: flex;
  font-family: "Geist Variable", sans-serif;
  height: 128px;
  padding: 10px;
  width: 256px;
}

.name {
  font-size: 1.125em;
  font-weight: 500;
  font-variation-settings: "wght" 400;
}`, "",{"version":3,"sources":["webpack://./scripts/components/wallet-card.component.scss"],"names":[],"mappings":"AAAA;EACI,4BAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,yCAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;AACJ;;AAEA;EACI,kBAAA;EACA,gBAAA;EACA,mCAAA;AACJ","sourcesContent":[":host {\r\n    background-color: blueviolet;\r\n    border-radius: 12px;\r\n    color: white;\r\n    display: flex;\r\n    font-family: 'Geist Variable', sans-serif;\r\n    height: 128px;\r\n    padding: 10px;\r\n    width: 256px;\r\n}\r\n\r\n.name {\r\n    font-size: 1.125em;\r\n    font-weight: 500;\r\n    font-variation-settings: 'wght' 400;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
/* harmony import */ var _wallet_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-card.component.scss */ "./scripts/components/wallet-card.component.scss");
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
WalletCard.styles = _wallet_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"].toString();
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
/******/ 			id: moduleId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUdoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQWEsQ0FBQztJQUU1RSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1tb25leS8uLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy93YWxsZXQtY2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvc25hcC12aWV3LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvdmlld3MvbGFiLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEZvciBsaWNlbnNlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgY3VzdG9tLWNvbXBvbmVudC5qcy5MSUNFTlNFLnR4dCAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DdXN0b21Db21wb25lbnQ9ZSgpOnQuQ3VzdG9tQ29tcG9uZW50PWUoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciB0PXs2NjA6KHQsZSxyKT0+e3ZhciBuOyFmdW5jdGlvbih0KXshZnVuY3Rpb24oZSl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHIuZz9yLmc6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgdGhpcz90aGlzOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCksbz1pKHQpO2Z1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W3JdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pLGUmJmUocixuKX19dm9pZCAwPT09bi5SZWZsZWN0P24uUmVmbGVjdD10Om89aShuLlJlZmxlY3QsbyksZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCxuPXImJnZvaWQgMCE9PVN5bWJvbC50b1ByaW1pdGl2ZT9TeW1ib2wudG9QcmltaXRpdmU6XCJAQHRvUHJpbWl0aXZlXCIsbz1yJiZ2b2lkIDAhPT1TeW1ib2wuaXRlcmF0b3I/U3ltYm9sLml0ZXJhdG9yOlwiQEBpdGVyYXRvclwiLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmNyZWF0ZSx1PXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxhPSFpJiYhdSxzPXtjcmVhdGU6aT9mdW5jdGlvbigpe3JldHVybiBIKE9iamVjdC5jcmVhdGUobnVsbCkpfTp1P2Z1bmN0aW9uKCl7cmV0dXJuIEgoe19fcHJvdG9fXzpudWxsfSl9OmZ1bmN0aW9uKCl7cmV0dXJuIEgoe30pfSxoYXM6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKX06ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSBpbiB0fSxnZXQ6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKT90W3JdOnZvaWQgMH06ZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXX19LGM9T2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzJiZwcm9jZXNzLmVudiYmXCJ0cnVlXCI9PT1wcm9jZXNzLmVudi5SRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTEwsaD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXB8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe3ZhciB0PXt9LGU9W10scj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3RoaXMuX2luZGV4PTAsdGhpcy5fa2V5cz10LHRoaXMuX3ZhbHVlcz1lLHRoaXMuX3NlbGVjdG9yPXJ9cmV0dXJuIHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5faW5kZXg7aWYodD49MCYmdDx0aGlzLl9rZXlzLmxlbmd0aCl7dmFyIHI9dGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1t0XSx0aGlzLl92YWx1ZXNbdF0pO3JldHVybiB0KzE+PXRoaXMuX2tleXMubGVuZ3RoPyh0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpOnRoaXMuX2luZGV4Kysse3ZhbHVlOnIsZG9uZTohMX19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX0sdC5wcm90b3R5cGUudGhyb3c9ZnVuY3Rpb24odCl7dGhyb3cgdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHR9LHQucHJvdG90eXBlLnJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHt2YWx1ZTp0LGRvbmU6ITB9fSx0fSgpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLl9rZXlzPVtdLHRoaXMuX3ZhbHVlcz1bXSx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RofSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fZmluZCh0LCExKT49MH0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2ZpbmQodCwhMSk7cmV0dXJuIGU+PTA/dGhpcy5fdmFsdWVzW2VdOnZvaWQgMH0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fZmluZCh0LCEwKTtyZXR1cm4gdGhpcy5fdmFsdWVzW3JdPWUsdGhpc30sZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciByPXRoaXMuX2ZpbmQoZSwhMSk7aWYocj49MCl7Zm9yKHZhciBuPXRoaXMuX2tleXMubGVuZ3RoLG89cisxO288bjtvKyspdGhpcy5fa2V5c1tvLTFdPXRoaXMuX2tleXNbb10sdGhpcy5fdmFsdWVzW28tMV09dGhpcy5fdmFsdWVzW29dO3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aC0tLHRoaXMuX3ZhbHVlcy5sZW5ndGgtLSxlPT09dGhpcy5fY2FjaGVLZXkmJih0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTIpLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleXMubGVuZ3RoPTAsdGhpcy5fdmFsdWVzLmxlbmd0aD0wLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn0sZS5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxuKX0sZS5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLGkpfSxlLnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLHUpfSxlLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZS5fZmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9jYWNoZUtleSE9PXQmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleT10KSksdGhpcy5fY2FjaGVJbmRleDwwJiZlJiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmxlbmd0aCx0aGlzLl9rZXlzLnB1c2godCksdGhpcy5fdmFsdWVzLnB1c2godm9pZCAwKSksdGhpcy5fY2FjaGVJbmRleH0sZX0oKTtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBlfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm5bdCxlXX19KCk6TWFwLHA9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fbWFwPW5ldyBofXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuc2l6ZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5oYXModCl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLnNldCh0LHQpLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh0KX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9tYXAuY2xlYXIoKX0sdC5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAua2V5cygpfSx0LnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpfSx0LnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCl9LHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHR9KCk6U2V0LGw9bmV3KGZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdlYWtNYXA/ZnVuY3Rpb24oKXt2YXIgdD0xNixyPXMuY3JlYXRlKCksbj1vKCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX2tleT1vKCl9cmV0dXJuIHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZzLmhhcyhlLHRoaXMuX2tleSl9LHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lP3MuZ2V0KGUsdGhpcy5fa2V5KTp2b2lkIDB9LHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiBpKHQsITApW3RoaXMuX2tleV09ZSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmZGVsZXRlIGVbdGhpcy5fa2V5XX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXk9bygpfSx0fSgpO2Z1bmN0aW9uIG8oKXt2YXIgdDtkb3t0PVwiQEBXZWFrTWFwQEBcIithKCl9d2hpbGUocy5oYXMocix0KSk7cmV0dXJuIHJbdF09ITAsdH1mdW5jdGlvbiBpKHQscil7aWYoIWUuY2FsbCh0LG4pKXtpZighcilyZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6cy5jcmVhdGUoKX0pfXJldHVybiB0W25dfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIHI9MDtyPGU7KytyKXRbcl09MjU1Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4gdH1mdW5jdGlvbiBhKCl7dmFyIGUscj0oZT10LFwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4QXJyYXk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNyeXB0bz9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbXNDcnlwdG8/bXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTp1KG5ldyBVaW50OEFycmF5KGUpLGUpOnUobmV3IEFycmF5KGUpLGUpKTtyWzZdPTc5JnJbNl18NjQscls4XT0xOTEmcls4XXwxMjg7Zm9yKHZhciBuPVwiXCIsbz0wO288dDsrK28pe3ZhciBpPXJbb107NCE9PW8mJjYhPT1vJiY4IT09b3x8KG4rPVwiLVwiKSxpPDE2JiYobis9XCIwXCIpLG4rPWkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCl9cmV0dXJuIG59fSgpOldlYWtNYXApO2Z1bmN0aW9uIHkodCxlLHIpe3ZhciBuPWwuZ2V0KHQpO2lmKGoobikpe2lmKCFyKXJldHVybjtuPW5ldyBoLGwuc2V0KHQsbil9dmFyIG89bi5nZXQoZSk7aWYoaihvKSl7aWYoIXIpcmV0dXJuO289bmV3IGgsbi5zZXQoZSxvKX1yZXR1cm4gb31mdW5jdGlvbiBkKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4hMDt2YXIgbj1JKGUpO3JldHVybiFUKG4pJiZkKHQsbixyKX1mdW5jdGlvbiB2KHQsZSxyKXt2YXIgbj15KGUsciwhMSk7cmV0dXJuIWoobikmJiEhbi5oYXModCl9ZnVuY3Rpb24gXyh0LGUscil7aWYodih0LGUscikpcmV0dXJuIGcodCxlLHIpO3ZhciBuPUkoZSk7cmV0dXJuIFQobik/dm9pZCAwOl8odCxuLHIpfWZ1bmN0aW9uIGcodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtpZighaihuKSlyZXR1cm4gbi5nZXQodCl9ZnVuY3Rpb24gdyh0LGUscixuKXt5KHIsbiwhMCkuc2V0KHQsZSl9ZnVuY3Rpb24gYih0LGUpe3ZhciByPW0odCxlKSxuPUkodCk7aWYobnVsbD09PW4pcmV0dXJuIHI7dmFyIG89YihuLGUpO2lmKG8ubGVuZ3RoPD0wKXJldHVybiByO2lmKHIubGVuZ3RoPD0wKXJldHVybiBvO2Zvcih2YXIgaT1uZXcgcCx1PVtdLGE9MCxzPXI7YTxzLmxlbmd0aDthKyspe3ZhciBjPXNbYV07aS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpfWZvcih2YXIgZj0wLGg9bztmPGgubGVuZ3RoO2YrKyljPWhbZl0saS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpO3JldHVybiB1fWZ1bmN0aW9uIG0odCxlKXt2YXIgcj1bXSxuPXkodCxlLCExKTtpZihqKG4pKXJldHVybiByO2Zvcih2YXIgaT1mdW5jdGlvbih0KXt2YXIgZT1DKHQsbyk7aWYoIXgoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgcj1lLmNhbGwodCk7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn0obi5rZXlzKCkpLHU9MDs7KXt2YXIgYT1BKGkpO2lmKCFhKXJldHVybiByLmxlbmd0aD11LHI7dmFyIHM9YS52YWx1ZTt0cnl7clt1XT1zfWNhdGNoKHQpe3RyeXtSKGkpfWZpbmFsbHl7dGhyb3cgdH19dSsrfX1mdW5jdGlvbiBPKHQpe2lmKG51bGw9PT10KXJldHVybiAxO3N3aXRjaCh0eXBlb2YgdCl7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuIDA7Y2FzZVwiYm9vbGVhblwiOnJldHVybiAyO2Nhc2VcInN0cmluZ1wiOnJldHVybiAzO2Nhc2VcInN5bWJvbFwiOnJldHVybiA0O2Nhc2VcIm51bWJlclwiOnJldHVybiA1O2Nhc2VcIm9iamVjdFwiOnJldHVybiBudWxsPT09dD8xOjY7ZGVmYXVsdDpyZXR1cm4gNn19ZnVuY3Rpb24gaih0KXtyZXR1cm4gdm9pZCAwPT09dH1mdW5jdGlvbiBUKHQpe3JldHVybiBudWxsPT09dH1mdW5jdGlvbiBrKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gRSh0LGUpe3N3aXRjaChPKHQpKXtjYXNlIDA6Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gdH12YXIgcj0zPT09ZT9cInN0cmluZ1wiOjU9PT1lP1wibnVtYmVyXCI6XCJkZWZhdWx0XCIsbz1DKHQsbik7aWYodm9pZCAwIT09byl7dmFyIGk9by5jYWxsKHQscik7aWYoayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBpfXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwic3RyaW5nXCI9PT1lKXt2YXIgcj10LnRvU3RyaW5nO2lmKHgocikmJiFrKG89ci5jYWxsKHQpKSlyZXR1cm4gbztpZih4KG49dC52YWx1ZU9mKSYmIWsobz1uLmNhbGwodCkpKXJldHVybiBvfWVsc2V7dmFyIG47aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt2YXIgbyxpPXQudG9TdHJpbmc7aWYoeChpKSYmIWsobz1pLmNhbGwodCkpKXJldHVybiBvfXRocm93IG5ldyBUeXBlRXJyb3J9KHQsXCJkZWZhdWx0XCI9PT1yP1wibnVtYmVyXCI6cil9ZnVuY3Rpb24gUyh0KXt2YXIgZT1FKHQsMyk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiK3R9KGUpfWZ1bmN0aW9uIE0odCl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheSh0KTp0IGluc3RhbmNlb2YgT2JqZWN0P3QgaW5zdGFuY2VvZiBBcnJheTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24geCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIFAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBDKHQsZSl7dmFyIHI9dFtlXTtpZihudWxsIT1yKXtpZigheChyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfX1mdW5jdGlvbiBBKHQpe3ZhciBlPXQubmV4dCgpO3JldHVybiFlLmRvbmUmJmV9ZnVuY3Rpb24gUih0KXt2YXIgZT10LnJldHVybjtlJiZlLmNhbGwodCl9ZnVuY3Rpb24gSSh0KXt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dD09PWMpcmV0dXJuIGU7aWYoZSE9PWMpcmV0dXJuIGU7dmFyIHI9dC5wcm90b3R5cGUsbj1yJiZPYmplY3QuZ2V0UHJvdG90eXBlT2Yocik7aWYobnVsbD09bnx8bj09PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuIGU7dmFyIG89bi5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBvfHxvPT09dD9lOm99ZnVuY3Rpb24gSCh0KXtyZXR1cm4gdC5fXz12b2lkIDAsZGVsZXRlIHQuX18sdH10KFwiZGVjb3JhdGVcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoaihyKSl7aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighUChlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbj0oMCx0W3JdKShlKTtpZighaihuKSYmIVQobikpe2lmKCFQKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7ZT1ufX1yZXR1cm4gZX0odCxlKX1pZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWsobikmJiFqKG4pJiYhVChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKG4pJiYobj12b2lkIDApLGZ1bmN0aW9uKHQsZSxyLG4pe2Zvcih2YXIgbz10Lmxlbmd0aC0xO28+PTA7LS1vKXt2YXIgaT0oMCx0W29dKShlLHIsbik7aWYoIWooaSkmJiFUKGkpKXtpZighayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO249aX19cmV0dXJuIG59KHQsZSxyPVMociksbil9KSksdChcIm1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighaihuKSYmIWZ1bmN0aW9uKHQpe3N3aXRjaChPKHQpKXtjYXNlIDM6Y2FzZSA0OnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fShuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3codCxlLHIsbil9fSkpLHQoXCJkZWZpbmVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscixuKXtpZighayhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKG4pfHwobj1TKG4pKSx3KHQsZSxyLG4pfSkpLHQoXCJoYXNNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZCh0LGUscil9KSksdChcImhhc093bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSx2KHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLF8odCxlLHIpfSkpLHQoXCJnZXRPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZyh0LGUscil9KSksdChcImdldE1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLGIodCxlKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWsodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihlKXx8KGU9UyhlKSksbSh0LGUpfSkpLHQoXCJkZWxldGVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtqKHIpfHwocj1TKHIpKTt2YXIgbj15KGUsciwhMSk7aWYoaihuKSlyZXR1cm4hMTtpZighbi5kZWxldGUodCkpcmV0dXJuITE7aWYobi5zaXplPjApcmV0dXJuITA7dmFyIG89bC5nZXQoZSk7cmV0dXJuIG8uZGVsZXRlKHIpLG8uc2l6ZT4wfHxsLmRlbGV0ZShlKSwhMH0pKX0obyl9KCl9KG58fChuPXt9KSl9fSxlPXt9O2Z1bmN0aW9uIHIobil7dmFyIG89ZVtuXTtpZih2b2lkIDAhPT1vKXJldHVybiBvLmV4cG9ydHM7dmFyIGk9ZVtuXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbbl0oaSxpLmV4cG9ydHMsciksaS5leHBvcnRzfXIuZD0odCxlKT0+e2Zvcih2YXIgbiBpbiBlKXIubyhlLG4pJiYhci5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OmVbbl19KX0sci5nPWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMpcmV0dXJuIGdsb2JhbFRoaXM7dHJ5e3JldHVybiB0aGlzfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvd319KCksci5vPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyLnI9dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBuPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodCxlKX19ci5yKG4pLHIuZChuLHtDdXN0b21Db21wb25lbnQ6KCk9PmMsT0JTRVJWRURfUFJPUEVSVElFUzooKT0+aSxjdXN0b21Db21wb25lbnQ6KCk9PnQscHJvcGVydHk6KCk9PnUscXVlcnk6KCk9PnMsc3RhdGU6KCk9PmF9KSxyKDY2MCk7Y29uc3QgZT1uZXcgY2xhc3N7ZnJvbSh0LGUpe2lmKHQpc3dpdGNoKGUubmFtZSl7Y2FzZVwiU3RyaW5nXCI6Y2FzZVwiTnVtYmVyXCI6cmV0dXJuIGUodCk7Y2FzZVwiQm9vbGVhblwiOnJldHVybiB0JiZcInRydWVcIj09PXQudG9Mb3dlckNhc2UoKTtkZWZhdWx0OnJldHVybiBKU09OLnBhcnNlKHQpfX10byh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD90JiZKU09OLnN0cmluZ2lmeSh0KTp0LnRvU3RyaW5nKCl9fTtjbGFzcyBve31jb25zdCBpPVN5bWJvbChcIm9ic2VydmVkX3Byb3BlcnRpZXNcIik7ZnVuY3Rpb24gdSh0KXtyZXR1cm4gbnVsbCE9dHx8KHQ9bmV3IG8pLGZ1bmN0aW9uKHIsbil7dmFyIG8sdSxhLHM7Y29uc3QgYz1gXyR7bn1gLGY9bnVsbCE9PShvPXQuY29udmVydGVyKSYmdm9pZCAwIT09bz9vOmU7aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsbix7Z2V0OmZ1bmN0aW9uKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pLGU9Zi5mcm9tKHRoaXNbY10sdCk7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/ZnVuY3Rpb24odCxlLHIpe3JldHVybiBuZXcgUHJveHkocix7c2V0OihyLG4sbyk9PihyW25dPW8sQXJyYXkuaXNBcnJheShvKSYmXCJsZW5ndGhcIiE9PW58fHQubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKGUsbyksITApfSl9KHRoaXMsbixlKTplfSxzZXQ6ZnVuY3Rpb24odCl7Y29uc3QgZT10aGlzW25dO2lmKHQhPT1lKXtjb25zdCByPVJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLHRoaXMsbik7dGhpc1tjXT1mLnRvKHQsciksdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixlKX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbnVsbD09PSh1PXQuYXR0cmlidXRlKXx8dm9pZCAwPT09dXx8dSl7Y29uc3QgZT1yLmNvbnN0cnVjdG9yLG89bnVsbCE9PShhPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSxlKSkmJnZvaWQgMCE9PWE/YTp7fSx1PW51bGwhPT0ocz10LmF0dHJpYnV0ZSkmJnZvaWQgMCE9PXM/czpuLGM9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG8pLHtbdS50b1N0cmluZygpXTpufSk7UmVmbGVjdC5kZWZpbmVNZXRhZGF0YShpLGMsZSl9fX1mdW5jdGlvbiBhKHQpe3JldHVybiB1KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7YXR0cmlidXRlOiExfSkpfWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX1jbGFzcyBjIGV4dGVuZHMgSFRNTEVsZW1lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtjb25zdCB0PVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzKTtyZXR1cm4gdD9PYmplY3Qua2V5cyh0KTpbXX1jb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fY2hhbmdlcz1uZXcgTWFwO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxlLHIpe2NvbnN0IG49UmVmbGVjdC5nZXRNZXRhZGF0YShpLHRoaXMuY29uc3RydWN0b3IpW3RdLG89dGhpc1tuXTt0aGlzW2BfJHtufWBdPXIsdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixvKX1zdGF0ZUhhc0NoYW5nZWQodCl7fXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIGMuX3RlbXBsYXRlcz9jLl90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gci5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1uLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCxjLl90ZW1wbGF0ZXNbdF09cixyfW5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LGUpe2NsZWFyVGltZW91dCh0aGlzLl9jaGFuZ2VEZWJvdW5jZSksdGhpcy5fY2hhbmdlRGVib3VuY2U9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlSGFzQ2hhbmdlZCh0aGlzLl9jaGFuZ2VzKSx0aGlzLl9jaGFuZ2VzLmNsZWFyKCl9KSw1MCksdGhpcy5fY2hhbmdlcy5zZXQodCxlKX19Yy5fdGVtcGxhdGVzPXt9fSkoKSxufSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlaXN0IFZhcmlhYmxlXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTI4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyNTZweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuMTI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zY3JpcHRzL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQuY29tcG9uZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2Vpc3QgVmFyaWFibGUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBoZWlnaHQ6IDEyOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjU2cHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ3dnaHQnIDQwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxyXG5leHBvcnQgY2xhc3MgUGFnZUluZGljYXRvciBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIC5jb250cm9sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzIDE1MyAxNTMgLyAwLjQ0Myk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMgMTUzIDE1Myk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gWydzaXplJywgJ2FjdGl2ZS1pbmRleCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luZGljYXRvcnM6IEhUTUxTcGFuRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2FjdGl2ZUluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgLyogQXR0cmlidXRlcyAqL1xyXG4gICAgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFjdGl2ZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBjb250cm9sKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2wgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIHBhcnQ9XCJjb250cm9sXCI+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIF8sIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdzaXplJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShwYXJzZUludChuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZS1pbmRleCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHBhcnNlSW50KG5ld1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IG5ld1ZhbHVlIC0gdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuX2luZGljYXRvcnMuc3BsaWNlKGRlbHRhLCBNYXRoLmFicyhkZWx0YSksIC4uLmFkZGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmFwcGVuZCguLi5hZGRlZCk7XHJcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9zaXplID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXdWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlSW5kZXggPT09IG5ld0luZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5fYWN0aXZlSW5kZXhdPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlLWluZGV4JywgbmV3SW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XHJcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VJbmRpY2F0b3IgfSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xyXG5cclxuZW51bSBTbmFwRGlyZWN0aW9uIHtcclxuICAgIExlZnQgPSAtMSxcclxuICAgIFJpZ2h0ID0gMVxyXG59XHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXcnKVxyXG5leHBvcnQgY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbi5sZWZ0IHtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOm5vdCg6YWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgOmhvc3QoOmhvdmVyKSAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc25hcEV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3BhbmVsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgX3Nsb3Q6IEhUTUxTbG90RWxlbWVudDtcclxuICAgIHByaXZhdGUgX2xlZnRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5kaWNhdG9yOiBQYWdlSW5kaWNhdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRTbG90KCkge1xyXG4gICAgICAgIHRoaXMuX3Nsb3QgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlZnRCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGVmdEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlZnRCdG47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCByaWdodEJ0bigpIHtcclxuICAgICAgICB0aGlzLl9yaWdodEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yaWdodEJ0bjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGluZGljYXRvcigpIHtcclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3IgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGljYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuMjkgMTIuNzFsOCA4IDEuNDEtMS40MS02LjI5LTYuMjlIMjR2LTJIMy40MWw2LjI5LTYuMjktMS40MS0xLjQxLTggOGExIDEgMCAwIDAgMCAxLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IExlZnRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2xlbmd0aH0gPSB0aGlzLmRlZmF1bHRTbG90LmFzc2lnbmVkRWxlbWVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSBsZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5zaXplID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzb2x2ZUluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGluZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdG4uZGlzYWJsZWQgPSBpbmRleCA8PSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnRuLmRpc2FibGVkID0gaW5kZXggPT09IHRoaXMuX3BhbmVsQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zbmFwRXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZUluZGV4KCkge1xyXG4gICAgICAgIGNvbnN0IHtzY3JvbGxMZWZ0OiBsZWZ0fSA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobGVmdCAvIHdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNuYXAoZGlyZWN0aW9uOiBTbmFwRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl9pbmRleCArIGRpcmVjdGlvbikgKiB3aWR0aCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3LXBhbmVsJylcclxuZXhwb3J0IGNsYXNzIFNuYXBWaWV3UGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgPHNsb3Q+PC9zbG90PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd2FsbGV0LWNhcmQuY29tcG9uZW50LnNjc3MnXHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCd3YWxsZXQtY2FyZCcpXHJcbmV4cG9ydCBjbGFzcyBXYWxsZXRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBzdHlsZXMudG9TdHJpbmcoKVxyXG5cclxuICAgIEBxdWVyeSgnLm5hbWUnKVxyXG4gICAgcHJpdmF0ZSBfbmFtZVNwYW46IEhUTUxTcGFuRWxlbWVudFxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW91bnRcIj5QMC4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0ZUhhc0NoYW5nZWQoY2hhbmdlczogTWFwPHN0cmluZywgYW55Pik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhcygnbmFtZScpKVxyXG4gICAgICAgICAgICB0aGlzLl9uYW1lU3Bhbi5pbm5lclRleHQgPSB0aGlzLm5hbWVcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0AvY29tcG9uZW50cy93YWxsZXQtY2FyZCc7XHJcbmltcG9ydCAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XHJcbmltcG9ydCB7IFNuYXBWaWV3IH0gZnJvbSAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0X2NvbnRhaW5lcicpIGFzIFNuYXBWaWV3O1xyXG5cclxuICAgIHRlc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc25hcCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0Q29udGFpbmVyLmFjdGl2ZUluZGV4KTtcclxuICAgIH0pO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=