/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
}`, "",{"version":3,"sources":["webpack://./scripts/components/wallet-card.component.scss"],"names":[],"mappings":"AAAA;EACI,4BAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,yCAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;AACJ;;AAEA;EACI,kBAAA;EACA,gBAAA;EACA,mCAAA;AACJ","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNGO0FBR2hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBYSxDQUFDO0lBRTVFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL2UtbW9uZXkvLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9wYWdlLWluZGljYXRvci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3NuYXAtdmlldy50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3ZpZXdzL2xhYi12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2Vpc3QgVmFyaWFibGVcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDI1NnB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NjcmlwdHMvY29tcG9uZW50cy93YWxsZXQtY2FyZC5jb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFDSlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiEgRm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gcGxlYXNlIHNlZSBjdXN0b20tY29tcG9uZW50LmpzLkxJQ0VOU0UudHh0ICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkN1c3RvbUNvbXBvbmVudD1lKCk6dC5DdXN0b21Db21wb25lbnQ9ZSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIHQ9ezY2MDoodCxlLHIpPT57dmFyIG47IWZ1bmN0aW9uKHQpeyFmdW5jdGlvbihlKXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2Ygci5nP3IuZzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiB0aGlzP3RoaXM6RnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSxvPWkodCk7ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHRbcl0mJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSksZSYmZShyLG4pfX12b2lkIDA9PT1uLlJlZmxlY3Q/bi5SZWZsZWN0PXQ6bz1pKG4uUmVmbGVjdCxvKSxmdW5jdGlvbih0KXt2YXIgZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sLG49ciYmdm9pZCAwIT09U3ltYm9sLnRvUHJpbWl0aXZlP1N5bWJvbC50b1ByaW1pdGl2ZTpcIkBAdG9QcmltaXRpdmVcIixvPXImJnZvaWQgMCE9PVN5bWJvbC5pdGVyYXRvcj9TeW1ib2wuaXRlcmF0b3I6XCJAQGl0ZXJhdG9yXCIsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuY3JlYXRlLHU9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LHM9IWkmJiF1LGE9e2NyZWF0ZTppP2Z1bmN0aW9uKCl7cmV0dXJuIEsoT2JqZWN0LmNyZWF0ZShudWxsKSl9OnU/ZnVuY3Rpb24oKXtyZXR1cm4gSyh7X19wcm90b19fOm51bGx9KX06ZnVuY3Rpb24oKXtyZXR1cm4gSyh7fSl9LGhhczpzP2Z1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbCh0LHIpfTpmdW5jdGlvbih0LGUpe3JldHVybiBlIGluIHR9LGdldDpzP2Z1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbCh0LHIpP3Rbcl06dm9pZCAwfTpmdW5jdGlvbih0LGUpe3JldHVybiB0W2VdfX0sYz1PYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pLGY9XCJvYmplY3RcIj09dHlwZW9mIHByb2Nlc3MmJnByb2Nlc3MuZW52JiZcInRydWVcIj09PXByb2Nlc3MuZW52LlJFRkxFQ1RfTUVUQURBVEFfVVNFX01BUF9QT0xZRklMTCxoPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcHx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7dmFyIHQ9e30sZT1bXSxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUscil7dGhpcy5faW5kZXg9MCx0aGlzLl9rZXlzPXQsdGhpcy5fdmFsdWVzPWUsdGhpcy5fc2VsZWN0b3I9cn1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9pbmRleDtpZih0Pj0wJiZ0PHRoaXMuX2tleXMubGVuZ3RoKXt2YXIgcj10aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW3RdLHRoaXMuX3ZhbHVlc1t0XSk7cmV0dXJuIHQrMT49dGhpcy5fa2V5cy5sZW5ndGg/KHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSk6dGhpcy5faW5kZXgrKyx7dmFsdWU6cixkb25lOiExfX1yZXR1cm57dmFsdWU6dm9pZCAwLGRvbmU6ITB9fSx0LnByb3RvdHlwZS50aHJvdz1mdW5jdGlvbih0KXt0aHJvdyB0aGlzLl9pbmRleD49MCYmKHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSksdH0sdC5wcm90b3R5cGUucmV0dXJuPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbmRleD49MCYmKHRoaXMuX2luZGV4PS0xLHRoaXMuX2tleXM9ZSx0aGlzLl92YWx1ZXM9ZSkse3ZhbHVlOnQsZG9uZTohMH19LHR9KCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuX2tleXM9W10sdGhpcy5fdmFsdWVzPVtdLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGh9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9maW5kKHQsITEpPj0wfSxlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZmluZCh0LCExKTtyZXR1cm4gZT49MD90aGlzLl92YWx1ZXNbZV06dm9pZCAwfSxlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9maW5kKHQsITApO3JldHVybiB0aGlzLl92YWx1ZXNbcl09ZSx0aGlzfSxlLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcy5fZmluZChlLCExKTtpZihyPj0wKXtmb3IodmFyIG49dGhpcy5fa2V5cy5sZW5ndGgsbz1yKzE7bzxuO28rKyl0aGlzLl9rZXlzW28tMV09dGhpcy5fa2V5c1tvXSx0aGlzLl92YWx1ZXNbby0xXT10aGlzLl92YWx1ZXNbb107cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoLS0sdGhpcy5fdmFsdWVzLmxlbmd0aC0tLGU9PT10aGlzLl9jYWNoZUtleSYmKHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMiksITB9cmV0dXJuITF9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5cy5sZW5ndGg9MCx0aGlzLl92YWx1ZXMubGVuZ3RoPTAsdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfSxlLnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLG4pfSxlLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsaSl9LGUucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsdSl9LGUucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlLl9maW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuX2NhY2hlS2V5IT09dCYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5pbmRleE9mKHRoaXMuX2NhY2hlS2V5PXQpKSx0aGlzLl9jYWNoZUluZGV4PDAmJmUmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMubGVuZ3RoLHRoaXMuX2tleXMucHVzaCh0KSx0aGlzLl92YWx1ZXMucHVzaCh2b2lkIDApKSx0aGlzLl9jYWNoZUluZGV4fSxlfSgpO2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4gdH1mdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGV9ZnVuY3Rpb24gdSh0LGUpe3JldHVyblt0LGVdfX0oKTpNYXAsbD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9tYXA9bmV3IGh9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5zaXplfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmhhcyh0KX0sdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuc2V0KHQsdCksdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuZGVsZXRlKHQpfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX21hcC5jbGVhcigpfSx0LnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5rZXlzKCl9LHQucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAudmFsdWVzKCl9LHQucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKX0sdC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdH0oKTpTZXQscD1uZXcoZnx8XCJmdW5jdGlvblwiIT10eXBlb2YgV2Vha01hcD9mdW5jdGlvbigpe3ZhciB0PTE2LHI9YS5jcmVhdGUoKSxuPW8oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fa2V5PW8oKX1yZXR1cm4gdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJmEuaGFzKGUsdGhpcy5fa2V5KX0sdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWU/YS5nZXQoZSx0aGlzLl9rZXkpOnZvaWQgMH0sdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGkodCwhMClbdGhpcy5fa2V5XT1lLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZkZWxldGUgZVt0aGlzLl9rZXldfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleT1vKCl9LHR9KCk7ZnVuY3Rpb24gbygpe3ZhciB0O2Rve3Q9XCJAQFdlYWtNYXBAQFwiK3MoKX13aGlsZShhLmhhcyhyLHQpKTtyZXR1cm4gclt0XT0hMCx0fWZ1bmN0aW9uIGkodCxyKXtpZighZS5jYWxsKHQsbikpe2lmKCFyKXJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHt2YWx1ZTphLmNyZWF0ZSgpfSl9cmV0dXJuIHRbbl19ZnVuY3Rpb24gdSh0LGUpe2Zvcih2YXIgcj0wO3I8ZTsrK3IpdFtyXT0yNTUqTWF0aC5yYW5kb20oKXwwO3JldHVybiB0fWZ1bmN0aW9uIHMoKXt2YXIgZSxyPShlPXQsXCJmdW5jdGlvblwiPT10eXBlb2YgVWludDhBcnJheT9cInVuZGVmaW5lZFwiIT10eXBlb2YgY3J5cHRvP2NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoZSkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtc0NyeXB0bz9tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoZSkpOnUobmV3IFVpbnQ4QXJyYXkoZSksZSk6dShuZXcgQXJyYXkoZSksZSkpO3JbNl09Nzkmcls2XXw2NCxyWzhdPTE5MSZyWzhdfDEyODtmb3IodmFyIG49XCJcIixvPTA7bzx0Oysrbyl7dmFyIGk9cltvXTs0IT09byYmNiE9PW8mJjghPT1vfHwobis9XCItXCIpLGk8MTYmJihuKz1cIjBcIiksbis9aS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKX1yZXR1cm4gbn19KCk6V2Vha01hcCk7ZnVuY3Rpb24geSh0LGUscil7dmFyIG49cC5nZXQodCk7aWYoVChuKSl7aWYoIXIpcmV0dXJuO249bmV3IGgscC5zZXQodCxuKX12YXIgbz1uLmdldChlKTtpZihUKG8pKXtpZighcilyZXR1cm47bz1uZXcgaCxuLnNldChlLG8pfXJldHVybiBvfWZ1bmN0aW9uIGQodCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiEwO3ZhciBuPUkoZSk7cmV0dXJuIU8obikmJmQodCxuLHIpfWZ1bmN0aW9uIHYodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtyZXR1cm4hVChuKSYmISFuLmhhcyh0KX1mdW5jdGlvbiBfKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4gZyh0LGUscik7dmFyIG49SShlKTtyZXR1cm4gTyhuKT92b2lkIDA6Xyh0LG4scil9ZnVuY3Rpb24gZyh0LGUscil7dmFyIG49eShlLHIsITEpO2lmKCFUKG4pKXJldHVybiBuLmdldCh0KX1mdW5jdGlvbiB3KHQsZSxyLG4pe3kocixuLCEwKS5zZXQodCxlKX1mdW5jdGlvbiBiKHQsZSl7dmFyIHI9bSh0LGUpLG49SSh0KTtpZihudWxsPT09bilyZXR1cm4gcjt2YXIgbz1iKG4sZSk7aWYoby5sZW5ndGg8PTApcmV0dXJuIHI7aWYoci5sZW5ndGg8PTApcmV0dXJuIG87Zm9yKHZhciBpPW5ldyBsLHU9W10scz0wLGE9cjtzPGEubGVuZ3RoO3MrKyl7dmFyIGM9YVtzXTtpLmhhcyhjKXx8KGkuYWRkKGMpLHUucHVzaChjKSl9Zm9yKHZhciBmPTAsaD1vO2Y8aC5sZW5ndGg7ZisrKWM9aFtmXSxpLmhhcyhjKXx8KGkuYWRkKGMpLHUucHVzaChjKSk7cmV0dXJuIHV9ZnVuY3Rpb24gbSh0LGUpe3ZhciByPVtdLG49eSh0LGUsITEpO2lmKFQobikpcmV0dXJuIHI7Zm9yKHZhciBpPWZ1bmN0aW9uKHQpe3ZhciBlPUEodCxvKTtpZighUyhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciByPWUuY2FsbCh0KTtpZighaihyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfShuLmtleXMoKSksdT0wOzspe3ZhciBzPUMoaSk7aWYoIXMpcmV0dXJuIHIubGVuZ3RoPXUscjt2YXIgYT1zLnZhbHVlO3RyeXtyW3VdPWF9Y2F0Y2godCl7dHJ5e1IoaSl9ZmluYWxseXt0aHJvdyB0fX11Kyt9fWZ1bmN0aW9uIGsodCl7aWYobnVsbD09PXQpcmV0dXJuIDE7c3dpdGNoKHR5cGVvZiB0KXtjYXNlXCJ1bmRlZmluZWRcIjpyZXR1cm4gMDtjYXNlXCJib29sZWFuXCI6cmV0dXJuIDI7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIDM7Y2FzZVwic3ltYm9sXCI6cmV0dXJuIDQ7Y2FzZVwibnVtYmVyXCI6cmV0dXJuIDU7Y2FzZVwib2JqZWN0XCI6cmV0dXJuIG51bGw9PT10PzE6NjtkZWZhdWx0OnJldHVybiA2fX1mdW5jdGlvbiBUKHQpe3JldHVybiB2b2lkIDA9PT10fWZ1bmN0aW9uIE8odCl7cmV0dXJuIG51bGw9PT10fWZ1bmN0aW9uIGoodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiB4KHQsZSl7c3dpdGNoKGsodCkpe2Nhc2UgMDpjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OnJldHVybiB0fXZhciByPTM9PT1lP1wic3RyaW5nXCI6NT09PWU/XCJudW1iZXJcIjpcImRlZmF1bHRcIixvPUEodCxuKTtpZih2b2lkIDAhPT1vKXt2YXIgaT1vLmNhbGwodCxyKTtpZihqKGkpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGl9cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJzdHJpbmdcIj09PWUpe3ZhciByPXQudG9TdHJpbmc7aWYoUyhyKSYmIWoobz1yLmNhbGwodCkpKXJldHVybiBvO2lmKFMobj10LnZhbHVlT2YpJiYhaihvPW4uY2FsbCh0KSkpcmV0dXJuIG99ZWxzZXt2YXIgbjtpZihTKG49dC52YWx1ZU9mKSYmIWoobz1uLmNhbGwodCkpKXJldHVybiBvO3ZhciBvLGk9dC50b1N0cmluZztpZihTKGkpJiYhaihvPWkuY2FsbCh0KSkpcmV0dXJuIG99dGhyb3cgbmV3IFR5cGVFcnJvcn0odCxcImRlZmF1bHRcIj09PXI/XCJudW1iZXJcIjpyKX1mdW5jdGlvbiBFKHQpe3ZhciBlPXgodCwzKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZT9lOmZ1bmN0aW9uKHQpe3JldHVyblwiXCIrdH0oZSl9ZnVuY3Rpb24gTSh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KHQpOnQgaW5zdGFuY2VvZiBPYmplY3Q/dCBpbnN0YW5jZW9mIEFycmF5OlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1mdW5jdGlvbiBTKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gUCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEEodCxlKXt2YXIgcj10W2VdO2lmKG51bGwhPXIpe2lmKCFTKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9fWZ1bmN0aW9uIEModCl7dmFyIGU9dC5uZXh0KCk7cmV0dXJuIWUuZG9uZSYmZX1mdW5jdGlvbiBSKHQpe3ZhciBlPXQucmV0dXJuO2UmJmUuY2FsbCh0KX1mdW5jdGlvbiBJKHQpe3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0PT09YylyZXR1cm4gZTtpZihlIT09YylyZXR1cm4gZTt2YXIgcj10LnByb3RvdHlwZSxuPXImJk9iamVjdC5nZXRQcm90b3R5cGVPZihyKTtpZihudWxsPT1ufHxuPT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4gZTt2YXIgbz1uLmNvbnN0cnVjdG9yO3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIG98fG89PT10P2U6b31mdW5jdGlvbiBLKHQpe3JldHVybiB0Ll9fPXZvaWQgMCxkZWxldGUgdC5fXyx0fXQoXCJkZWNvcmF0ZVwiLChmdW5jdGlvbih0LGUscixuKXtpZihUKHIpKXtpZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFQKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQubGVuZ3RoLTE7cj49MDstLXIpe3ZhciBuPSgwLHRbcl0pKGUpO2lmKCFUKG4pJiYhTyhuKSl7aWYoIVAobikpdGhyb3cgbmV3IFR5cGVFcnJvcjtlPW59fXJldHVybiBlfSh0LGUpfWlmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighaihuKSYmIVQobikmJiFPKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIE8obikmJihuPXZvaWQgMCksZnVuY3Rpb24odCxlLHIsbil7Zm9yKHZhciBvPXQubGVuZ3RoLTE7bz49MDstLW8pe3ZhciBpPSgwLHRbb10pKGUscixuKTtpZighVChpKSYmIU8oaSkpe2lmKCFqKGkpKXRocm93IG5ldyBUeXBlRXJyb3I7bj1pfX1yZXR1cm4gbn0odCxlLHI9RShyKSxuKX0pKSx0KFwibWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtpZighaihyKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFUKG4pJiYhZnVuY3Rpb24odCl7c3dpdGNoKGsodCkpe2Nhc2UgMzpjYXNlIDQ6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19KG4pKXRocm93IG5ldyBUeXBlRXJyb3I7dyh0LGUscixuKX19KSksdChcImRlZmluZU1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKCFqKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQobil8fChuPUUobikpLHcodCxlLHIsbil9KSksdChcImhhc01ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKHIpfHwocj1FKHIpKSxkKHQsZSxyKX0pKSx0KFwiaGFzT3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFqKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIFQocil8fChyPUUocikpLHYodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWooZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChyKXx8KHI9RShyKSksXyh0LGUscil9KSksdChcImdldE93bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKHIpfHwocj1FKHIpKSxnKHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWoodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChlKXx8KGU9RShlKSksYih0LGUpfSkpLHQoXCJnZXRPd25NZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighaih0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKGUpfHwoZT1FKGUpKSxtKHQsZSl9KSksdChcImRlbGV0ZU1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighaihlKSl0aHJvdyBuZXcgVHlwZUVycm9yO1Qocil8fChyPUUocikpO3ZhciBuPXkoZSxyLCExKTtpZihUKG4pKXJldHVybiExO2lmKCFuLmRlbGV0ZSh0KSlyZXR1cm4hMTtpZihuLnNpemU+MClyZXR1cm4hMDt2YXIgbz1wLmdldChlKTtyZXR1cm4gby5kZWxldGUociksby5zaXplPjB8fHAuZGVsZXRlKGUpLCEwfSkpfShvKX0oKX0obnx8KG49e30pKX19LGU9e307ZnVuY3Rpb24gcihuKXt2YXIgbz1lW25dO2lmKHZvaWQgMCE9PW8pcmV0dXJuIG8uZXhwb3J0czt2YXIgaT1lW25dPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtuXShpLGkuZXhwb3J0cyxyKSxpLmV4cG9ydHN9ci5kPSh0LGUpPT57Zm9yKHZhciBuIGluIGUpci5vKGUsbikmJiFyLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZVtuXX0pfSxyLmc9ZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsVGhpcylyZXR1cm4gZ2xvYmFsVGhpczt0cnl7cmV0dXJuIHRoaXN8fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2godCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdylyZXR1cm4gd2luZG93fX0oKSxyLm89KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLHIucj10PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG49e307cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7Y3VzdG9tRWxlbWVudHMuZ2V0KHQpfHx3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXIucihuKSxyLmQobix7Q3VzdG9tQ29tcG9uZW50OigpPT55LGN1c3RvbUNvbXBvbmVudDooKT0+dCxwcm9wZXJ0eTooKT0+ZixxdWVyeTooKT0+bCxxdWVyeUFsbDooKT0+cCxzdGF0ZTooKT0+aH0pLHIoNjYwKTtjb25zdCBlPVwiY29tcG9uZW50OmF0dHJpYnV0ZXNcIjtjbGFzcyBve3N0YXRpYyByZWdpc3Rlcih0LHIpe2NvbnN0IG49Wy4uLnRoaXMuZ2V0KHQuY29uc3RydWN0b3IpLHJdO1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEoZSxuLHQuY29uc3RydWN0b3IpfXN0YXRpYyBnZXQodCl7Y29uc3Qgcj1SZWZsZWN0LmdldE1ldGFkYXRhKGUsdCk7cmV0dXJuIG51bGwhPXI/cjpbXX19Y29uc3QgaT1uZXcgY2xhc3N7ZnJvbSh0LGUpe2lmKFwidW5kZWZpbmVkXCIhPT10KXtpZihcIm51bGxcIj09PXQpcmV0dXJuIG51bGw7c3dpdGNoKGUubmFtZSl7Y2FzZVwiU3RyaW5nXCI6Y2FzZVwiTnVtYmVyXCI6cmV0dXJuIGUodCk7Y2FzZVwiQm9vbGVhblwiOnJldHVyblwiXCI9PT10fHx0JiZcInRydWVcIj09PXQudG9Mb3dlckNhc2UoKTtkZWZhdWx0OnJldHVybiBKU09OLnBhcnNlKHQpfX19dG8odCl7cmV0dXJuIG51bGw9PXQ/dm9pZCAwOnQudG9TdHJpbmcoKX19LHU9XCJjb21wb25lbnQ6cHJvcGVydGllc1wiO2NsYXNzIHN7Y29uc3RydWN0b3IodCxlKXt0aGlzLl9rZXk9dCx0aGlzLl9vcHRpb25zPWV9Z2V0IGtleSgpe3JldHVybiB0aGlzLl9rZXl9Z2V0IGZpZWxkKCl7cmV0dXJuYF8ke3RoaXMuX2tleX1gfWdldCBhdHRyaWJ1dGUoKXtjb25zdCB0PXRoaXMuX29wdGlvbnMuYXR0cmlidXRlO3JldHVybiB0JiZcImJvb2xlYW5cIiE9dHlwZW9mIHQ/dDp0aGlzLl9rZXl9Z2V0IGNvbnZlcnRlcigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fb3B0aW9ucy5jb252ZXJ0ZXIpJiZ2b2lkIDAhPT10P3Q6aX1nZXRUeXBlKHQpe3JldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0LHRoaXMuX2tleSl9c3RhdGljIHJlZ2lzdGVyKHQsZSl7UmVmbGVjdC5kZWZpbmVNZXRhZGF0YSh1LGUsdC5jb25zdHJ1Y3RvcixlLmF0dHJpYnV0ZSl9c3RhdGljIGdldCh0LGUpe3JldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKHUsdC5jb25zdHJ1Y3RvcixlKX19Y2xhc3MgYXt9Y2xhc3MgY3tzdGF0aWMgZ2V0KHQsZSl7Y29uc3Qgcj1lW3QuZmllbGRdO3JldHVybiByJiZcIm9iamVjdFwiPT10eXBlb2Ygcj90aGlzLmNyZWF0ZVByb3h5KHIsKCh0LHIpPT57QXJyYXkuaXNBcnJheShyKSYmXCJsZW5ndGhcIiE9PXR8fGUubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKHQua2V5LHIpfSkpOnJ9c3RhdGljIHBhcnNlKHQsZSxyKXtjb25zdCBuPXMuZ2V0KHQsZSksbz1uLmdldFR5cGUodCksaT1uLmNvbnZlcnRlci5mcm9tKHIsbyk7dGhpcy5zZXQobix0LGkpfXN0YXRpYyBzZXQodCxlLHIpe2NvbnN0IG49ZVt0LmZpZWxkXTtyIT09biYmKGVbdC5maWVsZF09cixlLm5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LmtleSxuKSl9c3RhdGljIGNyZWF0ZVByb3h5KHQsZSl7cmV0dXJuIG5ldyBQcm94eSh0LHtzZXQ6KHQscixuKT0+KGUocix0KSxSZWZsZWN0LnNldCh0LHIsbikpfSl9fWZ1bmN0aW9uIGYodCl7cmV0dXJuIG51bGwhPXR8fCh0PW5ldyBhKSxmdW5jdGlvbihlLHIpe3ZhciBuLHUsYTtjb25zdCBmPW5ldyBzKHIsdCk7aWYocy5yZWdpc3RlcihlLGYpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2dldDpmdW5jdGlvbigpe3JldHVybiBjLmdldChmLHRoaXMpfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHI7Yy5zZXQoZix0aGlzLGUpO2NvbnN0IG49dC5hdHRyaWJ1dGU7aWYoXCJib29sZWFuXCIhPXR5cGVvZiBufHxuKXtjb25zdCBuPWYuZ2V0VHlwZSh0aGlzKTtpZihcIkJvb2xlYW5cIiE9PW4ubmFtZSl7Y29uc3Qgbz0obnVsbCE9PShyPXQuY29udmVydGVyKSYmdm9pZCAwIT09cj9yOmkpLnRvKGUsbik7dGhpcy5zZXRBdHRyaWJ1dGUoZi5hdHRyaWJ1dGUsbyl9ZWxzZSB0aGlzLnRvZ2dsZUF0dHJpYnV0ZShmLmF0dHJpYnV0ZSxlKX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbnVsbD09PShuPXQuYXR0cmlidXRlKXx8dm9pZCAwPT09bnx8bil7Y29uc3Qgbj1udWxsIT09KGE9bnVsbD09PSh1PXQuYXR0cmlidXRlKXx8dm9pZCAwPT09dT92b2lkIDA6dS50b1N0cmluZygpKSYmdm9pZCAwIT09YT9hOnI7by5yZWdpc3RlcihlLG4pfX19ZnVuY3Rpb24gaCgpe3JldHVybiBmKHthdHRyaWJ1dGU6ITF9KX1mdW5jdGlvbiBsKHQsZT0hMSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsbix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuKGU/dGhpczp0aGlzLnNoYWRvd1Jvb3QpLnF1ZXJ5U2VsZWN0b3IodCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9fWZ1bmN0aW9uIHAodCxlPSExKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkocixuLHtnZXQ6ZnVuY3Rpb24oKXtjb25zdCByPShlP3RoaXM6dGhpcy5zaGFkb3dSb290KS5xdWVyeVNlbGVjdG9yQWxsKHQpO3JldHVybiBBcnJheS5mcm9tKHIpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX1jbGFzcyB5IGV4dGVuZHMgSFRNTEVsZW1lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm4gby5nZXQodGhpcyl9Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuX2NoYW5nZXM9bmV3IE1hcDtjb25zdCB0PXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsZSxyKXtjLnBhcnNlKHRoaXMsdCxyKX1zdGF0ZUhhc0NoYW5nZWQodCl7fXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIHkuX3RlbXBsYXRlcz95Ll90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gci5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1uLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCx5Ll90ZW1wbGF0ZXNbdF09cixyfW5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LGUpe2NsZWFyVGltZW91dCh0aGlzLl9jaGFuZ2VEZWJvdW5jZSksdGhpcy5fY2hhbmdlRGVib3VuY2U9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlSGFzQ2hhbmdlZCh0aGlzLl9jaGFuZ2VzKSx0aGlzLl9jaGFuZ2VzLmNsZWFyKCl9KSw1MCksdGhpcy5fY2hhbmdlcy5zZXQodCxlKX19eS5fdGVtcGxhdGVzPXt9fSkoKSxufSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxyXG5leHBvcnQgY2xhc3MgUGFnZUluZGljYXRvciBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIC5jb250cm9sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzIDE1MyAxNTMgLyAwLjQ0Myk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMgMTUzIDE1Myk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gWydzaXplJywgJ2FjdGl2ZS1pbmRleCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luZGljYXRvcnM6IEhUTUxTcGFuRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2FjdGl2ZUluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgLyogQXR0cmlidXRlcyAqL1xyXG4gICAgc2V0IHNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFjdGl2ZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBjb250cm9sKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2wgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIHBhcnQ9XCJjb250cm9sXCI+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIF8sIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdzaXplJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShwYXJzZUludChuZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZS1pbmRleCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHBhcnNlSW50KG5ld1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IG5ld1ZhbHVlIC0gdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuX2luZGljYXRvcnMuc3BsaWNlKGRlbHRhLCBNYXRoLmFicyhkZWx0YSksIC4uLmFkZGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmFwcGVuZCguLi5hZGRlZCk7XHJcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9zaXplID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXdWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlSW5kZXggPT09IG5ld0luZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5fYWN0aXZlSW5kZXhdPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlLWluZGV4JywgbmV3SW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XHJcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VJbmRpY2F0b3IgfSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xyXG5cclxuZW51bSBTbmFwRGlyZWN0aW9uIHtcclxuICAgIExlZnQgPSAtMSxcclxuICAgIFJpZ2h0ID0gMVxyXG59XHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXcnKVxyXG5leHBvcnQgY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbi5sZWZ0IHtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uLnJpZ2h0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOm5vdCg6YWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgOmhvc3QoOmhvdmVyKSAuc25hcEJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc25hcEV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3BhbmVsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgX3Nsb3Q6IEhUTUxTbG90RWxlbWVudDtcclxuICAgIHByaXZhdGUgX2xlZnRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRCdG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5kaWNhdG9yOiBQYWdlSW5kaWNhdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRTbG90KCkge1xyXG4gICAgICAgIHRoaXMuX3Nsb3QgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlZnRCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5fbGVmdEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlZnRCdG47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCByaWdodEJ0bigpIHtcclxuICAgICAgICB0aGlzLl9yaWdodEJ0biA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yaWdodEJ0bjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGluZGljYXRvcigpIHtcclxuICAgICAgICB0aGlzLl9pbmRpY2F0b3IgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9yJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGljYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuMjkgMTIuNzFsOCA4IDEuNDEtMS40MS02LjI5LTYuMjlIMjR2LTJIMy40MWw2LjI5LTYuMjktMS40MS0xLjQxLTggOGExIDEgMCAwIDAgMCAxLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IExlZnRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2xlbmd0aH0gPSB0aGlzLmRlZmF1bHRTbG90LmFzc2lnbmVkRWxlbWVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSBsZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5zaXplID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5hY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzb2x2ZUluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGluZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRCdG4uZGlzYWJsZWQgPSBpbmRleCA8PSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnRuLmRpc2FibGVkID0gaW5kZXggPT09IHRoaXMuX3BhbmVsQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zbmFwRXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzb2x2ZUluZGV4KCkge1xyXG4gICAgICAgIGNvbnN0IHtzY3JvbGxMZWZ0OiBsZWZ0fSA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobGVmdCAvIHdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNuYXAoZGlyZWN0aW9uOiBTbmFwRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl9pbmRleCArIGRpcmVjdGlvbikgKiB3aWR0aCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuQGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3LXBhbmVsJylcclxuZXhwb3J0IGNsYXNzIFNuYXBWaWV3UGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgPHNsb3Q+PC9zbG90PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vd2FsbGV0LWNhcmQuY29tcG9uZW50LnNjc3MnXHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCd3YWxsZXQtY2FyZCcpXHJcbmV4cG9ydCBjbGFzcyBXYWxsZXRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBzdHlsZXMgPSBzdHlsZXMudG9TdHJpbmcoKVxyXG5cclxuICAgIEBxdWVyeSgnLm5hbWUnKVxyXG4gICAgcHJpdmF0ZSBfbmFtZVNwYW46IEhUTUxTcGFuRWxlbWVudFxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW91bnRcIj5QMC4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0ZUhhc0NoYW5nZWQoY2hhbmdlczogTWFwPHN0cmluZywgYW55Pik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhcygnbmFtZScpKVxyXG4gICAgICAgICAgICB0aGlzLl9uYW1lU3Bhbi5pbm5lclRleHQgPSB0aGlzLm5hbWVcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0AvY29tcG9uZW50cy93YWxsZXQtY2FyZCc7XHJcbmltcG9ydCAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XHJcbmltcG9ydCB7IFNuYXBWaWV3IH0gZnJvbSAnQC9jb21wb25lbnRzL3NuYXAtdmlldyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0X2NvbnRhaW5lcicpIGFzIFNuYXBWaWV3O1xyXG5cclxuICAgIHRlc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc25hcCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0Q29udGFpbmVyLmFjdGl2ZUluZGV4KTtcclxuICAgIH0pO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=