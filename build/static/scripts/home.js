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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsOENBQThDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUseUNBQXlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsdUNBQXVDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMENBQTBDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUseUJBQXlCLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0JBQXdCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsMkNBQTJDLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMENBQTBDLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscURBQXFELEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMkNBQTJDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsc0NBQXNDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsNENBQTRDLEVBQUUsOENBQThDLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsZ0RBQWdELEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsMkNBQTJDLEVBQUUsd0NBQXdDLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNkNBQTZDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUsc0NBQXNDLEVBQUUsd0NBQXdDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsbUNBQW1DLEVBQUUsc0NBQXNDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNkJBQTZCLEVBQUUsNkJBQTZCLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsd0JBQXdCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsOEJBQThCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUscURBQXFELEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsd0NBQXdDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsNENBQTRDLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0NBQStDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsc0NBQXNDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsNkNBQTZDLEVBQUUsMEJBQTBCLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsZ0NBQWdDLEVBQUUsdUNBQXVDLEVBQUUsb0NBQW9DLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsNENBQTRDLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsbUNBQW1DLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsMENBQTBDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLEVBQUUsa0RBQWtELEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsd0NBQXdDLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUsdUNBQXVDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsNEJBQTRCLEVBQUUsd0NBQXdDLEVBQUUsMkNBQTJDLEVBQUUsMkNBQTJDLEVBQUUsMENBQTBDLEVBQUUsaUNBQWlDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUseUJBQXlCLEVBQUUsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUseUNBQXlDLEVBQUUsMENBQTBDLEVBQUUsc0NBQXNDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsK0NBQStDLEVBQUUsK0NBQStDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUseUJBQXlCLEVBQUUsdUNBQXVDLEVBQUUsdUNBQXVDLEVBQUUsd0JBQXdCLEVBQUUscUNBQXFDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsNkNBQTZDLEVBQUUsNkJBQTZCLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsc0NBQXNDLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsdUNBQXVDLEVBQUUsMENBQTBDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUsNkNBQTZDLEVBQUUscUNBQXFDLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsK0JBQStCLEVBQUUsZ0RBQWdELEVBQUUsOEJBQThCLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsb0NBQW9DLEVBQUUsMENBQTBDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsaURBQWlELEVBQUUscUNBQXFDLEVBQUUsK0JBQStCLEVBQUUsd0NBQXdDLEVBQUUsaURBQWlELEVBQUUsK0NBQStDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsZ0NBQWdDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVBQUUsd0NBQXdDLEVBQUUsd0NBQXdDLEVBQUUseUNBQXlDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsd0JBQXdCLEVBQUUsb0NBQW9DLEVBQUUsa0NBQWtDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsbUNBQW1DLEVBQUUsMENBQTBDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsOENBQThDLEVBQUUsNEJBQTRCLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUseUNBQXlDLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsd0NBQXdDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsZ0NBQWdDLEVBQUUsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUsa0NBQWtDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsc0NBQXNDLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUUsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaURBQWlELEVBQUUsNkJBQTZCLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsK0NBQStDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNkNBQTZDLEVBQUUsNENBQTRDLEVBQUUsb0RBQW9ELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUscURBQXFELEVBQUUsNkRBQTZELEVBQUUsMkNBQTJDLEVBQUUsbURBQW1ELEVBQUUsbURBQW1ELEVBQUUsMkRBQTJELEVBQUUsb0RBQW9ELEVBQUUsNERBQTRELEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsMENBQTBDLEVBQUUsMkNBQTJDLEVBQUUseUNBQXlDLEVBQUUsNENBQTRDLEVBQUUsMkNBQTJDLEVBQUUsNENBQTRDLEVBQUUsMENBQTBDLEVBQUUsNkNBQTZDLEVBQUUsZ0NBQWdDLEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsZ0RBQWdELEVBQUUsNENBQTRDLEVBQUUsNkNBQTZDLEVBQUUsMkNBQTJDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsZ0RBQWdELEVBQUUsaURBQWlELEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsNENBQTRDLEVBQUUsK0NBQStDLEVBQUUsaURBQWlELEVBQUUsOENBQThDLEVBQUUsZ0NBQWdDLEVBQUUsOENBQThDLEVBQUUsbUNBQW1DLEVBQUUsK0NBQStDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsd0JBQXdCLEVBQUUsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsNkNBQTZDLEVBQUUsOENBQThDLEVBQUUsMkNBQTJDLEVBQUUsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDLEVBQUUsK0JBQStCLEVBQUUsNkJBQTZCLEVBQUUscUNBQXFDLEVBQUUsd0NBQXdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUscUNBQXFDLEVBQUUsaUNBQWlDLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUseUNBQXlDLEVBQUUsd0NBQXdDLEVBQUUsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsZ0NBQWdDLEVBQUUsaUNBQWlDLEVBQUUsb0NBQW9DLEVBQUUsbUNBQW1DLEVBQUUscUNBQXFDLEVBQUUscUNBQXFDLEVBQUUsc0NBQXNDLEVBQUUsdUNBQXVDLEVBQUUscUNBQXFDLEVBQUUsb0NBQW9DLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsbUNBQW1DLEVBQUUsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUseUNBQXlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUsaUNBQWlDLEVBQUUseUNBQXlDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUsZ0NBQWdDLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsdUNBQXVDLEVBQUUsK0JBQStCLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLEVBQUUsNkNBQTZDLEVBQUUsa0NBQWtDLEVBQUUsbUNBQW1DLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsa0NBQWtDLEVBQUUsb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsb0NBQW9DLEVBQUUsaUNBQWlDLEVBQUUsZ0NBQWdDLEVBQUUsc0NBQXNDLEVBQUUsNEJBQTRCLEVBQUUsaUNBQWlDLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsd0NBQXdDLEVBQUUsb0NBQW9DLEVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk04QjtBQUNIO0FBQ0M7QUFDQztBQUNNO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7QUNML0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNSVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdCO0FBQ2tCO0FBQ0g7QUFDWTtBQUNXO0FBQ3pEO0FBQ1A7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1Q0FBUTtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbURBQWU7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsUUFBUSw2Q0FBSyw4QkFBOEIsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUMsb0NBQW9DLDZDQUFVO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixRQUFRLDZDQUFLLCtCQUErQixjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFFBQVE7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCLE1BQU0sNkNBQVUseUJBQXlCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsWUFBWSxtRUFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFTO0FBQ25DLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQVM7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xWQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDbUY7QUFDbkYsNENBQTRDLDRFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMdkIsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ21GO0FBQ25GLDhDQUE4Qyw0RUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQWU7QUFDbkI7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFeEIsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ21GO0FBQ25GLDRDQUE0Qyw0RUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQvZGlzdC9jdXN0b20tY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudC9kaXN0L2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudC9kaXN0L2ZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zdHlsZXMvZGFzaGJvYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvYWxwaGEtYmxlbmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvY3VycmVuY3kudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvZGF0ZS10aW1lLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jbGFzc2VzL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jbGFzc2VzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NsYXNzZXMvcmVzcG9uc2UtcGF5bG9hZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY2xhc3Nlcy90cmFuc2FjdGlvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnQtY2FyZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NhcmQtYmFsYW5jZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jb250ZXh0LW1lbnUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGFnZS1pbmRpY2F0b3IudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc25hcC12aWV3LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3RyYW5zYWN0aW9uLXBhbmVsLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dhbGxldC1jYXJkLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy9lbnRpdHktc3RhdHVzLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL3NjcmlwdHMvZW51bXMvb3BlcmF0aW9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9lbnVtcy90cmFuc2FjdGlvbi10eXBlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9hY2NvdW50LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2NhdGVnb3J5LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9zZXJ2aWNlLWJhc2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc3JjL2FwcC9ob21lL3ZpZXcucGhwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBGb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGN1c3RvbS1jb21wb25lbnQuanMuTElDRU5TRS50eHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PWUoKTp0LkN1c3RvbUNvbXBvbmVudD1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17NjYwOih0LGUscik9Pnt2YXIgbjshZnVuY3Rpb24odCl7IWZ1bmN0aW9uKGUpe3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiByLmc/ci5nOlwib2JqZWN0XCI9PXR5cGVvZiBzZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIHRoaXM/dGhpczpGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpLG89aSh0KTtmdW5jdGlvbiBpKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7XCJmdW5jdGlvblwiIT10eXBlb2YgdFtyXSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KSxlJiZlKHIsbil9fXZvaWQgMD09PW4uUmVmbGVjdD9uLlJlZmxlY3Q9dDpvPWkobi5SZWZsZWN0LG8pLGZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wsbj1yJiZ2b2lkIDAhPT1TeW1ib2wudG9QcmltaXRpdmU/U3ltYm9sLnRvUHJpbWl0aXZlOlwiQEB0b1ByaW1pdGl2ZVwiLG89ciYmdm9pZCAwIT09U3ltYm9sLml0ZXJhdG9yP1N5bWJvbC5pdGVyYXRvcjpcIkBAaXRlcmF0b3JcIixpPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5jcmVhdGUsdT17X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXksYT0haSYmIXUscz17Y3JlYXRlOmk/ZnVuY3Rpb24oKXtyZXR1cm4gSChPYmplY3QuY3JlYXRlKG51bGwpKX06dT9mdW5jdGlvbigpe3JldHVybiBIKHtfX3Byb3RvX186bnVsbH0pfTpmdW5jdGlvbigpe3JldHVybiBIKHt9KX0saGFzOmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscil9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUgaW4gdH0sZ2V0OmE/ZnVuY3Rpb24odCxyKXtyZXR1cm4gZS5jYWxsKHQscik/dFtyXTp2b2lkIDB9OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV19fSxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbiksZj1cIm9iamVjdFwiPT10eXBlb2YgcHJvY2VzcyYmcHJvY2Vzcy5lbnYmJlwidHJ1ZVwiPT09cHJvY2Vzcy5lbnYuUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMLGg9Znx8XCJmdW5jdGlvblwiIT10eXBlb2YgTWFwfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXM/ZnVuY3Rpb24oKXt2YXIgdD17fSxlPVtdLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt0aGlzLl9pbmRleD0wLHRoaXMuX2tleXM9dCx0aGlzLl92YWx1ZXM9ZSx0aGlzLl9zZWxlY3Rvcj1yfXJldHVybiB0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGVbb109ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2luZGV4O2lmKHQ+PTAmJnQ8dGhpcy5fa2V5cy5sZW5ndGgpe3ZhciByPXRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbdF0sdGhpcy5fdmFsdWVzW3RdKTtyZXR1cm4gdCsxPj10aGlzLl9rZXlzLmxlbmd0aD8odGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKTp0aGlzLl9pbmRleCsrLHt2YWx1ZTpyLGRvbmU6ITF9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19LHQucHJvdG90eXBlLnRocm93PWZ1bmN0aW9uKHQpe3Rocm93IHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx0fSx0LnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2luZGV4Pj0wJiYodGhpcy5faW5kZXg9LTEsdGhpcy5fa2V5cz1lLHRoaXMuX3ZhbHVlcz1lKSx7dmFsdWU6dCxkb25lOiEwfX0sdH0oKTtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5fa2V5cz1bXSx0aGlzLl92YWx1ZXM9W10sdGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rZXlzLmxlbmd0aH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2ZpbmQodCwhMSk+PTB9LGUucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9maW5kKHQsITEpO3JldHVybiBlPj0wP3RoaXMuX3ZhbHVlc1tlXTp2b2lkIDB9LGUucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX2ZpbmQodCwhMCk7cmV0dXJuIHRoaXMuX3ZhbHVlc1tyXT1lLHRoaXN9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgcj10aGlzLl9maW5kKGUsITEpO2lmKHI+PTApe2Zvcih2YXIgbj10aGlzLl9rZXlzLmxlbmd0aCxvPXIrMTtvPG47bysrKXRoaXMuX2tleXNbby0xXT10aGlzLl9rZXlzW29dLHRoaXMuX3ZhbHVlc1tvLTFdPXRoaXMuX3ZhbHVlc1tvXTtyZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGgtLSx0aGlzLl92YWx1ZXMubGVuZ3RoLS0sZT09PXRoaXMuX2NhY2hlS2V5JiYodGhpcy5fY2FjaGVLZXk9dCx0aGlzLl9jYWNoZUluZGV4PS0yKSwhMH1yZXR1cm4hMX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9rZXlzLmxlbmd0aD0wLHRoaXMuX3ZhbHVlcy5sZW5ndGg9MCx0aGlzLl9jYWNoZUtleT10LHRoaXMuX2NhY2hlSW5kZXg9LTJ9LGUucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMsbil9LGUucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyxpKX0sZS5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyx1KX0sZS5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxlLnByb3RvdHlwZVtvXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sZS5wcm90b3R5cGUuX2ZpbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5fY2FjaGVLZXkhPT10JiYodGhpcy5fY2FjaGVJbmRleD10aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXk9dCkpLHRoaXMuX2NhY2hlSW5kZXg8MCYmZSYmKHRoaXMuX2NhY2hlSW5kZXg9dGhpcy5fa2V5cy5sZW5ndGgsdGhpcy5fa2V5cy5wdXNoKHQpLHRoaXMuX3ZhbHVlcy5wdXNoKHZvaWQgMCkpLHRoaXMuX2NhY2hlSW5kZXh9LGV9KCk7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0fWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gZX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuW3QsZV19fSgpOk1hcCxwPWZ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFNldHx8XCJmdW5jdGlvblwiIT10eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzP2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX21hcD1uZXcgaH1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tYXAuaGFzKHQpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5zZXQodCx0KSx0aGlzfSx0LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21hcC5kZWxldGUodCl9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fbWFwLmNsZWFyKCl9LHQucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbWFwLmtleXMoKX0sdC5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKX0sdC5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXAuZW50cmllcygpfSx0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rZXlzKCl9LHQucHJvdG90eXBlW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2V5cygpfSx0fSgpOlNldCxsPW5ldyhmfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBXZWFrTWFwP2Z1bmN0aW9uKCl7dmFyIHQ9MTYscj1zLmNyZWF0ZSgpLG49bygpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9rZXk9bygpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZSYmcy5oYXMoZSx0aGlzLl9rZXkpfSx0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9aSh0LCExKTtyZXR1cm4gdm9pZCAwIT09ZT9zLmdldChlLHRoaXMuX2tleSk6dm9pZCAwfSx0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaSh0LCEwKVt0aGlzLl9rZXldPWUsdGhpc30sdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPWkodCwhMSk7cmV0dXJuIHZvaWQgMCE9PWUmJmRlbGV0ZSBlW3RoaXMuX2tleV19LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fa2V5PW8oKX0sdH0oKTtmdW5jdGlvbiBvKCl7dmFyIHQ7ZG97dD1cIkBAV2Vha01hcEBAXCIrYSgpfXdoaWxlKHMuaGFzKHIsdCkpO3JldHVybiByW3RdPSEwLHR9ZnVuY3Rpb24gaSh0LHIpe2lmKCFlLmNhbGwodCxuKSl7aWYoIXIpcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOnMuY3JlYXRlKCl9KX1yZXR1cm4gdFtuXX1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciByPTA7cjxlOysrcil0W3JdPTI1NSpNYXRoLnJhbmRvbSgpfDA7cmV0dXJuIHR9ZnVuY3Rpb24gYSgpe3ZhciBlLHI9KGU9dCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBVaW50OEFycmF5P1widW5kZWZpbmVkXCIhPXR5cGVvZiBjcnlwdG8/Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1zQ3J5cHRvP21zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShlKSk6dShuZXcgVWludDhBcnJheShlKSxlKTp1KG5ldyBBcnJheShlKSxlKSk7cls2XT03OSZyWzZdfDY0LHJbOF09MTkxJnJbOF18MTI4O2Zvcih2YXIgbj1cIlwiLG89MDtvPHQ7KytvKXt2YXIgaT1yW29dOzQhPT1vJiY2IT09byYmOCE9PW98fChuKz1cIi1cIiksaTwxNiYmKG4rPVwiMFwiKSxuKz1pLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpfXJldHVybiBufX0oKTpXZWFrTWFwKTtmdW5jdGlvbiB5KHQsZSxyKXt2YXIgbj1sLmdldCh0KTtpZihqKG4pKXtpZighcilyZXR1cm47bj1uZXcgaCxsLnNldCh0LG4pfXZhciBvPW4uZ2V0KGUpO2lmKGoobykpe2lmKCFyKXJldHVybjtvPW5ldyBoLG4uc2V0KGUsbyl9cmV0dXJuIG99ZnVuY3Rpb24gZCh0LGUscil7aWYodih0LGUscikpcmV0dXJuITA7dmFyIG49SShlKTtyZXR1cm4hVChuKSYmZCh0LG4scil9ZnVuY3Rpb24gdih0LGUscil7dmFyIG49eShlLHIsITEpO3JldHVybiFqKG4pJiYhIW4uaGFzKHQpfWZ1bmN0aW9uIF8odCxlLHIpe2lmKHYodCxlLHIpKXJldHVybiBnKHQsZSxyKTt2YXIgbj1JKGUpO3JldHVybiBUKG4pP3ZvaWQgMDpfKHQsbixyKX1mdW5jdGlvbiBnKHQsZSxyKXt2YXIgbj15KGUsciwhMSk7aWYoIWoobikpcmV0dXJuIG4uZ2V0KHQpfWZ1bmN0aW9uIHcodCxlLHIsbil7eShyLG4sITApLnNldCh0LGUpfWZ1bmN0aW9uIGIodCxlKXt2YXIgcj1tKHQsZSksbj1JKHQpO2lmKG51bGw9PT1uKXJldHVybiByO3ZhciBvPWIobixlKTtpZihvLmxlbmd0aDw9MClyZXR1cm4gcjtpZihyLmxlbmd0aDw9MClyZXR1cm4gbztmb3IodmFyIGk9bmV3IHAsdT1bXSxhPTAscz1yO2E8cy5sZW5ndGg7YSsrKXt2YXIgYz1zW2FdO2kuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKX1mb3IodmFyIGY9MCxoPW87ZjxoLmxlbmd0aDtmKyspYz1oW2ZdLGkuaGFzKGMpfHwoaS5hZGQoYyksdS5wdXNoKGMpKTtyZXR1cm4gdX1mdW5jdGlvbiBtKHQsZSl7dmFyIHI9W10sbj15KHQsZSwhMSk7aWYoaihuKSlyZXR1cm4gcjtmb3IodmFyIGk9ZnVuY3Rpb24odCl7dmFyIGU9Qyh0LG8pO2lmKCF4KGUpKXRocm93IG5ldyBUeXBlRXJyb3I7dmFyIHI9ZS5jYWxsKHQpO2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIHJ9KG4ua2V5cygpKSx1PTA7Oyl7dmFyIGE9QShpKTtpZighYSlyZXR1cm4gci5sZW5ndGg9dSxyO3ZhciBzPWEudmFsdWU7dHJ5e3JbdV09c31jYXRjaCh0KXt0cnl7UihpKX1maW5hbGx5e3Rocm93IHR9fXUrK319ZnVuY3Rpb24gTyh0KXtpZihudWxsPT09dClyZXR1cm4gMTtzd2l0Y2godHlwZW9mIHQpe2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiAwO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gMjtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gMztjYXNlXCJzeW1ib2xcIjpyZXR1cm4gNDtjYXNlXCJudW1iZXJcIjpyZXR1cm4gNTtjYXNlXCJvYmplY3RcIjpyZXR1cm4gbnVsbD09PXQ/MTo2O2RlZmF1bHQ6cmV0dXJuIDZ9fWZ1bmN0aW9uIGoodCl7cmV0dXJuIHZvaWQgMD09PXR9ZnVuY3Rpb24gVCh0KXtyZXR1cm4gbnVsbD09PXR9ZnVuY3Rpb24gayh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIEUodCxlKXtzd2l0Y2goTyh0KSl7Y2FzZSAwOmNhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6cmV0dXJuIHR9dmFyIHI9Mz09PWU/XCJzdHJpbmdcIjo1PT09ZT9cIm51bWJlclwiOlwiZGVmYXVsdFwiLG89Qyh0LG4pO2lmKHZvaWQgMCE9PW8pe3ZhciBpPW8uY2FsbCh0LHIpO2lmKGsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaX1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiPT09ZSl7dmFyIHI9dC50b1N0cmluZztpZih4KHIpJiYhayhvPXIuY2FsbCh0KSkpcmV0dXJuIG87aWYoeChuPXQudmFsdWVPZikmJiFrKG89bi5jYWxsKHQpKSlyZXR1cm4gb31lbHNle3ZhciBuO2lmKHgobj10LnZhbHVlT2YpJiYhayhvPW4uY2FsbCh0KSkpcmV0dXJuIG87dmFyIG8saT10LnRvU3RyaW5nO2lmKHgoaSkmJiFrKG89aS5jYWxsKHQpKSlyZXR1cm4gb310aHJvdyBuZXcgVHlwZUVycm9yfSh0LFwiZGVmYXVsdFwiPT09cj9cIm51bWJlclwiOnIpfWZ1bmN0aW9uIFModCl7dmFyIGU9RSh0LDMpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24odCl7cmV0dXJuXCJcIit0fShlKX1mdW5jdGlvbiBNKHQpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkodCk6dCBpbnN0YW5jZW9mIE9iamVjdD90IGluc3RhbmNlb2YgQXJyYXk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBQKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gQyh0LGUpe3ZhciByPXRbZV07aWYobnVsbCE9cil7aWYoIXgocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gcn19ZnVuY3Rpb24gQSh0KXt2YXIgZT10Lm5leHQoKTtyZXR1cm4hZS5kb25lJiZlfWZ1bmN0aW9uIFIodCl7dmFyIGU9dC5yZXR1cm47ZSYmZS5jYWxsKHQpfWZ1bmN0aW9uIEkodCl7dmFyIGU9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQ9PT1jKXJldHVybiBlO2lmKGUhPT1jKXJldHVybiBlO3ZhciByPXQucHJvdG90eXBlLG49ciYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2lmKG51bGw9PW58fG49PT1PYmplY3QucHJvdG90eXBlKXJldHVybiBlO3ZhciBvPW4uY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8bz09PXQ/ZTpvfWZ1bmN0aW9uIEgodCl7cmV0dXJuIHQuX189dm9pZCAwLGRlbGV0ZSB0Ll9fLHR9dChcImRlY29yYXRlXCIsKGZ1bmN0aW9uKHQsZSxyLG4pe2lmKGoocikpe2lmKCFNKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIVAoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5sZW5ndGgtMTtyPj0wOy0tcil7dmFyIG49KDAsdFtyXSkoZSk7aWYoIWoobikmJiFUKG4pKXtpZighUChuKSl0aHJvdyBuZXcgVHlwZUVycm9yO2U9bn19cmV0dXJuIGV9KHQsZSl9aWYoIU0odCkpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKCFrKG4pJiYhaihuKSYmIVQobikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gVChuKSYmKG49dm9pZCAwKSxmdW5jdGlvbih0LGUscixuKXtmb3IodmFyIG89dC5sZW5ndGgtMTtvPj0wOy0tbyl7dmFyIGk9KDAsdFtvXSkoZSxyLG4pO2lmKCFqKGkpJiYhVChpKSl7aWYoIWsoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtuPWl9fXJldHVybiBufSh0LGUscj1TKHIpLG4pfSkpLHQoXCJtZXRhZGF0YVwiLChmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe2lmKCFrKHIpKXRocm93IG5ldyBUeXBlRXJyb3I7aWYoIWoobikmJiFmdW5jdGlvbih0KXtzd2l0Y2goTyh0KSl7Y2FzZSAzOmNhc2UgNDpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX0obikpdGhyb3cgbmV3IFR5cGVFcnJvcjt3KHQsZSxyLG4pfX0pKSx0KFwiZGVmaW5lTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIsbil7aWYoIWsocikpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihuKXx8KG49UyhuKSksdyh0LGUscixuKX0pKSx0KFwiaGFzTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGQodCxlLHIpfSkpLHQoXCJoYXNPd25NZXRhZGF0YVwiLChmdW5jdGlvbih0LGUscil7aWYoIWsoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcjtyZXR1cm4gaihyKXx8KHI9UyhyKSksdih0LGUscil9KSksdChcImdldE1ldGFkYXRhXCIsKGZ1bmN0aW9uKHQsZSxyKXtpZighayhlKSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKHIpfHwocj1TKHIpKSxfKHQsZSxyKX0pKSx0KFwiZ2V0T3duTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGoocil8fChyPVMocikpLGcodCxlLHIpfSkpLHQoXCJnZXRNZXRhZGF0YUtleXNcIiwoZnVuY3Rpb24odCxlKXtpZighayh0KSl0aHJvdyBuZXcgVHlwZUVycm9yO3JldHVybiBqKGUpfHwoZT1TKGUpKSxiKHQsZSl9KSksdChcImdldE93bk1ldGFkYXRhS2V5c1wiLChmdW5jdGlvbih0LGUpe2lmKCFrKHQpKXRocm93IG5ldyBUeXBlRXJyb3I7cmV0dXJuIGooZSl8fChlPVMoZSkpLG0odCxlKX0pKSx0KFwiZGVsZXRlTWV0YWRhdGFcIiwoZnVuY3Rpb24odCxlLHIpe2lmKCFrKGUpKXRocm93IG5ldyBUeXBlRXJyb3I7aihyKXx8KHI9UyhyKSk7dmFyIG49eShlLHIsITEpO2lmKGoobikpcmV0dXJuITE7aWYoIW4uZGVsZXRlKHQpKXJldHVybiExO2lmKG4uc2l6ZT4wKXJldHVybiEwO3ZhciBvPWwuZ2V0KGUpO3JldHVybiBvLmRlbGV0ZShyKSxvLnNpemU+MHx8bC5kZWxldGUoZSksITB9KSl9KG8pfSgpfShufHwobj17fSkpfX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIuZz1mdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzKXJldHVybiBnbG9iYWxUaGlzO3RyeXtyZXR1cm4gdGhpc3x8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3d9fSgpLHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiBmdW5jdGlvbihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXIucihuKSxyLmQobix7Q3VzdG9tQ29tcG9uZW50OigpPT5jLE9CU0VSVkVEX1BST1BFUlRJRVM6KCk9PmksY3VzdG9tQ29tcG9uZW50OigpPT50LHByb3BlcnR5OigpPT51LHF1ZXJ5OigpPT5zLHN0YXRlOigpPT5hfSkscig2NjApO2NvbnN0IGU9bmV3IGNsYXNze2Zyb20odCxlKXtpZih0KXN3aXRjaChlLm5hbWUpe2Nhc2VcIlN0cmluZ1wiOmNhc2VcIk51bWJlclwiOnJldHVybiBlKHQpO2Nhc2VcIkJvb2xlYW5cIjpyZXR1cm4gdCYmXCJ0cnVlXCI9PT10LnRvTG93ZXJDYXNlKCk7ZGVmYXVsdDpyZXR1cm4gSlNPTi5wYXJzZSh0KX19dG8odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/dCYmSlNPTi5zdHJpbmdpZnkodCk6dC50b1N0cmluZygpfX07Y2xhc3Mgb3t9Y29uc3QgaT1TeW1ib2woXCJvYnNlcnZlZF9wcm9wZXJ0aWVzXCIpO2Z1bmN0aW9uIHUodCl7cmV0dXJuIG51bGwhPXR8fCh0PW5ldyBvKSxmdW5jdGlvbihyLG4pe3ZhciBvLHUsYSxzO2NvbnN0IGM9YF8ke259YCxmPW51bGwhPT0obz10LmNvbnZlcnRlcikmJnZvaWQgMCE9PW8/bzplO2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4se2dldDpmdW5jdGlvbigpe2NvbnN0IHQ9UmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsdGhpcyxuKSxlPWYuZnJvbSh0aGlzW2NdLHQpO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbmV3IFByb3h5KHIse3NldDoocixuLG8pPT4ocltuXT1vLEFycmF5LmlzQXJyYXkobykmJlwibGVuZ3RoXCIhPT1ufHx0Lm5vdGlmeVN0YXRlSGFzQ2hhbmdlZChlLG8pLCEwKX0pfSh0aGlzLG4sZSk6ZX0sc2V0OmZ1bmN0aW9uKHQpe2NvbnN0IGU9dGhpc1tuXTtpZih0IT09ZSl7Y29uc3Qgcj1SZWZsZWN0LmdldE1ldGFkYXRhKFwiZGVzaWduOnR5cGVcIix0aGlzLG4pO3RoaXNbY109Zi50byh0LHIpLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sZSl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLG51bGw9PT0odT10LmF0dHJpYnV0ZSl8fHZvaWQgMD09PXV8fHUpe2NvbnN0IGU9ci5jb25zdHJ1Y3RvcixvPW51bGwhPT0oYT1SZWZsZWN0LmdldE1ldGFkYXRhKGksZSkpJiZ2b2lkIDAhPT1hP2E6e30sdT1udWxsIT09KHM9dC5hdHRyaWJ1dGUpJiZ2b2lkIDAhPT1zP3M6bixjPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxvKSx7W3UudG9TdHJpbmcoKV06bn0pO1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEoaSxjLGUpfX19ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2F0dHJpYnV0ZTohMX0pKX1mdW5jdGlvbiBzKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcih0KX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19Y2xhc3MgYyBleHRlbmRzIEhUTUxFbGVtZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7Y29uc3QgdD1SZWZsZWN0LmdldE1ldGFkYXRhKGksdGhpcyk7cmV0dXJuIHQ/T2JqZWN0LmtleXModCk6W119Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuX2NoYW5nZXM9bmV3IE1hcDtjb25zdCB0PXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsZSxyKXtjb25zdCBuPVJlZmxlY3QuZ2V0TWV0YWRhdGEoaSx0aGlzLmNvbnN0cnVjdG9yKVt0XSxvPXRoaXNbbl07dGhpc1tgXyR7bn1gXT1yLHRoaXMubm90aWZ5U3RhdGVIYXNDaGFuZ2VkKG4sbyl9c3RhdGVIYXNDaGFuZ2VkKHQpe31yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCB0PXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gdCBpbiBjLl90ZW1wbGF0ZXM/Yy5fdGVtcGxhdGVzW3RdOnRoaXMuY3JlYXRlVGVtcGxhdGUodCl9Y3JlYXRlVGVtcGxhdGUodCl7dmFyIGU7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIHIuaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGU9bi5zdHlsZXMpJiZ2b2lkIDAhPT1lP2U6XCJcIn08L3N0eWxlPmAsYy5fdGVtcGxhdGVzW3RdPXIscn1ub3RpZnlTdGF0ZUhhc0NoYW5nZWQodCxlKXtjbGVhclRpbWVvdXQodGhpcy5fY2hhbmdlRGVib3VuY2UpLHRoaXMuX2NoYW5nZURlYm91bmNlPXNldFRpbWVvdXQoKCgpPT57dGhpcy5zdGF0ZUhhc0NoYW5nZWQodGhpcy5fY2hhbmdlcyksdGhpcy5fY2hhbmdlcy5jbGVhcigpfSksNTApLHRoaXMuX2NoYW5nZXMuc2V0KHQsZSl9fWMuX3RlbXBsYXRlcz17fX0pKCksbn0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5GbHVlbnRDb21tYW5kQmFyPWUoKTp0LkZsdWVudENvbW1hbmRCYXI9ZSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIHQ9ezI2OTp0PT57dmFyIGU7c2VsZixlPSgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgdD17ZDooZSxuKT0+e2Zvcih2YXIgbyBpbiBuKXQubyhuLG8pJiYhdC5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0Om5bb119KX0sbzoodCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSkscjp0PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGU9e307ZnVuY3Rpb24gbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LGUpfX10LnIoZSksdC5kKGUse0N1c3RvbUNvbXBvbmVudDooKT0+byxjdXN0b21Db21wb25lbnQ6KCk9Pm59KTtjbGFzcyBvIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpO2NvbnN0IHQ9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IHQ9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiB0IGluIG8uX3RlbXBsYXRlcz9vLl90ZW1wbGF0ZXNbdF06dGhpcy5jcmVhdGVUZW1wbGF0ZSh0KX1jcmVhdGVUZW1wbGF0ZSh0KXt2YXIgZTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxpPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gbi5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oZT1pLnN0eWxlcykmJnZvaWQgMCE9PWU/ZTpcIlwifTwvc3R5bGU+YCxvLl90ZW1wbGF0ZXNbdF09bixufWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX19cmV0dXJuIG8uX3RlbXBsYXRlcz17fSxlfSkoKSx0LmV4cG9ydHM9ZSgpfSw0NDE6KHQsZSxuKT0+e3ZhciBvOyFmdW5jdGlvbihpLHIscyl7aWYoaSl7Zm9yKHZhciBhLGw9ezg6XCJiYWNrc3BhY2VcIiw5OlwidGFiXCIsMTM6XCJlbnRlclwiLDE2Olwic2hpZnRcIiwxNzpcImN0cmxcIiwxODpcImFsdFwiLDIwOlwiY2Fwc2xvY2tcIiwyNzpcImVzY1wiLDMyOlwic3BhY2VcIiwzMzpcInBhZ2V1cFwiLDM0OlwicGFnZWRvd25cIiwzNTpcImVuZFwiLDM2OlwiaG9tZVwiLDM3OlwibGVmdFwiLDM4OlwidXBcIiwzOTpcInJpZ2h0XCIsNDA6XCJkb3duXCIsNDU6XCJpbnNcIiw0NjpcImRlbFwiLDkxOlwibWV0YVwiLDkzOlwibWV0YVwiLDIyNDpcIm1ldGFcIn0sYz17MTA2OlwiKlwiLDEwNzpcIitcIiwxMDk6XCItXCIsMTEwOlwiLlwiLDExMTpcIi9cIiwxODY6XCI7XCIsMTg3OlwiPVwiLDE4ODpcIixcIiwxODk6XCItXCIsMTkwOlwiLlwiLDE5MTpcIi9cIiwxOTI6XCJgXCIsMjE5OlwiW1wiLDIyMDpcIlxcXFxcIiwyMjE6XCJdXCIsMjIyOlwiJ1wifSxkPXtcIn5cIjpcImBcIixcIiFcIjpcIjFcIixcIkBcIjpcIjJcIixcIiNcIjpcIjNcIiwkOlwiNFwiLFwiJVwiOlwiNVwiLFwiXlwiOlwiNlwiLFwiJlwiOlwiN1wiLFwiKlwiOlwiOFwiLFwiKFwiOlwiOVwiLFwiKVwiOlwiMFwiLF86XCItXCIsXCIrXCI6XCI9XCIsXCI6XCI6XCI7XCIsJ1wiJzpcIidcIixcIjxcIjpcIixcIixcIj5cIjpcIi5cIixcIj9cIjpcIi9cIixcInxcIjpcIlxcXFxcIn0sdT17b3B0aW9uOlwiYWx0XCIsY29tbWFuZDpcIm1ldGFcIixyZXR1cm46XCJlbnRlclwiLGVzY2FwZTpcImVzY1wiLHBsdXM6XCIrXCIsbW9kOi9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pP1wibWV0YVwiOlwiY3RybFwifSxtPTE7bTwyMDsrK20pbFsxMTErbV09XCJmXCIrbTtmb3IobT0wO208PTk7KyttKWxbbSs5Nl09bS50b1N0cmluZygpO3YucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXM7cmV0dXJuIHQ9dCBpbnN0YW5jZW9mIEFycmF5P3Q6W3RdLG8uX2JpbmRNdWx0aXBsZS5jYWxsKG8sdCxlLG4pLG99LHYucHJvdG90eXBlLnVuYmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmJpbmQuY2FsbCh0aGlzLHQsKGZ1bmN0aW9uKCl7fSksZSl9LHYucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiBuLl9kaXJlY3RNYXBbdCtcIjpcIitlXSYmbi5fZGlyZWN0TWFwW3QrXCI6XCIrZV0oe30sdCksbn0sdi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0Ll9jYWxsYmFja3M9e30sdC5fZGlyZWN0TWFwPXt9LHR9LHYucHJvdG90eXBlLnN0b3BDYWxsYmFjaz1mdW5jdGlvbih0LGUpe2lmKChcIiBcIitlLmNsYXNzTmFtZStcIiBcIikuaW5kZXhPZihcIiBtb3VzZXRyYXAgXCIpPi0xKXJldHVybiExO2lmKGcoZSx0aGlzLnRhcmdldCkpcmV0dXJuITE7aWYoXCJjb21wb3NlZFBhdGhcImluIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29tcG9zZWRQYXRoKXt2YXIgbj10LmNvbXBvc2VkUGF0aCgpWzBdO24hPT10LnRhcmdldCYmKGU9bil9cmV0dXJuXCJJTlBVVFwiPT1lLnRhZ05hbWV8fFwiU0VMRUNUXCI9PWUudGFnTmFtZXx8XCJURVhUQVJFQVwiPT1lLnRhZ05hbWV8fGUuaXNDb250ZW50RWRpdGFibGV9LHYucHJvdG90eXBlLmhhbmRsZUtleT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9oYW5kbGVLZXkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx2LmFkZEtleWNvZGVzPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0KXQuaGFzT3duUHJvcGVydHkoZSkmJihsW2VdPXRbZV0pO2E9bnVsbH0sdi5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dihyKTtmb3IodmFyIGUgaW4gdClcIl9cIiE9PWUuY2hhckF0KDApJiYodltlXT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdFtlXS5hcHBseSh0LGFyZ3VtZW50cyl9fShlKSl9LHYuaW5pdCgpLGkuTW91c2V0cmFwPXYsdC5leHBvcnRzJiYodC5leHBvcnRzPXYpLHZvaWQgMD09PShvPWZ1bmN0aW9uKCl7cmV0dXJuIHZ9LmNhbGwoZSxuLGUsdCkpfHwodC5leHBvcnRzPW8pfWZ1bmN0aW9uIGgodCxlLG4pe3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoZSxuLCExKTp0LmF0dGFjaEV2ZW50KFwib25cIitlLG4pfWZ1bmN0aW9uIHAodCl7aWYoXCJrZXlwcmVzc1wiPT10LnR5cGUpe3ZhciBlPVN0cmluZy5mcm9tQ2hhckNvZGUodC53aGljaCk7cmV0dXJuIHQuc2hpZnRLZXl8fChlPWUudG9Mb3dlckNhc2UoKSksZX1yZXR1cm4gbFt0LndoaWNoXT9sW3Qud2hpY2hdOmNbdC53aGljaF0/Y1t0LndoaWNoXTpTdHJpbmcuZnJvbUNoYXJDb2RlKHQud2hpY2gpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZih0KXtyZXR1cm5cInNoaWZ0XCI9PXR8fFwiY3RybFwiPT10fHxcImFsdFwiPT10fHxcIm1ldGFcIj09dH1mdW5jdGlvbiB5KHQsZSxuKXtyZXR1cm4gbnx8KG49ZnVuY3Rpb24oKXtpZighYSlmb3IodmFyIHQgaW4gYT17fSxsKXQ+OTUmJnQ8MTEyfHxsLmhhc093blByb3BlcnR5KHQpJiYoYVtsW3RdXT10KTtyZXR1cm4gYX0oKVt0XT9cImtleWRvd25cIjpcImtleXByZXNzXCIpLFwia2V5cHJlc3NcIj09biYmZS5sZW5ndGgmJihuPVwia2V5ZG93blwiKSxufWZ1bmN0aW9uIGIodCxlKXt2YXIgbixvLGkscj1bXTtmb3Iobj1mdW5jdGlvbih0KXtyZXR1cm5cIitcIj09PXQ/W1wiK1wiXToodD10LnJlcGxhY2UoL1xcK3syfS9nLFwiK3BsdXNcIikpLnNwbGl0KFwiK1wiKX0odCksaT0wO2k8bi5sZW5ndGg7KytpKW89bltpXSx1W29dJiYobz11W29dKSxlJiZcImtleXByZXNzXCIhPWUmJmRbb10mJihvPWRbb10sci5wdXNoKFwic2hpZnRcIikpLGYobykmJnIucHVzaChvKTtyZXR1cm57a2V5Om8sbW9kaWZpZXJzOnIsYWN0aW9uOmU9eShvLHIsZSl9fWZ1bmN0aW9uIGcodCxlKXtyZXR1cm4gbnVsbCE9PXQmJnQhPT1yJiYodD09PWV8fGcodC5wYXJlbnROb2RlLGUpKX1mdW5jdGlvbiB2KHQpe3ZhciBlPXRoaXM7aWYodD10fHxyLCEoZSBpbnN0YW5jZW9mIHYpKXJldHVybiBuZXcgdih0KTtlLnRhcmdldD10LGUuX2NhbGxiYWNrcz17fSxlLl9kaXJlY3RNYXA9e307dmFyIG4sbz17fSxpPSExLHM9ITEsYT0hMTtmdW5jdGlvbiBsKHQpe3Q9dHx8e307dmFyIGUsbj0hMTtmb3IoZSBpbiBvKXRbZV0/bj0hMDpvW2VdPTA7bnx8KGE9ITEpfWZ1bmN0aW9uIGModCxuLGkscixzLGEpe3ZhciBsLGMsZCx1LG09W10saD1pLnR5cGU7aWYoIWUuX2NhbGxiYWNrc1t0XSlyZXR1cm5bXTtmb3IoXCJrZXl1cFwiPT1oJiZmKHQpJiYobj1bdF0pLGw9MDtsPGUuX2NhbGxiYWNrc1t0XS5sZW5ndGg7KytsKWlmKGM9ZS5fY2FsbGJhY2tzW3RdW2xdLChyfHwhYy5zZXF8fG9bYy5zZXFdPT1jLmxldmVsKSYmaD09Yy5hY3Rpb24mJihcImtleXByZXNzXCI9PWgmJiFpLm1ldGFLZXkmJiFpLmN0cmxLZXl8fChkPW4sdT1jLm1vZGlmaWVycyxkLnNvcnQoKS5qb2luKFwiLFwiKT09PXUuc29ydCgpLmpvaW4oXCIsXCIpKSkpe3ZhciBwPSFyJiZjLmNvbWJvPT1zLHk9ciYmYy5zZXE9PXImJmMubGV2ZWw9PWE7KHB8fHkpJiZlLl9jYWxsYmFja3NbdF0uc3BsaWNlKGwsMSksbS5wdXNoKGMpfXJldHVybiBtfWZ1bmN0aW9uIGQodCxuLG8saSl7ZS5zdG9wQ2FsbGJhY2sobixuLnRhcmdldHx8bi5zcmNFbGVtZW50LG8saSl8fCExPT09dChuLG8pJiYoZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdD90LnByZXZlbnREZWZhdWx0KCk6dC5yZXR1cm5WYWx1ZT0hMX0obiksZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24/dC5zdG9wUHJvcGFnYXRpb24oKTp0LmNhbmNlbEJ1YmJsZT0hMH0obikpfWZ1bmN0aW9uIHUodCl7XCJudW1iZXJcIiE9dHlwZW9mIHQud2hpY2gmJih0LndoaWNoPXQua2V5Q29kZSk7dmFyIG49cCh0KTtuJiYoXCJrZXl1cFwiIT10LnR5cGV8fGkhPT1uP2UuaGFuZGxlS2V5KG4sZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIHQuc2hpZnRLZXkmJmUucHVzaChcInNoaWZ0XCIpLHQuYWx0S2V5JiZlLnB1c2goXCJhbHRcIiksdC5jdHJsS2V5JiZlLnB1c2goXCJjdHJsXCIpLHQubWV0YUtleSYmZS5wdXNoKFwibWV0YVwiKSxlfSh0KSx0KTppPSExKX1mdW5jdGlvbiBtKHQscixzLHUsaCl7ZS5fZGlyZWN0TWFwW3QrXCI6XCIrc109cjt2YXIgZix5PSh0PXQucmVwbGFjZSgvXFxzKy9nLFwiIFwiKSkuc3BsaXQoXCIgXCIpO3kubGVuZ3RoPjE/ZnVuY3Rpb24odCxlLHIscyl7ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZnVuY3Rpb24oKXthPWUsKytvW3RdLGNsZWFyVGltZW91dChuKSxuPXNldFRpbWVvdXQobCwxZTMpfX1mdW5jdGlvbiB1KGUpe2QocixlLHQpLFwia2V5dXBcIiE9PXMmJihpPXAoZSkpLHNldFRpbWVvdXQobCwxMCl9b1t0XT0wO2Zvcih2YXIgaD0wO2g8ZS5sZW5ndGg7KytoKXt2YXIgZj1oKzE9PT1lLmxlbmd0aD91OmMoc3x8YihlW2grMV0pLmFjdGlvbik7bShlW2hdLGYscyx0LGgpfX0odCx5LHIscyk6KGY9Yih0LHMpLGUuX2NhbGxiYWNrc1tmLmtleV09ZS5fY2FsbGJhY2tzW2Yua2V5XXx8W10sYyhmLmtleSxmLm1vZGlmaWVycyx7dHlwZTpmLmFjdGlvbn0sdSx0LGgpLGUuX2NhbGxiYWNrc1tmLmtleV1bdT9cInVuc2hpZnRcIjpcInB1c2hcIl0oe2NhbGxiYWNrOnIsbW9kaWZpZXJzOmYubW9kaWZpZXJzLGFjdGlvbjpmLmFjdGlvbixzZXE6dSxsZXZlbDpoLGNvbWJvOnR9KSl9ZS5faGFuZGxlS2V5PWZ1bmN0aW9uKHQsZSxuKXt2YXIgbyxpPWModCxlLG4pLHI9e30sdT0wLG09ITE7Zm9yKG89MDtvPGkubGVuZ3RoOysrbylpW29dLnNlcSYmKHU9TWF0aC5tYXgodSxpW29dLmxldmVsKSk7Zm9yKG89MDtvPGkubGVuZ3RoOysrbylpZihpW29dLnNlcSl7aWYoaVtvXS5sZXZlbCE9dSljb250aW51ZTttPSEwLHJbaVtvXS5zZXFdPTEsZChpW29dLmNhbGxiYWNrLG4saVtvXS5jb21ibyxpW29dLnNlcSl9ZWxzZSBtfHxkKGlbb10uY2FsbGJhY2ssbixpW29dLmNvbWJvKTt2YXIgaD1cImtleXByZXNzXCI9PW4udHlwZSYmcztuLnR5cGUhPWF8fGYodCl8fGh8fGwocikscz1tJiZcImtleWRvd25cIj09bi50eXBlfSxlLl9iaW5kTXVsdGlwbGU9ZnVuY3Rpb24odCxlLG4pe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7KytvKW0odFtvXSxlLG4pfSxoKHQsXCJrZXlwcmVzc1wiLHUpLGgodCxcImtleWRvd25cIix1KSxoKHQsXCJrZXl1cFwiLHUpfX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6bnVsbCxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P2RvY3VtZW50Om51bGwpfX0sZT17fTtmdW5jdGlvbiBuKG8pe3ZhciBpPWVbb107aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbb109e2V4cG9ydHM6e319O3JldHVybiB0W29dKHIsci5leHBvcnRzLG4pLHIuZXhwb3J0c31uLm49dD0+e3ZhciBlPXQmJnQuX19lc01vZHVsZT8oKT0+dC5kZWZhdWx0OigpPT50O3JldHVybiBuLmQoZSx7YTplfSksZX0sbi5kPSh0LGUpPT57Zm9yKHZhciBvIGluIGUpbi5vKGUsbykmJiFuLm8odCxvKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyx7ZW51bWVyYWJsZTohMCxnZXQ6ZVtvXX0pfSxuLm89KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLG4ucj10PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG89e307cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7bi5yKG8pLG4uZChvLHtGbHVlbnRBcHBCYXJCdXR0b246KCk9PnIsRmx1ZW50QXBwQmFyU2VwYXJhdG9yOigpPT5ydCxGbHVlbnRDb21tYW5kQmFyOigpPT5pdH0pO3ZhciB0PW4oMjY5KSxlPW4oNDQxKSxpPW4ubihlKTtsZXQgcj1jbGFzcyBleHRlbmRzIHQuQ3VzdG9tQ29tcG9uZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiaWNvblwiLFwibGFiZWxcIixcIm1vZGlmaWVyXCIsXCJrZXlcIixcInVzZS1hY2NlbnRcIl19Z2V0IGljb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJpY29uXCIpfXNldCBpY29uKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiaWNvblwiLHQpLHRoaXMuc2V0SWNvbigpfWdldCBsYWJlbCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfXNldCBsYWJlbCh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsdCksdGhpcy5zZXRMYWJlbCgpfWdldCBjb21tYW5kKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY29tbWFuZFwiKX1zZXQgY29tbWFuZCh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImNvbW1hbmRcIix0KX1nZXQgbW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJtb2RpZmllclwiKX1zZXQgbW9kaWZpZXIodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJtb2RpZmllclwiLHQpLHRoaXMuc2V0QWNjZWxlcmF0b3IoKX1nZXQga2V5KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwia2V5XCIpfXNldCBrZXkodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJrZXlcIix0KSx0aGlzLnNldEFjY2VsZXJhdG9yKCl9Z2V0IHVzZUFjY2VudCgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInVzZS1hY2NlbnRcIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwidXNlLWFjY2VudFwiKX1zZXQgdXNlQWNjZW50KHQpe3RoaXMudG9nZ2xlQXR0cmlidXRlKFwidXNlLWFjY2VudFwiLHQpLHRoaXMuc2V0SWNvbigpfWdldCB0aXRsZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfXNldCB0aXRsZSh0KXt0aGlzLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdCksdGhpcy5zZXRUaXRsZSgpfWdldCBkaXNhYmxlZCgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpfWdldCBidXR0b24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2J1dHRvbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9idXR0b249dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpKSx0aGlzLl9idXR0b259Z2V0IGljb25TcGFuKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9pY29uU3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9pY29uU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpKSx0aGlzLl9pY29uU3Bhbn1nZXQgY3VzdG9tSWNvblNsb3QoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2N1c3RvbUljb25TcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2N1c3RvbUljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPWljb25dXCIpKSx0aGlzLl9jdXN0b21JY29uU3Bhbn1nZXQgY29udGVudFNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbnRlbnRTcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbnRlbnRTcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikpLHRoaXMuX2NvbnRlbnRTcGFufWdldCBhY2NlbGVyYXRvclNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2FjY2VsZXJhdG9yU3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9hY2NlbGVyYXRvclNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIua2V5Ym9hcmQtYWNjZWxlcmF0b3JcIikpLHRoaXMuX2FjY2VsZXJhdG9yU3Bhbn1nZXQgZm9ybWF0dGVkTW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5tb2RpZmllci5yZXBsYWNlKFwiQ29udHJvbFwiLFwiQ3RybFwiKX1nZXQgZm9ybWF0dGVkQWNjZWxlcmF0b3IoKXtyZXR1cm4gdGhpcy5tb2RpZmllcj90aGlzLmZvcm1hdHRlZE1vZGlmaWVyK1wiK1wiK3RoaXMua2V5OnRoaXMua2V5fWdldCBzdXBwb3J0ZWRNb2RpZmllcigpe3JldHVybiB0aGlzLm1vZGlmaWVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcImNvbnRyb2xcIixcIm1vZFwiKX1nZXQgc3VwcG9ydGVkS2V5KCl7cmV0dXJuIHRoaXMua2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZShcImRlbGV0ZVwiLFwiZGVsXCIpLnJlcGxhY2UoXCIrXCIsXCI9XCIpLnJlcGxhY2UoXCJlc2NhcGVcIixcImVzY1wiKX1yZW5kZXIoKXtyZXR1cm5cIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2J1dHRvbic+XFxuICAgICAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24gY2xhc3M9J2ljb24nPjwvZmx1ZW50LXN5bWJvbC1pY29uPlxcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPSdpY29uJz48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb250ZW50Jz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdrZXlib2FyZC1hY2NlbGVyYXRvcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCJ9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldEljb24oKSx0aGlzLnNldExhYmVsKCksdGhpcy5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiMFwiKSx0aGlzLmN1c3RvbUljb25TbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsKHQ9Pntjb25zdCBlPXRoaXMuY3VzdG9tSWNvblNsb3QuYXNzaWduZWROb2RlcygpLG49ZS5sZW5ndGg+MDt0aGlzLmljb25TcGFuLnN0eWxlLmRpc3BsYXk9bj9cIm5vbmVcIjpcImlubGluZS1ibG9ja1wiLHRoaXMuY3VzdG9tSWNvblNsb3Quc3R5bGUuZGlzcGxheT1uP1wiZGVmYXVsdFwiOlwibm9uZVwiLGUuZm9yRWFjaCgodD0+e3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKHQ9Pnt0aGlzLmNsaWNrKCksdC5zdG9wUHJvcGFnYXRpb24oKX0pKX0pKX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCl7c3dpdGNoKHQpe2Nhc2VcImxhYmVsXCI6dGhpcy5zZXRMYWJlbCgpO2JyZWFrO2Nhc2VcImljb25cIjpjYXNlXCJ1c2UtYWNjZW50XCI6dGhpcy5zZXRJY29uKCk7YnJlYWs7Y2FzZVwibW9kaWZpZXJcIjpjYXNlXCJrZXlcIjp0aGlzLnNldEFjY2VsZXJhdG9yKCl9fXNldEljb24oKXt2YXIgdDt0aGlzLmljb25TcGFuLnNldEF0dHJpYnV0ZShcInN5bWJvbFwiLG51bGwhPT0odD10aGlzLmljb24pJiZ2b2lkIDAhPT10P3Q6XCJcIiksdGhpcy5pY29uU3Bhbi50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsdGhpcy51c2VBY2NlbnQpfXNldExhYmVsKCl7dGhpcy5jb250ZW50U3Bhbi50ZXh0Q29udGVudD10aGlzLmxhYmVsLHRoaXMuc2V0VGl0bGUoKX1zZXRBY2NlbGVyYXRvcigpe3ZhciB0O2lmKHRoaXMua2V5KXt0aGlzLmFjY2VsZXJhdG9yU3Bhbi50ZXh0Q29udGVudD1udWxsIT09KHQ9dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcikmJnZvaWQgMCE9PXQ/dDpcIlwiLHRoaXMuc2V0VGl0bGUoKTt2YXIgZT10aGlzLm1vZGlmaWVyP3RoaXMuc3VwcG9ydGVkTW9kaWZpZXIrXCIrXCIrdGhpcy5zdXBwb3J0ZWRLZXk6dGhpcy5zdXBwb3J0ZWRLZXk7aSgpLmJpbmQoZSwoKCk9Pih0aGlzLmRpc2FibGVkfHwodGhpcy5jbGljaygpLHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZva2VkXCIpLHNldFRpbWVvdXQoKCgpPT50aGlzLmJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52b2tlZFwiKSksMTUwKSksITEpKSl9fXNldFRpdGxlKCl7dmFyIHQsZTtjb25zdCBuPXRoaXMuZm9ybWF0dGVkQWNjZWxlcmF0b3I/YCgke3RoaXMuZm9ybWF0dGVkQWNjZWxlcmF0b3J9KWA6XCJcIjtsZXQgbz1udWxsIT09KGU9bnVsbCE9PSh0PXRoaXMudGl0bGUpJiZ2b2lkIDAhPT10P3Q6dGhpcy5sYWJlbCkmJnZvaWQgMCE9PWU/ZTpcIlwiO3RoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsYCR7b30gJHtufWApfXNldEFjY2VsZXJhdG9yV2lkdGgodCl7dGhpcy5hY2NlbGVyYXRvclNwYW4uc3R5bGUud2lkdGg9dCtcInB4XCJ9fTtyLnN0eWxlcz0nXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6ICMwMDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaXMtc2Vjb25kYXJ5XSkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQnV0dG9uICovXFxuICAgICAgICAuYnV0dG9uIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtcHJpbWFyeSk7XFxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLmJ1dHRvbjphY3RpdmUsXFxuICAgICAgICAuYnV0dG9uLmludm9rZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXRlcnRpYXJ5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS1zZWNvbmRhcnkpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5idXR0b24ge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXVtpcy1zZWNvbmRhcnldKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Ym90dG9tXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPWNvbGxhcHNlZF06bm90KFtpcy1zZWNvbmRhcnldKSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnV0dG9uOmFjdGl2ZSAuaWNvblt1c2UtYWNjZW50XTo6cGFydChpY29uKSxcXG4gICAgICAgIC5idXR0b24uaW52b2tlZCAuaWNvblt1c2UtYWNjZW50XTo6cGFydChpY29uKSB7XFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWxsLWFjY2VudC1kZWZhdWx0KSwgdHJhbnNwYXJlbnQgMTAlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5pY29uOjpwYXJ0KGljb24pIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LWRpc2FibGVkKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEN1c3RvbSBpY29uICovXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoZmx1ZW50LWltYWdlLWljb24pIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ5O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAvKiBDb250ZW50ICovXFxuICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXCdTZWdvZSBVSSBWYXJpYWJsZVxcJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMCwgXCJvcHN6XCIgMTY7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OmVtcHR5LFxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Y29sbGFwc2VkXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSAuY29udGVudCB7XFxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMCwgXCJvcHN6XCIgMjA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YmVmb3JlLFxcbiAgICAgICAgLmNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiBcXCdcXCc7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6OmJlZm9yZXtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6OmFmdGVye1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC00cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBLZXlib2FyZCBhY2NlbGVyYXRvciAqL1xcbiAgICAgICAgLmtleWJvYXJkLWFjY2VsZXJhdG9yIHtcXG4gICAgICAgICAgICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KSwgdHJhbnNwYXJlbnQgNDAlKTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXCdTZWdvZSBVSSBWYXJpYWJsZSBTbWFsbFxcJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaXMtc2Vjb25kYXJ5XSkgLmtleWJvYXJkLWFjY2VsZXJhdG9yIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpICFpbXBvcnRhbnQ7XFxuICAgICAgICB9XFxuICAgICcscj1mdW5jdGlvbih0LGUsbixvKXt2YXIgaSxyPWFyZ3VtZW50cy5sZW5ndGgscz1yPDM/ZTpudWxsPT09bz9vPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTpvO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsbixvKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xO2E+PTA7YS0tKShpPXRbYV0pJiYocz0ocjwzP2kocyk6cj4zP2koZSxuLHMpOmkoZSxuKSl8fHMpO3JldHVybiByPjMmJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4scyksc30oWygwLHQuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1hcHAtYmFyLWJ1dHRvblwiKV0scik7Y29uc3Qgcz1NYXRoLm1pbixhPU1hdGgubWF4LGw9TWF0aC5yb3VuZCxjPU1hdGguZmxvb3IsZD10PT4oe3g6dCx5OnR9KSx1PXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIixib3R0b206XCJ0b3BcIix0b3A6XCJib3R0b21cIn0sbT17c3RhcnQ6XCJlbmRcIixlbmQ6XCJzdGFydFwifTtmdW5jdGlvbiBoKHQsZSxuKXtyZXR1cm4gYSh0LHMoZSxuKSl9ZnVuY3Rpb24gcCh0LGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChlKTp0fWZ1bmN0aW9uIGYodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzBdfWZ1bmN0aW9uIHkodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzFdfWZ1bmN0aW9uIGIodCl7cmV0dXJuXCJ4XCI9PT10P1wieVwiOlwieFwifWZ1bmN0aW9uIGcodCl7cmV0dXJuXCJ5XCI9PT10P1wiaGVpZ2h0XCI6XCJ3aWR0aFwifWZ1bmN0aW9uIHYodCl7cmV0dXJuW1widG9wXCIsXCJib3R0b21cIl0uaW5jbHVkZXMoZih0KSk/XCJ5XCI6XCJ4XCJ9ZnVuY3Rpb24geCh0KXtyZXR1cm4gYih2KHQpKX1mdW5jdGlvbiB3KHQpe3JldHVybiB0LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCh0PT5tW3RdKSl9ZnVuY3Rpb24gQyh0KXtyZXR1cm4gdC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywodD0+dVt0XSkpfWZ1bmN0aW9uIEEodCl7cmV0dXJuey4uLnQsdG9wOnQueSxsZWZ0OnQueCxyaWdodDp0LngrdC53aWR0aCxib3R0b206dC55K3QuaGVpZ2h0fX1mdW5jdGlvbiBrKHQsZSxuKXtsZXR7cmVmZXJlbmNlOm8sZmxvYXRpbmc6aX09dDtjb25zdCByPXYoZSkscz14KGUpLGE9ZyhzKSxsPWYoZSksYz1cInlcIj09PXIsZD1vLngrby53aWR0aC8yLWkud2lkdGgvMix1PW8ueStvLmhlaWdodC8yLWkuaGVpZ2h0LzIsbT1vW2FdLzItaVthXS8yO2xldCBoO3N3aXRjaChsKXtjYXNlXCJ0b3BcIjpoPXt4OmQseTpvLnktaS5oZWlnaHR9O2JyZWFrO2Nhc2VcImJvdHRvbVwiOmg9e3g6ZCx5Om8ueStvLmhlaWdodH07YnJlYWs7Y2FzZVwicmlnaHRcIjpoPXt4Om8ueCtvLndpZHRoLHk6dX07YnJlYWs7Y2FzZVwibGVmdFwiOmg9e3g6by54LWkud2lkdGgseTp1fTticmVhaztkZWZhdWx0Omg9e3g6by54LHk6by55fX1zd2l0Y2goeShlKSl7Y2FzZVwic3RhcnRcIjpoW3NdLT1tKihuJiZjPy0xOjEpO2JyZWFrO2Nhc2VcImVuZFwiOmhbc10rPW0qKG4mJmM/LTE6MSl9cmV0dXJuIGh9YXN5bmMgZnVuY3Rpb24gUyh0LGUpe3ZhciBuO3ZvaWQgMD09PWUmJihlPXt9KTtjb25zdHt4Om8seTppLHBsYXRmb3JtOnIscmVjdHM6cyxlbGVtZW50czphLHN0cmF0ZWd5Omx9PXQse2JvdW5kYXJ5OmM9XCJjbGlwcGluZ0FuY2VzdG9yc1wiLHJvb3RCb3VuZGFyeTpkPVwidmlld3BvcnRcIixlbGVtZW50Q29udGV4dDp1PVwiZmxvYXRpbmdcIixhbHRCb3VuZGFyeTptPSExLHBhZGRpbmc6aD0wfT1wKGUsdCksZj1mdW5jdGlvbih0KXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgdD9mdW5jdGlvbih0KXtyZXR1cm57dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjAsLi4udH19KHQpOnt0b3A6dCxyaWdodDp0LGJvdHRvbTp0LGxlZnQ6dH19KGgpLHk9YVttP1wiZmxvYXRpbmdcIj09PXU/XCJyZWZlcmVuY2VcIjpcImZsb2F0aW5nXCI6dV0sYj1BKGF3YWl0IHIuZ2V0Q2xpcHBpbmdSZWN0KHtlbGVtZW50Om51bGw9PShuPWF3YWl0KG51bGw9PXIuaXNFbGVtZW50P3ZvaWQgMDpyLmlzRWxlbWVudCh5KSkpfHxuP3k6eS5jb250ZXh0RWxlbWVudHx8YXdhaXQobnVsbD09ci5nZXREb2N1bWVudEVsZW1lbnQ/dm9pZCAwOnIuZ2V0RG9jdW1lbnRFbGVtZW50KGEuZmxvYXRpbmcpKSxib3VuZGFyeTpjLHJvb3RCb3VuZGFyeTpkLHN0cmF0ZWd5Omx9KSksZz1cImZsb2F0aW5nXCI9PT11P3suLi5zLmZsb2F0aW5nLHg6byx5Oml9OnMucmVmZXJlbmNlLHY9YXdhaXQobnVsbD09ci5nZXRPZmZzZXRQYXJlbnQ/dm9pZCAwOnIuZ2V0T2Zmc2V0UGFyZW50KGEuZmxvYXRpbmcpKSx4PWF3YWl0KG51bGw9PXIuaXNFbGVtZW50P3ZvaWQgMDpyLmlzRWxlbWVudCh2KSkmJmF3YWl0KG51bGw9PXIuZ2V0U2NhbGU/dm9pZCAwOnIuZ2V0U2NhbGUodikpfHx7eDoxLHk6MX0sdz1BKHIuY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Q/YXdhaXQgci5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7cmVjdDpnLG9mZnNldFBhcmVudDp2LHN0cmF0ZWd5Omx9KTpnKTtyZXR1cm57dG9wOihiLnRvcC13LnRvcCtmLnRvcCkveC55LGJvdHRvbToody5ib3R0b20tYi5ib3R0b20rZi5ib3R0b20pL3gueSxsZWZ0OihiLmxlZnQtdy5sZWZ0K2YubGVmdCkveC54LHJpZ2h0Oih3LnJpZ2h0LWIucmlnaHQrZi5yaWdodCkveC54fX1jb25zdCBSPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD17fSkse25hbWU6XCJmbGlwXCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe3ZhciBuO2NvbnN0e3BsYWNlbWVudDpvLG1pZGRsZXdhcmVEYXRhOmkscmVjdHM6cixpbml0aWFsUGxhY2VtZW50OnMscGxhdGZvcm06YSxlbGVtZW50czpsfT1lLHttYWluQXhpczpjPSEwLGNyb3NzQXhpczpkPSEwLGZhbGxiYWNrUGxhY2VtZW50czp1LGZhbGxiYWNrU3RyYXRlZ3k6bT1cImJlc3RGaXRcIixmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uOmg9XCJub25lXCIsZmxpcEFsaWdubWVudDpiPSEwLC4uLnZ9PXAodCxlKSxBPWYobyksaz1mKHMpPT09cyxSPWF3YWl0KG51bGw9PWEuaXNSVEw/dm9pZCAwOmEuaXNSVEwobC5mbG9hdGluZykpLEU9dXx8KGt8fCFiP1tDKHMpXTpmdW5jdGlvbih0KXtjb25zdCBlPUModCk7cmV0dXJuW3codCksZSx3KGUpXX0ocykpO3V8fFwibm9uZVwiPT09aHx8RS5wdXNoKC4uLmZ1bmN0aW9uKHQsZSxuLG8pe2NvbnN0IGk9eSh0KTtsZXQgcj1mdW5jdGlvbih0LGUsbil7Y29uc3Qgbz1bXCJsZWZ0XCIsXCJyaWdodFwiXSxpPVtcInJpZ2h0XCIsXCJsZWZ0XCJdLHI9W1widG9wXCIsXCJib3R0b21cIl0scz1bXCJib3R0b21cIixcInRvcFwiXTtzd2l0Y2godCl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6cmV0dXJuIG4/ZT9pOm86ZT9vOmk7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6cmV0dXJuIGU/cjpzO2RlZmF1bHQ6cmV0dXJuW119fShmKHQpLFwic3RhcnRcIj09PW4sbyk7cmV0dXJuIGkmJihyPXIubWFwKCh0PT50K1wiLVwiK2kpKSxlJiYocj1yLmNvbmNhdChyLm1hcCh3KSkpKSxyfShzLGIsaCxSKSk7Y29uc3QgXz1bcywuLi5FXSxMPWF3YWl0IFMoZSx2KSxQPVtdO2xldCBUPShudWxsPT0obj1pLmZsaXApP3ZvaWQgMDpuLm92ZXJmbG93cyl8fFtdO2lmKGMmJlAucHVzaChMW0FdKSxkKXtjb25zdCB0PWZ1bmN0aW9uKHQsZSxuKXt2b2lkIDA9PT1uJiYobj0hMSk7Y29uc3Qgbz15KHQpLGk9eCh0KSxyPWcoaSk7bGV0IHM9XCJ4XCI9PT1pP289PT0obj9cImVuZFwiOlwic3RhcnRcIik/XCJyaWdodFwiOlwibGVmdFwiOlwic3RhcnRcIj09PW8/XCJib3R0b21cIjpcInRvcFwiO3JldHVybiBlLnJlZmVyZW5jZVtyXT5lLmZsb2F0aW5nW3JdJiYocz1DKHMpKSxbcyxDKHMpXX0obyxyLFIpO1AucHVzaChMW3RbMF1dLExbdFsxXV0pfWlmKFQ9Wy4uLlQse3BsYWNlbWVudDpvLG92ZXJmbG93czpQfV0sIVAuZXZlcnkoKHQ9PnQ8PTApKSl7dmFyIE8sTTtjb25zdCB0PSgobnVsbD09KE89aS5mbGlwKT92b2lkIDA6Ty5pbmRleCl8fDApKzEsZT1fW3RdO2lmKGUpcmV0dXJue2RhdGE6e2luZGV4OnQsb3ZlcmZsb3dzOlR9LHJlc2V0OntwbGFjZW1lbnQ6ZX19O2xldCBuPW51bGw9PShNPVQuZmlsdGVyKCh0PT50Lm92ZXJmbG93c1swXTw9MCkpLnNvcnQoKCh0LGUpPT50Lm92ZXJmbG93c1sxXS1lLm92ZXJmbG93c1sxXSkpWzBdKT92b2lkIDA6TS5wbGFjZW1lbnQ7aWYoIW4pc3dpdGNoKG0pe2Nhc2VcImJlc3RGaXRcIjp7dmFyIEI7Y29uc3QgdD1udWxsPT0oQj1ULm1hcCgodD0+W3QucGxhY2VtZW50LHQub3ZlcmZsb3dzLmZpbHRlcigodD0+dD4wKSkucmVkdWNlKCgodCxlKT0+dCtlKSwwKV0pKS5zb3J0KCgodCxlKT0+dFsxXS1lWzFdKSlbMF0pP3ZvaWQgMDpCWzBdO3QmJihuPXQpO2JyZWFrfWNhc2VcImluaXRpYWxQbGFjZW1lbnRcIjpuPXN9aWYobyE9PW4pcmV0dXJue3Jlc2V0OntwbGFjZW1lbnQ6bn19fXJldHVybnt9fX19LEU9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLHtuYW1lOlwib2Zmc2V0XCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe2NvbnN0e3g6bix5Om99PWUsaT1hd2FpdCBhc3luYyBmdW5jdGlvbih0LGUpe2NvbnN0e3BsYWNlbWVudDpuLHBsYXRmb3JtOm8sZWxlbWVudHM6aX09dCxyPWF3YWl0KG51bGw9PW8uaXNSVEw/dm9pZCAwOm8uaXNSVEwoaS5mbG9hdGluZykpLHM9ZihuKSxhPXkobiksbD1cInlcIj09PXYobiksYz1bXCJsZWZ0XCIsXCJ0b3BcIl0uaW5jbHVkZXMocyk/LTE6MSxkPXImJmw/LTE6MSx1PXAoZSx0KTtsZXR7bWFpbkF4aXM6bSxjcm9zc0F4aXM6aCxhbGlnbm1lbnRBeGlzOmJ9PVwibnVtYmVyXCI9PXR5cGVvZiB1P3ttYWluQXhpczp1LGNyb3NzQXhpczowLGFsaWdubWVudEF4aXM6bnVsbH06e21haW5BeGlzOjAsY3Jvc3NBeGlzOjAsYWxpZ25tZW50QXhpczpudWxsLC4uLnV9O3JldHVybiBhJiZcIm51bWJlclwiPT10eXBlb2YgYiYmKGg9XCJlbmRcIj09PWE/LTEqYjpiKSxsP3t4OmgqZCx5Om0qY306e3g6bSpjLHk6aCpkfX0oZSx0KTtyZXR1cm57eDpuK2kueCx5Om8raS55LGRhdGE6aX19fX07ZnVuY3Rpb24gXyh0KXtyZXR1cm4gVCh0KT8odC5ub2RlTmFtZXx8XCJcIikudG9Mb3dlckNhc2UoKTpcIiNkb2N1bWVudFwifWZ1bmN0aW9uIEwodCl7dmFyIGU7cmV0dXJuKG51bGw9PXR8fG51bGw9PShlPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOmUuZGVmYXVsdFZpZXcpfHx3aW5kb3d9ZnVuY3Rpb24gUCh0KXt2YXIgZTtyZXR1cm4gbnVsbD09KGU9KFQodCk/dC5vd25lckRvY3VtZW50OnQuZG9jdW1lbnQpfHx3aW5kb3cuZG9jdW1lbnQpP3ZvaWQgMDplLmRvY3VtZW50RWxlbWVudH1mdW5jdGlvbiBUKHQpe3JldHVybiB0IGluc3RhbmNlb2YgTm9kZXx8dCBpbnN0YW5jZW9mIEwodCkuTm9kZX1mdW5jdGlvbiBPKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8dCBpbnN0YW5jZW9mIEwodCkuRWxlbWVudH1mdW5jdGlvbiBNKHQpe3JldHVybiB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBMKHQpLkhUTUxFbGVtZW50fWZ1bmN0aW9uIEIodCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNoYWRvd1Jvb3QmJih0IGluc3RhbmNlb2YgU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIEwodCkuU2hhZG93Um9vdCl9ZnVuY3Rpb24gaih0KXtjb25zdHtvdmVyZmxvdzplLG92ZXJmbG93WDpuLG92ZXJmbG93WTpvLGRpc3BsYXk6aX09cSh0KTtyZXR1cm4vYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChlK28rbikmJiFbXCJpbmxpbmVcIixcImNvbnRlbnRzXCJdLmluY2x1ZGVzKGkpfWZ1bmN0aW9uIEQodCl7cmV0dXJuW1widGFibGVcIixcInRkXCIsXCJ0aFwiXS5pbmNsdWRlcyhfKHQpKX1mdW5jdGlvbiBOKHQpe2NvbnN0IGU9SSgpLG49cSh0KTtyZXR1cm5cIm5vbmVcIiE9PW4udHJhbnNmb3JtfHxcIm5vbmVcIiE9PW4ucGVyc3BlY3RpdmV8fCEhbi5jb250YWluZXJUeXBlJiZcIm5vcm1hbFwiIT09bi5jb250YWluZXJUeXBlfHwhZSYmISFuLmJhY2tkcm9wRmlsdGVyJiZcIm5vbmVcIiE9PW4uYmFja2Ryb3BGaWx0ZXJ8fCFlJiYhIW4uZmlsdGVyJiZcIm5vbmVcIiE9PW4uZmlsdGVyfHxbXCJ0cmFuc2Zvcm1cIixcInBlcnNwZWN0aXZlXCIsXCJmaWx0ZXJcIl0uc29tZSgodD0+KG4ud2lsbENoYW5nZXx8XCJcIikuaW5jbHVkZXModCkpKXx8W1wicGFpbnRcIixcImxheW91dFwiLFwic3RyaWN0XCIsXCJjb250ZW50XCJdLnNvbWUoKHQ9PihuLmNvbnRhaW58fFwiXCIpLmluY2x1ZGVzKHQpKSl9ZnVuY3Rpb24gSSgpe3JldHVybiEoXCJ1bmRlZmluZWRcIj09dHlwZW9mIENTU3x8IUNTUy5zdXBwb3J0cykmJkNTUy5zdXBwb3J0cyhcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIsXCJub25lXCIpfWZ1bmN0aW9uIEYodCl7cmV0dXJuW1wiaHRtbFwiLFwiYm9keVwiLFwiI2RvY3VtZW50XCJdLmluY2x1ZGVzKF8odCkpfWZ1bmN0aW9uIHEodCl7cmV0dXJuIEwodCkuZ2V0Q29tcHV0ZWRTdHlsZSh0KX1mdW5jdGlvbiB6KHQpe3JldHVybiBPKHQpP3tzY3JvbGxMZWZ0OnQuc2Nyb2xsTGVmdCxzY3JvbGxUb3A6dC5zY3JvbGxUb3B9OntzY3JvbGxMZWZ0OnQucGFnZVhPZmZzZXQsc2Nyb2xsVG9wOnQucGFnZVlPZmZzZXR9fWZ1bmN0aW9uIFYodCl7aWYoXCJodG1sXCI9PT1fKHQpKXJldHVybiB0O2NvbnN0IGU9dC5hc3NpZ25lZFNsb3R8fHQucGFyZW50Tm9kZXx8Qih0KSYmdC5ob3N0fHxQKHQpO3JldHVybiBCKGUpP2UuaG9zdDplfWZ1bmN0aW9uIEsodCl7Y29uc3QgZT1WKHQpO3JldHVybiBGKGUpP3Qub3duZXJEb2N1bWVudD90Lm93bmVyRG9jdW1lbnQuYm9keTp0LmJvZHk6TShlKSYmaihlKT9lOksoZSl9ZnVuY3Rpb24gSCh0LGUpe3ZhciBuO3ZvaWQgMD09PWUmJihlPVtdKTtjb25zdCBvPUsodCksaT1vPT09KG51bGw9PShuPXQub3duZXJEb2N1bWVudCk/dm9pZCAwOm4uYm9keSkscj1MKG8pO3JldHVybiBpP2UuY29uY2F0KHIsci52aXN1YWxWaWV3cG9ydHx8W10saihvKT9vOltdKTplLmNvbmNhdChvLEgobykpfWZ1bmN0aW9uIFcodCl7Y29uc3QgZT1xKHQpO2xldCBuPXBhcnNlRmxvYXQoZS53aWR0aCl8fDAsbz1wYXJzZUZsb2F0KGUuaGVpZ2h0KXx8MDtjb25zdCBpPU0odCkscj1pP3Qub2Zmc2V0V2lkdGg6bixzPWk/dC5vZmZzZXRIZWlnaHQ6byxhPWwobikhPT1yfHxsKG8pIT09cztyZXR1cm4gYSYmKG49cixvPXMpLHt3aWR0aDpuLGhlaWdodDpvLCQ6YX19ZnVuY3Rpb24gVSh0KXtyZXR1cm4gTyh0KT90OnQuY29udGV4dEVsZW1lbnR9ZnVuY3Rpb24gJCh0KXtjb25zdCBlPVUodCk7aWYoIU0oZSkpcmV0dXJuIGQoMSk7Y29uc3Qgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHt3aWR0aDpvLGhlaWdodDppLCQ6cn09VyhlKTtsZXQgcz0ocj9sKG4ud2lkdGgpOm4ud2lkdGgpL28sYT0ocj9sKG4uaGVpZ2h0KTpuLmhlaWdodCkvaTtyZXR1cm4gcyYmTnVtYmVyLmlzRmluaXRlKHMpfHwocz0xKSxhJiZOdW1iZXIuaXNGaW5pdGUoYSl8fChhPTEpLHt4OnMseTphfX1jb25zdCBYPWQoMCk7ZnVuY3Rpb24gWSh0KXtjb25zdCBlPUwodCk7cmV0dXJuIEkoKSYmZS52aXN1YWxWaWV3cG9ydD97eDplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQseTplLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcH06WH1mdW5jdGlvbiBHKHQsZSxuLG8pe3ZvaWQgMD09PWUmJihlPSExKSx2b2lkIDA9PT1uJiYobj0hMSk7Y29uc3QgaT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9VSh0KTtsZXQgcz1kKDEpO2UmJihvP08obykmJihzPSQobykpOnM9JCh0KSk7Y29uc3QgYT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSwhKCFufHxlJiZuIT09TCh0KSkmJmV9KHIsbixvKT9ZKHIpOmQoMCk7bGV0IGw9KGkubGVmdCthLngpL3MueCxjPShpLnRvcCthLnkpL3MueSx1PWkud2lkdGgvcy54LG09aS5oZWlnaHQvcy55O2lmKHIpe2NvbnN0IHQ9TChyKSxlPW8mJk8obyk/TChvKTpvO2xldCBuPXQuZnJhbWVFbGVtZW50O2Zvcig7biYmbyYmZSE9PXQ7KXtjb25zdCB0PSQobiksZT1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89cShuKSxpPWUubGVmdCsobi5jbGllbnRMZWZ0K3BhcnNlRmxvYXQoby5wYWRkaW5nTGVmdCkpKnQueCxyPWUudG9wKyhuLmNsaWVudFRvcCtwYXJzZUZsb2F0KG8ucGFkZGluZ1RvcCkpKnQueTtsKj10LngsYyo9dC55LHUqPXQueCxtKj10LnksbCs9aSxjKz1yLG49TChuKS5mcmFtZUVsZW1lbnR9fXJldHVybiBBKHt3aWR0aDp1LGhlaWdodDptLHg6bCx5OmN9KX1mdW5jdGlvbiBKKHQpe3JldHVybiBHKFAodCkpLmxlZnQreih0KS5zY3JvbGxMZWZ0fWZ1bmN0aW9uIFEodCxlLG4pe2xldCBvO2lmKFwidmlld3BvcnRcIj09PWUpbz1mdW5jdGlvbih0LGUpe2NvbnN0IG49TCh0KSxvPVAodCksaT1uLnZpc3VhbFZpZXdwb3J0O2xldCByPW8uY2xpZW50V2lkdGgscz1vLmNsaWVudEhlaWdodCxhPTAsbD0wO2lmKGkpe3I9aS53aWR0aCxzPWkuaGVpZ2h0O2NvbnN0IHQ9SSgpOyghdHx8dCYmXCJmaXhlZFwiPT09ZSkmJihhPWkub2Zmc2V0TGVmdCxsPWkub2Zmc2V0VG9wKX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyx4OmEseTpsfX0odCxuKTtlbHNlIGlmKFwiZG9jdW1lbnRcIj09PWUpbz1mdW5jdGlvbih0KXtjb25zdCBlPVAodCksbj16KHQpLG89dC5vd25lckRvY3VtZW50LmJvZHksaT1hKGUuc2Nyb2xsV2lkdGgsZS5jbGllbnRXaWR0aCxvLnNjcm9sbFdpZHRoLG8uY2xpZW50V2lkdGgpLHI9YShlLnNjcm9sbEhlaWdodCxlLmNsaWVudEhlaWdodCxvLnNjcm9sbEhlaWdodCxvLmNsaWVudEhlaWdodCk7bGV0IHM9LW4uc2Nyb2xsTGVmdCtKKHQpO2NvbnN0IGw9LW4uc2Nyb2xsVG9wO3JldHVyblwicnRsXCI9PT1xKG8pLmRpcmVjdGlvbiYmKHMrPWEoZS5jbGllbnRXaWR0aCxvLmNsaWVudFdpZHRoKS1pKSx7d2lkdGg6aSxoZWlnaHQ6cix4OnMseTpsfX0oUCh0KSk7ZWxzZSBpZihPKGUpKW89ZnVuY3Rpb24odCxlKXtjb25zdCBuPUcodCwhMCxcImZpeGVkXCI9PT1lKSxvPW4udG9wK3QuY2xpZW50VG9wLGk9bi5sZWZ0K3QuY2xpZW50TGVmdCxyPU0odCk/JCh0KTpkKDEpO3JldHVybnt3aWR0aDp0LmNsaWVudFdpZHRoKnIueCxoZWlnaHQ6dC5jbGllbnRIZWlnaHQqci55LHg6aSpyLngseTpvKnIueX19KGUsbik7ZWxzZXtjb25zdCBuPVkodCk7bz17Li4uZSx4OmUueC1uLngseTplLnktbi55fX1yZXR1cm4gQShvKX1mdW5jdGlvbiBaKHQsZSl7Y29uc3Qgbj1WKHQpO3JldHVybiEobj09PWV8fCFPKG4pfHxGKG4pKSYmKFwiZml4ZWRcIj09PXEobikucG9zaXRpb258fFoobixlKSl9ZnVuY3Rpb24gdHQodCxlLG4pe2NvbnN0IG89TShlKSxpPVAoZSkscj1cImZpeGVkXCI9PT1uLHM9Ryh0LCEwLHIsZSk7bGV0IGE9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH07Y29uc3QgbD1kKDApO2lmKG98fCFvJiYhcilpZigoXCJib2R5XCIhPT1fKGUpfHxqKGkpKSYmKGE9eihlKSksbyl7Y29uc3QgdD1HKGUsITAscixlKTtsLng9dC54K2UuY2xpZW50TGVmdCxsLnk9dC55K2UuY2xpZW50VG9wfWVsc2UgaSYmKGwueD1KKGkpKTtyZXR1cm57eDpzLmxlZnQrYS5zY3JvbGxMZWZ0LWwueCx5OnMudG9wK2Euc2Nyb2xsVG9wLWwueSx3aWR0aDpzLndpZHRoLGhlaWdodDpzLmhlaWdodH19ZnVuY3Rpb24gZXQodCxlKXtyZXR1cm4gTSh0KSYmXCJmaXhlZFwiIT09cSh0KS5wb3NpdGlvbj9lP2UodCk6dC5vZmZzZXRQYXJlbnQ6bnVsbH1mdW5jdGlvbiBudCh0LGUpe2NvbnN0IG49TCh0KTtpZighTSh0KSlyZXR1cm4gbjtsZXQgbz1ldCh0LGUpO2Zvcig7byYmRChvKSYmXCJzdGF0aWNcIj09PXEobykucG9zaXRpb247KW89ZXQobyxlKTtyZXR1cm4gbyYmKFwiaHRtbFwiPT09XyhvKXx8XCJib2R5XCI9PT1fKG8pJiZcInN0YXRpY1wiPT09cShvKS5wb3NpdGlvbiYmIU4obykpP246b3x8ZnVuY3Rpb24odCl7bGV0IGU9Vih0KTtmb3IoO00oZSkmJiFGKGUpOyl7aWYoTihlKSlyZXR1cm4gZTtlPVYoZSl9cmV0dXJuIG51bGx9KHQpfHxufWNvbnN0IG90PXtjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdDpmdW5jdGlvbih0KXtsZXR7cmVjdDplLG9mZnNldFBhcmVudDpuLHN0cmF0ZWd5Om99PXQ7Y29uc3QgaT1NKG4pLHI9UChuKTtpZihuPT09cilyZXR1cm4gZTtsZXQgcz17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfSxhPWQoMSk7Y29uc3QgbD1kKDApO2lmKChpfHwhaSYmXCJmaXhlZFwiIT09bykmJigoXCJib2R5XCIhPT1fKG4pfHxqKHIpKSYmKHM9eihuKSksTShuKSkpe2NvbnN0IHQ9RyhuKTthPSQobiksbC54PXQueCtuLmNsaWVudExlZnQsbC55PXQueStuLmNsaWVudFRvcH1yZXR1cm57d2lkdGg6ZS53aWR0aCphLngsaGVpZ2h0OmUuaGVpZ2h0KmEueSx4OmUueCphLngtcy5zY3JvbGxMZWZ0KmEueCtsLngseTplLnkqYS55LXMuc2Nyb2xsVG9wKmEueStsLnl9fSxnZXREb2N1bWVudEVsZW1lbnQ6UCxnZXRDbGlwcGluZ1JlY3Q6ZnVuY3Rpb24odCl7bGV0e2VsZW1lbnQ6ZSxib3VuZGFyeTpuLHJvb3RCb3VuZGFyeTpvLHN0cmF0ZWd5Oml9PXQ7Y29uc3Qgcj1bLi4uXCJjbGlwcGluZ0FuY2VzdG9yc1wiPT09bj9mdW5jdGlvbih0LGUpe2NvbnN0IG49ZS5nZXQodCk7aWYobilyZXR1cm4gbjtsZXQgbz1IKHQpLmZpbHRlcigodD0+Tyh0KSYmXCJib2R5XCIhPT1fKHQpKSksaT1udWxsO2NvbnN0IHI9XCJmaXhlZFwiPT09cSh0KS5wb3NpdGlvbjtsZXQgcz1yP1YodCk6dDtmb3IoO08ocykmJiFGKHMpOyl7Y29uc3QgZT1xKHMpLG49TihzKTtufHxcImZpeGVkXCIhPT1lLnBvc2l0aW9ufHwoaT1udWxsKSwocj8hbiYmIWk6IW4mJlwic3RhdGljXCI9PT1lLnBvc2l0aW9uJiZpJiZbXCJhYnNvbHV0ZVwiLFwiZml4ZWRcIl0uaW5jbHVkZXMoaS5wb3NpdGlvbil8fGoocykmJiFuJiZaKHQscykpP289by5maWx0ZXIoKHQ9PnQhPT1zKSk6aT1lLHM9VihzKX1yZXR1cm4gZS5zZXQodCxvKSxvfShlLHRoaXMuX2MpOltdLmNvbmNhdChuKSxvXSxsPXJbMF0sYz1yLnJlZHVjZSgoKHQsbik9Pntjb25zdCBvPVEoZSxuLGkpO3JldHVybiB0LnRvcD1hKG8udG9wLHQudG9wKSx0LnJpZ2h0PXMoby5yaWdodCx0LnJpZ2h0KSx0LmJvdHRvbT1zKG8uYm90dG9tLHQuYm90dG9tKSx0LmxlZnQ9YShvLmxlZnQsdC5sZWZ0KSx0fSksUShlLGwsaSkpO3JldHVybnt3aWR0aDpjLnJpZ2h0LWMubGVmdCxoZWlnaHQ6Yy5ib3R0b20tYy50b3AseDpjLmxlZnQseTpjLnRvcH19LGdldE9mZnNldFBhcmVudDpudCxnZXRFbGVtZW50UmVjdHM6YXN5bmMgZnVuY3Rpb24odCl7bGV0e3JlZmVyZW5jZTplLGZsb2F0aW5nOm4sc3RyYXRlZ3k6b309dDtjb25zdCBpPXRoaXMuZ2V0T2Zmc2V0UGFyZW50fHxudCxyPXRoaXMuZ2V0RGltZW5zaW9ucztyZXR1cm57cmVmZXJlbmNlOnR0KGUsYXdhaXQgaShuKSxvKSxmbG9hdGluZzp7eDowLHk6MCwuLi5hd2FpdCByKG4pfX19LGdldENsaWVudFJlY3RzOmZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5mcm9tKHQuZ2V0Q2xpZW50UmVjdHMoKSl9LGdldERpbWVuc2lvbnM6ZnVuY3Rpb24odCl7cmV0dXJuIFcodCl9LGdldFNjYWxlOiQsaXNFbGVtZW50Ok8saXNSVEw6ZnVuY3Rpb24odCl7cmV0dXJuXCJydGxcIj09PXEodCkuZGlyZWN0aW9ufX07bGV0IGl0PWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuc2V0Q29tbWFuZEFwcGVhcmFuY2U9dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZS5iaW5kKHRoaXMpLHRoaXMuaGFuZGxlU2xvdENoYW5nZT10aGlzLmhhbmRsZVNsb3RDaGFuZ2UuYmluZCh0aGlzKSx0aGlzLmF1dG9BZGp1c3Q9dGhpcy5hdXRvQWRqdXN0LmJpbmQodGhpcyksdGhpcy5pc01vdmluZ0NvbW1hbmQ9ITEsdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleD0wfXN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiaXMtb3BlblwiLFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiLFwiY3VzdG9tLW1lbnVcIl19Z2V0IGRlZmF1bHRMYWJlbFBvc2l0aW9uKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLmdldEF0dHJpYnV0ZShcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIikpJiZ2b2lkIDAhPT10P3Q6XCJyaWdodFwifXNldCBkZWZhdWx0TGFiZWxQb3NpdGlvbih0KXt0aGlzLnNldEF0dHJpYnV0ZShcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIix0KSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1nZXQgaXNPcGVuKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiaXMtb3BlblwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJpcy1vcGVuXCIpfWdldCBjdXN0b21NZW51KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiY3VzdG9tLW1lbnVcIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwiY3VzdG9tLW1lbnVcIil9c2V0IGN1c3RvbU1lbnUodCl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiLHQpfWdldCBjb21tYW5kQmFyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jb21tYW5kQmFyKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbW1hbmRCYXI9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWFuZC1iYXJcIikpLHRoaXMuX2NvbW1hbmRCYXJ9Z2V0IHByaW1hcnlDb21tYW5kc0NvbnRhaW5lcigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyKSYmdm9pZCAwIT09dHx8KHRoaXMuX3ByaW1hcnlDb21tYW5kc0NvbnRhaW5lcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LWNvbW1hbmRzXCIpKSx0aGlzLl9wcmltYXJ5Q29tbWFuZHNDb250YWluZXJ9Z2V0IHByaW1hcnlDb21tYW5kc1Nsb3QoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3ByaW1hcnlDb21tYW5kc1Nsb3QpJiZ2b2lkIDAhPT10fHwodGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdD10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5LWNvbW1hbmRzIHNsb3RcIikpLHRoaXMuX3ByaW1hcnlDb21tYW5kc1Nsb3R9Z2V0IG1vcmVCdXR0b24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX21vcmVCdXR0b24pJiZ2b2lkIDAhPT10fHwodGhpcy5fbW9yZUJ1dHRvbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5tb3JlLWJ1dHRvblwiKSksdGhpcy5fbW9yZUJ1dHRvbn1nZXQgc2Vjb25kYXJ5Q29tbWFuZHNEaXYoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3NlY29uZGFyeUNvbW1hbmRzRGl2KSYmdm9pZCAwIT09dHx8KHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzRGl2PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZGFyeS1jb21tYW5kc1wiKSksdGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXZ9Z2V0IHNlY29uZGFyeUNvbW1hbmRzU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNTbG90KSYmdm9pZCAwIT09dHx8KHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzU2xvdD10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RbbmFtZT1zZWNvbmRhcnktY29tbWFuZHNdXCIpKSx0aGlzLl9zZWNvbmRhcnlDb21tYW5kc1Nsb3R9Z2V0IGNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcikmJnZvaWQgMCE9PXR8fCh0aGlzLl9jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jb2xsYXBzZWQtY29tbWFuZHNcIikpLHRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyfWdldCBjb21tYW5kcygpe3JldHVyblsuLi50aGlzLnByaW1hcnlDb21tYW5kc1Nsb3QuYXNzaWduZWRFbGVtZW50cygpLmZpbHRlcigodD0+dCBpbnN0YW5jZW9mIHIpKSwuLi50aGlzLnNlY29uZGFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZEVsZW1lbnRzKCkuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgcikpLC4uLnRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIuY2hpbGROb2Rlc119cmVuZGVyKCl7cmV0dXJuXCJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb21tYW5kLWJhcic+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ByaW1hcnktY29tbWFuZHMnPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9yZS1idXR0b24nIHRpdGxlPSdTZWUgbW9yZSc+XFxuICAgICAgICAgICAgICAgICAgICA8Zmx1ZW50LXN5bWJvbC1pY29uIHN5bWJvbD0nTW9yZScgZm9udC1zaXplPScyMCc+PC9mbHVlbnQtc3ltYm9sLWljb24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWNvbmRhcnktY29tbWFuZHMnPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT0nc2Vjb25kYXJ5LWNvbW1hbmRzJz48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb2xsYXBzZWQtY29tbWFuZHMnPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCJ9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLm1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKHQ9Pnt0LnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuY3VzdG9tTWVudT90aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibWVudWludm9rZWRcIix7YnViYmxlczohMH0pKTp0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcImlzLW9wZW5cIiwhdGhpcy5pc09wZW4pfSkpLHRoaXMucHJpbWFyeUNvbW1hbmRzU2xvdC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLHRoaXMuaGFuZGxlU2xvdENoYW5nZSksdGhpcy5zZWNvbmRhcnlDb21tYW5kc1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwodD0+e2lmKHRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyPXRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkTm9kZXMoKVswXSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCksIXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyKXJldHVybjt2YXIgZT10aGlzLnNlY29uZGFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZmx1ZW50LWFwcC1iYXItYnV0dG9uXCIpLG49dGhpcy5zZWNvbmRhcnlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImZsdWVudC1hcHAtYmFyLXNlcGFyYXRvclwiKTtjb25zdCBvPTYqQXJyYXkuZnJvbShlKS5yZWR1Y2UoKCh0LGUpPT50LmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aD5lLmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aD90OmUpKS5mb3JtYXR0ZWRBY2NlbGVyYXRvci5sZW5ndGg7ZS5mb3JFYWNoKCh0PT57dC50b2dnbGVBdHRyaWJ1dGUoXCJpcy1zZWNvbmRhcnlcIiwhMCksdC5zZXRBY2NlbGVyYXRvcldpZHRoKG8pfSkpLG4uZm9yRWFjaCgodD0+e3QudG9nZ2xlQXR0cmlidXRlKFwiaG9yaXpvbnRhbFwiLCEwKX0pKX0pKSx0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyPW5ldyBSZXNpemVPYnNlcnZlcigoKCk9PnRoaXMuYXV0b0FkanVzdCgpKSksdGhpcy5wYXJlbnRSZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMucGFyZW50RWxlbWVudCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgoKT0+e3RoaXMudG9nZ2xlQXR0cmlidXRlKFwiaXMtb3BlblwiLCExKX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCl7c3dpdGNoKHQpe2Nhc2VcImlzLW9wZW5cIjp0aGlzLnNldElzT3BlbigpO2JyZWFrO2Nhc2VcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIjp0aGlzLnNldExhYmVsUG9zaXRpb24oKX19ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKX1zZXRMYWJlbFBvc2l0aW9uKCl7aWYoW1wiYm90dG9tXCIsXCJjb2xsYXBzZWRcIixcInJpZ2h0XCJdLmluY2x1ZGVzKHRoaXMuZGVmYXVsdExhYmVsUG9zaXRpb24pKXt2YXIgdD10aGlzLmRlZmF1bHRMYWJlbFBvc2l0aW9uO1wiYm90dG9tXCIhPT10fHx0aGlzLmlzT3Blbnx8KHQ9XCJjb2xsYXBzZWRcIiksdGhpcy5wcmltYXJ5Q29tbWFuZHM/dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZSh0KTpzZXRUaW1lb3V0KCgoKT0+dGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZSh0KSksNTApfX1zZXRDb21tYW5kQXBwZWFyYW5jZSh0KXt2YXIgZTtyZXR1cm4gbnVsbD09PShlPXRoaXMucHJpbWFyeUNvbW1hbmRzKXx8dm9pZCAwPT09ZXx8ZS5mb3JFYWNoKChlPT57ZS5zZXRBdHRyaWJ1dGUoXCJhcHBlYXJhbmNlXCIsdCl9KSksISF0aGlzLnByaW1hcnlDb21tYW5kc31zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpe2NvbnN0IHQ9dGhpcy5zZWNvbmRhcnlDb250YWluZXImJnRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aHx8dGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7dGhpcy5tb3JlQnV0dG9uLnN0eWxlLmRpc3BsYXk9dD9cImZsZXhcIjpcIm5vbmVcIn1zZXRJc09wZW4oKXt0aGlzLmNvbW1hbmRCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLHRoaXMuaXNPcGVuKSx0aGlzLmlzT3Blbj90aGlzLl9tZW51Q2xlYW51cD1mdW5jdGlvbih0LGUsbixvKXt2b2lkIDA9PT1vJiYobz17fSk7Y29uc3R7YW5jZXN0b3JTY3JvbGw6aT0hMCxhbmNlc3RvclJlc2l6ZTpyPSEwLGVsZW1lbnRSZXNpemU6bD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBSZXNpemVPYnNlcnZlcixsYXlvdXRTaGlmdDpkPVwiZnVuY3Rpb25cIj09dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyLGFuaW1hdGlvbkZyYW1lOnU9ITF9PW8sbT1VKHQpLGg9aXx8cj9bLi4ubT9IKG0pOltdLC4uLkgoZSldOltdO2guZm9yRWFjaCgodD0+e2kmJnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG4se3Bhc3NpdmU6ITB9KSxyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixuKX0pKTtjb25zdCBwPW0mJmQ/ZnVuY3Rpb24odCxlKXtsZXQgbixvPW51bGw7Y29uc3QgaT1QKHQpO2Z1bmN0aW9uIHIoKXtjbGVhclRpbWVvdXQobiksbyYmby5kaXNjb25uZWN0KCksbz1udWxsfXJldHVybiBmdW5jdGlvbiBsKGQsdSl7dm9pZCAwPT09ZCYmKGQ9ITEpLHZvaWQgMD09PXUmJih1PTEpLHIoKTtjb25zdHtsZWZ0Om0sdG9wOmgsd2lkdGg6cCxoZWlnaHQ6Zn09dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihkfHxlKCksIXB8fCFmKXJldHVybjtjb25zdCB5PXtyb290TWFyZ2luOi1jKGgpK1wicHggXCIrLWMoaS5jbGllbnRXaWR0aC0obStwKSkrXCJweCBcIistYyhpLmNsaWVudEhlaWdodC0oaCtmKSkrXCJweCBcIistYyhtKStcInB4XCIsdGhyZXNob2xkOmEoMCxzKDEsdSkpfHwxfTtsZXQgYj0hMDtmdW5jdGlvbiBnKHQpe2NvbnN0IGU9dFswXS5pbnRlcnNlY3Rpb25SYXRpbztpZihlIT09dSl7aWYoIWIpcmV0dXJuIGwoKTtlP2woITEsZSk6bj1zZXRUaW1lb3V0KCgoKT0+e2woITEsMWUtNyl9KSwxMDApfWI9ITF9dHJ5e289bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGcsey4uLnkscm9vdDppLm93bmVyRG9jdW1lbnR9KX1jYXRjaCh0KXtvPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihnLHkpfW8ub2JzZXJ2ZSh0KX0oITApLHJ9KG0sbik6bnVsbDtsZXQgZix5PS0xLGI9bnVsbDtsJiYoYj1uZXcgUmVzaXplT2JzZXJ2ZXIoKHQ9PntsZXRbb109dDtvJiZvLnRhcmdldD09PW0mJmImJihiLnVub2JzZXJ2ZShlKSxjYW5jZWxBbmltYXRpb25GcmFtZSh5KSx5PXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9PntiJiZiLm9ic2VydmUoZSl9KSkpLG4oKX0pKSxtJiYhdSYmYi5vYnNlcnZlKG0pLGIub2JzZXJ2ZShlKSk7bGV0IGc9dT9HKHQpOm51bGw7cmV0dXJuIHUmJmZ1bmN0aW9uIGUoKXtjb25zdCBvPUcodCk7IWd8fG8ueD09PWcueCYmby55PT09Zy55JiZvLndpZHRoPT09Zy53aWR0aCYmby5oZWlnaHQ9PT1nLmhlaWdodHx8bigpLGc9byxmPXJlcXVlc3RBbmltYXRpb25GcmFtZShlKX0oKSxuKCksKCk9PntoLmZvckVhY2goKHQ9PntpJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixuKSxyJiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixuKX0pKSxwJiZwKCksYiYmYi5kaXNjb25uZWN0KCksYj1udWxsLHUmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpfX0odGhpcy5tb3JlQnV0dG9uLHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYsdGhpcy51cGRhdGVNZW51UG9zaXRpb24uYmluZCh0aGlzKSk6dGhpcy5fbWVudUNsZWFudXAmJnRoaXMuX21lbnVDbGVhbnVwKCksdGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9aGFuZGxlU2xvdENoYW5nZSgpe2NvbnN0IHQ9dGhpcy5wcmltYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkTm9kZXMoKTtpZih0aGlzLnByaW1hcnlDb21tYW5kcz10LmZpbHRlcigodD0+dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiZcIkZMVUVOVC1BUFAtQkFSLUJVVFRPTlwiPT09dC5ub2RlTmFtZSkpLCF0aGlzLmlzTW92aW5nQ29tbWFuZCl7dGhpcy5zdHlsZS5vcGFjaXR5PVwiMFwiLHRoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmU9dGhpcy5wcmltYXJ5Q29tbWFuZHMubWFwKCh0PT4oe3BhcmVudDp0LnBhcmVudEVsZW1lbnQsc2VsZjp0LHByZXZpb3VzOnQucHJldmlvdXNFbGVtZW50U2libGluZyxib3VuZHM6dC5nZXRDbGllbnRSZWN0cygpWzBdLnJpZ2h0LXRoaXMuZ2V0Q2xpZW50UmVjdHMoKVswXS5sZWZ0fSkpKSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PXRoaXMucHJpbWFyeUNvbW1hbmRzLmxlbmd0aC0xO2NvbnN0IHQ9c2V0SW50ZXJ2YWwoKCgpPT57dGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZSYmKGNsZWFySW50ZXJ2YWwodCksdGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZS5mb3JFYWNoKHRoaXMuYXV0b0FkanVzdCksdGhpcy5zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpLHRoaXMuc3R5bGUub3BhY2l0eT1cIjFcIil9KSwxMCl9dGhpcy5pc01vdmluZ0NvbW1hbmQ9ITEsdGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9YXV0b0FkanVzdCgpe3ZhciB0O2NvbnN0IGU9bnVsbCE9PSh0PXRoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmUpJiZ2b2lkIDAhPT10P3Q6W107aWYoMD09PWUubGVuZ3RoKXJldHVybjtjb25zdCBuPXRoaXMucGFyZW50RWxlbWVudC5nZXRDbGllbnRSZWN0cygpWzBdLndpZHRoLSh0aGlzLmdldExlZnQoKSs0NysxMiksbz10aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4LGk9TWF0aC5taW4oZS5sZW5ndGgtMSxvKzEpLHI9ZVtvXSxzPWVbaV07bz49MCYmci5ib3VuZHM+biYmKHRoaXMubW92ZUNvbW1hbmRzKHIuc2VsZix0aGlzLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXgtPTEsbz4wJiZcIkZMVUVOVC1BUFAtQkFSLVNFUEFSQVRPUlwiPT09ci5wcmV2aW91cy5ub2RlTmFtZSYmdGhpcy5tb3ZlQ29tbWFuZHMoci5wcmV2aW91cyx0aGlzLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIpKSxpIT09byYmcy5ib3VuZHM8biYmKGk+MCYmXCJGTFVFTlQtQVBQLUJBUi1TRVBBUkFUT1JcIj09PXMucHJldmlvdXMubm9kZU5hbWUmJnRoaXMubW92ZUNvbW1hbmRzKHMucHJldmlvdXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcix0aGlzKSx0aGlzLm1vdmVDb21tYW5kcyhzLnNlbGYsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcix0aGlzKSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PWkpfWdldExlZnQoKXtpZighdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXJldHVybiAwO2NvbnN0IHQ9dGhpcy5wYXJlbnRFbGVtZW50LmdldENsaWVudFJlY3RzKClbMF0ubGVmdDtyZXR1cm4gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldENsaWVudFJlY3RzKClbMF0ucmlnaHQtdH1tb3ZlQ29tbWFuZHModCxlLG4pe3ZhciBvO2NvbnN0IGk9ZT09PXRoaXM7aWYodGhpcy5pc01vdmluZ0NvbW1hbmQ9ITAsZS5yZW1vdmVDaGlsZCh0KSxpKXtjb25zdCBlPW4uZmlyc3RDaGlsZDtuLmluc2VydEJlZm9yZSh0LGUpfWVsc2Ugbi5hcHBlbmRDaGlsZCh0KTt2YXIgcj17YnViYmxlczohMCxkZXRhaWw6e3R5cGU6dC5ub2RlTmFtZSxjb21tYW5kOm51bGwhPT0obz10LmRhdGFzZXQuY29tbWFuZCkmJnZvaWQgMCE9PW8/bzpudWxsLGNvbGxhcHNlZDppfX0scz1uZXcgQ3VzdG9tRXZlbnQoXCJjb21tYW5kbW92ZWRcIixyKTt0aGlzLmRpc3BhdGNoRXZlbnQocyksdGhpcy50b2dnbGVBdHRyaWJ1dGVzKHQsaSksdGhpcy5zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpfXVwZGF0ZU1lbnVQb3NpdGlvbigpe3ZhciB0OygodCxlLG4pPT57Y29uc3Qgbz1uZXcgTWFwLGk9e3BsYXRmb3JtOm90LC4uLm59LHI9ey4uLmkucGxhdGZvcm0sX2M6b307cmV0dXJuKGFzeW5jKHQsZSxuKT0+e2NvbnN0e3BsYWNlbWVudDpvPVwiYm90dG9tXCIsc3RyYXRlZ3k6aT1cImFic29sdXRlXCIsbWlkZGxld2FyZTpyPVtdLHBsYXRmb3JtOnN9PW4sYT1yLmZpbHRlcihCb29sZWFuKSxsPWF3YWl0KG51bGw9PXMuaXNSVEw/dm9pZCAwOnMuaXNSVEwoZSkpO2xldCBjPWF3YWl0IHMuZ2V0RWxlbWVudFJlY3RzKHtyZWZlcmVuY2U6dCxmbG9hdGluZzplLHN0cmF0ZWd5Oml9KSx7eDpkLHk6dX09ayhjLG8sbCksbT1vLGg9e30scD0wO2ZvcihsZXQgbj0wO248YS5sZW5ndGg7bisrKXtjb25zdHtuYW1lOnIsZm46Zn09YVtuXSx7eDp5LHk6YixkYXRhOmcscmVzZXQ6dn09YXdhaXQgZih7eDpkLHk6dSxpbml0aWFsUGxhY2VtZW50Om8scGxhY2VtZW50Om0sc3RyYXRlZ3k6aSxtaWRkbGV3YXJlRGF0YTpoLHJlY3RzOmMscGxhdGZvcm06cyxlbGVtZW50czp7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZX19KTtkPW51bGwhPXk/eTpkLHU9bnVsbCE9Yj9iOnUsaD17Li4uaCxbcl06ey4uLmhbcl0sLi4uZ319LHYmJnA8PTUwJiYocCsrLFwib2JqZWN0XCI9PXR5cGVvZiB2JiYodi5wbGFjZW1lbnQmJihtPXYucGxhY2VtZW50KSx2LnJlY3RzJiYoYz0hMD09PXYucmVjdHM/YXdhaXQgcy5nZXRFbGVtZW50UmVjdHMoe3JlZmVyZW5jZTp0LGZsb2F0aW5nOmUsc3RyYXRlZ3k6aX0pOnYucmVjdHMpLCh7eDpkLHk6dX09ayhjLG0sbCkpKSxuPS0xKX1yZXR1cm57eDpkLHk6dSxwbGFjZW1lbnQ6bSxzdHJhdGVneTppLG1pZGRsZXdhcmVEYXRhOmh9fSkodCxlLHsuLi5pLHBsYXRmb3JtOnJ9KX0pKHRoaXMubW9yZUJ1dHRvbix0aGlzLnNlY29uZGFyeUNvbW1hbmRzRGl2LHtwbGFjZW1lbnQ6XCJib3R0b20tZW5kXCIsbWlkZGxld2FyZTpbRSgxNiksUigpLCh2b2lkIDA9PT10JiYodD17fSkse25hbWU6XCJzaGlmdFwiLG9wdGlvbnM6dCxhc3luYyBmbihlKXtjb25zdHt4Om4seTpvLHBsYWNlbWVudDppfT1lLHttYWluQXhpczpyPSEwLGNyb3NzQXhpczpzPSExLGxpbWl0ZXI6YT17Zm46dD0+e2xldHt4OmUseTpufT10O3JldHVybnt4OmUseTpufX19LC4uLmx9PXAodCxlKSxjPXt4Om4seTpvfSxkPWF3YWl0IFMoZSxsKSx1PXYoZihpKSksbT1iKHUpO2xldCB5PWNbbV0sZz1jW3VdO2lmKHIpe2NvbnN0IHQ9XCJ5XCI9PT1tP1wiYm90dG9tXCI6XCJyaWdodFwiO3k9aCh5K2RbXCJ5XCI9PT1tP1widG9wXCI6XCJsZWZ0XCJdLHkseS1kW3RdKX1pZihzKXtjb25zdCB0PVwieVwiPT09dT9cImJvdHRvbVwiOlwicmlnaHRcIjtnPWgoZytkW1wieVwiPT09dT9cInRvcFwiOlwibGVmdFwiXSxnLGctZFt0XSl9Y29uc3QgeD1hLmZuKHsuLi5lLFttXTp5LFt1XTpnfSk7cmV0dXJuey4uLngsZGF0YTp7eDp4Lngtbix5OngueS1vfX19fSldfSkudGhlbigoKHt4OnQseTplfSk9PntPYmplY3QuYXNzaWduKHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYuc3R5bGUse2xlZnQ6YCR7dH1weGAsdG9wOmAke2V9cHhgfSl9KSl9dG9nZ2xlQXR0cmlidXRlcyh0LGUpe2xldCBuO3N3aXRjaCh0Lm5vZGVOYW1lKXtjYXNlXCJGTFVFTlQtQVBQLUJBUi1CVVRUT05cIjpuPVwiaXMtc2Vjb25kYXJ5XCI7YnJlYWs7Y2FzZVwiRkxVRU5ULUFQUC1CQVItU0VQQVJBVE9SXCI6bj1cImhvcml6b250YWxcIn10LnRvZ2dsZUF0dHJpYnV0ZShuLGUpfX07aXQuc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWFuZC1iYXIge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaW1hcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sdW1uLWdhcDogNXB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaW1hcnktY29tbWFuZHM6bm90KDplbXB0eSkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQnV0dG9uICovXFxuICAgICAgICAubW9yZS1idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KTtcXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLm1vcmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS1zZWNvbmRhcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b246YWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS10ZXJ0aWFyeSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1zZWNvbmRhcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b24gZmx1ZW50LXN5bWJvbC1pY29uIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogU2Vjb25kYXJ5IGNvbW1hbmRzICovXFxuICAgICAgICAuc2Vjb25kYXJ5LWNvbW1hbmRzIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWZpbGwtbWljYS1iYXNlKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLCBsdW1pbm9zaXR5O1xcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTAwcHgpO1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXN0cm9rZS1jYXJkLWRlZmF1bHQpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggdmFyKC0tc2hhZG93LWZseW91dCk7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbW1hbmQtYmFyLmFjdGl2ZSAuc2Vjb25kYXJ5LWNvbW1hbmRzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbGxhcHNlZC1jb21tYW5kczpub3QoOmVtcHR5KSB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXN0cm9rZS1kaXZpZGVyLWRlZmF1bHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbGxhcHNlZC1jb21tYW5kcyBmbHVlbnQtYXBwLWJhci1zZXBhcmF0b3I6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIFwiLGl0PWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWNvbW1hbmQtYmFyXCIpXSxpdCk7bGV0IHJ0PWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7cmVuZGVyKCl7cmV0dXJuXCJcIn19O3J0LnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cm9rZS1kaXZpZGVyLWRlZmF1bHQpO1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaG9yaXpvbnRhbF0pIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIFwiLHJ0PWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWFwcC1iYXItc2VwYXJhdG9yXCIpXSxydCl9KSgpLG99KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50LmpzLm1hcCIsIiFmdW5jdGlvbihlLGEpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWEoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuRmx1ZW50SWNvbkVsZW1lbnRDb21wb25lbnQ9YSgpOmUuRmx1ZW50SWNvbkVsZW1lbnRDb21wb25lbnQ9YSgpfShzZWxmLCgoKT0+KCgpPT57dmFyIGU9ezI2OTplPT57dmFyIGE7c2VsZixhPSgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDooYSxuKT0+e2Zvcih2YXIgbCBpbiBuKWUubyhuLGwpJiYhZS5vKGEsbCkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGwse2VudW1lcmFibGU6ITAsZ2V0Om5bbF19KX0sbzooZSxhKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSkscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LGE9e307ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24oYSl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShlLGEpfX1lLnIoYSksZS5kKGEse0N1c3RvbUNvbXBvbmVudDooKT0+bCxjdXN0b21Db21wb25lbnQ6KCk9Pm59KTtjbGFzcyBsIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpO2NvbnN0IGU9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlLmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IGU9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lO3JldHVybiBlIGluIGwuX3RlbXBsYXRlcz9sLl90ZW1wbGF0ZXNbZV06dGhpcy5jcmVhdGVUZW1wbGF0ZShlKX1jcmVhdGVUZW1wbGF0ZShlKXt2YXIgYTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxnPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gbi5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0oYT1nLnN0eWxlcykmJnZvaWQgMCE9PWE/YTpcIlwifTwvc3R5bGU+YCxsLl90ZW1wbGF0ZXNbZV09bixufWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyKCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKX19cmV0dXJuIGwuX3RlbXBsYXRlcz17fSxhfSkoKSxlLmV4cG9ydHM9YSgpfX0sYT17fTtmdW5jdGlvbiBuKGwpe3ZhciBnPWFbbF07aWYodm9pZCAwIT09ZylyZXR1cm4gZy5leHBvcnRzO3ZhciBwPWFbbF09e2V4cG9ydHM6e319O3JldHVybiBlW2xdKHAscC5leHBvcnRzLG4pLHAuZXhwb3J0c31uLmQ9KGUsYSk9Pntmb3IodmFyIGwgaW4gYSluLm8oYSxsKSYmIW4ubyhlLGwpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxsLHtlbnVtZXJhYmxlOiEwLGdldDphW2xdfSl9LG4ubz0oZSxhKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsYSksbi5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbD17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtuLnIobCksbi5kKGwse0ZsdWVudEZvbnRJY29uOigpPT5wLEZsdWVudEltYWdlSWNvbjooKT0+dCxGbHVlbnRTeW1ib2xJY29uOigpPT5ofSk7dmFyIGU9bigyNjkpLGE9ZnVuY3Rpb24oZSxhLG4sbCl7dmFyIGcscD1hcmd1bWVudHMubGVuZ3RoLGg9cDwzP2E6bnVsbD09PWw/bD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsbik6bDtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSloPVJlZmxlY3QuZGVjb3JhdGUoZSxhLG4sbCk7ZWxzZSBmb3IodmFyIHQ9ZS5sZW5ndGgtMTt0Pj0wO3QtLSkoZz1lW3RdKSYmKGg9KHA8Mz9nKGgpOnA+Mz9nKGEsbixoKTpnKGEsbikpfHxoKTtyZXR1cm4gcD4zJiZoJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxuLGgpLGh9O2NvbnN0IGc9W3tuYW1lOlwiR2xvYmFsTmF2QnV0dG9uXCIsZ2x5cGg6XCJlNzAwXCJ9LHtuYW1lOlwiV2lmaVwiLGdseXBoOlwiZTcwMVwifSx7bmFtZTpcIkJsdWV0b290aFwiLGdseXBoOlwiZTcwMlwifSx7bmFtZTpcIkNvbm5lY3RcIixnbHlwaDpcImU3MDNcIn0se25hbWU6XCJJbnRlcm5ldFNoYXJpbmdcIixnbHlwaDpcImU3MDRcIn0se25hbWU6XCJWUE5cIixnbHlwaDpcImU3MDVcIn0se25hbWU6XCJCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlNzA2XCJ9LHtuYW1lOlwiTWFwUGluXCIsZ2x5cGg6XCJlNzA3XCJ9LHtuYW1lOlwiUXVpZXRIb3Vyc1wiLGdseXBoOlwiZTcwOFwifSx7bmFtZTpcIkFpcnBsYW5lXCIsZ2x5cGg6XCJlNzA5XCJ9LHtuYW1lOlwiVGFibGV0XCIsZ2x5cGg6XCJlNzBhXCJ9LHtuYW1lOlwiUXVpY2tOb3RlXCIsZ2x5cGg6XCJlNzBiXCJ9LHtuYW1lOlwiUmVtZW1iZXJlZERldmljZVwiLGdseXBoOlwiZTcwY1wifSx7bmFtZTpcIkNoZXZyb25Eb3duXCIsZ2x5cGg6XCJlNzBkXCJ9LHtuYW1lOlwiQ2hldnJvblVwXCIsZ2x5cGg6XCJlNzBlXCJ9LHtuYW1lOlwiRWRpdFwiLGdseXBoOlwiZTcwZlwifSx7bmFtZTpcIkFkZFwiLGdseXBoOlwiZTcxMFwifSx7bmFtZTpcIkNhbmNlbFwiLGdseXBoOlwiZTcxMVwifSx7bmFtZTpcIk1vcmVcIixnbHlwaDpcImU3MTJcIn0se25hbWU6XCJTZXR0aW5nc1wiLGdseXBoOlwiZTcxM1wifSx7bmFtZTpcIlZpZGVvXCIsZ2x5cGg6XCJlNzE0XCJ9LHtuYW1lOlwiTWFpbFwiLGdseXBoOlwiZTcxNVwifSx7bmFtZTpcIlBlb3BsZVwiLGdseXBoOlwiZTcxNlwifSx7bmFtZTpcIlBob25lXCIsZ2x5cGg6XCJlNzE3XCJ9LHtuYW1lOlwiUGluXCIsZ2x5cGg6XCJlNzE4XCJ9LHtuYW1lOlwiU2hvcFwiLGdseXBoOlwiZTcxOVwifSx7bmFtZTpcIlN0b3BcIixnbHlwaDpcImU3MWFcIn0se25hbWU6XCJMaW5rXCIsZ2x5cGg6XCJlNzFiXCJ9LHtuYW1lOlwiRmlsdGVyXCIsZ2x5cGg6XCJlNzFjXCJ9LHtuYW1lOlwiQWxsQXBwc1wiLGdseXBoOlwiZTcxZFwifSx7bmFtZTpcIlpvb21cIixnbHlwaDpcImU3MWVcIn0se25hbWU6XCJab29tT3V0XCIsZ2x5cGg6XCJlNzFmXCJ9LHtuYW1lOlwiTWljcm9waG9uZVwiLGdseXBoOlwiZTcyMFwifSx7bmFtZTpcIlNlYXJjaFwiLGdseXBoOlwiZTcyMVwifSx7bmFtZTpcIkNhbWVyYVwiLGdseXBoOlwiZTcyMlwifSx7bmFtZTpcIkF0dGFjaFwiLGdseXBoOlwiZTcyM1wifSx7bmFtZTpcIlNlbmRcIixnbHlwaDpcImU3MjRcIn0se25hbWU6XCJTZW5kRmlsbFwiLGdseXBoOlwiZTcyNVwifSx7bmFtZTpcIldhbGtTb2xpZFwiLGdseXBoOlwiZTcyNlwifSx7bmFtZTpcIkluUHJpdmF0ZVwiLGdseXBoOlwiZTcyN1wifSx7bmFtZTpcIkZhdm9yaXRlTGlzdFwiLGdseXBoOlwiZTcyOFwifSx7bmFtZTpcIlBhZ2VTb2xpZFwiLGdseXBoOlwiZTcyOVwifSx7bmFtZTpcIkZvcndhcmRcIixnbHlwaDpcImU3MmFcIn0se25hbWU6XCJCYWNrXCIsZ2x5cGg6XCJlNzJiXCJ9LHtuYW1lOlwiUmVmcmVzaFwiLGdseXBoOlwiZTcyY1wifSx7bmFtZTpcIlNoYXJlXCIsZ2x5cGg6XCJlNzJkXCJ9LHtuYW1lOlwiTG9ja1wiLGdseXBoOlwiZTcyZVwifSx7bmFtZTpcIlJlcG9ydEhhY2tlZFwiLGdseXBoOlwiZTczMFwifSx7bmFtZTpcIkVNSVwiLGdseXBoOlwiZTczMVwifSx7bmFtZTpcIkZhdm9yaXRlU3RhclwiLGdseXBoOlwiZTczNFwifSx7bmFtZTpcIkZhdm9yaXRlU3RhckZpbGxcIixnbHlwaDpcImU3MzVcIn0se25hbWU6XCJSZWFkaW5nTW9kZVwiLGdseXBoOlwiZTczNlwifSx7bmFtZTpcIkZhdmljb25cIixnbHlwaDpcImU3MzdcIn0se25hbWU6XCJSZW1vdmVcIixnbHlwaDpcImU3MzhcIn0se25hbWU6XCJDaGVja2JveFwiLGdseXBoOlwiZTczOVwifSx7bmFtZTpcIkNoZWNrYm94Q29tcG9zaXRlXCIsZ2x5cGg6XCJlNzNhXCJ9LHtuYW1lOlwiQ2hlY2tib3hGaWxsXCIsZ2x5cGg6XCJlNzNiXCJ9LHtuYW1lOlwiQ2hlY2tib3hJbmRldGVybWluYXRlXCIsZ2x5cGg6XCJlNzNjXCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGVSZXZlcnNlZFwiLGdseXBoOlwiZTczZFwifSx7bmFtZTpcIkNoZWNrTWFya1wiLGdseXBoOlwiZTczZVwifSx7bmFtZTpcIkJhY2tUb1dpbmRvd1wiLGdseXBoOlwiZTczZlwifSx7bmFtZTpcIkZ1bGxTY3JlZW5cIixnbHlwaDpcImU3NDBcIn0se25hbWU6XCJSZXNpemVUb3VjaExhcmdlclwiLGdseXBoOlwiZTc0MVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoU21hbGxlclwiLGdseXBoOlwiZTc0MlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlU21hbGxcIixnbHlwaDpcImU3NDNcIn0se25hbWU6XCJSZXNpemVNb3VzZU1lZGl1bVwiLGdseXBoOlwiZTc0NFwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlV2lkZVwiLGdseXBoOlwiZTc0NVwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlVGFsbFwiLGdseXBoOlwiZTc0NlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTGFyZ2VcIixnbHlwaDpcImU3NDdcIn0se25hbWU6XCJTd2l0Y2hVc2VyXCIsZ2x5cGg6XCJlNzQ4XCJ9LHtuYW1lOlwiUHJpbnRcIixnbHlwaDpcImU3NDlcIn0se25hbWU6XCJVcFwiLGdseXBoOlwiZTc0YVwifSx7bmFtZTpcIkRvd25cIixnbHlwaDpcImU3NGJcIn0se25hbWU6XCJPRU1cIixnbHlwaDpcImU3NGNcIn0se25hbWU6XCJEZWxldGVcIixnbHlwaDpcImU3NGRcIn0se25hbWU6XCJTYXZlXCIsZ2x5cGg6XCJlNzRlXCJ9LHtuYW1lOlwiTXV0ZVwiLGdseXBoOlwiZTc0ZlwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWVwiLGdseXBoOlwiZTc1MFwifSx7bmFtZTpcIlJldHVybktleVwiLGdseXBoOlwiZTc1MVwifSx7bmFtZTpcIlVwQXJyb3dTaGlmdEtleVwiLGdseXBoOlwiZTc1MlwifSx7bmFtZTpcIkNsb3VkXCIsZ2x5cGg6XCJlNzUzXCJ9LHtuYW1lOlwiRmxhc2hsaWdodFwiLGdseXBoOlwiZTc1NFwifSx7bmFtZTpcIlJvdGF0aW9uTG9ja1wiLGdseXBoOlwiZTc1NVwifSx7bmFtZTpcIkNvbW1hbmRQcm9tcHRcIixnbHlwaDpcImU3NTZcIn0se25hbWU6XCJTSVBNb3ZlXCIsZ2x5cGg6XCJlNzU5XCJ9LHtuYW1lOlwiU0lQVW5kb2NrXCIsZ2x5cGg6XCJlNzVhXCJ9LHtuYW1lOlwiU0lQUmVkb2NrXCIsZ2x5cGg6XCJlNzViXCJ9LHtuYW1lOlwiRXJhc2VUb29sXCIsZ2x5cGg6XCJlNzVjXCJ9LHtuYW1lOlwiVW5kZXJzY29yZVNwYWNlXCIsZ2x5cGg6XCJlNzVkXCJ9LHtuYW1lOlwiR3JpcHBlclRvb2xcIixnbHlwaDpcImU3NWVcIn0se25hbWU6XCJEaWFscGFkXCIsZ2x5cGg6XCJlNzVmXCJ9LHtuYW1lOlwiUGFnZUxlZnRcIixnbHlwaDpcImU3NjBcIn0se25hbWU6XCJQYWdlUmlnaHRcIixnbHlwaDpcImU3NjFcIn0se25hbWU6XCJNdWx0aVNlbGVjdFwiLGdseXBoOlwiZTc2MlwifSx7bmFtZTpcIktleWJvYXJkTGVmdEhhbmRlZFwiLGdseXBoOlwiZTc2M1wifSx7bmFtZTpcIktleWJvYXJkUmlnaHRIYW5kZWRcIixnbHlwaDpcImU3NjRcIn0se25hbWU6XCJLZXlib2FyZENsYXNzaWNcIixnbHlwaDpcImU3NjVcIn0se25hbWU6XCJLZXlib2FyZFNwbGl0XCIsZ2x5cGg6XCJlNzY2XCJ9LHtuYW1lOlwiVm9sdW1lXCIsZ2x5cGg6XCJlNzY3XCJ9LHtuYW1lOlwiUGxheVwiLGdseXBoOlwiZTc2OFwifSx7bmFtZTpcIlBhdXNlXCIsZ2x5cGg6XCJlNzY5XCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnRcIixnbHlwaDpcImU3NmJcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRcIixnbHlwaDpcImU3NmNcIn0se25hbWU6XCJJbmtpbmdUb29sXCIsZ2x5cGg6XCJlNzZkXCJ9LHtuYW1lOlwiRW1vamkyXCIsZ2x5cGg6XCJlNzZlXCJ9LHtuYW1lOlwiR3JpcHBlckJhckhvcml6b250YWxcIixnbHlwaDpcImU3NmZcIn0se25hbWU6XCJTeXN0ZW1cIixnbHlwaDpcImU3NzBcIn0se25hbWU6XCJQZXJzb25hbGl6ZVwiLGdseXBoOlwiZTc3MVwifSx7bmFtZTpcIkRldmljZXNcIixnbHlwaDpcImU3NzJcIn0se25hbWU6XCJTZWFyY2hBbmRBcHBzXCIsZ2x5cGg6XCJlNzczXCJ9LHtuYW1lOlwiR2xvYmVcIixnbHlwaDpcImU3NzRcIn0se25hbWU6XCJUaW1lTGFuZ3VhZ2VcIixnbHlwaDpcImU3NzVcIn0se25hbWU6XCJFYXNlT2ZBY2Nlc3NcIixnbHlwaDpcImU3NzZcIn0se25hbWU6XCJVcGRhdGVSZXN0b3JlXCIsZ2x5cGg6XCJlNzc3XCJ9LHtuYW1lOlwiSGFuZ1VwXCIsZ2x5cGg6XCJlNzc4XCJ9LHtuYW1lOlwiQ29udGFjdEluZm9cIixnbHlwaDpcImU3NzlcIn0se25hbWU6XCJVbnBpblwiLGdseXBoOlwiZTc3YVwifSx7bmFtZTpcIkNvbnRhY3RcIixnbHlwaDpcImU3N2JcIn0se25hbWU6XCJNZW1vXCIsZ2x5cGg6XCJlNzdjXCJ9LHtuYW1lOlwiSW5jb21pbmdDYWxsXCIsZ2x5cGg6XCJlNzdlXCJ9LHtuYW1lOlwiUGFzdGVcIixnbHlwaDpcImU3N2ZcIn0se25hbWU6XCJQaG9uZUJvb2tcIixnbHlwaDpcImU3ODBcIn0se25hbWU6XCJMRURMaWdodFwiLGdseXBoOlwiZTc4MVwifSx7bmFtZTpcIkVycm9yXCIsZ2x5cGg6XCJlNzgzXCJ9LHtuYW1lOlwiR3JpcHBlckJhclZlcnRpY2FsXCIsZ2x5cGg6XCJlNzg0XCJ9LHtuYW1lOlwiVW5sb2NrXCIsZ2x5cGg6XCJlNzg1XCJ9LHtuYW1lOlwiU2xpZGVzaG93XCIsZ2x5cGg6XCJlNzg2XCJ9LHtuYW1lOlwiQ2FsZW5kYXJcIixnbHlwaDpcImU3ODdcIn0se25hbWU6XCJHcmlwcGVyUmVzaXplXCIsZ2x5cGg6XCJlNzg4XCJ9LHtuYW1lOlwiTWVnYXBob25lXCIsZ2x5cGg6XCJlNzg5XCJ9LHtuYW1lOlwiVHJpbVwiLGdseXBoOlwiZTc4YVwifSx7bmFtZTpcIk5ld1dpbmRvd1wiLGdseXBoOlwiZTc4YlwifSx7bmFtZTpcIlNhdmVMb2NhbFwiLGdseXBoOlwiZTc4Y1wifSx7bmFtZTpcIkNvbG9yXCIsZ2x5cGg6XCJlNzkwXCJ9LHtuYW1lOlwiRGF0YVNlbnNlXCIsZ2x5cGg6XCJlNzkxXCJ9LHtuYW1lOlwiU2F2ZUFzXCIsZ2x5cGg6XCJlNzkyXCJ9LHtuYW1lOlwiTGlnaHRcIixnbHlwaDpcImU3OTNcIn0se25hbWU6XCJBc3BlY3RSYXRpb1wiLGdseXBoOlwiZTc5OVwifSx7bmFtZTpcIkRhdGFTZW5zZUJhclwiLGdseXBoOlwiZTdhNVwifSx7bmFtZTpcIlJlZG9cIixnbHlwaDpcImU3YTZcIn0se25hbWU6XCJVbmRvXCIsZ2x5cGg6XCJlN2E3XCJ9LHtuYW1lOlwiQ3JvcFwiLGdseXBoOlwiZTdhOFwifSx7bmFtZTpcIk9wZW5XaXRoXCIsZ2x5cGg6XCJlN2FjXCJ9LHtuYW1lOlwiUm90YXRlXCIsZ2x5cGg6XCJlN2FkXCJ9LHtuYW1lOlwiUmVkRXllXCIsZ2x5cGg6XCJlN2IzXCJ9LHtuYW1lOlwiU2V0bG9ja1NjcmVlblwiLGdseXBoOlwiZTdiNVwifSx7bmFtZTpcIk1hcFBpbjJcIixnbHlwaDpcImU3YjdcIn0se25hbWU6XCJQYWNrYWdlXCIsZ2x5cGg6XCJlN2I4XCJ9LHtuYW1lOlwiV2FybmluZ1wiLGdseXBoOlwiZTdiYVwifSx7bmFtZTpcIlJlYWRpbmdMaXN0XCIsZ2x5cGg6XCJlN2JjXCJ9LHtuYW1lOlwiRWR1Y2F0aW9uXCIsZ2x5cGg6XCJlN2JlXCJ9LHtuYW1lOlwiU2hvcHBpbmdDYXJ0XCIsZ2x5cGg6XCJlN2JmXCJ9LHtuYW1lOlwiVHJhaW5cIixnbHlwaDpcImU3YzBcIn0se25hbWU6XCJGbGFnXCIsZ2x5cGg6XCJlN2MxXCJ9LHtuYW1lOlwiTW92ZVwiLGdseXBoOlwiZTdjMlwifSx7bmFtZTpcIlBhZ2VcIixnbHlwaDpcImU3YzNcIn0se25hbWU6XCJUYXNrVmlld1wiLGdseXBoOlwiZTdjNFwifSx7bmFtZTpcIkJyb3dzZVBob3Rvc1wiLGdseXBoOlwiZTdjNVwifSx7bmFtZTpcIkhhbGZTdGFyTGVmdFwiLGdseXBoOlwiZTdjNlwifSx7bmFtZTpcIkhhbGZTdGFyUmlnaHRcIixnbHlwaDpcImU3YzdcIn0se25hbWU6XCJSZWNvcmRcIixnbHlwaDpcImU3YzhcIn0se25hbWU6XCJUb3VjaFBvaW50ZXJcIixnbHlwaDpcImU3YzlcIn0se25hbWU6XCJMYW5nSlBOXCIsZ2x5cGg6XCJlN2RlXCJ9LHtuYW1lOlwiRmVycnlcIixnbHlwaDpcImU3ZTNcIn0se25hbWU6XCJIaWdobGlnaHRcIixnbHlwaDpcImU3ZTZcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJOb3RpZmljYXRpb25cIixnbHlwaDpcImU3ZTdcIn0se25hbWU6XCJQb3dlckJ1dHRvblwiLGdseXBoOlwiZTdlOFwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTmFycm93ZXJcIixnbHlwaDpcImU3ZWFcIn0se25hbWU6XCJSZXNpemVUb3VjaFNob3J0ZXJcIixnbHlwaDpcImU3ZWJcIn0se25hbWU6XCJEcml2aW5nTW9kZVwiLGdseXBoOlwiZTdlY1wifSx7bmFtZTpcIlJpbmdlclNpbGVudFwiLGdseXBoOlwiZTdlZFwifSx7bmFtZTpcIk90aGVyVXNlclwiLGdseXBoOlwiZTdlZVwifSx7bmFtZTpcIkFkbWluXCIsZ2x5cGg6XCJlN2VmXCJ9LHtuYW1lOlwiQ0NcIixnbHlwaDpcImU3ZjBcIn0se25hbWU6XCJTRENhcmRcIixnbHlwaDpcImU3ZjFcIn0se25hbWU6XCJDYWxsRm9yd2FyZGluZ1wiLGdseXBoOlwiZTdmMlwifSx7bmFtZTpcIlNldHRpbmdzRGlzcGxheVNvdW5kXCIsZ2x5cGg6XCJlN2YzXCJ9LHtuYW1lOlwiVFZNb25pdG9yXCIsZ2x5cGg6XCJlN2Y0XCJ9LHtuYW1lOlwiU3BlYWtlcnNcIixnbHlwaDpcImU3ZjVcIn0se25hbWU6XCJIZWFkcGhvbmVcIixnbHlwaDpcImU3ZjZcIn0se25hbWU6XCJEZXZpY2VMYXB0b3BQaWNcIixnbHlwaDpcImU3ZjdcIn0se25hbWU6XCJEZXZpY2VMYXB0b3BOb1BpY1wiLGdseXBoOlwiZTdmOFwifSx7bmFtZTpcIkRldmljZU1vbml0b3JSaWdodFBpY1wiLGdseXBoOlwiZTdmOVwifSx7bmFtZTpcIkRldmljZU1vbml0b3JMZWZ0UGljXCIsZ2x5cGg6XCJlN2ZhXCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvck5vUGljXCIsZ2x5cGg6XCJlN2ZiXCJ9LHtuYW1lOlwiR2FtZVwiLGdseXBoOlwiZTdmY1wifSx7bmFtZTpcIkhvcml6b250YWxUYWJLZXlcIixnbHlwaDpcImU3ZmRcIn0se25hbWU6XCJTdHJlZXRzaWRlU3BsaXRNaW5pbWl6ZVwiLGdseXBoOlwiZTgwMlwifSx7bmFtZTpcIlN0cmVldHNpZGVTcGxpdEV4cGFuZFwiLGdseXBoOlwiZTgwM1wifSx7bmFtZTpcIkNhclwiLGdseXBoOlwiZTgwNFwifSx7bmFtZTpcIldhbGtcIixnbHlwaDpcImU4MDVcIn0se25hbWU6XCJCdXNcIixnbHlwaDpcImU4MDZcIn0se25hbWU6XCJUaWx0VXBcIixnbHlwaDpcImU4MDlcIn0se25hbWU6XCJUaWx0RG93blwiLGdseXBoOlwiZTgwYVwifSx7bmFtZTpcIkNhbGxDb250cm9sXCIsZ2x5cGg6XCJlODBiXCJ9LHtuYW1lOlwiUm90YXRlTWFwUmlnaHRcIixnbHlwaDpcImU4MGNcIn0se25hbWU6XCJSb3RhdGVNYXBMZWZ0XCIsZ2x5cGg6XCJlODBkXCJ9LHtuYW1lOlwiSG9tZVwiLGdseXBoOlwiZTgwZlwifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvblwiLGdseXBoOlwiZTgxMVwifSx7bmFtZTpcIk1hcENvbXBhc3NUb3BcIixnbHlwaDpcImU4MTJcIn0se25hbWU6XCJNYXBDb21wYXNzQm90dG9tXCIsZ2x5cGg6XCJlODEzXCJ9LHtuYW1lOlwiSW5jaWRlbnRUcmlhbmdsZVwiLGdseXBoOlwiZTgxNFwifSx7bmFtZTpcIlRvdWNoXCIsZ2x5cGg6XCJlODE1XCJ9LHtuYW1lOlwiTWFwRGlyZWN0aW9uc1wiLGdseXBoOlwiZTgxNlwifSx7bmFtZTpcIlN0YXJ0UG9pbnRcIixnbHlwaDpcImU4MTlcIn0se25hbWU6XCJTdG9wUG9pbnRcIixnbHlwaDpcImU4MWFcIn0se25hbWU6XCJFbmRQb2ludFwiLGdseXBoOlwiZTgxYlwifSx7bmFtZTpcIkhpc3RvcnlcIixnbHlwaDpcImU4MWNcIn0se25hbWU6XCJMb2NhdGlvblwiLGdseXBoOlwiZTgxZFwifSx7bmFtZTpcIk1hcExheWVyc1wiLGdseXBoOlwiZTgxZVwifSx7bmFtZTpcIkFjY2lkZW50XCIsZ2x5cGg6XCJlODFmXCJ9LHtuYW1lOlwiV29ya1wiLGdseXBoOlwiZTgyMVwifSx7bmFtZTpcIkNvbnN0cnVjdGlvblwiLGdseXBoOlwiZTgyMlwifSx7bmFtZTpcIlJlY2VudFwiLGdseXBoOlwiZTgyM1wifSx7bmFtZTpcIkJhbmtcIixnbHlwaDpcImU4MjVcIn0se25hbWU6XCJEb3dubG9hZE1hcFwiLGdseXBoOlwiZTgyNlwifSx7bmFtZTpcIklua2luZ1Rvb2xGaWxsMlwiLGdseXBoOlwiZTgyOVwifSx7bmFtZTpcIkhpZ2hsaWdodEZpbGwyXCIsZ2x5cGg6XCJlODJhXCJ9LHtuYW1lOlwiRXJhc2VUb29sRmlsbFwiLGdseXBoOlwiZTgyYlwifSx7bmFtZTpcIkVyYXNlVG9vbEZpbGwyXCIsZ2x5cGg6XCJlODJjXCJ9LHtuYW1lOlwiRGljdGlvbmFyeVwiLGdseXBoOlwiZTgyZFwifSx7bmFtZTpcIkRpY3Rpb25hcnlBZGRcIixnbHlwaDpcImU4MmVcIn0se25hbWU6XCJUb29sVGlwXCIsZ2x5cGg6XCJlODJmXCJ9LHtuYW1lOlwiQ2hyb21lQmFja1wiLGdseXBoOlwiZTgzMFwifSx7bmFtZTpcIlByb3Zpc2lvbmluZ1BhY2thZ2VcIixnbHlwaDpcImU4MzVcIn0se25hbWU6XCJBZGRSZW1vdGVEZXZpY2VcIixnbHlwaDpcImU4MzZcIn0se25hbWU6XCJGb2xkZXJPcGVuXCIsZ2x5cGg6XCJlODM4XCJ9LHtuYW1lOlwiRXRoZXJuZXRcIixnbHlwaDpcImU4MzlcIn0se25hbWU6XCJTaGFyZUJyb2FkYmFuZFwiLGdseXBoOlwiZTgzYVwifSx7bmFtZTpcIkRpcmVjdEFjY2Vzc1wiLGdseXBoOlwiZTgzYlwifSx7bmFtZTpcIkRpYWxVcFwiLGdseXBoOlwiZTgzY1wifSx7bmFtZTpcIkRlZmVuZGVyQXBwXCIsZ2x5cGg6XCJlODNkXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZTgzZVwifSx7bmFtZTpcIkJhdHRlcnkxMFwiLGdseXBoOlwiZTgzZlwifSx7bmFtZTpcIlBpbm5lZFwiLGdseXBoOlwiZTg0MFwifSx7bmFtZTpcIlBpbkZpbGxcIixnbHlwaDpcImU4NDFcIn0se25hbWU6XCJQaW5uZWRGaWxsXCIsZ2x5cGg6XCJlODQyXCJ9LHtuYW1lOlwiUGVyaW9kS2V5XCIsZ2x5cGg6XCJlODQzXCJ9LHtuYW1lOlwiUHVuY0tleVwiLGdseXBoOlwiZTg0NFwifSx7bmFtZTpcIlJldlRvZ2dsZUtleVwiLGdseXBoOlwiZTg0NVwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMVwiLGdseXBoOlwiZTg0NlwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMlwiLGdseXBoOlwiZTg0N1wifSx7bmFtZTpcIkxlZnRRdW90ZVwiLGdseXBoOlwiZTg0OFwifSx7bmFtZTpcIlJpZ2h0UXVvdGVcIixnbHlwaDpcImU4NDlcIn0se25hbWU6XCJEb3duU2hpZnRLZXlcIixnbHlwaDpcImU4NGFcIn0se25hbWU6XCJVcFNoaWZ0S2V5XCIsZ2x5cGg6XCJlODRiXCJ9LHtuYW1lOlwiUHVuY0tleTBcIixnbHlwaDpcImU4NGNcIn0se25hbWU6XCJQdW5jS2V5TGVmdEJvdHRvbVwiLGdseXBoOlwiZTg0ZFwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lM1wiLGdseXBoOlwiZTg0ZVwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lNFwiLGdseXBoOlwiZTg0ZlwifSx7bmFtZTpcIkJhdHRlcnkwXCIsZ2x5cGg6XCJlODUwXCJ9LHtuYW1lOlwiQmF0dGVyeTFcIixnbHlwaDpcImU4NTFcIn0se25hbWU6XCJCYXR0ZXJ5MlwiLGdseXBoOlwiZTg1MlwifSx7bmFtZTpcIkJhdHRlcnkzXCIsZ2x5cGg6XCJlODUzXCJ9LHtuYW1lOlwiQmF0dGVyeTRcIixnbHlwaDpcImU4NTRcIn0se25hbWU6XCJCYXR0ZXJ5NVwiLGdseXBoOlwiZTg1NVwifSx7bmFtZTpcIkJhdHRlcnk2XCIsZ2x5cGg6XCJlODU2XCJ9LHtuYW1lOlwiQmF0dGVyeTdcIixnbHlwaDpcImU4NTdcIn0se25hbWU6XCJCYXR0ZXJ5OFwiLGdseXBoOlwiZTg1OFwifSx7bmFtZTpcIkJhdHRlcnk5XCIsZ2x5cGg6XCJlODU5XCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZTg1YVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzFcIixnbHlwaDpcImU4NWJcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJlODVjXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZTg1ZFwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzRcIixnbHlwaDpcImU4NWVcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJlODVmXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZTg2MFwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzdcIixnbHlwaDpcImU4NjFcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJlODYyXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMFwiLGdseXBoOlwiZTg2M1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjFcIixnbHlwaDpcImU4NjRcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIyXCIsZ2x5cGg6XCJlODY1XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyM1wiLGdseXBoOlwiZTg2NlwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjRcIixnbHlwaDpcImU4NjdcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI1XCIsZ2x5cGg6XCJlODY4XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyNlwiLGdseXBoOlwiZTg2OVwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjdcIixnbHlwaDpcImU4NmFcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI4XCIsZ2x5cGg6XCJlODZiXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczFcIixnbHlwaDpcImU4NmNcIn0se25hbWU6XCJTaWduYWxCYXJzMlwiLGdseXBoOlwiZTg2ZFwifSx7bmFtZTpcIlNpZ25hbEJhcnMzXCIsZ2x5cGg6XCJlODZlXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczRcIixnbHlwaDpcImU4NmZcIn0se25hbWU6XCJTaWduYWxCYXJzNVwiLGdseXBoOlwiZTg3MFwifSx7bmFtZTpcIlNpZ25hbE5vdENvbm5lY3RlZFwiLGdseXBoOlwiZTg3MVwifSx7bmFtZTpcIldpZmkxXCIsZ2x5cGg6XCJlODcyXCJ9LHtuYW1lOlwiV2lmaTJcIixnbHlwaDpcImU4NzNcIn0se25hbWU6XCJXaWZpM1wiLGdseXBoOlwiZTg3NFwifSx7bmFtZTpcIk1vYlNJTUxvY2tcIixnbHlwaDpcImU4NzVcIn0se25hbWU6XCJNb2JTSU1NaXNzaW5nXCIsZ2x5cGg6XCJlODc2XCJ9LHtuYW1lOlwiVmlicmF0ZVwiLGdseXBoOlwiZTg3N1wifSx7bmFtZTpcIlJvYW1pbmdJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJlODc4XCJ9LHtuYW1lOlwiUm9hbWluZ0RvbWVzdGljXCIsZ2x5cGg6XCJlODc5XCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJlODdhXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRSb2FtaW5nXCIsZ2x5cGg6XCJlODdiXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVwiLGdseXBoOlwiZTg3Y1wifSx7bmFtZTpcIkpwblJvbWFuamlMb2NrXCIsZ2x5cGg6XCJlODdkXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVNoaWZ0XCIsZ2x5cGg6XCJlODdlXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaVNoaWZ0TG9ja1wiLGdseXBoOlwiZTg3ZlwifSx7bmFtZTpcIlN0YXR1c0RhdGFUcmFuc2ZlclwiLGdseXBoOlwiZTg4MFwifSx7bmFtZTpcIlN0YXR1c0RhdGFUcmFuc2ZlclZQTlwiLGdseXBoOlwiZTg4MVwifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0yXCIsZ2x5cGg6XCJlODgyXCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTJWUE5cIixnbHlwaDpcImU4ODNcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMVwiLGdseXBoOlwiZTg4NFwifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0xVlBOXCIsZ2x5cGg6XCJlODg1XCJ9LHtuYW1lOlwiU3RhdHVzU0dMVEVcIixnbHlwaDpcImU4ODZcIn0se25hbWU6XCJTdGF0dXNTR0xURUNlbGxcIixnbHlwaDpcImU4ODdcIn0se25hbWU6XCJTdGF0dXNTR0xURURhdGFWUE5cIixnbHlwaDpcImU4ODhcIn0se25hbWU6XCJTdGF0dXNWUE5cIixnbHlwaDpcImU4ODlcIn0se25hbWU6XCJXaWZpSG90c3BvdFwiLGdseXBoOlwiZTg4YVwifSx7bmFtZTpcIkxhbmd1YWdlS29yXCIsZ2x5cGg6XCJlODhiXCJ9LHtuYW1lOlwiTGFuZ3VhZ2VDaHRcIixnbHlwaDpcImU4OGNcIn0se25hbWU6XCJMYW5ndWFnZUNoc1wiLGdseXBoOlwiZTg4ZFwifSx7bmFtZTpcIlVTQlwiLGdseXBoOlwiZTg4ZVwifSx7bmFtZTpcIklua2luZ1Rvb2xGaWxsXCIsZ2x5cGg6XCJlODhmXCJ9LHtuYW1lOlwiVmlld1wiLGdseXBoOlwiZTg5MFwifSx7bmFtZTpcIkhpZ2hsaWdodEZpbGxcIixnbHlwaDpcImU4OTFcIn0se25hbWU6XCJQcmV2aW91c1wiLGdseXBoOlwiZTg5MlwifSx7bmFtZTpcIk5leHRcIixnbHlwaDpcImU4OTNcIn0se25hbWU6XCJDbGVhclwiLGdseXBoOlwiZTg5NFwifSx7bmFtZTpcIlN5bmNcIixnbHlwaDpcImU4OTVcIn0se25hbWU6XCJEb3dubG9hZFwiLGdseXBoOlwiZTg5NlwifSx7bmFtZTpcIkhlbHBcIixnbHlwaDpcImU4OTdcIn0se25hbWU6XCJVcGxvYWRcIixnbHlwaDpcImU4OThcIn0se25hbWU6XCJFbW9qaVwiLGdseXBoOlwiZTg5OVwifSx7bmFtZTpcIlR3b1BhZ2VcIixnbHlwaDpcImU4OWFcIn0se25hbWU6XCJMZWF2ZUNoYXRcIixnbHlwaDpcImU4OWJcIn0se25hbWU6XCJNYWlsRm9yd2FyZFwiLGdseXBoOlwiZTg5Y1wifSx7bmFtZTpcIlJvdGF0ZUNhbWVyYVwiLGdseXBoOlwiZTg5ZVwifSx7bmFtZTpcIkNsb3NlUGFuZVwiLGdseXBoOlwiZTg5ZlwifSx7bmFtZTpcIk9wZW5QYW5lXCIsZ2x5cGg6XCJlOGEwXCJ9LHtuYW1lOlwiUHJldmlld0xpbmtcIixnbHlwaDpcImU4YTFcIn0se25hbWU6XCJBdHRhY2hDYW1lcmFcIixnbHlwaDpcImU4YTJcIn0se25hbWU6XCJab29tSW5cIixnbHlwaDpcImU4YTNcIn0se25hbWU6XCJCb29rbWFya3NcIixnbHlwaDpcImU4YTRcIn0se25hbWU6XCJEb2N1bWVudFwiLGdseXBoOlwiZThhNVwifSx7bmFtZTpcIlByb3RlY3RlZERvY3VtZW50XCIsZ2x5cGg6XCJlOGE2XCJ9LHtuYW1lOlwiT3BlbkluTmV3V2luZG93XCIsZ2x5cGg6XCJlOGE3XCJ9LHtuYW1lOlwiTWFpbEZpbGxcIixnbHlwaDpcImU4YThcIn0se25hbWU6XCJWaWV3QWxsXCIsZ2x5cGg6XCJlOGE5XCJ9LHtuYW1lOlwiVmlkZW9DaGF0XCIsZ2x5cGg6XCJlOGFhXCJ9LHtuYW1lOlwiU3dpdGNoXCIsZ2x5cGg6XCJlOGFiXCJ9LHtuYW1lOlwiUmVuYW1lXCIsZ2x5cGg6XCJlOGFjXCJ9LHtuYW1lOlwiR29cIixnbHlwaDpcImU4YWRcIn0se25hbWU6XCJTdXJmYWNlSHViXCIsZ2x5cGg6XCJlOGFlXCJ9LHtuYW1lOlwiUmVtb3RlXCIsZ2x5cGg6XCJlOGFmXCJ9LHtuYW1lOlwiQ2xpY2tcIixnbHlwaDpcImU4YjBcIn0se25hbWU6XCJTaHVmZmxlXCIsZ2x5cGg6XCJlOGIxXCJ9LHtuYW1lOlwiTW92aWVzXCIsZ2x5cGg6XCJlOGIyXCJ9LHtuYW1lOlwiU2VsZWN0QWxsXCIsZ2x5cGg6XCJlOGIzXCJ9LHtuYW1lOlwiT3JpZW50YXRpb25cIixnbHlwaDpcImU4YjRcIn0se25hbWU6XCJJbXBvcnRcIixnbHlwaDpcImU4YjVcIn0se25hbWU6XCJJbXBvcnRBbGxcIixnbHlwaDpcImU4YjZcIn0se25hbWU6XCJGb2xkZXJcIixnbHlwaDpcImU4YjdcIn0se25hbWU6XCJXZWJjYW1cIixnbHlwaDpcImU4YjhcIn0se25hbWU6XCJQaWN0dXJlXCIsZ2x5cGg6XCJlOGI5XCJ9LHtuYW1lOlwiQ2FwdGlvblwiLGdseXBoOlwiZThiYVwifSx7bmFtZTpcIkNocm9tZUNsb3NlXCIsZ2x5cGg6XCJlOGJiXCJ9LHtuYW1lOlwiU2hvd1Jlc3VsdHNcIixnbHlwaDpcImU4YmNcIn0se25hbWU6XCJNZXNzYWdlXCIsZ2x5cGg6XCJlOGJkXCJ9LHtuYW1lOlwiTGVhZlwiLGdseXBoOlwiZThiZVwifSx7bmFtZTpcIkNhbGVuZGFyRGF5XCIsZ2x5cGg6XCJlOGJmXCJ9LHtuYW1lOlwiQ2FsZW5kYXJXZWVrXCIsZ2x5cGg6XCJlOGMwXCJ9LHtuYW1lOlwiQ2hhcmFjdGVyc1wiLGdseXBoOlwiZThjMVwifSx7bmFtZTpcIk1haWxSZXBseUFsbFwiLGdseXBoOlwiZThjMlwifSx7bmFtZTpcIlJlYWRcIixnbHlwaDpcImU4YzNcIn0se25hbWU6XCJTaG93QmNjXCIsZ2x5cGg6XCJlOGM0XCJ9LHtuYW1lOlwiSGlkZUJjY1wiLGdseXBoOlwiZThjNVwifSx7bmFtZTpcIkN1dFwiLGdseXBoOlwiZThjNlwifSx7bmFtZTpcIlBheW1lbnRDYXJkXCIsZ2x5cGg6XCJlOGM3XCJ9LHtuYW1lOlwiQ29weVwiLGdseXBoOlwiZThjOFwifSx7bmFtZTpcIkltcG9ydGFudFwiLGdseXBoOlwiZThjOVwifSx7bmFtZTpcIk1haWxSZXBseVwiLGdseXBoOlwiZThjYVwifSx7bmFtZTpcIlNvcnRcIixnbHlwaDpcImU4Y2JcIn0se25hbWU6XCJNb2JpbGVUYWJsZXRcIixnbHlwaDpcImU4Y2NcIn0se25hbWU6XCJEaXNjb25uZWN0RHJpdmVcIixnbHlwaDpcImU4Y2RcIn0se25hbWU6XCJNYXBEcml2ZVwiLGdseXBoOlwiZThjZVwifSx7bmFtZTpcIkNvbnRhY3RQcmVzZW5jZVwiLGdseXBoOlwiZThjZlwifSx7bmFtZTpcIlByaW9yaXR5XCIsZ2x5cGg6XCJlOGQwXCJ9LHtuYW1lOlwiR290b1RvZGF5XCIsZ2x5cGg6XCJlOGQxXCJ9LHtuYW1lOlwiRm9udFwiLGdseXBoOlwiZThkMlwifSx7bmFtZTpcIkZvbnRDb2xvclwiLGdseXBoOlwiZThkM1wifSx7bmFtZTpcIkNvbnRhY3QyXCIsZ2x5cGg6XCJlOGQ0XCJ9LHtuYW1lOlwiRm9sZGVyRmlsbFwiLGdseXBoOlwiZThkNVwifSx7bmFtZTpcIkF1ZGlvXCIsZ2x5cGg6XCJlOGQ2XCJ9LHtuYW1lOlwiUGVybWlzc2lvbnNcIixnbHlwaDpcImU4ZDdcIn0se25hbWU6XCJEaXNhYmxlVXBkYXRlc1wiLGdseXBoOlwiZThkOFwifSx7bmFtZTpcIlVuZmF2b3JpdGVcIixnbHlwaDpcImU4ZDlcIn0se25hbWU6XCJPcGVuTG9jYWxcIixnbHlwaDpcImU4ZGFcIn0se25hbWU6XCJJdGFsaWNcIixnbHlwaDpcImU4ZGJcIn0se25hbWU6XCJVbmRlcmxpbmVcIixnbHlwaDpcImU4ZGNcIn0se25hbWU6XCJCb2xkXCIsZ2x5cGg6XCJlOGRkXCJ9LHtuYW1lOlwiTW92ZVRvRm9sZGVyXCIsZ2x5cGg6XCJlOGRlXCJ9LHtuYW1lOlwiTGlrZURpc2xpa2VcIixnbHlwaDpcImU4ZGZcIn0se25hbWU6XCJEaXNsaWtlXCIsZ2x5cGg6XCJlOGUwXCJ9LHtuYW1lOlwiTGlrZVwiLGdseXBoOlwiZThlMVwifSx7bmFtZTpcIkFsaWduUmlnaHRcIixnbHlwaDpcImU4ZTJcIn0se25hbWU6XCJBbGlnbkNlbnRlclwiLGdseXBoOlwiZThlM1wifSx7bmFtZTpcIkFsaWduTGVmdFwiLGdseXBoOlwiZThlNFwifSx7bmFtZTpcIk9wZW5GaWxlXCIsZ2x5cGg6XCJlOGU1XCJ9LHtuYW1lOlwiQ2xlYXJTZWxlY3Rpb25cIixnbHlwaDpcImU4ZTZcIn0se25hbWU6XCJGb250RGVjcmVhc2VcIixnbHlwaDpcImU4ZTdcIn0se25hbWU6XCJGb250SW5jcmVhc2VcIixnbHlwaDpcImU4ZThcIn0se25hbWU6XCJGb250U2l6ZVwiLGdseXBoOlwiZThlOVwifSx7bmFtZTpcIkNlbGxQaG9uZVwiLGdseXBoOlwiZThlYVwifSx7bmFtZTpcIlJlc2hhcmVcIixnbHlwaDpcImU4ZWJcIn0se25hbWU6XCJUYWdcIixnbHlwaDpcImU4ZWNcIn0se25hbWU6XCJSZXBlYXRPbmVcIixnbHlwaDpcImU4ZWRcIn0se25hbWU6XCJSZXBlYXRBbGxcIixnbHlwaDpcImU4ZWVcIn0se25hbWU6XCJDYWxjdWxhdG9yXCIsZ2x5cGg6XCJlOGVmXCJ9LHtuYW1lOlwiRGlyZWN0aW9uc1wiLGdseXBoOlwiZThmMFwifSx7bmFtZTpcIkxpYnJhcnlcIixnbHlwaDpcImU4ZjFcIn0se25hbWU6XCJDaGF0QnViYmxlc1wiLGdseXBoOlwiZThmMlwifSx7bmFtZTpcIlBvc3RVcGRhdGVcIixnbHlwaDpcImU4ZjNcIn0se25hbWU6XCJOZXdGb2xkZXJcIixnbHlwaDpcImU4ZjRcIn0se25hbWU6XCJDYWxlbmRhclJlcGx5XCIsZ2x5cGg6XCJlOGY1XCJ9LHtuYW1lOlwiVW5zeW5jRm9sZGVyXCIsZ2x5cGg6XCJlOGY2XCJ9LHtuYW1lOlwiU3luY0ZvbGRlclwiLGdseXBoOlwiZThmN1wifSx7bmFtZTpcIkJsb2NrQ29udGFjdFwiLGdseXBoOlwiZThmOFwifSx7bmFtZTpcIlN3aXRjaEFwcHNcIixnbHlwaDpcImU4ZjlcIn0se25hbWU6XCJBZGRGcmllbmRcIixnbHlwaDpcImU4ZmFcIn0se25hbWU6XCJBY2NlcHRcIixnbHlwaDpcImU4ZmJcIn0se25hbWU6XCJHb1RvU3RhcnRcIixnbHlwaDpcImU4ZmNcIn0se25hbWU6XCJCdWxsZXRlZExpc3RcIixnbHlwaDpcImU4ZmRcIn0se25hbWU6XCJTY2FuXCIsZ2x5cGg6XCJlOGZlXCJ9LHtuYW1lOlwiUHJldmlld1wiLGdseXBoOlwiZThmZlwifSx7bmFtZTpcIkdyb3VwXCIsZ2x5cGg6XCJlOTAyXCJ9LHtuYW1lOlwiWmVyb0JhcnNcIixnbHlwaDpcImU5MDRcIn0se25hbWU6XCJPbmVCYXJcIixnbHlwaDpcImU5MDVcIn0se25hbWU6XCJUd29CYXJzXCIsZ2x5cGg6XCJlOTA2XCJ9LHtuYW1lOlwiVGhyZWVCYXJzXCIsZ2x5cGg6XCJlOTA3XCJ9LHtuYW1lOlwiRm91ckJhcnNcIixnbHlwaDpcImU5MDhcIn0se25hbWU6XCJXb3JsZFwiLGdseXBoOlwiZTkwOVwifSx7bmFtZTpcIkNvbW1lbnRcIixnbHlwaDpcImU5MGFcIn0se25hbWU6XCJNdXNpY0luZm9cIixnbHlwaDpcImU5MGJcIn0se25hbWU6XCJEb2NrTGVmdFwiLGdseXBoOlwiZTkwY1wifSx7bmFtZTpcIkRvY2tSaWdodFwiLGdseXBoOlwiZTkwZFwifSx7bmFtZTpcIkRvY2tCb3R0b21cIixnbHlwaDpcImU5MGVcIn0se25hbWU6XCJSZXBhaXJcIixnbHlwaDpcImU5MGZcIn0se25hbWU6XCJBY2NvdW50c1wiLGdseXBoOlwiZTkxMFwifSx7bmFtZTpcIkR1bGxTb3VuZFwiLGdseXBoOlwiZTkxMVwifSx7bmFtZTpcIk1hbmFnZVwiLGdseXBoOlwiZTkxMlwifSx7bmFtZTpcIlN0cmVldFwiLGdseXBoOlwiZTkxM1wifSx7bmFtZTpcIlByaW50ZXIzRFwiLGdseXBoOlwiZTkxNFwifSx7bmFtZTpcIlJhZGlvQnVsbGV0XCIsZ2x5cGg6XCJlOTE1XCJ9LHtuYW1lOlwiU3RvcHdhdGNoXCIsZ2x5cGg6XCJlOTE2XCJ9LHtuYW1lOlwiUGhvdG9cIixnbHlwaDpcImU5MWJcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJcIixnbHlwaDpcImU5MWNcIn0se25hbWU6XCJGdWxsQ2lyY2xlTWFza1wiLGdseXBoOlwiZTkxZlwifSx7bmFtZTpcIkNocm9tZU1pbmltaXplXCIsZ2x5cGg6XCJlOTIxXCJ9LHtuYW1lOlwiQ2hyb21lTWF4aW1pemVcIixnbHlwaDpcImU5MjJcIn0se25hbWU6XCJDaHJvbWVSZXN0b3JlXCIsZ2x5cGg6XCJlOTIzXCJ9LHtuYW1lOlwiQW5ub3RhdGlvblwiLGdseXBoOlwiZTkyNFwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWVNtXCIsZ2x5cGg6XCJlOTI1XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZTWRcIixnbHlwaDpcImU5MjZcIn0se25hbWU6XCJTd2lwZVwiLGdseXBoOlwiZTkyN1wifSx7bmFtZTpcIkZpbmdlcnByaW50XCIsZ2x5cGg6XCJlOTI4XCJ9LHtuYW1lOlwiSGFuZHdyaXRpbmdcIixnbHlwaDpcImU5MjlcIn0se25hbWU6XCJDaHJvbWVCYWNrVG9XaW5kb3dcIixnbHlwaDpcImU5MmNcIn0se25hbWU6XCJDaHJvbWVGdWxsU2NyZWVuXCIsZ2x5cGg6XCJlOTJkXCJ9LHtuYW1lOlwiS2V5Ym9hcmRTdGFuZGFyZFwiLGdseXBoOlwiZTkyZVwifSx7bmFtZTpcIktleWJvYXJkRGlzbWlzc1wiLGdseXBoOlwiZTkyZlwifSx7bmFtZTpcIkNvbXBsZXRlZFwiLGdseXBoOlwiZTkzMFwifSx7bmFtZTpcIkNocm9tZUFubm90YXRlXCIsZ2x5cGg6XCJlOTMxXCJ9LHtuYW1lOlwiTGFiZWxcIixnbHlwaDpcImU5MzJcIn0se25hbWU6XCJJQmVhbVwiLGdseXBoOlwiZTkzM1wifSx7bmFtZTpcIklCZWFtT3V0bGluZVwiLGdseXBoOlwiZTkzNFwifSx7bmFtZTpcIkZsaWNrRG93blwiLGdseXBoOlwiZTkzNVwifSx7bmFtZTpcIkZsaWNrVXBcIixnbHlwaDpcImU5MzZcIn0se25hbWU6XCJGbGlja0xlZnRcIixnbHlwaDpcImU5MzdcIn0se25hbWU6XCJGbGlja1JpZ2h0XCIsZ2x5cGg6XCJlOTM4XCJ9LHtuYW1lOlwiRmVlZGJhY2tBcHBcIixnbHlwaDpcImU5MzlcIn0se25hbWU6XCJNdXNpY0FsYnVtXCIsZ2x5cGg6XCJlOTNjXCJ9LHtuYW1lOlwiU3RyZWFtaW5nXCIsZ2x5cGg6XCJlOTNlXCJ9LHtuYW1lOlwiQ29kZVwiLGdseXBoOlwiZTk0M1wifSx7bmFtZTpcIlJldHVyblRvV2luZG93XCIsZ2x5cGg6XCJlOTQ0XCJ9LHtuYW1lOlwiTGlnaHRuaW5nQm9sdFwiLGdseXBoOlwiZTk0NVwifSx7bmFtZTpcIkluZm9cIixnbHlwaDpcImU5NDZcIn0se25hbWU6XCJDYWxjdWxhdG9yTXVsdGlwbHlcIixnbHlwaDpcImU5NDdcIn0se25hbWU6XCJDYWxjdWxhdG9yQWRkaXRpb25cIixnbHlwaDpcImU5NDhcIn0se25hbWU6XCJDYWxjdWxhdG9yU3VidHJhY3RcIixnbHlwaDpcImU5NDlcIn0se25hbWU6XCJDYWxjdWxhdG9yRGl2aWRlXCIsZ2x5cGg6XCJlOTRhXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvclNxdWFyZXJvb3RcIixnbHlwaDpcImU5NGJcIn0se25hbWU6XCJDYWxjdWxhdG9yUGVyY2VudGFnZVwiLGdseXBoOlwiZTk0Y1wifSx7bmFtZTpcIkNhbGN1bGF0b3JOZWdhdGVcIixnbHlwaDpcImU5NGRcIn0se25hbWU6XCJDYWxjdWxhdG9yRXF1YWxUb1wiLGdseXBoOlwiZTk0ZVwifSx7bmFtZTpcIkNhbGN1bGF0b3JCYWNrc3BhY2VcIixnbHlwaDpcImU5NGZcIn0se25hbWU6XCJDb21wb25lbnRcIixnbHlwaDpcImU5NTBcIn0se25hbWU6XCJETUNcIixnbHlwaDpcImU5NTFcIn0se25hbWU6XCJEb2NrXCIsZ2x5cGg6XCJlOTUyXCJ9LHtuYW1lOlwiTXVsdGltZWRpYURNU1wiLGdseXBoOlwiZTk1M1wifSx7bmFtZTpcIk11bHRpbWVkaWFEVlJcIixnbHlwaDpcImU5NTRcIn0se25hbWU6XCJNdWx0aW1lZGlhUE1QXCIsZ2x5cGg6XCJlOTU1XCJ9LHtuYW1lOlwiUHJpbnRmYXhQcmludGVyRmlsZVwiLGdseXBoOlwiZTk1NlwifSx7bmFtZTpcIlNlbnNvclwiLGdseXBoOlwiZTk1N1wifSx7bmFtZTpcIlN0b3JhZ2VPcHRpY2FsXCIsZ2x5cGg6XCJlOTU4XCJ9LHtuYW1lOlwiQ29tbXVuaWNhdGlvbnNcIixnbHlwaDpcImU5NWFcIn0se25hbWU6XCJIZWFkc2V0XCIsZ2x5cGg6XCJlOTViXCJ9LHtuYW1lOlwiUHJvamVjdG9yXCIsZ2x5cGg6XCJlOTVkXCJ9LHtuYW1lOlwiSGVhbHRoXCIsZ2x5cGg6XCJlOTVlXCJ9LHtuYW1lOlwiV2lyZVwiLGdseXBoOlwiZTk1ZlwifSx7bmFtZTpcIldlYmNhbTJcIixnbHlwaDpcImU5NjBcIn0se25hbWU6XCJJbnB1dFwiLGdseXBoOlwiZTk2MVwifSx7bmFtZTpcIk1vdXNlXCIsZ2x5cGg6XCJlOTYyXCJ9LHtuYW1lOlwiU21hcnRjYXJkXCIsZ2x5cGg6XCJlOTYzXCJ9LHtuYW1lOlwiU21hcnRjYXJkVmlydHVhbFwiLGdseXBoOlwiZTk2NFwifSx7bmFtZTpcIk1lZGlhU3RvcmFnZVRvd2VyXCIsZ2x5cGg6XCJlOTY1XCJ9LHtuYW1lOlwiUmV0dXJuS2V5U21cIixnbHlwaDpcImU5NjZcIn0se25hbWU6XCJHYW1lQ29uc29sZVwiLGdseXBoOlwiZTk2N1wifSx7bmFtZTpcIk5ldHdvcmtcIixnbHlwaDpcImU5NjhcIn0se25hbWU6XCJTdG9yYWdlTmV0d29ya1dpcmVsZXNzXCIsZ2x5cGg6XCJlOTY5XCJ9LHtuYW1lOlwiU3RvcmFnZVRhcGVcIixnbHlwaDpcImU5NmFcIn0se25hbWU6XCJDaGV2cm9uVXBTbWFsbFwiLGdseXBoOlwiZTk2ZFwifSx7bmFtZTpcIkNoZXZyb25Eb3duU21hbGxcIixnbHlwaDpcImU5NmVcIn0se25hbWU6XCJDaGV2cm9uTGVmdFNtYWxsXCIsZ2x5cGg6XCJlOTZmXCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0U21hbGxcIixnbHlwaDpcImU5NzBcIn0se25hbWU6XCJDaGV2cm9uVXBNZWRcIixnbHlwaDpcImU5NzFcIn0se25hbWU6XCJDaGV2cm9uRG93bk1lZFwiLGdseXBoOlwiZTk3MlwifSx7bmFtZTpcIkNoZXZyb25MZWZ0TWVkXCIsZ2x5cGg6XCJlOTczXCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0TWVkXCIsZ2x5cGg6XCJlOTc0XCJ9LHtuYW1lOlwiRGV2aWNlczJcIixnbHlwaDpcImU5NzVcIn0se25hbWU6XCJFeHBhbmRUaWxlXCIsZ2x5cGg6XCJlOTc2XCJ9LHtuYW1lOlwiUEMxXCIsZ2x5cGg6XCJlOTc3XCJ9LHtuYW1lOlwiUHJlc2VuY2VDaGlja2xldFwiLGdseXBoOlwiZTk3OFwifSx7bmFtZTpcIlByZXNlbmNlQ2hpY2tsZXRWaWRlb1wiLGdseXBoOlwiZTk3OVwifSx7bmFtZTpcIlJlcGx5XCIsZ2x5cGg6XCJlOTdhXCJ9LHtuYW1lOlwiU2V0VGlsZVwiLGdseXBoOlwiZTk3YlwifSx7bmFtZTpcIlR5cGVcIixnbHlwaDpcImU5N2NcIn0se25hbWU6XCJLb3JlYW5cIixnbHlwaDpcImU5N2RcIn0se25hbWU6XCJIYWxmQWxwaGFcIixnbHlwaDpcImU5N2VcIn0se25hbWU6XCJGdWxsQWxwaGFcIixnbHlwaDpcImU5N2ZcIn0se25hbWU6XCJLZXkxMk9uXCIsZ2x5cGg6XCJlOTgwXCJ9LHtuYW1lOlwiQ2hpbmVzZUNoYW5namllXCIsZ2x5cGg6XCJlOTgxXCJ9LHtuYW1lOlwiUVdFUlRZT25cIixnbHlwaDpcImU5ODJcIn0se25hbWU6XCJRV0VSVFlPZmZcIixnbHlwaDpcImU5ODNcIn0se25hbWU6XCJDaGluZXNlUXVpY2tcIixnbHlwaDpcImU5ODRcIn0se25hbWU6XCJKYXBhbmVzZVwiLGdseXBoOlwiZTk4NVwifSx7bmFtZTpcIkZ1bGxIaXJhZ2FuYVwiLGdseXBoOlwiZTk4NlwifSx7bmFtZTpcIkZ1bGxLYXRha2FuYVwiLGdseXBoOlwiZTk4N1wifSx7bmFtZTpcIkhhbGZLYXRha2FuYVwiLGdseXBoOlwiZTk4OFwifSx7bmFtZTpcIkNoaW5lc2VCb1BvTW9Gb1wiLGdseXBoOlwiZTk4OVwifSx7bmFtZTpcIkNoaW5lc2VQaW55aW5cIixnbHlwaDpcImU5OGFcIn0se25hbWU6XCJDb25zdHJ1Y3Rpb25Db25lXCIsZ2x5cGg6XCJlOThmXCJ9LHtuYW1lOlwiWGJveE9uZUNvbnNvbGVcIixnbHlwaDpcImU5OTBcIn0se25hbWU6XCJWb2x1bWUwXCIsZ2x5cGg6XCJlOTkyXCJ9LHtuYW1lOlwiVm9sdW1lMVwiLGdseXBoOlwiZTk5M1wifSx7bmFtZTpcIlZvbHVtZTJcIixnbHlwaDpcImU5OTRcIn0se25hbWU6XCJWb2x1bWUzXCIsZ2x5cGg6XCJlOTk1XCJ9LHtuYW1lOlwiQmF0dGVyeVVua25vd25cIixnbHlwaDpcImU5OTZcIn0se25hbWU6XCJXaWZpQXR0ZW50aW9uT3ZlcmxheVwiLGdseXBoOlwiZTk5OFwifSx7bmFtZTpcIlJvYm90XCIsZ2x5cGg6XCJlOTlhXCJ9LHtuYW1lOlwiVGFwQW5kU2VuZFwiLGdseXBoOlwiZTlhMVwifSx7bmFtZTpcIkZpdFBhZ2VcIixnbHlwaDpcImU5YTZcIn0se25hbWU6XCJQYXNzd29yZEtleVNob3dcIixnbHlwaDpcImU5YThcIn0se25hbWU6XCJQYXNzd29yZEtleUhpZGVcIixnbHlwaDpcImU5YTlcIn0se25hbWU6XCJCaWRpTHRyXCIsZ2x5cGg6XCJlOWFhXCJ9LHtuYW1lOlwiQmlkaVJ0bFwiLGdseXBoOlwiZTlhYlwifSx7bmFtZTpcIkZvcndhcmRTbVwiLGdseXBoOlwiZTlhY1wifSx7bmFtZTpcIkNvbW1hS2V5XCIsZ2x5cGg6XCJlOWFkXCJ9LHtuYW1lOlwiRGFzaEtleVwiLGdseXBoOlwiZTlhZVwifSx7bmFtZTpcIkR1bGxTb3VuZEtleVwiLGdseXBoOlwiZTlhZlwifSx7bmFtZTpcIkhhbGZEdWxsU291bmRcIixnbHlwaDpcImU5YjBcIn0se25hbWU6XCJSaWdodERvdWJsZVF1b3RlXCIsZ2x5cGg6XCJlOWIxXCJ9LHtuYW1lOlwiTGVmdERvdWJsZVF1b3RlXCIsZ2x5cGg6XCJlOWIyXCJ9LHtuYW1lOlwiUHVuY0tleVJpZ2h0Qm90dG9tXCIsZ2x5cGg6XCJlOWIzXCJ9LHtuYW1lOlwiUHVuY0tleTFcIixnbHlwaDpcImU5YjRcIn0se25hbWU6XCJQdW5jS2V5MlwiLGdseXBoOlwiZTliNVwifSx7bmFtZTpcIlB1bmNLZXkzXCIsZ2x5cGg6XCJlOWI2XCJ9LHtuYW1lOlwiUHVuY0tleTRcIixnbHlwaDpcImU5YjdcIn0se25hbWU6XCJQdW5jS2V5NVwiLGdseXBoOlwiZTliOFwifSx7bmFtZTpcIlB1bmNLZXk2XCIsZ2x5cGg6XCJlOWI5XCJ9LHtuYW1lOlwiUHVuY0tleTlcIixnbHlwaDpcImU5YmFcIn0se25hbWU6XCJQdW5jS2V5N1wiLGdseXBoOlwiZTliYlwifSx7bmFtZTpcIlB1bmNLZXk4XCIsZ2x5cGg6XCJlOWJjXCJ9LHtuYW1lOlwiRnJpZ2lkXCIsZ2x5cGg6XCJlOWNhXCJ9LHtuYW1lOlwiVW5rbm93blwiLGdseXBoOlwiZTljZVwifSx7bmFtZTpcIkFyZWFDaGFydFwiLGdseXBoOlwiZTlkMlwifSx7bmFtZTpcIkNoZWNrTGlzdFwiLGdseXBoOlwiZTlkNVwifSx7bmFtZTpcIkRpYWdub3N0aWNcIixnbHlwaDpcImU5ZDlcIn0se25hbWU6XCJFcXVhbGl6ZXJcIixnbHlwaDpcImU5ZTlcIn0se25hbWU6XCJQcm9jZXNzXCIsZ2x5cGg6XCJlOWYzXCJ9LHtuYW1lOlwiUHJvY2Vzc2luZ1wiLGdseXBoOlwiZTlmNVwifSx7bmFtZTpcIlJlcG9ydERvY3VtZW50XCIsZ2x5cGg6XCJlOWY5XCJ9LHtuYW1lOlwiRGVzY3JpcHRpb25cIixnbHlwaDpcIlVuaWNvZGUgcG9pbnRcIn0se25hbWU6XCJWaWRlb1NvbGlkXCIsZ2x5cGg6XCJlYTBjXCJ9LHtuYW1lOlwiTWl4ZWRNZWRpYUJhZGdlXCIsZ2x5cGg6XCJlYTBkXCJ9LHtuYW1lOlwiRGlzY29ubmVjdERpc3BsYXlcIixnbHlwaDpcImVhMTRcIn0se25hbWU6XCJTaGllbGRcIixnbHlwaDpcImVhMThcIn0se25hbWU6XCJJbmZvMlwiLGdseXBoOlwiZWExZlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlckFzdGVyaXNrXCIsZ2x5cGg6XCJlYTIxXCJ9LHtuYW1lOlwiQmV0YVwiLGdseXBoOlwiZWEyNFwifSx7bmFtZTpcIlNhdmVDb3B5XCIsZ2x5cGg6XCJlYTM1XCJ9LHtuYW1lOlwiTGlzdFwiLGdseXBoOlwiZWEzN1wifSx7bmFtZTpcIkFzdGVyaXNrXCIsZ2x5cGg6XCJlYTM4XCJ9LHtuYW1lOlwiRXJyb3JCYWRnZVwiLGdseXBoOlwiZWEzOVwifSx7bmFtZTpcIkNpcmNsZVJpbmdcIixnbHlwaDpcImVhM2FcIn0se25hbWU6XCJDaXJjbGVGaWxsXCIsZ2x5cGg6XCJlYTNiXCJ9LHtuYW1lOlwiTWVyZ2VDYWxsXCIsZ2x5cGg6XCJlYTNjXCJ9LHtuYW1lOlwiUHJpdmF0ZUNhbGxcIixnbHlwaDpcImVhM2RcIn0se25hbWU6XCJSZWNvcmQyXCIsZ2x5cGg6XCJlYTNmXCJ9LHtuYW1lOlwiQWxsQXBwc01pcnJvcmVkXCIsZ2x5cGg6XCJlYTQwXCJ9LHtuYW1lOlwiQm9va21hcmtzTWlycm9yZWRcIixnbHlwaDpcImVhNDFcIn0se25hbWU6XCJCdWxsZXRlZExpc3RNaXJyb3JlZFwiLGdseXBoOlwiZWE0MlwifSx7bmFtZTpcIkNhbGxGb3J3YXJkSW50ZXJuYXRpb25hbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQzXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRSb2FtaW5nTWlycm9yZWRcIixnbHlwaDpcImVhNDRcIn0se25hbWU6XCJDaHJvbWVCYWNrTWlycm9yZWRcIixnbHlwaDpcImVhNDdcIn0se25hbWU6XCJDbGVhclNlbGVjdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQ4XCJ9LHtuYW1lOlwiQ2xvc2VQYW5lTWlycm9yZWRcIixnbHlwaDpcImVhNDlcIn0se25hbWU6XCJDb250YWN0SW5mb01pcnJvcmVkXCIsZ2x5cGg6XCJlYTRhXCJ9LHtuYW1lOlwiRG9ja1JpZ2h0TWlycm9yZWRcIixnbHlwaDpcImVhNGJcIn0se25hbWU6XCJEb2NrTGVmdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTRjXCJ9LHtuYW1lOlwiRXhwYW5kVGlsZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTRlXCJ9LHtuYW1lOlwiR29NaXJyb3JlZFwiLGdseXBoOlwiZWE0ZlwifSx7bmFtZTpcIkdyaXBwZXJSZXNpemVNaXJyb3JlZFwiLGdseXBoOlwiZWE1MFwifSx7bmFtZTpcIkhlbHBNaXJyb3JlZFwiLGdseXBoOlwiZWE1MVwifSx7bmFtZTpcIkltcG9ydE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUyXCJ9LHtuYW1lOlwiSW1wb3J0QWxsTWlycm9yZWRcIixnbHlwaDpcImVhNTNcIn0se25hbWU6XCJMZWF2ZUNoYXRNaXJyb3JlZFwiLGdseXBoOlwiZWE1NFwifSx7bmFtZTpcIkxpc3RNaXJyb3JlZFwiLGdseXBoOlwiZWE1NVwifSx7bmFtZTpcIk1haWxGb3J3YXJkTWlycm9yZWRcIixnbHlwaDpcImVhNTZcIn0se25hbWU6XCJNYWlsUmVwbHlNaXJyb3JlZFwiLGdseXBoOlwiZWE1N1wifSx7bmFtZTpcIk1haWxSZXBseUFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU4XCJ9LHtuYW1lOlwiT3BlblBhbmVNaXJyb3JlZFwiLGdseXBoOlwiZWE1YlwifSx7bmFtZTpcIk9wZW5XaXRoTWlycm9yZWRcIixnbHlwaDpcImVhNWNcIn0se25hbWU6XCJQYXJraW5nTG9jYXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZWE1ZVwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTWVkaXVtTWlycm9yZWRcIixnbHlwaDpcImVhNWZcIn0se25hbWU6XCJSZXNpemVNb3VzZVNtYWxsTWlycm9yZWRcIixnbHlwaDpcImVhNjBcIn0se25hbWU6XCJSZXNpemVNb3VzZVRhbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2MVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTmFycm93ZXJNaXJyb3JlZFwiLGdseXBoOlwiZWE2MlwifSx7bmFtZTpcIlNlbmRNaXJyb3JlZFwiLGdseXBoOlwiZWE2M1wifSx7bmFtZTpcIlNlbmRGaWxsTWlycm9yZWRcIixnbHlwaDpcImVhNjRcIn0se25hbWU6XCJTaG93UmVzdWx0c01pcnJvcmVkXCIsZ2x5cGg6XCJlYTY1XCJ9LHtuYW1lOlwiTWVkaWFcIixnbHlwaDpcImVhNjlcIn0se25hbWU6XCJTeW5jRXJyb3JcIixnbHlwaDpcImVhNmFcIn0se25hbWU6XCJEZXZpY2VzM1wiLGdseXBoOlwiZWE2Y1wifSx7bmFtZTpcIlNsb3dNb3Rpb25PblwiLGdseXBoOlwiZWE3OVwifSx7bmFtZTpcIkxpZ2h0YnVsYlwiLGdseXBoOlwiZWE4MFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVwiLGdseXBoOlwiZWE4MVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlXCIsZ2x5cGg6XCJlYTgyXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JcIixnbHlwaDpcImVhODNcIn0se25hbWU6XCJTdGF0dXNXYXJuaW5nXCIsZ2x5cGg6XCJlYTg0XCJ9LHtuYW1lOlwiUHV6emxlXCIsZ2x5cGg6XCJlYTg2XCJ9LHtuYW1lOlwiQ2FsZW5kYXJTb2xpZFwiLGdseXBoOlwiZWE4OVwifSx7bmFtZTpcIkhvbWVTb2xpZFwiLGdseXBoOlwiZWE4YVwifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvblNvbGlkXCIsZ2x5cGg6XCJlYThiXCJ9LHtuYW1lOlwiQ29udGFjdFNvbGlkXCIsZ2x5cGg6XCJlYThjXCJ9LHtuYW1lOlwiQ29uc3RydWN0aW9uU29saWRcIixnbHlwaDpcImVhOGRcIn0se25hbWU6XCJBY2NpZGVudFNvbGlkXCIsZ2x5cGg6XCJlYThlXCJ9LHtuYW1lOlwiUmluZ2VyXCIsZ2x5cGg6XCJlYThmXCJ9LHtuYW1lOlwiUERGXCIsZ2x5cGg6XCJlYTkwXCJ9LHtuYW1lOlwiVGhvdWdodEJ1YmJsZVwiLGdseXBoOlwiZWE5MVwifSx7bmFtZTpcIkhlYXJ0QnJva2VuXCIsZ2x5cGg6XCJlYTkyXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImVhOTNcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI5XCIsZ2x5cGg6XCJlYTk0XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMTBcIixnbHlwaDpcImVhOTVcIn0se25hbWU6XCJDYWxsRm9yd2FyZGluZ01pcnJvcmVkXCIsZ2x5cGg6XCJlYTk3XCJ9LHtuYW1lOlwiTXVsdGlTZWxlY3RNaXJyb3JlZFwiLGdseXBoOlwiZWE5OFwifSx7bmFtZTpcIkJyb29tXCIsZ2x5cGg6XCJlYTk5XCJ9LHtuYW1lOlwiRm9yd2FyZENhbGxcIixnbHlwaDpcImVhYzJcIn0se25hbWU6XCJUcmFja2Vyc1wiLGdseXBoOlwiZWFkZlwifSx7bmFtZTpcIk1hcmtldFwiLGdseXBoOlwiZWFmY1wifSx7bmFtZTpcIlBpZVNpbmdsZVwiLGdseXBoOlwiZWIwNVwifSx7bmFtZTpcIlN0b2NrVXBcIixnbHlwaDpcImViMGZcIn0se25hbWU6XCJTdG9ja0Rvd25cIixnbHlwaDpcImViMTFcIn0se25hbWU6XCJEZXNpZ25cIixnbHlwaDpcImViM2NcIn0se25hbWU6XCJXZWJzaXRlXCIsZ2x5cGg6XCJlYjQxXCJ9LHtuYW1lOlwiRHJvcFwiLGdseXBoOlwiZWI0MlwifSx7bmFtZTpcIlJhZGFyXCIsZ2x5cGg6XCJlYjQ0XCJ9LHtuYW1lOlwiQnVzU29saWRcIixnbHlwaDpcImViNDdcIn0se25hbWU6XCJGZXJyeVNvbGlkXCIsZ2x5cGg6XCJlYjQ4XCJ9LHtuYW1lOlwiU3RhcnRQb2ludFNvbGlkXCIsZ2x5cGg6XCJlYjQ5XCJ9LHtuYW1lOlwiU3RvcFBvaW50U29saWRcIixnbHlwaDpcImViNGFcIn0se25hbWU6XCJFbmRQb2ludFNvbGlkXCIsZ2x5cGg6XCJlYjRiXCJ9LHtuYW1lOlwiQWlycGxhbmVTb2xpZFwiLGdseXBoOlwiZWI0Y1wifSx7bmFtZTpcIlRyYWluU29saWRcIixnbHlwaDpcImViNGRcIn0se25hbWU6XCJXb3JrU29saWRcIixnbHlwaDpcImViNGVcIn0se25hbWU6XCJSZW1pbmRlckZpbGxcIixnbHlwaDpcImViNGZcIn0se25hbWU6XCJSZW1pbmRlclwiLGdseXBoOlwiZWI1MFwifSx7bmFtZTpcIkhlYXJ0XCIsZ2x5cGg6XCJlYjUxXCJ9LHtuYW1lOlwiSGVhcnRGaWxsXCIsZ2x5cGg6XCJlYjUyXCJ9LHtuYW1lOlwiRXRoZXJuZXRFcnJvclwiLGdseXBoOlwiZWI1NVwifSx7bmFtZTpcIkV0aGVybmV0V2FybmluZ1wiLGdseXBoOlwiZWI1NlwifSx7bmFtZTpcIlN0YXR1c0Nvbm5lY3RpbmcxXCIsZ2x5cGg6XCJlYjU3XCJ9LHtuYW1lOlwiU3RhdHVzQ29ubmVjdGluZzJcIixnbHlwaDpcImViNThcIn0se25hbWU6XCJTdGF0dXNVbnNlY3VyZVwiLGdseXBoOlwiZWI1OVwifSx7bmFtZTpcIldpZmlFcnJvcjBcIixnbHlwaDpcImViNWFcIn0se25hbWU6XCJXaWZpRXJyb3IxXCIsZ2x5cGg6XCJlYjViXCJ9LHtuYW1lOlwiV2lmaUVycm9yMlwiLGdseXBoOlwiZWI1Y1wifSx7bmFtZTpcIldpZmlFcnJvcjNcIixnbHlwaDpcImViNWRcIn0se25hbWU6XCJXaWZpRXJyb3I0XCIsZ2x5cGg6XCJlYjVlXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcwXCIsZ2x5cGg6XCJlYjVmXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcxXCIsZ2x5cGg6XCJlYjYwXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmcyXCIsZ2x5cGg6XCJlYjYxXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmczXCIsZ2x5cGg6XCJlYjYyXCJ9LHtuYW1lOlwiV2lmaVdhcm5pbmc0XCIsZ2x5cGg6XCJlYjYzXCJ9LHtuYW1lOlwiRGV2aWNlczRcIixnbHlwaDpcImViNjZcIn0se25hbWU6XCJOVUlJcmlzXCIsZ2x5cGg6XCJlYjY3XCJ9LHtuYW1lOlwiTlVJRmFjZVwiLGdseXBoOlwiZWI2OFwifSx7bmFtZTpcIkdhdGV3YXlSb3V0ZXJcIixnbHlwaDpcImViNzdcIn0se25hbWU6XCJFZGl0TWlycm9yZWRcIixnbHlwaDpcImViN2VcIn0se25hbWU6XCJOVUlGUFN0YXJ0U2xpZGVIYW5kXCIsZ2x5cGg6XCJlYjgyXCJ9LHtuYW1lOlwiTlVJRlBTdGFydFNsaWRlQWN0aW9uXCIsZ2x5cGg6XCJlYjgzXCJ9LHtuYW1lOlwiTlVJRlBDb250aW51ZVNsaWRlSGFuZFwiLGdseXBoOlwiZWI4NFwifSx7bmFtZTpcIk5VSUZQQ29udGludWVTbGlkZUFjdGlvblwiLGdseXBoOlwiZWI4NVwifSx7bmFtZTpcIk5VSUZQUm9sbFJpZ2h0SGFuZFwiLGdseXBoOlwiZWI4NlwifSx7bmFtZTpcIk5VSUZQUm9sbFJpZ2h0SGFuZEFjdGlvblwiLGdseXBoOlwiZWI4N1wifSx7bmFtZTpcIk5VSUZQUm9sbExlZnRIYW5kXCIsZ2x5cGg6XCJlYjg4XCJ9LHtuYW1lOlwiTlVJRlBSb2xsTGVmdEFjdGlvblwiLGdseXBoOlwiZWI4OVwifSx7bmFtZTpcIk5VSUZQUHJlc3NIYW5kXCIsZ2x5cGg6XCJlYjhhXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc0FjdGlvblwiLGdseXBoOlwiZWI4YlwifSx7bmFtZTpcIk5VSUZQUHJlc3NSZXBlYXRIYW5kXCIsZ2x5cGg6XCJlYjhjXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc1JlcGVhdEFjdGlvblwiLGdseXBoOlwiZWI4ZFwifSx7bmFtZTpcIlN0YXR1c0Vycm9yRnVsbFwiLGdseXBoOlwiZWI5MFwifSx7bmFtZTpcIlRhc2tWaWV3RXhwYW5kZWRcIixnbHlwaDpcImViOTFcIn0se25hbWU6XCJDZXJ0aWZpY2F0ZVwiLGdseXBoOlwiZWI5NVwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWUxnXCIsZ2x5cGg6XCJlYjk2XCJ9LHtuYW1lOlwiUmV0dXJuS2V5TGdcIixnbHlwaDpcImViOTdcIn0se25hbWU6XCJGYXN0Rm9yd2FyZFwiLGdseXBoOlwiZWI5ZFwifSx7bmFtZTpcIlJld2luZFwiLGdseXBoOlwiZWI5ZVwifSx7bmFtZTpcIlBob3RvMlwiLGdseXBoOlwiZWI5ZlwifSx7bmFtZTpcIk1vYkJhdHRlcnkwXCIsZ2x5cGg6XCJlYmEwXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTFcIixnbHlwaDpcImViYTFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MlwiLGdseXBoOlwiZWJhMlwifSx7bmFtZTpcIk1vYkJhdHRlcnkzXCIsZ2x5cGg6XCJlYmEzXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTRcIixnbHlwaDpcImViYTRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5NVwiLGdseXBoOlwiZWJhNVwifSx7bmFtZTpcIk1vYkJhdHRlcnk2XCIsZ2x5cGg6XCJlYmE2XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTdcIixnbHlwaDpcImViYTdcIn0se25hbWU6XCJNb2JCYXR0ZXJ5OFwiLGdseXBoOlwiZWJhOFwifSx7bmFtZTpcIk1vYkJhdHRlcnk5XCIsZ2x5cGg6XCJlYmE5XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTEwXCIsZ2x5cGg6XCJlYmFhXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZWJhYlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzFcIixnbHlwaDpcImViYWNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJlYmFkXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZWJhZVwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzRcIixnbHlwaDpcImViYWZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJlYmIwXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZWJiMVwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzdcIixnbHlwaDpcImViYjJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJlYmIzXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZWJiNFwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzEwXCIsZ2x5cGg6XCJlYmI1XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMFwiLGdseXBoOlwiZWJiNlwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjFcIixnbHlwaDpcImViYjdcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIyXCIsZ2x5cGg6XCJlYmI4XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyM1wiLGdseXBoOlwiZWJiOVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjRcIixnbHlwaDpcImViYmFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI1XCIsZ2x5cGg6XCJlYmJiXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyNlwiLGdseXBoOlwiZWJiY1wifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjdcIixnbHlwaDpcImViYmRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI4XCIsZ2x5cGg6XCJlYmJlXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyOVwiLGdseXBoOlwiZWJiZlwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjEwXCIsZ2x5cGg6XCJlYmMwXCJ9LHtuYW1lOlwiRGljdGlvbmFyeUNsb3VkXCIsZ2x5cGg6XCJlYmMzXCJ9LHtuYW1lOlwiUmVzZXREcml2ZVwiLGdseXBoOlwiZWJjNFwifSx7bmFtZTpcIlZvbHVtZUJhcnNcIixnbHlwaDpcImViYzVcIn0se25hbWU6XCJQcm9qZWN0XCIsZ2x5cGg6XCJlYmM2XCJ9LHtuYW1lOlwiQWRqdXN0SG9sb2dyYW1cIixnbHlwaDpcImViZDJcIn0se25hbWU6XCJDbG91ZERvd25sb2FkXCIsZ2x5cGg6XCJlYmQzXCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGxCYXJzXCIsZ2x5cGg6XCJlYmQ0XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwwXCIsZ2x5cGg6XCJlYmQ1XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwxXCIsZ2x5cGg6XCJlYmQ2XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwyXCIsZ2x5cGg6XCJlYmQ3XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGwzXCIsZ2x5cGg6XCJlYmQ4XCJ9LHtuYW1lOlwiTW9iV2lmaUNhbGw0XCIsZ2x5cGg6XCJlYmQ5XCJ9LHtuYW1lOlwiRmFtaWx5XCIsZ2x5cGg6XCJlYmRhXCJ9LHtuYW1lOlwiTG9ja0ZlZWRiYWNrXCIsZ2x5cGg6XCJlYmRiXCJ9LHtuYW1lOlwiRGV2aWNlRGlzY292ZXJ5XCIsZ2x5cGg6XCJlYmRlXCJ9LHtuYW1lOlwiV2luZERpcmVjdGlvblwiLGdseXBoOlwiZWJlNlwifSx7bmFtZTpcIlJpZ2h0QXJyb3dLZXlUaW1lMFwiLGdseXBoOlwiZWJlN1wifSx7bmFtZTpcIkJ1Z1wiLGdseXBoOlwiZWJlOFwifSx7bmFtZTpcIlRhYmxldE1vZGVcIixnbHlwaDpcImViZmNcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVMZWZ0XCIsZ2x5cGg6XCJlYmZkXCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVMZWZ0XCIsZ2x5cGg6XCJlYmZlXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JMZWZ0XCIsZ2x5cGg6XCJlYmZmXCJ9LHtuYW1lOlwiU3RhdHVzV2FybmluZ0xlZnRcIixnbHlwaDpcImVjMDBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5VW5rbm93blwiLGdseXBoOlwiZWMwMlwifSx7bmFtZTpcIk5ldHdvcmtUb3dlclwiLGdseXBoOlwiZWMwNVwifSx7bmFtZTpcIkNpdHlOZXh0XCIsZ2x5cGg6XCJlYzA2XCJ9LHtuYW1lOlwiQ2l0eU5leHQyXCIsZ2x5cGg6XCJlYzA3XCJ9LHtuYW1lOlwiQ291cnRob3VzZVwiLGdseXBoOlwiZWMwOFwifSx7bmFtZTpcIkdyb2Nlcmllc1wiLGdseXBoOlwiZWMwOVwifSx7bmFtZTpcIlN1c3RhaW5hYmxlXCIsZ2x5cGg6XCJlYzBhXCJ9LHtuYW1lOlwiQnVpbGRpbmdFbmVyZ3lcIixnbHlwaDpcImVjMGJcIn0se25hbWU6XCJUb2dnbGVGaWxsZWRcIixnbHlwaDpcImVjMTFcIn0se25hbWU6XCJUb2dnbGVCb3JkZXJcIixnbHlwaDpcImVjMTJcIn0se25hbWU6XCJTbGlkZXJUaHVtYlwiLGdseXBoOlwiZWMxM1wifSx7bmFtZTpcIlRvZ2dsZVRodW1iXCIsZ2x5cGg6XCJlYzE0XCJ9LHtuYW1lOlwiTWlyYWNhc3RMb2dvU21hbGxcIixnbHlwaDpcImVjMTVcIn0se25hbWU6XCJNaXJhY2FzdExvZ29MYXJnZVwiLGdseXBoOlwiZWMxNlwifSx7bmFtZTpcIlBMQVBcIixnbHlwaDpcImVjMTlcIn0se25hbWU6XCJCYWRnZVwiLGdseXBoOlwiZWMxYlwifSx7bmFtZTpcIlNpZ25hbFJvYW1pbmdcIixnbHlwaDpcImVjMWVcIn0se25hbWU6XCJNb2JpbGVMb2NrZWRcIixnbHlwaDpcImVjMjBcIn0se25hbWU6XCJJbnNpZGVySHViQXBwXCIsZ2x5cGg6XCJlYzI0XCJ9LHtuYW1lOlwiUGVyc29uYWxGb2xkZXJcIixnbHlwaDpcImVjMjVcIn0se25hbWU6XCJIb21lR3JvdXBcIixnbHlwaDpcImVjMjZcIn0se25hbWU6XCJNeU5ldHdvcmtcIixnbHlwaDpcImVjMjdcIn0se25hbWU6XCJLZXlib2FyZEZ1bGxcIixnbHlwaDpcImVjMzFcIn0se25hbWU6XCJDYWZlXCIsZ2x5cGg6XCJlYzMyXCJ9LHtuYW1lOlwiTW9iU2lnbmFsMVwiLGdseXBoOlwiZWMzN1wifSx7bmFtZTpcIk1vYlNpZ25hbDJcIixnbHlwaDpcImVjMzhcIn0se25hbWU6XCJNb2JTaWduYWwzXCIsZ2x5cGg6XCJlYzM5XCJ9LHtuYW1lOlwiTW9iU2lnbmFsNFwiLGdseXBoOlwiZWMzYVwifSx7bmFtZTpcIk1vYlNpZ25hbDVcIixnbHlwaDpcImVjM2JcIn0se25hbWU6XCJNb2JXaWZpMVwiLGdseXBoOlwiZWMzY1wifSx7bmFtZTpcIk1vYldpZmkyXCIsZ2x5cGg6XCJlYzNkXCJ9LHtuYW1lOlwiTW9iV2lmaTNcIixnbHlwaDpcImVjM2VcIn0se25hbWU6XCJNb2JXaWZpNFwiLGdseXBoOlwiZWMzZlwifSx7bmFtZTpcIk1vYkFpcnBsYW5lXCIsZ2x5cGg6XCJlYzQwXCJ9LHtuYW1lOlwiTW9iQmx1ZXRvb3RoXCIsZ2x5cGg6XCJlYzQxXCJ9LHtuYW1lOlwiTW9iQWN0aW9uQ2VudGVyXCIsZ2x5cGg6XCJlYzQyXCJ9LHtuYW1lOlwiTW9iTG9jYXRpb25cIixnbHlwaDpcImVjNDNcIn0se25hbWU6XCJNb2JXaWZpSG90c3BvdFwiLGdseXBoOlwiZWM0NFwifSx7bmFtZTpcIkxhbmd1YWdlSnBuXCIsZ2x5cGg6XCJlYzQ1XCJ9LHtuYW1lOlwiTW9iUXVpZXRIb3Vyc1wiLGdseXBoOlwiZWM0NlwifSx7bmFtZTpcIk1vYkRyaXZpbmdNb2RlXCIsZ2x5cGg6XCJlYzQ3XCJ9LHtuYW1lOlwiU3BlZWRPZmZcIixnbHlwaDpcImVjNDhcIn0se25hbWU6XCJTcGVlZE1lZGl1bVwiLGdseXBoOlwiZWM0OVwifSx7bmFtZTpcIlNwZWVkSGlnaFwiLGdseXBoOlwiZWM0YVwifSx7bmFtZTpcIlRoaXNQQ1wiLGdseXBoOlwiZWM0ZVwifSx7bmFtZTpcIk11c2ljTm90ZVwiLGdseXBoOlwiZWM0ZlwifSx7bmFtZTpcIkZpbGVFeHBsb3JlclwiLGdseXBoOlwiZWM1MFwifSx7bmFtZTpcIkZpbGVFeHBsb3JlckFwcFwiLGdseXBoOlwiZWM1MVwifSx7bmFtZTpcIkxlZnRBcnJvd0tleVRpbWUwXCIsZ2x5cGg6XCJlYzUyXCJ9LHtuYW1lOlwiTWljT2ZmXCIsZ2x5cGg6XCJlYzU0XCJ9LHtuYW1lOlwiTWljU2xlZXBcIixnbHlwaDpcImVjNTVcIn0se25hbWU6XCJNaWNFcnJvclwiLGdseXBoOlwiZWM1NlwifSx7bmFtZTpcIlBsYXliYWNrUmF0ZTF4XCIsZ2x5cGg6XCJlYzU3XCJ9LHtuYW1lOlwiUGxheWJhY2tSYXRlT3RoZXJcIixnbHlwaDpcImVjNThcIn0se25hbWU6XCJDYXNoRHJhd2VyXCIsZ2x5cGg6XCJlYzU5XCJ9LHtuYW1lOlwiQmFyY29kZVNjYW5uZXJcIixnbHlwaDpcImVjNWFcIn0se25hbWU6XCJSZWNlaXB0UHJpbnRlclwiLGdseXBoOlwiZWM1YlwifSx7bmFtZTpcIk1hZ1N0cmlwZVJlYWRlclwiLGdseXBoOlwiZWM1Y1wifSx7bmFtZTpcIkNvbXBsZXRlZFNvbGlkXCIsZ2x5cGg6XCJlYzYxXCJ9LHtuYW1lOlwiQ29tcGFuaW9uQXBwXCIsZ2x5cGg6XCJlYzY0XCJ9LHtuYW1lOlwiRmF2aWNvbjJcIixnbHlwaDpcImVjNmNcIn0se25hbWU6XCJTd2lwZVJldmVhbEFydFwiLGdseXBoOlwiZWM2ZFwifSx7bmFtZTpcIk1pY09uXCIsZ2x5cGg6XCJlYzcxXCJ9LHtuYW1lOlwiTWljQ2xpcHBpbmdcIixnbHlwaDpcImVjNzJcIn0se25hbWU6XCJUYWJsZXRTZWxlY3RlZFwiLGdseXBoOlwiZWM3NFwifSx7bmFtZTpcIk1vYmlsZVNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc1XCJ9LHtuYW1lOlwiTGFwdG9wU2VsZWN0ZWRcIixnbHlwaDpcImVjNzZcIn0se25hbWU6XCJUVk1vbml0b3JTZWxlY3RlZFwiLGdseXBoOlwiZWM3N1wifSx7bmFtZTpcIkRldmVsb3BlclRvb2xzXCIsZ2x5cGg6XCJlYzdhXCJ9LHtuYW1lOlwiTW9iQ2FsbEZvcndhcmRpbmdcIixnbHlwaDpcImVjN2VcIn0se25hbWU6XCJNb2JDYWxsRm9yd2FyZGluZ01pcnJvcmVkXCIsZ2x5cGg6XCJlYzdmXCJ9LHtuYW1lOlwiQm9keUNhbVwiLGdseXBoOlwiZWM4MFwifSx7bmFtZTpcIlBvbGljZUNhclwiLGdseXBoOlwiZWM4MVwifSx7bmFtZTpcIkRyYXdcIixnbHlwaDpcImVjODdcIn0se25hbWU6XCJEcmF3U29saWRcIixnbHlwaDpcImVjODhcIn0se25hbWU6XCJMb3dlckJyaWdodG5lc3NcIixnbHlwaDpcImVjOGFcIn0se25hbWU6XCJTY3JvbGxVcERvd25cIixnbHlwaDpcImVjOGZcIn0se25hbWU6XCJEYXRlVGltZVwiLGdseXBoOlwiZWM5MlwifSx7bmFtZTpcIkhvbG9MZW5zXCIsZ2x5cGg6XCJlYzk0XCJ9LHtuYW1lOlwiVGlsZXNcIixnbHlwaDpcImVjYTVcIn0se25hbWU6XCJQYXJ0eUxlYWRlclwiLGdseXBoOlwiZWNhN1wifSx7bmFtZTpcIkFwcEljb25EZWZhdWx0XCIsZ2x5cGg6XCJlY2FhXCJ9LHtuYW1lOlwiQ2Fsb3JpZXNcIixnbHlwaDpcImVjYWRcIn0se25hbWU6XCJQT0lcIixnbHlwaDpcImVjYWZcIn0se25hbWU6XCJCYW5kQmF0dGVyeTBcIixnbHlwaDpcImVjYjlcIn0se25hbWU6XCJCYW5kQmF0dGVyeTFcIixnbHlwaDpcImVjYmFcIn0se25hbWU6XCJCYW5kQmF0dGVyeTJcIixnbHlwaDpcImVjYmJcIn0se25hbWU6XCJCYW5kQmF0dGVyeTNcIixnbHlwaDpcImVjYmNcIn0se25hbWU6XCJCYW5kQmF0dGVyeTRcIixnbHlwaDpcImVjYmRcIn0se25hbWU6XCJCYW5kQmF0dGVyeTVcIixnbHlwaDpcImVjYmVcIn0se25hbWU6XCJCYW5kQmF0dGVyeTZcIixnbHlwaDpcImVjYmZcIn0se25hbWU6XCJBZGRTdXJmYWNlSHViXCIsZ2x5cGg6XCJlY2M0XCJ9LHtuYW1lOlwiRGV2VXBkYXRlXCIsZ2x5cGg6XCJlY2M1XCJ9LHtuYW1lOlwiVW5pdFwiLGdseXBoOlwiZWNjNlwifSx7bmFtZTpcIkFkZFRvXCIsZ2x5cGg6XCJlY2M4XCJ9LHtuYW1lOlwiUmVtb3ZlRnJvbVwiLGdseXBoOlwiZWNjOVwifSx7bmFtZTpcIlJhZGlvQnRuT2ZmXCIsZ2x5cGg6XCJlY2NhXCJ9LHtuYW1lOlwiUmFkaW9CdG5PblwiLGdseXBoOlwiZWNjYlwifSx7bmFtZTpcIlJhZGlvQnVsbGV0MlwiLGdseXBoOlwiZWNjY1wifSx7bmFtZTpcIkV4cGxvcmVDb250ZW50XCIsZ2x5cGg6XCJlY2NkXCJ9LHtuYW1lOlwiQmxvY2tlZDJcIixnbHlwaDpcImVjZTRcIn0se25hbWU6XCJTY3JvbGxNb2RlXCIsZ2x5cGg6XCJlY2U3XCJ9LHtuYW1lOlwiWm9vbU1vZGVcIixnbHlwaDpcImVjZThcIn0se25hbWU6XCJQYW5Nb2RlXCIsZ2x5cGg6XCJlY2U5XCJ9LHtuYW1lOlwiV2lyZWRVU0JcIixnbHlwaDpcImVjZjBcIn0se25hbWU6XCJXaXJlbGVzc1VTQlwiLGdseXBoOlwiZWNmMVwifSx7bmFtZTpcIlVTQlNhZmVDb25uZWN0XCIsZ2x5cGg6XCJlY2YzXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyTm90aWZpY2F0aW9uTWlycm9yZWRcIixnbHlwaDpcImVkMGNcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJNaXJyb3JlZFwiLGdseXBoOlwiZWQwZFwifSx7bmFtZTpcIlN1YnNjcmlwdGlvbkFkZFwiLGdseXBoOlwiZWQwZVwifSx7bmFtZTpcIlJlc2V0RGV2aWNlXCIsZ2x5cGg6XCJlZDEwXCJ9LHtuYW1lOlwiU3Vic2NyaXB0aW9uQWRkTWlycm9yZWRcIixnbHlwaDpcImVkMTFcIn0se25hbWU6XCJRUkNvZGVcIixnbHlwaDpcImVkMTRcIn0se25hbWU6XCJGZWVkYmFja1wiLGdseXBoOlwiZWQxNVwifSx7bmFtZTpcIkhpZGVcIixnbHlwaDpcImVkMWFcIn0se25hbWU6XCJTdWJ0aXRsZXNcIixnbHlwaDpcImVkMWVcIn0se25hbWU6XCJTdWJ0aXRsZXNBdWRpb1wiLGdseXBoOlwiZWQxZlwifSx7bmFtZTpcIk9wZW5Gb2xkZXJIb3Jpem9udGFsXCIsZ2x5cGg6XCJlZDI1XCJ9LHtuYW1lOlwiQ2FsZW5kYXJNaXJyb3JlZFwiLGdseXBoOlwiZWQyOFwifSx7bmFtZTpcIk1vYmVTSU1cIixnbHlwaDpcImVkMmFcIn0se25hbWU6XCJNb2JlU0lNTm9Qcm9maWxlXCIsZ2x5cGg6XCJlZDJiXCJ9LHtuYW1lOlwiTW9iZVNJTUxvY2tlZFwiLGdseXBoOlwiZWQyY1wifSx7bmFtZTpcIk1vYmVTSU1CdXN5XCIsZ2x5cGg6XCJlZDJkXCJ9LHtuYW1lOlwiU2lnbmFsRXJyb3JcIixnbHlwaDpcImVkMmVcIn0se25hbWU6XCJTdHJlYW1pbmdFbnRlcnByaXNlXCIsZ2x5cGg6XCJlZDJmXCJ9LHtuYW1lOlwiSGVhZHBob25lMFwiLGdseXBoOlwiZWQzMFwifSx7bmFtZTpcIkhlYWRwaG9uZTFcIixnbHlwaDpcImVkMzFcIn0se25hbWU6XCJIZWFkcGhvbmUyXCIsZ2x5cGg6XCJlZDMyXCJ9LHtuYW1lOlwiSGVhZHBob25lM1wiLGdseXBoOlwiZWQzM1wifSx7bmFtZTpcIkFwcHNcIixnbHlwaDpcImVkMzVcIn0se25hbWU6XCJLZXlib2FyZEJyaWdodG5lc3NcIixnbHlwaDpcImVkMzlcIn0se25hbWU6XCJLZXlib2FyZExvd2VyQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWQzYVwifSx7bmFtZTpcIlNraXBCYWNrMTBcIixnbHlwaDpcImVkM2NcIn0se25hbWU6XCJTa2lwRm9yd2FyZDMwXCIsZ2x5cGg6XCJlZDNkXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlclwiLGdseXBoOlwiZWQ0MVwifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJGaWxsXCIsZ2x5cGg6XCJlZDQyXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlck9wZW5cIixnbHlwaDpcImVkNDNcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyT3BlbkZpbGxcIixnbHlwaDpcImVkNDRcIn0se25hbWU6XCJNdWx0aW1lZGlhRE1QXCIsZ2x5cGg6XCJlZDQ3XCJ9LHtuYW1lOlwiS2V5Ym9hcmRPbmVIYW5kZWRcIixnbHlwaDpcImVkNGNcIn0se25hbWU6XCJOYXJyYXRvclwiLGdseXBoOlwiZWQ0ZFwifSx7bmFtZTpcIkVtb2ppVGFiUGVvcGxlXCIsZ2x5cGg6XCJlZDUzXCJ9LHtuYW1lOlwiRW1vamlUYWJTbWlsZXNBbmltYWxzXCIsZ2x5cGg6XCJlZDU0XCJ9LHtuYW1lOlwiRW1vamlUYWJDZWxlYnJhdGlvbk9iamVjdHNcIixnbHlwaDpcImVkNTVcIn0se25hbWU6XCJFbW9qaVRhYkZvb2RQbGFudHNcIixnbHlwaDpcImVkNTZcIn0se25hbWU6XCJFbW9qaVRhYlRyYW5zaXRQbGFjZXNcIixnbHlwaDpcImVkNTdcIn0se25hbWU6XCJFbW9qaVRhYlN5bWJvbHNcIixnbHlwaDpcImVkNThcIn0se25hbWU6XCJFbW9qaVRhYlRleHRTbWlsZXNcIixnbHlwaDpcImVkNTlcIn0se25hbWU6XCJFbW9qaVRhYkZhdm9yaXRlc1wiLGdseXBoOlwiZWQ1YVwifSx7bmFtZTpcIkVtb2ppU3dhdGNoXCIsZ2x5cGg6XCJlZDViXCJ9LHtuYW1lOlwiQ29ubmVjdEFwcFwiLGdseXBoOlwiZWQ1Y1wifSx7bmFtZTpcIkNvbXBhbmlvbkRldmljZUZyYW1ld29ya1wiLGdseXBoOlwiZWQ1ZFwifSx7bmFtZTpcIlJ1bGVyXCIsZ2x5cGg6XCJlZDVlXCJ9LHtuYW1lOlwiRmluZ2VySW5raW5nXCIsZ2x5cGg6XCJlZDVmXCJ9LHtuYW1lOlwiU3Ryb2tlRXJhc2VcIixnbHlwaDpcImVkNjBcIn0se25hbWU6XCJQb2ludEVyYXNlXCIsZ2x5cGg6XCJlZDYxXCJ9LHtuYW1lOlwiQ2xlYXJBbGxJbmtcIixnbHlwaDpcImVkNjJcIn0se25hbWU6XCJQZW5jaWxcIixnbHlwaDpcImVkNjNcIn0se25hbWU6XCJNYXJrZXJcIixnbHlwaDpcImVkNjRcIn0se25hbWU6XCJJbmtpbmdDYXJldFwiLGdseXBoOlwiZWQ2NVwifSx7bmFtZTpcIklua2luZ0NvbG9yT3V0bGluZVwiLGdseXBoOlwiZWQ2NlwifSx7bmFtZTpcIklua2luZ0NvbG9yRmlsbFwiLGdseXBoOlwiZWQ2N1wifSx7bmFtZTpcIkhhcmREcml2ZVwiLGdseXBoOlwiZWRhMlwifSx7bmFtZTpcIk5ldHdvcmtBZGFwdGVyXCIsZ2x5cGg6XCJlZGEzXCJ9LHtuYW1lOlwiVG91Y2hzY3JlZW5cIixnbHlwaDpcImVkYTRcIn0se25hbWU6XCJOZXR3b3JrUHJpbnRlclwiLGdseXBoOlwiZWRhNVwifSx7bmFtZTpcIkNsb3VkUHJpbnRlclwiLGdseXBoOlwiZWRhNlwifSx7bmFtZTpcIktleWJvYXJkU2hvcnRjdXRcIixnbHlwaDpcImVkYTdcIn0se25hbWU6XCJCcnVzaFNpemVcIixnbHlwaDpcImVkYThcIn0se25hbWU6XCJOYXJyYXRvckZvcndhcmRcIixnbHlwaDpcImVkYTlcIn0se25hbWU6XCJOYXJyYXRvckZvcndhcmRNaXJyb3JlZFwiLGdseXBoOlwiZWRhYVwifSx7bmFtZTpcIlN5bmNCYWRnZTEyXCIsZ2x5cGg6XCJlZGFiXCJ9LHtuYW1lOlwiUmluZ2VyQmFkZ2UxMlwiLGdseXBoOlwiZWRhY1wifSx7bmFtZTpcIkFzdGVyaXNrQmFkZ2UxMlwiLGdseXBoOlwiZWRhZFwifSx7bmFtZTpcIkVycm9yQmFkZ2UxMlwiLGdseXBoOlwiZWRhZVwifSx7bmFtZTpcIkNpcmNsZVJpbmdCYWRnZTEyXCIsZ2x5cGg6XCJlZGFmXCJ9LHtuYW1lOlwiQ2lyY2xlRmlsbEJhZGdlMTJcIixnbHlwaDpcImVkYjBcIn0se25hbWU6XCJJbXBvcnRhbnRCYWRnZTEyXCIsZ2x5cGg6XCJlZGIxXCJ9LHtuYW1lOlwiTWFpbEJhZGdlMTJcIixnbHlwaDpcImVkYjNcIn0se25hbWU6XCJQYXVzZUJhZGdlMTJcIixnbHlwaDpcImVkYjRcIn0se25hbWU6XCJQbGF5QmFkZ2UxMlwiLGdseXBoOlwiZWRiNVwifSx7bmFtZTpcIlBlbldvcmtzcGFjZVwiLGdseXBoOlwiZWRjNlwifSx7bmFtZTpcIkNhcmV0TGVmdDhcIixnbHlwaDpcImVkZDVcIn0se25hbWU6XCJDYXJldFJpZ2h0OFwiLGdseXBoOlwiZWRkNlwifSx7bmFtZTpcIkNhcmV0VXA4XCIsZ2x5cGg6XCJlZGQ3XCJ9LHtuYW1lOlwiQ2FyZXREb3duOFwiLGdseXBoOlwiZWRkOFwifSx7bmFtZTpcIkNhcmV0TGVmdFNvbGlkOFwiLGdseXBoOlwiZWRkOVwifSx7bmFtZTpcIkNhcmV0UmlnaHRTb2xpZDhcIixnbHlwaDpcImVkZGFcIn0se25hbWU6XCJDYXJldFVwU29saWQ4XCIsZ2x5cGg6XCJlZGRiXCJ9LHtuYW1lOlwiQ2FyZXREb3duU29saWQ4XCIsZ2x5cGg6XCJlZGRjXCJ9LHtuYW1lOlwiU3RyaWtldGhyb3VnaFwiLGdseXBoOlwiZWRlMFwifSx7bmFtZTpcIkV4cG9ydFwiLGdseXBoOlwiZWRlMVwifSx7bmFtZTpcIkV4cG9ydE1pcnJvcmVkXCIsZ2x5cGg6XCJlZGUyXCJ9LHtuYW1lOlwiQnV0dG9uTWVudVwiLGdseXBoOlwiZWRlM1wifSx7bmFtZTpcIkNsb3VkU2VhcmNoXCIsZ2x5cGg6XCJlZGU0XCJ9LHtuYW1lOlwiUGlueWluSU1FTG9nb1wiLGdseXBoOlwiZWRlNVwifSx7bmFtZTpcIkNhbGxpZ3JhcGh5UGVuXCIsZ2x5cGg6XCJlZGZiXCJ9LHtuYW1lOlwiUmVwbHlNaXJyb3JlZFwiLGdseXBoOlwiZWUzNVwifSx7bmFtZTpcIkxvY2tzY3JlZW5EZXNrdG9wXCIsZ2x5cGg6XCJlZTNmXCJ9LHtuYW1lOlwiVGFza1ZpZXdTZXR0aW5nc1wiLGdseXBoOlwiZWU0MFwifSx7bmFtZTpcIk1pbmlFeHBhbmQyTWlycm9yZWRcIixnbHlwaDpcImVlNDdcIn0se25hbWU6XCJNaW5pQ29udHJhY3QyTWlycm9yZWRcIixnbHlwaDpcImVlNDlcIn0se25hbWU6XCJQbGF5MzZcIixnbHlwaDpcImVlNGFcIn0se25hbWU6XCJQZW5QYWxldHRlXCIsZ2x5cGg6XCJlZTU2XCJ9LHtuYW1lOlwiR3Vlc3RVc2VyXCIsZ2x5cGg6XCJlZTU3XCJ9LHtuYW1lOlwiU2V0dGluZ3NCYXR0ZXJ5XCIsZ2x5cGg6XCJlZTYzXCJ9LHtuYW1lOlwiVGFza2JhclBob25lXCIsZ2x5cGg6XCJlZTY0XCJ9LHtuYW1lOlwiTG9ja1NjcmVlbkdsYW5jZVwiLGdseXBoOlwiZWU2NVwifSx7bmFtZTpcIkdlbmVyaWNTY2FuXCIsZ2x5cGg6XCJlZTZmXCJ9LHtuYW1lOlwiSW1hZ2VFeHBvcnRcIixnbHlwaDpcImVlNzFcIn0se25hbWU6XCJXaWZpRXRoZXJuZXRcIixnbHlwaDpcImVlNzdcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJRdWlldFwiLGdseXBoOlwiZWU3OVwifSx7bmFtZTpcIkFjdGlvbkNlbnRlclF1aWV0Tm90aWZpY2F0aW9uXCIsZ2x5cGg6XCJlZTdhXCJ9LHtuYW1lOlwiVHJhY2tlcnNNaXJyb3JlZFwiLGdseXBoOlwiZWU5MlwifSx7bmFtZTpcIkRhdGVUaW1lTWlycm9yZWRcIixnbHlwaDpcImVlOTNcIn0se25hbWU6XCJXaGVlbFwiLGdseXBoOlwiZWU5NFwifSx7bmFtZTpcIlZpcnR1YWxNYWNoaW5lR3JvdXBcIixnbHlwaDpcImVlYTNcIn0se25hbWU6XCJCdXR0b25WaWV3MlwiLGdseXBoOlwiZWVjYVwifSx7bmFtZTpcIlBlbldvcmtzcGFjZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE1XCJ9LHtuYW1lOlwiUGVuUGFsZXR0ZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE2XCJ9LHtuYW1lOlwiU3Ryb2tlRXJhc2VNaXJyb3JlZFwiLGdseXBoOlwiZWYxN1wifSx7bmFtZTpcIlBvaW50RXJhc2VNaXJyb3JlZFwiLGdseXBoOlwiZWYxOFwifSx7bmFtZTpcIkNsZWFyQWxsSW5rTWlycm9yZWRcIixnbHlwaDpcImVmMTlcIn0se25hbWU6XCJCYWNrZ3JvdW5kVG9nZ2xlXCIsZ2x5cGg6XCJlZjFmXCJ9LHtuYW1lOlwiTWFycXVlZVwiLGdseXBoOlwiZWYyMFwifSx7bmFtZTpcIkNocm9tZUNsb3NlQ29udHJhc3RcIixnbHlwaDpcImVmMmNcIn0se25hbWU6XCJDaHJvbWVNaW5pbWl6ZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJkXCJ9LHtuYW1lOlwiQ2hyb21lTWF4aW1pemVDb250cmFzdFwiLGdseXBoOlwiZWYyZVwifSx7bmFtZTpcIkNocm9tZVJlc3RvcmVDb250cmFzdFwiLGdseXBoOlwiZWYyZlwifSx7bmFtZTpcIlRyYWZmaWNMaWdodFwiLGdseXBoOlwiZWYzMVwifSx7bmFtZTpcIlJlcGxheVwiLGdseXBoOlwiZWYzYlwifSx7bmFtZTpcIkV5ZWRyb3BwZXJcIixnbHlwaDpcImVmM2NcIn0se25hbWU6XCJMaW5lRGlzcGxheVwiLGdseXBoOlwiZWYzZFwifSx7bmFtZTpcIlBJTlBhZFwiLGdseXBoOlwiZWYzZVwifSx7bmFtZTpcIlNpZ25hdHVyZUNhcHR1cmVcIixnbHlwaDpcImVmM2ZcIn0se25hbWU6XCJDaGlwQ2FyZENyZWRpdENhcmRSZWFkZXJcIixnbHlwaDpcImVmNDBcIn0se25hbWU6XCJNYXJrZXREb3duXCIsZ2x5cGg6XCJlZjQyXCJ9LHtuYW1lOlwiUGxheWVyU2V0dGluZ3NcIixnbHlwaDpcImVmNThcIn0se25hbWU6XCJMYW5kc2NhcGVPcmllbnRhdGlvblwiLGdseXBoOlwiZWY2YlwifSx7bmFtZTpcIkZsb3dcIixnbHlwaDpcImVmOTBcIn0se25hbWU6XCJUb3VjaHBhZFwiLGdseXBoOlwiZWZhNVwifSx7bmFtZTpcIlNwZWVjaFwiLGdseXBoOlwiZWZhOVwifSx7bmFtZTpcIktub3dsZWRnZUFydGljbGVcIixnbHlwaDpcImYwMDBcIn0se25hbWU6XCJSZWxhdGlvbnNoaXBcIixnbHlwaDpcImYwMDNcIn0se25hbWU6XCJaaXBGb2xkZXJcIixnbHlwaDpcImYwMTJcIn0se25hbWU6XCJEZWZhdWx0QVBOXCIsZ2x5cGg6XCJmMDgwXCJ9LHtuYW1lOlwiVXNlckFQTlwiLGdseXBoOlwiZjA4MVwifSx7bmFtZTpcIkRvdWJsZVBpbnlpblwiLGdseXBoOlwiZjA4NVwifSx7bmFtZTpcIkJsdWVMaWdodFwiLGdseXBoOlwiZjA4Y1wifSx7bmFtZTpcIkNhcmV0U29saWRMZWZ0XCIsZ2x5cGg6XCJmMDhkXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZERvd25cIixnbHlwaDpcImYwOGVcIn0se25hbWU6XCJDYXJldFNvbGlkUmlnaHRcIixnbHlwaDpcImYwOGZcIn0se25hbWU6XCJDYXJldFNvbGlkVXBcIixnbHlwaDpcImYwOTBcIn0se25hbWU6XCJCdXR0b25BXCIsZ2x5cGg6XCJmMDkzXCJ9LHtuYW1lOlwiQnV0dG9uQlwiLGdseXBoOlwiZjA5NFwifSx7bmFtZTpcIkJ1dHRvbllcIixnbHlwaDpcImYwOTVcIn0se25hbWU6XCJCdXR0b25YXCIsZ2x5cGg6XCJmMDk2XCJ9LHtuYW1lOlwiQXJyb3dVcDhcIixnbHlwaDpcImYwYWRcIn0se25hbWU6XCJBcnJvd0Rvd244XCIsZ2x5cGg6XCJmMGFlXCJ9LHtuYW1lOlwiQXJyb3dSaWdodDhcIixnbHlwaDpcImYwYWZcIn0se25hbWU6XCJBcnJvd0xlZnQ4XCIsZ2x5cGg6XCJmMGIwXCJ9LHtuYW1lOlwiUXVhcmVudGluZWRJdGVtc1wiLGdseXBoOlwiZjBiMlwifSx7bmFtZTpcIlF1YXJlbnRpbmVkSXRlbXNNaXJyb3JlZFwiLGdseXBoOlwiZjBiM1wifSx7bmFtZTpcIlByb3RyYWN0b3JcIixnbHlwaDpcImYwYjRcIn0se25hbWU6XCJDaGVja2xpc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBiNVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZTdcIixnbHlwaDpcImYwYjZcIn0se25hbWU6XCJTdGF0dXNDaGVja21hcms3XCIsZ2x5cGg6XCJmMGI3XCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JDaXJjbGU3XCIsZ2x5cGg6XCJmMGI4XCJ9LHtuYW1lOlwiQ29ubmVjdGVkXCIsZ2x5cGg6XCJmMGI5XCJ9LHtuYW1lOlwiUGVuY2lsRmlsbFwiLGdseXBoOlwiZjBjNlwifSx7bmFtZTpcIkNhbGxpZ3JhcGh5RmlsbFwiLGdseXBoOlwiZjBjN1wifSx7bmFtZTpcIlF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBjYVwifSx7bmFtZTpcIlF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwY2JcIn0se25hbWU6XCJUaHJlZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBjY1wifSx7bmFtZTpcIlRocmVlUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBjZFwifSx7bmFtZTpcIlF1aWV0SG91cnNCYWRnZTEyXCIsZ2x5cGg6XCJmMGNlXCJ9LHtuYW1lOlwiQmFja01pcnJvcmVkXCIsZ2x5cGg6XCJmMGQyXCJ9LHtuYW1lOlwiRm9yd2FyZE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGQzXCJ9LHtuYW1lOlwiQ2hyb21lQmFja0NvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ1XCJ9LHtuYW1lOlwiQ2hyb21lQmFja0NvbnRyYXN0TWlycm9yZWRcIixnbHlwaDpcImYwZDZcIn0se25hbWU6XCJDaHJvbWVCYWNrVG9XaW5kb3dDb250cmFzdFwiLGdseXBoOlwiZjBkN1wifSx7bmFtZTpcIkNocm9tZUZ1bGxTY3JlZW5Db250cmFzdFwiLGdseXBoOlwiZjBkOFwifSx7bmFtZTpcIkdyaWRWaWV3XCIsZ2x5cGg6XCJmMGUyXCJ9LHtuYW1lOlwiQ2xpcGJvYXJkTGlzdFwiLGdseXBoOlwiZjBlM1wifSx7bmFtZTpcIkNsaXBib2FyZExpc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBlNFwifSx7bmFtZTpcIk91dGxpbmVRdWFydGVyU3RhckxlZnRcIixnbHlwaDpcImYwZTVcIn0se25hbWU6XCJPdXRsaW5lUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBlNlwifSx7bmFtZTpcIk91dGxpbmVIYWxmU3RhckxlZnRcIixnbHlwaDpcImYwZTdcIn0se25hbWU6XCJPdXRsaW5lSGFsZlN0YXJSaWdodFwiLGdseXBoOlwiZjBlOFwifSx7bmFtZTpcIk91dGxpbmVUaHJlZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBlOVwifSx7bmFtZTpcIk91dGxpbmVUaHJlZVF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwZWFcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lMFwiLGdseXBoOlwiZjBlYlwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUxXCIsZ2x5cGg6XCJmMGVjXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTJcIixnbHlwaDpcImYwZWRcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lM1wiLGdseXBoOlwiZjBlZVwifSx7bmFtZTpcIkFwcGxpY2F0aW9uR3VhcmRcIixnbHlwaDpcImYwZWZcIn0se25hbWU6XCJPdXRsaW5lU3RhckxlZnRIYWxmXCIsZ2x5cGg6XCJmMGY3XCJ9LHtuYW1lOlwiT3V0bGluZVN0YXJSaWdodEhhbGZcIixnbHlwaDpcImYwZjhcIn0se25hbWU6XCJDaHJvbWVBbm5vdGF0ZUNvbnRyYXN0XCIsZ2x5cGg6XCJmMGY5XCJ9LHtuYW1lOlwiRGVmZW5kZXJCYWRnZTEyXCIsZ2x5cGg6XCJmMGZiXCJ9LHtuYW1lOlwiRGV0YWNoYWJsZVBDXCIsZ2x5cGg6XCJmMTAzXCJ9LHtuYW1lOlwiTGVmdFN0aWNrXCIsZ2x5cGg6XCJmMTA4XCJ9LHtuYW1lOlwiUmlnaHRTdGlja1wiLGdseXBoOlwiZjEwOVwifSx7bmFtZTpcIlRyaWdnZXJMZWZ0XCIsZ2x5cGg6XCJmMTBhXCJ9LHtuYW1lOlwiVHJpZ2dlclJpZ2h0XCIsZ2x5cGg6XCJmMTBiXCJ9LHtuYW1lOlwiQnVtcGVyTGVmdFwiLGdseXBoOlwiZjEwY1wifSx7bmFtZTpcIkJ1bXBlclJpZ2h0XCIsZ2x5cGg6XCJmMTBkXCJ9LHtuYW1lOlwiRHBhZFwiLGdseXBoOlwiZjEwZVwifSx7bmFtZTpcIkVuZ2xpc2hQdW5jdHVhdGlvblwiLGdseXBoOlwiZjExMFwifSx7bmFtZTpcIkNoaW5lc2VQdW5jdHVhdGlvblwiLGdseXBoOlwiZjExMVwifSx7bmFtZTpcIkhNRFwiLGdseXBoOlwiZjExOVwifSx7bmFtZTpcIkN0cmxTcGF0aWFsUmlnaHRcIixnbHlwaDpcImYxMWJcIn0se25hbWU6XCJQYWdpbmF0aW9uRG90T3V0bGluZTEwXCIsZ2x5cGg6XCJmMTI2XCJ9LHtuYW1lOlwiUGFnaW5hdGlvbkRvdFNvbGlkMTBcIixnbHlwaDpcImYxMjdcIn0se25hbWU6XCJTdHJva2VFcmFzZTJcIixnbHlwaDpcImYxMjhcIn0se25hbWU6XCJTbWFsbEVyYXNlXCIsZ2x5cGg6XCJmMTI5XCJ9LHtuYW1lOlwiTGFyZ2VFcmFzZVwiLGdseXBoOlwiZjEyYVwifSx7bmFtZTpcIkZvbGRlckhvcml6b250YWxcIixnbHlwaDpcImYxMmJcIn0se25hbWU6XCJNaWNyb3Bob25lTGlzdGVuaW5nXCIsZ2x5cGg6XCJmMTJlXCJ9LHtuYW1lOlwiU3RhdHVzRXhjbGFtYXRpb25DaXJjbGU3XCIsZ2x5cGg6XCJmMTJmXCJ9LHtuYW1lOlwiVmlkZW8zNjBcIixnbHlwaDpcImYxMzFcIn0se25hbWU6XCJHaWZ0Ym94T3BlblwiLGdseXBoOlwiZjEzM1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZU91dGVyXCIsZ2x5cGg6XCJmMTM2XCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlSW5uZXJcIixnbHlwaDpcImYxMzdcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVSaW5nXCIsZ2x5cGg6XCJmMTM4XCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVPdXRlclwiLGdseXBoOlwiZjEzOVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlSW5uZXJcIixnbHlwaDpcImYxM2FcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZUV4Y2xhbWF0aW9uXCIsZ2x5cGg6XCJmMTNiXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlRXhjbGFtYXRpb25cIixnbHlwaDpcImYxM2NcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVFcnJvclhcIixnbHlwaDpcImYxM2RcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVDaGVja21hcmtcIixnbHlwaDpcImYxM2VcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVJbmZvXCIsZ2x5cGg6XCJmMTNmXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlQmxvY2tcIixnbHlwaDpcImYxNDBcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVCbG9jazJcIixnbHlwaDpcImYxNDFcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVRdWVzdGlvbk1hcmtcIixnbHlwaDpcImYxNDJcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVTeW5jXCIsZ2x5cGg6XCJmMTQzXCJ9LHtuYW1lOlwiRGlhbDFcIixnbHlwaDpcImYxNDZcIn0se25hbWU6XCJEaWFsMlwiLGdseXBoOlwiZjE0N1wifSx7bmFtZTpcIkRpYWwzXCIsZ2x5cGg6XCJmMTQ4XCJ9LHtuYW1lOlwiRGlhbDRcIixnbHlwaDpcImYxNDlcIn0se25hbWU6XCJEaWFsNVwiLGdseXBoOlwiZjE0YVwifSx7bmFtZTpcIkRpYWw2XCIsZ2x5cGg6XCJmMTRiXCJ9LHtuYW1lOlwiRGlhbDdcIixnbHlwaDpcImYxNGNcIn0se25hbWU6XCJEaWFsOFwiLGdseXBoOlwiZjE0ZFwifSx7bmFtZTpcIkRpYWw5XCIsZ2x5cGg6XCJmMTRlXCJ9LHtuYW1lOlwiRGlhbDEwXCIsZ2x5cGg6XCJmMTRmXCJ9LHtuYW1lOlwiRGlhbDExXCIsZ2x5cGg6XCJmMTUwXCJ9LHtuYW1lOlwiRGlhbDEyXCIsZ2x5cGg6XCJmMTUxXCJ9LHtuYW1lOlwiRGlhbDEzXCIsZ2x5cGg6XCJmMTUyXCJ9LHtuYW1lOlwiRGlhbDE0XCIsZ2x5cGg6XCJmMTUzXCJ9LHtuYW1lOlwiRGlhbDE1XCIsZ2x5cGg6XCJmMTU0XCJ9LHtuYW1lOlwiRGlhbDE2XCIsZ2x5cGg6XCJmMTU1XCJ9LHtuYW1lOlwiRGlhbFNoYXBlMVwiLGdseXBoOlwiZjE1NlwifSx7bmFtZTpcIkRpYWxTaGFwZTJcIixnbHlwaDpcImYxNTdcIn0se25hbWU6XCJEaWFsU2hhcGUzXCIsZ2x5cGg6XCJmMTU4XCJ9LHtuYW1lOlwiRGlhbFNoYXBlNFwiLGdseXBoOlwiZjE1OVwifSx7bmFtZTpcIkNsb3NlZENhcHRpb25zSW50ZXJuYXRpb25hbFwiLGdseXBoOlwiZjE1ZlwifSx7bmFtZTpcIlRvbGxTb2xpZFwiLGdseXBoOlwiZjE2MVwifSx7bmFtZTpcIlRyYWZmaWNDb25nZXN0aW9uU29saWRcIixnbHlwaDpcImYxNjNcIn0se25hbWU6XCJFeHBsb3JlQ29udGVudFNpbmdsZVwiLGdseXBoOlwiZjE2NFwifSx7bmFtZTpcIkNvbGxhcHNlQ29udGVudFwiLGdseXBoOlwiZjE2NVwifSx7bmFtZTpcIkNvbGxhcHNlQ29udGVudFNpbmdsZVwiLGdseXBoOlwiZjE2NlwifSx7bmFtZTpcIkluZm9Tb2xpZFwiLGdseXBoOlwiZjE2N1wifSx7bmFtZTpcIkdyb3VwTGlzdFwiLGdseXBoOlwiZjE2OFwifSx7bmFtZTpcIkNhcmV0Qm90dG9tUmlnaHRTb2xpZENlbnRlcjhcIixnbHlwaDpcImYxNjlcIn0se25hbWU6XCJQcm9ncmVzc1JpbmdEb3RzXCIsZ2x5cGg6XCJmMTZhXCJ9LHtuYW1lOlwiQ2hlY2tib3gxNFwiLGdseXBoOlwiZjE2YlwifSx7bmFtZTpcIkNoZWNrYm94Q29tcG9zaXRlMTRcIixnbHlwaDpcImYxNmNcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVDb21ibzE0XCIsZ2x5cGg6XCJmMTZkXCJ9LHtuYW1lOlwiQ2hlY2tib3hJbmRldGVybWluYXRlQ29tYm9cIixnbHlwaDpcImYxNmVcIn0se25hbWU6XCJTdGF0dXNQYXVzZTdcIixnbHlwaDpcImYxNzVcIn0se25hbWU6XCJDaGFyYWN0ZXJBcHBlYXJhbmNlXCIsZ2x5cGg6XCJmMTdmXCJ9LHtuYW1lOlwiTGV4aWNvblwiLGdseXBoOlwiZjE4MFwifSx7bmFtZTpcIlNjcmVlblRpbWVcIixnbHlwaDpcImYxODJcIn0se25hbWU6XCJIZWFkbGVzc0RldmljZVwiLGdseXBoOlwiZjE5MVwifSx7bmFtZTpcIk5ldHdvcmtTaGFyaW5nXCIsZ2x5cGg6XCJmMTkzXCJ9LHtuYW1lOlwiRXllR2F6ZVwiLGdseXBoOlwiZjE5ZFwifSx7bmFtZTpcIlRvZ2dsZUxlZnRcIixnbHlwaDpcImYxOWVcIn0se25hbWU6XCJUb2dnbGVSaWdodFwiLGdseXBoOlwiZjE5ZlwifSx7bmFtZTpcIldpbmRvd3NJbnNpZGVyXCIsZ2x5cGg6XCJmMWFkXCJ9LHtuYW1lOlwiQ2hyb21lU3dpdGNoXCIsZ2x5cGg6XCJmMWNiXCJ9LHtuYW1lOlwiQ2hyb21lU3dpdGNoQ29udGFzdFwiLGdseXBoOlwiZjFjY1wifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFya1wiLGdseXBoOlwiZjFkOFwifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFya0xlZnRcIixnbHlwaDpcImYxZDlcIn0se25hbWU6XCJLZXlib2FyZExlZnRBbGlnbmVkXCIsZ2x5cGg6XCJmMjBjXCJ9LHtuYW1lOlwiS2V5Ym9hcmRSaWdodEFsaWduZWRcIixnbHlwaDpcImYyMGRcIn0se25hbWU6XCJLZXlib2FyZFNldHRpbmdzXCIsZ2x5cGg6XCJmMjEwXCJ9LHtuYW1lOlwiTmV0d29ya1BoeXNpY2FsXCIsZ2x5cGg6XCJmMjExXCJ9LHtuYW1lOlwiSU9UXCIsZ2x5cGg6XCJmMjJjXCJ9LHtuYW1lOlwiVW5rbm93bk1pcnJvcmVkXCIsZ2x5cGg6XCJmMjJlXCJ9LHtuYW1lOlwiVmlld0Rhc2hib2FyZFwiLGdseXBoOlwiZjI0NlwifSx7bmFtZTpcIkV4cGxvaXRQcm90ZWN0aW9uU2V0dGluZ3NcIixnbHlwaDpcImYyNTlcIn0se25hbWU6XCJLZXlib2FyZE5hcnJvd1wiLGdseXBoOlwiZjI2MFwifSx7bmFtZTpcIktleWJvYXJkMTJLZXlcIixnbHlwaDpcImYyNjFcIn0se25hbWU6XCJLZXlib2FyZERvY2tcIixnbHlwaDpcImYyNmJcIn0se25hbWU6XCJLZXlib2FyZFVuZG9ja1wiLGdseXBoOlwiZjI2Y1wifSx7bmFtZTpcIktleWJvYXJkTGVmdERvY2tcIixnbHlwaDpcImYyNmRcIn0se25hbWU6XCJLZXlib2FyZFJpZ2h0RG9ja1wiLGdseXBoOlwiZjI2ZVwifSx7bmFtZTpcIkVhclwiLGdseXBoOlwiZjI3MFwifSx7bmFtZTpcIlBvaW50ZXJIYW5kXCIsZ2x5cGg6XCJmMjcxXCJ9LHtuYW1lOlwiQnVsbHNleWVcIixnbHlwaDpcImYyNzJcIn0se25hbWU6XCJEb2N1bWVudEFwcHJvdmFsXCIsZ2x5cGg6XCJmMjhiXCJ9LHtuYW1lOlwiTG9jYWxlTGFuZ3VhZ2VcIixnbHlwaDpcImYyYjdcIn0se25hbWU6XCJQYXNzaXZlQXV0aGVudGljYXRpb25cIixnbHlwaDpcImYzMmFcIn0se25hbWU6XCJDb2xvclNvbGlkXCIsZ2x5cGg6XCJmMzU0XCJ9LHtuYW1lOlwiTmV0d29ya09mZmxpbmVcIixnbHlwaDpcImYzODRcIn0se25hbWU6XCJOZXR3b3JrQ29ubmVjdGVkXCIsZ2x5cGg6XCJmMzg1XCJ9LHtuYW1lOlwiTmV0d29ya0Nvbm5lY3RlZENoZWNrbWFya1wiLGdseXBoOlwiZjM4NlwifSx7bmFtZTpcIlNpZ25PdXRcIixnbHlwaDpcImYzYjFcIn0se25hbWU6XCJTdGF0dXNJbmZvXCIsZ2x5cGg6XCJmM2NjXCJ9LHtuYW1lOlwiU3RhdHVzSW5mb0xlZnRcIixnbHlwaDpcImYzY2RcIn0se25hbWU6XCJOZWFyYnlTaGFyaW5nXCIsZ2x5cGg6XCJmM2UyXCJ9LHtuYW1lOlwiQ3RybFNwYXRpYWxMZWZ0XCIsZ2x5cGg6XCJmM2U3XCJ9LHtuYW1lOlwiSW50ZXJhY3RpdmVEYXNoYm9hcmRcIixnbHlwaDpcImY0MDRcIn0se25hbWU6XCJEZWNsaW5lQ2FsbFwiLGdseXBoOlwiZjQwNVwifSx7bmFtZTpcIkNsaXBwaW5nVG9vbFwiLGdseXBoOlwiZjQwNlwifSx7bmFtZTpcIlJlY3Rhbmd1bGFyQ2xpcHBpbmdcIixnbHlwaDpcImY0MDdcIn0se25hbWU6XCJGcmVlRm9ybUNsaXBwaW5nXCIsZ2x5cGg6XCJmNDA4XCJ9LHtuYW1lOlwiQ29weVRvXCIsZ2x5cGg6XCJmNDEzXCJ9LHtuYW1lOlwiSURCYWRnZVwiLGdseXBoOlwiZjQyN1wifSx7bmFtZTpcIkR5bmFtaWNMb2NrXCIsZ2x5cGg6XCJmNDM5XCJ9LHtuYW1lOlwiUGVuVGlwc1wiLGdseXBoOlwiZjQ1ZVwifSx7bmFtZTpcIlBlblRpcHNNaXJyb3JlZFwiLGdseXBoOlwiZjQ1ZlwifSx7bmFtZTpcIkhXUEpvaW5cIixnbHlwaDpcImY0NjBcIn0se25hbWU6XCJIV1BJbnNlcnRcIixnbHlwaDpcImY0NjFcIn0se25hbWU6XCJIV1BTdHJpa2VUaHJvdWdoXCIsZ2x5cGg6XCJmNDYyXCJ9LHtuYW1lOlwiSFdQU2NyYXRjaE91dFwiLGdseXBoOlwiZjQ2M1wifSx7bmFtZTpcIkhXUFNwbGl0XCIsZ2x5cGg6XCJmNDY0XCJ9LHtuYW1lOlwiSFdQTmV3TGluZVwiLGdseXBoOlwiZjQ2NVwifSx7bmFtZTpcIkhXUE92ZXJ3cml0ZVwiLGdseXBoOlwiZjQ2NlwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nMVwiLGdseXBoOlwiZjQ3M1wifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nMlwiLGdseXBoOlwiZjQ3NFwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nM1wiLGdseXBoOlwiZjQ3NVwifSx7bmFtZTpcIk1vYldpZmlXYXJuaW5nNFwiLGdseXBoOlwiZjQ3NlwifSx7bmFtZTpcIk1pY0xvY2F0aW9uQ29tYm9cIixnbHlwaDpcImY0N2ZcIn0se25hbWU6XCJHbG9iZTJcIixnbHlwaDpcImY0OWFcIn0se25hbWU6XCJTcGVjaWFsRWZmZWN0U2l6ZVwiLGdseXBoOlwiZjRhNVwifSx7bmFtZTpcIkdJRlwiLGdseXBoOlwiZjRhOVwifSx7bmFtZTpcIlN0aWNrZXIyXCIsZ2x5cGg6XCJmNGFhXCJ9LHtuYW1lOlwiU3VyZmFjZUh1YlNlbGVjdGVkXCIsZ2x5cGg6XCJmNGJlXCJ9LHtuYW1lOlwiSG9sb0xlbnNTZWxlY3RlZFwiLGdseXBoOlwiZjRiZlwifSx7bmFtZTpcIkVhcmJ1ZFwiLGdseXBoOlwiZjRjMFwifSx7bmFtZTpcIk1peFZvbHVtZXNcIixnbHlwaDpcImY0YzNcIn0se25hbWU6XCJTYWZlXCIsZ2x5cGg6XCJmNTQwXCJ9LHtuYW1lOlwiTGFwdG9wU2VjdXJlXCIsZ2x5cGg6XCJmNTUyXCJ9LHtuYW1lOlwiUHJpbnREZWZhdWx0XCIsZ2x5cGg6XCJmNTZkXCJ9LHtuYW1lOlwiUGFnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTZlXCJ9LHtuYW1lOlwiTGFuZHNjYXBlT3JpZW50YXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZjU2ZlwifSx7bmFtZTpcIkNvbG9yT2ZmXCIsZ2x5cGg6XCJmNTcwXCJ9LHtuYW1lOlwiUHJpbnRBbGxQYWdlc1wiLGdseXBoOlwiZjU3MVwifSx7bmFtZTpcIlByaW50Q3VzdG9tUmFuZ2VcIixnbHlwaDpcImY1NzJcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXROYXJyb3dcIixnbHlwaDpcImY1NzNcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXROb3JtYWxcIixnbHlwaDpcImY1NzRcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXRNb2RlcmF0ZVwiLGdseXBoOlwiZjU3NVwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdFdpZGVcIixnbHlwaDpcImY1NzZcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlTmFycm93XCIsZ2x5cGg6XCJmNTc3XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZU5vcm1hbFwiLGdseXBoOlwiZjU3OFwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVNb2RlcmF0ZVwiLGdseXBoOlwiZjU3OVwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVXaWRlXCIsZ2x5cGg6XCJmNTdhXCJ9LHtuYW1lOlwiQ29sbGF0ZUxhbmRzY2FwZVwiLGdseXBoOlwiZjU3YlwifSx7bmFtZTpcIkNvbGxhdGVQb3J0cmFpdFwiLGdseXBoOlwiZjU3Y1wifSx7bmFtZTpcIkNvbGxhdGVQb3J0cmFpdFNlcGFyYXRlZFwiLGdseXBoOlwiZjU3ZFwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZU9uZVNpZGVkXCIsZ2x5cGg6XCJmNTdlXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlT25lU2lkZWRNaXJyb3JlZFwiLGdseXBoOlwiZjU3ZlwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkTG9uZ0VkZ2VcIixnbHlwaDpcImY1ODBcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZExvbmdFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODFcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZFNob3J0RWRnZVwiLGdseXBoOlwiZjU4MlwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkU2hvcnRFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODNcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdE9uZVNpZGVkXCIsZ2x5cGg6XCJmNTg0XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRPbmVTaWRlZE1pcnJvcmVkXCIsZ2x5cGg6XCJmNTg1XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZExvbmdFZGdlXCIsZ2x5cGg6XCJmNTg2XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZExvbmdFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODdcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkU2hvcnRFZGdlXCIsZ2x5cGg6XCJmNTg4XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZFNob3J0RWRnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTg5XCJ9LHtuYW1lOlwiUFBTT25lTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThhXCJ9LHtuYW1lOlwiUFBTVHdvTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThiXCJ9LHtuYW1lOlwiUFBTVHdvUG9ydHJhaXRcIixnbHlwaDpcImY1OGNcIn0se25hbWU6XCJQUFNGb3VyTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNThkXCJ9LHtuYW1lOlwiUFBTRm91clBvcnRyYWl0XCIsZ2x5cGg6XCJmNThlXCJ9LHtuYW1lOlwiSG9sZVB1bmNoT2ZmXCIsZ2x5cGg6XCJmNThmXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRMZWZ0XCIsZ2x5cGg6XCJmNTkwXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRSaWdodFwiLGdseXBoOlwiZjU5MVwifSx7bmFtZTpcIkhvbGVQdW5jaFBvcnRyYWl0VG9wXCIsZ2x5cGg6XCJmNTkyXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRCb3R0b21cIixnbHlwaDpcImY1OTNcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVMZWZ0XCIsZ2x5cGg6XCJmNTk0XCJ9LHtuYW1lOlwiSG9sZVB1bmNoTGFuZHNjYXBlUmlnaHRcIixnbHlwaDpcImY1OTVcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVUb3BcIixnbHlwaDpcImY1OTZcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVCb3R0b21cIixnbHlwaDpcImY1OTdcIn0se25hbWU6XCJTdGFwbGluZ09mZlwiLGdseXBoOlwiZjU5OFwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUb3BMZWZ0XCIsZ2x5cGg6XCJmNTk5XCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFRvcFJpZ2h0XCIsZ2x5cGg6XCJmNTlhXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvdHRvbVJpZ2h0XCIsZ2x5cGg6XCJmNTliXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b0xlZnRcIixnbHlwaDpcImY1OWNcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvUmlnaHRcIixnbHlwaDpcImY1OWRcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvVG9wXCIsZ2x5cGg6XCJmNTllXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b0JvdHRvbVwiLGdseXBoOlwiZjU5ZlwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRCb29rQmluZGluZ1wiLGdseXBoOlwiZjVhMFwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVG9wTGVmdFwiLGdseXBoOlwiZjVhMVwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVG9wUmlnaHRcIixnbHlwaDpcImY1YTJcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvdHRvbUxlZnRcIixnbHlwaDpcImY1YTNcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvdHRvbVJpZ2h0XCIsZ2x5cGg6XCJmNWE0XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29MZWZ0XCIsZ2x5cGg6XCJmNWE1XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29SaWdodFwiLGdseXBoOlwiZjVhNlwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVHdvVG9wXCIsZ2x5cGg6XCJmNWE3XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29Cb3R0b21cIixnbHlwaDpcImY1YThcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZUJvb2tCaW5kaW5nXCIsZ2x5cGg6XCJmNWE5XCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyUm9hbWluZ1wiLGdseXBoOlwiZjVhYVwifSx7bmFtZTpcIk1vYlNJTUVycm9yXCIsZ2x5cGg6XCJmNWFiXCJ9LHtuYW1lOlwiQ29sbGF0ZUxhbmRzY2FwZVNlcGFyYXRlZFwiLGdseXBoOlwiZjVhY1wifSx7bmFtZTpcIlBQU09uZVBvcnRyYWl0XCIsZ2x5cGg6XCJmNWFkXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvdHRvbUxlZnRcIixnbHlwaDpcImY1YWVcIn0se25hbWU6XCJQbGF5U29saWRcIixnbHlwaDpcImY1YjBcIn0se25hbWU6XCJSZXBlYXRPZmZcIixnbHlwaDpcImY1ZTdcIn0se25hbWU6XCJTZXRcIixnbHlwaDpcImY1ZWRcIn0se25hbWU6XCJTZXRTb2xpZFwiLGdseXBoOlwiZjVlZVwifSx7bmFtZTpcIkZ1enp5UmVhZGluZ1wiLGdseXBoOlwiZjVlZlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTBcIixnbHlwaDpcImY1ZjJcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkxXCIsZ2x5cGg6XCJmNWYzXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MlwiLGdseXBoOlwiZjVmNFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTNcIixnbHlwaDpcImY1ZjVcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk0XCIsZ2x5cGg6XCJmNWY2XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5NVwiLGdseXBoOlwiZjVmN1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTZcIixnbHlwaDpcImY1ZjhcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk3XCIsZ2x5cGg6XCJmNWY5XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5OFwiLGdseXBoOlwiZjVmYVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTlcIixnbHlwaDpcImY1ZmJcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkxMFwiLGdseXBoOlwiZjVmY1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMFwiLGdseXBoOlwiZjVmZFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZjVmZVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMlwiLGdseXBoOlwiZjVmZlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nM1wiLGdseXBoOlwiZjYwMFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZjYwMVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNVwiLGdseXBoOlwiZjYwMlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nNlwiLGdseXBoOlwiZjYwM1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZjYwNFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nOFwiLGdseXBoOlwiZjYwNVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nOVwiLGdseXBoOlwiZjYwNlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImY2MDdcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlVbmtub3duXCIsZ2x5cGg6XCJmNjA4XCJ9LHtuYW1lOlwiU0lNRXJyb3JcIixnbHlwaDpcImY2MThcIn0se25hbWU6XCJTSU1NaXNzaW5nXCIsZ2x5cGg6XCJmNjE5XCJ9LHtuYW1lOlwiU0lNTG9ja1wiLGdseXBoOlwiZjYxYVwifSx7bmFtZTpcImVTSU1cIixnbHlwaDpcImY2MWJcIn0se25hbWU6XCJlU0lNTm9Qcm9maWxlXCIsZ2x5cGg6XCJmNjFjXCJ9LHtuYW1lOlwiZVNJTUxvY2tlZFwiLGdseXBoOlwiZjYxZFwifSx7bmFtZTpcImVTSU1CdXN5XCIsZ2x5cGg6XCJmNjFlXCJ9LHtuYW1lOlwiTm9pc2VDYW5jZWxhdGlvblwiLGdseXBoOlwiZjYxZlwifSx7bmFtZTpcIk5vaXNlQ2FuY2VsYXRpb25PZmZcIixnbHlwaDpcImY2MjBcIn0se25hbWU6XCJNdXNpY1NoYXJpbmdcIixnbHlwaDpcImY2MjNcIn0se25hbWU6XCJNdXNpY1NoYXJpbmdPZmZcIixnbHlwaDpcImY2MjRcIn0se25hbWU6XCJDaXJjbGVTaGFwZVNvbGlkXCIsZ2x5cGg6XCJmNjNjXCJ9LHtuYW1lOlwiV2lmaUNhbGxCYXJzXCIsZ2x5cGg6XCJmNjU3XCJ9LHtuYW1lOlwiV2lmaUNhbGwwXCIsZ2x5cGg6XCJmNjU4XCJ9LHtuYW1lOlwiV2lmaUNhbGwxXCIsZ2x5cGg6XCJmNjU5XCJ9LHtuYW1lOlwiV2lmaUNhbGwyXCIsZ2x5cGg6XCJmNjVhXCJ9LHtuYW1lOlwiV2lmaUNhbGwzXCIsZ2x5cGg6XCJmNjViXCJ9LHtuYW1lOlwiV2lmaUNhbGw0XCIsZ2x5cGg6XCJmNjVjXCJ9LHtuYW1lOlwiQ0hUTGFuZ3VhZ2VCYXJcIixnbHlwaDpcImY2OWVcIn0se25hbWU6XCJDb21wb3NlTW9kZVwiLGdseXBoOlwiZjZhOVwifSx7bmFtZTpcIkV4cHJlc3NpdmVJbnB1dEVudHJ5XCIsZ2x5cGg6XCJmNmI4XCJ9LHtuYW1lOlwiRW1vamlUYWJNb3JlU3ltYm9sc1wiLGdseXBoOlwiZjZiYVwifSx7bmFtZTpcIldlYlNlYXJjaFwiLGdseXBoOlwiZjZmYVwifSx7bmFtZTpcIktpb3NrXCIsZ2x5cGg6XCJmNzEyXCJ9LHtuYW1lOlwiUlRUTG9nb1wiLGdseXBoOlwiZjcxNFwifSx7bmFtZTpcIlZvaWNlQ2FsbFwiLGdseXBoOlwiZjcxNVwifSx7bmFtZTpcIkdvVG9NZXNzYWdlXCIsZ2x5cGg6XCJmNzE2XCJ9LHtuYW1lOlwiUmV0dXJuVG9DYWxsXCIsZ2x5cGg6XCJmNzFhXCJ9LHtuYW1lOlwiU3RhcnRQcmVzZW50aW5nXCIsZ2x5cGg6XCJmNzFjXCJ9LHtuYW1lOlwiU3RvcFByZXNlbnRpbmdcIixnbHlwaDpcImY3MWRcIn0se25hbWU6XCJQcm9kdWN0aXZpdHlNb2RlXCIsZ2x5cGg6XCJmNzFlXCJ9LHtuYW1lOlwiU2V0SGlzdG9yeVN0YXR1c1wiLGdseXBoOlwiZjczOFwifSx7bmFtZTpcIlNldEhpc3RvcnlTdGF0dXMyXCIsZ2x5cGg6XCJmNzM5XCJ9LHtuYW1lOlwiS2V5Ym9hcmRzZXR0aW5nczIwXCIsZ2x5cGg6XCJmNzNkXCJ9LHtuYW1lOlwiT25lSGFuZGVkUmlnaHQyMFwiLGdseXBoOlwiZjczZVwifSx7bmFtZTpcIk9uZUhhbmRlZExlZnQyMFwiLGdseXBoOlwiZjczZlwifSx7bmFtZTpcIlNwbGl0MjBcIixnbHlwaDpcImY3NDBcIn0se25hbWU6XCJGdWxsMjBcIixnbHlwaDpcImY3NDFcIn0se25hbWU6XCJIYW5kd3JpdGluZzIwXCIsZ2x5cGg6XCJmNzQyXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnQyMFwiLGdseXBoOlwiZjc0M1wifSx7bmFtZTpcIkNoZXZyb25MZWZ0MzJcIixnbHlwaDpcImY3NDRcIn0se25hbWU6XCJDaGV2cm9uUmlnaHQyMFwiLGdseXBoOlwiZjc0NVwifSx7bmFtZTpcIkNoZXZyb25SaWdodDMyXCIsZ2x5cGg6XCJmNzQ2XCJ9LHtuYW1lOlwiRXZlbnQxMlwiLGdseXBoOlwiZjc2M1wifSx7bmFtZTpcIk1pY09mZjJcIixnbHlwaDpcImY3ODFcIn0se25hbWU6XCJEZWxpdmVyeU9wdGltaXphdGlvblwiLGdseXBoOlwiZjc4NVwifSx7bmFtZTpcIkNhbmNlbE1lZGl1bVwiLGdseXBoOlwiZjc4YVwifSx7bmFtZTpcIlNlYXJjaE1lZGl1bVwiLGdseXBoOlwiZjc4YlwifSx7bmFtZTpcIkFjY2VwdE1lZGl1bVwiLGdseXBoOlwiZjc4Y1wifSx7bmFtZTpcIlJldmVhbFBhc3N3b3JkTWVkaXVtXCIsZ2x5cGg6XCJmNzhkXCJ9LHtuYW1lOlwiRGVsZXRlV29yZFwiLGdseXBoOlwiZjdhZFwifSx7bmFtZTpcIkRlbGV0ZVdvcmRGaWxsXCIsZ2x5cGg6XCJmN2FlXCJ9LHtuYW1lOlwiRGVsZXRlTGluZXNcIixnbHlwaDpcImY3YWZcIn0se25hbWU6XCJEZWxldGVMaW5lc0ZpbGxcIixnbHlwaDpcImY3YjBcIn0se25hbWU6XCJJbnN0ZXJ0V29yZHNcIixnbHlwaDpcImY3YjFcIn0se25hbWU6XCJJbnN0ZXJ0V29yZHNGaWxsXCIsZ2x5cGg6XCJmN2IyXCJ9LHtuYW1lOlwiSm9pbldvcmRzXCIsZ2x5cGg6XCJmN2IzXCJ9LHtuYW1lOlwiSm9pbldvcmRzRmlsbFwiLGdseXBoOlwiZjdiNFwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzXCIsZ2x5cGg6XCJmN2I1XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNGaWxsXCIsZ2x5cGg6XCJmN2I2XCJ9LHtuYW1lOlwiQWRkTmV3TGluZVwiLGdseXBoOlwiZjdiN1wifSx7bmFtZTpcIkFkZE5ld0xpbmVGaWxsXCIsZ2x5cGg6XCJmN2I4XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNLb3JlYW5cIixnbHlwaDpcImY3YjlcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0ZpbGxLb3JlYW5cIixnbHlwaDpcImY3YmFcIn0se25hbWU6XCJFZHVjYXRpb25JY29uXCIsZ2x5cGg6XCJmN2JiXCJ9LHtuYW1lOlwiV2luZG93U25pcHBpbmdcIixnbHlwaDpcImY3ZWRcIn0se25hbWU6XCJWaWRlb0NhcHR1cmVcIixnbHlwaDpcImY3ZWVcIn0se25hbWU6XCJTdGF0dXNTZWN1cmVkXCIsZ2x5cGg6XCJmODA5XCJ9LHtuYW1lOlwiTmFycmF0b3JBcHBcIixnbHlwaDpcImY4M2JcIn0se25hbWU6XCJQb3dlckJ1dHRvblVwZGF0ZVwiLGdseXBoOlwiZjgzZFwifSx7bmFtZTpcIlJlc3RhcnRVcGRhdGVcIixnbHlwaDpcImY4M2VcIn0se25hbWU6XCJVcGRhdGVTdGF0dXNEb3RcIixnbHlwaDpcImY4M2ZcIn0se25hbWU6XCJFamVjdFwiLGdseXBoOlwiZjg0N1wifSx7bmFtZTpcIlNwZWxsaW5nXCIsZ2x5cGg6XCJmODdiXCJ9LHtuYW1lOlwiU3BlbGxpbmdLb3JlYW5cIixnbHlwaDpcImY4N2NcIn0se25hbWU6XCJTcGVsbGluZ1NlcmJpYW5cIixnbHlwaDpcImY4N2RcIn0se25hbWU6XCJTcGVsbGluZ0NoaW5lc2VcIixnbHlwaDpcImY4N2VcIn0se25hbWU6XCJGb2xkZXJTZWxlY3RcIixnbHlwaDpcImY4OWFcIn0se25hbWU6XCJTbWFydFNjcmVlblwiLGdseXBoOlwiZjhhNVwifSx7bmFtZTpcIkV4cGxvaXRQcm90ZWN0aW9uXCIsZ2x5cGg6XCJmOGE2XCJ9LHtuYW1lOlwiQWRkQm9sZFwiLGdseXBoOlwiZjhhYVwifSx7bmFtZTpcIlN1YnRyYWN0Qm9sZFwiLGdseXBoOlwiZjhhYlwifSx7bmFtZTpcIkJhY2tTb2xpZEJvbGRcIixnbHlwaDpcImY4YWNcIn0se25hbWU6XCJGb3J3YXJkU29saWRCb2xkXCIsZ2x5cGg6XCJmOGFkXCJ9LHtuYW1lOlwiUGF1c2VCb2xkXCIsZ2x5cGg6XCJmOGFlXCJ9LHtuYW1lOlwiQ2xpY2tTb2xpZFwiLGdseXBoOlwiZjhhZlwifSx7bmFtZTpcIlNldHRpbmdzU29saWRcIixnbHlwaDpcImY4YjBcIn0se25hbWU6XCJNaWNyb3Bob25lU29saWRCb2xkXCIsZ2x5cGg6XCJmOGIxXCJ9LHtuYW1lOlwiU3BlZWNoU29saWRCb2xkXCIsZ2x5cGg6XCJmOGIyXCJ9LHtuYW1lOlwiQ2xpY2tlZE91dExvdWRTb2xpZEJvbGRcIixnbHlwaDpcImY4YjNcIn1dO2xldCBwPWNsYXNzIGV4dGVuZHMgZS5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJmb250LWZhbWlseVwiLFwiZ2x5cGhcIixcImZvbnQtc2l6ZVwiLFwiZm9yZWdyb3VuZFwiLFwidXNlLWFjY2VudFwiXX1nZXQgZm9udEZhbWlseSgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5nZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiKSkmJnZvaWQgMCE9PWU/ZTpcIlNlZ29lIEZsdWVudCBJY29uc1wifXNldCBmb250RmFtaWx5KGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIixlKSx0aGlzLnNldEZvbnRGYW1pbHkoKX1nZXQgZ2x5cGgoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJnbHlwaFwiKX1zZXQgZ2x5cGgoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJnbHlwaFwiLGUpLHRoaXMuc2V0R2x5cGgoKX1nZXQgZm9udFNpemUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJmb250LXNpemVcIik/cGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIikpOjE2fXNldCBmb250U2l6ZShlKXt0aGlzLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLGUudG9TdHJpbmcoKSksdGhpcy5zZXRGb250U2l6ZSgpfWdldCBmb3JlZ3JvdW5kKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZm9yZWdyb3VuZFwiKX1zZXQgZm9yZWdyb3VuZChlKXt0aGlzLnNldEF0dHJpYnV0ZShcImZvcmVncm91bmRcIixlKSx0aGlzLnNldEZvcmVncm91bmQoKX1nZXQgdXNlQWNjZW50KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidXNlLWFjY2VudFwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpfXNldCB1c2VBY2NlbnQoZSl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsZSksdGhpcy5zZXRGb3JlZ3JvdW5kKCl9Z2V0IGljb25TcGFuKCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLl9pY29uU3BhbikmJnZvaWQgMCE9PWV8fCh0aGlzLl9pY29uU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpKSx0aGlzLl9pY29uU3Bhbn1yZW5kZXIoKXtyZXR1cm4nXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgcGFydD1cImljb25cIj48L3NwYW4+XFxuICAgICAgICAnfWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5zZXRGb250RmFtaWx5KCksdGhpcy5zZXRHbHlwaCgpLHRoaXMuc2V0Rm9udFNpemUoKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pe3N3aXRjaChlKXtjYXNlXCJmb250LWZhbWlseVwiOnRoaXMuc2V0Rm9udEZhbWlseSgpO2JyZWFrO2Nhc2VcImdseXBoXCI6dGhpcy5zZXRHbHlwaCgpO2JyZWFrO2Nhc2VcImZvbnQtc2l6ZVwiOnRoaXMuc2V0Rm9udFNpemUoKTticmVhaztjYXNlXCJmb3JlZ3JvdW5kXCI6Y2FzZVwidXNlLWFjY2VudFwiOnRoaXMuc2V0Rm9yZWdyb3VuZCgpfX1zZXRGb250RmFtaWx5KCl7dGhpcy5pY29uU3Bhbi5zdHlsZS5mb250RmFtaWx5PXRoaXMuZm9udEZhbWlseStcIiwgc2Fucy1zZXJpZlwifXNldEdseXBoKCl7dGhpcy5pY29uU3Bhbi5pbm5lckhUTUw9dGhpcy5nbHlwaH1zZXRGb250U2l6ZSgpe2lmKG51bGwhPT10aGlzLmZvbnRTaXplKXtjb25zdCBlPXRoaXMuZm9udFNpemUrXCJweFwiLGE9dGhpcy5zdHlsZSxuPXRoaXMuaWNvblNwYW4uc3R5bGU7bi5mb250U2l6ZT1lLG4ubGluZUhlaWdodD1lLG4uaGVpZ2h0PWUsbi53aWR0aD1lLGEuaGVpZ2h0PWUsYS53aWR0aD1lfX1zZXRGb3JlZ3JvdW5kKCl7dGhpcy5pY29uU3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwidXNlLWFjY2VudFwiLHRoaXMudXNlQWNjZW50KSxudWxsIT09dGhpcy5mb3JlZ3JvdW5kJiYodGhpcy5pY29uU3Bhbi5zdHlsZS5jb2xvcj10aGlzLmZvcmVncm91bmQpfX07cC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaWNvbi51c2UtYWNjZW50IHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC1hY2NlbnQtZGVmYXVsdCk7XFxuICAgICAgICB9XFxuICAgIFwiLHA9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWZvbnQtaWNvblwiKV0scCk7bGV0IGg9Y2xhc3MgZXh0ZW5kcyBwe3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiZm9udC1mYW1pbHlcIixcImdseXBoXCIsXCJmb250LXNpemVcIixcImZvcmVncm91bmRcIixcInVzZS1hY2NlbnRcIixcInN5bWJvbFwiXX1nZXQgc3ltYm9sKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic3ltYm9sXCIpfXNldCBzeW1ib2woZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJzeW1ib2xcIixlKSx0aGlzLnNldFN5bWJvbCgpfWdldCBnbHlwaE1hcCgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5fZ2x5cGhNYXApJiZ2b2lkIDAhPT1lP2U6Z31zZXQgZ2x5cGhNYXAoZSl7dGhpcy5fZ2x5cGhNYXA9ZSx0aGlzLnNldFN5bWJvbCgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKSxcInN5bWJvbFwiPT09ZSYmdGhpcy5zZXRTeW1ib2woKX1zZXRTeW1ib2woKXtjb25zdCBlPXRoaXMuc3ltYm9sP1wiJiN4XCIrdGhpcy5nbHlwaE1hcC5maW5kKChlPT5lLm5hbWU9PT10aGlzLnN5bWJvbCkpLmdseXBoOlwiXCI7c3VwZXIuZ2x5cGg9ZX19O2g9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LXN5bWJvbC1pY29uXCIpXSxoKTtsZXQgdD1jbGFzcyBleHRlbmRzIGUuQ3VzdG9tQ29tcG9uZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wic291cmNlXCIsXCJzaXplXCIsXCJhbHRcIixcInRpdGxlXCJdfWdldCBzb3VyY2UoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzb3VyY2VcIil9c2V0IHNvdXJjZShlKXt0aGlzLnNldEF0dHJpYnV0ZShcInNvdXJjZVwiLGUpfWdldCBzaXplKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwic2l6ZVwiKT9wYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZShcInNpemVcIikpOjE2fXNldCBzaXplKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwic2l6ZVwiLGUudG9TdHJpbmcoKSl9Z2V0IGFsdCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImFsdFwiKX1nZXQgdGl0bGUoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKX1nZXQgaW1hZ2UoKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuX2ltYWdlKSYmdm9pZCAwIT09ZXx8KHRoaXMuX2ltYWdlPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpKSx0aGlzLl9pbWFnZX1yZW5kZXIoKXtyZXR1cm4nPGltZyBjbGFzcz1cImltYWdlXCIgLz4nfWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5zZXRTb3VyY2UoKSx0aGlzLnNldFNpemUoKSx0aGlzLnNldEFsdE9yVGl0bGUoKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pe3N3aXRjaChlKXtjYXNlXCJzb3VyY2VcIjp0aGlzLnNldFNvdXJjZSgpO2JyZWFrO2Nhc2VcInNpemVcIjp0aGlzLnNldFNpemUoKTticmVhaztjYXNlXCJhbHRcIjpjYXNlXCJ0aXRsZVwiOnRoaXMuc2V0QWx0T3JUaXRsZSgpfX1zZXRTb3VyY2UoKXt0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc291cmNlKX1zZXRTaXplKCl7Y29uc3QgZT10aGlzLmltYWdlLnN0eWxlLGE9dGhpcy5zdHlsZTtlLndpZHRoPXRoaXMuc2l6ZStcInB4XCIsZS5oZWlnaHQ9dGhpcy5zaXplK1wicHhcIixhLndpZHRoPXRoaXMuc2l6ZStcInB4XCIsYS5oZWlnaHQ9dGhpcy5zaXplK1wicHhcIn1zZXRBbHRPclRpdGxlKCl7dGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIix0aGlzLmFsdCksdGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHRoaXMudGl0bGUpfX07dC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW1hZ2Uge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcbiAgICBcIix0PWEoWygwLGUuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1pbWFnZS1pY29uXCIpXSx0KX0pKCksbH0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50LmpzLm1hcCIsIi8qXG4gKiBhbmltZS5qcyB2My4yLjFcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGFuaW1lanMuY29tXG4gKi9cblxuLy8gRGVmYXVsdHNcblxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xuICB1cGRhdGU6IG51bGwsXG4gIGJlZ2luOiBudWxsLFxuICBsb29wQmVnaW46IG51bGwsXG4gIGNoYW5nZUJlZ2luOiBudWxsLFxuICBjaGFuZ2U6IG51bGwsXG4gIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxuICBsb29wQ29tcGxldGU6IG51bGwsXG4gIGNvbXBsZXRlOiBudWxsLFxuICBsb29wOiAxLFxuICBkaXJlY3Rpb246ICdub3JtYWwnLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgdGltZWxpbmVPZmZzZXQ6IDBcbn07XG5cbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAwLFxuICBlbmREZWxheTogMCxcbiAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcbiAgcm91bmQ6IDBcbn07XG5cbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xuXG4vLyBDYWNoaW5nXG5cbnZhciBjYWNoZSA9IHtcbiAgQ1NTOiB7fSxcbiAgc3ByaW5nczoge31cbn07XG5cbi8vIFV0aWxzXG5cbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xuICByZXR1cm4gc3RyLmluZGV4T2YodGV4dCkgPiAtMTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBcmd1bWVudHMoZnVuYywgYXJncykge1xuICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbn1cblxudmFyIGlzID0ge1xuICBhcnI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBBcnJheS5pc0FycmF5KGEpOyB9LFxuICBvYmo6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBzdHJpbmdDb250YWlucyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksICdPYmplY3QnKTsgfSxcbiAgcHRoOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyk7IH0sXG4gIHN2ZzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50OyB9LFxuICBpbnA6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudDsgfSxcbiAgZG9tOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSk7IH0sXG4gIHN0cjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJzsgfSxcbiAgZm5jOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7IH0sXG4gIHVuZDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJzsgfSxcbiAgbmlsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMudW5kKGEpIHx8IGEgPT09IG51bGw7IH0sXG4gIGhleDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpOyB9LFxuICByZ2I6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXnJnYi8udGVzdChhKTsgfSxcbiAgaHNsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15oc2wvLnRlc3QoYSk7IH0sXG4gIGNvbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7IH0sXG4gIGtleTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnOyB9LFxufTtcblxuLy8gRWFzaW5nc1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXJzZUZsb2F0KHApOyB9KSA6IFtdO1xufVxuXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG5cbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XG5cbiAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xuICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xuICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcbiAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XG4gIHZhciB2ZWxvY2l0eSA9ICBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcbiAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xuICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gIHZhciBhID0gMTtcbiAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcblxuICBmdW5jdGlvbiBzb2x2ZXIodCkge1xuICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcbiAgICB9XG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkgeyByZXR1cm4gdDsgfVxuICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xuICAgIGlmIChjYWNoZWQpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICAgIHZhciBmcmFtZSA9IDEvNjtcbiAgICB2YXIgZWxhcHNlZCA9IDA7XG4gICAgdmFyIHJlc3QgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XG4gICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XG4gICAgICAgIHJlc3QrKztcbiAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHsgYnJlYWs7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3QgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xuICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xuXG59XG5cbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cblxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcbiAgaWYgKCBzdGVwcyA9PT0gdm9pZCAwICkgc3RlcHMgPSAxMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGguY2VpbCgobWluTWF4KHQsIDAuMDAwMDAxLCAxKSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTsgfTtcbn1cblxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uICgpIHtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEMoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMSB9XG5cbiAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUIH1cbiAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpIH1cblxuICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkgeyBhQiA9IGN1cnJlbnRUOyB9IGVsc2UgeyBhQSA9IGN1cnJlbnRUOyB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH1cblxuICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkgeyByZXR1cm4gYUd1ZXNzVDsgfVxuICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7IHJldHVybjsgfVxuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXG4gICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XG4gICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIH1cblxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7IHJldHVybiB4OyB9XG4gICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7IHJldHVybiB4OyB9XG4gICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGJlemllcjtcblxufSkoKTtcblxudmFyIHBlbm5lciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gQmFzZWQgb24galF1ZXJ5IFVJJ3MgaW1wbGVtZW5hdGlvbiBvZiBlYXNpbmcgZXF1YXRpb25zIGZyb20gUm9iZXJ0IFBlbm5lciAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZylcblxuICB2YXIgZWFzZXMgPSB7IGxpbmVhcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07IH0gfTtcblxuICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xuICAgIFNpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTsgfTsgfSxcbiAgICBDaXJjOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpOyB9OyB9LFxuICAgIEJhY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ICogdCAqICgzICogdCAtIDIpOyB9OyB9LFxuICAgIEJvdW5jZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBwb3cyLCBiID0gNDtcbiAgICAgIHdoaWxlICh0IDwgKCggcG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cbiAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKCBwb3cyICogMyAtIDIgKSAvIDIyIC0gdCwgMilcbiAgICB9OyB9LFxuICAgIEVsYXN0aWM6IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgICAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gICAgICBpZiAoIHBlcmlvZCA9PT0gdm9pZCAwICkgcGVyaW9kID0gLjU7XG5cbiAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xuICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6IFxuICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XG5cbiAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaSkge1xuICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLnBvdyh0LCBpICsgMik7IH07IH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGZ1bmN0aW9uRWFzaW5ncykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XG4gICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcbiAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VJbk91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDogXG4gICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjsgfTsgfTtcbiAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gKDEgLSBlYXNlSW4oYSwgYikoMSAtIHQgKiAyKSkgLyAyIDogXG4gICAgICAoZWFzZUluKGEsIGIpKHQgKiAyIC0gMSkgKyAxKSAvIDI7IH07IH07XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlcztcblxufSkoKTtcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcbiAgaWYgKGlzLmZuYyhlYXNpbmcpKSB7IHJldHVybiBlYXNpbmc7IH1cbiAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcbiAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XG4gIHZhciBhcmdzID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKGVhc2luZyk7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ3NwcmluZycgOiByZXR1cm4gc3ByaW5nKGVhc2luZywgZHVyYXRpb24pO1xuICAgIGNhc2UgJ2N1YmljQmV6aWVyJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xuICAgIGNhc2UgJ3N0ZXBzJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XG4gICAgZGVmYXVsdCA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhlYXNlLCBhcmdzKTtcbiAgfVxufVxuXG4vLyBTdHJpbmdzXG5cbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gQXJyYXlzXG5cbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaSBpbiBhcnIpIHtcbiAgICAgIHZhciB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7IH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvKSB7XG4gIGlmIChpcy5hcnIobykpIHsgcmV0dXJuIG87IH1cbiAgaWYgKGlzLnN0cihvKSkgeyBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87IH1cbiAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7IH1cbiAgcmV0dXJuIFtvXTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgPT09IHZhbDsgfSk7XG59XG5cbi8vIE9iamVjdHNcblxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xuICB2YXIgY2xvbmUgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvKSB7IGNsb25lW3BdID0gb1twXTsgfVxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzEpIHsgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMikgeyBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbi8vIENvbG9yc1xuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHsgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjsgfSApO1xuICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIHZhciBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgaWYgKHQgPCAxLzYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICBpZiAodCA8IDEvMikgeyByZXR1cm4gcTsgfVxuICAgIGlmICh0IDwgMi8zKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7IH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICB2YXIgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICB9XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSB7IHJldHVybiByZ2JUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaGV4KHZhbCkpIHsgcmV0dXJuIGhleFRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oc2wodmFsKSkgeyByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7IH1cbn1cblxuLy8gVW5pdHNcblxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcbiAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcbiAgaWYgKHNwbGl0KSB7IHJldHVybiBzcGxpdFsxXTsgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpIHx8IHByb3BOYW1lID09PSAncGVyc3BlY3RpdmUnKSB7IHJldHVybiAncHgnOyB9XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7IHJldHVybiAnZGVnJzsgfVxufVxuXG4vLyBWYWx1ZXNcblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcbiAgaWYgKCFpcy5mbmModmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcbiAgaWYgKCFpcy51bmQoY2FjaGVkKSkgeyByZXR1cm4gY2FjaGVkOyB9XG4gIHZhciBiYXNlbGluZSA9IDEwMDtcbiAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XG4gIHZhciBwYXJlbnRFbCA9IChlbC5wYXJlbnROb2RlICYmIChlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudCkpID8gZWwucGFyZW50Tm9kZSA6IGRvY3VtZW50LmJvZHk7XG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XG4gIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRlbXBFbC5zdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcbiAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xuICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xuICB2YXIgY29udmVydGVkVW5pdCA9IGZhY3RvciAqIHBhcnNlRmxvYXQodmFsdWUpO1xuICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XG4gIHJldHVybiBjb252ZXJ0ZWRVbml0O1xufVxuXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xuICBpZiAocHJvcCBpbiBlbC5zdHlsZSkge1xuICAgIHZhciB1cHBlcmNhc2VQcm9wTmFtZSA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgdmFsdWUgPSBlbC5zdHlsZVtwcm9wXSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHVwcGVyY2FzZVByb3BOYW1lKSB8fCAnMCc7XG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcbiAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkgeyByZXR1cm4gJ2F0dHJpYnV0ZSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSB7IHJldHVybiAndHJhbnNmb3JtJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkgeyByZXR1cm4gJ2Nzcyc7IH1cbiAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHsgcmV0dXJuICdvYmplY3QnOyB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XG4gIGlmICghaXMuZG9tKGVsKSkgeyByZXR1cm47IH1cbiAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcbiAgdmFyIHJlZyAgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xuICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcbiAgdmFyIG07IHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkgeyB0cmFuc2Zvcm1zLnNldChtWzFdLCBtWzJdKTsgfVxuICByZXR1cm4gdHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XG4gIHZhciBkZWZhdWx0VmFsID0gc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdzY2FsZScpID8gMSA6IDAgKyBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKTtcbiAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcbiAgaWYgKGFuaW1hdGFibGUpIHtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xuICB9XG4gIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XG4gIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xuICAgIGNhc2UgJ3RyYW5zZm9ybSc6IHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcbiAgICBjYXNlICdjc3MnOiByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XG4gICAgY2FzZSAnYXR0cmlidXRlJzogcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcbiAgICBkZWZhdWx0OiByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pIHtcbiAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XG4gIGlmICghb3BlcmF0b3IpIHsgcmV0dXJuIHRvOyB9XG4gIHZhciB1ID0gZ2V0VW5pdCh0bykgfHwgMDtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcbiAgc3dpdGNoIChvcGVyYXRvclswXVswXSkge1xuICAgIGNhc2UgJysnOiByZXR1cm4geCArIHkgKyB1O1xuICAgIGNhc2UgJy0nOiByZXR1cm4geCAtIHkgKyB1O1xuICAgIGNhc2UgJyonOiByZXR1cm4geCAqIHkgKyB1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XG4gIGlmIChpcy5jb2wodmFsKSkgeyByZXR1cm4gY29sb3JUb1JnYih2YWwpOyB9XG4gIGlmICgvXFxzL2cudGVzdCh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcbiAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XG4gIGlmICh1bml0KSB7IHJldHVybiB1bml0TGVzcyArIHVuaXQ7IH1cbiAgcmV0dXJuIHVuaXRMZXNzO1xufVxuXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vU2ViTGFtYmxhLzNlMDU1MGM0OTZjMjM2NzA5NzQ0XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG59XG5cbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xuICByZXR1cm4gTWF0aC5QSSAqIDIgKiBnZXRBdHRyaWJ1dGUoZWwsICdyJyk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xuICByZXR1cm4gZ2V0RGlzdGFuY2UoXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJyl9LCBcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKX1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgdmFyIHByZXZpb3VzUG9zO1xuICBmb3IgKHZhciBpID0gMCA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcbiAgICBpZiAoaSA+IDApIHsgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpOyB9XG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuICB9XG4gIHJldHVybiB0b3RhbExlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBQYXRoIGFuaW1hdGlvblxuXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xuICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHsgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7IH1cbiAgc3dpdGNoKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6IHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XG4gICAgY2FzZSAnbGluZSc6IHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5bGluZSc6IHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWdvbic6IHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XG4gIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcbiAgcmV0dXJuIHBhdGhMZW5ndGg7XG59XG5cbi8vIE1vdGlvbiBwYXRoXG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XG4gIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XG4gICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHsgYnJlYWs7IH1cbiAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHBhcmVudEVsO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XG4gIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xuICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcbiAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xuICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gIHJldHVybiB7XG4gICAgZWw6IHBhcmVudFN2Z0VsLFxuICAgIHZpZXdCb3g6IHZpZXdCb3gsXG4gICAgeDogdmlld0JveFswXSAvIDEsXG4gICAgeTogdmlld0JveFsxXSAvIDEsXG4gICAgdzogd2lkdGgsXG4gICAgaDogaGVpZ2h0LFxuICAgIHZXOiB2aWV3Qm94WzJdLFxuICAgIHZIOiB2aWV3Qm94WzNdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XG4gIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xuICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgZWw6IHBhdGhFbCxcbiAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXG4gICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MsIGlzUGF0aFRhcmdldEluc2lkZVNWRykge1xuICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcbiAgICBpZiAoIG9mZnNldCA9PT0gdm9pZCAwICkgb2Zmc2V0ID0gMDtcblxuICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcbiAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xuICB9XG4gIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xuICB2YXIgcCA9IHBvaW50KCk7XG4gIHZhciBwMCA9IHBvaW50KC0xKTtcbiAgdmFyIHAxID0gcG9pbnQoKzEpO1xuICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xuICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xuICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcbiAgICBjYXNlICd4JzogcmV0dXJuIChwLnggLSBzdmcueCkgKiBzY2FsZVg7XG4gICAgY2FzZSAneSc6IHJldHVybiAocC55IC0gc3ZnLnkpICogc2NhbGVZO1xuICAgIGNhc2UgJ2FuZ2xlJzogcmV0dXJuIE1hdGguYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIE1hdGguUEk7XG4gIH1cbn1cblxuLy8gRGVjb21wb3NlIHZhbHVlXG5cbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xuICAvLyBjb25zdCByZ3ggPSAvLT9cXGQqXFwuP1xcZCsvZzsgLy8gaGFuZGxlcyBiYXNpYyBudW1iZXJzXG4gIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWw6IHZhbHVlLFxuICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxuICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxuICB9XG59XG5cbi8vIEFuaW1hdGFibGVzXG5cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xuICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7IHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvczsgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4ge3RhcmdldDogdCwgaWQ6IGksIHRvdGFsOiBwYXJzZWQubGVuZ3RoLCB0cmFuc2Zvcm1zOiB7IGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpIH0gfTtcbiAgfSk7XG59XG5cbi8vIFByb3BlcnRpZXNcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcbiAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXG4gIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7IH1cbiAgaWYgKGlzLmFycihwcm9wKSkge1xuICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XG4gICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XG4gICAgaWYgKCFpc0Zyb21Ubykge1xuICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xuICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcbiAgICAgIHByb3AgPSB7dmFsdWU6IHByb3B9O1xuICAgIH1cbiAgfVxuICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcbiAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7dmFsdWU6IHZ9O1xuICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHsgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDsgfVxuICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkgeyBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwOyB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSkubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xuICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7IH0pKSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIGlzLmtleShwKTsgfSlcbiAgLnJlZHVjZShmdW5jdGlvbiAoYSxiKSB7IGlmIChhLmluZGV4T2YoYikgPCAwKSB7IGEucHVzaChiKTsgfSByZXR1cm4gYTsgfSwgW10pO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICggaSApIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3S2V5ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGtleSkge1xuICAgICAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHsgbmV3S2V5LnZhbHVlID0ga2V5W3BdOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcCggaSApO1xuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XG4gIGlmIChrZXlmcmFtZXMpIHsgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTsgfVxuICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xuICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHAsXG4gICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBUd2VlbnNcblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xuICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xuICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTsgfSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7IHZhbHVlID0gdmFsdWVbMF07IH1cbiAgICB9XG4gICAgdFtwXSA9IHZhbHVlO1xuICB9XG4gIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xuICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XG4gIHZhciBwcmV2aW91c1R3ZWVuO1xuICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcbiAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcbiAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XG4gICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XG4gICAgaWYgKGlzLnVuZCh0bykpIHsgdG8gPSBwcmV2aW91c1ZhbHVlOyB9XG4gICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xuICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xuICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcbiAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcbiAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XG4gICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xuICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xuICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XG4gICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHsgdHdlZW4ucm91bmQgPSAxOyB9XG4gICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfSk7XG59XG5cbi8vIFR3ZWVuIHByb2dyZXNzXG5cbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xuICBjc3M6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnN0eWxlW3BdID0gdjsgfSxcbiAgYXR0cmlidXRlOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7IH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHRbcF0gPSB2OyB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcbiAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xuICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG4gICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHByb3ApIHsgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiOyB9KTtcbiAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IFZhbHVlIGhlbHBlclxuXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcbiAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xuICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xuICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xuICBpZiAoYW5pbVR5cGUpIHtcbiAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xuICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhbmltVHlwZSxcbiAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXG4gICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxuICAgICAgdHdlZW5zOiB0d2VlbnMsXG4gICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcbiAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXG4gICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XG4gICAgfSk7XG4gIH0pKSwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFpcy51bmQoYSk7IH0pO1xufVxuXG4vLyBDcmVhdGUgSW5zdGFuY2VcblxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDsgfTtcbiAgdmFyIHRpbWluZ3MgPSB7fTtcbiAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uOyB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xuICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XG4gIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xuICByZXR1cm4gdGltaW5ncztcbn1cblxudmFyIGluc3RhbmNlSUQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcbiAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xuICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xuICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcbiAgdmFyIGlkID0gaW5zdGFuY2VJRDtcbiAgaW5zdGFuY2VJRCsrO1xuICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcbiAgICBpZDogaWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxuICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxuICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XG4gIH0pO1xufVxuXG4vLyBDb3JlXG5cbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxudmFyIGVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByYWY7XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RlcCh0KSB7XG4gICAgLy8gbWVtbyBvbiBhbGdvcml0aG0gaXNzdWU6XG4gICAgLy8gZGFuZ2Vyb3VzIGl0ZXJhdGlvbiBvdmVyIG11dGFibGUgYGFjdGl2ZUluc3RhbmNlc2BcbiAgICAvLyAodGhhdCBjb2xsZWN0aW9uIG1heSBiZSB1cGRhdGVkIGZyb20gd2l0aGluIGNhbGxiYWNrcyBvZiBgdGlja2AtZWQgYW5pbWF0aW9uIGluc3RhbmNlcylcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhY3RpdmVJbnN0YW5jZXNMZW5ndGgpIHtcbiAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByYWYgPSBpID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xuICAgICAgLy8gc3VzcGVuZCB0aWNrc1xuICAgICAgcmFmID0gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICB9IGVsc2UgeyAvLyBpcyBiYWNrIHRvIGFjdGl2ZSB0YWJcbiAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcbiAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlIC5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTsgfVxuICAgICAgKTtcbiAgICAgIGVuZ2luZSgpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5O1xufSkoKTtcblxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xufVxuXG4vLyBQdWJsaWMgSW5zdGFuY2VcblxuZnVuY3Rpb24gYW5pbWUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuXG4gIHZhciBzdGFydFRpbWUgPSAwLCBsYXN0VGltZSA9IDAsIG5vdyA9IDA7XG4gIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGggPSAwO1xuICB2YXIgcmVzb2x2ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZSA9IF9yZXNvbHZlOyB9KTtcbiAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpO1xuICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICBpbnN0YW5jZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gIT09ICdub3JtYWwnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XG4gICAgfVxuICAgIGluc3RhbmNlLnJldmVyc2VkID0gIWluc3RhbmNlLnJldmVyc2VkO1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xuICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRpbWUoKSB7XG4gICAgc3RhcnRUaW1lID0gMDtcbiAgICBsYXN0VGltZSA9IGFkanVzdFRpbWUoaW5zdGFuY2UuY3VycmVudFRpbWUpICogKDEgLyBhbmltZS5zcGVlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHsgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IGNoaWxkcmVuTGVuZ3RoOyBpJDEtLTspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XG4gICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XG4gICAgICB2YXIgYW5pbWF0YWJsZSA9IGFuaW0uYW5pbWF0YWJsZTtcbiAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcbiAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHR3ZWVuID0gdHdlZW5zW3R3ZWVuTGVuZ3RoXTtcbiAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXG4gICAgICBpZiAodHdlZW5MZW5ndGgpIHsgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaW5zVGltZSA8IHQuZW5kKTsgfSlbMF0gfHwgdHdlZW47IH1cbiAgICAgIHZhciBlbGFwc2VkID0gbWluTWF4KGluc1RpbWUgLSB0d2Vlbi5zdGFydCAtIHR3ZWVuLmRlbGF5LCAwLCB0d2Vlbi5kdXJhdGlvbikgLyB0d2Vlbi5kdXJhdGlvbjtcbiAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcbiAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcbiAgICAgIHZhciByb3VuZCA9IHR3ZWVuLnJvdW5kO1xuICAgICAgdmFyIG51bWJlcnMgPSBbXTtcbiAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcbiAgICAgIHZhciBwcm9ncmVzcyA9ICh2b2lkIDApO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAodm9pZCAwKTtcbiAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcbiAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcbiAgICAgICAgaWYgKCF0d2Vlbi5pc1BhdGgpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZyb21OdW1iZXIgKyAoZWFzZWQgKiAodG9OdW1iZXIgLSBmcm9tTnVtYmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xuICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcbiAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xuICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XG4gICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xuICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XG4gICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XG4gICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XG4gICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XG4gICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHsgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xuICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xuICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xuICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XG4gICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcbiAgICBpZiAoY2hpbGRyZW4pIHsgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7IH1cbiAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XG4gICAgfVxuICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcbiAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xuICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7IGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7IH1cbiAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkgeyBpbnN0YW5jZS5yZW1haW5pbmcrKzsgfVxuICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcbiAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xuXG4gIC8vIFNldCBWYWx1ZSBoZWxwZXJcblxuICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICBpbnN0YW5jZS50aWNrID0gZnVuY3Rpb24odCkge1xuICAgIG5vdyA9IHQ7XG4gICAgaWYgKCFzdGFydFRpbWUpIHsgc3RhcnRUaW1lID0gbm93OyB9XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XG4gIH07XG5cbiAgaW5zdGFuY2Uuc2VlayA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKGFkanVzdFRpbWUodGltZSkpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkgeyBpbnN0YW5jZS5yZXNldCgpOyB9XG4gICAgaW5zdGFuY2UucGF1c2VkID0gZmFsc2U7XG4gICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIHJlc2V0VGltZSgpO1xuICAgIGVuZ2luZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xuICAgIGluc3RhbmNlLnBsYXkoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZW1vdmUgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc2V0KCk7XG5cbiAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7IGluc3RhbmNlLnBsYXkoKTsgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcblxufVxuXG4vLyBSZW1vdmUgdGFyZ2V0cyBmcm9tIGFuaW1hdGlvblxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XG4gIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xuICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcbiAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcbiAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XG4gIGZvciAodmFyIGMgPSBjaGlsZHJlbi5sZW5ndGg7IGMtLTspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcbiAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBjaGlsZEFuaW1hdGlvbnMpO1xuICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7IGNoaWxkcmVuLnNwbGljZShjLCAxKTsgfVxuICB9XG4gIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkgeyBpbnN0YW5jZS5wYXVzZSgpOyB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgZm9yICh2YXIgaSA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7IGktLTspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfVxufVxuXG4vLyBTdGFnZ2VyIGhlbHBlcnNcblxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XG4gIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcbiAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XG4gIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XG4gIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcbiAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XG4gIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XG4gIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcbiAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIG1heFZhbHVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgaSwgdCkge1xuICAgIGlmIChmcm9tRmlyc3QpIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgIGlmIChmcm9tQ2VudGVyKSB7IGZyb21JbmRleCA9ICh0IC0gMSkgLyAyOyB9XG4gICAgaWYgKGZyb21MYXN0KSB7IGZyb21JbmRleCA9IHQgLSAxOyB9XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4JWdyaWRbMF0gOiAoZ3JpZFswXS0xKS8yO1xuICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXgvZ3JpZFswXSkgOiAoZ3JpZFsxXS0xKS8yO1xuICAgICAgICAgIHZhciB0b1ggPSBpbmRleCVncmlkWzBdO1xuICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4L2dyaWRbMF0pO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVg7IH1cbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7IHZhbHVlID0gLWRpc3RhbmNlWTsgfVxuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzaW5nKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlOyB9KTsgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTsgfSk7IH1cbiAgICB9XG4gICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XG4gIH1cbn1cblxuLy8gVGltZWxpbmVcblxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xuICB0bC5kdXJhdGlvbiA9IDA7XG4gIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xuICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xuICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xuICAgIGlmICh0bEluZGV4ID4gLTEpIHsgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTsgfVxuICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykgeyBpbnMucGFzc1Rocm91Z2ggPSB0cnVlOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7IH1cbiAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xuICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XG4gICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcbiAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xuICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XG4gICAgcGFzc1Rocm91Z2godGwpO1xuICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcbiAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcbiAgICBwYXNzVGhyb3VnaChpbnMpO1xuICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcbiAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XG4gICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xuICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcbiAgICB0bC5zZWVrKDApO1xuICAgIHRsLnJlc2V0KCk7XG4gICAgaWYgKHRsLmF1dG9wbGF5KSB7IHRsLnBsYXkoKTsgfVxuICAgIHJldHVybiB0bDtcbiAgfTtcbiAgcmV0dXJuIHRsO1xufVxuXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcbmFuaW1lLnNwZWVkID0gMTtcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XG5hbmltZS5zZXQgPSBzZXRUYXJnZXRzVmFsdWU7XG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcbmFuaW1lLnNldERhc2hvZmZzZXQgPSBzZXREYXNob2Zmc2V0O1xuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xuYW5pbWUuZWFzaW5nID0gcGFyc2VFYXNpbmdzO1xuYW5pbWUucGVubmVyID0gcGVubmVyO1xuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyB9O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFNlZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVsYm91cm4vNzljNDczYWFiNDA0YWJjZDM2ZGM3Y2ZhYTdhYzAyYWNcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2JGcm9tSGV4KGhleCkge1xuICAgIGlmIChoZXhbMF0gPT09IFwiI1wiKSB7XG4gICAgICAgIGhleCA9IGhleC5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4WzBdICsgaGV4WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KGhleFsyXSArIGhleFszXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChoZXhbNF0gKyBoZXhbNV0sIDE2KSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJsZW5kKGJhc2VWYWx1ZSwgb3ZlcmxheVZhbHVlLCBhbHBoYSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG92ZXJsYXlWYWx1ZSAqIGFscGhhICsgYmFzZVZhbHVlICogKDEgLSBhbHBoYSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVBbHBoYUJsZW5kKGJhc2VIZXgsIG92ZXJsYXlIZXgsIGFscGhhKSB7XG4gICAgY29uc3QgYmFzZSA9IGdldFJnYkZyb21IZXgoYmFzZUhleCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGdldFJnYkZyb21IZXgob3ZlcmxheUhleCk7XG4gICAgY29uc3QgYmxlbmRlZCA9IHtcbiAgICAgICAgcjogYmxlbmQoYmFzZS5yLCBvdmVybGF5LnIsIGFscGhhKSxcbiAgICAgICAgZzogYmxlbmQoYmFzZS5nLCBvdmVybGF5LmcsIGFscGhhKSxcbiAgICAgICAgYjogYmxlbmQoYmFzZS5iLCBvdmVybGF5LmIsIGFscGhhKSxcbiAgICB9O1xuICAgIHJldHVybiAoXCIjXCIgK1xuICAgICAgICBibGVuZGVkLnIudG9TdHJpbmcoMTYpICtcbiAgICAgICAgYmxlbmRlZC5nLnRvU3RyaW5nKDE2KSArXG4gICAgICAgIGJsZW5kZWQuYi50b1N0cmluZygxNikpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ3VycmVuY3kodmFsdWUpIHtcbiAgICByZXR1cm4gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KS5mb3JtYXQodmFsdWUpO1xufVxuIiwiLy8gV3JpdHRlbiBieSBHYXJ5IEFudGllclxuLy8gQ3JlYXRlZDogMjAyMFxuLy8gTW9kaWZpZWQ6IEFwciAyMCwgMjAyM1xuZXhwb3J0IGNvbnN0IEZ1bGxNb250aCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5jb25zdCBBYmJyTW9udGggPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xuY29uc3QgRnVsbERheXNPZldlZWsgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbmNvbnN0IEFiYnJEYXlzT2ZXZWVrID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuZXhwb3J0IGNsYXNzIFRpbWVDb25zdGFudHNCYXNlIHtcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BU2Vjb25kKCkge1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9XG4gICAgZ2V0IFNlY29uZHNJbkFNaW51dGUoKSB7XG4gICAgICAgIHJldHVybiA2MDtcbiAgICB9XG4gICAgZ2V0IE1pbGxpc2Vjb25kc0luQU1pbnV0ZSgpIHtcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFTZWNvbmQgKiB0aGlzLlNlY29uZHNJbkFNaW51dGU7XG4gICAgICAgIHJldHVybiBtaWxsaTtcbiAgICB9XG4gICAgZ2V0IE1pbnV0ZXNJbkFuSG91cigpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BbkhvdXIoKSB7XG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BTWludXRlICogdGhpcy5NaW51dGVzSW5BbkhvdXI7XG4gICAgICAgIHJldHVybiBtaWxsaTtcbiAgICB9XG4gICAgZ2V0IEhvdXJzSW5BRGF5KCkge1xuICAgICAgICByZXR1cm4gMjQ7XG4gICAgfVxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFEYXkoKSB7XG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BbkhvdXIgKiB0aGlzLkhvdXJzSW5BRGF5O1xuICAgICAgICByZXR1cm4gbWlsbGk7XG4gICAgfVxuICAgIGdldCBEYXlzSW5BWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIDM2NTtcbiAgICB9XG59XG5jb25zdCBUaW1lQ29uc3RhbnRzID0gbmV3IFRpbWVDb25zdGFudHNCYXNlKCk7XG5leHBvcnQgY2xhc3MgVGltZVNwYW4ge1xuICAgIGNvbnN0cnVjdG9yKG1pbGxpKSB7XG4gICAgICAgIHRoaXMubWlsbGkgPSBtaWxsaTtcbiAgICAgICAgdGhpcy50b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpIC8gVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFTZWNvbmQpO1xuICAgICAgICB0aGlzLnRvdGFsTWludXRlcyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQU1pbnV0ZSk7XG4gICAgICAgIHRoaXMudG90YWxIb3VycyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyKTtcbiAgICAgICAgdGhpcy50b3RhbERheXMgPSBNYXRoLmZsb29yKG1pbGxpIC8gVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFEYXkpO1xuICAgICAgICB0aGlzLnNlY29uZHMgPSB0aGlzLnRvdGFsU2Vjb25kcyAlIFRpbWVDb25zdGFudHMuU2Vjb25kc0luQU1pbnV0ZTtcbiAgICAgICAgdGhpcy5taW51dGVzID0gdGhpcy50b3RhbE1pbnV0ZXMgJSBUaW1lQ29uc3RhbnRzLk1pbnV0ZXNJbkFuSG91cjtcbiAgICAgICAgdGhpcy5ob3VycyA9IHRoaXMudG90YWxIb3VycyAlIFRpbWVDb25zdGFudHMuSG91cnNJbkFEYXk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMudG90YWxEYXlzICUgVGltZUNvbnN0YW50cy5EYXlzSW5BWWVhcjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmRheXMgPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLmRheXN9ZCBgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhvdXJzID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5ob3Vyc31oIGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWludXRlcyA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMubWludXRlc31tIGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMuc2Vjb25kc31zYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkdXJhdGlvbiA9PSBcIlwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlVGltZSB7XG4gICAgY29uc3RydWN0b3IoZGF0ZSwgb2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB9XG4gICAgc3RhdGljIHBhcnNlKGRhdGVUaW1lLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIGlmIChkYXRlVGltZSkge1xuICAgICAgICAgICAgbGV0IGlycmVndWxhckZvcm1hdFJlZ2V4ID0gLyhcXC9EYXRlXFwoKSguKikoXFwpXFwvKS9pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRlVGltZSA9PT0gXCJzdHJpbmdcIiAmJiBpcnJlZ3VsYXJGb3JtYXRSZWdleC50ZXN0KGRhdGVUaW1lKSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGlycmVndWxhckZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lID0gcGFyc2VJbnQobWF0Y2hbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1pbGxpID0gdHlwZW9mIGRhdGVUaW1lID09PSBcIm51bWJlclwiID8gZGF0ZVRpbWUgOiBEYXRlLnBhcnNlKGRhdGVUaW1lKTtcbiAgICAgICAgICAgIGlmIChpc05hTihtaWxsaSkpIHtcbiAgICAgICAgICAgICAgICBtaWxsaSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVVEMgb2Zmc2V0Li4uXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKiBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyO1xuICAgICAgICAgICAgbWlsbGkgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShtaWxsaSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKGRhdGUsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgbm93KCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ldyBEYXRlKCksIDgpO1xuICAgIH1cbiAgICBzdGF0aWMgZW5kT2ZNb250aChtb250aCwgeWVhcikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG4gICAgZ2V0IHllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICAgIGdldCBtb250aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICB9XG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICB9XG4gICAgZ2V0IGRheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAgfVxuICAgIGdldCBob3VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRIb3VycygpO1xuICAgIH1cbiAgICBnZXQgbWludXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TWludXRlcygpO1xuICAgIH1cbiAgICBnZXQgc2Vjb25kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciB0aW1lRGlmZiA9IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZURpZmYpO1xuICAgIH1cbiAgICBkaWZmZXJlbmNlKHNlY29uZERhdGUpIHtcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnRpbWUgLSBzZWNvbmREYXRlLnRpbWU7XG4gICAgICAgIHJldHVybiBuZXcgVGltZVNwYW4oZGlmZik7XG4gICAgfVxuICAgIGFkZERheXMoZGF5cykge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgICBuZXdEYXRlLnNldERhdGUodGhpcy5kYXRlICsgZGF5cyk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUobmV3RGF0ZSwgdGhpcy5vZmZzZXQpO1xuICAgIH1cbiAgICBhZGRZZWFycyh5ZWFycykge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgICBuZXdEYXRlLnNldEZ1bGxZZWFyKHRoaXMueWVhciArIHllYXJzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShuZXdEYXRlLCB0aGlzLm9mZnNldCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKGZvcm1hdCA9IFwieXl5eS9NTS9kZCBISDptbTpzc1wiKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgeWVhciA9IHRoaXMueWVhci50b1N0cmluZygpO1xuICAgICAgICBsZXQgc3ViWWVhciA9IHllYXIucGFkU3RhcnQoMiwgJzAnKS5zbGljZSgtMik7XG4gICAgICAgIGxldCBtb250aCA9IHRoaXMubW9udGg7XG4gICAgICAgIGxldCBkYXkgPSB0aGlzLmRheTtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLmRhdGU7XG4gICAgICAgIGxldCBob3VyID0gdGhpcy5ob3VyO1xuICAgICAgICBsZXQgXzEySG91ciA9IGhvdXIgPCAxMyA/IGhvdXIgOiBob3VyIC0gMTI7XG4gICAgICAgIGxldCBpc0FNID0gaG91ciA8IDEyO1xuICAgICAgICBsZXQgbWludXRlcyA9IHRoaXMubWludXRlcztcbiAgICAgICAgbGV0IHNlY29uZHMgPSB0aGlzLnNlY29uZHM7XG4gICAgICAgIC8vIERheS4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGQvZywgZGF0ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZC9nLCBkYXRlKTtcbiAgICAgICAgLy8gMjQtSG91ci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvSEgvZywgaG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvSC9nLCBob3VyKTtcbiAgICAgICAgLy8gMTItSG91ci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaGgvZywgXzEySG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaC9nLCBfMTJIb3VyKTtcbiAgICAgICAgLy8gTWludXRlcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvbW0vZywgbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvbS9nLCBtaW51dGVzKTtcbiAgICAgICAgLy8gU2Vjb25kcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvc3MvZywgc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvcy9nLCBzZWNvbmRzKTtcbiAgICAgICAgLy8gWWVhci4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5eXkvZywgeWVhci5wYWRTdGFydCg1LCAnMCcpKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eXkvZywgeWVhci5wYWRTdGFydCg0LCAnMCcpKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eS9nLCB5ZWFyLnBhZFN0YXJ0KDMsICcwJykpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXkvZywgc3ViWWVhcik7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95L2csIHN1YlllYXIpO1xuICAgICAgICAvLyBNb250aCBpbiB3b3Jkcy4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTU1NTS9nLCBcIiMjIyNcIik7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTU0vZywgXCIjIyNcIik7XG4gICAgICAgIC8vIE1vbnRoIGluIG51bWJlci4uLlxuICAgICAgICBsZXQgX21vbnRoID0gbW9udGggKyAxO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTU0vZywgX21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NL2csIF9tb250aCk7XG4gICAgICAgIC8vIEFNL1BNLi4uXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC90dC9nLCBpc0FNID8gXCJBTVwiIDogXCJQTVwiKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3QvZywgaXNBTSA/IFwiQVwiIDogXCJQXCIpO1xuICAgICAgICAvLyBEYXkgb2Ygd2Vlay4uLlxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGRkZC9nLCBGdWxsRGF5c09mV2Vla1tkYXldKTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2RkZC9nLCBBYmJyRGF5c09mV2Vla1tkYXldKTtcbiAgICAgICAgLy8gTW9udGggaW4gd29yZHMuLi5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyMjIyMvZywgRnVsbE1vbnRoW21vbnRoXSk7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8jIyMvZywgQWJick1vbnRoW21vbnRoXSk7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hbHBoYS1ibGVuZCc7XG5leHBvcnQgKiBmcm9tICcuL2N1cnJlbmN5JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS10aW1lJztcbmV4cG9ydCAqIGZyb20gJy4vbmF2aWdhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3Jlc3BvbnNlLXBheWxvYWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi1tYW5hZ2VyJztcbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25fdmlldycpO1xuICAgIG5hdmlnYXRpb25WaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZWQnLCAoZSkgPT4ge1xuICAgICAgICB2YXIgYXJncyA9IGUuZGV0YWlsLmFyZ3M7XG4gICAgICAgIGlmIChhcmdzLmlzU2V0dGluZ3NTZWxlY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcmdzLnNlbGVjdGVkSXRlbS5ocmVmO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5pbXBvcnQgeyBEYXRlVGltZSwgdG9DdXJyZW5jeSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBUcmFuc2FjdGlvblR5cGUgfSBmcm9tICdAL2VudW1zJztcbmltcG9ydCB7IENvbnRleHRNZW51T3B0aW9uLCBnbG9iYWxDb250ZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5DcmVhdGU7XG4gICAgfVxuICAgIGxvYWRBY2NvdW50KGFjY291bnQpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMubG9hZENhcmQoKTtcbiAgICAgICAgdGhpcy5sb2FkQmFsYW5jZXMoKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTWVudSgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yKCk7XG4gICAgICAgIHRoaXMuaXNSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJNZW51KCkge1xuICAgICAgICAvLyBNZW51XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBnbG9iYWxDb250ZXh0LmFkZE1lbnUoXCJ0cmFuc2FjdGlvbnNfcm93XCIsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtcIlVwZGF0ZVwiLCBcIlBvc3RcIiwgXCJEZWxldGVcIiwgXCJDYW5jZWxcIl07XG4gICAgICAgIGxldCBtZW51T3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChtbywgbykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IENvbnRleHRNZW51T3B0aW9uKG8pO1xuICAgICAgICAgICAgb3B0aW9uLnZpc2libGUoKHRyYW5zKSA9PiB0cmFucy5Qb3N0ZWQgPT0gKG8gPT0gXCJDYW5jZWxcIikpO1xuICAgICAgICAgICAgbW8ucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG1vO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzBdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy51cGRhdGVCdG5DbGlja2VkKHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzFdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5wb3N0KHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzJdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5kZWxldGUodHJhbnMpKTtcbiAgICAgICAgbWVudU9wdGlvbnNbM10ub25DbGljayh0cmFucyA9PiB0aGlzLmNhbmNlbCh0cmFucykpO1xuICAgICAgICB0aGlzLmNvbnRleHRNZW51LmFkZE9wdGlvbnMoLi4ubWVudU9wdGlvbnMpO1xuICAgIH1cbiAgICByZWdpc3RlckFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xuICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcGFyc2VJbnQoYWN0aW9uLmRhdGFzZXQuYWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGVJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9VHJhbnNhY3Rpb25UeXBlXVwiKTtcbiAgICAgICAgICAgICAgICB0eXBlSW5wdXQudmFsdWUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFtuYW1lPURhdGVdXCIpO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IERhdGVUaW1lLm5vdygpLnRvU3RyaW5nKFwieXl5eS1NTS1kZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiM5OTk5OTlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnR5cGUgIT0gXCJudW1iZXJcIiA/IFwiXCIgOiBcIjAuMDBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZ2lzdGVyRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0I2Ftb3VudFwiKTtcbiAgICAgICAgY29uc3QgYW1vdW50SW5wdXRIaWRkZW4gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFtuYW1lPUFtb3VudF1cIik7XG4gICAgICAgIGFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvblR5cGUgPT0gVHJhbnNhY3Rpb25UeXBlLldpdGhkcmF3KVxuICAgICAgICAgICAgICAgIGFtb3VudCAqPSAtMTtcbiAgICAgICAgICAgIGFtb3VudElucHV0SGlkZGVuLnZhbHVlID0gYW1vdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgY29uc3QgZGlzc21pc3NFZGl0b3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc21pc3NfZWRpdG9yX2RpYWxvZ19idG5cIik7XG4gICAgICAgIGRpc3NtaXNzRWRpdG9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiI2RhZGFkYVwiKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZV9idG4nKTtcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgbG9hZENhcmQoKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmFjY291bnQ7XG4gICAgICAgIHRoaXMuY2FyZC50aXRsZSA9IGFjY291bnQuVGl0bGU7XG4gICAgICAgIHRoaXMuY2FyZC5udW1iZXIgPSBhY2NvdW50LkFjY291bnROdW1iZXI7XG4gICAgICAgIHRoaXMuY2FyZC5jYXRlZ29yeSA9IGFjY291bnQuQ2F0ZWdvcnk7XG4gICAgfVxuICAgIGxvYWRCYWxhbmNlcygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgYWNjb3VudElkOiB0aGlzLmFjY291bnQuSWQgfTtcbiAgICAgICAgY29uc3QgYmFsYW5jZXMgPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvckFsbChcImNhcmQtYmFsYW5jZVwiKTtcbiAgICAgICAgYXhpb3MuZ2V0KFwiYWNjb3VudC9iYWxhbmNlLnBocFwiLCB7IHBhcmFtczogZGF0YSB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYE9vcHMhICR7Y29udGVudH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWxhbmNlc1swXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuQmFsYW5jZSk7XG4gICAgICAgICAgICBiYWxhbmNlc1sxXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuUHJvamVjdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2FjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IEFjY291bnRJZDogdGhpcy5hY2NvdW50LklkIH07XG4gICAgICAgIGF4aW9zLmdldChcInRyYW5zYWN0aW9uL3JlYWQucGhwXCIsIHsgcGFyYW1zOiBkYXRhIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjZW50ZXJlZFwiPk9vcHMhICR7Y29udGVudH08L3A+YDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9ucyA9IHRoaXMuZ3JvdXBUcmFuc2FjdGlvbnMoY29udGVudCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLm5ld0dyb3VwKGtleSwgdHJhbnNhY3Rpb25zW2tleV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ3JvdXBUcmFuc2FjdGlvbnModHJhbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgZ3JvdXBzID0ge307XG4gICAgICAgIGZvciAobGV0IHQgb2YgdHJhbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHQuRGF0ZSArIHQuUG9zdGVkO1xuICAgICAgICAgICAgKChfYSA9IGdyb3Vwc1trZXldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ3JvdXBzW2tleV0gPSBbXSkpLnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG4gICAgbmV3R3JvdXAoZGF0ZSwgdHJhbnMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1ncm91cC1oZWFkZXInKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1ncm91cC1ib2R5Jyk7XG4gICAgICAgIC8vIFRpdGxlL2hlYWRlci4uLlxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IERhdGVUaW1lLnBhcnNlKGRhdGUuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGRhdGVUaW1lLnRvU3RyaW5nKCdNTU0uIGRkLCB5eXl5Jyk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRyYW5zWzBdLlBvc3RlZCA/ICdhY3R1YWwnIDogJ3Byb2plY3Rpb24nO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICAgICAgICBncm91cC5hcHBlbmQoaGVhZGVyKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kKGJvZHkpO1xuICAgICAgICBmb3IgKGxldCB0IG9mIHRyYW5zKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5uZXdSb3codCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gICAgbmV3Um93KHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yP1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0cmFuc2FjdGlvbi5Qb3N0ZWQgPyAnYWN0dWFsJyA6ICdwcm9qZWN0aW9uJztcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1yb3cnLCBzdGF0dXMpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NQYXIuaW5uZXJUZXh0ID0gdHJhbnNhY3Rpb24uRGVzY3JpcHRpb247XG4gICAgICAgIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY1Bhcik7XG4gICAgICAgIHN1bW1hcnkuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tc3VtbWFyeScpO1xuICAgICAgICBtYWluLmFwcGVuZChkZXNjKTtcbiAgICAgICAgbWFpbi5hcHBlbmQoc3VtbWFyeSk7XG4gICAgICAgIHJvdy5hcHBlbmQobWFpbik7XG4gICAgICAgIGNvbnN0IGlzRGViaXQgPSB0cmFuc2FjdGlvbi5Ub3RhbCA+PSAwO1xuICAgICAgICBjb25zdCB0cmFuc0Ftb3VudCA9IE1hdGguYWJzKHRyYW5zYWN0aW9uLlRvdGFsKTtcbiAgICAgICAgY29uc3QgYW1vdW50UGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCByZWZQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFtb3VudFBhci5pbm5lclRleHQgPSBgJHshaXNEZWJpdCA/IFwiLVwiIDogXCJcIn0gUEhQICR7dG9DdXJyZW5jeSh0cmFuc0Ftb3VudC50b1N0cmluZygpKX1gO1xuICAgICAgICByZWZQYXIuaW5uZXJUZXh0ID0gJ1JFRjogTi9BJztcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQoYW1vdW50UGFyKTtcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQocmVmUGFyKTtcbiAgICAgICAgcm93LmFkZENvbnRleHQodGhpcy5jb250ZXh0TWVudSwgdHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucy1jb250YWluZXInKTtcbiAgICAgICAgcm93LmFwcGVuZChhY3Rpb25zKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJwcm9qZWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImVkaXRcIiwgXCJFZGl0XCIpO1xuICAgICAgICAgICAgY29uc3QgcG9zdEFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwicG9zdFwiLCBcIkNvbXBsZXRlZFNvbGlkXCIpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJkZWxldGVcIiwgXCJEZWxldGVcIik7XG4gICAgICAgICAgICBlZGl0QWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuQ2xpY2tlZCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvc3RBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0KHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQoZWRpdEFjdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZChwb3N0QWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGRlbGV0ZUFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImRlbGV0ZVwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGNhbmNlbEFjdGlvbik7XG4gICAgICAgICAgICBjYW5jZWxBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWwodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG91Y2ggZXZlbnRzLi4uXG4gICAgICAgIGxldCBpbml0aWFsVG91Y2g7XG4gICAgICAgIGxldCBpbml0aWFsTGVmdDtcbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlID0+IHtcbiAgICAgICAgICAgIGluaXRpYWxUb3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpbml0aWFsTGVmdCA9IHBhcnNlSW50KG1haW4uc3R5bGUubGVmdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IEFycmF5LmZyb20oZS5jaGFuZ2VkVG91Y2hlcylcbiAgICAgICAgICAgICAgICAuZmluZCh0Y2ggPT4gdGNoLmlkZW50aWZpZXIgPT09IGluaXRpYWxUb3VjaC5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmICh0b3VjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtYXRjaGVzIGZvdW5kIG9mIHRoZSBpbml0aWFsIHRvdWNoLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0b3VjaC5wYWdlWCAtIGluaXRpYWxUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IHlEZWx0YSA9IHRvdWNoLnBhZ2VZIC0gaW5pdGlhbFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgubWluKDAsIGluaXRpYWxMZWZ0ICsgeERlbHRhKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGVsdGEpID4gTWF0aC5hYnMoeURlbHRhKSlcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtYWluLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgfSk7XG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBBcnJheS5mcm9tKGUuY2hhbmdlZFRvdWNoZXMpXG4gICAgICAgICAgICAgICAgLmZpbmQodGNoID0+IHRjaC5pZGVudGlmaWVyID09PSBpbml0aWFsVG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAodG91Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWF0Y2hlcyBmb3VuZCBvZiB0aGUgaW5pdGlhbCB0b3VjaC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHBhcnNlSW50KG1haW4uc3R5bGUubGVmdCk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25XaWR0aCA9IGFjdGlvbnMuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBhY3Rpb25XaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBzbmFwUG9pbnQgPSBhY3Rpb25XaWR0aCAqICgoTWF0aC5hYnMobGVmdCkgPiB0aHJlc2hvbGQpID8gMSA6IDApO1xuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW4sXG4gICAgICAgICAgICAgICAgbGVmdDogLXNuYXBQb2ludCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gY29sbGFwc2VBY3Rpb25zKCkge1xuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW5bMF0sXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuICAgIG5ld0FjdGlvbihuYW1lLCBzeW1ib2wpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmbHVlbnQtc3ltYm9sLWljb24nKTtcbiAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicsIGBhY3Rpb24tJHtuYW1lfWApO1xuICAgICAgICBhY3Rpb24udGFiSW5kZXggPSAtMTtcbiAgICAgICAgLy8gSWNvblxuICAgICAgICBhY3Rpb24uYXBwZW5kKGljb24pO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3ltYm9sJywgc3ltYm9sKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsICcyMCcpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZm9yZWdyb3VuZCcsICcjZmZmJyk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuICAgIHVwZGF0ZUJ0bkNsaWNrZWQoZGF0YSkge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5VcGRhdGU7XG4gICAgICAgIGxldCBpbnB1dHMgPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybSBpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJBbW91bnRcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG5hbWUgIT0gXCJcIiAvLyBFbXB0eVxuICAgICAgICAgICAgICAgID8gZGF0YVtuYW1lXVxuICAgICAgICAgICAgICAgIDogTWF0aC5hYnMoZGF0YS5BbW91bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblR5cGUgPSBkYXRhLlRyYW5zYWN0aW9uVHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiM5OTk5OTlcIik7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gICAgc2F2ZSgpIHtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uID0gT3BlcmF0aW9uW3RoaXMub3BlcmF0aW9uXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGB0cmFuc2FjdGlvbi8ke29wZXJhdGlvbn0ucGhwYDtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGRhdGEuYXBwZW5kKFwiQWNjb3VudElkXCIsIHRoaXMuYWNjb3VudC5JZC50b1N0cmluZygpKTtcbiAgICAgICAgbGV0IHRyYW5zID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KGVuZHBvaW50LCB0cmFucylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBPcGVyYXRpb24uQ3JlYXRlO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiNkYWRhZGFcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlKHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL2RlbGV0ZS5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBwb3N0KHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL3Bvc3QucGhwXCIsIHRyYW5zKTtcbiAgICB9XG4gICAgY2FuY2VsKHRyYW5zKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL2NhbmNlbC5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBoYW5kbGVQb3N0KGVuZHBvaW50LCB0cmFucykge1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoZW5kcG9pbnQsIHRyYW5zKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlVGhlbWUodGhlbWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl1gKVxuICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xuICAgIH1cbn1cbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgQWNjb3VudENhcmQgPSBjbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXCJkYXRhLXRpdGxlXCIsIFwiZGF0YS1udW1iZXJcIiwgXCJkYXRhLWNhdGVnb3J5XCJdO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgIH1cbiAgICBnZXQgbnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcbiAgICB9XG4gICAgc2V0IG51bWJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIsIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IFwi4oCi4oCi4oCi4oCiXCIpO1xuICAgICAgICB0aGlzLnNldE51bWJlcigpO1xuICAgIH1cbiAgICBnZXQgY2F0ZWdvcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIik7XG4gICAgfVxuICAgIHNldCBjYXRlZ29yeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8qIERPTSAqL1xuICAgIGdldCB0aXRsZVNwYW4oKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fdGl0bGVTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fdGl0bGVTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVTcGFuO1xuICAgIH1cbiAgICBnZXQgbnVtYmVyU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9udW1iZXJTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fbnVtYmVyU3BhbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm51bWJlclwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJTcGFuO1xuICAgIH1cbiAgICBnZXQgY2F0ZWdvcnlTcGFuKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2NhdGVnb3J5U3BhbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2NhdGVnb3J5U3BhbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5U3BhbjtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWxhbmNlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJudW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAouKAouKAouKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCi4oCi4oCi4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKLigKLigKLigKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyXCI+4oCi4oCi4oCi4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhdGVnb3J5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiaWNvblwiPjwvc2xvdD5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgLyogRnVuY3Rpb25zICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXIoKTtcbiAgICAgICAgdGhpcy5zZXRDYXRlZ29yeSgpO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtbnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLWNhdGVnb3J5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRpdGxlKCkge1xuICAgICAgICB0aGlzLnRpdGxlU3Bhbi5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBzZXROdW1iZXIoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gKF9hID0gdGhpcy5udW1iZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zbGljZSgtNCk7XG4gICAgICAgIHRoaXMubnVtYmVyU3Bhbi5pbm5lckhUTUwgPSBudW1iZXI7XG4gICAgfVxuICAgIHNldENhdGVnb3J5KCkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5U3Bhbi5pbm5lckhUTUwgPSB0aGlzLmNhdGVnb3J5O1xuICAgIH1cbn07XG5BY2NvdW50Q2FyZC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzI1MkEzMiA1MCUsICMyZDM0M2UgNTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiKDAgMCAwIC8gMTYlKSwgMCAzcHggNnB4IHJnYigwIDAgMCAvIDIzJSk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM0RDkwRkU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3Q6YWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYm9keSA+IC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWxhbmNlcyB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1iZXJzLFxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZjYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm51bWJlcnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm51bWJlcnMgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2xvdHRlZChpbWdbc2xvdD1pY29uXSkge1xuICAgICAgICAgICAgYm90dG9tOiAyM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY1ByZWNpc2lvbjtcbiAgICAgICAgfVxuICAgIGA7XG5BY2NvdW50Q2FyZCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnYWNjb3VudC1jYXJkJylcbl0sIEFjY291bnRDYXJkKTtcbmV4cG9ydCB7IEFjY291bnRDYXJkIH07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xubGV0IEFjdGlvbkJ1dHRvbiA9IGNsYXNzIEFjdGlvbkJ1dHRvbiBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2RhdGEtaWNvbiddO1xuICAgIH1cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgfVxuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgIH1cbiAgICAvKiBET00gKi9cbiAgICBnZXQgc3ltYm9sSWNvbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9zeW1ib2xJY29uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fc3ltYm9sSWNvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3ltYm9sLWljb24nKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xJY29uO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zmx1ZW50LXN5bWJvbC1pY29uPjwvZmx1ZW50LXN5bWJvbC1pY29uPiBcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgLyogRnVuY3Rpb25zICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBpZiAobmFtZSAhPSAnZGF0YS1pY29uJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgfVxuICAgIHNldEljb24oKSB7XG4gICAgICAgIHRoaXMuc3ltYm9sSWNvbi5zeW1ib2wgPSB0aGlzLmljb247XG4gICAgfVxufTtcbkFjdGlvbkJ1dHRvbi5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1maWxsLXJlc3QpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KDpob3Zlcikge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDYsIDE5NiwgMC4yNSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDpob3N0KDphY3RpdmUpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTA2LCAxOTYsIDAuMyk7XG4gICAgICAgIH1cbiAgICBgO1xuQWN0aW9uQnV0dG9uID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdhY3Rpb24tYnV0dG9uJylcbl0sIEFjdGlvbkJ1dHRvbik7XG5leHBvcnQgeyBBY3Rpb25CdXR0b24gfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudCc7XG5sZXQgQ2FyZEJhbGFuY2UgPSBjbGFzcyBDYXJkQmFsYW5jZSBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXCJkYXRhLXRpdGxlXCIsIFwiZGF0YS1jdXJyZW5jeVwiXTtcbiAgICB9XG4gICAgLyogQXR0cmlidXRlcyAqL1xuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKTtcbiAgICB9XG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICB9XG4gICAgZ2V0IGN1cnJlbmN5KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY3VycmVuY3lcIikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwicGhwXCI7XG4gICAgfVxuICAgIHNldCBjdXJyZW5jeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVuY3lcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldEN1cnJlbmN5KCk7XG4gICAgfVxuICAgIC8qIERPTSAqL1xuICAgIGdldCB0aXRsZVNwYW4oKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fdGl0bGVTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fdGl0bGVTcGFuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVTcGFuO1xuICAgIH1cbiAgICBnZXQgZmlndXJlU3BhbigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9maWd1cmVTcGFuKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fZmlndXJlU3BhbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZVwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWd1cmVTcGFuO1xuICAgIH1cbiAgICBnZXQgc2xvdEVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fc2xvdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX3Nsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RcIikpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2xvdDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlByb2plY3Rpb248L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZ3VyZSBjdXJyZW5jeS1waHBcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIGA7XG4gICAgfVxuICAgIC8qIEZ1bmN0aW9ucyAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICAgICAgdGhpcy5zbG90RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMuc2xvdEVsZW1lbnQuYXNzaWduZWROb2RlcygpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IG5vZGVzWzBdLnRleHRDb250ZW50LnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IHBhcnNlRmxvYXQoY29udGVudCk7XG4gICAgICAgICAgICBpZiAoaXNOYU4oYmFsYW5jZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPj0gMTAwMDAwMClcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZVNwYW4uY2xhc3NMaXN0LmFkZChcInNtYWxsXCIpO1xuICAgICAgICAgICAgZWxzZSBpZiAoYmFsYW5jZSA+PSAxMDAwMDApXG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVTcGFuLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtY3VycmVuY3lcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbmN5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGl0bGUoKSB7XG4gICAgICAgIHRoaXMudGl0bGVTcGFuLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldEN1cnJlbmN5KCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGBmaWd1cmUgY3VycmVuY3ktJHt0aGlzLmN1cnJlbmN5fWApO1xuICAgIH1cbn07XG5DYXJkQmFsYW5jZS5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZjYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlndXJlLm1lZGl1bSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlndXJlLnNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWd1cmU6OmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWd1cmUubWVkaXVtOjphZnRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZ3VyZS5zbWFsbDo6YWZ0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycmVuY3ktcGhwOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlBIUFwiO1xuICAgICAgICB9XG4gICAgYDtcbkNhcmRCYWxhbmNlID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdjYXJkLWJhbGFuY2UnKVxuXSwgQ2FyZEJhbGFuY2UpO1xuZXhwb3J0IHsgQ2FyZEJhbGFuY2UgfTtcbiIsIi8vIFdyaXR0ZW4gYnkgR2FyeSBBbnRpZXIgMjAyMFxuLy8gQ3VycmVudCB2ZXJzaW9uOiAxLjIuMC4xXG5jb25zdCBDb250ZXh0TWFyZ2luID0gMztcbmNvbnN0IENvbnRleHRUb3BPZmZzZXQgPSA3O1xuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51T3B0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihsYWJlbCkge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuZW5hYmxlQ2hhbGxlbmdlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbGxlbmdlID0gKCkgPT4gdHJ1ZTtcbiAgICB9XG4gICAgb25DbGljayhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgdmlzaWJsZShjaGFsbGVuZ2UpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgIH1cbiAgICBlbmFibGUoY2hhbGxlbmdlKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlQ2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgIH1cbiAgICBkcmF3KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGVDaGFsbGVuZ2UoZGF0YSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcmUtY29udGV4dC1hY3Rpb24nKTtcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gIXRoaXMuZW5hYmxlQ2hhbGxlbmdlKGRhdGEpO1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgcm9vdCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9XG4gICAgYWRkT3B0aW9uKG9wdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgIH1cbiAgICBhZGRPcHRpb25zKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pKTtcbiAgICB9XG4gICAgZHJhdyhkYXRhSW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtkYXRhSW5kZXhdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uLmRyYXcoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGFkZERhdGEoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnB1c2goZGF0YSkgLSAxO1xuICAgIH1cbiAgICBjbGVhckRhdGEoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUdsb2JhbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLm1lbnVzID0ge307XG4gICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlcjtcbiAgICAgICAgdGhpcy50cmlnZ2VyVG9wO1xuICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvcmUtY29udGV4dCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgJ2FkZENvbnRleHQnLCB7IHZhbHVlOiBmdW5jdGlvbiAoY29udGV4dCwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gY29udGV4dC5hZGREYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5kYXRhc2V0LmNvbnRleHRJZCA9IGNvbnRleHQuaWQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRhdGFzZXQuaW5kZXggPSBkYXRhSW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHQuYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBhZGRNZW51KGlkLCByb290KSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoaWQsIHJvb3QpO1xuICAgICAgICB0aGlzLm1lbnVzW2lkXSA9IG1lbnU7XG4gICAgICAgIHJldHVybiBtZW51O1xuICAgIH1cbiAgICBvbkNvbnRleHQoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgaXNEb2N1bWVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgY29udGV4dElkO1xuICAgICAgICBsZXQgZGF0YUluZGV4O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRG9jdW1lbnQgPSB0YXJnZXQgPT09IGRvY3VtZW50O1xuICAgICAgICAgICAgY29udGV4dElkID0gIWlzRG9jdW1lbnQgPyB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250ZXh0LWlkXCIpIDogbnVsbDtcbiAgICAgICAgfSB3aGlsZSAoIWlzRG9jdW1lbnQgJiYgIWNvbnRleHRJZCk7XG4gICAgICAgIGRhdGFJbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICBpZiAoY29udGV4dElkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRyaWdnZXIgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJUb3AgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0ID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zaG93KGNvbnRleHRJZCwgZGF0YUluZGV4KTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5lbGVtZW50KSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3coY29udGV4dElkLCBkYXRhSW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudXNbY29udGV4dElkXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG1lbnUuZHJhdyhkYXRhSW5kZXgpO1xuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEJvdW5kcy4uLlxuICAgICAgICBjb25zdCByb290ID0gbWVudS5yb290O1xuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9ID0gcm9vdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHJvb3RUb3AgPSB0b3AgKyBDb250ZXh0TWFyZ2luO1xuICAgICAgICBsZXQgcm9vdFJpZ2h0ID0gcmlnaHQgLSBDb250ZXh0TWFyZ2luO1xuICAgICAgICBsZXQgcm9vdEJvdHRvbSA9IGJvdHRvbSAtIENvbnRleHRNYXJnaW47XG4gICAgICAgIGxldCByb290TGVmdCA9IGxlZnQgKyBDb250ZXh0TWFyZ2luO1xuICAgICAgICAvLyBDb250ZXh0cy4uLlxuICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGNvbnRleHRUb3AgPSB0aGlzLnRyaWdnZXJUb3AgLSBDb250ZXh0VG9wT2Zmc2V0O1xuICAgICAgICBsZXQgY29udGV4dExlZnQgPSB0aGlzLnRyaWdnZXJMZWZ0O1xuICAgICAgICBsZXQgY29udGV4dEJvdHRvbSA9IGNvbnRleHRUb3AgKyBoZWlnaHQ7XG4gICAgICAgIGxldCBjb250ZXh0UmlnaHQgPSBjb250ZXh0TGVmdCArIGhlaWdodDtcbiAgICAgICAgLy8gWC1saW1pdCBib3VuZHMuXG4gICAgICAgIGlmIChjb250ZXh0TGVmdCA8IHJvb3RMZWZ0KSB7XG4gICAgICAgICAgICBjb250ZXh0TGVmdCA9IHJvb3RMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHRSaWdodCA+IHJvb3RSaWdodCkge1xuICAgICAgICAgICAgY29udGV4dExlZnQgPSByb290UmlnaHQgLSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyBZLWxpbWl0IGJvdW5kcy5cbiAgICAgICAgaWYgKGNvbnRleHRUb3AgPCByb290VG9wKSB7XG4gICAgICAgICAgICBjb250ZXh0VG9wID0gcm9vdFRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0Qm90dG9tID4gcm9vdEJvdHRvbSkge1xuICAgICAgICAgICAgY29udGV4dFRvcCA9IHJvb3RCb3R0b20gLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7Y29udGV4dFRvcH1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7Y29udGV4dExlZnR9cHhgO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG51bGwpO1xuICAgICAgICAoX2EgPSB0aGlzLmFjdGl2ZVRyaWdnZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyaWdnZXJUb3AgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHJpZ2dlckxlZnQgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGdsb2JhbENvbnRleHQgPSBuZXcgQ29udGV4dE1lbnVHbG9iYWwoKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYWNjb3VudC1jYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uLWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2NhcmQtYmFsYW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQtbWVudSc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsJztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1pbmRpY2F0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zbmFwLXZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi1wYW5lbCc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jYXJkJztcbiIsInZhciBtb2RhbFNwYWNlO1xuZXhwb3J0IGNsYXNzIE1vZGFsU3BhY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXNwYWNlXCIpO1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgfVxuICAgIGFkZFN0YWNrKG1vZGFsKSB7XG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuc3RhY2s7XG4gICAgICAgIGxldCBleGlzdHMgPSBzdGFjay5pbmRleE9mKG1vZGFsKSA+IC0xO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc3RhY2subGVuZ3RoO1xuICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtb2RhbCk7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVN0YWNrKG1vZGFsKSB7XG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuc3RhY2s7XG4gICAgICAgIGxldCBleGlzdHMgPSBzdGFjay5pbmRleE9mKG1vZGFsKSA+IC0xO1xuICAgICAgICBsZXQgbGVuZ3RoID0gc3RhY2subGVuZ3RoO1xuICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbW9kYWxTcGFjZSA9IG1vZGFsU3BhY2UgIT09IG51bGwgJiYgbW9kYWxTcGFjZSAhPT0gdm9pZCAwID8gbW9kYWxTcGFjZSA6IG5ldyBNb2RhbFNwYWNlKCk7XG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgICAgICBsZXQgbW9kYWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgY2xvc2VBY3Rpb25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1hY3Rpb25bZGF0YS1yb2xlPWNsb3NlXVwiKTtcbiAgICAgICAgbGV0IHRlcm1pbmFibGUgPSAoX2EgPSByb290LmdldEF0dHJpYnV0ZShcImRhdGEtdGVybWluYWJsZVwiKSA9PT0gXCJ0cnVlXCIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXJtaW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICAgICAgY2xvc2VBY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgIGFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlkID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMuc3BhY2UgPSBtb2RhbFNwYWNlO1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHRoaXMuY2xvc2VBY3Rpb25zID0gY2xvc2VBY3Rpb25zO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMucm9vdDtcbiAgICAgICAgbGV0IHNwYWNlID0gdGhpcy5zcGFjZTtcbiAgICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgcm9vdC5zdHlsZS56SW5kZXggPSBzcGFjZS5zdGFjay5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgc3BhY2UuYWRkU3RhY2sodGhpcy5pZCk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5zcGFjZS5yZW1vdmVTdGFjayh0aGlzLmlkKTtcbiAgICB9XG59XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQsIHByb3BlcnR5LCBxdWVyeSwgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBQYWdlSW5kaWNhdG9yID0gY2xhc3MgUGFnZUluZGljYXRvciBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvcnMgPSBbXTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb250cm9sXCIgcGFydD1cImNvbnRyb2xcIj48L2Rpdj5gO1xuICAgIH1cbiAgICBzdGF0ZUhhc0NoYW5nZWQoY2hhbmdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NpemUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhY3RpdmVJbmRleCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlSW5kZXgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTaXplKG9sZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGhpcy5zaXplIC0gKG9sZFZhbHVlICE9PSBudWxsICYmIG9sZFZhbHVlICE9PSB2b2lkIDAgPyBvbGRWYWx1ZSA6IDApO1xuICAgICAgICBpZiAoZGVsdGEgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZGVsdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGluZGljYXRvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLl9pbmRpY2F0b3JzLnNwbGljZShkZWx0YSwgTWF0aC5hYnMoZGVsdGEpLCAuLi5hZGRlZCk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wuYXBwZW5kKC4uLmFkZGVkKTtcbiAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGluZGljYXRvciA9PiBpbmRpY2F0b3IucmVtb3ZlKCkpO1xuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVJbmRleChvbGRJbmRleCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSBvbGRJbmRleClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKF9hID0gdGhpcy5faW5kaWNhdG9yc1tvbGRJbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yc1t0aGlzLmFjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59O1xuUGFnZUluZGljYXRvci5zdHlsZXMgPSBgXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZGljYXRvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAgMCAwIC8gMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRpY2F0b3IuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgYDtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuY29udHJvbCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MRGl2RWxlbWVudClcbl0sIFBhZ2VJbmRpY2F0b3IucHJvdG90eXBlLCBcIl9jb250cm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG5dLCBQYWdlSW5kaWNhdG9yLnByb3RvdHlwZSwgXCJzaXplXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FjdGl2ZS1pbmRleCcgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbl0sIFBhZ2VJbmRpY2F0b3IucHJvdG90eXBlLCBcImFjdGl2ZUluZGV4XCIsIHZvaWQgMCk7XG5QYWdlSW5kaWNhdG9yID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCdwYWdlLWluZGljYXRvcicpXG5dLCBQYWdlSW5kaWNhdG9yKTtcbmV4cG9ydCB7IFBhZ2VJbmRpY2F0b3IgfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9wYWdlLWluZGljYXRvcic7XG5pbXBvcnQgeyBQYWdlSW5kaWNhdG9yIH0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2UtaW5kaWNhdG9yJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50LCBxdWVyeSB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQnO1xudmFyIFNuYXBEaXJlY3Rpb247XG4oZnVuY3Rpb24gKFNuYXBEaXJlY3Rpb24pIHtcbiAgICBTbmFwRGlyZWN0aW9uW1NuYXBEaXJlY3Rpb25bXCJMZWZ0XCJdID0gLTFdID0gXCJMZWZ0XCI7XG4gICAgU25hcERpcmVjdGlvbltTbmFwRGlyZWN0aW9uW1wiUmlnaHRcIl0gPSAxXSA9IFwiUmlnaHRcIjtcbn0pKFNuYXBEaXJlY3Rpb24gfHwgKFNuYXBEaXJlY3Rpb24gPSB7fSkpO1xubGV0IFNuYXBWaWV3ID0gY2xhc3MgU25hcFZpZXcgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3BhbmVsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9zbmFwRXZlbnQgPSBuZXcgRXZlbnQoJ3NuYXAnKTtcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbmFwQnV0dG9uIGxlZnRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMC4yOSAxMi43MWw4IDggMS40MS0xLjQxLTYuMjktNi4yOUgyNHYtMkgzLjQxbDYuMjktNi4yOS0xLjQxLTEuNDEtOCA4YTEgMSAwIDAgMCAwIDEuNDF6XCIgZGF0YS1uYW1lPVwiQXJyb3cgTGVmdFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNuYXBCdXR0b24gcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzEgMTEuMjlsLTgtOC0xLjQxIDEuNDEgNi4yOSA2LjI5SDB2MmgyMC41OWwtNi4yOSA2LjI5IDEuNDEgMS40MSA4LThhMSAxIDAgMCAwIDAtMS40MXpcIiBkYXRhLW5hbWU9XCJBcnJvdyBSaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwYWdlLWluZGljYXRvciBjbGFzcz1cImluZGljYXRvclwiIHBhcnQ9XCJpbmRpY2F0b3JcIj48L3BhZ2UtaW5kaWNhdG9yPlxuICAgICAgICBgO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzLl9kZWZhdWx0U2xvdC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLl9wYW5lbENvdW50ID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5zaXplID0gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbmFwKFNuYXBEaXJlY3Rpb24uUmlnaHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25hcChTbmFwRGlyZWN0aW9uLkxlZnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXNvbHZlSW5kZXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gaW5kZXgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRCdG4uZGlzYWJsZWQgPSBpbmRleCA8PSAwO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRCdG4uZGlzYWJsZWQgPSBpbmRleCA9PT0gdGhpcy5fcGFuZWxDb3VudDtcbiAgICAgICAgICAgIHRoaXMuX2luZGljYXRvci5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX3NuYXBFdmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXNvbHZlSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gdGhpcy5fY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNjcm9sbExlZnQgLyB3aWR0aCk7XG4gICAgfVxuICAgIHNuYXAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl9pbmRleCArIGRpcmVjdGlvbikgKiB3aWR0aCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuU25hcFZpZXcuc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMjRweCAvIDIpKTtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24gc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tZmlsbC1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24ubGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNuYXBCdXR0b24ucmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc25hcEJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbmFwQnV0dG9uOm5vdCg6YWN0aXZlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICA6aG9zdCg6aG92ZXIpIC5zbmFwQnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuY29udGFpbmVyJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxEaXZFbGVtZW50KVxuXSwgU25hcFZpZXcucHJvdG90eXBlLCBcIl9jb250YWluZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCdzbG90JyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxTbG90RWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfZGVmYXVsdFNsb3RcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcubGVmdCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MQnV0dG9uRWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfbGVmdEJ0blwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcXVlcnkoJy5yaWdodCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBIVE1MQnV0dG9uRWxlbWVudClcbl0sIFNuYXBWaWV3LnByb3RvdHlwZSwgXCJfcmlnaHRCdG5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcuaW5kaWNhdG9yJyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFBhZ2VJbmRpY2F0b3IpXG5dLCBTbmFwVmlldy5wcm90b3R5cGUsIFwiX2luZGljYXRvclwiLCB2b2lkIDApO1xuU25hcFZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldycpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFNuYXBWaWV3KTtcbmV4cG9ydCB7IFNuYXBWaWV3IH07XG5sZXQgU25hcFZpZXdQYW5lbCA9IGNsYXNzIFNuYXBWaWV3UGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8c2xvdD48L3Nsb3Q+YDtcbiAgICB9XG59O1xuU25hcFZpZXdQYW5lbC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgYDtcblNuYXBWaWV3UGFuZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21Db21wb25lbnQoJ3NuYXAtdmlldy1wYW5lbCcpXG5dLCBTbmFwVmlld1BhbmVsKTtcbmV4cG9ydCB7IFNuYXBWaWV3UGFuZWwgfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcy9saWIvYW5pbWUuZXMuanMnO1xuaW1wb3J0IHsgY3VzdG9tQ29tcG9uZW50LCBDdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmltcG9ydCB7IGNvbXB1dGVBbHBoYUJsZW5kIH0gZnJvbSAnQC9jbGFzc2VzJztcbmxldCBUcmFuc2FjdGlvblBhbmVsID0gY2xhc3MgVHJhbnNhY3Rpb25QYW5lbCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSB7IGFscGhhOiAwLjAgfTtcbiAgICB9XG4gICAgLyogRE9NICovXG4gICAgZ2V0IHBhbmVsKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3BhbmVsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fcGFuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5wYW5lbFwiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYW5lbDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbmRsZS1iYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGUpO1xuICAgICAgICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fY2xpY2tlZFRocm91Z2hQYW5lbCA9IHRydWUpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKHRydWUsIDAuMSk7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKGZhbHNlLCAwKTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbihzaG93LCBhbHBoYSkge1xuICAgICAgICBjb25zdCB0aW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dFF1aW50XCIsXG4gICAgICAgICAgICB1cGRhdGU6ICgpID0+IHRoaXMuY2hhbmdlVGhlbWUoKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUGFuZWxcbiAgICAgICAgY29uc3QgcGFuZWxBbmltID0geyB0YXJnZXRzOiB0aGlzLnBhbmVsIH07XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OClcbiAgICAgICAgICAgIHBhbmVsQW5pbS50b3AgPSBzaG93ID8gMjIgOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhbmVsQW5pbS5yaWdodCA9IHNob3cgPyAxNSA6IC01MzE7IC8vIFRPRE86IER5bmFtaWM/XG4gICAgICAgIHRpbWVsaW5lLmFkZChwYW5lbEFuaW0sIDApO1xuICAgICAgICAvLyBPdmVybGF5XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBgcmdiYSgwLCAwLCAwLCAke2FscGhhfSlgO1xuICAgICAgICB0aW1lbGluZS5hZGQoeyB0YXJnZXRzOiB0aGlzLCBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kIH0sIDApO1xuICAgICAgICAvLyBUaGVtZVxuICAgICAgICAvLyBGSVhNRTogRmxpY2tlciBvbiBzaG93IGZpcnN0IGF0dGVtcHQuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlBbmltID0geyB0YXJnZXRzOiB0aGlzLl9vdmVybGF5LCBhbHBoYTogYWxwaGEgfTtcbiAgICAgICAgdGltZWxpbmUuYWRkKG92ZXJsYXlBbmltLCAwKTtcbiAgICB9XG4gICAgY2hhbmdlVGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gY29tcHV0ZUFscGhhQmxlbmQoXCJmMmYyZjJcIiwgXCIwMDAwMDBcIiwgdGhpcy5fb3ZlcmxheS5hbHBoYSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRoZW1lLWNvbG9yXCJdJylcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIHRoZW1lKTtcbiAgICB9XG59O1xuVHJhbnNhY3Rpb25QYW5lbC5zdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIC0tcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAtLXJhZGl1cy1tb2I6IDE1cHg7XG4gICAgICAgICAgICAtLW1hcmdpbjogMTVweDtcbiAgICAgICAgICAgIC0tdG9wOiBjYWxjKDQ0cHggLyAyKTtcbiAgICAgICAgICAgIC0td2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52aXNpYmxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWRpdXMtbW9iKTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1yYWRpdXMtbW9iKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIGNhbGMoMzIgKiAwLjVweCkgY2FsYygoMzIgKiAxcHgpKSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b3ApKTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhbmRsZS1iYXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhbmRsZS1iYXI6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzbG90IHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGdhcDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qIFRhYmxldCAmIFVwICovXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLW1hcmdpbikgKiAyKTtcbiAgICAgICAgICAgICAgICByaWdodDogY2FsYyh2YXIoLS13aWR0aCkgKiAtMSk7XG4gICAgICAgICAgICAgICAgdG9wOiB2YXIoLS1tYXJnaW4pO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmhhbmRsZS1iYXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG5UcmFuc2FjdGlvblBhbmVsID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tQ29tcG9uZW50KCd0cmFuc2FjdGlvbi1wYW5lbCcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFRyYW5zYWN0aW9uUGFuZWwpO1xuZXhwb3J0IHsgVHJhbnNhY3Rpb25QYW5lbCB9O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgY3VzdG9tQ29tcG9uZW50LCBDdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmxldCBXYWxsZXRDYXJkID0gY2xhc3MgV2FsbGV0Q2FyZCBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9iXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxufTtcbldhbGxldENhcmQuc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoODBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyQTMyOTk7XG4gICAgICAgICAgICBpbnNldDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9iIHtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIH1cbiAgICBgO1xuV2FsbGV0Q2FyZCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUNvbXBvbmVudCgnd2FsbGV0LWNhcmQnKVxuXSwgV2FsbGV0Q2FyZCk7XG5leHBvcnQgeyBXYWxsZXRDYXJkIH07XG4iLCJleHBvcnQgdmFyIEVudGl0eVN0YXR1cztcbihmdW5jdGlvbiAoRW50aXR5U3RhdHVzKSB7XG4gICAgRW50aXR5U3RhdHVzW0VudGl0eVN0YXR1c1tcIkNsb3NlZFwiXSA9IDBdID0gXCJDbG9zZWRcIjtcbiAgICBFbnRpdHlTdGF0dXNbRW50aXR5U3RhdHVzW1wiQWN0aXZlXCJdID0gMV0gPSBcIkFjdGl2ZVwiO1xufSkoRW50aXR5U3RhdHVzIHx8IChFbnRpdHlTdGF0dXMgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9lbnRpdHktc3RhdHVzJztcbmV4cG9ydCAqIGZyb20gJy4vb3BlcmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNhY3Rpb24tdHlwZSc7XG4iLCJleHBvcnQgdmFyIE9wZXJhdGlvbjtcbihmdW5jdGlvbiAoT3BlcmF0aW9uKSB7XG4gICAgT3BlcmF0aW9uW09wZXJhdGlvbltcIkNyZWF0ZVwiXSA9IDBdID0gXCJDcmVhdGVcIjtcbiAgICBPcGVyYXRpb25bT3BlcmF0aW9uW1wiVXBkYXRlXCJdID0gMV0gPSBcIlVwZGF0ZVwiO1xufSkoT3BlcmF0aW9uIHx8IChPcGVyYXRpb24gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2FjdGlvblR5cGU7XG4oZnVuY3Rpb24gKFRyYW5zYWN0aW9uVHlwZSkge1xuICAgIFRyYW5zYWN0aW9uVHlwZVtUcmFuc2FjdGlvblR5cGVbXCJEZXBvc2l0XCJdID0gMF0gPSBcIkRlcG9zaXRcIjtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiV2l0aGRyYXdcIl0gPSAxXSA9IFwiV2l0aGRyYXdcIjtcbiAgICBUcmFuc2FjdGlvblR5cGVbVHJhbnNhY3Rpb25UeXBlW1wiVHJhbnNmZXJcIl0gPSAyXSA9IFwiVHJhbnNmZXJcIjtcbn0pKFRyYW5zYWN0aW9uVHlwZSB8fCAoVHJhbnNhY3Rpb25UeXBlID0ge30pKTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IHNlcnZpY2UsIFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zZXJ2aWNlLWJhc2UnO1xubGV0IEFjY291bnRTZXJ2aWNlID0gY2xhc3MgQWNjb3VudFNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XG4gICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3JlYWQucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5nZXQoZW5kcG9pbnQpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjcmVhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgndXBkYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICAvLyBUT0RPOiBVc2UgSlNPTlxuICAgIGFzeW5jIGNsb3NlKGlkKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY2xvc2UucGhwJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ0lkJywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIC8vIFRPRE86IFVzZSBKU09OXG4gICAgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnZGVsZXRlLnBocCcpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbn07XG5BY2NvdW50U2VydmljZSA9IF9fZGVjb3JhdGUoW1xuICAgIHNlcnZpY2UoJy9hY2NvdW50L2NydWQnKVxuXSwgQWNjb3VudFNlcnZpY2UpO1xuZXhwb3J0IHsgQWNjb3VudFNlcnZpY2UgfTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IHNlcnZpY2UsIFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zZXJ2aWNlLWJhc2UnO1xubGV0IENhdGVnb3J5U2VydmljZSA9IGNsYXNzIENhdGVnb3J5U2VydmljZSBleHRlbmRzIFNlcnZpY2VCYXNlIHtcbiAgICBhc3luYyBnZXQoKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgncmVhZC5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmdldChlbmRwb2ludCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2NyZWF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgYXN5bmMgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCd1cGRhdGUucGhwJyk7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogcGF5bG9hZCB9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgfVxuICAgIGFzeW5jIHJlbW92ZShpZCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ2RlbGV0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBkYXRhLmFwcGVuZCgnSWQnLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG59O1xuQ2F0ZWdvcnlTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgc2VydmljZSgnL2NhdGVnb3J5L2NydWQnKVxuXSwgQ2F0ZWdvcnlTZXJ2aWNlKTtcbmV4cG9ydCB7IENhdGVnb3J5U2VydmljZSB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXRlZ29yeS1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1zZXJ2aWNlJztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgY2xhc3MgU2VydmljZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jb25uZWN0aW9uID0gYXhpb3MuY3JlYXRlKCk7XG4gICAgfVxuICAgIGVuZHBvaW50KHBhdGgpIHtcbiAgICAgICAgY29uc3QgYmFzZVVSTCA9IHRoaXMuX2Jhc2VVUkw7XG4gICAgICAgIHJldHVybiBgJHtiYXNlVVJMfS8ke3BhdGh9YDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShiYXNlVVJMKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBzZXJ2aWNlLCBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vc2VydmljZS1iYXNlJztcbmxldCBVc2VyU2VydmljZSA9IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdyZWFkLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24uZ2V0KGVuZHBvaW50KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY3JlYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3VwZGF0ZS5waHAnKTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYXlsb2FkIH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICB9XG4gICAgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnZGVsZXRlLnBocCcpO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBheWxvYWQgfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH1cbn07XG5Vc2VyU2VydmljZSA9IF9fZGVjb3JhdGUoW1xuICAgIHNlcnZpY2UoJy91c2VyL2NydWQnKVxuXSwgVXNlclNlcnZpY2UpO1xuZXhwb3J0IHsgVXNlclNlcnZpY2UgfTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gXCIuLi9jb3JlL0F4aW9zRXJyb3IuanNcIjtcblxuY29uc3Qga25vd25BZGFwdGVycyA9IHtcbiAgaHR0cDogaHR0cEFkYXB0ZXIsXG4gIHhocjogeGhyQWRhcHRlclxufVxuXG51dGlscy5mb3JFYWNoKGtub3duQWRhcHRlcnMsIChmbiwgdmFsdWUpID0+IHtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ25hbWUnLCB7dmFsdWV9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7dmFsdWV9KTtcbiAgfVxufSk7XG5cbmNvbnN0IHJlbmRlclJlYXNvbiA9IChyZWFzb24pID0+IGAtICR7cmVhc29ufWA7XG5cbmNvbnN0IGlzUmVzb2x2ZWRIYW5kbGUgPSAoYWRhcHRlcikgPT4gdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCBhZGFwdGVyID09PSBudWxsIHx8IGFkYXB0ZXIgPT09IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFkYXB0ZXI6IChhZGFwdGVycykgPT4ge1xuICAgIGFkYXB0ZXJzID0gdXRpbHMuaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyA6IFthZGFwdGVyc107XG5cbiAgICBjb25zdCB7bGVuZ3RofSA9IGFkYXB0ZXJzO1xuICAgIGxldCBuYW1lT3JBZGFwdGVyO1xuICAgIGxldCBhZGFwdGVyO1xuXG4gICAgY29uc3QgcmVqZWN0ZWRSZWFzb25zID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBuYW1lT3JBZGFwdGVyID0gYWRhcHRlcnNbaV07XG4gICAgICBsZXQgaWQ7XG5cbiAgICAgIGFkYXB0ZXIgPSBuYW1lT3JBZGFwdGVyO1xuXG4gICAgICBpZiAoIWlzUmVzb2x2ZWRIYW5kbGUobmFtZU9yQWRhcHRlcikpIHtcbiAgICAgICAgYWRhcHRlciA9IGtub3duQWRhcHRlcnNbKGlkID0gU3RyaW5nKG5hbWVPckFkYXB0ZXIpKS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFVua25vd24gYWRhcHRlciAnJHtpZH0nYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdGVkUmVhc29uc1tpZCB8fCAnIycgKyBpXSA9IGFkYXB0ZXI7XG4gICAgfVxuXG4gICAgaWYgKCFhZGFwdGVyKSB7XG5cbiAgICAgIGNvbnN0IHJlYXNvbnMgPSBPYmplY3QuZW50cmllcyhyZWplY3RlZFJlYXNvbnMpXG4gICAgICAgIC5tYXAoKFtpZCwgc3RhdGVdKSA9PiBgYWRhcHRlciAke2lkfSBgICtcbiAgICAgICAgICAoc3RhdGUgPT09IGZhbHNlID8gJ2lzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGVudmlyb25tZW50JyA6ICdpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBidWlsZCcpXG4gICAgICAgICk7XG5cbiAgICAgIGxldCBzID0gbGVuZ3RoID9cbiAgICAgICAgKHJlYXNvbnMubGVuZ3RoID4gMSA/ICdzaW5jZSA6XFxuJyArIHJlYXNvbnMubWFwKHJlbmRlclJlYXNvbikuam9pbignXFxuJykgOiAnICcgKyByZW5kZXJSZWFzb24ocmVhc29uc1swXSkpIDpcbiAgICAgICAgJ2FzIG5vIGFkYXB0ZXIgc3BlY2lmaWVkJztcblxuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGBUaGVyZSBpcyBubyBzdWl0YWJsZSBhZGFwdGVyIHRvIGRpc3BhdGNoIHRoZSByZXF1ZXN0IGAgKyBzLFxuICAgICAgICAnRVJSX05PVF9TVVBQT1JUJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbiAgfSxcbiAgYWRhcHRlcnM6IGtub3duQWRhcHRlcnNcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCBjb29raWVzIGZyb20gJy4vLi4vaGVscGVycy9jb29raWVzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCBpc1VSTFNhbWVPcmlnaW4gZnJvbSAnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgcGFyc2VQcm90b2NvbCBmcm9tICcuLi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHNwZWVkb21ldGVyIGZyb20gJy4uL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMnO1xuXG5mdW5jdGlvbiBwcm9ncmVzc0V2ZW50UmVkdWNlcihsaXN0ZW5lciwgaXNEb3dubG9hZFN0cmVhbSkge1xuICBsZXQgYnl0ZXNOb3RpZmllZCA9IDA7XG4gIGNvbnN0IF9zcGVlZG9tZXRlciA9IHNwZWVkb21ldGVyKDUwLCAyNTApO1xuXG4gIHJldHVybiBlID0+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBlLmxvYWRlZDtcbiAgICBjb25zdCB0b3RhbCA9IGUubGVuZ3RoQ29tcHV0YWJsZSA/IGUudG90YWwgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJvZ3Jlc3NCeXRlcyA9IGxvYWRlZCAtIGJ5dGVzTm90aWZpZWQ7XG4gICAgY29uc3QgcmF0ZSA9IF9zcGVlZG9tZXRlcihwcm9ncmVzc0J5dGVzKTtcbiAgICBjb25zdCBpblJhbmdlID0gbG9hZGVkIDw9IHRvdGFsO1xuXG4gICAgYnl0ZXNOb3RpZmllZCA9IGxvYWRlZDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsb2FkZWQsXG4gICAgICB0b3RhbCxcbiAgICAgIHByb2dyZXNzOiB0b3RhbCA/IChsb2FkZWQgLyB0b3RhbCkgOiB1bmRlZmluZWQsXG4gICAgICBieXRlczogcHJvZ3Jlc3NCeXRlcyxcbiAgICAgIHJhdGU6IHJhdGUgPyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXN0aW1hdGVkOiByYXRlICYmIHRvdGFsICYmIGluUmFuZ2UgPyAodG90YWwgLSBsb2FkZWQpIC8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiBlXG4gICAgfTtcblxuICAgIGRhdGFbaXNEb3dubG9hZFN0cmVhbSA/ICdkb3dubG9hZCcgOiAndXBsb2FkJ10gPSB0cnVlO1xuXG4gICAgbGlzdGVuZXIoZGF0YSk7XG4gIH07XG59XG5cbmNvbnN0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCAmJiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgbGV0IHtyZXNwb25zZVR5cGUsIHdpdGhYU1JGVG9rZW59ID0gY29uZmlnO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb250ZW50VHlwZTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiB8fCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoZmFsc2UpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKChjb250ZW50VHlwZSA9IHJlcXVlc3RIZWFkZXJzLmdldENvbnRlbnRUeXBlKCkpICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBmaXggc2VtaWNvbG9uIGR1cGxpY2F0aW9uIGlzc3VlIGZvciBSZWFjdE5hdGl2ZSBGb3JtRGF0YSBpbXBsZW1lbnRhdGlvblxuICAgICAgICBjb25zdCBbdHlwZSwgLi4udG9rZW5zXSA9IGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoW3R5cGUgfHwgJ211bHRpcGFydC9mb3JtLWRhdGEnLCAuLi50b2tlbnNdLmpvaW4oJzsgJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCwgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnIDogJ3RpbWVvdXQgZXhjZWVkZWQnO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gQXhpb3NFcnJvci5FVElNRURPVVQgOiBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudikge1xuICAgICAgd2l0aFhTUkZUb2tlbiAmJiB1dGlscy5pc0Z1bmN0aW9uKHdpdGhYU1JGVG9rZW4pICYmICh3aXRoWFNSRlRva2VuID0gd2l0aFhTUkZUb2tlbihjb25maWcpKTtcblxuICAgICAgaWYgKHdpdGhYU1JGVG9rZW4gfHwgKHdpdGhYU1JGVG9rZW4gIT09IGZhbHNlICYmIGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpKSB7XG4gICAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgICBjb25zdCB4c3JmVmFsdWUgPSBjb25maWcueHNyZkhlYWRlck5hbWUgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpO1xuXG4gICAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXQoY29uZmlnLnhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycy50b0pTT04oKSwgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm90b2NvbCA9IHBhcnNlUHJvdG9jb2woZnVsbFBhdGgpO1xuXG4gICAgaWYgKHByb3RvY29sICYmIHBsYXRmb3JtLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sICsgJzonLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5jb25zdCBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbGVkRXJyb3IgPSBDYW5jZWxlZEVycm9yO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcbmF4aW9zLmlzQ2FuY2VsID0gaXNDYW5jZWw7XG5heGlvcy5WRVJTSU9OID0gVkVSU0lPTjtcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xuXG4vLyBFeHBvc2UgQXhpb3NFcnJvciBjbGFzc1xuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XG5cbi8vIGFsaWFzIGZvciBDYW5jZWxlZEVycm9yIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSBzcHJlYWQ7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IGlzQXhpb3NFcnJvcjtcblxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXG5heGlvcy5tZXJnZUNvbmZpZyA9IG1lcmdlQ29uZmlnO1xuXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5cbmF4aW9zLmZvcm1Ub0pTT04gPSB0aGluZyA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLmdldEFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9DYW5jZWxlZEVycm9yLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVQcm9taXNlO1xuXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSBvbmZ1bGZpbGxlZCA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0NhbmNlbGVkRXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgQXhpb3NFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xufVxuXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XG4gIF9fQ0FOQ0VMX186IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gICAgfVxuXG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAgIGNvbnN0IHt0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnN9ID0gY29uZmlnO1xuXG4gICAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcbiAgICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyYW1zU2VyaWFsaXplcikpIHtcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XG4gICAgICAgICAgc2VyaWFsaXplOiBwYXJhbXNTZXJpYWxpemVyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHBhcmFtc1NlcmlhbGl6ZXIsIHtcbiAgICAgICAgICBlbmNvZGU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgICAgc2VyaWFsaXplOiB2YWxpZGF0b3JzLmZ1bmN0aW9uXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXG4gICAgY29uZmlnLm1ldGhvZCA9IChjb25maWcubWV0aG9kIHx8IHRoaXMuZGVmYXVsdHMubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gICAgbGV0IGNvbnRleHRIZWFkZXJzID0gaGVhZGVycyAmJiB1dGlscy5tZXJnZShcbiAgICAgIGhlYWRlcnMuY29tbW9uLFxuICAgICAgaGVhZGVyc1tjb25maWcubWV0aG9kXVxuICAgICk7XG5cbiAgICBoZWFkZXJzICYmIHV0aWxzLmZvckVhY2goXG4gICAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbbWV0aG9kXTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuY29uY2F0KGNvbnRleHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgICBjb25zdCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIGxldCBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGxlbjtcblxuICAgIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QuYmluZCh0aGlzKSwgdW5kZWZpbmVkXTtcbiAgICAgIGNoYWluLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGNoYWluLnB1c2guYXBwbHkoY2hhaW4sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBsZW4gPSBjaGFpbi5sZW5ndGg7XG5cbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbltpKytdLCBjaGFpbltpKytdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgbGVuID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcblxuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIGNvbnN0IG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIGNvbnN0IG9uUmVqZWN0ZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uUmVqZWN0ZWQuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0LmNhbGwodGhpcywgbmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBpID0gMDtcbiAgICBsZW4gPSByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGdldFVyaShjb25maWcpIHtcbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH0gOiB7fSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzKTtcblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgcmVzcG9uc2UgJiYgKHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSk7XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHV0aWxzLnRvSlNPTk9iamVjdCh0aGlzLmNvbmZpZyksXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMucmVzcG9uc2UgJiYgdGhpcy5yZXNwb25zZS5zdGF0dXMgPyB0aGlzLnJlc3BvbnNlLnN0YXR1cyA6IG51bGxcbiAgICB9O1xuICB9XG59KTtcblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NFcnJvci5wcm90b3R5cGU7XG5jb25zdCBkZXNjcmlwdG9ycyA9IHt9O1xuXG5bXG4gICdFUlJfQkFEX09QVElPTl9WQUxVRScsXG4gICdFUlJfQkFEX09QVElPTicsXG4gICdFQ09OTkFCT1JURUQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VSUl9ORVRXT1JLJyxcbiAgJ0VSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMnLFxuICAnRVJSX0RFUFJFQ0FURUQnLFxuICAnRVJSX0JBRF9SRVNQT05TRScsXG4gICdFUlJfQkFEX1JFUVVFU1QnLFxuICAnRVJSX0NBTkNFTEVEJyxcbiAgJ0VSUl9OT1RfU1VQUE9SVCcsXG4gICdFUlJfSU5WQUxJRF9VUkwnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXS5mb3JFYWNoKGNvZGUgPT4ge1xuICBkZXNjcmlwdG9yc1tjb2RlXSA9IHt2YWx1ZTogY29kZX07XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXhpb3NFcnJvciwgZGVzY3JpcHRvcnMpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgJ2lzQXhpb3NFcnJvcicsIHt2YWx1ZTogdHJ1ZX0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuQXhpb3NFcnJvci5mcm9tID0gKGVycm9yLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlLCBjdXN0b21Qcm9wcykgPT4ge1xuICBjb25zdCBheGlvc0Vycm9yID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuXG4gIHV0aWxzLnRvRmxhdE9iamVjdChlcnJvciwgYXhpb3NFcnJvciwgZnVuY3Rpb24gZmlsdGVyKG9iaikge1xuICAgIHJldHVybiBvYmogIT09IEVycm9yLnByb3RvdHlwZTtcbiAgfSwgcHJvcCA9PiB7XG4gICAgcmV0dXJuIHByb3AgIT09ICdpc0F4aW9zRXJyb3InO1xuICB9KTtcblxuICBBeGlvc0Vycm9yLmNhbGwoYXhpb3NFcnJvciwgZXJyb3IubWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSk7XG5cbiAgYXhpb3NFcnJvci5jYXVzZSA9IGVycm9yO1xuXG4gIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XG5cbiAgY3VzdG9tUHJvcHMgJiYgT2JqZWN0LmFzc2lnbihheGlvc0Vycm9yLCBjdXN0b21Qcm9wcyk7XG5cbiAgcmV0dXJuIGF4aW9zRXJyb3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0Vycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBhcnNlSGVhZGVycyBmcm9tICcuLi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyc7XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIgJiYgU3RyaW5nKGhlYWRlcikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkpIHtcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBpc1ZhbGlkSGVhZGVyTmFtZSA9IChzdHIpID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG5cbmZ1bmN0aW9uIG1hdGNoSGVhZGVyVmFsdWUoY29udGV4dCwgdmFsdWUsIGhlYWRlciwgZmlsdGVyLCBpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgICB2YWx1ZSA9IGhlYWRlcjtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSByZXR1cm47XG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc1JlZ0V4cChmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFjY2Vzc29ycyhvYmosIGhlYWRlcikge1xuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xuXG4gIFsnZ2V0JywgJ3NldCcsICdoYXMnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZigha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IChfcmV3cml0ZSA9PT0gdW5kZWZpbmVkICYmIHNlbGZba2V5XSAhPT0gZmFsc2UpKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShrZXkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKG1hdGNoZXIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIsIHRydWUpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuY2xhc3MgSW50ZXJjZXB0b3JNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gICAqL1xuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICBmdWxmaWxsZWQsXG4gICAgICByZWplY3RlZCxcbiAgICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gICAqXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGludGVyY2VwdG9yIHdhcyByZW1vdmVkLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgZWplY3QoaWQpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGludGVyY2VwdG9ycyBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gICAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZvckVhY2goZm4pIHtcbiAgICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICAgIGZuKGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGlzQWJzb2x1dGVVUkwgZnJvbSAnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMLmpzJztcbmltcG9ydCBjb21iaW5lVVJMcyBmcm9tICcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdHJhbnNmb3JtRGF0YSBmcm9tICcuL3RyYW5zZm9ybURhdGEuanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSBcIi4uL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzXCI7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycyk7XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICBpZiAoWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmluZGV4T2YoY29uZmlnLm1ldGhvZCkgIT09IC0xKSB7XG4gICAgY29uZmlnLmhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIpO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL0F4aW9zSGVhZGVycy5qc1wiO1xuXG5jb25zdCBoZWFkZXJzVG9PYmplY3QgPSAodGhpbmcpID0+IHRoaW5nIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzID8gdGhpbmcudG9KU09OKCkgOiB0aGluZztcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UsIGNhc2VsZXNzKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZS5jYWxsKHtjYXNlbGVzc30sIHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhhLCBiLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBjYXNlbGVzcyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEsIGNhc2VsZXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lcmdlTWFwID0ge1xuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBtZXRob2Q6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgZGF0YTogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXRNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoWFNSRlRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlRW5jb2Rpbmc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdmFsaWRhdGVTdGF0dXM6IG1lcmdlRGlyZWN0S2V5cyxcbiAgICBoZWFkZXJzOiAoYSwgYikgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSwgdHJ1ZSlcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZzEsIGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IFsneGhyJywgJ2h0dHAnXSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkgfHwgJyc7XG4gICAgY29uc3QgaGFzSlNPTkNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTE7XG4gICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkICYmIHV0aWxzLmlzSFRNTEZvcm0oZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XG5cbiAgICBpZiAoaXNGb3JtRGF0YSkge1xuICAgICAgaWYgKCFoYXNKU09OQ29udGVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzSlNPTkNvbnRlbnRUeXBlID8gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFUb0pTT04oZGF0YSkpIDogZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgaXNGaWxlTGlzdDtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIHRoaXMuZm9ybVNlcmlhbGl6ZXIpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoaXNGaWxlTGlzdCA9IHV0aWxzLmlzRmlsZUxpc3QoZGF0YSkpIHx8IGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IF9Gb3JtRGF0YSA9IHRoaXMuZW52ICYmIHRoaXMuZW52LkZvcm1EYXRhO1xuXG4gICAgICAgIHJldHVybiB0b0Zvcm1EYXRhKFxuICAgICAgICAgIGlzRmlsZUxpc3QgPyB7J2ZpbGVzW10nOiBkYXRhfSA6IGRhdGEsXG4gICAgICAgICAgX0Zvcm1EYXRhICYmIG5ldyBfRm9ybURhdGEoKSxcbiAgICAgICAgICB0aGlzLmZvcm1TZXJpYWxpemVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCB8fCBoYXNKU09OQ29udGVudFR5cGUgKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi9qc29uJywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIGNvbnN0IGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICBjb25zdCBKU09OUmVxdWVzdGVkID0gdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChkYXRhICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmICgoZm9yY2VkSlNPTlBhcnNpbmcgJiYgIXRoaXMucmVzcG9uc2VUeXBlKSB8fCBKU09OUmVxdWVzdGVkKSkge1xuICAgICAgY29uc3Qgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgICAgY29uc3Qgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgSlNPTlJlcXVlc3RlZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIHRoaXMsIG51bGwsIHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICBlbnY6IHtcbiAgICBGb3JtRGF0YTogcGxhdGZvcm0uY2xhc3Nlcy5Gb3JtRGF0YSxcbiAgICBCbG9iOiBwbGF0Zm9ybS5jbGFzc2VzLkJsb2JcbiAgfSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgKG1ldGhvZCkgPT4ge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjEuNi4yXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICBjb25zdCBjaGFyTWFwID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gICAgJyUwMCc6ICdcXHgwMCdcbiAgfTtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpfl18JTIwfCUwMC9nLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgIHJldHVybiBjaGFyTWFwW21hdGNoXTtcbiAgfSk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXJhbXMgb2JqZWN0IGFuZCBjb252ZXJ0cyBpdCB0byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byB0aGUgQXhpb3MgY29uc3RydWN0b3IuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykge1xuICB0aGlzLl9wYWlycyA9IFtdO1xuXG4gIHBhcmFtcyAmJiB0b0Zvcm1EYXRhKHBhcmFtcywgdGhpcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9wYWlycy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xufTtcblxucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2Rlcikge1xuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlciA/IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZXIuY2FsbCh0aGlzLCB2YWx1ZSwgZW5jb2RlKTtcbiAgfSA6IGVuY29kZTtcblxuICByZXR1cm4gdGhpcy5fcGFpcnMubWFwKGZ1bmN0aW9uIGVhY2gocGFpcikge1xuICAgIHJldHVybiBfZW5jb2RlKHBhaXJbMF0pICsgJz0nICsgX2VuY29kZShwYWlyWzFdKTtcbiAgfSwgJycpLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNoYXJhY3RlcnMgYDpgLCBgJGAsIGAsYCwgYCtgLCBgW2AsIGFuZCBgXWAgd2l0aCB0aGVpclxuICogVVJJIGVuY29kZWQgY291bnRlcnBhcnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7P29iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel1cbiAgLy8gZm9vLngueS56XG4gIC8vIGZvby14LXktelxuICAvLyBmb28geCB5IHpcbiAgcmV0dXJuIHV0aWxzLm1hdGNoQWxsKC9cXHcrfFxcWyhcXHcqKV0vZywgbmFtZSkubWFwKG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2hbMF0gPT09ICdbXScgPyAnJyA6IG1hdGNoWzFdIHx8IG1hdGNoWzBdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFuZCB2YWx1ZXMgYXMgdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XG4gIGxldCBpO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGtleTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGNvbnZlcnQgdG8gSlNPTi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55PiB8IG51bGx9IFRoZSBjb252ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xuICBmdW5jdGlvbiBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcbiAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA+PSBwYXRoLmxlbmd0aDtcbiAgICBuYW1lID0gIW5hbWUgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0Lmxlbmd0aCA6IG5hbWU7XG5cbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtuYW1lXSB8fCAhdXRpbHMuaXNPYmplY3QodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGFUb0pTT047XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMuaXNPYmplY3QocGF5bG9hZCkgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICBjb25zdCBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdHMgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgbGV0IGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCk7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5leHBvcnQgZGVmYXVsdCBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmF3SGVhZGVycyA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmIHJhd0hlYWRlcnMuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gbGluZS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKTtcblxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgaWYgKHBhcnNlZFtrZXldKSB7XG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxuaW1wb3J0IFBsYXRmb3JtRm9ybURhdGEgZnJvbSAnLi4vcGxhdGZvcm0vbm9kZS9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB0aGluZyBpcyBhIGFycmF5IG9yIGpzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhpbmcgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGJlIHZpc2l0ZWQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmlzaXRhYmxlKHRoaW5nKSB7XG4gIHJldHVybiB1dGlscy5pc1BsYWluT2JqZWN0KHRoaW5nKSB8fCB1dGlscy5pc0FycmF5KHRoaW5nKTtcbn1cblxuLyoqXG4gKiBJdCByZW1vdmVzIHRoZSBicmFja2V0cyBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcGFyYW1ldGVyLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBrZXkgd2l0aG91dCB0aGUgYnJhY2tldHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJyYWNrZXRzKGtleSkge1xuICByZXR1cm4gdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSA/IGtleS5zbGljZSgwLCAtMikgOiBrZXk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXRoLCBhIGtleSwgYW5kIGEgYm9vbGVhbiwgYW5kIHJldHVybnMgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBjdXJyZW50IG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRvdHMgLSBJZiB0cnVlLCB0aGUga2V5IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCBkb3RzIGluc3RlYWQgb2YgYnJhY2tldHMuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICovXG5mdW5jdGlvbiByZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSB7XG4gIGlmICghcGF0aCkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIHBhdGguY29uY2F0KGtleSkubWFwKGZ1bmN0aW9uIGVhY2godG9rZW4sIGkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB0b2tlbiA9IHJlbW92ZUJyYWNrZXRzKHRva2VuKTtcbiAgICByZXR1cm4gIWRvdHMgJiYgaSA/ICdbJyArIHRva2VuICsgJ10nIDogdG9rZW47XG4gIH0pLmpvaW4oZG90cyA/ICcuJyA6ICcnKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgYXJyYXkgaXMgYW4gYXJyYXkgYW5kIG5vbmUgb2YgaXRzIGVsZW1lbnRzIGFyZSB2aXNpdGFibGUsIHRoZW4gaXQncyBhIGZsYXQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGbGF0QXJyYXkoYXJyKSB7XG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cblxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XG4gIHJldHVybiAvXmlzW0EtWl0vLnRlc3QocHJvcCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0gez9PYmplY3R9IFtmb3JtRGF0YV1cbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpdG9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tZXRhVG9rZW5zID0gdHJ1ZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gW29wdGlvbnMuaW5kZXhlcyA9IGZhbHNlXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiovXG5cbi8qKlxuICogSXQgY29udmVydHMgYW4gb2JqZWN0IGludG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgLSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGFwcGVuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChvcHRpb25zLCB7XG4gICAgbWV0YVRva2VuczogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBmYWxzZVxuICB9LCBmYWxzZSwgZnVuY3Rpb24gZGVmaW5lZChvcHRpb24sIHNvdXJjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICAgIHJldHVybiAhdXRpbHMuaXNVbmRlZmluZWQoc291cmNlW29wdGlvbl0pO1xuICB9KTtcblxuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9ucy5tZXRhVG9rZW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgY29uc3QgdmlzaXRvciA9IG9wdGlvbnMudmlzaXRvciB8fCBkZWZhdWx0VmlzaXRvcjtcbiAgY29uc3QgZG90cyA9IG9wdGlvbnMuZG90cztcbiAgY29uc3QgaW5kZXhlcyA9IG9wdGlvbnMuaW5kZXhlcztcbiAgY29uc3QgX0Jsb2IgPSBvcHRpb25zLkJsb2IgfHwgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2I7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcblxuICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24odmlzaXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VCbG9iICYmIHV0aWxzLmlzQmxvYih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdXNlQmxvYiAmJiB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBCbG9iKFt2YWx1ZV0pIDogQnVmZmVyLmZyb20odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZpc2l0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBrZXlcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm4gdHJ1ZSB0byB2aXNpdCB0aGUgZWFjaCBwcm9wIG9mIHRoZSB2YWx1ZSByZWN1cnNpdmVseVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdFZpc2l0b3IodmFsdWUsIGtleSwgcGF0aCkge1xuICAgIGxldCBhcnIgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMuZW5kc1dpdGgoa2V5LCAne30nKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gbWV0YVRva2VucyA/IGtleSA6IGtleS5zbGljZSgwLCAtMik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICh1dGlscy5pc0FycmF5KHZhbHVlKSAmJiBpc0ZsYXRBcnJheSh2YWx1ZSkpIHx8XG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKVxuICAgICAgICApKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goZWwsIGluZGV4KSB7XG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZSA/IHJlbmRlcktleShba2V5XSwgaW5kZXgsIGRvdHMpIDogKGluZGV4ZXMgPT09IG51bGwgPyBrZXkgOiBrZXkgKyAnW10nKSxcbiAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1Zpc2l0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzdGFjayA9IFtdO1xuXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XG4gICAgZGVmYXVsdFZpc2l0b3IsXG4gICAgY29udmVydFZhbHVlLFxuICAgIGlzVmlzaXRhYmxlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoKSB7XG4gICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGF0aC5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsdWUpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgdmlzaXRvci5jYWxsKFxuICAgICAgICBmb3JtRGF0YSwgZWwsIHV0aWxzLmlzU3RyaW5nKGtleSkgPyBrZXkudHJpbSgpIDoga2V5LCBwYXRoLCBleHBvc2VkSGVscGVyc1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGJ1aWxkKG9iaik7XG5cbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zvcm1EYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaXRvcjogZnVuY3Rpb24odmFsdWUsIGtleSwgcGF0aCwgaGVscGVycykge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzTm9kZSAmJiB1dGlscy5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygnYmFzZTY0JykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwZXJzLmRlZmF1bHRWaXNpdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi4vZW52L2RhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goKHR5cGUsIGkpID0+IHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbmNvbnN0IGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0JywgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGNvbnN0IG9wdCA9IGtleXNbaV07XG4gICAgY29uc3QgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW29wdF07XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbiAnICsgb3B0ICsgJyBtdXN0IGJlICcgKyByZXN1bHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhbGxvd1Vua25vd24gIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyA/IEJsb2IgOiBudWxsXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJpbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4vY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMnXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9jbGFzc2VzL0Zvcm1EYXRhLmpzJ1xuaW1wb3J0IEJsb2IgZnJvbSAnLi9jbGFzc2VzL0Jsb2IuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNCcm93c2VyOiB0cnVlLFxuICBjbGFzc2VzOiB7XG4gICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgIEZvcm1EYXRhLFxuICAgIEJsb2JcbiAgfSxcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ11cbn07XG4iLCJjb25zdCBoYXNCcm93c2VyRW52ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlckVudiA9IChcbiAgKHByb2R1Y3QpID0+IHtcbiAgICByZXR1cm4gaGFzQnJvd3NlckVudiAmJiBbJ1JlYWN0TmF0aXZlJywgJ05hdGl2ZVNjcmlwdCcsICdOUyddLmluZGV4T2YocHJvZHVjdCkgPCAwXG4gIH0pKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0KTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgd2ViV29ya2VyIGVudmlyb25tZW50XG4gKlxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XG4gKiBgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXJgLCB0aGUgV2ViV29ya2VyIHdpbGwgc3RpbGwgYmVcbiAqIGZpbHRlcmVkIG91dCBkdWUgdG8gaXRzIGp1ZGdtZW50IHN0YW5kYXJkXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXG4gKiBUaGlzIGxlYWRzIHRvIGEgcHJvYmxlbSB3aGVuIGF4aW9zIHBvc3QgYEZvcm1EYXRhYCBpbiB3ZWJXb3JrZXJcbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gICAgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufSkoKTtcblxuZXhwb3J0IHtcbiAgaGFzQnJvd3NlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJFbnZcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuL25vZGUvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnV0aWxzLFxuICAuLi5wbGF0Zm9ybVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbmNvbnN0IHt0b1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3Qge2dldFByb3RvdHlwZU9mfSA9IE9iamVjdDtcblxuY29uc3Qga2luZE9mID0gKGNhY2hlID0+IHRoaW5nID0+IHtcbiAgICBjb25zdCBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaW5nKTtcbiAgICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuY29uc3Qga2luZE9mVGVzdCA9ICh0eXBlKSA9PiB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAodGhpbmcpID0+IGtpbmRPZih0aGluZykgPT09IHR5cGVcbn1cblxuY29uc3QgdHlwZU9mVGVzdCA9IHR5cGUgPT4gdGhpbmcgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3Qge2lzQXJyYXl9ID0gQXJyYXk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVbmRlZmluZWQgPSB0eXBlT2ZUZXN0KCd1bmRlZmluZWQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICBsZXQgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmIChpc0FycmF5QnVmZmVyKHZhbC5idWZmZXIpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gdGhpbmcgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB7XG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbCkgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gdmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZSA9IGtpbmRPZlRlc3QoJ0ZpbGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGVMaXN0ID0ga2luZE9mVGVzdCgnRmlsZUxpc3QnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmVhbSA9ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRm9ybURhdGEgPSAodGhpbmcpID0+IHtcbiAgbGV0IGtpbmQ7XG4gIHJldHVybiB0aGluZyAmJiAoXG4gICAgKHR5cGVvZiBGb3JtRGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGluZyBpbnN0YW5jZW9mIEZvcm1EYXRhKSB8fCAoXG4gICAgICBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgKFxuICAgICAgICAoa2luZCA9IGtpbmRPZih0aGluZykpID09PSAnZm9ybWRhdGEnIHx8XG4gICAgICAgIC8vIGRldGVjdCBmb3JtLWRhdGEgaW5zdGFuY2VcbiAgICAgICAgKGtpbmQgPT09ICdvYmplY3QnICYmIGlzRnVuY3Rpb24odGhpbmcudG9TdHJpbmcpICYmIHRoaW5nLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZvcm1EYXRhXScpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VSTFNlYXJjaFBhcmFtcyA9IGtpbmRPZlRlc3QoJ1VSTFNlYXJjaFBhcmFtcycpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4gc3RyLnRyaW0gP1xuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHthbGxPd25LZXlzID0gZmFsc2V9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG59KSgpO1xuXG5jb25zdCBpc0NvbnRleHREZWZpbmVkID0gKGNvbnRleHQpID0+ICFpc1VuZGVmaW5lZChjb250ZXh0KSAmJiBjb250ZXh0ICE9PSBfZ2xvYmFsO1xuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIGNvbnN0IHtjYXNlbGVzc30gPSBpc0NvbnRleHREZWZpbmVkKHRoaXMpICYmIHRoaXMgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRbdGFyZ2V0S2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcmd1bWVudHNbaV0gJiYgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHthbGxPd25LZXlzfT0ge30pID0+IHtcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcbiAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge2FsbE93bktleXN9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbZGVzY3JpcHRvcnNdXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpO1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbj0gMF1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PiB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA+IHN0ci5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW1N5bWJvbC5pdGVyYXRvcl07XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IHBhaXIgPSByZXN1bHQudmFsdWU7XG4gICAgZm4uY2FsbChvYmosIHBhaXJbMF0sIHBhaXJbMV0pO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgc3RyaW5nLCBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxib29sZWFuPn1cbiAqL1xuY29uc3QgbWF0Y2hBbGwgPSAocmVnRXhwLCBzdHIpID0+IHtcbiAgbGV0IG1hdGNoZXM7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgYXJyLnB1c2gobWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG4vKiBDaGVja2luZyBpZiB0aGUga2luZE9mVGVzdCBmdW5jdGlvbiByZXR1cm5zIHRydWUgd2hlbiBwYXNzZWQgYW4gSFRNTEZvcm1FbGVtZW50LiAqL1xuY29uc3QgaXNIVE1MRm9ybSA9IGtpbmRPZlRlc3QoJ0hUTUxGb3JtRWxlbWVudCcpO1xuXG5jb25zdCB0b0NhbWVsQ2FzZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9cXHNdKFthLXpcXGRdKShcXHcqKS9nLFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xuICAgICAgcmV0dXJuIHAxLnRvVXBwZXJDYXNlKCkgKyBwMjtcbiAgICB9XG4gICk7XG59O1xuXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9ICgoe2hhc093blByb3BlcnR5fSkgPT4gKG9iaiwgcHJvcCkgPT4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKShPYmplY3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5cbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gIGNvbnN0IHJlZHVjZWREZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZvckVhY2goZGVzY3JpcHRvcnMsIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSByZXQgfHwgZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuY29uc3QgQUxQSEEgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG5cbmNvbnN0IERJR0lUID0gJzAxMjM0NTY3ODknO1xuXG5jb25zdCBBTFBIQUJFVCA9IHtcbiAgRElHSVQsXG4gIEFMUEhBLFxuICBBTFBIQV9ESUdJVDogQUxQSEEgKyBBTFBIQS50b1VwcGVyQ2FzZSgpICsgRElHSVRcbn1cblxuY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoc2l6ZSA9IDE2LCBhbHBoYWJldCA9IEFMUEhBQkVULkFMUEhBX0RJR0lUKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgY29uc3Qge2xlbmd0aH0gPSBhbHBoYWJldDtcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIHN0ciArPSBhbHBoYWJldFtNYXRoLnJhbmRvbSgpICogbGVuZ3RofDBdXG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIHRoaW5nW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiYgdGhpbmdbU3ltYm9sLml0ZXJhdG9yXSk7XG59XG5cbmNvbnN0IHRvSlNPTk9iamVjdCA9IChvYmopID0+IHtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgQXJyYXkoMTApO1xuXG4gIGNvbnN0IHZpc2l0ID0gKHNvdXJjZSwgaSkgPT4ge1xuXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIGlmIChzdGFjay5pbmRleE9mKHNvdXJjZSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xuICAgICAgICBzdGFja1tpXSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiB7fTtcblxuICAgICAgICBmb3JFYWNoKHNvdXJjZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSwgaSArIDEpO1xuICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmICh0YXJnZXRba2V5XSA9IHJlZHVjZWRWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YWNrW2ldID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiB2aXNpdChvYmosIDApO1xufVxuXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XG5cbmNvbnN0IGlzVGhlbmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICYmIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiYgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAc3R5bGVzL2Rhc2hib2FyZC5zY3NzJztcbmltcG9ydCAnQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQnO1xuaW1wb3J0ICdAc2FnZW1vZGVuaW5qYS9mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50JztcbmltcG9ydCAnQC9jb21wb25lbnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbk1hbmFnZXIsIHVzZU5hdmlnYXRpb24sIHRvQ3VycmVuY3kgfSBmcm9tICdAL2NsYXNzZXMnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdAL3NlcnZpY2VzJztcbmltcG9ydCB7IENvbnRleHRNZW51T3B0aW9uLCBnbG9iYWxDb250ZXh0LCB9IGZyb20gJ0AvY29tcG9uZW50cyc7XG5jbGFzcyBEYXNoYm9hcmRWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdXNlTmF2aWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF5b3V0X2JvZHknKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29tbWFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoX2NvbW1hbmQnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb21tYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZV9jbG9zZWRfY29tbWFuZCcpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJhbnNhY3Rpb25fcGFuZWwnKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cyA9IFtdO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyYW5zYWN0aW9uX2NhcmRcIik7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uYWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhY3Rpb24tYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhbnNhY3Rpb24tY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdG9yX2RpYWxvZ1wiKTtcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dE1lbnUoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hBY2NvdW50cygpO1xuICAgIH1cbiAgICBpbml0Q29udGV4dE1lbnUoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBnbG9iYWxDb250ZXh0LmFkZE1lbnUoJ2FjY291bnRzX2NhcmQnLCB0aGlzLmJvZHkpO1xuICAgICAgICAvLyBDb250ZXh0IG1lbnUgb3B0aW9ucy4uLlxuICAgICAgICBjb25zdCBjbG9zZU9wdGlvbiA9IG5ldyBDb250ZXh0TWVudU9wdGlvbignQ2xvc2UnKTtcbiAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9uID0gbmV3IENvbnRleHRNZW51T3B0aW9uKCdEZWxldGUnKTtcbiAgICAgICAgY2xvc2VPcHRpb24udmlzaWJsZShkID0+IGQuU3RhdHVzID09PSAnQWN0aXZlJyk7XG4gICAgICAgIGRlbGV0ZU9wdGlvbi52aXNpYmxlKGQgPT4gZC5TdGF0dXMgPT09ICdBY3RpdmUnKTtcbiAgICAgICAgY2xvc2VPcHRpb24ub25DbGljayhhc3luYyAoYWNjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKGBDbG9zZSBhY2NvdW50IFxcXCIke2FjY3QuVGl0bGV9XFxcIj9gKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IG5ldyBBY2NvdW50U2VydmljZSgpO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHNlcnZpY2UuY2xvc2UoYWNjdC5JZCk7XG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChwYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRPRE86IEZpeCB0aGlzIVxuICAgICAgICAgICAgLy8gcmVmcmVzaENhdGVnb3JpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZU9wdGlvbi5vbkNsaWNrKGFzeW5jIChhY2N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oYERlbGV0ZSBhY2NvdW50IFxcXCIke2FjY3QuVGl0bGV9XFxcIj9gKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IG5ldyBBY2NvdW50U2VydmljZSgpO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHNlcnZpY2UucmVtb3ZlKGFjY3QuSWQpO1xuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocGF5bG9hZC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyFcbiAgICAgICAgICAgIC8vIHJlZnJlc2hDYXRlZ29yaWVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHRNZW51LmFkZE9wdGlvbnMoY2xvc2VPcHRpb24sIGRlbGV0ZU9wdGlvbik7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2EgPSB0aGlzLnJlZnJlc2hDb21tYW5kKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZnJlc2hBY2NvdW50cy5iaW5kKHRoaXMpKTtcbiAgICAgICAgKF9iID0gdGhpcy50b2dnbGVDb21tYW5kKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJlZnJlc2hBY2NvdW50cygpIHtcbiAgICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9ICc8cCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5GZXRjaGluZyBBY2NvdW50cy4uLjwvcD4nO1xuICAgICAgICBheGlvcy5nZXQoXCJhY2NvdW50L2NydWQvcmVhZF9jYXRlZ29yaXplZC5waHBcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGFjY291bnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmIChhY2NvdW50cy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gYWNjb3VudHMuY29udGVudDtcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGNvbnRlbnQucmVkdWNlKChhcnIsIGFjY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5SWQgPSBhY2N0LkNhdGVnb3J5SWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJyLnNvbWUoY2F0ID0+IGNhdC5JZCA9PSBhY2N0LkNhdGVnb3J5SWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBhY2N0LkNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yOiBhY2N0LkNhdGVnb3J5Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcml6ZWQgPSBjb250ZW50LnJlZHVjZSgobWFwLCBhY2N0KSA9PiB7IHZhciBfYTsgcmV0dXJuIG1hcC5zZXQoYWNjdC5DYXRlZ29yeUlkLCBbLi4uKF9hID0gbWFwLmdldChhY2N0LkNhdGVnb3J5SWQpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSwgYWNjdF0pOyB9LCBuZXcgTWFwKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJhbGFuY2VzKGNhdGVnb3JpZXMsIGNhdGVnb3JpemVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjZW50ZXJlZFwiPk9vcHMhICR7YWNjb3VudHMuY29udGVudH08L3A+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZyZXNoQmFsYW5jZXMoY2F0ZWdvcmllcywgY2F0ZWdvcml6ZWQpIHtcbiAgICAgICAgY2F0ZWdvcml6ZWQuZm9yRWFjaCgoYWNjb3VudHMsIF9jYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSAoX2EgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5JZCA9PSBfY2F0ZWdvcnkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IChfYiA9IGNhdGVnb3J5ID09PSBudWxsIHx8IGNhdGVnb3J5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXRlZ29yeS5Db2xvcikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCI5RTlFOUVcIjtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IChfYyA9IGNhdGVnb3J5ID09PSBudWxsIHx8IGNhdGVnb3J5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXRlZ29yeS5UaXRsZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogXCJVbmNhdGVnb3JpemVkXCI7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmx1ZW50LXN5bWJvbC1pY29uJyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgICAgICAgICAgYWNjb3VudHNHcmlkLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRzLWdyaWQnKTtcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ3N5bWJvbCcsICdUYWcnKTtcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2ZvcmVncm91bmQnLCBgIyR7Y29sb3J9YCk7XG4gICAgICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCAnMTMnKTtcbiAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChhY2NvdW50c0dyaWQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0YWcpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCk7XG4gICAgICAgICAgICBhY2NvdW50cy5mb3JFYWNoKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLm5ld0NhcmQoYWNjb3VudCwgdGl0bGUpO1xuICAgICAgICAgICAgICAgIGFjY291bnRzR3JpZC5hcHBlbmQoY2FyZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5ld0NhcmQoYWNjb3VudCwgY2F0ZWdvcnkpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IGFjY291bnROdW1iZXIgPSAoX2IgPSAoX2EgPSBhY2NvdW50LkFjY291bnROdW1iZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zbGljZSgtNCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwi4oCi4oCi4oCi4oCiXCI7XG4gICAgICAgIGxldCBiYW5rSWNvbiA9IGFjY291bnQuQmFua0ljb247XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhY2NvdW50LWNhcmQnKTtcbiAgICAgICAgY29uc3QgcnVubmluZ0JhbGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkLWJhbGFuY2UnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdGVkQmFsYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcmQtYmFsYW5jZScpO1xuICAgICAgICBjb25zdCBhY2NvdW50QmFua0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcnVubmluZ0JhbGFuY2UuaW5uZXJUZXh0ID0gJy4uLic7XG4gICAgICAgIHByb2plY3RlZEJhbGFuY2UuaW5uZXJUZXh0ID0gJy4uLic7XG4gICAgICAgIGFjY291bnRCYW5rSWNvbi5jbGFzc0xpc3QuYWRkKCdhY2NvdW50LWJhbmstaWNvbicpO1xuICAgICAgICBhY2NvdW50QmFua0ljb24uc2xvdCA9ICdpY29uJztcbiAgICAgICAgY2FyZC5hcHBlbmQocnVubmluZ0JhbGFuY2UpO1xuICAgICAgICBjYXJkLmFwcGVuZChwcm9qZWN0ZWRCYWxhbmNlKTtcbiAgICAgICAgY2FyZC5hcHBlbmQoYWNjb3VudEJhbmtJY29uKTtcbiAgICAgICAgY2FyZC50aXRsZSA9IGFjY291bnQuVGl0bGU7XG4gICAgICAgIGNhcmQubnVtYmVyID0gYWNjb3VudE51bWJlcjtcbiAgICAgICAgY2FyZC5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICBydW5uaW5nQmFsYW5jZS50aXRsZSA9ICdBY3R1YWwnO1xuICAgICAgICBwcm9qZWN0ZWRCYWxhbmNlLnRpdGxlID0gJ1Byb2plY3Rpb24nO1xuICAgICAgICBpZiAoYmFua0ljb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNyYyA9IGBhc3NldHMvaW1hZ2VzL2JhbmtfaWNvbnMvJHtiYW5rSWNvbn0uc3ZnYDtcbiAgICAgICAgICAgIGlmIChiYW5rSWNvbiA9PSBcIm1hc3Rlcl9jYXJkXCIpXG4gICAgICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvdHRvbToxNnB4O2hlaWdodDozNXB4O1wiKTtcbiAgICAgICAgICAgIGlmIChiYW5rSWNvbiA9PSBcInVicFwiIHx8IGJhbmtJY29uID09IFwiZ2Nhc2hcIilcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjIwcHg7aGVpZ2h0OjMwcHg7cmlnaHQ6MjVweDtcIik7XG4gICAgICAgICAgICBpZiAoYmFua0ljb24gPT0gXCJjaW1iXCIpXG4gICAgICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvdHRvbToyMHB4O2hlaWdodDoyOHB4O3JpZ2h0OjI1cHg7XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbnRleHQgbWVudS4uLlxuICAgICAgICBjYXJkLmFkZENvbnRleHQodGhpcy5jb250ZXh0TWVudSwgYWNjb3VudCk7XG4gICAgICAgIC8vIFZpc2liaWxpdHkuLi5cbiAgICAgICAgaWYgKGFjY291bnQuU3RhdHVzICE9PSAnQWN0aXZlJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cy5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGF4aW9zLmdldChgL2FjY291bnQvYmFsYW5jZS5waHA/YWNjb3VudElkPSR7YWNjb3VudC5JZH1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlcyA9IHBheWxvYWQuY29udGVudDtcbiAgICAgICAgICAgICAgICBydW5uaW5nQmFsYW5jZS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGJhbGFuY2VzLkJhbGFuY2UpO1xuICAgICAgICAgICAgICAgIHByb2plY3RlZEJhbGFuY2UuaW5uZXJUZXh0ID0gdG9DdXJyZW5jeShiYWxhbmNlcy5Qcm9qZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9ICchJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0ZWRCYWxhbmNlLmlubmVyVGV4dCA9ICchJztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHBheWxvYWQuY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvblBhbmVsLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb24ubG9hZEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG4gICAgb25Ub2dnbGVDbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb21tYW5kLmljb24gPSB0aGlzLmlzU2hvd0Nsb3NlZCA/ICdWaWV3JyA6ICdIaWRlJztcbiAgICAgICAgdGhpcy50b2dnbGVDb21tYW5kLmxhYmVsID0gdGhpcy5pc1Nob3dDbG9zZWQgPyAnU2hvdyBDbG9zZWQgQWNjb3VudHMnIDogJ0hpZGUgQ2xvc2VkIEFjY291bnRzJztcbiAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93Q2xvc2VkKVxuICAgICAgICAgICAgICAgIGNhcmQuaGlkZSgpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNhcmQuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc1Nob3dDbG9zZWQgPSAhdGhpcy5pc1Nob3dDbG9zZWQ7XG4gICAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhc2hib2FyZFZpZXcoKTtcbiAgICB2aWV3LnJlZnJlc2goKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9