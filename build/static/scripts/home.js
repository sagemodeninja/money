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

/***/ "./node_modules/@sagemodeninja/fluent-command-bar-component/dist/fluent-command-bar-component.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/fluent-command-bar-component/dist/fluent-command-bar-component.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={269:t=>{var e;self,e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return function(e){window.customElements.define(t,e)}}t.r(e),t.d(e,{CustomComponent:()=>o,customComponent:()=>n});class o extends HTMLElement{constructor(){super();const t=this.resolveTemplate();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}resolveTemplate(){const t=this.constructor.name;return t in o._templates?o._templates[t]:this.createTemplate(t)}createTemplate(t){var e;const n=document.createElement("template"),i=Object.getPrototypeOf(this).constructor;return n.innerHTML=`<style>${null!==(e=i.styles)&&void 0!==e?e:""}</style>`,o._templates[t]=n,n}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}render(){throw new Error("Not implemented!")}}return o._templates={},e})(),t.exports=e()},441:(t,e,n)=>{var o;!function(i,r,s){if(i){for(var a,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},c={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},d={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},m=1;m<20;++m)l[111+m]="f"+m;for(m=0;m<=9;++m)l[m+96]=m.toString();v.prototype.bind=function(t,e,n){var o=this;return t=t instanceof Array?t:[t],o._bindMultiple.call(o,t,e,n),o},v.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},v.prototype.trigger=function(t,e){var n=this;return n._directMap[t+":"+e]&&n._directMap[t+":"+e]({},t),n},v.prototype.reset=function(){var t=this;return t._callbacks={},t._directMap={},t},v.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(g(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},v.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},v.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e]);a=null},v.init=function(){var t=v(r);for(var e in t)"_"!==e.charAt(0)&&(v[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},v.init(),i.Mousetrap=v,t.exports&&(t.exports=v),void 0===(o=function(){return v}.call(e,n,e,t))||(t.exports=o)}function h(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function p(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return l[t.which]?l[t.which]:c[t.which]?c[t.which]:String.fromCharCode(t.which).toLowerCase()}function f(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function y(t,e,n){return n||(n=function(){if(!a)for(var t in a={},l)t>95&&t<112||l.hasOwnProperty(t)&&(a[l[t]]=t);return a}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function b(t,e){var n,o,i,r=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),i=0;i<n.length;++i)o=n[i],u[o]&&(o=u[o]),e&&"keypress"!=e&&d[o]&&(o=d[o],r.push("shift")),f(o)&&r.push(o);return{key:o,modifiers:r,action:e=y(o,r,e)}}function g(t,e){return null!==t&&t!==r&&(t===e||g(t.parentNode,e))}function v(t){var e=this;if(t=t||r,!(e instanceof v))return new v(t);e.target=t,e._callbacks={},e._directMap={};var n,o={},i=!1,s=!1,a=!1;function l(t){t=t||{};var e,n=!1;for(e in o)t[e]?n=!0:o[e]=0;n||(a=!1)}function c(t,n,i,r,s,a){var l,c,d,u,m=[],h=i.type;if(!e._callbacks[t])return[];for("keyup"==h&&f(t)&&(n=[t]),l=0;l<e._callbacks[t].length;++l)if(c=e._callbacks[t][l],(r||!c.seq||o[c.seq]==c.level)&&h==c.action&&("keypress"==h&&!i.metaKey&&!i.ctrlKey||(d=n,u=c.modifiers,d.sort().join(",")===u.sort().join(",")))){var p=!r&&c.combo==s,y=r&&c.seq==r&&c.level==a;(p||y)&&e._callbacks[t].splice(l,1),m.push(c)}return m}function d(t,n,o,i){e.stopCallback(n,n.target||n.srcElement,o,i)||!1===t(n,o)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function u(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=p(t);n&&("keyup"!=t.type||i!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):i=!1)}function m(t,r,s,u,h){e._directMap[t+":"+s]=r;var f,y=(t=t.replace(/\s+/g," ")).split(" ");y.length>1?function(t,e,r,s){function c(e){return function(){a=e,++o[t],clearTimeout(n),n=setTimeout(l,1e3)}}function u(e){d(r,e,t),"keyup"!==s&&(i=p(e)),setTimeout(l,10)}o[t]=0;for(var h=0;h<e.length;++h){var f=h+1===e.length?u:c(s||b(e[h+1]).action);m(e[h],f,s,t,h)}}(t,y,r,s):(f=b(t,s),e._callbacks[f.key]=e._callbacks[f.key]||[],c(f.key,f.modifiers,{type:f.action},u,t,h),e._callbacks[f.key][u?"unshift":"push"]({callback:r,modifiers:f.modifiers,action:f.action,seq:u,level:h,combo:t}))}e._handleKey=function(t,e,n){var o,i=c(t,e,n),r={},u=0,m=!1;for(o=0;o<i.length;++o)i[o].seq&&(u=Math.max(u,i[o].level));for(o=0;o<i.length;++o)if(i[o].seq){if(i[o].level!=u)continue;m=!0,r[i[o].seq]=1,d(i[o].callback,n,i[o].combo,i[o].seq)}else m||d(i[o].callback,n,i[o].combo);var h="keypress"==n.type&&s;n.type!=a||f(t)||h||l(r),s=m&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var o=0;o<t.length;++o)m(t[o],e,n)},h(t,"keypress",u),h(t,"keydown",u),h(t,"keyup",u)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{FluentAppBarButton:()=>r,FluentAppBarSeparator:()=>rt,FluentCommandBar:()=>it});var t=n(269),e=n(441),i=n.n(e);let r=class extends t.CustomComponent{static get observedAttributes(){return["icon","label","modifier","key","use-accent"]}get icon(){return this.getAttribute("icon")}set icon(t){this.setAttribute("icon",t),this.setIcon()}get label(){return this.getAttribute("label")}set label(t){this.setAttribute("label",t),this.setLabel()}get command(){return this.getAttribute("command")}set command(t){this.setAttribute("command",t)}get modifier(){return this.getAttribute("modifier")}set modifier(t){this.setAttribute("modifier",t),this.setAccelerator()}get key(){return this.getAttribute("key")}set key(t){this.setAttribute("key",t),this.setAccelerator()}get useAccent(){return this.hasAttribute("use-accent")&&"false"!==this.getAttribute("use-accent")}set useAccent(t){this.toggleAttribute("use-accent",t),this.setIcon()}get title(){return this.getAttribute("title")}set title(t){this.setAttribute("title",t),this.setTitle()}get disabled(){return this.hasAttribute("disabled")}get button(){var t;return null!==(t=this._button)&&void 0!==t||(this._button=this.shadowRoot.querySelector(".button")),this._button}get iconSpan(){var t;return null!==(t=this._iconSpan)&&void 0!==t||(this._iconSpan=this.shadowRoot.querySelector(".icon")),this._iconSpan}get customIconSlot(){var t;return null!==(t=this._customIconSpan)&&void 0!==t||(this._customIconSpan=this.shadowRoot.querySelector("slot[name=icon]")),this._customIconSpan}get contentSpan(){var t;return null!==(t=this._contentSpan)&&void 0!==t||(this._contentSpan=this.shadowRoot.querySelector(".content")),this._contentSpan}get acceleratorSpan(){var t;return null!==(t=this._acceleratorSpan)&&void 0!==t||(this._acceleratorSpan=this.shadowRoot.querySelector(".keyboard-accelerator")),this._acceleratorSpan}get formattedModifier(){return this.modifier.replace("Control","Ctrl")}get formattedAccelerator(){return this.modifier?this.formattedModifier+"+"+this.key:this.key}get supportedModifier(){return this.modifier.toLowerCase().replace("control","mod")}get supportedKey(){return this.key.toLowerCase().replace("delete","del").replace("+","=").replace("escape","esc")}render(){return"\n            <div class='button'>\n                <fluent-symbol-icon class='icon'></fluent-symbol-icon>\n                <slot name='icon'></slot>\n                <span class='content'></span>\n                <span class='keyboard-accelerator'></span>\n            </div>\n        "}connectedCallback(){this.setIcon(),this.setLabel(),this.setAttribute("tabindex","0"),this.customIconSlot.addEventListener("slotchange",(t=>{const e=this.customIconSlot.assignedNodes(),n=e.length>0;this.iconSpan.style.display=n?"none":"inline-block",this.customIconSlot.style.display=n?"default":"none",e.forEach((t=>{t.addEventListener("click",(t=>{this.click(),t.stopPropagation()}))}))}))}attributeChangedCallback(t){switch(t){case"label":this.setLabel();break;case"icon":case"use-accent":this.setIcon();break;case"modifier":case"key":this.setAccelerator()}}setIcon(){var t;this.iconSpan.setAttribute("symbol",null!==(t=this.icon)&&void 0!==t?t:""),this.iconSpan.toggleAttribute("use-accent",this.useAccent)}setLabel(){this.contentSpan.textContent=this.label,this.setTitle()}setAccelerator(){var t;if(this.key){this.acceleratorSpan.textContent=null!==(t=this.formattedAccelerator)&&void 0!==t?t:"",this.setTitle();var e=this.modifier?this.supportedModifier+"+"+this.supportedKey:this.supportedKey;i().bind(e,(()=>(this.disabled||(this.click(),this.button.classList.add("invoked"),setTimeout((()=>this.button.classList.remove("invoked")),150)),!1)))}}setTitle(){var t,e;const n=this.formattedAccelerator?`(${this.formattedAccelerator})`:"";let o=null!==(e=null!==(t=this.title)&&void 0!==t?t:this.label)&&void 0!==e?e:"";this.button.setAttribute("title",`${o} ${n}`)}setAcceleratorWidth(t){this.acceleratorSpan.style.width=t+"px"}};r.styles='\n        :host {\n            display: inline-block;\n            outline: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: #000;\n        }\n\n        :host([is-secondary]) {\n            display: block;\n            margin: 4px;\n        }\n\n        :host([disabled]) {\n            pointer-events: none;\n        }\n\n        /* Button */\n        .button {\n            align-items: center;\n            border-radius: 5px;\n            box-sizing: border-box;\n            color: var(--fill-text-primary);\n            cursor: default;\n            display: flex;\n            gap: 8px;\n            min-height: 36px;\n            padding: 10px;\n            position: relative;\n        }\n        \n        .button:active,\n        .button.invoked {\n            background-color: var(--fill-subtle-tertiary);\n            color: var(--fill-text-secondary);\n        }\n\n        @media (hover: hover) {\n            .button:hover {\n                background-color: var(--fill-subtle-secondary);\n            }\n        }\n\n        :host([disabled]) .button {\n            color: var(--fill-text-disabled);\n        }\n\n        :host([disabled][is-secondary]) .button {\n            min-width: 180px;\n        }\n\n        :host([appearance=bottom]:not([is-secondary])) .button {\n            flex-direction: column;\n            height: 100%;\n            justify-content: center;\n            width: 64px;\n        }\n\n        :host([appearance=collapsed]:not([is-secondary])) .button {\n            justify-content: center;\n            width: 64px;\n        }\n\n        .button:active .icon[use-accent]::part(icon),\n        .button.invoked .icon[use-accent]::part(icon) {\n            color: color-mix(in srgb, var(--fill-accent-default), transparent 10%);\n        }\n\n        :host([disabled]) .icon::part(icon) {\n            color: var(--fill-text-disabled);\n        }\n\n        /* Custom icon */\n        :host([disabled]) ::slotted(fluent-image-icon) {\n            opacity: 0.49;\n        }\n        \n        /* Content */\n        .content {\n            flex-grow: 1;\n            font-family: \'Segoe UI Variable\', sans-serif;\n            font-size: 12px;\n            font-variation-settings: "wght" 400, "opsz" 16;\n            line-height: 1.5;\n            text-align: center;\n            white-space: nowrap;\n        }\n\n        .content:empty,\n        :host([appearance=collapsed]:not([is-secondary])) .content {\n            display: none;\n        }\n\n        :host([is-secondary]) .content {\n            font-variation-settings: "wght" 400, "opsz" 20;\n            font-size: 14px;\n            text-align: left;\n        }\n\n        .content::before,\n        .content::after {\n            content: \'\';\n            display: block;\n            height: 0;\n            width: 0;\n        }\n\n        .content::before{\n            margin-top: -5px;\n        }\n\n        .content::after{\n            margin-bottom: -4px;\n        }\n\n        /* Keyboard accelerator */\n        .keyboard-accelerator {\n            color: color-mix(in srgb, var(--fill-text-primary), transparent 40%);\n            display: none;\n            font-family: \'Segoe UI Variable Small\', sans-serif;\n            font-size: 12px;\n            margin-left: 30px;\n        }\n\n        :host([is-secondary]) .keyboard-accelerator {\n            display: inline-block;\n        }\n\n        :host([disabled]) .keyboard-accelerator {\n            color: var(--fill-text-disabled) !important;\n        }\n    ',r=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}([(0,t.customComponent)("fluent-app-bar-button")],r);const s=Math.min,a=Math.max,l=Math.round,c=Math.floor,d=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},m={start:"end",end:"start"};function h(t,e,n){return a(t,s(e,n))}function p(t,e){return"function"==typeof t?t(e):t}function f(t){return t.split("-")[0]}function y(t){return t.split("-")[1]}function b(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function v(t){return["top","bottom"].includes(f(t))?"y":"x"}function x(t){return b(v(t))}function w(t){return t.replace(/start|end/g,(t=>m[t]))}function C(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function A(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function k(t,e,n){let{reference:o,floating:i}=t;const r=v(e),s=x(e),a=g(s),l=f(e),c="y"===r,d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[a]/2-i[a]/2;let h;switch(l){case"top":h={x:d,y:o.y-i.height};break;case"bottom":h={x:d,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:u};break;case"left":h={x:o.x-i.width,y:u};break;default:h={x:o.x,y:o.y}}switch(y(e)){case"start":h[s]-=m*(n&&c?-1:1);break;case"end":h[s]+=m*(n&&c?-1:1)}return h}async function S(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:h=0}=p(e,t),f=function(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}(h),y=a[m?"floating"===u?"reference":"floating":u],b=A(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g="floating"===u?{...s.floating,x:o,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),x=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=A(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:v,strategy:l}):g);return{top:(b.top-w.top+f.top)/x.y,bottom:(w.bottom-b.bottom+f.bottom)/x.y,left:(b.left-w.left+f.left)/x.x,right:(w.right-b.right+f.right)/x.x}}const R=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:a,elements:l}=e,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:b=!0,...v}=p(t,e),A=f(o),k=f(s)===s,R=await(null==a.isRTL?void 0:a.isRTL(l.floating)),E=u||(k||!b?[C(s)]:function(t){const e=C(t);return[w(t),e,w(e)]}(s));u||"none"===h||E.push(...function(t,e,n,o){const i=y(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(f(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(w)))),r}(s,b,h,R));const _=[s,...E],L=await S(e,v),P=[];let T=(null==(n=i.flip)?void 0:n.overflows)||[];if(c&&P.push(L[A]),d){const t=function(t,e,n){void 0===n&&(n=!1);const o=y(t),i=x(t),r=g(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=C(s)),[s,C(s)]}(o,r,R);P.push(L[t[0]],L[t[1]])}if(T=[...T,{placement:o,overflows:P}],!P.every((t=>t<=0))){var O,M;const t=((null==(O=i.flip)?void 0:O.index)||0)+1,e=_[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n=null==(M=T.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:M.placement;if(!n)switch(m){case"bestFit":{var B;const t=null==(B=T.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:B[0];t&&(n=t);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},E=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=f(n),a=y(n),l="y"===v(n),c=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=p(e,t);let{mainAxis:m,crossAxis:h,alignmentAxis:b}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"==typeof b&&(h="end"===a?-1*b:b),l?{x:h*d,y:m*c}:{x:m*c,y:h*d}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function _(t){return T(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(T(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function T(t){return t instanceof Node||t instanceof L(t).Node}function O(t){return t instanceof Element||t instanceof L(t).Element}function M(t){return t instanceof HTMLElement||t instanceof L(t).HTMLElement}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof L(t).ShadowRoot)}function j(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=q(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function D(t){return["table","td","th"].includes(_(t))}function N(t){const e=I(),n=q(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function I(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function F(t){return["html","body","#document"].includes(_(t))}function q(t){return L(t).getComputedStyle(t)}function z(t){return O(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(t){if("html"===_(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||P(t);return B(e)?e.host:e}function K(t){const e=V(t);return F(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&j(e)?e:K(e)}function H(t,e){var n;void 0===e&&(e=[]);const o=K(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=L(o);return i?e.concat(r,r.visualViewport||[],j(o)?o:[]):e.concat(o,H(o))}function W(t){const e=q(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,a=l(n)!==r||l(o)!==s;return a&&(n=r,o=s),{width:n,height:o,$:a}}function U(t){return O(t)?t:t.contextElement}function $(t){const e=U(t);if(!M(e))return d(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=W(e);let s=(r?l(n.width):n.width)/o,a=(r?l(n.height):n.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const X=d(0);function Y(t){const e=L(t);return I()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:X}function G(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=U(t);let s=d(1);e&&(o?O(o)&&(s=$(o)):s=$(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==L(t))&&e}(r,n,o)?Y(r):d(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,u=i.width/s.x,m=i.height/s.y;if(r){const t=L(r),e=o&&O(o)?L(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=$(n),e=n.getBoundingClientRect(),o=q(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;l*=t.x,c*=t.y,u*=t.x,m*=t.y,l+=i,c+=r,n=L(n).frameElement}}return A({width:u,height:m,x:l,y:c})}function J(t){return G(P(t)).left+z(t).scrollLeft}function Q(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=L(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,l=0;if(i){r=i.width,s=i.height;const t=I();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:a,y:l}}(t,n);else if("document"===e)o=function(t){const e=P(t),n=z(t),o=t.ownerDocument.body,i=a(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=a(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+J(t);const l=-n.scrollTop;return"rtl"===q(o).direction&&(s+=a(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}(P(t));else if(O(e))o=function(t,e){const n=G(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=M(t)?$(t):d(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=Y(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return A(o)}function Z(t,e){const n=V(t);return!(n===e||!O(n)||F(n))&&("fixed"===q(n).position||Z(n,e))}function tt(t,e,n){const o=M(e),i=P(e),r="fixed"===n,s=G(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=d(0);if(o||!o&&!r)if(("body"!==_(e)||j(i))&&(a=z(e)),o){const t=G(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else i&&(l.x=J(i));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function et(t,e){return M(t)&&"fixed"!==q(t).position?e?e(t):t.offsetParent:null}function nt(t,e){const n=L(t);if(!M(t))return n;let o=et(t,e);for(;o&&D(o)&&"static"===q(o).position;)o=et(o,e);return o&&("html"===_(o)||"body"===_(o)&&"static"===q(o).position&&!N(o))?n:o||function(t){let e=V(t);for(;M(e)&&!F(e);){if(N(e))return e;e=V(e)}return null}(t)||n}const ot={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=M(n),r=P(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},a=d(1);const l=d(0);if((i||!i&&"fixed"!==o)&&(("body"!==_(n)||j(r))&&(s=z(n)),M(n))){const t=G(n);a=$(n),l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-s.scrollLeft*a.x+l.x,y:e.y*a.y-s.scrollTop*a.y+l.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=H(t).filter((t=>O(t)&&"body"!==_(t))),i=null;const r="fixed"===q(t).position;let s=r?V(t):t;for(;O(s)&&!F(s);){const e=q(s),n=N(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||j(s)&&!n&&Z(t,s))?o=o.filter((t=>t!==s)):i=e,s=V(s)}return e.set(t,o),o}(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=Q(e,n,i);return t.top=a(o.top,t.top),t.right=s(o.right,t.right),t.bottom=s(o.bottom,t.bottom),t.left=a(o.left,t.left),t}),Q(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:nt,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||nt,r=this.getDimensions;return{reference:tt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return W(t)},getScale:$,isElement:O,isRTL:function(t){return"rtl"===q(t).direction}};let it=class extends t.CustomComponent{constructor(){super(),this.setCommandAppearance=this.setCommandAppearance.bind(this),this.handleSlotChange=this.handleSlotChange.bind(this),this.autoAdjust=this.autoAdjust.bind(this),this.isMovingCommand=!1,this.lastVisibleCommandIndex=0}static get observedAttributes(){return["is-open","default-label-position","custom-menu"]}get defaultLabelPosition(){var t;return null!==(t=this.getAttribute("default-label-position"))&&void 0!==t?t:"right"}set defaultLabelPosition(t){this.setAttribute("default-label-position",t),this.setLabelPosition()}get isOpen(){return this.hasAttribute("is-open")&&"false"!==this.getAttribute("is-open")}get customMenu(){return this.hasAttribute("custom-menu")&&"false"!==this.getAttribute("custom-menu")}set customMenu(t){this.toggleAttribute("custom-menu",t)}get commandBar(){var t;return null!==(t=this._commandBar)&&void 0!==t||(this._commandBar=this.shadowRoot.querySelector(".command-bar")),this._commandBar}get primaryCommandsContainer(){var t;return null!==(t=this._primaryCommandsContainer)&&void 0!==t||(this._primaryCommandsContainer=this.shadowRoot.querySelector(".primary-commands")),this._primaryCommandsContainer}get primaryCommandsSlot(){var t;return null!==(t=this._primaryCommandsSlot)&&void 0!==t||(this._primaryCommandsSlot=this.shadowRoot.querySelector(".primary-commands slot")),this._primaryCommandsSlot}get moreButton(){var t;return null!==(t=this._moreButton)&&void 0!==t||(this._moreButton=this.shadowRoot.querySelector(".more-button")),this._moreButton}get secondaryCommandsDiv(){var t;return null!==(t=this._secondaryCommandsDiv)&&void 0!==t||(this._secondaryCommandsDiv=this.shadowRoot.querySelector(".secondary-commands")),this._secondaryCommandsDiv}get secondaryCommandsSlot(){var t;return null!==(t=this._secondaryCommandsSlot)&&void 0!==t||(this._secondaryCommandsSlot=this.shadowRoot.querySelector("slot[name=secondary-commands]")),this._secondaryCommandsSlot}get collapsedCommandsContainer(){var t;return null!==(t=this._collapsedCommandsContainer)&&void 0!==t||(this._collapsedCommandsContainer=this.shadowRoot.querySelector(".collapsed-commands")),this._collapsedCommandsContainer}get commands(){return[...this.primaryCommandsSlot.assignedElements().filter((t=>t instanceof r)),...this.secondaryCommandsSlot.assignedElements().filter((t=>t instanceof r)),...this.collapsedCommandsContainer.childNodes]}render(){return"\n            <div class='command-bar'>\n                <div class='primary-commands'>\n                    <slot></slot>\n                </div>\n                <div class='more-button' title='See more'>\n                    <fluent-symbol-icon symbol='More' font-size='20'></fluent-symbol-icon>\n                </div>\n                <div class='secondary-commands'>\n                    <slot name='secondary-commands'></slot>\n                    <div class='collapsed-commands'></div>\n                <div>\n            </div>\n        "}connectedCallback(){this.moreButton.addEventListener("click",(t=>{t.stopPropagation(),this.customMenu?this.dispatchEvent(new CustomEvent("menuinvoked",{bubbles:!0})):this.toggleAttribute("is-open",!this.isOpen)})),this.primaryCommandsSlot.addEventListener("slotchange",this.handleSlotChange),this.secondaryCommandsSlot.addEventListener("slotchange",(t=>{if(this.secondaryContainer=this.secondaryCommandsSlot.assignedNodes()[0],this.setMoreButtonVisibility(),!this.secondaryContainer)return;var e=this.secondaryContainer.querySelectorAll("fluent-app-bar-button"),n=this.secondaryContainer.querySelectorAll("fluent-app-bar-separator");const o=6*Array.from(e).reduce(((t,e)=>t.formattedAccelerator.length>e.formattedAccelerator.length?t:e)).formattedAccelerator.length;e.forEach((t=>{t.toggleAttribute("is-secondary",!0),t.setAcceleratorWidth(o)})),n.forEach((t=>{t.toggleAttribute("horizontal",!0)}))})),this.parentResizeObserver=new ResizeObserver((()=>this.autoAdjust())),this.parentResizeObserver.observe(this.parentElement),window.addEventListener("click",(()=>{this.toggleAttribute("is-open",!1)}))}attributeChangedCallback(t){switch(t){case"is-open":this.setIsOpen();break;case"default-label-position":this.setLabelPosition()}}disconnectedCallback(){this.parentResizeObserver.disconnect()}setLabelPosition(){if(["bottom","collapsed","right"].includes(this.defaultLabelPosition)){var t=this.defaultLabelPosition;"bottom"!==t||this.isOpen||(t="collapsed"),this.primaryCommands?this.setCommandAppearance(t):setTimeout((()=>this.setCommandAppearance(t)),50)}}setCommandAppearance(t){var e;return null===(e=this.primaryCommands)||void 0===e||e.forEach((e=>{e.setAttribute("appearance",t)})),!!this.primaryCommands}setMoreButtonVisibility(){const t=this.secondaryContainer&&this.secondaryContainer.children.length||this.collapsedCommandsContainer.children.length;this.moreButton.style.display=t?"flex":"none"}setIsOpen(){this.commandBar.classList.toggle("active",this.isOpen),this.isOpen?this._menuCleanup=function(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:u=!1}=o,m=U(t),h=i||r?[...m?H(m):[],...H(e)]:[];h.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const p=m&&d?function(t,e){let n,o=null;const i=P(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(d,u){void 0===d&&(d=!1),void 0===u&&(u=1),r();const{left:m,top:h,width:p,height:f}=t.getBoundingClientRect();if(d||e(),!p||!f)return;const y={rootMargin:-c(h)+"px "+-c(i.clientWidth-(m+p))+"px "+-c(i.clientHeight-(h+f))+"px "+-c(m)+"px",threshold:a(0,s(1,u))||1};let b=!0;function g(t){const e=t[0].intersectionRatio;if(e!==u){if(!b)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}b=!1}try{o=new IntersectionObserver(g,{...y,root:i.ownerDocument})}catch(t){o=new IntersectionObserver(g,y)}o.observe(t)}(!0),r}(m,n):null;let f,y=-1,b=null;l&&(b=new ResizeObserver((t=>{let[o]=t;o&&o.target===m&&b&&(b.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{b&&b.observe(e)}))),n()})),m&&!u&&b.observe(m),b.observe(e));let g=u?G(t):null;return u&&function e(){const o=G(t);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,f=requestAnimationFrame(e)}(),n(),()=>{h.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),p&&p(),b&&b.disconnect(),b=null,u&&cancelAnimationFrame(f)}}(this.moreButton,this.secondaryCommandsDiv,this.updateMenuPosition.bind(this)):this._menuCleanup&&this._menuCleanup(),this.setLabelPosition()}handleSlotChange(){const t=this.primaryCommandsSlot.assignedNodes();if(this.primaryCommands=t.filter((t=>t instanceof HTMLElement&&"FLUENT-APP-BAR-BUTTON"===t.nodeName)),!this.isMovingCommand){this.style.opacity="0",this.primaryCommandsStore=this.primaryCommands.map((t=>({parent:t.parentElement,self:t,previous:t.previousElementSibling,bounds:t.getClientRects()[0].right-this.getClientRects()[0].left}))),this.lastVisibleCommandIndex=this.primaryCommands.length-1;const t=setInterval((()=>{this.primaryCommandsStore&&(clearInterval(t),this.primaryCommandsStore.forEach(this.autoAdjust),this.setMoreButtonVisibility(),this.style.opacity="1")}),10)}this.isMovingCommand=!1,this.setLabelPosition()}autoAdjust(){var t;const e=null!==(t=this.primaryCommandsStore)&&void 0!==t?t:[];if(0===e.length)return;const n=this.parentElement.getClientRects()[0].width-(this.getLeft()+47+12),o=this.lastVisibleCommandIndex,i=Math.min(e.length-1,o+1),r=e[o],s=e[i];o>=0&&r.bounds>n&&(this.moveCommands(r.self,this,this.collapsedCommandsContainer),this.lastVisibleCommandIndex-=1,o>0&&"FLUENT-APP-BAR-SEPARATOR"===r.previous.nodeName&&this.moveCommands(r.previous,this,this.collapsedCommandsContainer)),i!==o&&s.bounds<n&&(i>0&&"FLUENT-APP-BAR-SEPARATOR"===s.previous.nodeName&&this.moveCommands(s.previous,this.collapsedCommandsContainer,this),this.moveCommands(s.self,this.collapsedCommandsContainer,this),this.lastVisibleCommandIndex=i)}getLeft(){if(!this.previousElementSibling)return 0;const t=this.parentElement.getClientRects()[0].left;return this.previousElementSibling.getClientRects()[0].right-t}moveCommands(t,e,n){var o;const i=e===this;if(this.isMovingCommand=!0,e.removeChild(t),i){const e=n.firstChild;n.insertBefore(t,e)}else n.appendChild(t);var r={bubbles:!0,detail:{type:t.nodeName,command:null!==(o=t.dataset.command)&&void 0!==o?o:null,collapsed:i}},s=new CustomEvent("commandmoved",r);this.dispatchEvent(s),this.toggleAttributes(t,i),this.setMoreButtonVisibility()}updateMenuPosition(){var t;((t,e,n)=>{const o=new Map,i={platform:ot,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=k(c,o,l),m=o,h={},p=0;for(let n=0;n<a.length;n++){const{name:r,fn:f}=a[n],{x:y,y:b,data:g,reset:v}=await f({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:c,platform:s,elements:{reference:t,floating:e}});d=null!=y?y:d,u=null!=b?b:u,h={...h,[r]:{...h[r],...g}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(m=v.placement),v.rects&&(c=!0===v.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:d,y:u}=k(c,m,l))),n=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:h}})(t,e,{...i,platform:r})})(this.moreButton,this.secondaryCommandsDiv,{placement:"bottom-end",middleware:[E(16),R(),(void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...l}=p(t,e),c={x:n,y:o},d=await S(e,l),u=v(f(i)),m=b(u);let y=c[m],g=c[u];if(r){const t="y"===m?"bottom":"right";y=h(y+d["y"===m?"top":"left"],y,y-d[t])}if(s){const t="y"===u?"bottom":"right";g=h(g+d["y"===u?"top":"left"],g,g-d[t])}const x=a.fn({...e,[m]:y,[u]:g});return{...x,data:{x:x.x-n,y:x.y-o}}}})]}).then((({x:t,y:e})=>{Object.assign(this.secondaryCommandsDiv.style,{left:`${t}px`,top:`${e}px`})}))}toggleAttributes(t,e){let n;switch(t.nodeName){case"FLUENT-APP-BAR-BUTTON":n="is-secondary";break;case"FLUENT-APP-BAR-SEPARATOR":n="horizontal"}t.toggleAttribute(n,e)}};it.styles="\n        :host {\n            display: inline-block;\n            height: 46px;\n            max-width: 100%;\n            user-select: none;\n        }\n\n        .command-bar {\n            align-items: center;\n            border-radius: 4px;\n            box-sizing: border-box;\n            display: flex;\n            padding: 6px;\n            position: relative;\n        }\n\n        .primary-commands {\n            align-items: center;\n            column-gap: 5px;\n            display: flex;\n            overflow-x: hidden;\n        }\n\n        .primary-commands:not(:empty) {\n            margin-right: 5px;\n        }\n\n        /* Button */\n        .more-button {\n            align-items: center;\n            background-color: transparent;\n            border-radius: 5px;\n            box-sizing: border-box;\n            color: var(--fill-text-primary);\n            cursor: default;\n            display: none;\n            height: 100%;\n            min-height: 36px;\n            padding: 0 3px;\n            position: relative;\n            user-select: none;\n            -webkit-user-select: none;\n        }\n        \n        .more-button:hover {\n            background-color: var(--fill-subtle-secondary);\n        }\n        \n        .more-button:active {\n            background-color: var(--fill-subtle-tertiary);\n            color: var(--fill-text-secondary);\n        }\n        \n        .more-button fluent-symbol-icon {\n            margin: 0 8px;\n        }\n\n        /* Secondary commands */\n        .secondary-commands {\n            background-color: var(--background-fill-mica-base);\n            background-blend-mode: color, luminosity;\n            -webkit-backdrop-filter: saturate(180%) blur(100px);\n            backdrop-filter: saturate(180%) blur(100px);\n            border: solid 1px var(--stroke-card-default);\n            border-radius: 5px;\n            box-shadow: 0px 8px 16px var(--shadow-flyout);\n            display: none;\n            flex-direction: column;\n            position: fixed;\n            z-index: 9999;\n        }\n\n        .command-bar.active .secondary-commands {\n            display: flex;\n        }\n\n        .collapsed-commands:not(:empty) {\n            border-top: solid 1px var(--stroke-divider-default);\n        }\n\n        .collapsed-commands fluent-app-bar-separator:first-child {\n            display: none;\n        }\n    ",it=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}([(0,t.customComponent)("fluent-command-bar")],it);let rt=class extends t.CustomComponent{render(){return""}};rt.styles="\n        :host {\n            background-color: var(--stroke-divider-default);\n            box-sizing: border-box;\n            display: block;\n            height: 30px;\n            width: 1px;\n        }\n\n        :host([horizontal]) {\n            height: 1px;\n            min-height: 1px;\n            width: 100%;\n        }\n    ",rt=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}([(0,t.customComponent)("fluent-app-bar-separator")],rt)})(),o})()));
//# sourceMappingURL=fluent-command-bar-component.js.map

/***/ }),

/***/ "./node_modules/@sagemodeninja/fluent-icon-element-component/dist/fluent-icon-element-component.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/fluent-icon-element-component/dist/fluent-icon-element-component.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {

!function(e,a){ true?module.exports=a():0}(self,(()=>(()=>{var e={269:e=>{var a;self,a=()=>(()=>{"use strict";var e={d:(a,n)=>{for(var l in n)e.o(n,l)&&!e.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:n[l]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};function n(e){return function(a){window.customElements.define(e,a)}}e.r(a),e.d(a,{CustomComponent:()=>l,customComponent:()=>n});class l extends HTMLElement{constructor(){super();const e=this.resolveTemplate();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}resolveTemplate(){const e=this.constructor.name;return e in l._templates?l._templates[e]:this.createTemplate(e)}createTemplate(e){var a;const n=document.createElement("template"),g=Object.getPrototypeOf(this).constructor;return n.innerHTML=`<style>${null!==(a=g.styles)&&void 0!==a?a:""}</style>`,l._templates[e]=n,n}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}render(){throw new Error("Not implemented!")}}return l._templates={},a})(),e.exports=a()}},a={};function n(l){var g=a[l];if(void 0!==g)return g.exports;var p=a[l]={exports:{}};return e[l](p,p.exports,n),p.exports}n.d=(e,a)=>{for(var l in a)n.o(a,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";n.r(l),n.d(l,{FluentFontIcon:()=>p,FluentImageIcon:()=>t,FluentSymbolIcon:()=>h});var e=n(269),a=function(e,a,n,l){var g,p=arguments.length,h=p<3?a:null===l?l=Object.getOwnPropertyDescriptor(a,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(e,a,n,l);else for(var t=e.length-1;t>=0;t--)(g=e[t])&&(h=(p<3?g(h):p>3?g(a,n,h):g(a,n))||h);return p>3&&h&&Object.defineProperty(a,n,h),h};const g=[{name:"GlobalNavButton",glyph:"e700"},{name:"Wifi",glyph:"e701"},{name:"Bluetooth",glyph:"e702"},{name:"Connect",glyph:"e703"},{name:"InternetSharing",glyph:"e704"},{name:"VPN",glyph:"e705"},{name:"Brightness",glyph:"e706"},{name:"MapPin",glyph:"e707"},{name:"QuietHours",glyph:"e708"},{name:"Airplane",glyph:"e709"},{name:"Tablet",glyph:"e70a"},{name:"QuickNote",glyph:"e70b"},{name:"RememberedDevice",glyph:"e70c"},{name:"ChevronDown",glyph:"e70d"},{name:"ChevronUp",glyph:"e70e"},{name:"Edit",glyph:"e70f"},{name:"Add",glyph:"e710"},{name:"Cancel",glyph:"e711"},{name:"More",glyph:"e712"},{name:"Settings",glyph:"e713"},{name:"Video",glyph:"e714"},{name:"Mail",glyph:"e715"},{name:"People",glyph:"e716"},{name:"Phone",glyph:"e717"},{name:"Pin",glyph:"e718"},{name:"Shop",glyph:"e719"},{name:"Stop",glyph:"e71a"},{name:"Link",glyph:"e71b"},{name:"Filter",glyph:"e71c"},{name:"AllApps",glyph:"e71d"},{name:"Zoom",glyph:"e71e"},{name:"ZoomOut",glyph:"e71f"},{name:"Microphone",glyph:"e720"},{name:"Search",glyph:"e721"},{name:"Camera",glyph:"e722"},{name:"Attach",glyph:"e723"},{name:"Send",glyph:"e724"},{name:"SendFill",glyph:"e725"},{name:"WalkSolid",glyph:"e726"},{name:"InPrivate",glyph:"e727"},{name:"FavoriteList",glyph:"e728"},{name:"PageSolid",glyph:"e729"},{name:"Forward",glyph:"e72a"},{name:"Back",glyph:"e72b"},{name:"Refresh",glyph:"e72c"},{name:"Share",glyph:"e72d"},{name:"Lock",glyph:"e72e"},{name:"ReportHacked",glyph:"e730"},{name:"EMI",glyph:"e731"},{name:"FavoriteStar",glyph:"e734"},{name:"FavoriteStarFill",glyph:"e735"},{name:"ReadingMode",glyph:"e736"},{name:"Favicon",glyph:"e737"},{name:"Remove",glyph:"e738"},{name:"Checkbox",glyph:"e739"},{name:"CheckboxComposite",glyph:"e73a"},{name:"CheckboxFill",glyph:"e73b"},{name:"CheckboxIndeterminate",glyph:"e73c"},{name:"CheckboxCompositeReversed",glyph:"e73d"},{name:"CheckMark",glyph:"e73e"},{name:"BackToWindow",glyph:"e73f"},{name:"FullScreen",glyph:"e740"},{name:"ResizeTouchLarger",glyph:"e741"},{name:"ResizeTouchSmaller",glyph:"e742"},{name:"ResizeMouseSmall",glyph:"e743"},{name:"ResizeMouseMedium",glyph:"e744"},{name:"ResizeMouseWide",glyph:"e745"},{name:"ResizeMouseTall",glyph:"e746"},{name:"ResizeMouseLarge",glyph:"e747"},{name:"SwitchUser",glyph:"e748"},{name:"Print",glyph:"e749"},{name:"Up",glyph:"e74a"},{name:"Down",glyph:"e74b"},{name:"OEM",glyph:"e74c"},{name:"Delete",glyph:"e74d"},{name:"Save",glyph:"e74e"},{name:"Mute",glyph:"e74f"},{name:"BackSpaceQWERTY",glyph:"e750"},{name:"ReturnKey",glyph:"e751"},{name:"UpArrowShiftKey",glyph:"e752"},{name:"Cloud",glyph:"e753"},{name:"Flashlight",glyph:"e754"},{name:"RotationLock",glyph:"e755"},{name:"CommandPrompt",glyph:"e756"},{name:"SIPMove",glyph:"e759"},{name:"SIPUndock",glyph:"e75a"},{name:"SIPRedock",glyph:"e75b"},{name:"EraseTool",glyph:"e75c"},{name:"UnderscoreSpace",glyph:"e75d"},{name:"GripperTool",glyph:"e75e"},{name:"Dialpad",glyph:"e75f"},{name:"PageLeft",glyph:"e760"},{name:"PageRight",glyph:"e761"},{name:"MultiSelect",glyph:"e762"},{name:"KeyboardLeftHanded",glyph:"e763"},{name:"KeyboardRightHanded",glyph:"e764"},{name:"KeyboardClassic",glyph:"e765"},{name:"KeyboardSplit",glyph:"e766"},{name:"Volume",glyph:"e767"},{name:"Play",glyph:"e768"},{name:"Pause",glyph:"e769"},{name:"ChevronLeft",glyph:"e76b"},{name:"ChevronRight",glyph:"e76c"},{name:"InkingTool",glyph:"e76d"},{name:"Emoji2",glyph:"e76e"},{name:"GripperBarHorizontal",glyph:"e76f"},{name:"System",glyph:"e770"},{name:"Personalize",glyph:"e771"},{name:"Devices",glyph:"e772"},{name:"SearchAndApps",glyph:"e773"},{name:"Globe",glyph:"e774"},{name:"TimeLanguage",glyph:"e775"},{name:"EaseOfAccess",glyph:"e776"},{name:"UpdateRestore",glyph:"e777"},{name:"HangUp",glyph:"e778"},{name:"ContactInfo",glyph:"e779"},{name:"Unpin",glyph:"e77a"},{name:"Contact",glyph:"e77b"},{name:"Memo",glyph:"e77c"},{name:"IncomingCall",glyph:"e77e"},{name:"Paste",glyph:"e77f"},{name:"PhoneBook",glyph:"e780"},{name:"LEDLight",glyph:"e781"},{name:"Error",glyph:"e783"},{name:"GripperBarVertical",glyph:"e784"},{name:"Unlock",glyph:"e785"},{name:"Slideshow",glyph:"e786"},{name:"Calendar",glyph:"e787"},{name:"GripperResize",glyph:"e788"},{name:"Megaphone",glyph:"e789"},{name:"Trim",glyph:"e78a"},{name:"NewWindow",glyph:"e78b"},{name:"SaveLocal",glyph:"e78c"},{name:"Color",glyph:"e790"},{name:"DataSense",glyph:"e791"},{name:"SaveAs",glyph:"e792"},{name:"Light",glyph:"e793"},{name:"AspectRatio",glyph:"e799"},{name:"DataSenseBar",glyph:"e7a5"},{name:"Redo",glyph:"e7a6"},{name:"Undo",glyph:"e7a7"},{name:"Crop",glyph:"e7a8"},{name:"OpenWith",glyph:"e7ac"},{name:"Rotate",glyph:"e7ad"},{name:"RedEye",glyph:"e7b3"},{name:"SetlockScreen",glyph:"e7b5"},{name:"MapPin2",glyph:"e7b7"},{name:"Package",glyph:"e7b8"},{name:"Warning",glyph:"e7ba"},{name:"ReadingList",glyph:"e7bc"},{name:"Education",glyph:"e7be"},{name:"ShoppingCart",glyph:"e7bf"},{name:"Train",glyph:"e7c0"},{name:"Flag",glyph:"e7c1"},{name:"Move",glyph:"e7c2"},{name:"Page",glyph:"e7c3"},{name:"TaskView",glyph:"e7c4"},{name:"BrowsePhotos",glyph:"e7c5"},{name:"HalfStarLeft",glyph:"e7c6"},{name:"HalfStarRight",glyph:"e7c7"},{name:"Record",glyph:"e7c8"},{name:"TouchPointer",glyph:"e7c9"},{name:"LangJPN",glyph:"e7de"},{name:"Ferry",glyph:"e7e3"},{name:"Highlight",glyph:"e7e6"},{name:"ActionCenterNotification",glyph:"e7e7"},{name:"PowerButton",glyph:"e7e8"},{name:"ResizeTouchNarrower",glyph:"e7ea"},{name:"ResizeTouchShorter",glyph:"e7eb"},{name:"DrivingMode",glyph:"e7ec"},{name:"RingerSilent",glyph:"e7ed"},{name:"OtherUser",glyph:"e7ee"},{name:"Admin",glyph:"e7ef"},{name:"CC",glyph:"e7f0"},{name:"SDCard",glyph:"e7f1"},{name:"CallForwarding",glyph:"e7f2"},{name:"SettingsDisplaySound",glyph:"e7f3"},{name:"TVMonitor",glyph:"e7f4"},{name:"Speakers",glyph:"e7f5"},{name:"Headphone",glyph:"e7f6"},{name:"DeviceLaptopPic",glyph:"e7f7"},{name:"DeviceLaptopNoPic",glyph:"e7f8"},{name:"DeviceMonitorRightPic",glyph:"e7f9"},{name:"DeviceMonitorLeftPic",glyph:"e7fa"},{name:"DeviceMonitorNoPic",glyph:"e7fb"},{name:"Game",glyph:"e7fc"},{name:"HorizontalTabKey",glyph:"e7fd"},{name:"StreetsideSplitMinimize",glyph:"e802"},{name:"StreetsideSplitExpand",glyph:"e803"},{name:"Car",glyph:"e804"},{name:"Walk",glyph:"e805"},{name:"Bus",glyph:"e806"},{name:"TiltUp",glyph:"e809"},{name:"TiltDown",glyph:"e80a"},{name:"CallControl",glyph:"e80b"},{name:"RotateMapRight",glyph:"e80c"},{name:"RotateMapLeft",glyph:"e80d"},{name:"Home",glyph:"e80f"},{name:"ParkingLocation",glyph:"e811"},{name:"MapCompassTop",glyph:"e812"},{name:"MapCompassBottom",glyph:"e813"},{name:"IncidentTriangle",glyph:"e814"},{name:"Touch",glyph:"e815"},{name:"MapDirections",glyph:"e816"},{name:"StartPoint",glyph:"e819"},{name:"StopPoint",glyph:"e81a"},{name:"EndPoint",glyph:"e81b"},{name:"History",glyph:"e81c"},{name:"Location",glyph:"e81d"},{name:"MapLayers",glyph:"e81e"},{name:"Accident",glyph:"e81f"},{name:"Work",glyph:"e821"},{name:"Construction",glyph:"e822"},{name:"Recent",glyph:"e823"},{name:"Bank",glyph:"e825"},{name:"DownloadMap",glyph:"e826"},{name:"InkingToolFill2",glyph:"e829"},{name:"HighlightFill2",glyph:"e82a"},{name:"EraseToolFill",glyph:"e82b"},{name:"EraseToolFill2",glyph:"e82c"},{name:"Dictionary",glyph:"e82d"},{name:"DictionaryAdd",glyph:"e82e"},{name:"ToolTip",glyph:"e82f"},{name:"ChromeBack",glyph:"e830"},{name:"ProvisioningPackage",glyph:"e835"},{name:"AddRemoteDevice",glyph:"e836"},{name:"FolderOpen",glyph:"e838"},{name:"Ethernet",glyph:"e839"},{name:"ShareBroadband",glyph:"e83a"},{name:"DirectAccess",glyph:"e83b"},{name:"DialUp",glyph:"e83c"},{name:"DefenderApp",glyph:"e83d"},{name:"BatteryCharging9",glyph:"e83e"},{name:"Battery10",glyph:"e83f"},{name:"Pinned",glyph:"e840"},{name:"PinFill",glyph:"e841"},{name:"PinnedFill",glyph:"e842"},{name:"PeriodKey",glyph:"e843"},{name:"PuncKey",glyph:"e844"},{name:"RevToggleKey",glyph:"e845"},{name:"RightArrowKeyTime1",glyph:"e846"},{name:"RightArrowKeyTime2",glyph:"e847"},{name:"LeftQuote",glyph:"e848"},{name:"RightQuote",glyph:"e849"},{name:"DownShiftKey",glyph:"e84a"},{name:"UpShiftKey",glyph:"e84b"},{name:"PuncKey0",glyph:"e84c"},{name:"PuncKeyLeftBottom",glyph:"e84d"},{name:"RightArrowKeyTime3",glyph:"e84e"},{name:"RightArrowKeyTime4",glyph:"e84f"},{name:"Battery0",glyph:"e850"},{name:"Battery1",glyph:"e851"},{name:"Battery2",glyph:"e852"},{name:"Battery3",glyph:"e853"},{name:"Battery4",glyph:"e854"},{name:"Battery5",glyph:"e855"},{name:"Battery6",glyph:"e856"},{name:"Battery7",glyph:"e857"},{name:"Battery8",glyph:"e858"},{name:"Battery9",glyph:"e859"},{name:"BatteryCharging0",glyph:"e85a"},{name:"BatteryCharging1",glyph:"e85b"},{name:"BatteryCharging2",glyph:"e85c"},{name:"BatteryCharging3",glyph:"e85d"},{name:"BatteryCharging4",glyph:"e85e"},{name:"BatteryCharging5",glyph:"e85f"},{name:"BatteryCharging6",glyph:"e860"},{name:"BatteryCharging7",glyph:"e861"},{name:"BatteryCharging8",glyph:"e862"},{name:"BatterySaver0",glyph:"e863"},{name:"BatterySaver1",glyph:"e864"},{name:"BatterySaver2",glyph:"e865"},{name:"BatterySaver3",glyph:"e866"},{name:"BatterySaver4",glyph:"e867"},{name:"BatterySaver5",glyph:"e868"},{name:"BatterySaver6",glyph:"e869"},{name:"BatterySaver7",glyph:"e86a"},{name:"BatterySaver8",glyph:"e86b"},{name:"SignalBars1",glyph:"e86c"},{name:"SignalBars2",glyph:"e86d"},{name:"SignalBars3",glyph:"e86e"},{name:"SignalBars4",glyph:"e86f"},{name:"SignalBars5",glyph:"e870"},{name:"SignalNotConnected",glyph:"e871"},{name:"Wifi1",glyph:"e872"},{name:"Wifi2",glyph:"e873"},{name:"Wifi3",glyph:"e874"},{name:"MobSIMLock",glyph:"e875"},{name:"MobSIMMissing",glyph:"e876"},{name:"Vibrate",glyph:"e877"},{name:"RoamingInternational",glyph:"e878"},{name:"RoamingDomestic",glyph:"e879"},{name:"CallForwardInternational",glyph:"e87a"},{name:"CallForwardRoaming",glyph:"e87b"},{name:"JpnRomanji",glyph:"e87c"},{name:"JpnRomanjiLock",glyph:"e87d"},{name:"JpnRomanjiShift",glyph:"e87e"},{name:"JpnRomanjiShiftLock",glyph:"e87f"},{name:"StatusDataTransfer",glyph:"e880"},{name:"StatusDataTransferVPN",glyph:"e881"},{name:"StatusDualSIM2",glyph:"e882"},{name:"StatusDualSIM2VPN",glyph:"e883"},{name:"StatusDualSIM1",glyph:"e884"},{name:"StatusDualSIM1VPN",glyph:"e885"},{name:"StatusSGLTE",glyph:"e886"},{name:"StatusSGLTECell",glyph:"e887"},{name:"StatusSGLTEDataVPN",glyph:"e888"},{name:"StatusVPN",glyph:"e889"},{name:"WifiHotspot",glyph:"e88a"},{name:"LanguageKor",glyph:"e88b"},{name:"LanguageCht",glyph:"e88c"},{name:"LanguageChs",glyph:"e88d"},{name:"USB",glyph:"e88e"},{name:"InkingToolFill",glyph:"e88f"},{name:"View",glyph:"e890"},{name:"HighlightFill",glyph:"e891"},{name:"Previous",glyph:"e892"},{name:"Next",glyph:"e893"},{name:"Clear",glyph:"e894"},{name:"Sync",glyph:"e895"},{name:"Download",glyph:"e896"},{name:"Help",glyph:"e897"},{name:"Upload",glyph:"e898"},{name:"Emoji",glyph:"e899"},{name:"TwoPage",glyph:"e89a"},{name:"LeaveChat",glyph:"e89b"},{name:"MailForward",glyph:"e89c"},{name:"RotateCamera",glyph:"e89e"},{name:"ClosePane",glyph:"e89f"},{name:"OpenPane",glyph:"e8a0"},{name:"PreviewLink",glyph:"e8a1"},{name:"AttachCamera",glyph:"e8a2"},{name:"ZoomIn",glyph:"e8a3"},{name:"Bookmarks",glyph:"e8a4"},{name:"Document",glyph:"e8a5"},{name:"ProtectedDocument",glyph:"e8a6"},{name:"OpenInNewWindow",glyph:"e8a7"},{name:"MailFill",glyph:"e8a8"},{name:"ViewAll",glyph:"e8a9"},{name:"VideoChat",glyph:"e8aa"},{name:"Switch",glyph:"e8ab"},{name:"Rename",glyph:"e8ac"},{name:"Go",glyph:"e8ad"},{name:"SurfaceHub",glyph:"e8ae"},{name:"Remote",glyph:"e8af"},{name:"Click",glyph:"e8b0"},{name:"Shuffle",glyph:"e8b1"},{name:"Movies",glyph:"e8b2"},{name:"SelectAll",glyph:"e8b3"},{name:"Orientation",glyph:"e8b4"},{name:"Import",glyph:"e8b5"},{name:"ImportAll",glyph:"e8b6"},{name:"Folder",glyph:"e8b7"},{name:"Webcam",glyph:"e8b8"},{name:"Picture",glyph:"e8b9"},{name:"Caption",glyph:"e8ba"},{name:"ChromeClose",glyph:"e8bb"},{name:"ShowResults",glyph:"e8bc"},{name:"Message",glyph:"e8bd"},{name:"Leaf",glyph:"e8be"},{name:"CalendarDay",glyph:"e8bf"},{name:"CalendarWeek",glyph:"e8c0"},{name:"Characters",glyph:"e8c1"},{name:"MailReplyAll",glyph:"e8c2"},{name:"Read",glyph:"e8c3"},{name:"ShowBcc",glyph:"e8c4"},{name:"HideBcc",glyph:"e8c5"},{name:"Cut",glyph:"e8c6"},{name:"PaymentCard",glyph:"e8c7"},{name:"Copy",glyph:"e8c8"},{name:"Important",glyph:"e8c9"},{name:"MailReply",glyph:"e8ca"},{name:"Sort",glyph:"e8cb"},{name:"MobileTablet",glyph:"e8cc"},{name:"DisconnectDrive",glyph:"e8cd"},{name:"MapDrive",glyph:"e8ce"},{name:"ContactPresence",glyph:"e8cf"},{name:"Priority",glyph:"e8d0"},{name:"GotoToday",glyph:"e8d1"},{name:"Font",glyph:"e8d2"},{name:"FontColor",glyph:"e8d3"},{name:"Contact2",glyph:"e8d4"},{name:"FolderFill",glyph:"e8d5"},{name:"Audio",glyph:"e8d6"},{name:"Permissions",glyph:"e8d7"},{name:"DisableUpdates",glyph:"e8d8"},{name:"Unfavorite",glyph:"e8d9"},{name:"OpenLocal",glyph:"e8da"},{name:"Italic",glyph:"e8db"},{name:"Underline",glyph:"e8dc"},{name:"Bold",glyph:"e8dd"},{name:"MoveToFolder",glyph:"e8de"},{name:"LikeDislike",glyph:"e8df"},{name:"Dislike",glyph:"e8e0"},{name:"Like",glyph:"e8e1"},{name:"AlignRight",glyph:"e8e2"},{name:"AlignCenter",glyph:"e8e3"},{name:"AlignLeft",glyph:"e8e4"},{name:"OpenFile",glyph:"e8e5"},{name:"ClearSelection",glyph:"e8e6"},{name:"FontDecrease",glyph:"e8e7"},{name:"FontIncrease",glyph:"e8e8"},{name:"FontSize",glyph:"e8e9"},{name:"CellPhone",glyph:"e8ea"},{name:"Reshare",glyph:"e8eb"},{name:"Tag",glyph:"e8ec"},{name:"RepeatOne",glyph:"e8ed"},{name:"RepeatAll",glyph:"e8ee"},{name:"Calculator",glyph:"e8ef"},{name:"Directions",glyph:"e8f0"},{name:"Library",glyph:"e8f1"},{name:"ChatBubbles",glyph:"e8f2"},{name:"PostUpdate",glyph:"e8f3"},{name:"NewFolder",glyph:"e8f4"},{name:"CalendarReply",glyph:"e8f5"},{name:"UnsyncFolder",glyph:"e8f6"},{name:"SyncFolder",glyph:"e8f7"},{name:"BlockContact",glyph:"e8f8"},{name:"SwitchApps",glyph:"e8f9"},{name:"AddFriend",glyph:"e8fa"},{name:"Accept",glyph:"e8fb"},{name:"GoToStart",glyph:"e8fc"},{name:"BulletedList",glyph:"e8fd"},{name:"Scan",glyph:"e8fe"},{name:"Preview",glyph:"e8ff"},{name:"Group",glyph:"e902"},{name:"ZeroBars",glyph:"e904"},{name:"OneBar",glyph:"e905"},{name:"TwoBars",glyph:"e906"},{name:"ThreeBars",glyph:"e907"},{name:"FourBars",glyph:"e908"},{name:"World",glyph:"e909"},{name:"Comment",glyph:"e90a"},{name:"MusicInfo",glyph:"e90b"},{name:"DockLeft",glyph:"e90c"},{name:"DockRight",glyph:"e90d"},{name:"DockBottom",glyph:"e90e"},{name:"Repair",glyph:"e90f"},{name:"Accounts",glyph:"e910"},{name:"DullSound",glyph:"e911"},{name:"Manage",glyph:"e912"},{name:"Street",glyph:"e913"},{name:"Printer3D",glyph:"e914"},{name:"RadioBullet",glyph:"e915"},{name:"Stopwatch",glyph:"e916"},{name:"Photo",glyph:"e91b"},{name:"ActionCenter",glyph:"e91c"},{name:"FullCircleMask",glyph:"e91f"},{name:"ChromeMinimize",glyph:"e921"},{name:"ChromeMaximize",glyph:"e922"},{name:"ChromeRestore",glyph:"e923"},{name:"Annotation",glyph:"e924"},{name:"BackSpaceQWERTYSm",glyph:"e925"},{name:"BackSpaceQWERTYMd",glyph:"e926"},{name:"Swipe",glyph:"e927"},{name:"Fingerprint",glyph:"e928"},{name:"Handwriting",glyph:"e929"},{name:"ChromeBackToWindow",glyph:"e92c"},{name:"ChromeFullScreen",glyph:"e92d"},{name:"KeyboardStandard",glyph:"e92e"},{name:"KeyboardDismiss",glyph:"e92f"},{name:"Completed",glyph:"e930"},{name:"ChromeAnnotate",glyph:"e931"},{name:"Label",glyph:"e932"},{name:"IBeam",glyph:"e933"},{name:"IBeamOutline",glyph:"e934"},{name:"FlickDown",glyph:"e935"},{name:"FlickUp",glyph:"e936"},{name:"FlickLeft",glyph:"e937"},{name:"FlickRight",glyph:"e938"},{name:"FeedbackApp",glyph:"e939"},{name:"MusicAlbum",glyph:"e93c"},{name:"Streaming",glyph:"e93e"},{name:"Code",glyph:"e943"},{name:"ReturnToWindow",glyph:"e944"},{name:"LightningBolt",glyph:"e945"},{name:"Info",glyph:"e946"},{name:"CalculatorMultiply",glyph:"e947"},{name:"CalculatorAddition",glyph:"e948"},{name:"CalculatorSubtract",glyph:"e949"},{name:"CalculatorDivide",glyph:"e94a"},{name:"CalculatorSquareroot",glyph:"e94b"},{name:"CalculatorPercentage",glyph:"e94c"},{name:"CalculatorNegate",glyph:"e94d"},{name:"CalculatorEqualTo",glyph:"e94e"},{name:"CalculatorBackspace",glyph:"e94f"},{name:"Component",glyph:"e950"},{name:"DMC",glyph:"e951"},{name:"Dock",glyph:"e952"},{name:"MultimediaDMS",glyph:"e953"},{name:"MultimediaDVR",glyph:"e954"},{name:"MultimediaPMP",glyph:"e955"},{name:"PrintfaxPrinterFile",glyph:"e956"},{name:"Sensor",glyph:"e957"},{name:"StorageOptical",glyph:"e958"},{name:"Communications",glyph:"e95a"},{name:"Headset",glyph:"e95b"},{name:"Projector",glyph:"e95d"},{name:"Health",glyph:"e95e"},{name:"Wire",glyph:"e95f"},{name:"Webcam2",glyph:"e960"},{name:"Input",glyph:"e961"},{name:"Mouse",glyph:"e962"},{name:"Smartcard",glyph:"e963"},{name:"SmartcardVirtual",glyph:"e964"},{name:"MediaStorageTower",glyph:"e965"},{name:"ReturnKeySm",glyph:"e966"},{name:"GameConsole",glyph:"e967"},{name:"Network",glyph:"e968"},{name:"StorageNetworkWireless",glyph:"e969"},{name:"StorageTape",glyph:"e96a"},{name:"ChevronUpSmall",glyph:"e96d"},{name:"ChevronDownSmall",glyph:"e96e"},{name:"ChevronLeftSmall",glyph:"e96f"},{name:"ChevronRightSmall",glyph:"e970"},{name:"ChevronUpMed",glyph:"e971"},{name:"ChevronDownMed",glyph:"e972"},{name:"ChevronLeftMed",glyph:"e973"},{name:"ChevronRightMed",glyph:"e974"},{name:"Devices2",glyph:"e975"},{name:"ExpandTile",glyph:"e976"},{name:"PC1",glyph:"e977"},{name:"PresenceChicklet",glyph:"e978"},{name:"PresenceChickletVideo",glyph:"e979"},{name:"Reply",glyph:"e97a"},{name:"SetTile",glyph:"e97b"},{name:"Type",glyph:"e97c"},{name:"Korean",glyph:"e97d"},{name:"HalfAlpha",glyph:"e97e"},{name:"FullAlpha",glyph:"e97f"},{name:"Key12On",glyph:"e980"},{name:"ChineseChangjie",glyph:"e981"},{name:"QWERTYOn",glyph:"e982"},{name:"QWERTYOff",glyph:"e983"},{name:"ChineseQuick",glyph:"e984"},{name:"Japanese",glyph:"e985"},{name:"FullHiragana",glyph:"e986"},{name:"FullKatakana",glyph:"e987"},{name:"HalfKatakana",glyph:"e988"},{name:"ChineseBoPoMoFo",glyph:"e989"},{name:"ChinesePinyin",glyph:"e98a"},{name:"ConstructionCone",glyph:"e98f"},{name:"XboxOneConsole",glyph:"e990"},{name:"Volume0",glyph:"e992"},{name:"Volume1",glyph:"e993"},{name:"Volume2",glyph:"e994"},{name:"Volume3",glyph:"e995"},{name:"BatteryUnknown",glyph:"e996"},{name:"WifiAttentionOverlay",glyph:"e998"},{name:"Robot",glyph:"e99a"},{name:"TapAndSend",glyph:"e9a1"},{name:"FitPage",glyph:"e9a6"},{name:"PasswordKeyShow",glyph:"e9a8"},{name:"PasswordKeyHide",glyph:"e9a9"},{name:"BidiLtr",glyph:"e9aa"},{name:"BidiRtl",glyph:"e9ab"},{name:"ForwardSm",glyph:"e9ac"},{name:"CommaKey",glyph:"e9ad"},{name:"DashKey",glyph:"e9ae"},{name:"DullSoundKey",glyph:"e9af"},{name:"HalfDullSound",glyph:"e9b0"},{name:"RightDoubleQuote",glyph:"e9b1"},{name:"LeftDoubleQuote",glyph:"e9b2"},{name:"PuncKeyRightBottom",glyph:"e9b3"},{name:"PuncKey1",glyph:"e9b4"},{name:"PuncKey2",glyph:"e9b5"},{name:"PuncKey3",glyph:"e9b6"},{name:"PuncKey4",glyph:"e9b7"},{name:"PuncKey5",glyph:"e9b8"},{name:"PuncKey6",glyph:"e9b9"},{name:"PuncKey9",glyph:"e9ba"},{name:"PuncKey7",glyph:"e9bb"},{name:"PuncKey8",glyph:"e9bc"},{name:"Frigid",glyph:"e9ca"},{name:"Unknown",glyph:"e9ce"},{name:"AreaChart",glyph:"e9d2"},{name:"CheckList",glyph:"e9d5"},{name:"Diagnostic",glyph:"e9d9"},{name:"Equalizer",glyph:"e9e9"},{name:"Process",glyph:"e9f3"},{name:"Processing",glyph:"e9f5"},{name:"ReportDocument",glyph:"e9f9"},{name:"Description",glyph:"Unicode point"},{name:"VideoSolid",glyph:"ea0c"},{name:"MixedMediaBadge",glyph:"ea0d"},{name:"DisconnectDisplay",glyph:"ea14"},{name:"Shield",glyph:"ea18"},{name:"Info2",glyph:"ea1f"},{name:"ActionCenterAsterisk",glyph:"ea21"},{name:"Beta",glyph:"ea24"},{name:"SaveCopy",glyph:"ea35"},{name:"List",glyph:"ea37"},{name:"Asterisk",glyph:"ea38"},{name:"ErrorBadge",glyph:"ea39"},{name:"CircleRing",glyph:"ea3a"},{name:"CircleFill",glyph:"ea3b"},{name:"MergeCall",glyph:"ea3c"},{name:"PrivateCall",glyph:"ea3d"},{name:"Record2",glyph:"ea3f"},{name:"AllAppsMirrored",glyph:"ea40"},{name:"BookmarksMirrored",glyph:"ea41"},{name:"BulletedListMirrored",glyph:"ea42"},{name:"CallForwardInternationalMirrored",glyph:"ea43"},{name:"CallForwardRoamingMirrored",glyph:"ea44"},{name:"ChromeBackMirrored",glyph:"ea47"},{name:"ClearSelectionMirrored",glyph:"ea48"},{name:"ClosePaneMirrored",glyph:"ea49"},{name:"ContactInfoMirrored",glyph:"ea4a"},{name:"DockRightMirrored",glyph:"ea4b"},{name:"DockLeftMirrored",glyph:"ea4c"},{name:"ExpandTileMirrored",glyph:"ea4e"},{name:"GoMirrored",glyph:"ea4f"},{name:"GripperResizeMirrored",glyph:"ea50"},{name:"HelpMirrored",glyph:"ea51"},{name:"ImportMirrored",glyph:"ea52"},{name:"ImportAllMirrored",glyph:"ea53"},{name:"LeaveChatMirrored",glyph:"ea54"},{name:"ListMirrored",glyph:"ea55"},{name:"MailForwardMirrored",glyph:"ea56"},{name:"MailReplyMirrored",glyph:"ea57"},{name:"MailReplyAllMirrored",glyph:"ea58"},{name:"OpenPaneMirrored",glyph:"ea5b"},{name:"OpenWithMirrored",glyph:"ea5c"},{name:"ParkingLocationMirrored",glyph:"ea5e"},{name:"ResizeMouseMediumMirrored",glyph:"ea5f"},{name:"ResizeMouseSmallMirrored",glyph:"ea60"},{name:"ResizeMouseTallMirrored",glyph:"ea61"},{name:"ResizeTouchNarrowerMirrored",glyph:"ea62"},{name:"SendMirrored",glyph:"ea63"},{name:"SendFillMirrored",glyph:"ea64"},{name:"ShowResultsMirrored",glyph:"ea65"},{name:"Media",glyph:"ea69"},{name:"SyncError",glyph:"ea6a"},{name:"Devices3",glyph:"ea6c"},{name:"SlowMotionOn",glyph:"ea79"},{name:"Lightbulb",glyph:"ea80"},{name:"StatusCircle",glyph:"ea81"},{name:"StatusTriangle",glyph:"ea82"},{name:"StatusError",glyph:"ea83"},{name:"StatusWarning",glyph:"ea84"},{name:"Puzzle",glyph:"ea86"},{name:"CalendarSolid",glyph:"ea89"},{name:"HomeSolid",glyph:"ea8a"},{name:"ParkingLocationSolid",glyph:"ea8b"},{name:"ContactSolid",glyph:"ea8c"},{name:"ConstructionSolid",glyph:"ea8d"},{name:"AccidentSolid",glyph:"ea8e"},{name:"Ringer",glyph:"ea8f"},{name:"PDF",glyph:"ea90"},{name:"ThoughtBubble",glyph:"ea91"},{name:"HeartBroken",glyph:"ea92"},{name:"BatteryCharging10",glyph:"ea93"},{name:"BatterySaver9",glyph:"ea94"},{name:"BatterySaver10",glyph:"ea95"},{name:"CallForwardingMirrored",glyph:"ea97"},{name:"MultiSelectMirrored",glyph:"ea98"},{name:"Broom",glyph:"ea99"},{name:"ForwardCall",glyph:"eac2"},{name:"Trackers",glyph:"eadf"},{name:"Market",glyph:"eafc"},{name:"PieSingle",glyph:"eb05"},{name:"StockUp",glyph:"eb0f"},{name:"StockDown",glyph:"eb11"},{name:"Design",glyph:"eb3c"},{name:"Website",glyph:"eb41"},{name:"Drop",glyph:"eb42"},{name:"Radar",glyph:"eb44"},{name:"BusSolid",glyph:"eb47"},{name:"FerrySolid",glyph:"eb48"},{name:"StartPointSolid",glyph:"eb49"},{name:"StopPointSolid",glyph:"eb4a"},{name:"EndPointSolid",glyph:"eb4b"},{name:"AirplaneSolid",glyph:"eb4c"},{name:"TrainSolid",glyph:"eb4d"},{name:"WorkSolid",glyph:"eb4e"},{name:"ReminderFill",glyph:"eb4f"},{name:"Reminder",glyph:"eb50"},{name:"Heart",glyph:"eb51"},{name:"HeartFill",glyph:"eb52"},{name:"EthernetError",glyph:"eb55"},{name:"EthernetWarning",glyph:"eb56"},{name:"StatusConnecting1",glyph:"eb57"},{name:"StatusConnecting2",glyph:"eb58"},{name:"StatusUnsecure",glyph:"eb59"},{name:"WifiError0",glyph:"eb5a"},{name:"WifiError1",glyph:"eb5b"},{name:"WifiError2",glyph:"eb5c"},{name:"WifiError3",glyph:"eb5d"},{name:"WifiError4",glyph:"eb5e"},{name:"WifiWarning0",glyph:"eb5f"},{name:"WifiWarning1",glyph:"eb60"},{name:"WifiWarning2",glyph:"eb61"},{name:"WifiWarning3",glyph:"eb62"},{name:"WifiWarning4",glyph:"eb63"},{name:"Devices4",glyph:"eb66"},{name:"NUIIris",glyph:"eb67"},{name:"NUIFace",glyph:"eb68"},{name:"GatewayRouter",glyph:"eb77"},{name:"EditMirrored",glyph:"eb7e"},{name:"NUIFPStartSlideHand",glyph:"eb82"},{name:"NUIFPStartSlideAction",glyph:"eb83"},{name:"NUIFPContinueSlideHand",glyph:"eb84"},{name:"NUIFPContinueSlideAction",glyph:"eb85"},{name:"NUIFPRollRightHand",glyph:"eb86"},{name:"NUIFPRollRightHandAction",glyph:"eb87"},{name:"NUIFPRollLeftHand",glyph:"eb88"},{name:"NUIFPRollLeftAction",glyph:"eb89"},{name:"NUIFPPressHand",glyph:"eb8a"},{name:"NUIFPPressAction",glyph:"eb8b"},{name:"NUIFPPressRepeatHand",glyph:"eb8c"},{name:"NUIFPPressRepeatAction",glyph:"eb8d"},{name:"StatusErrorFull",glyph:"eb90"},{name:"TaskViewExpanded",glyph:"eb91"},{name:"Certificate",glyph:"eb95"},{name:"BackSpaceQWERTYLg",glyph:"eb96"},{name:"ReturnKeyLg",glyph:"eb97"},{name:"FastForward",glyph:"eb9d"},{name:"Rewind",glyph:"eb9e"},{name:"Photo2",glyph:"eb9f"},{name:"MobBattery0",glyph:"eba0"},{name:"MobBattery1",glyph:"eba1"},{name:"MobBattery2",glyph:"eba2"},{name:"MobBattery3",glyph:"eba3"},{name:"MobBattery4",glyph:"eba4"},{name:"MobBattery5",glyph:"eba5"},{name:"MobBattery6",glyph:"eba6"},{name:"MobBattery7",glyph:"eba7"},{name:"MobBattery8",glyph:"eba8"},{name:"MobBattery9",glyph:"eba9"},{name:"MobBattery10",glyph:"ebaa"},{name:"MobBatteryCharging0",glyph:"ebab"},{name:"MobBatteryCharging1",glyph:"ebac"},{name:"MobBatteryCharging2",glyph:"ebad"},{name:"MobBatteryCharging3",glyph:"ebae"},{name:"MobBatteryCharging4",glyph:"ebaf"},{name:"MobBatteryCharging5",glyph:"ebb0"},{name:"MobBatteryCharging6",glyph:"ebb1"},{name:"MobBatteryCharging7",glyph:"ebb2"},{name:"MobBatteryCharging8",glyph:"ebb3"},{name:"MobBatteryCharging9",glyph:"ebb4"},{name:"MobBatteryCharging10",glyph:"ebb5"},{name:"MobBatterySaver0",glyph:"ebb6"},{name:"MobBatterySaver1",glyph:"ebb7"},{name:"MobBatterySaver2",glyph:"ebb8"},{name:"MobBatterySaver3",glyph:"ebb9"},{name:"MobBatterySaver4",glyph:"ebba"},{name:"MobBatterySaver5",glyph:"ebbb"},{name:"MobBatterySaver6",glyph:"ebbc"},{name:"MobBatterySaver7",glyph:"ebbd"},{name:"MobBatterySaver8",glyph:"ebbe"},{name:"MobBatterySaver9",glyph:"ebbf"},{name:"MobBatterySaver10",glyph:"ebc0"},{name:"DictionaryCloud",glyph:"ebc3"},{name:"ResetDrive",glyph:"ebc4"},{name:"VolumeBars",glyph:"ebc5"},{name:"Project",glyph:"ebc6"},{name:"AdjustHologram",glyph:"ebd2"},{name:"CloudDownload",glyph:"ebd3"},{name:"MobWifiCallBars",glyph:"ebd4"},{name:"MobWifiCall0",glyph:"ebd5"},{name:"MobWifiCall1",glyph:"ebd6"},{name:"MobWifiCall2",glyph:"ebd7"},{name:"MobWifiCall3",glyph:"ebd8"},{name:"MobWifiCall4",glyph:"ebd9"},{name:"Family",glyph:"ebda"},{name:"LockFeedback",glyph:"ebdb"},{name:"DeviceDiscovery",glyph:"ebde"},{name:"WindDirection",glyph:"ebe6"},{name:"RightArrowKeyTime0",glyph:"ebe7"},{name:"Bug",glyph:"ebe8"},{name:"TabletMode",glyph:"ebfc"},{name:"StatusCircleLeft",glyph:"ebfd"},{name:"StatusTriangleLeft",glyph:"ebfe"},{name:"StatusErrorLeft",glyph:"ebff"},{name:"StatusWarningLeft",glyph:"ec00"},{name:"MobBatteryUnknown",glyph:"ec02"},{name:"NetworkTower",glyph:"ec05"},{name:"CityNext",glyph:"ec06"},{name:"CityNext2",glyph:"ec07"},{name:"Courthouse",glyph:"ec08"},{name:"Groceries",glyph:"ec09"},{name:"Sustainable",glyph:"ec0a"},{name:"BuildingEnergy",glyph:"ec0b"},{name:"ToggleFilled",glyph:"ec11"},{name:"ToggleBorder",glyph:"ec12"},{name:"SliderThumb",glyph:"ec13"},{name:"ToggleThumb",glyph:"ec14"},{name:"MiracastLogoSmall",glyph:"ec15"},{name:"MiracastLogoLarge",glyph:"ec16"},{name:"PLAP",glyph:"ec19"},{name:"Badge",glyph:"ec1b"},{name:"SignalRoaming",glyph:"ec1e"},{name:"MobileLocked",glyph:"ec20"},{name:"InsiderHubApp",glyph:"ec24"},{name:"PersonalFolder",glyph:"ec25"},{name:"HomeGroup",glyph:"ec26"},{name:"MyNetwork",glyph:"ec27"},{name:"KeyboardFull",glyph:"ec31"},{name:"Cafe",glyph:"ec32"},{name:"MobSignal1",glyph:"ec37"},{name:"MobSignal2",glyph:"ec38"},{name:"MobSignal3",glyph:"ec39"},{name:"MobSignal4",glyph:"ec3a"},{name:"MobSignal5",glyph:"ec3b"},{name:"MobWifi1",glyph:"ec3c"},{name:"MobWifi2",glyph:"ec3d"},{name:"MobWifi3",glyph:"ec3e"},{name:"MobWifi4",glyph:"ec3f"},{name:"MobAirplane",glyph:"ec40"},{name:"MobBluetooth",glyph:"ec41"},{name:"MobActionCenter",glyph:"ec42"},{name:"MobLocation",glyph:"ec43"},{name:"MobWifiHotspot",glyph:"ec44"},{name:"LanguageJpn",glyph:"ec45"},{name:"MobQuietHours",glyph:"ec46"},{name:"MobDrivingMode",glyph:"ec47"},{name:"SpeedOff",glyph:"ec48"},{name:"SpeedMedium",glyph:"ec49"},{name:"SpeedHigh",glyph:"ec4a"},{name:"ThisPC",glyph:"ec4e"},{name:"MusicNote",glyph:"ec4f"},{name:"FileExplorer",glyph:"ec50"},{name:"FileExplorerApp",glyph:"ec51"},{name:"LeftArrowKeyTime0",glyph:"ec52"},{name:"MicOff",glyph:"ec54"},{name:"MicSleep",glyph:"ec55"},{name:"MicError",glyph:"ec56"},{name:"PlaybackRate1x",glyph:"ec57"},{name:"PlaybackRateOther",glyph:"ec58"},{name:"CashDrawer",glyph:"ec59"},{name:"BarcodeScanner",glyph:"ec5a"},{name:"ReceiptPrinter",glyph:"ec5b"},{name:"MagStripeReader",glyph:"ec5c"},{name:"CompletedSolid",glyph:"ec61"},{name:"CompanionApp",glyph:"ec64"},{name:"Favicon2",glyph:"ec6c"},{name:"SwipeRevealArt",glyph:"ec6d"},{name:"MicOn",glyph:"ec71"},{name:"MicClipping",glyph:"ec72"},{name:"TabletSelected",glyph:"ec74"},{name:"MobileSelected",glyph:"ec75"},{name:"LaptopSelected",glyph:"ec76"},{name:"TVMonitorSelected",glyph:"ec77"},{name:"DeveloperTools",glyph:"ec7a"},{name:"MobCallForwarding",glyph:"ec7e"},{name:"MobCallForwardingMirrored",glyph:"ec7f"},{name:"BodyCam",glyph:"ec80"},{name:"PoliceCar",glyph:"ec81"},{name:"Draw",glyph:"ec87"},{name:"DrawSolid",glyph:"ec88"},{name:"LowerBrightness",glyph:"ec8a"},{name:"ScrollUpDown",glyph:"ec8f"},{name:"DateTime",glyph:"ec92"},{name:"HoloLens",glyph:"ec94"},{name:"Tiles",glyph:"eca5"},{name:"PartyLeader",glyph:"eca7"},{name:"AppIconDefault",glyph:"ecaa"},{name:"Calories",glyph:"ecad"},{name:"POI",glyph:"ecaf"},{name:"BandBattery0",glyph:"ecb9"},{name:"BandBattery1",glyph:"ecba"},{name:"BandBattery2",glyph:"ecbb"},{name:"BandBattery3",glyph:"ecbc"},{name:"BandBattery4",glyph:"ecbd"},{name:"BandBattery5",glyph:"ecbe"},{name:"BandBattery6",glyph:"ecbf"},{name:"AddSurfaceHub",glyph:"ecc4"},{name:"DevUpdate",glyph:"ecc5"},{name:"Unit",glyph:"ecc6"},{name:"AddTo",glyph:"ecc8"},{name:"RemoveFrom",glyph:"ecc9"},{name:"RadioBtnOff",glyph:"ecca"},{name:"RadioBtnOn",glyph:"eccb"},{name:"RadioBullet2",glyph:"eccc"},{name:"ExploreContent",glyph:"eccd"},{name:"Blocked2",glyph:"ece4"},{name:"ScrollMode",glyph:"ece7"},{name:"ZoomMode",glyph:"ece8"},{name:"PanMode",glyph:"ece9"},{name:"WiredUSB",glyph:"ecf0"},{name:"WirelessUSB",glyph:"ecf1"},{name:"USBSafeConnect",glyph:"ecf3"},{name:"ActionCenterNotificationMirrored",glyph:"ed0c"},{name:"ActionCenterMirrored",glyph:"ed0d"},{name:"SubscriptionAdd",glyph:"ed0e"},{name:"ResetDevice",glyph:"ed10"},{name:"SubscriptionAddMirrored",glyph:"ed11"},{name:"QRCode",glyph:"ed14"},{name:"Feedback",glyph:"ed15"},{name:"Hide",glyph:"ed1a"},{name:"Subtitles",glyph:"ed1e"},{name:"SubtitlesAudio",glyph:"ed1f"},{name:"OpenFolderHorizontal",glyph:"ed25"},{name:"CalendarMirrored",glyph:"ed28"},{name:"MobeSIM",glyph:"ed2a"},{name:"MobeSIMNoProfile",glyph:"ed2b"},{name:"MobeSIMLocked",glyph:"ed2c"},{name:"MobeSIMBusy",glyph:"ed2d"},{name:"SignalError",glyph:"ed2e"},{name:"StreamingEnterprise",glyph:"ed2f"},{name:"Headphone0",glyph:"ed30"},{name:"Headphone1",glyph:"ed31"},{name:"Headphone2",glyph:"ed32"},{name:"Headphone3",glyph:"ed33"},{name:"Apps",glyph:"ed35"},{name:"KeyboardBrightness",glyph:"ed39"},{name:"KeyboardLowerBrightness",glyph:"ed3a"},{name:"SkipBack10",glyph:"ed3c"},{name:"SkipForward30",glyph:"ed3d"},{name:"TreeFolderFolder",glyph:"ed41"},{name:"TreeFolderFolderFill",glyph:"ed42"},{name:"TreeFolderFolderOpen",glyph:"ed43"},{name:"TreeFolderFolderOpenFill",glyph:"ed44"},{name:"MultimediaDMP",glyph:"ed47"},{name:"KeyboardOneHanded",glyph:"ed4c"},{name:"Narrator",glyph:"ed4d"},{name:"EmojiTabPeople",glyph:"ed53"},{name:"EmojiTabSmilesAnimals",glyph:"ed54"},{name:"EmojiTabCelebrationObjects",glyph:"ed55"},{name:"EmojiTabFoodPlants",glyph:"ed56"},{name:"EmojiTabTransitPlaces",glyph:"ed57"},{name:"EmojiTabSymbols",glyph:"ed58"},{name:"EmojiTabTextSmiles",glyph:"ed59"},{name:"EmojiTabFavorites",glyph:"ed5a"},{name:"EmojiSwatch",glyph:"ed5b"},{name:"ConnectApp",glyph:"ed5c"},{name:"CompanionDeviceFramework",glyph:"ed5d"},{name:"Ruler",glyph:"ed5e"},{name:"FingerInking",glyph:"ed5f"},{name:"StrokeErase",glyph:"ed60"},{name:"PointErase",glyph:"ed61"},{name:"ClearAllInk",glyph:"ed62"},{name:"Pencil",glyph:"ed63"},{name:"Marker",glyph:"ed64"},{name:"InkingCaret",glyph:"ed65"},{name:"InkingColorOutline",glyph:"ed66"},{name:"InkingColorFill",glyph:"ed67"},{name:"HardDrive",glyph:"eda2"},{name:"NetworkAdapter",glyph:"eda3"},{name:"Touchscreen",glyph:"eda4"},{name:"NetworkPrinter",glyph:"eda5"},{name:"CloudPrinter",glyph:"eda6"},{name:"KeyboardShortcut",glyph:"eda7"},{name:"BrushSize",glyph:"eda8"},{name:"NarratorForward",glyph:"eda9"},{name:"NarratorForwardMirrored",glyph:"edaa"},{name:"SyncBadge12",glyph:"edab"},{name:"RingerBadge12",glyph:"edac"},{name:"AsteriskBadge12",glyph:"edad"},{name:"ErrorBadge12",glyph:"edae"},{name:"CircleRingBadge12",glyph:"edaf"},{name:"CircleFillBadge12",glyph:"edb0"},{name:"ImportantBadge12",glyph:"edb1"},{name:"MailBadge12",glyph:"edb3"},{name:"PauseBadge12",glyph:"edb4"},{name:"PlayBadge12",glyph:"edb5"},{name:"PenWorkspace",glyph:"edc6"},{name:"CaretLeft8",glyph:"edd5"},{name:"CaretRight8",glyph:"edd6"},{name:"CaretUp8",glyph:"edd7"},{name:"CaretDown8",glyph:"edd8"},{name:"CaretLeftSolid8",glyph:"edd9"},{name:"CaretRightSolid8",glyph:"edda"},{name:"CaretUpSolid8",glyph:"eddb"},{name:"CaretDownSolid8",glyph:"eddc"},{name:"Strikethrough",glyph:"ede0"},{name:"Export",glyph:"ede1"},{name:"ExportMirrored",glyph:"ede2"},{name:"ButtonMenu",glyph:"ede3"},{name:"CloudSearch",glyph:"ede4"},{name:"PinyinIMELogo",glyph:"ede5"},{name:"CalligraphyPen",glyph:"edfb"},{name:"ReplyMirrored",glyph:"ee35"},{name:"LockscreenDesktop",glyph:"ee3f"},{name:"TaskViewSettings",glyph:"ee40"},{name:"MiniExpand2Mirrored",glyph:"ee47"},{name:"MiniContract2Mirrored",glyph:"ee49"},{name:"Play36",glyph:"ee4a"},{name:"PenPalette",glyph:"ee56"},{name:"GuestUser",glyph:"ee57"},{name:"SettingsBattery",glyph:"ee63"},{name:"TaskbarPhone",glyph:"ee64"},{name:"LockScreenGlance",glyph:"ee65"},{name:"GenericScan",glyph:"ee6f"},{name:"ImageExport",glyph:"ee71"},{name:"WifiEthernet",glyph:"ee77"},{name:"ActionCenterQuiet",glyph:"ee79"},{name:"ActionCenterQuietNotification",glyph:"ee7a"},{name:"TrackersMirrored",glyph:"ee92"},{name:"DateTimeMirrored",glyph:"ee93"},{name:"Wheel",glyph:"ee94"},{name:"VirtualMachineGroup",glyph:"eea3"},{name:"ButtonView2",glyph:"eeca"},{name:"PenWorkspaceMirrored",glyph:"ef15"},{name:"PenPaletteMirrored",glyph:"ef16"},{name:"StrokeEraseMirrored",glyph:"ef17"},{name:"PointEraseMirrored",glyph:"ef18"},{name:"ClearAllInkMirrored",glyph:"ef19"},{name:"BackgroundToggle",glyph:"ef1f"},{name:"Marquee",glyph:"ef20"},{name:"ChromeCloseContrast",glyph:"ef2c"},{name:"ChromeMinimizeContrast",glyph:"ef2d"},{name:"ChromeMaximizeContrast",glyph:"ef2e"},{name:"ChromeRestoreContrast",glyph:"ef2f"},{name:"TrafficLight",glyph:"ef31"},{name:"Replay",glyph:"ef3b"},{name:"Eyedropper",glyph:"ef3c"},{name:"LineDisplay",glyph:"ef3d"},{name:"PINPad",glyph:"ef3e"},{name:"SignatureCapture",glyph:"ef3f"},{name:"ChipCardCreditCardReader",glyph:"ef40"},{name:"MarketDown",glyph:"ef42"},{name:"PlayerSettings",glyph:"ef58"},{name:"LandscapeOrientation",glyph:"ef6b"},{name:"Flow",glyph:"ef90"},{name:"Touchpad",glyph:"efa5"},{name:"Speech",glyph:"efa9"},{name:"KnowledgeArticle",glyph:"f000"},{name:"Relationship",glyph:"f003"},{name:"ZipFolder",glyph:"f012"},{name:"DefaultAPN",glyph:"f080"},{name:"UserAPN",glyph:"f081"},{name:"DoublePinyin",glyph:"f085"},{name:"BlueLight",glyph:"f08c"},{name:"CaretSolidLeft",glyph:"f08d"},{name:"CaretSolidDown",glyph:"f08e"},{name:"CaretSolidRight",glyph:"f08f"},{name:"CaretSolidUp",glyph:"f090"},{name:"ButtonA",glyph:"f093"},{name:"ButtonB",glyph:"f094"},{name:"ButtonY",glyph:"f095"},{name:"ButtonX",glyph:"f096"},{name:"ArrowUp8",glyph:"f0ad"},{name:"ArrowDown8",glyph:"f0ae"},{name:"ArrowRight8",glyph:"f0af"},{name:"ArrowLeft8",glyph:"f0b0"},{name:"QuarentinedItems",glyph:"f0b2"},{name:"QuarentinedItemsMirrored",glyph:"f0b3"},{name:"Protractor",glyph:"f0b4"},{name:"ChecklistMirrored",glyph:"f0b5"},{name:"StatusCircle7",glyph:"f0b6"},{name:"StatusCheckmark7",glyph:"f0b7"},{name:"StatusErrorCircle7",glyph:"f0b8"},{name:"Connected",glyph:"f0b9"},{name:"PencilFill",glyph:"f0c6"},{name:"CalligraphyFill",glyph:"f0c7"},{name:"QuarterStarLeft",glyph:"f0ca"},{name:"QuarterStarRight",glyph:"f0cb"},{name:"ThreeQuarterStarLeft",glyph:"f0cc"},{name:"ThreeQuarterStarRight",glyph:"f0cd"},{name:"QuietHoursBadge12",glyph:"f0ce"},{name:"BackMirrored",glyph:"f0d2"},{name:"ForwardMirrored",glyph:"f0d3"},{name:"ChromeBackContrast",glyph:"f0d5"},{name:"ChromeBackContrastMirrored",glyph:"f0d6"},{name:"ChromeBackToWindowContrast",glyph:"f0d7"},{name:"ChromeFullScreenContrast",glyph:"f0d8"},{name:"GridView",glyph:"f0e2"},{name:"ClipboardList",glyph:"f0e3"},{name:"ClipboardListMirrored",glyph:"f0e4"},{name:"OutlineQuarterStarLeft",glyph:"f0e5"},{name:"OutlineQuarterStarRight",glyph:"f0e6"},{name:"OutlineHalfStarLeft",glyph:"f0e7"},{name:"OutlineHalfStarRight",glyph:"f0e8"},{name:"OutlineThreeQuarterStarLeft",glyph:"f0e9"},{name:"OutlineThreeQuarterStarRight",glyph:"f0ea"},{name:"SpatialVolume0",glyph:"f0eb"},{name:"SpatialVolume1",glyph:"f0ec"},{name:"SpatialVolume2",glyph:"f0ed"},{name:"SpatialVolume3",glyph:"f0ee"},{name:"ApplicationGuard",glyph:"f0ef"},{name:"OutlineStarLeftHalf",glyph:"f0f7"},{name:"OutlineStarRightHalf",glyph:"f0f8"},{name:"ChromeAnnotateContrast",glyph:"f0f9"},{name:"DefenderBadge12",glyph:"f0fb"},{name:"DetachablePC",glyph:"f103"},{name:"LeftStick",glyph:"f108"},{name:"RightStick",glyph:"f109"},{name:"TriggerLeft",glyph:"f10a"},{name:"TriggerRight",glyph:"f10b"},{name:"BumperLeft",glyph:"f10c"},{name:"BumperRight",glyph:"f10d"},{name:"Dpad",glyph:"f10e"},{name:"EnglishPunctuation",glyph:"f110"},{name:"ChinesePunctuation",glyph:"f111"},{name:"HMD",glyph:"f119"},{name:"CtrlSpatialRight",glyph:"f11b"},{name:"PaginationDotOutline10",glyph:"f126"},{name:"PaginationDotSolid10",glyph:"f127"},{name:"StrokeErase2",glyph:"f128"},{name:"SmallErase",glyph:"f129"},{name:"LargeErase",glyph:"f12a"},{name:"FolderHorizontal",glyph:"f12b"},{name:"MicrophoneListening",glyph:"f12e"},{name:"StatusExclamationCircle7",glyph:"f12f"},{name:"Video360",glyph:"f131"},{name:"GiftboxOpen",glyph:"f133"},{name:"StatusCircleOuter",glyph:"f136"},{name:"StatusCircleInner",glyph:"f137"},{name:"StatusCircleRing",glyph:"f138"},{name:"StatusTriangleOuter",glyph:"f139"},{name:"StatusTriangleInner",glyph:"f13a"},{name:"StatusTriangleExclamation",glyph:"f13b"},{name:"StatusCircleExclamation",glyph:"f13c"},{name:"StatusCircleErrorX",glyph:"f13d"},{name:"StatusCircleCheckmark",glyph:"f13e"},{name:"StatusCircleInfo",glyph:"f13f"},{name:"StatusCircleBlock",glyph:"f140"},{name:"StatusCircleBlock2",glyph:"f141"},{name:"StatusCircleQuestionMark",glyph:"f142"},{name:"StatusCircleSync",glyph:"f143"},{name:"Dial1",glyph:"f146"},{name:"Dial2",glyph:"f147"},{name:"Dial3",glyph:"f148"},{name:"Dial4",glyph:"f149"},{name:"Dial5",glyph:"f14a"},{name:"Dial6",glyph:"f14b"},{name:"Dial7",glyph:"f14c"},{name:"Dial8",glyph:"f14d"},{name:"Dial9",glyph:"f14e"},{name:"Dial10",glyph:"f14f"},{name:"Dial11",glyph:"f150"},{name:"Dial12",glyph:"f151"},{name:"Dial13",glyph:"f152"},{name:"Dial14",glyph:"f153"},{name:"Dial15",glyph:"f154"},{name:"Dial16",glyph:"f155"},{name:"DialShape1",glyph:"f156"},{name:"DialShape2",glyph:"f157"},{name:"DialShape3",glyph:"f158"},{name:"DialShape4",glyph:"f159"},{name:"ClosedCaptionsInternational",glyph:"f15f"},{name:"TollSolid",glyph:"f161"},{name:"TrafficCongestionSolid",glyph:"f163"},{name:"ExploreContentSingle",glyph:"f164"},{name:"CollapseContent",glyph:"f165"},{name:"CollapseContentSingle",glyph:"f166"},{name:"InfoSolid",glyph:"f167"},{name:"GroupList",glyph:"f168"},{name:"CaretBottomRightSolidCenter8",glyph:"f169"},{name:"ProgressRingDots",glyph:"f16a"},{name:"Checkbox14",glyph:"f16b"},{name:"CheckboxComposite14",glyph:"f16c"},{name:"CheckboxIndeterminateCombo14",glyph:"f16d"},{name:"CheckboxIndeterminateCombo",glyph:"f16e"},{name:"StatusPause7",glyph:"f175"},{name:"CharacterAppearance",glyph:"f17f"},{name:"Lexicon",glyph:"f180"},{name:"ScreenTime",glyph:"f182"},{name:"HeadlessDevice",glyph:"f191"},{name:"NetworkSharing",glyph:"f193"},{name:"EyeGaze",glyph:"f19d"},{name:"ToggleLeft",glyph:"f19e"},{name:"ToggleRight",glyph:"f19f"},{name:"WindowsInsider",glyph:"f1ad"},{name:"ChromeSwitch",glyph:"f1cb"},{name:"ChromeSwitchContast",glyph:"f1cc"},{name:"StatusCheckmark",glyph:"f1d8"},{name:"StatusCheckmarkLeft",glyph:"f1d9"},{name:"KeyboardLeftAligned",glyph:"f20c"},{name:"KeyboardRightAligned",glyph:"f20d"},{name:"KeyboardSettings",glyph:"f210"},{name:"NetworkPhysical",glyph:"f211"},{name:"IOT",glyph:"f22c"},{name:"UnknownMirrored",glyph:"f22e"},{name:"ViewDashboard",glyph:"f246"},{name:"ExploitProtectionSettings",glyph:"f259"},{name:"KeyboardNarrow",glyph:"f260"},{name:"Keyboard12Key",glyph:"f261"},{name:"KeyboardDock",glyph:"f26b"},{name:"KeyboardUndock",glyph:"f26c"},{name:"KeyboardLeftDock",glyph:"f26d"},{name:"KeyboardRightDock",glyph:"f26e"},{name:"Ear",glyph:"f270"},{name:"PointerHand",glyph:"f271"},{name:"Bullseye",glyph:"f272"},{name:"DocumentApproval",glyph:"f28b"},{name:"LocaleLanguage",glyph:"f2b7"},{name:"PassiveAuthentication",glyph:"f32a"},{name:"ColorSolid",glyph:"f354"},{name:"NetworkOffline",glyph:"f384"},{name:"NetworkConnected",glyph:"f385"},{name:"NetworkConnectedCheckmark",glyph:"f386"},{name:"SignOut",glyph:"f3b1"},{name:"StatusInfo",glyph:"f3cc"},{name:"StatusInfoLeft",glyph:"f3cd"},{name:"NearbySharing",glyph:"f3e2"},{name:"CtrlSpatialLeft",glyph:"f3e7"},{name:"InteractiveDashboard",glyph:"f404"},{name:"DeclineCall",glyph:"f405"},{name:"ClippingTool",glyph:"f406"},{name:"RectangularClipping",glyph:"f407"},{name:"FreeFormClipping",glyph:"f408"},{name:"CopyTo",glyph:"f413"},{name:"IDBadge",glyph:"f427"},{name:"DynamicLock",glyph:"f439"},{name:"PenTips",glyph:"f45e"},{name:"PenTipsMirrored",glyph:"f45f"},{name:"HWPJoin",glyph:"f460"},{name:"HWPInsert",glyph:"f461"},{name:"HWPStrikeThrough",glyph:"f462"},{name:"HWPScratchOut",glyph:"f463"},{name:"HWPSplit",glyph:"f464"},{name:"HWPNewLine",glyph:"f465"},{name:"HWPOverwrite",glyph:"f466"},{name:"MobWifiWarning1",glyph:"f473"},{name:"MobWifiWarning2",glyph:"f474"},{name:"MobWifiWarning3",glyph:"f475"},{name:"MobWifiWarning4",glyph:"f476"},{name:"MicLocationCombo",glyph:"f47f"},{name:"Globe2",glyph:"f49a"},{name:"SpecialEffectSize",glyph:"f4a5"},{name:"GIF",glyph:"f4a9"},{name:"Sticker2",glyph:"f4aa"},{name:"SurfaceHubSelected",glyph:"f4be"},{name:"HoloLensSelected",glyph:"f4bf"},{name:"Earbud",glyph:"f4c0"},{name:"MixVolumes",glyph:"f4c3"},{name:"Safe",glyph:"f540"},{name:"LaptopSecure",glyph:"f552"},{name:"PrintDefault",glyph:"f56d"},{name:"PageMirrored",glyph:"f56e"},{name:"LandscapeOrientationMirrored",glyph:"f56f"},{name:"ColorOff",glyph:"f570"},{name:"PrintAllPages",glyph:"f571"},{name:"PrintCustomRange",glyph:"f572"},{name:"PageMarginPortraitNarrow",glyph:"f573"},{name:"PageMarginPortraitNormal",glyph:"f574"},{name:"PageMarginPortraitModerate",glyph:"f575"},{name:"PageMarginPortraitWide",glyph:"f576"},{name:"PageMarginLandscapeNarrow",glyph:"f577"},{name:"PageMarginLandscapeNormal",glyph:"f578"},{name:"PageMarginLandscapeModerate",glyph:"f579"},{name:"PageMarginLandscapeWide",glyph:"f57a"},{name:"CollateLandscape",glyph:"f57b"},{name:"CollatePortrait",glyph:"f57c"},{name:"CollatePortraitSeparated",glyph:"f57d"},{name:"DuplexLandscapeOneSided",glyph:"f57e"},{name:"DuplexLandscapeOneSidedMirrored",glyph:"f57f"},{name:"DuplexLandscapeTwoSidedLongEdge",glyph:"f580"},{name:"DuplexLandscapeTwoSidedLongEdgeMirrored",glyph:"f581"},{name:"DuplexLandscapeTwoSidedShortEdge",glyph:"f582"},{name:"DuplexLandscapeTwoSidedShortEdgeMirrored",glyph:"f583"},{name:"DuplexPortraitOneSided",glyph:"f584"},{name:"DuplexPortraitOneSidedMirrored",glyph:"f585"},{name:"DuplexPortraitTwoSidedLongEdge",glyph:"f586"},{name:"DuplexPortraitTwoSidedLongEdgeMirrored",glyph:"f587"},{name:"DuplexPortraitTwoSidedShortEdge",glyph:"f588"},{name:"DuplexPortraitTwoSidedShortEdgeMirrored",glyph:"f589"},{name:"PPSOneLandscape",glyph:"f58a"},{name:"PPSTwoLandscape",glyph:"f58b"},{name:"PPSTwoPortrait",glyph:"f58c"},{name:"PPSFourLandscape",glyph:"f58d"},{name:"PPSFourPortrait",glyph:"f58e"},{name:"HolePunchOff",glyph:"f58f"},{name:"HolePunchPortraitLeft",glyph:"f590"},{name:"HolePunchPortraitRight",glyph:"f591"},{name:"HolePunchPortraitTop",glyph:"f592"},{name:"HolePunchPortraitBottom",glyph:"f593"},{name:"HolePunchLandscapeLeft",glyph:"f594"},{name:"HolePunchLandscapeRight",glyph:"f595"},{name:"HolePunchLandscapeTop",glyph:"f596"},{name:"HolePunchLandscapeBottom",glyph:"f597"},{name:"StaplingOff",glyph:"f598"},{name:"StaplingPortraitTopLeft",glyph:"f599"},{name:"StaplingPortraitTopRight",glyph:"f59a"},{name:"StaplingPortraitBottomRight",glyph:"f59b"},{name:"StaplingPortraitTwoLeft",glyph:"f59c"},{name:"StaplingPortraitTwoRight",glyph:"f59d"},{name:"StaplingPortraitTwoTop",glyph:"f59e"},{name:"StaplingPortraitTwoBottom",glyph:"f59f"},{name:"StaplingPortraitBookBinding",glyph:"f5a0"},{name:"StaplingLandscapeTopLeft",glyph:"f5a1"},{name:"StaplingLandscapeTopRight",glyph:"f5a2"},{name:"StaplingLandscapeBottomLeft",glyph:"f5a3"},{name:"StaplingLandscapeBottomRight",glyph:"f5a4"},{name:"StaplingLandscapeTwoLeft",glyph:"f5a5"},{name:"StaplingLandscapeTwoRight",glyph:"f5a6"},{name:"StaplingLandscapeTwoTop",glyph:"f5a7"},{name:"StaplingLandscapeTwoBottom",glyph:"f5a8"},{name:"StaplingLandscapeBookBinding",glyph:"f5a9"},{name:"StatusDataTransferRoaming",glyph:"f5aa"},{name:"MobSIMError",glyph:"f5ab"},{name:"CollateLandscapeSeparated",glyph:"f5ac"},{name:"PPSOnePortrait",glyph:"f5ad"},{name:"StaplingPortraitBottomLeft",glyph:"f5ae"},{name:"PlaySolid",glyph:"f5b0"},{name:"RepeatOff",glyph:"f5e7"},{name:"Set",glyph:"f5ed"},{name:"SetSolid",glyph:"f5ee"},{name:"FuzzyReading",glyph:"f5ef"},{name:"VerticalBattery0",glyph:"f5f2"},{name:"VerticalBattery1",glyph:"f5f3"},{name:"VerticalBattery2",glyph:"f5f4"},{name:"VerticalBattery3",glyph:"f5f5"},{name:"VerticalBattery4",glyph:"f5f6"},{name:"VerticalBattery5",glyph:"f5f7"},{name:"VerticalBattery6",glyph:"f5f8"},{name:"VerticalBattery7",glyph:"f5f9"},{name:"VerticalBattery8",glyph:"f5fa"},{name:"VerticalBattery9",glyph:"f5fb"},{name:"VerticalBattery10",glyph:"f5fc"},{name:"VerticalBatteryCharging0",glyph:"f5fd"},{name:"VerticalBatteryCharging1",glyph:"f5fe"},{name:"VerticalBatteryCharging2",glyph:"f5ff"},{name:"VerticalBatteryCharging3",glyph:"f600"},{name:"VerticalBatteryCharging4",glyph:"f601"},{name:"VerticalBatteryCharging5",glyph:"f602"},{name:"VerticalBatteryCharging6",glyph:"f603"},{name:"VerticalBatteryCharging7",glyph:"f604"},{name:"VerticalBatteryCharging8",glyph:"f605"},{name:"VerticalBatteryCharging9",glyph:"f606"},{name:"VerticalBatteryCharging10",glyph:"f607"},{name:"VerticalBatteryUnknown",glyph:"f608"},{name:"SIMError",glyph:"f618"},{name:"SIMMissing",glyph:"f619"},{name:"SIMLock",glyph:"f61a"},{name:"eSIM",glyph:"f61b"},{name:"eSIMNoProfile",glyph:"f61c"},{name:"eSIMLocked",glyph:"f61d"},{name:"eSIMBusy",glyph:"f61e"},{name:"NoiseCancelation",glyph:"f61f"},{name:"NoiseCancelationOff",glyph:"f620"},{name:"MusicSharing",glyph:"f623"},{name:"MusicSharingOff",glyph:"f624"},{name:"CircleShapeSolid",glyph:"f63c"},{name:"WifiCallBars",glyph:"f657"},{name:"WifiCall0",glyph:"f658"},{name:"WifiCall1",glyph:"f659"},{name:"WifiCall2",glyph:"f65a"},{name:"WifiCall3",glyph:"f65b"},{name:"WifiCall4",glyph:"f65c"},{name:"CHTLanguageBar",glyph:"f69e"},{name:"ComposeMode",glyph:"f6a9"},{name:"ExpressiveInputEntry",glyph:"f6b8"},{name:"EmojiTabMoreSymbols",glyph:"f6ba"},{name:"WebSearch",glyph:"f6fa"},{name:"Kiosk",glyph:"f712"},{name:"RTTLogo",glyph:"f714"},{name:"VoiceCall",glyph:"f715"},{name:"GoToMessage",glyph:"f716"},{name:"ReturnToCall",glyph:"f71a"},{name:"StartPresenting",glyph:"f71c"},{name:"StopPresenting",glyph:"f71d"},{name:"ProductivityMode",glyph:"f71e"},{name:"SetHistoryStatus",glyph:"f738"},{name:"SetHistoryStatus2",glyph:"f739"},{name:"Keyboardsettings20",glyph:"f73d"},{name:"OneHandedRight20",glyph:"f73e"},{name:"OneHandedLeft20",glyph:"f73f"},{name:"Split20",glyph:"f740"},{name:"Full20",glyph:"f741"},{name:"Handwriting20",glyph:"f742"},{name:"ChevronLeft20",glyph:"f743"},{name:"ChevronLeft32",glyph:"f744"},{name:"ChevronRight20",glyph:"f745"},{name:"ChevronRight32",glyph:"f746"},{name:"Event12",glyph:"f763"},{name:"MicOff2",glyph:"f781"},{name:"DeliveryOptimization",glyph:"f785"},{name:"CancelMedium",glyph:"f78a"},{name:"SearchMedium",glyph:"f78b"},{name:"AcceptMedium",glyph:"f78c"},{name:"RevealPasswordMedium",glyph:"f78d"},{name:"DeleteWord",glyph:"f7ad"},{name:"DeleteWordFill",glyph:"f7ae"},{name:"DeleteLines",glyph:"f7af"},{name:"DeleteLinesFill",glyph:"f7b0"},{name:"InstertWords",glyph:"f7b1"},{name:"InstertWordsFill",glyph:"f7b2"},{name:"JoinWords",glyph:"f7b3"},{name:"JoinWordsFill",glyph:"f7b4"},{name:"OverwriteWords",glyph:"f7b5"},{name:"OverwriteWordsFill",glyph:"f7b6"},{name:"AddNewLine",glyph:"f7b7"},{name:"AddNewLineFill",glyph:"f7b8"},{name:"OverwriteWordsKorean",glyph:"f7b9"},{name:"OverwriteWordsFillKorean",glyph:"f7ba"},{name:"EducationIcon",glyph:"f7bb"},{name:"WindowSnipping",glyph:"f7ed"},{name:"VideoCapture",glyph:"f7ee"},{name:"StatusSecured",glyph:"f809"},{name:"NarratorApp",glyph:"f83b"},{name:"PowerButtonUpdate",glyph:"f83d"},{name:"RestartUpdate",glyph:"f83e"},{name:"UpdateStatusDot",glyph:"f83f"},{name:"Eject",glyph:"f847"},{name:"Spelling",glyph:"f87b"},{name:"SpellingKorean",glyph:"f87c"},{name:"SpellingSerbian",glyph:"f87d"},{name:"SpellingChinese",glyph:"f87e"},{name:"FolderSelect",glyph:"f89a"},{name:"SmartScreen",glyph:"f8a5"},{name:"ExploitProtection",glyph:"f8a6"},{name:"AddBold",glyph:"f8aa"},{name:"SubtractBold",glyph:"f8ab"},{name:"BackSolidBold",glyph:"f8ac"},{name:"ForwardSolidBold",glyph:"f8ad"},{name:"PauseBold",glyph:"f8ae"},{name:"ClickSolid",glyph:"f8af"},{name:"SettingsSolid",glyph:"f8b0"},{name:"MicrophoneSolidBold",glyph:"f8b1"},{name:"SpeechSolidBold",glyph:"f8b2"},{name:"ClickedOutLoudSolidBold",glyph:"f8b3"}];let p=class extends e.CustomComponent{static get observedAttributes(){return["font-family","glyph","font-size","foreground","use-accent"]}get fontFamily(){var e;return null!==(e=this.getAttribute("font-family"))&&void 0!==e?e:"Segoe Fluent Icons"}set fontFamily(e){this.setAttribute("font-family",e),this.setFontFamily()}get glyph(){return this.getAttribute("glyph")}set glyph(e){this.setAttribute("glyph",e),this.setGlyph()}get fontSize(){return this.hasAttribute("font-size")?parseInt(this.getAttribute("font-size")):16}set fontSize(e){this.setAttribute("font-size",e.toString()),this.setFontSize()}get foreground(){return this.getAttribute("foreground")}set foreground(e){this.setAttribute("foreground",e),this.setForeground()}get useAccent(){return this.hasAttribute("use-accent")&&"false"!==this.getAttribute("use-accent")}set useAccent(e){this.toggleAttribute("use-accent",e),this.setForeground()}get iconSpan(){var e;return null!==(e=this._iconSpan)&&void 0!==e||(this._iconSpan=this.shadowRoot.querySelector(".icon")),this._iconSpan}render(){return'\n            <span class="icon" part="icon"></span>\n        '}connectedCallback(){this.setFontFamily(),this.setGlyph(),this.setFontSize()}attributeChangedCallback(e,a,n){switch(e){case"font-family":this.setFontFamily();break;case"glyph":this.setGlyph();break;case"font-size":this.setFontSize();break;case"foreground":case"use-accent":this.setForeground()}}setFontFamily(){this.iconSpan.style.fontFamily=this.fontFamily+", sans-serif"}setGlyph(){this.iconSpan.innerHTML=this.glyph}setFontSize(){if(null!==this.fontSize){const e=this.fontSize+"px",a=this.style,n=this.iconSpan.style;n.fontSize=e,n.lineHeight=e,n.height=e,n.width=e,a.height=e,a.width=e}}setForeground(){this.iconSpan.classList.toggle("use-accent",this.useAccent),null!==this.foreground&&(this.iconSpan.style.color=this.foreground)}};p.styles="\n        :host {\n            display: inline-block;\n        }\n\n        .icon {\n            display: block;\n            font-size: 16px;\n            text-rendering: optimizeLegibility;\n        }\n\n        .icon.use-accent {\n            color: var(--fill-accent-default);\n        }\n    ",p=a([(0,e.customComponent)("fluent-font-icon")],p);let h=class extends p{static get observedAttributes(){return["font-family","glyph","font-size","foreground","use-accent","symbol"]}get symbol(){return this.getAttribute("symbol")}set symbol(e){this.setAttribute("symbol",e),this.setSymbol()}get glyphMap(){var e;return null!==(e=this._glyphMap)&&void 0!==e?e:g}set glyphMap(e){this._glyphMap=e,this.setSymbol()}attributeChangedCallback(e,a,n){super.attributeChangedCallback(e,a,n),"symbol"===e&&this.setSymbol()}setSymbol(){const e=this.symbol?"&#x"+this.glyphMap.find((e=>e.name===this.symbol)).glyph:"";super.glyph=e}};h=a([(0,e.customComponent)("fluent-symbol-icon")],h);let t=class extends e.CustomComponent{static get observedAttributes(){return["source","size","alt","title"]}get source(){return this.getAttribute("source")}set source(e){this.setAttribute("source",e)}get size(){return this.hasAttribute("size")?parseInt(this.getAttribute("size")):16}set size(e){this.setAttribute("size",e.toString())}get alt(){return this.getAttribute("alt")}get title(){return this.getAttribute("title")}get image(){var e;return null!==(e=this._image)&&void 0!==e||(this._image=this.shadowRoot.querySelector(".image")),this._image}render(){return'<img class="image" />'}connectedCallback(){this.setSource(),this.setSize(),this.setAltOrTitle()}attributeChangedCallback(e,a,n){switch(e){case"source":this.setSource();break;case"size":this.setSize();break;case"alt":case"title":this.setAltOrTitle()}}setSource(){this.image.setAttribute("src",this.source)}setSize(){const e=this.image.style,a=this.style;e.width=this.size+"px",e.height=this.size+"px",a.width=this.size+"px",a.height=this.size+"px"}setAltOrTitle(){this.image.setAttribute("alt",this.alt),this.image.setAttribute("title",this.title)}};t.styles="\n        :host {\n            display: inline-block;\n        }\n\n        .image {\n            display: block;\n        }\n    ",t=a([(0,e.customComponent)("fluent-image-icon")],t)})(),l})()));
//# sourceMappingURL=fluent-icon-element-component.js.map

/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);


/***/ }),

/***/ "./src/styles/dashboard.scss":
/*!***********************************!*\
  !*** ./src/styles/dashboard.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/classes/alpha-blend.ts":
/*!********************************************!*\
  !*** ./src/scripts/classes/alpha-blend.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blend: () => (/* binding */ blend),
/* harmony export */   computeAlphaBlend: () => (/* binding */ computeAlphaBlend),
/* harmony export */   getRgbFromHex: () => (/* binding */ getRgbFromHex)
/* harmony export */ });
// See: https://gist.github.com/jelbourn/79c473aab404abcd36dc7cfaa7ac02ac
function getRgbFromHex(hex) {
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }
    return {
        r: parseInt(hex[0] + hex[1], 16),
        g: parseInt(hex[2] + hex[3], 16),
        b: parseInt(hex[4] + hex[5], 16),
    };
}
function blend(baseValue, overlayValue, alpha) {
    return Math.round(overlayValue * alpha + baseValue * (1 - alpha));
}
function computeAlphaBlend(baseHex, overlayHex, alpha) {
    const base = getRgbFromHex(baseHex);
    const overlay = getRgbFromHex(overlayHex);
    const blended = {
        r: blend(base.r, overlay.r, alpha),
        g: blend(base.g, overlay.g, alpha),
        b: blend(base.b, overlay.b, alpha),
    };
    return ("#" +
        blended.r.toString(16) +
        blended.g.toString(16) +
        blended.b.toString(16));
}


/***/ }),

/***/ "./src/scripts/classes/currency.ts":
/*!*****************************************!*\
  !*** ./src/scripts/classes/currency.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toCurrency: () => (/* binding */ toCurrency)
/* harmony export */ });
function toCurrency(value) {
    return Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}


/***/ }),

/***/ "./src/scripts/classes/date-time.ts":
/*!******************************************!*\
  !*** ./src/scripts/classes/date-time.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTime: () => (/* binding */ DateTime),
/* harmony export */   FullMonth: () => (/* binding */ FullMonth),
/* harmony export */   TimeConstantsBase: () => (/* binding */ TimeConstantsBase),
/* harmony export */   TimeSpan: () => (/* binding */ TimeSpan)
/* harmony export */ });
// Written by Gary Antier
// Created: 2020
// Modified: Apr 20, 2023
const FullMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October", "November", "December"];
const AbbrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const FullDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const AbbrDaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
class TimeConstantsBase {
    get MillisecondsInASecond() {
        return 1000;
    }
    get SecondsInAMinute() {
        return 60;
    }
    get MillisecondsInAMinute() {
        let milli = this.MillisecondsInASecond * this.SecondsInAMinute;
        return milli;
    }
    get MinutesInAnHour() {
        return 60;
    }
    get MillisecondsInAnHour() {
        let milli = this.MillisecondsInAMinute * this.MinutesInAnHour;
        return milli;
    }
    get HoursInADay() {
        return 24;
    }
    get MillisecondsInADay() {
        let milli = this.MillisecondsInAnHour * this.HoursInADay;
        return milli;
    }
    get DaysInAYear() {
        return 365;
    }
}
const TimeConstants = new TimeConstantsBase();
class TimeSpan {
    constructor(milli) {
        this.milli = milli;
        this.totalSeconds = Math.floor(milli / TimeConstants.MillisecondsInASecond);
        this.totalMinutes = Math.floor(milli / TimeConstants.MillisecondsInAMinute);
        this.totalHours = Math.floor(milli / TimeConstants.MillisecondsInAnHour);
        this.totalDays = Math.floor(milli / TimeConstants.MillisecondsInADay);
        this.seconds = this.totalSeconds % TimeConstants.SecondsInAMinute;
        this.minutes = this.totalMinutes % TimeConstants.MinutesInAnHour;
        this.hours = this.totalHours % TimeConstants.HoursInADay;
        this.days = this.totalDays % TimeConstants.DaysInAYear;
    }
    toString() {
        let duration = "";
        if (this.days > 0) {
            duration += `${this.days}d `;
        }
        if (this.hours > 0) {
            duration += `${this.hours}h `;
        }
        if (this.minutes > 0) {
            duration += `${this.minutes}m `;
        }
        if (this.seconds > 0) {
            duration += `${this.seconds}s`;
        }
        else if (duration == "") {
            duration = "...";
        }
        return duration;
    }
}
class DateTime {
    constructor(date, offset) {
        this._date = date;
        this.offset = offset;
    }
    static parse(dateTime, offset = 0) {
        if (dateTime) {
            let irregularFormatRegex = /(\/Date\()(.*)(\)\/)/i;
            if (typeof dateTime === "string" && irregularFormatRegex.test(dateTime)) {
                let match = irregularFormatRegex.exec(dateTime);
                dateTime = parseInt(match[2]);
            }
            let milli = typeof dateTime === "number" ? dateTime : Date.parse(dateTime);
            if (isNaN(milli)) {
                milli = 1;
            }
            // UTC offset...
            offset = offset * TimeConstants.MillisecondsInAnHour;
            milli += offset;
            let date = new Date(milli);
            return new DateTime(date, offset);
        }
        else {
            return null;
        }
    }
    static now() {
        return new DateTime(new Date(), 8);
    }
    static endOfMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    get year() {
        return this._date.getFullYear();
    }
    get month() {
        return this._date.getMonth();
    }
    get date() {
        return this._date.getDate();
    }
    get day() {
        return this._date.getDay();
    }
    get hour() {
        return this._date.getHours();
    }
    get minutes() {
        return this._date.getMinutes();
    }
    get seconds() {
        return this._date.getSeconds();
    }
    get time() {
        return this._date.getTime();
    }
    static difference(start, end) {
        var timeDiff = end.getTime() - start.getTime();
        return new TimeSpan(timeDiff);
    }
    difference(secondDate) {
        let diff = this.time - secondDate.time;
        return new TimeSpan(diff);
    }
    addDays(days) {
        let newDate = new Date(this._date);
        newDate.setDate(this.date + days);
        return new DateTime(newDate, this.offset);
    }
    addYears(years) {
        let newDate = new Date(this._date);
        newDate.setFullYear(this.year + years);
        return new DateTime(newDate, this.offset);
    }
    toString(format = "yyyy/MM/dd HH:mm:ss") {
        if (!this._date)
            return null;
        let year = this.year.toString();
        let subYear = year.padStart(2, '0').slice(-2);
        let month = this.month;
        let day = this.day;
        let date = this.date;
        let hour = this.hour;
        let _12Hour = hour < 13 ? hour : hour - 12;
        let isAM = hour < 12;
        let minutes = this.minutes;
        let seconds = this.seconds;
        // Day...
        format = format.replace(/dd/g, date.toString().padStart(2, '0'));
        format = format.replace(/d/g, date);
        // 24-Hour...
        format = format.replace(/HH/g, hour.toString().padStart(2, '0'));
        format = format.replace(/H/g, hour);
        // 12-Hour...
        format = format.replace(/hh/g, _12Hour.toString().padStart(2, '0'));
        format = format.replace(/h/g, _12Hour);
        // Minutes...
        format = format.replace(/mm/g, minutes.toString().padStart(2, '0'));
        format = format.replace(/m/g, minutes);
        // Seconds...
        format = format.replace(/ss/g, seconds.toString().padStart(2, '0'));
        format = format.replace(/s/g, seconds);
        // Year...
        format = format.replace(/yyyyy/g, year.padStart(5, '0'));
        format = format.replace(/yyyy/g, year.padStart(4, '0'));
        format = format.replace(/yyy/g, year.padStart(3, '0'));
        format = format.replace(/yy/g, subYear);
        format = format.replace(/y/g, subYear);
        // Month in words...
        format = format.replace(/MMMM/g, "####");
        format = format.replace(/MMM/g, "###");
        // Month in number...
        let _month = month + 1;
        format = format.replace(/MM/g, _month.toString().padStart(2, '0'));
        format = format.replace(/M/g, _month);
        // AM/PM...
        format = format.replace(/tt/g, isAM ? "AM" : "PM");
        format = format.replace(/t/g, isAM ? "A" : "P");
        // Day of week...
        format = format.replace(/dddd/g, FullDaysOfWeek[day]);
        format = format.replace(/ddd/g, AbbrDaysOfWeek[day]);
        // Month in words...
        format = format.replace(/####/g, FullMonth[month]);
        format = format.replace(/###/g, AbbrMonth[month]);
        return format;
    }
}


/***/ }),

/***/ "./src/scripts/classes/index.ts":
/*!**************************************!*\
  !*** ./src/scripts/classes/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTime: () => (/* reexport safe */ _date_time__WEBPACK_IMPORTED_MODULE_2__.DateTime),
/* harmony export */   FullMonth: () => (/* reexport safe */ _date_time__WEBPACK_IMPORTED_MODULE_2__.FullMonth),
/* harmony export */   TimeConstantsBase: () => (/* reexport safe */ _date_time__WEBPACK_IMPORTED_MODULE_2__.TimeConstantsBase),
/* harmony export */   TimeSpan: () => (/* reexport safe */ _date_time__WEBPACK_IMPORTED_MODULE_2__.TimeSpan),
/* harmony export */   TransactionManager: () => (/* reexport safe */ _transaction_manager__WEBPACK_IMPORTED_MODULE_5__.TransactionManager),
/* harmony export */   blend: () => (/* reexport safe */ _alpha_blend__WEBPACK_IMPORTED_MODULE_0__.blend),
/* harmony export */   computeAlphaBlend: () => (/* reexport safe */ _alpha_blend__WEBPACK_IMPORTED_MODULE_0__.computeAlphaBlend),
/* harmony export */   getRgbFromHex: () => (/* reexport safe */ _alpha_blend__WEBPACK_IMPORTED_MODULE_0__.getRgbFromHex),
/* harmony export */   toCurrency: () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_1__.toCurrency),
/* harmony export */   useNavigation: () => (/* reexport safe */ _navigation__WEBPACK_IMPORTED_MODULE_3__.useNavigation)
/* harmony export */ });
/* harmony import */ var _alpha_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alpha-blend */ "./src/scripts/classes/alpha-blend.ts");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./src/scripts/classes/currency.ts");
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-time */ "./src/scripts/classes/date-time.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./src/scripts/classes/navigation.ts");
/* harmony import */ var _response_payload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response-payload */ "./src/scripts/classes/response-payload.ts");
/* harmony import */ var _transaction_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-manager */ "./src/scripts/classes/transaction-manager.ts");








/***/ }),

/***/ "./src/scripts/classes/navigation.ts":
/*!*******************************************!*\
  !*** ./src/scripts/classes/navigation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNavigation: () => (/* binding */ useNavigation)
/* harmony export */ });
function useNavigation() {
    const navigationView = document.querySelector('#navigation_view');
    navigationView.addEventListener('selectionchanged', (e) => {
        var args = e.detail.args;
        if (args.isSettingsSelected)
            return;
        window.location.href = args.selectedItem.href;
    });
}


/***/ }),

/***/ "./src/scripts/classes/response-payload.ts":
/*!*************************************************!*\
  !*** ./src/scripts/classes/response-payload.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/scripts/classes/transaction-manager.ts":
/*!****************************************************!*\
  !*** ./src/scripts/classes/transaction-manager.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionManager: () => (/* binding */ TransactionManager)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/scripts/classes/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/enums */ "./src/scripts/enums/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./src/scripts/components/index.ts");





class TransactionManager {
    constructor() {
        this.operation = _enums__WEBPACK_IMPORTED_MODULE_2__.Operation.Create;
    }
    loadAccount(account) {
        this.account = account;
        this.registerComponents();
        this.refresh();
    }
    refresh() {
        this.loadCard();
        this.loadBalances();
        this.loadTransactions();
    }
    registerComponents() {
        if (this.isRegistered)
            return;
        this.registerMenu();
        this.registerActions();
        this.registerEditor();
        this.isRegistered = true;
    }
    registerMenu() {
        // Menu
        this.contextMenu = _components__WEBPACK_IMPORTED_MODULE_3__.globalContext.addMenu("transactions_row", this.container);
        // Options
        let options = ["Update", "Post", "Delete", "Cancel"];
        let menuOptions = options.reduce((mo, o) => {
            const option = new _components__WEBPACK_IMPORTED_MODULE_3__.ContextMenuOption(o);
            option.visible((trans) => trans.Posted == (o == "Cancel"));
            mo.push(option);
            return mo;
        }, []);
        menuOptions[0].onClick(trans => this.updateBtnClicked(trans));
        menuOptions[1].onClick(trans => this.post(trans));
        menuOptions[2].onClick(trans => this.delete(trans));
        menuOptions[3].onClick(trans => this.cancel(trans));
        this.contextMenu.addOptions(...menuOptions);
    }
    registerActions() {
        const inputs = this.editor.querySelectorAll("form input");
        this.actions.forEach((action) => {
            const type = parseInt(action.dataset.action);
            action.addEventListener("click", () => {
                this.operation = _enums__WEBPACK_IMPORTED_MODULE_2__.Operation.Create;
                this.transactionType = type;
                clearForm();
                let typeInput = this.editor.querySelector("form input[name=TransactionType]");
                typeInput.value = type;
                let dateInput = this.editor.querySelector("form input[name=Date]");
                dateInput.value = ___WEBPACK_IMPORTED_MODULE_1__.DateTime.now().toString("yyyy-MM-dd");
                this.editor.show();
                this.changeTheme("#999999");
            });
        });
        function clearForm() {
            inputs.forEach(input => {
                input.value = input.type != "number" ? "" : "0.00";
            });
        }
    }
    registerEditor() {
        const amountInput = this.editor.querySelector("form input#amount");
        const amountInputHidden = this.editor.querySelector("form input[name=Amount]");
        amountInput.addEventListener("input", () => {
            let amount = parseFloat(amountInput.value);
            if (this.transactionType == _enums__WEBPACK_IMPORTED_MODULE_2__.TransactionType.Withdraw)
                amount *= -1;
            amountInputHidden.value = amount;
        });
        // TODO: Refactor
        const dissmissEditorBtn = document.querySelector("#dismiss_editor_dialog_btn");
        dissmissEditorBtn.addEventListener("click", () => {
            this.changeTheme("#dadada");
            this.editor.hide();
        });
        const saveBtn = document.getElementById('save_btn');
        saveBtn.addEventListener('click', this.save.bind(this));
    }
    loadCard() {
        const account = this.account;
        this.card.title = account.Title;
        this.card.number = account.AccountNumber;
        this.card.category = account.Category;
    }
    loadBalances() {
        const data = { accountId: this.account.Id };
        const balances = this.card.querySelectorAll("card-balance");
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("account/balance.php", { params: data })
            .then(response => {
            const payload = response.data;
            const content = payload.content;
            if (!payload.state) {
                alert(`Oops! ${content}`);
                return;
            }
            balances[0].innerText = (0,___WEBPACK_IMPORTED_MODULE_1__.toCurrency)(content.Balance);
            balances[1].innerText = (0,___WEBPACK_IMPORTED_MODULE_1__.toCurrency)(content.Projection);
        })
            .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
    }
    loadTransactions() {
        const data = { AccountId: this.account.Id };
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("transaction/read.php", { params: data })
            .then(response => {
            const payload = response.data;
            const content = payload.content;
            if (!payload.state) {
                this.container.innerHTML = `<p class="centered">Oops! ${content}</p>`;
                return;
            }
            this.container.innerHTML = null;
            let transactions = this.groupTransactions(content);
            for (let key in transactions) {
                const group = this.newGroup(key, transactions[key]);
                this.container.appendChild(group);
            }
        })
            .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
    }
    groupTransactions(trans) {
        var _a;
        let groups = {};
        for (let t of trans) {
            const key = t.Date + t.Posted;
            ((_a = groups[key]) !== null && _a !== void 0 ? _a : (groups[key] = [])).push(t);
        }
        return groups;
    }
    newGroup(date, trans) {
        const group = document.createElement('div');
        const header = document.createElement('p');
        const body = document.createElement('div');
        group.classList.add('transaction-group');
        header.classList.add('transaction-group-header');
        body.classList.add('transaction-group-body');
        // Title/header...
        const dateTime = ___WEBPACK_IMPORTED_MODULE_1__.DateTime.parse(date.slice(0, -1));
        header.innerText = dateTime.toString('MMM. dd, yyyy');
        const status = trans[0].Posted ? 'actual' : 'projection';
        header.classList.add(status);
        group.append(header);
        group.append(body);
        for (let t of trans) {
            let row = this.newRow(t);
            body.append(row);
        }
        return group;
    }
    newRow(transaction) {
        // TODO: Refactor?
        const status = transaction.Posted ? 'actual' : 'projection';
        const row = document.createElement('div');
        const main = document.createElement('div');
        const desc = document.createElement('div');
        const descPar = document.createElement('p');
        const summary = document.createElement('div');
        row.classList.add('transaction-row', status);
        main.classList.add('main-content');
        desc.classList.add('transaction-description');
        descPar.innerText = transaction.Description;
        desc.appendChild(descPar);
        summary.classList.add('transaction-summary');
        main.append(desc);
        main.append(summary);
        row.append(main);
        const isDebit = transaction.Total >= 0;
        const transAmount = Math.abs(transaction.Total);
        const amountPar = document.createElement('p');
        const refPar = document.createElement('p');
        amountPar.innerText = `${!isDebit ? "-" : ""} PHP ${(0,___WEBPACK_IMPORTED_MODULE_1__.toCurrency)(transAmount.toString())}`;
        refPar.innerText = 'REF: N/A';
        summary.append(amountPar);
        summary.append(refPar);
        row.addContext(this.contextMenu, transaction);
        const actions = document.createElement('div');
        actions.classList.add('actions-container');
        row.append(actions);
        if (status === "projection") {
            const editAction = this.newAction("edit", "Edit");
            const postAction = this.newAction("post", "CompletedSolid");
            const deleteAction = this.newAction("delete", "Delete");
            editAction.addEventListener('click', () => {
                collapseActions();
                this.updateBtnClicked(transaction);
            });
            postAction.addEventListener('click', () => {
                collapseActions();
                this.post(transaction);
            });
            deleteAction.addEventListener('click', () => {
                collapseActions();
                this.delete(transaction);
            });
            actions.append(editAction);
            actions.append(postAction);
            actions.append(deleteAction);
        }
        else {
            const cancelAction = this.newAction("delete", "Cancel");
            actions.append(cancelAction);
            cancelAction.addEventListener('click', () => {
                collapseActions();
                this.cancel(transaction);
            });
        }
        // Touch events...
        let initialTouch;
        let initialLeft;
        main.addEventListener("touchstart", e => {
            initialTouch = e.changedTouches[0];
            initialLeft = parseInt(main.style.left);
        });
        main.addEventListener("touchmove", e => {
            const touch = Array.from(e.changedTouches)
                .find(tch => tch.identifier === initialTouch.identifier);
            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }
            const xDelta = touch.pageX - initialTouch.pageX;
            const yDelta = touch.pageY - initialTouch.pageY;
            const left = Math.min(0, initialLeft + xDelta);
            if (Math.abs(xDelta) > Math.abs(yDelta))
                e.preventDefault();
            main.style.left = `${left}px`;
        });
        main.addEventListener("touchend", e => {
            const touch = Array.from(e.changedTouches)
                .find(tch => tch.identifier === initialTouch.identifier);
            if (touch === undefined) {
                console.log("No matches found of the initial touch.");
                return;
            }
            const left = parseInt(main.style.left);
            const actionWidth = actions.clientWidth;
            const threshold = actionWidth / 2;
            const snapPoint = actionWidth * ((Math.abs(left) > threshold) ? 1 : 0);
            (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                targets: main,
                left: -snapPoint,
                duration: 200,
                easing: "easeInOutQuad"
            });
        });
        function collapseActions() {
            (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                targets: main[0],
                left: 0,
                duration: 200,
                easing: "easeInOutQuad"
            });
        }
        return row;
    }
    newAction(name, symbol) {
        const action = document.createElement('div');
        const icon = document.createElement('fluent-symbol-icon');
        action.classList.add('action', `action-${name}`);
        action.tabIndex = -1;
        // Icon
        action.append(icon);
        icon.setAttribute('symbol', symbol);
        icon.setAttribute('font-size', '20');
        icon.setAttribute('foreground', '#fff');
        return action;
    }
    updateBtnClicked(data) {
        this.operation = _enums__WEBPACK_IMPORTED_MODULE_2__.Operation.Update;
        let inputs = this.editor.querySelectorAll("form input");
        inputs.forEach(input => {
            let name = input.name;
            if (name == "Amount")
                return;
            input.value = name != "" // Empty
                ? data[name]
                : Math.abs(data.Amount);
        });
        this.transactionType = data.TransactionType;
        this.changeTheme("#999999");
        this.editor.show();
    }
    save() {
        const operation = _enums__WEBPACK_IMPORTED_MODULE_2__.Operation[this.operation].toLowerCase();
        const endpoint = `transaction/${operation}.php`;
        // TODO: Refactor
        let form = this.editor.querySelector("form");
        let data = new FormData(form);
        data.append("AccountId", this.account.Id.toString());
        let trans = Object.fromEntries(data.entries());
        axios__WEBPACK_IMPORTED_MODULE_4__["default"]
            .post(endpoint, trans)
            .then(response => {
            if (response.data.state)
                this.refresh();
            this.operation = _enums__WEBPACK_IMPORTED_MODULE_2__.Operation.Create;
            this.editor.hide();
            this.changeTheme("#dadada");
        })
            .catch(error => {
            console.log(error);
        });
    }
    delete(trans) {
        this.handlePost("transaction/delete.php", trans);
    }
    post(trans) {
        this.handlePost("transaction/post.php", trans);
    }
    cancel(trans) {
        this.handlePost("transaction/cancel.php", trans);
    }
    handlePost(endpoint, trans) {
        axios__WEBPACK_IMPORTED_MODULE_4__["default"]
            .post(endpoint, trans)
            .then(response => {
            if (response.data.state)
                this.refresh();
        })
            .catch(error => {
            console.log(error);
        });
    }
    changeTheme(theme) {
        document.querySelector(`meta[name="theme-color"]`)
            .setAttribute("content", theme);
    }
}


/***/ }),

/***/ "./src/scripts/components/account-card.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/account-card.ts ***!
  \************************************************/
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
    static get observedAttributes() {
        return ["data-title", "data-number", "data-category"];
    }
    /* Attributes */
    get title() {
        return this.getAttribute("data-title");
    }
    set title(value) {
        this.setAttribute("data-title", value);
        this.setTitle();
    }
    get number() {
        return this.getAttribute("data-number");
    }
    set number(value) {
        this.setAttribute("data-number", value !== null && value !== void 0 ? value : "••••");
        this.setNumber();
    }
    get category() {
        return this.getAttribute("data-category");
    }
    set category(value) {
        this.setAttribute("data-category", value);
        this.setCategory();
    }
    /* DOM */
    get titleSpan() {
        var _a;
        (_a = this._titleSpan) !== null && _a !== void 0 ? _a : (this._titleSpan = this.shadowRoot.querySelector(".title"));
        return this._titleSpan;
    }
    get numberSpan() {
        var _a;
        (_a = this._numberSpan) !== null && _a !== void 0 ? _a : (this._numberSpan = this.shadowRoot.querySelector(".number"));
        return this._numberSpan;
    }
    get categorySpan() {
        var _a;
        (_a = this._categorySpan) !== null && _a !== void 0 ? _a : (this._categorySpan = this.shadowRoot.querySelector(".category"));
        return this._categorySpan;
    }
    render() {
        return `
            <div class="body">
                <span class="title"></span>
                <div class="balances">
                    <slot></slot>
                </div>
                <p class="numbers">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span class="number">••••</span>
                </p>
                <span class="category"></span>
            </div>
            <slot name="icon"></slot>
        `;
    }
    /* Functions */
    connectedCallback() {
        this.setTitle();
        this.setNumber();
        this.setCategory();
    }
    attributeChangedCallback(name) {
        switch (name) {
            case "data-title":
                this.setTitle();
                break;
            case "data-number":
                this.setNumber();
                break;
            case "data-category":
                this.setCategory();
                break;
        }
    }
    setTitle() {
        this.titleSpan.innerHTML = this.title;
    }
    setNumber() {
        var _a;
        const number = (_a = this.number) === null || _a === void 0 ? void 0 : _a.slice(-4);
        this.numberSpan.innerHTML = number;
    }
    setCategory() {
        this.categorySpan.innerHTML = this.category;
    }
};
AccountCard.styles = `
        :host {
            background-image: -webkit-linear-gradient(-45deg, #252A32 50%, #2d343e 50%);
            border-radius: 10px;
            box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
            box-sizing: border-box;
            color: #FFF;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            height: 180px;
            max-height: 180px;
            max-width: 320px;
            min-height: 180px;
            min-width: 320px;
            outline: none;
            padding: 20px;
            position: relative;
            user-select: none;
            width: 320px;
        }
        
        :host::before {
            border: solid 3px #4D90FE;
            border-radius: 13px;
            box-sizing: border-box;
            content: "";
            display: none;
            height: calc(100% + 6px);
            left: -3px;
            position: absolute;
            top: -3px;
            width: calc(100% + 6px);
            z-index: 0;
        }
        
        :host:active::before {
            display: block;
        }
        
        .body {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .body > .title {
            font-size: 16px;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .balances {
            align-items: center;
            display: flex;
            flex-grow: 1;
        }

        .numbers,
        .category {
            color: #ffffffcc;
            font-size: 13px;
            height: 13px;
            line-height: 13px;
            margin: 0;
        }

        .numbers {
            display: flex;
            margin-bottom: 8px;
        }
        
        .numbers span {
            margin-right: 8px;
        }

        ::slotted(img[slot=icon]) {
            bottom: 23px;
            height: 22px;
            position: absolute;
            right: 18px;
            shape-rendering: geometricPrecision;
        }
    `;
AccountCard = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('account-card')
], AccountCard);



/***/ }),

/***/ "./src/scripts/components/action-button.ts":
/*!*************************************************!*\
  !*** ./src/scripts/components/action-button.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ActionButton = class ActionButton extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    static get observedAttributes() {
        return ['data-icon'];
    }
    /* Attributes */
    get icon() {
        return this.getAttribute('data-icon');
    }
    set icon(value) {
        this.setAttribute('data-icon', value);
        this.setIcon();
    }
    /* DOM */
    get symbolIcon() {
        var _a;
        (_a = this._symbolIcon) !== null && _a !== void 0 ? _a : (this._symbolIcon = this.shadowRoot.querySelector('fluent-symbol-icon'));
        return this._symbolIcon;
    }
    render() {
        return `
            <fluent-symbol-icon></fluent-symbol-icon> 
            <span>
                <slot></slot>
            </span>
        `;
    }
    /* Functions */
    connectedCallback() {
        this.setIcon();
    }
    attributeChangedCallback(name) {
        if (name != 'data-icon')
            return;
        this.setIcon();
    }
    setIcon() {
        this.symbolIcon.symbol = this.icon;
    }
};
ActionButton.styles = `
        :host {
            align-items: center;
            background-color: rgba(3, 106, 196, 0.2);
            border-radius: 5px;
            color: var(--accent-fill-rest);
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            font-family: var(--body-font);
            font-size: 14px;
            font-weight: 500;
            gap: 10px;
            justify-content: center;
            padding: 10px;
            user-select: none;
            -webkit-user-select: none;
        }

        :host(:hover) {
            background-color: rgba(3, 106, 196, 0.25);
        }
        
        :host(:active) {
            background-color: rgba(3, 106, 196, 0.3);
        }
    `;
ActionButton = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('action-button')
], ActionButton);



/***/ }),

/***/ "./src/scripts/components/card-balance.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/card-balance.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardBalance: () => (/* binding */ CardBalance)
/* harmony export */ });
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CardBalance = class CardBalance extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.CustomComponent {
    static get observedAttributes() {
        return ["data-title", "data-currency"];
    }
    /* Attributes */
    get title() {
        return this.getAttribute("data-title");
    }
    set title(value) {
        this.setAttribute("data-title", value);
        this.setTitle();
    }
    get currency() {
        var _a;
        return (_a = this.getAttribute("data-currency")) !== null && _a !== void 0 ? _a : "php";
    }
    set currency(value) {
        this.setAttribute("data-currency", value);
        this.setCurrency();
    }
    /* DOM */
    get titleSpan() {
        var _a;
        (_a = this._titleSpan) !== null && _a !== void 0 ? _a : (this._titleSpan = this.shadowRoot.querySelector(".title"));
        return this._titleSpan;
    }
    get figureSpan() {
        var _a;
        (_a = this._figureSpan) !== null && _a !== void 0 ? _a : (this._figureSpan = this.shadowRoot.querySelector(".figure"));
        return this._figureSpan;
    }
    get slotElement() {
        var _a;
        (_a = this._slot) !== null && _a !== void 0 ? _a : (this._slot = this.shadowRoot.querySelector("slot"));
        return this._slot;
    }
    render() {
        return `
            <span class="title">Projection</span>
            <span class="figure currency-php">
                <slot></slot>
            </span>
        `;
    }
    /* Functions */
    connectedCallback() {
        this.setTitle();
        this.setCurrency();
        this.slotElement.addEventListener("slotchange", () => {
            const nodes = this.slotElement.assignedNodes();
            const content = nodes[0].textContent.replace(/,/g, '');
            const balance = parseFloat(content);
            if (isNaN(balance))
                return;
            if (balance >= 1000000)
                this.figureSpan.classList.add("small");
            else if (balance >= 100000)
                this.figureSpan.classList.add("medium");
        });
    }
    attributeChangedCallback(name) {
        switch (name) {
            case "data-title":
                this.setTitle();
                break;
            case "data-currency":
                this.setCurrency();
                break;
        }
    }
    setTitle() {
        this.titleSpan.innerHTML = this.title;
    }
    setCurrency() {
        this.setAttribute("class", `figure currency-${this.currency}`);
    }
};
CardBalance.styles = `
        :host {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 5px;
        }

        .title {
            color: #ffffffcc;
            font-size: 13px;
            height: 13px;
            margin: 0;
        }
        
        .figure {
            font-size: 18px;
            font-weight: 500;
            height: 20px;
            line-height: 20px;
        }

        .figure.medium {
            font-size: 16px;
        }

        .figure.small {
            font-size: 15px;
        }

        .figure::after {
            display: inline-block;
            color: #ffffff80;
            font-size: 13px;
            font-weight: 500;
            line-height: 13px;
            margin-left: 5px;
            vertical-align: top;
        }

        .figure.medium::after {
            font-size: 12px;
            margin-left: 4px;
        }

        .figure.small::after {
            font-size: 11px;
            margin-left: 0;
        }

        .currency-php::after {
            content: "PHP";
        }
    `;
CardBalance = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_0__.customComponent)('card-balance')
], CardBalance);



/***/ }),

/***/ "./src/scripts/components/context-menu.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/context-menu.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu),
/* harmony export */   ContextMenuGlobal: () => (/* binding */ ContextMenuGlobal),
/* harmony export */   ContextMenuOption: () => (/* binding */ ContextMenuOption),
/* harmony export */   globalContext: () => (/* binding */ globalContext)
/* harmony export */ });
// Written by Gary Antier 2020
// Current version: 1.2.0.1
const ContextMargin = 3;
const ContextTopOffset = 7;
class ContextMenuOption {
    constructor(label) {
        this.label = label;
        this.callbacks = [];
        this.enableChallenge = () => true;
        this.visibleChallenge = () => true;
    }
    onClick(callback) {
        this.callbacks.push(callback);
    }
    visible(challenge) {
        this.visibleChallenge = challenge;
    }
    enable(challenge) {
        this.enableChallenge = challenge;
    }
    draw(data) {
        if (!this.visibleChallenge(data))
            return;
        const option = document.createElement('button');
        option.innerText = this.label;
        option.classList.add('core-context-action');
        option.disabled = !this.enableChallenge(data);
        option.addEventListener('click', () => {
            this.callbacks.forEach(callback => callback(data));
        });
        return option;
    }
}
class ContextMenu {
    constructor(id, root) {
        this.id = id;
        this.root = root;
        this.options = [];
        this.data = [];
    }
    addOption(option) {
        this.options.push(option);
    }
    addOptions(...options) {
        options.forEach(option => this.options.push(option));
    }
    draw(dataIndex) {
        const data = this.data[dataIndex];
        const options = [];
        this.options.forEach(option => {
            options.push(option.draw(data));
        });
        return options;
    }
    addData(data) {
        return this.data.push(data) - 1;
    }
    clearData() {
        this.data = [];
    }
}
class ContextMenuGlobal {
    constructor() {
        this.element = document.createElement('div');
        this.menus = {};
        this.activeTrigger;
        this.triggerTop;
        this.triggerLeft;
        this.init();
        this.initEventListeners();
    }
    init() {
        this.element.classList.add('core-context');
        document.body.appendChild(this.element);
        Object.defineProperty(Node.prototype, 'addContext', { value: function (context, data) {
                const target = this;
                const dataIndex = context.addData(data);
                target.dataset.contextId = context.id;
                target.dataset.index = dataIndex;
                return this;
            } });
    }
    initEventListeners() {
        document.addEventListener('contextmenu', this.onContext.bind(this));
        document.addEventListener('click', this.onClick.bind(this));
    }
    addMenu(id, root) {
        const menu = new ContextMenu(id, root);
        this.menus[id] = menu;
        return menu;
    }
    onContext(e) {
        let target;
        let isDocument = false;
        let contextId;
        let dataIndex;
        do {
            if (target) {
                target = target === null || target === void 0 ? void 0 : target.parentNode;
            }
            else {
                target = e.target;
            }
            isDocument = target === document;
            contextId = !isDocument ? target.getAttribute("data-context-id") : null;
        } while (!isDocument && !contextId);
        dataIndex = target.dataset.index;
        if (contextId) {
            e.preventDefault();
            this.reset();
            this.activeTrigger = target;
            this.triggerTop = e.clientY;
            this.triggerLeft = e.clientX;
            this.show(contextId, dataIndex);
            target.classList.add('active');
        }
    }
    onClick(e) {
        if (e.target.isSameNode(this.element) == false) {
            this.reset();
        }
    }
    show(contextId, dataIndex) {
        const menu = this.menus[contextId];
        const options = menu.draw(dataIndex);
        options.forEach(option => {
            if (option) {
                this.element.appendChild(option);
            }
        });
        // Bounds...
        const root = menu.root;
        const { left, top, right, bottom } = root.getBoundingClientRect();
        let rootTop = top + ContextMargin;
        let rootRight = right - ContextMargin;
        let rootBottom = bottom - ContextMargin;
        let rootLeft = left + ContextMargin;
        // Contexts...
        const { height, width } = this.element.getBoundingClientRect();
        let contextTop = this.triggerTop - ContextTopOffset;
        let contextLeft = this.triggerLeft;
        let contextBottom = contextTop + height;
        let contextRight = contextLeft + height;
        // X-limit bounds.
        if (contextLeft < rootLeft) {
            contextLeft = rootLeft;
        }
        else if (contextRight > rootRight) {
            contextLeft = rootRight - width;
        }
        // Y-limit bounds.
        if (contextTop < rootTop) {
            contextTop = rootTop;
        }
        else if (contextBottom > rootBottom) {
            contextTop = rootBottom - height;
        }
        this.element.classList.add('active');
        this.element.style.top = `${contextTop}px`;
        this.element.style.left = `${contextLeft}px`;
    }
    reset() {
        var _a;
        this.element.innerHTML = null;
        this.element.classList.remove('active');
        this.element.setAttribute('style', null);
        (_a = this.activeTrigger) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        this.activeTrigger = undefined;
        this.triggerTop = undefined;
        this.triggerLeft = undefined;
    }
}
const globalContext = new ContextMenuGlobal();


/***/ }),

/***/ "./src/scripts/components/index.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountCard: () => (/* reexport safe */ _account_card__WEBPACK_IMPORTED_MODULE_0__.AccountCard),
/* harmony export */   ActionButton: () => (/* reexport safe */ _action_button__WEBPACK_IMPORTED_MODULE_1__.ActionButton),
/* harmony export */   CardBalance: () => (/* reexport safe */ _card_balance__WEBPACK_IMPORTED_MODULE_2__.CardBalance),
/* harmony export */   ContextMenu: () => (/* reexport safe */ _context_menu__WEBPACK_IMPORTED_MODULE_3__.ContextMenu),
/* harmony export */   ContextMenuGlobal: () => (/* reexport safe */ _context_menu__WEBPACK_IMPORTED_MODULE_3__.ContextMenuGlobal),
/* harmony export */   ContextMenuOption: () => (/* reexport safe */ _context_menu__WEBPACK_IMPORTED_MODULE_3__.ContextMenuOption),
/* harmony export */   Modal: () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_4__.Modal),
/* harmony export */   ModalSpace: () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_4__.ModalSpace),
/* harmony export */   PageIndicator: () => (/* reexport safe */ _page_indicator__WEBPACK_IMPORTED_MODULE_5__.PageIndicator),
/* harmony export */   SnapView: () => (/* reexport safe */ _snap_view__WEBPACK_IMPORTED_MODULE_6__.SnapView),
/* harmony export */   SnapViewPanel: () => (/* reexport safe */ _snap_view__WEBPACK_IMPORTED_MODULE_6__.SnapViewPanel),
/* harmony export */   TransactionPanel: () => (/* reexport safe */ _transaction_panel__WEBPACK_IMPORTED_MODULE_7__.TransactionPanel),
/* harmony export */   WalletCard: () => (/* reexport safe */ _wallet_card__WEBPACK_IMPORTED_MODULE_8__.WalletCard),
/* harmony export */   globalContext: () => (/* reexport safe */ _context_menu__WEBPACK_IMPORTED_MODULE_3__.globalContext)
/* harmony export */ });
/* harmony import */ var _account_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-card */ "./src/scripts/components/account-card.ts");
/* harmony import */ var _action_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-button */ "./src/scripts/components/action-button.ts");
/* harmony import */ var _card_balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-balance */ "./src/scripts/components/card-balance.ts");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu */ "./src/scripts/components/context-menu.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/scripts/components/modal.ts");
/* harmony import */ var _page_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-indicator */ "./src/scripts/components/page-indicator.ts");
/* harmony import */ var _snap_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snap-view */ "./src/scripts/components/snap-view.ts");
/* harmony import */ var _transaction_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-panel */ "./src/scripts/components/transaction-panel.ts");
/* harmony import */ var _wallet_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet-card */ "./src/scripts/components/wallet-card.ts");











/***/ }),

/***/ "./src/scripts/components/modal.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/modal.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalSpace: () => (/* binding */ ModalSpace)
/* harmony export */ });
var modalSpace;
class ModalSpace {
    constructor() {
        this.root = document.querySelector(".modal-space");
        this.stack = [];
    }
    addStack(modal) {
        let stack = this.stack;
        let exists = stack.indexOf(modal) > -1;
        let length = stack.length;
        if (!exists) {
            stack.push(modal);
            if (length === 0) {
                this.root.classList.add('active');
            }
        }
    }
    removeStack(modal) {
        let stack = this.stack;
        let exists = stack.indexOf(modal) > -1;
        let length = stack.length;
        if (exists) {
            stack.pop();
            if (length === 1) {
                this.root.classList.remove('active');
            }
        }
    }
}
class Modal {
    constructor(selector) {
        var _a;
        modalSpace = modalSpace !== null && modalSpace !== void 0 ? modalSpace : new ModalSpace();
        let root = document.getElementById(selector);
        let modal = root.querySelector(".modal-container");
        let closeActions = modal.querySelectorAll(".modal-action[data-role=close]");
        let terminable = (_a = root.getAttribute("data-terminable") === "true") !== null && _a !== void 0 ? _a : false;
        root.addEventListener("click", e => {
            if (terminable) {
                this.hide();
            }
        });
        modal.addEventListener("click", e => e.stopPropagation());
        closeActions.forEach(action => {
            action.addEventListener("click", e => this.hide());
        });
        this.id = selector;
        this.space = modalSpace;
        this.root = root;
        this.modal = modal;
        this.closeActions = closeActions;
    }
    show() {
        let root = this.root;
        let space = this.space;
        root.classList.add('active');
        root.style.zIndex = space.stack.length.toString();
        space.addStack(this.id);
    }
    hide() {
        this.root.classList.remove('active');
        this.space.removeStack(this.id);
    }
}


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



/***/ }),

/***/ "./src/scripts/components/transaction-panel.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/components/transaction-panel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionPanel: () => (/* binding */ TransactionPanel)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/classes */ "./src/scripts/classes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TransactionPanel = class TransactionPanel extends _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.CustomComponent {
    constructor() {
        super();
        this._overlay = { alpha: 0.0 };
    }
    /* DOM */
    get panel() {
        var _a;
        (_a = this._panel) !== null && _a !== void 0 ? _a : (this._panel = this.shadowRoot.querySelector(".panel"));
        return this._panel;
    }
    render() {
        return `
            <div class="panel">
                <div class="handle-bar"></div>
                <slot></slot>
            </div>
        `;
    }
    connectedCallback() {
        this.addEventListener('click', this.hide);
        this.panel.addEventListener('click', () => this._clickedThroughPanel = true);
    }
    show() {
        this.classList.add('visible');
        this.transition(true, 0.1);
    }
    hide() {
        if (this._clickedThroughPanel) {
            this._clickedThroughPanel = false;
            return;
        }
        this.transition(false, 0);
    }
    transition(show, alpha) {
        const timeline = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            duration: 300,
            easing: "easeOutQuint",
            update: () => this.changeTheme(),
            complete: () => {
                if (!show) {
                    this.classList.remove("visible");
                }
            }
        });
        // Panel
        const panelAnim = { targets: this.panel };
        if (window.innerWidth < 768)
            panelAnim.top = show ? 22 : window.innerHeight;
        else
            panelAnim.right = show ? 15 : -531; // TODO: Dynamic?
        timeline.add(panelAnim, 0);
        // Overlay
        const background = `rgba(0, 0, 0, ${alpha})`;
        timeline.add({ targets: this, background: background }, 0);
        // Theme
        // FIXME: Flicker on show first attempt.
        const overlayAnim = { targets: this._overlay, alpha: alpha };
        timeline.add(overlayAnim, 0);
    }
    changeTheme() {
        const theme = (0,_classes__WEBPACK_IMPORTED_MODULE_2__.computeAlphaBlend)("f2f2f2", "000000", this._overlay.alpha);
        document.querySelector('meta[name="theme-color"]')
            .setAttribute("content", theme);
    }
};
TransactionPanel.styles = `
        :host {
            --radius: 5px;
            --radius-mob: 15px;
            --margin: 15px;
            --top: calc(44px / 2);
            --width: 500px;
        }
        
        :host {
            background-color: rgba(0, 0, 0, 0.1);
            display: none;
            height: 100%;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 4;
        }

        :host(.visible) {
            display: block;
        }
        
        .panel {
            background-color: #fff;
            border-top-left-radius: var(--radius-mob);
            border-top-right-radius: var(--radius-mob);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 calc(32 * 0.5px) calc((32 * 1px)) rgba(0, 0, 0, 0.24);
            overflow: hidden;
            position: absolute;
            right: 0;
            top: 100%;
            height: calc(100% - var(--top));
            width: 100%;
        }

        .handle-bar {
            align-items: center;
            display: flex;
            height: 20px;
            justify-content: center;
            width: 100%;
        }

        .handle-bar::before {
            background-color: rgba(194, 194, 194, 1);
            border-radius: 4px;
            content: "";
            display: block;
            height: 6px;
            width: 100px;
        }

        slot {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 15px;
            height: calc(100% - 20px);
            max-height: 100%;
            padding-top: 10px;
        }
        
        /* Tablet & Up */
        @media only screen and (min-width: 768px) {
            .panel {
                border-radius: var(--radius);
                height: calc(100% - var(--margin) * 2);
                right: calc(var(--width) * -1);
                top: var(--margin);
                width: 500px;
            }
            
            .handle-bar::before {
                display: none;
            }
        }
    `;
TransactionPanel = __decorate([
    (0,_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__.customComponent)('transaction-panel'),
    __metadata("design:paramtypes", [])
], TransactionPanel);



/***/ }),

/***/ "./src/scripts/components/wallet-card.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/wallet-card.ts ***!
  \***********************************************/
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



/***/ }),

/***/ "./src/scripts/enums/entity-status.ts":
/*!********************************************!*\
  !*** ./src/scripts/enums/entity-status.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityStatus: () => (/* binding */ EntityStatus)
/* harmony export */ });
var EntityStatus;
(function (EntityStatus) {
    EntityStatus[EntityStatus["Closed"] = 0] = "Closed";
    EntityStatus[EntityStatus["Active"] = 1] = "Active";
})(EntityStatus || (EntityStatus = {}));


/***/ }),

/***/ "./src/scripts/enums/index.ts":
/*!************************************!*\
  !*** ./src/scripts/enums/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityStatus: () => (/* reexport safe */ _entity_status__WEBPACK_IMPORTED_MODULE_0__.EntityStatus),
/* harmony export */   Operation: () => (/* reexport safe */ _operation__WEBPACK_IMPORTED_MODULE_1__.Operation),
/* harmony export */   TransactionType: () => (/* reexport safe */ _transaction_type__WEBPACK_IMPORTED_MODULE_2__.TransactionType)
/* harmony export */ });
/* harmony import */ var _entity_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-status */ "./src/scripts/enums/entity-status.ts");
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation */ "./src/scripts/enums/operation.ts");
/* harmony import */ var _transaction_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-type */ "./src/scripts/enums/transaction-type.ts");





/***/ }),

/***/ "./src/scripts/enums/operation.ts":
/*!****************************************!*\
  !*** ./src/scripts/enums/operation.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Operation: () => (/* binding */ Operation)
/* harmony export */ });
var Operation;
(function (Operation) {
    Operation[Operation["Create"] = 0] = "Create";
    Operation[Operation["Update"] = 1] = "Update";
})(Operation || (Operation = {}));


/***/ }),

/***/ "./src/scripts/enums/transaction-type.ts":
/*!***********************************************!*\
  !*** ./src/scripts/enums/transaction-type.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionType: () => (/* binding */ TransactionType)
/* harmony export */ });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Deposit"] = 0] = "Deposit";
    TransactionType[TransactionType["Withdraw"] = 1] = "Withdraw";
    TransactionType[TransactionType["Transfer"] = 2] = "Transfer";
})(TransactionType || (TransactionType = {}));


/***/ }),

/***/ "./src/scripts/services/account-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/account-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-base */ "./src/scripts/services/service-base.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AccountService = class AccountService extends _service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const { data } = await this._connection.get(endpoint);
        return data;
    }
    async create(data) {
        const endpoint = this.endpoint('create.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    async update(data) {
        const endpoint = this.endpoint('update.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    // TODO: Use JSON
    async close(id) {
        const endpoint = this.endpoint('close.php');
        const data = new FormData();
        data.append('Id', id.toString());
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    // TODO: Use JSON
    async remove(id) {
        const endpoint = this.endpoint('delete.php');
        const data = new FormData();
        data.append('Id', id.toString());
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
};
AccountService = __decorate([
    (0,_service_base__WEBPACK_IMPORTED_MODULE_0__.service)('/account/crud')
], AccountService);



/***/ }),

/***/ "./src/scripts/services/category-service.ts":
/*!**************************************************!*\
  !*** ./src/scripts/services/category-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-base */ "./src/scripts/services/service-base.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CategoryService = class CategoryService extends _service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const { data } = await this._connection.get(endpoint);
        return data;
    }
    async create(data) {
        const endpoint = this.endpoint('create.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    async update(data) {
        const endpoint = this.endpoint('update.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    async remove(id) {
        const endpoint = this.endpoint('delete.php');
        const data = new FormData();
        data.append('Id', id.toString());
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
};
CategoryService = __decorate([
    (0,_service_base__WEBPACK_IMPORTED_MODULE_0__.service)('/category/crud')
], CategoryService);



/***/ }),

/***/ "./src/scripts/services/index.ts":
/*!***************************************!*\
  !*** ./src/scripts/services/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* reexport safe */ _account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService),
/* harmony export */   CategoryService: () => (/* reexport safe */ _category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService),
/* harmony export */   UserService: () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService)
/* harmony export */ });
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-service */ "./src/scripts/services/account-service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-service */ "./src/scripts/services/category-service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-service */ "./src/scripts/services/user-service.ts");





/***/ }),

/***/ "./src/scripts/services/service-base.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/service-base.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceBase: () => (/* binding */ ServiceBase),
/* harmony export */   service: () => (/* binding */ service)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

class ServiceBase {
    constructor() {
        this._connection = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create();
    }
    endpoint(path) {
        const baseURL = this._baseURL;
        return `${baseURL}/${path}`;
    }
}
function service(baseURL) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this._baseURL = baseURL;
            }
        };
    };
}


/***/ }),

/***/ "./src/scripts/services/user-service.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/user-service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-base */ "./src/scripts/services/service-base.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UserService = class UserService extends _service_base__WEBPACK_IMPORTED_MODULE_0__.ServiceBase {
    async get() {
        const endpoint = this.endpoint('read.php');
        const { data } = await this._connection.get(endpoint);
        return data;
    }
    async create(data) {
        const endpoint = this.endpoint('create.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    async update(data) {
        const endpoint = this.endpoint('update.php');
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
    async remove(id) {
        const endpoint = this.endpoint('delete.php');
        const data = new FormData();
        data.append('Id', id.toString());
        const { data: payload } = await this._connection.post(endpoint, data);
        return payload;
    }
};
UserService = __decorate([
    (0,_service_base__WEBPACK_IMPORTED_MODULE_0__.service)('/user/crud')
], UserService);



/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv) {
      withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.6.2";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/common/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();




/***/ }),

/***/ "./node_modules/axios/lib/platform/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


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
/*!**********************************!*\
  !*** ./src/app/home/view.php.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_dashboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/dashboard.scss */ "./src/styles/dashboard.scss");
/* harmony import */ var _sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/fluent-icon-element-component */ "./node_modules/@sagemodeninja/fluent-icon-element-component/dist/fluent-icon-element-component.js");
/* harmony import */ var _sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sagemodeninja/fluent-command-bar-component */ "./node_modules/@sagemodeninja/fluent-command-bar-component/dist/fluent-command-bar-component.js");
/* harmony import */ var _sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./src/scripts/components/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/classes */ "./src/scripts/classes/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services */ "./src/scripts/services/index.ts");








class DashboardView {
    constructor() {
        (0,_classes__WEBPACK_IMPORTED_MODULE_4__.useNavigation)();
        this.body = document.querySelector('#layout_body');
        this.refreshCommand = document.querySelector('#refresh_command');
        this.toggleCommand = document.querySelector('#toggle_closed_command');
        this.transactionPanel = document.querySelector('#transaction_panel');
        this.transaction = new _classes__WEBPACK_IMPORTED_MODULE_4__.TransactionManager();
        this.closedAccounts = [];
        this.transaction.card = document.querySelector("#transaction_card");
        this.transaction.actions = document.querySelectorAll("action-button");
        this.transaction.container = document.querySelector(".transaction-container");
        this.transaction.editor = document.querySelector("#editor_dialog");
        this.initContextMenu();
        this.addEventListeners();
    }
    refresh() {
        this.refreshAccounts();
    }
    initContextMenu() {
        this.contextMenu = _components__WEBPACK_IMPORTED_MODULE_3__.globalContext.addMenu('accounts_card', this.body);
        // Context menu options...
        const closeOption = new _components__WEBPACK_IMPORTED_MODULE_3__.ContextMenuOption('Close');
        const deleteOption = new _components__WEBPACK_IMPORTED_MODULE_3__.ContextMenuOption('Delete');
        closeOption.visible(d => d.Status === 'Active');
        deleteOption.visible(d => d.Status === 'Active');
        closeOption.onClick(async (acct) => {
            const response = confirm(`Close account \"${acct.Title}\"?`);
            if (!response)
                return;
            const service = new _services__WEBPACK_IMPORTED_MODULE_5__.AccountService();
            const payload = await service.close(acct.Id);
            if (!payload.state) {
                alert(payload.content);
                return;
            }
            // TODO: Fix this!
            // refreshCategories();
        });
        deleteOption.onClick(async (acct) => {
            const response = confirm(`Delete account \"${acct.Title}\"?`);
            if (!response)
                return;
            const service = new _services__WEBPACK_IMPORTED_MODULE_5__.AccountService();
            const payload = await service.remove(acct.Id);
            if (!payload.state) {
                alert(payload.content);
                return;
            }
            // TODO: Fix this!
            // refreshCategories();
        });
        this.contextMenu.addOptions(closeOption, deleteOption);
    }
    addEventListeners() {
        var _a, _b;
        (_a = this.refreshCommand) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.refreshAccounts.bind(this));
        (_b = this.toggleCommand) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.onToggleClick.bind(this));
    }
    refreshAccounts() {
        this.body.innerHTML = '<p style="text-align: center;">Fetching Accounts...</p>';
        axios__WEBPACK_IMPORTED_MODULE_6__["default"].get("account/crud/read_categorized.php")
            .then(response => {
            this.body.innerHTML = null;
            let accounts = response.data;
            if (accounts.state) {
                let content = accounts.content;
                let categories = content.reduce((arr, acct) => {
                    let categoryId = acct.CategoryId;
                    if (!arr.some(cat => cat.Id == acct.CategoryId))
                        arr.push({
                            Id: categoryId,
                            Title: acct.Category,
                            Color: acct.CategoryColor
                        });
                    return arr;
                }, []);
                let categorized = content.reduce((map, acct) => { var _a; return map.set(acct.CategoryId, [...(_a = map.get(acct.CategoryId)) !== null && _a !== void 0 ? _a : [], acct]); }, new Map());
                this.refreshBalances(categories, categorized);
            }
            else {
                this.body.innerHTML = `<p class="centered">Oops! ${accounts.content}</p>`;
            }
        })
            .catch(error => {
            console.dir(error);
        });
    }
    refreshBalances(categories, categorized) {
        categorized.forEach((accounts, _category) => {
            var _a, _b, _c;
            let category = (_a = categories.find(cat => cat.Id == _category)) !== null && _a !== void 0 ? _a : {};
            let color = (_b = category === null || category === void 0 ? void 0 : category.Color) !== null && _b !== void 0 ? _b : "9E9E9E";
            let title = (_c = category === null || category === void 0 ? void 0 : category.Title) !== null && _c !== void 0 ? _c : "Uncategorized";
            const container = document.createElement('div');
            const accountsGrid = document.createElement('div');
            const tag = document.createElement('fluent-symbol-icon');
            const label = document.createElement('span');
            container.classList.add('category');
            accountsGrid.classList.add('accounts-grid');
            tag.setAttribute('symbol', 'Tag');
            tag.setAttribute('foreground', `#${color}`);
            tag.setAttribute('font-size', '13');
            tag.classList.add('tag');
            label.classList.add('title');
            this.body.appendChild(container);
            this.body.appendChild(accountsGrid);
            container.append(tag);
            container.append(label);
            accounts.forEach(account => {
                const card = this.newCard(account, title);
                accountsGrid.append(card);
            });
        });
    }
    newCard(account, category) {
        var _a, _b;
        let accountNumber = (_b = (_a = account.AccountNumber) === null || _a === void 0 ? void 0 : _a.slice(-4)) !== null && _b !== void 0 ? _b : "••••";
        let bankIcon = account.BankIcon;
        const card = document.createElement('account-card');
        const runningBalance = document.createElement('card-balance');
        const projectedBalance = document.createElement('card-balance');
        const accountBankIcon = document.createElement('img');
        runningBalance.innerText = '...';
        projectedBalance.innerText = '...';
        accountBankIcon.classList.add('account-bank-icon');
        accountBankIcon.slot = 'icon';
        card.append(runningBalance);
        card.append(projectedBalance);
        card.append(accountBankIcon);
        card.title = account.Title;
        card.number = accountNumber;
        card.category = category;
        runningBalance.title = 'Actual';
        projectedBalance.title = 'Projection';
        if (bankIcon != null) {
            accountBankIcon.src = `assets/images/bank_icons/${bankIcon}.svg`;
            if (bankIcon == "master_card")
                accountBankIcon.setAttribute('style', "bottom:16px;height:35px;");
            if (bankIcon == "ubp" || bankIcon == "gcash")
                accountBankIcon.setAttribute('style', "bottom:20px;height:30px;right:25px;");
            if (bankIcon == "cimb")
                accountBankIcon.setAttribute('style', "bottom:20px;height:28px;right:25px;");
        }
        // Context menu...
        card.addContext(this.contextMenu, account);
        // Visibility...
        if (account.Status !== 'Active') {
            this.closedAccounts.push(card);
            card.style.display = 'none';
        }
        axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/account/balance.php?accountId=${account.Id}`)
            .then(response => {
            const payload = response.data;
            if (payload.state) {
                let balances = payload.content;
                runningBalance.innerText = (0,_classes__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(balances.Balance);
                projectedBalance.innerText = (0,_classes__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(balances.Projection);
            }
            else {
                runningBalance.innerText = '!';
                projectedBalance.innerText = '!';
                console.error(payload.content);
            }
        });
        card.addEventListener('click', () => {
            this.transactionPanel.show();
            this.transaction.loadAccount(account);
        });
        return card;
    }
    onToggleClick() {
        console.log('1');
        this.toggleCommand.icon = this.isShowClosed ? 'View' : 'Hide';
        this.toggleCommand.label = this.isShowClosed ? 'Show Closed Accounts' : 'Hide Closed Accounts';
        this.closedAccounts.forEach(card => {
            if (this.isShowClosed)
                card.hide();
            else
                card.show();
        });
        this.isShowClosed = !this.isShowClosed;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const view = new DashboardView();
    view.refresh();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsOENBQThDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUseUNBQXlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsdUNBQXVDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMENBQTBDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUseUJBQXlCLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0JBQXdCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsMkNBQTJDLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMENBQTBDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscURBQXFELEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMkNBQTJDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsOENBQThDLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsZ0RBQWdELEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsMkNBQTJDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsd0JBQXdCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscURBQXFELEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsNENBQTRDLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsNkNBQTZDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsNENBQTRDLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0RBQWtELEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsd0NBQXdDLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUsd0NBQXdDLEVBQUUsMkNBQTJDLEVBQUUsMkNBQTJDLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMENBQTBDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsK0NBQStDLEVBQUUsK0NBQStDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsZ0RBQWdELEVBQUUsOEJBQThCLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsMENBQTBDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaURBQWlELEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsaURBQWlELEVBQUUsK0NBQStDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsd0JBQXdCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUseUNBQXlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaURBQWlELEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsK0NBQStDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsb0RBQW9ELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUsNkRBQTZELEVBQUUsMkNBQTJDLEVBQUUsbURBQW1ELEVBQUUsbURBQW1ELEVBQUUsMkRBQTJELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsNENBQTRDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsK0NBQStDLEVBQUUsaURBQWlELEVBQUUsOENBQThDLEVBQUUsZ0NBQWdDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsK0NBQStDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsMkNBQTJDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTHZCLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNtRjtBQUNuRiw4Q0FBOEMsNEVBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUV4QixrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDbUY7QUFDbkYsNENBQTRDLDRFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0l2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzND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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxT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QTZDLG9EQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50L2Rpc3QvY3VzdG9tLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQvZGlzdC9mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQvZGlzdC9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc3R5bGVzL2Rhc2hib2FyZC5zY3NzP2E0NmUiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvYWxwaGEtYmxlbmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvY3VycmVuY3kudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvZGF0ZS10aW1lLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jbGFzc2VzL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jbGFzc2VzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvcmVzcG9uc2UtcGF5bG9hZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy90cmFuc2FjdGlvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnQtY2FyZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NhcmQtYmFsYW5jZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jb250ZXh0LW1lbnUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3IudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc25hcC12aWV3LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3RyYW5zYWN0aW9uLXBhbmVsLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy9lbnRpdHktc3RhdHVzLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvZW51bXMvb3BlcmF0aW9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy90cmFuc2FjdGlvbi10eXBlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9hY2NvdW50LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2NhdGVnb3J5LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9zZXJ2aWNlLWJhc2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL2FwcC9ob21lL3ZpZXcucGhwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBGb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGN1c3RvbS1jb21wb25lbnQuanMuTElDRU5TRS50eHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PWUoKTp0LkN1c3RvbUNvbXBvbmVudD1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17NjYwOih0LGUscik9Pnt2YXIgbjshZnVuY3Rpb24odCl7IWZ1bmN0aW9uKGUpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiByLmc/ci5nOlwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIHRoaXM/dGhpczpGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpLG89aSh0KTtmdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7XCJmdW5jdGlvblwiIT10eXBlb2YgdFtyXSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KSxlJiZlKHIsbil9fXZvaWQgMD09PW4uUmVmbGVjdD9uLlJlZmxlY3Q9dDpvPWkobi5SZWZsZWN0LG8pLGZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wsbj1yJiZ2b2lkIDAhPT1TeW1ib2wudG9QcmltaXRpdmU/U3ltYm9sLnRvUHJpbWl0aXZlOlwiQEB0b1ByaW1pdGl2ZVwiLG89ciYmdm9pZCAwIT09U3ltYm9sLml0ZXJhdG9yP1N5bWJvbC5pdGVyYXRvcjpcIkBAaXRlcmF0b3JcIixpPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5jcmVhdGUsdT17X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXksYT0haSYmIXUscz17Y3JlYXRlOmk/ZnVuY3Rpb24oKXtyZXR1cm4gSChPYmplY3QuY3JlYXRlKG51bGwpKX06dT9mdW5jdGlvbigpe3JldHVybiBIKHtfX3Byb3RvX186bnVsbH0pfTpmdW5jdGlvbigpe3JldHVybiBIKHt9KX0saGFzOmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscil9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUgaW4gdH0sZ2V0OmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscik/dFtyXTp2b2lkIDB9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV19fSxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbiksZj1cIm9iamVjdFwiPT10eXBlb2YgcHJvY2VzcyYmcHJvY2Vzcy5lbnYmJlwidHJ1ZVwiPT09cHJvY2Vzcy5lbnYuUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMLGg9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXt2YXIgdD17fSxlPVtdLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt0aGlzLl9pbmRleD0wLHRoaXMuX2tleXM9dCx0aGlzLl92YWx1ZXM9ZSx0aGlzLl9zZWxlY3Rvcj1yfXJldHVybiB0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2luZGV4O2lmKHQ+PTAmJnQ8dGhpcy5fa2V5cy5sZW5ndGgpe3ZhciByPXRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbdF0sdGhpcy5fdmFsdWVzW3RdKTtyZXR1cm4gdCsxPj10aGlzLl9rZXlzLmxlbmd0aD8odGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKTp0aGlzLl9pbmRleCsrLHt2YWx1ZTpyLGRvbmU6ITF9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19LHQucHJvdG90eXBlLnRocm93PWZ1bmN0aW9uKHQpe3Rocm93IHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx0fSx0LnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx7dmFsdWU6dCxkb25lOiEwfX0sdH0oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5fa2V5cz1bXSx0aGlzLl92YWx1ZXM9W10sdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ZpbmQodCwhMSk+PTB9LGUucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9maW5kKHQsITEpO3JldHVybiBlPj0wP3RoaXMuX3ZhbHVlc1tlXTp2b2lkIDB9LGUucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX2ZpbmQodCwhMCk7cmV0dXJuIHRoaXMuX3ZhbHVlc1tyXT1lLHRoaXN9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgcj10aGlzLl9maW5kKGUsITEpO2lmKHI+PTApe2Zvcih2YXIgbj10aGlzLl9rZXlzLmxlbmd0aCxvPXIrMTtvPG47bysrKXRoaXMuX2tleXNbby0xXT10aGlzLl9rZXlzW29dLHRoaXMuX3ZhbHVlc1tvLTFdPXRoaXMuX3ZhbHVlc1tvXTtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGgtLSx0aGlzLl92YWx1ZXMubGVuZ3RoLS0sZT09PXRoaXMuX2NhY2hlS2V5JiYodGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yKSwhMH1yZXR1cm4hMX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXlzLmxlbmd0aD0wLHRoaXMuX3ZhbHVlcy5sZW5ndGg9MCx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9LGUucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsbil9LGUucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxpKX0sZS5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyx1KX0sZS5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGUuX2ZpbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fY2FjaGVLZXkhPT10JiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXk9dCkpLHRoaXMuX2NhY2hlSW5kZXg8MCYmZSYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5sZW5ndGgsdGhpcy5fa2V5cy5wdXNoKHQpLHRoaXMuX3ZhbHVlcy5wdXNoKHZvaWQgMCkpLHRoaXMuX2NhY2hlSW5kZXh9LGV9KCk7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0fWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuW3QsZV19fSgpOk1hcCxwPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldHx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX21hcD1uZXcgaH1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuaGFzKHQpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5zZXQodCx0KSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5kZWxldGUodCl9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fbWFwLmNsZWFyKCl9LHQucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmtleXMoKX0sdC5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKX0sdC5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuZW50cmllcygpfSx0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0fSgpOlNldCxsPW5ldyhmfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBXZWFrTWFwP2Z1bmN0aW9uKCl7dmFyIHQ9MTYscj1zLmNyZWF0ZSgpLG49bygpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9rZXk9bygpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmcy5oYXMoZSx0aGlzLl9rZXkpfSx0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZT9zLmdldChlLHRoaXMuX2tleSk6dm9pZCAwfSx0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaSh0LCEwKVt0aGlzLl9rZXldPWUsdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJmRlbGV0ZSBlW3RoaXMuX2tleV19LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5PW8oKX0sdH0oKTtmdW5jdGlvbiBvKCl7dmFyIHQ7ZG97dD1cIkBAV2Vha01hcEBAXCIrYSgpfXdoaWxlKHMuaGFzKHIsdCkpO3JldHVybiByW3RdPSEwLHR9ZnVuY3Rpb24gaSh0LHIpe2lmKCFlLmNhbGwodCxuKSl7aWYoIXIpcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOnMuY3JlYXRlKCl9KX1yZXR1cm4gdFtuXX1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciByPTA7cjxlOysrcil0W3JdPTI1NSpNYXRoLnJhbmRvbSgpfDA7cmV0dXJuIHR9ZnVuY3Rpb24gYSgpe3ZhciBlLHI9KGU9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBVaW50OEFycmF5P1widW5kZWZpbmVkXCIhPXR5cGVvZiBjcnlwdG8/Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1zQ3J5cHRvP21zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6dShuZXcgVWludDhBcnJheShlKSxlKTp1KG5ldyBBcnJheShlKSxlKSk7cls2XT03OSZyWzZdfDY0LHJbOF09MTkxJnJbOF18MTI4O2Zvcih2YXIgbj1cIlwiLG89MDtvPHQ7KytvKXt2YXIgaT1yW29dOzQhPT1vJiY2IT09byYmOCE9PW98fChuKz1cIi1cIiksaTwxNiYmKG4rPVwiMFwiKSxuKz1pLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpfXJldHVybiBufX0oKTpXZWFrTWFwKTtmdW5jdGlvbiB5KHQsZSxyKXt2YXIgbj1sLmdldCh0KTtpZihqKG4pKXtpZighcilyZXR1cm47bj1uZXcgaCxsLnNldCh0LG4pfXZhciBvPW4uZ2V0KGUpO2lmKGoobykpe2lmKCFyKXJldHVybjtvPW5ldyBoLG4uc2V0KGUsbyl9cmV0dXJuIG99ZnVuY3Rpb24gZCh0LGUscil7aWYodih0LGUscikpcmV0dXJuITA7dmFyIG49SShlKTtyZXR1cm4hVChuKSYmZCh0LG4scil9ZnVuY3Rpb24gdih0LGUscil7dmFyIG49eShlLHIsITEpO3JldHVybiFqKG4pJiYhIW4uaGFzKHQpfWZ1bmN0aW9uIF8odCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiBnKHQsZSxyKTt2YXIgbj1JKGUpO3JldHVybiBUKG4pP3ZvaWQgMDpfKHQsbixyKX1mdW5jdGlvbiBnKHQsZSxyKXt2YXIgbj15KGUsciwhMSk7aWYoIWoobikpcmV0dXJuIG4uZ2V0KHQpfWZ1bmN0aW9uIHcodCxlLHIsbil7eShyLG4sITApLnNldCh0LGUpfWZ1bmN0aW9uIGIodCxlKXt2YXIgcj1tKHQsZSksbj1JKHQpO2lmKG51bGw9PT1uKXJldHVybiByO3ZhciBvPWIobixlKTtpZihvLmxlbmd0aDw9MClyZXR1cm4gcjtpZihyLmxlbmd0aDw9MClyZXR1cm4gbztmb3IodmFyIGk9bmV3IHAsdT1bXSxhPTAscz1yO2E8cy5sZW5ndGg7YSsrKXt2YXIgYz1zW2FdO2kuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKX1mb3IodmFyIGY9MCxoPW87ZjxoLmxlbmd0aDtmKyspYz1oW2ZdLGkuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKTtyZXR1cm4gdX1mdW5jdGlvbiBtKHQsZSl7dmFyIHI9W10sbj15KHQsZSwhMSk7aWYoaihuKSlyZXR1cm4gcjtmb3IodmFyIGk9ZnVuY3Rpb24odCl7dmFyIGU9Qyh0LG8pO2lmKCF4KGUpKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9ZS5jYWxsKHQpO2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9KG4ua2V5cygpKSx1PTA7Oyl7dmFyIGE9QShpKTtpZighYSlyZXR1cm4gci5sZW5ndGg9dSxyO3ZhciBzPWEudmFsdWU7dHJ5e3JbdV09c31jYXRjaCh0KXt0cnl7UihpKX1maW5hbGx5e3Rocm93IHR9fXUrK319ZnVuY3Rpb24gTyh0KXtpZihudWxsPT09dClyZXR1cm4gMTtzd2l0Y2godHlwZW9mIHQpe2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiAwO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gMjtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gMztjYXNlXCJzeW1ib2xcIjpyZXR1cm4gNDtjYXNlXCJudW1iZXJcIjpyZXR1cm4gNTtjYXNlXCJvYmplY3RcIjpyZXR1cm4gbnVsbD09PXQ/MTo2O2RlZmF1bHQ6cmV0dXJuIDZ9fWZ1bmN0aW9uIGoodCl7cmV0dXJuIHZvaWQgMD09PXR9ZnVuY3Rpb24gVCh0KXtyZXR1cm4gbnVsbD09PXR9ZnVuY3Rpb24gayh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEUodCxlKXtzd2l0Y2goTyh0KSl7Y2FzZSAwOmNhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6cmV0dXJuIHR9dmFyIHI9Mz09PWU/XCJzdHJpbmdcIjo1PT09ZT9cIm51bWJlclwiOlwiZGVmYXVsdFwiLG89Qyh0LG4pO2lmKHZvaWQgMCE9PW8pe3ZhciBpPW8uY2FsbCh0LHIpO2lmKGsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaX1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiPT09ZSl7dmFyIHI9dC50b1N0cmluZztpZih4KHIpJiYhayhvPXIuY2FsbCh0KSkpcmV0dXJuIG87aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gb31lbHNle3ZhciBuO2lmKHgobj10LnZhbHVlT2YpJiYhayhvPW4uY2FsbCh0KSkpcmV0dXJuIG87dmFyIG8saT10LnRvU3RyaW5nO2lmKHgoaSkmJiFrKG89aS5jYWxsKHQpKSlyZXR1cm4gb310aHJvdyBuZXcgVHlwZUVycm9yfSh0LFwiZGVmYXVsdFwiPT09cj9cIm51bWJlclwiOnIpfWZ1bmN0aW9uIFModCl7dmFyIGU9RSh0LDMpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIit0fShlKX1mdW5jdGlvbiBNKHQpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkodCk6dCBpbnN0YW5jZW9mIE9iamVjdD90IGluc3RhbmNlb2YgQXJyYXk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBQKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gQyh0LGUpe3ZhciByPXRbZV07aWYobnVsbCE9cil7aWYoIXgocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn19ZnVuY3Rpb24gQSh0KXt2YXIgZT10Lm5leHQoKTtyZXR1cm4hZS5kb25lJiZlfWZ1bmN0aW9uIFIodCl7dmFyIGU9dC5yZXR1cm47ZSYmZS5jYWxsKHQpfWZ1bmN0aW9uIEkodCl7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQ9PT1jKXJldHVybiBlO2lmKGUhPT1jKXJldHVybiBlO3ZhciByPXQucHJvdG90eXBlLG49ciYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2lmKG51bGw9PW58fG49PT1PYmplY3QucHJvdG90eXBlKXJldHVybiBlO3ZhciBvPW4uY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8bz09PXQ/ZTpvfWZ1bmN0aW9uIEgodCl7cmV0dXJuIHQuX189dm9pZCAwLGRlbGV0ZSB0Ll9fLHR9dChcImRlY29yYXRlXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKGoocikpe2lmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIVAoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5sZW5ndGgtMTtyPj0wOy0tcil7dmFyIG49KDAsdFtyXSkoZSk7aWYoIWoobikmJiFUKG4pKXtpZighUChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO2U9bn19cmV0dXJuIGV9KHQsZSl9aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKG4pJiYhaihuKSYmIVQobikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChuKSYmKG49dm9pZCAwKSxmdW5jdGlvbih0LGUscixuKXtmb3IodmFyIG89dC5sZW5ndGgtMTtvPj0wOy0tbyl7dmFyIGk9KDAsdFtvXSkoZSxyLG4pO2lmKCFqKGkpJiYhVChpKSl7aWYoIWsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtuPWl9fXJldHVybiBufSh0LGUscj1TKHIpLG4pfSkpLHQoXCJtZXRhZGF0YVwiLChmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWoobikmJiFmdW5jdGlvbih0KXtzd2l0Y2goTyh0KSl7Y2FzZSAzOmNhc2UgNDpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX0obikpdGhyb3cgbmV3IFR5cGVFcnJvcjt3KHQsZSxyLG4pfX0pKSx0KFwiZGVmaW5lTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihuKXx8KG49UyhuKSksdyh0LGUscixuKX0pKSx0KFwiaGFzTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGQodCxlLHIpfSkpLHQoXCJoYXNPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksdih0LGUscil9KSksdChcImdldE1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSxfKHQsZSxyKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGcodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighayh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKGUpfHwoZT1TKGUpKSxiKHQsZSl9KSksdChcImdldE93bk1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLG0odCxlKX0pKSx0KFwiZGVsZXRlTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aihyKXx8KHI9UyhyKSk7dmFyIG49eShlLHIsITEpO2lmKGoobikpcmV0dXJuITE7aWYoIW4uZGVsZXRlKHQpKXJldHVybiExO2lmKG4uc2l6ZT4wKXJldHVybiEwO3ZhciBvPWwuZ2V0KGUpO3JldHVybiBvLmRlbGV0ZShyKSxvLnNpemU+MHx8bC5kZWxldGUoZSksITB9KSl9KG8pfSgpfShufHwobj17fSkpfX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIuZz1mdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzKXJldHVybiBnbG9iYWxUaGlzO3RyeXtyZXR1cm4gdGhpc3x8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3d9fSgpLHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiBmdW5jdGlvbihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXIucihuKSxyLmQobix7Q3VzdG9tQ29tcG9uZW50OigpPT5jLE9CU0VSVkVEX1BST1BFUlRJRVM6KCk9PmksY3VzdG9tQ29tcG9uZW50OigpPT50LHByb3BlcnR5OigpPT51LHF1ZXJ5OigpPT5zLHN0YXRlOigpPT5hfSkscig2NjApO2NvbnN0IGU9bmV3IGNsYXNze2Zyb20odCxlKXtpZih0KXN3aXRjaChlLm5hbWUpe2Nhc2VcIlN0cmluZ1wiOmNhc2VcIk51bWJlclwiOnJldHVybiBlKHQpO2Nhc2VcIkJvb2xlYW5cIjpyZXR1cm4gdCYmXCJ0cnVlXCI9PT10LnRvTG93ZXJDYXNlKCk7ZGVmYXVsdDpyZXR1cm4gSlNPTi5wYXJzZSh0KX19dG8odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/dCYmSlNPTi5zdHJpbmdpZnkodCk6dC50b1N0cmluZygpfX07Y2xhc3Mgb3t9Y29uc3QgaT1TeW1ib2woXCJvYnNlcnZlZF9wcm9wZXJ0aWVzXCIpO2Z1bmN0aW9uIHUodCl7cmV0dXJuIG51bGwhPXR8fCh0PW5ldyBvKSxmdW5jdGlvbihyLG4pe3ZhciBvLHUsYSxzO2NvbnN0IGM9YF8ke259YCxmPW51bGwhPT0obz10LmNvbnZlcnRlcikmJnZvaWQgMCE9PW8/bzplO2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4se2dldDpmdW5jdGlvbigpe2NvbnN0IHQ9UmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsdGhpcyxuKSxlPWYuZnJvbSh0aGlzW2NdLHQpO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbmV3IFByb3h5KHIse3NldDoocixuLG8pPT4ocltuXT1vLEFycmF5LmlzQXJyYXkobykmJlwibGVuZ3RoXCIhPT1ufHx0Lm5vdGlmeVN0YXRlSGFzQ2hhbmdlZChlLG8pLCEwKX0pfSh0aGlzLG4sZSk6ZX0sc2V0OmZ1bmN0aW9uKHQpe2NvbnN0IGU9dGhpc1tuXTtpZih0IT09ZSl7Y29uc3Qgcj1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pO3RoaXNbY109Zi50byh0LHIpLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sZSl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLG51bGw9PT0odT10LmF0dHJpYnV0ZSl8fHZvaWQgMD09PXV8fHUpe2NvbnN0IGU9ci5jb25zdHJ1Y3RvcixvPW51bGwhPT0oYT1SZWZsZWN0LmdldE1ldGFkYXRhKGksZSkpJiZ2b2lkIDAhPT1hP2E6e30sdT1udWxsIT09KHM9dC5hdHRyaWJ1dGUpJiZ2b2lkIDAhPT1zP3M6bixjPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxvKSx7W3UudG9TdHJpbmcoKV06bn0pO1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEoaSxjLGUpfX19ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2F0dHJpYnV0ZTohMX0pKX1mdW5jdGlvbiBzKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcih0KX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19Y2xhc3MgYyBleHRlbmRzIEhUTUxFbGVtZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKGksdGhpcyk7cmV0dXJuIHQ/T2JqZWN0LmtleXModCk6W119Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuX2NoYW5nZXM9bmV3IE1hcDtjb25zdCB0PXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsZSxyKXtjb25zdCBuPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzLmNvbnN0cnVjdG9yKVt0XSxvPXRoaXNbbl07dGhpc1tgXyR7bn1gXT1yLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sbyl9c3RhdGVIYXNDaGFuZ2VkKHQpe31yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCB0PXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gdCBpbiBjLl90ZW1wbGF0ZXM/Yy5fdGVtcGxhdGVzW3RdOnRoaXMuY3JlYXRlVGVtcGxhdGUodCl9Y3JlYXRlVGVtcGxhdGUodCl7dmFyIGU7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIHIuaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGU9bi5zdHlsZXMpJiZ2b2lkIDAhPT1lP2U6XCJcIn08L3N0eWxlPmAsYy5fdGVtcGxhdGVzW3RdPXIscn1ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodCxlKXtjbGVhclRpbWVvdXQodGhpcy5fY2hhbmdlRGVib3VuY2UpLHRoaXMuX2NoYW5nZURlYm91bmNlPXNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZUhhc0NoYW5nZWQodGhpcy5fY2hhbmdlcyksdGhpcy5fY2hhbmdlcy5jbGVhcigpfSksNTApLHRoaXMuX2NoYW5nZXMuc2V0KHQsZSl9fWMuX3RlbXBsYXRlcz17fX0pKCksbn0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5GbHVlbnRDb21tYW5kQmFyPWUoKTp0LkZsdWVudENvbW1hbmRCYXI9ZSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIHQ9ezI2OTp0PT57dmFyIGU7c2VsZixlPSgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgdD17ZDooZSxuKT0+e2Zvcih2YXIgbyBpbiBuKXQubyhuLG8pJiYhdC5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0Om5bb119KX0sbzoodCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSkscjp0PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGU9e307ZnVuY3Rpb24gbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LGUpfX10LnIoZSksdC5kKGUse0N1c3RvbUNvbXBvbmVudDooKT0+byxjdXN0b21Db21wb25lbnQ6KCk9Pm59KTtjbGFzcyBvIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIG8uX3RlbXBsYXRlcz9vLl90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxpPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gbi5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1pLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCxvLl90ZW1wbGF0ZXNbdF09bixufWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX19cmV0dXJuIG8uX3RlbXBsYXRlcz17fSxlfSkoKSx0LmV4cG9ydHM9ZSgpfSw0NDE6KHQsZSxuKT0+e3ZhciBvOyFmdW5jdGlvbihpLHIscyl7aWYoaSl7Zm9yKHZhciBhLGw9ezg6XCJiYWNrc3BhY2VcIiw5OlwidGFiXCIsMTM6XCJlbnRlclwiLDE2Olwic2hpZnRcIiwxNzpcImN0cmxcIiwxODpcImFsdFwiLDIwOlwiY2Fwc2xvY2tcIiwyNzpcImVzY1wiLDMyOlwic3BhY2VcIiwzMzpcInBhZ2V1cFwiLDM0OlwicGFnZWRvd25cIiwzNTpcImVuZFwiLDM2OlwiaG9tZVwiLDM3OlwibGVmdFwiLDM4OlwidXBcIiwzOTpcInJpZ2h0XCIsNDA6XCJkb3duXCIsNDU6XCJpbnNcIiw0NjpcImRlbFwiLDkxOlwibWV0YVwiLDkzOlwibWV0YVwiLDIyNDpcIm1ldGFcIn0sYz17MTA2OlwiKlwiLDEwNzpcIitcIiwxMDk6XCItXCIsMTEwOlwiLlwiLDExMTpcIi9cIiwxODY6XCI7XCIsMTg3OlwiPVwiLDE4ODpcIixcIiwxODk6XCItXCIsMTkwOlwiLlwiLDE5MTpcIi9cIiwxOTI6XCJgXCIsMjE5OlwiW1wiLDIyMDpcIlxcXFxcIiwyMjE6XCJdXCIsMjIyOlwiJ1wifSxkPXtcIn5cIjpcImBcIixcIiFcIjpcIjFcIixcIkBcIjpcIjJcIixcIiNcIjpcIjNcIiwkOlwiNFwiLFwiJVwiOlwiNVwiLFwiXlwiOlwiNlwiLFwiJlwiOlwiN1wiLFwiKlwiOlwiOFwiLFwiKFwiOlwiOVwiLFwiKVwiOlwiMFwiLF86XCItXCIsXCIrXCI6XCI9XCIsXCI6XCI6XCI7XCIsJ1wiJzpcIidcIixcIjxcIjpcIixcIixcIj5cIjpcIi5cIixcIj9cIjpcIi9cIixcInxcIjpcIlxcXFxcIn0sdT17b3B0aW9uOlwiYWx0XCIsY29tbWFuZDpcIm1ldGFcIixyZXR1cm46XCJlbnRlclwiLGVzY2FwZTpcImVzY1wiLHBsdXM6XCIrXCIsbW9kOi9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pP1wibWV0YVwiOlwiY3RybFwifSxtPTE7bTwyMDsrK20pbFsxMTErbV09XCJmXCIrbTtmb3IobT0wO208PTk7KyttKWxbbSs5Nl09bS50b1N0cmluZygpO3YucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXM7cmV0dXJuIHQ9dCBpbnN0YW5jZW9mIEFycmF5P3Q6W3RdLG8uX2JpbmRNdWx0aXBsZS5jYWxsKG8sdCxlLG4pLG99LHYucHJvdG90eXBlLnVuYmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmJpbmQuY2FsbCh0aGlzLHQsKGZ1bmN0aW9uKCl7fSksZSl9LHYucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiBuLl9kaXJlY3RNYXBbdCtcIjpcIitlXSYmbi5fZGlyZWN0TWFwW3QrXCI6XCIrZV0oe30sdCksbn0sdi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0Ll9jYWxsYmFja3M9e30sdC5fZGlyZWN0TWFwPXt9LHR9LHYucHJvdG90eXBlLnN0b3BDYWxsYmFjaz1mdW5jdGlvbih0LGUpe2lmKChcIiBcIitlLmNsYXNzTmFtZStcIiBcIikuaW5kZXhPZihcIiBtb3VzZXRyYXAgXCIpPi0xKXJldHVybiExO2lmKGcoZSx0aGlzLnRhcmdldCkpcmV0dXJuITE7aWYoXCJjb21wb3NlZFBhdGhcImluIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29tcG9zZWRQYXRoKXt2YXIgbj10LmNvbXBvc2VkUGF0aCgpWzBdO24hPT10LnRhcmdldCYmKGU9bil9cmV0dXJuXCJJTlBVVFwiPT1lLnRhZ05hbWV8fFwiU0VMRUNUXCI9PWUudGFnTmFtZXx8XCJURVhUQVJFQVwiPT1lLnRhZ05hbWV8fGUuaXNDb250ZW50RWRpdGFibGV9LHYucHJvdG90eXBlLmhhbmRsZUtleT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9oYW5kbGVLZXkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx2LmFkZEtleWNvZGVzPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0KXQuaGFzT3duUHJvcGVydHkoZSkmJihsW2VdPXRbZV0pO2E9bnVsbH0sdi5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dihyKTtmb3IodmFyIGUgaW4gdClcIl9cIiE9PWUuY2hhckF0KDApJiYodltlXT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdFtlXS5hcHBseSh0LGFyZ3VtZW50cyl9fShlKSl9LHYuaW5pdCgpLGkuTW91c2V0cmFwPXYsdC5leHBvcnRzJiYodC5leHBvcnRzPXYpLHZvaWQgMD09PShvPWZ1bmN0aW9uKCl7cmV0dXJuIHZ9LmNhbGwoZSxuLGUsdCkpfHwodC5leHBvcnRzPW8pfWZ1bmN0aW9uIGgodCxlLG4pe3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoZSxuLCExKTp0LmF0dGFjaEV2ZW50KFwib25cIitlLG4pfWZ1bmN0aW9uIHAodCl7aWYoXCJrZXlwcmVzc1wiPT10LnR5cGUpe3ZhciBlPVN0cmluZy5mcm9tQ2hhckNvZGUodC53aGljaCk7cmV0dXJuIHQuc2hpZnRLZXl8fChlPWUudG9Mb3dlckNhc2UoKSksZX1yZXR1cm4gbFt0LndoaWNoXT9sW3Qud2hpY2hdOmNbdC53aGljaF0/Y1t0LndoaWNoXTpTdHJpbmcuZnJvbUNoYXJDb2RlKHQud2hpY2gpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZih0KXtyZXR1cm5cInNoaWZ0XCI9PXR8fFwiY3RybFwiPT10fHxcImFsdFwiPT10fHxcIm1ldGFcIj09dH1mdW5jdGlvbiB5KHQsZSxuKXtyZXR1cm4gbnx8KG49ZnVuY3Rpb24oKXtpZighYSlmb3IodmFyIHQgaW4gYT17fSxsKXQ+OTUmJnQ8MTEyfHxsLmhhc093blByb3BlcnR5KHQpJiYoYVtsW3RdXT10KTtyZXR1cm4gYX0oKVt0XT9cImtleWRvd25cIjpcImtleXByZXNzXCIpLFwia2V5cHJlc3NcIj09biYmZS5sZW5ndGgmJihuPVwia2V5ZG93blwiKSxufWZ1bmN0aW9uIGIodCxlKXt2YXIgbixvLGkscj1bXTtmb3Iobj1mdW5jdGlvbih0KXtyZXR1cm5cIitcIj09PXQ/W1wiK1wiXToodD10LnJlcGxhY2UoL1xcK3syfS9nLFwiK3BsdXNcIikpLnNwbGl0KFwiK1wiKX0odCksaT0wO2k8bi5sZW5ndGg7KytpKW89bltpXSx1W29dJiYobz11W29dKSxlJiZcImtleXByZXNzXCIhPWUmJmRbb10mJihvPWRbb10sci5wdXNoKFwic2hpZnRcIikpLGYobykmJnIucHVzaChvKTtyZXR1cm57a2V5Om8sbW9kaWZpZXJzOnIsYWN0aW9uOmU9eShvLHIsZSl9fWZ1bmN0aW9uIGcodCxlKXtyZXR1cm4gbnVsbCE9PXQmJnQhPT1yJiYodD09PWV8fGcodC5wYXJlbnROb2RlLGUpKX1mdW5jdGlvbiB2KHQpe3ZhciBlPXRoaXM7aWYodD10fHxyLCEoZSBpbnN0YW5jZW9mIHYpKXJldHVybiBuZXcgdih0KTtlLnRhcmdldD10LGUuX2NhbGxiYWNrcz17fSxlLl9kaXJlY3RNYXA9e307dmFyIG4sbz17fSxpPSExLHM9ITEsYT0hMTtmdW5jdGlvbiBsKHQpe3Q9dHx8e307dmFyIGUsbj0hMTtmb3IoZSBpbiBvKXRbZV0/bj0hMDpvW2VdPTA7bnx8KGE9ITEpfWZ1bmN0aW9uIGModCxuLGkscixzLGEpe3ZhciBsLGMsZCx1LG09W10saD1pLnR5cGU7aWYoIWUuX2NhbGxiYWNrc1t0XSlyZXR1cm5bXTtmb3IoXCJrZXl1cFwiPT1oJiZmKHQpJiYobj1bdF0pLGw9MDtsPGUuX2NhbGxiYWNrc1t0XS5sZW5ndGg7KytsKWlmKGM9ZS5fY2FsbGJhY2tzW3RdW2xdLChyfHwhYy5zZXF8fG9bYy5zZXFdPT1jLmxldmVsKSYmaD09Yy5hY3Rpb24mJihcImtleXByZXNzXCI9PWgmJiFpLm1ldGFLZXkmJiFpLmN0cmxLZXl8fChkPW4sdT1jLm1vZGlmaWVycyxkLnNvcnQoKS5qb2luKFwiLFwiKT09PXUuc29ydCgpLmpvaW4oXCIsXCIpKSkpe3ZhciBwPSFyJiZjLmNvbWJvPT1zLHk9ciYmYy5zZXE9PXImJmMubGV2ZWw9PWE7KHB8fHkpJiZlLl9jYWxsYmFja3NbdF0uc3BsaWNlKGwsMSksbS5wdXNoKGMpfXJldHVybiBtfWZ1bmN0aW9uIGQodCxuLG8saSl7ZS5zdG9wQ2FsbGJhY2sobixuLnRhcmdldHx8bi5zcmNFbGVtZW50LG8saSl8fCExPT09dChuLG8pJiYoZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdD90LnByZXZlbnREZWZhdWx0KCk6dC5yZXR1cm5WYWx1ZT0hMX0obiksZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24/dC5zdG9wUHJvcGFnYXRpb24oKTp0LmNhbmNlbEJ1YmJsZT0hMH0obikpfWZ1bmN0aW9uIHUodCl7XCJudW1iZXJcIiE9dHlwZW9mIHQud2hpY2gmJih0LndoaWNoPXQua2V5Q29kZSk7dmFyIG49cCh0KTtuJiYoXCJrZXl1cFwiIT10LnR5cGV8fGkhPT1uP2UuaGFuZGxlS2V5KG4sZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIHQuc2hpZnRLZXkmJmUucHVzaChcInNoaWZ0XCIpLHQuYWx0S2V5JiZlLnB1c2goXCJhbHRcIiksdC5jdHJsS2V5JiZlLnB1c2goXCJjdHJsXCIpLHQubWV0YUtleSYmZS5wdXNoKFwibWV0YVwiKSxlfSh0KSx0KTppPSExKX1mdW5jdGlvbiBtKHQscixzLHUsaCl7ZS5fZGlyZWN0TWFwW3QrXCI6XCIrc109cjt2YXIgZix5PSh0PXQucmVwbGFjZSgvXFxzKy9nLFwiIFwiKSkuc3BsaXQoXCIgXCIpO3kubGVuZ3RoPjE/ZnVuY3Rpb24odCxlLHIscyl7ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZnVuY3Rpb24oKXthPWUsKytvW3RdLGNsZWFyVGltZW91dChuKSxuPXNldFRpbWVvdXQobCwxZTMpfX1mdW5jdGlvbiB1KGUpe2QocixlLHQpLFwia2V5dXBcIiE9PXMmJihpPXAoZSkpLHNldFRpbWVvdXQobCwxMCl9b1t0XT0wO2Zvcih2YXIgaD0wO2g8ZS5sZW5ndGg7KytoKXt2YXIgZj1oKzE9PT1lLmxlbmd0aD91OmMoc3x8YihlW2grMV0pLmFjdGlvbik7bShlW2hdLGYscyx0LGgpfX0odCx5LHIscyk6KGY9Yih0LHMpLGUuX2NhbGxiYWNrc1tmLmtleV09ZS5fY2FsbGJhY2tzW2Yua2V5XXx8W10sYyhmLmtleSxmLm1vZGlmaWVycyx7dHlwZTpmLmFjdGlvbn0sdSx0LGgpLGUuX2NhbGxiYWNrc1tmLmtleV1bdT9cInVuc2hpZnRcIjpcInB1c2hcIl0oe2NhbGxiYWNrOnIsbW9kaWZpZXJzOmYubW9kaWZpZXJzLGFjdGlvbjpmLmFjdGlvbixzZXE6dSxsZXZlbDpoLGNvbWJvOnR9KSl9ZS5faGFuZGxlS2V5PWZ1bmN0aW9uKHQsZSxuKXt2YXIgbyxpPWModCxlLG4pLHI9e30sdT0wLG09ITE7Zm9yKG89MDtvPGkubGVuZ3RoOysrbylpW29dLnNlcSYmKHU9TWF0aC5tYXgodSxpW29dLmxldmVsKSk7Zm9yKG89MDtvPGkubGVuZ3RoOysrbylpZihpW29dLnNlcSl7aWYoaVtvXS5sZXZlbCE9dSljb250aW51ZTttPSEwLHJbaVtvXS5zZXFdPTEsZChpW29dLmNhbGxiYWNrLG4saVtvXS5jb21ibyxpW29dLnNlcSl9ZWxzZSBtfHxkKGlbb10uY2FsbGJhY2ssbixpW29dLmNvbWJvKTt2YXIgaD1cImtleXByZXNzXCI9PW4udHlwZSYmcztuLnR5cGUhPWF8fGYodCl8fGh8fGwocikscz1tJiZcImtleWRvd25cIj09bi50eXBlfSxlLl9iaW5kTXVsdGlwbGU9ZnVuY3Rpb24odCxlLG4pe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7KytvKW0odFtvXSxlLG4pfSxoKHQsXCJrZXlwcmVzc1wiLHUpLGgodCxcImtleWRvd25cIix1KSxoKHQsXCJrZXl1cFwiLHUpfX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6bnVsbCxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P2RvY3VtZW50Om51bGwpfX0sZT17fTtmdW5jdGlvbiBuKG8pe3ZhciBpPWVbb107aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbb109e2V4cG9ydHM6e319O3JldHVybiB0W29dKHIsci5leHBvcnRzLG4pLHIuZXhwb3J0c31uLm49dD0+e3ZhciBlPXQmJnQuX19lc01vZHVsZT8oKT0+dC5kZWZhdWx0OigpPT50O3JldHVybiBuLmQoZSx7YTplfSksZX0sbi5kPSh0LGUpPT57Zm9yKHZhciBvIGluIGUpbi5vKGUsbykmJiFuLm8odCxvKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyx7ZW51bWVyYWJsZTohMCxnZXQ6ZVtvXX0pfSxuLm89KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLG4ucj10PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG89e307cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7bi5yKG8pLG4uZChvLHtGbHVlbnRBcHBCYXJCdXR0b246KCk9PnIsRmx1ZW50QXBwQmFyU2VwYXJhdG9yOigpPT5ydCxGbHVlbnRDb21tYW5kQmFyOigpPT5pdH0pO3ZhciB0PW4oMjY5KSxlPW4oNDQxKSxpPW4ubihlKTtsZXQgcj1jbGFzcyBleHRlbmRzIHQuQ3VzdG9tQ29tcG9uZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiaWNvblwiLFwibGFiZWxcIixcIm1vZGlmaWVyXCIsXCJrZXlcIixcInVzZS1hY2NlbnRcIl19Z2V0IGljb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJpY29uXCIpfXNldCBpY29uKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiaWNvblwiLHQpLHRoaXMuc2V0SWNvbigpfWdldCBsYWJlbCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfXNldCBsYWJlbCh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsdCksdGhpcy5zZXRMYWJlbCgpfWdldCBjb21tYW5kKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY29tbWFuZFwiKX1zZXQgY29tbWFuZCh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImNvbW1hbmRcIix0KX1nZXQgbW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJtb2RpZmllclwiKX1zZXQgbW9kaWZpZXIodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJtb2RpZmllclwiLHQpLHRoaXMuc2V0QWNjZWxlcmF0b3IoKX1nZXQga2V5KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwia2V5XCIpfXNldCBrZXkodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJrZXlcIix0KSx0aGlzLnNldEFjY2VsZXJhdG9yKCl9Z2V0IHVzZUFjY2VudCgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInVzZS1hY2NlbnRcIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwidXNlLWFjY2VudFwiKX1zZXQgdXNlQWNjZW50KHQpe3RoaXMudG9nZ2xlQXR0cmlidXRlKFwidXNlLWFjY2VudFwiLHQpLHRoaXMuc2V0SWNvbigpfWdldCB0aXRsZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfXNldCB0aXRsZSh0KXt0aGlzLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdCksdGhpcy5zZXRUaXRsZSgpfWdldCBkaXNhYmxlZCgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpfWdldCBidXR0b24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2J1dHRvbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9idXR0b249dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpKSx0aGlzLl9idXR0b259Z2V0IGljb25TcGFuKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9pY29uU3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9pY29uU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpKSx0aGlzLl9pY29uU3Bhbn1nZXQgY3VzdG9tSWNvblNsb3QoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2N1c3RvbUljb25TcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2N1c3RvbUljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPWljb25dXCIpKSx0aGlzLl9jdXN0b21JY29uU3Bhbn1nZXQgY29udGVudFNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbnRlbnRTcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbnRlbnRTcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikpLHRoaXMuX2NvbnRlbnRTcGFufWdldCBhY2NlbGVyYXRvclNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2FjY2VsZXJhdG9yU3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9hY2NlbGVyYXRvclNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmQtYWNjZWxlcmF0b3JcIikpLHRoaXMuX2FjY2VsZXJhdG9yU3Bhbn1nZXQgZm9ybWF0dGVkTW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5tb2RpZmllci5yZXBsYWNlKFwiQ29udHJvbFwiLFwiQ3RybFwiKX1nZXQgZm9ybWF0dGVkQWNjZWxlcmF0b3IoKXtyZXR1cm4gdGhpcy5tb2RpZmllcj90aGlzLmZvcm1hdHRlZE1vZGlmaWVyK1wiK1wiK3RoaXMua2V5OnRoaXMua2V5fWdldCBzdXBwb3J0ZWRNb2RpZmllcigpe3JldHVybiB0aGlzLm1vZGlmaWVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcImNvbnRyb2xcIixcIm1vZFwiKX1nZXQgc3VwcG9ydGVkS2V5KCl7cmV0dXJuIHRoaXMua2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZShcImRlbGV0ZVwiLFwiZGVsXCIpLnJlcGxhY2UoXCIrXCIsXCI9XCIpLnJlcGxhY2UoXCJlc2NhcGVcIixcImVzY1wiKX1yZW5kZXIoKXtyZXR1cm5cIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J1dHRvbic+XFxuICAgICAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24gY2xhc3M9J2ljb24nPjwvZmx1ZW50LXN5bWJvbC1pY29uPlxcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPSdpY29uJz48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb250ZW50Jz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdrZXlib2FyZC1hY2NlbGVyYXRvcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCJ9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldEljb24oKSx0aGlzLnNldExhYmVsKCksdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiMFwiKSx0aGlzLmN1c3RvbUljb25TbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsKHQ9Pntjb25zdCBlPXRoaXMuY3VzdG9tSWNvblNsb3QuYXNzaWduZWROb2RlcygpLG49ZS5sZW5ndGg+MDt0aGlzLmljb25TcGFuLnN0eWxlLmRpc3BsYXk9bj9cIm5vbmVcIjpcImlubGluZS1ibG9ja1wiLHRoaXMuY3VzdG9tSWNvblNsb3Quc3R5bGUuZGlzcGxheT1uP1wiZGVmYXVsdFwiOlwibm9uZVwiLGUuZm9yRWFjaCgodD0+e3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKHQ9Pnt0aGlzLmNsaWNrKCksdC5zdG9wUHJvcGFnYXRpb24oKX0pKX0pKX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCl7c3dpdGNoKHQpe2Nhc2VcImxhYmVsXCI6dGhpcy5zZXRMYWJlbCgpO2JyZWFrO2Nhc2VcImljb25cIjpjYXNlXCJ1c2UtYWNjZW50XCI6dGhpcy5zZXRJY29uKCk7YnJlYWs7Y2FzZVwibW9kaWZpZXJcIjpjYXNlXCJrZXlcIjp0aGlzLnNldEFjY2VsZXJhdG9yKCl9fXNldEljb24oKXt2YXIgdDt0aGlzLmljb25TcGFuLnNldEF0dHJpYnV0ZShcInN5bWJvbFwiLG51bGwhPT0odD10aGlzLmljb24pJiZ2b2lkIDAhPT10P3Q6XCJcIiksdGhpcy5pY29uU3Bhbi50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsdGhpcy51c2VBY2NlbnQpfXNldExhYmVsKCl7dGhpcy5jb250ZW50U3Bhbi50ZXh0Q29udGVudD10aGlzLmxhYmVsLHRoaXMuc2V0VGl0bGUoKX1zZXRBY2NlbGVyYXRvcigpe3ZhciB0O2lmKHRoaXMua2V5KXt0aGlzLmFjY2VsZXJhdG9yU3Bhbi50ZXh0Q29udGVudD1udWxsIT09KHQ9dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcikmJnZvaWQgMCE9PXQ/dDpcIlwiLHRoaXMuc2V0VGl0bGUoKTt2YXIgZT10aGlzLm1vZGlmaWVyP3RoaXMuc3VwcG9ydGVkTW9kaWZpZXIrXCIrXCIrdGhpcy5zdXBwb3J0ZWRLZXk6dGhpcy5zdXBwb3J0ZWRLZXk7aSgpLmJpbmQoZSwoKCk9Pih0aGlzLmRpc2FibGVkfHwodGhpcy5jbGljaygpLHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZva2VkXCIpLHNldFRpbWVvdXQoKCgpPT50aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52b2tlZFwiKSksMTUwKSksITEpKSl9fXNldFRpdGxlKCl7dmFyIHQsZTtjb25zdCBuPXRoaXMuZm9ybWF0dGVkQWNjZWxlcmF0b3I/YCgke3RoaXMuZm9ybWF0dGVkQWNjZWxlcmF0b3J9KWA6XCJcIjtsZXQgbz1udWxsIT09KGU9bnVsbCE9PSh0PXRoaXMudGl0bGUpJiZ2b2lkIDAhPT10P3Q6dGhpcy5sYWJlbCkmJnZvaWQgMCE9PWU/ZTpcIlwiO3RoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsYCR7b30gJHtufWApfXNldEFjY2VsZXJhdG9yV2lkdGgodCl7dGhpcy5hY2NlbGVyYXRvclNwYW4uc3R5bGUud2lkdGg9dCtcInB4XCJ9fTtyLnN0eWxlcz0nXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6ICMwMDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaXMtc2Vjb25kYXJ5XSkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQnV0dG9uICovXFxuICAgICAgICAuYnV0dG9uIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtcHJpbWFyeSk7XFxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLmJ1dHRvbjphY3RpdmUsXFxuICAgICAgICAuYnV0dG9uLmludm9rZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXRlcnRpYXJ5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS1zZWNvbmRhcnkpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5idXR0b24ge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXVtpcy1zZWNvbmRhcnldKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Ym90dG9tXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPWNvbGxhcHNlZF06bm90KFtpcy1zZWNvbmRhcnldKSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnV0dG9uOmFjdGl2ZSAuaWNvblt1c2UtYWNjZW50XTo6cGFydChpY29uKSxcXG4gICAgICAgIC5idXR0b24uaW52b2tlZCAuaWNvblt1c2UtYWNjZW50XTo6cGFydChpY29uKSB7XFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWxsLWFjY2VudC1kZWZhdWx0KSwgdHJhbnNwYXJlbnQgMTAlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5pY29uOjpwYXJ0KGljb24pIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LWRpc2FibGVkKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEN1c3RvbSBpY29uICovXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoZmx1ZW50LWltYWdlLWljb24pIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ5O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAvKiBDb250ZW50ICovXFxuICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXCdTZWdvZSBVSSBWYXJpYWJsZVxcJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMCwgXCJvcHN6XCIgMTY7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OmVtcHR5LFxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Y29sbGFwc2VkXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSAuY29udGVudCB7XFxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMCwgXCJvcHN6XCIgMjA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YmVmb3JlLFxcbiAgICAgICAgLmNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiBcXCdcXCc7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6OmJlZm9yZXtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6OmFmdGVye1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC00cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBLZXlib2FyZCBhY2NlbGVyYXRvciAqL1xcbiAgICAgICAgLmtleWJvYXJkLWFjY2VsZXJhdG9yIHtcXG4gICAgICAgICAgICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KSwgdHJhbnNwYXJlbnQgNDAlKTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXCdTZWdvZSBVSSBWYXJpYWJsZSBTbWFsbFxcJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaXMtc2Vjb25kYXJ5XSkgLmtleWJvYXJkLWFjY2VsZXJhdG9yIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpICFpbXBvcnRhbnQ7XFxuICAgICAgICB9XFxuICAgICcscj1mdW5jdGlvbih0LGUsbixvKXt2YXIgaSxyPWFyZ3VtZW50cy5sZW5ndGgscz1yPDM/ZTpudWxsPT09bz9vPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTpvO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsbixvKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xO2E+PTA7YS0tKShpPXRbYV0pJiYocz0ocjwzP2kocyk6cj4zP2koZSxuLHMpOmkoZSxuKSl8fHMpO3JldHVybiByPjMmJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4scyksc30oWygwLHQuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1hcHAtYmFyLWJ1dHRvblwiKV0scik7Y29uc3Qgcz1NYXRoLm1pbixhPU1hdGgubWF4LGw9TWF0aC5yb3VuZCxjPU1hdGguZmxvb3IsZD10PT4oe3g6dCx5OnR9KSx1PXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIixib3R0b206XCJ0b3BcIix0b3A6XCJib3R0b21cIn0sbT17c3RhcnQ6XCJlbmRcIixlbmQ6XCJzdGFydFwifTtmdW5jdGlvbiBoKHQsZSxuKXtyZXR1cm4gYSh0LHMoZSxuKSl9ZnVuY3Rpb24gcCh0LGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChlKTp0fWZ1bmN0aW9uIGYodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzBdfWZ1bmN0aW9uIHkodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzFdfWZ1bmN0aW9uIGIodCl7cmV0dXJuXCJ4XCI9PT10P1wieVwiOlwieFwifWZ1bmN0aW9uIGcodCl7cmV0dXJuXCJ5XCI9PT10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwifWZ1bmN0aW9uIHYodCl7cmV0dXJuW1widG9wXCIsXCJib3R0b21cIl0uaW5jbHVkZXMoZih0KSk/XCJ5XCI6XCJ4XCJ9ZnVuY3Rpb24geCh0KXtyZXR1cm4gYih2KHQpKX1mdW5jdGlvbiB3KHQpe3JldHVybiB0LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCh0PT5tW3RdKSl9ZnVuY3Rpb24gQyh0KXtyZXR1cm4gdC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywodD0+dVt0XSkpfWZ1bmN0aW9uIEEodCl7cmV0dXJuey4uLnQsdG9wOnQueSxsZWZ0OnQueCxyaWdodDp0LngrdC53aWR0aCxib3R0b206dC55K3QuaGVpZ2h0fX1mdW5jdGlvbiBrKHQsZSxuKXtsZXR7cmVmZXJlbmNlOm8sZmxvYXRpbmc6aX09dDtjb25zdCByPXYoZSkscz14KGUpLGE9ZyhzKSxsPWYoZSksYz1cInlcIj09PXIsZD1vLngrby53aWR0aC8yLWkud2lkdGgvMix1PW8ueStvLmhlaWdodC8yLWkuaGVpZ2h0LzIsbT1vW2FdLzItaVthXS8yO2xldCBoO3N3aXRjaChsKXtjYXNlXCJ0b3BcIjpoPXt4OmQseTpvLnktaS5oZWlnaHR9O2JyZWFrO2Nhc2VcImJvdHRvbVwiOmg9e3g6ZCx5Om8ueStvLmhlaWdodH07YnJlYWs7Y2FzZVwicmlnaHRcIjpoPXt4Om8ueCtvLndpZHRoLHk6dX07YnJlYWs7Y2FzZVwibGVmdFwiOmg9e3g6by54LWkud2lkdGgseTp1fTticmVhaztkZWZhdWx0Omg9e3g6by54LHk6by55fX1zd2l0Y2goeShlKSl7Y2FzZVwic3RhcnRcIjpoW3NdLT1tKihuJiZjPy0xOjEpO2JyZWFrO2Nhc2VcImVuZFwiOmhbc10rPW0qKG4mJmM/LTE6MSl9cmV0dXJuIGh9YXN5bmMgZnVuY3Rpb24gUyh0LGUpe3ZhciBuO3ZvaWQgMD09PWUmJihlPXt9KTtjb25zdHt4Om8seTppLHBsYXRmb3JtOnIscmVjdHM6cyxlbGVtZW50czphLHN0cmF0ZWd5Omx9PXQse2JvdW5kYXJ5OmM9XCJjbGlwcGluZ0FuY2VzdG9yc1wiLHJvb3RCb3VuZGFyeTpkPVwidmlld3BvcnRcIixlbGVtZW50Q29udGV4dDp1PVwiZmxvYXRpbmdcIixhbHRCb3VuZGFyeTptPSExLHBhZGRpbmc6aD0wfT1wKGUsdCksZj1mdW5jdGlvbih0KXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgdD9mdW5jdGlvbih0KXtyZXR1cm57dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjAsLi4udH19KHQpOnt0b3A6dCxyaWdodDp0LGJvdHRvbTp0LGxlZnQ6dH19KGgpLHk9YVttP1wiZmxvYXRpbmdcIj09PXU/XCJyZWZlcmVuY2VcIjpcImZsb2F0aW5nXCI6dV0sYj1BKGF3YWl0IHIuZ2V0Q2xpcHBpbmdSZWN0KHtlbGVtZW50Om51bGw9PShuPWF3YWl0KG51bGw9PXIuaXNFbGVtZW50P3ZvaWQgMDpyLmlzRWxlbWVudCh5KSkpfHxuP3k6eS5jb250ZXh0RWxlbWVudHx8YXdhaXQobnVsbD09ci5nZXREb2N1bWVudEVsZW1lbnQ/dm9pZCAwOnIuZ2V0RG9jdW1lbnRFbGVtZW50KGEuZmxvYXRpbmcpKSxib3VuZGFyeTpjLHJvb3RCb3VuZGFyeTpkLHN0cmF0ZWd5Omx9KSksZz1cImZsb2F0aW5nXCI9PT11P3suLi5zLmZsb2F0aW5nLHg6byx5Oml9OnMucmVmZXJlbmNlLHY9YXdhaXQobnVsbD09ci5nZXRPZmZzZXRQYXJlbnQ/dm9pZCAwOnIuZ2V0T2Zmc2V0UGFyZW50KGEuZmxvYXRpbmcpKSx4PWF3YWl0KG51bGw9PXIuaXNFbGVtZW50P3ZvaWQgMDpyLmlzRWxlbWVudCh2KSkmJmF3YWl0KG51bGw9PXIuZ2V0U2NhbGU/dm9pZCAwOnIuZ2V0U2NhbGUodikpfHx7eDoxLHk6MX0sdz1BKHIuY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Q/YXdhaXQgci5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7cmVjdDpnLG9mZnNldFBhcmVudDp2LHN0cmF0ZWd5Omx9KTpnKTtyZXR1cm57dG9wOihiLnRvcC13LnRvcCtmLnRvcCkveC55LGJvdHRvbToody5ib3R0b20tYi5ib3R0b20rZi5ib3R0b20pL3gueSxsZWZ0OihiLmxlZnQtdy5sZWZ0K2YubGVmdCkveC54LHJpZ2h0Oih3LnJpZ2h0LWIucmlnaHQrZi5yaWdodCkveC54fX1jb25zdCBSPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD17fSkse25hbWU6XCJmbGlwXCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe3ZhciBuO2NvbnN0e3BsYWNlbWVudDpvLG1pZGRsZXdhcmVEYXRhOmkscmVjdHM6cixpbml0aWFsUGxhY2VtZW50OnMscGxhdGZvcm06YSxlbGVtZW50czpsfT1lLHttYWluQXhpczpjPSEwLGNyb3NzQXhpczpkPSEwLGZhbGxiYWNrUGxhY2VtZW50czp1LGZhbGxiYWNrU3RyYXRlZ3k6bT1cImJlc3RGaXRcIixmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uOmg9XCJub25lXCIsZmxpcEFsaWdubWVudDpiPSEwLC4uLnZ9PXAodCxlKSxBPWYobyksaz1mKHMpPT09cyxSPWF3YWl0KG51bGw9PWEuaXNSVEw/dm9pZCAwOmEuaXNSVEwobC5mbG9hdGluZykpLEU9dXx8KGt8fCFiP1tDKHMpXTpmdW5jdGlvbih0KXtjb25zdCBlPUModCk7cmV0dXJuW3codCksZSx3KGUpXX0ocykpO3V8fFwibm9uZVwiPT09aHx8RS5wdXNoKC4uLmZ1bmN0aW9uKHQsZSxuLG8pe2NvbnN0IGk9eSh0KTtsZXQgcj1mdW5jdGlvbih0LGUsbil7Y29uc3Qgbz1bXCJsZWZ0XCIsXCJyaWdodFwiXSxpPVtcInJpZ2h0XCIsXCJsZWZ0XCJdLHI9W1widG9wXCIsXCJib3R0b21cIl0scz1bXCJib3R0b21cIixcInRvcFwiXTtzd2l0Y2godCl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6cmV0dXJuIG4/ZT9pOm86ZT9vOmk7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6cmV0dXJuIGU/cjpzO2RlZmF1bHQ6cmV0dXJuW119fShmKHQpLFwic3RhcnRcIj09PW4sbyk7cmV0dXJuIGkmJihyPXIubWFwKCh0PT50K1wiLVwiK2kpKSxlJiYocj1yLmNvbmNhdChyLm1hcCh3KSkpKSxyfShzLGIsaCxSKSk7Y29uc3QgXz1bcywuLi5FXSxMPWF3YWl0IFMoZSx2KSxQPVtdO2xldCBUPShudWxsPT0obj1pLmZsaXApP3ZvaWQgMDpuLm92ZXJmbG93cyl8fFtdO2lmKGMmJlAucHVzaChMW0FdKSxkKXtjb25zdCB0PWZ1bmN0aW9uKHQsZSxuKXt2b2lkIDA9PT1uJiYobj0hMSk7Y29uc3Qgbz15KHQpLGk9eCh0KSxyPWcoaSk7bGV0IHM9XCJ4XCI9PT1pP289PT0obj9cImVuZFwiOlwic3RhcnRcIik/XCJyaWdodFwiOlwibGVmdFwiOlwic3RhcnRcIj09PW8/XCJib3R0b21cIjpcInRvcFwiO3JldHVybiBlLnJlZmVyZW5jZVtyXT5lLmZsb2F0aW5nW3JdJiYocz1DKHMpKSxbcyxDKHMpXX0obyxyLFIpO1AucHVzaChMW3RbMF1dLExbdFsxXV0pfWlmKFQ9Wy4uLlQse3BsYWNlbWVudDpvLG92ZXJmbG93czpQfV0sIVAuZXZlcnkoKHQ9PnQ8PTApKSl7dmFyIE8sTTtjb25zdCB0PSgobnVsbD09KE89aS5mbGlwKT92b2lkIDA6Ty5pbmRleCl8fDApKzEsZT1fW3RdO2lmKGUpcmV0dXJue2RhdGE6e2luZGV4OnQsb3ZlcmZsb3dzOlR9LHJlc2V0OntwbGFjZW1lbnQ6ZX19O2xldCBuPW51bGw9PShNPVQuZmlsdGVyKCh0PT50Lm92ZXJmbG93c1swXTw9MCkpLnNvcnQoKCh0LGUpPT50Lm92ZXJmbG93c1sxXS1lLm92ZXJmbG93c1sxXSkpWzBdKT92b2lkIDA6TS5wbGFjZW1lbnQ7aWYoIW4pc3dpdGNoKG0pe2Nhc2VcImJlc3RGaXRcIjp7dmFyIEI7Y29uc3QgdD1udWxsPT0oQj1ULm1hcCgodD0+W3QucGxhY2VtZW50LHQub3ZlcmZsb3dzLmZpbHRlcigodD0+dD4wKSkucmVkdWNlKCgodCxlKT0+dCtlKSwwKV0pKS5zb3J0KCgodCxlKT0+dFsxXS1lWzFdKSlbMF0pP3ZvaWQgMDpCWzBdO3QmJihuPXQpO2JyZWFrfWNhc2VcImluaXRpYWxQbGFjZW1lbnRcIjpuPXN9aWYobyE9PW4pcmV0dXJue3Jlc2V0OntwbGFjZW1lbnQ6bn19fXJldHVybnt9fX19LEU9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLHtuYW1lOlwib2Zmc2V0XCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe2NvbnN0e3g6bix5Om99PWUsaT1hd2FpdCBhc3luYyBmdW5jdGlvbih0LGUpe2NvbnN0e3BsYWNlbWVudDpuLHBsYXRmb3JtOm8sZWxlbWVudHM6aX09dCxyPWF3YWl0KG51bGw9PW8uaXNSVEw/dm9pZCAwOm8uaXNSVEwoaS5mbG9hdGluZykpLHM9ZihuKSxhPXkobiksbD1cInlcIj09PXYobiksYz1bXCJsZWZ0XCIsXCJ0b3BcIl0uaW5jbHVkZXMocyk/LTE6MSxkPXImJmw/LTE6MSx1PXAoZSx0KTtsZXR7bWFpbkF4aXM6bSxjcm9zc0F4aXM6aCxhbGlnbm1lbnRBeGlzOmJ9PVwibnVtYmVyXCI9PXR5cGVvZiB1P3ttYWluQXhpczp1LGNyb3NzQXhpczowLGFsaWdubWVudEF4aXM6bnVsbH06e21haW5BeGlzOjAsY3Jvc3NBeGlzOjAsYWxpZ25tZW50QXhpczpudWxsLC4uLnV9O3JldHVybiBhJiZcIm51bWJlclwiPT10eXBlb2YgYiYmKGg9XCJlbmRcIj09PWE/LTEqYjpiKSxsP3t4OmgqZCx5Om0qY306e3g6bSpjLHk6aCpkfX0oZSx0KTtyZXR1cm57eDpuK2kueCx5Om8raS55LGRhdGE6aX19fX07ZnVuY3Rpb24gXyh0KXtyZXR1cm4gVCh0KT8odC5ub2RlTmFtZXx8XCJcIikudG9Mb3dlckNhc2UoKTpcIiNkb2N1bWVudFwifWZ1bmN0aW9uIEwodCl7dmFyIGU7cmV0dXJuKG51bGw9PXR8fG51bGw9PShlPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOmUuZGVmYXVsdFZpZXcpfHx3aW5kb3d9ZnVuY3Rpb24gUCh0KXt2YXIgZTtyZXR1cm4gbnVsbD09KGU9KFQodCk/dC5vd25lckRvY3VtZW50OnQuZG9jdW1lbnQpfHx3aW5kb3cuZG9jdW1lbnQpP3ZvaWQgMDplLmRvY3VtZW50RWxlbWVudH1mdW5jdGlvbiBUKHQpe3JldHVybiB0IGluc3RhbmNlb2YgTm9kZXx8dCBpbnN0YW5jZW9mIEwodCkuTm9kZX1mdW5jdGlvbiBPKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8dCBpbnN0YW5jZW9mIEwodCkuRWxlbWVudH1mdW5jdGlvbiBNKHQpe3JldHVybiB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBMKHQpLkhUTUxFbGVtZW50fWZ1bmN0aW9uIEIodCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNoYWRvd1Jvb3QmJih0IGluc3RhbmNlb2YgU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIEwodCkuU2hhZG93Um9vdCl9ZnVuY3Rpb24gaih0KXtjb25zdHtvdmVyZmxvdzplLG92ZXJmbG93WDpuLG92ZXJmbG93WTpvLGRpc3BsYXk6aX09cSh0KTtyZXR1cm4vYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChlK28rbikmJiFbXCJpbmxpbmVcIixcImNvbnRlbnRzXCJdLmluY2x1ZGVzKGkpfWZ1bmN0aW9uIEQodCl7cmV0dXJuW1widGFibGVcIixcInRkXCIsXCJ0aFwiXS5pbmNsdWRlcyhfKHQpKX1mdW5jdGlvbiBOKHQpe2NvbnN0IGU9SSgpLG49cSh0KTtyZXR1cm5cIm5vbmVcIiE9PW4udHJhbnNmb3JtfHxcIm5vbmVcIiE9PW4ucGVyc3BlY3RpdmV8fCEhbi5jb250YWluZXJUeXBlJiZcIm5vcm1hbFwiIT09bi5jb250YWluZXJUeXBlfHwhZSYmISFuLmJhY2tkcm9wRmlsdGVyJiZcIm5vbmVcIiE9PW4uYmFja2Ryb3BGaWx0ZXJ8fCFlJiYhIW4uZmlsdGVyJiZcIm5vbmVcIiE9PW4uZmlsdGVyfHxbXCJ0cmFuc2Zvcm1cIixcInBlcnNwZWN0aXZlXCIsXCJmaWx0ZXJcIl0uc29tZSgodD0+KG4ud2lsbENoYW5nZXx8XCJcIikuaW5jbHVkZXModCkpKXx8W1wicGFpbnRcIixcImxheW91dFwiLFwic3RyaWN0XCIsXCJjb250ZW50XCJdLnNvbWUoKHQ9PihuLmNvbnRhaW58fFwiXCIpLmluY2x1ZGVzKHQpKSl9ZnVuY3Rpb24gSSgpe3JldHVybiEoXCJ1bmRlZmluZWRcIj09dHlwZW9mIENTU3x8IUNTUy5zdXBwb3J0cykmJkNTUy5zdXBwb3J0cyhcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIsXCJub25lXCIpfWZ1bmN0aW9uIEYodCl7cmV0dXJuW1wiaHRtbFwiLFwiYm9keVwiLFwiI2RvY3VtZW50XCJdLmluY2x1ZGVzKF8odCkpfWZ1bmN0aW9uIHEodCl7cmV0dXJuIEwodCkuZ2V0Q29tcHV0ZWRTdHlsZSh0KX1mdW5jdGlvbiB6KHQpe3JldHVybiBPKHQpP3tzY3JvbGxMZWZ0OnQuc2Nyb2xsTGVmdCxzY3JvbGxUb3A6dC5zY3JvbGxUb3B9OntzY3JvbGxMZWZ0OnQucGFnZVhPZmZzZXQsc2Nyb2xsVG9wOnQucGFnZVlPZmZzZXR9fWZ1bmN0aW9uIFYodCl7aWYoXCJodG1sXCI9PT1fKHQpKXJldHVybiB0O2NvbnN0IGU9dC5hc3NpZ25lZFNsb3R8fHQucGFyZW50Tm9kZXx8Qih0KSYmdC5ob3N0fHxQKHQpO3JldHVybiBCKGUpP2UuaG9zdDplfWZ1bmN0aW9uIEsodCl7Y29uc3QgZT1WKHQpO3JldHVybiBGKGUpP3Qub3duZXJEb2N1bWVudD90Lm93bmVyRG9jdW1lbnQuYm9keTp0LmJvZHk6TShlKSYmaihlKT9lOksoZSl9ZnVuY3Rpb24gSCh0LGUpe3ZhciBuO3ZvaWQgMD09PWUmJihlPVtdKTtjb25zdCBvPUsodCksaT1vPT09KG51bGw9PShuPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOm4uYm9keSkscj1MKG8pO3JldHVybiBpP2UuY29uY2F0KHIsci52aXN1YWxWaWV3cG9ydHx8W10saihvKT9vOltdKTplLmNvbmNhdChvLEgobykpfWZ1bmN0aW9uIFcodCl7Y29uc3QgZT1xKHQpO2xldCBuPXBhcnNlRmxvYXQoZS53aWR0aCl8fDAsbz1wYXJzZUZsb2F0KGUuaGVpZ2h0KXx8MDtjb25zdCBpPU0odCkscj1pP3Qub2Zmc2V0V2lkdGg6bixzPWk/dC5vZmZzZXRIZWlnaHQ6byxhPWwobikhPT1yfHxsKG8pIT09cztyZXR1cm4gYSYmKG49cixvPXMpLHt3aWR0aDpuLGhlaWdodDpvLCQ6YX19ZnVuY3Rpb24gVSh0KXtyZXR1cm4gTyh0KT90OnQuY29udGV4dEVsZW1lbnR9ZnVuY3Rpb24gJCh0KXtjb25zdCBlPVUodCk7aWYoIU0oZSkpcmV0dXJuIGQoMSk7Y29uc3Qgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHt3aWR0aDpvLGhlaWdodDppLCQ6cn09VyhlKTtsZXQgcz0ocj9sKG4ud2lkdGgpOm4ud2lkdGgpL28sYT0ocj9sKG4uaGVpZ2h0KTpuLmhlaWdodCkvaTtyZXR1cm4gcyYmTnVtYmVyLmlzRmluaXRlKHMpfHwocz0xKSxhJiZOdW1iZXIuaXNGaW5pdGUoYSl8fChhPTEpLHt4OnMseTphfX1jb25zdCBYPWQoMCk7ZnVuY3Rpb24gWSh0KXtjb25zdCBlPUwodCk7cmV0dXJuIEkoKSYmZS52aXN1YWxWaWV3cG9ydD97eDplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQseTplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcH06WH1mdW5jdGlvbiBHKHQsZSxuLG8pe3ZvaWQgMD09PWUmJihlPSExKSx2b2lkIDA9PT1uJiYobj0hMSk7Y29uc3QgaT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9VSh0KTtsZXQgcz1kKDEpO2UmJihvP08obykmJihzPSQobykpOnM9JCh0KSk7Y29uc3QgYT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSwhKCFufHxlJiZuIT09TCh0KSkmJmV9KHIsbixvKT9ZKHIpOmQoMCk7bGV0IGw9KGkubGVmdCthLngpL3MueCxjPShpLnRvcCthLnkpL3MueSx1PWkud2lkdGgvcy54LG09aS5oZWlnaHQvcy55O2lmKHIpe2NvbnN0IHQ9TChyKSxlPW8mJk8obyk/TChvKTpvO2xldCBuPXQuZnJhbWVFbGVtZW50O2Zvcig7biYmbyYmZSE9PXQ7KXtjb25zdCB0PSQobiksZT1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89cShuKSxpPWUubGVmdCsobi5jbGllbnRMZWZ0K3BhcnNlRmxvYXQoby5wYWRkaW5nTGVmdCkpKnQueCxyPWUudG9wKyhuLmNsaWVudFRvcCtwYXJzZUZsb2F0KG8ucGFkZGluZ1RvcCkpKnQueTtsKj10LngsYyo9dC55LHUqPXQueCxtKj10LnksbCs9aSxjKz1yLG49TChuKS5mcmFtZUVsZW1lbnR9fXJldHVybiBBKHt3aWR0aDp1LGhlaWdodDptLHg6bCx5OmN9KX1mdW5jdGlvbiBKKHQpe3JldHVybiBHKFAodCkpLmxlZnQreih0KS5zY3JvbGxMZWZ0fWZ1bmN0aW9uIFEodCxlLG4pe2xldCBvO2lmKFwidmlld3BvcnRcIj09PWUpbz1mdW5jdGlvbih0LGUpe2NvbnN0IG49TCh0KSxvPVAodCksaT1uLnZpc3VhbFZpZXdwb3J0O2xldCByPW8uY2xpZW50V2lkdGgscz1vLmNsaWVudEhlaWdodCxhPTAsbD0wO2lmKGkpe3I9aS53aWR0aCxzPWkuaGVpZ2h0O2NvbnN0IHQ9SSgpOyghdHx8dCYmXCJmaXhlZFwiPT09ZSkmJihhPWkub2Zmc2V0TGVmdCxsPWkub2Zmc2V0VG9wKX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyx4OmEseTpsfX0odCxuKTtlbHNlIGlmKFwiZG9jdW1lbnRcIj09PWUpbz1mdW5jdGlvbih0KXtjb25zdCBlPVAodCksbj16KHQpLG89dC5vd25lckRvY3VtZW50LmJvZHksaT1hKGUuc2Nyb2xsV2lkdGgsZS5jbGllbnRXaWR0aCxvLnNjcm9sbFdpZHRoLG8uY2xpZW50V2lkdGgpLHI9YShlLnNjcm9sbEhlaWdodCxlLmNsaWVudEhlaWdodCxvLnNjcm9sbEhlaWdodCxvLmNsaWVudEhlaWdodCk7bGV0IHM9LW4uc2Nyb2xsTGVmdCtKKHQpO2NvbnN0IGw9LW4uc2Nyb2xsVG9wO3JldHVyblwicnRsXCI9PT1xKG8pLmRpcmVjdGlvbiYmKHMrPWEoZS5jbGllbnRXaWR0aCxvLmNsaWVudFdpZHRoKS1pKSx7d2lkdGg6aSxoZWlnaHQ6cix4OnMseTpsfX0oUCh0KSk7ZWxzZSBpZihPKGUpKW89ZnVuY3Rpb24odCxlKXtjb25zdCBuPUcodCwhMCxcImZpeGVkXCI9PT1lKSxvPW4udG9wK3QuY2xpZW50VG9wLGk9bi5sZWZ0K3QuY2xpZW50TGVmdCxyPU0odCk/JCh0KTpkKDEpO3JldHVybnt3aWR0aDp0LmNsaWVudFdpZHRoKnIueCxoZWlnaHQ6dC5jbGllbnRIZWlnaHQqci55LHg6aSpyLngseTpvKnIueX19KGUsbik7ZWxzZXtjb25zdCBuPVkodCk7bz17Li4uZSx4OmUueC1uLngseTplLnktbi55fX1yZXR1cm4gQShvKX1mdW5jdGlvbiBaKHQsZSl7Y29uc3Qgbj1WKHQpO3JldHVybiEobj09PWV8fCFPKG4pfHxGKG4pKSYmKFwiZml4ZWRcIj09PXEobikucG9zaXRpb258fFoobixlKSl9ZnVuY3Rpb24gdHQodCxlLG4pe2NvbnN0IG89TShlKSxpPVAoZSkscj1cImZpeGVkXCI9PT1uLHM9Ryh0LCEwLHIsZSk7bGV0IGE9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH07Y29uc3QgbD1kKDApO2lmKG98fCFvJiYhcilpZigoXCJib2R5XCIhPT1fKGUpfHxqKGkpKSYmKGE9eihlKSksbyl7Y29uc3QgdD1HKGUsITAscixlKTtsLng9dC54K2UuY2xpZW50TGVmdCxsLnk9dC55K2UuY2xpZW50VG9wfWVsc2UgaSYmKGwueD1KKGkpKTtyZXR1cm57eDpzLmxlZnQrYS5zY3JvbGxMZWZ0LWwueCx5OnMudG9wK2Euc2Nyb2xsVG9wLWwueSx3aWR0aDpzLndpZHRoLGhlaWdodDpzLmhlaWdodH19ZnVuY3Rpb24gZXQodCxlKXtyZXR1cm4gTSh0KSYmXCJmaXhlZFwiIT09cSh0KS5wb3NpdGlvbj9lP2UodCk6dC5vZmZzZXRQYXJlbnQ6bnVsbH1mdW5jdGlvbiBudCh0LGUpe2NvbnN0IG49TCh0KTtpZighTSh0KSlyZXR1cm4gbjtsZXQgbz1ldCh0LGUpO2Zvcig7byYmRChvKSYmXCJzdGF0aWNcIj09PXEobykucG9zaXRpb247KW89ZXQobyxlKTtyZXR1cm4gbyYmKFwiaHRtbFwiPT09XyhvKXx8XCJib2R5XCI9PT1fKG8pJiZcInN0YXRpY1wiPT09cShvKS5wb3NpdGlvbiYmIU4obykpP246b3x8ZnVuY3Rpb24odCl7bGV0IGU9Vih0KTtmb3IoO00oZSkmJiFGKGUpOyl7aWYoTihlKSlyZXR1cm4gZTtlPVYoZSl9cmV0dXJuIG51bGx9KHQpfHxufWNvbnN0IG90PXtjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdDpmdW5jdGlvbih0KXtsZXR7cmVjdDplLG9mZnNldFBhcmVudDpuLHN0cmF0ZWd5Om99PXQ7Y29uc3QgaT1NKG4pLHI9UChuKTtpZihuPT09cilyZXR1cm4gZTtsZXQgcz17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfSxhPWQoMSk7Y29uc3QgbD1kKDApO2lmKChpfHwhaSYmXCJmaXhlZFwiIT09bykmJigoXCJib2R5XCIhPT1fKG4pfHxqKHIpKSYmKHM9eihuKSksTShuKSkpe2NvbnN0IHQ9RyhuKTthPSQobiksbC54PXQueCtuLmNsaWVudExlZnQsbC55PXQueStuLmNsaWVudFRvcH1yZXR1cm57d2lkdGg6ZS53aWR0aCphLngsaGVpZ2h0OmUuaGVpZ2h0KmEueSx4OmUueCphLngtcy5zY3JvbGxMZWZ0KmEueCtsLngseTplLnkqYS55LXMuc2Nyb2xsVG9wKmEueStsLnl9fSxnZXREb2N1bWVudEVsZW1lbnQ6UCxnZXRDbGlwcGluZ1JlY3Q6ZnVuY3Rpb24odCl7bGV0e2VsZW1lbnQ6ZSxib3VuZGFyeTpuLHJvb3RCb3VuZGFyeTpvLHN0cmF0ZWd5Oml9PXQ7Y29uc3Qgcj1bLi4uXCJjbGlwcGluZ0FuY2VzdG9yc1wiPT09bj9mdW5jdGlvbih0LGUpe2NvbnN0IG49ZS5nZXQodCk7aWYobilyZXR1cm4gbjtsZXQgbz1IKHQpLmZpbHRlcigodD0+Tyh0KSYmXCJib2R5XCIhPT1fKHQpKSksaT1udWxsO2NvbnN0IHI9XCJmaXhlZFwiPT09cSh0KS5wb3NpdGlvbjtsZXQgcz1yP1YodCk6dDtmb3IoO08ocykmJiFGKHMpOyl7Y29uc3QgZT1xKHMpLG49TihzKTtufHxcImZpeGVkXCIhPT1lLnBvc2l0aW9ufHwoaT1udWxsKSwocj8hbiYmIWk6IW4mJlwic3RhdGljXCI9PT1lLnBvc2l0aW9uJiZpJiZbXCJhYnNvbHV0ZVwiLFwiZml4ZWRcIl0uaW5jbHVkZXMoaS5wb3NpdGlvbil8fGoocykmJiFuJiZaKHQscykpP289by5maWx0ZXIoKHQ9PnQhPT1zKSk6aT1lLHM9VihzKX1yZXR1cm4gZS5zZXQodCxvKSxvfShlLHRoaXMuX2MpOltdLmNvbmNhdChuKSxvXSxsPXJbMF0sYz1yLnJlZHVjZSgoKHQsbik9Pntjb25zdCBvPVEoZSxuLGkpO3JldHVybiB0LnRvcD1hKG8udG9wLHQudG9wKSx0LnJpZ2h0PXMoby5yaWdodCx0LnJpZ2h0KSx0LmJvdHRvbT1zKG8uYm90dG9tLHQuYm90dG9tKSx0LmxlZnQ9YShvLmxlZnQsdC5sZWZ0KSx0fSksUShlLGwsaSkpO3JldHVybnt3aWR0aDpjLnJpZ2h0LWMubGVmdCxoZWlnaHQ6Yy5ib3R0b20tYy50b3AseDpjLmxlZnQseTpjLnRvcH19LGdldE9mZnNldFBhcmVudDpudCxnZXRFbGVtZW50UmVjdHM6YXN5bmMgZnVuY3Rpb24odCl7bGV0e3JlZmVyZW5jZTplLGZsb2F0aW5nOm4sc3RyYXRlZ3k6b309dDtjb25zdCBpPXRoaXMuZ2V0T2Zmc2V0UGFyZW50fHxudCxyPXRoaXMuZ2V0RGltZW5zaW9ucztyZXR1cm57cmVmZXJlbmNlOnR0KGUsYXdhaXQgaShuKSxvKSxmbG9hdGluZzp7eDowLHk6MCwuLi5hd2FpdCByKG4pfX19LGdldENsaWVudFJlY3RzOmZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5mcm9tKHQuZ2V0Q2xpZW50UmVjdHMoKSl9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24odCl7cmV0dXJuIFcodCl9LGdldFNjYWxlOiQsaXNFbGVtZW50Ok8saXNSVEw6ZnVuY3Rpb24odCl7cmV0dXJuXCJydGxcIj09PXEodCkuZGlyZWN0aW9ufX07bGV0IGl0PWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuc2V0Q29tbWFuZEFwcGVhcmFuY2U9dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZS5iaW5kKHRoaXMpLHRoaXMuaGFuZGxlU2xvdENoYW5nZT10aGlzLmhhbmRsZVNsb3RDaGFuZ2UuYmluZCh0aGlzKSx0aGlzLmF1dG9BZGp1c3Q9dGhpcy5hdXRvQWRqdXN0LmJpbmQodGhpcyksdGhpcy5pc01vdmluZ0NvbW1hbmQ9ITEsdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleD0wfXN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiaXMtb3BlblwiLFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiLFwiY3VzdG9tLW1lbnVcIl19Z2V0IGRlZmF1bHRMYWJlbFBvc2l0aW9uKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLmdldEF0dHJpYnV0ZShcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIikpJiZ2b2lkIDAhPT10P3Q6XCJyaWdodFwifXNldCBkZWZhdWx0TGFiZWxQb3NpdGlvbih0KXt0aGlzLnNldEF0dHJpYnV0ZShcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIix0KSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1nZXQgaXNPcGVuKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiaXMtb3BlblwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJpcy1vcGVuXCIpfWdldCBjdXN0b21NZW51KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiY3VzdG9tLW1lbnVcIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwiY3VzdG9tLW1lbnVcIil9c2V0IGN1c3RvbU1lbnUodCl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiLHQpfWdldCBjb21tYW5kQmFyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jb21tYW5kQmFyKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbW1hbmRCYXI9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWFuZC1iYXJcIikpLHRoaXMuX2NvbW1hbmRCYXJ9Z2V0IHByaW1hcnlDb21tYW5kc0NvbnRhaW5lcigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyKSYmdm9pZCAwIT09dHx8KHRoaXMuX3ByaW1hcnlDb21tYW5kc0NvbnRhaW5lcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LWNvbW1hbmRzXCIpKSx0aGlzLl9wcmltYXJ5Q29tbWFuZHNDb250YWluZXJ9Z2V0IHByaW1hcnlDb21tYW5kc1Nsb3QoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3ByaW1hcnlDb21tYW5kc1Nsb3QpJiZ2b2lkIDAhPT10fHwodGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdD10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LWNvbW1hbmRzIHNsb3RcIikpLHRoaXMuX3ByaW1hcnlDb21tYW5kc1Nsb3R9Z2V0IG1vcmVCdXR0b24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX21vcmVCdXR0b24pJiZ2b2lkIDAhPT10fHwodGhpcy5fbW9yZUJ1dHRvbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5tb3JlLWJ1dHRvblwiKSksdGhpcy5fbW9yZUJ1dHRvbn1nZXQgc2Vjb25kYXJ5Q29tbWFuZHNEaXYoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3NlY29uZGFyeUNvbW1hbmRzRGl2KSYmdm9pZCAwIT09dHx8KHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzRGl2PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZGFyeS1jb21tYW5kc1wiKSksdGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXZ9Z2V0IHNlY29uZGFyeUNvbW1hbmRzU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNTbG90KSYmdm9pZCAwIT09dHx8KHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzU2xvdD10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RbbmFtZT1zZWNvbmRhcnktY29tbWFuZHNdXCIpKSx0aGlzLl9zZWNvbmRhcnlDb21tYW5kc1Nsb3R9Z2V0IGNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcikmJnZvaWQgMCE9PXR8fCh0aGlzLl9jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jb2xsYXBzZWQtY29tbWFuZHNcIikpLHRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyfWdldCBjb21tYW5kcygpe3JldHVyblsuLi50aGlzLnByaW1hcnlDb21tYW5kc1Nsb3QuYXNzaWduZWRFbGVtZW50cygpLmZpbHRlcigodD0+dCBpbnN0YW5jZW9mIHIpKSwuLi50aGlzLnNlY29uZGFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZEVsZW1lbnRzKCkuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgcikpLC4uLnRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIuY2hpbGROb2Rlc119cmVuZGVyKCl7cmV0dXJuXCJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb21tYW5kLWJhcic+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ByaW1hcnktY29tbWFuZHMnPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9yZS1idXR0b24nIHRpdGxlPSdTZWUgbW9yZSc+XFxuICAgICAgICAgICAgICAgICAgICA8Zmx1ZW50LXN5bWJvbC1pY29uIHN5bWJvbD0nTW9yZScgZm9udC1zaXplPScyMCc+PC9mbHVlbnQtc3ltYm9sLWljb24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWNvbmRhcnktY29tbWFuZHMnPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT0nc2Vjb25kYXJ5LWNvbW1hbmRzJz48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb2xsYXBzZWQtY29tbWFuZHMnPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCJ9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLm1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKHQ9Pnt0LnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuY3VzdG9tTWVudT90aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibWVudWludm9rZWRcIix7YnViYmxlczohMH0pKTp0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcImlzLW9wZW5cIiwhdGhpcy5pc09wZW4pfSkpLHRoaXMucHJpbWFyeUNvbW1hbmRzU2xvdC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLHRoaXMuaGFuZGxlU2xvdENoYW5nZSksdGhpcy5zZWNvbmRhcnlDb21tYW5kc1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwodD0+e2lmKHRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyPXRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkTm9kZXMoKVswXSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCksIXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyKXJldHVybjt2YXIgZT10aGlzLnNlY29uZGFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZmx1ZW50LWFwcC1iYXItYnV0dG9uXCIpLG49dGhpcy5zZWNvbmRhcnlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImZsdWVudC1hcHAtYmFyLXNlcGFyYXRvclwiKTtjb25zdCBvPTYqQXJyYXkuZnJvbShlKS5yZWR1Y2UoKCh0LGUpPT50LmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aD5lLmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aD90OmUpKS5mb3JtYXR0ZWRBY2NlbGVyYXRvci5sZW5ndGg7ZS5mb3JFYWNoKCh0PT57dC50b2dnbGVBdHRyaWJ1dGUoXCJpcy1zZWNvbmRhcnlcIiwhMCksdC5zZXRBY2NlbGVyYXRvcldpZHRoKG8pfSkpLG4uZm9yRWFjaCgodD0+e3QudG9nZ2xlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCEwKX0pKX0pKSx0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyPW5ldyBSZXNpemVPYnNlcnZlcigoKCk9PnRoaXMuYXV0b0FkanVzdCgpKSksdGhpcy5wYXJlbnRSZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMucGFyZW50RWxlbWVudCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e3RoaXMudG9nZ2xlQXR0cmlidXRlKFwiaXMtb3BlblwiLCExKX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCl7c3dpdGNoKHQpe2Nhc2VcImlzLW9wZW5cIjp0aGlzLnNldElzT3BlbigpO2JyZWFrO2Nhc2VcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIjp0aGlzLnNldExhYmVsUG9zaXRpb24oKX19ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKX1zZXRMYWJlbFBvc2l0aW9uKCl7aWYoW1wiYm90dG9tXCIsXCJjb2xsYXBzZWRcIixcInJpZ2h0XCJdLmluY2x1ZGVzKHRoaXMuZGVmYXVsdExhYmVsUG9zaXRpb24pKXt2YXIgdD10aGlzLmRlZmF1bHRMYWJlbFBvc2l0aW9uO1wiYm90dG9tXCIhPT10fHx0aGlzLmlzT3Blbnx8KHQ9XCJjb2xsYXBzZWRcIiksdGhpcy5wcmltYXJ5Q29tbWFuZHM/dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZSh0KTpzZXRUaW1lb3V0KCgoKT0+dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZSh0KSksNTApfX1zZXRDb21tYW5kQXBwZWFyYW5jZSh0KXt2YXIgZTtyZXR1cm4gbnVsbD09PShlPXRoaXMucHJpbWFyeUNvbW1hbmRzKXx8dm9pZCAwPT09ZXx8ZS5mb3JFYWNoKChlPT57ZS5zZXRBdHRyaWJ1dGUoXCJhcHBlYXJhbmNlXCIsdCl9KSksISF0aGlzLnByaW1hcnlDb21tYW5kc31zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpe2NvbnN0IHQ9dGhpcy5zZWNvbmRhcnlDb250YWluZXImJnRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aHx8dGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7dGhpcy5tb3JlQnV0dG9uLnN0eWxlLmRpc3BsYXk9dD9cImZsZXhcIjpcIm5vbmVcIn1zZXRJc09wZW4oKXt0aGlzLmNvbW1hbmRCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLHRoaXMuaXNPcGVuKSx0aGlzLmlzT3Blbj90aGlzLl9tZW51Q2xlYW51cD1mdW5jdGlvbih0LGUsbixvKXt2b2lkIDA9PT1vJiYobz17fSk7Y29uc3R7YW5jZXN0b3JTY3JvbGw6aT0hMCxhbmNlc3RvclJlc2l6ZTpyPSEwLGVsZW1lbnRSZXNpemU6bD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBSZXNpemVPYnNlcnZlcixsYXlvdXRTaGlmdDpkPVwiZnVuY3Rpb25cIj09dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyLGFuaW1hdGlvbkZyYW1lOnU9ITF9PW8sbT1VKHQpLGg9aXx8cj9bLi4ubT9IKG0pOltdLC4uLkgoZSldOltdO2guZm9yRWFjaCgodD0+e2kmJnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG4se3Bhc3NpdmU6ITB9KSxyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixuKX0pKTtjb25zdCBwPW0mJmQ/ZnVuY3Rpb24odCxlKXtsZXQgbixvPW51bGw7Y29uc3QgaT1QKHQpO2Z1bmN0aW9uIHIoKXtjbGVhclRpbWVvdXQobiksbyYmby5kaXNjb25uZWN0KCksbz1udWxsfXJldHVybiBmdW5jdGlvbiBsKGQsdSl7dm9pZCAwPT09ZCYmKGQ9ITEpLHZvaWQgMD09PXUmJih1PTEpLHIoKTtjb25zdHtsZWZ0Om0sdG9wOmgsd2lkdGg6cCxoZWlnaHQ6Zn09dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihkfHxlKCksIXB8fCFmKXJldHVybjtjb25zdCB5PXtyb290TWFyZ2luOi1jKGgpK1wicHggXCIrLWMoaS5jbGllbnRXaWR0aC0obStwKSkrXCJweCBcIistYyhpLmNsaWVudEhlaWdodC0oaCtmKSkrXCJweCBcIistYyhtKStcInB4XCIsdGhyZXNob2xkOmEoMCxzKDEsdSkpfHwxfTtsZXQgYj0hMDtmdW5jdGlvbiBnKHQpe2NvbnN0IGU9dFswXS5pbnRlcnNlY3Rpb25SYXRpbztpZihlIT09dSl7aWYoIWIpcmV0dXJuIGwoKTtlP2woITEsZSk6bj1zZXRUaW1lb3V0KCgoKT0+e2woITEsMWUtNyl9KSwxMDApfWI9ITF9dHJ5e289bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGcsey4uLnkscm9vdDppLm93bmVyRG9jdW1lbnR9KX1jYXRjaCh0KXtvPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihnLHkpfW8ub2JzZXJ2ZSh0KX0oITApLHJ9KG0sbik6bnVsbDtsZXQgZix5PS0xLGI9bnVsbDtsJiYoYj1uZXcgUmVzaXplT2JzZXJ2ZXIoKHQ9PntsZXRbb109dDtvJiZvLnRhcmdldD09PW0mJmImJihiLnVub2JzZXJ2ZShlKSxjYW5jZWxBbmltYXRpb25GcmFtZSh5KSx5PXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9PntiJiZiLm9ic2VydmUoZSl9KSkpLG4oKX0pKSxtJiYhdSYmYi5vYnNlcnZlKG0pLGIub2JzZXJ2ZShlKSk7bGV0IGc9dT9HKHQpOm51bGw7cmV0dXJuIHUmJmZ1bmN0aW9uIGUoKXtjb25zdCBvPUcodCk7IWd8fG8ueD09PWcueCYmby55PT09Zy55JiZvLndpZHRoPT09Zy53aWR0aCYmby5oZWlnaHQ9PT1nLmhlaWdodHx8bigpLGc9byxmPXJlcXVlc3RBbmltYXRpb25GcmFtZShlKX0oKSxuKCksKCk9PntoLmZvckVhY2goKHQ9PntpJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixuKSxyJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixuKX0pKSxwJiZwKCksYiYmYi5kaXNjb25uZWN0KCksYj1udWxsLHUmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpfX0odGhpcy5tb3JlQnV0dG9uLHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYsdGhpcy51cGRhdGVNZW51UG9zaXRpb24uYmluZCh0aGlzKSk6dGhpcy5fbWVudUNsZWFudXAmJnRoaXMuX21lbnVDbGVhbnVwKCksdGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9aGFuZGxlU2xvdENoYW5nZSgpe2NvbnN0IHQ9dGhpcy5wcmltYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkTm9kZXMoKTtpZih0aGlzLnByaW1hcnlDb21tYW5kcz10LmZpbHRlcigodD0+dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiZcIkZMVUVOVC1BUFAtQkFSLUJVVFRPTlwiPT09dC5ub2RlTmFtZSkpLCF0aGlzLmlzTW92aW5nQ29tbWFuZCl7dGhpcy5zdHlsZS5vcGFjaXR5PVwiMFwiLHRoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmU9dGhpcy5wcmltYXJ5Q29tbWFuZHMubWFwKCh0PT4oe3BhcmVudDp0LnBhcmVudEVsZW1lbnQsc2VsZjp0LHByZXZpb3VzOnQucHJldmlvdXNFbGVtZW50U2libGluZyxib3VuZHM6dC5nZXRDbGllbnRSZWN0cygpWzBdLnJpZ2h0LXRoaXMuZ2V0Q2xpZW50UmVjdHMoKVswXS5sZWZ0fSkpKSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PXRoaXMucHJpbWFyeUNvbW1hbmRzLmxlbmd0aC0xO2NvbnN0IHQ9c2V0SW50ZXJ2YWwoKCgpPT57dGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZSYmKGNsZWFySW50ZXJ2YWwodCksdGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZS5mb3JFYWNoKHRoaXMuYXV0b0FkanVzdCksdGhpcy5zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpLHRoaXMuc3R5bGUub3BhY2l0eT1cIjFcIil9KSwxMCl9dGhpcy5pc01vdmluZ0NvbW1hbmQ9ITEsdGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9YXV0b0FkanVzdCgpe3ZhciB0O2NvbnN0IGU9bnVsbCE9PSh0PXRoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmUpJiZ2b2lkIDAhPT10P3Q6W107aWYoMD09PWUubGVuZ3RoKXJldHVybjtjb25zdCBuPXRoaXMucGFyZW50RWxlbWVudC5nZXRDbGllbnRSZWN0cygpWzBdLndpZHRoLSh0aGlzLmdldExlZnQoKSs0NysxMiksbz10aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4LGk9TWF0aC5taW4oZS5sZW5ndGgtMSxvKzEpLHI9ZVtvXSxzPWVbaV07bz49MCYmci5ib3VuZHM+biYmKHRoaXMubW92ZUNvbW1hbmRzKHIuc2VsZix0aGlzLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXgtPTEsbz4wJiZcIkZMVUVOVC1BUFAtQkFSLVNFUEFSQVRPUlwiPT09ci5wcmV2aW91cy5ub2RlTmFtZSYmdGhpcy5tb3ZlQ29tbWFuZHMoci5wcmV2aW91cyx0aGlzLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIpKSxpIT09byYmcy5ib3VuZHM8biYmKGk+MCYmXCJGTFVFTlQtQVBQLUJBUi1TRVBBUkFUT1JcIj09PXMucHJldmlvdXMubm9kZU5hbWUmJnRoaXMubW92ZUNvbW1hbmRzKHMucHJldmlvdXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcix0aGlzKSx0aGlzLm1vdmVDb21tYW5kcyhzLnNlbGYsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcix0aGlzKSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PWkpfWdldExlZnQoKXtpZighdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXJldHVybiAwO2NvbnN0IHQ9dGhpcy5wYXJlbnRFbGVtZW50LmdldENsaWVudFJlY3RzKClbMF0ubGVmdDtyZXR1cm4gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldENsaWVudFJlY3RzKClbMF0ucmlnaHQtdH1tb3ZlQ29tbWFuZHModCxlLG4pe3ZhciBvO2NvbnN0IGk9ZT09PXRoaXM7aWYodGhpcy5pc01vdmluZ0NvbW1hbmQ9ITAsZS5yZW1vdmVDaGlsZCh0KSxpKXtjb25zdCBlPW4uZmlyc3RDaGlsZDtuLmluc2VydEJlZm9yZSh0LGUpfWVsc2Ugbi5hcHBlbmRDaGlsZCh0KTt2YXIgcj17YnViYmxlczohMCxkZXRhaWw6e3R5cGU6dC5ub2RlTmFtZSxjb21tYW5kOm51bGwhPT0obz10LmRhdGFzZXQuY29tbWFuZCkmJnZvaWQgMCE9PW8/bzpudWxsLGNvbGxhcHNlZDppfX0scz1uZXcgQ3VzdG9tRXZlbnQoXCJjb21tYW5kbW92ZWRcIixyKTt0aGlzLmRpc3BhdGNoRXZlbnQocyksdGhpcy50b2dnbGVBdHRyaWJ1dGVzKHQsaSksdGhpcy5zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpfXVwZGF0ZU1lbnVQb3NpdGlvbigpe3ZhciB0OygodCxlLG4pPT57Y29uc3Qgbz1uZXcgTWFwLGk9e3BsYXRmb3JtOm90LC4uLm59LHI9ey4uLmkucGxhdGZvcm0sX2M6b307cmV0dXJuKGFzeW5jKHQsZSxuKT0+e2NvbnN0e3BsYWNlbWVudDpvPVwiYm90dG9tXCIsc3RyYXRlZ3k6aT1cImFic29sdXRlXCIsbWlkZGxld2FyZTpyPVtdLHBsYXRmb3JtOnN9PW4sYT1yLmZpbHRlcihCb29sZWFuKSxsPWF3YWl0KG51bGw9PXMuaXNSVEw/dm9pZCAwOnMuaXNSVEwoZSkpO2xldCBjPWF3YWl0IHMuZ2V0RWxlbWVudFJlY3RzKHtyZWZlcmVuY2U6dCxmbG9hdGluZzplLHN0cmF0ZWd5Oml9KSx7eDpkLHk6dX09ayhjLG8sbCksbT1vLGg9e30scD0wO2ZvcihsZXQgbj0wO248YS5sZW5ndGg7bisrKXtjb25zdHtuYW1lOnIsZm46Zn09YVtuXSx7eDp5LHk6YixkYXRhOmcscmVzZXQ6dn09YXdhaXQgZih7eDpkLHk6dSxpbml0aWFsUGxhY2VtZW50Om8scGxhY2VtZW50Om0sc3RyYXRlZ3k6aSxtaWRkbGV3YXJlRGF0YTpoLHJlY3RzOmMscGxhdGZvcm06cyxlbGVtZW50czp7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZX19KTtkPW51bGwhPXk/eTpkLHU9bnVsbCE9Yj9iOnUsaD17Li4uaCxbcl06ey4uLmhbcl0sLi4uZ319LHYmJnA8PTUwJiYocCsrLFwib2JqZWN0XCI9PXR5cGVvZiB2JiYodi5wbGFjZW1lbnQmJihtPXYucGxhY2VtZW50KSx2LnJlY3RzJiYoYz0hMD09PXYucmVjdHM/YXdhaXQgcy5nZXRFbGVtZW50UmVjdHMoe3JlZmVyZW5jZTp0LGZsb2F0aW5nOmUsc3RyYXRlZ3k6aX0pOnYucmVjdHMpLCh7eDpkLHk6dX09ayhjLG0sbCkpKSxuPS0xKX1yZXR1cm57eDpkLHk6dSxwbGFjZW1lbnQ6bSxzdHJhdGVneTppLG1pZGRsZXdhcmVEYXRhOmh9fSkodCxlLHsuLi5pLHBsYXRmb3JtOnJ9KX0pKHRoaXMubW9yZUJ1dHRvbix0aGlzLnNlY29uZGFyeUNvbW1hbmRzRGl2LHtwbGFjZW1lbnQ6XCJib3R0b20tZW5kXCIsbWlkZGxld2FyZTpbRSgxNiksUigpLCh2b2lkIDA9PT10JiYodD17fSkse25hbWU6XCJzaGlmdFwiLG9wdGlvbnM6dCxhc3luYyBmbihlKXtjb25zdHt4Om4seTpvLHBsYWNlbWVudDppfT1lLHttYWluQXhpczpyPSEwLGNyb3NzQXhpczpzPSExLGxpbWl0ZXI6YT17Zm46dD0+e2xldHt4OmUseTpufT10O3JldHVybnt4OmUseTpufX19LC4uLmx9PXAodCxlKSxjPXt4Om4seTpvfSxkPWF3YWl0IFMoZSxsKSx1PXYoZihpKSksbT1iKHUpO2xldCB5PWNbbV0sZz1jW3VdO2lmKHIpe2NvbnN0IHQ9XCJ5XCI9PT1tP1wiYm90dG9tXCI6XCJyaWdodFwiO3k9aCh5K2RbXCJ5XCI9PT1tP1widG9wXCI6XCJsZWZ0XCJdLHkseS1kW3RdKX1pZihzKXtjb25zdCB0PVwieVwiPT09dT9cImJvdHRvbVwiOlwicmlnaHRcIjtnPWgoZytkW1wieVwiPT09dT9cInRvcFwiOlwibGVmdFwiXSxnLGctZFt0XSl9Y29uc3QgeD1hLmZuKHsuLi5lLFttXTp5LFt1XTpnfSk7cmV0dXJuey4uLngsZGF0YTp7eDp4Lngtbix5OngueS1vfX19fSldfSkudGhlbigoKHt4OnQseTplfSk9PntPYmplY3QuYXNzaWduKHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYuc3R5bGUse2xlZnQ6YCR7dH1weGAsdG9wOmAke2V9cHhgfSl9KSl9dG9nZ2xlQXR0cmlidXRlcyh0LGUpe2xldCBuO3N3aXRjaCh0Lm5vZGVOYW1lKXtjYXNlXCJGTFVFTlQtQVBQLUJBUi1CVVRUT05cIjpuPVwiaXMtc2Vjb25kYXJ5XCI7YnJlYWs7Y2FzZVwiRkxVRU5ULUFQUC1CQVItU0VQQVJBVE9SXCI6bj1cImhvcml6b250YWxcIn10LnRvZ2dsZUF0dHJpYnV0ZShuLGUpfX07aXQuc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWFuZC1iYXIge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaW1hcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaW1hcnktY29tbWFuZHM6bm90KDplbXB0eSkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQnV0dG9uICovXFxuICAgICAgICAubW9yZS1idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KTtcXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLm1vcmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS1zZWNvbmRhcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b246YWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS10ZXJ0aWFyeSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1zZWNvbmRhcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b24gZmx1ZW50LXN5bWJvbC1pY29uIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogU2Vjb25kYXJ5IGNvbW1hbmRzICovXFxuICAgICAgICAuc2Vjb25kYXJ5LWNvbW1hbmRzIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWZpbGwtbWljYS1iYXNlKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLCBsdW1pbm9zaXR5O1xcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTAwcHgpO1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN0cm9rZS1jYXJkLWRlZmF1bHQpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggdmFyKC0tc2hhZG93LWZseW91dCk7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbW1hbmQtYmFyLmFjdGl2ZSAuc2Vjb25kYXJ5LWNvbW1hbmRzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbGxhcHNlZC1jb21tYW5kczpub3QoOmVtcHR5KSB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXN0cm9rZS1kaXZpZGVyLWRlZmF1bHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbGxhcHNlZC1jb21tYW5kcyBmbHVlbnQtYXBwLWJhci1zZXBhcmF0b3I6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIFwiLGl0PWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWNvbW1hbmQtYmFyXCIpXSxpdCk7bGV0IHJ0PWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7cmVuZGVyKCl7cmV0dXJuXCJcIn19O3J0LnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cm9rZS1kaXZpZGVyLWRlZmF1bHQpO1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaG9yaXpvbnRhbF0pIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIFwiLHJ0PWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWFwcC1iYXItc2VwYXJhdG9yXCIpXSxydCl9KSgpLG99KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50LmpzLm1hcCIsIiFmdW5jdGlvbihlLGEpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWEoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuRmx1ZW50SWNvbkVsZW1lbnRDb21wb25lbnQ9YSgpOmUuRmx1ZW50SWNvbkVsZW1lbnRDb21wb25lbnQ9YSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIGU9ezI2OTplPT57dmFyIGE7c2VsZixhPSgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDooYSxuKT0+e2Zvcih2YXIgbCBpbiBuKWUubyhuLGwpJiYhZS5vKGEsbCkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGwse2VudW1lcmFibGU6ITAsZ2V0Om5bbF19KX0sbzooZSxhKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSkscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGE9e307ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24oYSl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShlLGEpfX1lLnIoYSksZS5kKGEse0N1c3RvbUNvbXBvbmVudDooKT0+bCxjdXN0b21Db21wb25lbnQ6KCk9Pm59KTtjbGFzcyBsIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpO2NvbnN0IGU9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlLmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IGU9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiBlIGluIGwuX3RlbXBsYXRlcz9sLl90ZW1wbGF0ZXNbZV06dGhpcy5jcmVhdGVUZW1wbGF0ZShlKX1jcmVhdGVUZW1wbGF0ZShlKXt2YXIgYTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxnPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gbi5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oYT1nLnN0eWxlcykmJnZvaWQgMCE9PWE/YTpcIlwifTwvc3R5bGU+YCxsLl90ZW1wbGF0ZXNbZV09bixufWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX19cmV0dXJuIGwuX3RlbXBsYXRlcz17fSxhfSkoKSxlLmV4cG9ydHM9YSgpfX0sYT17fTtmdW5jdGlvbiBuKGwpe3ZhciBnPWFbbF07aWYodm9pZCAwIT09ZylyZXR1cm4gZy5leHBvcnRzO3ZhciBwPWFbbF09e2V4cG9ydHM6e319O3JldHVybiBlW2xdKHAscC5leHBvcnRzLG4pLHAuZXhwb3J0c31uLmQ9KGUsYSk9Pntmb3IodmFyIGwgaW4gYSluLm8oYSxsKSYmIW4ubyhlLGwpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxsLHtlbnVtZXJhYmxlOiEwLGdldDphW2xdfSl9LG4ubz0oZSxhKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSksbi5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbD17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtuLnIobCksbi5kKGwse0ZsdWVudEZvbnRJY29uOigpPT5wLEZsdWVudEltYWdlSWNvbjooKT0+dCxGbHVlbnRTeW1ib2xJY29uOigpPT5ofSk7dmFyIGU9bigyNjkpLGE9ZnVuY3Rpb24oZSxhLG4sbCl7dmFyIGcscD1hcmd1bWVudHMubGVuZ3RoLGg9cDwzP2E6bnVsbD09PWw/bD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsbik6bDtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSloPVJlZmxlY3QuZGVjb3JhdGUoZSxhLG4sbCk7ZWxzZSBmb3IodmFyIHQ9ZS5sZW5ndGgtMTt0Pj0wO3QtLSkoZz1lW3RdKSYmKGg9KHA8Mz9nKGgpOnA+Mz9nKGEsbixoKTpnKGEsbikpfHxoKTtyZXR1cm4gcD4zJiZoJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxuLGgpLGh9O2NvbnN0IGc9W3tuYW1lOlwiR2xvYmFsTmF2QnV0dG9uXCIsZ2x5cGg6XCJlNzAwXCJ9LHtuYW1lOlwiV2lmaVwiLGdseXBoOlwiZTcwMVwifSx7bmFtZTpcIkJsdWV0b290aFwiLGdseXBoOlwiZTcwMlwifSx7bmFtZTpcIkNvbm5lY3RcIixnbHlwaDpcImU3MDNcIn0se25hbWU6XCJJbnRlcm5ldFNoYXJpbmdcIixnbHlwaDpcImU3MDRcIn0se25hbWU6XCJWUE5cIixnbHlwaDpcImU3MDVcIn0se25hbWU6XCJCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlNzA2XCJ9LHtuYW1lOlwiTWFwUGluXCIsZ2x5cGg6XCJlNzA3XCJ9LHtuYW1lOlwiUXVpZXRIb3Vyc1wiLGdseXBoOlwiZTcwOFwifSx7bmFtZTpcIkFpcnBsYW5lXCIsZ2x5cGg6XCJlNzA5XCJ9LHtuYW1lOlwiVGFibGV0XCIsZ2x5cGg6XCJlNzBhXCJ9LHtuYW1lOlwiUXVpY2tOb3RlXCIsZ2x5cGg6XCJlNzBiXCJ9LHtuYW1lOlwiUmVtZW1iZXJlZERldmljZVwiLGdseXBoOlwiZTcwY1wifSx7bmFtZTpcIkNoZXZyb25Eb3duXCIsZ2x5cGg6XCJlNzBkXCJ9LHtuYW1lOlwiQ2hldnJvblVwXCIsZ2x5cGg6XCJlNzBlXCJ9LHtuYW1lOlwiRWRpdFwiLGdseXBoOlwiZTcwZlwifSx7bmFtZTpcIkFkZFwiLGdseXBoOlwiZTcxMFwifSx7bmFtZTpcIkNhbmNlbFwiLGdseXBoOlwiZTcxMVwifSx7bmFtZTpcIk1vcmVcIixnbHlwaDpcImU3MTJcIn0se25hbWU6XCJTZXR0aW5nc1wiLGdseXBoOlwiZTcxM1wifSx7bmFtZTpcIlZpZGVvXCIsZ2x5cGg6XCJlNzE0XCJ9LHtuYW1lOlwiTWFpbFwiLGdseXBoOlwiZTcxNVwifSx7bmFtZTpcIlBlb3BsZVwiLGdseXBoOlwiZTcxNlwifSx7bmFtZTpcIlBob25lXCIsZ2x5cGg6XCJlNzE3XCJ9LHtuYW1lOlwiUGluXCIsZ2x5cGg6XCJlNzE4XCJ9LHtuYW1lOlwiU2hvcFwiLGdseXBoOlwiZTcxOVwifSx7bmFtZTpcIlN0b3BcIixnbHlwaDpcImU3MWFcIn0se25hbWU6XCJMaW5rXCIsZ2x5cGg6XCJlNzFiXCJ9LHtuYW1lOlwiRmlsdGVyXCIsZ2x5cGg6XCJlNzFjXCJ9LHtuYW1lOlwiQWxsQXBwc1wiLGdseXBoOlwiZTcxZFwifSx7bmFtZTpcIlpvb21cIixnbHlwaDpcImU3MWVcIn0se25hbWU6XCJab29tT3V0XCIsZ2x5cGg6XCJlNzFmXCJ9LHtuYW1lOlwiTWljcm9waG9uZVwiLGdseXBoOlwiZTcyMFwifSx7bmFtZTpcIlNlYXJjaFwiLGdseXBoOlwiZTcyMVwifSx7bmFtZTpcIkNhbWVyYVwiLGdseXBoOlwiZTcyMlwifSx7bmFtZTpcIkF0dGFjaFwiLGdseXBoOlwiZTcyM1wifSx7bmFtZTpcIlNlbmRcIixnbHlwaDpcImU3MjRcIn0se25hbWU6XCJTZW5kRmlsbFwiLGdseXBoOlwiZTcyNVwifSx7bmFtZTpcIldhbGtTb2xpZFwiLGdseXBoOlwiZTcyNlwifSx7bmFtZTpcIkluUHJpdmF0ZVwiLGdseXBoOlwiZTcyN1wifSx7bmFtZTpcIkZhdm9yaXRlTGlzdFwiLGdseXBoOlwiZTcyOFwifSx7bmFtZTpcIlBhZ2VTb2xpZFwiLGdseXBoOlwiZTcyOVwifSx7bmFtZTpcIkZvcndhcmRcIixnbHlwaDpcImU3MmFcIn0se25hbWU6XCJCYWNrXCIsZ2x5cGg6XCJlNzJiXCJ9LHtuYW1lOlwiUmVmcmVzaFwiLGdseXBoOlwiZTcyY1wifSx7bmFtZTpcIlNoYXJlXCIsZ2x5cGg6XCJlNzJkXCJ9LHtuYW1lOlwiTG9ja1wiLGdseXBoOlwiZTcyZVwifSx7bmFtZTpcIlJlcG9ydEhhY2tlZFwiLGdseXBoOlwiZTczMFwifSx7bmFtZTpcIkVNSVwiLGdseXBoOlwiZTczMVwifSx7bmFtZTpcIkZhdm9yaXRlU3RhclwiLGdseXBoOlwiZTczNFwifSx7bmFtZTpcIkZhdm9yaXRlU3RhckZpbGxcIixnbHlwaDpcImU3MzVcIn0se25hbWU6XCJSZWFkaW5nTW9kZVwiLGdseXBoOlwiZTczNlwifSx7bmFtZTpcIkZhdmljb25cIixnbHlwaDpcImU3MzdcIn0se25hbWU6XCJSZW1vdmVcIixnbHlwaDpcImU3MzhcIn0se25hbWU6XCJDaGVja2JveFwiLGdseXBoOlwiZTczOVwifSx7bmFtZTpcIkNoZWNrYm94Q29tcG9zaXRlXCIsZ2x5cGg6XCJlNzNhXCJ9LHtuYW1lOlwiQ2hlY2tib3hGaWxsXCIsZ2x5cGg6XCJlNzNiXCJ9LHtuYW1lOlwiQ2hlY2tib3hJbmRldGVybWluYXRlXCIsZ2x5cGg6XCJlNzNjXCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGVSZXZlcnNlZFwiLGdseXBoOlwiZTczZFwifSx7bmFtZTpcIkNoZWNrTWFya1wiLGdseXBoOlwiZTczZVwifSx7bmFtZTpcIkJhY2tUb1dpbmRvd1wiLGdseXBoOlwiZTczZlwifSx7bmFtZTpcIkZ1bGxTY3JlZW5cIixnbHlwaDpcImU3NDBcIn0se25hbWU6XCJSZXNpemVUb3VjaExhcmdlclwiLGdseXBoOlwiZTc0MVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoU21hbGxlclwiLGdseXBoOlwiZTc0MlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlU21hbGxcIixnbHlwaDpcImU3NDNcIn0se25hbWU6XCJSZXNpemVNb3VzZU1lZGl1bVwiLGdseXBoOlwiZTc0NFwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlV2lkZVwiLGdseXBoOlwiZTc0NVwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlVGFsbFwiLGdseXBoOlwiZTc0NlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTGFyZ2VcIixnbHlwaDpcImU3NDdcIn0se25hbWU6XCJTd2l0Y2hVc2VyXCIsZ2x5cGg6XCJlNzQ4XCJ9LHtuYW1lOlwiUHJpbnRcIixnbHlwaDpcImU3NDlcIn0se25hbWU6XCJVcFwiLGdseXBoOlwiZTc0YVwifSx7bmFtZTpcIkRvd25cIixnbHlwaDpcImU3NGJcIn0se25hbWU6XCJPRU1cIixnbHlwaDpcImU3NGNcIn0se25hbWU6XCJEZWxldGVcIixnbHlwaDpcImU3NGRcIn0se25hbWU6XCJTYXZlXCIsZ2x5cGg6XCJlNzRlXCJ9LHtuYW1lOlwiTXV0ZVwiLGdseXBoOlwiZTc0ZlwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWVwiLGdseXBoOlwiZTc1MFwifSx7bmFtZTpcIlJldHVybktleVwiLGdseXBoOlwiZTc1MVwifSx7bmFtZTpcIlVwQXJyb3dTaGlmdEtleVwiLGdseXBoOlwiZTc1MlwifSx7bmFtZTpcIkNsb3VkXCIsZ2x5cGg6XCJlNzUzXCJ9LHtuYW1lOlwiRmxhc2hsaWdodFwiLGdseXBoOlwiZTc1NFwifSx7bmFtZTpcIlJvdGF0aW9uTG9ja1wiLGdseXBoOlwiZTc1NVwifSx7bmFtZTpcIkNvbW1hbmRQcm9tcHRcIixnbHlwaDpcImU3NTZcIn0se25hbWU6XCJTSVBNb3ZlXCIsZ2x5cGg6XCJlNzU5XCJ9LHtuYW1lOlwiU0lQVW5kb2NrXCIsZ2x5cGg6XCJlNzVhXCJ9LHtuYW1lOlwiU0lQUmVkb2NrXCIsZ2x5cGg6XCJlNzViXCJ9LHtuYW1lOlwiRXJhc2VUb29sXCIsZ2x5cGg6XCJlNzVjXCJ9LHtuYW1lOlwiVW5kZXJzY29yZVNwYWNlXCIsZ2x5cGg6XCJlNzVkXCJ9LHtuYW1lOlwiR3JpcHBlclRvb2xcIixnbHlwaDpcImU3NWVcIn0se25hbWU6XCJEaWFscGFkXCIsZ2x5cGg6XCJlNzVmXCJ9LHtuYW1lOlwiUGFnZUxlZnRcIixnbHlwaDpcImU3NjBcIn0se25hbWU6XCJQYWdlUmlnaHRcIixnbHlwaDpcImU3NjFcIn0se25hbWU6XCJNdWx0aVNlbGVjdFwiLGdseXBoOlwiZTc2MlwifSx7bmFtZTpcIktleWJvYXJkTGVmdEhhbmRlZFwiLGdseXBoOlwiZTc2M1wifSx7bmFtZTpcIktleWJvYXJkUmlnaHRIYW5kZWRcIixnbHlwaDpcImU3NjRcIn0se25hbWU6XCJLZXlib2FyZENsYXNzaWNcIixnbHlwaDpcImU3NjVcIn0se25hbWU6XCJLZXlib2FyZFNwbGl0XCIsZ2x5cGg6XCJlNzY2XCJ9LHtuYW1lOlwiVm9sdW1lXCIsZ2x5cGg6XCJlNzY3XCJ9LHtuYW1lOlwiUGxheVwiLGdseXBoOlwiZTc2OFwifSx7bmFtZTpcIlBhdXNlXCIsZ2x5cGg6XCJlNzY5XCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnRcIixnbHlwaDpcImU3NmJcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRcIixnbHlwaDpcImU3NmNcIn0se25hbWU6XCJJbmtpbmdUb29sXCIsZ2x5cGg6XCJlNzZkXCJ9LHtuYW1lOlwiRW1vamkyXCIsZ2x5cGg6XCJlNzZlXCJ9LHtuYW1lOlwiR3JpcHBlckJhckhvcml6b250YWxcIixnbHlwaDpcImU3NmZcIn0se25hbWU6XCJTeXN0ZW1cIixnbHlwaDpcImU3NzBcIn0se25hbWU6XCJQZXJzb25hbGl6ZVwiLGdseXBoOlwiZTc3MVwifSx7bmFtZTpcIkRldmljZXNcIixnbHlwaDpcImU3NzJcIn0se25hbWU6XCJTZWFyY2hBbmRBcHBzXCIsZ2x5cGg6XCJlNzczXCJ9LHtuYW1lOlwiR2xvYmVcIixnbHlwaDpcImU3NzRcIn0se25hbWU6XCJUaW1lTGFuZ3VhZ2VcIixnbHlwaDpcImU3NzVcIn0se25hbWU6XCJFYXNlT2ZBY2Nlc3NcIixnbHlwaDpcImU3NzZcIn0se25hbWU6XCJVcGRhdGVSZXN0b3JlXCIsZ2x5cGg6XCJlNzc3XCJ9LHtuYW1lOlwiSGFuZ1VwXCIsZ2x5cGg6XCJlNzc4XCJ9LHtuYW1lOlwiQ29udGFjdEluZm9cIixnbHlwaDpcImU3NzlcIn0se25hbWU6XCJVbnBpblwiLGdseXBoOlwiZTc3YVwifSx7bmFtZTpcIkNvbnRhY3RcIixnbHlwaDpcImU3N2JcIn0se25hbWU6XCJNZW1vXCIsZ2x5cGg6XCJlNzdjXCJ9LHtuYW1lOlwiSW5jb21pbmdDYWxsXCIsZ2x5cGg6XCJlNzdlXCJ9LHtuYW1lOlwiUGFzdGVcIixnbHlwaDpcImU3N2ZcIn0se25hbWU6XCJQaG9uZUJvb2tcIixnbHlwaDpcImU3ODBcIn0se25hbWU6XCJMRURMaWdodFwiLGdseXBoOlwiZTc4MVwifSx7bmFtZTpcIkVycm9yXCIsZ2x5cGg6XCJlNzgzXCJ9LHtuYW1lOlwiR3JpcHBlckJhclZlcnRpY2FsXCIsZ2x5cGg6XCJlNzg0XCJ9LHtuYW1lOlwiVW5sb2NrXCIsZ2x5cGg6XCJlNzg1XCJ9LHtuYW1lOlwiU2xpZGVzaG93XCIsZ2x5cGg6XCJlNzg2XCJ9LHtuYW1lOlwiQ2FsZW5kYXJcIixnbHlwaDpcImU3ODdcIn0se25hbWU6XCJHcmlwcGVyUmVzaXplXCIsZ2x5cGg6XCJlNzg4XCJ9LHtuYW1lOlwiTWVnYXBob25lXCIsZ2x5cGg6XCJlNzg5XCJ9LHtuYW1lOlwiVHJpbVwiLGdseXBoOlwiZTc4YVwifSx7bmFtZTpcIk5ld1dpbmRvd1wiLGdseXBoOlwiZTc4YlwifSx7bmFtZTpcIlNhdmVMb2NhbFwiLGdseXBoOlwiZTc4Y1wifSx7bmFtZTpcIkNvbG9yXCIsZ2x5cGg6XCJlNzkwXCJ9LHtuYW1lOlwiRGF0YVNlbnNlXCIsZ2x5cGg6XCJlNzkxXCJ9LHtuYW1lOlwiU2F2ZUFzXCIsZ2x5cGg6XCJlNzkyXCJ9LHtuYW1lOlwiTGlnaHRcIixnbHlwaDpcImU3OTNcIn0se25hbWU6XCJBc3BlY3RSYXRpb1wiLGdseXBoOlwiZTc5OVwifSx7bmFtZTpcIkRhdGFTZW5zZUJhclwiLGdseXBoOlwiZTdhNVwifSx7bmFtZTpcIlJlZG9cIixnbHlwaDpcImU3YTZcIn0se25hbWU6XCJVbmRvXCIsZ2x5cGg6XCJlN2E3XCJ9LHtuYW1lOlwiQ3JvcFwiLGdseXBoOlwiZTdhOFwifSx7bmFtZTpcIk9wZW5XaXRoXCIsZ2x5cGg6XCJlN2FjXCJ9LHtuYW1lOlwiUm90YXRlXCIsZ2x5cGg6XCJlN2FkXCJ9LHtuYW1lOlwiUmVkRXllXCIsZ2x5cGg6XCJlN2IzXCJ9LHtuYW1lOlwiU2V0bG9ja1NjcmVlblwiLGdseXBoOlwiZTdiNVwifSx7bmFtZTpcIk1hcFBpbjJcIixnbHlwaDpcImU3YjdcIn0se25hbWU6XCJQYWNrYWdlXCIsZ2x5cGg6XCJlN2I4XCJ9LHtuYW1lOlwiV2FybmluZ1wiLGdseXBoOlwiZTdiYVwifSx7bmFtZTpcIlJlYWRpbmdMaXN0XCIsZ2x5cGg6XCJlN2JjXCJ9LHtuYW1lOlwiRWR1Y2F0aW9uXCIsZ2x5cGg6XCJlN2JlXCJ9LHtuYW1lOlwiU2hvcHBpbmdDYXJ0XCIsZ2x5cGg6XCJlN2JmXCJ9LHtuYW1lOlwiVHJhaW5cIixnbHlwaDpcImU3YzBcIn0se25hbWU6XCJGbGFnXCIsZ2x5cGg6XCJlN2MxXCJ9LHtuYW1lOlwiTW92ZVwiLGdseXBoOlwiZTdjMlwifSx7bmFtZTpcIlBhZ2VcIixnbHlwaDpcImU3YzNcIn0se25hbWU6XCJUYXNrVmlld1wiLGdseXBoOlwiZTdjNFwifSx7bmFtZTpcIkJyb3dzZVBob3Rvc1wiLGdseXBoOlwiZTdjNVwifSx7bmFtZTpcIkhhbGZTdGFyTGVmdFwiLGdseXBoOlwiZTdjNlwifSx7bmFtZTpcIkhhbGZTdGFyUmlnaHRcIixnbHlwaDpcImU3YzdcIn0se25hbWU6XCJSZWNvcmRcIixnbHlwaDpcImU3YzhcIn0se25hbWU6XCJUb3VjaFBvaW50ZXJcIixnbHlwaDpcImU3YzlcIn0se25hbWU6XCJMYW5nSlBOXCIsZ2x5cGg6XCJlN2RlXCJ9LHtuYW1lOlwiRmVycnlcIixnbHlwaDpcImU3ZTNcIn0se25hbWU6XCJIaWdobGlnaHRcIixnbHlwaDpcImU3ZTZcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJOb3RpZmljYXRpb25cIixnbHlwaDpcImU3ZTdcIn0se25hbWU6XCJQb3dlckJ1dHRvblwiLGdseXBoOlwiZTdlOFwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTmFycm93ZXJcIixnbHlwaDpcImU3ZWFcIn0se25hbWU6XCJSZXNpemVUb3VjaFNob3J0ZXJcIixnbHlwaDpcImU3ZWJcIn0se25hbWU6XCJEcml2aW5nTW9kZVwiLGdseXBoOlwiZTdlY1wifSx7bmFtZTpcIlJpbmdlclNpbGVudFwiLGdseXBoOlwiZTdlZFwifSx7bmFtZTpcIk90aGVyVXNlclwiLGdseXBoOlwiZTdlZVwifSx7bmFtZTpcIkFkbWluXCIsZ2x5cGg6XCJlN2VmXCJ9LHtuYW1lOlwiQ0NcIixnbHlwaDpcImU3ZjBcIn0se25hbWU6XCJTRENhcmRcIixnbHlwaDpcImU3ZjFcIn0se25hbWU6XCJDYWxsRm9yd2FyZGluZ1wiLGdseXBoOlwiZTdmMlwifSx7bmFtZTpcIlNldHRpbmdzRGlzcGxheVNvdW5kXCIsZ2x5cGg6XCJlN2YzXCJ9LHtuYW1lOlwiVFZNb25pdG9yXCIsZ2x5cGg6XCJlN2Y0XCJ9LHtuYW1lOlwiU3BlYWtlcnNcIixnbHlwaDpcImU3ZjVcIn0se25hbWU6XCJIZWFkcGhvbmVcIixnbHlwaDpcImU3ZjZcIn0se25hbWU6XCJEZXZpY2VMYXB0b3BQaWNcIixnbHlwaDpcImU3ZjdcIn0se25hbWU6XCJEZXZpY2VMYXB0b3BOb1BpY1wiLGdseXBoOlwiZTdmOFwifSx7bmFtZTpcIkRldmljZU1vbml0b3JSaWdodFBpY1wiLGdseXBoOlwiZTdmOVwifSx7bmFtZTpcIkRldmljZU1vbml0b3JMZWZ0UGljXCIsZ2x5cGg6XCJlN2ZhXCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvck5vUGljXCIsZ2x5cGg6XCJlN2ZiXCJ9LHtuYW1lOlwiR2FtZVwiLGdseXBoOlwiZTdmY1wifSx7bmFtZTpcIkhvcml6b250YWxUYWJLZXlcIixnbHlwaDpcImU3ZmRcIn0se25hbWU6XCJTdHJlZXRzaWRlU3BsaXRNaW5pbWl6ZVwiLGdseXBoOlwiZTgwMlwifSx7bmFtZTpcIlN0cmVldHNpZGVTcGxpdEV4cGFuZFwiLGdseXBoOlwiZTgwM1wifSx7bmFtZTpcIkNhclwiLGdseXBoOlwiZTgwNFwifSx7bmFtZTpcIldhbGtcIixnbHlwaDpcImU4MDVcIn0se25hbWU6XCJCdXNcIixnbHlwaDpcImU4MDZcIn0se25hbWU6XCJUaWx0VXBcIixnbHlwaDpcImU4MDlcIn0se25hbWU6XCJUaWx0RG93blwiLGdseXBoOlwiZTgwYVwifSx7bmFtZTpcIkNhbGxDb250cm9sXCIsZ2x5cGg6XCJlODBiXCJ9LHtuYW1lOlwiUm90YXRlTWFwUmlnaHRcIixnbHlwaDpcImU4MGNcIn0se25hbWU6XCJSb3RhdGVNYXBMZWZ0XCIsZ2x5cGg6XCJlODBkXCJ9LHtuYW1lOlwiSG9tZVwiLGdseXBoOlwiZTgwZlwifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvblwiLGdseXBoOlwiZTgxMVwifSx7bmFtZTpcIk1hcENvbXBhc3NUb3BcIixnbHlwaDpcImU4MTJcIn0se25hbWU6XCJNYXBDb21wYXNzQm90dG9tXCIsZ2x5cGg6XCJlODEzXCJ9LHtuYW1lOlwiSW5jaWRlbnRUcmlhbmdsZVwiLGdseXBoOlwiZTgxNFwifSx7bmFtZTpcIlRvdWNoXCIsZ2x5cGg6XCJlODE1XCJ9LHtuYW1lOlwiTWFwRGlyZWN0aW9uc1wiLGdseXBoOlwiZTgxNlwifSx7bmFtZTpcIlN0YXJ0UG9pbnRcIixnbHlwaDpcImU4MTlcIn0se25hbWU6XCJTdG9wUG9pbnRcIixnbHlwaDpcImU4MWFcIn0se25hbWU6XCJFbmRQb2ludFwiLGdseXBoOlwiZTgxYlwifSx7bmFtZTpcIkhpc3RvcnlcIixnbHlwaDpcImU4MWNcIn0se25hbWU6XCJMb2NhdGlvblwiLGdseXBoOlwiZTgxZFwifSx7bmFtZTpcIk1hcExheWVyc1wiLGdseXBoOlwiZTgxZVwifSx7bmFtZTpcIkFjY2lkZW50XCIsZ2x5cGg6XCJlODFmXCJ9LHtuYW1lOlwiV29ya1wiLGdseXBoOlwiZTgyMVwifSx7bmFtZTpcIkNvbnN0cnVjdGlvblwiLGdseXBoOlwiZTgyMlwifSx7bmFtZTpcIlJlY2VudFwiLGdseXBoOlwiZTgyM1wifSx7bmFtZTpcIkJhbmtcIixnbHlwaDpcImU4MjVcIn0se25hbWU6XCJEb3dubG9hZE1hcFwiLGdseXBoOlwiZTgyNlwifSx7bmFtZTpcIklua2luZ1Rvb2xGaWxsMlwiLGdseXBoOlwiZTgyOVwifSx7bmFtZTpcIkhpZ2hsaWdodEZpbGwyXCIsZ2x5cGg6XCJlODJhXCJ9LHtuYW1lOlwiRXJhc2VUb29sRmlsbFwiLGdseXBoOlwiZTgyYlwifSx7bmFtZTpcIkVyYXNlVG9vbEZpbGwyXCIsZ2x5cGg6XCJlODJjXCJ9LHtuYW1lOlwiRGljdGlvbmFyeVwiLGdseXBoOlwiZTgyZFwifSx7bmFtZTpcIkRpY3Rpb25hcnlBZGRcIixnbHlwaDpcImU4MmVcIn0se25hbWU6XCJUb29sVGlwXCIsZ2x5cGg6XCJlODJmXCJ9LHtuYW1lOlwiQ2hyb21lQmFja1wiLGdseXBoOlwiZTgzMFwifSx7bmFtZTpcIlByb3Zpc2lvbmluZ1BhY2thZ2VcIixnbHlwaDpcImU4MzVcIn0se25hbWU6XCJBZGRSZW1vdGVEZXZpY2VcIixnbHlwaDpcImU4MzZcIn0se25hbWU6XCJGb2xkZXJPcGVuXCIsZ2x5cGg6XCJlODM4XCJ9LHtuYW1lOlwiRXRoZXJuZXRcIixnbHlwaDpcImU4MzlcIn0se25hbWU6XCJTaGFyZUJyb2FkYmFuZFwiLGdseXBoOlwiZTgzYVwifSx7bmFtZTpcIkRpcmVjdEFjY2Vzc1wiLGdseXBoOlwiZTgzYlwifSx7bmFtZTpcIkRpYWxVcFwiLGdseXBoOlwiZTgzY1wifSx7bmFtZTpcIkRlZmVuZGVyQXBwXCIsZ2x5cGg6XCJlODNkXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZTgzZVwifSx7bmFtZTpcIkJhdHRlcnkxMFwiLGdseXBoOlwiZTgzZlwifSx7bmFtZTpcIlBpbm5lZFwiLGdseXBoOlwiZTg0MFwifSx7bmFtZTpcIlBpbkZpbGxcIixnbHlwaDpcImU4NDFcIn0se25hbWU6XCJQaW5uZWRGaWxsXCIsZ2x5cGg6XCJlODQyXCJ9LHtuYW1lOlwiUGVyaW9kS2V5XCIsZ2x5cGg6XCJlODQzXCJ9LHtuYW1lOlwiUHVuY0tleVwiLGdseXBoOlwiZTg0NFwifSx7bmFtZTpcIlJldlRvZ2dsZUtleVwiLGdseXBoOlwiZTg0NVwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMVwiLGdseXBoOlwiZTg0NlwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMlwiLGdseXBoOlwiZTg0N1wifSx7bmFtZTpcIkxlZnRRdW90ZVwiLGdseXBoOlwiZTg0OFwifSx7bmFtZTpcIlJpZ2h0UXVvdGVcIixnbHlwaDpcImU4NDlcIn0se25hbWU6XCJEb3duU2hpZnRLZXlcIixnbHlwaDpcImU4NGFcIn0se25hbWU6XCJVcFNoaWZ0S2V5XCIsZ2x5cGg6XCJlODRiXCJ9LHtuYW1lOlwiUHVuY0tleTBcIixnbHlwaDpcImU4NGNcIn0se25hbWU6XCJQdW5jS2V5TGVmdEJvdHRvbVwiLGdseXBoOlwiZTg0ZFwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lM1wiLGdseXBoOlwiZTg0ZVwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lNFwiLGdseXBoOlwiZTg0ZlwifSx7bmFtZTpcIkJhdHRlcnkwXCIsZ2x5cGg6XCJlODUwXCJ9LHtuYW1lOlwiQmF0dGVyeTFcIixnbHlwaDpcImU4NTFcIn0se25hbWU6XCJCYXR0ZXJ5MlwiLGdseXBoOlwiZTg1MlwifSx7bmFtZTpcIkJhdHRlcnkzXCIsZ2x5cGg6XCJlODUzXCJ9LHtuYW1lOlwiQmF0dGVyeTRcIixnbHlwaDpcImU4NTRcIn0se25hbWU6XCJCYXR0ZXJ5NVwiLGdseXBoOlwiZTg1NVwifSx7bmFtZTpcIkJhdHRlcnk2XCIsZ2x5cGg6XCJlODU2XCJ9LHtuYW1lOlwiQmF0dGVyeTdcIixnbHlwaDpcImU4NTdcIn0se25hbWU6XCJCYXR0ZXJ5OFwiLGdseXBoOlwiZTg1OFwifSx7bmFtZTpcIkJhdHRlcnk5XCIsZ2x5cGg6XCJlODU5XCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZTg1YVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzFcIixnbHlwaDpcImU4NWJcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJlODVjXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZTg1ZFwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzRcIixnbHlwaDpcImU4NWVcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJlODVmXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZTg2MFwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzdcIixnbHlwaDpcImU4NjFcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJlODYyXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMFwiLGdseXBoOlwiZTg2M1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjFcIixnbHlwaDpcImU4NjRcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIyXCIsZ2x5cGg6XCJlODY1XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyM1wiLGdseXBoOlwiZTg2NlwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjRcIixnbHlwaDpcImU4NjdcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI1XCIsZ2x5cGg6XCJlODY4XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyNlwiLGdseXBoOlwiZTg2OVwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjdcIixnbHlwaDpcImU4NmFcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI4XCIsZ2x5cGg6XCJlODZiXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczFcIixnbHlwaDpcImU4NmNcIn0se25hbWU6XCJTaWduYWxCYXJzMlwiLGdseXBoOlwiZTg2ZFwifSx7bmFtZTpcIlNpZ25hbEJhcnMzXCIsZ2x5cGg6XCJlODZlXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczRcIixnbHlwaDpcImU4NmZcIn0se25hbWU6XCJTaWduYWxCYXJzNVwiLGdseXBoOlwiZTg3MFwifSx7bmFtZTpcIlNpZ25hbE5vdENvbm5lY3RlZFwiLGdseXBoOlwiZTg3MVwifSx7bmFtZTpcIldpZmkxXCIsZ2x5cGg6XCJlODcyXCJ9LHtuYW1lOlwiV2lmaTJcIixnbHlwaDpcImU4NzNcIn0se25hbWU6XCJXaWZpM1wiLGdseXBoOlwiZTg3NFwifSx7bmFtZTpcIk1vYlNJTUxvY2tcIixnbHlwaDpcImU4NzVcIn0se25hbWU6XCJNb2JTSU1NaXNzaW5nXCIsZ2x5cGg6XCJlODc2XCJ9LHtuYW1lOlwiVmlicmF0ZVwiLGdseXBoOlwiZTg3N1wifSx7bmFtZTpcIlJvYW1pbmdJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJlODc4XCJ9LHtuYW1lOlwiUm9hbWluZ0RvbWVzdGljXCIsZ2x5cGg6XCJlODc5XCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJlODdhXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRSb2FtaW5nXCIsZ2x5cGg6XCJlODdiXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVwiLGdseXBoOlwiZTg3Y1wifSx7bmFtZTpcIkpwblJvbWFuamlMb2NrXCIsZ2x5cGg6XCJlODdkXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVNoaWZ0XCIsZ2x5cGg6XCJlODdlXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVNoaWZ0TG9ja1wiLGdseXBoOlwiZTg3ZlwifSx7bmFtZTpcIlN0YXR1c0RhdGFUcmFuc2ZlclwiLGdseXBoOlwiZTg4MFwifSx7bmFtZTpcIlN0YXR1c0RhdGFUcmFuc2ZlclZQTlwiLGdseXBoOlwiZTg4MVwifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0yXCIsZ2x5cGg6XCJlODgyXCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTJWUE5cIixnbHlwaDpcImU4ODNcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMVwiLGdseXBoOlwiZTg4NFwifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0xVlBOXCIsZ2x5cGg6XCJlODg1XCJ9LHtuYW1lOlwiU3RhdHVzU0dMVEVcIixnbHlwaDpcImU4ODZcIn0se25hbWU6XCJTdGF0dXNTR0xURUNlbGxcIixnbHlwaDpcImU4ODdcIn0se25hbWU6XCJTdGF0dXNTR0xURURhdGFWUE5cIixnbHlwaDpcImU4ODhcIn0se25hbWU6XCJTdGF0dXNWUE5cIixnbHlwaDpcImU4ODlcIn0se25hbWU6XCJXaWZpSG90c3BvdFwiLGdseXBoOlwiZTg4YVwifSx7bmFtZTpcIkxhbmd1YWdlS29yXCIsZ2x5cGg6XCJlODhiXCJ9LHtuYW1lOlwiTGFuZ3VhZ2VDaHRcIixnbHlwaDpcImU4OGNcIn0se25hbWU6XCJMYW5ndWFnZUNoc1wiLGdseXBoOlwiZTg4ZFwifSx7bmFtZTpcIlVTQlwiLGdseXBoOlwiZTg4ZVwifSx7bmFtZTpcIklua2luZ1Rvb2xGaWxsXCIsZ2x5cGg6XCJlODhmXCJ9LHtuYW1lOlwiVmlld1wiLGdseXBoOlwiZTg5MFwifSx7bmFtZTpcIkhpZ2hsaWdodEZpbGxcIixnbHlwaDpcImU4OTFcIn0se25hbWU6XCJQcmV2aW91c1wiLGdseXBoOlwiZTg5MlwifSx7bmFtZTpcIk5leHRcIixnbHlwaDpcImU4OTNcIn0se25hbWU6XCJDbGVhclwiLGdseXBoOlwiZTg5NFwifSx7bmFtZTpcIlN5bmNcIixnbHlwaDpcImU4OTVcIn0se25hbWU6XCJEb3dubG9hZFwiLGdseXBoOlwiZTg5NlwifSx7bmFtZTpcIkhlbHBcIixnbHlwaDpcImU4OTdcIn0se25hbWU6XCJVcGxvYWRcIixnbHlwaDpcImU4OThcIn0se25hbWU6XCJFbW9qaVwiLGdseXBoOlwiZTg5OVwifSx7bmFtZTpcIlR3b1BhZ2VcIixnbHlwaDpcImU4OWFcIn0se25hbWU6XCJMZWF2ZUNoYXRcIixnbHlwaDpcImU4OWJcIn0se25hbWU6XCJNYWlsRm9yd2FyZFwiLGdseXBoOlwiZTg5Y1wifSx7bmFtZTpcIlJvdGF0ZUNhbWVyYVwiLGdseXBoOlwiZTg5ZVwifSx7bmFtZTpcIkNsb3NlUGFuZVwiLGdseXBoOlwiZTg5ZlwifSx7bmFtZTpcIk9wZW5QYW5lXCIsZ2x5cGg6XCJlOGEwXCJ9LHtuYW1lOlwiUHJldmlld0xpbmtcIixnbHlwaDpcImU4YTFcIn0se25hbWU6XCJBdHRhY2hDYW1lcmFcIixnbHlwaDpcImU4YTJcIn0se25hbWU6XCJab29tSW5cIixnbHlwaDpcImU4YTNcIn0se25hbWU6XCJCb29rbWFya3NcIixnbHlwaDpcImU4YTRcIn0se25hbWU6XCJEb2N1bWVudFwiLGdseXBoOlwiZThhNVwifSx7bmFtZTpcIlByb3RlY3RlZERvY3VtZW50XCIsZ2x5cGg6XCJlOGE2XCJ9LHtuYW1lOlwiT3BlbkluTmV3V2luZG93XCIsZ2x5cGg6XCJlOGE3XCJ9LHtuYW1lOlwiTWFpbEZpbGxcIixnbHlwaDpcImU4YThcIn0se25hbWU6XCJWaWV3QWxsXCIsZ2x5cGg6XCJlOGE5XCJ9LHtuYW1lOlwiVmlkZW9DaGF0XCIsZ2x5cGg6XCJlOGFhXCJ9LHtuYW1lOlwiU3dpdGNoXCIsZ2x5cGg6XCJlOGFiXCJ9LHtuYW1lOlwiUmVuYW1lXCIsZ2x5cGg6XCJlOGFjXCJ9LHtuYW1lOlwiR29cIixnbHlwaDpcImU4YWRcIn0se25hbWU6XCJTdXJmYWNlSHViXCIsZ2x5cGg6XCJlOGFlXCJ9LHtuYW1lOlwiUmVtb3RlXCIsZ2x5cGg6XCJlOGFmXCJ9LHtuYW1lOlwiQ2xpY2tcIixnbHlwaDpcImU4YjBcIn0se25hbWU6XCJTaHVmZmxlXCIsZ2x5cGg6XCJlOGIxXCJ9LHtuYW1lOlwiTW92aWVzXCIsZ2x5cGg6XCJlOGIyXCJ9LHtuYW1lOlwiU2VsZWN0QWxsXCIsZ2x5cGg6XCJlOGIzXCJ9LHtuYW1lOlwiT3JpZW50YXRpb25cIixnbHlwaDpcImU4YjRcIn0se25hbWU6XCJJbXBvcnRcIixnbHlwaDpcImU4YjVcIn0se25hbWU6XCJJbXBvcnRBbGxcIixnbHlwaDpcImU4YjZcIn0se25hbWU6XCJGb2xkZXJcIixnbHlwaDpcImU4YjdcIn0se25hbWU6XCJXZWJjYW1cIixnbHlwaDpcImU4YjhcIn0se25hbWU6XCJQaWN0dXJlXCIsZ2x5cGg6XCJlOGI5XCJ9LHtuYW1lOlwiQ2FwdGlvblwiLGdseXBoOlwiZThiYVwifSx7bmFtZTpcIkNocm9tZUNsb3NlXCIsZ2x5cGg6XCJlOGJiXCJ9LHtuYW1lOlwiU2hvd1Jlc3VsdHNcIixnbHlwaDpcImU4YmNcIn0se25hbWU6XCJNZXNzYWdlXCIsZ2x5cGg6XCJlOGJkXCJ9LHtuYW1lOlwiTGVhZlwiLGdseXBoOlwiZThiZVwifSx7bmFtZTpcIkNhbGVuZGFyRGF5XCIsZ2x5cGg6XCJlOGJmXCJ9LHtuYW1lOlwiQ2FsZW5kYXJXZWVrXCIsZ2x5cGg6XCJlOGMwXCJ9LHtuYW1lOlwiQ2hhcmFjdGVyc1wiLGdseXBoOlwiZThjMVwifSx7bmFtZTpcIk1haWxSZXBseUFsbFwiLGdseXBoOlwiZThjMlwifSx7bmFtZTpcIlJlYWRcIixnbHlwaDpcImU4YzNcIn0se25hbWU6XCJTaG93QmNjXCIsZ2x5cGg6XCJlOGM0XCJ9LHtuYW1lOlwiSGlkZUJjY1wiLGdseXBoOlwiZThjNVwifSx7bmFtZTpcIkN1dFwiLGdseXBoOlwiZThjNlwifSx7bmFtZTpcIlBheW1lbnRDYXJkXCIsZ2x5cGg6XCJlOGM3XCJ9LHtuYW1lOlwiQ29weVwiLGdseXBoOlwiZThjOFwifSx7bmFtZTpcIkltcG9ydGFudFwiLGdseXBoOlwiZThjOVwifSx7bmFtZTpcIk1haWxSZXBseVwiLGdseXBoOlwiZThjYVwifSx7bmFtZTpcIlNvcnRcIixnbHlwaDpcImU4Y2JcIn0se25hbWU6XCJNb2JpbGVUYWJsZXRcIixnbHlwaDpcImU4Y2NcIn0se25hbWU6XCJEaXNjb25uZWN0RHJpdmVcIixnbHlwaDpcImU4Y2RcIn0se25hbWU6XCJNYXBEcml2ZVwiLGdseXBoOlwiZThjZVwifSx7bmFtZTpcIkNvbnRhY3RQcmVzZW5jZVwiLGdseXBoOlwiZThjZlwifSx7bmFtZTpcIlByaW9yaXR5XCIsZ2x5cGg6XCJlOGQwXCJ9LHtuYW1lOlwiR290b1RvZGF5XCIsZ2x5cGg6XCJlOGQxXCJ9LHtuYW1lOlwiRm9udFwiLGdseXBoOlwiZThkMlwifSx7bmFtZTpcIkZvbnRDb2xvclwiLGdseXBoOlwiZThkM1wifSx7bmFtZTpcIkNvbnRhY3QyXCIsZ2x5cGg6XCJlOGQ0XCJ9LHtuYW1lOlwiRm9sZGVyRmlsbFwiLGdseXBoOlwiZThkNVwifSx7bmFtZTpcIkF1ZGlvXCIsZ2x5cGg6XCJlOGQ2XCJ9LHtuYW1lOlwiUGVybWlzc2lvbnNcIixnbHlwaDpcImU4ZDdcIn0se25hbWU6XCJEaXNhYmxlVXBkYXRlc1wiLGdseXBoOlwiZThkOFwifSx7bmFtZTpcIlVuZmF2b3JpdGVcIixnbHlwaDpcImU4ZDlcIn0se25hbWU6XCJPcGVuTG9jYWxcIixnbHlwaDpcImU4ZGFcIn0se25hbWU6XCJJdGFsaWNcIixnbHlwaDpcImU4ZGJcIn0se25hbWU6XCJVbmRlcmxpbmVcIixnbHlwaDpcImU4ZGNcIn0se25hbWU6XCJCb2xkXCIsZ2x5cGg6XCJlOGRkXCJ9LHtuYW1lOlwiTW92ZVRvRm9sZGVyXCIsZ2x5cGg6XCJlOGRlXCJ9LHtuYW1lOlwiTGlrZURpc2xpa2VcIixnbHlwaDpcImU4ZGZcIn0se25hbWU6XCJEaXNsaWtlXCIsZ2x5cGg6XCJlOGUwXCJ9LHtuYW1lOlwiTGlrZVwiLGdseXBoOlwiZThlMVwifSx7bmFtZTpcIkFsaWduUmlnaHRcIixnbHlwaDpcImU4ZTJcIn0se25hbWU6XCJBbGlnbkNlbnRlclwiLGdseXBoOlwiZThlM1wifSx7bmFtZTpcIkFsaWduTGVmdFwiLGdseXBoOlwiZThlNFwifSx7bmFtZTpcIk9wZW5GaWxlXCIsZ2x5cGg6XCJlOGU1XCJ9LHtuYW1lOlwiQ2xlYXJTZWxlY3Rpb25cIixnbHlwaDpcImU4ZTZcIn0se25hbWU6XCJGb250RGVjcmVhc2VcIixnbHlwaDpcImU4ZTdcIn0se25hbWU6XCJGb250SW5jcmVhc2VcIixnbHlwaDpcImU4ZThcIn0se25hbWU6XCJGb250U2l6ZVwiLGdseXBoOlwiZThlOVwifSx7bmFtZTpcIkNlbGxQaG9uZVwiLGdseXBoOlwiZThlYVwifSx7bmFtZTpcIlJlc2hhcmVcIixnbHlwaDpcImU4ZWJcIn0se25hbWU6XCJUYWdcIixnbHlwaDpcImU4ZWNcIn0se25hbWU6XCJSZXBlYXRPbmVcIixnbHlwaDpcImU4ZWRcIn0se25hbWU6XCJSZXBlYXRBbGxcIixnbHlwaDpcImU4ZWVcIn0se25hbWU6XCJDYWxjdWxhdG9yXCIsZ2x5cGg6XCJlOGVmXCJ9LHtuYW1lOlwiRGlyZWN0aW9uc1wiLGdseXBoOlwiZThmMFwifSx7bmFtZTpcIkxpYnJhcnlcIixnbHlwaDpcImU4ZjFcIn0se25hbWU6XCJDaGF0QnViYmxlc1wiLGdseXBoOlwiZThmMlwifSx7bmFtZTpcIlBvc3RVcGRhdGVcIixnbHlwaDpcImU4ZjNcIn0se25hbWU6XCJOZXdGb2xkZXJcIixnbHlwaDpcImU4ZjRcIn0se25hbWU6XCJDYWxlbmRhclJlcGx5XCIsZ2x5cGg6XCJlOGY1XCJ9LHtuYW1lOlwiVW5zeW5jRm9sZGVyXCIsZ2x5cGg6XCJlOGY2XCJ9LHtuYW1lOlwiU3luY0ZvbGRlclwiLGdseXBoOlwiZThmN1wifSx7bmFtZTpcIkJsb2NrQ29udGFjdFwiLGdseXBoOlwiZThmOFwifSx7bmFtZTpcIlN3aXRjaEFwcHNcIixnbHlwaDpcImU4ZjlcIn0se25hbWU6XCJBZGRGcmllbmRcIixnbHlwaDpcImU4ZmFcIn0se25hbWU6XCJBY2NlcHRcIixnbHlwaDpcImU4ZmJcIn0se25hbWU6XCJHb1RvU3RhcnRcIixnbHlwaDpcImU4ZmNcIn0se25hbWU6XCJCdWxsZXRlZExpc3RcIixnbHlwaDpcImU4ZmRcIn0se25hbWU6XCJTY2FuXCIsZ2x5cGg6XCJlOGZlXCJ9LHtuYW1lOlwiUHJldmlld1wiLGdseXBoOlwiZThmZlwifSx7bmFtZTpcIkdyb3VwXCIsZ2x5cGg6XCJlOTAyXCJ9LHtuYW1lOlwiWmVyb0JhcnNcIixnbHlwaDpcImU5MDRcIn0se25hbWU6XCJPbmVCYXJcIixnbHlwaDpcImU5MDVcIn0se25hbWU6XCJUd29CYXJzXCIsZ2x5cGg6XCJlOTA2XCJ9LHtuYW1lOlwiVGhyZWVCYXJzXCIsZ2x5cGg6XCJlOTA3XCJ9LHtuYW1lOlwiRm91ckJhcnNcIixnbHlwaDpcImU5MDhcIn0se25hbWU6XCJXb3JsZFwiLGdseXBoOlwiZTkwOVwifSx7bmFtZTpcIkNvbW1lbnRcIixnbHlwaDpcImU5MGFcIn0se25hbWU6XCJNdXNpY0luZm9cIixnbHlwaDpcImU5MGJcIn0se25hbWU6XCJEb2NrTGVmdFwiLGdseXBoOlwiZTkwY1wifSx7bmFtZTpcIkRvY2tSaWdodFwiLGdseXBoOlwiZTkwZFwifSx7bmFtZTpcIkRvY2tCb3R0b21cIixnbHlwaDpcImU5MGVcIn0se25hbWU6XCJSZXBhaXJcIixnbHlwaDpcImU5MGZcIn0se25hbWU6XCJBY2NvdW50c1wiLGdseXBoOlwiZTkxMFwifSx7bmFtZTpcIkR1bGxTb3VuZFwiLGdseXBoOlwiZTkxMVwifSx7bmFtZTpcIk1hbmFnZVwiLGdseXBoOlwiZTkxMlwifSx7bmFtZTpcIlN0cmVldFwiLGdseXBoOlwiZTkxM1wifSx7bmFtZTpcIlByaW50ZXIzRFwiLGdseXBoOlwiZTkxNFwifSx7bmFtZTpcIlJhZGlvQnVsbGV0XCIsZ2x5cGg6XCJlOTE1XCJ9LHtuYW1lOlwiU3RvcHdhdGNoXCIsZ2x5cGg6XCJlOTE2XCJ9LHtuYW1lOlwiUGhvdG9cIixnbHlwaDpcImU5MWJcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJcIixnbHlwaDpcImU5MWNcIn0se25hbWU6XCJGdWxsQ2lyY2xlTWFza1wiLGdseXBoOlwiZTkxZlwifSx7bmFtZTpcIkNocm9tZU1pbmltaXplXCIsZ2x5cGg6XCJlOTIxXCJ9LHtuYW1lOlwiQ2hyb21lTWF4aW1pemVcIixnbHlwaDpcImU5MjJcIn0se25hbWU6XCJDaHJvbWVSZXN0b3JlXCIsZ2x5cGg6XCJlOTIzXCJ9LHtuYW1lOlwiQW5ub3RhdGlvblwiLGdseXBoOlwiZTkyNFwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWVNtXCIsZ2x5cGg6XCJlOTI1XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZTWRcIixnbHlwaDpcImU5MjZcIn0se25hbWU6XCJTd2lwZVwiLGdseXBoOlwiZTkyN1wifSx7bmFtZTpcIkZpbmdlcnByaW50XCIsZ2x5cGg6XCJlOTI4XCJ9LHtuYW1lOlwiSGFuZHdyaXRpbmdcIixnbHlwaDpcImU5MjlcIn0se25hbWU6XCJDaHJvbWVCYWNrVG9XaW5kb3dcIixnbHlwaDpcImU5MmNcIn0se25hbWU6XCJDaHJvbWVGdWxsU2NyZWVuXCIsZ2x5cGg6XCJlOTJkXCJ9LHtuYW1lOlwiS2V5Ym9hcmRTdGFuZGFyZFwiLGdseXBoOlwiZTkyZVwifSx7bmFtZTpcIktleWJvYXJkRGlzbWlzc1wiLGdseXBoOlwiZTkyZlwifSx7bmFtZTpcIkNvbXBsZXRlZFwiLGdseXBoOlwiZTkzMFwifSx7bmFtZTpcIkNocm9tZUFubm90YXRlXCIsZ2x5cGg6XCJlOTMxXCJ9LHtuYW1lOlwiTGFiZWxcIixnbHlwaDpcImU5MzJcIn0se25hbWU6XCJJQmVhbVwiLGdseXBoOlwiZTkzM1wifSx7bmFtZTpcIklCZWFtT3V0bGluZVwiLGdseXBoOlwiZTkzNFwifSx7bmFtZTpcIkZsaWNrRG93blwiLGdseXBoOlwiZTkzNVwifSx7bmFtZTpcIkZsaWNrVXBcIixnbHlwaDpcImU5MzZcIn0se25hbWU6XCJGbGlja0xlZnRcIixnbHlwaDpcImU5MzdcIn0se25hbWU6XCJGbGlja1JpZ2h0XCIsZ2x5cGg6XCJlOTM4XCJ9LHtuYW1lOlwiRmVlZGJhY2tBcHBcIixnbHlwaDpcImU5MzlcIn0se25hbWU6XCJNdXNpY0FsYnVtXCIsZ2x5cGg6XCJlOTNjXCJ9LHtuYW1lOlwiU3RyZWFtaW5nXCIsZ2x5cGg6XCJlOTNlXCJ9LHtuYW1lOlwiQ29kZVwiLGdseXBoOlwiZTk0M1wifSx7bmFtZTpcIlJldHVyblRvV2luZG93XCIsZ2x5cGg6XCJlOTQ0XCJ9LHtuYW1lOlwiTGlnaHRuaW5nQm9sdFwiLGdseXBoOlwiZTk0NVwifSx7bmFtZTpcIkluZm9cIixnbHlwaDpcImU5NDZcIn0se25hbWU6XCJDYWxjdWxhdG9yTXVsdGlwbHlcIixnbHlwaDpcImU5NDdcIn0se25hbWU6XCJDYWxjdWxhdG9yQWRkaXRpb25cIixnbHlwaDpcImU5NDhcIn0se25hbWU6XCJDYWxjdWxhdG9yU3VidHJhY3RcIixnbHlwaDpcImU5NDlcIn0se25hbWU6XCJDYWxjdWxhdG9yRGl2aWRlXCIsZ2x5cGg6XCJlOTRhXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvclNxdWFyZXJvb3RcIixnbHlwaDpcImU5NGJcIn0se25hbWU6XCJDYWxjdWxhdG9yUGVyY2VudGFnZVwiLGdseXBoOlwiZTk0Y1wifSx7bmFtZTpcIkNhbGN1bGF0b3JOZWdhdGVcIixnbHlwaDpcImU5NGRcIn0se25hbWU6XCJDYWxjdWxhdG9yRXF1YWxUb1wiLGdseXBoOlwiZTk0ZVwifSx7bmFtZTpcIkNhbGN1bGF0b3JCYWNrc3BhY2VcIixnbHlwaDpcImU5NGZcIn0se25hbWU6XCJDb21wb25lbnRcIixnbHlwaDpcImU5NTBcIn0se25hbWU6XCJETUNcIixnbHlwaDpcImU5NTFcIn0se25hbWU6XCJEb2NrXCIsZ2x5cGg6XCJlOTUyXCJ9LHtuYW1lOlwiTXVsdGltZWRpYURNU1wiLGdseXBoOlwiZTk1M1wifSx7bmFtZTpcIk11bHRpbWVkaWFEVlJcIixnbHlwaDpcImU5NTRcIn0se25hbWU6XCJNdWx0aW1lZGlhUE1QXCIsZ2x5cGg6XCJlOTU1XCJ9LHtuYW1lOlwiUHJpbnRmYXhQcmludGVyRmlsZVwiLGdseXBoOlwiZTk1NlwifSx7bmFtZTpcIlNlbnNvclwiLGdseXBoOlwiZTk1N1wifSx7bmFtZTpcIlN0b3JhZ2VPcHRpY2FsXCIsZ2x5cGg6XCJlOTU4XCJ9LHtuYW1lOlwiQ29tbXVuaWNhdGlvbnNcIixnbHlwaDpcImU5NWFcIn0se25hbWU6XCJIZWFkc2V0XCIsZ2x5cGg6XCJlOTViXCJ9LHtuYW1lOlwiUHJvamVjdG9yXCIsZ2x5cGg6XCJlOTVkXCJ9LHtuYW1lOlwiSGVhbHRoXCIsZ2x5cGg6XCJlOTVlXCJ9LHtuYW1lOlwiV2lyZVwiLGdseXBoOlwiZTk1ZlwifSx7bmFtZTpcIldlYmNhbTJcIixnbHlwaDpcImU5NjBcIn0se25hbWU6XCJJbnB1dFwiLGdseXBoOlwiZTk2MVwifSx7bmFtZTpcIk1vdXNlXCIsZ2x5cGg6XCJlOTYyXCJ9LHtuYW1lOlwiU21hcnRjYXJkXCIsZ2x5cGg6XCJlOTYzXCJ9LHtuYW1lOlwiU21hcnRjYXJkVmlydHVhbFwiLGdseXBoOlwiZTk2NFwifSx7bmFtZTpcIk1lZGlhU3RvcmFnZVRvd2VyXCIsZ2x5cGg6XCJlOTY1XCJ9LHtuYW1lOlwiUmV0dXJuS2V5U21cIixnbHlwaDpcImU5NjZcIn0se25hbWU6XCJHYW1lQ29uc29sZVwiLGdseXBoOlwiZTk2N1wifSx7bmFtZTpcIk5ldHdvcmtcIixnbHlwaDpcImU5NjhcIn0se25hbWU6XCJTdG9yYWdlTmV0d29ya1dpcmVsZXNzXCIsZ2x5cGg6XCJlOTY5XCJ9LHtuYW1lOlwiU3RvcmFnZVRhcGVcIixnbHlwaDpcImU5NmFcIn0se25hbWU6XCJDaGV2cm9uVXBTbWFsbFwiLGdseXBoOlwiZTk2ZFwifSx7bmFtZTpcIkNoZXZyb25Eb3duU21hbGxcIixnbHlwaDpcImU5NmVcIn0se25hbWU6XCJDaGV2cm9uTGVmdFNtYWxsXCIsZ2x5cGg6XCJlOTZmXCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0U21hbGxcIixnbHlwaDpcImU5NzBcIn0se25hbWU6XCJDaGV2cm9uVXBNZWRcIixnbHlwaDpcImU5NzFcIn0se25hbWU6XCJDaGV2cm9uRG93bk1lZFwiLGdseXBoOlwiZTk3MlwifSx7bmFtZTpcIkNoZXZyb25MZWZ0TWVkXCIsZ2x5cGg6XCJlOTczXCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0TWVkXCIsZ2x5cGg6XCJlOTc0XCJ9LHtuYW1lOlwiRGV2aWNlczJcIixnbHlwaDpcImU5NzVcIn0se25hbWU6XCJFeHBhbmRUaWxlXCIsZ2x5cGg6XCJlOTc2XCJ9LHtuYW1lOlwiUEMxXCIsZ2x5cGg6XCJlOTc3XCJ9LHtuYW1lOlwiUHJlc2VuY2VDaGlja2xldFwiLGdseXBoOlwiZTk3OFwifSx7bmFtZTpcIlByZXNlbmNlQ2hpY2tsZXRWaWRlb1wiLGdseXBoOlwiZTk3OVwifSx7bmFtZTpcIlJlcGx5XCIsZ2x5cGg6XCJlOTdhXCJ9LHtuYW1lOlwiU2V0VGlsZVwiLGdseXBoOlwiZTk3YlwifSx7bmFtZTpcIlR5cGVcIixnbHlwaDpcImU5N2NcIn0se25hbWU6XCJLb3JlYW5cIixnbHlwaDpcImU5N2RcIn0se25hbWU6XCJIYWxmQWxwaGFcIixnbHlwaDpcImU5N2VcIn0se25hbWU6XCJGdWxsQWxwaGFcIixnbHlwaDpcImU5N2ZcIn0se25hbWU6XCJLZXkxMk9uXCIsZ2x5cGg6XCJlOTgwXCJ9LHtuYW1lOlwiQ2hpbmVzZUNoYW5namllXCIsZ2x5cGg6XCJlOTgxXCJ9LHtuYW1lOlwiUVdFUlRZT25cIixnbHlwaDpcImU5ODJcIn0se25hbWU6XCJRV0VSVFlPZmZcIixnbHlwaDpcImU5ODNcIn0se25hbWU6XCJDaGluZXNlUXVpY2tcIixnbHlwaDpcImU5ODRcIn0se25hbWU6XCJKYXBhbmVzZVwiLGdseXBoOlwiZTk4NVwifSx7bmFtZTpcIkZ1bGxIaXJhZ2FuYVwiLGdseXBoOlwiZTk4NlwifSx7bmFtZTpcIkZ1bGxLYXRha2FuYVwiLGdseXBoOlwiZTk4N1wifSx7bmFtZTpcIkhhbGZLYXRha2FuYVwiLGdseXBoOlwiZTk4OFwifSx7bmFtZTpcIkNoaW5lc2VCb1BvTW9Gb1wiLGdseXBoOlwiZTk4OVwifSx7bmFtZTpcIkNoaW5lc2VQaW55aW5cIixnbHlwaDpcImU5OGFcIn0se25hbWU6XCJDb25zdHJ1Y3Rpb25Db25lXCIsZ2x5cGg6XCJlOThmXCJ9LHtuYW1lOlwiWGJveE9uZUNvbnNvbGVcIixnbHlwaDpcImU5OTBcIn0se25hbWU6XCJWb2x1bWUwXCIsZ2x5cGg6XCJlOTkyXCJ9LHtuYW1lOlwiVm9sdW1lMVwiLGdseXBoOlwiZTk5M1wifSx7bmFtZTpcIlZvbHVtZTJcIixnbHlwaDpcImU5OTRcIn0se25hbWU6XCJWb2x1bWUzXCIsZ2x5cGg6XCJlOTk1XCJ9LHtuYW1lOlwiQmF0dGVyeVVua25vd25cIixnbHlwaDpcImU5OTZcIn0se25hbWU6XCJXaWZpQXR0ZW50aW9uT3ZlcmxheVwiLGdseXBoOlwiZTk5OFwifSx7bmFtZTpcIlJvYm90XCIsZ2x5cGg6XCJlOTlhXCJ9LHtuYW1lOlwiVGFwQW5kU2VuZFwiLGdseXBoOlwiZTlhMVwifSx7bmFtZTpcIkZpdFBhZ2VcIixnbHlwaDpcImU5YTZcIn0se25hbWU6XCJQYXNzd29yZEtleVNob3dcIixnbHlwaDpcImU5YThcIn0se25hbWU6XCJQYXNzd29yZEtleUhpZGVcIixnbHlwaDpcImU5YTlcIn0se25hbWU6XCJCaWRpTHRyXCIsZ2x5cGg6XCJlOWFhXCJ9LHtuYW1lOlwiQmlkaVJ0bFwiLGdseXBoOlwiZTlhYlwifSx7bmFtZTpcIkZvcndhcmRTbVwiLGdseXBoOlwiZTlhY1wifSx7bmFtZTpcIkNvbW1hS2V5XCIsZ2x5cGg6XCJlOWFkXCJ9LHtuYW1lOlwiRGFzaEtleVwiLGdseXBoOlwiZTlhZVwifSx7bmFtZTpcIkR1bGxTb3VuZEtleVwiLGdseXBoOlwiZTlhZlwifSx7bmFtZTpcIkhhbGZEdWxsU291bmRcIixnbHlwaDpcImU5YjBcIn0se25hbWU6XCJSaWdodERvdWJsZVF1b3RlXCIsZ2x5cGg6XCJlOWIxXCJ9LHtuYW1lOlwiTGVmdERvdWJsZVF1b3RlXCIsZ2x5cGg6XCJlOWIyXCJ9LHtuYW1lOlwiUHVuY0tleVJpZ2h0Qm90dG9tXCIsZ2x5cGg6XCJlOWIzXCJ9LHtuYW1lOlwiUHVuY0tleTFcIixnbHlwaDpcImU5YjRcIn0se25hbWU6XCJQdW5jS2V5MlwiLGdseXBoOlwiZTliNVwifSx7bmFtZTpcIlB1bmNLZXkzXCIsZ2x5cGg6XCJlOWI2XCJ9LHtuYW1lOlwiUHVuY0tleTRcIixnbHlwaDpcImU5YjdcIn0se25hbWU6XCJQdW5jS2V5NVwiLGdseXBoOlwiZTliOFwifSx7bmFtZTpcIlB1bmNLZXk2XCIsZ2x5cGg6XCJlOWI5XCJ9LHtuYW1lOlwiUHVuY0tleTlcIixnbHlwaDpcImU5YmFcIn0se25hbWU6XCJQdW5jS2V5N1wiLGdseXBoOlwiZTliYlwifSx7bmFtZTpcIlB1bmNLZXk4XCIsZ2x5cGg6XCJlOWJjXCJ9LHtuYW1lOlwiRnJpZ2lkXCIsZ2x5cGg6XCJlOWNhXCJ9LHtuYW1lOlwiVW5rbm93blwiLGdseXBoOlwiZTljZVwifSx7bmFtZTpcIkFyZWFDaGFydFwiLGdseXBoOlwiZTlkMlwifSx7bmFtZTpcIkNoZWNrTGlzdFwiLGdseXBoOlwiZTlkNVwifSx7bmFtZTpcIkRpYWdub3N0aWNcIixnbHlwaDpcImU5ZDlcIn0se25hbWU6XCJFcXVhbGl6ZXJcIixnbHlwaDpcImU5ZTlcIn0se25hbWU6XCJQcm9jZXNzXCIsZ2x5cGg6XCJlOWYzXCJ9LHtuYW1lOlwiUHJvY2Vzc2luZ1wiLGdseXBoOlwiZTlmNVwifSx7bmFtZTpcIlJlcG9ydERvY3VtZW50XCIsZ2x5cGg6XCJlOWY5XCJ9LHtuYW1lOlwiRGVzY3JpcHRpb25cIixnbHlwaDpcIlVuaWNvZGUgcG9pbnRcIn0se25hbWU6XCJWaWRlb1NvbGlkXCIsZ2x5cGg6XCJlYTBjXCJ9LHtuYW1lOlwiTWl4ZWRNZWRpYUJhZGdlXCIsZ2x5cGg6XCJlYTBkXCJ9LHtuYW1lOlwiRGlzY29ubmVjdERpc3BsYXlcIixnbHlwaDpcImVhMTRcIn0se25hbWU6XCJTaGllbGRcIixnbHlwaDpcImVhMThcIn0se25hbWU6XCJJbmZvMlwiLGdseXBoOlwiZWExZlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlckFzdGVyaXNrXCIsZ2x5cGg6XCJlYTIxXCJ9LHtuYW1lOlwiQmV0YVwiLGdseXBoOlwiZWEyNFwifSx7bmFtZTpcIlNhdmVDb3B5XCIsZ2x5cGg6XCJlYTM1XCJ9LHtuYW1lOlwiTGlzdFwiLGdseXBoOlwiZWEzN1wifSx7bmFtZTpcIkFzdGVyaXNrXCIsZ2x5cGg6XCJlYTM4XCJ9LHtuYW1lOlwiRXJyb3JCYWRnZVwiLGdseXBoOlwiZWEzOVwifSx7bmFtZTpcIkNpcmNsZVJpbmdcIixnbHlwaDpcImVhM2FcIn0se25hbWU6XCJDaXJjbGVGaWxsXCIsZ2x5cGg6XCJlYTNiXCJ9LHtuYW1lOlwiTWVyZ2VDYWxsXCIsZ2x5cGg6XCJlYTNjXCJ9LHtuYW1lOlwiUHJpdmF0ZUNhbGxcIixnbHlwaDpcImVhM2RcIn0se25hbWU6XCJSZWNvcmQyXCIsZ2x5cGg6XCJlYTNmXCJ9LHtuYW1lOlwiQWxsQXBwc01pcnJvcmVkXCIsZ2x5cGg6XCJlYTQwXCJ9LHtuYW1lOlwiQm9va21hcmtzTWlycm9yZWRcIixnbHlwaDpcImVhNDFcIn0se25hbWU6XCJCdWxsZXRlZExpc3RNaXJyb3JlZFwiLGdseXBoOlwiZWE0MlwifSx7bmFtZTpcIkNhbGxGb3J3YXJkSW50ZXJuYXRpb25hbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQzXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRSb2FtaW5nTWlycm9yZWRcIixnbHlwaDpcImVhNDRcIn0se25hbWU6XCJDaHJvbWVCYWNrTWlycm9yZWRcIixnbHlwaDpcImVhNDdcIn0se25hbWU6XCJDbGVhclNlbGVjdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQ4XCJ9LHtuYW1lOlwiQ2xvc2VQYW5lTWlycm9yZWRcIixnbHlwaDpcImVhNDlcIn0se25hbWU6XCJDb250YWN0SW5mb01pcnJvcmVkXCIsZ2x5cGg6XCJlYTRhXCJ9LHtuYW1lOlwiRG9ja1JpZ2h0TWlycm9yZWRcIixnbHlwaDpcImVhNGJcIn0se25hbWU6XCJEb2NrTGVmdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTRjXCJ9LHtuYW1lOlwiRXhwYW5kVGlsZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTRlXCJ9LHtuYW1lOlwiR29NaXJyb3JlZFwiLGdseXBoOlwiZWE0ZlwifSx7bmFtZTpcIkdyaXBwZXJSZXNpemVNaXJyb3JlZFwiLGdseXBoOlwiZWE1MFwifSx7bmFtZTpcIkhlbHBNaXJyb3JlZFwiLGdseXBoOlwiZWE1MVwifSx7bmFtZTpcIkltcG9ydE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUyXCJ9LHtuYW1lOlwiSW1wb3J0QWxsTWlycm9yZWRcIixnbHlwaDpcImVhNTNcIn0se25hbWU6XCJMZWF2ZUNoYXRNaXJyb3JlZFwiLGdseXBoOlwiZWE1NFwifSx7bmFtZTpcIkxpc3RNaXJyb3JlZFwiLGdseXBoOlwiZWE1NVwifSx7bmFtZTpcIk1haWxGb3J3YXJkTWlycm9yZWRcIixnbHlwaDpcImVhNTZcIn0se25hbWU6XCJNYWlsUmVwbHlNaXJyb3JlZFwiLGdseXBoOlwiZWE1N1wifSx7bmFtZTpcIk1haWxSZXBseUFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU4XCJ9LHtuYW1lOlwiT3BlblBhbmVNaXJyb3JlZFwiLGdseXBoOlwiZWE1YlwifSx7bmFtZTpcIk9wZW5XaXRoTWlycm9yZWRcIixnbHlwaDpcImVhNWNcIn0se25hbWU6XCJQYXJraW5nTG9jYXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZWE1ZVwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTWVkaXVtTWlycm9yZWRcIixnbHlwaDpcImVhNWZcIn0se25hbWU6XCJSZXNpemVNb3VzZVNtYWxsTWlycm9yZWRcIixnbHlwaDpcImVhNjBcIn0se25hbWU6XCJSZXNpemVNb3VzZVRhbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2MVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTmFycm93ZXJNaXJyb3JlZFwiLGdseXBoOlwiZWE2MlwifSx7bmFtZTpcIlNlbmRNaXJyb3JlZFwiLGdseXBoOlwiZWE2M1wifSx7bmFtZTpcIlNlbmRGaWxsTWlycm9yZWRcIixnbHlwaDpcImVhNjRcIn0se25hbWU6XCJTaG93UmVzdWx0c01pcnJvcmVkXCIsZ2x5cGg6XCJlYTY1XCJ9LHtuYW1lOlwiTWVkaWFcIixnbHlwaDpcImVhNjlcIn0se25hbWU6XCJTeW5jRXJyb3JcIixnbHlwaDpcImVhNmFcIn0se25hbWU6XCJEZXZpY2VzM1wiLGdseXBoOlwiZWE2Y1wifSx7bmFtZTpcIlNsb3dNb3Rpb25PblwiLGdseXBoOlwiZWE3OVwifSx7bmFtZTpcIkxpZ2h0YnVsYlwiLGdseXBoOlwiZWE4MFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVwiLGdseXBoOlwiZWE4MVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlXCIsZ2x5cGg6XCJlYTgyXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JcIixnbHlwaDpcImVhODNcIn0se25hbWU6XCJTdGF0dXNXYXJuaW5nXCIsZ2x5cGg6XCJlYTg0XCJ9LHtuYW1lOlwiUHV6emxlXCIsZ2x5cGg6XCJlYTg2XCJ9LHtuYW1lOlwiQ2FsZW5kYXJTb2xpZFwiLGdseXBoOlwiZWE4OVwifSx7bmFtZTpcIkhvbWVTb2xpZFwiLGdseXBoOlwiZWE4YVwifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvblNvbGlkXCIsZ2x5cGg6XCJlYThiXCJ9LHtuYW1lOlwiQ29udGFjdFNvbGlkXCIsZ2x5cGg6XCJlYThjXCJ9LHtuYW1lOlwiQ29uc3RydWN0aW9uU29saWRcIixnbHlwaDpcImVhOGRcIn0se25hbWU6XCJBY2NpZGVudFNvbGlkXCIsZ2x5cGg6XCJlYThlXCJ9LHtuYW1lOlwiUmluZ2VyXCIsZ2x5cGg6XCJlYThmXCJ9LHtuYW1lOlwiUERGXCIsZ2x5cGg6XCJlYTkwXCJ9LHtuYW1lOlwiVGhvdWdodEJ1YmJsZVwiLGdseXBoOlwiZWE5MVwifSx7bmFtZTpcIkhlYXJ0QnJva2VuXCIsZ2x5cGg6XCJlYTkyXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImVhOTNcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI5XCIsZ2x5cGg6XCJlYTk0XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMTBcIixnbHlwaDpcImVhOTVcIn0se25hbWU6XCJDYWxsRm9yd2FyZGluZ01pcnJvcmVkXCIsZ2x5cGg6XCJlYTk3XCJ9LHtuYW1lOlwiTXVsdGlTZWxlY3RNaXJyb3JlZFwiLGdseXBoOlwiZWE5OFwifSx7bmFtZTpcIkJyb29tXCIsZ2x5cGg6XCJlYTk5XCJ9LHtuYW1lOlwiRm9yd2FyZENhbGxcIixnbHlwaDpcImVhYzJcIn0se25hbWU6XCJUcmFja2Vyc1wiLGdseXBoOlwiZWFkZlwifSx7bmFtZTpcIk1hcmtldFwiLGdseXBoOlwiZWFmY1wifSx7bmFtZTpcIlBpZVNpbmdsZVwiLGdseXBoOlwiZWIwNVwifSx7bmFtZTpcIlN0b2NrVXBcIixnbHlwaDpcImViMGZcIn0se25hbWU6XCJTdG9ja0Rvd25cIixnbHlwaDpcImViMTFcIn0se25hbWU6XCJEZXNpZ25cIixnbHlwaDpcImViM2NcIn0se25hbWU6XCJXZWJzaXRlXCIsZ2x5cGg6XCJlYjQxXCJ9LHtuYW1lOlwiRHJvcFwiLGdseXBoOlwiZWI0MlwifSx7bmFtZTpcIlJhZGFyXCIsZ2x5cGg6XCJlYjQ0XCJ9LHtuYW1lOlwiQnVzU29saWRcIixnbHlwaDpcImViNDdcIn0se25hbWU6XCJGZXJyeVNvbGlkXCIsZ2x5cGg6XCJlYjQ4XCJ9LHtuYW1lOlwiU3RhcnRQb2ludFNvbGlkXCIsZ2x5cGg6XCJlYjQ5XCJ9LHtuYW1lOlwiU3RvcFBvaW50U29saWRcIixnbHlwaDpcImViNGFcIn0se25hbWU6XCJFbmRQb2ludFNvbGlkXCIsZ2x5cGg6XCJlYjRiXCJ9LHtuYW1lOlwiQWlycGxhbmVTb2xpZFwiLGdseXBoOlwiZWI0Y1wifSx7bmFtZTpcIlRyYWluU29saWRcIixnbHlwaDpcImViNGRcIn0se25hbWU6XCJXb3JrU29saWRcIixnbHlwaDpcImViNGVcIn0se25hbWU6XCJSZW1pbmRlckZpbGxcIixnbHlwaDpcImViNGZcIn0se25hbWU6XCJSZW1pbmRlclwiLGdseXBoOlwiZWI1MFwifSx7bmFtZTpcIkhlYXJ0XCIsZ2x5cGg6XCJlYjUxXCJ9LHtuYW1lOlwiSGVhcnRGaWxsXCIsZ2x5cGg6XCJlYjUyXCJ9LHtuYW1lOlwiRXRoZXJuZXRFcnJvclwiLGdseXBoOlwiZWI1NVwifSx7bmFtZTpcIkV0aGVybmV0V2FybmluZ1wiLGdseXBoOlwiZWI1NlwifSx7bmFtZTpcIlN0YXR1c0Nvbm5lY3RpbmcxXCIsZ2x5cGg6XCJlYjU3XCJ9LHtuYW1lOlwiU3RhdHVzQ29ubmVjdGluZzJcIixnbHlwaDpcImViNThcIn0se25hbWU6XCJTdGF0dXNVbnNlY3VyZVwiLGdseXBoOlwiZWI1OVwifSx7bmFtZTpcIldpZmlFcnJvcjBcIixnbHlwaDpcImViNWFcIn0se25hbWU6XCJXaWZpRXJyb3IxXCIsZ2x5cGg6XCJlYjViXCJ9LHtuYW1lOlwiV2lmaUVycm9yMlwiLGdseXBoOlwiZWI1Y1wifSx7bmFtZTpcIldpZmlFcnJvcjNcIixnbHlwaDpcImViNWRcIn0se25hbWU6XCJXaWZpRXJyb3I0XCIsZ2x5cGg6XCJlYjVlXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcwXCIsZ2x5cGg6XCJlYjVmXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcxXCIsZ2x5cGg6XCJlYjYwXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcyXCIsZ2x5cGg6XCJlYjYxXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmczXCIsZ2x5cGg6XCJlYjYyXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmc0XCIsZ2x5cGg6XCJlYjYzXCJ9LHtuYW1lOlwiRGV2aWNlczRcIixnbHlwaDpcImViNjZcIn0se25hbWU6XCJOVUlJcmlzXCIsZ2x5cGg6XCJlYjY3XCJ9LHtuYW1lOlwiTlVJRmFjZVwiLGdseXBoOlwiZWI2OFwifSx7bmFtZTpcIkdhdGV3YXlSb3V0ZXJcIixnbHlwaDpcImViNzdcIn0se25hbWU6XCJFZGl0TWlycm9yZWRcIixnbHlwaDpcImViN2VcIn0se25hbWU6XCJOVUlGUFN0YXJ0U2xpZGVIYW5kXCIsZ2x5cGg6XCJlYjgyXCJ9LHtuYW1lOlwiTlVJRlBTdGFydFNsaWRlQWN0aW9uXCIsZ2x5cGg6XCJlYjgzXCJ9LHtuYW1lOlwiTlVJRlBDb250aW51ZVNsaWRlSGFuZFwiLGdseXBoOlwiZWI4NFwifSx7bmFtZTpcIk5VSUZQQ29udGludWVTbGlkZUFjdGlvblwiLGdseXBoOlwiZWI4NVwifSx7bmFtZTpcIk5VSUZQUm9sbFJpZ2h0SGFuZFwiLGdseXBoOlwiZWI4NlwifSx7bmFtZTpcIk5VSUZQUm9sbFJpZ2h0SGFuZEFjdGlvblwiLGdseXBoOlwiZWI4N1wifSx7bmFtZTpcIk5VSUZQUm9sbExlZnRIYW5kXCIsZ2x5cGg6XCJlYjg4XCJ9LHtuYW1lOlwiTlVJRlBSb2xsTGVmdEFjdGlvblwiLGdseXBoOlwiZWI4OVwifSx7bmFtZTpcIk5VSUZQUHJlc3NIYW5kXCIsZ2x5cGg6XCJlYjhhXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc0FjdGlvblwiLGdseXBoOlwiZWI4YlwifSx7bmFtZTpcIk5VSUZQUHJlc3NSZXBlYXRIYW5kXCIsZ2x5cGg6XCJlYjhjXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc1JlcGVhdEFjdGlvblwiLGdseXBoOlwiZWI4ZFwifSx7bmFtZTpcIlN0YXR1c0Vycm9yRnVsbFwiLGdseXBoOlwiZWI5MFwifSx7bmFtZTpcIlRhc2tWaWV3RXhwYW5kZWRcIixnbHlwaDpcImViOTFcIn0se25hbWU6XCJDZXJ0aWZpY2F0ZVwiLGdseXBoOlwiZWI5NVwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWUxnXCIsZ2x5cGg6XCJlYjk2XCJ9LHtuYW1lOlwiUmV0dXJuS2V5TGdcIixnbHlwaDpcImViOTdcIn0se25hbWU6XCJGYXN0Rm9yd2FyZFwiLGdseXBoOlwiZWI5ZFwifSx7bmFtZTpcIlJld2luZFwiLGdseXBoOlwiZWI5ZVwifSx7bmFtZTpcIlBob3RvMlwiLGdseXBoOlwiZWI5ZlwifSx7bmFtZTpcIk1vYkJhdHRlcnkwXCIsZ2x5cGg6XCJlYmEwXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTFcIixnbHlwaDpcImViYTFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MlwiLGdseXBoOlwiZWJhMlwifSx7bmFtZTpcIk1vYkJhdHRlcnkzXCIsZ2x5cGg6XCJlYmEzXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTRcIixnbHlwaDpcImViYTRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5NVwiLGdseXBoOlwiZWJhNVwifSx7bmFtZTpcIk1vYkJhdHRlcnk2XCIsZ2x5cGg6XCJlYmE2XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTdcIixnbHlwaDpcImViYTdcIn0se25hbWU6XCJNb2JCYXR0ZXJ5OFwiLGdseXBoOlwiZWJhOFwifSx7bmFtZTpcIk1vYkJhdHRlcnk5XCIsZ2x5cGg6XCJlYmE5XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTEwXCIsZ2x5cGg6XCJlYmFhXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZWJhYlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzFcIixnbHlwaDpcImViYWNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJlYmFkXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZWJhZVwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzRcIixnbHlwaDpcImViYWZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJlYmIwXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZWJiMVwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzdcIixnbHlwaDpcImViYjJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJlYmIzXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZWJiNFwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzEwXCIsZ2x5cGg6XCJlYmI1XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMFwiLGdseXBoOlwiZWJiNlwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjFcIixnbHlwaDpcImViYjdcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIyXCIsZ2x5cGg6XCJlYmI4XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyM1wiLGdseXBoOlwiZWJiOVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjRcIixnbHlwaDpcImViYmFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI1XCIsZ2x5cGg6XCJlYmJiXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyNlwiLGdseXBoOlwiZWJiY1wifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjdcIixnbHlwaDpcImViYmRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI4XCIsZ2x5cGg6XCJlYmJlXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyOVwiLGdseXBoOlwiZWJiZlwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjEwXCIsZ2x5cGg6XCJlYmMwXCJ9LHtuYW1lOlwiRGljdGlvbmFyeUNsb3VkXCIsZ2x5cGg6XCJlYmMzXCJ9LHtuYW1lOlwiUmVzZXREcml2ZVwiLGdseXBoOlwiZWJjNFwifSx7bmFtZTpcIlZvbHVtZUJhcnNcIixnbHlwaDpcImViYzVcIn0se25hbWU6XCJQcm9qZWN0XCIsZ2x5cGg6XCJlYmM2XCJ9LHtuYW1lOlwiQWRqdXN0SG9sb2dyYW1cIixnbHlwaDpcImViZDJcIn0se25hbWU6XCJDbG91ZERvd25sb2FkXCIsZ2x5cGg6XCJlYmQzXCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGxCYXJzXCIsZ2x5cGg6XCJlYmQ0XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwwXCIsZ2x5cGg6XCJlYmQ1XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwxXCIsZ2x5cGg6XCJlYmQ2XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwyXCIsZ2x5cGg6XCJlYmQ3XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwzXCIsZ2x5cGg6XCJlYmQ4XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGw0XCIsZ2x5cGg6XCJlYmQ5XCJ9LHtuYW1lOlwiRmFtaWx5XCIsZ2x5cGg6XCJlYmRhXCJ9LHtuYW1lOlwiTG9ja0ZlZWRiYWNrXCIsZ2x5cGg6XCJlYmRiXCJ9LHtuYW1lOlwiRGV2aWNlRGlzY292ZXJ5XCIsZ2x5cGg6XCJlYmRlXCJ9LHtuYW1lOlwiV2luZERpcmVjdGlvblwiLGdseXBoOlwiZWJlNlwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMFwiLGdseXBoOlwiZWJlN1wifSx7bmFtZTpcIkJ1Z1wiLGdseXBoOlwiZWJlOFwifSx7bmFtZTpcIlRhYmxldE1vZGVcIixnbHlwaDpcImViZmNcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVMZWZ0XCIsZ2x5cGg6XCJlYmZkXCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVMZWZ0XCIsZ2x5cGg6XCJlYmZlXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JMZWZ0XCIsZ2x5cGg6XCJlYmZmXCJ9LHtuYW1lOlwiU3RhdHVzV2FybmluZ0xlZnRcIixnbHlwaDpcImVjMDBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5VW5rbm93blwiLGdseXBoOlwiZWMwMlwifSx7bmFtZTpcIk5ldHdvcmtUb3dlclwiLGdseXBoOlwiZWMwNVwifSx7bmFtZTpcIkNpdHlOZXh0XCIsZ2x5cGg6XCJlYzA2XCJ9LHtuYW1lOlwiQ2l0eU5leHQyXCIsZ2x5cGg6XCJlYzA3XCJ9LHtuYW1lOlwiQ291cnRob3VzZVwiLGdseXBoOlwiZWMwOFwifSx7bmFtZTpcIkdyb2Nlcmllc1wiLGdseXBoOlwiZWMwOVwifSx7bmFtZTpcIlN1c3RhaW5hYmxlXCIsZ2x5cGg6XCJlYzBhXCJ9LHtuYW1lOlwiQnVpbGRpbmdFbmVyZ3lcIixnbHlwaDpcImVjMGJcIn0se25hbWU6XCJUb2dnbGVGaWxsZWRcIixnbHlwaDpcImVjMTFcIn0se25hbWU6XCJUb2dnbGVCb3JkZXJcIixnbHlwaDpcImVjMTJcIn0se25hbWU6XCJTbGlkZXJUaHVtYlwiLGdseXBoOlwiZWMxM1wifSx7bmFtZTpcIlRvZ2dsZVRodW1iXCIsZ2x5cGg6XCJlYzE0XCJ9LHtuYW1lOlwiTWlyYWNhc3RMb2dvU21hbGxcIixnbHlwaDpcImVjMTVcIn0se25hbWU6XCJNaXJhY2FzdExvZ29MYXJnZVwiLGdseXBoOlwiZWMxNlwifSx7bmFtZTpcIlBMQVBcIixnbHlwaDpcImVjMTlcIn0se25hbWU6XCJCYWRnZVwiLGdseXBoOlwiZWMxYlwifSx7bmFtZTpcIlNpZ25hbFJvYW1pbmdcIixnbHlwaDpcImVjMWVcIn0se25hbWU6XCJNb2JpbGVMb2NrZWRcIixnbHlwaDpcImVjMjBcIn0se25hbWU6XCJJbnNpZGVySHViQXBwXCIsZ2x5cGg6XCJlYzI0XCJ9LHtuYW1lOlwiUGVyc29uYWxGb2xkZXJcIixnbHlwaDpcImVjMjVcIn0se25hbWU6XCJIb21lR3JvdXBcIixnbHlwaDpcImVjMjZcIn0se25hbWU6XCJNeU5ldHdvcmtcIixnbHlwaDpcImVjMjdcIn0se25hbWU6XCJLZXlib2FyZEZ1bGxcIixnbHlwaDpcImVjMzFcIn0se25hbWU6XCJDYWZlXCIsZ2x5cGg6XCJlYzMyXCJ9LHtuYW1lOlwiTW9iU2lnbmFsMVwiLGdseXBoOlwiZWMzN1wifSx7bmFtZTpcIk1vYlNpZ25hbDJcIixnbHlwaDpcImVjMzhcIn0se25hbWU6XCJNb2JTaWduYWwzXCIsZ2x5cGg6XCJlYzM5XCJ9LHtuYW1lOlwiTW9iU2lnbmFsNFwiLGdseXBoOlwiZWMzYVwifSx7bmFtZTpcIk1vYlNpZ25hbDVcIixnbHlwaDpcImVjM2JcIn0se25hbWU6XCJNb2JXaWZpMVwiLGdseXBoOlwiZWMzY1wifSx7bmFtZTpcIk1vYldpZmkyXCIsZ2x5cGg6XCJlYzNkXCJ9LHtuYW1lOlwiTW9iV2lmaTNcIixnbHlwaDpcImVjM2VcIn0se25hbWU6XCJNb2JXaWZpNFwiLGdseXBoOlwiZWMzZlwifSx7bmFtZTpcIk1vYkFpcnBsYW5lXCIsZ2x5cGg6XCJlYzQwXCJ9LHtuYW1lOlwiTW9iQmx1ZXRvb3RoXCIsZ2x5cGg6XCJlYzQxXCJ9LHtuYW1lOlwiTW9iQWN0aW9uQ2VudGVyXCIsZ2x5cGg6XCJlYzQyXCJ9LHtuYW1lOlwiTW9iTG9jYXRpb25cIixnbHlwaDpcImVjNDNcIn0se25hbWU6XCJNb2JXaWZpSG90c3BvdFwiLGdseXBoOlwiZWM0NFwifSx7bmFtZTpcIkxhbmd1YWdlSnBuXCIsZ2x5cGg6XCJlYzQ1XCJ9LHtuYW1lOlwiTW9iUXVpZXRIb3Vyc1wiLGdseXBoOlwiZWM0NlwifSx7bmFtZTpcIk1vYkRyaXZpbmdNb2RlXCIsZ2x5cGg6XCJlYzQ3XCJ9LHtuYW1lOlwiU3BlZWRPZmZcIixnbHlwaDpcImVjNDhcIn0se25hbWU6XCJTcGVlZE1lZGl1bVwiLGdseXBoOlwiZWM0OVwifSx7bmFtZTpcIlNwZWVkSGlnaFwiLGdseXBoOlwiZWM0YVwifSx7bmFtZTpcIlRoaXNQQ1wiLGdseXBoOlwiZWM0ZVwifSx7bmFtZTpcIk11c2ljTm90ZVwiLGdseXBoOlwiZWM0ZlwifSx7bmFtZTpcIkZpbGVFeHBsb3JlclwiLGdseXBoOlwiZWM1MFwifSx7bmFtZTpcIkZpbGVFeHBsb3JlckFwcFwiLGdseXBoOlwiZWM1MVwifSx7bmFtZTpcIkxlZnRBcnJvd0tleVRpbWUwXCIsZ2x5cGg6XCJlYzUyXCJ9LHtuYW1lOlwiTWljT2ZmXCIsZ2x5cGg6XCJlYzU0XCJ9LHtuYW1lOlwiTWljU2xlZXBcIixnbHlwaDpcImVjNTVcIn0se25hbWU6XCJNaWNFcnJvclwiLGdseXBoOlwiZWM1NlwifSx7bmFtZTpcIlBsYXliYWNrUmF0ZTF4XCIsZ2x5cGg6XCJlYzU3XCJ9LHtuYW1lOlwiUGxheWJhY2tSYXRlT3RoZXJcIixnbHlwaDpcImVjNThcIn0se25hbWU6XCJDYXNoRHJhd2VyXCIsZ2x5cGg6XCJlYzU5XCJ9LHtuYW1lOlwiQmFyY29kZVNjYW5uZXJcIixnbHlwaDpcImVjNWFcIn0se25hbWU6XCJSZWNlaXB0UHJpbnRlclwiLGdseXBoOlwiZWM1YlwifSx7bmFtZTpcIk1hZ1N0cmlwZVJlYWRlclwiLGdseXBoOlwiZWM1Y1wifSx7bmFtZTpcIkNvbXBsZXRlZFNvbGlkXCIsZ2x5cGg6XCJlYzYxXCJ9LHtuYW1lOlwiQ29tcGFuaW9uQXBwXCIsZ2x5cGg6XCJlYzY0XCJ9LHtuYW1lOlwiRmF2aWNvbjJcIixnbHlwaDpcImVjNmNcIn0se25hbWU6XCJTd2lwZVJldmVhbEFydFwiLGdseXBoOlwiZWM2ZFwifSx7bmFtZTpcIk1pY09uXCIsZ2x5cGg6XCJlYzcxXCJ9LHtuYW1lOlwiTWljQ2xpcHBpbmdcIixnbHlwaDpcImVjNzJcIn0se25hbWU6XCJUYWJsZXRTZWxlY3RlZFwiLGdseXBoOlwiZWM3NFwifSx7bmFtZTpcIk1vYmlsZVNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc1XCJ9LHtuYW1lOlwiTGFwdG9wU2VsZWN0ZWRcIixnbHlwaDpcImVjNzZcIn0se25hbWU6XCJUVk1vbml0b3JTZWxlY3RlZFwiLGdseXBoOlwiZWM3N1wifSx7bmFtZTpcIkRldmVsb3BlclRvb2xzXCIsZ2x5cGg6XCJlYzdhXCJ9LHtuYW1lOlwiTW9iQ2FsbEZvcndhcmRpbmdcIixnbHlwaDpcImVjN2VcIn0se25hbWU6XCJNb2JDYWxsRm9yd2FyZGluZ01pcnJvcmVkXCIsZ2x5cGg6XCJlYzdmXCJ9LHtuYW1lOlwiQm9keUNhbVwiLGdseXBoOlwiZWM4MFwifSx7bmFtZTpcIlBvbGljZUNhclwiLGdseXBoOlwiZWM4MVwifSx7bmFtZTpcIkRyYXdcIixnbHlwaDpcImVjODdcIn0se25hbWU6XCJEcmF3U29saWRcIixnbHlwaDpcImVjODhcIn0se25hbWU6XCJMb3dlckJyaWdodG5lc3NcIixnbHlwaDpcImVjOGFcIn0se25hbWU6XCJTY3JvbGxVcERvd25cIixnbHlwaDpcImVjOGZcIn0se25hbWU6XCJEYXRlVGltZVwiLGdseXBoOlwiZWM5MlwifSx7bmFtZTpcIkhvbG9MZW5zXCIsZ2x5cGg6XCJlYzk0XCJ9LHtuYW1lOlwiVGlsZXNcIixnbHlwaDpcImVjYTVcIn0se25hbWU6XCJQYXJ0eUxlYWRlclwiLGdseXBoOlwiZWNhN1wifSx7bmFtZTpcIkFwcEljb25EZWZhdWx0XCIsZ2x5cGg6XCJlY2FhXCJ9LHtuYW1lOlwiQ2Fsb3JpZXNcIixnbHlwaDpcImVjYWRcIn0se25hbWU6XCJQT0lcIixnbHlwaDpcImVjYWZcIn0se25hbWU6XCJCYW5kQmF0dGVyeTBcIixnbHlwaDpcImVjYjlcIn0se25hbWU6XCJCYW5kQmF0dGVyeTFcIixnbHlwaDpcImVjYmFcIn0se25hbWU6XCJCYW5kQmF0dGVyeTJcIixnbHlwaDpcImVjYmJcIn0se25hbWU6XCJCYW5kQmF0dGVyeTNcIixnbHlwaDpcImVjYmNcIn0se25hbWU6XCJCYW5kQmF0dGVyeTRcIixnbHlwaDpcImVjYmRcIn0se25hbWU6XCJCYW5kQmF0dGVyeTVcIixnbHlwaDpcImVjYmVcIn0se25hbWU6XCJCYW5kQmF0dGVyeTZcIixnbHlwaDpcImVjYmZcIn0se25hbWU6XCJBZGRTdXJmYWNlSHViXCIsZ2x5cGg6XCJlY2M0XCJ9LHtuYW1lOlwiRGV2VXBkYXRlXCIsZ2x5cGg6XCJlY2M1XCJ9LHtuYW1lOlwiVW5pdFwiLGdseXBoOlwiZWNjNlwifSx7bmFtZTpcIkFkZFRvXCIsZ2x5cGg6XCJlY2M4XCJ9LHtuYW1lOlwiUmVtb3ZlRnJvbVwiLGdseXBoOlwiZWNjOVwifSx7bmFtZTpcIlJhZGlvQnRuT2ZmXCIsZ2x5cGg6XCJlY2NhXCJ9LHtuYW1lOlwiUmFkaW9CdG5PblwiLGdseXBoOlwiZWNjYlwifSx7bmFtZTpcIlJhZGlvQnVsbGV0MlwiLGdseXBoOlwiZWNjY1wifSx7bmFtZTpcIkV4cGxvcmVDb250ZW50XCIsZ2x5cGg6XCJlY2NkXCJ9LHtuYW1lOlwiQmxvY2tlZDJcIixnbHlwaDpcImVjZTRcIn0se25hbWU6XCJTY3JvbGxNb2RlXCIsZ2x5cGg6XCJlY2U3XCJ9LHtuYW1lOlwiWm9vbU1vZGVcIixnbHlwaDpcImVjZThcIn0se25hbWU6XCJQYW5Nb2RlXCIsZ2x5cGg6XCJlY2U5XCJ9LHtuYW1lOlwiV2lyZWRVU0JcIixnbHlwaDpcImVjZjBcIn0se25hbWU6XCJXaXJlbGVzc1VTQlwiLGdseXBoOlwiZWNmMVwifSx7bmFtZTpcIlVTQlNhZmVDb25uZWN0XCIsZ2x5cGg6XCJlY2YzXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyTm90aWZpY2F0aW9uTWlycm9yZWRcIixnbHlwaDpcImVkMGNcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJNaXJyb3JlZFwiLGdseXBoOlwiZWQwZFwifSx7bmFtZTpcIlN1YnNjcmlwdGlvbkFkZFwiLGdseXBoOlwiZWQwZVwifSx7bmFtZTpcIlJlc2V0RGV2aWNlXCIsZ2x5cGg6XCJlZDEwXCJ9LHtuYW1lOlwiU3Vic2NyaXB0aW9uQWRkTWlycm9yZWRcIixnbHlwaDpcImVkMTFcIn0se25hbWU6XCJRUkNvZGVcIixnbHlwaDpcImVkMTRcIn0se25hbWU6XCJGZWVkYmFja1wiLGdseXBoOlwiZWQxNVwifSx7bmFtZTpcIkhpZGVcIixnbHlwaDpcImVkMWFcIn0se25hbWU6XCJTdWJ0aXRsZXNcIixnbHlwaDpcImVkMWVcIn0se25hbWU6XCJTdWJ0aXRsZXNBdWRpb1wiLGdseXBoOlwiZWQxZlwifSx7bmFtZTpcIk9wZW5Gb2xkZXJIb3Jpem9udGFsXCIsZ2x5cGg6XCJlZDI1XCJ9LHtuYW1lOlwiQ2FsZW5kYXJNaXJyb3JlZFwiLGdseXBoOlwiZWQyOFwifSx7bmFtZTpcIk1vYmVTSU1cIixnbHlwaDpcImVkMmFcIn0se25hbWU6XCJNb2JlU0lNTm9Qcm9maWxlXCIsZ2x5cGg6XCJlZDJiXCJ9LHtuYW1lOlwiTW9iZVNJTUxvY2tlZFwiLGdseXBoOlwiZWQyY1wifSx7bmFtZTpcIk1vYmVTSU1CdXN5XCIsZ2x5cGg6XCJlZDJkXCJ9LHtuYW1lOlwiU2lnbmFsRXJyb3JcIixnbHlwaDpcImVkMmVcIn0se25hbWU6XCJTdHJlYW1pbmdFbnRlcnByaXNlXCIsZ2x5cGg6XCJlZDJmXCJ9LHtuYW1lOlwiSGVhZHBob25lMFwiLGdseXBoOlwiZWQzMFwifSx7bmFtZTpcIkhlYWRwaG9uZTFcIixnbHlwaDpcImVkMzFcIn0se25hbWU6XCJIZWFkcGhvbmUyXCIsZ2x5cGg6XCJlZDMyXCJ9LHtuYW1lOlwiSGVhZHBob25lM1wiLGdseXBoOlwiZWQzM1wifSx7bmFtZTpcIkFwcHNcIixnbHlwaDpcImVkMzVcIn0se25hbWU6XCJLZXlib2FyZEJyaWdodG5lc3NcIixnbHlwaDpcImVkMzlcIn0se25hbWU6XCJLZXlib2FyZExvd2VyQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWQzYVwifSx7bmFtZTpcIlNraXBCYWNrMTBcIixnbHlwaDpcImVkM2NcIn0se25hbWU6XCJTa2lwRm9yd2FyZDMwXCIsZ2x5cGg6XCJlZDNkXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlclwiLGdseXBoOlwiZWQ0MVwifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJGaWxsXCIsZ2x5cGg6XCJlZDQyXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlck9wZW5cIixnbHlwaDpcImVkNDNcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyT3BlbkZpbGxcIixnbHlwaDpcImVkNDRcIn0se25hbWU6XCJNdWx0aW1lZGlhRE1QXCIsZ2x5cGg6XCJlZDQ3XCJ9LHtuYW1lOlwiS2V5Ym9hcmRPbmVIYW5kZWRcIixnbHlwaDpcImVkNGNcIn0se25hbWU6XCJOYXJyYXRvclwiLGdseXBoOlwiZWQ0ZFwifSx7bmFtZTpcIkVtb2ppVGFiUGVvcGxlXCIsZ2x5cGg6XCJlZDUzXCJ9LHtuYW1lOlwiRW1vamlUYWJTbWlsZXNBbmltYWxzXCIsZ2x5cGg6XCJlZDU0XCJ9LHtuYW1lOlwiRW1vamlUYWJDZWxlYnJhdGlvbk9iamVjdHNcIixnbHlwaDpcImVkNTVcIn0se25hbWU6XCJFbW9qaVRhYkZvb2RQbGFudHNcIixnbHlwaDpcImVkNTZcIn0se25hbWU6XCJFbW9qaVRhYlRyYW5zaXRQbGFjZXNcIixnbHlwaDpcImVkNTdcIn0se25hbWU6XCJFbW9qaVRhYlN5bWJvbHNcIixnbHlwaDpcImVkNThcIn0se25hbWU6XCJFbW9qaVRhYlRleHRTbWlsZXNcIixnbHlwaDpcImVkNTlcIn0se25hbWU6XCJFbW9qaVRhYkZhdm9yaXRlc1wiLGdseXBoOlwiZWQ1YVwifSx7bmFtZTpcIkVtb2ppU3dhdGNoXCIsZ2x5cGg6XCJlZDViXCJ9LHtuYW1lOlwiQ29ubmVjdEFwcFwiLGdseXBoOlwiZWQ1Y1wifSx7bmFtZTpcIkNvbXBhbmlvbkRldmljZUZyYW1ld29ya1wiLGdseXBoOlwiZWQ1ZFwifSx7bmFtZTpcIlJ1bGVyXCIsZ2x5cGg6XCJlZDVlXCJ9LHtuYW1lOlwiRmluZ2VySW5raW5nXCIsZ2x5cGg6XCJlZDVmXCJ9LHtuYW1lOlwiU3Ryb2tlRXJhc2VcIixnbHlwaDpcImVkNjBcIn0se25hbWU6XCJQb2ludEVyYXNlXCIsZ2x5cGg6XCJlZDYxXCJ9LHtuYW1lOlwiQ2xlYXJBbGxJbmtcIixnbHlwaDpcImVkNjJcIn0se25hbWU6XCJQZW5jaWxcIixnbHlwaDpcImVkNjNcIn0se25hbWU6XCJNYXJrZXJcIixnbHlwaDpcImVkNjRcIn0se25hbWU6XCJJbmtpbmdDYXJldFwiLGdseXBoOlwiZWQ2NVwifSx7bmFtZTpcIklua2luZ0NvbG9yT3V0bGluZVwiLGdseXBoOlwiZWQ2NlwifSx7bmFtZTpcIklua2luZ0NvbG9yRmlsbFwiLGdseXBoOlwiZWQ2N1wifSx7bmFtZTpcIkhhcmREcml2ZVwiLGdseXBoOlwiZWRhMlwifSx7bmFtZTpcIk5ldHdvcmtBZGFwdGVyXCIsZ2x5cGg6XCJlZGEzXCJ9LHtuYW1lOlwiVG91Y2hzY3JlZW5cIixnbHlwaDpcImVkYTRcIn0se25hbWU6XCJOZXR3b3JrUHJpbnRlclwiLGdseXBoOlwiZWRhNVwifSx7bmFtZTpcIkNsb3VkUHJpbnRlclwiLGdseXBoOlwiZWRhNlwifSx7bmFtZTpcIktleWJvYXJkU2hvcnRjdXRcIixnbHlwaDpcImVkYTdcIn0se25hbWU6XCJCcnVzaFNpemVcIixnbHlwaDpcImVkYThcIn0se25hbWU6XCJOYXJyYXRvckZvcndhcmRcIixnbHlwaDpcImVkYTlcIn0se25hbWU6XCJOYXJyYXRvckZvcndhcmRNaXJyb3JlZFwiLGdseXBoOlwiZWRhYVwifSx7bmFtZTpcIlN5bmNCYWRnZTEyXCIsZ2x5cGg6XCJlZGFiXCJ9LHtuYW1lOlwiUmluZ2VyQmFkZ2UxMlwiLGdseXBoOlwiZWRhY1wifSx7bmFtZTpcIkFzdGVyaXNrQmFkZ2UxMlwiLGdseXBoOlwiZWRhZFwifSx7bmFtZTpcIkVycm9yQmFkZ2UxMlwiLGdseXBoOlwiZWRhZVwifSx7bmFtZTpcIkNpcmNsZVJpbmdCYWRnZTEyXCIsZ2x5cGg6XCJlZGFmXCJ9LHtuYW1lOlwiQ2lyY2xlRmlsbEJhZGdlMTJcIixnbHlwaDpcImVkYjBcIn0se25hbWU6XCJJbXBvcnRhbnRCYWRnZTEyXCIsZ2x5cGg6XCJlZGIxXCJ9LHtuYW1lOlwiTWFpbEJhZGdlMTJcIixnbHlwaDpcImVkYjNcIn0se25hbWU6XCJQYXVzZUJhZGdlMTJcIixnbHlwaDpcImVkYjRcIn0se25hbWU6XCJQbGF5QmFkZ2UxMlwiLGdseXBoOlwiZWRiNVwifSx7bmFtZTpcIlBlbldvcmtzcGFjZVwiLGdseXBoOlwiZWRjNlwifSx7bmFtZTpcIkNhcmV0TGVmdDhcIixnbHlwaDpcImVkZDVcIn0se25hbWU6XCJDYXJldFJpZ2h0OFwiLGdseXBoOlwiZWRkNlwifSx7bmFtZTpcIkNhcmV0VXA4XCIsZ2x5cGg6XCJlZGQ3XCJ9LHtuYW1lOlwiQ2FyZXREb3duOFwiLGdseXBoOlwiZWRkOFwifSx7bmFtZTpcIkNhcmV0TGVmdFNvbGlkOFwiLGdseXBoOlwiZWRkOVwifSx7bmFtZTpcIkNhcmV0UmlnaHRTb2xpZDhcIixnbHlwaDpcImVkZGFcIn0se25hbWU6XCJDYXJldFVwU29saWQ4XCIsZ2x5cGg6XCJlZGRiXCJ9LHtuYW1lOlwiQ2FyZXREb3duU29saWQ4XCIsZ2x5cGg6XCJlZGRjXCJ9LHtuYW1lOlwiU3RyaWtldGhyb3VnaFwiLGdseXBoOlwiZWRlMFwifSx7bmFtZTpcIkV4cG9ydFwiLGdseXBoOlwiZWRlMVwifSx7bmFtZTpcIkV4cG9ydE1pcnJvcmVkXCIsZ2x5cGg6XCJlZGUyXCJ9LHtuYW1lOlwiQnV0dG9uTWVudVwiLGdseXBoOlwiZWRlM1wifSx7bmFtZTpcIkNsb3VkU2VhcmNoXCIsZ2x5cGg6XCJlZGU0XCJ9LHtuYW1lOlwiUGlueWluSU1FTG9nb1wiLGdseXBoOlwiZWRlNVwifSx7bmFtZTpcIkNhbGxpZ3JhcGh5UGVuXCIsZ2x5cGg6XCJlZGZiXCJ9LHtuYW1lOlwiUmVwbHlNaXJyb3JlZFwiLGdseXBoOlwiZWUzNVwifSx7bmFtZTpcIkxvY2tzY3JlZW5EZXNrdG9wXCIsZ2x5cGg6XCJlZTNmXCJ9LHtuYW1lOlwiVGFza1ZpZXdTZXR0aW5nc1wiLGdseXBoOlwiZWU0MFwifSx7bmFtZTpcIk1pbmlFeHBhbmQyTWlycm9yZWRcIixnbHlwaDpcImVlNDdcIn0se25hbWU6XCJNaW5pQ29udHJhY3QyTWlycm9yZWRcIixnbHlwaDpcImVlNDlcIn0se25hbWU6XCJQbGF5MzZcIixnbHlwaDpcImVlNGFcIn0se25hbWU6XCJQZW5QYWxldHRlXCIsZ2x5cGg6XCJlZTU2XCJ9LHtuYW1lOlwiR3Vlc3RVc2VyXCIsZ2x5cGg6XCJlZTU3XCJ9LHtuYW1lOlwiU2V0dGluZ3NCYXR0ZXJ5XCIsZ2x5cGg6XCJlZTYzXCJ9LHtuYW1lOlwiVGFza2JhclBob25lXCIsZ2x5cGg6XCJlZTY0XCJ9LHtuYW1lOlwiTG9ja1NjcmVlbkdsYW5jZVwiLGdseXBoOlwiZWU2NVwifSx7bmFtZTpcIkdlbmVyaWNTY2FuXCIsZ2x5cGg6XCJlZTZmXCJ9LHtuYW1lOlwiSW1hZ2VFeHBvcnRcIixnbHlwaDpcImVlNzFcIn0se25hbWU6XCJXaWZpRXRoZXJuZXRcIixnbHlwaDpcImVlNzdcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJRdWlldFwiLGdseXBoOlwiZWU3OVwifSx7bmFtZTpcIkFjdGlvbkNlbnRlclF1aWV0Tm90aWZpY2F0aW9uXCIsZ2x5cGg6XCJlZTdhXCJ9LHtuYW1lOlwiVHJhY2tlcnNNaXJyb3JlZFwiLGdseXBoOlwiZWU5MlwifSx7bmFtZTpcIkRhdGVUaW1lTWlycm9yZWRcIixnbHlwaDpcImVlOTNcIn0se25hbWU6XCJXaGVlbFwiLGdseXBoOlwiZWU5NFwifSx7bmFtZTpcIlZpcnR1YWxNYWNoaW5lR3JvdXBcIixnbHlwaDpcImVlYTNcIn0se25hbWU6XCJCdXR0b25WaWV3MlwiLGdseXBoOlwiZWVjYVwifSx7bmFtZTpcIlBlbldvcmtzcGFjZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE1XCJ9LHtuYW1lOlwiUGVuUGFsZXR0ZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE2XCJ9LHtuYW1lOlwiU3Ryb2tlRXJhc2VNaXJyb3JlZFwiLGdseXBoOlwiZWYxN1wifSx7bmFtZTpcIlBvaW50RXJhc2VNaXJyb3JlZFwiLGdseXBoOlwiZWYxOFwifSx7bmFtZTpcIkNsZWFyQWxsSW5rTWlycm9yZWRcIixnbHlwaDpcImVmMTlcIn0se25hbWU6XCJCYWNrZ3JvdW5kVG9nZ2xlXCIsZ2x5cGg6XCJlZjFmXCJ9LHtuYW1lOlwiTWFycXVlZVwiLGdseXBoOlwiZWYyMFwifSx7bmFtZTpcIkNocm9tZUNsb3NlQ29udHJhc3RcIixnbHlwaDpcImVmMmNcIn0se25hbWU6XCJDaHJvbWVNaW5pbWl6ZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJkXCJ9LHtuYW1lOlwiQ2hyb21lTWF4aW1pemVDb250cmFzdFwiLGdseXBoOlwiZWYyZVwifSx7bmFtZTpcIkNocm9tZVJlc3RvcmVDb250cmFzdFwiLGdseXBoOlwiZWYyZlwifSx7bmFtZTpcIlRyYWZmaWNMaWdodFwiLGdseXBoOlwiZWYzMVwifSx7bmFtZTpcIlJlcGxheVwiLGdseXBoOlwiZWYzYlwifSx7bmFtZTpcIkV5ZWRyb3BwZXJcIixnbHlwaDpcImVmM2NcIn0se25hbWU6XCJMaW5lRGlzcGxheVwiLGdseXBoOlwiZWYzZFwifSx7bmFtZTpcIlBJTlBhZFwiLGdseXBoOlwiZWYzZVwifSx7bmFtZTpcIlNpZ25hdHVyZUNhcHR1cmVcIixnbHlwaDpcImVmM2ZcIn0se25hbWU6XCJDaGlwQ2FyZENyZWRpdENhcmRSZWFkZXJcIixnbHlwaDpcImVmNDBcIn0se25hbWU6XCJNYXJrZXREb3duXCIsZ2x5cGg6XCJlZjQyXCJ9LHtuYW1lOlwiUGxheWVyU2V0dGluZ3NcIixnbHlwaDpcImVmNThcIn0se25hbWU6XCJMYW5kc2NhcGVPcmllbnRhdGlvblwiLGdseXBoOlwiZWY2YlwifSx7bmFtZTpcIkZsb3dcIixnbHlwaDpcImVmOTBcIn0se25hbWU6XCJUb3VjaHBhZFwiLGdseXBoOlwiZWZhNVwifSx7bmFtZTpcIlNwZWVjaFwiLGdseXBoOlwiZWZhOVwifSx7bmFtZTpcIktub3dsZWRnZUFydGljbGVcIixnbHlwaDpcImYwMDBcIn0se25hbWU6XCJSZWxhdGlvbnNoaXBcIixnbHlwaDpcImYwMDNcIn0se25hbWU6XCJaaXBGb2xkZXJcIixnbHlwaDpcImYwMTJcIn0se25hbWU6XCJEZWZhdWx0QVBOXCIsZ2x5cGg6XCJmMDgwXCJ9LHtuYW1lOlwiVXNlckFQTlwiLGdseXBoOlwiZjA4MVwifSx7bmFtZTpcIkRvdWJsZVBpbnlpblwiLGdseXBoOlwiZjA4NVwifSx7bmFtZTpcIkJsdWVMaWdodFwiLGdseXBoOlwiZjA4Y1wifSx7bmFtZTpcIkNhcmV0U29saWRMZWZ0XCIsZ2x5cGg6XCJmMDhkXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZERvd25cIixnbHlwaDpcImYwOGVcIn0se25hbWU6XCJDYXJldFNvbGlkUmlnaHRcIixnbHlwaDpcImYwOGZcIn0se25hbWU6XCJDYXJldFNvbGlkVXBcIixnbHlwaDpcImYwOTBcIn0se25hbWU6XCJCdXR0b25BXCIsZ2x5cGg6XCJmMDkzXCJ9LHtuYW1lOlwiQnV0dG9uQlwiLGdseXBoOlwiZjA5NFwifSx7bmFtZTpcIkJ1dHRvbllcIixnbHlwaDpcImYwOTVcIn0se25hbWU6XCJCdXR0b25YXCIsZ2x5cGg6XCJmMDk2XCJ9LHtuYW1lOlwiQXJyb3dVcDhcIixnbHlwaDpcImYwYWRcIn0se25hbWU6XCJBcnJvd0Rvd244XCIsZ2x5cGg6XCJmMGFlXCJ9LHtuYW1lOlwiQXJyb3dSaWdodDhcIixnbHlwaDpcImYwYWZcIn0se25hbWU6XCJBcnJvd0xlZnQ4XCIsZ2x5cGg6XCJmMGIwXCJ9LHtuYW1lOlwiUXVhcmVudGluZWRJdGVtc1wiLGdseXBoOlwiZjBiMlwifSx7bmFtZTpcIlF1YXJlbnRpbmVkSXRlbXNNaXJyb3JlZFwiLGdseXBoOlwiZjBiM1wifSx7bmFtZTpcIlByb3RyYWN0b3JcIixnbHlwaDpcImYwYjRcIn0se25hbWU6XCJDaGVja2xpc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBiNVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZTdcIixnbHlwaDpcImYwYjZcIn0se25hbWU6XCJTdGF0dXNDaGVja21hcms3XCIsZ2x5cGg6XCJmMGI3XCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JDaXJjbGU3XCIsZ2x5cGg6XCJmMGI4XCJ9LHtuYW1lOlwiQ29ubmVjdGVkXCIsZ2x5cGg6XCJmMGI5XCJ9LHtuYW1lOlwiUGVuY2lsRmlsbFwiLGdseXBoOlwiZjBjNlwifSx7bmFtZTpcIkNhbGxpZ3JhcGh5RmlsbFwiLGdseXBoOlwiZjBjN1wifSx7bmFtZTpcIlF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBjYVwifSx7bmFtZTpcIlF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwY2JcIn0se25hbWU6XCJUaHJlZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBjY1wifSx7bmFtZTpcIlRocmVlUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBjZFwifSx7bmFtZTpcIlF1aWV0SG91cnNCYWRnZTEyXCIsZ2x5cGg6XCJmMGNlXCJ9LHtuYW1lOlwiQmFja01pcnJvcmVkXCIsZ2x5cGg6XCJmMGQyXCJ9LHtuYW1lOlwiRm9yd2FyZE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGQzXCJ9LHtuYW1lOlwiQ2hyb21lQmFja0NvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ1XCJ9LHtuYW1lOlwiQ2hyb21lQmFja0NvbnRyYXN0TWlycm9yZWRcIixnbHlwaDpcImYwZDZcIn0se25hbWU6XCJDaHJvbWVCYWNrVG9XaW5kb3dDb250cmFzdFwiLGdseXBoOlwiZjBkN1wifSx7bmFtZTpcIkNocm9tZUZ1bGxTY3JlZW5Db250cmFzdFwiLGdseXBoOlwiZjBkOFwifSx7bmFtZTpcIkdyaWRWaWV3XCIsZ2x5cGg6XCJmMGUyXCJ9LHtuYW1lOlwiQ2xpcGJvYXJkTGlzdFwiLGdseXBoOlwiZjBlM1wifSx7bmFtZTpcIkNsaXBib2FyZExpc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBlNFwifSx7bmFtZTpcIk91dGxpbmVRdWFydGVyU3RhckxlZnRcIixnbHlwaDpcImYwZTVcIn0se25hbWU6XCJPdXRsaW5lUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBlNlwifSx7bmFtZTpcIk91dGxpbmVIYWxmU3RhckxlZnRcIixnbHlwaDpcImYwZTdcIn0se25hbWU6XCJPdXRsaW5lSGFsZlN0YXJSaWdodFwiLGdseXBoOlwiZjBlOFwifSx7bmFtZTpcIk91dGxpbmVUaHJlZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBlOVwifSx7bmFtZTpcIk91dGxpbmVUaHJlZVF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwZWFcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lMFwiLGdseXBoOlwiZjBlYlwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUxXCIsZ2x5cGg6XCJmMGVjXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTJcIixnbHlwaDpcImYwZWRcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lM1wiLGdseXBoOlwiZjBlZVwifSx7bmFtZTpcIkFwcGxpY2F0aW9uR3VhcmRcIixnbHlwaDpcImYwZWZcIn0se25hbWU6XCJPdXRsaW5lU3RhckxlZnRIYWxmXCIsZ2x5cGg6XCJmMGY3XCJ9LHtuYW1lOlwiT3V0bGluZVN0YXJSaWdodEhhbGZcIixnbHlwaDpcImYwZjhcIn0se25hbWU6XCJDaHJvbWVBbm5vdGF0ZUNvbnRyYXN0XCIsZ2x5cGg6XCJmMGY5XCJ9LHtuYW1lOlwiRGVmZW5kZXJCYWRnZTEyXCIsZ2x5cGg6XCJmMGZiXCJ9LHtuYW1lOlwiRGV0YWNoYWJsZVBDXCIsZ2x5cGg6XCJmMTAzXCJ9LHtuYW1lOlwiTGVmdFN0aWNrXCIsZ2x5cGg6XCJmMTA4XCJ9LHtuYW1lOlwiUmlnaHRTdGlja1wiLGdseXBoOlwiZjEwOVwifSx7bmFtZTpcIlRyaWdnZXJMZWZ0XCIsZ2x5cGg6XCJmMTBhXCJ9LHtuYW1lOlwiVHJpZ2dlclJpZ2h0XCIsZ2x5cGg6XCJmMTBiXCJ9LHtuYW1lOlwiQnVtcGVyTGVmdFwiLGdseXBoOlwiZjEwY1wifSx7bmFtZTpcIkJ1bXBlclJpZ2h0XCIsZ2x5cGg6XCJmMTBkXCJ9LHtuYW1lOlwiRHBhZFwiLGdseXBoOlwiZjEwZVwifSx7bmFtZTpcIkVuZ2xpc2hQdW5jdHVhdGlvblwiLGdseXBoOlwiZjExMFwifSx7bmFtZTpcIkNoaW5lc2VQdW5jdHVhdGlvblwiLGdseXBoOlwiZjExMVwifSx7bmFtZTpcIkhNRFwiLGdseXBoOlwiZjExOVwifSx7bmFtZTpcIkN0cmxTcGF0aWFsUmlnaHRcIixnbHlwaDpcImYxMWJcIn0se25hbWU6XCJQYWdpbmF0aW9uRG90T3V0bGluZTEwXCIsZ2x5cGg6XCJmMTI2XCJ9LHtuYW1lOlwiUGFnaW5hdGlvbkRvdFNvbGlkMTBcIixnbHlwaDpcImYxMjdcIn0se25hbWU6XCJTdHJva2VFcmFzZTJcIixnbHlwaDpcImYxMjhcIn0se25hbWU6XCJTbWFsbEVyYXNlXCIsZ2x5cGg6XCJmMTI5XCJ9LHtuYW1lOlwiTGFyZ2VFcmFzZVwiLGdseXBoOlwiZjEyYVwifSx7bmFtZTpcIkZvbGRlckhvcml6b250YWxcIixnbHlwaDpcImYxMmJcIn0se25hbWU6XCJNaWNyb3Bob25lTGlzdGVuaW5nXCIsZ2x5cGg6XCJmMTJlXCJ9LHtuYW1lOlwiU3RhdHVzRXhjbGFtYXRpb25DaXJjbGU3XCIsZ2x5cGg6XCJmMTJmXCJ9LHtuYW1lOlwiVmlkZW8zNjBcIixnbHlwaDpcImYxMzFcIn0se25hbWU6XCJHaWZ0Ym94T3BlblwiLGdseXBoOlwiZjEzM1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZU91dGVyXCIsZ2x5cGg6XCJmMTM2XCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlSW5uZXJcIixnbHlwaDpcImYxMzdcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVSaW5nXCIsZ2x5cGg6XCJmMTM4XCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVPdXRlclwiLGdseXBoOlwiZjEzOVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlSW5uZXJcIixnbHlwaDpcImYxM2FcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZUV4Y2xhbWF0aW9uXCIsZ2x5cGg6XCJmMTNiXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlRXhjbGFtYXRpb25cIixnbHlwaDpcImYxM2NcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVFcnJvclhcIixnbHlwaDpcImYxM2RcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVDaGVja21hcmtcIixnbHlwaDpcImYxM2VcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVJbmZvXCIsZ2x5cGg6XCJmMTNmXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlQmxvY2tcIixnbHlwaDpcImYxNDBcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVCbG9jazJcIixnbHlwaDpcImYxNDFcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVRdWVzdGlvbk1hcmtcIixnbHlwaDpcImYxNDJcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVTeW5jXCIsZ2x5cGg6XCJmMTQzXCJ9LHtuYW1lOlwiRGlhbDFcIixnbHlwaDpcImYxNDZcIn0se25hbWU6XCJEaWFsMlwiLGdseXBoOlwiZjE0N1wifSx7bmFtZTpcIkRpYWwzXCIsZ2x5cGg6XCJmMTQ4XCJ9LHtuYW1lOlwiRGlhbDRcIixnbHlwaDpcImYxNDlcIn0se25hbWU6XCJEaWFsNVwiLGdseXBoOlwiZjE0YVwifSx7bmFtZTpcIkRpYWw2XCIsZ2x5cGg6XCJmMTRiXCJ9LHtuYW1lOlwiRGlhbDdcIixnbHlwaDpcImYxNGNcIn0se25hbWU6XCJEaWFsOFwiLGdseXBoOlwiZjE0ZFwifSx7bmFtZTpcIkRpYWw5XCIsZ2x5cGg6XCJmMTRlXCJ9LHtuYW1lOlwiRGlhbDEwXCIsZ2x5cGg6XCJmMTRmXCJ9LHtuYW1lOlwiRGlhbDExXCIsZ2x5cGg6XCJmMTUwXCJ9LHtuYW1lOlwiRGlhbDEyXCIsZ2x5cGg6XCJmMTUxXCJ9LHtuYW1lOlwiRGlhbDEzXCIsZ2x5cGg6XCJmMTUyXCJ9LHtuYW1lOlwiRGlhbDE0XCIsZ2x5cGg6XCJmMTUzXCJ9LHtuYW1lOlwiRGlhbDE1XCIsZ2x5cGg6XCJmMTU0XCJ9LHtuYW1lOlwiRGlhbDE2XCIsZ2x5cGg6XCJmMTU1XCJ9LHtuYW1lOlwiRGlhbFNoYXBlMVwiLGdseXBoOlwiZjE1NlwifSx7bmFtZTpcIkRpYWxTaGFwZTJcIixnbHlwaDpcImYxNTdcIn0se25hbWU6XCJEaWFsU2hhcGUzXCIsZ2x5cGg6XCJmMTU4XCJ9LHtuYW1lOlwiRGlhbFNoYXBlNFwiLGdseXBoOlwiZjE1OVwifSx7bmFtZTpcIkNsb3NlZENhcHRpb25zSW50ZXJuYXRpb25hbFwiLGdseXBoOlwiZjE1ZlwifSx7bmFtZTpcIlRvbGxTb2xpZFwiLGdseXBoOlwiZjE2MVwifSx7bmFtZTpcIlRyYWZmaWNDb25nZXN0aW9uU29saWRcIixnbHlwaDpcImYxNjNcIn0se25hbWU6XCJFeHBsb3JlQ29udGVudFNpbmdsZVwiLGdseXBoOlwiZjE2NFwifSx7bmFtZTpcIkNvbGxhcHNlQ29udGVudFwiLGdseXBoOlwiZjE2NVwifSx7bmFtZTpcIkNvbGxhcHNlQ29udGVudFNpbmdsZVwiLGdseXBoOlwiZjE2NlwifSx7bmFtZTpcIkluZm9Tb2xpZFwiLGdseXBoOlwiZjE2N1wifSx7bmFtZTpcIkdyb3VwTGlzdFwiLGdseXBoOlwiZjE2OFwifSx7bmFtZTpcIkNhcmV0Qm90dG9tUmlnaHRTb2xpZENlbnRlcjhcIixnbHlwaDpcImYxNjlcIn0se25hbWU6XCJQcm9ncmVzc1JpbmdEb3RzXCIsZ2x5cGg6XCJmMTZhXCJ9LHtuYW1lOlwiQ2hlY2tib3gxNFwiLGdseXBoOlwiZjE2YlwifSx7bmFtZTpcIkNoZWNrYm94Q29tcG9zaXRlMTRcIixnbHlwaDpcImYxNmNcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVDb21ibzE0XCIsZ2x5cGg6XCJmMTZkXCJ9LHtuYW1lOlwiQ2hlY2tib3hJbmRldGVybWluYXRlQ29tYm9cIixnbHlwaDpcImYxNmVcIn0se25hbWU6XCJTdGF0dXNQYXVzZTdcIixnbHlwaDpcImYxNzVcIn0se25hbWU6XCJDaGFyYWN0ZXJBcHBlYXJhbmNlXCIsZ2x5cGg6XCJmMTdmXCJ9LHtuYW1lOlwiTGV4aWNvblwiLGdseXBoOlwiZjE4MFwifSx7bmFtZTpcIlNjcmVlblRpbWVcIixnbHlwaDpcImYxODJcIn0se25hbWU6XCJIZWFkbGVzc0RldmljZVwiLGdseXBoOlwiZjE5MVwifSx7bmFtZTpcIk5ldHdvcmtTaGFyaW5nXCIsZ2x5cGg6XCJmMTkzXCJ9LHtuYW1lOlwiRXllR2F6ZVwiLGdseXBoOlwiZjE5ZFwifSx7bmFtZTpcIlRvZ2dsZUxlZnRcIixnbHlwaDpcImYxOWVcIn0se25hbWU6XCJUb2dnbGVSaWdodFwiLGdseXBoOlwiZjE5ZlwifSx7bmFtZTpcIldpbmRvd3NJbnNpZGVyXCIsZ2x5cGg6XCJmMWFkXCJ9LHtuYW1lOlwiQ2hyb21lU3dpdGNoXCIsZ2x5cGg6XCJmMWNiXCJ9LHtuYW1lOlwiQ2hyb21lU3dpdGNoQ29udGFzdFwiLGdseXBoOlwiZjFjY1wifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFya1wiLGdseXBoOlwiZjFkOFwifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFya0xlZnRcIixnbHlwaDpcImYxZDlcIn0se25hbWU6XCJLZXlib2FyZExlZnRBbGlnbmVkXCIsZ2x5cGg6XCJmMjBjXCJ9LHtuYW1lOlwiS2V5Ym9hcmRSaWdodEFsaWduZWRcIixnbHlwaDpcImYyMGRcIn0se25hbWU6XCJLZXlib2FyZFNldHRpbmdzXCIsZ2x5cGg6XCJmMjEwXCJ9LHtuYW1lOlwiTmV0d29ya1BoeXNpY2FsXCIsZ2x5cGg6XCJmMjExXCJ9LHtuYW1lOlwiSU9UXCIsZ2x5cGg6XCJmMjJjXCJ9LHtuYW1lOlwiVW5rbm93bk1pcnJvcmVkXCIsZ2x5cGg6XCJmMjJlXCJ9LHtuYW1lOlwiVmlld0Rhc2hib2FyZFwiLGdseXBoOlwiZjI0NlwifSx7bmFtZTpcIkV4cGxvaXRQcm90ZWN0aW9uU2V0dGluZ3NcIixnbHlwaDpcImYyNTlcIn0se25hbWU6XCJLZXlib2FyZE5hcnJvd1wiLGdseXBoOlwiZjI2MFwifSx7bmFtZTpcIktleWJvYXJkMTJLZXlcIixnbHlwaDpcImYyNjFcIn0se25hbWU6XCJLZXlib2FyZERvY2tcIixnbHlwaDpcImYyNmJcIn0se25hbWU6XCJLZXlib2FyZFVuZG9ja1wiLGdseXBoOlwiZjI2Y1wifSx7bmFtZTpcIktleWJvYXJkTGVmdERvY2tcIixnbHlwaDpcImYyNmRcIn0se25hbWU6XCJLZXlib2FyZFJpZ2h0RG9ja1wiLGdseXBoOlwiZjI2ZVwifSx7bmFtZTpcIkVhclwiLGdseXBoOlwiZjI3MFwifSx7bmFtZTpcIlBvaW50ZXJIYW5kXCIsZ2x5cGg6XCJmMjcxXCJ9LHtuYW1lOlwiQnVsbHNleWVcIixnbHlwaDpcImYyNzJcIn0se25hbWU6XCJEb2N1bWVudEFwcHJvdmFsXCIsZ2x5cGg6XCJmMjhiXCJ9LHtuYW1lOlwiTG9jYWxlTGFuZ3VhZ2VcIixnbHlwaDpcImYyYjdcIn0se25hbWU6XCJQYXNzaXZlQXV0aGVudGljYXRpb25cIixnbHlwaDpcImYzMmFcIn0se25hbWU6XCJDb2xvclNvbGlkXCIsZ2x5cGg6XCJmMzU0XCJ9LHtuYW1lOlwiTmV0d29ya09mZmxpbmVcIixnbHlwaDpcImYzODRcIn0se25hbWU6XCJOZXR3b3JrQ29ubmVjdGVkXCIsZ2x5cGg6XCJmMzg1XCJ9LHtuYW1lOlwiTmV0d29ya0Nvbm5lY3RlZENoZWNrbWFya1wiLGdseXBoOlwiZjM4NlwifSx7bmFtZTpcIlNpZ25PdXRcIixnbHlwaDpcImYzYjFcIn0se25hbWU6XCJTdGF0dXNJbmZvXCIsZ2x5cGg6XCJmM2NjXCJ9LHtuYW1lOlwiU3RhdHVzSW5mb0xlZnRcIixnbHlwaDpcImYzY2RcIn0se25hbWU6XCJOZWFyYnlTaGFyaW5nXCIsZ2x5cGg6XCJmM2UyXCJ9LHtuYW1lOlwiQ3RybFNwYXRpYWxMZWZ0XCIsZ2x5cGg6XCJmM2U3XCJ9LHtuYW1lOlwiSW50ZXJhY3RpdmVEYXNoYm9hcmRcIixnbHlwaDpcImY0MDRcIn0se25hbWU6XCJEZWNsaW5lQ2FsbFwiLGdseXBoOlwiZjQwNVwifSx7bmFtZTpcIkNsaXBwaW5nVG9vbFwiLGdseXBoOlwiZjQwNlwifSx7bmFtZTpcIlJlY3Rhbmd1bGFyQ2xpcHBpbmdcIixnbHlwaDpcImY0MDdcIn0se25hbWU6XCJGcmVlRm9ybUNsaXBwaW5nXCIsZ2x5cGg6XCJmNDA4XCJ9LHtuYW1lOlwiQ29weVRvXCIsZ2x5cGg6XCJmNDEzXCJ9LHtuYW1lOlwiSURCYWRnZVwiLGdseXBoOlwiZjQyN1wifSx7bmFtZTpcIkR5bmFtaWNMb2NrXCIsZ2x5cGg6XCJmNDM5XCJ9LHtuYW1lOlwiUGVuVGlwc1wiLGdseXBoOlwiZjQ1ZVwifSx7bmFtZTpcIlBlblRpcHNNaXJyb3JlZFwiLGdseXBoOlwiZjQ1ZlwifSx7bmFtZTpcIkhXUEpvaW5cIixnbHlwaDpcImY0NjBcIn0se25hbWU6XCJIV1BJbnNlcnRcIixnbHlwaDpcImY0NjFcIn0se25hbWU6XCJIV1BTdHJpa2VUaHJvdWdoXCIsZ2x5cGg6XCJmNDYyXCJ9LHtuYW1lOlwiSFdQU2NyYXRjaE91dFwiLGdseXBoOlwiZjQ2M1wifSx7bmFtZTpcIkhXUFNwbGl0XCIsZ2x5cGg6XCJmNDY0XCJ9LHtuYW1lOlwiSFdQTmV3TGluZVwiLGdseXBoOlwiZjQ2NVwifSx7bmFtZTpcIkhXUE92ZXJ3cml0ZVwiLGdseXBoOlwiZjQ2NlwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nMVwiLGdseXBoOlwiZjQ3M1wifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nMlwiLGdseXBoOlwiZjQ3NFwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nM1wiLGdseXBoOlwiZjQ3NVwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nNFwiLGdseXBoOlwiZjQ3NlwifSx7bmFtZTpcIk1pY0xvY2F0aW9uQ29tYm9cIixnbHlwaDpcImY0N2ZcIn0se25hbWU6XCJHbG9iZTJcIixnbHlwaDpcImY0OWFcIn0se25hbWU6XCJTcGVjaWFsRWZmZWN0U2l6ZVwiLGdseXBoOlwiZjRhNVwifSx7bmFtZTpcIkdJRlwiLGdseXBoOlwiZjRhOVwifSx7bmFtZTpcIlN0aWNrZXIyXCIsZ2x5cGg6XCJmNGFhXCJ9LHtuYW1lOlwiU3VyZmFjZUh1YlNlbGVjdGVkXCIsZ2x5cGg6XCJmNGJlXCJ9LHtuYW1lOlwiSG9sb0xlbnNTZWxlY3RlZFwiLGdseXBoOlwiZjRiZlwifSx7bmFtZTpcIkVhcmJ1ZFwiLGdseXBoOlwiZjRjMFwifSx7bmFtZTpcIk1peFZvbHVtZXNcIixnbHlwaDpcImY0YzNcIn0se25hbWU6XCJTYWZlXCIsZ2x5cGg6XCJmNTQwXCJ9LHtuYW1lOlwiTGFwdG9wU2VjdXJlXCIsZ2x5cGg6XCJmNTUyXCJ9LHtuYW1lOlwiUHJpbnREZWZhdWx0XCIsZ2x5cGg6XCJmNTZkXCJ9LHtuYW1lOlwiUGFnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTZlXCJ9LHtuYW1lOlwiTGFuZHNjYXBlT3JpZW50YXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZjU2ZlwifSx7bmFtZTpcIkNvbG9yT2ZmXCIsZ2x5cGg6XCJmNTcwXCJ9LHtuYW1lOlwiUHJpbnRBbGxQYWdlc1wiLGdseXBoOlwiZjU3MVwifSx7bmFtZTpcIlByaW50Q3VzdG9tUmFuZ2VcIixnbHlwaDpcImY1NzJcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXROYXJyb3dcIixnbHlwaDpcImY1NzNcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXROb3JtYWxcIixnbHlwaDpcImY1NzRcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXRNb2RlcmF0ZVwiLGdseXBoOlwiZjU3NVwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdFdpZGVcIixnbHlwaDpcImY1NzZcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlTmFycm93XCIsZ2x5cGg6XCJmNTc3XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZU5vcm1hbFwiLGdseXBoOlwiZjU3OFwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVNb2RlcmF0ZVwiLGdseXBoOlwiZjU3OVwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVXaWRlXCIsZ2x5cGg6XCJmNTdhXCJ9LHtuYW1lOlwiQ29sbGF0ZUxhbmRzY2FwZVwiLGdseXBoOlwiZjU3YlwifSx7bmFtZTpcIkNvbGxhdGVQb3J0cmFpdFwiLGdseXBoOlwiZjU3Y1wifSx7bmFtZTpcIkNvbGxhdGVQb3J0cmFpdFNlcGFyYXRlZFwiLGdseXBoOlwiZjU3ZFwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZU9uZVNpZGVkXCIsZ2x5cGg6XCJmNTdlXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlT25lU2lkZWRNaXJyb3JlZFwiLGdseXBoOlwiZjU3ZlwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkTG9uZ0VkZ2VcIixnbHlwaDpcImY1ODBcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZExvbmdFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODFcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZFNob3J0RWRnZVwiLGdseXBoOlwiZjU4MlwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkU2hvcnRFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODNcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdE9uZVNpZGVkXCIsZ2x5cGg6XCJmNTg0XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRPbmVTaWRlZE1pcnJvcmVkXCIsZ2x5cGg6XCJmNTg1XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZExvbmdFZGdlXCIsZ2x5cGg6XCJmNTg2XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZExvbmdFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODdcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkU2hvcnRFZGdlXCIsZ2x5cGg6XCJmNTg4XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZFNob3J0RWRnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTg5XCJ9LHtuYW1lOlwiUFBTT25lTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThhXCJ9LHtuYW1lOlwiUFBTVHdvTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThiXCJ9LHtuYW1lOlwiUFBTVHdvUG9ydHJhaXRcIixnbHlwaDpcImY1OGNcIn0se25hbWU6XCJQUFNGb3VyTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThkXCJ9LHtuYW1lOlwiUFBTRm91clBvcnRyYWl0XCIsZ2x5cGg6XCJmNThlXCJ9LHtuYW1lOlwiSG9sZVB1bmNoT2ZmXCIsZ2x5cGg6XCJmNThmXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRMZWZ0XCIsZ2x5cGg6XCJmNTkwXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRSaWdodFwiLGdseXBoOlwiZjU5MVwifSx7bmFtZTpcIkhvbGVQdW5jaFBvcnRyYWl0VG9wXCIsZ2x5cGg6XCJmNTkyXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRCb3R0b21cIixnbHlwaDpcImY1OTNcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVMZWZ0XCIsZ2x5cGg6XCJmNTk0XCJ9LHtuYW1lOlwiSG9sZVB1bmNoTGFuZHNjYXBlUmlnaHRcIixnbHlwaDpcImY1OTVcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVUb3BcIixnbHlwaDpcImY1OTZcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVCb3R0b21cIixnbHlwaDpcImY1OTdcIn0se25hbWU6XCJTdGFwbGluZ09mZlwiLGdseXBoOlwiZjU5OFwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUb3BMZWZ0XCIsZ2x5cGg6XCJmNTk5XCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFRvcFJpZ2h0XCIsZ2x5cGg6XCJmNTlhXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvdHRvbVJpZ2h0XCIsZ2x5cGg6XCJmNTliXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b0xlZnRcIixnbHlwaDpcImY1OWNcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvUmlnaHRcIixnbHlwaDpcImY1OWRcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvVG9wXCIsZ2x5cGg6XCJmNTllXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b0JvdHRvbVwiLGdseXBoOlwiZjU5ZlwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRCb29rQmluZGluZ1wiLGdseXBoOlwiZjVhMFwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVG9wTGVmdFwiLGdseXBoOlwiZjVhMVwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVG9wUmlnaHRcIixnbHlwaDpcImY1YTJcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvdHRvbUxlZnRcIixnbHlwaDpcImY1YTNcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvdHRvbVJpZ2h0XCIsZ2x5cGg6XCJmNWE0XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29MZWZ0XCIsZ2x5cGg6XCJmNWE1XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29SaWdodFwiLGdseXBoOlwiZjVhNlwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVHdvVG9wXCIsZ2x5cGg6XCJmNWE3XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29Cb3R0b21cIixnbHlwaDpcImY1YThcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvb2tCaW5kaW5nXCIsZ2x5cGg6XCJmNWE5XCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyUm9hbWluZ1wiLGdseXBoOlwiZjVhYVwifSx7bmFtZTpcIk1vYlNJTUVycm9yXCIsZ2x5cGg6XCJmNWFiXCJ9LHtuYW1lOlwiQ29sbGF0ZUxhbmRzY2FwZVNlcGFyYXRlZFwiLGdseXBoOlwiZjVhY1wifSx7bmFtZTpcIlBQU09uZVBvcnRyYWl0XCIsZ2x5cGg6XCJmNWFkXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvdHRvbUxlZnRcIixnbHlwaDpcImY1YWVcIn0se25hbWU6XCJQbGF5U29saWRcIixnbHlwaDpcImY1YjBcIn0se25hbWU6XCJSZXBlYXRPZmZcIixnbHlwaDpcImY1ZTdcIn0se25hbWU6XCJTZXRcIixnbHlwaDpcImY1ZWRcIn0se25hbWU6XCJTZXRTb2xpZFwiLGdseXBoOlwiZjVlZVwifSx7bmFtZTpcIkZ1enp5UmVhZGluZ1wiLGdseXBoOlwiZjVlZlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTBcIixnbHlwaDpcImY1ZjJcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkxXCIsZ2x5cGg6XCJmNWYzXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MlwiLGdseXBoOlwiZjVmNFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTNcIixnbHlwaDpcImY1ZjVcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk0XCIsZ2x5cGg6XCJmNWY2XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5NVwiLGdseXBoOlwiZjVmN1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTZcIixnbHlwaDpcImY1ZjhcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk3XCIsZ2x5cGg6XCJmNWY5XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5OFwiLGdseXBoOlwiZjVmYVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTlcIixnbHlwaDpcImY1ZmJcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkxMFwiLGdseXBoOlwiZjVmY1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZjVmZFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZjVmZVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMlwiLGdseXBoOlwiZjVmZlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZjYwMFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZjYwMVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNVwiLGdseXBoOlwiZjYwMlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZjYwM1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZjYwNFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nOFwiLGdseXBoOlwiZjYwNVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZjYwNlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImY2MDdcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlVbmtub3duXCIsZ2x5cGg6XCJmNjA4XCJ9LHtuYW1lOlwiU0lNRXJyb3JcIixnbHlwaDpcImY2MThcIn0se25hbWU6XCJTSU1NaXNzaW5nXCIsZ2x5cGg6XCJmNjE5XCJ9LHtuYW1lOlwiU0lNTG9ja1wiLGdseXBoOlwiZjYxYVwifSx7bmFtZTpcImVTSU1cIixnbHlwaDpcImY2MWJcIn0se25hbWU6XCJlU0lNTm9Qcm9maWxlXCIsZ2x5cGg6XCJmNjFjXCJ9LHtuYW1lOlwiZVNJTUxvY2tlZFwiLGdseXBoOlwiZjYxZFwifSx7bmFtZTpcImVTSU1CdXN5XCIsZ2x5cGg6XCJmNjFlXCJ9LHtuYW1lOlwiTm9pc2VDYW5jZWxhdGlvblwiLGdseXBoOlwiZjYxZlwifSx7bmFtZTpcIk5vaXNlQ2FuY2VsYXRpb25PZmZcIixnbHlwaDpcImY2MjBcIn0se25hbWU6XCJNdXNpY1NoYXJpbmdcIixnbHlwaDpcImY2MjNcIn0se25hbWU6XCJNdXNpY1NoYXJpbmdPZmZcIixnbHlwaDpcImY2MjRcIn0se25hbWU6XCJDaXJjbGVTaGFwZVNvbGlkXCIsZ2x5cGg6XCJmNjNjXCJ9LHtuYW1lOlwiV2lmaUNhbGxCYXJzXCIsZ2x5cGg6XCJmNjU3XCJ9LHtuYW1lOlwiV2lmaUNhbGwwXCIsZ2x5cGg6XCJmNjU4XCJ9LHtuYW1lOlwiV2lmaUNhbGwxXCIsZ2x5cGg6XCJmNjU5XCJ9LHtuYW1lOlwiV2lmaUNhbGwyXCIsZ2x5cGg6XCJmNjVhXCJ9LHtuYW1lOlwiV2lmaUNhbGwzXCIsZ2x5cGg6XCJmNjViXCJ9LHtuYW1lOlwiV2lmaUNhbGw0XCIsZ2x5cGg6XCJmNjVjXCJ9LHtuYW1lOlwiQ0hUTGFuZ3VhZ2VCYXJcIixnbHlwaDpcImY2OWVcIn0se25hbWU6XCJDb21wb3NlTW9kZVwiLGdseXBoOlwiZjZhOVwifSx7bmFtZTpcIkV4cHJlc3NpdmVJbnB1dEVudHJ5XCIsZ2x5cGg6XCJmNmI4XCJ9LHtuYW1lOlwiRW1vamlUYWJNb3JlU3ltYm9sc1wiLGdseXBoOlwiZjZiYVwifSx7bmFtZTpcIldlYlNlYXJjaFwiLGdseXBoOlwiZjZmYVwifSx7bmFtZTpcIktpb3NrXCIsZ2x5cGg6XCJmNzEyXCJ9LHtuYW1lOlwiUlRUTG9nb1wiLGdseXBoOlwiZjcxNFwifSx7bmFtZTpcIlZvaWNlQ2FsbFwiLGdseXBoOlwiZjcxNVwifSx7bmFtZTpcIkdvVG9NZXNzYWdlXCIsZ2x5cGg6XCJmNzE2XCJ9LHtuYW1lOlwiUmV0dXJuVG9DYWxsXCIsZ2x5cGg6XCJmNzFhXCJ9LHtuYW1lOlwiU3RhcnRQcmVzZW50aW5nXCIsZ2x5cGg6XCJmNzFjXCJ9LHtuYW1lOlwiU3RvcFByZXNlbnRpbmdcIixnbHlwaDpcImY3MWRcIn0se25hbWU6XCJQcm9kdWN0aXZpdHlNb2RlXCIsZ2x5cGg6XCJmNzFlXCJ9LHtuYW1lOlwiU2V0SGlzdG9yeVN0YXR1c1wiLGdseXBoOlwiZjczOFwifSx7bmFtZTpcIlNldEhpc3RvcnlTdGF0dXMyXCIsZ2x5cGg6XCJmNzM5XCJ9LHtuYW1lOlwiS2V5Ym9hcmRzZXR0aW5nczIwXCIsZ2x5cGg6XCJmNzNkXCJ9LHtuYW1lOlwiT25lSGFuZGVkUmlnaHQyMFwiLGdseXBoOlwiZjczZVwifSx7bmFtZTpcIk9uZUhhbmRlZExlZnQyMFwiLGdseXBoOlwiZjczZlwifSx7bmFtZTpcIlNwbGl0MjBcIixnbHlwaDpcImY3NDBcIn0se25hbWU6XCJGdWxsMjBcIixnbHlwaDpcImY3NDFcIn0se25hbWU6XCJIYW5kd3JpdGluZzIwXCIsZ2x5cGg6XCJmNzQyXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnQyMFwiLGdseXBoOlwiZjc0M1wifSx7bmFtZTpcIkNoZXZyb25MZWZ0MzJcIixnbHlwaDpcImY3NDRcIn0se25hbWU6XCJDaGV2cm9uUmlnaHQyMFwiLGdseXBoOlwiZjc0NVwifSx7bmFtZTpcIkNoZXZyb25SaWdodDMyXCIsZ2x5cGg6XCJmNzQ2XCJ9LHtuYW1lOlwiRXZlbnQxMlwiLGdseXBoOlwiZjc2M1wifSx7bmFtZTpcIk1pY09mZjJcIixnbHlwaDpcImY3ODFcIn0se25hbWU6XCJEZWxpdmVyeU9wdGltaXphdGlvblwiLGdseXBoOlwiZjc4NVwifSx7bmFtZTpcIkNhbmNlbE1lZGl1bVwiLGdseXBoOlwiZjc4YVwifSx7bmFtZTpcIlNlYXJjaE1lZGl1bVwiLGdseXBoOlwiZjc4YlwifSx7bmFtZTpcIkFjY2VwdE1lZGl1bVwiLGdseXBoOlwiZjc4Y1wifSx7bmFtZTpcIlJldmVhbFBhc3N3b3JkTWVkaXVtXCIsZ2x5cGg6XCJmNzhkXCJ9LHtuYW1lOlwiRGVsZXRlV29yZFwiLGdseXBoOlwiZjdhZFwifSx7bmFtZTpcIkRlbGV0ZVdvcmRGaWxsXCIsZ2x5cGg6XCJmN2FlXCJ9LHtuYW1lOlwiRGVsZXRlTGluZXNcIixnbHlwaDpcImY3YWZcIn0se25hbWU6XCJEZWxldGVMaW5lc0ZpbGxcIixnbHlwaDpcImY3YjBcIn0se25hbWU6XCJJbnN0ZXJ0V29yZHNcIixnbHlwaDpcImY3YjFcIn0se25hbWU6XCJJbnN0ZXJ0V29yZHNGaWxsXCIsZ2x5cGg6XCJmN2IyXCJ9LHtuYW1lOlwiSm9pbldvcmRzXCIsZ2x5cGg6XCJmN2IzXCJ9LHtuYW1lOlwiSm9pbldvcmRzRmlsbFwiLGdseXBoOlwiZjdiNFwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzXCIsZ2x5cGg6XCJmN2I1XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNGaWxsXCIsZ2x5cGg6XCJmN2I2XCJ9LHtuYW1lOlwiQWRkTmV3TGluZVwiLGdseXBoOlwiZjdiN1wifSx7bmFtZTpcIkFkZE5ld0xpbmVGaWxsXCIsZ2x5cGg6XCJmN2I4XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNLb3JlYW5cIixnbHlwaDpcImY3YjlcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0ZpbGxLb3JlYW5cIixnbHlwaDpcImY3YmFcIn0se25hbWU6XCJFZHVjYXRpb25JY29uXCIsZ2x5cGg6XCJmN2JiXCJ9LHtuYW1lOlwiV2luZG93U25pcHBpbmdcIixnbHlwaDpcImY3ZWRcIn0se25hbWU6XCJWaWRlb0NhcHR1cmVcIixnbHlwaDpcImY3ZWVcIn0se25hbWU6XCJTdGF0dXNTZWN1cmVkXCIsZ2x5cGg6XCJmODA5XCJ9LHtuYW1lOlwiTmFycmF0b3JBcHBcIixnbHlwaDpcImY4M2JcIn0se25hbWU6XCJQb3dlckJ1dHRvblVwZGF0ZVwiLGdseXBoOlwiZjgzZFwifSx7bmFtZTpcIlJlc3RhcnRVcGRhdGVcIixnbHlwaDpcImY4M2VcIn0se25hbWU6XCJVcGRhdGVTdGF0dXNEb3RcIixnbHlwaDpcImY4M2ZcIn0se25hbWU6XCJFamVjdFwiLGdseXBoOlwiZjg0N1wifSx7bmFtZTpcIlNwZWxsaW5nXCIsZ2x5cGg6XCJmODdiXCJ9LHtuYW1lOlwiU3BlbGxpbmdLb3JlYW5cIixnbHlwaDpcImY4N2NcIn0se25hbWU6XCJTcGVsbGluZ1NlcmJpYW5cIixnbHlwaDpcImY4N2RcIn0se25hbWU6XCJTcGVsbGluZ0NoaW5lc2VcIixnbHlwaDpcImY4N2VcIn0se25hbWU6XCJGb2xkZXJTZWxlY3RcIixnbHlwaDpcImY4OWFcIn0se25hbWU6XCJTbWFydFNjcmVlblwiLGdseXBoOlwiZjhhNVwifSx7bmFtZTpcIkV4cGxvaXRQcm90ZWN0aW9uXCIsZ2x5cGg6XCJmOGE2XCJ9LHtuYW1lOlwiQWRkQm9sZFwiLGdseXBoOlwiZjhhYVwifSx7bmFtZTpcIlN1YnRyYWN0Qm9sZFwiLGdseXBoOlwiZjhhYlwifSx7bmFtZTpcIkJhY2tTb2xpZEJvbGRcIixnbHlwaDpcImY4YWNcIn0se25hbWU6XCJGb3J3YXJkU29saWRCb2xkXCIsZ2x5cGg6XCJmOGFkXCJ9LHtuYW1lOlwiUGF1c2VCb2xkXCIsZ2x5cGg6XCJmOGFlXCJ9LHtuYW1lOlwiQ2xpY2tTb2xpZFwiLGdseXBoOlwiZjhhZlwifSx7bmFtZTpcIlNldHRpbmdzU29saWRcIixnbHlwaDpcImY4YjBcIn0se25hbWU6XCJNaWNyb3Bob25lU29saWRCb2xkXCIsZ2x5cGg6XCJmOGIxXCJ9LHtuYW1lOlwiU3BlZWNoU29saWRCb2xkXCIsZ2x5cGg6XCJmOGIyXCJ9LHtuYW1lOlwiQ2xpY2tlZE91dExvdWRTb2xpZEJvbGRcIixnbHlwaDpcImY4YjNcIn1dO2xldCBwPWNsYXNzIGV4dGVuZHMgZS5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJmb250LWZhbWlseVwiLFwiZ2x5cGhcIixcImZvbnQtc2l6ZVwiLFwiZm9yZWdyb3VuZFwiLFwidXNlLWFjY2VudFwiXX1nZXQgZm9udEZhbWlseSgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5nZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiKSkmJnZvaWQgMCE9PWU/ZTpcIlNlZ29lIEZsdWVudCBJY29uc1wifXNldCBmb250RmFtaWx5KGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIixlKSx0aGlzLnNldEZvbnRGYW1pbHkoKX1nZXQgZ2x5cGgoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJnbHlwaFwiKX1zZXQgZ2x5cGgoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJnbHlwaFwiLGUpLHRoaXMuc2V0R2x5cGgoKX1nZXQgZm9udFNpemUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJmb250LXNpemVcIik/cGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIikpOjE2fXNldCBmb250U2l6ZShlKXt0aGlzLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLGUudG9TdHJpbmcoKSksdGhpcy5zZXRGb250U2l6ZSgpfWdldCBmb3JlZ3JvdW5kKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZm9yZWdyb3VuZFwiKX1zZXQgZm9yZWdyb3VuZChlKXt0aGlzLnNldEF0dHJpYnV0ZShcImZvcmVncm91bmRcIixlKSx0aGlzLnNldEZvcmVncm91bmQoKX1nZXQgdXNlQWNjZW50KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidXNlLWFjY2VudFwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpfXNldCB1c2VBY2NlbnQoZSl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsZSksdGhpcy5zZXRGb3JlZ3JvdW5kKCl9Z2V0IGljb25TcGFuKCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLl9pY29uU3BhbikmJnZvaWQgMCE9PWV8fCh0aGlzLl9pY29uU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpKSx0aGlzLl9pY29uU3Bhbn1yZW5kZXIoKXtyZXR1cm4nXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgcGFydD1cImljb25cIj48L3NwYW4+XFxuICAgICAgICAnfWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5zZXRGb250RmFtaWx5KCksdGhpcy5zZXRHbHlwaCgpLHRoaXMuc2V0Rm9udFNpemUoKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pe3N3aXRjaChlKXtjYXNlXCJmb250LWZhbWlseVwiOnRoaXMuc2V0Rm9udEZhbWlseSgpO2JyZWFrO2Nhc2VcImdseXBoXCI6dGhpcy5zZXRHbHlwaCgpO2JyZWFrO2Nhc2VcImZvbnQtc2l6ZVwiOnRoaXMuc2V0Rm9udFNpemUoKTticmVhaztjYXNlXCJmb3JlZ3JvdW5kXCI6Y2FzZVwidXNlLWFjY2VudFwiOnRoaXMuc2V0Rm9yZWdyb3VuZCgpfX1zZXRGb250RmFtaWx5KCl7dGhpcy5pY29uU3Bhbi5zdHlsZS5mb250RmFtaWx5PXRoaXMuZm9udEZhbWlseStcIiwgc2Fucy1zZXJpZlwifXNldEdseXBoKCl7dGhpcy5pY29uU3Bhbi5pbm5lckhUTUw9dGhpcy5nbHlwaH1zZXRGb250U2l6ZSgpe2lmKG51bGwhPT10aGlzLmZvbnRTaXplKXtjb25zdCBlPXRoaXMuZm9udFNpemUrXCJweFwiLGE9dGhpcy5zdHlsZSxuPXRoaXMuaWNvblNwYW4uc3R5bGU7bi5mb250U2l6ZT1lLG4ubGluZUhlaWdodD1lLG4uaGVpZ2h0PWUsbi53aWR0aD1lLGEuaGVpZ2h0PWUsYS53aWR0aD1lfX1zZXRGb3JlZ3JvdW5kKCl7dGhpcy5pY29uU3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwidXNlLWFjY2VudFwiLHRoaXMudXNlQWNjZW50KSxudWxsIT09dGhpcy5mb3JlZ3JvdW5kJiYodGhpcy5pY29uU3Bhbi5zdHlsZS5jb2xvcj10aGlzLmZvcmVncm91bmQpfX07cC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbi51c2UtYWNjZW50IHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC1hY2NlbnQtZGVmYXVsdCk7XFxuICAgICAgICB9XFxuICAgIFwiLHA9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWZvbnQtaWNvblwiKV0scCk7bGV0IGg9Y2xhc3MgZXh0ZW5kcyBwe3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiZm9udC1mYW1pbHlcIixcImdseXBoXCIsXCJmb250LXNpemVcIixcImZvcmVncm91bmRcIixcInVzZS1hY2NlbnRcIixcInN5bWJvbFwiXX1nZXQgc3ltYm9sKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic3ltYm9sXCIpfXNldCBzeW1ib2woZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJzeW1ib2xcIixlKSx0aGlzLnNldFN5bWJvbCgpfWdldCBnbHlwaE1hcCgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5fZ2x5cGhNYXApJiZ2b2lkIDAhPT1lP2U6Z31zZXQgZ2x5cGhNYXAoZSl7dGhpcy5fZ2x5cGhNYXA9ZSx0aGlzLnNldFN5bWJvbCgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKSxcInN5bWJvbFwiPT09ZSYmdGhpcy5zZXRTeW1ib2woKX1zZXRTeW1ib2woKXtjb25zdCBlPXRoaXMuc3ltYm9sP1wiJiN4XCIrdGhpcy5nbHlwaE1hcC5maW5kKChlPT5lLm5hbWU9PT10aGlzLnN5bWJvbCkpLmdseXBoOlwiXCI7c3VwZXIuZ2x5cGg9ZX19O2g9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LXN5bWJvbC1pY29uXCIpXSxoKTtsZXQgdD1jbGFzcyBleHRlbmRzIGUuQ3VzdG9tQ29tcG9uZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wic291cmNlXCIsXCJzaXplXCIsXCJhbHRcIixcInRpdGxlXCJdfWdldCBzb3VyY2UoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzb3VyY2VcIil9c2V0IHNvdXJjZShlKXt0aGlzLnNldEF0dHJpYnV0ZShcInNvdXJjZVwiLGUpfWdldCBzaXplKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwic2l6ZVwiKT9wYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZShcInNpemVcIikpOjE2fXNldCBzaXplKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwic2l6ZVwiLGUudG9TdHJpbmcoKSl9Z2V0IGFsdCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImFsdFwiKX1nZXQgdGl0bGUoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKX1nZXQgaW1hZ2UoKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuX2ltYWdlKSYmdm9pZCAwIT09ZXx8KHRoaXMuX2ltYWdlPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpKSx0aGlzLl9pbWFnZX1yZW5kZXIoKXtyZXR1cm4nPGltZyBjbGFzcz1cImltYWdlXCIgLz4nfWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5zZXRTb3VyY2UoKSx0aGlzLnNldFNpemUoKSx0aGlzLnNldEFsdE9yVGl0bGUoKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pe3N3aXRjaChlKXtjYXNlXCJzb3VyY2VcIjp0aGlzLnNldFNvdXJjZSgpO2JyZWFrO2Nhc2VcInNpemVcIjp0aGlzLnNldFNpemUoKTticmVhaztjYXNlXCJhbHRcIjpjYXNlXCJ0aXRsZVwiOnRoaXMuc2V0QWx0T3JUaXRsZSgpfX1zZXRTb3VyY2UoKXt0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc291cmNlKX1zZXRTaXplKCl7Y29uc3QgZT10aGlzLmltYWdlLnN0eWxlLGE9dGhpcy5zdHlsZTtlLndpZHRoPXRoaXMuc2l6ZStcInB4XCIsZS5oZWlnaHQ9dGhpcy5zaXplK1wicHhcIixhLndpZHRoPXRoaXMuc2l6ZStcInB4XCIsYS5oZWlnaHQ9dGhpcy5zaXplK1wicHhcIn1zZXRBbHRPclRpdGxlKCl7dGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIix0aGlzLmFsdCksdGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHRoaXMudGl0bGUpfX07dC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW1hZ2Uge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICBcIix0PWEoWygwLGUuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1pbWFnZS1pY29uXCIpXSx0KX0pKCksbH0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50LmpzLm1hcCIsIi8qXG4gKiBhbmltZS5qcyB2My4yLjFcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGFuaW1lanMuY29tXG4gKi9cblxuLy8gRGVmYXVsdHNcblxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xuICB1cGRhdGU6IG51bGwsXG4gIGJlZ2luOiBudWxsLFxuICBsb29wQmVnaW46IG51bGwsXG4gIGNoYW5nZUJlZ2luOiBudWxsLFxuICBjaGFuZ2U6IG51bGwsXG4gIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxuICBsb29wQ29tcGxldGU6IG51bGwsXG4gIGNvbXBsZXRlOiBudWxsLFxuICBsb29wOiAxLFxuICBkaXJlY3Rpb246ICdub3JtYWwnLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgdGltZWxpbmVPZmZzZXQ6IDBcbn07XG5cbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAwLFxuICBlbmREZWxheTogMCxcbiAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcbiAgcm91bmQ6IDBcbn07XG5cbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xuXG4vLyBDYWNoaW5nXG5cbnZhciBjYWNoZSA9IHtcbiAgQ1NTOiB7fSxcbiAgc3ByaW5nczoge31cbn07XG5cbi8vIFV0aWxzXG5cbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xuICByZXR1cm4gc3RyLmluZGV4T2YodGV4dCkgPiAtMTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBcmd1bWVudHMoZnVuYywgYXJncykge1xuICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbn1cblxudmFyIGlzID0ge1xuICBhcnI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBBcnJheS5pc0FycmF5KGEpOyB9LFxuICBvYmo6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBzdHJpbmdDb250YWlucyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksICdPYmplY3QnKTsgfSxcbiAgcHRoOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyk7IH0sXG4gIHN2ZzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50OyB9LFxuICBpbnA6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudDsgfSxcbiAgZG9tOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSk7IH0sXG4gIHN0cjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJzsgfSxcbiAgZm5jOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7IH0sXG4gIHVuZDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJzsgfSxcbiAgbmlsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMudW5kKGEpIHx8IGEgPT09IG51bGw7IH0sXG4gIGhleDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpOyB9LFxuICByZ2I6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXnJnYi8udGVzdChhKTsgfSxcbiAgaHNsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15oc2wvLnRlc3QoYSk7IH0sXG4gIGNvbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7IH0sXG4gIGtleTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnOyB9LFxufTtcblxuLy8gRWFzaW5nc1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXJzZUZsb2F0KHApOyB9KSA6IFtdO1xufVxuXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG5cbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XG5cbiAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xuICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xuICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcbiAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XG4gIHZhciB2ZWxvY2l0eSA9ICBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcbiAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xuICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gIHZhciBhID0gMTtcbiAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcblxuICBmdW5jdGlvbiBzb2x2ZXIodCkge1xuICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcbiAgICB9XG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkgeyByZXR1cm4gdDsgfVxuICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xuICAgIGlmIChjYWNoZWQpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICAgIHZhciBmcmFtZSA9IDEvNjtcbiAgICB2YXIgZWxhcHNlZCA9IDA7XG4gICAgdmFyIHJlc3QgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XG4gICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XG4gICAgICAgIHJlc3QrKztcbiAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHsgYnJlYWs7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3QgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xuICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xuXG59XG5cbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cblxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcbiAgaWYgKCBzdGVwcyA9PT0gdm9pZCAwICkgc3RlcHMgPSAxMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGguY2VpbCgobWluTWF4KHQsIDAuMDAwMDAxLCAxKSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTsgfTtcbn1cblxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uICgpIHtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEMoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMSB9XG5cbiAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUIH1cbiAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpIH1cblxuICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkgeyBhQiA9IGN1cnJlbnRUOyB9IGVsc2UgeyBhQSA9IGN1cnJlbnRUOyB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH1cblxuICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkgeyByZXR1cm4gYUd1ZXNzVDsgfVxuICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7IHJldHVybjsgfVxuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXG4gICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XG4gICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIH1cblxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7IHJldHVybiB4OyB9XG4gICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7IHJldHVybiB4OyB9XG4gICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGJlemllcjtcblxufSkoKTtcblxudmFyIHBlbm5lciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gQmFzZWQgb24galF1ZXJ5IFVJJ3MgaW1wbGVtZW5hdGlvbiBvZiBlYXNpbmcgZXF1YXRpb25zIGZyb20gUm9iZXJ0IFBlbm5lciAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZylcblxuICB2YXIgZWFzZXMgPSB7IGxpbmVhcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07IH0gfTtcblxuICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xuICAgIFNpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTsgfTsgfSxcbiAgICBDaXJjOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpOyB9OyB9LFxuICAgIEJhY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ICogdCAqICgzICogdCAtIDIpOyB9OyB9LFxuICAgIEJvdW5jZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBwb3cyLCBiID0gNDtcbiAgICAgIHdoaWxlICh0IDwgKCggcG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cbiAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKCBwb3cyICogMyAtIDIgKSAvIDIyIC0gdCwgMilcbiAgICB9OyB9LFxuICAgIEVsYXN0aWM6IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgICAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gICAgICBpZiAoIHBlcmlvZCA9PT0gdm9pZCAwICkgcGVyaW9kID0gLjU7XG5cbiAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xuICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6IFxuICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XG5cbiAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaSkge1xuICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLnBvdyh0LCBpICsgMik7IH07IH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGZ1bmN0aW9uRWFzaW5ncykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XG4gICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcbiAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VJbk91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDogXG4gICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjsgfTsgfTtcbiAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gKDEgLSBlYXNlSW4oYSwgYikoMSAtIHQgKiAyKSkgLyAyIDogXG4gICAgICAoZWFzZUluKGEsIGIpKHQgKiAyIC0gMSkgKyAxKSAvIDI7IH07IH07XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlcztcblxufSkoKTtcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcbiAgaWYgKGlzLmZuYyhlYXNpbmcpKSB7IHJldHVybiBlYXNpbmc7IH1cbiAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcbiAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XG4gIHZhciBhcmdzID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKGVhc2luZyk7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ3NwcmluZycgOiByZXR1cm4gc3ByaW5nKGVhc2luZywgZHVyYXRpb24pO1xuICAgIGNhc2UgJ2N1YmljQmV6aWVyJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xuICAgIGNhc2UgJ3N0ZXBzJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XG4gICAgZGVmYXVsdCA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhlYXNlLCBhcmdzKTtcbiAgfVxufVxuXG4vLyBTdHJpbmdzXG5cbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gQXJyYXlzXG5cbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaSBpbiBhcnIpIHtcbiAgICAgIHZhciB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7IH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvKSB7XG4gIGlmIChpcy5hcnIobykpIHsgcmV0dXJuIG87IH1cbiAgaWYgKGlzLnN0cihvKSkgeyBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87IH1cbiAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7IH1cbiAgcmV0dXJuIFtvXTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgPT09IHZhbDsgfSk7XG59XG5cbi8vIE9iamVjdHNcblxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xuICB2YXIgY2xvbmUgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvKSB7IGNsb25lW3BdID0gb1twXTsgfVxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzEpIHsgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMikgeyBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbi8vIENvbG9yc1xuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHsgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjsgfSApO1xuICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIHZhciBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgaWYgKHQgPCAxLzYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICBpZiAodCA8IDEvMikgeyByZXR1cm4gcTsgfVxuICAgIGlmICh0IDwgMi8zKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7IH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICB2YXIgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICB9XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSB7IHJldHVybiByZ2JUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaGV4KHZhbCkpIHsgcmV0dXJuIGhleFRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oc2wodmFsKSkgeyByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7IH1cbn1cblxuLy8gVW5pdHNcblxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcbiAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcbiAgaWYgKHNwbGl0KSB7IHJldHVybiBzcGxpdFsxXTsgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpIHx8IHByb3BOYW1lID09PSAncGVyc3BlY3RpdmUnKSB7IHJldHVybiAncHgnOyB9XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7IHJldHVybiAnZGVnJzsgfVxufVxuXG4vLyBWYWx1ZXNcblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcbiAgaWYgKCFpcy5mbmModmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcbiAgaWYgKCFpcy51bmQoY2FjaGVkKSkgeyByZXR1cm4gY2FjaGVkOyB9XG4gIHZhciBiYXNlbGluZSA9IDEwMDtcbiAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XG4gIHZhciBwYXJlbnRFbCA9IChlbC5wYXJlbnROb2RlICYmIChlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudCkpID8gZWwucGFyZW50Tm9kZSA6IGRvY3VtZW50LmJvZHk7XG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XG4gIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRlbXBFbC5zdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcbiAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xuICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xuICB2YXIgY29udmVydGVkVW5pdCA9IGZhY3RvciAqIHBhcnNlRmxvYXQodmFsdWUpO1xuICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XG4gIHJldHVybiBjb252ZXJ0ZWRVbml0O1xufVxuXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xuICBpZiAocHJvcCBpbiBlbC5zdHlsZSkge1xuICAgIHZhciB1cHBlcmNhc2VQcm9wTmFtZSA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgdmFsdWUgPSBlbC5zdHlsZVtwcm9wXSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHVwcGVyY2FzZVByb3BOYW1lKSB8fCAnMCc7XG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcbiAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkgeyByZXR1cm4gJ2F0dHJpYnV0ZSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSB7IHJldHVybiAndHJhbnNmb3JtJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkgeyByZXR1cm4gJ2Nzcyc7IH1cbiAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHsgcmV0dXJuICdvYmplY3QnOyB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XG4gIGlmICghaXMuZG9tKGVsKSkgeyByZXR1cm47IH1cbiAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcbiAgdmFyIHJlZyAgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xuICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcbiAgdmFyIG07IHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkgeyB0cmFuc2Zvcm1zLnNldChtWzFdLCBtWzJdKTsgfVxuICByZXR1cm4gdHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XG4gIHZhciBkZWZhdWx0VmFsID0gc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdzY2FsZScpID8gMSA6IDAgKyBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKTtcbiAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcbiAgaWYgKGFuaW1hdGFibGUpIHtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xuICB9XG4gIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XG4gIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xuICAgIGNhc2UgJ3RyYW5zZm9ybSc6IHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcbiAgICBjYXNlICdjc3MnOiByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XG4gICAgY2FzZSAnYXR0cmlidXRlJzogcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcbiAgICBkZWZhdWx0OiByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pIHtcbiAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XG4gIGlmICghb3BlcmF0b3IpIHsgcmV0dXJuIHRvOyB9XG4gIHZhciB1ID0gZ2V0VW5pdCh0bykgfHwgMDtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcbiAgc3dpdGNoIChvcGVyYXRvclswXVswXSkge1xuICAgIGNhc2UgJysnOiByZXR1cm4geCArIHkgKyB1O1xuICAgIGNhc2UgJy0nOiByZXR1cm4geCAtIHkgKyB1O1xuICAgIGNhc2UgJyonOiByZXR1cm4geCAqIHkgKyB1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XG4gIGlmIChpcy5jb2wodmFsKSkgeyByZXR1cm4gY29sb3JUb1JnYih2YWwpOyB9XG4gIGlmICgvXFxzL2cudGVzdCh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcbiAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XG4gIGlmICh1bml0KSB7IHJldHVybiB1bml0TGVzcyArIHVuaXQ7IH1cbiAgcmV0dXJuIHVuaXRMZXNzO1xufVxuXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vU2ViTGFtYmxhLzNlMDU1MGM0OTZjMjM2NzA5NzQ0XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG59XG5cbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xuICByZXR1cm4gTWF0aC5QSSAqIDIgKiBnZXRBdHRyaWJ1dGUoZWwsICdyJyk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xuICByZXR1cm4gZ2V0RGlzdGFuY2UoXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJyl9LCBcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKX1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgdmFyIHByZXZpb3VzUG9zO1xuICBmb3IgKHZhciBpID0gMCA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcbiAgICBpZiAoaSA+IDApIHsgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpOyB9XG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuICB9XG4gIHJldHVybiB0b3RhbExlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBQYXRoIGFuaW1hdGlvblxuXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xuICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHsgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7IH1cbiAgc3dpdGNoKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6IHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XG4gICAgY2FzZSAnbGluZSc6IHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5bGluZSc6IHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWdvbic6IHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XG4gIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcbiAgcmV0dXJuIHBhdGhMZW5ndGg7XG59XG5cbi8vIE1vdGlvbiBwYXRoXG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XG4gIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XG4gICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHsgYnJlYWs7IH1cbiAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHBhcmVudEVsO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XG4gIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xuICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcbiAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xuICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gIHJldHVybiB7XG4gICAgZWw6IHBhcmVudFN2Z0VsLFxuICAgIHZpZXdCb3g6IHZpZXdCb3gsXG4gICAgeDogdmlld0JveFswXSAvIDEsXG4gICAgeTogdmlld0JveFsxXSAvIDEsXG4gICAgdzogd2lkdGgsXG4gICAgaDogaGVpZ2h0LFxuICAgIHZXOiB2aWV3Qm94WzJdLFxuICAgIHZIOiB2aWV3Qm94WzNdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XG4gIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xuICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgZWw6IHBhdGhFbCxcbiAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXG4gICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MsIGlzUGF0aFRhcmdldEluc2lkZVNWRykge1xuICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcbiAgICBpZiAoIG9mZnNldCA9PT0gdm9pZCAwICkgb2Zmc2V0ID0gMDtcblxuICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcbiAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xuICB9XG4gIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xuICB2YXIgcCA9IHBvaW50KCk7XG4gIHZhciBwMCA9IHBvaW50KC0xKTtcbiAgdmFyIHAxID0gcG9pbnQoKzEpO1xuICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xuICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xuICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcbiAgICBjYXNlICd4JzogcmV0dXJuIChwLnggLSBzdmcueCkgKiBzY2FsZVg7XG4gICAgY2FzZSAneSc6IHJldHVybiAocC55IC0gc3ZnLnkpICogc2NhbGVZO1xuICAgIGNhc2UgJ2FuZ2xlJzogcmV0dXJuIE1hdGguYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIE1hdGguUEk7XG4gIH1cbn1cblxuLy8gRGVjb21wb3NlIHZhbHVlXG5cbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xuICAvLyBjb25zdCByZ3ggPSAvLT9cXGQqXFwuP1xcZCsvZzsgLy8gaGFuZGxlcyBiYXNpYyBudW1iZXJzXG4gIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWw6IHZhbHVlLFxuICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxuICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxuICB9XG59XG5cbi8vIEFuaW1hdGFibGVzXG5cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xuICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7IHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvczsgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4ge3RhcmdldDogdCwgaWQ6IGksIHRvdGFsOiBwYXJzZWQubGVuZ3RoLCB0cmFuc2Zvcm1zOiB7IGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpIH0gfTtcbiAgfSk7XG59XG5cbi8vIFByb3BlcnRpZXNcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcbiAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXG4gIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7IH1cbiAgaWYgKGlzLmFycihwcm9wKSkge1xuICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XG4gICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XG4gICAgaWYgKCFpc0Zyb21Ubykge1xuICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xuICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcbiAgICAgIHByb3AgPSB7dmFsdWU6IHByb3B9O1xuICAgIH1cbiAgfVxuICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcbiAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7dmFsdWU6IHZ9O1xuICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHsgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDsgfVxuICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkgeyBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwOyB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSkubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xuICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7IH0pKSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIGlzLmtleShwKTsgfSlcbiAgLnJlZHVjZShmdW5jdGlvbiAoYSxiKSB7IGlmIChhLmluZGV4T2YoYikgPCAwKSB7IGEucHVzaChiKTsgfSByZXR1cm4gYTsgfSwgW10pO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICggaSApIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3S2V5ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGtleSkge1xuICAgICAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHsgbmV3S2V5LnZhbHVlID0ga2V5W3BdOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcCggaSApO1xuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XG4gIGlmIChrZXlmcmFtZXMpIHsgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTsgfVxuICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xuICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHAsXG4gICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBUd2VlbnNcblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xuICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xuICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTsgfSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7IHZhbHVlID0gdmFsdWVbMF07IH1cbiAgICB9XG4gICAgdFtwXSA9IHZhbHVlO1xuICB9XG4gIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xuICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XG4gIHZhciBwcmV2aW91c1R3ZWVuO1xuICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcbiAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcbiAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XG4gICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XG4gICAgaWYgKGlzLnVuZCh0bykpIHsgdG8gPSBwcmV2aW91c1ZhbHVlOyB9XG4gICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xuICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xuICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcbiAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcbiAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XG4gICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xuICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xuICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XG4gICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHsgdHdlZW4ucm91bmQgPSAxOyB9XG4gICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfSk7XG59XG5cbi8vIFR3ZWVuIHByb2dyZXNzXG5cbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xuICBjc3M6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnN0eWxlW3BdID0gdjsgfSxcbiAgYXR0cmlidXRlOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7IH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHRbcF0gPSB2OyB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcbiAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xuICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG4gICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHByb3ApIHsgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiOyB9KTtcbiAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IFZhbHVlIGhlbHBlclxuXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcbiAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xuICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xuICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xuICBpZiAoYW5pbVR5cGUpIHtcbiAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xuICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhbmltVHlwZSxcbiAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXG4gICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxuICAgICAgdHdlZW5zOiB0d2VlbnMsXG4gICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcbiAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXG4gICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XG4gICAgfSk7XG4gIH0pKSwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFpcy51bmQoYSk7IH0pO1xufVxuXG4vLyBDcmVhdGUgSW5zdGFuY2VcblxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDsgfTtcbiAgdmFyIHRpbWluZ3MgPSB7fTtcbiAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uOyB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xuICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XG4gIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xuICByZXR1cm4gdGltaW5ncztcbn1cblxudmFyIGluc3RhbmNlSUQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcbiAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xuICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xuICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcbiAgdmFyIGlkID0gaW5zdGFuY2VJRDtcbiAgaW5zdGFuY2VJRCsrO1xuICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcbiAgICBpZDogaWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxuICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxuICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XG4gIH0pO1xufVxuXG4vLyBDb3JlXG5cbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxudmFyIGVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByYWY7XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RlcCh0KSB7XG4gICAgLy8gbWVtbyBvbiBhbGdvcml0aG0gaXNzdWU6XG4gICAgLy8gZGFuZ2Vyb3VzIGl0ZXJhdGlvbiBvdmVyIG11dGFibGUgYGFjdGl2ZUluc3RhbmNlc2BcbiAgICAvLyAodGhhdCBjb2xsZWN0aW9uIG1heSBiZSB1cGRhdGVkIGZyb20gd2l0aGluIGNhbGxiYWNrcyBvZiBgdGlja2AtZWQgYW5pbWF0aW9uIGluc3RhbmNlcylcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhY3RpdmVJbnN0YW5jZXNMZW5ndGgpIHtcbiAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByYWYgPSBpID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xuICAgICAgLy8gc3VzcGVuZCB0aWNrc1xuICAgICAgcmFmID0gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICB9IGVsc2UgeyAvLyBpcyBiYWNrIHRvIGFjdGl2ZSB0YWJcbiAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcbiAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlIC5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTsgfVxuICAgICAgKTtcbiAgICAgIGVuZ2luZSgpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5O1xufSkoKTtcblxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xufVxuXG4vLyBQdWJsaWMgSW5zdGFuY2VcblxuZnVuY3Rpb24gYW5pbWUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuXG4gIHZhciBzdGFydFRpbWUgPSAwLCBsYXN0VGltZSA9IDAsIG5vdyA9IDA7XG4gIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGggPSAwO1xuICB2YXIgcmVzb2x2ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZSA9IF9yZXNvbHZlOyB9KTtcbiAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpO1xuICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICBpbnN0YW5jZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gIT09ICdub3JtYWwnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XG4gICAgfVxuICAgIGluc3RhbmNlLnJldmVyc2VkID0gIWluc3RhbmNlLnJldmVyc2VkO1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xuICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRpbWUoKSB7XG4gICAgc3RhcnRUaW1lID0gMDtcbiAgICBsYXN0VGltZSA9IGFkanVzdFRpbWUoaW5zdGFuY2UuY3VycmVudFRpbWUpICogKDEgLyBhbmltZS5zcGVlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHsgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IGNoaWxkcmVuTGVuZ3RoOyBpJDEtLTspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XG4gICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XG4gICAgICB2YXIgYW5pbWF0YWJsZSA9IGFuaW0uYW5pbWF0YWJsZTtcbiAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcbiAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHR3ZWVuID0gdHdlZW5zW3R3ZWVuTGVuZ3RoXTtcbiAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXG4gICAgICBpZiAodHdlZW5MZW5ndGgpIHsgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaW5zVGltZSA8IHQuZW5kKTsgfSlbMF0gfHwgdHdlZW47IH1cbiAgICAgIHZhciBlbGFwc2VkID0gbWluTWF4KGluc1RpbWUgLSB0d2Vlbi5zdGFydCAtIHR3ZWVuLmRlbGF5LCAwLCB0d2Vlbi5kdXJhdGlvbikgLyB0d2Vlbi5kdXJhdGlvbjtcbiAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcbiAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcbiAgICAgIHZhciByb3VuZCA9IHR3ZWVuLnJvdW5kO1xuICAgICAgdmFyIG51bWJlcnMgPSBbXTtcbiAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcbiAgICAgIHZhciBwcm9ncmVzcyA9ICh2b2lkIDApO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAodm9pZCAwKTtcbiAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcbiAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcbiAgICAgICAgaWYgKCF0d2Vlbi5pc1BhdGgpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZyb21OdW1iZXIgKyAoZWFzZWQgKiAodG9OdW1iZXIgLSBmcm9tTnVtYmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xuICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcbiAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xuICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XG4gICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xuICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XG4gICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XG4gICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XG4gICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XG4gICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHsgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xuICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xuICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xuICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XG4gICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcbiAgICBpZiAoY2hpbGRyZW4pIHsgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7IH1cbiAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XG4gICAgfVxuICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcbiAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xuICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7IGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7IH1cbiAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkgeyBpbnN0YW5jZS5yZW1haW5pbmcrKzsgfVxuICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcbiAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xuXG4gIC8vIFNldCBWYWx1ZSBoZWxwZXJcblxuICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICBpbnN0YW5jZS50aWNrID0gZnVuY3Rpb24odCkge1xuICAgIG5vdyA9IHQ7XG4gICAgaWYgKCFzdGFydFRpbWUpIHsgc3RhcnRUaW1lID0gbm93OyB9XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XG4gIH07XG5cbiAgaW5zdGFuY2Uuc2VlayA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKGFkanVzdFRpbWUodGltZSkpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkgeyBpbnN0YW5jZS5yZXNldCgpOyB9XG4gICAgaW5zdGFuY2UucGF1c2VkID0gZmFsc2U7XG4gICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIHJlc2V0VGltZSgpO1xuICAgIGVuZ2luZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xuICAgIGluc3RhbmNlLnBsYXkoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZW1vdmUgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc2V0KCk7XG5cbiAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7IGluc3RhbmNlLnBsYXkoKTsgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcblxufVxuXG4vLyBSZW1vdmUgdGFyZ2V0cyBmcm9tIGFuaW1hdGlvblxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XG4gIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xuICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcbiAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcbiAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XG4gIGZvciAodmFyIGMgPSBjaGlsZHJlbi5sZW5ndGg7IGMtLTspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcbiAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBjaGlsZEFuaW1hdGlvbnMpO1xuICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7IGNoaWxkcmVuLnNwbGljZShjLCAxKTsgfVxuICB9XG4gIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkgeyBpbnN0YW5jZS5wYXVzZSgpOyB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgZm9yICh2YXIgaSA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7IGktLTspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfVxufVxuXG4vLyBTdGFnZ2VyIGhlbHBlcnNcblxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XG4gIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcbiAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XG4gIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XG4gIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcbiAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XG4gIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XG4gIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcbiAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIG1heFZhbHVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgaSwgdCkge1xuICAgIGlmIChmcm9tRmlyc3QpIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgIGlmIChmcm9tQ2VudGVyKSB7IGZyb21JbmRleCA9ICh0IC0gMSkgLyAyOyB9XG4gICAgaWYgKGZyb21MYXN0KSB7IGZyb21JbmRleCA9IHQgLSAxOyB9XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4JWdyaWRbMF0gOiAoZ3JpZFswXS0xKS8yO1xuICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXgvZ3JpZFswXSkgOiAoZ3JpZFsxXS0xKS8yO1xuICAgICAgICAgIHZhciB0b1ggPSBpbmRleCVncmlkWzBdO1xuICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4L2dyaWRbMF0pO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVg7IH1cbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7IHZhbHVlID0gLWRpc3RhbmNlWTsgfVxuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzaW5nKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlOyB9KTsgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTsgfSk7IH1cbiAgICB9XG4gICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XG4gIH1cbn1cblxuLy8gVGltZWxpbmVcblxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xuICB0bC5kdXJhdGlvbiA9IDA7XG4gIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xuICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xuICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xuICAgIGlmICh0bEluZGV4ID4gLTEpIHsgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTsgfVxuICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykgeyBpbnMucGFzc1Rocm91Z2ggPSB0cnVlOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7IH1cbiAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xuICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XG4gICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcbiAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xuICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XG4gICAgcGFzc1Rocm91Z2godGwpO1xuICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcbiAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcbiAgICBwYXNzVGhyb3VnaChpbnMpO1xuICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcbiAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XG4gICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xuICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcbiAgICB0bC5zZWVrKDApO1xuICAgIHRsLnJlc2V0KCk7XG4gICAgaWYgKHRsLmF1dG9wbGF5KSB7IHRsLnBsYXkoKTsgfVxuICAgIHJldHVybiB0bDtcbiAgfTtcbiAgcmV0dXJuIHRsO1xufVxuXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcbmFuaW1lLnNwZWVkID0gMTtcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XG5hbmltZS5zZXQgPSBzZXRUYXJnZXRzVmFsdWU7XG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcbmFuaW1lLnNldERhc2hvZmZzZXQgPSBzZXREYXNob2Zmc2V0O1xuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xuYW5pbWUuZWFzaW5nID0gcGFyc2VFYXNpbmdzO1xuYW5pbWUucGVubmVyID0gcGVubmVyO1xuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyB9O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFNlZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVsYm91cm4vNzljNDczYWFiNDA0YWJjZDM2ZGM3Y2ZhYTdhYzAyYWNcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2JGcm9tSGV4KGhleCkge1xuICAgIGlmIChoZXhbMF0gPT09IFwiI1wiKSB7XG4gICAgICAgIGhleCA9IGhleC5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4WzBdICsgaGV4WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KGhleFsyXSArIGhleFszXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChoZXhbNF0gKyBoZXhbNV0sIDE2KSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJsZW5kKGJhc2VWYWx1ZSwgb3ZlcmxheVZhbHVlLCBhbHBoYSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG92ZXJsYXlWYWx1ZSAqIGFscGhhICsgYmFzZVZhbHVlICogKDEgLSBhbHBoYSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVBbHBoYUJsZW5kKGJhc2VIZXgsIG92ZXJsYXlIZXgsIGFscGhhKSB7XG4gICAgY29uc3QgYmFzZSA9IGdldFJnYkZyb21IZXgoYmFzZUhleCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGdldFJnYkZyb21IZXgob3ZlcmxheUhleCk7XG4gICAgY29uc3QgYmxlbmRlZCA9IHtcbiAgICAgICAgcjogYmxlbmQoYmFzZS5yLCBvdmVybGF5LnIsIGFscGhhKSxcbiAgICAgICAgZzogYmxlbmQoYmFzZS5nLCBvdmVybGF5LmcsIGFscGhhKSxcbiAgICAgICAgYjogYmxlbmQoYmFzZS5iLCBvdmVybGF5LmIsIGFscGhhKSxcbiAgICB9O1xuICAgIHJldHVybiAoXCIjXCIgK1xuICAgICAgICBibGVuZGVkLnIudG9TdHJpbmcoMTYpICtcbiAgICAgICAgYmxlbmRlZC5nLnRvU3RyaW5nKDE2KSArXG4gICAgICAgIGJsZW5kZWQuYi50b1N0cmluZygxNikpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ3VycmVuY3kodmFsdWUpIHtcbiAgICByZXR1cm4gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KS5mb3JtYXQodmFsdWUpO1xufVxuIiwiLy8gV3JpdHRlbiBieSBHYXJ5IEFudGllclxuLy8gQ3JlYXRlZDogMjAyMFxuLy8gTW9kaWZpZWQ6IEFwciAyMCwgMjAyM1xuZXhwb3J0IGNvbnN0IEZ1bGxNb250aCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5jb25zdCBBYmJyTW9udGggPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xuY29uc3QgRnVsbERheXNPZldlZWsgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbmNvbnN0IEFiYnJEYXlzT2ZXZWVrID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuZXhwb3J0IGNsYXNzIFRpbWVDb25zdGFudHNCYXNlIHtcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BU2Vjb25kKCkge1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9XG4gICAgZ2V0IFNlY29uZHNJbkFNaW51dGUoKSB7XG4gICAgICAgIHJldHVybiA2MDtcbiAgICB9XG4gICAgZ2V0IE1pbGxpc2Vjb25kc0luQU1pbnV0ZSgpIHtcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFTZWNvbmQgKiB0aGlzLlNlY29uZHNJbkFNaW51dGU7XG4gICAgICAgIHJldHVybiBtaWxsaTtcbiAgICB9XG4gICAgZ2V0IE1pbnV0ZXNJbkFuSG91cigpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BbkhvdXIoKSB7XG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BTWludXRlICogdGhpcy5NaW51dGVzSW5BbkhvdXI7XG4gICAgICAgIHJldHVybiBtaWxsaTtcbiAgICB9XG4gICAgZ2V0IEhvdXJzSW5BRGF5KCkge1xuICAgICAgICByZXR1cm4gMjQ7XG4gICAgfVxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFEYXkoKSB7XG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BbkhvdXIgKiB0aGlzLkhvdXJzSW5BRGF5O1xuICAgICAgICByZXR1cm4gbWlsbGk7XG4gICAgfVxuICAgIGdldCBEYXlzSW5BWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIDM2NTtcbiAgICB9XG59XG5jb25zdCBUaW1lQ29uc3RhbnRzID0gbmV3IFRpbWVDb25zdGFudHNCYXNlKCk7XG5leHBvcnQgY2xhc3MgVGltZVNwYW4ge1xuICAgIGNvbnN0cnVjdG9yKG1pbGxpKSB7XG4gICAgICAgIHRoaXMubWlsbGkgPSBtaWxsaTtcbiAgICAgICAgdGhpcy50b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpIC8gVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFTZWNvbmQpO1xuICAgICAgICB0aGlzLnRvdGFsTWludXRlcyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQU1pbnV0ZSk7XG4gICAgICAgIHRoaXMudG90YWxIb3VycyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyKTtcbiAgICAgICAgdGhpcy50b3RhbERheXMgPSBNYXRoLmZsb29yKG1pbGxpIC8gVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFEYXkpO1xuICAgICAgICB0aGlzLnNlY29uZHMgPSB0aGlzLnRvdGFsU2Vjb25kcyAlIFRpbWVDb25zdGFudHMuU2Vjb25kc0luQU1pbnV0ZTtcbiAgICAgICAgdGhpcy5taW51dGVzID0gdGhpcy50b3RhbE1pbnV0ZXMgJSBUaW1lQ29uc3RhbnRzLk1pbnV0ZXNJbkFuSG91cjtcbiAgICAgICAgdGhpcy5ob3VycyA9IHRoaXMudG90YWxIb3VycyAlIFRpbWVDb25zdGFudHMuSG91cnNJbkFEYXk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMudG90YWxEYXlzICUgVGltZUNvbnN0YW50cy5EYXlzSW5BWWVhcjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmRheXMgPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLmRheXN9ZCBgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhvdXJzID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5ob3Vyc31oIGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWludXRlcyA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMubWludXRlc31tIGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMuc2Vjb25kc31zYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkdXJhdGlvbiA9PSBcIlwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlVGltZSB7XG4gICAgY29uc3RydWN0b3IoZGF0ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB9XG4gICAgc3RhdGljIHBhcnNlKGRhdGVUaW1lLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIGlmIChkYXRlVGltZSkge1xuICAgICAgICAgICAgbGV0IGlycmVndWxhckZvcm1hdFJlZ2V4ID0gLyhcXC9EYXRlXFwoKSguKikoXFwpXFwvKS9pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRlVGltZSA9PT0gXCJzdHJpbmdcIiAmJiBpcnJlZ3VsYXJGb3JtYXRSZWdleC50ZXN0KGRhdGVUaW1lKSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGlycmVndWxhckZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lID0gcGFyc2VJbnQobWF0Y2hbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1pbGxpID0gdHlwZW9mIGRhdGVUaW1lID09PSBcIm51bWJlclwiID8gZGF0ZVRpbWUgOiBEYXRlLnBhcnNlKGRhdGVUaW1lKTtcbiAgICAgICAgICAgIGlmIChpc05hTihtaWxsaSkpIHtcbiAgICAgICAgICAgICAgICBtaWxsaSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVVEMgb2Zmc2V0Li4uXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKiBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyO1xuICAgICAgICAgICAgbWlsbGkgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShtaWxsaSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKGRhdGUsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgbm93KCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ldyBEYXRlKCksIDgpO1xuICAgIH1cbiAgICBzdGF0aWMgZW5kT2ZNb250aChtb250aCwgeWVhcikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG4gICAgZ2V0IHllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICAgIGdldCBtb250aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICB9XG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICB9XG4gICAgZ2V0IGRheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAgfVxuICAgIGdldCBob3VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRIb3VycygpO1xuICAgIH1cbiAgICBnZXQgbWludXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TWludXRlcygpO1xuICAgIH1cbiAgICBnZXQgc2Vjb25kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciB0aW1lRGlmZiA9IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZURpZmYpO1xuICAgIH1cbiAgICBkaWZmZXJlbmNlKHNlY29uZERhdGUpIHtcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnRpbWUgLSBzZWNvbmREYXRlLnRpbWU7XG4gICAgICAgIHJldHVybiBuZXcgVGltZVNwYW4oZGlmZik7XG4gICAgfVxuICAgIGFkZERheXMoZGF5cykge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgICBuZXdEYXRlLnNldERhdGUodGhpcy5kYXRlICsgZGF5cyk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUobmV3RGF0ZSwgdGhpcy5vZmZzZXQpO1xuICAgIH1cbiAgICBhZGRZZWFycyh5ZWFycykge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgICBuZXdEYXRlLnNldEZ1bGxZZWFyKHRoaXMueWVhciArIHllYXJzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShuZXdEYXRlLCB0aGlzLm9mZnNldCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKGZvcm1hdCA9IFwieXl5eS9NTS9kZCBISDptbTpzc1wiKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgeWVhciA9IHRoaXMueWVhci50b1N0cmluZygpO1xuICAgICAgICBsZXQgc3ViWWVhciA9IHllYXIucGFkU3RhcnQoMiwgJzAnKS5zbGljZSgtMik7XG4gICAgICAgIGxldCBtb250aCA9IHRoaXMubW9udGg7XG4gICAgICAgIGxldCBkYXkgPSB0aGlzLmRheTtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLmRhdGU7XG4gICAgICAgIGxldCBob3VyID0gdGhpcy5ob3VyO1xuICAgICAgICBsZXQgXzEySG91ciA9IGhvdXIgPCAxMyA/IGhvdXIgOiBob3VyIC0gMTI7XG4gICAgICAgIGxldCBpc0FNID0gaG91ciA8IDEyO1xuICAgICAgICBsZXQgbWludXRlcyA9IHRoaXMubWludXRlcztcbiAgICAgICAgbGV0IHNlY29uZHMgPSB0aGlzLnNlY29uZHM7XG4gICAgICAgIC8vIERheS4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGQvZywgZGF0ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZC9nLCBkYXRlKTtcbiAgICAgICAgLy8gMjQtSG91ci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvSEgvZywgaG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvSC9nLCBob3VyKTtcbiAgICAgICAgLy8gMTItSG91ci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaGgvZywgXzEySG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaC9nLCBfMTJIb3VyKTtcbiAgICAgICAgLy8gTWludXRlcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvbW0vZywgbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvbS9nLCBtaW51dGVzKTtcbiAgICAgICAgLy8gU2Vjb25kcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvc3MvZywgc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvcy9nLCBzZWNvbmRzKTtcbiAgICAgICAgLy8gWWVhci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5eXkvZywgeWVhci5wYWRTdGFydCg1LCAnMCcpKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eXkvZywgeWVhci5wYWRTdGFydCg0LCAnMCcpKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eS9nLCB5ZWFyLnBhZFN0YXJ0KDMsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXkvZywgc3ViWWVhcik7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95L2csIHN1YlllYXIpO1xuICAgICAgICAvLyBNb250aCBpbiB3b3Jkcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTU1NTS9nLCBcIiMjIyNcIik7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTU0vZywgXCIjIyNcIik7XG4gICAgICAgIC8vIE1vbnRoIGluIG51bWJlci4uLlxuICAgICAgICBsZXQgX21vbnRoID0gbW9udGggKyAxO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTU0vZywgX21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NL2csIF9tb250aCk7XG4gICAgICAgIC8vIEFNL1BNLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC90dC9nLCBpc0FNID8gXCJBTVwiIDogXCJQTVwiKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3QvZywgaXNBTSA/IFwiQVwiIDogXCJQXCIpO1xuICAgICAgICAvLyBEYXkgb2Ygd2Vlay4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGRkZC9nLCBGdWxsRGF5c09mV2Vla1tkYXldKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2RkZC9nLCBBYmJyRGF5c09mV2Vla1tkYXldKTtcbiAgICAgICAgLy8gTW9udGggaW4gd29yZHMuLi5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyMjIyMvZywgRnVsbE1vbnRoW21vbnRoXSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8jIyMvZywgQWJick1vbnRoW21vbnRoXSk7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hbHBoYS1ibGVuZCc7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmN5JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS10aW1lJztcbmV4cG9ydCAqIGZyb20gJy4vbmF2aWdhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3Jlc3BvbnNlLXBheWxvYWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi1tYW5hZ2VyJztcbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25fdmlldycpO1xuICAgIG5hdmlnYXRpb25WaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZWQnLCAoZSkgPT4ge1xuICAgICAgICB2YXIgYXJncyA9IGUuZGV0YWlsLmFyZ3M7XG4gICAgICAgIGlmIChhcmdzLmlzU2V0dGluZ3NTZWxlY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcmdzLnNlbGVjdGVkSXRlbS5ocmVmO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5pbXBvcnQgeyBEYXRlVGltZSwgdG9DdXJyZW5jeSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBUcmFuc2FjdGlvblR5cGUgfSBmcm9tICdAL2VudW1zJztcbmltcG9ydCB7IENvbnRleHRNZW51T3B0aW9uLCBnbG9iYWxDb250ZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5DcmVhdGU7XG4gICAgfVxuICAgIGxvYWRBY2NvdW50KGFjY291bnQpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMubG9hZENhcmQoKTtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXMoKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTWVudSgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yKCk7XG4gICAgICAgIHRoaXMuaXNSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJNZW51KCkge1xuICAgICAgICAvLyBNZW51XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBnbG9iYWxDb250ZXh0LmFkZE1lbnUoXCJ0cmFuc2FjdGlvbnNfcm93XCIsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtcIlVwZGF0ZVwiLCBcIlBvc3RcIiwgXCJEZWxldGVcIiwgXCJDYW5jZWxcIl07XG4gICAgICAgIGxldCBtZW51T3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChtbywgbykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IENvbnRleHRNZW51T3B0aW9uKG8pO1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUoKHRyYW5zKSA9PiB0cmFucy5Qb3N0ZWQgPT0gKG8gPT0gXCJDYW5jZWxcIikpO1xuICAgICAgICAgICAgbW8ucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG1vO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzBdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy51cGRhdGVCdG5DbGlja2VkKHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzFdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5wb3N0KHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzJdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5kZWxldGUodHJhbnMpKTtcbiAgICAgICAgbWVudU9wdGlvbnNbM10ub25DbGljayh0cmFucyA9PiB0aGlzLmNhbmNlbCh0cmFucykpO1xuICAgICAgICB0aGlzLmNvbnRleHRNZW51LmFkZE9wdGlvbnMoLi4ubWVudU9wdGlvbnMpO1xuICAgIH1cbiAgICByZWdpc3RlckFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xuICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFzZXQuYWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGVJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9VHJhbnNhY3Rpb25UeXBlXVwiKTtcbiAgICAgICAgICAgICAgICB0eXBlSW5wdXQudmFsdWUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFtuYW1lPURhdGVdXCIpO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IERhdGVUaW1lLm5vdygpLnRvU3RyaW5nKFwieXl5eS1NTS1kZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiM5OTk5OTlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnR5cGUgIT0gXCJudW1iZXJcIiA/IFwiXCIgOiBcIjAuMDBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZ2lzdGVyRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0I2Ftb3VudFwiKTtcbiAgICAgICAgY29uc3QgYW1vdW50SW5wdXRIaWRkZW4gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFtuYW1lPUFtb3VudF1cIik7XG4gICAgICAgIGFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvblR5cGUgPT0gVHJhbnNhY3Rpb25UeXBlLldpdGhkcmF3KVxuICAgICAgICAgICAgICAgIGFtb3VudCAqPSAtMTtcbiAgICAgICAgICAgIGFtb3VudElucHV0SGlkZGVuLnZhbHVlID0gYW1vdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgY29uc3QgZGlzc21pc3NFZGl0b3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc21pc3NfZWRpdG9yX2RpYWxvZ19idG5cIik7XG4gICAgICAgIGRpc3NtaXNzRWRpdG9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiI2RhZGFkYVwiKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZV9idG4nKTtcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgbG9hZENhcmQoKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmFjY291bnQ7XG4gICAgICAgIHRoaXMuY2FyZC50aXRsZSA9IGFjY291bnQuVGl0bGU7XG4gICAgICAgIHRoaXMuY2FyZC5udW1iZXIgPSBhY2NvdW50LkFjY291bnROdW1iZXI7XG4gICAgICAgIHRoaXMuY2FyZC5jYXRlZ29yeSA9IGFjY291bnQuQ2F0ZWdvcnk7XG4gICAgfVxuICAgIGxvYWRCYWxhbmNlcygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgYWNjb3VudElkOiB0aGlzLmFjY291bnQuSWQgfTtcbiAgICAgICAgY29uc3QgYmFsYW5jZXMgPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvckFsbChcImNhcmQtYmFsYW5jZVwiKTtcbiAgICAgICAgYXhpb3MuZ2V0KFwiYWNjb3VudC9iYWxhbmNlLnBocFwiLCB7IHBhcmFtczogZGF0YSB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYE9vcHMhICR7Y29udGVudH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWxhbmNlc1swXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuQmFsYW5jZSk7XG4gICAgICAgICAgICBiYWxhbmNlc1sxXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuUHJvamVjdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2FjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IEFjY291bnRJZDogdGhpcy5hY2NvdW50LklkIH07XG4gICAgICAgIGF4aW9zLmdldChcInRyYW5zYWN0aW9uL3JlYWQucGhwXCIsIHsgcGFyYW1zOiBkYXRhIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjZW50ZXJlZFwiPk9vcHMhICR7Y29udGVudH08L3A+YDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9ucyA9IHRoaXMuZ3JvdXBUcmFuc2FjdGlvbnMoY29udGVudCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLm5ld0dyb3VwKGtleSwgdHJhbnNhY3Rpb25zW2tleV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ3JvdXBUcmFuc2FjdGlvbnModHJhbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgZ3JvdXBzID0ge307XG4gICAgICAgIGZvciAobGV0IHQgb2YgdHJhbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHQuRGF0ZSArIHQuUG9zdGVkO1xuICAgICAgICAgICAgKChfYSA9IGdyb3Vwc1trZXldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ3JvdXBzW2tleV0gPSBbXSkpLnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG4gICAgbmV3R3JvdXAoZGF0ZSwgdHJhbnMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1ncm91cC1oZWFkZXInKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1ncm91cC1ib2R5Jyk7XG4gICAgICAgIC8vIFRpdGxlL2hlYWRlci4uLlxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IERhdGVUaW1lLnBhcnNlKGRhdGUuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGRhdGVUaW1lLnRvU3RyaW5nKCdNTU0uIGRkLCB5eXl5Jyk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRyYW5zWzBdLlBvc3RlZCA/ICdhY3R1YWwnIDogJ3Byb2plY3Rpb24nO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICBncm91cC5hcHBlbmQoaGVhZGVyKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kKGJvZHkpO1xuICAgICAgICBmb3IgKGxldCB0IG9mIHRyYW5zKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5uZXdSb3codCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gICAgbmV3Um93KHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yP1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0cmFuc2FjdGlvbi5Qb3N0ZWQgPyAnYWN0dWFsJyA6ICdwcm9qZWN0aW9uJztcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1yb3cnLCBzdGF0dXMpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NQYXIuaW5uZXJUZXh0ID0gdHJhbnNhY3Rpb24uRGVzY3JpcHRpb247XG4gICAgICAgIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY1Bhcik7XG4gICAgICAgIHN1bW1hcnkuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tc3VtbWFyeScpO1xuICAgICAgICBtYWluLmFwcGVuZChkZXNjKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoc3VtbWFyeSk7XG4gICAgICAgIHJvdy5hcHBlbmQobWFpbik7XG4gICAgICAgIGNvbnN0IGlzRGViaXQgPSB0cmFuc2FjdGlvbi5Ub3RhbCA+PSAwO1xuICAgICAgICBjb25zdCB0cmFuc0Ftb3VudCA9IE1hdGguYWJzKHRyYW5zYWN0aW9uLlRvdGFsKTtcbiAgICAgICAgY29uc3QgYW1vdW50UGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCByZWZQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFtb3VudFBhci5pbm5lclRleHQgPSBgJHshaXNEZWJpdCA/IFwiLVwiIDogXCJcIn0gUEhQICR7dG9DdXJyZW5jeSh0cmFuc0Ftb3VudC50b1N0cmluZygpKX1gO1xuICAgICAgICByZWZQYXIuaW5uZXJUZXh0ID0gJ1JFRjogTi9BJztcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQoYW1vdW50UGFyKTtcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQocmVmUGFyKTtcbiAgICAgICAgcm93LmFkZENvbnRleHQodGhpcy5jb250ZXh0TWVudSwgdHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucy1jb250YWluZXInKTtcbiAgICAgICAgcm93LmFwcGVuZChhY3Rpb25zKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJwcm9qZWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImVkaXRcIiwgXCJFZGl0XCIpO1xuICAgICAgICAgICAgY29uc3QgcG9zdEFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwicG9zdFwiLCBcIkNvbXBsZXRlZFNvbGlkXCIpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJkZWxldGVcIiwgXCJEZWxldGVcIik7XG4gICAgICAgICAgICBlZGl0QWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuQ2xpY2tlZCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvc3RBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0KHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQoZWRpdEFjdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZChwb3N0QWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGRlbGV0ZUFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImRlbGV0ZVwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGNhbmNlbEFjdGlvbik7XG4gICAgICAgICAgICBjYW5jZWxBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWwodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG91Y2ggZXZlbnRzLi4uXG4gICAgICAgIGxldCBpbml0aWFsVG91Y2g7XG4gICAgICAgIGxldCBpbml0aWFsTGVmdDtcbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlID0+IHtcbiAgICAgICAgICAgIGluaXRpYWxUb3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpbml0aWFsTGVmdCA9IHBhcnNlSW50KG1haW4uc3R5bGUubGVmdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IEFycmF5LmZyb20oZS5jaGFuZ2VkVG91Y2hlcylcbiAgICAgICAgICAgICAgICAuZmluZCh0Y2ggPT4gdGNoLmlkZW50aWZpZXIgPT09IGluaXRpYWxUb3VjaC5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmICh0b3VjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtYXRjaGVzIGZvdW5kIG9mIHRoZSBpbml0aWFsIHRvdWNoLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0b3VjaC5wYWdlWCAtIGluaXRpYWxUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IHlEZWx0YSA9IHRvdWNoLnBhZ2VZIC0gaW5pdGlhbFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgubWluKDAsIGluaXRpYWxMZWZ0ICsgeERlbHRhKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGVsdGEpID4gTWF0aC5hYnMoeURlbHRhKSlcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtYWluLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgfSk7XG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBBcnJheS5mcm9tKGUuY2hhbmdlZFRvdWNoZXMpXG4gICAgICAgICAgICAgICAgLmZpbmQodGNoID0+IHRjaC5pZGVudGlmaWVyID09PSBpbml0aWFsVG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAodG91Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWF0Y2hlcyBmb3VuZCBvZiB0aGUgaW5pdGlhbCB0b3VjaC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHBhcnNlSW50KG1haW4uc3R5bGUubGVmdCk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25XaWR0aCA9IGFjdGlvbnMuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBhY3Rpb25XaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBzbmFwUG9pbnQgPSBhY3Rpb25XaWR0aCAqICgoTWF0aC5hYnMobGVmdCkgPiB0aHJlc2hvbGQpID8gMSA6IDApO1xuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW4sXG4gICAgICAgICAgICAgICAgbGVmdDogLXNuYXBQb2ludCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2VBY3Rpb25zKCkge1xuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW5bMF0sXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuICAgIG5ld0FjdGlvbihuYW1lLCBzeW1ib2wpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmbHVlbnQtc3ltYm9sLWljb24nKTtcbiAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicsIGBhY3Rpb24tJHtuYW1lfWApO1xuICAgICAgICBhY3Rpb24udGFiSW5kZXggPSAtMTtcbiAgICAgICAgLy8gSWNvblxuICAgICAgICBhY3Rpb24uYXBwZW5kKGljb24pO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3ltYm9sJywgc3ltYm9sKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsICcyMCcpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZm9yZWdyb3VuZCcsICcjZmZmJyk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuICAgIHVwZGF0ZUJ0bkNsaWNrZWQoZGF0YSkge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5VcGRhdGU7XG4gICAgICAgIGxldCBpbnB1dHMgPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybSBpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJBbW91bnRcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG5hbWUgIT0gXCJcIiAvLyBFbXB0eVxuICAgICAgICAgICAgICAgID8gZGF0YVtuYW1lXVxuICAgICAgICAgICAgICAgIDogTWF0aC5hYnMoZGF0YS5BbW91bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblR5cGUgPSBkYXRhLlRyYW5zYWN0aW9uVHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiM5OTk5OTlcIik7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gICAgc2F2ZSgpIHtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uID0gT3BlcmF0aW9uW3RoaXMub3BlcmF0aW9uXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGB0cmFuc2FjdGlvbi8ke29wZXJhdGlvbn0ucGhwYDtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGRhdGEuYXBwZW5kKFwiQWNjb3VudElkXCIsIHRoaXMuYWNjb3VudC5JZC50b1N0cmluZygpKTtcbiAgICAgICAgbGV0IHRyYW5zID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KGVuZHBvaW50LCB0cmFucylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBPcGVyYXRpb24uQ3JlYXRlO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiNkYWRhZGFcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL2RlbGV0ZS5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBwb3N0KHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL3Bvc3QucGhwXCIsIHRyYW5zKTtcbiAgICB9XG4gICAgY2FuY2VsKHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL2NhbmNlbC5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBoYW5kbGVQb3N0KGVuZHBvaW50LCB0cmFucykge1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoZW5kcG9pbnQsIHRyYW5zKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlVGhlbWUodGhlbWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl1gKVxuICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xuICAgIH1cbn1cbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgQWNjb3VudENhcmQgPSBjbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXCJkYXRhLXRpdGxlXCIsIFwiZGF0YS1udW1iZXJcIiwgXCJkYXRhLWNhdGVnb3J5XCJdO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgIH1cbiAgICBnZXQgbnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcbiAgICB9XG4gICAgc2V0IG51bWJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIsIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IFwi4oCi4oCi4oCi4oCiXCIpO1xuICAgICAgICB0aGlzLnNldE51bWJlcigpO1xuICAgIH1cbiAgICBnZXQgY2F0ZWdvcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIik7XG4gICAgfVxuICAgIHNldCBjYXRlZ29yeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8qIERPTSAqL1xuICAgIGdldCB0aXRsZVNwYW4oKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fdGl0bGVTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fdGl0bGVTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVTcGFuO1xuICAgIH1cbiAgICBnZXQgbnVtYmVyU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9udW1iZXJTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fbnVtYmVyU3BhbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm51bWJlclwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJTcGFuO1xuICAgIH1cbiAgICBnZXQgY2F0ZWdvcnlTcGFuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2NhdGVnb3J5U3BhbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2NhdGVnb3J5U3BhbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5U3BhbjtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWxhbmNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJudW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCi4oCi4oCi4oCiPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAouKAouKAouKAojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKLigKLigKLigKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj7igKLigKLigKLigKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhdGVnb3J5XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+XHJcbiAgICAgICAgYDtcbiAgICB9XG4gICAgLyogRnVuY3Rpb25zICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXIoKTtcbiAgICAgICAgdGhpcy5zZXRDYXRlZ29yeSgpO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtbnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLWNhdGVnb3J5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRpdGxlKCkge1xuICAgICAgICB0aGlzLnRpdGxlU3Bhbi5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBzZXROdW1iZXIoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gKF9hID0gdGhpcy5udW1iZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zbGljZSgtNCk7XG4gICAgICAgIHRoaXMubnVtYmVyU3Bhbi5pbm5lckhUTUwgPSBudW1iZXI7XG4gICAgfVxuICAgIHNldENhdGVnb3J5KCkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5U3Bhbi5pbm5lckhUTUwgPSB0aGlzLmNhdGVnb3J5O1xuICAgIH1cbn07XG5BY2NvdW50Q2FyZC5zdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMyNTJBMzIgNTAlLCAjMmQzNDNlIDUwJSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyAxNiUpLCAwIDNweCA2cHggcmdiKDAgMCAwIC8gMjMlKTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA6aG9zdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzREOTBGRTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA2cHgpO1xyXG4gICAgICAgICAgICBsZWZ0OiAtM3B4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDZweCk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDpob3N0OmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYm9keSA+IC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFsYW5jZXMge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubnVtYmVycyxcclxuICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZmNjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5udW1iZXJzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubnVtYmVycyBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6OnNsb3R0ZWQoaW1nW3Nsb3Q9aWNvbl0pIHtcclxuICAgICAgICAgICAgYm90dG9tOiAyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljUHJlY2lzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIGA7XG5BY2NvdW50Q2FyZCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnYWNjb3VudC1jYXJkJylcbl0sIEFjY291bnRDYXJkKTtcbmV4cG9ydCB7IEFjY291bnRDYXJkIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IEFjdGlvbkJ1dHRvbiA9IGNsYXNzIEFjdGlvbkJ1dHRvbiBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2RhdGEtaWNvbiddO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgfVxuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgIH1cbiAgICAvKiBET00gKi9cbiAgICBnZXQgc3ltYm9sSWNvbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9zeW1ib2xJY29uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fc3ltYm9sSWNvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3ltYm9sLWljb24nKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xJY29uO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24+PC9mbHVlbnQtc3ltYm9sLWljb24+IFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIGA7XG4gICAgfVxuICAgIC8qIEZ1bmN0aW9ucyAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNldEljb24oKTtcbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgIT0gJ2RhdGEtaWNvbicpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgIH1cbiAgICBzZXRJY29uKCkge1xuICAgICAgICB0aGlzLnN5bWJvbEljb24uc3ltYm9sID0gdGhpcy5pY29uO1xuICAgIH1cbn07XG5BY3Rpb25CdXR0b24uc3R5bGVzID0gYFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDYsIDE5NiwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWZpbGwtcmVzdCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0KDpob3Zlcikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgOmhvc3QoOmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjMpO1xyXG4gICAgICAgIH1cclxuICAgIGA7XG5BY3Rpb25CdXR0b24gPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ2FjdGlvbi1idXR0b24nKVxuXSwgQWN0aW9uQnV0dG9uKTtcbmV4cG9ydCB7IEFjdGlvbkJ1dHRvbiB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBDYXJkQmFsYW5jZSA9IGNsYXNzIENhcmRCYWxhbmNlIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcImRhdGEtdGl0bGVcIiwgXCJkYXRhLWN1cnJlbmN5XCJdO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgIH1cbiAgICBnZXQgY3VycmVuY3koKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJwaHBcIjtcbiAgICB9XG4gICAgc2V0IGN1cnJlbmN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICB9XG4gICAgLyogRE9NICovXG4gICAgZ2V0IHRpdGxlU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl90aXRsZVNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl90aXRsZVNwYW4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVNwYW47XG4gICAgfVxuICAgIGdldCBmaWd1cmVTcGFuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2ZpZ3VyZVNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9maWd1cmVTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZ3VyZVNwYW47XG4gICAgfVxuICAgIGdldCBzbG90RWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9zbG90KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fc2xvdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5Qcm9qZWN0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZ3VyZSBjdXJyZW5jeS1waHBcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIGA7XG4gICAgfVxuICAgIC8qIEZ1bmN0aW9ucyAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICAgICAgdGhpcy5zbG90RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMuc2xvdEVsZW1lbnQuYXNzaWduZWROb2RlcygpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IG5vZGVzWzBdLnRleHRDb250ZW50LnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IHBhcnNlRmxvYXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiAoaXNOYU4oYmFsYW5jZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPj0gMTAwMDAwMClcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZVNwYW4uY2xhc3NMaXN0LmFkZChcInNtYWxsXCIpO1xuICAgICAgICAgICAgZWxzZSBpZiAoYmFsYW5jZSA+PSAxMDAwMDApXG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVTcGFuLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtY3VycmVuY3lcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbmN5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGl0bGUoKSB7XG4gICAgICAgIHRoaXMudGl0bGVTcGFuLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldEN1cnJlbmN5KCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGBmaWd1cmUgY3VycmVuY3ktJHt0aGlzLmN1cnJlbmN5fWApO1xuICAgIH1cbn07XG5DYXJkQmFsYW5jZS5zdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZjYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZpZ3VyZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWd1cmUubWVkaXVtIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpZ3VyZS5zbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWd1cmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjgwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpZ3VyZS5tZWRpdW06OmFmdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpZ3VyZS5zbWFsbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1cnJlbmN5LXBocDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlBIUFwiO1xyXG4gICAgICAgIH1cclxuICAgIGA7XG5DYXJkQmFsYW5jZSA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnY2FyZC1iYWxhbmNlJylcbl0sIENhcmRCYWxhbmNlKTtcbmV4cG9ydCB7IENhcmRCYWxhbmNlIH07XG4iLCIvLyBXcml0dGVuIGJ5IEdhcnkgQW50aWVyIDIwMjBcbi8vIEN1cnJlbnQgdmVyc2lvbjogMS4yLjAuMVxuY29uc3QgQ29udGV4dE1hcmdpbiA9IDM7XG5jb25zdCBDb250ZXh0VG9wT2Zmc2V0ID0gNztcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU9wdGlvbiB7XG4gICAgY29uc3RydWN0b3IobGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmVuYWJsZUNoYWxsZW5nZSA9ICgpID0+IHRydWU7XG4gICAgICAgIHRoaXMudmlzaWJsZUNoYWxsZW5nZSA9ICgpID0+IHRydWU7XG4gICAgfVxuICAgIG9uQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIHZpc2libGUoY2hhbGxlbmdlKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZUNoYWxsZW5nZSA9IGNoYWxsZW5nZTtcbiAgICB9XG4gICAgZW5hYmxlKGNoYWxsZW5nZSkge1xuICAgICAgICB0aGlzLmVuYWJsZUNoYWxsZW5nZSA9IGNoYWxsZW5nZTtcbiAgICB9XG4gICAgZHJhdyhkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlQ2hhbGxlbmdlKGRhdGEpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMubGFiZWw7XG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JlLWNvbnRleHQtYWN0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICF0aGlzLmVuYWJsZUNoYWxsZW5nZShkYXRhKTtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHJvb3QpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfVxuICAgIGFkZE9wdGlvbihvcHRpb24pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICB9XG4gICAgYWRkT3B0aW9ucyguLi5vcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKSk7XG4gICAgfVxuICAgIGRyYXcoZGF0YUluZGV4KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbZGF0YUluZGV4XTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbi5kcmF3KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBhZGREYXRhKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5wdXNoKGRhdGEpIC0gMTtcbiAgICB9XG4gICAgY2xlYXJEYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVHbG9iYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5tZW51cyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZVRyaWdnZXI7XG4gICAgICAgIHRoaXMudHJpZ2dlclRvcDtcbiAgICAgICAgdGhpcy50cmlnZ2VyTGVmdDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JlLWNvbnRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsICdhZGRDb250ZXh0JywgeyB2YWx1ZTogZnVuY3Rpb24gKGNvbnRleHQsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGNvbnRleHQuYWRkRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5jb250ZXh0SWQgPSBjb250ZXh0LmlkO1xuICAgICAgICAgICAgICAgIHRhcmdldC5kYXRhc2V0LmluZGV4ID0gZGF0YUluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0LmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgYWRkTWVudShpZCwgcm9vdCkge1xuICAgICAgICBjb25zdCBtZW51ID0gbmV3IENvbnRleHRNZW51KGlkLCByb290KTtcbiAgICAgICAgdGhpcy5tZW51c1tpZF0gPSBtZW51O1xuICAgICAgICByZXR1cm4gbWVudTtcbiAgICB9XG4gICAgb25Db250ZXh0KGUpIHtcbiAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgbGV0IGlzRG9jdW1lbnQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbnRleHRJZDtcbiAgICAgICAgbGV0IGRhdGFJbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0RvY3VtZW50ID0gdGFyZ2V0ID09PSBkb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnRleHRJZCA9ICFpc0RvY3VtZW50ID8gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29udGV4dC1pZFwiKSA6IG51bGw7XG4gICAgICAgIH0gd2hpbGUgKCFpc0RvY3VtZW50ICYmICFjb250ZXh0SWQpO1xuICAgICAgICBkYXRhSW5kZXggPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgaWYgKGNvbnRleHRJZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVG9wID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyTGVmdCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhjb250ZXh0SWQsIGRhdGFJbmRleCk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pc1NhbWVOb2RlKHRoaXMuZWxlbWVudCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93KGNvbnRleHRJZCwgZGF0YUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnVzW2NvbnRleHRJZF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBtZW51LmRyYXcoZGF0YUluZGV4KTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBCb3VuZHMuLi5cbiAgICAgICAgY29uc3Qgcm9vdCA9IG1lbnUucm9vdDtcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gfSA9IHJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCByb290VG9wID0gdG9wICsgQ29udGV4dE1hcmdpbjtcbiAgICAgICAgbGV0IHJvb3RSaWdodCA9IHJpZ2h0IC0gQ29udGV4dE1hcmdpbjtcbiAgICAgICAgbGV0IHJvb3RCb3R0b20gPSBib3R0b20gLSBDb250ZXh0TWFyZ2luO1xuICAgICAgICBsZXQgcm9vdExlZnQgPSBsZWZ0ICsgQ29udGV4dE1hcmdpbjtcbiAgICAgICAgLy8gQ29udGV4dHMuLi5cbiAgICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjb250ZXh0VG9wID0gdGhpcy50cmlnZ2VyVG9wIC0gQ29udGV4dFRvcE9mZnNldDtcbiAgICAgICAgbGV0IGNvbnRleHRMZWZ0ID0gdGhpcy50cmlnZ2VyTGVmdDtcbiAgICAgICAgbGV0IGNvbnRleHRCb3R0b20gPSBjb250ZXh0VG9wICsgaGVpZ2h0O1xuICAgICAgICBsZXQgY29udGV4dFJpZ2h0ID0gY29udGV4dExlZnQgKyBoZWlnaHQ7XG4gICAgICAgIC8vIFgtbGltaXQgYm91bmRzLlxuICAgICAgICBpZiAoY29udGV4dExlZnQgPCByb290TGVmdCkge1xuICAgICAgICAgICAgY29udGV4dExlZnQgPSByb290TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0UmlnaHQgPiByb290UmlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRleHRMZWZ0ID0gcm9vdFJpZ2h0IC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gWS1saW1pdCBib3VuZHMuXG4gICAgICAgIGlmIChjb250ZXh0VG9wIDwgcm9vdFRvcCkge1xuICAgICAgICAgICAgY29udGV4dFRvcCA9IHJvb3RUb3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGV4dEJvdHRvbSA+IHJvb3RCb3R0b20pIHtcbiAgICAgICAgICAgIGNvbnRleHRUb3AgPSByb290Qm90dG9tIC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke2NvbnRleHRUb3B9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2NvbnRleHRMZWZ0fXB4YDtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBudWxsKTtcbiAgICAgICAgKF9hID0gdGhpcy5hY3RpdmVUcmlnZ2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50cmlnZ2VyVG9wID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBnbG9iYWxDb250ZXh0ID0gbmV3IENvbnRleHRNZW51R2xvYmFsKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2FjY291bnQtY2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbi1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9jYXJkLWJhbGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0LW1lbnUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtaW5kaWNhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc25hcC12aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNhY3Rpb24tcGFuZWwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtY2FyZCc7XG4iLCJ2YXIgbW9kYWxTcGFjZTtcbmV4cG9ydCBjbGFzcyBNb2RhbFNwYWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1zcGFjZVwiKTtcbiAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIH1cbiAgICBhZGRTdGFjayhtb2RhbCkge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLnN0YWNrO1xuICAgICAgICBsZXQgZXhpc3RzID0gc3RhY2suaW5kZXhPZihtb2RhbCkgPiAtMTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobW9kYWwpO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVTdGFjayhtb2RhbCkge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLnN0YWNrO1xuICAgICAgICBsZXQgZXhpc3RzID0gc3RhY2suaW5kZXhPZihtb2RhbCkgPiAtMTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIG1vZGFsU3BhY2UgPSBtb2RhbFNwYWNlICE9PSBudWxsICYmIG1vZGFsU3BhY2UgIT09IHZvaWQgMCA/IG1vZGFsU3BhY2UgOiBuZXcgTW9kYWxTcGFjZSgpO1xuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcbiAgICAgICAgbGV0IG1vZGFsID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IGNsb3NlQWN0aW9ucyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtYWN0aW9uW2RhdGEtcm9sZT1jbG9zZV1cIik7XG4gICAgICAgIGxldCB0ZXJtaW5hYmxlID0gKF9hID0gcm9vdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlcm1pbmFibGVcIikgPT09IFwidHJ1ZVwiKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAodGVybWluYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgICAgIGNsb3NlQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICBhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pZCA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLnNwYWNlID0gbW9kYWxTcGFjZTtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB0aGlzLmNsb3NlQWN0aW9ucyA9IGNsb3NlQWN0aW9ucztcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLnJvb3Q7XG4gICAgICAgIGxldCBzcGFjZSA9IHRoaXMuc3BhY2U7XG4gICAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJvb3Quc3R5bGUuekluZGV4ID0gc3BhY2Uuc3RhY2subGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgIHNwYWNlLmFkZFN0YWNrKHRoaXMuaWQpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuc3BhY2UucmVtb3ZlU3RhY2sodGhpcy5pZCk7XG4gICAgfVxufVxuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBwcm9wZXJ0eSwgcXVlcnksIH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgUGFnZUluZGljYXRvciA9IGNsYXNzIFBhZ2VJbmRpY2F0b3IgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzID0gW107XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIHBhcnQ9XCJjb250cm9sXCI+PC9kaXY+YDtcbiAgICB9XG4gICAgc3RhdGVIYXNDaGFuZ2VkKGNoYW5nZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgY2hhbmdlcykge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzaXplJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWN0aXZlSW5kZXgnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2l6ZShvbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMuc2l6ZSAtIChvbGRWYWx1ZSAhPT0gbnVsbCAmJiBvbGRWYWx1ZSAhPT0gdm9pZCAwID8gb2xkVmFsdWUgOiAwKTtcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBhZGRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGRlbHRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRpY2F0b3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW1vdmVkID0gdGhpcy5faW5kaWNhdG9ycy5zcGxpY2UoZGVsdGEsIE1hdGguYWJzKGRlbHRhKSwgLi4uYWRkZWQpO1xuICAgICAgICB0aGlzLl9jb250cm9sLmFwcGVuZCguLi5hZGRlZCk7XG4gICAgICAgIHJlbW92ZWQuZm9yRWFjaChpbmRpY2F0b3IgPT4gaW5kaWNhdG9yLnJlbW92ZSgpKTtcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlSW5kZXgob2xkSW5kZXgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gb2xkSW5kZXgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChfYSA9IHRoaXMuX2luZGljYXRvcnNbb2xkSW5kZXhdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnNbdGhpcy5hY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufTtcblBhZ2VJbmRpY2F0b3Iuc3R5bGVzID0gYFxyXG4gICAgICAgIC5jb250cm9sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCAwIDAgLyAwLjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvci5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIGA7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLmNvbnRyb2wnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTERpdkVsZW1lbnQpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJfY29udHJvbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuXSwgUGFnZUluZGljYXRvci5wcm90b3R5cGUsIFwic2l6ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhY3RpdmUtaW5kZXgnIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJhY3RpdmVJbmRleFwiLCB2b2lkIDApO1xuUGFnZUluZGljYXRvciA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgncGFnZS1pbmRpY2F0b3InKVxuXSwgUGFnZUluZGljYXRvcik7XG5leHBvcnQgeyBQYWdlSW5kaWNhdG9yIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgUGFnZUluZGljYXRvciB9IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCwgcXVlcnkgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbnZhciBTbmFwRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChTbmFwRGlyZWN0aW9uKSB7XG4gICAgU25hcERpcmVjdGlvbltTbmFwRGlyZWN0aW9uW1wiTGVmdFwiXSA9IC0xXSA9IFwiTGVmdFwiO1xuICAgIFNuYXBEaXJlY3Rpb25bU25hcERpcmVjdGlvbltcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XG59KShTbmFwRGlyZWN0aW9uIHx8IChTbmFwRGlyZWN0aW9uID0ge30pKTtcbmxldCBTbmFwVmlldyA9IGNsYXNzIFNuYXBWaWV3IGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fc25hcEV2ZW50ID0gbmV3IEV2ZW50KCdzbmFwJyk7XG4gICAgfVxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAuMjkgMTIuNzFsOCA4IDEuNDEtMS40MS02LjI5LTYuMjlIMjR2LTJIMy40MWw2LjI5LTYuMjktMS40MS0xLjQxLTggOGExIDEgMCAwIDAgMCAxLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IExlZnRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XHJcbiAgICAgICAgYDtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRTbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5fZGVmYXVsdFNsb3QuYXNzaWduZWRFbGVtZW50cygpO1xuICAgICAgICAgICAgdGhpcy5fcGFuZWxDb3VudCA9IGxlbmd0aCAtIDE7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3Iuc2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2xlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5MZWZ0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzb2x2ZUluZGV4KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGluZGV4KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9sZWZ0QnRuLmRpc2FibGVkID0gaW5kZXggPD0gMDtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QnRuLmRpc2FibGVkID0gaW5kZXggPT09IHRoaXMuX3BhbmVsQ291bnQ7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3IuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zbmFwRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzb2x2ZUluZGV4KCkge1xuICAgICAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzY3JvbGxMZWZ0IC8gd2lkdGgpO1xuICAgIH1cbiAgICBzbmFwKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5faW5kZXggKyBkaXJlY3Rpb24pICogd2lkdGgsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblNuYXBWaWV3LnN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc25hcEJ1dHRvbiBzdmcgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uLmxlZnQge1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuYXBCdXR0b24ucmlnaHQge1xyXG4gICAgICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbmFwQnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuYXBCdXR0b246bm90KDphY3RpdmUpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICA6aG9zdCg6aG92ZXIpIC5zbmFwQnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5jb250YWluZXInKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTERpdkVsZW1lbnQpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2NvbnRhaW5lclwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJ3Nsb3QnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTFNsb3RFbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9kZWZhdWx0U2xvdFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5sZWZ0JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxCdXR0b25FbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9sZWZ0QnRuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLnJpZ2h0JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxCdXR0b25FbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9yaWdodEJ0blwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5pbmRpY2F0b3InKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgUGFnZUluZGljYXRvcilcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfaW5kaWNhdG9yXCIsIHZvaWQgMCk7XG5TbmFwVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU25hcFZpZXcpO1xuZXhwb3J0IHsgU25hcFZpZXcgfTtcbmxldCBTbmFwVmlld1BhbmVsID0gY2xhc3MgU25hcFZpZXdQYW5lbCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gO1xuICAgIH1cbn07XG5TbmFwVmlld1BhbmVsLnN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIGA7XG5TbmFwVmlld1BhbmVsID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdzbmFwLXZpZXctcGFuZWwnKVxuXSwgU25hcFZpZXdQYW5lbCk7XG5leHBvcnQgeyBTbmFwVmlld1BhbmVsIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcbmltcG9ydCB7IGN1c3RvbUNvbXBvbmVudCwgQ3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb21wdXRlQWxwaGFCbGVuZCB9IGZyb20gJ0AvY2xhc3Nlcyc7XG5sZXQgVHJhbnNhY3Rpb25QYW5lbCA9IGNsYXNzIFRyYW5zYWN0aW9uUGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9vdmVybGF5ID0geyBhbHBoYTogMC4wIH07XG4gICAgfVxuICAgIC8qIERPTSAqL1xuICAgIGdldCBwYW5lbCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9wYW5lbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX3BhbmVsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucGFuZWxcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFuZWw7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLWJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSk7XG4gICAgICAgIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsID0gdHJ1ZSk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24odHJ1ZSwgMC4xKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zaXRpb24oZmFsc2UsIDApO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uKHNob3csIGFscGhhKSB7XG4gICAgICAgIGNvbnN0IHRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoe1xuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVpbnRcIixcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4gdGhpcy5jaGFuZ2VUaGVtZSgpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQYW5lbFxuICAgICAgICBjb25zdCBwYW5lbEFuaW0gPSB7IHRhcmdldHM6IHRoaXMucGFuZWwgfTtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KVxuICAgICAgICAgICAgcGFuZWxBbmltLnRvcCA9IHNob3cgPyAyMiA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFuZWxBbmltLnJpZ2h0ID0gc2hvdyA/IDE1IDogLTUzMTsgLy8gVE9ETzogRHluYW1pYz9cbiAgICAgICAgdGltZWxpbmUuYWRkKHBhbmVsQW5pbSwgMCk7XG4gICAgICAgIC8vIE92ZXJsYXlcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGByZ2JhKDAsIDAsIDAsICR7YWxwaGF9KWA7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh7IHRhcmdldHM6IHRoaXMsIGJhY2tncm91bmQ6IGJhY2tncm91bmQgfSwgMCk7XG4gICAgICAgIC8vIFRoZW1lXG4gICAgICAgIC8vIEZJWE1FOiBGbGlja2VyIG9uIHNob3cgZmlyc3QgYXR0ZW1wdC5cbiAgICAgICAgY29uc3Qgb3ZlcmxheUFuaW0gPSB7IHRhcmdldHM6IHRoaXMuX292ZXJsYXksIGFscGhhOiBhbHBoYSB9O1xuICAgICAgICB0aW1lbGluZS5hZGQob3ZlcmxheUFuaW0sIDApO1xuICAgIH1cbiAgICBjaGFuZ2VUaGVtZSgpIHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBjb21wdXRlQWxwaGFCbGVuZChcImYyZjJmMlwiLCBcIjAwMDAwMFwiLCB0aGlzLl9vdmVybGF5LmFscGhhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl0nKVxuICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xuICAgIH1cbn07XG5UcmFuc2FjdGlvblBhbmVsLnN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIC0tcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC0tcmFkaXVzLW1vYjogMTVweDtcclxuICAgICAgICAgICAgLS1tYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIC0tdG9wOiBjYWxjKDQ0cHggLyAyKTtcclxuICAgICAgICAgICAgLS13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0KC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucGFuZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWRpdXMtbW9iKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZGl1cy1tb2IpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCBjYWxjKDMyICogMC41cHgpIGNhbGMoKDMyICogMXB4KSkgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvcCkpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oYW5kbGUtYmFyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGFuZGxlLWJhcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE5NCwgMTk0LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsb3Qge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKiBUYWJsZXQgJiBVcCAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnBhbmVsIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLW1hcmdpbikgKiAyKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAqIC0xKTtcclxuICAgICAgICAgICAgICAgIHRvcDogdmFyKC0tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmhhbmRsZS1iYXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYDtcblRyYW5zYWN0aW9uUGFuZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3RyYW5zYWN0aW9uLXBhbmVsJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgVHJhbnNhY3Rpb25QYW5lbCk7XG5leHBvcnQgeyBUcmFuc2FjdGlvblBhbmVsIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBjdXN0b21Db21wb25lbnQsIEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IFdhbGxldENhcmQgPSBjbGFzcyBXYWxsZXRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9iXCI+PC9kaXY+XHJcbiAgICAgICAgYDtcbiAgICB9XG59O1xuV2FsbGV0Q2FyZC5zdHlsZXMgPSBgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udHJvbCB7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4MHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkEzMjk5O1xyXG4gICAgICAgICAgICBpbnNldDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9iIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDQwcHgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgYDtcbldhbGxldENhcmQgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3dhbGxldC1jYXJkJylcbl0sIFdhbGxldENhcmQpO1xuZXhwb3J0IHsgV2FsbGV0Q2FyZCB9O1xuIiwiZXhwb3J0IHZhciBFbnRpdHlTdGF0dXM7XG4oZnVuY3Rpb24gKEVudGl0eVN0YXR1cykge1xuICAgIEVudGl0eVN0YXR1c1tFbnRpdHlTdGF0dXNbXCJDbG9zZWRcIl0gPSAwXSA9IFwiQ2xvc2VkXCI7XG4gICAgRW50aXR5U3RhdHVzW0VudGl0eVN0YXR1c1tcIkFjdGl2ZVwiXSA9IDFdID0gXCJBY3RpdmVcIjtcbn0pKEVudGl0eVN0YXR1cyB8fCAoRW50aXR5U3RhdHVzID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZW50aXR5LXN0YXR1cyc7XG5leHBvcnQgKiBmcm9tICcuL29wZXJhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLXR5cGUnO1xuIiwiZXhwb3J0IHZhciBPcGVyYXRpb247XG4oZnVuY3Rpb24gKE9wZXJhdGlvbikge1xuICAgIE9wZXJhdGlvbltPcGVyYXRpb25bXCJDcmVhdGVcIl0gPSAwXSA9IFwiQ3JlYXRlXCI7XG4gICAgT3BlcmF0aW9uW09wZXJhdGlvbltcIlVwZGF0ZVwiXSA9IDFdID0gXCJVcGRhdGVcIjtcbn0pKE9wZXJhdGlvbiB8fCAoT3BlcmF0aW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNhY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChUcmFuc2FjdGlvblR5cGUpIHtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiRGVwb3NpdFwiXSA9IDBdID0gXCJEZXBvc2l0XCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIldpdGhkcmF3XCJdID0gMV0gPSBcIldpdGhkcmF3XCI7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIlRyYW5zZmVyXCJdID0gMl0gPSBcIlRyYW5zZmVyXCI7XG59KShUcmFuc2FjdGlvblR5cGUgfHwgKFRyYW5zYWN0aW9uVHlwZSA9IHt9KSk7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBzZXJ2aWNlLCBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vc2VydmljZS1iYXNlJztcbmxldCBBY2NvdW50U2VydmljZSA9IGNsYXNzIEFjY291bnRTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdyZWFkLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uZ2V0KGVuZHBvaW50KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY3JlYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3VwZGF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgLy8gVE9ETzogVXNlIEpTT05cbiAgICBhc3luYyBjbG9zZShpZCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2Nsb3NlLnBocCcpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICAvLyBUT0RPOiBVc2UgSlNPTlxuICAgIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2RlbGV0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBkYXRhLmFwcGVuZCgnSWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG59O1xuQWNjb3VudFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICBzZXJ2aWNlKCcvYWNjb3VudC9jcnVkJylcbl0sIEFjY291bnRTZXJ2aWNlKTtcbmV4cG9ydCB7IEFjY291bnRTZXJ2aWNlIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBzZXJ2aWNlLCBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vc2VydmljZS1iYXNlJztcbmxldCBDYXRlZ29yeVNlcnZpY2UgPSBjbGFzcyBDYXRlZ29yeVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XG4gICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3JlYWQucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5nZXQoZW5kcG9pbnQpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjcmVhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgndXBkYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBhc3luYyByZW1vdmUoaWQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdkZWxldGUucGhwJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ0lkJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxufTtcbkNhdGVnb3J5U2VydmljZSA9IF9fZGVjb3JhdGUoW1xuICAgIHNlcnZpY2UoJy9jYXRlZ29yeS9jcnVkJylcbl0sIENhdGVnb3J5U2VydmljZSk7XG5leHBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYWNjb3VudC1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2F0ZWdvcnktc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItc2VydmljZSc7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGNsYXNzIFNlcnZpY2VCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IGF4aW9zLmNyZWF0ZSgpO1xuICAgIH1cbiAgICBlbmRwb2ludChwYXRoKSB7XG4gICAgICAgIGNvbnN0IGJhc2VVUkwgPSB0aGlzLl9iYXNlVVJMO1xuICAgICAgICByZXR1cm4gYCR7YmFzZVVSTH0vJHtwYXRofWA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UoYmFzZVVSTCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgc2VydmljZSwgU2VydmljZUJhc2UgfSBmcm9tICcuL3NlcnZpY2UtYmFzZSc7XG5sZXQgVXNlclNlcnZpY2UgPSBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIFNlcnZpY2VCYXNlIHtcbiAgICBhc3luYyBnZXQoKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgncmVhZC5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmdldChlbmRwb2ludCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2NyZWF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgYXN5bmMgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCd1cGRhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2RlbGV0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBkYXRhLmFwcGVuZCgnSWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG59O1xuVXNlclNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICBzZXJ2aWNlKCcvdXNlci9jcnVkJylcbl0sIFVzZXJTZXJ2aWNlKTtcbmV4cG9ydCB7IFVzZXJTZXJ2aWNlIH07XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IGh0dHBBZGFwdGVyIGZyb20gJy4vaHR0cC5qcyc7XG5pbXBvcnQgeGhyQWRhcHRlciBmcm9tICcuL3hoci5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXJcbn1cblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge3ZhbHVlfSk7XG4gIH1cbn0pO1xuXG5jb25zdCByZW5kZXJSZWFzb24gPSAocmVhc29uKSA9PiBgLSAke3JlYXNvbn1gO1xuXG5jb25zdCBpc1Jlc29sdmVkSGFuZGxlID0gKGFkYXB0ZXIpID0+IHV0aWxzLmlzRnVuY3Rpb24oYWRhcHRlcikgfHwgYWRhcHRlciA9PT0gbnVsbCB8fCBhZGFwdGVyID09PSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBZGFwdGVyOiAoYWRhcHRlcnMpID0+IHtcbiAgICBhZGFwdGVycyA9IHV0aWxzLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuXG4gICAgY29uc3Qge2xlbmd0aH0gPSBhZGFwdGVycztcbiAgICBsZXQgbmFtZU9yQWRhcHRlcjtcbiAgICBsZXQgYWRhcHRlcjtcblxuICAgIGNvbnN0IHJlamVjdGVkUmVhc29ucyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgICAgbGV0IGlkO1xuXG4gICAgICBhZGFwdGVyID0gbmFtZU9yQWRhcHRlcjtcblxuICAgICAgaWYgKCFpc1Jlc29sdmVkSGFuZGxlKG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICAgIGFkYXB0ZXIgPSBrbm93bkFkYXB0ZXJzWyhpZCA9IFN0cmluZyhuYW1lT3JBZGFwdGVyKSkudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKGBVbmtub3duIGFkYXB0ZXIgJyR7aWR9J2ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZWplY3RlZFJlYXNvbnNbaWQgfHwgJyMnICsgaV0gPSBhZGFwdGVyO1xuICAgIH1cblxuICAgIGlmICghYWRhcHRlcikge1xuXG4gICAgICBjb25zdCByZWFzb25zID0gT2JqZWN0LmVudHJpZXMocmVqZWN0ZWRSZWFzb25zKVxuICAgICAgICAubWFwKChbaWQsIHN0YXRlXSkgPT4gYGFkYXB0ZXIgJHtpZH0gYCArXG4gICAgICAgICAgKHN0YXRlID09PSBmYWxzZSA/ICdpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudCcgOiAnaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGQnKVxuICAgICAgICApO1xuXG4gICAgICBsZXQgcyA9IGxlbmd0aCA/XG4gICAgICAgIChyZWFzb25zLmxlbmd0aCA+IDEgPyAnc2luY2UgOlxcbicgKyByZWFzb25zLm1hcChyZW5kZXJSZWFzb24pLmpvaW4oJ1xcbicpIDogJyAnICsgcmVuZGVyUmVhc29uKHJlYXNvbnNbMF0pKSA6XG4gICAgICAgICdhcyBubyBhZGFwdGVyIHNwZWNpZmllZCc7XG5cbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBgVGhlcmUgaXMgbm8gc3VpdGFibGUgYWRhcHRlciB0byBkaXNwYXRjaCB0aGUgcmVxdWVzdCBgICsgcyxcbiAgICAgICAgJ0VSUl9OT1RfU1VQUE9SVCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG4gIH0sXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBzZXR0bGUgZnJvbSAnLi8uLi9jb3JlL3NldHRsZS5qcyc7XG5pbXBvcnQgY29va2llcyBmcm9tICcuLy4uL2hlbHBlcnMvY29va2llcy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi8uLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4uL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgaXNVUkxTYW1lT3JpZ2luIGZyb20gJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IHBhcnNlUHJvdG9jb2wgZnJvbSAnLi4vaGVscGVycy9wYXJzZVByb3RvY29sLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBzcGVlZG9tZXRlciBmcm9tICcuLi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzJztcblxuZnVuY3Rpb24gcHJvZ3Jlc3NFdmVudFJlZHVjZXIobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0pIHtcbiAgbGV0IGJ5dGVzTm90aWZpZWQgPSAwO1xuICBjb25zdCBfc3BlZWRvbWV0ZXIgPSBzcGVlZG9tZXRlcig1MCwgMjUwKTtcblxuICByZXR1cm4gZSA9PiB7XG4gICAgY29uc3QgbG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgY29uc3QgdG90YWwgPSBlLmxlbmd0aENvbXB1dGFibGUgPyBlLnRvdGFsIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBsb2FkZWQgLSBieXRlc05vdGlmaWVkO1xuICAgIGNvbnN0IHJhdGUgPSBfc3BlZWRvbWV0ZXIocHJvZ3Jlc3NCeXRlcyk7XG4gICAgY29uc3QgaW5SYW5nZSA9IGxvYWRlZCA8PSB0b3RhbDtcblxuICAgIGJ5dGVzTm90aWZpZWQgPSBsb2FkZWQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbG9hZGVkLFxuICAgICAgdG90YWwsXG4gICAgICBwcm9ncmVzczogdG90YWwgPyAobG9hZGVkIC8gdG90YWwpIDogdW5kZWZpbmVkLFxuICAgICAgYnl0ZXM6IHByb2dyZXNzQnl0ZXMsXG4gICAgICByYXRlOiByYXRlID8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCAmJiBpblJhbmdlID8gKHRvdGFsIC0gbG9hZGVkKSAvIHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBldmVudDogZVxuICAgIH07XG5cbiAgICBkYXRhW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddID0gdHJ1ZTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9O1xufVxuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpLm5vcm1hbGl6ZSgpO1xuICAgIGxldCB7cmVzcG9uc2VUeXBlLCB3aXRoWFNSRlRva2VufSA9IGNvbmZpZztcbiAgICBsZXQgb25DYW5jZWxlZDtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29udGVudFR5cGU7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52KSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKGZhbHNlKTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgICAgfSBlbHNlIGlmICgoY29udGVudFR5cGUgPSByZXF1ZXN0SGVhZGVycy5nZXRDb250ZW50VHlwZSgpKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZml4IHNlbWljb2xvbiBkdXBsaWNhdGlvbiBpc3N1ZSBmb3IgUmVhY3ROYXRpdmUgRm9ybURhdGEgaW1wbGVtZW50YXRpb25cbiAgICAgICAgY29uc3QgW3R5cGUsIC4uLnRva2Vuc10gPSBjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JykubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKFt0eXBlIHx8ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgLi4udG9rZW5zXS5qb2luKCc7ICcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShcbiAgICAgICAgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCAmJiByZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICBsZXQgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICB0cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/IEF4aW9zRXJyb3IuRVRJTUVET1VUIDogQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZihwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYpIHtcbiAgICAgIHdpdGhYU1JGVG9rZW4gJiYgdXRpbHMuaXNGdW5jdGlvbih3aXRoWFNSRlRva2VuKSAmJiAod2l0aFhTUkZUb2tlbiA9IHdpdGhYU1JGVG9rZW4oY29uZmlnKSk7XG5cbiAgICAgIGlmICh3aXRoWFNSRlRva2VuIHx8ICh3aXRoWFNSRlRva2VuICE9PSBmYWxzZSAmJiBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSkge1xuICAgICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgICAgY29uc3QgeHNyZlZhbHVlID0gY29uZmlnLnhzcmZIZWFkZXJOYW1lICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKTtcblxuICAgICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0KGNvbmZpZy54c3JmSGVhZGVyTmFtZSwgeHNyZlZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbiB8fCBjb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGNhbmNlbCA9PiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCBjYW5jZWwudHlwZSA/IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZywgcmVxdWVzdCkgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKGZ1bGxQYXRoKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBwbGF0Zm9ybS5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi9hZGFwdGVycy9hZGFwdGVycy5qcyc7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcblxuYXhpb3MuSHR0cFN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzQ29kZTtcblxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xuXG4vLyB0aGlzIG1vZHVsZSBzaG91bGQgb25seSBoYXZlIGEgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGF4aW9zXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xuICAgICAgbGV0IF9yZXNvbHZlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAgICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAgICovXG4gIHN0YXRpYyBzb3VyY2UoKSB7XG4gICAgbGV0IGNhbmNlbDtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgICBjYW5jZWwgPSBjO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbixcbiAgICAgIGNhbmNlbFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbGVkRXJyb3JgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdD19IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3Q9fSByZXF1ZXN0IFRoZSByZXF1ZXN0LlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxlZEVycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIEF4aW9zRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlID09IG51bGwgPyAnY2FuY2VsZWQnIDogbWVzc2FnZSwgQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQsIGNvbmZpZywgcmVxdWVzdCk7XG4gIHRoaXMubmFtZSA9ICdDYW5jZWxlZEVycm9yJztcbn1cblxudXRpbHMuaW5oZXJpdHMoQ2FuY2VsZWRFcnJvciwgQXhpb3NFcnJvciwge1xuICBfX0NBTkNFTF9fOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsZWRFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyLmpzJztcbmltcG9ydCBkaXNwYXRjaFJlcXVlc3QgZnJvbSAnLi9kaXNwYXRjaFJlcXVlc3QuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnLi4vaGVscGVycy92YWxpZGF0b3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL0F4aW9zSGVhZGVycy5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuY2xhc3MgQXhpb3Mge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZUNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGNvbmZpZ09yVXJsIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBjb25maWdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICAgKi9cbiAgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICAgIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICBjb25zdCB7dHJhbnNpdGlvbmFsLCBwYXJhbXNTZXJpYWxpemVyLCBoZWFkZXJzfSA9IGNvbmZpZztcblxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyICE9IG51bGwpIHtcbiAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcmFtc1NlcmlhbGl6ZXIpKSB7XG4gICAgICAgIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZTogcGFyYW1zU2VyaWFsaXplclxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxuICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGxldCBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgaGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJldHVybiBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuICB9XG59XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kLFxuICAgICAgdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaHR0cE1ldGhvZCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVxuICAgICAgfSkpO1xuICAgIH07XG4gIH1cblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCgpO1xuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ10gVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQXhpb3NFcnJvcihtZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSAnQXhpb3NFcnJvcic7XG4gIGNvZGUgJiYgKHRoaXMuY29kZSA9IGNvZGUpO1xuICBjb25maWcgJiYgKHRoaXMuY29uZmlnID0gY29uZmlnKTtcbiAgcmVxdWVzdCAmJiAodGhpcy5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gIHJlc3BvbnNlICYmICh0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UpO1xufVxuXG51dGlscy5pbmhlcml0cyhBeGlvc0Vycm9yLCBFcnJvciwge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB1dGlscy50b0pTT05PYmplY3QodGhpcy5jb25maWcpLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zRXJyb3IucHJvdG90eXBlO1xuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcblxuW1xuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxuICAnRVJSX0JBRF9PUFRJT04nLFxuICAnRUNPTk5BQk9SVEVEJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFUlJfTkVUV09SSycsXG4gICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJyxcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcbiAgJ0VSUl9CQURfUkVTUE9OU0UnLFxuICAnRVJSX0JBRF9SRVFVRVNUJyxcbiAgJ0VSUl9DQU5DRUxFRCcsXG4gICdFUlJfTk9UX1NVUFBPUlQnLFxuICAnRVJSX0lOVkFMSURfVVJMJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChjb2RlID0+IHtcbiAgZGVzY3JpcHRvcnNbY29kZV0gPSB7dmFsdWU6IGNvZGV9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEF4aW9zRXJyb3IsIGRlc2NyaXB0b3JzKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcbiAgY29uc3QgYXhpb3NFcnJvciA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcblxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBFcnJvci5wcm90b3R5cGU7XG4gIH0sIHByb3AgPT4ge1xuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcbiAgfSk7XG5cbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gIGF4aW9zRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuICBheGlvc0Vycm9yLm5hbWUgPSBlcnJvci5uYW1lO1xuXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuXG4gIHJldHVybiBheGlvc0Vycm9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuXG5jb25zdCAkaW50ZXJuYWxzID0gU3ltYm9sKCdpbnRlcm5hbHMnKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbnMoc3RyKSB7XG4gIGNvbnN0IHRva2VucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XG4gICAgdG9rZW5zW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgaXNWYWxpZEhlYWRlck5hbWUgPSAoc3RyKSA9PiAvXlstX2EtekEtWjAtOV5gfH4sISMkJSYnKisuXSskLy50ZXN0KHN0ci50cmltKCkpO1xuXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcblxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSBpZih1dGlscy5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgIT0gbnVsbCAmJiBzZXRIZWFkZXIodmFsdWVPclJld3JpdGUsIGhlYWRlciwgcmV3cml0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcblxuICAgICAgICBpZiAoIXBhcnNlcikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZShoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmIChfaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG5cbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGZba2V5XTtcblxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlSGVhZGVyKGhlYWRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBjbGVhcihtYXRjaGVyKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gaGVhZGVyICsgJzogJyArIHZhbHVlKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0F4aW9zSGVhZGVycyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbSh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIHRoaXMgPyB0aGluZyA6IG5ldyB0aGlzKHRoaW5nKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcbiAgICBjb25zdCBjb21wdXRlZCA9IG5ldyB0aGlzKGZpcnN0KTtcblxuICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBjb21wdXRlZC5zZXQodGFyZ2V0KSk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWQ7XG4gIH1cblxuICBzdGF0aWMgYWNjZXNzb3IoaGVhZGVyKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gdGhpc1skaW50ZXJuYWxzXSA9ICh0aGlzWyRpbnRlcm5hbHNdID0ge1xuICAgICAgYWNjZXNzb3JzOiB7fVxuICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3JzID0gaW50ZXJuYWxzLmFjY2Vzc29ycztcbiAgICBjb25zdCBwcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIGRlZmluZUFjY2Vzc29yKF9oZWFkZXIpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghYWNjZXNzb3JzW2xIZWFkZXJdKSB7XG4gICAgICAgIGJ1aWxkQWNjZXNzb3JzKHByb3RvdHlwZSwgX2hlYWRlcik7XG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXRpbHMuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyLmZvckVhY2goZGVmaW5lQWNjZXNzb3IpIDogZGVmaW5lQWNjZXNzb3IoaGVhZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbkF4aW9zSGVhZGVycy5hY2Nlc3NvcihbJ0NvbnRlbnQtVHlwZScsICdDb250ZW50LUxlbmd0aCcsICdBY2NlcHQnLCAnQWNjZXB0LUVuY29kaW5nJywgJ1VzZXItQWdlbnQnLCAnQXV0aG9yaXphdGlvbiddKTtcblxuLy8gcmVzZXJ2ZWQgbmFtZXMgaG90Zml4XG51dGlscy5yZWR1Y2VEZXNjcmlwdG9ycyhBeGlvc0hlYWRlcnMucHJvdG90eXBlLCAoe3ZhbHVlfSwga2V5KSA9PiB7XG4gIGxldCBtYXBwZWQgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTsgLy8gbWFwIGBzZXRgID0+IGBTZXRgXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoKSA9PiB2YWx1ZSxcbiAgICBzZXQoaGVhZGVyVmFsdWUpIHtcbiAgICAgIHRoaXNbbWFwcGVkXSA9IGhlYWRlclZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnV0aWxzLmZyZWV6ZU1ldGhvZHMoQXhpb3NIZWFkZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NIZWFkZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gXCIuLi9hZGFwdGVycy9hZGFwdGVycy5qc1wiO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgY29uZmlnLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xuICAgIGNvbmZpZy5oZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdCBhZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcihjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyKTtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgIHJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHRoaW5nLnRvSlNPTigpIDogdGhpbmc7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBjYXNlbGVzcykge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UuY2FsbCh7Y2FzZWxlc3N9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBjYXNlbGVzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhhLCBiLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aFhTUkZUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBhZGFwdGVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlVHlwZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmQ29va2llTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmSGVhZGVyTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvblVwbG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uRG93bmxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBkZWNvbXByZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heENvbnRlbnRMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Qm9keUxlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBiZWZvcmVSZWRpcmVjdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc3BvcnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cEFnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBzQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgY2FuY2VsVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgc29ja2V0UGF0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZUVuY29kaW5nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHZhbGlkYXRlU3RhdHVzOiBtZXJnZURpcmVjdEtleXMsXG4gICAgaGVhZGVyczogKGEsIGIpID0+IG1lcmdlRGVlcFByb3BlcnRpZXMoaGVhZGVyc1RvT2JqZWN0KGEpLCBoZWFkZXJzVG9PYmplY3QoYiksIHRydWUpXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCBjb25maWcxLCBjb25maWcyKSksIGZ1bmN0aW9uIGNvbXB1dGVDb25maWdWYWx1ZShwcm9wKSB7XG4gICAgY29uc3QgbWVyZ2UgPSBtZXJnZU1hcFtwcm9wXSB8fCBtZXJnZURlZXBQcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gbWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSwgcHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL0F4aW9zRXJyb3IuanMnO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIFtBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFXVtNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgLSA0XSxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCB0b1VSTEVuY29kZWRGb3JtIGZyb20gJy4uL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4uL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nLCB0cmllcyB0byBwYXJzZSBpdCwgYW5kIGlmIGl0IGZhaWxzLCBpdCByZXR1cm5zIHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uXG4gKiBvZiB0aGUgaW5wdXRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcmF3VmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJzZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGEgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZ2lmaWVkIHZlcnNpb24gb2YgdGhlIHJhd1ZhbHVlLlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIGlmICghaGFzSlNPTkNvbnRlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IGlzRmlsZUxpc3Q7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xuICAgICAgICBjb25zdCBfRm9ybURhdGEgPSB0aGlzLmVudiAmJiB0aGlzLmVudi5Gb3JtRGF0YTtcblxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICBpc0ZpbGVMaXN0ID8geydmaWxlc1tdJzogZGF0YX0gOiBkYXRhLFxuICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlICkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgY29uc3QgSlNPTlJlcXVlc3RlZCA9IHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoZGF0YSAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiAoKGZvcmNlZEpTT05QYXJzaW5nICYmICF0aGlzLnJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIChtZXRob2QpID0+IHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZVxufTtcbiIsImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxLjYuMlwiOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBJdCBlbmNvZGVzIGEgc3RyaW5nIGJ5IHJlcGxhY2luZyBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgaW4gdGhlIHVucmVzZXJ2ZWQgc2V0IHdpdGhcbiAqIHRoZWlyIHBlcmNlbnQtZW5jb2RlZCBlcXVpdmFsZW50c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgY29uc3QgY2hhck1hcCA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH07XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKX5dfCUyMHwlMDAvZywgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGFyYW1zIG9iamVjdCBhbmQgY29udmVydHMgaXQgdG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIGNvbnZlcnRlZCB0byBhIEZvcm1EYXRhIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIEF4aW9zIGNvbnN0cnVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5fcGFpcnMgPSBbXTtcblxuICBwYXJhbXMgJiYgdG9Gb3JtRGF0YShwYXJhbXMsIHRoaXMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc1VSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcbn07XG5cbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kZXIpIHtcbiAgY29uc3QgX2VuY29kZSA9IGVuY29kZXIgPyBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVyLmNhbGwodGhpcywgdmFsdWUsIGVuY29kZSk7XG4gIH0gOiBlbmNvZGU7XG5cbiAgcmV0dXJuIHRoaXMuX3BhaXJzLm1hcChmdW5jdGlvbiBlYWNoKHBhaXIpIHtcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gIH0sICcnKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImNvbnN0IEh0dHBTdGF0dXNDb2RlID0ge1xuICBDb250aW51ZTogMTAwLFxuICBTd2l0Y2hpbmdQcm90b2NvbHM6IDEwMSxcbiAgUHJvY2Vzc2luZzogMTAyLFxuICBFYXJseUhpbnRzOiAxMDMsXG4gIE9rOiAyMDAsXG4gIENyZWF0ZWQ6IDIwMSxcbiAgQWNjZXB0ZWQ6IDIwMixcbiAgTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uOiAyMDMsXG4gIE5vQ29udGVudDogMjA0LFxuICBSZXNldENvbnRlbnQ6IDIwNSxcbiAgUGFydGlhbENvbnRlbnQ6IDIwNixcbiAgTXVsdGlTdGF0dXM6IDIwNyxcbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXG4gIEltVXNlZDogMjI2LFxuICBNdWx0aXBsZUNob2ljZXM6IDMwMCxcbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxuICBGb3VuZDogMzAyLFxuICBTZWVPdGhlcjogMzAzLFxuICBOb3RNb2RpZmllZDogMzA0LFxuICBVc2VQcm94eTogMzA1LFxuICBVbnVzZWQ6IDMwNixcbiAgVGVtcG9yYXJ5UmVkaXJlY3Q6IDMwNyxcbiAgUGVybWFuZW50UmVkaXJlY3Q6IDMwOCxcbiAgQmFkUmVxdWVzdDogNDAwLFxuICBVbmF1dGhvcml6ZWQ6IDQwMSxcbiAgUGF5bWVudFJlcXVpcmVkOiA0MDIsXG4gIEZvcmJpZGRlbjogNDAzLFxuICBOb3RGb3VuZDogNDA0LFxuICBNZXRob2ROb3RBbGxvd2VkOiA0MDUsXG4gIE5vdEFjY2VwdGFibGU6IDQwNixcbiAgUHJveHlBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA0MDcsXG4gIFJlcXVlc3RUaW1lb3V0OiA0MDgsXG4gIENvbmZsaWN0OiA0MDksXG4gIEdvbmU6IDQxMCxcbiAgTGVuZ3RoUmVxdWlyZWQ6IDQxMSxcbiAgUHJlY29uZGl0aW9uRmFpbGVkOiA0MTIsXG4gIFBheWxvYWRUb29MYXJnZTogNDEzLFxuICBVcmlUb29Mb25nOiA0MTQsXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgSW1BVGVhcG90OiA0MTgsXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxuICBVbnByb2Nlc3NhYmxlRW50aXR5OiA0MjIsXG4gIExvY2tlZDogNDIzLFxuICBGYWlsZWREZXBlbmRlbmN5OiA0MjQsXG4gIFRvb0Vhcmx5OiA0MjUsXG4gIFVwZ3JhZGVSZXF1aXJlZDogNDI2LFxuICBQcmVjb25kaXRpb25SZXF1aXJlZDogNDI4LFxuICBUb29NYW55UmVxdWVzdHM6IDQyOSxcbiAgUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlOiA0MzEsXG4gIFVuYXZhaWxhYmxlRm9yTGVnYWxSZWFzb25zOiA0NTEsXG4gIEludGVybmFsU2VydmVyRXJyb3I6IDUwMCxcbiAgTm90SW1wbGVtZW50ZWQ6IDUwMSxcbiAgQmFkR2F0ZXdheTogNTAyLFxuICBTZXJ2aWNlVW5hdmFpbGFibGU6IDUwMyxcbiAgR2F0ZXdheVRpbWVvdXQ6IDUwNCxcbiAgSHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ6IDUwNSxcbiAgVmFyaWFudEFsc29OZWdvdGlhdGVzOiA1MDYsXG4gIEluc3VmZmljaWVudFN0b3JhZ2U6IDUwNyxcbiAgTG9vcERldGVjdGVkOiA1MDgsXG4gIE5vdEV4dGVuZGVkOiA1MTAsXG4gIE5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA1MTEsXG59O1xuXG5PYmplY3QuZW50cmllcyhIdHRwU3RhdHVzQ29kZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gIEh0dHBTdGF0dXNDb2RlW3ZhbHVlXSA9IGtleTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIdHRwU3RhdHVzQ29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcblxuLyoqXG4gKiBJdCByZXBsYWNlcyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjaGFyYWN0ZXJzIGA6YCwgYCRgLCBgLGAsIGArYCwgYFtgLCBhbmQgYF1gIHdpdGggdGhlaXJcbiAqIFVSSSBlbmNvZGVkIGNvdW50ZXJwYXJ0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgVGhlIHZhbHVlIHRvIGJlIGVuY29kZWQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0gez9vYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIFxuICBjb25zdCBfZW5jb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgY29uc3Qgc2VyaWFsaXplRm4gPSBvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplO1xuXG4gIGxldCBzZXJpYWxpemVkUGFyYW1zO1xuXG4gIGlmIChzZXJpYWxpemVGbikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBzZXJpYWxpemVGbihwYXJhbXMsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSB1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpID9cbiAgICAgIHBhcmFtcy50b1N0cmluZygpIDpcbiAgICAgIG5ldyBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpLnRvU3RyaW5nKF9lbmNvZGUpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xuXG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAge1xuICAgIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgY29uc3QgY29va2llID0gW25hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcblxuICAgICAgdXRpbHMuaXNOdW1iZXIoZXhwaXJlcykgJiYgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuXG4gICAgICB1dGlscy5pc1N0cmluZyhwYXRoKSAmJiBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKGRvbWFpbikgJiYgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcblxuICAgICAgc2VjdXJlID09PSB0cnVlICYmIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcblxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcblxuICAgIHJlYWQobmFtZSkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgOlxuXG4gIC8vIE5vbi1zdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAge1xuICAgIHdyaXRlKCkge30sXG4gICAgcmVhZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlKCkge31cbiAgfTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcbiAgLy8gZm9vW3hdW3ldW3pdXG4gIC8vIGZvby54LnkuelxuICAvLyBmb28teC15LXpcbiAgLy8gZm9vIHggeSB6XG4gIHJldHVybiB1dGlscy5tYXRjaEFsbCgvXFx3K3xcXFsoXFx3KildL2csIG5hbWUpLm1hcChtYXRjaCA9PiB7XG4gICAgcmV0dXJuIG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY29udmVydCB0byBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpO1xuICBsZXQgaTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGxldCBrZXk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgb2JqW2tleV0gPSBhcnJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgRm9ybURhdGEgb2JqZWN0IGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXG4gKlxuICogQHJldHVybnMge09iamVjdDxzdHJpbmcsIGFueT4gfCBudWxsfSBUaGUgY29udmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZm9ybURhdGFUb0pTT04oZm9ybURhdGEpIHtcbiAgZnVuY3Rpb24gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xuICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IE51bWJlci5pc0Zpbml0ZSgrbmFtZSk7XG4gICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPj0gcGF0aC5sZW5ndGg7XG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuXG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSBbdGFyZ2V0W25hbWVdLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRbbmFtZV0gfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0W25hbWVdLCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gYXJyYXlUb09iamVjdCh0YXJnZXRbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzLmlzRnVuY3Rpb24oZm9ybURhdGEuZW50cmllcykpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2hFbnRyeShmb3JtRGF0YSwgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBidWlsZFBhdGgocGFyc2VQcm9wUGF0aChuYW1lKSwgdmFsdWUsIG9iaiwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1EYXRhVG9KU09OO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZCtcXC0uXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgY29uc3QgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgY29uc3QgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXRzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIGxldCBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0cmljdFxuZXhwb3J0IGRlZmF1bHQgbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5jb25zdCBpZ25vcmVEdXBsaWNhdGVPZiA9IHV0aWxzLnRvT2JqZWN0U2V0KFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd0hlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJhd0hlYWRlcnMgPT4ge1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGtleTtcbiAgbGV0IHZhbDtcbiAgbGV0IGk7XG5cbiAgcmF3SGVhZGVycyAmJiByYXdIZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IGxpbmUuc3Vic3RyaW5nKGkgKyAxKS50cmltKCk7XG5cbiAgICBpZiAoIWtleSB8fCAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2Zba2V5XSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSkge1xuICAgICAgICBwYXJzZWRba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IFt2YWxdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBkYXRhIG1heFJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlc0NvdW50PSAxMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xuICBzYW1wbGVzQ291bnQgPSBzYW1wbGVzQ291bnQgfHwgMTA7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCBmaXJzdFNhbXBsZVRTO1xuXG4gIG1pbiA9IG1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogMTAwMDtcblxuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBjb25zdCBzdGFydGVkQXQgPSB0aW1lc3RhbXBzW3RhaWxdO1xuXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XG4gICAgICBmaXJzdFNhbXBsZVRTID0gbm93O1xuICAgIH1cblxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcblxuICAgIGxldCBpID0gdGFpbDtcbiAgICBsZXQgYnl0ZXNDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoaSAhPT0gaGVhZCkge1xuICAgICAgYnl0ZXNDb3VudCArPSBieXRlc1tpKytdO1xuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG5cbiAgICBpZiAoaGVhZCA9PT0gdGFpbCkge1xuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoYnl0ZXNDb3VudCAqIDEwMDAgLyBwYXNzZWQpIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVlZG9tZXRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuLy8gdGVtcG9yYXJ5IGhvdGZpeCB0byBhdm9pZCBjaXJjdWxhciByZWZlcmVuY2VzIHVudGlsIEF4aW9zVVJMU2VhcmNoUGFyYW1zIGlzIHJlZmFjdG9yZWRcbmltcG9ydCBQbGF0Zm9ybUZvcm1EYXRhIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3Qob3B0aW9ucywge1xuICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgaW5kZXhlczogZmFsc2VcbiAgfSwgZmFsc2UsIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xuICBjb25zdCB1c2VCbG9iID0gX0Jsb2IgJiYgdXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHVzZUJsb2IgJiYgdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgIXBhdGggJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IG1ldGFUb2tlbnMgPyBrZXkgOiBrZXkuc2xpY2UoMCwgLTIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxuICAgICAgICAoKHV0aWxzLmlzRmlsZUxpc3QodmFsdWUpIHx8IHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykpICYmIChhcnIgPSB1dGlscy50b0FycmF5KHZhbHVlKSlcbiAgICAgICAgKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcblxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xuICAgICAgICAgICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGluZGV4ZXMgPT09IHRydWUgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKSA6IChpbmRleGVzID09PSBudWxsID8ga2V5IDoga2V5ICsgJ1tdJyksXG4gICAgICAgICAgICBjb252ZXJ0VmFsdWUoZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICBjb25zdCBleHBvc2VkSGVscGVycyA9IE9iamVjdC5hc3NpZ24ocHJlZGljYXRlcywge1xuICAgIGRlZmF1bHRWaXNpdG9yLFxuICAgIGNvbnZlcnRWYWx1ZSxcbiAgICBpc1Zpc2l0YWJsZVxuICB9KTtcblxuICBmdW5jdGlvbiBidWlsZCh2YWx1ZSwgcGF0aCkge1xuICAgIGlmICh1dGlscy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHJldHVybjtcblxuICAgIGlmIChzdGFjay5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcblxuICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIGVhY2goZWwsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIHZpc2l0b3IuY2FsbChcbiAgICAgICAgZm9ybURhdGEsIGVsLCB1dGlscy5pc1N0cmluZyhrZXkpID8ga2V5LnRyaW0oKSA6IGtleSwgcGF0aCwgZXhwb3NlZEhlbHBlcnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICBidWlsZChvYmopO1xuXG4gIHJldHVybiBmb3JtRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Gb3JtRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvRm9ybURhdGEoZGF0YSwgbmV3IHBsYXRmb3JtLmNsYXNzZXMuVVJMU2VhcmNoUGFyYW1zKCksIE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2l0b3I6IGZ1bmN0aW9uKHZhbHVlLCBrZXksIHBhdGgsIGhlbHBlcnMpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscGVycy5kZWZhdWx0VmlzaXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4uL2Vudi9kYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKCh0eXBlLCBpKSA9PiB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG5jb25zdCBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiAodmFsdWUsIG9wdCwgb3B0cykgPT4ge1xuICAgIGlmICh2YWxpZGF0b3IgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShvcHQsICcgaGFzIGJlZW4gcmVtb3ZlZCcgKyAodmVyc2lvbiA/ICcgaW4gJyArIHZlcnNpb24gOiAnJykpLFxuICAgICAgICBBeGlvc0Vycm9yLkVSUl9ERVBSRUNBVEVEXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtib29sZWFuP30gYWxsb3dVbmtub3duXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yc1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnID8gRm9ybURhdGEgOiBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyA/IFVSTFNlYXJjaFBhcmFtcyA6IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tICcuL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzJ1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vY2xhc3Nlcy9Gb3JtRGF0YS5qcydcbmltcG9ydCBCbG9iIGZyb20gJy4vY2xhc3Nlcy9CbG9iLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQnJvd3NlcjogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YSxcbiAgICBCbG9iXG4gIH0sXG4gIHByb3RvY29sczogWydodHRwJywgJ2h0dHBzJywgJ2ZpbGUnLCAnYmxvYicsICd1cmwnLCAnZGF0YSddXG59O1xuIiwiY29uc3QgaGFzQnJvd3NlckVudiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJFbnYgPSAoXG4gIChwcm9kdWN0KSA9PiB7XG4gICAgcmV0dXJuIGhhc0Jyb3dzZXJFbnYgJiYgWydSZWFjdE5hdGl2ZScsICdOYXRpdmVTY3JpcHQnLCAnTlMnXS5pbmRleE9mKHByb2R1Y3QpIDwgMFxuICB9KSh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIGhhc0Jyb3dzZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyRW52XG59XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi9ub2RlL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi51dGlscyxcbiAgLi4ucGxhdGZvcm1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGxldCBraW5kO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHwgKFxuICAgICAgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIChcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgICAgICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gICAgICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cbiAgc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGk7XG4gIGxldCBsO1xuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICBjb25zdCB7Y2FzZWxlc3N9ID0gaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzIHx8IHt9O1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsLCBrZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRLZXkgPSBjYXNlbGVzcyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSB8fCBrZXk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShyZXN1bHRbdGFyZ2V0S2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0sIHthbGxPd25LZXlzfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICB9KTtcbiAgcHJvcHMgJiYgT2JqZWN0LmFzc2lnbihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gdGhpbmcgPT4ge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRQcm90b3R5cGVPZihVaW50OEFycmF5KSk7XG5cbi8qKlxuICogRm9yIGVhY2ggZW50cnkgaW4gdGhlIG9iamVjdCwgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUga2V5IGFuZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBlbnRyeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gb2JqICYmIG9ialtTeW1ib2wuaXRlcmF0b3JdO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcblxuICBsZXQgcmVzdWx0O1xuXG4gIHdoaWxlICgocmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuLyogQ2hlY2tpbmcgaWYgdGhlIGtpbmRPZlRlc3QgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHdoZW4gcGFzc2VkIGFuIEhUTUxGb3JtRWxlbWVudC4gKi9cbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcblxuY29uc3QgdG9DYW1lbENhc2UgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcbiAgICBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gICAgfVxuICApO1xufTtcblxuLyogQ3JlYXRpbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHByb3BlcnR5LiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSAoKHtoYXNPd25Qcm9wZXJ0eX0pID0+IChvYmosIHByb3ApID0+IGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlZ0V4cCA9IGtpbmRPZlRlc3QoJ1JlZ0V4cCcpO1xuXG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcblxuICBmb3JFYWNoKGRlc2NyaXB0b3JzLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIGxldCByZXQ7XG4gICAgaWYgKChyZXQgPSByZWR1Y2VyKGRlc2NyaXB0b3IsIG5hbWUsIG9iaikpICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gcmV0IHx8IGRlc2NyaXB0b3I7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHJlZHVjZWREZXNjcmlwdG9ycyk7XG59XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IChvYmopID0+IHtcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIC8vIHNraXAgcmVzdHJpY3RlZCBwcm9wcyBpbiBzdHJpY3QgbW9kZVxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm47XG5cbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcblxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NhbiBub3QgcmV3cml0ZSByZWFkLW9ubHkgbWV0aG9kIFxcJycgKyBuYW1lICsgJ1xcJycpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCB0b09iamVjdFNldCA9IChhcnJheU9yU3RyaW5nLCBkZWxpbWl0ZXIpID0+IHtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgY29uc3QgZGVmaW5lID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHRvRmluaXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmNvbnN0IEFMUEhBID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuXG5jb25zdCBESUdJVCA9ICcwMTIzNDU2Nzg5JztcblxuY29uc3QgQUxQSEFCRVQgPSB7XG4gIERJR0lULFxuICBBTFBIQSxcbiAgQUxQSEFfRElHSVQ6IEFMUEhBICsgQUxQSEEudG9VcHBlckNhc2UoKSArIERJR0lUXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IHtsZW5ndGh9ID0gYWxwaGFiZXQ7XG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBzdHIgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGxlbmd0aHwwXVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdGhpbmcgaXMgYSBGb3JtRGF0YSBvYmplY3QsIHJldHVybiB0cnVlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gY2hlY2suXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3BlY0NvbXBsaWFudEZvcm0odGhpbmcpIHtcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl0pO1xufVxuXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IEFycmF5KDEwKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcblxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighKCd0b0pTT04nIGluIHNvdXJjZSkpIHtcbiAgICAgICAgc3RhY2tbaV0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcbiAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGFja1tpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdmlzaXQob2JqLCAwKTtcbn1cblxuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxuICB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24odGhpbmcpKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRoZW4pICYmIGlzRnVuY3Rpb24odGhpbmcuY2F0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlLFxuICBpc0ZpbGUsXG4gIGlzQmxvYixcbiAgaXNSZWdFeHAsXG4gIGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNUeXBlZEFycmF5LFxuICBpc0ZpbGVMaXN0LFxuICBmb3JFYWNoLFxuICBtZXJnZSxcbiAgZXh0ZW5kLFxuICB0cmltLFxuICBzdHJpcEJPTSxcbiAgaW5oZXJpdHMsXG4gIHRvRmxhdE9iamVjdCxcbiAga2luZE9mLFxuICBraW5kT2ZUZXN0LFxuICBlbmRzV2l0aCxcbiAgdG9BcnJheSxcbiAgZm9yRWFjaEVudHJ5LFxuICBtYXRjaEFsbCxcbiAgaXNIVE1MRm9ybSxcbiAgaGFzT3duUHJvcGVydHksXG4gIGhhc093blByb3A6IGhhc093blByb3BlcnR5LCAvLyBhbiBhbGlhcyB0byBhdm9pZCBFU0xpbnQgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIGRldGVjdGlvblxuICByZWR1Y2VEZXNjcmlwdG9ycyxcbiAgZnJlZXplTWV0aG9kcyxcbiAgdG9PYmplY3RTZXQsXG4gIHRvQ2FtZWxDYXNlLFxuICBub29wLFxuICB0b0Zpbml0ZU51bWJlcixcbiAgZmluZEtleSxcbiAgZ2xvYmFsOiBfZ2xvYmFsLFxuICBpc0NvbnRleHREZWZpbmVkLFxuICBBTFBIQUJFVCxcbiAgZ2VuZXJhdGVTdHJpbmcsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQHN0eWxlcy9kYXNoYm9hcmQuc2Nzcyc7XG5pbXBvcnQgJ0BzYWdlbW9kZW5pbmphL2ZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50JztcbmltcG9ydCAnQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudCc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25NYW5hZ2VyLCB1c2VOYXZpZ2F0aW9uLCB0b0N1cnJlbmN5IH0gZnJvbSAnQC9jbGFzc2VzJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnQC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDb250ZXh0TWVudU9wdGlvbiwgZ2xvYmFsQ29udGV4dCwgfSBmcm9tICdAL2NvbXBvbmVudHMnO1xuY2xhc3MgRGFzaGJvYXJkVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHVzZU5hdmlnYXRpb24oKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xheW91dF9ib2R5Jyk7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbW1hbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaF9jb21tYW5kJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGVfY2xvc2VkX2NvbW1hbmQnKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uX3BhbmVsJyk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkQWNjb3VudHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5jYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFuc2FjdGlvbl9jYXJkXCIpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYWN0aW9uLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYW5zYWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5lZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRvcl9kaWFsb2dcIik7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHRNZW51KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWNjb3VudHMoKTtcbiAgICB9XG4gICAgaW5pdENvbnRleHRNZW51KCkge1xuICAgICAgICB0aGlzLmNvbnRleHRNZW51ID0gZ2xvYmFsQ29udGV4dC5hZGRNZW51KCdhY2NvdW50c19jYXJkJywgdGhpcy5ib2R5KTtcbiAgICAgICAgLy8gQ29udGV4dCBtZW51IG9wdGlvbnMuLi5cbiAgICAgICAgY29uc3QgY2xvc2VPcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24oJ0Nsb3NlJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZU9wdGlvbiA9IG5ldyBDb250ZXh0TWVudU9wdGlvbignRGVsZXRlJyk7XG4gICAgICAgIGNsb3NlT3B0aW9uLnZpc2libGUoZCA9PiBkLlN0YXR1cyA9PT0gJ0FjdGl2ZScpO1xuICAgICAgICBkZWxldGVPcHRpb24udmlzaWJsZShkID0+IGQuU3RhdHVzID09PSAnQWN0aXZlJyk7XG4gICAgICAgIGNsb3NlT3B0aW9uLm9uQ2xpY2soYXN5bmMgKGFjY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybShgQ2xvc2UgYWNjb3VudCBcXFwiJHthY2N0LlRpdGxlfVxcXCI/YCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgQWNjb3VudFNlcnZpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBzZXJ2aWNlLmNsb3NlKGFjY3QuSWQpO1xuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocGF5bG9hZC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyFcbiAgICAgICAgICAgIC8vIHJlZnJlc2hDYXRlZ29yaWVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGVPcHRpb24ub25DbGljayhhc3luYyAoYWNjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKGBEZWxldGUgYWNjb3VudCBcXFwiJHthY2N0LlRpdGxlfVxcXCI/YCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgQWNjb3VudFNlcnZpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBzZXJ2aWNlLnJlbW92ZShhY2N0LklkKTtcbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHBheWxvYWQuY29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogRml4IHRoaXMhXG4gICAgICAgICAgICAvLyByZWZyZXNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudS5hZGRPcHRpb25zKGNsb3NlT3B0aW9uLCBkZWxldGVPcHRpb24pO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9hID0gdGhpcy5yZWZyZXNoQ29tbWFuZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWZyZXNoQWNjb3VudHMuYmluZCh0aGlzKSk7XG4gICAgICAgIChfYiA9IHRoaXMudG9nZ2xlQ29tbWFuZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZWZyZXNoQWNjb3VudHMoKSB7XG4gICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSAnPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+RmV0Y2hpbmcgQWNjb3VudHMuLi48L3A+JztcbiAgICAgICAgYXhpb3MuZ2V0KFwiYWNjb3VudC9jcnVkL3JlYWRfY2F0ZWdvcml6ZWQucGhwXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBhY2NvdW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGFjY291bnRzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjb250ZW50LnJlZHVjZSgoYXJyLCBhY2N0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUlkID0gYWNjdC5DYXRlZ29yeUlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyci5zb21lKGNhdCA9PiBjYXQuSWQgPT0gYWNjdC5DYXRlZ29yeUlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogYWNjdC5DYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvcjogYWNjdC5DYXRlZ29yeUNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3JpemVkID0gY29udGVudC5yZWR1Y2UoKG1hcCwgYWNjdCkgPT4geyB2YXIgX2E7IHJldHVybiBtYXAuc2V0KGFjY3QuQ2F0ZWdvcnlJZCwgWy4uLihfYSA9IG1hcC5nZXQoYWNjdC5DYXRlZ29yeUlkKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10sIGFjY3RdKTsgfSwgbmV3IE1hcCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hCYWxhbmNlcyhjYXRlZ29yaWVzLCBjYXRlZ29yaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiY2VudGVyZWRcIj5Pb3BzISAke2FjY291bnRzLmNvbnRlbnR9PC9wPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmcmVzaEJhbGFuY2VzKGNhdGVnb3JpZXMsIGNhdGVnb3JpemVkKSB7XG4gICAgICAgIGNhdGVnb3JpemVkLmZvckVhY2goKGFjY291bnRzLCBfY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gKF9hID0gY2F0ZWdvcmllcy5maW5kKGNhdCA9PiBjYXQuSWQgPT0gX2NhdGVnb3J5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgICAgICAgICBsZXQgY29sb3IgPSAoX2IgPSBjYXRlZ29yeSA9PT0gbnVsbCB8fCBjYXRlZ29yeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2F0ZWdvcnkuQ29sb3IpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiOUU5RTlFXCI7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAoX2MgPSBjYXRlZ29yeSA9PT0gbnVsbCB8fCBjYXRlZ29yeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2F0ZWdvcnkuVGl0bGUpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiVW5jYXRlZ29yaXplZFwiO1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZsdWVudC1zeW1ib2wtaWNvbicpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgICAgICAgICAgIGFjY291bnRzR3JpZC5jbGFzc0xpc3QuYWRkKCdhY2NvdW50cy1ncmlkJyk7XG4gICAgICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdzeW1ib2wnLCAnVGFnJyk7XG4gICAgICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdmb3JlZ3JvdW5kJywgYCMke2NvbG9yfWApO1xuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgJzEzJyk7XG4gICAgICAgICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoYWNjb3VudHNHcmlkKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwpO1xuICAgICAgICAgICAgYWNjb3VudHMuZm9yRWFjaChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5uZXdDYXJkKGFjY291bnQsIHRpdGxlKTtcbiAgICAgICAgICAgICAgICBhY2NvdW50c0dyaWQuYXBwZW5kKGNhcmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZXdDYXJkKGFjY291bnQsIGNhdGVnb3J5KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGxldCBhY2NvdW50TnVtYmVyID0gKF9iID0gKF9hID0gYWNjb3VudC5BY2NvdW50TnVtYmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2xpY2UoLTQpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIuKAouKAouKAouKAolwiO1xuICAgICAgICBsZXQgYmFua0ljb24gPSBhY2NvdW50LkJhbmtJY29uO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWNjb3VudC1jYXJkJyk7XG4gICAgICAgIGNvbnN0IHJ1bm5pbmdCYWxhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZC1iYWxhbmNlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RlZEJhbGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkLWJhbGFuY2UnKTtcbiAgICAgICAgY29uc3QgYWNjb3VudEJhbmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgICBwcm9qZWN0ZWRCYWxhbmNlLmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgICBhY2NvdW50QmFua0ljb24uY2xhc3NMaXN0LmFkZCgnYWNjb3VudC1iYW5rLWljb24nKTtcbiAgICAgICAgYWNjb3VudEJhbmtJY29uLnNsb3QgPSAnaWNvbic7XG4gICAgICAgIGNhcmQuYXBwZW5kKHJ1bm5pbmdCYWxhbmNlKTtcbiAgICAgICAgY2FyZC5hcHBlbmQocHJvamVjdGVkQmFsYW5jZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kKGFjY291bnRCYW5rSWNvbik7XG4gICAgICAgIGNhcmQudGl0bGUgPSBhY2NvdW50LlRpdGxlO1xuICAgICAgICBjYXJkLm51bWJlciA9IGFjY291bnROdW1iZXI7XG4gICAgICAgIGNhcmQuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgcnVubmluZ0JhbGFuY2UudGl0bGUgPSAnQWN0dWFsJztcbiAgICAgICAgcHJvamVjdGVkQmFsYW5jZS50aXRsZSA9ICdQcm9qZWN0aW9uJztcbiAgICAgICAgaWYgKGJhbmtJY29uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zcmMgPSBgYXNzZXRzL2ltYWdlcy9iYW5rX2ljb25zLyR7YmFua0ljb259LnN2Z2A7XG4gICAgICAgICAgICBpZiAoYmFua0ljb24gPT0gXCJtYXN0ZXJfY2FyZFwiKVxuICAgICAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJib3R0b206MTZweDtoZWlnaHQ6MzVweDtcIik7XG4gICAgICAgICAgICBpZiAoYmFua0ljb24gPT0gXCJ1YnBcIiB8fCBiYW5rSWNvbiA9PSBcImdjYXNoXCIpXG4gICAgICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvdHRvbToyMHB4O2hlaWdodDozMHB4O3JpZ2h0OjI1cHg7XCIpO1xuICAgICAgICAgICAgaWYgKGJhbmtJY29uID09IFwiY2ltYlwiKVxuICAgICAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJib3R0b206MjBweDtoZWlnaHQ6MjhweDtyaWdodDoyNXB4O1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb250ZXh0IG1lbnUuLi5cbiAgICAgICAgY2FyZC5hZGRDb250ZXh0KHRoaXMuY29udGV4dE1lbnUsIGFjY291bnQpO1xuICAgICAgICAvLyBWaXNpYmlsaXR5Li4uXG4gICAgICAgIGlmIChhY2NvdW50LlN0YXR1cyAhPT0gJ0FjdGl2ZScpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkQWNjb3VudHMucHVzaChjYXJkKTtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBheGlvcy5nZXQoYC9hY2NvdW50L2JhbGFuY2UucGhwP2FjY291bnRJZD0ke2FjY291bnQuSWR9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZXMgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcnVubmluZ0JhbGFuY2UuaW5uZXJUZXh0ID0gdG9DdXJyZW5jeShiYWxhbmNlcy5CYWxhbmNlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0ZWRCYWxhbmNlLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koYmFsYW5jZXMuUHJvamVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nQmFsYW5jZS5pbm5lclRleHQgPSAnISc7XG4gICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSAnISc7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihwYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25QYW5lbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmxvYWRBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuICAgIG9uVG9nZ2xlQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZC5pY29uID0gdGhpcy5pc1Nob3dDbG9zZWQgPyAnVmlldycgOiAnSGlkZSc7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZC5sYWJlbCA9IHRoaXMuaXNTaG93Q2xvc2VkID8gJ1Nob3cgQ2xvc2VkIEFjY291bnRzJyA6ICdIaWRlIENsb3NlZCBBY2NvdW50cyc7XG4gICAgICAgIHRoaXMuY2xvc2VkQWNjb3VudHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2hvd0Nsb3NlZClcbiAgICAgICAgICAgICAgICBjYXJkLmhpZGUoKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjYXJkLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTaG93Q2xvc2VkID0gIXRoaXMuaXNTaG93Q2xvc2VkO1xuICAgIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IG5ldyBEYXNoYm9hcmRWaWV3KCk7XG4gICAgdmlldy5yZWZyZXNoKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==