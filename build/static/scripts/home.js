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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsOENBQThDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUseUNBQXlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsdUNBQXVDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMENBQTBDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUseUJBQXlCLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0JBQXdCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsMkNBQTJDLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMENBQTBDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscURBQXFELEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMkNBQTJDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsOENBQThDLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsZ0RBQWdELEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsMkNBQTJDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsd0JBQXdCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscURBQXFELEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsNENBQTRDLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsNkNBQTZDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsNENBQTRDLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0RBQWtELEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsd0NBQXdDLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUsd0NBQXdDLEVBQUUsMkNBQTJDLEVBQUUsMkNBQTJDLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMENBQTBDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsK0NBQStDLEVBQUUsK0NBQStDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsZ0RBQWdELEVBQUUsOEJBQThCLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsMENBQTBDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaURBQWlELEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsaURBQWlELEVBQUUsK0NBQStDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsd0JBQXdCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUseUNBQXlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaURBQWlELEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsK0NBQStDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsb0RBQW9ELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUsNkRBQTZELEVBQUUsMkNBQTJDLEVBQUUsbURBQW1ELEVBQUUsbURBQW1ELEVBQUUsMkRBQTJELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsNENBQTRDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsK0NBQStDLEVBQUUsaURBQWlELEVBQUUsOENBQThDLEVBQUUsZ0NBQWdDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsK0NBQStDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsMkNBQTJDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk04QjtBQUNIO0FBQ0M7QUFDQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7QUNML0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNSVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdCO0FBQ2tCO0FBQ0g7QUFDWTtBQUNXO0FBQ3pEO0FBQ1A7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1Q0FBUTtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbURBQWU7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsUUFBUSw2Q0FBSyw4QkFBOEIsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUMsb0NBQW9DLDZDQUFVO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixRQUFRLDZDQUFLLCtCQUErQixjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFFBQVE7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCLE1BQU0sNkNBQVUseUJBQXlCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsWUFBWSxtRUFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFTO0FBQ25DLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQVM7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xWQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDbUY7QUFDbkYsNENBQTRDLDRFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMdkIsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ21GO0FBQ25GLDhDQUE4Qyw0RUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFeEIsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ21GO0FBQ25GLDRDQUE0Qyw0RUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0l2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0MscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUt3QjtBQUNDO0FBQ0Q7QUFDQTtBQUNQO0FBQ1M7QUFDTDtBQUNRO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjlCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ3FHO0FBQ3JHLGdEQUFnRCw0RUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUkseUVBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFRLEdBQUcsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZ6QixrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNxQztBQUN1QjtBQUM4QjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDLHNDQUFzQyw0RUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBSztBQUNULDhCQUE4QixxRUFBYTtBQUMzQztBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUNBO0FBQ29CO0FBQ3BCLGdEQUFnRCw0RUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk16QixrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUM0QztBQUN1QztBQUNyQztBQUM5QyxzREFBc0QsNEVBQWU7QUFDckU7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrREFBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQsdUJBQXVCLHVDQUF1QztBQUM5RDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFlO0FBQ25CO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLNUIsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ21GO0FBQ25GLDBDQUEwQyw0RUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBZTtBQUNuQjtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZjtBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTDtBQUNKO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDNDLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNzRDtBQUN0RCxrREFBa0Qsc0RBQVc7QUFDN0Q7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzFCLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNzRDtBQUN0RCxvREFBb0Qsc0RBQVc7QUFDL0Q7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENPO0FBQ0M7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkw7QUFDbkI7QUFDUDtBQUNBLDJCQUEyQiw2Q0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSxHQUFHLEtBQUs7QUFDbEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDc0Q7QUFDdEQsNENBQTRDLHNEQUFXO0FBQ3ZEO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFPO0FBQ1g7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENTO0FBQ0k7QUFDRjtBQUNhOztBQUUvQztBQUNBLFFBQVEsZ0RBQVc7QUFDbkIsT0FBTywrQ0FBVTtBQUNqQjs7QUFFQSxpREFBSztBQUNMO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQyxNQUFNO0FBQ047QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0EsQ0FBQzs7QUFFRCxzQ0FBc0MsT0FBTzs7QUFFN0Msc0NBQXNDLGlEQUFLOztBQUUzQyxpRUFBZTtBQUNmO0FBQ0EsZUFBZSxpREFBSzs7QUFFcEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDJEQUFVLHFCQUFxQixHQUFHO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsMkRBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFWTs7QUFFcUI7QUFDTztBQUNLO0FBQ0U7QUFDSztBQUNTO0FBQ0M7QUFDaEI7QUFDUTtBQUNDO0FBQ1o7QUFDTztBQUNDOztBQUVwRDtBQUNBO0FBQ0EsdUJBQXVCLG1FQUFXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVk7QUFDdkMsU0FBUyw2QkFBNkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLGlEQUFLO0FBQ2IsVUFBVSwwREFBUSwwQkFBMEIsMERBQVE7QUFDcEQsOENBQThDO0FBQzlDLFFBQVE7QUFDUjtBQUNBLG9FQUFvRTtBQUNwRSx5RkFBeUY7QUFDekY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGtFQUFhOztBQUVsQyw4Q0FBOEMsZ0VBQVE7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSwyREFBTTtBQUNaO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiwyREFBVSxvQkFBb0IsMkRBQVU7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBVSxrQkFBa0IsMkRBQVU7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUVBQW9CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBVTtBQUMzQjtBQUNBLDJDQUEyQywyREFBVSxhQUFhLDJEQUFVO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMERBQVE7QUFDZix1QkFBdUIsaURBQUs7O0FBRTVCLHVEQUF1RCx1RUFBZTtBQUN0RTtBQUNBLDRFQUE0RSw0REFBTzs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGlEQUFLO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxTQUFTLGlEQUFLO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpRUFBYTtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsc0VBQWE7O0FBRWxDLG9CQUFvQiwwREFBUTtBQUM1QixpQkFBaUIsMkRBQVUsMkNBQTJDLDJEQUFVO0FBQ2hGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblFZOztBQUVrQjtBQUNNO0FBQ0Q7QUFDWTtBQUNMO0FBQ2M7QUFDSDtBQUNKO0FBQ047QUFDTjtBQUNXO0FBQ0g7QUFDTDtBQUNZO0FBQ0g7QUFDSjtBQUNXOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNCQUFzQixzREFBSztBQUMzQixtQkFBbUIsNERBQUksQ0FBQyxzREFBSzs7QUFFN0I7QUFDQSxFQUFFLGlEQUFLLGtCQUFrQixzREFBSyxzQkFBc0IsaUJBQWlCOztBQUVyRTtBQUNBLEVBQUUsaURBQUssa0NBQWtDLGlCQUFpQjs7QUFFMUQ7QUFDQTtBQUNBLDBCQUEwQixnRUFBVztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDBEQUFROztBQUVyQztBQUNBLGNBQWMsc0RBQUs7O0FBRW5CO0FBQ0Esc0JBQXNCLGdFQUFhO0FBQ25DLG9CQUFvQiw4REFBVztBQUMvQixpQkFBaUIsMkRBQVE7QUFDekIsZ0JBQWdCLGlEQUFPO0FBQ3ZCLG1CQUFtQiw4REFBVTs7QUFFN0I7QUFDQSxtQkFBbUIsNERBQVU7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwyREFBTTs7QUFFckI7QUFDQSxxQkFBcUIsaUVBQVk7O0FBRWpDO0FBQ0Esb0JBQW9CLDREQUFXOztBQUUvQixxQkFBcUIsOERBQVk7O0FBRWpDLDRCQUE0Qix1RUFBYyxDQUFDLGlEQUFLOztBQUVoRCxtQkFBbUIsOERBQVE7O0FBRTNCLHVCQUF1QixtRUFBYzs7QUFFckM7O0FBRUE7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGUDs7QUFFa0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIseURBQWE7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhkOztBQUVrQztBQUNmOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFVLG9EQUFvRCwyREFBVTtBQUMxRTtBQUNBOztBQUVBLGlEQUFLLHlCQUF5QiwyREFBVTtBQUN4QztBQUNBLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJoQjs7QUFFRTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0phOztBQUVxQjtBQUNZO0FBQ1c7QUFDTjtBQUNSO0FBQ0k7QUFDQztBQUNIOztBQUU3QyxtQkFBbUIsNkRBQVM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFrQjtBQUNyQyxvQkFBb0IsOERBQWtCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLGFBQWEsMkRBQVc7O0FBRXhCLFdBQVcseUNBQXlDOztBQUVwRDtBQUNBLE1BQU0sNkRBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxVQUFVLGlEQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVEsNkRBQVM7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsaURBQUs7QUFDekM7QUFDQTtBQUNBOztBQUVBLGVBQWUsaURBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0RBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBZTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwyREFBZTtBQUMvQixNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSwyREFBVztBQUN4QixxQkFBcUIsNkRBQWE7QUFDbEMsV0FBVyxnRUFBUTtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsaURBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFXLGFBQWE7QUFDaEQ7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELGlEQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwyREFBVyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNUjs7QUFFbUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixDQUFDOztBQUVEO0FBQ0Esa0RBQWtELFlBQVk7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlEQUFLO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR2I7O0FBRW1CO0FBQ3NCOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxpREFBSztBQUNkOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTSxpREFBSztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU8saURBQUs7O0FBRVosTUFBTSxpREFBSztBQUNYO0FBQ0E7O0FBRUEsTUFBTSxpREFBSztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVCQUF1QixpREFBSzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlEQUFLOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0saURBQUs7O0FBRVgsUUFBUSxpREFBSztBQUNiO0FBQ0EsTUFBTSxRQUFRLGlEQUFLO0FBQ25CLGlCQUFpQixvRUFBWTtBQUM3QixNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQUs7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7O0FBRUEsWUFBWSxpREFBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQUs7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpREFBSzs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGlEQUFLO0FBQ2I7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQUs7QUFDVCxrQkFBa0IsaURBQUs7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksaURBQUs7QUFDVCxzRUFBc0UsaURBQUs7QUFDM0UsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlEQUFLOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlEQUFLLDZDQUE2QyxNQUFNO0FBQ3hELG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlEQUFLOztBQUVMLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6U2Y7O0FBRXFCOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsSUFBSSxpREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXJCOztBQUUyQztBQUNKOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNlO0FBQ2Ysa0JBQWtCLHFFQUFhO0FBQy9CLFdBQVcsbUVBQVc7QUFDdEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUVrQztBQUNGO0FBQ0Q7QUFDVztBQUNKO0FBQ0o7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxnRUFBYTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNlO0FBQ2Y7O0FBRUEsbUJBQW1CLDZEQUFZOztBQUUvQjtBQUNBLGdCQUFnQix5REFBYTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw2REFBUSw4QkFBOEIsMERBQVE7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseURBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDZEQUFZOztBQUVuQztBQUNBLEdBQUc7QUFDSCxTQUFTLCtEQUFRO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IseURBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkRBQVk7QUFDOUM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZhOztBQUVtQjtBQUNhOztBQUU3QyxvREFBb0Qsd0RBQVk7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBSywwQkFBMEIsaURBQUs7QUFDNUMsYUFBYSxpREFBSyxhQUFhLFNBQVM7QUFDeEMsTUFBTSxTQUFTLGlEQUFLO0FBQ3BCLGFBQWEsaURBQUssU0FBUztBQUMzQixNQUFNLFNBQVMsaURBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsaURBQUs7QUFDZDtBQUNBLE1BQU0sVUFBVSxpREFBSztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsaURBQUs7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsaURBQUs7QUFDZDtBQUNBLE1BQU0sVUFBVSxpREFBSztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaURBQUsscUNBQXFDO0FBQzVDO0FBQ0E7QUFDQSxLQUFLLGlEQUFLO0FBQ1YsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHYTs7QUFFNEI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZUFBZSxzREFBVTtBQUN6QjtBQUNBLE9BQU8sc0RBQVUsa0JBQWtCLHNEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCYTs7QUFFcUI7QUFDVTtBQUNPOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLEdBQUc7QUFDaEI7QUFDZTtBQUNmLHlCQUF5QiwwREFBUTtBQUNqQztBQUNBLGtCQUFrQiw2REFBWTtBQUM5Qjs7QUFFQSxFQUFFLGlEQUFLO0FBQ1A7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JhOztBQUVtQjtBQUNlO0FBQ007QUFDSDtBQUNZO0FBQ2xCO0FBQ2M7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLE1BQU0saURBQUs7QUFDWDtBQUNBO0FBQ0EsYUFBYSxpREFBSztBQUNsQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQix3REFBb0I7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBSzs7QUFFakMsMkJBQTJCLGlEQUFLO0FBQ2hDO0FBQ0E7O0FBRUEsdUJBQXVCLGlEQUFLOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxzRUFBYztBQUMvRDs7QUFFQSxRQUFRLGlEQUFLO0FBQ2IsTUFBTSxpREFBSztBQUNYLE1BQU0saURBQUs7QUFDWCxNQUFNLGlEQUFLO0FBQ1gsTUFBTSxpREFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQUs7QUFDYjtBQUNBO0FBQ0EsUUFBUSxpREFBSztBQUNiLGdFQUFnRTtBQUNoRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHdFQUFnQjtBQUMvQjs7QUFFQSx3QkFBd0IsaURBQUs7QUFDN0I7O0FBRUEsZUFBZSxrRUFBVTtBQUN6Qix3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpREFBSztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGtCQUFrQiwyREFBVSxTQUFTLDJEQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywwREFBUTtBQUN0QixVQUFVLDBEQUFRO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUpYOztBQUViLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTks7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTTs7QUFFNEI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLDBEQUFVO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVqQjs7QUFFRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFbUI7QUFDc0M7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSix1QkFBdUIsaURBQUs7QUFDNUI7QUFDQSxVQUFVLHdFQUFvQjtBQUM5Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGtDO0FBQ1U7O0FBRTVDLGlFQUFlLDBEQUFROztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlEQUFLOztBQUVYLE1BQU0saURBQUs7O0FBRVgsTUFBTSxpREFBSzs7QUFFWDs7QUFFQSx1Q0FBdUM7QUFDdkMsS0FBSzs7QUFFTDtBQUNBLDBEQUEwRCx3QkFBd0I7QUFDbEY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENTOztBQUVtQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlEQUFLO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBSzs7QUFFekI7QUFDQSxVQUFVLGlEQUFLO0FBQ2Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixpREFBSztBQUMvQjtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixpREFBSztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxpREFBSyx5QkFBeUIsaURBQUs7QUFDekM7O0FBRUEsSUFBSSxpREFBSztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZqQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGE7O0FBRXFCOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNlO0FBQ2YsU0FBUyxpREFBSztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFcUI7QUFDVTs7QUFFNUMsaUVBQWUsMERBQVE7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVA7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7O0FBRXFCOztBQUVsQztBQUNBO0FBQ0EsMEJBQTBCLGlEQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REVzs7QUFFRTtBQUNmLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMYTs7QUFFYjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERkOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmE7O0FBRW1CO0FBQ2U7QUFDL0M7QUFDb0U7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUyxpREFBSyx5QkFBeUIsaURBQUs7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTLGlEQUFLO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTLGlEQUFLO0FBQ2Q7O0FBRUEsbUJBQW1CLGlEQUFLLGNBQWMsaURBQUssSUFBSTtBQUMvQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saURBQUs7QUFDWjtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDBFQUFnQjs7QUFFOUM7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFlBQVksaURBQUs7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQUs7O0FBRWhDLE9BQU8saURBQUs7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSxpREFBSztBQUNiO0FBQ0E7O0FBRUEsb0JBQW9CLGlEQUFLO0FBQ3pCLGdCQUFnQiwyREFBVTtBQUMxQjs7QUFFQSxRQUFRLGlEQUFLLHlCQUF5QixpREFBSztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsZUFBZTtBQUM1QixhQUFhLHNCQUFzQjtBQUNuQyxZQUFZO0FBQ1o7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxpREFBSyxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsU0FBUyxpREFBSztBQUNkLFVBQVUsaURBQUssc0JBQXNCLGlEQUFLLGdDQUFnQyxpREFBSztBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxRQUFRLGlEQUFLOztBQUViO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLGlEQUFLO0FBQ1QsdUJBQXVCLGlEQUFLO0FBQzVCLHNCQUFzQixpREFBSztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsT0FBTyxpREFBSztBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTmI7O0FBRW1CO0FBQ1M7QUFDRzs7QUFFN0I7QUFDZixTQUFTLDBEQUFVLFdBQVcsMERBQVE7QUFDdEM7QUFDQSxVQUFVLDBEQUFRLFdBQVcsaURBQUs7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFMEI7QUFDUTs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQU87QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFVO0FBQzFCO0FBQ0EsUUFBUSwyREFBVTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsY0FBYywyREFBVSw4QkFBOEIsMkRBQVU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQVUseUNBQXlDLDJEQUFVO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFVLDBCQUEwQiwyREFBVTtBQUM5RDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZVOztBQUVaLGlFQUFlLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ0YzQzs7QUFFYixpRUFBZSxpREFBaUQsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcEQ7O0FBRStEO0FBQzVFLGlFQUFlLDJEQUEyRCx3RUFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQztBQUNkO0FBQ1I7O0FBRXBDLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osUUFBUTtBQUNSLEdBQUc7QUFDSDtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDc0M7QUFDSTs7QUFFM0MsaUVBQWU7QUFDZixLQUFLLDZDQUFLO0FBQ1YsS0FBSyxzREFBUTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlk7O0FBRXdCOztBQUVyQzs7QUFFQSxPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsT0FBTyxTQUFTOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQvZGlzdC9jdXN0b20tY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudC9kaXN0L2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudC9kaXN0L2ZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zdHlsZXMvZGFzaGJvYXJkLnNjc3M/YTQ2ZSIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy9hbHBoYS1ibGVuZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy9jdXJyZW5jeS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy9kYXRlLXRpbWUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy9yZXNwb25zZS1wYXlsb2FkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jbGFzc2VzL3RyYW5zYWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3VudC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2FjdGlvbi1idXR0b24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1iYWxhbmNlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRleHQtbWVudS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tb2RhbC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wYWdlLWluZGljYXRvci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zbmFwLXZpZXcudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tcGFuZWwudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd2FsbGV0LWNhcmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2VudW1zL2VudGl0eS1zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2VudW1zL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy9vcGVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2VudW1zL3RyYW5zYWN0aW9uLXR5cGUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2FjY291bnQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvc2VydmljZXMvY2F0ZWdvcnktc2VydmljZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NlcnZpY2UtYmFzZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvc2VydmljZXMvdXNlci1zZXJ2aWNlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NIZWFkZXJzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcGVlZG9tZXRlci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9CbG9iLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2luZGV4LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvYXBwL2hvbWUvdmlldy5waHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEZvciBsaWNlbnNlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgY3VzdG9tLWNvbXBvbmVudC5qcy5MSUNFTlNFLnR4dCAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DdXN0b21Db21wb25lbnQ9ZSgpOnQuQ3VzdG9tQ29tcG9uZW50PWUoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciB0PXs2NjA6KHQsZSxyKT0+e3ZhciBuOyFmdW5jdGlvbih0KXshZnVuY3Rpb24oZSl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHIuZz9yLmc6XCJvYmplY3RcIj09dHlwZW9mIHNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgdGhpcz90aGlzOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCksbz1pKHQpO2Z1bmN0aW9uIGkodCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W3JdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pLGUmJmUocixuKX19dm9pZCAwPT09bi5SZWZsZWN0P24uUmVmbGVjdD10Om89aShuLlJlZmxlY3QsbyksZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCxuPXImJnZvaWQgMCE9PVN5bWJvbC50b1ByaW1pdGl2ZT9TeW1ib2wudG9QcmltaXRpdmU6XCJAQHRvUHJpbWl0aXZlXCIsbz1yJiZ2b2lkIDAhPT1TeW1ib2wuaXRlcmF0b3I/U3ltYm9sLml0ZXJhdG9yOlwiQEBpdGVyYXRvclwiLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmNyZWF0ZSx1PXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxhPSFpJiYhdSxzPXtjcmVhdGU6aT9mdW5jdGlvbigpe3JldHVybiBIKE9iamVjdC5jcmVhdGUobnVsbCkpfTp1P2Z1bmN0aW9uKCl7cmV0dXJuIEgoe19fcHJvdG9fXzpudWxsfSl9OmZ1bmN0aW9uKCl7cmV0dXJuIEgoe30pfSxoYXM6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKX06ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSBpbiB0fSxnZXQ6YT9mdW5jdGlvbih0LHIpe3JldHVybiBlLmNhbGwodCxyKT90W3JdOnZvaWQgMH06ZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXX19LGM9T2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzJiZwcm9jZXNzLmVudiYmXCJ0cnVlXCI9PT1wcm9jZXNzLmVudi5SRUZMRUNUX01FVEFEQVRBX1VTRV9NQVBfUE9MWUZJTEwsaD1mfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXB8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcz9mdW5jdGlvbigpe3ZhciB0PXt9LGU9W10scj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3RoaXMuX2luZGV4PTAsdGhpcy5fa2V5cz10LHRoaXMuX3ZhbHVlcz1lLHRoaXMuX3NlbGVjdG9yPXJ9cmV0dXJuIHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5faW5kZXg7aWYodD49MCYmdDx0aGlzLl9rZXlzLmxlbmd0aCl7dmFyIHI9dGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1t0XSx0aGlzLl92YWx1ZXNbdF0pO3JldHVybiB0KzE+PXRoaXMuX2tleXMubGVuZ3RoPyh0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpOnRoaXMuX2luZGV4Kysse3ZhbHVlOnIsZG9uZTohMX19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX0sdC5wcm90b3R5cGUudGhyb3c9ZnVuY3Rpb24odCl7dGhyb3cgdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHR9LHQucHJvdG90eXBlLnJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5faW5kZXg+PTAmJih0aGlzLl9pbmRleD0tMSx0aGlzLl9rZXlzPWUsdGhpcy5fdmFsdWVzPWUpLHt2YWx1ZTp0LGRvbmU6ITB9fSx0fSgpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLl9rZXlzPVtdLHRoaXMuX3ZhbHVlcz1bXSx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2tleXMubGVuZ3RofSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fZmluZCh0LCExKT49MH0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2ZpbmQodCwhMSk7cmV0dXJuIGU+PTA/dGhpcy5fdmFsdWVzW2VdOnZvaWQgMH0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fZmluZCh0LCEwKTtyZXR1cm4gdGhpcy5fdmFsdWVzW3JdPWUsdGhpc30sZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciByPXRoaXMuX2ZpbmQoZSwhMSk7aWYocj49MCl7Zm9yKHZhciBuPXRoaXMuX2tleXMubGVuZ3RoLG89cisxO288bjtvKyspdGhpcy5fa2V5c1tvLTFdPXRoaXMuX2tleXNbb10sdGhpcy5fdmFsdWVzW28tMV09dGhpcy5fdmFsdWVzW29dO3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aC0tLHRoaXMuX3ZhbHVlcy5sZW5ndGgtLSxlPT09dGhpcy5fY2FjaGVLZXkmJih0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTIpLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX2tleXMubGVuZ3RoPTAsdGhpcy5fdmFsdWVzLmxlbmd0aD0wLHRoaXMuX2NhY2hlS2V5PXQsdGhpcy5fY2FjaGVJbmRleD0tMn0sZS5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxuKX0sZS5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLGkpfSxlLnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzLHUpfSxlLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LGUucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZS5fZmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9jYWNoZUtleSE9PXQmJih0aGlzLl9jYWNoZUluZGV4PXRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleT10KSksdGhpcy5fY2FjaGVJbmRleDwwJiZlJiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmxlbmd0aCx0aGlzLl9rZXlzLnB1c2godCksdGhpcy5fdmFsdWVzLnB1c2godm9pZCAwKSksdGhpcy5fY2FjaGVJbmRleH0sZX0oKTtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBlfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm5bdCxlXX19KCk6TWFwLHA9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fbWFwPW5ldyBofXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuc2l6ZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5oYXModCl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLnNldCh0LHQpLHRoaXN9LHQucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh0KX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9tYXAuY2xlYXIoKX0sdC5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAua2V5cygpfSx0LnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpfSx0LnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCl9LHQucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtleXMoKX0sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHR9KCk6U2V0LGw9bmV3KGZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdlYWtNYXA/ZnVuY3Rpb24oKXt2YXIgdD0xNixyPXMuY3JlYXRlKCksbj1vKCk7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX2tleT1vKCl9cmV0dXJuIHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lJiZzLmhhcyhlLHRoaXMuX2tleSl9LHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT1pKHQsITEpO3JldHVybiB2b2lkIDAhPT1lP3MuZ2V0KGUsdGhpcy5fa2V5KTp2b2lkIDB9LHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiBpKHQsITApW3RoaXMuX2tleV09ZSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmZGVsZXRlIGVbdGhpcy5fa2V5XX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXk9bygpfSx0fSgpO2Z1bmN0aW9uIG8oKXt2YXIgdDtkb3t0PVwiQEBXZWFrTWFwQEBcIithKCl9d2hpbGUocy5oYXMocix0KSk7cmV0dXJuIHJbdF09ITAsdH1mdW5jdGlvbiBpKHQscil7aWYoIWUuY2FsbCh0LG4pKXtpZighcilyZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6cy5jcmVhdGUoKX0pfXJldHVybiB0W25dfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIHI9MDtyPGU7KytyKXRbcl09MjU1Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4gdH1mdW5jdGlvbiBhKCl7dmFyIGUscj0oZT10LFwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4QXJyYXk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNyeXB0bz9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbXNDcnlwdG8/bXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGUpKTp1KG5ldyBVaW50OEFycmF5KGUpLGUpOnUobmV3IEFycmF5KGUpLGUpKTtyWzZdPTc5JnJbNl18NjQscls4XT0xOTEmcls4XXwxMjg7Zm9yKHZhciBuPVwiXCIsbz0wO288dDsrK28pe3ZhciBpPXJbb107NCE9PW8mJjYhPT1vJiY4IT09b3x8KG4rPVwiLVwiKSxpPDE2JiYobis9XCIwXCIpLG4rPWkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCl9cmV0dXJuIG59fSgpOldlYWtNYXApO2Z1bmN0aW9uIHkodCxlLHIpe3ZhciBuPWwuZ2V0KHQpO2lmKGoobikpe2lmKCFyKXJldHVybjtuPW5ldyBoLGwuc2V0KHQsbil9dmFyIG89bi5nZXQoZSk7aWYoaihvKSl7aWYoIXIpcmV0dXJuO289bmV3IGgsbi5zZXQoZSxvKX1yZXR1cm4gb31mdW5jdGlvbiBkKHQsZSxyKXtpZih2KHQsZSxyKSlyZXR1cm4hMDt2YXIgbj1JKGUpO3JldHVybiFUKG4pJiZkKHQsbixyKX1mdW5jdGlvbiB2KHQsZSxyKXt2YXIgbj15KGUsciwhMSk7cmV0dXJuIWoobikmJiEhbi5oYXModCl9ZnVuY3Rpb24gXyh0LGUscil7aWYodih0LGUscikpcmV0dXJuIGcodCxlLHIpO3ZhciBuPUkoZSk7cmV0dXJuIFQobik/dm9pZCAwOl8odCxuLHIpfWZ1bmN0aW9uIGcodCxlLHIpe3ZhciBuPXkoZSxyLCExKTtpZighaihuKSlyZXR1cm4gbi5nZXQodCl9ZnVuY3Rpb24gdyh0LGUscixuKXt5KHIsbiwhMCkuc2V0KHQsZSl9ZnVuY3Rpb24gYih0LGUpe3ZhciByPW0odCxlKSxuPUkodCk7aWYobnVsbD09PW4pcmV0dXJuIHI7dmFyIG89YihuLGUpO2lmKG8ubGVuZ3RoPD0wKXJldHVybiByO2lmKHIubGVuZ3RoPD0wKXJldHVybiBvO2Zvcih2YXIgaT1uZXcgcCx1PVtdLGE9MCxzPXI7YTxzLmxlbmd0aDthKyspe3ZhciBjPXNbYV07aS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpfWZvcih2YXIgZj0wLGg9bztmPGgubGVuZ3RoO2YrKyljPWhbZl0saS5oYXMoYyl8fChpLmFkZChjKSx1LnB1c2goYykpO3JldHVybiB1fWZ1bmN0aW9uIG0odCxlKXt2YXIgcj1bXSxuPXkodCxlLCExKTtpZihqKG4pKXJldHVybiByO2Zvcih2YXIgaT1mdW5jdGlvbih0KXt2YXIgZT1DKHQsbyk7aWYoIXgoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgcj1lLmNhbGwodCk7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn0obi5rZXlzKCkpLHU9MDs7KXt2YXIgYT1BKGkpO2lmKCFhKXJldHVybiByLmxlbmd0aD11LHI7dmFyIHM9YS52YWx1ZTt0cnl7clt1XT1zfWNhdGNoKHQpe3RyeXtSKGkpfWZpbmFsbHl7dGhyb3cgdH19dSsrfX1mdW5jdGlvbiBPKHQpe2lmKG51bGw9PT10KXJldHVybiAxO3N3aXRjaCh0eXBlb2YgdCl7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuIDA7Y2FzZVwiYm9vbGVhblwiOnJldHVybiAyO2Nhc2VcInN0cmluZ1wiOnJldHVybiAzO2Nhc2VcInN5bWJvbFwiOnJldHVybiA0O2Nhc2VcIm51bWJlclwiOnJldHVybiA1O2Nhc2VcIm9iamVjdFwiOnJldHVybiBudWxsPT09dD8xOjY7ZGVmYXVsdDpyZXR1cm4gNn19ZnVuY3Rpb24gaih0KXtyZXR1cm4gdm9pZCAwPT09dH1mdW5jdGlvbiBUKHQpe3JldHVybiBudWxsPT09dH1mdW5jdGlvbiBrKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gRSh0LGUpe3N3aXRjaChPKHQpKXtjYXNlIDA6Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gdH12YXIgcj0zPT09ZT9cInN0cmluZ1wiOjU9PT1lP1wibnVtYmVyXCI6XCJkZWZhdWx0XCIsbz1DKHQsbik7aWYodm9pZCAwIT09byl7dmFyIGk9by5jYWxsKHQscik7aWYoayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBpfXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwic3RyaW5nXCI9PT1lKXt2YXIgcj10LnRvU3RyaW5nO2lmKHgocikmJiFrKG89ci5jYWxsKHQpKSlyZXR1cm4gbztpZih4KG49dC52YWx1ZU9mKSYmIWsobz1uLmNhbGwodCkpKXJldHVybiBvfWVsc2V7dmFyIG47aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt2YXIgbyxpPXQudG9TdHJpbmc7aWYoeChpKSYmIWsobz1pLmNhbGwodCkpKXJldHVybiBvfXRocm93IG5ldyBUeXBlRXJyb3J9KHQsXCJkZWZhdWx0XCI9PT1yP1wibnVtYmVyXCI6cil9ZnVuY3Rpb24gUyh0KXt2YXIgZT1FKHQsMyk7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiK3R9KGUpfWZ1bmN0aW9uIE0odCl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheSh0KTp0IGluc3RhbmNlb2YgT2JqZWN0P3QgaW5zdGFuY2VvZiBBcnJheTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24geCh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIFAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBDKHQsZSl7dmFyIHI9dFtlXTtpZihudWxsIT1yKXtpZigheChyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiByfX1mdW5jdGlvbiBBKHQpe3ZhciBlPXQubmV4dCgpO3JldHVybiFlLmRvbmUmJmV9ZnVuY3Rpb24gUih0KXt2YXIgZT10LnJldHVybjtlJiZlLmNhbGwodCl9ZnVuY3Rpb24gSSh0KXt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dD09PWMpcmV0dXJuIGU7aWYoZSE9PWMpcmV0dXJuIGU7dmFyIHI9dC5wcm90b3R5cGUsbj1yJiZPYmplY3QuZ2V0UHJvdG90eXBlT2Yocik7aWYobnVsbD09bnx8bj09PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuIGU7dmFyIG89bi5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBvfHxvPT09dD9lOm99ZnVuY3Rpb24gSCh0KXtyZXR1cm4gdC5fXz12b2lkIDAsZGVsZXRlIHQuX18sdH10KFwiZGVjb3JhdGVcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoaihyKSl7aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighUChlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBmdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aC0xO3I+PTA7LS1yKXt2YXIgbj0oMCx0W3JdKShlKTtpZighaihuKSYmIVQobikpe2lmKCFQKG4pKXRocm93IG5ldyBUeXBlRXJyb3I7ZT1ufX1yZXR1cm4gZX0odCxlKX1pZighTSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWsobikmJiFqKG4pJiYhVChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBUKG4pJiYobj12b2lkIDApLGZ1bmN0aW9uKHQsZSxyLG4pe2Zvcih2YXIgbz10Lmxlbmd0aC0xO28+PTA7LS1vKXt2YXIgaT0oMCx0W29dKShlLHIsbik7aWYoIWooaSkmJiFUKGkpKXtpZighayhpKSl0aHJvdyBuZXcgVHlwZUVycm9yO249aX19cmV0dXJuIG59KHQsZSxyPVMociksbil9KSksdChcIm1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighaihuKSYmIWZ1bmN0aW9uKHQpe3N3aXRjaChPKHQpKXtjYXNlIDM6Y2FzZSA0OnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fShuKSl0aHJvdyBuZXcgVHlwZUVycm9yO3codCxlLHIsbil9fSkpLHQoXCJkZWZpbmVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscixuKXtpZighayhyKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKG4pfHwobj1TKG4pKSx3KHQsZSxyLG4pfSkpLHQoXCJoYXNNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZCh0LGUscil9KSksdChcImhhc093bk1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSx2KHQsZSxyKX0pKSx0KFwiZ2V0TWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLF8odCxlLHIpfSkpLHQoXCJnZXRPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksZyh0LGUscil9KSksdChcImdldE1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLGIodCxlKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsKGZ1bmN0aW9uKHQsZSl7aWYoIWsodCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihlKXx8KGU9UyhlKSksbSh0LGUpfSkpLHQoXCJkZWxldGVNZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtqKHIpfHwocj1TKHIpKTt2YXIgbj15KGUsciwhMSk7aWYoaihuKSlyZXR1cm4hMTtpZighbi5kZWxldGUodCkpcmV0dXJuITE7aWYobi5zaXplPjApcmV0dXJuITA7dmFyIG89bC5nZXQoZSk7cmV0dXJuIG8uZGVsZXRlKHIpLG8uc2l6ZT4wfHxsLmRlbGV0ZShlKSwhMH0pKX0obyl9KCl9KG58fChuPXt9KSl9fSxlPXt9O2Z1bmN0aW9uIHIobil7dmFyIG89ZVtuXTtpZih2b2lkIDAhPT1vKXJldHVybiBvLmV4cG9ydHM7dmFyIGk9ZVtuXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbbl0oaSxpLmV4cG9ydHMsciksaS5leHBvcnRzfXIuZD0odCxlKT0+e2Zvcih2YXIgbiBpbiBlKXIubyhlLG4pJiYhci5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OmVbbl19KX0sci5nPWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbFRoaXMpcmV0dXJuIGdsb2JhbFRoaXM7dHJ5e3JldHVybiB0aGlzfHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvd319KCksci5vPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyLnI9dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBuPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodCxlKX19ci5yKG4pLHIuZChuLHtDdXN0b21Db21wb25lbnQ6KCk9PmMsT0JTRVJWRURfUFJPUEVSVElFUzooKT0+aSxjdXN0b21Db21wb25lbnQ6KCk9PnQscHJvcGVydHk6KCk9PnUscXVlcnk6KCk9PnMsc3RhdGU6KCk9PmF9KSxyKDY2MCk7Y29uc3QgZT1uZXcgY2xhc3N7ZnJvbSh0LGUpe2lmKHQpc3dpdGNoKGUubmFtZSl7Y2FzZVwiU3RyaW5nXCI6Y2FzZVwiTnVtYmVyXCI6cmV0dXJuIGUodCk7Y2FzZVwiQm9vbGVhblwiOnJldHVybiB0JiZcInRydWVcIj09PXQudG9Mb3dlckNhc2UoKTtkZWZhdWx0OnJldHVybiBKU09OLnBhcnNlKHQpfX10byh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD90JiZKU09OLnN0cmluZ2lmeSh0KTp0LnRvU3RyaW5nKCl9fTtjbGFzcyBve31jb25zdCBpPVN5bWJvbChcIm9ic2VydmVkX3Byb3BlcnRpZXNcIik7ZnVuY3Rpb24gdSh0KXtyZXR1cm4gbnVsbCE9dHx8KHQ9bmV3IG8pLGZ1bmN0aW9uKHIsbil7dmFyIG8sdSxhLHM7Y29uc3QgYz1gXyR7bn1gLGY9bnVsbCE9PShvPXQuY29udmVydGVyKSYmdm9pZCAwIT09bz9vOmU7aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsbix7Z2V0OmZ1bmN0aW9uKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pLGU9Zi5mcm9tKHRoaXNbY10sdCk7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/ZnVuY3Rpb24odCxlLHIpe3JldHVybiBuZXcgUHJveHkocix7c2V0OihyLG4sbyk9PihyW25dPW8sQXJyYXkuaXNBcnJheShvKSYmXCJsZW5ndGhcIiE9PW58fHQubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKGUsbyksITApfSl9KHRoaXMsbixlKTplfSxzZXQ6ZnVuY3Rpb24odCl7Y29uc3QgZT10aGlzW25dO2lmKHQhPT1lKXtjb25zdCByPVJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLHRoaXMsbik7dGhpc1tjXT1mLnRvKHQsciksdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixlKX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksbnVsbD09PSh1PXQuYXR0cmlidXRlKXx8dm9pZCAwPT09dXx8dSl7Y29uc3QgZT1yLmNvbnN0cnVjdG9yLG89bnVsbCE9PShhPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSxlKSkmJnZvaWQgMCE9PWE/YTp7fSx1PW51bGwhPT0ocz10LmF0dHJpYnV0ZSkmJnZvaWQgMCE9PXM/czpuLGM9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG8pLHtbdS50b1N0cmluZygpXTpufSk7UmVmbGVjdC5kZWZpbmVNZXRhZGF0YShpLGMsZSl9fX1mdW5jdGlvbiBhKHQpe3JldHVybiB1KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7YXR0cmlidXRlOiExfSkpfWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHQpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX1jbGFzcyBjIGV4dGVuZHMgSFRNTEVsZW1lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtjb25zdCB0PVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzKTtyZXR1cm4gdD9PYmplY3Qua2V5cyh0KTpbXX1jb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fY2hhbmdlcz1uZXcgTWFwO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxlLHIpe2NvbnN0IG49UmVmbGVjdC5nZXRNZXRhZGF0YShpLHRoaXMuY29uc3RydWN0b3IpW3RdLG89dGhpc1tuXTt0aGlzW2BfJHtufWBdPXIsdGhpcy5ub3RpZnlTdGF0ZUhhc0NoYW5nZWQobixvKX1zdGF0ZUhhc0NoYW5nZWQodCl7fXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIGMuX3RlbXBsYXRlcz9jLl90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gci5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1uLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCxjLl90ZW1wbGF0ZXNbdF09cixyfW5vdGlmeVN0YXRlSGFzQ2hhbmdlZCh0LGUpe2NsZWFyVGltZW91dCh0aGlzLl9jaGFuZ2VEZWJvdW5jZSksdGhpcy5fY2hhbmdlRGVib3VuY2U9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnN0YXRlSGFzQ2hhbmdlZCh0aGlzLl9jaGFuZ2VzKSx0aGlzLl9jaGFuZ2VzLmNsZWFyKCl9KSw1MCksdGhpcy5fY2hhbmdlcy5zZXQodCxlKX19Yy5fdGVtcGxhdGVzPXt9fSkoKSxufSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZsdWVudENvbW1hbmRCYXI9ZSgpOnQuRmx1ZW50Q29tbWFuZEJhcj1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17MjY5OnQ9Pnt2YXIgZTtzZWxmLGU9KCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciB0PXtkOihlLG4pPT57Zm9yKHZhciBvIGluIG4pdC5vKG4sbykmJiF0Lm8oZSxvKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbyx7ZW51bWVyYWJsZTohMCxnZXQ6bltvXX0pfSxvOih0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyOnQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sZT17fTtmdW5jdGlvbiBuKHQpe3JldHVybiBmdW5jdGlvbihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXQucihlKSx0LmQoZSx7Q3VzdG9tQ29tcG9uZW50OigpPT5vLGN1c3RvbUNvbXBvbmVudDooKT0+bn0pO2NsYXNzIG8gZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCk7Y29uc3QgdD10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHQuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgdD10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIHQgaW4gby5fdGVtcGxhdGVzP28uX3RlbXBsYXRlc1t0XTp0aGlzLmNyZWF0ZVRlbXBsYXRlKHQpfWNyZWF0ZVRlbXBsYXRlKHQpe3ZhciBlO2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGk9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBuLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShlPWkuc3R5bGVzKSYmdm9pZCAwIT09ZT9lOlwiXCJ9PC9zdHlsZT5gLG8uX3RlbXBsYXRlc1t0XT1uLG59Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfX1yZXR1cm4gby5fdGVtcGxhdGVzPXt9LGV9KSgpLHQuZXhwb3J0cz1lKCl9LDQ0MToodCxlLG4pPT57dmFyIG87IWZ1bmN0aW9uKGkscixzKXtpZihpKXtmb3IodmFyIGEsbD17ODpcImJhY2tzcGFjZVwiLDk6XCJ0YWJcIiwxMzpcImVudGVyXCIsMTY6XCJzaGlmdFwiLDE3OlwiY3RybFwiLDE4OlwiYWx0XCIsMjA6XCJjYXBzbG9ja1wiLDI3OlwiZXNjXCIsMzI6XCJzcGFjZVwiLDMzOlwicGFnZXVwXCIsMzQ6XCJwYWdlZG93blwiLDM1OlwiZW5kXCIsMzY6XCJob21lXCIsMzc6XCJsZWZ0XCIsMzg6XCJ1cFwiLDM5OlwicmlnaHRcIiw0MDpcImRvd25cIiw0NTpcImluc1wiLDQ2OlwiZGVsXCIsOTE6XCJtZXRhXCIsOTM6XCJtZXRhXCIsMjI0OlwibWV0YVwifSxjPXsxMDY6XCIqXCIsMTA3OlwiK1wiLDEwOTpcIi1cIiwxMTA6XCIuXCIsMTExOlwiL1wiLDE4NjpcIjtcIiwxODc6XCI9XCIsMTg4OlwiLFwiLDE4OTpcIi1cIiwxOTA6XCIuXCIsMTkxOlwiL1wiLDE5MjpcImBcIiwyMTk6XCJbXCIsMjIwOlwiXFxcXFwiLDIyMTpcIl1cIiwyMjI6XCInXCJ9LGQ9e1wiflwiOlwiYFwiLFwiIVwiOlwiMVwiLFwiQFwiOlwiMlwiLFwiI1wiOlwiM1wiLCQ6XCI0XCIsXCIlXCI6XCI1XCIsXCJeXCI6XCI2XCIsXCImXCI6XCI3XCIsXCIqXCI6XCI4XCIsXCIoXCI6XCI5XCIsXCIpXCI6XCIwXCIsXzpcIi1cIixcIitcIjpcIj1cIixcIjpcIjpcIjtcIiwnXCInOlwiJ1wiLFwiPFwiOlwiLFwiLFwiPlwiOlwiLlwiLFwiP1wiOlwiL1wiLFwifFwiOlwiXFxcXFwifSx1PXtvcHRpb246XCJhbHRcIixjb21tYW5kOlwibWV0YVwiLHJldHVybjpcImVudGVyXCIsZXNjYXBlOlwiZXNjXCIscGx1czpcIitcIixtb2Q6L01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk/XCJtZXRhXCI6XCJjdHJsXCJ9LG09MTttPDIwOysrbSlsWzExMSttXT1cImZcIittO2ZvcihtPTA7bTw9OTsrK20pbFttKzk2XT1tLnRvU3RyaW5nKCk7di5wcm90b3R5cGUuYmluZD1mdW5jdGlvbih0LGUsbil7dmFyIG89dGhpcztyZXR1cm4gdD10IGluc3RhbmNlb2YgQXJyYXk/dDpbdF0sby5fYmluZE11bHRpcGxlLmNhbGwobyx0LGUsbiksb30sdi5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYmluZC5jYWxsKHRoaXMsdCwoZnVuY3Rpb24oKXt9KSxlKX0sdi5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIG4uX2RpcmVjdE1hcFt0K1wiOlwiK2VdJiZuLl9kaXJlY3RNYXBbdCtcIjpcIitlXSh7fSx0KSxufSx2LnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHQuX2NhbGxiYWNrcz17fSx0Ll9kaXJlY3RNYXA9e30sdH0sdi5wcm90b3R5cGUuc3RvcENhbGxiYWNrPWZ1bmN0aW9uKHQsZSl7aWYoKFwiIFwiK2UuY2xhc3NOYW1lK1wiIFwiKS5pbmRleE9mKFwiIG1vdXNldHJhcCBcIik+LTEpcmV0dXJuITE7aWYoZyhlLHRoaXMudGFyZ2V0KSlyZXR1cm4hMTtpZihcImNvbXBvc2VkUGF0aFwiaW4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb21wb3NlZFBhdGgpe3ZhciBuPXQuY29tcG9zZWRQYXRoKClbMF07biE9PXQudGFyZ2V0JiYoZT1uKX1yZXR1cm5cIklOUFVUXCI9PWUudGFnTmFtZXx8XCJTRUxFQ1RcIj09ZS50YWdOYW1lfHxcIlRFWFRBUkVBXCI9PWUudGFnTmFtZXx8ZS5pc0NvbnRlbnRFZGl0YWJsZX0sdi5wcm90b3R5cGUuaGFuZGxlS2V5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2hhbmRsZUtleS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHYuYWRkS2V5Y29kZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShlKSYmKGxbZV09dFtlXSk7YT1udWxsfSx2LmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD12KHIpO2Zvcih2YXIgZSBpbiB0KVwiX1wiIT09ZS5jaGFyQXQoMCkmJih2W2VdPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0W2VdLmFwcGx5KHQsYXJndW1lbnRzKX19KGUpKX0sdi5pbml0KCksaS5Nb3VzZXRyYXA9dix0LmV4cG9ydHMmJih0LmV4cG9ydHM9diksdm9pZCAwPT09KG89ZnVuY3Rpb24oKXtyZXR1cm4gdn0uY2FsbChlLG4sZSx0KSl8fCh0LmV4cG9ydHM9byl9ZnVuY3Rpb24gaCh0LGUsbil7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvblwiK2Usbil9ZnVuY3Rpb24gcCh0KXtpZihcImtleXByZXNzXCI9PXQudHlwZSl7dmFyIGU9U3RyaW5nLmZyb21DaGFyQ29kZSh0LndoaWNoKTtyZXR1cm4gdC5zaGlmdEtleXx8KGU9ZS50b0xvd2VyQ2FzZSgpKSxlfXJldHVybiBsW3Qud2hpY2hdP2xbdC53aGljaF06Y1t0LndoaWNoXT9jW3Qud2hpY2hdOlN0cmluZy5mcm9tQ2hhckNvZGUodC53aGljaCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBmKHQpe3JldHVyblwic2hpZnRcIj09dHx8XCJjdHJsXCI9PXR8fFwiYWx0XCI9PXR8fFwibWV0YVwiPT10fWZ1bmN0aW9uIHkodCxlLG4pe3JldHVybiBufHwobj1mdW5jdGlvbigpe2lmKCFhKWZvcih2YXIgdCBpbiBhPXt9LGwpdD45NSYmdDwxMTJ8fGwuaGFzT3duUHJvcGVydHkodCkmJihhW2xbdF1dPXQpO3JldHVybiBhfSgpW3RdP1wia2V5ZG93blwiOlwia2V5cHJlc3NcIiksXCJrZXlwcmVzc1wiPT1uJiZlLmxlbmd0aCYmKG49XCJrZXlkb3duXCIpLG59ZnVuY3Rpb24gYih0LGUpe3ZhciBuLG8saSxyPVtdO2ZvcihuPWZ1bmN0aW9uKHQpe3JldHVyblwiK1wiPT09dD9bXCIrXCJdOih0PXQucmVwbGFjZSgvXFwrezJ9L2csXCIrcGx1c1wiKSkuc3BsaXQoXCIrXCIpfSh0KSxpPTA7aTxuLmxlbmd0aDsrK2kpbz1uW2ldLHVbb10mJihvPXVbb10pLGUmJlwia2V5cHJlc3NcIiE9ZSYmZFtvXSYmKG89ZFtvXSxyLnB1c2goXCJzaGlmdFwiKSksZihvKSYmci5wdXNoKG8pO3JldHVybntrZXk6byxtb2RpZmllcnM6cixhY3Rpb246ZT15KG8scixlKX19ZnVuY3Rpb24gZyh0LGUpe3JldHVybiBudWxsIT09dCYmdCE9PXImJih0PT09ZXx8Zyh0LnBhcmVudE5vZGUsZSkpfWZ1bmN0aW9uIHYodCl7dmFyIGU9dGhpcztpZih0PXR8fHIsIShlIGluc3RhbmNlb2YgdikpcmV0dXJuIG5ldyB2KHQpO2UudGFyZ2V0PXQsZS5fY2FsbGJhY2tzPXt9LGUuX2RpcmVjdE1hcD17fTt2YXIgbixvPXt9LGk9ITEscz0hMSxhPSExO2Z1bmN0aW9uIGwodCl7dD10fHx7fTt2YXIgZSxuPSExO2ZvcihlIGluIG8pdFtlXT9uPSEwOm9bZV09MDtufHwoYT0hMSl9ZnVuY3Rpb24gYyh0LG4saSxyLHMsYSl7dmFyIGwsYyxkLHUsbT1bXSxoPWkudHlwZTtpZighZS5fY2FsbGJhY2tzW3RdKXJldHVybltdO2ZvcihcImtleXVwXCI9PWgmJmYodCkmJihuPVt0XSksbD0wO2w8ZS5fY2FsbGJhY2tzW3RdLmxlbmd0aDsrK2wpaWYoYz1lLl9jYWxsYmFja3NbdF1bbF0sKHJ8fCFjLnNlcXx8b1tjLnNlcV09PWMubGV2ZWwpJiZoPT1jLmFjdGlvbiYmKFwia2V5cHJlc3NcIj09aCYmIWkubWV0YUtleSYmIWkuY3RybEtleXx8KGQ9bix1PWMubW9kaWZpZXJzLGQuc29ydCgpLmpvaW4oXCIsXCIpPT09dS5zb3J0KCkuam9pbihcIixcIikpKSl7dmFyIHA9IXImJmMuY29tYm89PXMseT1yJiZjLnNlcT09ciYmYy5sZXZlbD09YTsocHx8eSkmJmUuX2NhbGxiYWNrc1t0XS5zcGxpY2UobCwxKSxtLnB1c2goYyl9cmV0dXJuIG19ZnVuY3Rpb24gZCh0LG4sbyxpKXtlLnN0b3BDYWxsYmFjayhuLG4udGFyZ2V0fHxuLnNyY0VsZW1lbnQsbyxpKXx8ITE9PT10KG4sbykmJihmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0P3QucHJldmVudERlZmF1bHQoKTp0LnJldHVyblZhbHVlPSExfShuKSxmdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwfShuKSl9ZnVuY3Rpb24gdSh0KXtcIm51bWJlclwiIT10eXBlb2YgdC53aGljaCYmKHQud2hpY2g9dC5rZXlDb2RlKTt2YXIgbj1wKHQpO24mJihcImtleXVwXCIhPXQudHlwZXx8aSE9PW4/ZS5oYW5kbGVLZXkobixmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gdC5zaGlmdEtleSYmZS5wdXNoKFwic2hpZnRcIiksdC5hbHRLZXkmJmUucHVzaChcImFsdFwiKSx0LmN0cmxLZXkmJmUucHVzaChcImN0cmxcIiksdC5tZXRhS2V5JiZlLnB1c2goXCJtZXRhXCIpLGV9KHQpLHQpOmk9ITEpfWZ1bmN0aW9uIG0odCxyLHMsdSxoKXtlLl9kaXJlY3RNYXBbdCtcIjpcIitzXT1yO3ZhciBmLHk9KHQ9dC5yZXBsYWNlKC9cXHMrL2csXCIgXCIpKS5zcGxpdChcIiBcIik7eS5sZW5ndGg+MT9mdW5jdGlvbih0LGUscixzKXtmdW5jdGlvbiBjKGUpe3JldHVybiBmdW5jdGlvbigpe2E9ZSwrK29bdF0sY2xlYXJUaW1lb3V0KG4pLG49c2V0VGltZW91dChsLDFlMyl9fWZ1bmN0aW9uIHUoZSl7ZChyLGUsdCksXCJrZXl1cFwiIT09cyYmKGk9cChlKSksc2V0VGltZW91dChsLDEwKX1vW3RdPTA7Zm9yKHZhciBoPTA7aDxlLmxlbmd0aDsrK2gpe3ZhciBmPWgrMT09PWUubGVuZ3RoP3U6YyhzfHxiKGVbaCsxXSkuYWN0aW9uKTttKGVbaF0sZixzLHQsaCl9fSh0LHkscixzKTooZj1iKHQscyksZS5fY2FsbGJhY2tzW2Yua2V5XT1lLl9jYWxsYmFja3NbZi5rZXldfHxbXSxjKGYua2V5LGYubW9kaWZpZXJzLHt0eXBlOmYuYWN0aW9ufSx1LHQsaCksZS5fY2FsbGJhY2tzW2Yua2V5XVt1P1widW5zaGlmdFwiOlwicHVzaFwiXSh7Y2FsbGJhY2s6cixtb2RpZmllcnM6Zi5tb2RpZmllcnMsYWN0aW9uOmYuYWN0aW9uLHNlcTp1LGxldmVsOmgsY29tYm86dH0pKX1lLl9oYW5kbGVLZXk9ZnVuY3Rpb24odCxlLG4pe3ZhciBvLGk9Yyh0LGUsbikscj17fSx1PTAsbT0hMTtmb3Iobz0wO288aS5sZW5ndGg7KytvKWlbb10uc2VxJiYodT1NYXRoLm1heCh1LGlbb10ubGV2ZWwpKTtmb3Iobz0wO288aS5sZW5ndGg7KytvKWlmKGlbb10uc2VxKXtpZihpW29dLmxldmVsIT11KWNvbnRpbnVlO209ITAscltpW29dLnNlcV09MSxkKGlbb10uY2FsbGJhY2ssbixpW29dLmNvbWJvLGlbb10uc2VxKX1lbHNlIG18fGQoaVtvXS5jYWxsYmFjayxuLGlbb10uY29tYm8pO3ZhciBoPVwia2V5cHJlc3NcIj09bi50eXBlJiZzO24udHlwZSE9YXx8Zih0KXx8aHx8bChyKSxzPW0mJlwia2V5ZG93blwiPT1uLnR5cGV9LGUuX2JpbmRNdWx0aXBsZT1mdW5jdGlvbih0LGUsbil7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDsrK28pbSh0W29dLGUsbil9LGgodCxcImtleXByZXNzXCIsdSksaCh0LFwia2V5ZG93blwiLHUpLGgodCxcImtleXVwXCIsdSl9fShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpudWxsLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/ZG9jdW1lbnQ6bnVsbCl9fSxlPXt9O2Z1bmN0aW9uIG4obyl7dmFyIGk9ZVtvXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVtvXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbb10ocixyLmV4cG9ydHMsbiksci5leHBvcnRzfW4ubj10PT57dmFyIGU9dCYmdC5fX2VzTW9kdWxlPygpPT50LmRlZmF1bHQ6KCk9PnQ7cmV0dXJuIG4uZChlLHthOmV9KSxlfSxuLmQ9KHQsZSk9Pntmb3IodmFyIG8gaW4gZSluLm8oZSxvKSYmIW4ubyh0LG8pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHtlbnVtZXJhYmxlOiEwLGdldDplW29dfSl9LG4ubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksbi5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbz17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtuLnIobyksbi5kKG8se0ZsdWVudEFwcEJhckJ1dHRvbjooKT0+cixGbHVlbnRBcHBCYXJTZXBhcmF0b3I6KCk9PnJ0LEZsdWVudENvbW1hbmRCYXI6KCk9Pml0fSk7dmFyIHQ9bigyNjkpLGU9big0NDEpLGk9bi5uKGUpO2xldCByPWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJpY29uXCIsXCJsYWJlbFwiLFwibW9kaWZpZXJcIixcImtleVwiLFwidXNlLWFjY2VudFwiXX1nZXQgaWNvbigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImljb25cIil9c2V0IGljb24odCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJpY29uXCIsdCksdGhpcy5zZXRJY29uKCl9Z2V0IGxhYmVsKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil9c2V0IGxhYmVsKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwibGFiZWxcIix0KSx0aGlzLnNldExhYmVsKCl9Z2V0IGNvbW1hbmQoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjb21tYW5kXCIpfXNldCBjb21tYW5kKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiY29tbWFuZFwiLHQpfWdldCBtb2RpZmllcigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcIm1vZGlmaWVyXCIpfXNldCBtb2RpZmllcih0KXt0aGlzLnNldEF0dHJpYnV0ZShcIm1vZGlmaWVyXCIsdCksdGhpcy5zZXRBY2NlbGVyYXRvcigpfWdldCBrZXkoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJrZXlcIil9c2V0IGtleSh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImtleVwiLHQpLHRoaXMuc2V0QWNjZWxlcmF0b3IoKX1nZXQgdXNlQWNjZW50KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidXNlLWFjY2VudFwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpfXNldCB1c2VBY2NlbnQodCl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsdCksdGhpcy5zZXRJY29uKCl9Z2V0IHRpdGxlKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwidGl0bGVcIil9c2V0IHRpdGxlKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0KSx0aGlzLnNldFRpdGxlKCl9Z2V0IGRpc2FibGVkKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9Z2V0IGJ1dHRvbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fYnV0dG9uKSYmdm9pZCAwIT09dHx8KHRoaXMuX2J1dHRvbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIikpLHRoaXMuX2J1dHRvbn1nZXQgaWNvblNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2ljb25TcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2ljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIikpLHRoaXMuX2ljb25TcGFufWdldCBjdXN0b21JY29uU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY3VzdG9tSWNvblNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5fY3VzdG9tSWNvblNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzbG90W25hbWU9aWNvbl1cIikpLHRoaXMuX2N1c3RvbUljb25TcGFufWdldCBjb250ZW50U3Bhbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY29udGVudFNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5fY29udGVudFNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSksdGhpcy5fY29udGVudFNwYW59Z2V0IGFjY2VsZXJhdG9yU3Bhbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fYWNjZWxlcmF0b3JTcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2FjY2VsZXJhdG9yU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5rZXlib2FyZC1hY2NlbGVyYXRvclwiKSksdGhpcy5fYWNjZWxlcmF0b3JTcGFufWdldCBmb3JtYXR0ZWRNb2RpZmllcigpe3JldHVybiB0aGlzLm1vZGlmaWVyLnJlcGxhY2UoXCJDb250cm9sXCIsXCJDdHJsXCIpfWdldCBmb3JtYXR0ZWRBY2NlbGVyYXRvcigpe3JldHVybiB0aGlzLm1vZGlmaWVyP3RoaXMuZm9ybWF0dGVkTW9kaWZpZXIrXCIrXCIrdGhpcy5rZXk6dGhpcy5rZXl9Z2V0IHN1cHBvcnRlZE1vZGlmaWVyKCl7cmV0dXJuIHRoaXMubW9kaWZpZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiY29udHJvbFwiLFwibW9kXCIpfWdldCBzdXBwb3J0ZWRLZXkoKXtyZXR1cm4gdGhpcy5rZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiZGVsZXRlXCIsXCJkZWxcIikucmVwbGFjZShcIitcIixcIj1cIikucmVwbGFjZShcImVzY2FwZVwiLFwiZXNjXCIpfXJlbmRlcigpe3JldHVyblwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnV0dG9uJz5cXG4gICAgICAgICAgICAgICAgPGZsdWVudC1zeW1ib2wtaWNvbiBjbGFzcz0naWNvbic+PC9mbHVlbnQtc3ltYm9sLWljb24+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9J2ljb24nPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NvbnRlbnQnPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2tleWJvYXJkLWFjY2VsZXJhdG9yJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIn1jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMuc2V0SWNvbigpLHRoaXMuc2V0TGFiZWwoKSx0aGlzLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCIwXCIpLHRoaXMuY3VzdG9tSWNvblNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwodD0+e2NvbnN0IGU9dGhpcy5jdXN0b21JY29uU2xvdC5hc3NpZ25lZE5vZGVzKCksbj1lLmxlbmd0aD4wO3RoaXMuaWNvblNwYW4uc3R5bGUuZGlzcGxheT1uP1wibm9uZVwiOlwiaW5saW5lLWJsb2NrXCIsdGhpcy5jdXN0b21JY29uU2xvdC5zdHlsZS5kaXNwbGF5PW4/XCJkZWZhdWx0XCI6XCJub25lXCIsZS5mb3JFYWNoKCh0PT57dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwodD0+e3RoaXMuY2xpY2soKSx0LnN0b3BQcm9wYWdhdGlvbigpfSkpfSkpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0KXtzd2l0Y2godCl7Y2FzZVwibGFiZWxcIjp0aGlzLnNldExhYmVsKCk7YnJlYWs7Y2FzZVwiaWNvblwiOmNhc2VcInVzZS1hY2NlbnRcIjp0aGlzLnNldEljb24oKTticmVhaztjYXNlXCJtb2RpZmllclwiOmNhc2VcImtleVwiOnRoaXMuc2V0QWNjZWxlcmF0b3IoKX19c2V0SWNvbigpe3ZhciB0O3RoaXMuaWNvblNwYW4uc2V0QXR0cmlidXRlKFwic3ltYm9sXCIsbnVsbCE9PSh0PXRoaXMuaWNvbikmJnZvaWQgMCE9PXQ/dDpcIlwiKSx0aGlzLmljb25TcGFuLnRvZ2dsZUF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIix0aGlzLnVzZUFjY2VudCl9c2V0TGFiZWwoKXt0aGlzLmNvbnRlbnRTcGFuLnRleHRDb250ZW50PXRoaXMubGFiZWwsdGhpcy5zZXRUaXRsZSgpfXNldEFjY2VsZXJhdG9yKCl7dmFyIHQ7aWYodGhpcy5rZXkpe3RoaXMuYWNjZWxlcmF0b3JTcGFuLnRleHRDb250ZW50PW51bGwhPT0odD10aGlzLmZvcm1hdHRlZEFjY2VsZXJhdG9yKSYmdm9pZCAwIT09dD90OlwiXCIsdGhpcy5zZXRUaXRsZSgpO3ZhciBlPXRoaXMubW9kaWZpZXI/dGhpcy5zdXBwb3J0ZWRNb2RpZmllcitcIitcIit0aGlzLnN1cHBvcnRlZEtleTp0aGlzLnN1cHBvcnRlZEtleTtpKCkuYmluZChlLCgoKT0+KHRoaXMuZGlzYWJsZWR8fCh0aGlzLmNsaWNrKCksdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcImludm9rZWRcIiksc2V0VGltZW91dCgoKCk9PnRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZva2VkXCIpKSwxNTApKSwhMSkpKX19c2V0VGl0bGUoKXt2YXIgdCxlO2NvbnN0IG49dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcj9gKCR7dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcn0pYDpcIlwiO2xldCBvPW51bGwhPT0oZT1udWxsIT09KHQ9dGhpcy50aXRsZSkmJnZvaWQgMCE9PXQ/dDp0aGlzLmxhYmVsKSYmdm9pZCAwIT09ZT9lOlwiXCI7dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIixgJHtvfSAke259YCl9c2V0QWNjZWxlcmF0b3JXaWR0aCh0KXt0aGlzLmFjY2VsZXJhdG9yU3Bhbi5zdHlsZS53aWR0aD10K1wicHhcIn19O3Iuc3R5bGVzPSdcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogIzAwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBCdXR0b24gKi9cXG4gICAgICAgIC5idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KTtcXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDhweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAuYnV0dG9uOmFjdGl2ZSxcXG4gICAgICAgIC5idXR0b24uaW52b2tlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1zdWJ0bGUtdGVydGlhcnkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtc2Vjb25kYXJ5KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXNlY29uZGFyeSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1kaXNhYmxlZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdW2lzLXNlY29uZGFyeV0pIC5idXR0b24ge1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1ib3R0b21dOm5vdChbaXMtc2Vjb25kYXJ5XSkpIC5idXR0b24ge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Y29sbGFwc2VkXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idXR0b246YWN0aXZlIC5pY29uW3VzZS1hY2NlbnRdOjpwYXJ0KGljb24pLFxcbiAgICAgICAgLmJ1dHRvbi5pbnZva2VkIC5pY29uW3VzZS1hY2NlbnRdOjpwYXJ0KGljb24pIHtcXG4gICAgICAgICAgICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtYWNjZW50LWRlZmF1bHQpLCB0cmFuc3BhcmVudCAxMCUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmljb246OnBhcnQoaWNvbikge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQ3VzdG9tIGljb24gKi9cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChmbHVlbnQtaW1hZ2UtaWNvbikge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC8qIENvbnRlbnQgKi9cXG4gICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcJ1NlZ29lIFVJIFZhcmlhYmxlXFwnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwLCBcIm9wc3pcIiAxNjtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6ZW1wdHksXFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1jb2xsYXBzZWRdOm5vdChbaXMtc2Vjb25kYXJ5XSkpIC5jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2lzLXNlY29uZGFyeV0pIC5jb250ZW50IHtcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwLCBcIm9wc3pcIiAyMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OjpiZWZvcmUsXFxuICAgICAgICAuY29udGVudDo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcJ1xcJztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YmVmb3Jle1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YWZ0ZXJ7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEtleWJvYXJkIGFjY2VsZXJhdG9yICovXFxuICAgICAgICAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlsbC10ZXh0LXByaW1hcnkpLCB0cmFuc3BhcmVudCA0MCUpO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcJ1NlZ29lIFVJIFZhcmlhYmxlIFNtYWxsXFwnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5rZXlib2FyZC1hY2NlbGVyYXRvciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1kaXNhYmxlZCkgIWltcG9ydGFudDtcXG4gICAgICAgIH1cXG4gICAgJyxyPWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWFwcC1iYXItYnV0dG9uXCIpXSxyKTtjb25zdCBzPU1hdGgubWluLGE9TWF0aC5tYXgsbD1NYXRoLnJvdW5kLGM9TWF0aC5mbG9vcixkPXQ9Pih7eDp0LHk6dH0pLHU9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLGJvdHRvbTpcInRvcFwiLHRvcDpcImJvdHRvbVwifSxtPXtzdGFydDpcImVuZFwiLGVuZDpcInN0YXJ0XCJ9O2Z1bmN0aW9uIGgodCxlLG4pe3JldHVybiBhKHQscyhlLG4pKX1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KGUpOnR9ZnVuY3Rpb24gZih0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMF19ZnVuY3Rpb24geSh0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMV19ZnVuY3Rpb24gYih0KXtyZXR1cm5cInhcIj09PXQ/XCJ5XCI6XCJ4XCJ9ZnVuY3Rpb24gZyh0KXtyZXR1cm5cInlcIj09PXQ/XCJoZWlnaHRcIjpcIndpZHRoXCJ9ZnVuY3Rpb24gdih0KXtyZXR1cm5bXCJ0b3BcIixcImJvdHRvbVwiXS5pbmNsdWRlcyhmKHQpKT9cInlcIjpcInhcIn1mdW5jdGlvbiB4KHQpe3JldHVybiBiKHYodCkpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIHQucmVwbGFjZSgvc3RhcnR8ZW5kL2csKHQ9Pm1bdF0pKX1mdW5jdGlvbiBDKHQpe3JldHVybiB0LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCh0PT51W3RdKSl9ZnVuY3Rpb24gQSh0KXtyZXR1cm57Li4udCx0b3A6dC55LGxlZnQ6dC54LHJpZ2h0OnQueCt0LndpZHRoLGJvdHRvbTp0LnkrdC5oZWlnaHR9fWZ1bmN0aW9uIGsodCxlLG4pe2xldHtyZWZlcmVuY2U6byxmbG9hdGluZzppfT10O2NvbnN0IHI9dihlKSxzPXgoZSksYT1nKHMpLGw9ZihlKSxjPVwieVwiPT09cixkPW8ueCtvLndpZHRoLzItaS53aWR0aC8yLHU9by55K28uaGVpZ2h0LzItaS5oZWlnaHQvMixtPW9bYV0vMi1pW2FdLzI7bGV0IGg7c3dpdGNoKGwpe2Nhc2VcInRvcFwiOmg9e3g6ZCx5Om8ueS1pLmhlaWdodH07YnJlYWs7Y2FzZVwiYm90dG9tXCI6aD17eDpkLHk6by55K28uaGVpZ2h0fTticmVhaztjYXNlXCJyaWdodFwiOmg9e3g6by54K28ud2lkdGgseTp1fTticmVhaztjYXNlXCJsZWZ0XCI6aD17eDpvLngtaS53aWR0aCx5OnV9O2JyZWFrO2RlZmF1bHQ6aD17eDpvLngseTpvLnl9fXN3aXRjaCh5KGUpKXtjYXNlXCJzdGFydFwiOmhbc10tPW0qKG4mJmM/LTE6MSk7YnJlYWs7Y2FzZVwiZW5kXCI6aFtzXSs9bSoobiYmYz8tMToxKX1yZXR1cm4gaH1hc3luYyBmdW5jdGlvbiBTKHQsZSl7dmFyIG47dm9pZCAwPT09ZSYmKGU9e30pO2NvbnN0e3g6byx5OmkscGxhdGZvcm06cixyZWN0czpzLGVsZW1lbnRzOmEsc3RyYXRlZ3k6bH09dCx7Ym91bmRhcnk6Yz1cImNsaXBwaW5nQW5jZXN0b3JzXCIscm9vdEJvdW5kYXJ5OmQ9XCJ2aWV3cG9ydFwiLGVsZW1lbnRDb250ZXh0OnU9XCJmbG9hdGluZ1wiLGFsdEJvdW5kYXJ5Om09ITEscGFkZGluZzpoPTB9PXAoZSx0KSxmPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCIhPXR5cGVvZiB0P2Z1bmN0aW9uKHQpe3JldHVybnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MCwuLi50fX0odCk6e3RvcDp0LHJpZ2h0OnQsYm90dG9tOnQsbGVmdDp0fX0oaCkseT1hW20/XCJmbG9hdGluZ1wiPT09dT9cInJlZmVyZW5jZVwiOlwiZmxvYXRpbmdcIjp1XSxiPUEoYXdhaXQgci5nZXRDbGlwcGluZ1JlY3Qoe2VsZW1lbnQ6bnVsbD09KG49YXdhaXQobnVsbD09ci5pc0VsZW1lbnQ/dm9pZCAwOnIuaXNFbGVtZW50KHkpKSl8fG4/eTp5LmNvbnRleHRFbGVtZW50fHxhd2FpdChudWxsPT1yLmdldERvY3VtZW50RWxlbWVudD92b2lkIDA6ci5nZXREb2N1bWVudEVsZW1lbnQoYS5mbG9hdGluZykpLGJvdW5kYXJ5OmMscm9vdEJvdW5kYXJ5OmQsc3RyYXRlZ3k6bH0pKSxnPVwiZmxvYXRpbmdcIj09PXU/ey4uLnMuZmxvYXRpbmcseDpvLHk6aX06cy5yZWZlcmVuY2Usdj1hd2FpdChudWxsPT1yLmdldE9mZnNldFBhcmVudD92b2lkIDA6ci5nZXRPZmZzZXRQYXJlbnQoYS5mbG9hdGluZykpLHg9YXdhaXQobnVsbD09ci5pc0VsZW1lbnQ/dm9pZCAwOnIuaXNFbGVtZW50KHYpKSYmYXdhaXQobnVsbD09ci5nZXRTY2FsZT92b2lkIDA6ci5nZXRTY2FsZSh2KSl8fHt4OjEseToxfSx3PUEoci5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdD9hd2FpdCByLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KHtyZWN0Omcsb2Zmc2V0UGFyZW50OnYsc3RyYXRlZ3k6bH0pOmcpO3JldHVybnt0b3A6KGIudG9wLXcudG9wK2YudG9wKS94LnksYm90dG9tOih3LmJvdHRvbS1iLmJvdHRvbStmLmJvdHRvbSkveC55LGxlZnQ6KGIubGVmdC13LmxlZnQrZi5sZWZ0KS94LngscmlnaHQ6KHcucmlnaHQtYi5yaWdodCtmLnJpZ2h0KS94Lnh9fWNvbnN0IFI9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSx7bmFtZTpcImZsaXBcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7dmFyIG47Y29uc3R7cGxhY2VtZW50Om8sbWlkZGxld2FyZURhdGE6aSxyZWN0czpyLGluaXRpYWxQbGFjZW1lbnQ6cyxwbGF0Zm9ybTphLGVsZW1lbnRzOmx9PWUse21haW5BeGlzOmM9ITAsY3Jvc3NBeGlzOmQ9ITAsZmFsbGJhY2tQbGFjZW1lbnRzOnUsZmFsbGJhY2tTdHJhdGVneTptPVwiYmVzdEZpdFwiLGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb246aD1cIm5vbmVcIixmbGlwQWxpZ25tZW50OmI9ITAsLi4udn09cCh0LGUpLEE9ZihvKSxrPWYocyk9PT1zLFI9YXdhaXQobnVsbD09YS5pc1JUTD92b2lkIDA6YS5pc1JUTChsLmZsb2F0aW5nKSksRT11fHwoa3x8IWI/W0MocyldOmZ1bmN0aW9uKHQpe2NvbnN0IGU9Qyh0KTtyZXR1cm5bdyh0KSxlLHcoZSldfShzKSk7dXx8XCJub25lXCI9PT1ofHxFLnB1c2goLi4uZnVuY3Rpb24odCxlLG4sbyl7Y29uc3QgaT15KHQpO2xldCByPWZ1bmN0aW9uKHQsZSxuKXtjb25zdCBvPVtcImxlZnRcIixcInJpZ2h0XCJdLGk9W1wicmlnaHRcIixcImxlZnRcIl0scj1bXCJ0b3BcIixcImJvdHRvbVwiXSxzPVtcImJvdHRvbVwiLFwidG9wXCJdO3N3aXRjaCh0KXtjYXNlXCJ0b3BcIjpjYXNlXCJib3R0b21cIjpyZXR1cm4gbj9lP2k6bzplP286aTtjYXNlXCJsZWZ0XCI6Y2FzZVwicmlnaHRcIjpyZXR1cm4gZT9yOnM7ZGVmYXVsdDpyZXR1cm5bXX19KGYodCksXCJzdGFydFwiPT09bixvKTtyZXR1cm4gaSYmKHI9ci5tYXAoKHQ9PnQrXCItXCIraSkpLGUmJihyPXIuY29uY2F0KHIubWFwKHcpKSkpLHJ9KHMsYixoLFIpKTtjb25zdCBfPVtzLC4uLkVdLEw9YXdhaXQgUyhlLHYpLFA9W107bGV0IFQ9KG51bGw9PShuPWkuZmxpcCk/dm9pZCAwOm4ub3ZlcmZsb3dzKXx8W107aWYoYyYmUC5wdXNoKExbQV0pLGQpe2NvbnN0IHQ9ZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTtjb25zdCBvPXkodCksaT14KHQpLHI9ZyhpKTtsZXQgcz1cInhcIj09PWk/bz09PShuP1wiZW5kXCI6XCJzdGFydFwiKT9cInJpZ2h0XCI6XCJsZWZ0XCI6XCJzdGFydFwiPT09bz9cImJvdHRvbVwiOlwidG9wXCI7cmV0dXJuIGUucmVmZXJlbmNlW3JdPmUuZmxvYXRpbmdbcl0mJihzPUMocykpLFtzLEMocyldfShvLHIsUik7UC5wdXNoKExbdFswXV0sTFt0WzFdXSl9aWYoVD1bLi4uVCx7cGxhY2VtZW50Om8sb3ZlcmZsb3dzOlB9XSwhUC5ldmVyeSgodD0+dDw9MCkpKXt2YXIgTyxNO2NvbnN0IHQ9KChudWxsPT0oTz1pLmZsaXApP3ZvaWQgMDpPLmluZGV4KXx8MCkrMSxlPV9bdF07aWYoZSlyZXR1cm57ZGF0YTp7aW5kZXg6dCxvdmVyZmxvd3M6VH0scmVzZXQ6e3BsYWNlbWVudDplfX07bGV0IG49bnVsbD09KE09VC5maWx0ZXIoKHQ9PnQub3ZlcmZsb3dzWzBdPD0wKSkuc29ydCgoKHQsZSk9PnQub3ZlcmZsb3dzWzFdLWUub3ZlcmZsb3dzWzFdKSlbMF0pP3ZvaWQgMDpNLnBsYWNlbWVudDtpZighbilzd2l0Y2gobSl7Y2FzZVwiYmVzdEZpdFwiOnt2YXIgQjtjb25zdCB0PW51bGw9PShCPVQubWFwKCh0PT5bdC5wbGFjZW1lbnQsdC5vdmVyZmxvd3MuZmlsdGVyKCh0PT50PjApKS5yZWR1Y2UoKCh0LGUpPT50K2UpLDApXSkpLnNvcnQoKCh0LGUpPT50WzFdLWVbMV0pKVswXSk/dm9pZCAwOkJbMF07dCYmKG49dCk7YnJlYWt9Y2FzZVwiaW5pdGlhbFBsYWNlbWVudFwiOm49c31pZihvIT09bilyZXR1cm57cmVzZXQ6e3BsYWNlbWVudDpufX19cmV0dXJue319fX0sRT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCkse25hbWU6XCJvZmZzZXRcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7Y29uc3R7eDpuLHk6b309ZSxpPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKHQsZSl7Y29uc3R7cGxhY2VtZW50Om4scGxhdGZvcm06byxlbGVtZW50czppfT10LHI9YXdhaXQobnVsbD09by5pc1JUTD92b2lkIDA6by5pc1JUTChpLmZsb2F0aW5nKSkscz1mKG4pLGE9eShuKSxsPVwieVwiPT09dihuKSxjPVtcImxlZnRcIixcInRvcFwiXS5pbmNsdWRlcyhzKT8tMToxLGQ9ciYmbD8tMToxLHU9cChlLHQpO2xldHttYWluQXhpczptLGNyb3NzQXhpczpoLGFsaWdubWVudEF4aXM6Yn09XCJudW1iZXJcIj09dHlwZW9mIHU/e21haW5BeGlzOnUsY3Jvc3NBeGlzOjAsYWxpZ25tZW50QXhpczpudWxsfTp7bWFpbkF4aXM6MCxjcm9zc0F4aXM6MCxhbGlnbm1lbnRBeGlzOm51bGwsLi4udX07cmV0dXJuIGEmJlwibnVtYmVyXCI9PXR5cGVvZiBiJiYoaD1cImVuZFwiPT09YT8tMSpiOmIpLGw/e3g6aCpkLHk6bSpjfTp7eDptKmMseTpoKmR9fShlLHQpO3JldHVybnt4Om4raS54LHk6bytpLnksZGF0YTppfX19fTtmdW5jdGlvbiBfKHQpe3JldHVybiBUKHQpPyh0Lm5vZGVOYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpOlwiI2RvY3VtZW50XCJ9ZnVuY3Rpb24gTCh0KXt2YXIgZTtyZXR1cm4obnVsbD09dHx8bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5kZWZhdWx0Vmlldyl8fHdpbmRvd31mdW5jdGlvbiBQKHQpe3ZhciBlO3JldHVybiBudWxsPT0oZT0oVCh0KT90Lm93bmVyRG9jdW1lbnQ6dC5kb2N1bWVudCl8fHdpbmRvdy5kb2N1bWVudCk/dm9pZCAwOmUuZG9jdW1lbnRFbGVtZW50fWZ1bmN0aW9uIFQodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBOb2RlfHx0IGluc3RhbmNlb2YgTCh0KS5Ob2RlfWZ1bmN0aW9uIE8odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBFbGVtZW50fHx0IGluc3RhbmNlb2YgTCh0KS5FbGVtZW50fWZ1bmN0aW9uIE0odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudHx8dCBpbnN0YW5jZW9mIEwodCkuSFRNTEVsZW1lbnR9ZnVuY3Rpb24gQih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgU2hhZG93Um9vdCYmKHQgaW5zdGFuY2VvZiBTaGFkb3dSb290fHx0IGluc3RhbmNlb2YgTCh0KS5TaGFkb3dSb290KX1mdW5jdGlvbiBqKHQpe2NvbnN0e292ZXJmbG93OmUsb3ZlcmZsb3dYOm4sb3ZlcmZsb3dZOm8sZGlzcGxheTppfT1xKHQpO3JldHVybi9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbnxjbGlwLy50ZXN0KGUrbytuKSYmIVtcImlubGluZVwiLFwiY29udGVudHNcIl0uaW5jbHVkZXMoaSl9ZnVuY3Rpb24gRCh0KXtyZXR1cm5bXCJ0YWJsZVwiLFwidGRcIixcInRoXCJdLmluY2x1ZGVzKF8odCkpfWZ1bmN0aW9uIE4odCl7Y29uc3QgZT1JKCksbj1xKHQpO3JldHVyblwibm9uZVwiIT09bi50cmFuc2Zvcm18fFwibm9uZVwiIT09bi5wZXJzcGVjdGl2ZXx8ISFuLmNvbnRhaW5lclR5cGUmJlwibm9ybWFsXCIhPT1uLmNvbnRhaW5lclR5cGV8fCFlJiYhIW4uYmFja2Ryb3BGaWx0ZXImJlwibm9uZVwiIT09bi5iYWNrZHJvcEZpbHRlcnx8IWUmJiEhbi5maWx0ZXImJlwibm9uZVwiIT09bi5maWx0ZXJ8fFtcInRyYW5zZm9ybVwiLFwicGVyc3BlY3RpdmVcIixcImZpbHRlclwiXS5zb21lKCh0PT4obi53aWxsQ2hhbmdlfHxcIlwiKS5pbmNsdWRlcyh0KSkpfHxbXCJwYWludFwiLFwibGF5b3V0XCIsXCJzdHJpY3RcIixcImNvbnRlbnRcIl0uc29tZSgodD0+KG4uY29udGFpbnx8XCJcIikuaW5jbHVkZXModCkpKX1mdW5jdGlvbiBJKCl7cmV0dXJuIShcInVuZGVmaW5lZFwiPT10eXBlb2YgQ1NTfHwhQ1NTLnN1cHBvcnRzKSYmQ1NTLnN1cHBvcnRzKFwiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIixcIm5vbmVcIil9ZnVuY3Rpb24gRih0KXtyZXR1cm5bXCJodG1sXCIsXCJib2R5XCIsXCIjZG9jdW1lbnRcIl0uaW5jbHVkZXMoXyh0KSl9ZnVuY3Rpb24gcSh0KXtyZXR1cm4gTCh0KS5nZXRDb21wdXRlZFN0eWxlKHQpfWZ1bmN0aW9uIHoodCl7cmV0dXJuIE8odCk/e3Njcm9sbExlZnQ6dC5zY3JvbGxMZWZ0LHNjcm9sbFRvcDp0LnNjcm9sbFRvcH06e3Njcm9sbExlZnQ6dC5wYWdlWE9mZnNldCxzY3JvbGxUb3A6dC5wYWdlWU9mZnNldH19ZnVuY3Rpb24gVih0KXtpZihcImh0bWxcIj09PV8odCkpcmV0dXJuIHQ7Y29uc3QgZT10LmFzc2lnbmVkU2xvdHx8dC5wYXJlbnROb2RlfHxCKHQpJiZ0Lmhvc3R8fFAodCk7cmV0dXJuIEIoZSk/ZS5ob3N0OmV9ZnVuY3Rpb24gSyh0KXtjb25zdCBlPVYodCk7cmV0dXJuIEYoZSk/dC5vd25lckRvY3VtZW50P3Qub3duZXJEb2N1bWVudC5ib2R5OnQuYm9keTpNKGUpJiZqKGUpP2U6SyhlKX1mdW5jdGlvbiBIKHQsZSl7dmFyIG47dm9pZCAwPT09ZSYmKGU9W10pO2NvbnN0IG89Syh0KSxpPW89PT0obnVsbD09KG49dC5vd25lckRvY3VtZW50KT92b2lkIDA6bi5ib2R5KSxyPUwobyk7cmV0dXJuIGk/ZS5jb25jYXQocixyLnZpc3VhbFZpZXdwb3J0fHxbXSxqKG8pP286W10pOmUuY29uY2F0KG8sSChvKSl9ZnVuY3Rpb24gVyh0KXtjb25zdCBlPXEodCk7bGV0IG49cGFyc2VGbG9hdChlLndpZHRoKXx8MCxvPXBhcnNlRmxvYXQoZS5oZWlnaHQpfHwwO2NvbnN0IGk9TSh0KSxyPWk/dC5vZmZzZXRXaWR0aDpuLHM9aT90Lm9mZnNldEhlaWdodDpvLGE9bChuKSE9PXJ8fGwobykhPT1zO3JldHVybiBhJiYobj1yLG89cykse3dpZHRoOm4saGVpZ2h0Om8sJDphfX1mdW5jdGlvbiBVKHQpe3JldHVybiBPKHQpP3Q6dC5jb250ZXh0RWxlbWVudH1mdW5jdGlvbiAkKHQpe2NvbnN0IGU9VSh0KTtpZighTShlKSlyZXR1cm4gZCgxKTtjb25zdCBuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse3dpZHRoOm8saGVpZ2h0OmksJDpyfT1XKGUpO2xldCBzPShyP2wobi53aWR0aCk6bi53aWR0aCkvbyxhPShyP2wobi5oZWlnaHQpOm4uaGVpZ2h0KS9pO3JldHVybiBzJiZOdW1iZXIuaXNGaW5pdGUocyl8fChzPTEpLGEmJk51bWJlci5pc0Zpbml0ZShhKXx8KGE9MSkse3g6cyx5OmF9fWNvbnN0IFg9ZCgwKTtmdW5jdGlvbiBZKHQpe2NvbnN0IGU9TCh0KTtyZXR1cm4gSSgpJiZlLnZpc3VhbFZpZXdwb3J0P3t4OmUudmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCx5OmUudmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wfTpYfWZ1bmN0aW9uIEcodCxlLG4sbyl7dm9pZCAwPT09ZSYmKGU9ITEpLHZvaWQgMD09PW4mJihuPSExKTtjb25zdCBpPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscj1VKHQpO2xldCBzPWQoMSk7ZSYmKG8/TyhvKSYmKHM9JChvKSk6cz0kKHQpKTtjb25zdCBhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLCEoIW58fGUmJm4hPT1MKHQpKSYmZX0ocixuLG8pP1kocik6ZCgwKTtsZXQgbD0oaS5sZWZ0K2EueCkvcy54LGM9KGkudG9wK2EueSkvcy55LHU9aS53aWR0aC9zLngsbT1pLmhlaWdodC9zLnk7aWYocil7Y29uc3QgdD1MKHIpLGU9byYmTyhvKT9MKG8pOm87bGV0IG49dC5mcmFtZUVsZW1lbnQ7Zm9yKDtuJiZvJiZlIT09dDspe2NvbnN0IHQ9JChuKSxlPW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbz1xKG4pLGk9ZS5sZWZ0KyhuLmNsaWVudExlZnQrcGFyc2VGbG9hdChvLnBhZGRpbmdMZWZ0KSkqdC54LHI9ZS50b3ArKG4uY2xpZW50VG9wK3BhcnNlRmxvYXQoby5wYWRkaW5nVG9wKSkqdC55O2wqPXQueCxjKj10LnksdSo9dC54LG0qPXQueSxsKz1pLGMrPXIsbj1MKG4pLmZyYW1lRWxlbWVudH19cmV0dXJuIEEoe3dpZHRoOnUsaGVpZ2h0Om0seDpsLHk6Y30pfWZ1bmN0aW9uIEoodCl7cmV0dXJuIEcoUCh0KSkubGVmdCt6KHQpLnNjcm9sbExlZnR9ZnVuY3Rpb24gUSh0LGUsbil7bGV0IG87aWYoXCJ2aWV3cG9ydFwiPT09ZSlvPWZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1MKHQpLG89UCh0KSxpPW4udmlzdWFsVmlld3BvcnQ7bGV0IHI9by5jbGllbnRXaWR0aCxzPW8uY2xpZW50SGVpZ2h0LGE9MCxsPTA7aWYoaSl7cj1pLndpZHRoLHM9aS5oZWlnaHQ7Y29uc3QgdD1JKCk7KCF0fHx0JiZcImZpeGVkXCI9PT1lKSYmKGE9aS5vZmZzZXRMZWZ0LGw9aS5vZmZzZXRUb3ApfXJldHVybnt3aWR0aDpyLGhlaWdodDpzLHg6YSx5Omx9fSh0LG4pO2Vsc2UgaWYoXCJkb2N1bWVudFwiPT09ZSlvPWZ1bmN0aW9uKHQpe2NvbnN0IGU9UCh0KSxuPXoodCksbz10Lm93bmVyRG9jdW1lbnQuYm9keSxpPWEoZS5zY3JvbGxXaWR0aCxlLmNsaWVudFdpZHRoLG8uc2Nyb2xsV2lkdGgsby5jbGllbnRXaWR0aCkscj1hKGUuc2Nyb2xsSGVpZ2h0LGUuY2xpZW50SGVpZ2h0LG8uc2Nyb2xsSGVpZ2h0LG8uY2xpZW50SGVpZ2h0KTtsZXQgcz0tbi5zY3JvbGxMZWZ0K0oodCk7Y29uc3QgbD0tbi5zY3JvbGxUb3A7cmV0dXJuXCJydGxcIj09PXEobykuZGlyZWN0aW9uJiYocys9YShlLmNsaWVudFdpZHRoLG8uY2xpZW50V2lkdGgpLWkpLHt3aWR0aDppLGhlaWdodDpyLHg6cyx5Omx9fShQKHQpKTtlbHNlIGlmKE8oZSkpbz1mdW5jdGlvbih0LGUpe2NvbnN0IG49Ryh0LCEwLFwiZml4ZWRcIj09PWUpLG89bi50b3ArdC5jbGllbnRUb3AsaT1uLmxlZnQrdC5jbGllbnRMZWZ0LHI9TSh0KT8kKHQpOmQoMSk7cmV0dXJue3dpZHRoOnQuY2xpZW50V2lkdGgqci54LGhlaWdodDp0LmNsaWVudEhlaWdodCpyLnkseDppKnIueCx5Om8qci55fX0oZSxuKTtlbHNle2NvbnN0IG49WSh0KTtvPXsuLi5lLHg6ZS54LW4ueCx5OmUueS1uLnl9fXJldHVybiBBKG8pfWZ1bmN0aW9uIFoodCxlKXtjb25zdCBuPVYodCk7cmV0dXJuIShuPT09ZXx8IU8obil8fEYobikpJiYoXCJmaXhlZFwiPT09cShuKS5wb3NpdGlvbnx8WihuLGUpKX1mdW5jdGlvbiB0dCh0LGUsbil7Y29uc3Qgbz1NKGUpLGk9UChlKSxyPVwiZml4ZWRcIj09PW4scz1HKHQsITAscixlKTtsZXQgYT17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfTtjb25zdCBsPWQoMCk7aWYob3x8IW8mJiFyKWlmKChcImJvZHlcIiE9PV8oZSl8fGooaSkpJiYoYT16KGUpKSxvKXtjb25zdCB0PUcoZSwhMCxyLGUpO2wueD10LngrZS5jbGllbnRMZWZ0LGwueT10LnkrZS5jbGllbnRUb3B9ZWxzZSBpJiYobC54PUooaSkpO3JldHVybnt4OnMubGVmdCthLnNjcm9sbExlZnQtbC54LHk6cy50b3ArYS5zY3JvbGxUb3AtbC55LHdpZHRoOnMud2lkdGgsaGVpZ2h0OnMuaGVpZ2h0fX1mdW5jdGlvbiBldCh0LGUpe3JldHVybiBNKHQpJiZcImZpeGVkXCIhPT1xKHQpLnBvc2l0aW9uP2U/ZSh0KTp0Lm9mZnNldFBhcmVudDpudWxsfWZ1bmN0aW9uIG50KHQsZSl7Y29uc3Qgbj1MKHQpO2lmKCFNKHQpKXJldHVybiBuO2xldCBvPWV0KHQsZSk7Zm9yKDtvJiZEKG8pJiZcInN0YXRpY1wiPT09cShvKS5wb3NpdGlvbjspbz1ldChvLGUpO3JldHVybiBvJiYoXCJodG1sXCI9PT1fKG8pfHxcImJvZHlcIj09PV8obykmJlwic3RhdGljXCI9PT1xKG8pLnBvc2l0aW9uJiYhTihvKSk/bjpvfHxmdW5jdGlvbih0KXtsZXQgZT1WKHQpO2Zvcig7TShlKSYmIUYoZSk7KXtpZihOKGUpKXJldHVybiBlO2U9VihlKX1yZXR1cm4gbnVsbH0odCl8fG59Y29uc3Qgb3Q9e2NvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0OmZ1bmN0aW9uKHQpe2xldHtyZWN0OmUsb2Zmc2V0UGFyZW50Om4sc3RyYXRlZ3k6b309dDtjb25zdCBpPU0obikscj1QKG4pO2lmKG49PT1yKXJldHVybiBlO2xldCBzPXtzY3JvbGxMZWZ0OjAsc2Nyb2xsVG9wOjB9LGE9ZCgxKTtjb25zdCBsPWQoMCk7aWYoKGl8fCFpJiZcImZpeGVkXCIhPT1vKSYmKChcImJvZHlcIiE9PV8obil8fGoocikpJiYocz16KG4pKSxNKG4pKSl7Y29uc3QgdD1HKG4pO2E9JChuKSxsLng9dC54K24uY2xpZW50TGVmdCxsLnk9dC55K24uY2xpZW50VG9wfXJldHVybnt3aWR0aDplLndpZHRoKmEueCxoZWlnaHQ6ZS5oZWlnaHQqYS55LHg6ZS54KmEueC1zLnNjcm9sbExlZnQqYS54K2wueCx5OmUueSphLnktcy5zY3JvbGxUb3AqYS55K2wueX19LGdldERvY3VtZW50RWxlbWVudDpQLGdldENsaXBwaW5nUmVjdDpmdW5jdGlvbih0KXtsZXR7ZWxlbWVudDplLGJvdW5kYXJ5Om4scm9vdEJvdW5kYXJ5Om8sc3RyYXRlZ3k6aX09dDtjb25zdCByPVsuLi5cImNsaXBwaW5nQW5jZXN0b3JzXCI9PT1uP2Z1bmN0aW9uKHQsZSl7Y29uc3Qgbj1lLmdldCh0KTtpZihuKXJldHVybiBuO2xldCBvPUgodCkuZmlsdGVyKCh0PT5PKHQpJiZcImJvZHlcIiE9PV8odCkpKSxpPW51bGw7Y29uc3Qgcj1cImZpeGVkXCI9PT1xKHQpLnBvc2l0aW9uO2xldCBzPXI/Vih0KTp0O2Zvcig7TyhzKSYmIUYocyk7KXtjb25zdCBlPXEocyksbj1OKHMpO258fFwiZml4ZWRcIiE9PWUucG9zaXRpb258fChpPW51bGwpLChyPyFuJiYhaTohbiYmXCJzdGF0aWNcIj09PWUucG9zaXRpb24mJmkmJltcImFic29sdXRlXCIsXCJmaXhlZFwiXS5pbmNsdWRlcyhpLnBvc2l0aW9uKXx8aihzKSYmIW4mJloodCxzKSk/bz1vLmZpbHRlcigodD0+dCE9PXMpKTppPWUscz1WKHMpfXJldHVybiBlLnNldCh0LG8pLG99KGUsdGhpcy5fYyk6W10uY29uY2F0KG4pLG9dLGw9clswXSxjPXIucmVkdWNlKCgodCxuKT0+e2NvbnN0IG89UShlLG4saSk7cmV0dXJuIHQudG9wPWEoby50b3AsdC50b3ApLHQucmlnaHQ9cyhvLnJpZ2h0LHQucmlnaHQpLHQuYm90dG9tPXMoby5ib3R0b20sdC5ib3R0b20pLHQubGVmdD1hKG8ubGVmdCx0LmxlZnQpLHR9KSxRKGUsbCxpKSk7cmV0dXJue3dpZHRoOmMucmlnaHQtYy5sZWZ0LGhlaWdodDpjLmJvdHRvbS1jLnRvcCx4OmMubGVmdCx5OmMudG9wfX0sZ2V0T2Zmc2V0UGFyZW50Om50LGdldEVsZW1lbnRSZWN0czphc3luYyBmdW5jdGlvbih0KXtsZXR7cmVmZXJlbmNlOmUsZmxvYXRpbmc6bixzdHJhdGVneTpvfT10O2NvbnN0IGk9dGhpcy5nZXRPZmZzZXRQYXJlbnR8fG50LHI9dGhpcy5nZXREaW1lbnNpb25zO3JldHVybntyZWZlcmVuY2U6dHQoZSxhd2FpdCBpKG4pLG8pLGZsb2F0aW5nOnt4OjAseTowLC4uLmF3YWl0IHIobil9fX0sZ2V0Q2xpZW50UmVjdHM6ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmZyb20odC5nZXRDbGllbnRSZWN0cygpKX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbih0KXtyZXR1cm4gVyh0KX0sZ2V0U2NhbGU6JCxpc0VsZW1lbnQ6Tyxpc1JUTDpmdW5jdGlvbih0KXtyZXR1cm5cInJ0bFwiPT09cSh0KS5kaXJlY3Rpb259fTtsZXQgaXQ9Y2xhc3MgZXh0ZW5kcyB0LkN1c3RvbUNvbXBvbmVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZT10aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlLmJpbmQodGhpcyksdGhpcy5oYW5kbGVTbG90Q2hhbmdlPXRoaXMuaGFuZGxlU2xvdENoYW5nZS5iaW5kKHRoaXMpLHRoaXMuYXV0b0FkanVzdD10aGlzLmF1dG9BZGp1c3QuYmluZCh0aGlzKSx0aGlzLmlzTW92aW5nQ29tbWFuZD0hMSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PTB9c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJpcy1vcGVuXCIsXCJkZWZhdWx0LWxhYmVsLXBvc2l0aW9uXCIsXCJjdXN0b20tbWVudVwiXX1nZXQgZGVmYXVsdExhYmVsUG9zaXRpb24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiKSkmJnZvaWQgMCE9PXQ/dDpcInJpZ2h0XCJ9c2V0IGRlZmF1bHRMYWJlbFBvc2l0aW9uKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiLHQpLHRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfWdldCBpc09wZW4oKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJpcy1vcGVuXCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcImlzLW9wZW5cIil9Z2V0IGN1c3RvbU1lbnUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiKX1zZXQgY3VzdG9tTWVudSh0KXt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcImN1c3RvbS1tZW51XCIsdCl9Z2V0IGNvbW1hbmRCYXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbW1hbmRCYXIpJiZ2b2lkIDAhPT10fHwodGhpcy5fY29tbWFuZEJhcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jb21tYW5kLWJhclwiKSksdGhpcy5fY29tbWFuZEJhcn1nZXQgcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9wcmltYXJ5Q29tbWFuZHNDb250YWluZXIpJiZ2b2lkIDAhPT10fHwodGhpcy5fcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktY29tbWFuZHNcIikpLHRoaXMuX3ByaW1hcnlDb21tYW5kc0NvbnRhaW5lcn1nZXQgcHJpbWFyeUNvbW1hbmRzU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdCkmJnZvaWQgMCE9PXR8fCh0aGlzLl9wcmltYXJ5Q29tbWFuZHNTbG90PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktY29tbWFuZHMgc2xvdFwiKSksdGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdH1nZXQgbW9yZUJ1dHRvbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fbW9yZUJ1dHRvbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9tb3JlQnV0dG9uPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUtYnV0dG9uXCIpKSx0aGlzLl9tb3JlQnV0dG9ufWdldCBzZWNvbmRhcnlDb21tYW5kc0Rpdigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXYpJiZ2b2lkIDAhPT10fHwodGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXY9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5LWNvbW1hbmRzXCIpKSx0aGlzLl9zZWNvbmRhcnlDb21tYW5kc0Rpdn1nZXQgc2Vjb25kYXJ5Q29tbWFuZHNTbG90KCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9zZWNvbmRhcnlDb21tYW5kc1Nsb3QpJiZ2b2lkIDAhPT10fHwodGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNTbG90PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPXNlY29uZGFyeS1jb21tYW5kc11cIikpLHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzU2xvdH1nZXQgY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbGxhcHNlZC1jb21tYW5kc1wiKSksdGhpcy5fY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXJ9Z2V0IGNvbW1hbmRzKCl7cmV0dXJuWy4uLnRoaXMucHJpbWFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZEVsZW1lbnRzKCkuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgcikpLC4uLnRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkRWxlbWVudHMoKS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiByKSksLi4udGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lci5jaGlsZE5vZGVzXX1yZW5kZXIoKXtyZXR1cm5cIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbW1hbmQtYmFyJz5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJpbWFyeS1jb21tYW5kcyc+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb3JlLWJ1dHRvbicgdGl0bGU9J1NlZSBtb3JlJz5cXG4gICAgICAgICAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24gc3ltYm9sPSdNb3JlJyBmb250LXNpemU9JzIwJz48L2ZsdWVudC1zeW1ib2wtaWNvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NlY29uZGFyeS1jb21tYW5kcyc+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPSdzZWNvbmRhcnktY29tbWFuZHMnPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbGxhcHNlZC1jb21tYW5kcyc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIn1jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMubW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwodD0+e3Quc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5jdXN0b21NZW51P3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJtZW51aW52b2tlZFwiLHtidWJibGVzOiEwfSkpOnRoaXMudG9nZ2xlQXR0cmlidXRlKFwiaXMtb3BlblwiLCF0aGlzLmlzT3Blbil9KSksdGhpcy5wcmltYXJ5Q29tbWFuZHNTbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsdGhpcy5oYW5kbGVTbG90Q2hhbmdlKSx0aGlzLnNlY29uZGFyeUNvbW1hbmRzU2xvdC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCh0PT57aWYodGhpcy5zZWNvbmRhcnlDb250YWluZXI9dGhpcy5zZWNvbmRhcnlDb21tYW5kc1Nsb3QuYXNzaWduZWROb2RlcygpWzBdLHRoaXMuc2V0TW9yZUJ1dHRvblZpc2liaWxpdHkoKSwhdGhpcy5zZWNvbmRhcnlDb250YWluZXIpcmV0dXJuO3ZhciBlPXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmbHVlbnQtYXBwLWJhci1idXR0b25cIiksbj10aGlzLnNlY29uZGFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZmx1ZW50LWFwcC1iYXItc2VwYXJhdG9yXCIpO2NvbnN0IG89NipBcnJheS5mcm9tKGUpLnJlZHVjZSgoKHQsZSk9PnQuZm9ybWF0dGVkQWNjZWxlcmF0b3IubGVuZ3RoPmUuZm9ybWF0dGVkQWNjZWxlcmF0b3IubGVuZ3RoP3Q6ZSkpLmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aDtlLmZvckVhY2goKHQ9Pnt0LnRvZ2dsZUF0dHJpYnV0ZShcImlzLXNlY29uZGFyeVwiLCEwKSx0LnNldEFjY2VsZXJhdG9yV2lkdGgobyl9KSksbi5mb3JFYWNoKCh0PT57dC50b2dnbGVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsITApfSkpfSkpLHRoaXMucGFyZW50UmVzaXplT2JzZXJ2ZXI9bmV3IFJlc2l6ZU9ic2VydmVyKCgoKT0+dGhpcy5hdXRvQWRqdXN0KCkpKSx0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5wYXJlbnRFbGVtZW50KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCgpPT57dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJpcy1vcGVuXCIsITEpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0KXtzd2l0Y2godCl7Y2FzZVwiaXMtb3BlblwiOnRoaXMuc2V0SXNPcGVuKCk7YnJlYWs7Y2FzZVwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiOnRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMucGFyZW50UmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpfXNldExhYmVsUG9zaXRpb24oKXtpZihbXCJib3R0b21cIixcImNvbGxhcHNlZFwiLFwicmlnaHRcIl0uaW5jbHVkZXModGhpcy5kZWZhdWx0TGFiZWxQb3NpdGlvbikpe3ZhciB0PXRoaXMuZGVmYXVsdExhYmVsUG9zaXRpb247XCJib3R0b21cIiE9PXR8fHRoaXMuaXNPcGVufHwodD1cImNvbGxhcHNlZFwiKSx0aGlzLnByaW1hcnlDb21tYW5kcz90aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlKHQpOnNldFRpbWVvdXQoKCgpPT50aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlKHQpKSw1MCl9fXNldENvbW1hbmRBcHBlYXJhbmNlKHQpe3ZhciBlO3JldHVybiBudWxsPT09KGU9dGhpcy5wcmltYXJ5Q29tbWFuZHMpfHx2b2lkIDA9PT1lfHxlLmZvckVhY2goKGU9PntlLnNldEF0dHJpYnV0ZShcImFwcGVhcmFuY2VcIix0KX0pKSwhIXRoaXMucHJpbWFyeUNvbW1hbmRzfXNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCl7Y29uc3QgdD10aGlzLnNlY29uZGFyeUNvbnRhaW5lciYmdGhpcy5zZWNvbmRhcnlDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RofHx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDt0aGlzLm1vcmVCdXR0b24uc3R5bGUuZGlzcGxheT10P1wiZmxleFwiOlwibm9uZVwifXNldElzT3Blbigpe3RoaXMuY29tbWFuZEJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsdGhpcy5pc09wZW4pLHRoaXMuaXNPcGVuP3RoaXMuX21lbnVDbGVhbnVwPWZ1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPXt9KTtjb25zdHthbmNlc3RvclNjcm9sbDppPSEwLGFuY2VzdG9yUmVzaXplOnI9ITAsZWxlbWVudFJlc2l6ZTpsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFJlc2l6ZU9ic2VydmVyLGxheW91dFNoaWZ0OmQ9XCJmdW5jdGlvblwiPT10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsYW5pbWF0aW9uRnJhbWU6dT0hMX09byxtPVUodCksaD1pfHxyP1suLi5tP0gobSk6W10sLi4uSChlKV06W107aC5mb3JFYWNoKCh0PT57aSYmdC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbix7cGFzc2l2ZTohMH0pLHImJnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG4pfSkpO2NvbnN0IHA9bSYmZD9mdW5jdGlvbih0LGUpe2xldCBuLG89bnVsbDtjb25zdCBpPVAodCk7ZnVuY3Rpb24gcigpe2NsZWFyVGltZW91dChuKSxvJiZvLmRpc2Nvbm5lY3QoKSxvPW51bGx9cmV0dXJuIGZ1bmN0aW9uIGwoZCx1KXt2b2lkIDA9PT1kJiYoZD0hMSksdm9pZCAwPT09dSYmKHU9MSkscigpO2NvbnN0e2xlZnQ6bSx0b3A6aCx3aWR0aDpwLGhlaWdodDpmfT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKGR8fGUoKSwhcHx8IWYpcmV0dXJuO2NvbnN0IHk9e3Jvb3RNYXJnaW46LWMoaCkrXCJweCBcIistYyhpLmNsaWVudFdpZHRoLShtK3ApKStcInB4IFwiKy1jKGkuY2xpZW50SGVpZ2h0LShoK2YpKStcInB4IFwiKy1jKG0pK1wicHhcIix0aHJlc2hvbGQ6YSgwLHMoMSx1KSl8fDF9O2xldCBiPSEwO2Z1bmN0aW9uIGcodCl7Y29uc3QgZT10WzBdLmludGVyc2VjdGlvblJhdGlvO2lmKGUhPT11KXtpZighYilyZXR1cm4gbCgpO2U/bCghMSxlKTpuPXNldFRpbWVvdXQoKCgpPT57bCghMSwxZS03KX0pLDEwMCl9Yj0hMX10cnl7bz1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZyx7Li4ueSxyb290Omkub3duZXJEb2N1bWVudH0pfWNhdGNoKHQpe289bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGcseSl9by5vYnNlcnZlKHQpfSghMCkscn0obSxuKTpudWxsO2xldCBmLHk9LTEsYj1udWxsO2wmJihiPW5ldyBSZXNpemVPYnNlcnZlcigodD0+e2xldFtvXT10O28mJm8udGFyZ2V0PT09bSYmYiYmKGIudW5vYnNlcnZlKGUpLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHkpLHk9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+e2ImJmIub2JzZXJ2ZShlKX0pKSksbigpfSkpLG0mJiF1JiZiLm9ic2VydmUobSksYi5vYnNlcnZlKGUpKTtsZXQgZz11P0codCk6bnVsbDtyZXR1cm4gdSYmZnVuY3Rpb24gZSgpe2NvbnN0IG89Ryh0KTshZ3x8by54PT09Zy54JiZvLnk9PT1nLnkmJm8ud2lkdGg9PT1nLndpZHRoJiZvLmhlaWdodD09PWcuaGVpZ2h0fHxuKCksZz1vLGY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpfSgpLG4oKSwoKT0+e2guZm9yRWFjaCgodD0+e2kmJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG4pLHImJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG4pfSkpLHAmJnAoKSxiJiZiLmRpc2Nvbm5lY3QoKSxiPW51bGwsdSYmY2FuY2VsQW5pbWF0aW9uRnJhbWUoZil9fSh0aGlzLm1vcmVCdXR0b24sdGhpcy5zZWNvbmRhcnlDb21tYW5kc0Rpdix0aGlzLnVwZGF0ZU1lbnVQb3NpdGlvbi5iaW5kKHRoaXMpKTp0aGlzLl9tZW51Q2xlYW51cCYmdGhpcy5fbWVudUNsZWFudXAoKSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1oYW5kbGVTbG90Q2hhbmdlKCl7Y29uc3QgdD10aGlzLnByaW1hcnlDb21tYW5kc1Nsb3QuYXNzaWduZWROb2RlcygpO2lmKHRoaXMucHJpbWFyeUNvbW1hbmRzPXQuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlwiRkxVRU5ULUFQUC1CQVItQlVUVE9OXCI9PT10Lm5vZGVOYW1lKSksIXRoaXMuaXNNb3ZpbmdDb21tYW5kKXt0aGlzLnN0eWxlLm9wYWNpdHk9XCIwXCIsdGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZT10aGlzLnByaW1hcnlDb21tYW5kcy5tYXAoKHQ9Pih7cGFyZW50OnQucGFyZW50RWxlbWVudCxzZWxmOnQscHJldmlvdXM6dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGJvdW5kczp0LmdldENsaWVudFJlY3RzKClbMF0ucmlnaHQtdGhpcy5nZXRDbGllbnRSZWN0cygpWzBdLmxlZnR9KSkpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXg9dGhpcy5wcmltYXJ5Q29tbWFuZHMubGVuZ3RoLTE7Y29uc3QgdD1zZXRJbnRlcnZhbCgoKCk9Pnt0aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlJiYoY2xlYXJJbnRlcnZhbCh0KSx0aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlLmZvckVhY2godGhpcy5hdXRvQWRqdXN0KSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCksdGhpcy5zdHlsZS5vcGFjaXR5PVwiMVwiKX0pLDEwKX10aGlzLmlzTW92aW5nQ29tbWFuZD0hMSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1hdXRvQWRqdXN0KCl7dmFyIHQ7Y29uc3QgZT1udWxsIT09KHQ9dGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZSkmJnZvaWQgMCE9PXQ/dDpbXTtpZigwPT09ZS5sZW5ndGgpcmV0dXJuO2NvbnN0IG49dGhpcy5wYXJlbnRFbGVtZW50LmdldENsaWVudFJlY3RzKClbMF0ud2lkdGgtKHRoaXMuZ2V0TGVmdCgpKzQ3KzEyKSxvPXRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXgsaT1NYXRoLm1pbihlLmxlbmd0aC0xLG8rMSkscj1lW29dLHM9ZVtpXTtvPj0wJiZyLmJvdW5kcz5uJiYodGhpcy5tb3ZlQ29tbWFuZHMoci5zZWxmLHRoaXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lciksdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleC09MSxvPjAmJlwiRkxVRU5ULUFQUC1CQVItU0VQQVJBVE9SXCI9PT1yLnByZXZpb3VzLm5vZGVOYW1lJiZ0aGlzLm1vdmVDb21tYW5kcyhyLnByZXZpb3VzLHRoaXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcikpLGkhPT1vJiZzLmJvdW5kczxuJiYoaT4wJiZcIkZMVUVOVC1BUFAtQkFSLVNFUEFSQVRPUlwiPT09cy5wcmV2aW91cy5ub2RlTmFtZSYmdGhpcy5tb3ZlQ29tbWFuZHMocy5wcmV2aW91cyx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLHRoaXMpLHRoaXMubW92ZUNvbW1hbmRzKHMuc2VsZix0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLHRoaXMpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXg9aSl9Z2V0TGVmdCgpe2lmKCF0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpcmV0dXJuIDA7Y29uc3QgdD10aGlzLnBhcmVudEVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS5sZWZ0O3JldHVybiB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Q2xpZW50UmVjdHMoKVswXS5yaWdodC10fW1vdmVDb21tYW5kcyh0LGUsbil7dmFyIG87Y29uc3QgaT1lPT09dGhpcztpZih0aGlzLmlzTW92aW5nQ29tbWFuZD0hMCxlLnJlbW92ZUNoaWxkKHQpLGkpe2NvbnN0IGU9bi5maXJzdENoaWxkO24uaW5zZXJ0QmVmb3JlKHQsZSl9ZWxzZSBuLmFwcGVuZENoaWxkKHQpO3ZhciByPXtidWJibGVzOiEwLGRldGFpbDp7dHlwZTp0Lm5vZGVOYW1lLGNvbW1hbmQ6bnVsbCE9PShvPXQuZGF0YXNldC5jb21tYW5kKSYmdm9pZCAwIT09bz9vOm51bGwsY29sbGFwc2VkOml9fSxzPW5ldyBDdXN0b21FdmVudChcImNvbW1hbmRtb3ZlZFwiLHIpO3RoaXMuZGlzcGF0Y2hFdmVudChzKSx0aGlzLnRvZ2dsZUF0dHJpYnV0ZXModCxpKSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCl9dXBkYXRlTWVudVBvc2l0aW9uKCl7dmFyIHQ7KCh0LGUsbik9Pntjb25zdCBvPW5ldyBNYXAsaT17cGxhdGZvcm06b3QsLi4ubn0scj17Li4uaS5wbGF0Zm9ybSxfYzpvfTtyZXR1cm4oYXN5bmModCxlLG4pPT57Y29uc3R7cGxhY2VtZW50Om89XCJib3R0b21cIixzdHJhdGVneTppPVwiYWJzb2x1dGVcIixtaWRkbGV3YXJlOnI9W10scGxhdGZvcm06c309bixhPXIuZmlsdGVyKEJvb2xlYW4pLGw9YXdhaXQobnVsbD09cy5pc1JUTD92b2lkIDA6cy5pc1JUTChlKSk7bGV0IGM9YXdhaXQgcy5nZXRFbGVtZW50UmVjdHMoe3JlZmVyZW5jZTp0LGZsb2F0aW5nOmUsc3RyYXRlZ3k6aX0pLHt4OmQseTp1fT1rKGMsbyxsKSxtPW8saD17fSxwPTA7Zm9yKGxldCBuPTA7bjxhLmxlbmd0aDtuKyspe2NvbnN0e25hbWU6cixmbjpmfT1hW25dLHt4OnkseTpiLGRhdGE6ZyxyZXNldDp2fT1hd2FpdCBmKHt4OmQseTp1LGluaXRpYWxQbGFjZW1lbnQ6byxwbGFjZW1lbnQ6bSxzdHJhdGVneTppLG1pZGRsZXdhcmVEYXRhOmgscmVjdHM6YyxwbGF0Zm9ybTpzLGVsZW1lbnRzOntyZWZlcmVuY2U6dCxmbG9hdGluZzplfX0pO2Q9bnVsbCE9eT95OmQsdT1udWxsIT1iP2I6dSxoPXsuLi5oLFtyXTp7Li4uaFtyXSwuLi5nfX0sdiYmcDw9NTAmJihwKyssXCJvYmplY3RcIj09dHlwZW9mIHYmJih2LnBsYWNlbWVudCYmKG09di5wbGFjZW1lbnQpLHYucmVjdHMmJihjPSEwPT09di5yZWN0cz9hd2FpdCBzLmdldEVsZW1lbnRSZWN0cyh7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZSxzdHJhdGVneTppfSk6di5yZWN0cyksKHt4OmQseTp1fT1rKGMsbSxsKSkpLG49LTEpfXJldHVybnt4OmQseTp1LHBsYWNlbWVudDptLHN0cmF0ZWd5OmksbWlkZGxld2FyZURhdGE6aH19KSh0LGUsey4uLmkscGxhdGZvcm06cn0pfSkodGhpcy5tb3JlQnV0dG9uLHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYse3BsYWNlbWVudDpcImJvdHRvbS1lbmRcIixtaWRkbGV3YXJlOltFKDE2KSxSKCksKHZvaWQgMD09PXQmJih0PXt9KSx7bmFtZTpcInNoaWZ0XCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe2NvbnN0e3g6bix5Om8scGxhY2VtZW50Oml9PWUse21haW5BeGlzOnI9ITAsY3Jvc3NBeGlzOnM9ITEsbGltaXRlcjphPXtmbjp0PT57bGV0e3g6ZSx5Om59PXQ7cmV0dXJue3g6ZSx5Om59fX0sLi4ubH09cCh0LGUpLGM9e3g6bix5Om99LGQ9YXdhaXQgUyhlLGwpLHU9dihmKGkpKSxtPWIodSk7bGV0IHk9Y1ttXSxnPWNbdV07aWYocil7Y29uc3QgdD1cInlcIj09PW0/XCJib3R0b21cIjpcInJpZ2h0XCI7eT1oKHkrZFtcInlcIj09PW0/XCJ0b3BcIjpcImxlZnRcIl0seSx5LWRbdF0pfWlmKHMpe2NvbnN0IHQ9XCJ5XCI9PT11P1wiYm90dG9tXCI6XCJyaWdodFwiO2c9aChnK2RbXCJ5XCI9PT11P1widG9wXCI6XCJsZWZ0XCJdLGcsZy1kW3RdKX1jb25zdCB4PWEuZm4oey4uLmUsW21dOnksW3VdOmd9KTtyZXR1cm57Li4ueCxkYXRhOnt4OngueC1uLHk6eC55LW99fX19KV19KS50aGVuKCgoe3g6dCx5OmV9KT0+e09iamVjdC5hc3NpZ24odGhpcy5zZWNvbmRhcnlDb21tYW5kc0Rpdi5zdHlsZSx7bGVmdDpgJHt0fXB4YCx0b3A6YCR7ZX1weGB9KX0pKX10b2dnbGVBdHRyaWJ1dGVzKHQsZSl7bGV0IG47c3dpdGNoKHQubm9kZU5hbWUpe2Nhc2VcIkZMVUVOVC1BUFAtQkFSLUJVVFRPTlwiOm49XCJpcy1zZWNvbmRhcnlcIjticmVhaztjYXNlXCJGTFVFTlQtQVBQLUJBUi1TRVBBUkFUT1JcIjpuPVwiaG9yaXpvbnRhbFwifXQudG9nZ2xlQXR0cmlidXRlKG4sZSl9fTtpdC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb21tYW5kLWJhciB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJpbWFyeS1jb21tYW5kcyB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJpbWFyeS1jb21tYW5kczpub3QoOmVtcHR5KSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBCdXR0b24gKi9cXG4gICAgICAgIC5tb3JlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXByaW1hcnkpO1xcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5tb3JlLWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXRlcnRpYXJ5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5tb3JlLWJ1dHRvbiBmbHVlbnQtc3ltYm9sLWljb24ge1xcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBTZWNvbmRhcnkgY29tbWFuZHMgKi9cXG4gICAgICAgIC5zZWNvbmRhcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZmlsbC1taWNhLWJhc2UpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3IsIGx1bWlub3NpdHk7XFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTAwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMDBweCk7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3Ryb2tlLWNhcmQtZGVmYXVsdCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCB2YXIoLS1zaGFkb3ctZmx5b3V0KTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWFuZC1iYXIuYWN0aXZlIC5zZWNvbmRhcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29sbGFwc2VkLWNvbW1hbmRzOm5vdCg6ZW1wdHkpIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tc3Ryb2tlLWRpdmlkZXItZGVmYXVsdCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29sbGFwc2VkLWNvbW1hbmRzIGZsdWVudC1hcHAtYmFyLXNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgXCIsaXQ9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGkscj1hcmd1bWVudHMubGVuZ3RoLHM9cjwzP2U6bnVsbD09PW8/bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbik6bztpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlzPVJlZmxlY3QuZGVjb3JhdGUodCxlLG4sbyk7ZWxzZSBmb3IodmFyIGE9dC5sZW5ndGgtMTthPj0wO2EtLSkoaT10W2FdKSYmKHM9KHI8Mz9pKHMpOnI+Mz9pKGUsbixzKTppKGUsbikpfHxzKTtyZXR1cm4gcj4zJiZzJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHMpLHN9KFsoMCx0LmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtY29tbWFuZC1iYXJcIildLGl0KTtsZXQgcnQ9Y2xhc3MgZXh0ZW5kcyB0LkN1c3RvbUNvbXBvbmVudHtyZW5kZXIoKXtyZXR1cm5cIlwifX07cnQuc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Ryb2tlLWRpdmlkZXItZGVmYXVsdCk7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDFweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtob3Jpem9udGFsXSkge1xcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgXCIscnQ9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGkscj1hcmd1bWVudHMubGVuZ3RoLHM9cjwzP2U6bnVsbD09PW8/bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbik6bztpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlzPVJlZmxlY3QuZGVjb3JhdGUodCxlLG4sbyk7ZWxzZSBmb3IodmFyIGE9dC5sZW5ndGgtMTthPj0wO2EtLSkoaT10W2FdKSYmKHM9KHI8Mz9pKHMpOnI+Mz9pKGUsbixzKTppKGUsbikpfHxzKTtyZXR1cm4gcj4zJiZzJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHMpLHN9KFsoMCx0LmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtYXBwLWJhci1zZXBhcmF0b3JcIildLHJ0KX0pKCksb30pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQuanMubWFwIiwiIWZ1bmN0aW9uKGUsYSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9YSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5GbHVlbnRJY29uRWxlbWVudENvbXBvbmVudD1hKCk6ZS5GbHVlbnRJY29uRWxlbWVudENvbXBvbmVudD1hKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgZT17MjY5OmU9Pnt2YXIgYTtzZWxmLGE9KCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOihhLG4pPT57Zm9yKHZhciBsIGluIG4pZS5vKG4sbCkmJiFlLm8oYSxsKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsbCx7ZW51bWVyYWJsZTohMCxnZXQ6bltsXX0pfSxvOihlLGEpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxhKSxyOmU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sYT17fTtmdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbihhKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsYSl9fWUucihhKSxlLmQoYSx7Q3VzdG9tQ29tcG9uZW50OigpPT5sLGN1c3RvbUNvbXBvbmVudDooKT0+bn0pO2NsYXNzIGwgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCk7Y29uc3QgZT10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGUuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIGUgaW4gbC5fdGVtcGxhdGVzP2wuX3RlbXBsYXRlc1tlXTp0aGlzLmNyZWF0ZVRlbXBsYXRlKGUpfWNyZWF0ZVRlbXBsYXRlKGUpe3ZhciBhO2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGc9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBuLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShhPWcuc3R5bGVzKSYmdm9pZCAwIT09YT9hOlwiXCJ9PC9zdHlsZT5gLGwuX3RlbXBsYXRlc1tlXT1uLG59Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfX1yZXR1cm4gbC5fdGVtcGxhdGVzPXt9LGF9KSgpLGUuZXhwb3J0cz1hKCl9fSxhPXt9O2Z1bmN0aW9uIG4obCl7dmFyIGc9YVtsXTtpZih2b2lkIDAhPT1nKXJldHVybiBnLmV4cG9ydHM7dmFyIHA9YVtsXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbbF0ocCxwLmV4cG9ydHMsbikscC5leHBvcnRzfW4uZD0oZSxhKT0+e2Zvcih2YXIgbCBpbiBhKW4ubyhhLGwpJiYhbi5vKGUsbCkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGwse2VudW1lcmFibGU6ITAsZ2V0OmFbbF19KX0sbi5vPShlLGEpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxhKSxuLnI9ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBsPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO24ucihsKSxuLmQobCx7Rmx1ZW50Rm9udEljb246KCk9PnAsRmx1ZW50SW1hZ2VJY29uOigpPT50LEZsdWVudFN5bWJvbEljb246KCk9Pmh9KTt2YXIgZT1uKDI2OSksYT1mdW5jdGlvbihlLGEsbixsKXt2YXIgZyxwPWFyZ3VtZW50cy5sZW5ndGgsaD1wPDM/YTpudWxsPT09bD9sPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxuKTpsO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKWg9UmVmbGVjdC5kZWNvcmF0ZShlLGEsbixsKTtlbHNlIGZvcih2YXIgdD1lLmxlbmd0aC0xO3Q+PTA7dC0tKShnPWVbdF0pJiYoaD0ocDwzP2coaCk6cD4zP2coYSxuLGgpOmcoYSxuKSl8fGgpO3JldHVybiBwPjMmJmgmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLG4saCksaH07Y29uc3QgZz1be25hbWU6XCJHbG9iYWxOYXZCdXR0b25cIixnbHlwaDpcImU3MDBcIn0se25hbWU6XCJXaWZpXCIsZ2x5cGg6XCJlNzAxXCJ9LHtuYW1lOlwiQmx1ZXRvb3RoXCIsZ2x5cGg6XCJlNzAyXCJ9LHtuYW1lOlwiQ29ubmVjdFwiLGdseXBoOlwiZTcwM1wifSx7bmFtZTpcIkludGVybmV0U2hhcmluZ1wiLGdseXBoOlwiZTcwNFwifSx7bmFtZTpcIlZQTlwiLGdseXBoOlwiZTcwNVwifSx7bmFtZTpcIkJyaWdodG5lc3NcIixnbHlwaDpcImU3MDZcIn0se25hbWU6XCJNYXBQaW5cIixnbHlwaDpcImU3MDdcIn0se25hbWU6XCJRdWlldEhvdXJzXCIsZ2x5cGg6XCJlNzA4XCJ9LHtuYW1lOlwiQWlycGxhbmVcIixnbHlwaDpcImU3MDlcIn0se25hbWU6XCJUYWJsZXRcIixnbHlwaDpcImU3MGFcIn0se25hbWU6XCJRdWlja05vdGVcIixnbHlwaDpcImU3MGJcIn0se25hbWU6XCJSZW1lbWJlcmVkRGV2aWNlXCIsZ2x5cGg6XCJlNzBjXCJ9LHtuYW1lOlwiQ2hldnJvbkRvd25cIixnbHlwaDpcImU3MGRcIn0se25hbWU6XCJDaGV2cm9uVXBcIixnbHlwaDpcImU3MGVcIn0se25hbWU6XCJFZGl0XCIsZ2x5cGg6XCJlNzBmXCJ9LHtuYW1lOlwiQWRkXCIsZ2x5cGg6XCJlNzEwXCJ9LHtuYW1lOlwiQ2FuY2VsXCIsZ2x5cGg6XCJlNzExXCJ9LHtuYW1lOlwiTW9yZVwiLGdseXBoOlwiZTcxMlwifSx7bmFtZTpcIlNldHRpbmdzXCIsZ2x5cGg6XCJlNzEzXCJ9LHtuYW1lOlwiVmlkZW9cIixnbHlwaDpcImU3MTRcIn0se25hbWU6XCJNYWlsXCIsZ2x5cGg6XCJlNzE1XCJ9LHtuYW1lOlwiUGVvcGxlXCIsZ2x5cGg6XCJlNzE2XCJ9LHtuYW1lOlwiUGhvbmVcIixnbHlwaDpcImU3MTdcIn0se25hbWU6XCJQaW5cIixnbHlwaDpcImU3MThcIn0se25hbWU6XCJTaG9wXCIsZ2x5cGg6XCJlNzE5XCJ9LHtuYW1lOlwiU3RvcFwiLGdseXBoOlwiZTcxYVwifSx7bmFtZTpcIkxpbmtcIixnbHlwaDpcImU3MWJcIn0se25hbWU6XCJGaWx0ZXJcIixnbHlwaDpcImU3MWNcIn0se25hbWU6XCJBbGxBcHBzXCIsZ2x5cGg6XCJlNzFkXCJ9LHtuYW1lOlwiWm9vbVwiLGdseXBoOlwiZTcxZVwifSx7bmFtZTpcIlpvb21PdXRcIixnbHlwaDpcImU3MWZcIn0se25hbWU6XCJNaWNyb3Bob25lXCIsZ2x5cGg6XCJlNzIwXCJ9LHtuYW1lOlwiU2VhcmNoXCIsZ2x5cGg6XCJlNzIxXCJ9LHtuYW1lOlwiQ2FtZXJhXCIsZ2x5cGg6XCJlNzIyXCJ9LHtuYW1lOlwiQXR0YWNoXCIsZ2x5cGg6XCJlNzIzXCJ9LHtuYW1lOlwiU2VuZFwiLGdseXBoOlwiZTcyNFwifSx7bmFtZTpcIlNlbmRGaWxsXCIsZ2x5cGg6XCJlNzI1XCJ9LHtuYW1lOlwiV2Fsa1NvbGlkXCIsZ2x5cGg6XCJlNzI2XCJ9LHtuYW1lOlwiSW5Qcml2YXRlXCIsZ2x5cGg6XCJlNzI3XCJ9LHtuYW1lOlwiRmF2b3JpdGVMaXN0XCIsZ2x5cGg6XCJlNzI4XCJ9LHtuYW1lOlwiUGFnZVNvbGlkXCIsZ2x5cGg6XCJlNzI5XCJ9LHtuYW1lOlwiRm9yd2FyZFwiLGdseXBoOlwiZTcyYVwifSx7bmFtZTpcIkJhY2tcIixnbHlwaDpcImU3MmJcIn0se25hbWU6XCJSZWZyZXNoXCIsZ2x5cGg6XCJlNzJjXCJ9LHtuYW1lOlwiU2hhcmVcIixnbHlwaDpcImU3MmRcIn0se25hbWU6XCJMb2NrXCIsZ2x5cGg6XCJlNzJlXCJ9LHtuYW1lOlwiUmVwb3J0SGFja2VkXCIsZ2x5cGg6XCJlNzMwXCJ9LHtuYW1lOlwiRU1JXCIsZ2x5cGg6XCJlNzMxXCJ9LHtuYW1lOlwiRmF2b3JpdGVTdGFyXCIsZ2x5cGg6XCJlNzM0XCJ9LHtuYW1lOlwiRmF2b3JpdGVTdGFyRmlsbFwiLGdseXBoOlwiZTczNVwifSx7bmFtZTpcIlJlYWRpbmdNb2RlXCIsZ2x5cGg6XCJlNzM2XCJ9LHtuYW1lOlwiRmF2aWNvblwiLGdseXBoOlwiZTczN1wifSx7bmFtZTpcIlJlbW92ZVwiLGdseXBoOlwiZTczOFwifSx7bmFtZTpcIkNoZWNrYm94XCIsZ2x5cGg6XCJlNzM5XCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGVcIixnbHlwaDpcImU3M2FcIn0se25hbWU6XCJDaGVja2JveEZpbGxcIixnbHlwaDpcImU3M2JcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVcIixnbHlwaDpcImU3M2NcIn0se25hbWU6XCJDaGVja2JveENvbXBvc2l0ZVJldmVyc2VkXCIsZ2x5cGg6XCJlNzNkXCJ9LHtuYW1lOlwiQ2hlY2tNYXJrXCIsZ2x5cGg6XCJlNzNlXCJ9LHtuYW1lOlwiQmFja1RvV2luZG93XCIsZ2x5cGg6XCJlNzNmXCJ9LHtuYW1lOlwiRnVsbFNjcmVlblwiLGdseXBoOlwiZTc0MFwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTGFyZ2VyXCIsZ2x5cGg6XCJlNzQxXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hTbWFsbGVyXCIsZ2x5cGg6XCJlNzQyXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VTbWFsbFwiLGdseXBoOlwiZTc0M1wifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTWVkaXVtXCIsZ2x5cGg6XCJlNzQ0XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VXaWRlXCIsZ2x5cGg6XCJlNzQ1XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VUYWxsXCIsZ2x5cGg6XCJlNzQ2XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VMYXJnZVwiLGdseXBoOlwiZTc0N1wifSx7bmFtZTpcIlN3aXRjaFVzZXJcIixnbHlwaDpcImU3NDhcIn0se25hbWU6XCJQcmludFwiLGdseXBoOlwiZTc0OVwifSx7bmFtZTpcIlVwXCIsZ2x5cGg6XCJlNzRhXCJ9LHtuYW1lOlwiRG93blwiLGdseXBoOlwiZTc0YlwifSx7bmFtZTpcIk9FTVwiLGdseXBoOlwiZTc0Y1wifSx7bmFtZTpcIkRlbGV0ZVwiLGdseXBoOlwiZTc0ZFwifSx7bmFtZTpcIlNhdmVcIixnbHlwaDpcImU3NGVcIn0se25hbWU6XCJNdXRlXCIsZ2x5cGg6XCJlNzRmXCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZXCIsZ2x5cGg6XCJlNzUwXCJ9LHtuYW1lOlwiUmV0dXJuS2V5XCIsZ2x5cGg6XCJlNzUxXCJ9LHtuYW1lOlwiVXBBcnJvd1NoaWZ0S2V5XCIsZ2x5cGg6XCJlNzUyXCJ9LHtuYW1lOlwiQ2xvdWRcIixnbHlwaDpcImU3NTNcIn0se25hbWU6XCJGbGFzaGxpZ2h0XCIsZ2x5cGg6XCJlNzU0XCJ9LHtuYW1lOlwiUm90YXRpb25Mb2NrXCIsZ2x5cGg6XCJlNzU1XCJ9LHtuYW1lOlwiQ29tbWFuZFByb21wdFwiLGdseXBoOlwiZTc1NlwifSx7bmFtZTpcIlNJUE1vdmVcIixnbHlwaDpcImU3NTlcIn0se25hbWU6XCJTSVBVbmRvY2tcIixnbHlwaDpcImU3NWFcIn0se25hbWU6XCJTSVBSZWRvY2tcIixnbHlwaDpcImU3NWJcIn0se25hbWU6XCJFcmFzZVRvb2xcIixnbHlwaDpcImU3NWNcIn0se25hbWU6XCJVbmRlcnNjb3JlU3BhY2VcIixnbHlwaDpcImU3NWRcIn0se25hbWU6XCJHcmlwcGVyVG9vbFwiLGdseXBoOlwiZTc1ZVwifSx7bmFtZTpcIkRpYWxwYWRcIixnbHlwaDpcImU3NWZcIn0se25hbWU6XCJQYWdlTGVmdFwiLGdseXBoOlwiZTc2MFwifSx7bmFtZTpcIlBhZ2VSaWdodFwiLGdseXBoOlwiZTc2MVwifSx7bmFtZTpcIk11bHRpU2VsZWN0XCIsZ2x5cGg6XCJlNzYyXCJ9LHtuYW1lOlwiS2V5Ym9hcmRMZWZ0SGFuZGVkXCIsZ2x5cGg6XCJlNzYzXCJ9LHtuYW1lOlwiS2V5Ym9hcmRSaWdodEhhbmRlZFwiLGdseXBoOlwiZTc2NFwifSx7bmFtZTpcIktleWJvYXJkQ2xhc3NpY1wiLGdseXBoOlwiZTc2NVwifSx7bmFtZTpcIktleWJvYXJkU3BsaXRcIixnbHlwaDpcImU3NjZcIn0se25hbWU6XCJWb2x1bWVcIixnbHlwaDpcImU3NjdcIn0se25hbWU6XCJQbGF5XCIsZ2x5cGg6XCJlNzY4XCJ9LHtuYW1lOlwiUGF1c2VcIixnbHlwaDpcImU3NjlcIn0se25hbWU6XCJDaGV2cm9uTGVmdFwiLGdseXBoOlwiZTc2YlwifSx7bmFtZTpcIkNoZXZyb25SaWdodFwiLGdseXBoOlwiZTc2Y1wifSx7bmFtZTpcIklua2luZ1Rvb2xcIixnbHlwaDpcImU3NmRcIn0se25hbWU6XCJFbW9qaTJcIixnbHlwaDpcImU3NmVcIn0se25hbWU6XCJHcmlwcGVyQmFySG9yaXpvbnRhbFwiLGdseXBoOlwiZTc2ZlwifSx7bmFtZTpcIlN5c3RlbVwiLGdseXBoOlwiZTc3MFwifSx7bmFtZTpcIlBlcnNvbmFsaXplXCIsZ2x5cGg6XCJlNzcxXCJ9LHtuYW1lOlwiRGV2aWNlc1wiLGdseXBoOlwiZTc3MlwifSx7bmFtZTpcIlNlYXJjaEFuZEFwcHNcIixnbHlwaDpcImU3NzNcIn0se25hbWU6XCJHbG9iZVwiLGdseXBoOlwiZTc3NFwifSx7bmFtZTpcIlRpbWVMYW5ndWFnZVwiLGdseXBoOlwiZTc3NVwifSx7bmFtZTpcIkVhc2VPZkFjY2Vzc1wiLGdseXBoOlwiZTc3NlwifSx7bmFtZTpcIlVwZGF0ZVJlc3RvcmVcIixnbHlwaDpcImU3NzdcIn0se25hbWU6XCJIYW5nVXBcIixnbHlwaDpcImU3NzhcIn0se25hbWU6XCJDb250YWN0SW5mb1wiLGdseXBoOlwiZTc3OVwifSx7bmFtZTpcIlVucGluXCIsZ2x5cGg6XCJlNzdhXCJ9LHtuYW1lOlwiQ29udGFjdFwiLGdseXBoOlwiZTc3YlwifSx7bmFtZTpcIk1lbW9cIixnbHlwaDpcImU3N2NcIn0se25hbWU6XCJJbmNvbWluZ0NhbGxcIixnbHlwaDpcImU3N2VcIn0se25hbWU6XCJQYXN0ZVwiLGdseXBoOlwiZTc3ZlwifSx7bmFtZTpcIlBob25lQm9va1wiLGdseXBoOlwiZTc4MFwifSx7bmFtZTpcIkxFRExpZ2h0XCIsZ2x5cGg6XCJlNzgxXCJ9LHtuYW1lOlwiRXJyb3JcIixnbHlwaDpcImU3ODNcIn0se25hbWU6XCJHcmlwcGVyQmFyVmVydGljYWxcIixnbHlwaDpcImU3ODRcIn0se25hbWU6XCJVbmxvY2tcIixnbHlwaDpcImU3ODVcIn0se25hbWU6XCJTbGlkZXNob3dcIixnbHlwaDpcImU3ODZcIn0se25hbWU6XCJDYWxlbmRhclwiLGdseXBoOlwiZTc4N1wifSx7bmFtZTpcIkdyaXBwZXJSZXNpemVcIixnbHlwaDpcImU3ODhcIn0se25hbWU6XCJNZWdhcGhvbmVcIixnbHlwaDpcImU3ODlcIn0se25hbWU6XCJUcmltXCIsZ2x5cGg6XCJlNzhhXCJ9LHtuYW1lOlwiTmV3V2luZG93XCIsZ2x5cGg6XCJlNzhiXCJ9LHtuYW1lOlwiU2F2ZUxvY2FsXCIsZ2x5cGg6XCJlNzhjXCJ9LHtuYW1lOlwiQ29sb3JcIixnbHlwaDpcImU3OTBcIn0se25hbWU6XCJEYXRhU2Vuc2VcIixnbHlwaDpcImU3OTFcIn0se25hbWU6XCJTYXZlQXNcIixnbHlwaDpcImU3OTJcIn0se25hbWU6XCJMaWdodFwiLGdseXBoOlwiZTc5M1wifSx7bmFtZTpcIkFzcGVjdFJhdGlvXCIsZ2x5cGg6XCJlNzk5XCJ9LHtuYW1lOlwiRGF0YVNlbnNlQmFyXCIsZ2x5cGg6XCJlN2E1XCJ9LHtuYW1lOlwiUmVkb1wiLGdseXBoOlwiZTdhNlwifSx7bmFtZTpcIlVuZG9cIixnbHlwaDpcImU3YTdcIn0se25hbWU6XCJDcm9wXCIsZ2x5cGg6XCJlN2E4XCJ9LHtuYW1lOlwiT3BlbldpdGhcIixnbHlwaDpcImU3YWNcIn0se25hbWU6XCJSb3RhdGVcIixnbHlwaDpcImU3YWRcIn0se25hbWU6XCJSZWRFeWVcIixnbHlwaDpcImU3YjNcIn0se25hbWU6XCJTZXRsb2NrU2NyZWVuXCIsZ2x5cGg6XCJlN2I1XCJ9LHtuYW1lOlwiTWFwUGluMlwiLGdseXBoOlwiZTdiN1wifSx7bmFtZTpcIlBhY2thZ2VcIixnbHlwaDpcImU3YjhcIn0se25hbWU6XCJXYXJuaW5nXCIsZ2x5cGg6XCJlN2JhXCJ9LHtuYW1lOlwiUmVhZGluZ0xpc3RcIixnbHlwaDpcImU3YmNcIn0se25hbWU6XCJFZHVjYXRpb25cIixnbHlwaDpcImU3YmVcIn0se25hbWU6XCJTaG9wcGluZ0NhcnRcIixnbHlwaDpcImU3YmZcIn0se25hbWU6XCJUcmFpblwiLGdseXBoOlwiZTdjMFwifSx7bmFtZTpcIkZsYWdcIixnbHlwaDpcImU3YzFcIn0se25hbWU6XCJNb3ZlXCIsZ2x5cGg6XCJlN2MyXCJ9LHtuYW1lOlwiUGFnZVwiLGdseXBoOlwiZTdjM1wifSx7bmFtZTpcIlRhc2tWaWV3XCIsZ2x5cGg6XCJlN2M0XCJ9LHtuYW1lOlwiQnJvd3NlUGhvdG9zXCIsZ2x5cGg6XCJlN2M1XCJ9LHtuYW1lOlwiSGFsZlN0YXJMZWZ0XCIsZ2x5cGg6XCJlN2M2XCJ9LHtuYW1lOlwiSGFsZlN0YXJSaWdodFwiLGdseXBoOlwiZTdjN1wifSx7bmFtZTpcIlJlY29yZFwiLGdseXBoOlwiZTdjOFwifSx7bmFtZTpcIlRvdWNoUG9pbnRlclwiLGdseXBoOlwiZTdjOVwifSx7bmFtZTpcIkxhbmdKUE5cIixnbHlwaDpcImU3ZGVcIn0se25hbWU6XCJGZXJyeVwiLGdseXBoOlwiZTdlM1wifSx7bmFtZTpcIkhpZ2hsaWdodFwiLGdseXBoOlwiZTdlNlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlck5vdGlmaWNhdGlvblwiLGdseXBoOlwiZTdlN1wifSx7bmFtZTpcIlBvd2VyQnV0dG9uXCIsZ2x5cGg6XCJlN2U4XCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hOYXJyb3dlclwiLGdseXBoOlwiZTdlYVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoU2hvcnRlclwiLGdseXBoOlwiZTdlYlwifSx7bmFtZTpcIkRyaXZpbmdNb2RlXCIsZ2x5cGg6XCJlN2VjXCJ9LHtuYW1lOlwiUmluZ2VyU2lsZW50XCIsZ2x5cGg6XCJlN2VkXCJ9LHtuYW1lOlwiT3RoZXJVc2VyXCIsZ2x5cGg6XCJlN2VlXCJ9LHtuYW1lOlwiQWRtaW5cIixnbHlwaDpcImU3ZWZcIn0se25hbWU6XCJDQ1wiLGdseXBoOlwiZTdmMFwifSx7bmFtZTpcIlNEQ2FyZFwiLGdseXBoOlwiZTdmMVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkaW5nXCIsZ2x5cGg6XCJlN2YyXCJ9LHtuYW1lOlwiU2V0dGluZ3NEaXNwbGF5U291bmRcIixnbHlwaDpcImU3ZjNcIn0se25hbWU6XCJUVk1vbml0b3JcIixnbHlwaDpcImU3ZjRcIn0se25hbWU6XCJTcGVha2Vyc1wiLGdseXBoOlwiZTdmNVwifSx7bmFtZTpcIkhlYWRwaG9uZVwiLGdseXBoOlwiZTdmNlwifSx7bmFtZTpcIkRldmljZUxhcHRvcFBpY1wiLGdseXBoOlwiZTdmN1wifSx7bmFtZTpcIkRldmljZUxhcHRvcE5vUGljXCIsZ2x5cGg6XCJlN2Y4XCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvclJpZ2h0UGljXCIsZ2x5cGg6XCJlN2Y5XCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvckxlZnRQaWNcIixnbHlwaDpcImU3ZmFcIn0se25hbWU6XCJEZXZpY2VNb25pdG9yTm9QaWNcIixnbHlwaDpcImU3ZmJcIn0se25hbWU6XCJHYW1lXCIsZ2x5cGg6XCJlN2ZjXCJ9LHtuYW1lOlwiSG9yaXpvbnRhbFRhYktleVwiLGdseXBoOlwiZTdmZFwifSx7bmFtZTpcIlN0cmVldHNpZGVTcGxpdE1pbmltaXplXCIsZ2x5cGg6XCJlODAyXCJ9LHtuYW1lOlwiU3RyZWV0c2lkZVNwbGl0RXhwYW5kXCIsZ2x5cGg6XCJlODAzXCJ9LHtuYW1lOlwiQ2FyXCIsZ2x5cGg6XCJlODA0XCJ9LHtuYW1lOlwiV2Fsa1wiLGdseXBoOlwiZTgwNVwifSx7bmFtZTpcIkJ1c1wiLGdseXBoOlwiZTgwNlwifSx7bmFtZTpcIlRpbHRVcFwiLGdseXBoOlwiZTgwOVwifSx7bmFtZTpcIlRpbHREb3duXCIsZ2x5cGg6XCJlODBhXCJ9LHtuYW1lOlwiQ2FsbENvbnRyb2xcIixnbHlwaDpcImU4MGJcIn0se25hbWU6XCJSb3RhdGVNYXBSaWdodFwiLGdseXBoOlwiZTgwY1wifSx7bmFtZTpcIlJvdGF0ZU1hcExlZnRcIixnbHlwaDpcImU4MGRcIn0se25hbWU6XCJIb21lXCIsZ2x5cGg6XCJlODBmXCJ9LHtuYW1lOlwiUGFya2luZ0xvY2F0aW9uXCIsZ2x5cGg6XCJlODExXCJ9LHtuYW1lOlwiTWFwQ29tcGFzc1RvcFwiLGdseXBoOlwiZTgxMlwifSx7bmFtZTpcIk1hcENvbXBhc3NCb3R0b21cIixnbHlwaDpcImU4MTNcIn0se25hbWU6XCJJbmNpZGVudFRyaWFuZ2xlXCIsZ2x5cGg6XCJlODE0XCJ9LHtuYW1lOlwiVG91Y2hcIixnbHlwaDpcImU4MTVcIn0se25hbWU6XCJNYXBEaXJlY3Rpb25zXCIsZ2x5cGg6XCJlODE2XCJ9LHtuYW1lOlwiU3RhcnRQb2ludFwiLGdseXBoOlwiZTgxOVwifSx7bmFtZTpcIlN0b3BQb2ludFwiLGdseXBoOlwiZTgxYVwifSx7bmFtZTpcIkVuZFBvaW50XCIsZ2x5cGg6XCJlODFiXCJ9LHtuYW1lOlwiSGlzdG9yeVwiLGdseXBoOlwiZTgxY1wifSx7bmFtZTpcIkxvY2F0aW9uXCIsZ2x5cGg6XCJlODFkXCJ9LHtuYW1lOlwiTWFwTGF5ZXJzXCIsZ2x5cGg6XCJlODFlXCJ9LHtuYW1lOlwiQWNjaWRlbnRcIixnbHlwaDpcImU4MWZcIn0se25hbWU6XCJXb3JrXCIsZ2x5cGg6XCJlODIxXCJ9LHtuYW1lOlwiQ29uc3RydWN0aW9uXCIsZ2x5cGg6XCJlODIyXCJ9LHtuYW1lOlwiUmVjZW50XCIsZ2x5cGg6XCJlODIzXCJ9LHtuYW1lOlwiQmFua1wiLGdseXBoOlwiZTgyNVwifSx7bmFtZTpcIkRvd25sb2FkTWFwXCIsZ2x5cGg6XCJlODI2XCJ9LHtuYW1lOlwiSW5raW5nVG9vbEZpbGwyXCIsZ2x5cGg6XCJlODI5XCJ9LHtuYW1lOlwiSGlnaGxpZ2h0RmlsbDJcIixnbHlwaDpcImU4MmFcIn0se25hbWU6XCJFcmFzZVRvb2xGaWxsXCIsZ2x5cGg6XCJlODJiXCJ9LHtuYW1lOlwiRXJhc2VUb29sRmlsbDJcIixnbHlwaDpcImU4MmNcIn0se25hbWU6XCJEaWN0aW9uYXJ5XCIsZ2x5cGg6XCJlODJkXCJ9LHtuYW1lOlwiRGljdGlvbmFyeUFkZFwiLGdseXBoOlwiZTgyZVwifSx7bmFtZTpcIlRvb2xUaXBcIixnbHlwaDpcImU4MmZcIn0se25hbWU6XCJDaHJvbWVCYWNrXCIsZ2x5cGg6XCJlODMwXCJ9LHtuYW1lOlwiUHJvdmlzaW9uaW5nUGFja2FnZVwiLGdseXBoOlwiZTgzNVwifSx7bmFtZTpcIkFkZFJlbW90ZURldmljZVwiLGdseXBoOlwiZTgzNlwifSx7bmFtZTpcIkZvbGRlck9wZW5cIixnbHlwaDpcImU4MzhcIn0se25hbWU6XCJFdGhlcm5ldFwiLGdseXBoOlwiZTgzOVwifSx7bmFtZTpcIlNoYXJlQnJvYWRiYW5kXCIsZ2x5cGg6XCJlODNhXCJ9LHtuYW1lOlwiRGlyZWN0QWNjZXNzXCIsZ2x5cGg6XCJlODNiXCJ9LHtuYW1lOlwiRGlhbFVwXCIsZ2x5cGg6XCJlODNjXCJ9LHtuYW1lOlwiRGVmZW5kZXJBcHBcIixnbHlwaDpcImU4M2RcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJlODNlXCJ9LHtuYW1lOlwiQmF0dGVyeTEwXCIsZ2x5cGg6XCJlODNmXCJ9LHtuYW1lOlwiUGlubmVkXCIsZ2x5cGg6XCJlODQwXCJ9LHtuYW1lOlwiUGluRmlsbFwiLGdseXBoOlwiZTg0MVwifSx7bmFtZTpcIlBpbm5lZEZpbGxcIixnbHlwaDpcImU4NDJcIn0se25hbWU6XCJQZXJpb2RLZXlcIixnbHlwaDpcImU4NDNcIn0se25hbWU6XCJQdW5jS2V5XCIsZ2x5cGg6XCJlODQ0XCJ9LHtuYW1lOlwiUmV2VG9nZ2xlS2V5XCIsZ2x5cGg6XCJlODQ1XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUxXCIsZ2x5cGg6XCJlODQ2XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUyXCIsZ2x5cGg6XCJlODQ3XCJ9LHtuYW1lOlwiTGVmdFF1b3RlXCIsZ2x5cGg6XCJlODQ4XCJ9LHtuYW1lOlwiUmlnaHRRdW90ZVwiLGdseXBoOlwiZTg0OVwifSx7bmFtZTpcIkRvd25TaGlmdEtleVwiLGdseXBoOlwiZTg0YVwifSx7bmFtZTpcIlVwU2hpZnRLZXlcIixnbHlwaDpcImU4NGJcIn0se25hbWU6XCJQdW5jS2V5MFwiLGdseXBoOlwiZTg0Y1wifSx7bmFtZTpcIlB1bmNLZXlMZWZ0Qm90dG9tXCIsZ2x5cGg6XCJlODRkXCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUzXCIsZ2x5cGg6XCJlODRlXCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWU0XCIsZ2x5cGg6XCJlODRmXCJ9LHtuYW1lOlwiQmF0dGVyeTBcIixnbHlwaDpcImU4NTBcIn0se25hbWU6XCJCYXR0ZXJ5MVwiLGdseXBoOlwiZTg1MVwifSx7bmFtZTpcIkJhdHRlcnkyXCIsZ2x5cGg6XCJlODUyXCJ9LHtuYW1lOlwiQmF0dGVyeTNcIixnbHlwaDpcImU4NTNcIn0se25hbWU6XCJCYXR0ZXJ5NFwiLGdseXBoOlwiZTg1NFwifSx7bmFtZTpcIkJhdHRlcnk1XCIsZ2x5cGg6XCJlODU1XCJ9LHtuYW1lOlwiQmF0dGVyeTZcIixnbHlwaDpcImU4NTZcIn0se25hbWU6XCJCYXR0ZXJ5N1wiLGdseXBoOlwiZTg1N1wifSx7bmFtZTpcIkJhdHRlcnk4XCIsZ2x5cGg6XCJlODU4XCJ9LHtuYW1lOlwiQmF0dGVyeTlcIixnbHlwaDpcImU4NTlcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJlODVhXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZTg1YlwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzJcIixnbHlwaDpcImU4NWNcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJlODVkXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZTg1ZVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzVcIixnbHlwaDpcImU4NWZcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJlODYwXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZTg2MVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzhcIixnbHlwaDpcImU4NjJcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIwXCIsZ2x5cGg6XCJlODYzXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMVwiLGdseXBoOlwiZTg2NFwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjJcIixnbHlwaDpcImU4NjVcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIzXCIsZ2x5cGg6XCJlODY2XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyNFwiLGdseXBoOlwiZTg2N1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjVcIixnbHlwaDpcImU4NjhcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI2XCIsZ2x5cGg6XCJlODY5XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyN1wiLGdseXBoOlwiZTg2YVwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjhcIixnbHlwaDpcImU4NmJcIn0se25hbWU6XCJTaWduYWxCYXJzMVwiLGdseXBoOlwiZTg2Y1wifSx7bmFtZTpcIlNpZ25hbEJhcnMyXCIsZ2x5cGg6XCJlODZkXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczNcIixnbHlwaDpcImU4NmVcIn0se25hbWU6XCJTaWduYWxCYXJzNFwiLGdseXBoOlwiZTg2ZlwifSx7bmFtZTpcIlNpZ25hbEJhcnM1XCIsZ2x5cGg6XCJlODcwXCJ9LHtuYW1lOlwiU2lnbmFsTm90Q29ubmVjdGVkXCIsZ2x5cGg6XCJlODcxXCJ9LHtuYW1lOlwiV2lmaTFcIixnbHlwaDpcImU4NzJcIn0se25hbWU6XCJXaWZpMlwiLGdseXBoOlwiZTg3M1wifSx7bmFtZTpcIldpZmkzXCIsZ2x5cGg6XCJlODc0XCJ9LHtuYW1lOlwiTW9iU0lNTG9ja1wiLGdseXBoOlwiZTg3NVwifSx7bmFtZTpcIk1vYlNJTU1pc3NpbmdcIixnbHlwaDpcImU4NzZcIn0se25hbWU6XCJWaWJyYXRlXCIsZ2x5cGg6XCJlODc3XCJ9LHtuYW1lOlwiUm9hbWluZ0ludGVybmF0aW9uYWxcIixnbHlwaDpcImU4NzhcIn0se25hbWU6XCJSb2FtaW5nRG9tZXN0aWNcIixnbHlwaDpcImU4NzlcIn0se25hbWU6XCJDYWxsRm9yd2FyZEludGVybmF0aW9uYWxcIixnbHlwaDpcImU4N2FcIn0se25hbWU6XCJDYWxsRm9yd2FyZFJvYW1pbmdcIixnbHlwaDpcImU4N2JcIn0se25hbWU6XCJKcG5Sb21hbmppXCIsZ2x5cGg6XCJlODdjXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaUxvY2tcIixnbHlwaDpcImU4N2RcIn0se25hbWU6XCJKcG5Sb21hbmppU2hpZnRcIixnbHlwaDpcImU4N2VcIn0se25hbWU6XCJKcG5Sb21hbmppU2hpZnRMb2NrXCIsZ2x5cGg6XCJlODdmXCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyXCIsZ2x5cGg6XCJlODgwXCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyVlBOXCIsZ2x5cGg6XCJlODgxXCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTJcIixnbHlwaDpcImU4ODJcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMlZQTlwiLGdseXBoOlwiZTg4M1wifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0xXCIsZ2x5cGg6XCJlODg0XCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTFWUE5cIixnbHlwaDpcImU4ODVcIn0se25hbWU6XCJTdGF0dXNTR0xURVwiLGdseXBoOlwiZTg4NlwifSx7bmFtZTpcIlN0YXR1c1NHTFRFQ2VsbFwiLGdseXBoOlwiZTg4N1wifSx7bmFtZTpcIlN0YXR1c1NHTFRFRGF0YVZQTlwiLGdseXBoOlwiZTg4OFwifSx7bmFtZTpcIlN0YXR1c1ZQTlwiLGdseXBoOlwiZTg4OVwifSx7bmFtZTpcIldpZmlIb3RzcG90XCIsZ2x5cGg6XCJlODhhXCJ9LHtuYW1lOlwiTGFuZ3VhZ2VLb3JcIixnbHlwaDpcImU4OGJcIn0se25hbWU6XCJMYW5ndWFnZUNodFwiLGdseXBoOlwiZTg4Y1wifSx7bmFtZTpcIkxhbmd1YWdlQ2hzXCIsZ2x5cGg6XCJlODhkXCJ9LHtuYW1lOlwiVVNCXCIsZ2x5cGg6XCJlODhlXCJ9LHtuYW1lOlwiSW5raW5nVG9vbEZpbGxcIixnbHlwaDpcImU4OGZcIn0se25hbWU6XCJWaWV3XCIsZ2x5cGg6XCJlODkwXCJ9LHtuYW1lOlwiSGlnaGxpZ2h0RmlsbFwiLGdseXBoOlwiZTg5MVwifSx7bmFtZTpcIlByZXZpb3VzXCIsZ2x5cGg6XCJlODkyXCJ9LHtuYW1lOlwiTmV4dFwiLGdseXBoOlwiZTg5M1wifSx7bmFtZTpcIkNsZWFyXCIsZ2x5cGg6XCJlODk0XCJ9LHtuYW1lOlwiU3luY1wiLGdseXBoOlwiZTg5NVwifSx7bmFtZTpcIkRvd25sb2FkXCIsZ2x5cGg6XCJlODk2XCJ9LHtuYW1lOlwiSGVscFwiLGdseXBoOlwiZTg5N1wifSx7bmFtZTpcIlVwbG9hZFwiLGdseXBoOlwiZTg5OFwifSx7bmFtZTpcIkVtb2ppXCIsZ2x5cGg6XCJlODk5XCJ9LHtuYW1lOlwiVHdvUGFnZVwiLGdseXBoOlwiZTg5YVwifSx7bmFtZTpcIkxlYXZlQ2hhdFwiLGdseXBoOlwiZTg5YlwifSx7bmFtZTpcIk1haWxGb3J3YXJkXCIsZ2x5cGg6XCJlODljXCJ9LHtuYW1lOlwiUm90YXRlQ2FtZXJhXCIsZ2x5cGg6XCJlODllXCJ9LHtuYW1lOlwiQ2xvc2VQYW5lXCIsZ2x5cGg6XCJlODlmXCJ9LHtuYW1lOlwiT3BlblBhbmVcIixnbHlwaDpcImU4YTBcIn0se25hbWU6XCJQcmV2aWV3TGlua1wiLGdseXBoOlwiZThhMVwifSx7bmFtZTpcIkF0dGFjaENhbWVyYVwiLGdseXBoOlwiZThhMlwifSx7bmFtZTpcIlpvb21JblwiLGdseXBoOlwiZThhM1wifSx7bmFtZTpcIkJvb2ttYXJrc1wiLGdseXBoOlwiZThhNFwifSx7bmFtZTpcIkRvY3VtZW50XCIsZ2x5cGg6XCJlOGE1XCJ9LHtuYW1lOlwiUHJvdGVjdGVkRG9jdW1lbnRcIixnbHlwaDpcImU4YTZcIn0se25hbWU6XCJPcGVuSW5OZXdXaW5kb3dcIixnbHlwaDpcImU4YTdcIn0se25hbWU6XCJNYWlsRmlsbFwiLGdseXBoOlwiZThhOFwifSx7bmFtZTpcIlZpZXdBbGxcIixnbHlwaDpcImU4YTlcIn0se25hbWU6XCJWaWRlb0NoYXRcIixnbHlwaDpcImU4YWFcIn0se25hbWU6XCJTd2l0Y2hcIixnbHlwaDpcImU4YWJcIn0se25hbWU6XCJSZW5hbWVcIixnbHlwaDpcImU4YWNcIn0se25hbWU6XCJHb1wiLGdseXBoOlwiZThhZFwifSx7bmFtZTpcIlN1cmZhY2VIdWJcIixnbHlwaDpcImU4YWVcIn0se25hbWU6XCJSZW1vdGVcIixnbHlwaDpcImU4YWZcIn0se25hbWU6XCJDbGlja1wiLGdseXBoOlwiZThiMFwifSx7bmFtZTpcIlNodWZmbGVcIixnbHlwaDpcImU4YjFcIn0se25hbWU6XCJNb3ZpZXNcIixnbHlwaDpcImU4YjJcIn0se25hbWU6XCJTZWxlY3RBbGxcIixnbHlwaDpcImU4YjNcIn0se25hbWU6XCJPcmllbnRhdGlvblwiLGdseXBoOlwiZThiNFwifSx7bmFtZTpcIkltcG9ydFwiLGdseXBoOlwiZThiNVwifSx7bmFtZTpcIkltcG9ydEFsbFwiLGdseXBoOlwiZThiNlwifSx7bmFtZTpcIkZvbGRlclwiLGdseXBoOlwiZThiN1wifSx7bmFtZTpcIldlYmNhbVwiLGdseXBoOlwiZThiOFwifSx7bmFtZTpcIlBpY3R1cmVcIixnbHlwaDpcImU4YjlcIn0se25hbWU6XCJDYXB0aW9uXCIsZ2x5cGg6XCJlOGJhXCJ9LHtuYW1lOlwiQ2hyb21lQ2xvc2VcIixnbHlwaDpcImU4YmJcIn0se25hbWU6XCJTaG93UmVzdWx0c1wiLGdseXBoOlwiZThiY1wifSx7bmFtZTpcIk1lc3NhZ2VcIixnbHlwaDpcImU4YmRcIn0se25hbWU6XCJMZWFmXCIsZ2x5cGg6XCJlOGJlXCJ9LHtuYW1lOlwiQ2FsZW5kYXJEYXlcIixnbHlwaDpcImU4YmZcIn0se25hbWU6XCJDYWxlbmRhcldlZWtcIixnbHlwaDpcImU4YzBcIn0se25hbWU6XCJDaGFyYWN0ZXJzXCIsZ2x5cGg6XCJlOGMxXCJ9LHtuYW1lOlwiTWFpbFJlcGx5QWxsXCIsZ2x5cGg6XCJlOGMyXCJ9LHtuYW1lOlwiUmVhZFwiLGdseXBoOlwiZThjM1wifSx7bmFtZTpcIlNob3dCY2NcIixnbHlwaDpcImU4YzRcIn0se25hbWU6XCJIaWRlQmNjXCIsZ2x5cGg6XCJlOGM1XCJ9LHtuYW1lOlwiQ3V0XCIsZ2x5cGg6XCJlOGM2XCJ9LHtuYW1lOlwiUGF5bWVudENhcmRcIixnbHlwaDpcImU4YzdcIn0se25hbWU6XCJDb3B5XCIsZ2x5cGg6XCJlOGM4XCJ9LHtuYW1lOlwiSW1wb3J0YW50XCIsZ2x5cGg6XCJlOGM5XCJ9LHtuYW1lOlwiTWFpbFJlcGx5XCIsZ2x5cGg6XCJlOGNhXCJ9LHtuYW1lOlwiU29ydFwiLGdseXBoOlwiZThjYlwifSx7bmFtZTpcIk1vYmlsZVRhYmxldFwiLGdseXBoOlwiZThjY1wifSx7bmFtZTpcIkRpc2Nvbm5lY3REcml2ZVwiLGdseXBoOlwiZThjZFwifSx7bmFtZTpcIk1hcERyaXZlXCIsZ2x5cGg6XCJlOGNlXCJ9LHtuYW1lOlwiQ29udGFjdFByZXNlbmNlXCIsZ2x5cGg6XCJlOGNmXCJ9LHtuYW1lOlwiUHJpb3JpdHlcIixnbHlwaDpcImU4ZDBcIn0se25hbWU6XCJHb3RvVG9kYXlcIixnbHlwaDpcImU4ZDFcIn0se25hbWU6XCJGb250XCIsZ2x5cGg6XCJlOGQyXCJ9LHtuYW1lOlwiRm9udENvbG9yXCIsZ2x5cGg6XCJlOGQzXCJ9LHtuYW1lOlwiQ29udGFjdDJcIixnbHlwaDpcImU4ZDRcIn0se25hbWU6XCJGb2xkZXJGaWxsXCIsZ2x5cGg6XCJlOGQ1XCJ9LHtuYW1lOlwiQXVkaW9cIixnbHlwaDpcImU4ZDZcIn0se25hbWU6XCJQZXJtaXNzaW9uc1wiLGdseXBoOlwiZThkN1wifSx7bmFtZTpcIkRpc2FibGVVcGRhdGVzXCIsZ2x5cGg6XCJlOGQ4XCJ9LHtuYW1lOlwiVW5mYXZvcml0ZVwiLGdseXBoOlwiZThkOVwifSx7bmFtZTpcIk9wZW5Mb2NhbFwiLGdseXBoOlwiZThkYVwifSx7bmFtZTpcIkl0YWxpY1wiLGdseXBoOlwiZThkYlwifSx7bmFtZTpcIlVuZGVybGluZVwiLGdseXBoOlwiZThkY1wifSx7bmFtZTpcIkJvbGRcIixnbHlwaDpcImU4ZGRcIn0se25hbWU6XCJNb3ZlVG9Gb2xkZXJcIixnbHlwaDpcImU4ZGVcIn0se25hbWU6XCJMaWtlRGlzbGlrZVwiLGdseXBoOlwiZThkZlwifSx7bmFtZTpcIkRpc2xpa2VcIixnbHlwaDpcImU4ZTBcIn0se25hbWU6XCJMaWtlXCIsZ2x5cGg6XCJlOGUxXCJ9LHtuYW1lOlwiQWxpZ25SaWdodFwiLGdseXBoOlwiZThlMlwifSx7bmFtZTpcIkFsaWduQ2VudGVyXCIsZ2x5cGg6XCJlOGUzXCJ9LHtuYW1lOlwiQWxpZ25MZWZ0XCIsZ2x5cGg6XCJlOGU0XCJ9LHtuYW1lOlwiT3BlbkZpbGVcIixnbHlwaDpcImU4ZTVcIn0se25hbWU6XCJDbGVhclNlbGVjdGlvblwiLGdseXBoOlwiZThlNlwifSx7bmFtZTpcIkZvbnREZWNyZWFzZVwiLGdseXBoOlwiZThlN1wifSx7bmFtZTpcIkZvbnRJbmNyZWFzZVwiLGdseXBoOlwiZThlOFwifSx7bmFtZTpcIkZvbnRTaXplXCIsZ2x5cGg6XCJlOGU5XCJ9LHtuYW1lOlwiQ2VsbFBob25lXCIsZ2x5cGg6XCJlOGVhXCJ9LHtuYW1lOlwiUmVzaGFyZVwiLGdseXBoOlwiZThlYlwifSx7bmFtZTpcIlRhZ1wiLGdseXBoOlwiZThlY1wifSx7bmFtZTpcIlJlcGVhdE9uZVwiLGdseXBoOlwiZThlZFwifSx7bmFtZTpcIlJlcGVhdEFsbFwiLGdseXBoOlwiZThlZVwifSx7bmFtZTpcIkNhbGN1bGF0b3JcIixnbHlwaDpcImU4ZWZcIn0se25hbWU6XCJEaXJlY3Rpb25zXCIsZ2x5cGg6XCJlOGYwXCJ9LHtuYW1lOlwiTGlicmFyeVwiLGdseXBoOlwiZThmMVwifSx7bmFtZTpcIkNoYXRCdWJibGVzXCIsZ2x5cGg6XCJlOGYyXCJ9LHtuYW1lOlwiUG9zdFVwZGF0ZVwiLGdseXBoOlwiZThmM1wifSx7bmFtZTpcIk5ld0ZvbGRlclwiLGdseXBoOlwiZThmNFwifSx7bmFtZTpcIkNhbGVuZGFyUmVwbHlcIixnbHlwaDpcImU4ZjVcIn0se25hbWU6XCJVbnN5bmNGb2xkZXJcIixnbHlwaDpcImU4ZjZcIn0se25hbWU6XCJTeW5jRm9sZGVyXCIsZ2x5cGg6XCJlOGY3XCJ9LHtuYW1lOlwiQmxvY2tDb250YWN0XCIsZ2x5cGg6XCJlOGY4XCJ9LHtuYW1lOlwiU3dpdGNoQXBwc1wiLGdseXBoOlwiZThmOVwifSx7bmFtZTpcIkFkZEZyaWVuZFwiLGdseXBoOlwiZThmYVwifSx7bmFtZTpcIkFjY2VwdFwiLGdseXBoOlwiZThmYlwifSx7bmFtZTpcIkdvVG9TdGFydFwiLGdseXBoOlwiZThmY1wifSx7bmFtZTpcIkJ1bGxldGVkTGlzdFwiLGdseXBoOlwiZThmZFwifSx7bmFtZTpcIlNjYW5cIixnbHlwaDpcImU4ZmVcIn0se25hbWU6XCJQcmV2aWV3XCIsZ2x5cGg6XCJlOGZmXCJ9LHtuYW1lOlwiR3JvdXBcIixnbHlwaDpcImU5MDJcIn0se25hbWU6XCJaZXJvQmFyc1wiLGdseXBoOlwiZTkwNFwifSx7bmFtZTpcIk9uZUJhclwiLGdseXBoOlwiZTkwNVwifSx7bmFtZTpcIlR3b0JhcnNcIixnbHlwaDpcImU5MDZcIn0se25hbWU6XCJUaHJlZUJhcnNcIixnbHlwaDpcImU5MDdcIn0se25hbWU6XCJGb3VyQmFyc1wiLGdseXBoOlwiZTkwOFwifSx7bmFtZTpcIldvcmxkXCIsZ2x5cGg6XCJlOTA5XCJ9LHtuYW1lOlwiQ29tbWVudFwiLGdseXBoOlwiZTkwYVwifSx7bmFtZTpcIk11c2ljSW5mb1wiLGdseXBoOlwiZTkwYlwifSx7bmFtZTpcIkRvY2tMZWZ0XCIsZ2x5cGg6XCJlOTBjXCJ9LHtuYW1lOlwiRG9ja1JpZ2h0XCIsZ2x5cGg6XCJlOTBkXCJ9LHtuYW1lOlwiRG9ja0JvdHRvbVwiLGdseXBoOlwiZTkwZVwifSx7bmFtZTpcIlJlcGFpclwiLGdseXBoOlwiZTkwZlwifSx7bmFtZTpcIkFjY291bnRzXCIsZ2x5cGg6XCJlOTEwXCJ9LHtuYW1lOlwiRHVsbFNvdW5kXCIsZ2x5cGg6XCJlOTExXCJ9LHtuYW1lOlwiTWFuYWdlXCIsZ2x5cGg6XCJlOTEyXCJ9LHtuYW1lOlwiU3RyZWV0XCIsZ2x5cGg6XCJlOTEzXCJ9LHtuYW1lOlwiUHJpbnRlcjNEXCIsZ2x5cGg6XCJlOTE0XCJ9LHtuYW1lOlwiUmFkaW9CdWxsZXRcIixnbHlwaDpcImU5MTVcIn0se25hbWU6XCJTdG9wd2F0Y2hcIixnbHlwaDpcImU5MTZcIn0se25hbWU6XCJQaG90b1wiLGdseXBoOlwiZTkxYlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlclwiLGdseXBoOlwiZTkxY1wifSx7bmFtZTpcIkZ1bGxDaXJjbGVNYXNrXCIsZ2x5cGg6XCJlOTFmXCJ9LHtuYW1lOlwiQ2hyb21lTWluaW1pemVcIixnbHlwaDpcImU5MjFcIn0se25hbWU6XCJDaHJvbWVNYXhpbWl6ZVwiLGdseXBoOlwiZTkyMlwifSx7bmFtZTpcIkNocm9tZVJlc3RvcmVcIixnbHlwaDpcImU5MjNcIn0se25hbWU6XCJBbm5vdGF0aW9uXCIsZ2x5cGg6XCJlOTI0XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZU21cIixnbHlwaDpcImU5MjVcIn0se25hbWU6XCJCYWNrU3BhY2VRV0VSVFlNZFwiLGdseXBoOlwiZTkyNlwifSx7bmFtZTpcIlN3aXBlXCIsZ2x5cGg6XCJlOTI3XCJ9LHtuYW1lOlwiRmluZ2VycHJpbnRcIixnbHlwaDpcImU5MjhcIn0se25hbWU6XCJIYW5kd3JpdGluZ1wiLGdseXBoOlwiZTkyOVwifSx7bmFtZTpcIkNocm9tZUJhY2tUb1dpbmRvd1wiLGdseXBoOlwiZTkyY1wifSx7bmFtZTpcIkNocm9tZUZ1bGxTY3JlZW5cIixnbHlwaDpcImU5MmRcIn0se25hbWU6XCJLZXlib2FyZFN0YW5kYXJkXCIsZ2x5cGg6XCJlOTJlXCJ9LHtuYW1lOlwiS2V5Ym9hcmREaXNtaXNzXCIsZ2x5cGg6XCJlOTJmXCJ9LHtuYW1lOlwiQ29tcGxldGVkXCIsZ2x5cGg6XCJlOTMwXCJ9LHtuYW1lOlwiQ2hyb21lQW5ub3RhdGVcIixnbHlwaDpcImU5MzFcIn0se25hbWU6XCJMYWJlbFwiLGdseXBoOlwiZTkzMlwifSx7bmFtZTpcIklCZWFtXCIsZ2x5cGg6XCJlOTMzXCJ9LHtuYW1lOlwiSUJlYW1PdXRsaW5lXCIsZ2x5cGg6XCJlOTM0XCJ9LHtuYW1lOlwiRmxpY2tEb3duXCIsZ2x5cGg6XCJlOTM1XCJ9LHtuYW1lOlwiRmxpY2tVcFwiLGdseXBoOlwiZTkzNlwifSx7bmFtZTpcIkZsaWNrTGVmdFwiLGdseXBoOlwiZTkzN1wifSx7bmFtZTpcIkZsaWNrUmlnaHRcIixnbHlwaDpcImU5MzhcIn0se25hbWU6XCJGZWVkYmFja0FwcFwiLGdseXBoOlwiZTkzOVwifSx7bmFtZTpcIk11c2ljQWxidW1cIixnbHlwaDpcImU5M2NcIn0se25hbWU6XCJTdHJlYW1pbmdcIixnbHlwaDpcImU5M2VcIn0se25hbWU6XCJDb2RlXCIsZ2x5cGg6XCJlOTQzXCJ9LHtuYW1lOlwiUmV0dXJuVG9XaW5kb3dcIixnbHlwaDpcImU5NDRcIn0se25hbWU6XCJMaWdodG5pbmdCb2x0XCIsZ2x5cGg6XCJlOTQ1XCJ9LHtuYW1lOlwiSW5mb1wiLGdseXBoOlwiZTk0NlwifSx7bmFtZTpcIkNhbGN1bGF0b3JNdWx0aXBseVwiLGdseXBoOlwiZTk0N1wifSx7bmFtZTpcIkNhbGN1bGF0b3JBZGRpdGlvblwiLGdseXBoOlwiZTk0OFwifSx7bmFtZTpcIkNhbGN1bGF0b3JTdWJ0cmFjdFwiLGdseXBoOlwiZTk0OVwifSx7bmFtZTpcIkNhbGN1bGF0b3JEaXZpZGVcIixnbHlwaDpcImU5NGFcIn0se25hbWU6XCJDYWxjdWxhdG9yU3F1YXJlcm9vdFwiLGdseXBoOlwiZTk0YlwifSx7bmFtZTpcIkNhbGN1bGF0b3JQZXJjZW50YWdlXCIsZ2x5cGg6XCJlOTRjXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvck5lZ2F0ZVwiLGdseXBoOlwiZTk0ZFwifSx7bmFtZTpcIkNhbGN1bGF0b3JFcXVhbFRvXCIsZ2x5cGg6XCJlOTRlXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvckJhY2tzcGFjZVwiLGdseXBoOlwiZTk0ZlwifSx7bmFtZTpcIkNvbXBvbmVudFwiLGdseXBoOlwiZTk1MFwifSx7bmFtZTpcIkRNQ1wiLGdseXBoOlwiZTk1MVwifSx7bmFtZTpcIkRvY2tcIixnbHlwaDpcImU5NTJcIn0se25hbWU6XCJNdWx0aW1lZGlhRE1TXCIsZ2x5cGg6XCJlOTUzXCJ9LHtuYW1lOlwiTXVsdGltZWRpYURWUlwiLGdseXBoOlwiZTk1NFwifSx7bmFtZTpcIk11bHRpbWVkaWFQTVBcIixnbHlwaDpcImU5NTVcIn0se25hbWU6XCJQcmludGZheFByaW50ZXJGaWxlXCIsZ2x5cGg6XCJlOTU2XCJ9LHtuYW1lOlwiU2Vuc29yXCIsZ2x5cGg6XCJlOTU3XCJ9LHtuYW1lOlwiU3RvcmFnZU9wdGljYWxcIixnbHlwaDpcImU5NThcIn0se25hbWU6XCJDb21tdW5pY2F0aW9uc1wiLGdseXBoOlwiZTk1YVwifSx7bmFtZTpcIkhlYWRzZXRcIixnbHlwaDpcImU5NWJcIn0se25hbWU6XCJQcm9qZWN0b3JcIixnbHlwaDpcImU5NWRcIn0se25hbWU6XCJIZWFsdGhcIixnbHlwaDpcImU5NWVcIn0se25hbWU6XCJXaXJlXCIsZ2x5cGg6XCJlOTVmXCJ9LHtuYW1lOlwiV2ViY2FtMlwiLGdseXBoOlwiZTk2MFwifSx7bmFtZTpcIklucHV0XCIsZ2x5cGg6XCJlOTYxXCJ9LHtuYW1lOlwiTW91c2VcIixnbHlwaDpcImU5NjJcIn0se25hbWU6XCJTbWFydGNhcmRcIixnbHlwaDpcImU5NjNcIn0se25hbWU6XCJTbWFydGNhcmRWaXJ0dWFsXCIsZ2x5cGg6XCJlOTY0XCJ9LHtuYW1lOlwiTWVkaWFTdG9yYWdlVG93ZXJcIixnbHlwaDpcImU5NjVcIn0se25hbWU6XCJSZXR1cm5LZXlTbVwiLGdseXBoOlwiZTk2NlwifSx7bmFtZTpcIkdhbWVDb25zb2xlXCIsZ2x5cGg6XCJlOTY3XCJ9LHtuYW1lOlwiTmV0d29ya1wiLGdseXBoOlwiZTk2OFwifSx7bmFtZTpcIlN0b3JhZ2VOZXR3b3JrV2lyZWxlc3NcIixnbHlwaDpcImU5NjlcIn0se25hbWU6XCJTdG9yYWdlVGFwZVwiLGdseXBoOlwiZTk2YVwifSx7bmFtZTpcIkNoZXZyb25VcFNtYWxsXCIsZ2x5cGg6XCJlOTZkXCJ9LHtuYW1lOlwiQ2hldnJvbkRvd25TbWFsbFwiLGdseXBoOlwiZTk2ZVwifSx7bmFtZTpcIkNoZXZyb25MZWZ0U21hbGxcIixnbHlwaDpcImU5NmZcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRTbWFsbFwiLGdseXBoOlwiZTk3MFwifSx7bmFtZTpcIkNoZXZyb25VcE1lZFwiLGdseXBoOlwiZTk3MVwifSx7bmFtZTpcIkNoZXZyb25Eb3duTWVkXCIsZ2x5cGg6XCJlOTcyXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnRNZWRcIixnbHlwaDpcImU5NzNcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRNZWRcIixnbHlwaDpcImU5NzRcIn0se25hbWU6XCJEZXZpY2VzMlwiLGdseXBoOlwiZTk3NVwifSx7bmFtZTpcIkV4cGFuZFRpbGVcIixnbHlwaDpcImU5NzZcIn0se25hbWU6XCJQQzFcIixnbHlwaDpcImU5NzdcIn0se25hbWU6XCJQcmVzZW5jZUNoaWNrbGV0XCIsZ2x5cGg6XCJlOTc4XCJ9LHtuYW1lOlwiUHJlc2VuY2VDaGlja2xldFZpZGVvXCIsZ2x5cGg6XCJlOTc5XCJ9LHtuYW1lOlwiUmVwbHlcIixnbHlwaDpcImU5N2FcIn0se25hbWU6XCJTZXRUaWxlXCIsZ2x5cGg6XCJlOTdiXCJ9LHtuYW1lOlwiVHlwZVwiLGdseXBoOlwiZTk3Y1wifSx7bmFtZTpcIktvcmVhblwiLGdseXBoOlwiZTk3ZFwifSx7bmFtZTpcIkhhbGZBbHBoYVwiLGdseXBoOlwiZTk3ZVwifSx7bmFtZTpcIkZ1bGxBbHBoYVwiLGdseXBoOlwiZTk3ZlwifSx7bmFtZTpcIktleTEyT25cIixnbHlwaDpcImU5ODBcIn0se25hbWU6XCJDaGluZXNlQ2hhbmdqaWVcIixnbHlwaDpcImU5ODFcIn0se25hbWU6XCJRV0VSVFlPblwiLGdseXBoOlwiZTk4MlwifSx7bmFtZTpcIlFXRVJUWU9mZlwiLGdseXBoOlwiZTk4M1wifSx7bmFtZTpcIkNoaW5lc2VRdWlja1wiLGdseXBoOlwiZTk4NFwifSx7bmFtZTpcIkphcGFuZXNlXCIsZ2x5cGg6XCJlOTg1XCJ9LHtuYW1lOlwiRnVsbEhpcmFnYW5hXCIsZ2x5cGg6XCJlOTg2XCJ9LHtuYW1lOlwiRnVsbEthdGFrYW5hXCIsZ2x5cGg6XCJlOTg3XCJ9LHtuYW1lOlwiSGFsZkthdGFrYW5hXCIsZ2x5cGg6XCJlOTg4XCJ9LHtuYW1lOlwiQ2hpbmVzZUJvUG9Nb0ZvXCIsZ2x5cGg6XCJlOTg5XCJ9LHtuYW1lOlwiQ2hpbmVzZVBpbnlpblwiLGdseXBoOlwiZTk4YVwifSx7bmFtZTpcIkNvbnN0cnVjdGlvbkNvbmVcIixnbHlwaDpcImU5OGZcIn0se25hbWU6XCJYYm94T25lQ29uc29sZVwiLGdseXBoOlwiZTk5MFwifSx7bmFtZTpcIlZvbHVtZTBcIixnbHlwaDpcImU5OTJcIn0se25hbWU6XCJWb2x1bWUxXCIsZ2x5cGg6XCJlOTkzXCJ9LHtuYW1lOlwiVm9sdW1lMlwiLGdseXBoOlwiZTk5NFwifSx7bmFtZTpcIlZvbHVtZTNcIixnbHlwaDpcImU5OTVcIn0se25hbWU6XCJCYXR0ZXJ5VW5rbm93blwiLGdseXBoOlwiZTk5NlwifSx7bmFtZTpcIldpZmlBdHRlbnRpb25PdmVybGF5XCIsZ2x5cGg6XCJlOTk4XCJ9LHtuYW1lOlwiUm9ib3RcIixnbHlwaDpcImU5OWFcIn0se25hbWU6XCJUYXBBbmRTZW5kXCIsZ2x5cGg6XCJlOWExXCJ9LHtuYW1lOlwiRml0UGFnZVwiLGdseXBoOlwiZTlhNlwifSx7bmFtZTpcIlBhc3N3b3JkS2V5U2hvd1wiLGdseXBoOlwiZTlhOFwifSx7bmFtZTpcIlBhc3N3b3JkS2V5SGlkZVwiLGdseXBoOlwiZTlhOVwifSx7bmFtZTpcIkJpZGlMdHJcIixnbHlwaDpcImU5YWFcIn0se25hbWU6XCJCaWRpUnRsXCIsZ2x5cGg6XCJlOWFiXCJ9LHtuYW1lOlwiRm9yd2FyZFNtXCIsZ2x5cGg6XCJlOWFjXCJ9LHtuYW1lOlwiQ29tbWFLZXlcIixnbHlwaDpcImU5YWRcIn0se25hbWU6XCJEYXNoS2V5XCIsZ2x5cGg6XCJlOWFlXCJ9LHtuYW1lOlwiRHVsbFNvdW5kS2V5XCIsZ2x5cGg6XCJlOWFmXCJ9LHtuYW1lOlwiSGFsZkR1bGxTb3VuZFwiLGdseXBoOlwiZTliMFwifSx7bmFtZTpcIlJpZ2h0RG91YmxlUXVvdGVcIixnbHlwaDpcImU5YjFcIn0se25hbWU6XCJMZWZ0RG91YmxlUXVvdGVcIixnbHlwaDpcImU5YjJcIn0se25hbWU6XCJQdW5jS2V5UmlnaHRCb3R0b21cIixnbHlwaDpcImU5YjNcIn0se25hbWU6XCJQdW5jS2V5MVwiLGdseXBoOlwiZTliNFwifSx7bmFtZTpcIlB1bmNLZXkyXCIsZ2x5cGg6XCJlOWI1XCJ9LHtuYW1lOlwiUHVuY0tleTNcIixnbHlwaDpcImU5YjZcIn0se25hbWU6XCJQdW5jS2V5NFwiLGdseXBoOlwiZTliN1wifSx7bmFtZTpcIlB1bmNLZXk1XCIsZ2x5cGg6XCJlOWI4XCJ9LHtuYW1lOlwiUHVuY0tleTZcIixnbHlwaDpcImU5YjlcIn0se25hbWU6XCJQdW5jS2V5OVwiLGdseXBoOlwiZTliYVwifSx7bmFtZTpcIlB1bmNLZXk3XCIsZ2x5cGg6XCJlOWJiXCJ9LHtuYW1lOlwiUHVuY0tleThcIixnbHlwaDpcImU5YmNcIn0se25hbWU6XCJGcmlnaWRcIixnbHlwaDpcImU5Y2FcIn0se25hbWU6XCJVbmtub3duXCIsZ2x5cGg6XCJlOWNlXCJ9LHtuYW1lOlwiQXJlYUNoYXJ0XCIsZ2x5cGg6XCJlOWQyXCJ9LHtuYW1lOlwiQ2hlY2tMaXN0XCIsZ2x5cGg6XCJlOWQ1XCJ9LHtuYW1lOlwiRGlhZ25vc3RpY1wiLGdseXBoOlwiZTlkOVwifSx7bmFtZTpcIkVxdWFsaXplclwiLGdseXBoOlwiZTllOVwifSx7bmFtZTpcIlByb2Nlc3NcIixnbHlwaDpcImU5ZjNcIn0se25hbWU6XCJQcm9jZXNzaW5nXCIsZ2x5cGg6XCJlOWY1XCJ9LHtuYW1lOlwiUmVwb3J0RG9jdW1lbnRcIixnbHlwaDpcImU5ZjlcIn0se25hbWU6XCJEZXNjcmlwdGlvblwiLGdseXBoOlwiVW5pY29kZSBwb2ludFwifSx7bmFtZTpcIlZpZGVvU29saWRcIixnbHlwaDpcImVhMGNcIn0se25hbWU6XCJNaXhlZE1lZGlhQmFkZ2VcIixnbHlwaDpcImVhMGRcIn0se25hbWU6XCJEaXNjb25uZWN0RGlzcGxheVwiLGdseXBoOlwiZWExNFwifSx7bmFtZTpcIlNoaWVsZFwiLGdseXBoOlwiZWExOFwifSx7bmFtZTpcIkluZm8yXCIsZ2x5cGg6XCJlYTFmXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyQXN0ZXJpc2tcIixnbHlwaDpcImVhMjFcIn0se25hbWU6XCJCZXRhXCIsZ2x5cGg6XCJlYTI0XCJ9LHtuYW1lOlwiU2F2ZUNvcHlcIixnbHlwaDpcImVhMzVcIn0se25hbWU6XCJMaXN0XCIsZ2x5cGg6XCJlYTM3XCJ9LHtuYW1lOlwiQXN0ZXJpc2tcIixnbHlwaDpcImVhMzhcIn0se25hbWU6XCJFcnJvckJhZGdlXCIsZ2x5cGg6XCJlYTM5XCJ9LHtuYW1lOlwiQ2lyY2xlUmluZ1wiLGdseXBoOlwiZWEzYVwifSx7bmFtZTpcIkNpcmNsZUZpbGxcIixnbHlwaDpcImVhM2JcIn0se25hbWU6XCJNZXJnZUNhbGxcIixnbHlwaDpcImVhM2NcIn0se25hbWU6XCJQcml2YXRlQ2FsbFwiLGdseXBoOlwiZWEzZFwifSx7bmFtZTpcIlJlY29yZDJcIixnbHlwaDpcImVhM2ZcIn0se25hbWU6XCJBbGxBcHBzTWlycm9yZWRcIixnbHlwaDpcImVhNDBcIn0se25hbWU6XCJCb29rbWFya3NNaXJyb3JlZFwiLGdseXBoOlwiZWE0MVwifSx7bmFtZTpcIkJ1bGxldGVkTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQyXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRJbnRlcm5hdGlvbmFsTWlycm9yZWRcIixnbHlwaDpcImVhNDNcIn0se25hbWU6XCJDYWxsRm9yd2FyZFJvYW1pbmdNaXJyb3JlZFwiLGdseXBoOlwiZWE0NFwifSx7bmFtZTpcIkNocm9tZUJhY2tNaXJyb3JlZFwiLGdseXBoOlwiZWE0N1wifSx7bmFtZTpcIkNsZWFyU2VsZWN0aW9uTWlycm9yZWRcIixnbHlwaDpcImVhNDhcIn0se25hbWU6XCJDbG9zZVBhbmVNaXJyb3JlZFwiLGdseXBoOlwiZWE0OVwifSx7bmFtZTpcIkNvbnRhY3RJbmZvTWlycm9yZWRcIixnbHlwaDpcImVhNGFcIn0se25hbWU6XCJEb2NrUmlnaHRNaXJyb3JlZFwiLGdseXBoOlwiZWE0YlwifSx7bmFtZTpcIkRvY2tMZWZ0TWlycm9yZWRcIixnbHlwaDpcImVhNGNcIn0se25hbWU6XCJFeHBhbmRUaWxlTWlycm9yZWRcIixnbHlwaDpcImVhNGVcIn0se25hbWU6XCJHb01pcnJvcmVkXCIsZ2x5cGg6XCJlYTRmXCJ9LHtuYW1lOlwiR3JpcHBlclJlc2l6ZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUwXCJ9LHtuYW1lOlwiSGVscE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUxXCJ9LHtuYW1lOlwiSW1wb3J0TWlycm9yZWRcIixnbHlwaDpcImVhNTJcIn0se25hbWU6XCJJbXBvcnRBbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE1M1wifSx7bmFtZTpcIkxlYXZlQ2hhdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU0XCJ9LHtuYW1lOlwiTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU1XCJ9LHtuYW1lOlwiTWFpbEZvcndhcmRNaXJyb3JlZFwiLGdseXBoOlwiZWE1NlwifSx7bmFtZTpcIk1haWxSZXBseU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU3XCJ9LHtuYW1lOlwiTWFpbFJlcGx5QWxsTWlycm9yZWRcIixnbHlwaDpcImVhNThcIn0se25hbWU6XCJPcGVuUGFuZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTViXCJ9LHtuYW1lOlwiT3BlbldpdGhNaXJyb3JlZFwiLGdseXBoOlwiZWE1Y1wifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJlYTVlXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VNZWRpdW1NaXJyb3JlZFwiLGdseXBoOlwiZWE1ZlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlU21hbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2MFwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlVGFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYxXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hOYXJyb3dlck1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYyXCJ9LHtuYW1lOlwiU2VuZE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYzXCJ9LHtuYW1lOlwiU2VuZEZpbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2NFwifSx7bmFtZTpcIlNob3dSZXN1bHRzTWlycm9yZWRcIixnbHlwaDpcImVhNjVcIn0se25hbWU6XCJNZWRpYVwiLGdseXBoOlwiZWE2OVwifSx7bmFtZTpcIlN5bmNFcnJvclwiLGdseXBoOlwiZWE2YVwifSx7bmFtZTpcIkRldmljZXMzXCIsZ2x5cGg6XCJlYTZjXCJ9LHtuYW1lOlwiU2xvd01vdGlvbk9uXCIsZ2x5cGg6XCJlYTc5XCJ9LHtuYW1lOlwiTGlnaHRidWxiXCIsZ2x5cGg6XCJlYTgwXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlXCIsZ2x5cGg6XCJlYTgxXCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVcIixnbHlwaDpcImVhODJcIn0se25hbWU6XCJTdGF0dXNFcnJvclwiLGdseXBoOlwiZWE4M1wifSx7bmFtZTpcIlN0YXR1c1dhcm5pbmdcIixnbHlwaDpcImVhODRcIn0se25hbWU6XCJQdXp6bGVcIixnbHlwaDpcImVhODZcIn0se25hbWU6XCJDYWxlbmRhclNvbGlkXCIsZ2x5cGg6XCJlYTg5XCJ9LHtuYW1lOlwiSG9tZVNvbGlkXCIsZ2x5cGg6XCJlYThhXCJ9LHtuYW1lOlwiUGFya2luZ0xvY2F0aW9uU29saWRcIixnbHlwaDpcImVhOGJcIn0se25hbWU6XCJDb250YWN0U29saWRcIixnbHlwaDpcImVhOGNcIn0se25hbWU6XCJDb25zdHJ1Y3Rpb25Tb2xpZFwiLGdseXBoOlwiZWE4ZFwifSx7bmFtZTpcIkFjY2lkZW50U29saWRcIixnbHlwaDpcImVhOGVcIn0se25hbWU6XCJSaW5nZXJcIixnbHlwaDpcImVhOGZcIn0se25hbWU6XCJQREZcIixnbHlwaDpcImVhOTBcIn0se25hbWU6XCJUaG91Z2h0QnViYmxlXCIsZ2x5cGg6XCJlYTkxXCJ9LHtuYW1lOlwiSGVhcnRCcm9rZW5cIixnbHlwaDpcImVhOTJcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcxMFwiLGdseXBoOlwiZWE5M1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjlcIixnbHlwaDpcImVhOTRcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIxMFwiLGdseXBoOlwiZWE5NVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkaW5nTWlycm9yZWRcIixnbHlwaDpcImVhOTdcIn0se25hbWU6XCJNdWx0aVNlbGVjdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTk4XCJ9LHtuYW1lOlwiQnJvb21cIixnbHlwaDpcImVhOTlcIn0se25hbWU6XCJGb3J3YXJkQ2FsbFwiLGdseXBoOlwiZWFjMlwifSx7bmFtZTpcIlRyYWNrZXJzXCIsZ2x5cGg6XCJlYWRmXCJ9LHtuYW1lOlwiTWFya2V0XCIsZ2x5cGg6XCJlYWZjXCJ9LHtuYW1lOlwiUGllU2luZ2xlXCIsZ2x5cGg6XCJlYjA1XCJ9LHtuYW1lOlwiU3RvY2tVcFwiLGdseXBoOlwiZWIwZlwifSx7bmFtZTpcIlN0b2NrRG93blwiLGdseXBoOlwiZWIxMVwifSx7bmFtZTpcIkRlc2lnblwiLGdseXBoOlwiZWIzY1wifSx7bmFtZTpcIldlYnNpdGVcIixnbHlwaDpcImViNDFcIn0se25hbWU6XCJEcm9wXCIsZ2x5cGg6XCJlYjQyXCJ9LHtuYW1lOlwiUmFkYXJcIixnbHlwaDpcImViNDRcIn0se25hbWU6XCJCdXNTb2xpZFwiLGdseXBoOlwiZWI0N1wifSx7bmFtZTpcIkZlcnJ5U29saWRcIixnbHlwaDpcImViNDhcIn0se25hbWU6XCJTdGFydFBvaW50U29saWRcIixnbHlwaDpcImViNDlcIn0se25hbWU6XCJTdG9wUG9pbnRTb2xpZFwiLGdseXBoOlwiZWI0YVwifSx7bmFtZTpcIkVuZFBvaW50U29saWRcIixnbHlwaDpcImViNGJcIn0se25hbWU6XCJBaXJwbGFuZVNvbGlkXCIsZ2x5cGg6XCJlYjRjXCJ9LHtuYW1lOlwiVHJhaW5Tb2xpZFwiLGdseXBoOlwiZWI0ZFwifSx7bmFtZTpcIldvcmtTb2xpZFwiLGdseXBoOlwiZWI0ZVwifSx7bmFtZTpcIlJlbWluZGVyRmlsbFwiLGdseXBoOlwiZWI0ZlwifSx7bmFtZTpcIlJlbWluZGVyXCIsZ2x5cGg6XCJlYjUwXCJ9LHtuYW1lOlwiSGVhcnRcIixnbHlwaDpcImViNTFcIn0se25hbWU6XCJIZWFydEZpbGxcIixnbHlwaDpcImViNTJcIn0se25hbWU6XCJFdGhlcm5ldEVycm9yXCIsZ2x5cGg6XCJlYjU1XCJ9LHtuYW1lOlwiRXRoZXJuZXRXYXJuaW5nXCIsZ2x5cGg6XCJlYjU2XCJ9LHtuYW1lOlwiU3RhdHVzQ29ubmVjdGluZzFcIixnbHlwaDpcImViNTdcIn0se25hbWU6XCJTdGF0dXNDb25uZWN0aW5nMlwiLGdseXBoOlwiZWI1OFwifSx7bmFtZTpcIlN0YXR1c1Vuc2VjdXJlXCIsZ2x5cGg6XCJlYjU5XCJ9LHtuYW1lOlwiV2lmaUVycm9yMFwiLGdseXBoOlwiZWI1YVwifSx7bmFtZTpcIldpZmlFcnJvcjFcIixnbHlwaDpcImViNWJcIn0se25hbWU6XCJXaWZpRXJyb3IyXCIsZ2x5cGg6XCJlYjVjXCJ9LHtuYW1lOlwiV2lmaUVycm9yM1wiLGdseXBoOlwiZWI1ZFwifSx7bmFtZTpcIldpZmlFcnJvcjRcIixnbHlwaDpcImViNWVcIn0se25hbWU6XCJXaWZpV2FybmluZzBcIixnbHlwaDpcImViNWZcIn0se25hbWU6XCJXaWZpV2FybmluZzFcIixnbHlwaDpcImViNjBcIn0se25hbWU6XCJXaWZpV2FybmluZzJcIixnbHlwaDpcImViNjFcIn0se25hbWU6XCJXaWZpV2FybmluZzNcIixnbHlwaDpcImViNjJcIn0se25hbWU6XCJXaWZpV2FybmluZzRcIixnbHlwaDpcImViNjNcIn0se25hbWU6XCJEZXZpY2VzNFwiLGdseXBoOlwiZWI2NlwifSx7bmFtZTpcIk5VSUlyaXNcIixnbHlwaDpcImViNjdcIn0se25hbWU6XCJOVUlGYWNlXCIsZ2x5cGg6XCJlYjY4XCJ9LHtuYW1lOlwiR2F0ZXdheVJvdXRlclwiLGdseXBoOlwiZWI3N1wifSx7bmFtZTpcIkVkaXRNaXJyb3JlZFwiLGdseXBoOlwiZWI3ZVwifSx7bmFtZTpcIk5VSUZQU3RhcnRTbGlkZUhhbmRcIixnbHlwaDpcImViODJcIn0se25hbWU6XCJOVUlGUFN0YXJ0U2xpZGVBY3Rpb25cIixnbHlwaDpcImViODNcIn0se25hbWU6XCJOVUlGUENvbnRpbnVlU2xpZGVIYW5kXCIsZ2x5cGg6XCJlYjg0XCJ9LHtuYW1lOlwiTlVJRlBDb250aW51ZVNsaWRlQWN0aW9uXCIsZ2x5cGg6XCJlYjg1XCJ9LHtuYW1lOlwiTlVJRlBSb2xsUmlnaHRIYW5kXCIsZ2x5cGg6XCJlYjg2XCJ9LHtuYW1lOlwiTlVJRlBSb2xsUmlnaHRIYW5kQWN0aW9uXCIsZ2x5cGg6XCJlYjg3XCJ9LHtuYW1lOlwiTlVJRlBSb2xsTGVmdEhhbmRcIixnbHlwaDpcImViODhcIn0se25hbWU6XCJOVUlGUFJvbGxMZWZ0QWN0aW9uXCIsZ2x5cGg6XCJlYjg5XCJ9LHtuYW1lOlwiTlVJRlBQcmVzc0hhbmRcIixnbHlwaDpcImViOGFcIn0se25hbWU6XCJOVUlGUFByZXNzQWN0aW9uXCIsZ2x5cGg6XCJlYjhiXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc1JlcGVhdEhhbmRcIixnbHlwaDpcImViOGNcIn0se25hbWU6XCJOVUlGUFByZXNzUmVwZWF0QWN0aW9uXCIsZ2x5cGg6XCJlYjhkXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JGdWxsXCIsZ2x5cGg6XCJlYjkwXCJ9LHtuYW1lOlwiVGFza1ZpZXdFeHBhbmRlZFwiLGdseXBoOlwiZWI5MVwifSx7bmFtZTpcIkNlcnRpZmljYXRlXCIsZ2x5cGg6XCJlYjk1XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZTGdcIixnbHlwaDpcImViOTZcIn0se25hbWU6XCJSZXR1cm5LZXlMZ1wiLGdseXBoOlwiZWI5N1wifSx7bmFtZTpcIkZhc3RGb3J3YXJkXCIsZ2x5cGg6XCJlYjlkXCJ9LHtuYW1lOlwiUmV3aW5kXCIsZ2x5cGg6XCJlYjllXCJ9LHtuYW1lOlwiUGhvdG8yXCIsZ2x5cGg6XCJlYjlmXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTBcIixnbHlwaDpcImViYTBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MVwiLGdseXBoOlwiZWJhMVwifSx7bmFtZTpcIk1vYkJhdHRlcnkyXCIsZ2x5cGg6XCJlYmEyXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTNcIixnbHlwaDpcImViYTNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5NFwiLGdseXBoOlwiZWJhNFwifSx7bmFtZTpcIk1vYkJhdHRlcnk1XCIsZ2x5cGg6XCJlYmE1XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTZcIixnbHlwaDpcImViYTZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5N1wiLGdseXBoOlwiZWJhN1wifSx7bmFtZTpcIk1vYkJhdHRlcnk4XCIsZ2x5cGg6XCJlYmE4XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTlcIixnbHlwaDpcImViYTlcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MTBcIixnbHlwaDpcImViYWFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJlYmFiXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZWJhY1wifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzJcIixnbHlwaDpcImViYWRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJlYmFlXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZWJhZlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzVcIixnbHlwaDpcImViYjBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJlYmIxXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZWJiMlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzhcIixnbHlwaDpcImViYjNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJlYmI0XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImViYjVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIwXCIsZ2x5cGg6XCJlYmI2XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMVwiLGdseXBoOlwiZWJiN1wifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjJcIixnbHlwaDpcImViYjhcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIzXCIsZ2x5cGg6XCJlYmI5XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyNFwiLGdseXBoOlwiZWJiYVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjVcIixnbHlwaDpcImViYmJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI2XCIsZ2x5cGg6XCJlYmJjXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyN1wiLGdseXBoOlwiZWJiZFwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjhcIixnbHlwaDpcImViYmVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI5XCIsZ2x5cGg6XCJlYmJmXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMTBcIixnbHlwaDpcImViYzBcIn0se25hbWU6XCJEaWN0aW9uYXJ5Q2xvdWRcIixnbHlwaDpcImViYzNcIn0se25hbWU6XCJSZXNldERyaXZlXCIsZ2x5cGg6XCJlYmM0XCJ9LHtuYW1lOlwiVm9sdW1lQmFyc1wiLGdseXBoOlwiZWJjNVwifSx7bmFtZTpcIlByb2plY3RcIixnbHlwaDpcImViYzZcIn0se25hbWU6XCJBZGp1c3RIb2xvZ3JhbVwiLGdseXBoOlwiZWJkMlwifSx7bmFtZTpcIkNsb3VkRG93bmxvYWRcIixnbHlwaDpcImViZDNcIn0se25hbWU6XCJNb2JXaWZpQ2FsbEJhcnNcIixnbHlwaDpcImViZDRcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDBcIixnbHlwaDpcImViZDVcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDFcIixnbHlwaDpcImViZDZcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDJcIixnbHlwaDpcImViZDdcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDNcIixnbHlwaDpcImViZDhcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDRcIixnbHlwaDpcImViZDlcIn0se25hbWU6XCJGYW1pbHlcIixnbHlwaDpcImViZGFcIn0se25hbWU6XCJMb2NrRmVlZGJhY2tcIixnbHlwaDpcImViZGJcIn0se25hbWU6XCJEZXZpY2VEaXNjb3ZlcnlcIixnbHlwaDpcImViZGVcIn0se25hbWU6XCJXaW5kRGlyZWN0aW9uXCIsZ2x5cGg6XCJlYmU2XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUwXCIsZ2x5cGg6XCJlYmU3XCJ9LHtuYW1lOlwiQnVnXCIsZ2x5cGg6XCJlYmU4XCJ9LHtuYW1lOlwiVGFibGV0TW9kZVwiLGdseXBoOlwiZWJmY1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUxlZnRcIixnbHlwaDpcImViZmRcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZUxlZnRcIixnbHlwaDpcImViZmVcIn0se25hbWU6XCJTdGF0dXNFcnJvckxlZnRcIixnbHlwaDpcImViZmZcIn0se25hbWU6XCJTdGF0dXNXYXJuaW5nTGVmdFwiLGdseXBoOlwiZWMwMFwifSx7bmFtZTpcIk1vYkJhdHRlcnlVbmtub3duXCIsZ2x5cGg6XCJlYzAyXCJ9LHtuYW1lOlwiTmV0d29ya1Rvd2VyXCIsZ2x5cGg6XCJlYzA1XCJ9LHtuYW1lOlwiQ2l0eU5leHRcIixnbHlwaDpcImVjMDZcIn0se25hbWU6XCJDaXR5TmV4dDJcIixnbHlwaDpcImVjMDdcIn0se25hbWU6XCJDb3VydGhvdXNlXCIsZ2x5cGg6XCJlYzA4XCJ9LHtuYW1lOlwiR3JvY2VyaWVzXCIsZ2x5cGg6XCJlYzA5XCJ9LHtuYW1lOlwiU3VzdGFpbmFibGVcIixnbHlwaDpcImVjMGFcIn0se25hbWU6XCJCdWlsZGluZ0VuZXJneVwiLGdseXBoOlwiZWMwYlwifSx7bmFtZTpcIlRvZ2dsZUZpbGxlZFwiLGdseXBoOlwiZWMxMVwifSx7bmFtZTpcIlRvZ2dsZUJvcmRlclwiLGdseXBoOlwiZWMxMlwifSx7bmFtZTpcIlNsaWRlclRodW1iXCIsZ2x5cGg6XCJlYzEzXCJ9LHtuYW1lOlwiVG9nZ2xlVGh1bWJcIixnbHlwaDpcImVjMTRcIn0se25hbWU6XCJNaXJhY2FzdExvZ29TbWFsbFwiLGdseXBoOlwiZWMxNVwifSx7bmFtZTpcIk1pcmFjYXN0TG9nb0xhcmdlXCIsZ2x5cGg6XCJlYzE2XCJ9LHtuYW1lOlwiUExBUFwiLGdseXBoOlwiZWMxOVwifSx7bmFtZTpcIkJhZGdlXCIsZ2x5cGg6XCJlYzFiXCJ9LHtuYW1lOlwiU2lnbmFsUm9hbWluZ1wiLGdseXBoOlwiZWMxZVwifSx7bmFtZTpcIk1vYmlsZUxvY2tlZFwiLGdseXBoOlwiZWMyMFwifSx7bmFtZTpcIkluc2lkZXJIdWJBcHBcIixnbHlwaDpcImVjMjRcIn0se25hbWU6XCJQZXJzb25hbEZvbGRlclwiLGdseXBoOlwiZWMyNVwifSx7bmFtZTpcIkhvbWVHcm91cFwiLGdseXBoOlwiZWMyNlwifSx7bmFtZTpcIk15TmV0d29ya1wiLGdseXBoOlwiZWMyN1wifSx7bmFtZTpcIktleWJvYXJkRnVsbFwiLGdseXBoOlwiZWMzMVwifSx7bmFtZTpcIkNhZmVcIixnbHlwaDpcImVjMzJcIn0se25hbWU6XCJNb2JTaWduYWwxXCIsZ2x5cGg6XCJlYzM3XCJ9LHtuYW1lOlwiTW9iU2lnbmFsMlwiLGdseXBoOlwiZWMzOFwifSx7bmFtZTpcIk1vYlNpZ25hbDNcIixnbHlwaDpcImVjMzlcIn0se25hbWU6XCJNb2JTaWduYWw0XCIsZ2x5cGg6XCJlYzNhXCJ9LHtuYW1lOlwiTW9iU2lnbmFsNVwiLGdseXBoOlwiZWMzYlwifSx7bmFtZTpcIk1vYldpZmkxXCIsZ2x5cGg6XCJlYzNjXCJ9LHtuYW1lOlwiTW9iV2lmaTJcIixnbHlwaDpcImVjM2RcIn0se25hbWU6XCJNb2JXaWZpM1wiLGdseXBoOlwiZWMzZVwifSx7bmFtZTpcIk1vYldpZmk0XCIsZ2x5cGg6XCJlYzNmXCJ9LHtuYW1lOlwiTW9iQWlycGxhbmVcIixnbHlwaDpcImVjNDBcIn0se25hbWU6XCJNb2JCbHVldG9vdGhcIixnbHlwaDpcImVjNDFcIn0se25hbWU6XCJNb2JBY3Rpb25DZW50ZXJcIixnbHlwaDpcImVjNDJcIn0se25hbWU6XCJNb2JMb2NhdGlvblwiLGdseXBoOlwiZWM0M1wifSx7bmFtZTpcIk1vYldpZmlIb3RzcG90XCIsZ2x5cGg6XCJlYzQ0XCJ9LHtuYW1lOlwiTGFuZ3VhZ2VKcG5cIixnbHlwaDpcImVjNDVcIn0se25hbWU6XCJNb2JRdWlldEhvdXJzXCIsZ2x5cGg6XCJlYzQ2XCJ9LHtuYW1lOlwiTW9iRHJpdmluZ01vZGVcIixnbHlwaDpcImVjNDdcIn0se25hbWU6XCJTcGVlZE9mZlwiLGdseXBoOlwiZWM0OFwifSx7bmFtZTpcIlNwZWVkTWVkaXVtXCIsZ2x5cGg6XCJlYzQ5XCJ9LHtuYW1lOlwiU3BlZWRIaWdoXCIsZ2x5cGg6XCJlYzRhXCJ9LHtuYW1lOlwiVGhpc1BDXCIsZ2x5cGg6XCJlYzRlXCJ9LHtuYW1lOlwiTXVzaWNOb3RlXCIsZ2x5cGg6XCJlYzRmXCJ9LHtuYW1lOlwiRmlsZUV4cGxvcmVyXCIsZ2x5cGg6XCJlYzUwXCJ9LHtuYW1lOlwiRmlsZUV4cGxvcmVyQXBwXCIsZ2x5cGg6XCJlYzUxXCJ9LHtuYW1lOlwiTGVmdEFycm93S2V5VGltZTBcIixnbHlwaDpcImVjNTJcIn0se25hbWU6XCJNaWNPZmZcIixnbHlwaDpcImVjNTRcIn0se25hbWU6XCJNaWNTbGVlcFwiLGdseXBoOlwiZWM1NVwifSx7bmFtZTpcIk1pY0Vycm9yXCIsZ2x5cGg6XCJlYzU2XCJ9LHtuYW1lOlwiUGxheWJhY2tSYXRlMXhcIixnbHlwaDpcImVjNTdcIn0se25hbWU6XCJQbGF5YmFja1JhdGVPdGhlclwiLGdseXBoOlwiZWM1OFwifSx7bmFtZTpcIkNhc2hEcmF3ZXJcIixnbHlwaDpcImVjNTlcIn0se25hbWU6XCJCYXJjb2RlU2Nhbm5lclwiLGdseXBoOlwiZWM1YVwifSx7bmFtZTpcIlJlY2VpcHRQcmludGVyXCIsZ2x5cGg6XCJlYzViXCJ9LHtuYW1lOlwiTWFnU3RyaXBlUmVhZGVyXCIsZ2x5cGg6XCJlYzVjXCJ9LHtuYW1lOlwiQ29tcGxldGVkU29saWRcIixnbHlwaDpcImVjNjFcIn0se25hbWU6XCJDb21wYW5pb25BcHBcIixnbHlwaDpcImVjNjRcIn0se25hbWU6XCJGYXZpY29uMlwiLGdseXBoOlwiZWM2Y1wifSx7bmFtZTpcIlN3aXBlUmV2ZWFsQXJ0XCIsZ2x5cGg6XCJlYzZkXCJ9LHtuYW1lOlwiTWljT25cIixnbHlwaDpcImVjNzFcIn0se25hbWU6XCJNaWNDbGlwcGluZ1wiLGdseXBoOlwiZWM3MlwifSx7bmFtZTpcIlRhYmxldFNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc0XCJ9LHtuYW1lOlwiTW9iaWxlU2VsZWN0ZWRcIixnbHlwaDpcImVjNzVcIn0se25hbWU6XCJMYXB0b3BTZWxlY3RlZFwiLGdseXBoOlwiZWM3NlwifSx7bmFtZTpcIlRWTW9uaXRvclNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc3XCJ9LHtuYW1lOlwiRGV2ZWxvcGVyVG9vbHNcIixnbHlwaDpcImVjN2FcIn0se25hbWU6XCJNb2JDYWxsRm9yd2FyZGluZ1wiLGdseXBoOlwiZWM3ZVwifSx7bmFtZTpcIk1vYkNhbGxGb3J3YXJkaW5nTWlycm9yZWRcIixnbHlwaDpcImVjN2ZcIn0se25hbWU6XCJCb2R5Q2FtXCIsZ2x5cGg6XCJlYzgwXCJ9LHtuYW1lOlwiUG9saWNlQ2FyXCIsZ2x5cGg6XCJlYzgxXCJ9LHtuYW1lOlwiRHJhd1wiLGdseXBoOlwiZWM4N1wifSx7bmFtZTpcIkRyYXdTb2xpZFwiLGdseXBoOlwiZWM4OFwifSx7bmFtZTpcIkxvd2VyQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWM4YVwifSx7bmFtZTpcIlNjcm9sbFVwRG93blwiLGdseXBoOlwiZWM4ZlwifSx7bmFtZTpcIkRhdGVUaW1lXCIsZ2x5cGg6XCJlYzkyXCJ9LHtuYW1lOlwiSG9sb0xlbnNcIixnbHlwaDpcImVjOTRcIn0se25hbWU6XCJUaWxlc1wiLGdseXBoOlwiZWNhNVwifSx7bmFtZTpcIlBhcnR5TGVhZGVyXCIsZ2x5cGg6XCJlY2E3XCJ9LHtuYW1lOlwiQXBwSWNvbkRlZmF1bHRcIixnbHlwaDpcImVjYWFcIn0se25hbWU6XCJDYWxvcmllc1wiLGdseXBoOlwiZWNhZFwifSx7bmFtZTpcIlBPSVwiLGdseXBoOlwiZWNhZlwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MFwiLGdseXBoOlwiZWNiOVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MVwiLGdseXBoOlwiZWNiYVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MlwiLGdseXBoOlwiZWNiYlwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5M1wiLGdseXBoOlwiZWNiY1wifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NFwiLGdseXBoOlwiZWNiZFwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NVwiLGdseXBoOlwiZWNiZVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NlwiLGdseXBoOlwiZWNiZlwifSx7bmFtZTpcIkFkZFN1cmZhY2VIdWJcIixnbHlwaDpcImVjYzRcIn0se25hbWU6XCJEZXZVcGRhdGVcIixnbHlwaDpcImVjYzVcIn0se25hbWU6XCJVbml0XCIsZ2x5cGg6XCJlY2M2XCJ9LHtuYW1lOlwiQWRkVG9cIixnbHlwaDpcImVjYzhcIn0se25hbWU6XCJSZW1vdmVGcm9tXCIsZ2x5cGg6XCJlY2M5XCJ9LHtuYW1lOlwiUmFkaW9CdG5PZmZcIixnbHlwaDpcImVjY2FcIn0se25hbWU6XCJSYWRpb0J0bk9uXCIsZ2x5cGg6XCJlY2NiXCJ9LHtuYW1lOlwiUmFkaW9CdWxsZXQyXCIsZ2x5cGg6XCJlY2NjXCJ9LHtuYW1lOlwiRXhwbG9yZUNvbnRlbnRcIixnbHlwaDpcImVjY2RcIn0se25hbWU6XCJCbG9ja2VkMlwiLGdseXBoOlwiZWNlNFwifSx7bmFtZTpcIlNjcm9sbE1vZGVcIixnbHlwaDpcImVjZTdcIn0se25hbWU6XCJab29tTW9kZVwiLGdseXBoOlwiZWNlOFwifSx7bmFtZTpcIlBhbk1vZGVcIixnbHlwaDpcImVjZTlcIn0se25hbWU6XCJXaXJlZFVTQlwiLGdseXBoOlwiZWNmMFwifSx7bmFtZTpcIldpcmVsZXNzVVNCXCIsZ2x5cGg6XCJlY2YxXCJ9LHtuYW1lOlwiVVNCU2FmZUNvbm5lY3RcIixnbHlwaDpcImVjZjNcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJOb3RpZmljYXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZWQwY1wifSx7bmFtZTpcIkFjdGlvbkNlbnRlck1pcnJvcmVkXCIsZ2x5cGg6XCJlZDBkXCJ9LHtuYW1lOlwiU3Vic2NyaXB0aW9uQWRkXCIsZ2x5cGg6XCJlZDBlXCJ9LHtuYW1lOlwiUmVzZXREZXZpY2VcIixnbHlwaDpcImVkMTBcIn0se25hbWU6XCJTdWJzY3JpcHRpb25BZGRNaXJyb3JlZFwiLGdseXBoOlwiZWQxMVwifSx7bmFtZTpcIlFSQ29kZVwiLGdseXBoOlwiZWQxNFwifSx7bmFtZTpcIkZlZWRiYWNrXCIsZ2x5cGg6XCJlZDE1XCJ9LHtuYW1lOlwiSGlkZVwiLGdseXBoOlwiZWQxYVwifSx7bmFtZTpcIlN1YnRpdGxlc1wiLGdseXBoOlwiZWQxZVwifSx7bmFtZTpcIlN1YnRpdGxlc0F1ZGlvXCIsZ2x5cGg6XCJlZDFmXCJ9LHtuYW1lOlwiT3BlbkZvbGRlckhvcml6b250YWxcIixnbHlwaDpcImVkMjVcIn0se25hbWU6XCJDYWxlbmRhck1pcnJvcmVkXCIsZ2x5cGg6XCJlZDI4XCJ9LHtuYW1lOlwiTW9iZVNJTVwiLGdseXBoOlwiZWQyYVwifSx7bmFtZTpcIk1vYmVTSU1Ob1Byb2ZpbGVcIixnbHlwaDpcImVkMmJcIn0se25hbWU6XCJNb2JlU0lNTG9ja2VkXCIsZ2x5cGg6XCJlZDJjXCJ9LHtuYW1lOlwiTW9iZVNJTUJ1c3lcIixnbHlwaDpcImVkMmRcIn0se25hbWU6XCJTaWduYWxFcnJvclwiLGdseXBoOlwiZWQyZVwifSx7bmFtZTpcIlN0cmVhbWluZ0VudGVycHJpc2VcIixnbHlwaDpcImVkMmZcIn0se25hbWU6XCJIZWFkcGhvbmUwXCIsZ2x5cGg6XCJlZDMwXCJ9LHtuYW1lOlwiSGVhZHBob25lMVwiLGdseXBoOlwiZWQzMVwifSx7bmFtZTpcIkhlYWRwaG9uZTJcIixnbHlwaDpcImVkMzJcIn0se25hbWU6XCJIZWFkcGhvbmUzXCIsZ2x5cGg6XCJlZDMzXCJ9LHtuYW1lOlwiQXBwc1wiLGdseXBoOlwiZWQzNVwifSx7bmFtZTpcIktleWJvYXJkQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWQzOVwifSx7bmFtZTpcIktleWJvYXJkTG93ZXJCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlZDNhXCJ9LHtuYW1lOlwiU2tpcEJhY2sxMFwiLGdseXBoOlwiZWQzY1wifSx7bmFtZTpcIlNraXBGb3J3YXJkMzBcIixnbHlwaDpcImVkM2RcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyXCIsZ2x5cGg6XCJlZDQxXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlckZpbGxcIixnbHlwaDpcImVkNDJcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyT3BlblwiLGdseXBoOlwiZWQ0M1wifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJPcGVuRmlsbFwiLGdseXBoOlwiZWQ0NFwifSx7bmFtZTpcIk11bHRpbWVkaWFETVBcIixnbHlwaDpcImVkNDdcIn0se25hbWU6XCJLZXlib2FyZE9uZUhhbmRlZFwiLGdseXBoOlwiZWQ0Y1wifSx7bmFtZTpcIk5hcnJhdG9yXCIsZ2x5cGg6XCJlZDRkXCJ9LHtuYW1lOlwiRW1vamlUYWJQZW9wbGVcIixnbHlwaDpcImVkNTNcIn0se25hbWU6XCJFbW9qaVRhYlNtaWxlc0FuaW1hbHNcIixnbHlwaDpcImVkNTRcIn0se25hbWU6XCJFbW9qaVRhYkNlbGVicmF0aW9uT2JqZWN0c1wiLGdseXBoOlwiZWQ1NVwifSx7bmFtZTpcIkVtb2ppVGFiRm9vZFBsYW50c1wiLGdseXBoOlwiZWQ1NlwifSx7bmFtZTpcIkVtb2ppVGFiVHJhbnNpdFBsYWNlc1wiLGdseXBoOlwiZWQ1N1wifSx7bmFtZTpcIkVtb2ppVGFiU3ltYm9sc1wiLGdseXBoOlwiZWQ1OFwifSx7bmFtZTpcIkVtb2ppVGFiVGV4dFNtaWxlc1wiLGdseXBoOlwiZWQ1OVwifSx7bmFtZTpcIkVtb2ppVGFiRmF2b3JpdGVzXCIsZ2x5cGg6XCJlZDVhXCJ9LHtuYW1lOlwiRW1vamlTd2F0Y2hcIixnbHlwaDpcImVkNWJcIn0se25hbWU6XCJDb25uZWN0QXBwXCIsZ2x5cGg6XCJlZDVjXCJ9LHtuYW1lOlwiQ29tcGFuaW9uRGV2aWNlRnJhbWV3b3JrXCIsZ2x5cGg6XCJlZDVkXCJ9LHtuYW1lOlwiUnVsZXJcIixnbHlwaDpcImVkNWVcIn0se25hbWU6XCJGaW5nZXJJbmtpbmdcIixnbHlwaDpcImVkNWZcIn0se25hbWU6XCJTdHJva2VFcmFzZVwiLGdseXBoOlwiZWQ2MFwifSx7bmFtZTpcIlBvaW50RXJhc2VcIixnbHlwaDpcImVkNjFcIn0se25hbWU6XCJDbGVhckFsbElua1wiLGdseXBoOlwiZWQ2MlwifSx7bmFtZTpcIlBlbmNpbFwiLGdseXBoOlwiZWQ2M1wifSx7bmFtZTpcIk1hcmtlclwiLGdseXBoOlwiZWQ2NFwifSx7bmFtZTpcIklua2luZ0NhcmV0XCIsZ2x5cGg6XCJlZDY1XCJ9LHtuYW1lOlwiSW5raW5nQ29sb3JPdXRsaW5lXCIsZ2x5cGg6XCJlZDY2XCJ9LHtuYW1lOlwiSW5raW5nQ29sb3JGaWxsXCIsZ2x5cGg6XCJlZDY3XCJ9LHtuYW1lOlwiSGFyZERyaXZlXCIsZ2x5cGg6XCJlZGEyXCJ9LHtuYW1lOlwiTmV0d29ya0FkYXB0ZXJcIixnbHlwaDpcImVkYTNcIn0se25hbWU6XCJUb3VjaHNjcmVlblwiLGdseXBoOlwiZWRhNFwifSx7bmFtZTpcIk5ldHdvcmtQcmludGVyXCIsZ2x5cGg6XCJlZGE1XCJ9LHtuYW1lOlwiQ2xvdWRQcmludGVyXCIsZ2x5cGg6XCJlZGE2XCJ9LHtuYW1lOlwiS2V5Ym9hcmRTaG9ydGN1dFwiLGdseXBoOlwiZWRhN1wifSx7bmFtZTpcIkJydXNoU2l6ZVwiLGdseXBoOlwiZWRhOFwifSx7bmFtZTpcIk5hcnJhdG9yRm9yd2FyZFwiLGdseXBoOlwiZWRhOVwifSx7bmFtZTpcIk5hcnJhdG9yRm9yd2FyZE1pcnJvcmVkXCIsZ2x5cGg6XCJlZGFhXCJ9LHtuYW1lOlwiU3luY0JhZGdlMTJcIixnbHlwaDpcImVkYWJcIn0se25hbWU6XCJSaW5nZXJCYWRnZTEyXCIsZ2x5cGg6XCJlZGFjXCJ9LHtuYW1lOlwiQXN0ZXJpc2tCYWRnZTEyXCIsZ2x5cGg6XCJlZGFkXCJ9LHtuYW1lOlwiRXJyb3JCYWRnZTEyXCIsZ2x5cGg6XCJlZGFlXCJ9LHtuYW1lOlwiQ2lyY2xlUmluZ0JhZGdlMTJcIixnbHlwaDpcImVkYWZcIn0se25hbWU6XCJDaXJjbGVGaWxsQmFkZ2UxMlwiLGdseXBoOlwiZWRiMFwifSx7bmFtZTpcIkltcG9ydGFudEJhZGdlMTJcIixnbHlwaDpcImVkYjFcIn0se25hbWU6XCJNYWlsQmFkZ2UxMlwiLGdseXBoOlwiZWRiM1wifSx7bmFtZTpcIlBhdXNlQmFkZ2UxMlwiLGdseXBoOlwiZWRiNFwifSx7bmFtZTpcIlBsYXlCYWRnZTEyXCIsZ2x5cGg6XCJlZGI1XCJ9LHtuYW1lOlwiUGVuV29ya3NwYWNlXCIsZ2x5cGg6XCJlZGM2XCJ9LHtuYW1lOlwiQ2FyZXRMZWZ0OFwiLGdseXBoOlwiZWRkNVwifSx7bmFtZTpcIkNhcmV0UmlnaHQ4XCIsZ2x5cGg6XCJlZGQ2XCJ9LHtuYW1lOlwiQ2FyZXRVcDhcIixnbHlwaDpcImVkZDdcIn0se25hbWU6XCJDYXJldERvd244XCIsZ2x5cGg6XCJlZGQ4XCJ9LHtuYW1lOlwiQ2FyZXRMZWZ0U29saWQ4XCIsZ2x5cGg6XCJlZGQ5XCJ9LHtuYW1lOlwiQ2FyZXRSaWdodFNvbGlkOFwiLGdseXBoOlwiZWRkYVwifSx7bmFtZTpcIkNhcmV0VXBTb2xpZDhcIixnbHlwaDpcImVkZGJcIn0se25hbWU6XCJDYXJldERvd25Tb2xpZDhcIixnbHlwaDpcImVkZGNcIn0se25hbWU6XCJTdHJpa2V0aHJvdWdoXCIsZ2x5cGg6XCJlZGUwXCJ9LHtuYW1lOlwiRXhwb3J0XCIsZ2x5cGg6XCJlZGUxXCJ9LHtuYW1lOlwiRXhwb3J0TWlycm9yZWRcIixnbHlwaDpcImVkZTJcIn0se25hbWU6XCJCdXR0b25NZW51XCIsZ2x5cGg6XCJlZGUzXCJ9LHtuYW1lOlwiQ2xvdWRTZWFyY2hcIixnbHlwaDpcImVkZTRcIn0se25hbWU6XCJQaW55aW5JTUVMb2dvXCIsZ2x5cGg6XCJlZGU1XCJ9LHtuYW1lOlwiQ2FsbGlncmFwaHlQZW5cIixnbHlwaDpcImVkZmJcIn0se25hbWU6XCJSZXBseU1pcnJvcmVkXCIsZ2x5cGg6XCJlZTM1XCJ9LHtuYW1lOlwiTG9ja3NjcmVlbkRlc2t0b3BcIixnbHlwaDpcImVlM2ZcIn0se25hbWU6XCJUYXNrVmlld1NldHRpbmdzXCIsZ2x5cGg6XCJlZTQwXCJ9LHtuYW1lOlwiTWluaUV4cGFuZDJNaXJyb3JlZFwiLGdseXBoOlwiZWU0N1wifSx7bmFtZTpcIk1pbmlDb250cmFjdDJNaXJyb3JlZFwiLGdseXBoOlwiZWU0OVwifSx7bmFtZTpcIlBsYXkzNlwiLGdseXBoOlwiZWU0YVwifSx7bmFtZTpcIlBlblBhbGV0dGVcIixnbHlwaDpcImVlNTZcIn0se25hbWU6XCJHdWVzdFVzZXJcIixnbHlwaDpcImVlNTdcIn0se25hbWU6XCJTZXR0aW5nc0JhdHRlcnlcIixnbHlwaDpcImVlNjNcIn0se25hbWU6XCJUYXNrYmFyUGhvbmVcIixnbHlwaDpcImVlNjRcIn0se25hbWU6XCJMb2NrU2NyZWVuR2xhbmNlXCIsZ2x5cGg6XCJlZTY1XCJ9LHtuYW1lOlwiR2VuZXJpY1NjYW5cIixnbHlwaDpcImVlNmZcIn0se25hbWU6XCJJbWFnZUV4cG9ydFwiLGdseXBoOlwiZWU3MVwifSx7bmFtZTpcIldpZmlFdGhlcm5ldFwiLGdseXBoOlwiZWU3N1wifSx7bmFtZTpcIkFjdGlvbkNlbnRlclF1aWV0XCIsZ2x5cGg6XCJlZTc5XCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyUXVpZXROb3RpZmljYXRpb25cIixnbHlwaDpcImVlN2FcIn0se25hbWU6XCJUcmFja2Vyc01pcnJvcmVkXCIsZ2x5cGg6XCJlZTkyXCJ9LHtuYW1lOlwiRGF0ZVRpbWVNaXJyb3JlZFwiLGdseXBoOlwiZWU5M1wifSx7bmFtZTpcIldoZWVsXCIsZ2x5cGg6XCJlZTk0XCJ9LHtuYW1lOlwiVmlydHVhbE1hY2hpbmVHcm91cFwiLGdseXBoOlwiZWVhM1wifSx7bmFtZTpcIkJ1dHRvblZpZXcyXCIsZ2x5cGg6XCJlZWNhXCJ9LHtuYW1lOlwiUGVuV29ya3NwYWNlTWlycm9yZWRcIixnbHlwaDpcImVmMTVcIn0se25hbWU6XCJQZW5QYWxldHRlTWlycm9yZWRcIixnbHlwaDpcImVmMTZcIn0se25hbWU6XCJTdHJva2VFcmFzZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE3XCJ9LHtuYW1lOlwiUG9pbnRFcmFzZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE4XCJ9LHtuYW1lOlwiQ2xlYXJBbGxJbmtNaXJyb3JlZFwiLGdseXBoOlwiZWYxOVwifSx7bmFtZTpcIkJhY2tncm91bmRUb2dnbGVcIixnbHlwaDpcImVmMWZcIn0se25hbWU6XCJNYXJxdWVlXCIsZ2x5cGg6XCJlZjIwXCJ9LHtuYW1lOlwiQ2hyb21lQ2xvc2VDb250cmFzdFwiLGdseXBoOlwiZWYyY1wifSx7bmFtZTpcIkNocm9tZU1pbmltaXplQ29udHJhc3RcIixnbHlwaDpcImVmMmRcIn0se25hbWU6XCJDaHJvbWVNYXhpbWl6ZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJlXCJ9LHtuYW1lOlwiQ2hyb21lUmVzdG9yZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJmXCJ9LHtuYW1lOlwiVHJhZmZpY0xpZ2h0XCIsZ2x5cGg6XCJlZjMxXCJ9LHtuYW1lOlwiUmVwbGF5XCIsZ2x5cGg6XCJlZjNiXCJ9LHtuYW1lOlwiRXllZHJvcHBlclwiLGdseXBoOlwiZWYzY1wifSx7bmFtZTpcIkxpbmVEaXNwbGF5XCIsZ2x5cGg6XCJlZjNkXCJ9LHtuYW1lOlwiUElOUGFkXCIsZ2x5cGg6XCJlZjNlXCJ9LHtuYW1lOlwiU2lnbmF0dXJlQ2FwdHVyZVwiLGdseXBoOlwiZWYzZlwifSx7bmFtZTpcIkNoaXBDYXJkQ3JlZGl0Q2FyZFJlYWRlclwiLGdseXBoOlwiZWY0MFwifSx7bmFtZTpcIk1hcmtldERvd25cIixnbHlwaDpcImVmNDJcIn0se25hbWU6XCJQbGF5ZXJTZXR0aW5nc1wiLGdseXBoOlwiZWY1OFwifSx7bmFtZTpcIkxhbmRzY2FwZU9yaWVudGF0aW9uXCIsZ2x5cGg6XCJlZjZiXCJ9LHtuYW1lOlwiRmxvd1wiLGdseXBoOlwiZWY5MFwifSx7bmFtZTpcIlRvdWNocGFkXCIsZ2x5cGg6XCJlZmE1XCJ9LHtuYW1lOlwiU3BlZWNoXCIsZ2x5cGg6XCJlZmE5XCJ9LHtuYW1lOlwiS25vd2xlZGdlQXJ0aWNsZVwiLGdseXBoOlwiZjAwMFwifSx7bmFtZTpcIlJlbGF0aW9uc2hpcFwiLGdseXBoOlwiZjAwM1wifSx7bmFtZTpcIlppcEZvbGRlclwiLGdseXBoOlwiZjAxMlwifSx7bmFtZTpcIkRlZmF1bHRBUE5cIixnbHlwaDpcImYwODBcIn0se25hbWU6XCJVc2VyQVBOXCIsZ2x5cGg6XCJmMDgxXCJ9LHtuYW1lOlwiRG91YmxlUGlueWluXCIsZ2x5cGg6XCJmMDg1XCJ9LHtuYW1lOlwiQmx1ZUxpZ2h0XCIsZ2x5cGg6XCJmMDhjXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZExlZnRcIixnbHlwaDpcImYwOGRcIn0se25hbWU6XCJDYXJldFNvbGlkRG93blwiLGdseXBoOlwiZjA4ZVwifSx7bmFtZTpcIkNhcmV0U29saWRSaWdodFwiLGdseXBoOlwiZjA4ZlwifSx7bmFtZTpcIkNhcmV0U29saWRVcFwiLGdseXBoOlwiZjA5MFwifSx7bmFtZTpcIkJ1dHRvbkFcIixnbHlwaDpcImYwOTNcIn0se25hbWU6XCJCdXR0b25CXCIsZ2x5cGg6XCJmMDk0XCJ9LHtuYW1lOlwiQnV0dG9uWVwiLGdseXBoOlwiZjA5NVwifSx7bmFtZTpcIkJ1dHRvblhcIixnbHlwaDpcImYwOTZcIn0se25hbWU6XCJBcnJvd1VwOFwiLGdseXBoOlwiZjBhZFwifSx7bmFtZTpcIkFycm93RG93bjhcIixnbHlwaDpcImYwYWVcIn0se25hbWU6XCJBcnJvd1JpZ2h0OFwiLGdseXBoOlwiZjBhZlwifSx7bmFtZTpcIkFycm93TGVmdDhcIixnbHlwaDpcImYwYjBcIn0se25hbWU6XCJRdWFyZW50aW5lZEl0ZW1zXCIsZ2x5cGg6XCJmMGIyXCJ9LHtuYW1lOlwiUXVhcmVudGluZWRJdGVtc01pcnJvcmVkXCIsZ2x5cGg6XCJmMGIzXCJ9LHtuYW1lOlwiUHJvdHJhY3RvclwiLGdseXBoOlwiZjBiNFwifSx7bmFtZTpcIkNoZWNrbGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGI1XCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlN1wiLGdseXBoOlwiZjBiNlwifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFyazdcIixnbHlwaDpcImYwYjdcIn0se25hbWU6XCJTdGF0dXNFcnJvckNpcmNsZTdcIixnbHlwaDpcImYwYjhcIn0se25hbWU6XCJDb25uZWN0ZWRcIixnbHlwaDpcImYwYjlcIn0se25hbWU6XCJQZW5jaWxGaWxsXCIsZ2x5cGg6XCJmMGM2XCJ9LHtuYW1lOlwiQ2FsbGlncmFwaHlGaWxsXCIsZ2x5cGg6XCJmMGM3XCJ9LHtuYW1lOlwiUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGNhXCJ9LHtuYW1lOlwiUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBjYlwifSx7bmFtZTpcIlRocmVlUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGNjXCJ9LHtuYW1lOlwiVGhyZWVRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGNkXCJ9LHtuYW1lOlwiUXVpZXRIb3Vyc0JhZGdlMTJcIixnbHlwaDpcImYwY2VcIn0se25hbWU6XCJCYWNrTWlycm9yZWRcIixnbHlwaDpcImYwZDJcIn0se25hbWU6XCJGb3J3YXJkTWlycm9yZWRcIixnbHlwaDpcImYwZDNcIn0se25hbWU6XCJDaHJvbWVCYWNrQ29udHJhc3RcIixnbHlwaDpcImYwZDVcIn0se25hbWU6XCJDaHJvbWVCYWNrQ29udHJhc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBkNlwifSx7bmFtZTpcIkNocm9tZUJhY2tUb1dpbmRvd0NvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ3XCJ9LHtuYW1lOlwiQ2hyb21lRnVsbFNjcmVlbkNvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ4XCJ9LHtuYW1lOlwiR3JpZFZpZXdcIixnbHlwaDpcImYwZTJcIn0se25hbWU6XCJDbGlwYm9hcmRMaXN0XCIsZ2x5cGg6XCJmMGUzXCJ9LHtuYW1lOlwiQ2xpcGJvYXJkTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGU0XCJ9LHtuYW1lOlwiT3V0bGluZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBlNVwifSx7bmFtZTpcIk91dGxpbmVRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGU2XCJ9LHtuYW1lOlwiT3V0bGluZUhhbGZTdGFyTGVmdFwiLGdseXBoOlwiZjBlN1wifSx7bmFtZTpcIk91dGxpbmVIYWxmU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGU4XCJ9LHtuYW1lOlwiT3V0bGluZVRocmVlUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGU5XCJ9LHtuYW1lOlwiT3V0bGluZVRocmVlUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBlYVwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUwXCIsZ2x5cGg6XCJmMGViXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTFcIixnbHlwaDpcImYwZWNcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lMlwiLGdseXBoOlwiZjBlZFwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUzXCIsZ2x5cGg6XCJmMGVlXCJ9LHtuYW1lOlwiQXBwbGljYXRpb25HdWFyZFwiLGdseXBoOlwiZjBlZlwifSx7bmFtZTpcIk91dGxpbmVTdGFyTGVmdEhhbGZcIixnbHlwaDpcImYwZjdcIn0se25hbWU6XCJPdXRsaW5lU3RhclJpZ2h0SGFsZlwiLGdseXBoOlwiZjBmOFwifSx7bmFtZTpcIkNocm9tZUFubm90YXRlQ29udHJhc3RcIixnbHlwaDpcImYwZjlcIn0se25hbWU6XCJEZWZlbmRlckJhZGdlMTJcIixnbHlwaDpcImYwZmJcIn0se25hbWU6XCJEZXRhY2hhYmxlUENcIixnbHlwaDpcImYxMDNcIn0se25hbWU6XCJMZWZ0U3RpY2tcIixnbHlwaDpcImYxMDhcIn0se25hbWU6XCJSaWdodFN0aWNrXCIsZ2x5cGg6XCJmMTA5XCJ9LHtuYW1lOlwiVHJpZ2dlckxlZnRcIixnbHlwaDpcImYxMGFcIn0se25hbWU6XCJUcmlnZ2VyUmlnaHRcIixnbHlwaDpcImYxMGJcIn0se25hbWU6XCJCdW1wZXJMZWZ0XCIsZ2x5cGg6XCJmMTBjXCJ9LHtuYW1lOlwiQnVtcGVyUmlnaHRcIixnbHlwaDpcImYxMGRcIn0se25hbWU6XCJEcGFkXCIsZ2x5cGg6XCJmMTBlXCJ9LHtuYW1lOlwiRW5nbGlzaFB1bmN0dWF0aW9uXCIsZ2x5cGg6XCJmMTEwXCJ9LHtuYW1lOlwiQ2hpbmVzZVB1bmN0dWF0aW9uXCIsZ2x5cGg6XCJmMTExXCJ9LHtuYW1lOlwiSE1EXCIsZ2x5cGg6XCJmMTE5XCJ9LHtuYW1lOlwiQ3RybFNwYXRpYWxSaWdodFwiLGdseXBoOlwiZjExYlwifSx7bmFtZTpcIlBhZ2luYXRpb25Eb3RPdXRsaW5lMTBcIixnbHlwaDpcImYxMjZcIn0se25hbWU6XCJQYWdpbmF0aW9uRG90U29saWQxMFwiLGdseXBoOlwiZjEyN1wifSx7bmFtZTpcIlN0cm9rZUVyYXNlMlwiLGdseXBoOlwiZjEyOFwifSx7bmFtZTpcIlNtYWxsRXJhc2VcIixnbHlwaDpcImYxMjlcIn0se25hbWU6XCJMYXJnZUVyYXNlXCIsZ2x5cGg6XCJmMTJhXCJ9LHtuYW1lOlwiRm9sZGVySG9yaXpvbnRhbFwiLGdseXBoOlwiZjEyYlwifSx7bmFtZTpcIk1pY3JvcGhvbmVMaXN0ZW5pbmdcIixnbHlwaDpcImYxMmVcIn0se25hbWU6XCJTdGF0dXNFeGNsYW1hdGlvbkNpcmNsZTdcIixnbHlwaDpcImYxMmZcIn0se25hbWU6XCJWaWRlbzM2MFwiLGdseXBoOlwiZjEzMVwifSx7bmFtZTpcIkdpZnRib3hPcGVuXCIsZ2x5cGg6XCJmMTMzXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlT3V0ZXJcIixnbHlwaDpcImYxMzZcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVJbm5lclwiLGdseXBoOlwiZjEzN1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVJpbmdcIixnbHlwaDpcImYxMzhcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZU91dGVyXCIsZ2x5cGg6XCJmMTM5XCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVJbm5lclwiLGdseXBoOlwiZjEzYVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlRXhjbGFtYXRpb25cIixnbHlwaDpcImYxM2JcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVFeGNsYW1hdGlvblwiLGdseXBoOlwiZjEzY1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUVycm9yWFwiLGdseXBoOlwiZjEzZFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUNoZWNrbWFya1wiLGdseXBoOlwiZjEzZVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUluZm9cIixnbHlwaDpcImYxM2ZcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVCbG9ja1wiLGdseXBoOlwiZjE0MFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUJsb2NrMlwiLGdseXBoOlwiZjE0MVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVF1ZXN0aW9uTWFya1wiLGdseXBoOlwiZjE0MlwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVN5bmNcIixnbHlwaDpcImYxNDNcIn0se25hbWU6XCJEaWFsMVwiLGdseXBoOlwiZjE0NlwifSx7bmFtZTpcIkRpYWwyXCIsZ2x5cGg6XCJmMTQ3XCJ9LHtuYW1lOlwiRGlhbDNcIixnbHlwaDpcImYxNDhcIn0se25hbWU6XCJEaWFsNFwiLGdseXBoOlwiZjE0OVwifSx7bmFtZTpcIkRpYWw1XCIsZ2x5cGg6XCJmMTRhXCJ9LHtuYW1lOlwiRGlhbDZcIixnbHlwaDpcImYxNGJcIn0se25hbWU6XCJEaWFsN1wiLGdseXBoOlwiZjE0Y1wifSx7bmFtZTpcIkRpYWw4XCIsZ2x5cGg6XCJmMTRkXCJ9LHtuYW1lOlwiRGlhbDlcIixnbHlwaDpcImYxNGVcIn0se25hbWU6XCJEaWFsMTBcIixnbHlwaDpcImYxNGZcIn0se25hbWU6XCJEaWFsMTFcIixnbHlwaDpcImYxNTBcIn0se25hbWU6XCJEaWFsMTJcIixnbHlwaDpcImYxNTFcIn0se25hbWU6XCJEaWFsMTNcIixnbHlwaDpcImYxNTJcIn0se25hbWU6XCJEaWFsMTRcIixnbHlwaDpcImYxNTNcIn0se25hbWU6XCJEaWFsMTVcIixnbHlwaDpcImYxNTRcIn0se25hbWU6XCJEaWFsMTZcIixnbHlwaDpcImYxNTVcIn0se25hbWU6XCJEaWFsU2hhcGUxXCIsZ2x5cGg6XCJmMTU2XCJ9LHtuYW1lOlwiRGlhbFNoYXBlMlwiLGdseXBoOlwiZjE1N1wifSx7bmFtZTpcIkRpYWxTaGFwZTNcIixnbHlwaDpcImYxNThcIn0se25hbWU6XCJEaWFsU2hhcGU0XCIsZ2x5cGg6XCJmMTU5XCJ9LHtuYW1lOlwiQ2xvc2VkQ2FwdGlvbnNJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJmMTVmXCJ9LHtuYW1lOlwiVG9sbFNvbGlkXCIsZ2x5cGg6XCJmMTYxXCJ9LHtuYW1lOlwiVHJhZmZpY0Nvbmdlc3Rpb25Tb2xpZFwiLGdseXBoOlwiZjE2M1wifSx7bmFtZTpcIkV4cGxvcmVDb250ZW50U2luZ2xlXCIsZ2x5cGg6XCJmMTY0XCJ9LHtuYW1lOlwiQ29sbGFwc2VDb250ZW50XCIsZ2x5cGg6XCJmMTY1XCJ9LHtuYW1lOlwiQ29sbGFwc2VDb250ZW50U2luZ2xlXCIsZ2x5cGg6XCJmMTY2XCJ9LHtuYW1lOlwiSW5mb1NvbGlkXCIsZ2x5cGg6XCJmMTY3XCJ9LHtuYW1lOlwiR3JvdXBMaXN0XCIsZ2x5cGg6XCJmMTY4XCJ9LHtuYW1lOlwiQ2FyZXRCb3R0b21SaWdodFNvbGlkQ2VudGVyOFwiLGdseXBoOlwiZjE2OVwifSx7bmFtZTpcIlByb2dyZXNzUmluZ0RvdHNcIixnbHlwaDpcImYxNmFcIn0se25hbWU6XCJDaGVja2JveDE0XCIsZ2x5cGg6XCJmMTZiXCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGUxNFwiLGdseXBoOlwiZjE2Y1wifSx7bmFtZTpcIkNoZWNrYm94SW5kZXRlcm1pbmF0ZUNvbWJvMTRcIixnbHlwaDpcImYxNmRcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVDb21ib1wiLGdseXBoOlwiZjE2ZVwifSx7bmFtZTpcIlN0YXR1c1BhdXNlN1wiLGdseXBoOlwiZjE3NVwifSx7bmFtZTpcIkNoYXJhY3RlckFwcGVhcmFuY2VcIixnbHlwaDpcImYxN2ZcIn0se25hbWU6XCJMZXhpY29uXCIsZ2x5cGg6XCJmMTgwXCJ9LHtuYW1lOlwiU2NyZWVuVGltZVwiLGdseXBoOlwiZjE4MlwifSx7bmFtZTpcIkhlYWRsZXNzRGV2aWNlXCIsZ2x5cGg6XCJmMTkxXCJ9LHtuYW1lOlwiTmV0d29ya1NoYXJpbmdcIixnbHlwaDpcImYxOTNcIn0se25hbWU6XCJFeWVHYXplXCIsZ2x5cGg6XCJmMTlkXCJ9LHtuYW1lOlwiVG9nZ2xlTGVmdFwiLGdseXBoOlwiZjE5ZVwifSx7bmFtZTpcIlRvZ2dsZVJpZ2h0XCIsZ2x5cGg6XCJmMTlmXCJ9LHtuYW1lOlwiV2luZG93c0luc2lkZXJcIixnbHlwaDpcImYxYWRcIn0se25hbWU6XCJDaHJvbWVTd2l0Y2hcIixnbHlwaDpcImYxY2JcIn0se25hbWU6XCJDaHJvbWVTd2l0Y2hDb250YXN0XCIsZ2x5cGg6XCJmMWNjXCJ9LHtuYW1lOlwiU3RhdHVzQ2hlY2ttYXJrXCIsZ2x5cGg6XCJmMWQ4XCJ9LHtuYW1lOlwiU3RhdHVzQ2hlY2ttYXJrTGVmdFwiLGdseXBoOlwiZjFkOVwifSx7bmFtZTpcIktleWJvYXJkTGVmdEFsaWduZWRcIixnbHlwaDpcImYyMGNcIn0se25hbWU6XCJLZXlib2FyZFJpZ2h0QWxpZ25lZFwiLGdseXBoOlwiZjIwZFwifSx7bmFtZTpcIktleWJvYXJkU2V0dGluZ3NcIixnbHlwaDpcImYyMTBcIn0se25hbWU6XCJOZXR3b3JrUGh5c2ljYWxcIixnbHlwaDpcImYyMTFcIn0se25hbWU6XCJJT1RcIixnbHlwaDpcImYyMmNcIn0se25hbWU6XCJVbmtub3duTWlycm9yZWRcIixnbHlwaDpcImYyMmVcIn0se25hbWU6XCJWaWV3RGFzaGJvYXJkXCIsZ2x5cGg6XCJmMjQ2XCJ9LHtuYW1lOlwiRXhwbG9pdFByb3RlY3Rpb25TZXR0aW5nc1wiLGdseXBoOlwiZjI1OVwifSx7bmFtZTpcIktleWJvYXJkTmFycm93XCIsZ2x5cGg6XCJmMjYwXCJ9LHtuYW1lOlwiS2V5Ym9hcmQxMktleVwiLGdseXBoOlwiZjI2MVwifSx7bmFtZTpcIktleWJvYXJkRG9ja1wiLGdseXBoOlwiZjI2YlwifSx7bmFtZTpcIktleWJvYXJkVW5kb2NrXCIsZ2x5cGg6XCJmMjZjXCJ9LHtuYW1lOlwiS2V5Ym9hcmRMZWZ0RG9ja1wiLGdseXBoOlwiZjI2ZFwifSx7bmFtZTpcIktleWJvYXJkUmlnaHREb2NrXCIsZ2x5cGg6XCJmMjZlXCJ9LHtuYW1lOlwiRWFyXCIsZ2x5cGg6XCJmMjcwXCJ9LHtuYW1lOlwiUG9pbnRlckhhbmRcIixnbHlwaDpcImYyNzFcIn0se25hbWU6XCJCdWxsc2V5ZVwiLGdseXBoOlwiZjI3MlwifSx7bmFtZTpcIkRvY3VtZW50QXBwcm92YWxcIixnbHlwaDpcImYyOGJcIn0se25hbWU6XCJMb2NhbGVMYW5ndWFnZVwiLGdseXBoOlwiZjJiN1wifSx7bmFtZTpcIlBhc3NpdmVBdXRoZW50aWNhdGlvblwiLGdseXBoOlwiZjMyYVwifSx7bmFtZTpcIkNvbG9yU29saWRcIixnbHlwaDpcImYzNTRcIn0se25hbWU6XCJOZXR3b3JrT2ZmbGluZVwiLGdseXBoOlwiZjM4NFwifSx7bmFtZTpcIk5ldHdvcmtDb25uZWN0ZWRcIixnbHlwaDpcImYzODVcIn0se25hbWU6XCJOZXR3b3JrQ29ubmVjdGVkQ2hlY2ttYXJrXCIsZ2x5cGg6XCJmMzg2XCJ9LHtuYW1lOlwiU2lnbk91dFwiLGdseXBoOlwiZjNiMVwifSx7bmFtZTpcIlN0YXR1c0luZm9cIixnbHlwaDpcImYzY2NcIn0se25hbWU6XCJTdGF0dXNJbmZvTGVmdFwiLGdseXBoOlwiZjNjZFwifSx7bmFtZTpcIk5lYXJieVNoYXJpbmdcIixnbHlwaDpcImYzZTJcIn0se25hbWU6XCJDdHJsU3BhdGlhbExlZnRcIixnbHlwaDpcImYzZTdcIn0se25hbWU6XCJJbnRlcmFjdGl2ZURhc2hib2FyZFwiLGdseXBoOlwiZjQwNFwifSx7bmFtZTpcIkRlY2xpbmVDYWxsXCIsZ2x5cGg6XCJmNDA1XCJ9LHtuYW1lOlwiQ2xpcHBpbmdUb29sXCIsZ2x5cGg6XCJmNDA2XCJ9LHtuYW1lOlwiUmVjdGFuZ3VsYXJDbGlwcGluZ1wiLGdseXBoOlwiZjQwN1wifSx7bmFtZTpcIkZyZWVGb3JtQ2xpcHBpbmdcIixnbHlwaDpcImY0MDhcIn0se25hbWU6XCJDb3B5VG9cIixnbHlwaDpcImY0MTNcIn0se25hbWU6XCJJREJhZGdlXCIsZ2x5cGg6XCJmNDI3XCJ9LHtuYW1lOlwiRHluYW1pY0xvY2tcIixnbHlwaDpcImY0MzlcIn0se25hbWU6XCJQZW5UaXBzXCIsZ2x5cGg6XCJmNDVlXCJ9LHtuYW1lOlwiUGVuVGlwc01pcnJvcmVkXCIsZ2x5cGg6XCJmNDVmXCJ9LHtuYW1lOlwiSFdQSm9pblwiLGdseXBoOlwiZjQ2MFwifSx7bmFtZTpcIkhXUEluc2VydFwiLGdseXBoOlwiZjQ2MVwifSx7bmFtZTpcIkhXUFN0cmlrZVRocm91Z2hcIixnbHlwaDpcImY0NjJcIn0se25hbWU6XCJIV1BTY3JhdGNoT3V0XCIsZ2x5cGg6XCJmNDYzXCJ9LHtuYW1lOlwiSFdQU3BsaXRcIixnbHlwaDpcImY0NjRcIn0se25hbWU6XCJIV1BOZXdMaW5lXCIsZ2x5cGg6XCJmNDY1XCJ9LHtuYW1lOlwiSFdQT3ZlcndyaXRlXCIsZ2x5cGg6XCJmNDY2XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmcxXCIsZ2x5cGg6XCJmNDczXCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmcyXCIsZ2x5cGg6XCJmNDc0XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmczXCIsZ2x5cGg6XCJmNDc1XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmc0XCIsZ2x5cGg6XCJmNDc2XCJ9LHtuYW1lOlwiTWljTG9jYXRpb25Db21ib1wiLGdseXBoOlwiZjQ3ZlwifSx7bmFtZTpcIkdsb2JlMlwiLGdseXBoOlwiZjQ5YVwifSx7bmFtZTpcIlNwZWNpYWxFZmZlY3RTaXplXCIsZ2x5cGg6XCJmNGE1XCJ9LHtuYW1lOlwiR0lGXCIsZ2x5cGg6XCJmNGE5XCJ9LHtuYW1lOlwiU3RpY2tlcjJcIixnbHlwaDpcImY0YWFcIn0se25hbWU6XCJTdXJmYWNlSHViU2VsZWN0ZWRcIixnbHlwaDpcImY0YmVcIn0se25hbWU6XCJIb2xvTGVuc1NlbGVjdGVkXCIsZ2x5cGg6XCJmNGJmXCJ9LHtuYW1lOlwiRWFyYnVkXCIsZ2x5cGg6XCJmNGMwXCJ9LHtuYW1lOlwiTWl4Vm9sdW1lc1wiLGdseXBoOlwiZjRjM1wifSx7bmFtZTpcIlNhZmVcIixnbHlwaDpcImY1NDBcIn0se25hbWU6XCJMYXB0b3BTZWN1cmVcIixnbHlwaDpcImY1NTJcIn0se25hbWU6XCJQcmludERlZmF1bHRcIixnbHlwaDpcImY1NmRcIn0se25hbWU6XCJQYWdlTWlycm9yZWRcIixnbHlwaDpcImY1NmVcIn0se25hbWU6XCJMYW5kc2NhcGVPcmllbnRhdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJmNTZmXCJ9LHtuYW1lOlwiQ29sb3JPZmZcIixnbHlwaDpcImY1NzBcIn0se25hbWU6XCJQcmludEFsbFBhZ2VzXCIsZ2x5cGg6XCJmNTcxXCJ9LHtuYW1lOlwiUHJpbnRDdXN0b21SYW5nZVwiLGdseXBoOlwiZjU3MlwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE5hcnJvd1wiLGdseXBoOlwiZjU3M1wifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE5vcm1hbFwiLGdseXBoOlwiZjU3NFwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE1vZGVyYXRlXCIsZ2x5cGg6XCJmNTc1XCJ9LHtuYW1lOlwiUGFnZU1hcmdpblBvcnRyYWl0V2lkZVwiLGdseXBoOlwiZjU3NlwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVOYXJyb3dcIixnbHlwaDpcImY1NzdcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlTm9ybWFsXCIsZ2x5cGg6XCJmNTc4XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZU1vZGVyYXRlXCIsZ2x5cGg6XCJmNTc5XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZVdpZGVcIixnbHlwaDpcImY1N2FcIn0se25hbWU6XCJDb2xsYXRlTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNTdiXCJ9LHtuYW1lOlwiQ29sbGF0ZVBvcnRyYWl0XCIsZ2x5cGg6XCJmNTdjXCJ9LHtuYW1lOlwiQ29sbGF0ZVBvcnRyYWl0U2VwYXJhdGVkXCIsZ2x5cGg6XCJmNTdkXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlT25lU2lkZWRcIixnbHlwaDpcImY1N2VcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVPbmVTaWRlZE1pcnJvcmVkXCIsZ2x5cGg6XCJmNTdmXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRMb25nRWRnZVwiLGdseXBoOlwiZjU4MFwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkTG9uZ0VkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4MVwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkU2hvcnRFZGdlXCIsZ2x5cGg6XCJmNTgyXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRTaG9ydEVkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4M1wifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0T25lU2lkZWRcIixnbHlwaDpcImY1ODRcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdE9uZVNpZGVkTWlycm9yZWRcIixnbHlwaDpcImY1ODVcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkTG9uZ0VkZ2VcIixnbHlwaDpcImY1ODZcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkTG9uZ0VkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4N1wifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0VHdvU2lkZWRTaG9ydEVkZ2VcIixnbHlwaDpcImY1ODhcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkU2hvcnRFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODlcIn0se25hbWU6XCJQUFNPbmVMYW5kc2NhcGVcIixnbHlwaDpcImY1OGFcIn0se25hbWU6XCJQUFNUd29MYW5kc2NhcGVcIixnbHlwaDpcImY1OGJcIn0se25hbWU6XCJQUFNUd29Qb3J0cmFpdFwiLGdseXBoOlwiZjU4Y1wifSx7bmFtZTpcIlBQU0ZvdXJMYW5kc2NhcGVcIixnbHlwaDpcImY1OGRcIn0se25hbWU6XCJQUFNGb3VyUG9ydHJhaXRcIixnbHlwaDpcImY1OGVcIn0se25hbWU6XCJIb2xlUHVuY2hPZmZcIixnbHlwaDpcImY1OGZcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdExlZnRcIixnbHlwaDpcImY1OTBcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdFJpZ2h0XCIsZ2x5cGg6XCJmNTkxXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRUb3BcIixnbHlwaDpcImY1OTJcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdEJvdHRvbVwiLGdseXBoOlwiZjU5M1wifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZUxlZnRcIixnbHlwaDpcImY1OTRcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVSaWdodFwiLGdseXBoOlwiZjU5NVwifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZVRvcFwiLGdseXBoOlwiZjU5NlwifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZUJvdHRvbVwiLGdseXBoOlwiZjU5N1wifSx7bmFtZTpcIlN0YXBsaW5nT2ZmXCIsZ2x5cGg6XCJmNTk4XCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFRvcExlZnRcIixnbHlwaDpcImY1OTlcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VG9wUmlnaHRcIixnbHlwaDpcImY1OWFcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0Qm90dG9tUmlnaHRcIixnbHlwaDpcImY1OWJcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvTGVmdFwiLGdseXBoOlwiZjU5Y1wifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29SaWdodFwiLGdseXBoOlwiZjU5ZFwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29Ub3BcIixnbHlwaDpcImY1OWVcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvQm90dG9tXCIsZ2x5cGg6XCJmNTlmXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvb2tCaW5kaW5nXCIsZ2x5cGg6XCJmNWEwXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUb3BMZWZ0XCIsZ2x5cGg6XCJmNWExXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUb3BSaWdodFwiLGdseXBoOlwiZjVhMlwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm90dG9tTGVmdFwiLGdseXBoOlwiZjVhM1wifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm90dG9tUmlnaHRcIixnbHlwaDpcImY1YTRcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b0xlZnRcIixnbHlwaDpcImY1YTVcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b1JpZ2h0XCIsZ2x5cGg6XCJmNWE2XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29Ub3BcIixnbHlwaDpcImY1YTdcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b0JvdHRvbVwiLGdseXBoOlwiZjVhOFwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm9va0JpbmRpbmdcIixnbHlwaDpcImY1YTlcIn0se25hbWU6XCJTdGF0dXNEYXRhVHJhbnNmZXJSb2FtaW5nXCIsZ2x5cGg6XCJmNWFhXCJ9LHtuYW1lOlwiTW9iU0lNRXJyb3JcIixnbHlwaDpcImY1YWJcIn0se25hbWU6XCJDb2xsYXRlTGFuZHNjYXBlU2VwYXJhdGVkXCIsZ2x5cGg6XCJmNWFjXCJ9LHtuYW1lOlwiUFBTT25lUG9ydHJhaXRcIixnbHlwaDpcImY1YWRcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0Qm90dG9tTGVmdFwiLGdseXBoOlwiZjVhZVwifSx7bmFtZTpcIlBsYXlTb2xpZFwiLGdseXBoOlwiZjViMFwifSx7bmFtZTpcIlJlcGVhdE9mZlwiLGdseXBoOlwiZjVlN1wifSx7bmFtZTpcIlNldFwiLGdseXBoOlwiZjVlZFwifSx7bmFtZTpcIlNldFNvbGlkXCIsZ2x5cGg6XCJmNWVlXCJ9LHtuYW1lOlwiRnV6enlSZWFkaW5nXCIsZ2x5cGg6XCJmNWVmXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MFwiLGdseXBoOlwiZjVmMlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTFcIixnbHlwaDpcImY1ZjNcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkyXCIsZ2x5cGg6XCJmNWY0XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5M1wiLGdseXBoOlwiZjVmNVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTRcIixnbHlwaDpcImY1ZjZcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk1XCIsZ2x5cGg6XCJmNWY3XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5NlwiLGdseXBoOlwiZjVmOFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTdcIixnbHlwaDpcImY1ZjlcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk4XCIsZ2x5cGg6XCJmNWZhXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5OVwiLGdseXBoOlwiZjVmYlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTEwXCIsZ2x5cGg6XCJmNWZjXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJmNWZkXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcxXCIsZ2x5cGg6XCJmNWZlXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJmNWZmXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJmNjAwXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc0XCIsZ2x5cGg6XCJmNjAxXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJmNjAyXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJmNjAzXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc3XCIsZ2x5cGg6XCJmNjA0XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJmNjA1XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJmNjA2XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcxMFwiLGdseXBoOlwiZjYwN1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeVVua25vd25cIixnbHlwaDpcImY2MDhcIn0se25hbWU6XCJTSU1FcnJvclwiLGdseXBoOlwiZjYxOFwifSx7bmFtZTpcIlNJTU1pc3NpbmdcIixnbHlwaDpcImY2MTlcIn0se25hbWU6XCJTSU1Mb2NrXCIsZ2x5cGg6XCJmNjFhXCJ9LHtuYW1lOlwiZVNJTVwiLGdseXBoOlwiZjYxYlwifSx7bmFtZTpcImVTSU1Ob1Byb2ZpbGVcIixnbHlwaDpcImY2MWNcIn0se25hbWU6XCJlU0lNTG9ja2VkXCIsZ2x5cGg6XCJmNjFkXCJ9LHtuYW1lOlwiZVNJTUJ1c3lcIixnbHlwaDpcImY2MWVcIn0se25hbWU6XCJOb2lzZUNhbmNlbGF0aW9uXCIsZ2x5cGg6XCJmNjFmXCJ9LHtuYW1lOlwiTm9pc2VDYW5jZWxhdGlvbk9mZlwiLGdseXBoOlwiZjYyMFwifSx7bmFtZTpcIk11c2ljU2hhcmluZ1wiLGdseXBoOlwiZjYyM1wifSx7bmFtZTpcIk11c2ljU2hhcmluZ09mZlwiLGdseXBoOlwiZjYyNFwifSx7bmFtZTpcIkNpcmNsZVNoYXBlU29saWRcIixnbHlwaDpcImY2M2NcIn0se25hbWU6XCJXaWZpQ2FsbEJhcnNcIixnbHlwaDpcImY2NTdcIn0se25hbWU6XCJXaWZpQ2FsbDBcIixnbHlwaDpcImY2NThcIn0se25hbWU6XCJXaWZpQ2FsbDFcIixnbHlwaDpcImY2NTlcIn0se25hbWU6XCJXaWZpQ2FsbDJcIixnbHlwaDpcImY2NWFcIn0se25hbWU6XCJXaWZpQ2FsbDNcIixnbHlwaDpcImY2NWJcIn0se25hbWU6XCJXaWZpQ2FsbDRcIixnbHlwaDpcImY2NWNcIn0se25hbWU6XCJDSFRMYW5ndWFnZUJhclwiLGdseXBoOlwiZjY5ZVwifSx7bmFtZTpcIkNvbXBvc2VNb2RlXCIsZ2x5cGg6XCJmNmE5XCJ9LHtuYW1lOlwiRXhwcmVzc2l2ZUlucHV0RW50cnlcIixnbHlwaDpcImY2YjhcIn0se25hbWU6XCJFbW9qaVRhYk1vcmVTeW1ib2xzXCIsZ2x5cGg6XCJmNmJhXCJ9LHtuYW1lOlwiV2ViU2VhcmNoXCIsZ2x5cGg6XCJmNmZhXCJ9LHtuYW1lOlwiS2lvc2tcIixnbHlwaDpcImY3MTJcIn0se25hbWU6XCJSVFRMb2dvXCIsZ2x5cGg6XCJmNzE0XCJ9LHtuYW1lOlwiVm9pY2VDYWxsXCIsZ2x5cGg6XCJmNzE1XCJ9LHtuYW1lOlwiR29Ub01lc3NhZ2VcIixnbHlwaDpcImY3MTZcIn0se25hbWU6XCJSZXR1cm5Ub0NhbGxcIixnbHlwaDpcImY3MWFcIn0se25hbWU6XCJTdGFydFByZXNlbnRpbmdcIixnbHlwaDpcImY3MWNcIn0se25hbWU6XCJTdG9wUHJlc2VudGluZ1wiLGdseXBoOlwiZjcxZFwifSx7bmFtZTpcIlByb2R1Y3Rpdml0eU1vZGVcIixnbHlwaDpcImY3MWVcIn0se25hbWU6XCJTZXRIaXN0b3J5U3RhdHVzXCIsZ2x5cGg6XCJmNzM4XCJ9LHtuYW1lOlwiU2V0SGlzdG9yeVN0YXR1czJcIixnbHlwaDpcImY3MzlcIn0se25hbWU6XCJLZXlib2FyZHNldHRpbmdzMjBcIixnbHlwaDpcImY3M2RcIn0se25hbWU6XCJPbmVIYW5kZWRSaWdodDIwXCIsZ2x5cGg6XCJmNzNlXCJ9LHtuYW1lOlwiT25lSGFuZGVkTGVmdDIwXCIsZ2x5cGg6XCJmNzNmXCJ9LHtuYW1lOlwiU3BsaXQyMFwiLGdseXBoOlwiZjc0MFwifSx7bmFtZTpcIkZ1bGwyMFwiLGdseXBoOlwiZjc0MVwifSx7bmFtZTpcIkhhbmR3cml0aW5nMjBcIixnbHlwaDpcImY3NDJcIn0se25hbWU6XCJDaGV2cm9uTGVmdDIwXCIsZ2x5cGg6XCJmNzQzXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnQzMlwiLGdseXBoOlwiZjc0NFwifSx7bmFtZTpcIkNoZXZyb25SaWdodDIwXCIsZ2x5cGg6XCJmNzQ1XCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0MzJcIixnbHlwaDpcImY3NDZcIn0se25hbWU6XCJFdmVudDEyXCIsZ2x5cGg6XCJmNzYzXCJ9LHtuYW1lOlwiTWljT2ZmMlwiLGdseXBoOlwiZjc4MVwifSx7bmFtZTpcIkRlbGl2ZXJ5T3B0aW1pemF0aW9uXCIsZ2x5cGg6XCJmNzg1XCJ9LHtuYW1lOlwiQ2FuY2VsTWVkaXVtXCIsZ2x5cGg6XCJmNzhhXCJ9LHtuYW1lOlwiU2VhcmNoTWVkaXVtXCIsZ2x5cGg6XCJmNzhiXCJ9LHtuYW1lOlwiQWNjZXB0TWVkaXVtXCIsZ2x5cGg6XCJmNzhjXCJ9LHtuYW1lOlwiUmV2ZWFsUGFzc3dvcmRNZWRpdW1cIixnbHlwaDpcImY3OGRcIn0se25hbWU6XCJEZWxldGVXb3JkXCIsZ2x5cGg6XCJmN2FkXCJ9LHtuYW1lOlwiRGVsZXRlV29yZEZpbGxcIixnbHlwaDpcImY3YWVcIn0se25hbWU6XCJEZWxldGVMaW5lc1wiLGdseXBoOlwiZjdhZlwifSx7bmFtZTpcIkRlbGV0ZUxpbmVzRmlsbFwiLGdseXBoOlwiZjdiMFwifSx7bmFtZTpcIkluc3RlcnRXb3Jkc1wiLGdseXBoOlwiZjdiMVwifSx7bmFtZTpcIkluc3RlcnRXb3Jkc0ZpbGxcIixnbHlwaDpcImY3YjJcIn0se25hbWU6XCJKb2luV29yZHNcIixnbHlwaDpcImY3YjNcIn0se25hbWU6XCJKb2luV29yZHNGaWxsXCIsZ2x5cGg6XCJmN2I0XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNcIixnbHlwaDpcImY3YjVcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0ZpbGxcIixnbHlwaDpcImY3YjZcIn0se25hbWU6XCJBZGROZXdMaW5lXCIsZ2x5cGg6XCJmN2I3XCJ9LHtuYW1lOlwiQWRkTmV3TGluZUZpbGxcIixnbHlwaDpcImY3YjhcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0tvcmVhblwiLGdseXBoOlwiZjdiOVwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzRmlsbEtvcmVhblwiLGdseXBoOlwiZjdiYVwifSx7bmFtZTpcIkVkdWNhdGlvbkljb25cIixnbHlwaDpcImY3YmJcIn0se25hbWU6XCJXaW5kb3dTbmlwcGluZ1wiLGdseXBoOlwiZjdlZFwifSx7bmFtZTpcIlZpZGVvQ2FwdHVyZVwiLGdseXBoOlwiZjdlZVwifSx7bmFtZTpcIlN0YXR1c1NlY3VyZWRcIixnbHlwaDpcImY4MDlcIn0se25hbWU6XCJOYXJyYXRvckFwcFwiLGdseXBoOlwiZjgzYlwifSx7bmFtZTpcIlBvd2VyQnV0dG9uVXBkYXRlXCIsZ2x5cGg6XCJmODNkXCJ9LHtuYW1lOlwiUmVzdGFydFVwZGF0ZVwiLGdseXBoOlwiZjgzZVwifSx7bmFtZTpcIlVwZGF0ZVN0YXR1c0RvdFwiLGdseXBoOlwiZjgzZlwifSx7bmFtZTpcIkVqZWN0XCIsZ2x5cGg6XCJmODQ3XCJ9LHtuYW1lOlwiU3BlbGxpbmdcIixnbHlwaDpcImY4N2JcIn0se25hbWU6XCJTcGVsbGluZ0tvcmVhblwiLGdseXBoOlwiZjg3Y1wifSx7bmFtZTpcIlNwZWxsaW5nU2VyYmlhblwiLGdseXBoOlwiZjg3ZFwifSx7bmFtZTpcIlNwZWxsaW5nQ2hpbmVzZVwiLGdseXBoOlwiZjg3ZVwifSx7bmFtZTpcIkZvbGRlclNlbGVjdFwiLGdseXBoOlwiZjg5YVwifSx7bmFtZTpcIlNtYXJ0U2NyZWVuXCIsZ2x5cGg6XCJmOGE1XCJ9LHtuYW1lOlwiRXhwbG9pdFByb3RlY3Rpb25cIixnbHlwaDpcImY4YTZcIn0se25hbWU6XCJBZGRCb2xkXCIsZ2x5cGg6XCJmOGFhXCJ9LHtuYW1lOlwiU3VidHJhY3RCb2xkXCIsZ2x5cGg6XCJmOGFiXCJ9LHtuYW1lOlwiQmFja1NvbGlkQm9sZFwiLGdseXBoOlwiZjhhY1wifSx7bmFtZTpcIkZvcndhcmRTb2xpZEJvbGRcIixnbHlwaDpcImY4YWRcIn0se25hbWU6XCJQYXVzZUJvbGRcIixnbHlwaDpcImY4YWVcIn0se25hbWU6XCJDbGlja1NvbGlkXCIsZ2x5cGg6XCJmOGFmXCJ9LHtuYW1lOlwiU2V0dGluZ3NTb2xpZFwiLGdseXBoOlwiZjhiMFwifSx7bmFtZTpcIk1pY3JvcGhvbmVTb2xpZEJvbGRcIixnbHlwaDpcImY4YjFcIn0se25hbWU6XCJTcGVlY2hTb2xpZEJvbGRcIixnbHlwaDpcImY4YjJcIn0se25hbWU6XCJDbGlja2VkT3V0TG91ZFNvbGlkQm9sZFwiLGdseXBoOlwiZjhiM1wifV07bGV0IHA9Y2xhc3MgZXh0ZW5kcyBlLkN1c3RvbUNvbXBvbmVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcImZvbnQtZmFtaWx5XCIsXCJnbHlwaFwiLFwiZm9udC1zaXplXCIsXCJmb3JlZ3JvdW5kXCIsXCJ1c2UtYWNjZW50XCJdfWdldCBmb250RmFtaWx5KCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLmdldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIpKSYmdm9pZCAwIT09ZT9lOlwiU2Vnb2UgRmx1ZW50IEljb25zXCJ9c2V0IGZvbnRGYW1pbHkoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLGUpLHRoaXMuc2V0Rm9udEZhbWlseSgpfWdldCBnbHlwaCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImdseXBoXCIpfXNldCBnbHlwaChlKXt0aGlzLnNldEF0dHJpYnV0ZShcImdseXBoXCIsZSksdGhpcy5zZXRHbHlwaCgpfWdldCBmb250U2l6ZSgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImZvbnQtc2l6ZVwiKT9wYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiKSk6MTZ9c2V0IGZvbnRTaXplKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsZS50b1N0cmluZygpKSx0aGlzLnNldEZvbnRTaXplKCl9Z2V0IGZvcmVncm91bmQoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJmb3JlZ3JvdW5kXCIpfXNldCBmb3JlZ3JvdW5kKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9yZWdyb3VuZFwiLGUpLHRoaXMuc2V0Rm9yZWdyb3VuZCgpfWdldCB1c2VBY2NlbnQoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIil9c2V0IHVzZUFjY2VudChlKXt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIixlKSx0aGlzLnNldEZvcmVncm91bmQoKX1nZXQgaWNvblNwYW4oKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuX2ljb25TcGFuKSYmdm9pZCAwIT09ZXx8KHRoaXMuX2ljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIikpLHRoaXMuX2ljb25TcGFufXJlbmRlcigpe3JldHVybidcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBwYXJ0PVwiaWNvblwiPjwvc3Bhbj5cXG4gICAgICAgICd9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldEZvbnRGYW1pbHkoKSx0aGlzLnNldEdseXBoKCksdGhpcy5zZXRGb250U2l6ZSgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3dpdGNoKGUpe2Nhc2VcImZvbnQtZmFtaWx5XCI6dGhpcy5zZXRGb250RmFtaWx5KCk7YnJlYWs7Y2FzZVwiZ2x5cGhcIjp0aGlzLnNldEdseXBoKCk7YnJlYWs7Y2FzZVwiZm9udC1zaXplXCI6dGhpcy5zZXRGb250U2l6ZSgpO2JyZWFrO2Nhc2VcImZvcmVncm91bmRcIjpjYXNlXCJ1c2UtYWNjZW50XCI6dGhpcy5zZXRGb3JlZ3JvdW5kKCl9fXNldEZvbnRGYW1pbHkoKXt0aGlzLmljb25TcGFuLnN0eWxlLmZvbnRGYW1pbHk9dGhpcy5mb250RmFtaWx5K1wiLCBzYW5zLXNlcmlmXCJ9c2V0R2x5cGgoKXt0aGlzLmljb25TcGFuLmlubmVySFRNTD10aGlzLmdseXBofXNldEZvbnRTaXplKCl7aWYobnVsbCE9PXRoaXMuZm9udFNpemUpe2NvbnN0IGU9dGhpcy5mb250U2l6ZStcInB4XCIsYT10aGlzLnN0eWxlLG49dGhpcy5pY29uU3Bhbi5zdHlsZTtuLmZvbnRTaXplPWUsbi5saW5lSGVpZ2h0PWUsbi5oZWlnaHQ9ZSxuLndpZHRoPWUsYS5oZWlnaHQ9ZSxhLndpZHRoPWV9fXNldEZvcmVncm91bmQoKXt0aGlzLmljb25TcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJ1c2UtYWNjZW50XCIsdGhpcy51c2VBY2NlbnQpLG51bGwhPT10aGlzLmZvcmVncm91bmQmJih0aGlzLmljb25TcGFuLnN0eWxlLmNvbG9yPXRoaXMuZm9yZWdyb3VuZCl9fTtwLnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uLnVzZS1hY2NlbnQge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLWFjY2VudC1kZWZhdWx0KTtcXG4gICAgICAgIH1cXG4gICAgXCIscD1hKFsoMCxlLmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtZm9udC1pY29uXCIpXSxwKTtsZXQgaD1jbGFzcyBleHRlbmRzIHB7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJmb250LWZhbWlseVwiLFwiZ2x5cGhcIixcImZvbnQtc2l6ZVwiLFwiZm9yZWdyb3VuZFwiLFwidXNlLWFjY2VudFwiLFwic3ltYm9sXCJdfWdldCBzeW1ib2woKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzeW1ib2xcIil9c2V0IHN5bWJvbChlKXt0aGlzLnNldEF0dHJpYnV0ZShcInN5bWJvbFwiLGUpLHRoaXMuc2V0U3ltYm9sKCl9Z2V0IGdseXBoTWFwKCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLl9nbHlwaE1hcCkmJnZvaWQgMCE9PWU/ZTpnfXNldCBnbHlwaE1hcChlKXt0aGlzLl9nbHlwaE1hcD1lLHRoaXMuc2V0U3ltYm9sKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKXtzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pLFwic3ltYm9sXCI9PT1lJiZ0aGlzLnNldFN5bWJvbCgpfXNldFN5bWJvbCgpe2NvbnN0IGU9dGhpcy5zeW1ib2w/XCImI3hcIit0aGlzLmdseXBoTWFwLmZpbmQoKGU9PmUubmFtZT09PXRoaXMuc3ltYm9sKSkuZ2x5cGg6XCJcIjtzdXBlci5nbHlwaD1lfX07aD1hKFsoMCxlLmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtc3ltYm9sLWljb25cIildLGgpO2xldCB0PWNsYXNzIGV4dGVuZHMgZS5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJzb3VyY2VcIixcInNpemVcIixcImFsdFwiLFwidGl0bGVcIl19Z2V0IHNvdXJjZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInNvdXJjZVwiKX1zZXQgc291cmNlKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwic291cmNlXCIsZSl9Z2V0IHNpemUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJzaXplXCIpP3BhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk6MTZ9c2V0IHNpemUoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsZS50b1N0cmluZygpKX1nZXQgYWx0KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiYWx0XCIpfWdldCB0aXRsZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfWdldCBpbWFnZSgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5faW1hZ2UpJiZ2b2lkIDAhPT1lfHwodGhpcy5faW1hZ2U9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIikpLHRoaXMuX2ltYWdlfXJlbmRlcigpe3JldHVybic8aW1nIGNsYXNzPVwiaW1hZ2VcIiAvPid9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldFNvdXJjZSgpLHRoaXMuc2V0U2l6ZSgpLHRoaXMuc2V0QWx0T3JUaXRsZSgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3dpdGNoKGUpe2Nhc2VcInNvdXJjZVwiOnRoaXMuc2V0U291cmNlKCk7YnJlYWs7Y2FzZVwic2l6ZVwiOnRoaXMuc2V0U2l6ZSgpO2JyZWFrO2Nhc2VcImFsdFwiOmNhc2VcInRpdGxlXCI6dGhpcy5zZXRBbHRPclRpdGxlKCl9fXNldFNvdXJjZSgpe3RoaXMuaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpcy5zb3VyY2UpfXNldFNpemUoKXtjb25zdCBlPXRoaXMuaW1hZ2Uuc3R5bGUsYT10aGlzLnN0eWxlO2Uud2lkdGg9dGhpcy5zaXplK1wicHhcIixlLmhlaWdodD10aGlzLnNpemUrXCJweFwiLGEud2lkdGg9dGhpcy5zaXplK1wicHhcIixhLmhlaWdodD10aGlzLnNpemUrXCJweFwifXNldEFsdE9yVGl0bGUoKXt0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLHRoaXMuYWx0KSx0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdGhpcy50aXRsZSl9fTt0LnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pbWFnZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIFwiLHQ9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWltYWdlLWljb25cIildLHQpfSkoKSxsfSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQuanMubWFwIiwiLypcbiAqIGFuaW1lLmpzIHYzLjIuMVxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBuaWw6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDsgfSxcbiAgaGV4OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7IH0sXG4gIHJnYjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9ecmdiLy50ZXN0KGEpOyB9LFxuICBoc2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXmhzbC8udGVzdChhKTsgfSxcbiAgY29sOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTsgfSxcbiAga2V5OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7IH0sXG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xuICBpZiAoIHN0ZXBzID09PSB2b2lkIDAgKSBzdGVwcyA9IDEwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOiBcbiAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjsgfTsgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xuICB9XG59XG5cbi8vIFN0cmluZ3NcblxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xuICB0cnkge1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBBcnJheXNcblxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpIGluIGFycikge1xuICAgICAgdmFyIHZhbCA9IGFycltpXTtcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTsgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcbiAgaWYgKGlzLmFycihvKSkgeyByZXR1cm4gbzsgfVxuICBpZiAoaXMuc3RyKG8pKSB7IG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbzsgfVxuICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgeyByZXR1cm4gW10uc2xpY2UuY2FsbChvKTsgfVxuICByZXR1cm4gW29dO1xufVxuXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSA9PT0gdmFsOyB9KTtcbn1cblxuLy8gT2JqZWN0c1xuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XG4gIHZhciBjbG9uZSA9IHt9O1xuICBmb3IgKHZhciBwIGluIG8pIHsgY2xvbmVbcF0gPSBvW3BdOyB9XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMSkgeyBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8yKSB7IG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuLy8gQ29sb3JzXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAobSwgciwgZywgYikgeyByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiOyB9ICk7XG4gIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxuICAgIGlmICh0ID4gMSkgeyB0IC09IDE7IH1cbiAgICBpZiAodCA8IDEvNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDsgfVxuICAgIGlmICh0IDwgMS8yKSB7IHJldHVybiBxOyB9XG4gICAgaWYgKHQgPCAyLzMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjsgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIHZhciByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gIH1cbiAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHsgcmV0dXJuIHJnYlRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oZXgodmFsKSkgeyByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhzbCh2YWwpKSB7IHJldHVybiBoc2xUb1JnYmEodmFsKTsgfVxufVxuXG4vLyBVbml0c1xuXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xuICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xuICBpZiAoc3BsaXQpIHsgcmV0dXJuIHNwbGl0WzFdOyB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHsgcmV0dXJuICdweCc7IH1cbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHsgcmV0dXJuICdkZWcnOyB9XG59XG5cbi8vIFZhbHVlc1xuXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xuICBpZiAoIWlzLmZuYyh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XG4gIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xuICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgdmFyIGJhc2VsaW5lID0gMTAwO1xuICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcbiAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xuICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XG4gIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XG4gIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcbiAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XG59XG5cbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XG4gIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XG4gICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xuICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7IHJldHVybiAnYXR0cmlidXRlJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHsgcmV0dXJuICd0cmFuc2Zvcm0nOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7IHJldHVybiAnY3NzJzsgfVxuICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkgeyByZXR1cm4gJ29iamVjdCc7IH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcbiAgaWYgKCFpcy5kb20oZWwpKSB7IHJldHVybjsgfVxuICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xuICB2YXIgcmVnICA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XG4gIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuICB2YXIgbTsgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7IHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pOyB9XG4gIHJldHVybiB0cmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcbiAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xuICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xuICBpZiAoYW5pbWF0YWJsZSkge1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XG4gIH1cbiAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcbiAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XG4gICAgY2FzZSAndHJhbnNmb3JtJzogcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xuICAgIGNhc2UgJ2Nzcyc6IHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcbiAgICBjYXNlICdhdHRyaWJ1dGUnOiByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGRlZmF1bHQ6IHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xuICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcbiAgaWYgKCFvcGVyYXRvcikgeyByZXR1cm4gdG87IH1cbiAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xuICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XG4gICAgY2FzZSAnKyc6IHJldHVybiB4ICsgeSArIHU7XG4gICAgY2FzZSAnLSc6IHJldHVybiB4IC0geSArIHU7XG4gICAgY2FzZSAnKic6IHJldHVybiB4ICogeSArIHU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgaWYgKGlzLmNvbCh2YWwpKSB7IHJldHVybiBjb2xvclRvUmdiKHZhbCk7IH1cbiAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgaWYgKHVuaXQpIHsgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDsgfVxuICByZXR1cm4gdW5pdExlc3M7XG59XG5cbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xuICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBnZXREaXN0YW5jZShcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKX0sIFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpfVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICB2YXIgcHJldmlvdXNQb3M7XG4gIGZvciAodmFyIGkgPSAwIDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xuICAgIGlmIChpID4gMCkgeyB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7IH1cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG4gIH1cbiAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XG59XG5cbi8vIFBhdGggYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XG4gIGlmIChlbC5nZXRUb3RhbExlbmd0aCkgeyByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTsgfVxuICBzd2l0Y2goZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnY2lyY2xlJzogcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncmVjdCc6IHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcbiAgICBjYXNlICdsaW5lJzogcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzogcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5Z29uJzogcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcbiAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xuICByZXR1cm4gcGF0aExlbmd0aDtcbn1cblxuLy8gTW90aW9uIHBhdGhcblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcbiAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcbiAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkgeyBicmVhazsgfVxuICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcGFyZW50RWw7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcbiAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XG4gIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xuICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XG4gIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcbiAgcmV0dXJuIHtcbiAgICBlbDogcGFyZW50U3ZnRWwsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICB4OiB2aWV3Qm94WzBdIC8gMSxcbiAgICB5OiB2aWV3Qm94WzFdIC8gMSxcbiAgICB3OiB3aWR0aCxcbiAgICBoOiBoZWlnaHQsXG4gICAgdlc6IHZpZXdCb3hbMl0sXG4gICAgdkg6IHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XG4gIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xuICAgIGlmICggb2Zmc2V0ID09PSB2b2lkIDAgKSBvZmZzZXQgPSAwO1xuXG4gICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xuICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XG4gIH1cbiAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XG4gIHZhciBwID0gcG9pbnQoKTtcbiAgdmFyIHAwID0gcG9pbnQoLTEpO1xuICB2YXIgcDEgPSBwb2ludCgrMSk7XG4gIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XG4gIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XG4gIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3gnOiByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhZjtcblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcbiAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxuICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxuICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XG4gICAgICAvLyBzdXNwZW5kIHRpY2tzXG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxuICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxuICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UgLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpOyB9XG4gICAgICApO1xuICAgICAgZW5naW5lKCk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xuICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xuICAgIH1cbiAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XG4gICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xuICAgICAgfVxuICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcbiAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHsgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpOyB9XG4gICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcbiAgICAgIGxhc3RUaW1lID0gMDtcbiAgICAgIGNvdW50SXRlcmF0aW9uKCk7XG4gICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdztcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xuICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XG4gICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHsgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTsgfVxuICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7IGluc3RhbmNlLnJlbWFpbmluZysrOyB9XG4gICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcbiAgfTtcblxuICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxuICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgZW5naW5lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnJlc2V0KCk7XG4gICAgaW5zdGFuY2UucGxheSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xuICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xuICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHsgY2hpbGRyZW4uc3BsaWNlKGMsIDEpOyB9XG4gIH1cbiAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xuYW5pbWUuc3BlZWQgPSAxO1xuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gU2VlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWxib3Vybi83OWM0NzNhYWI0MDRhYmNkMzZkYzdjZmFhN2FjMDJhY1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJnYkZyb21IZXgoaGV4KSB7XG4gICAgaWYgKGhleFswXSA9PT0gXCIjXCIpIHtcbiAgICAgICAgaGV4ID0gaGV4LnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByOiBwYXJzZUludChoZXhbMF0gKyBoZXhbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQoaGV4WzJdICsgaGV4WzNdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KGhleFs0XSArIGhleFs1XSwgMTYpLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYmxlbmQoYmFzZVZhbHVlLCBvdmVybGF5VmFsdWUsIGFscGhhKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQob3ZlcmxheVZhbHVlICogYWxwaGEgKyBiYXNlVmFsdWUgKiAoMSAtIGFscGhhKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUFscGhhQmxlbmQoYmFzZUhleCwgb3ZlcmxheUhleCwgYWxwaGEpIHtcbiAgICBjb25zdCBiYXNlID0gZ2V0UmdiRnJvbUhleChiYXNlSGV4KTtcbiAgICBjb25zdCBvdmVybGF5ID0gZ2V0UmdiRnJvbUhleChvdmVybGF5SGV4KTtcbiAgICBjb25zdCBibGVuZGVkID0ge1xuICAgICAgICByOiBibGVuZChiYXNlLnIsIG92ZXJsYXkuciwgYWxwaGEpLFxuICAgICAgICBnOiBibGVuZChiYXNlLmcsIG92ZXJsYXkuZywgYWxwaGEpLFxuICAgICAgICBiOiBibGVuZChiYXNlLmIsIG92ZXJsYXkuYiwgYWxwaGEpLFxuICAgIH07XG4gICAgcmV0dXJuIChcIiNcIiArXG4gICAgICAgIGJsZW5kZWQuci50b1N0cmluZygxNikgK1xuICAgICAgICBibGVuZGVkLmcudG9TdHJpbmcoMTYpICtcbiAgICAgICAgYmxlbmRlZC5iLnRvU3RyaW5nKDE2KSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DdXJyZW5jeSh2YWx1ZSkge1xuICAgIHJldHVybiBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pLmZvcm1hdCh2YWx1ZSk7XG59XG4iLCIvLyBXcml0dGVuIGJ5IEdhcnkgQW50aWVyXG4vLyBDcmVhdGVkOiAyMDIwXG4vLyBNb2RpZmllZDogQXByIDIwLCAyMDIzXG5leHBvcnQgY29uc3QgRnVsbE1vbnRoID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbmNvbnN0IEFiYnJNb250aCA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcHRcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG5jb25zdCBGdWxsRGF5c09mV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xuY29uc3QgQWJickRheXNPZldlZWsgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5leHBvcnQgY2xhc3MgVGltZUNvbnN0YW50c0Jhc2Uge1xuICAgIGdldCBNaWxsaXNlY29uZHNJbkFTZWNvbmQoKSB7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH1cbiAgICBnZXQgU2Vjb25kc0luQU1pbnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BTWludXRlKCkge1xuICAgICAgICBsZXQgbWlsbGkgPSB0aGlzLk1pbGxpc2Vjb25kc0luQVNlY29uZCAqIHRoaXMuU2Vjb25kc0luQU1pbnV0ZTtcbiAgICAgICAgcmV0dXJuIG1pbGxpO1xuICAgIH1cbiAgICBnZXQgTWludXRlc0luQW5Ib3VyKCkge1xuICAgICAgICByZXR1cm4gNjA7XG4gICAgfVxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFuSG91cigpIHtcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFNaW51dGUgKiB0aGlzLk1pbnV0ZXNJbkFuSG91cjtcbiAgICAgICAgcmV0dXJuIG1pbGxpO1xuICAgIH1cbiAgICBnZXQgSG91cnNJbkFEYXkoKSB7XG4gICAgICAgIHJldHVybiAyNDtcbiAgICB9XG4gICAgZ2V0IE1pbGxpc2Vjb25kc0luQURheSgpIHtcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFuSG91ciAqIHRoaXMuSG91cnNJbkFEYXk7XG4gICAgICAgIHJldHVybiBtaWxsaTtcbiAgICB9XG4gICAgZ2V0IERheXNJbkFZZWFyKCkge1xuICAgICAgICByZXR1cm4gMzY1O1xuICAgIH1cbn1cbmNvbnN0IFRpbWVDb25zdGFudHMgPSBuZXcgVGltZUNvbnN0YW50c0Jhc2UoKTtcbmV4cG9ydCBjbGFzcyBUaW1lU3BhbiB7XG4gICAgY29uc3RydWN0b3IobWlsbGkpIHtcbiAgICAgICAgdGhpcy5taWxsaSA9IG1pbGxpO1xuICAgICAgICB0aGlzLnRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQVNlY29uZCk7XG4gICAgICAgIHRoaXMudG90YWxNaW51dGVzID0gTWF0aC5mbG9vcihtaWxsaSAvIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BTWludXRlKTtcbiAgICAgICAgdGhpcy50b3RhbEhvdXJzID0gTWF0aC5mbG9vcihtaWxsaSAvIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BbkhvdXIpO1xuICAgICAgICB0aGlzLnRvdGFsRGF5cyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQURheSk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzICUgVGltZUNvbnN0YW50cy5TZWNvbmRzSW5BTWludXRlO1xuICAgICAgICB0aGlzLm1pbnV0ZXMgPSB0aGlzLnRvdGFsTWludXRlcyAlIFRpbWVDb25zdGFudHMuTWludXRlc0luQW5Ib3VyO1xuICAgICAgICB0aGlzLmhvdXJzID0gdGhpcy50b3RhbEhvdXJzICUgVGltZUNvbnN0YW50cy5Ib3Vyc0luQURheTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy50b3RhbERheXMgJSBUaW1lQ29uc3RhbnRzLkRheXNJbkFZZWFyO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuZGF5cyA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMuZGF5c31kIGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaG91cnMgPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLmhvdXJzfWggYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5taW51dGVzID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5taW51dGVzfW0gYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWNvbmRzID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5zZWNvbmRzfXNgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR1cmF0aW9uID09IFwiXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRlLCBvZmZzZXQpIHtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2UoZGF0ZVRpbWUsIG9mZnNldCA9IDApIHtcbiAgICAgICAgaWYgKGRhdGVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgaXJyZWd1bGFyRm9ybWF0UmVnZXggPSAvKFxcL0RhdGVcXCgpKC4qKShcXClcXC8pL2k7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGVUaW1lID09PSBcInN0cmluZ1wiICYmIGlycmVndWxhckZvcm1hdFJlZ2V4LnRlc3QoZGF0ZVRpbWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gaXJyZWd1bGFyRm9ybWF0UmVnZXguZXhlYyhkYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWUgPSBwYXJzZUludChtYXRjaFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbWlsbGkgPSB0eXBlb2YgZGF0ZVRpbWUgPT09IFwibnVtYmVyXCIgPyBkYXRlVGltZSA6IERhdGUucGFyc2UoZGF0ZVRpbWUpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKG1pbGxpKSkge1xuICAgICAgICAgICAgICAgIG1pbGxpID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVUQyBvZmZzZXQuLi5cbiAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldCAqIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BbkhvdXI7XG4gICAgICAgICAgICBtaWxsaSArPSBvZmZzZXQ7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG1pbGxpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoZGF0ZSwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUobmV3IERhdGUoKSwgOCk7XG4gICAgfVxuICAgIHN0YXRpYyBlbmRPZk1vbnRoKG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICBnZXQgeWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG4gICAgZ2V0IG1vbnRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgICBnZXQgZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICBnZXQgZGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXkoKTtcbiAgICB9XG4gICAgZ2V0IGhvdXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEhvdXJzKCk7XG4gICAgfVxuICAgIGdldCBtaW51dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgfVxuICAgIGdldCBzZWNvbmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHN0YXRpYyBkaWZmZXJlbmNlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIHRpbWVEaWZmID0gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lRGlmZik7XG4gICAgfVxuICAgIGRpZmZlcmVuY2Uoc2Vjb25kRGF0ZSkge1xuICAgICAgICBsZXQgZGlmZiA9IHRoaXMudGltZSAtIHNlY29uZERhdGUudGltZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihkaWZmKTtcbiAgICB9XG4gICAgYWRkRGF5cyhkYXlzKSB7XG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgICAgIG5ld0RhdGUuc2V0RGF0ZSh0aGlzLmRhdGUgKyBkYXlzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShuZXdEYXRlLCB0aGlzLm9mZnNldCk7XG4gICAgfVxuICAgIGFkZFllYXJzKHllYXJzKSB7XG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgICAgIG5ld0RhdGUuc2V0RnVsbFllYXIodGhpcy55ZWFyICsgeWVhcnMpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ld0RhdGUsIHRoaXMub2Zmc2V0KTtcbiAgICB9XG4gICAgdG9TdHJpbmcoZm9ybWF0ID0gXCJ5eXl5L01NL2RkIEhIOm1tOnNzXCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRlKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB5ZWFyID0gdGhpcy55ZWFyLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBzdWJZZWFyID0geWVhci5wYWRTdGFydCgyLCAnMCcpLnNsaWNlKC0yKTtcbiAgICAgICAgbGV0IG1vbnRoID0gdGhpcy5tb250aDtcbiAgICAgICAgbGV0IGRheSA9IHRoaXMuZGF5O1xuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICAgICAgbGV0IGhvdXIgPSB0aGlzLmhvdXI7XG4gICAgICAgIGxldCBfMTJIb3VyID0gaG91ciA8IDEzID8gaG91ciA6IGhvdXIgLSAxMjtcbiAgICAgICAgbGV0IGlzQU0gPSBob3VyIDwgMTI7XG4gICAgICAgIGxldCBtaW51dGVzID0gdGhpcy5taW51dGVzO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuc2Vjb25kcztcbiAgICAgICAgLy8gRGF5Li4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9kZC9nLCBkYXRlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9kL2csIGRhdGUpO1xuICAgICAgICAvLyAyNC1Ib3VyLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9ISC9nLCBob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9IL2csIGhvdXIpO1xuICAgICAgICAvLyAxMi1Ib3VyLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9oaC9nLCBfMTJIb3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9oL2csIF8xMkhvdXIpO1xuICAgICAgICAvLyBNaW51dGVzLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9tbS9nLCBtaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9tL2csIG1pbnV0ZXMpO1xuICAgICAgICAvLyBTZWNvbmRzLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9zcy9nLCBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9zL2csIHNlY29uZHMpO1xuICAgICAgICAvLyBZZWFyLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95eXl5eS9nLCB5ZWFyLnBhZFN0YXJ0KDUsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5eS9nLCB5ZWFyLnBhZFN0YXJ0KDQsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5L2csIHllYXIucGFkU3RhcnQoMywgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95eS9nLCBzdWJZZWFyKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3kvZywgc3ViWWVhcik7XG4gICAgICAgIC8vIE1vbnRoIGluIHdvcmRzLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTU1NL2csIFwiIyMjI1wiKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL01NTS9nLCBcIiMjI1wiKTtcbiAgICAgICAgLy8gTW9udGggaW4gbnVtYmVyLi4uXG4gICAgICAgIGxldCBfbW9udGggPSBtb250aCArIDE7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTS9nLCBfbW9udGgudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL00vZywgX21vbnRoKTtcbiAgICAgICAgLy8gQU0vUE0uLi5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3R0L2csIGlzQU0gPyBcIkFNXCIgOiBcIlBNXCIpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvdC9nLCBpc0FNID8gXCJBXCIgOiBcIlBcIik7XG4gICAgICAgIC8vIERheSBvZiB3ZWVrLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9kZGRkL2csIEZ1bGxEYXlzT2ZXZWVrW2RheV0pO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGRkL2csIEFiYnJEYXlzT2ZXZWVrW2RheV0pO1xuICAgICAgICAvLyBNb250aCBpbiB3b3Jkcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvIyMjIy9nLCBGdWxsTW9udGhbbW9udGhdKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyMjIy9nLCBBYmJyTW9udGhbbW9udGhdKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2FscGhhLWJsZW5kJztcbmV4cG9ydCAqIGZyb20gJy4vY3VycmVuY3knO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLXRpbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzcG9uc2UtcGF5bG9hZCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLW1hbmFnZXInO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gICAgY29uc3QgbmF2aWdhdGlvblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbl92aWV3Jyk7XG4gICAgbmF2aWdhdGlvblZpZXcuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlZCcsIChlKSA9PiB7XG4gICAgICAgIHZhciBhcmdzID0gZS5kZXRhaWwuYXJncztcbiAgICAgICAgaWYgKGFyZ3MuaXNTZXR0aW5nc1NlbGVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFyZ3Muc2VsZWN0ZWRJdGVtLmhyZWY7XG4gICAgfSk7XG59XG4iLCJleHBvcnQge307XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcbmltcG9ydCB7IERhdGVUaW1lLCB0b0N1cnJlbmN5IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBPcGVyYXRpb24sIFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gJ0AvZW51bXMnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVPcHRpb24sIGdsb2JhbENvbnRleHQgfSBmcm9tICdAL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcbiAgICB9XG4gICAgbG9hZEFjY291bnQoYWNjb3VudCkge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcygpO1xuICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1JlZ2lzdGVyZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMucmVnaXN0ZXJNZW51KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZWdpc3Rlck1lbnUoKSB7XG4gICAgICAgIC8vIE1lbnVcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudSA9IGdsb2JhbENvbnRleHQuYWRkTWVudShcInRyYW5zYWN0aW9uc19yb3dcIiwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICAvLyBPcHRpb25zXG4gICAgICAgIGxldCBvcHRpb25zID0gW1wiVXBkYXRlXCIsIFwiUG9zdFwiLCBcIkRlbGV0ZVwiLCBcIkNhbmNlbFwiXTtcbiAgICAgICAgbGV0IG1lbnVPcHRpb25zID0gb3B0aW9ucy5yZWR1Y2UoKG1vLCBvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24obyk7XG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSgodHJhbnMpID0+IHRyYW5zLlBvc3RlZCA9PSAobyA9PSBcIkNhbmNlbFwiKSk7XG4gICAgICAgICAgICBtby5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbW87XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgbWVudU9wdGlvbnNbMF0ub25DbGljayh0cmFucyA9PiB0aGlzLnVwZGF0ZUJ0bkNsaWNrZWQodHJhbnMpKTtcbiAgICAgICAgbWVudU9wdGlvbnNbMV0ub25DbGljayh0cmFucyA9PiB0aGlzLnBvc3QodHJhbnMpKTtcbiAgICAgICAgbWVudU9wdGlvbnNbMl0ub25DbGljayh0cmFucyA9PiB0aGlzLmRlbGV0ZSh0cmFucykpO1xuICAgICAgICBtZW51T3B0aW9uc1szXS5vbkNsaWNrKHRyYW5zID0+IHRoaXMuY2FuY2VsKHRyYW5zKSk7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUuYWRkT3B0aW9ucyguLi5tZW51T3B0aW9ucyk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQWN0aW9ucygpIHtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRcIik7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYXJzZUludChhY3Rpb24uZGF0YXNldC5hY3Rpb24pO1xuICAgICAgICAgICAgYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBPcGVyYXRpb24uQ3JlYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZUlucHV0ID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRbbmFtZT1UcmFuc2FjdGlvblR5cGVdXCIpO1xuICAgICAgICAgICAgICAgIHR5cGVJbnB1dC52YWx1ZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9RGF0ZV1cIik7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gRGF0ZVRpbWUubm93KCkudG9TdHJpbmcoXCJ5eXl5LU1NLWRkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiIzk5OTk5OVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudHlwZSAhPSBcIm51bWJlclwiID8gXCJcIiA6IFwiMC4wMFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVnaXN0ZXJFZGl0b3IoKSB7XG4gICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXQjYW1vdW50XCIpO1xuICAgICAgICBjb25zdCBhbW91bnRJbnB1dEhpZGRlbiA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9QW1vdW50XVwiKTtcbiAgICAgICAgYW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUZsb2F0KGFtb3VudElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9uVHlwZSA9PSBUcmFuc2FjdGlvblR5cGUuV2l0aGRyYXcpXG4gICAgICAgICAgICAgICAgYW1vdW50ICo9IC0xO1xuICAgICAgICAgICAgYW1vdW50SW5wdXRIaWRkZW4udmFsdWUgPSBhbW91bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgICAgICBjb25zdCBkaXNzbWlzc0VkaXRvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzbWlzc19lZGl0b3JfZGlhbG9nX2J0blwiKTtcbiAgICAgICAgZGlzc21pc3NFZGl0b3JCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVGhlbWUoXCIjZGFkYWRhXCIpO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlX2J0bicpO1xuICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBsb2FkQ2FyZCgpIHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcbiAgICAgICAgdGhpcy5jYXJkLnRpdGxlID0gYWNjb3VudC5UaXRsZTtcbiAgICAgICAgdGhpcy5jYXJkLm51bWJlciA9IGFjY291bnQuQWNjb3VudE51bWJlcjtcbiAgICAgICAgdGhpcy5jYXJkLmNhdGVnb3J5ID0gYWNjb3VudC5DYXRlZ29yeTtcbiAgICB9XG4gICAgbG9hZEJhbGFuY2VzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0geyBhY2NvdW50SWQ6IHRoaXMuYWNjb3VudC5JZCB9O1xuICAgICAgICBjb25zdCBiYWxhbmNlcyA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FyZC1iYWxhbmNlXCIpO1xuICAgICAgICBheGlvcy5nZXQoXCJhY2NvdW50L2JhbGFuY2UucGhwXCIsIHsgcGFyYW1zOiBkYXRhIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChgT29wcyEgJHtjb250ZW50fWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhbGFuY2VzWzBdLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koY29udGVudC5CYWxhbmNlKTtcbiAgICAgICAgICAgIGJhbGFuY2VzWzFdLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koY29udGVudC5Qcm9qZWN0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZFRyYW5zYWN0aW9ucygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgQWNjb3VudElkOiB0aGlzLmFjY291bnQuSWQgfTtcbiAgICAgICAgYXhpb3MuZ2V0KFwidHJhbnNhY3Rpb24vcmVhZC5waHBcIiwgeyBwYXJhbXM6IGRhdGEgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHBheWxvYWQuY29udGVudDtcbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImNlbnRlcmVkXCI+T29wcyEgJHtjb250ZW50fTwvcD5gO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb25zID0gdGhpcy5ncm91cFRyYW5zYWN0aW9ucyhjb250ZW50KTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IHRoaXMubmV3R3JvdXAoa2V5LCB0cmFuc2FjdGlvbnNba2V5XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJlZC5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBncm91cFRyYW5zYWN0aW9ucyh0cmFucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBncm91cHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgdCBvZiB0cmFucykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdC5EYXRlICsgdC5Qb3N0ZWQ7XG4gICAgICAgICAgICAoKF9hID0gZ3JvdXBzW2tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChncm91cHNba2V5XSA9IFtdKSkucHVzaCh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cbiAgICBuZXdHcm91cChkYXRlLCB0cmFucykge1xuICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZ3JvdXAnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwLWhlYWRlcicpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwLWJvZHknKTtcbiAgICAgICAgLy8gVGl0bGUvaGVhZGVyLi4uXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gRGF0ZVRpbWUucGFyc2UoZGF0ZS5zbGljZSgwLCAtMSkpO1xuICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gZGF0ZVRpbWUudG9TdHJpbmcoJ01NTS4gZGQsIHl5eXknKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdHJhbnNbMF0uUG9zdGVkID8gJ2FjdHVhbCcgOiAncHJvamVjdGlvbic7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XG4gICAgICAgIGdyb3VwLmFwcGVuZChoZWFkZXIpO1xuICAgICAgICBncm91cC5hcHBlbmQoYm9keSk7XG4gICAgICAgIGZvciAobGV0IHQgb2YgdHJhbnMpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLm5ld1Jvdyh0KTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBuZXdSb3codHJhbnNhY3Rpb24pIHtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3I/XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRyYW5zYWN0aW9uLlBvc3RlZCA/ICdhY3R1YWwnIDogJ3Byb2plY3Rpb24nO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLXJvdycsIHN0YXR1cyk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY1Bhci5pbm5lclRleHQgPSB0cmFuc2FjdGlvbi5EZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzYy5hcHBlbmRDaGlsZChkZXNjUGFyKTtcbiAgICAgICAgc3VtbWFyeS5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1zdW1tYXJ5Jyk7XG4gICAgICAgIG1haW4uYXBwZW5kKGRlc2MpO1xuICAgICAgICBtYWluLmFwcGVuZChzdW1tYXJ5KTtcbiAgICAgICAgcm93LmFwcGVuZChtYWluKTtcbiAgICAgICAgY29uc3QgaXNEZWJpdCA9IHRyYW5zYWN0aW9uLlRvdGFsID49IDA7XG4gICAgICAgIGNvbnN0IHRyYW5zQW1vdW50ID0gTWF0aC5hYnModHJhbnNhY3Rpb24uVG90YWwpO1xuICAgICAgICBjb25zdCBhbW91bnRQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHJlZlBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYW1vdW50UGFyLmlubmVyVGV4dCA9IGAkeyFpc0RlYml0ID8gXCItXCIgOiBcIlwifSBQSFAgJHt0b0N1cnJlbmN5KHRyYW5zQW1vdW50LnRvU3RyaW5nKCkpfWA7XG4gICAgICAgIHJlZlBhci5pbm5lclRleHQgPSAnUkVGOiBOL0EnO1xuICAgICAgICBzdW1tYXJ5LmFwcGVuZChhbW91bnRQYXIpO1xuICAgICAgICBzdW1tYXJ5LmFwcGVuZChyZWZQYXIpO1xuICAgICAgICByb3cuYWRkQ29udGV4dCh0aGlzLmNvbnRleHRNZW51LCB0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zLWNvbnRhaW5lcicpO1xuICAgICAgICByb3cuYXBwZW5kKGFjdGlvbnMpO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcInByb2plY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgZWRpdEFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwiZWRpdFwiLCBcIkVkaXRcIik7XG4gICAgICAgICAgICBjb25zdCBwb3N0QWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJwb3N0XCIsIFwiQ29tcGxldGVkU29saWRcIik7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImRlbGV0ZVwiLCBcIkRlbGV0ZVwiKTtcbiAgICAgICAgICAgIGVkaXRBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdG5DbGlja2VkKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9zdEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGVBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZChlZGl0QWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKHBvc3RBY3Rpb24pO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQoZGVsZXRlQWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwiZGVsZXRlXCIsIFwiQ2FuY2VsXCIpO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQoY2FuY2VsQWN0aW9uKTtcbiAgICAgICAgICAgIGNhbmNlbEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb3VjaCBldmVudHMuLi5cbiAgICAgICAgbGV0IGluaXRpYWxUb3VjaDtcbiAgICAgICAgbGV0IGluaXRpYWxMZWZ0O1xuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGUgPT4ge1xuICAgICAgICAgICAgaW5pdGlhbFRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIGluaXRpYWxMZWZ0ID0gcGFyc2VJbnQobWFpbi5zdHlsZS5sZWZ0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gQXJyYXkuZnJvbShlLmNoYW5nZWRUb3VjaGVzKVxuICAgICAgICAgICAgICAgIC5maW5kKHRjaCA9PiB0Y2guaWRlbnRpZmllciA9PT0gaW5pdGlhbFRvdWNoLmlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHRvdWNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1hdGNoZXMgZm91bmQgb2YgdGhlIGluaXRpYWwgdG91Y2guXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHhEZWx0YSA9IHRvdWNoLnBhZ2VYIC0gaW5pdGlhbFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgeURlbHRhID0gdG91Y2gucGFnZVkgLSBpbml0aWFsVG91Y2gucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5taW4oMCwgaW5pdGlhbExlZnQgKyB4RGVsdGEpO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiBNYXRoLmFicyh5RGVsdGEpKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG1haW4uc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IEFycmF5LmZyb20oZS5jaGFuZ2VkVG91Y2hlcylcbiAgICAgICAgICAgICAgICAuZmluZCh0Y2ggPT4gdGNoLmlkZW50aWZpZXIgPT09IGluaXRpYWxUb3VjaC5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmICh0b3VjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtYXRjaGVzIGZvdW5kIG9mIHRoZSBpbml0aWFsIHRvdWNoLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gcGFyc2VJbnQobWFpbi5zdHlsZS5sZWZ0KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbldpZHRoID0gYWN0aW9ucy5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGFjdGlvbldpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBQb2ludCA9IGFjdGlvbldpZHRoICogKChNYXRoLmFicyhsZWZ0KSA+IHRocmVzaG9sZCkgPyAxIDogMCk7XG4gICAgICAgICAgICBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogbWFpbixcbiAgICAgICAgICAgICAgICBsZWZ0OiAtc25hcFBvaW50LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBjb2xsYXBzZUFjdGlvbnMoKSB7XG4gICAgICAgICAgICBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogbWFpblswXSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG4gICAgbmV3QWN0aW9uKG5hbWUsIHN5bWJvbCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZsdWVudC1zeW1ib2wtaWNvbicpO1xuICAgICAgICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aW9uJywgYGFjdGlvbi0ke25hbWV9YCk7XG4gICAgICAgIGFjdGlvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICAvLyBJY29uXG4gICAgICAgIGFjdGlvbi5hcHBlbmQoaWNvbik7XG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdzeW1ib2wnLCBzeW1ib2wpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgJzIwJyk7XG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdmb3JlZ3JvdW5kJywgJyNmZmYnKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG4gICAgdXBkYXRlQnRuQ2xpY2tlZChkYXRhKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLlVwZGF0ZTtcbiAgICAgICAgbGV0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGlucHV0Lm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSA9PSBcIkFtb3VudFwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbmFtZSAhPSBcIlwiIC8vIEVtcHR5XG4gICAgICAgICAgICAgICAgPyBkYXRhW25hbWVdXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhkYXRhLkFtb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZSA9IGRhdGEuVHJhbnNhY3Rpb25UeXBlO1xuICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiIzk5OTk5OVwiKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2hvdygpO1xuICAgIH1cbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zdCBvcGVyYXRpb24gPSBPcGVyYXRpb25bdGhpcy5vcGVyYXRpb25dLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gYHRyYW5zYWN0aW9uLyR7b3BlcmF0aW9ufS5waHBgO1xuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgICAgICBsZXQgZm9ybSA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJBY2NvdW50SWRcIiwgdGhpcy5hY2NvdW50LklkLnRvU3RyaW5nKCkpO1xuICAgICAgICBsZXQgdHJhbnMgPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0YS5lbnRyaWVzKCkpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoZW5kcG9pbnQsIHRyYW5zKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5DcmVhdGU7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiI2RhZGFkYVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUodHJhbnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3N0KFwidHJhbnNhY3Rpb24vZGVsZXRlLnBocFwiLCB0cmFucyk7XG4gICAgfVxuICAgIHBvc3QodHJhbnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3N0KFwidHJhbnNhY3Rpb24vcG9zdC5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBjYW5jZWwodHJhbnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3N0KFwidHJhbnNhY3Rpb24vY2FuY2VsLnBocFwiLCB0cmFucyk7XG4gICAgfVxuICAgIGhhbmRsZVBvc3QoZW5kcG9pbnQsIHRyYW5zKSB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChlbmRwb2ludCwgdHJhbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VUaGVtZSh0aGVtZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW25hbWU9XCJ0aGVtZS1jb2xvclwiXWApXG4gICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCB0aGVtZSk7XG4gICAgfVxufVxuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBBY2NvdW50Q2FyZCA9IGNsYXNzIEFjY291bnRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcImRhdGEtdGl0bGVcIiwgXCJkYXRhLW51bWJlclwiLCBcImRhdGEtY2F0ZWdvcnlcIl07XG4gICAgfVxuICAgIC8qIEF0dHJpYnV0ZXMgKi9cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIik7XG4gICAgfVxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgfVxuICAgIGdldCBudW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuICAgIH1cbiAgICBzZXQgbnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogXCLigKLigKLigKLigKJcIik7XG4gICAgICAgIHRoaXMuc2V0TnVtYmVyKCk7XG4gICAgfVxuICAgIGdldCBjYXRlZ29yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiKTtcbiAgICB9XG4gICAgc2V0IGNhdGVnb3J5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkoKTtcbiAgICB9XG4gICAgLyogRE9NICovXG4gICAgZ2V0IHRpdGxlU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl90aXRsZVNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl90aXRsZVNwYW4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVNwYW47XG4gICAgfVxuICAgIGdldCBudW1iZXJTcGFuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX251bWJlclNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9udW1iZXJTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIubnVtYmVyXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlclNwYW47XG4gICAgfVxuICAgIGdldCBjYXRlZ29yeVNwYW4oKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fY2F0ZWdvcnlTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fY2F0ZWdvcnlTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnlcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcnlTcGFuO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbGFuY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCi4oCi4oCi4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKLigKLigKLigKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAouKAouKAouKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj7igKLigKLigKLigKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2F0ZWdvcnlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpY29uXCI+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cbiAgICAvKiBGdW5jdGlvbnMgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICB0aGlzLnNldE51bWJlcigpO1xuICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XG4gICAgfVxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtdGl0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF0YS1udW1iZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldE51bWJlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtY2F0ZWdvcnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGl0bGUoKSB7XG4gICAgICAgIHRoaXMudGl0bGVTcGFuLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldE51bWJlcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBudW1iZXIgPSAoX2EgPSB0aGlzLm51bWJlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNsaWNlKC00KTtcbiAgICAgICAgdGhpcy5udW1iZXJTcGFuLmlubmVySFRNTCA9IG51bWJlcjtcbiAgICB9XG4gICAgc2V0Q2F0ZWdvcnkoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTcGFuLmlubmVySFRNTCA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgfVxufTtcbkFjY291bnRDYXJkLnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMjUyQTMyIDUwJSwgIzJkMzQzZSA1MCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyAxNiUpLCAwIDNweCA2cHggcmdiKDAgMCAwIC8gMjMlKTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzREOTBGRTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDZweCk7XG4gICAgICAgICAgICBsZWZ0OiAtM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDZweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdDphY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ib2R5ID4gLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbGFuY2VzIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLm51bWJlcnMsXG4gICAgICAgIC5jYXRlZ29yeSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZmNjO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubnVtYmVycyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnVtYmVycyBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOjpzbG90dGVkKGltZ1tzbG90PWljb25dKSB7XG4gICAgICAgICAgICBib3R0b206IDIzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMThweDtcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljUHJlY2lzaW9uO1xuICAgICAgICB9XG4gICAgYDtcbkFjY291bnRDYXJkID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdhY2NvdW50LWNhcmQnKVxuXSwgQWNjb3VudENhcmQpO1xuZXhwb3J0IHsgQWNjb3VudENhcmQgfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgQWN0aW9uQnV0dG9uID0gY2xhc3MgQWN0aW9uQnV0dG9uIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnZGF0YS1pY29uJ107XG4gICAgfVxuICAgIC8qIEF0dHJpYnV0ZXMgKi9cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcbiAgICB9XG4gICAgc2V0IGljb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgfVxuICAgIC8qIERPTSAqL1xuICAgIGdldCBzeW1ib2xJY29uKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3N5bWJvbEljb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9zeW1ib2xJY29uID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zeW1ib2wtaWNvbicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5bWJvbEljb247XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24+PC9mbHVlbnQtc3ltYm9sLWljb24+IFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICBgO1xuICAgIH1cbiAgICAvKiBGdW5jdGlvbnMgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgfVxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lICE9ICdkYXRhLWljb24nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldEljb24oKTtcbiAgICB9XG4gICAgc2V0SWNvbigpIHtcbiAgICAgICAgdGhpcy5zeW1ib2xJY29uLnN5bWJvbCA9IHRoaXMuaWNvbjtcbiAgICB9XG59O1xuQWN0aW9uQnV0dG9uLnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTA2LCAxOTYsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWZpbGwtcmVzdCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoOmhvdmVyKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjI1KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3QoOmFjdGl2ZSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDYsIDE5NiwgMC4zKTtcbiAgICAgICAgfVxuICAgIGA7XG5BY3Rpb25CdXR0b24gPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ2FjdGlvbi1idXR0b24nKVxuXSwgQWN0aW9uQnV0dG9uKTtcbmV4cG9ydCB7IEFjdGlvbkJ1dHRvbiB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBDYXJkQmFsYW5jZSA9IGNsYXNzIENhcmRCYWxhbmNlIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcImRhdGEtdGl0bGVcIiwgXCJkYXRhLWN1cnJlbmN5XCJdO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgIH1cbiAgICBnZXQgY3VycmVuY3koKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJwaHBcIjtcbiAgICB9XG4gICAgc2V0IGN1cnJlbmN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICB9XG4gICAgLyogRE9NICovXG4gICAgZ2V0IHRpdGxlU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl90aXRsZVNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl90aXRsZVNwYW4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVNwYW47XG4gICAgfVxuICAgIGdldCBmaWd1cmVTcGFuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2ZpZ3VyZVNwYW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9maWd1cmVTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZ3VyZVNwYW47XG4gICAgfVxuICAgIGdldCBzbG90RWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9zbG90KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fc2xvdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+UHJvamVjdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlndXJlIGN1cnJlbmN5LXBocFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgLyogRnVuY3Rpb25zICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW5jeSgpO1xuICAgICAgICB0aGlzLnNsb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5zbG90RWxlbWVudC5hc3NpZ25lZE5vZGVzKCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gbm9kZXNbMF0udGV4dENvbnRlbnQucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlID0gcGFyc2VGbG9hdChjb250ZW50KTtcbiAgICAgICAgICAgIGlmIChpc05hTihiYWxhbmNlKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoYmFsYW5jZSA+PSAxMDAwMDAwKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlU3Bhbi5jbGFzc0xpc3QuYWRkKFwic21hbGxcIik7XG4gICAgICAgICAgICBlbHNlIGlmIChiYWxhbmNlID49IDEwMDAwMClcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZVNwYW4uY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtdGl0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF0YS1jdXJyZW5jeVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRUaXRsZSgpIHtcbiAgICAgICAgdGhpcy50aXRsZVNwYW4uaW5uZXJIVE1MID0gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgc2V0Q3VycmVuY3koKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYGZpZ3VyZSBjdXJyZW5jeS0ke3RoaXMuY3VycmVuY3l9YCk7XG4gICAgfVxufTtcbkNhcmRCYWxhbmNlLnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZmNjO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmlndXJlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWd1cmUubWVkaXVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWd1cmUuc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZ3VyZTo6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY4MDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZ3VyZS5tZWRpdW06OmFmdGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlndXJlLnNtYWxsOjphZnRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW5jeS1waHA6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiUEhQXCI7XG4gICAgICAgIH1cbiAgICBgO1xuQ2FyZEJhbGFuY2UgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ2NhcmQtYmFsYW5jZScpXG5dLCBDYXJkQmFsYW5jZSk7XG5leHBvcnQgeyBDYXJkQmFsYW5jZSB9O1xuIiwiLy8gV3JpdHRlbiBieSBHYXJ5IEFudGllciAyMDIwXG4vLyBDdXJyZW50IHZlcnNpb246IDEuMi4wLjFcbmNvbnN0IENvbnRleHRNYXJnaW4gPSAzO1xuY29uc3QgQ29udGV4dFRvcE9mZnNldCA9IDc7XG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVPcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5lbmFibGVDaGFsbGVuZ2UgPSAoKSA9PiB0cnVlO1xuICAgICAgICB0aGlzLnZpc2libGVDaGFsbGVuZ2UgPSAoKSA9PiB0cnVlO1xuICAgIH1cbiAgICBvbkNsaWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB2aXNpYmxlKGNoYWxsZW5nZSkge1xuICAgICAgICB0aGlzLnZpc2libGVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2U7XG4gICAgfVxuICAgIGVuYWJsZShjaGFsbGVuZ2UpIHtcbiAgICAgICAgdGhpcy5lbmFibGVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2U7XG4gICAgfVxuICAgIGRyYXcoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUNoYWxsZW5nZShkYXRhKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLmxhYmVsO1xuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnY29yZS1jb250ZXh0LWFjdGlvbicpO1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAhdGhpcy5lbmFibGVDaGFsbGVuZ2UoZGF0YSk7XG4gICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKGlkLCByb290KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIH1cbiAgICBhZGRPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgfVxuICAgIGFkZE9wdGlvbnMoLi4ub3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbikpO1xuICAgIH1cbiAgICBkcmF3KGRhdGFJbmRleCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2RhdGFJbmRleF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24uZHJhdyhkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgYWRkRGF0YShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEucHVzaChkYXRhKSAtIDE7XG4gICAgfVxuICAgIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51R2xvYmFsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubWVudXMgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyO1xuICAgICAgICB0aGlzLnRyaWdnZXJUb3A7XG4gICAgICAgIHRoaXMudHJpZ2dlckxlZnQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29yZS1jb250ZXh0Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCAnYWRkQ29udGV4dCcsIHsgdmFsdWU6IGZ1bmN0aW9uIChjb250ZXh0LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBjb250ZXh0LmFkZERhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRhdGFzZXQuY29udGV4dElkID0gY29udGV4dC5pZDtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5pbmRleCA9IGRhdGFJbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGFkZE1lbnUoaWQsIHJvb3QpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBDb250ZXh0TWVudShpZCwgcm9vdCk7XG4gICAgICAgIHRoaXMubWVudXNbaWRdID0gbWVudTtcbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuICAgIG9uQ29udGV4dChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGxldCBpc0RvY3VtZW50ID0gZmFsc2U7XG4gICAgICAgIGxldCBjb250ZXh0SWQ7XG4gICAgICAgIGxldCBkYXRhSW5kZXg7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNEb2N1bWVudCA9IHRhcmdldCA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBjb250ZXh0SWQgPSAhaXNEb2N1bWVudCA/IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbnRleHQtaWRcIikgOiBudWxsO1xuICAgICAgICB9IHdoaWxlICghaXNEb2N1bWVudCAmJiAhY29udGV4dElkKTtcbiAgICAgICAgZGF0YUluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGlmIChjb250ZXh0SWQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlciA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclRvcCA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckxlZnQgPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLnNob3coY29udGV4dElkLCBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuaXNTYW1lTm9kZSh0aGlzLmVsZW1lbnQpID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdyhjb250ZXh0SWQsIGRhdGFJbmRleCkge1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51c1tjb250ZXh0SWRdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbWVudS5kcmF3KGRhdGFJbmRleCk7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQm91bmRzLi4uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBtZW51LnJvb3Q7XG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH0gPSByb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgcm9vdFRvcCA9IHRvcCArIENvbnRleHRNYXJnaW47XG4gICAgICAgIGxldCByb290UmlnaHQgPSByaWdodCAtIENvbnRleHRNYXJnaW47XG4gICAgICAgIGxldCByb290Qm90dG9tID0gYm90dG9tIC0gQ29udGV4dE1hcmdpbjtcbiAgICAgICAgbGV0IHJvb3RMZWZ0ID0gbGVmdCArIENvbnRleHRNYXJnaW47XG4gICAgICAgIC8vIENvbnRleHRzLi4uXG4gICAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY29udGV4dFRvcCA9IHRoaXMudHJpZ2dlclRvcCAtIENvbnRleHRUb3BPZmZzZXQ7XG4gICAgICAgIGxldCBjb250ZXh0TGVmdCA9IHRoaXMudHJpZ2dlckxlZnQ7XG4gICAgICAgIGxldCBjb250ZXh0Qm90dG9tID0gY29udGV4dFRvcCArIGhlaWdodDtcbiAgICAgICAgbGV0IGNvbnRleHRSaWdodCA9IGNvbnRleHRMZWZ0ICsgaGVpZ2h0O1xuICAgICAgICAvLyBYLWxpbWl0IGJvdW5kcy5cbiAgICAgICAgaWYgKGNvbnRleHRMZWZ0IDwgcm9vdExlZnQpIHtcbiAgICAgICAgICAgIGNvbnRleHRMZWZ0ID0gcm9vdExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGV4dFJpZ2h0ID4gcm9vdFJpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0TGVmdCA9IHJvb3RSaWdodCAtIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIC8vIFktbGltaXQgYm91bmRzLlxuICAgICAgICBpZiAoY29udGV4dFRvcCA8IHJvb3RUb3ApIHtcbiAgICAgICAgICAgIGNvbnRleHRUb3AgPSByb290VG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHRCb3R0b20gPiByb290Qm90dG9tKSB7XG4gICAgICAgICAgICBjb250ZXh0VG9wID0gcm9vdEJvdHRvbSAtIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHtjb250ZXh0VG9wfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtjb250ZXh0TGVmdH1weGA7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbnVsbCk7XG4gICAgICAgIChfYSA9IHRoaXMuYWN0aXZlVHJpZ2dlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmFjdGl2ZVRyaWdnZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHJpZ2dlclRvcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50cmlnZ2VyTGVmdCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2xvYmFsQ29udGV4dCA9IG5ldyBDb250ZXh0TWVudUdsb2JhbCgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LWNhcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24tYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2FyZC1iYWxhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29udGV4dC1tZW51JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdlLWluZGljYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3NuYXAtdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLXBhbmVsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWNhcmQnO1xuIiwidmFyIG1vZGFsU3BhY2U7XG5leHBvcnQgY2xhc3MgTW9kYWxTcGFjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtc3BhY2VcIik7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICB9XG4gICAgYWRkU3RhY2sobW9kYWwpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5zdGFjaztcbiAgICAgICAgbGV0IGV4aXN0cyA9IHN0YWNrLmluZGV4T2YobW9kYWwpID4gLTE7XG4gICAgICAgIGxldCBsZW5ndGggPSBzdGFjay5sZW5ndGg7XG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG1vZGFsKTtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlU3RhY2sobW9kYWwpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5zdGFjaztcbiAgICAgICAgbGV0IGV4aXN0cyA9IHN0YWNrLmluZGV4T2YobW9kYWwpID4gLTE7XG4gICAgICAgIGxldCBsZW5ndGggPSBzdGFjay5sZW5ndGg7XG4gICAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBtb2RhbFNwYWNlID0gbW9kYWxTcGFjZSAhPT0gbnVsbCAmJiBtb2RhbFNwYWNlICE9PSB2b2lkIDAgPyBtb2RhbFNwYWNlIDogbmV3IE1vZGFsU3BhY2UoKTtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgICAgIGxldCBtb2RhbCA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBjbG9zZUFjdGlvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLWFjdGlvbltkYXRhLXJvbGU9Y2xvc2VdXCIpO1xuICAgICAgICBsZXQgdGVybWluYWJsZSA9IChfYSA9IHJvb3QuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXJtaW5hYmxlXCIpID09PSBcInRydWVcIikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2U7XG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKHRlcm1pbmFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgICAgICBjbG9zZUFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWQgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5zcGFjZSA9IG1vZGFsU3BhY2U7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdGhpcy5jbG9zZUFjdGlvbnMgPSBjbG9zZUFjdGlvbnM7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5yb290O1xuICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLnNwYWNlO1xuICAgICAgICByb290LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICByb290LnN0eWxlLnpJbmRleCA9IHNwYWNlLnN0YWNrLmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICBzcGFjZS5hZGRTdGFjayh0aGlzLmlkKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5yb290LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLnNwYWNlLnJlbW92ZVN0YWNrKHRoaXMuaWQpO1xuICAgIH1cbn1cbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCwgcHJvcGVydHksIHF1ZXJ5LCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IFBhZ2VJbmRpY2F0b3IgPSBjbGFzcyBQYWdlSW5kaWNhdG9yIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9ycyA9IFtdO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBwYXJ0PVwiY29udHJvbFwiPjwvZGl2PmA7XG4gICAgfVxuICAgIHN0YXRlSGFzQ2hhbmdlZChjaGFuZ2VzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2l6ZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZUluZGV4JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJbmRleCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVNpemUob2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0aGlzLnNpemUgLSAob2xkVmFsdWUgIT09IG51bGwgJiYgb2xkVmFsdWUgIT09IHZvaWQgMCA/IG9sZFZhbHVlIDogMCk7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBkZWx0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICByZXR1cm4gaW5kaWNhdG9yO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuX2luZGljYXRvcnMuc3BsaWNlKGRlbHRhLCBNYXRoLmFicyhkZWx0YSksIC4uLmFkZGVkKTtcbiAgICAgICAgdGhpcy5fY29udHJvbC5hcHBlbmQoLi4uYWRkZWQpO1xuICAgICAgICByZW1vdmVkLmZvckVhY2goaW5kaWNhdG9yID0+IGluZGljYXRvci5yZW1vdmUoKSk7XG4gICAgfVxuICAgIHVwZGF0ZUFjdGl2ZUluZGV4KG9sZEluZGV4KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT09IG9sZEluZGV4KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAoX2EgPSB0aGlzLl9pbmRpY2F0b3JzW29sZEluZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3JzW3RoaXMuYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn07XG5QYWdlSW5kaWNhdG9yLnN0eWxlcyA9IGBcbiAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogNXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCAwIDAgLyAwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvci5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICBgO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5jb250cm9sJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxEaXZFbGVtZW50KVxuXSwgUGFnZUluZGljYXRvci5wcm90b3R5cGUsIFwiX2NvbnRyb2xcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbl0sIFBhZ2VJbmRpY2F0b3IucHJvdG90eXBlLCBcInNpemVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgYXR0cmlidXRlOiAnYWN0aXZlLWluZGV4JyB9KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuXSwgUGFnZUluZGljYXRvci5wcm90b3R5cGUsIFwiYWN0aXZlSW5kZXhcIiwgdm9pZCAwKTtcblBhZ2VJbmRpY2F0b3IgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3BhZ2UtaW5kaWNhdG9yJylcbl0sIFBhZ2VJbmRpY2F0b3IpO1xuZXhwb3J0IHsgUGFnZUluZGljYXRvciB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcbmltcG9ydCB7IFBhZ2VJbmRpY2F0b3IgfSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQsIHF1ZXJ5IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG52YXIgU25hcERpcmVjdGlvbjtcbihmdW5jdGlvbiAoU25hcERpcmVjdGlvbikge1xuICAgIFNuYXBEaXJlY3Rpb25bU25hcERpcmVjdGlvbltcIkxlZnRcIl0gPSAtMV0gPSBcIkxlZnRcIjtcbiAgICBTbmFwRGlyZWN0aW9uW1NuYXBEaXJlY3Rpb25bXCJSaWdodFwiXSA9IDFdID0gXCJSaWdodFwiO1xufSkoU25hcERpcmVjdGlvbiB8fCAoU25hcERpcmVjdGlvbiA9IHt9KSk7XG5sZXQgU25hcFZpZXcgPSBjbGFzcyBTbmFwVmlldyBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fcGFuZWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX3NuYXBFdmVudCA9IG5ldyBFdmVudCgnc25hcCcpO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gbGVmdFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI5IDEyLjcxbDggOCAxLjQxLTEuNDEtNi4yOS02LjI5SDI0di0ySDMuNDFsNi4yOS02LjI5LTEuNDEtMS40MS04IDhhMSAxIDAgMCAwIDAgMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBMZWZ0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic25hcEJ1dHRvbiByaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43MSAxMS4yOWwtOC04LTEuNDEgMS40MSA2LjI5IDYuMjlIMHYyaDIwLjU5bC02LjI5IDYuMjkgMS40MSAxLjQxIDgtOGExIDEgMCAwIDAgMC0xLjQxelwiIGRhdGEtbmFtZT1cIkFycm93IFJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHBhZ2UtaW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCIgcGFydD1cImluZGljYXRvclwiPjwvcGFnZS1pbmRpY2F0b3I+XG4gICAgICAgIGA7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0U2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRoaXMuX2RlZmF1bHRTbG90LmFzc2lnbmVkRWxlbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSBsZW5ndGggLSAxO1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yLnNpemUgPSBsZW5ndGg7XG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3IuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNuYXAoU25hcERpcmVjdGlvbi5SaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uTGVmdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlc29sdmVJbmRleCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpbmRleClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5fbGVmdEJ0bi5kaXNhYmxlZCA9IGluZGV4IDw9IDA7XG4gICAgICAgICAgICB0aGlzLl9yaWdodEJ0bi5kaXNhYmxlZCA9IGluZGV4ID09PSB0aGlzLl9wYW5lbENvdW50O1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc25hcEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc29sdmVJbmRleCgpIHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2Nyb2xsTGVmdCAvIHdpZHRoKTtcbiAgICB9XG4gICAgc25hcChkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgbGVmdDogKHRoaXMuX2luZGV4ICsgZGlyZWN0aW9uKSAqIHdpZHRoLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5TbmFwVmlldy5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtICgyNHB4IC8gMikpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbiBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1maWxsLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbi5sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbi5yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b246bm90KDphY3RpdmUpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIDpob3N0KDpob3ZlcikgLnNuYXBCdXR0b246bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5jb250YWluZXInKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTERpdkVsZW1lbnQpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2NvbnRhaW5lclwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJ3Nsb3QnKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSFRNTFNsb3RFbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9kZWZhdWx0U2xvdFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5sZWZ0JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxCdXR0b25FbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9sZWZ0QnRuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLnJpZ2h0JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxCdXR0b25FbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9yaWdodEJ0blwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5pbmRpY2F0b3InKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgUGFnZUluZGljYXRvcilcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfaW5kaWNhdG9yXCIsIHZvaWQgMCk7XG5TbmFwVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU25hcFZpZXcpO1xuZXhwb3J0IHsgU25hcFZpZXcgfTtcbmxldCBTbmFwVmlld1BhbmVsID0gY2xhc3MgU25hcFZpZXdQYW5lbCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxzbG90Pjwvc2xvdD5gO1xuICAgIH1cbn07XG5TbmFwVmlld1BhbmVsLnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgO1xuU25hcFZpZXdQYW5lbCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnc25hcC12aWV3LXBhbmVsJylcbl0sIFNuYXBWaWV3UGFuZWwpO1xuZXhwb3J0IHsgU25hcFZpZXdQYW5lbCB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5pbXBvcnQgeyBjdXN0b21Db21wb25lbnQsIEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xuaW1wb3J0IHsgY29tcHV0ZUFscGhhQmxlbmQgfSBmcm9tICdAL2NsYXNzZXMnO1xubGV0IFRyYW5zYWN0aW9uUGFuZWwgPSBjbGFzcyBUcmFuc2FjdGlvblBhbmVsIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IHsgYWxwaGE6IDAuMCB9O1xuICAgIH1cbiAgICAvKiBET00gKi9cbiAgICBnZXQgcGFuZWwoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fcGFuZWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9wYW5lbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnBhbmVsXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhbmVsO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLWJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSk7XG4gICAgICAgIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsID0gdHJ1ZSk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24odHJ1ZSwgMC4xKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zaXRpb24oZmFsc2UsIDApO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uKHNob3csIGFscGhhKSB7XG4gICAgICAgIGNvbnN0IHRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoe1xuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVpbnRcIixcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4gdGhpcy5jaGFuZ2VUaGVtZSgpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQYW5lbFxuICAgICAgICBjb25zdCBwYW5lbEFuaW0gPSB7IHRhcmdldHM6IHRoaXMucGFuZWwgfTtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KVxuICAgICAgICAgICAgcGFuZWxBbmltLnRvcCA9IHNob3cgPyAyMiA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFuZWxBbmltLnJpZ2h0ID0gc2hvdyA/IDE1IDogLTUzMTsgLy8gVE9ETzogRHluYW1pYz9cbiAgICAgICAgdGltZWxpbmUuYWRkKHBhbmVsQW5pbSwgMCk7XG4gICAgICAgIC8vIE92ZXJsYXlcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGByZ2JhKDAsIDAsIDAsICR7YWxwaGF9KWA7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh7IHRhcmdldHM6IHRoaXMsIGJhY2tncm91bmQ6IGJhY2tncm91bmQgfSwgMCk7XG4gICAgICAgIC8vIFRoZW1lXG4gICAgICAgIC8vIEZJWE1FOiBGbGlja2VyIG9uIHNob3cgZmlyc3QgYXR0ZW1wdC5cbiAgICAgICAgY29uc3Qgb3ZlcmxheUFuaW0gPSB7IHRhcmdldHM6IHRoaXMuX292ZXJsYXksIGFscGhhOiBhbHBoYSB9O1xuICAgICAgICB0aW1lbGluZS5hZGQob3ZlcmxheUFuaW0sIDApO1xuICAgIH1cbiAgICBjaGFuZ2VUaGVtZSgpIHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBjb21wdXRlQWxwaGFCbGVuZChcImYyZjJmMlwiLCBcIjAwMDAwMFwiLCB0aGlzLl9vdmVybGF5LmFscGhhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl0nKVxuICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xuICAgIH1cbn07XG5UcmFuc2FjdGlvblBhbmVsLnN0eWxlcyA9IGBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgLS1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC0tcmFkaXVzLW1vYjogMTVweDtcbiAgICAgICAgICAgIC0tbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgLS10b3A6IGNhbGMoNDRweCAvIDIpO1xuICAgICAgICAgICAgLS13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoLnZpc2libGUpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXJhZGl1cy1tb2IpO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZGl1cy1tb2IpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgY2FsYygzMiAqIDAuNXB4KSBjYWxjKCgzMiAqIDFweCkpIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvcCkpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFuZGxlLWJhciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFuZGxlLWJhcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxOTQsIDE5NCwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsb3Qge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyogVGFibGV0ICYgVXAgKi9cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tbWFyZ2luKSAqIDIpO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAqIC0xKTtcbiAgICAgICAgICAgICAgICB0b3A6IHZhcigtLW1hcmdpbik7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaGFuZGxlLWJhcjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcblRyYW5zYWN0aW9uUGFuZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3RyYW5zYWN0aW9uLXBhbmVsJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgVHJhbnNhY3Rpb25QYW5lbCk7XG5leHBvcnQgeyBUcmFuc2FjdGlvblBhbmVsIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBjdXN0b21Db21wb25lbnQsIEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IFdhbGxldENhcmQgPSBjbGFzcyBXYWxsZXRDYXJkIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2JcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59O1xuV2FsbGV0Q2FyZC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4MHB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJBMzI5OTtcbiAgICAgICAgICAgIGluc2V0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2Ige1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgfVxuICAgIGA7XG5XYWxsZXRDYXJkID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCd3YWxsZXQtY2FyZCcpXG5dLCBXYWxsZXRDYXJkKTtcbmV4cG9ydCB7IFdhbGxldENhcmQgfTtcbiIsImV4cG9ydCB2YXIgRW50aXR5U3RhdHVzO1xuKGZ1bmN0aW9uIChFbnRpdHlTdGF0dXMpIHtcbiAgICBFbnRpdHlTdGF0dXNbRW50aXR5U3RhdHVzW1wiQ2xvc2VkXCJdID0gMF0gPSBcIkNsb3NlZFwiO1xuICAgIEVudGl0eVN0YXR1c1tFbnRpdHlTdGF0dXNbXCJBY3RpdmVcIl0gPSAxXSA9IFwiQWN0aXZlXCI7XG59KShFbnRpdHlTdGF0dXMgfHwgKEVudGl0eVN0YXR1cyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2VudGl0eS1zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi9vcGVyYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi10eXBlJztcbiIsImV4cG9ydCB2YXIgT3BlcmF0aW9uO1xuKGZ1bmN0aW9uIChPcGVyYXRpb24pIHtcbiAgICBPcGVyYXRpb25bT3BlcmF0aW9uW1wiQ3JlYXRlXCJdID0gMF0gPSBcIkNyZWF0ZVwiO1xuICAgIE9wZXJhdGlvbltPcGVyYXRpb25bXCJVcGRhdGVcIl0gPSAxXSA9IFwiVXBkYXRlXCI7XG59KShPcGVyYXRpb24gfHwgKE9wZXJhdGlvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zYWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoVHJhbnNhY3Rpb25UeXBlKSB7XG4gICAgVHJhbnNhY3Rpb25UeXBlW1RyYW5zYWN0aW9uVHlwZVtcIkRlcG9zaXRcIl0gPSAwXSA9IFwiRGVwb3NpdFwiO1xuICAgIFRyYW5zYWN0aW9uVHlwZVtUcmFuc2FjdGlvblR5cGVbXCJXaXRoZHJhd1wiXSA9IDFdID0gXCJXaXRoZHJhd1wiO1xuICAgIFRyYW5zYWN0aW9uVHlwZVtUcmFuc2FjdGlvblR5cGVbXCJUcmFuc2ZlclwiXSA9IDJdID0gXCJUcmFuc2ZlclwiO1xufSkoVHJhbnNhY3Rpb25UeXBlIHx8IChUcmFuc2FjdGlvblR5cGUgPSB7fSkpO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgc2VydmljZSwgU2VydmljZUJhc2UgfSBmcm9tICcuL3NlcnZpY2UtYmFzZSc7XG5sZXQgQWNjb3VudFNlcnZpY2UgPSBjbGFzcyBBY2NvdW50U2VydmljZSBleHRlbmRzIFNlcnZpY2VCYXNlIHtcbiAgICBhc3luYyBnZXQoKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgncmVhZC5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmdldChlbmRwb2ludCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2NyZWF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgYXN5bmMgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCd1cGRhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIC8vIFRPRE86IFVzZSBKU09OXG4gICAgYXN5bmMgY2xvc2UoaWQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjbG9zZS5waHAnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBkYXRhLmFwcGVuZCgnSWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgLy8gVE9ETzogVXNlIEpTT05cbiAgICBhc3luYyByZW1vdmUoaWQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdkZWxldGUucGhwJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ0lkJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxufTtcbkFjY291bnRTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgc2VydmljZSgnL2FjY291bnQvY3J1ZCcpXG5dLCBBY2NvdW50U2VydmljZSk7XG5leHBvcnQgeyBBY2NvdW50U2VydmljZSB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgc2VydmljZSwgU2VydmljZUJhc2UgfSBmcm9tICcuL3NlcnZpY2UtYmFzZSc7XG5sZXQgQ2F0ZWdvcnlTZXJ2aWNlID0gY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdyZWFkLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uZ2V0KGVuZHBvaW50KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY3JlYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3VwZGF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnZGVsZXRlLnBocCcpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbn07XG5DYXRlZ29yeVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICBzZXJ2aWNlKCcvY2F0ZWdvcnkvY3J1ZCcpXG5dLCBDYXRlZ29yeVNlcnZpY2UpO1xuZXhwb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2FjY291bnQtc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhdGVnb3J5LXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLXNlcnZpY2UnO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBheGlvcy5jcmVhdGUoKTtcbiAgICB9XG4gICAgZW5kcG9pbnQocGF0aCkge1xuICAgICAgICBjb25zdCBiYXNlVVJMID0gdGhpcy5fYmFzZVVSTDtcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VVUkx9LyR7cGF0aH1gO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKGJhc2VVUkwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn1cbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IHNlcnZpY2UsIFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zZXJ2aWNlLWJhc2UnO1xubGV0IFVzZXJTZXJ2aWNlID0gY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XG4gICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3JlYWQucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5nZXQoZW5kcG9pbnQpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjcmVhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgndXBkYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBhc3luYyByZW1vdmUoaWQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdkZWxldGUucGhwJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ0lkJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxufTtcblVzZXJTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgc2VydmljZSgnL3VzZXIvY3J1ZCcpXG5dLCBVc2VyU2VydmljZSk7XG5leHBvcnQgeyBVc2VyU2VydmljZSB9O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZiAoZm4pIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHt2YWx1ZX0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHt2YWx1ZX0pO1xuICB9XG59KTtcblxuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcblxuY29uc3QgaXNSZXNvbHZlZEhhbmRsZSA9IChhZGFwdGVyKSA9PiB1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICAgIGxldCBpZDtcblxuICAgICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG5cbiAgICAgIGlmICghaXNSZXNvbHZlZEhhbmRsZShuYW1lT3JBZGFwdGVyKSkge1xuICAgICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChhZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmVqZWN0ZWRSZWFzb25zW2lkIHx8ICcjJyArIGldID0gYWRhcHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWFkYXB0ZXIpIHtcblxuICAgICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucylcbiAgICAgICAgLm1hcCgoW2lkLCBzdGF0ZV0pID0+IGBhZGFwdGVyICR7aWR9IGAgK1xuICAgICAgICAgIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJylcbiAgICAgICAgKTtcblxuICAgICAgbGV0IHMgPSBsZW5ndGggP1xuICAgICAgICAocmVhc29ucy5sZW5ndGggPiAxID8gJ3NpbmNlIDpcXG4nICsgcmVhc29ucy5tYXAocmVuZGVyUmVhc29uKS5qb2luKCdcXG4nKSA6ICcgJyArIHJlbmRlclJlYXNvbihyZWFzb25zWzBdKSkgOlxuICAgICAgICAnYXMgbm8gYWRhcHRlciBzcGVjaWZpZWQnO1xuXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsXG4gICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi8uLi9oZWxwZXJzL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4vLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi4vaGVscGVycy9zcGVlZG9tZXRlci5qcyc7XG5cbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtKSB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGVcbiAgICB9O1xuXG4gICAgZGF0YVtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXSA9IHRydWU7XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfTtcbn1cblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBsZXQge3Jlc3BvbnNlVHlwZSwgd2l0aFhTUkZUb2tlbn0gPSBjb25maWc7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudikge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShmYWxzZSk7IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAoKGNvbnRlbnRUeXBlID0gcmVxdWVzdEhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSkgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGZpeCBzZW1pY29sb24gZHVwbGljYXRpb24gaXNzdWUgZm9yIFJlYWN0TmF0aXZlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gICAgICAgIGNvbnN0IFt0eXBlLCAuLi50b2tlbnNdID0gY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShbdHlwZSB8fCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC4uLnRva2Vuc10uam9pbignOyAnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICB3aXRoWFNSRlRva2VuICYmIHV0aWxzLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikgJiYgKHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKGNvbmZpZykpO1xuXG4gICAgICBpZiAod2l0aFhTUkZUb2tlbiB8fCAod2l0aFhTUkZUb2tlbiAhPT0gZmFsc2UgJiYgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkpIHtcbiAgICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IGNvbmZpZy54c3JmSGVhZGVyTmFtZSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgJiYgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSk7XG5cbiAgICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldChjb25maWcueHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgcmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShudWxsKTtcblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLnRvSlNPTigpLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25VcGxvYWRQcm9ncmVzcykpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBjYW5jZWwgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChmdWxsUGF0aCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnLi9jb3JlL0F4aW9zLmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL2NvcmUvbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBDYW5jZWxUb2tlbiBmcm9tICcuL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuL2Vudi9kYXRhLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBzcHJlYWQgZnJvbSAnLi9oZWxwZXJzL3NwcmVhZC5qcyc7XG5pbXBvcnQgaXNBeGlvc0Vycm9yIGZyb20gJy4vaGVscGVycy9pc0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJy4vYWRhcHRlcnMvYWRhcHRlcnMuanMnO1xuaW1wb3J0IEh0dHBTdGF0dXNDb2RlIGZyb20gJy4vaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJucyB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgY29uc3QgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0LCBudWxsLCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbiAgaW5zdGFuY2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbmNvbnN0IGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsZWRFcnJvciA9IENhbmNlbGVkRXJyb3I7XG5heGlvcy5DYW5jZWxUb2tlbiA9IENhbmNlbFRva2VuO1xuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcbmF4aW9zLlZFUlNJT04gPSBWRVJTSU9OO1xuYXhpb3MudG9Gb3JtRGF0YSA9IHRvRm9ybURhdGE7XG5cbi8vIEV4cG9zZSBBeGlvc0Vycm9yIGNsYXNzXG5heGlvcy5BeGlvc0Vycm9yID0gQXhpb3NFcnJvcjtcblxuLy8gYWxpYXMgZm9yIENhbmNlbGVkRXJyb3IgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmF4aW9zLkNhbmNlbCA9IGF4aW9zLkNhbmNlbGVkRXJyb3I7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xuXG4vLyBFeHBvc2UgbWVyZ2VDb25maWdcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XG5cbmF4aW9zLkF4aW9zSGVhZGVycyA9IEF4aW9zSGVhZGVycztcblxuYXhpb3MuZm9ybVRvSlNPTiA9IHRoaW5nID0+IGZvcm1EYXRhVG9KU09OKHV0aWxzLmlzSFRNTEZvcm0odGhpbmcpID8gbmV3IEZvcm1EYXRhKHRoaW5nKSA6IHRoaW5nKTtcblxuYXhpb3MuZ2V0QWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXI7XG5cbmF4aW9zLkh0dHBTdGF0dXNDb2RlID0gSHR0cFN0YXR1c0NvZGU7XG5cbmF4aW9zLmRlZmF1bHQgPSBheGlvcztcblxuLy8gdGhpcyBtb2R1bGUgc2hvdWxkIG9ubHkgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBheGlvc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL0NhbmNlbGVkRXJyb3IuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxUb2tlbn1cbiAqL1xuY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG5cbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbihjYW5jZWwgPT4ge1xuICAgICAgaWYgKCF0b2tlbi5fbGlzdGVuZXJzKSByZXR1cm47XG5cbiAgICAgIGxldCBpID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbiA9IG9uZnVsZmlsbGVkID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gICAqL1xuICBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgY2FuY2VsID0gYztcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICBjYW5jZWxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmNsYXNzIEF4aW9zIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb25cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxuICAgICAgaGVhZGVycy5jb21tb24sXG4gICAgICBoZWFkZXJzW2NvbmZpZy5tZXRob2RdXG4gICAgKTtcblxuICAgIGhlYWRlcnMgJiYgdXRpbHMuZm9yRWFjaChcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgbGV0IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGxlbiA9IGNoYWluLmxlbmd0aDtcblxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICBsZXQgbmV3Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogaXNGb3JtID8ge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kICsgJ0Zvcm0nXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICByZXNwb25zZSAmJiAodGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlKTtcbn1cblxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcGFyc2VIZWFkZXJzIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gKHN0cikgPT4gL15bLV9hLXpBLVowLTleYHx+LCEjJCUmJyorLl0rJC8udGVzdChzdHIudHJpbSgpKTtcblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIsIGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICBpZiAodXRpbHMuaXNGdW5jdGlvbihmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xuICB9XG5cbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICAgIHZhbHVlID0gaGVhZGVyO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHJldHVybjtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzUmVnRXhwKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLnRlc3QodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlci50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKCcgJyArIGhlYWRlcik7XG5cbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kTmFtZSArIGFjY2Vzc29yTmFtZSwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCBoZWFkZXIsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn1cblxuY2xhc3MgQXhpb3NIZWFkZXJzIHtcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xuICAgIGhlYWRlcnMgJiYgdGhpcy5zZXQoaGVhZGVycyk7XG4gIH1cblxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hlYWRlciBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgbEhlYWRlcik7XG5cbiAgICAgIGlmKCFrZXkgfHwgc2VsZltrZXldID09PSB1bmRlZmluZWQgfHwgX3Jld3JpdGUgPT09IHRydWUgfHwgKF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSkpIHtcbiAgICAgICAgc2VsZltrZXkgfHwgX2hlYWRlcl0gPSBub3JtYWxpemVWYWx1ZShfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+XG4gICAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIChfdmFsdWUsIF9oZWFkZXIpID0+IHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSk7XG5cbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChoZWFkZXIpIHx8IGhlYWRlciBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgIHNldEhlYWRlcnMoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSlcbiAgICB9IGVsc2UgaWYodXRpbHMuaXNTdHJpbmcoaGVhZGVyKSAmJiAoaGVhZGVyID0gaGVhZGVyLnRyaW0oKSkgJiYgIWlzVmFsaWRIZWFkZXJOYW1lKGhlYWRlcikpIHtcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG5cbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VyID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuZXhlYyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgcmV0dXJuICEhKGtleSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlcikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhlYWRlcihfaGVhZGVyKSB7XG4gICAgICBfaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIF9oZWFkZXIpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG5cbiAgICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlci5mb3JFYWNoKGRlbGV0ZUhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlciwgdHJ1ZSkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBub3JtYWxpemUoZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHNlbGZba2V5XSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gZm9ybWF0ID8gZm9ybWF0SGVhZGVyKGhlYWRlcikgOiBTdHJpbmcoaGVhZGVyKS50cmltKCk7XG5cbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBoZWFkZXIpIHtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgIH1cblxuICAgICAgc2VsZltub3JtYWxpemVkXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcblxuICAgICAgaGVhZGVyc1tub3JtYWxpemVkXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbmNhdCguLi50YXJnZXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29uY2F0KHRoaXMsIC4uLnRhcmdldHMpO1xuICB9XG5cbiAgdG9KU09OKGFzU3RyaW5ncykge1xuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiAob2JqW2hlYWRlcl0gPSBhc1N0cmluZ3MgJiYgdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSkubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+IGhlYWRlciArICc6ICcgKyB2YWx1ZSkuam9pbignXFxuJyk7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cblxuICBzdGF0aWMgY29uY2F0KGZpcnN0LCAuLi50YXJnZXRzKSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBuZXcgdGhpcyhmaXJzdCk7XG5cbiAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gY29tcHV0ZWQuc2V0KHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xuICB9XG5cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFsc10gPSAodGhpc1skaW50ZXJuYWxzXSA9IHtcbiAgICAgIGFjY2Vzc29yczoge31cbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc29ycyA9IGludGVybmFscy5hY2Nlc3NvcnM7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVBY2Nlc3NvcihfaGVhZGVyKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWFjY2Vzc29yc1tsSGVhZGVyXSkge1xuICAgICAgICBidWlsZEFjY2Vzc29ycyhwcm90b3R5cGUsIF9oZWFkZXIpO1xuICAgICAgICBhY2Nlc3NvcnNbbEhlYWRlcl0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHV0aWxzLmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlci5mb3JFYWNoKGRlZmluZUFjY2Vzc29yKSA6IGRlZmluZUFjY2Vzc29yKGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5BeGlvc0hlYWRlcnMuYWNjZXNzb3IoWydDb250ZW50LVR5cGUnLCAnQ29udGVudC1MZW5ndGgnLCAnQWNjZXB0JywgJ0FjY2VwdC1FbmNvZGluZycsICdVc2VyLUFnZW50JywgJ0F1dGhvcml6YXRpb24nXSk7XG5cbi8vIHJlc2VydmVkIG5hbWVzIGhvdGZpeFxudXRpbHMucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHt2YWx1ZX0sIGtleSkgPT4ge1xuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxuICByZXR1cm4ge1xuICAgIGdldDogKCkgPT4gdmFsdWUsXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XG4gICAgICB0aGlzW21hcHBlZF0gPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSGVhZGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAgICovXG4gIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW50ZXJjZXB0b3Igd2FzIHJlbW92ZWQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNBYnNvbHV0ZVVSTCBmcm9tICcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMnO1xuaW1wb3J0IGNvbWJpbmVVUkxzIGZyb20gJy4uL2hlbHBlcnMvY29tYmluZVVSTHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vQXhpb3NIZWFkZXJzLmpzXCI7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB0aGluZy50b0pTT04oKSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIGNhc2VsZXNzKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIsIGNhc2VsZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9BeGlvc0Vycm9yLmpzJztcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICBbQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRV1bTWF0aC5mbG9vcihyZXNwb25zZS5zdGF0dXMgLyAxMDApIC0gNF0sXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7P09iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShmbnMsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIGNvbnN0IGNvbnRleHQgPSByZXNwb25zZSB8fCBjb25maWc7XG4gIGNvbnN0IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb250ZXh0LmhlYWRlcnMpO1xuICBsZXQgZGF0YSA9IGNvbnRleHQuZGF0YTtcblxuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29uZmlnLCBkYXRhLCBoZWFkZXJzLm5vcm1hbGl6ZSgpLCByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1cyA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIGhlYWRlcnMubm9ybWFsaXplKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4vdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4uL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgdG9VUkxFbmNvZGVkRm9ybSBmcm9tICcuLi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDogdHJhbnNpdGlvbmFsRGVmYXVsdHMsXG5cbiAgYWRhcHRlcjogWyd4aHInLCAnaHR0cCddLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICBjb25zdCBpc09iamVjdFBheWxvYWQgPSB1dGlscy5pc09iamVjdChkYXRhKTtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMuaXNIVE1MRm9ybShkYXRhKSkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMuaXNGb3JtRGF0YShkYXRhKTtcblxuICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICBpZiAoIWhhc0pTT05Db250ZW50VHlwZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCddLCAobWV0aG9kKSA9PiB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS42LjJcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/b2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBcbiAgY29uc3QgX2VuY29kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSA/XG4gICAgICBwYXJhbXMudG9TdHJpbmcoKSA6XG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgY29uc3QgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIHtcbiAgICB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IFtuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKV07XG5cbiAgICAgIHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpICYmIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcocGF0aCkgJiYgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuXG4gICAgICB1dGlscy5pc1N0cmluZyhkb21haW4pICYmIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG5cbiAgICAgIHNlY3VyZSA9PT0gdHJ1ZSAmJiBjb29raWUucHVzaCgnc2VjdXJlJyk7XG5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgIH0sXG5cbiAgICByZWFkKG5hbWUpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgfSxcblxuICAgIHJlbW92ZShuYW1lKSB7XG4gICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgIH1cbiAgfVxuXG4gIDpcblxuICAvLyBOb24tc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIHtcbiAgICB3cml0ZSgpIHt9LFxuICAgIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZSgpIHt9XG4gIH07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4vLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIGNvbnN0IG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0cyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICBsZXQgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXSk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdIZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgaWYgKCFrZXkgfHwgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mW2tleV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0pIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xuICBjb25zdCBtYXRjaCA9IC9eKFstK1xcd117MSwyNX0pKDo/XFwvXFwvfDopLy5leGVjKHVybCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDYWxjdWxhdGUgZGF0YSBtYXhSYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbj0gMTAwMF1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3BlZWRvbWV0ZXIoc2FtcGxlc0NvdW50LCBtaW4pIHtcbiAgc2FtcGxlc0NvdW50ID0gc2FtcGxlc0NvdW50IHx8IDEwO1xuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBjb25zdCB0aW1lc3RhbXBzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGxldCBoZWFkID0gMDtcbiAgbGV0IHRhaWwgPSAwO1xuICBsZXQgZmlyc3RTYW1wbGVUUztcblxuICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDEwMDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1c2goY2h1bmtMZW5ndGgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gdGltZXN0YW1wc1t0YWlsXTtcblxuICAgIGlmICghZmlyc3RTYW1wbGVUUykge1xuICAgICAgZmlyc3RTYW1wbGVUUyA9IG5vdztcbiAgICB9XG5cbiAgICBieXRlc1toZWFkXSA9IGNodW5rTGVuZ3RoO1xuICAgIHRpbWVzdGFtcHNbaGVhZF0gPSBub3c7XG5cbiAgICBsZXQgaSA9IHRhaWw7XG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGkgIT09IGhlYWQpIHtcbiAgICAgIGJ5dGVzQ291bnQgKz0gYnl0ZXNbaSsrXTtcbiAgICAgIGkgPSBpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGhlYWQgPSAoaGVhZCArIDEpICUgc2FtcGxlc0NvdW50O1xuXG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcbiAgICAgIHRhaWwgPSAodGFpbCArIDEpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGlmIChub3cgLSBmaXJzdFNhbXBsZVRTIDwgbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc2VkID0gc3RhcnRlZEF0ICYmIG5vdyAtIHN0YXJ0ZWRBdDtcblxuICAgIHJldHVybiBwYXNzZWQgPyBNYXRoLnJvdW5kKGJ5dGVzQ291bnQgKiAxMDAwIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlZWRvbWV0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbi8vIHRlbXBvcmFyeSBob3RmaXggdG8gYXZvaWQgY2lyY3VsYXIgcmVmZXJlbmNlcyB1bnRpbCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBpcyByZWZhY3RvcmVkXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGluZyAtIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gYmUgdmlzaXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcbiAgcmV0dXJuIHV0aWxzLmlzUGxhaW5PYmplY3QodGhpbmcpIHx8IHV0aWxzLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhdGgsIGEga2V5LCBhbmQgYSBib29sZWFuLCBhbmQgcmV0dXJucyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZG90cyAtIElmIHRydWUsIHRoZSBrZXkgd2lsbCBiZSByZW5kZXJlZCB3aXRoIGRvdHMgaW5zdGVhZCBvZiBicmFja2V0cy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcbiAgaWYgKCFwYXRoKSByZXR1cm4ga2V5O1xuICByZXR1cm4gcGF0aC5jb25jYXQoa2V5KS5tYXAoZnVuY3Rpb24gZWFjaCh0b2tlbiwgaSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRva2VuID0gcmVtb3ZlQnJhY2tldHModG9rZW4pO1xuICAgIHJldHVybiAhZG90cyAmJiBpID8gJ1snICsgdG9rZW4gKyAnXScgOiB0b2tlbjtcbiAgfSkuam9pbihkb3RzID8gJy4nIDogJycpO1xufVxuXG4vKipcbiAqIElmIHRoZSBhcnJheSBpcyBhbiBhcnJheSBhbmQgbm9uZSBvZiBpdHMgZWxlbWVudHMgYXJlIHZpc2l0YWJsZSwgdGhlbiBpdCdzIGEgZmxhdCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZsYXRBcnJheShhcnIpIHtcbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkoYXJyKSAmJiAhYXJyLnNvbWUoaXNWaXNpdGFibGUpO1xufVxuXG5jb25zdCBwcmVkaWNhdGVzID0gdXRpbHMudG9GbGF0T2JqZWN0KHV0aWxzLCB7fSwgbnVsbCwgZnVuY3Rpb24gZmlsdGVyKHByb3ApIHtcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBkYXRhIG9iamVjdCB0byBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1ldGFUb2tlbnMgPSB0cnVlXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kb3RzID0gZmFsc2VdXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuLyoqXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGZvcm0gZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zXG4gKlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhLCBvcHRpb25zKSB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGZvcm1EYXRhID0gZm9ybURhdGEgfHwgbmV3IChQbGF0Zm9ybUZvcm1EYXRhIHx8IEZvcm1EYXRhKSgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBvcHRpb25zID0gdXRpbHMudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IGZhbHNlXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYjtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuXG4gIGlmICghdXRpbHMuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh1dGlscy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ0Jsb2IgaXMgbm90IHN1cHBvcnRlZC4gVXNlIGEgQnVmZmVyIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIodmFsdWUpIHx8IHV0aWxzLmlzVHlwZWRBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB1c2VCbG9iICYmIHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nID8gbmV3IEJsb2IoW3ZhbHVlXSkgOiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmlzaXRvci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gICAqIEB0aGlzIHtGb3JtRGF0YX1cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybiB0cnVlIHRvIHZpc2l0IHRoZSBlYWNoIHByb3Agb2YgdGhlIHZhbHVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGFyciA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnID8gQmxvYiA6IG51bGxcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsImNvbnN0IGhhc0Jyb3dzZXJFbnYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyRW52ID0gKFxuICAocHJvZHVjdCkgPT4ge1xuICAgIHJldHVybiBoYXNCcm93c2VyRW52ICYmIFsnUmVhY3ROYXRpdmUnLCAnTmF0aXZlU2NyaXB0JywgJ05TJ10uaW5kZXhPZihwcm9kdWN0KSA8IDBcbiAgfSkodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcbiAgICB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nXG4gICk7XG59KSgpO1xuXG5leHBvcnQge1xuICBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudlxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4vbm9kZS9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4udXRpbHMsXG4gIC4uLnBsYXRmb3JtXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge3RvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xuXG5jb25zdCBraW5kT2YgPSAoY2FjaGUgPT4gdGhpbmcgPT4ge1xuICAgIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICAgIHJldHVybiBjYWNoZVtzdHJdIHx8IChjYWNoZVtzdHJdID0gc3RyLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpKTtcbn0pKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG5jb25zdCBraW5kT2ZUZXN0ID0gKHR5cGUpID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZVxufVxuXG5jb25zdCB0eXBlT2ZUZXN0ID0gdHlwZSA9PiB0aGluZyA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIGlzRnVuY3Rpb24odmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKSAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJpbmcgPSB0eXBlT2ZUZXN0KCdzdHJpbmcnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Z1bmN0aW9uID0gdHlwZU9mVGVzdCgnZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc051bWJlciA9IHR5cGVPZlRlc3QoJ251bWJlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJvb2xlYW5cbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJvb2xlYW4sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jvb2xlYW4gPSB0aGluZyA9PiB0aGluZyA9PT0gdHJ1ZSB8fCB0aGluZyA9PT0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHtcbiAgaWYgKGtpbmRPZih2YWwpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiAocHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbCkgJiYgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNEYXRlID0ga2luZE9mVGVzdCgnRGF0ZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlID0ga2luZE9mVGVzdCgnRmlsZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGb3JtRGF0YSA9ICh0aGluZykgPT4ge1xuICBsZXQga2luZDtcbiAgcmV0dXJuIHRoaW5nICYmIChcbiAgICAodHlwZW9mIEZvcm1EYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGEpIHx8IChcbiAgICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiAoXG4gICAgICAgIChraW5kID0ga2luZE9mKHRoaW5nKSkgPT09ICdmb3JtZGF0YScgfHxcbiAgICAgICAgLy8gZGV0ZWN0IGZvcm0tZGF0YSBpbnN0YW5jZVxuICAgICAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmNvbnN0IHRyaW0gPSAoc3RyKSA9PiBzdHIudHJpbSA/XG4gIHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXMgPSBmYWxzZV1cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbiwge2FsbE93bktleXMgPSBmYWxzZX0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpO1xuICBsZXQgbDtcblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgY29uc3Qga2V5cyA9IGFsbE93bktleXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgbGV0IF9rZXk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgX2tleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSA9PT0gX2tleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gX2tleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xuICAvKmVzbGludCBuby11bmRlZjowKi9cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbn0pKCk7XG5cbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgY29uc3Qge2Nhc2VsZXNzfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gY2FzZWxlc3MgJiYgZmluZEtleShyZXN1bHQsIGtleSkgfHwga2V5O1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFt0YXJnZXRLZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2UocmVzdWx0W3RhcmdldEtleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGFyZ3VtZW50c1tpXSAmJiBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzXVxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5jb25zdCBleHRlbmQgPSAoYSwgYiwgdGhpc0FyZywge2FsbE93bktleXN9PSB7fSkgPT4ge1xuICBmb3JFYWNoKGIsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9LCB7YWxsT3duS2V5c30pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuY29uc3Qgc3RyaXBCT00gPSAoY29udGVudCkgPT4ge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgaW5oZXJpdHMgPSAoY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHByb3BzLCBkZXNjcmlwdG9ycykgPT4ge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsICdzdXBlcicsIHtcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgfSk7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlT2JqIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVzdE9ial1cbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gW2ZpbHRlcl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wRmlsdGVyXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRvRmxhdE9iamVjdCA9IChzb3VyY2VPYmosIGRlc3RPYmosIGZpbHRlciwgcHJvcEZpbHRlcikgPT4ge1xuICBsZXQgcHJvcHM7XG4gIGxldCBpO1xuICBsZXQgcHJvcDtcbiAgY29uc3QgbWVyZ2VkID0ge307XG5cbiAgZGVzdE9iaiA9IGRlc3RPYmogfHwge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBpZiAoc291cmNlT2JqID09IG51bGwpIHJldHVybiBkZXN0T2JqO1xuXG4gIGRvIHtcbiAgICBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZU9iaik7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCghcHJvcEZpbHRlciB8fCBwcm9wRmlsdGVyKHByb3AsIHNvdXJjZU9iaiwgZGVzdE9iaikpICYmICFtZXJnZWRbcHJvcF0pIHtcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlT2JqID0gZmlsdGVyICE9PSBmYWxzZSAmJiBnZXRQcm90b3R5cGVPZihzb3VyY2VPYmopO1xuICB9IHdoaWxlIChzb3VyY2VPYmogJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKHNvdXJjZU9iaiwgZGVzdE9iaikpICYmIHNvdXJjZU9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cbiAgcmV0dXJuIGRlc3RPYmo7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgbmV3IGFycmF5IGZyb20gYXJyYXkgbGlrZSBvYmplY3Qgb3IgbnVsbCBpZiBmYWlsZWRcbiAqXG4gKiBAcGFyYW0geyp9IFt0aGluZ11cbiAqXG4gKiBAcmV0dXJucyB7P0FycmF5fVxuICovXG5jb25zdCB0b0FycmF5ID0gKHRoaW5nKSA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcbiAgbGV0IGkgPSB0aGluZy5sZW5ndGg7XG4gIGlmICghaXNOdW1iZXIoaSkpIHJldHVybiBudWxsO1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgYXJyW2ldID0gdGhpbmdbaV07XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBDaGVja2luZyBpZiB0aGUgVWludDhBcnJheSBleGlzdHMgYW5kIGlmIGl0IGRvZXMsIGl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtUeXBlZEFycmF5fVxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IGlzVHlwZWRBcnJheSA9IChUeXBlZEFycmF5ID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIHRoaW5nID0+IHtcbiAgICByZXR1cm4gVHlwZWRBcnJheSAmJiB0aGluZyBpbnN0YW5jZW9mIFR5cGVkQXJyYXk7XG4gIH07XG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG4vKipcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hFbnRyeSA9IChvYmosIGZuKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG9iaiAmJiBvYmpbU3ltYm9sLml0ZXJhdG9yXTtcblxuICBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRvci5jYWxsKG9iaik7XG5cbiAgbGV0IHJlc3VsdDtcblxuICB3aGlsZSAoKHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcbiAgICBmbi5jYWxsKG9iaiwgcGFpclswXSwgcGFpclsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1stX1xcc10oW2EtelxcZF0pKFxcdyopL2csXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICAgIH1cbiAgKTtcbn07XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGlmICgocmV0ID0gcmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCByZWR1Y2VkRGVzY3JpcHRvcnMpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFsbCBtZXRob2RzIHJlYWQtb25seVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmNvbnN0IGZyZWV6ZU1ldGhvZHMgPSAob2JqKSA9PiB7XG4gIHJlZHVjZURlc2NyaXB0b3JzKG9iaiwgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICAvLyBza2lwIHJlc3RyaWN0ZWQgcHJvcHMgaW4gc3RyaWN0IG1vZGVcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopICYmIFsnYXJndW1lbnRzJywgJ2NhbGxlcicsICdjYWxsZWUnXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoJ3dyaXRhYmxlJyBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQgPSAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKCdDYW4gbm90IHJld3JpdGUgcmVhZC1vbmx5IG1ldGhvZCBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgdG9PYmplY3RTZXQgPSAoYXJyYXlPclN0cmluZywgZGVsaW1pdGVyKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuXG4gIGNvbnN0IGRlZmluZSA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBvYmpbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzQXJyYXkoYXJyYXlPclN0cmluZykgPyBkZWZpbmUoYXJyYXlPclN0cmluZykgOiBkZWZpbmUoU3RyaW5nKGFycmF5T3JTdHJpbmcpLnNwbGl0KGRlbGltaXRlcikpO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuXG5jb25zdCBBTFBIQSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcblxuY29uc3QgRElHSVQgPSAnMDEyMzQ1Njc4OSc7XG5cbmNvbnN0IEFMUEhBQkVUID0ge1xuICBESUdJVCxcbiAgQUxQSEEsXG4gIEFMUEhBX0RJR0lUOiBBTFBIQSArIEFMUEhBLnRvVXBwZXJDYXNlKCkgKyBESUdJVFxufVxuXG5jb25zdCBnZW5lcmF0ZVN0cmluZyA9IChzaXplID0gMTYsIGFscGhhYmV0ID0gQUxQSEFCRVQuQUxQSEFfRElHSVQpID0+IHtcbiAgbGV0IHN0ciA9ICcnO1xuICBjb25zdCB7bGVuZ3RofSA9IGFscGhhYmV0O1xuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgc3RyICs9IGFscGhhYmV0W01hdGgucmFuZG9tKCkgKiBsZW5ndGh8MF1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnRGb3JtKHRoaW5nKSB7XG4gIHJldHVybiAhISh0aGluZyAmJiBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgdGhpbmdbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0Zvcm1EYXRhJyAmJiB0aGluZ1tTeW1ib2wuaXRlcmF0b3JdKTtcbn1cblxuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCBzdGFjayA9IG5ldyBBcnJheSgxMCk7XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlLCBpKSA9PiB7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2Yoc291cmNlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlLCBpICsgMSk7XG4gICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhY2tbaV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0KG9iaiwgMCk7XG59XG5cbmNvbnN0IGlzQXN5bmNGbiA9IGtpbmRPZlRlc3QoJ0FzeW5jRnVuY3Rpb24nKTtcblxuY29uc3QgaXNUaGVuYWJsZSA9ICh0aGluZykgPT5cbiAgdGhpbmcgJiYgKGlzT2JqZWN0KHRoaW5nKSB8fCBpc0Z1bmN0aW9uKHRoaW5nKSkgJiYgaXNGdW5jdGlvbih0aGluZy50aGVuKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLmNhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQsXG4gIGlzRGF0ZSxcbiAgaXNGaWxlLFxuICBpc0Jsb2IsXG4gIGlzUmVnRXhwLFxuICBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdCxcbiAgZm9yRWFjaCxcbiAgbWVyZ2UsXG4gIGV4dGVuZCxcbiAgdHJpbSxcbiAgc3RyaXBCT00sXG4gIGluaGVyaXRzLFxuICB0b0ZsYXRPYmplY3QsXG4gIGtpbmRPZixcbiAga2luZE9mVGVzdCxcbiAgZW5kc1dpdGgsXG4gIHRvQXJyYXksXG4gIGZvckVhY2hFbnRyeSxcbiAgbWF0Y2hBbGwsXG4gIGlzSFRNTEZvcm0sXG4gIGhhc093blByb3BlcnR5LFxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSwgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cbiAgcmVkdWNlRGVzY3JpcHRvcnMsXG4gIGZyZWV6ZU1ldGhvZHMsXG4gIHRvT2JqZWN0U2V0LFxuICB0b0NhbWVsQ2FzZSxcbiAgbm9vcCxcbiAgdG9GaW5pdGVOdW1iZXIsXG4gIGZpbmRLZXksXG4gIGdsb2JhbDogX2dsb2JhbCxcbiAgaXNDb250ZXh0RGVmaW5lZCxcbiAgQUxQSEFCRVQsXG4gIGdlbmVyYXRlU3RyaW5nLFxuICBpc1NwZWNDb21wbGlhbnRGb3JtLFxuICB0b0pTT05PYmplY3QsXG4gIGlzQXN5bmNGbixcbiAgaXNUaGVuYWJsZVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0BzdHlsZXMvZGFzaGJvYXJkLnNjc3MnO1xuaW1wb3J0ICdAc2FnZW1vZGVuaW5qYS9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudCc7XG5pbXBvcnQgJ0BzYWdlbW9kZW5pbmphL2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQnO1xuaW1wb3J0ICdAL2NvbXBvbmVudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uTWFuYWdlciwgdXNlTmF2aWdhdGlvbiwgdG9DdXJyZW5jeSB9IGZyb20gJ0AvY2xhc3Nlcyc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0Avc2VydmljZXMnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVPcHRpb24sIGdsb2JhbENvbnRleHQsIH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmNsYXNzIERhc2hib2FyZFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB1c2VOYXZpZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXlvdXRfYm9keScpO1xuICAgICAgICB0aGlzLnJlZnJlc2hDb21tYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2hfY29tbWFuZCcpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlX2Nsb3NlZF9jb21tYW5kJyk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFuc2FjdGlvbl9wYW5lbCcpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmNsb3NlZEFjY291bnRzID0gW107XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJhbnNhY3Rpb25fY2FyZFwiKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFjdGlvbi1idXR0b25cIik7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFuc2FjdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JfZGlhbG9nXCIpO1xuICAgICAgICB0aGlzLmluaXRDb250ZXh0TWVudSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFjY291bnRzKCk7XG4gICAgfVxuICAgIGluaXRDb250ZXh0TWVudSgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudSA9IGdsb2JhbENvbnRleHQuYWRkTWVudSgnYWNjb3VudHNfY2FyZCcsIHRoaXMuYm9keSk7XG4gICAgICAgIC8vIENvbnRleHQgbWVudSBvcHRpb25zLi4uXG4gICAgICAgIGNvbnN0IGNsb3NlT3B0aW9uID0gbmV3IENvbnRleHRNZW51T3B0aW9uKCdDbG9zZScpO1xuICAgICAgICBjb25zdCBkZWxldGVPcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24oJ0RlbGV0ZScpO1xuICAgICAgICBjbG9zZU9wdGlvbi52aXNpYmxlKGQgPT4gZC5TdGF0dXMgPT09ICdBY3RpdmUnKTtcbiAgICAgICAgZGVsZXRlT3B0aW9uLnZpc2libGUoZCA9PiBkLlN0YXR1cyA9PT0gJ0FjdGl2ZScpO1xuICAgICAgICBjbG9zZU9wdGlvbi5vbkNsaWNrKGFzeW5jIChhY2N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oYENsb3NlIGFjY291bnQgXFxcIiR7YWNjdC5UaXRsZX1cXFwiP2ApO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2VydmljZS5jbG9zZShhY2N0LklkKTtcbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHBheWxvYWQuY29udGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogRml4IHRoaXMhXG4gICAgICAgICAgICAvLyByZWZyZXNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlT3B0aW9uLm9uQ2xpY2soYXN5bmMgKGFjY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybShgRGVsZXRlIGFjY291bnQgXFxcIiR7YWNjdC5UaXRsZX1cXFwiP2ApO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2VydmljZS5yZW1vdmUoYWNjdC5JZCk7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChwYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRPRE86IEZpeCB0aGlzIVxuICAgICAgICAgICAgLy8gcmVmcmVzaENhdGVnb3JpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUuYWRkT3B0aW9ucyhjbG9zZU9wdGlvbiwgZGVsZXRlT3B0aW9uKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYSA9IHRoaXMucmVmcmVzaENvbW1hbmQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVmcmVzaEFjY291bnRzLmJpbmQodGhpcykpO1xuICAgICAgICAoX2IgPSB0aGlzLnRvZ2dsZUNvbW1hbmQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmVmcmVzaEFjY291bnRzKCkge1xuICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gJzxwIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPkZldGNoaW5nIEFjY291bnRzLi4uPC9wPic7XG4gICAgICAgIGF4aW9zLmdldChcImFjY291bnQvY3J1ZC9yZWFkX2NhdGVnb3JpemVkLnBocFwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgYWNjb3VudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBhY2NvdW50cy5jb250ZW50O1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gY29udGVudC5yZWR1Y2UoKGFyciwgYWNjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGFjY3QuQ2F0ZWdvcnlJZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcnIuc29tZShjYXQgPT4gY2F0LklkID09IGFjY3QuQ2F0ZWdvcnlJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGFjY3QuQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3I6IGFjY3QuQ2F0ZWdvcnlDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaXplZCA9IGNvbnRlbnQucmVkdWNlKChtYXAsIGFjY3QpID0+IHsgdmFyIF9hOyByZXR1cm4gbWFwLnNldChhY2N0LkNhdGVnb3J5SWQsIFsuLi4oX2EgPSBtYXAuZ2V0KGFjY3QuQ2F0ZWdvcnlJZCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdLCBhY2N0XSk7IH0sIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQmFsYW5jZXMoY2F0ZWdvcmllcywgY2F0ZWdvcml6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImNlbnRlcmVkXCI+T29wcyEgJHthY2NvdW50cy5jb250ZW50fTwvcD5gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZnJlc2hCYWxhbmNlcyhjYXRlZ29yaWVzLCBjYXRlZ29yaXplZCkge1xuICAgICAgICBjYXRlZ29yaXplZC5mb3JFYWNoKChhY2NvdW50cywgX2NhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IChfYSA9IGNhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0LklkID09IF9jYXRlZ29yeSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gKF9iID0gY2F0ZWdvcnkgPT09IG51bGwgfHwgY2F0ZWdvcnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhdGVnb3J5LkNvbG9yKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIjlFOUU5RVwiO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gKF9jID0gY2F0ZWdvcnkgPT09IG51bGwgfHwgY2F0ZWdvcnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhdGVnb3J5LlRpdGxlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBcIlVuY2F0ZWdvcml6ZWRcIjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmbHVlbnQtc3ltYm9sLWljb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgICAgICBhY2NvdW50c0dyaWQuY2xhc3NMaXN0LmFkZCgnYWNjb3VudHMtZ3JpZCcpO1xuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnc3ltYm9sJywgJ1RhZycpO1xuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnZm9yZWdyb3VuZCcsIGAjJHtjb2xvcn1gKTtcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsICcxMycpO1xuICAgICAgICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGFjY291bnRzR3JpZCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhZyk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsKTtcbiAgICAgICAgICAgIGFjY291bnRzLmZvckVhY2goYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMubmV3Q2FyZChhY2NvdW50LCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgYWNjb3VudHNHcmlkLmFwcGVuZChjYXJkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmV3Q2FyZChhY2NvdW50LCBjYXRlZ29yeSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgYWNjb3VudE51bWJlciA9IChfYiA9IChfYSA9IGFjY291bnQuQWNjb3VudE51bWJlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNsaWNlKC00KSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCLigKLigKLigKLigKJcIjtcbiAgICAgICAgbGV0IGJhbmtJY29uID0gYWNjb3VudC5CYW5rSWNvbjtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FjY291bnQtY2FyZCcpO1xuICAgICAgICBjb25zdCBydW5uaW5nQmFsYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcmQtYmFsYW5jZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ZWRCYWxhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZC1iYWxhbmNlJyk7XG4gICAgICAgIGNvbnN0IGFjY291bnRCYW5rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBydW5uaW5nQmFsYW5jZS5pbm5lclRleHQgPSAnLi4uJztcbiAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSAnLi4uJztcbiAgICAgICAgYWNjb3VudEJhbmtJY29uLmNsYXNzTGlzdC5hZGQoJ2FjY291bnQtYmFuay1pY29uJyk7XG4gICAgICAgIGFjY291bnRCYW5rSWNvbi5zbG90ID0gJ2ljb24nO1xuICAgICAgICBjYXJkLmFwcGVuZChydW5uaW5nQmFsYW5jZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kKHByb2plY3RlZEJhbGFuY2UpO1xuICAgICAgICBjYXJkLmFwcGVuZChhY2NvdW50QmFua0ljb24pO1xuICAgICAgICBjYXJkLnRpdGxlID0gYWNjb3VudC5UaXRsZTtcbiAgICAgICAgY2FyZC5udW1iZXIgPSBhY2NvdW50TnVtYmVyO1xuICAgICAgICBjYXJkLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHJ1bm5pbmdCYWxhbmNlLnRpdGxlID0gJ0FjdHVhbCc7XG4gICAgICAgIHByb2plY3RlZEJhbGFuY2UudGl0bGUgPSAnUHJvamVjdGlvbic7XG4gICAgICAgIGlmIChiYW5rSWNvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc3JjID0gYGFzc2V0cy9pbWFnZXMvYmFua19pY29ucy8ke2JhbmtJY29ufS5zdmdgO1xuICAgICAgICAgICAgaWYgKGJhbmtJY29uID09IFwibWFzdGVyX2NhcmRcIilcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjE2cHg7aGVpZ2h0OjM1cHg7XCIpO1xuICAgICAgICAgICAgaWYgKGJhbmtJY29uID09IFwidWJwXCIgfHwgYmFua0ljb24gPT0gXCJnY2FzaFwiKVxuICAgICAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJib3R0b206MjBweDtoZWlnaHQ6MzBweDtyaWdodDoyNXB4O1wiKTtcbiAgICAgICAgICAgIGlmIChiYW5rSWNvbiA9PSBcImNpbWJcIilcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjIwcHg7aGVpZ2h0OjI4cHg7cmlnaHQ6MjVweDtcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29udGV4dCBtZW51Li4uXG4gICAgICAgIGNhcmQuYWRkQ29udGV4dCh0aGlzLmNvbnRleHRNZW51LCBhY2NvdW50KTtcbiAgICAgICAgLy8gVmlzaWJpbGl0eS4uLlxuICAgICAgICBpZiAoYWNjb3VudC5TdGF0dXMgIT09ICdBY3RpdmUnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZEFjY291bnRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3MuZ2V0KGAvYWNjb3VudC9iYWxhbmNlLnBocD9hY2NvdW50SWQ9JHthY2NvdW50LklkfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VzID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koYmFsYW5jZXMuQmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGJhbGFuY2VzLlByb2plY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0JhbGFuY2UuaW5uZXJUZXh0ID0gJyEnO1xuICAgICAgICAgICAgICAgIHByb2plY3RlZEJhbGFuY2UuaW5uZXJUZXh0ID0gJyEnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF5bG9hZC5jb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uUGFuZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5sb2FkQWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICBvblRvZ2dsZUNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnMScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQuaWNvbiA9IHRoaXMuaXNTaG93Q2xvc2VkID8gJ1ZpZXcnIDogJ0hpZGUnO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQubGFiZWwgPSB0aGlzLmlzU2hvd0Nsb3NlZCA/ICdTaG93IENsb3NlZCBBY2NvdW50cycgOiAnSGlkZSBDbG9zZWQgQWNjb3VudHMnO1xuICAgICAgICB0aGlzLmNsb3NlZEFjY291bnRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dDbG9zZWQpXG4gICAgICAgICAgICAgICAgY2FyZC5oaWRlKCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY2FyZC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU2hvd0Nsb3NlZCA9ICF0aGlzLmlzU2hvd0Nsb3NlZDtcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGFzaGJvYXJkVmlldygpO1xuICAgIHZpZXcucmVmcmVzaCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=