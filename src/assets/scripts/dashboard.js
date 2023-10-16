/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sagemodeninja/custom-component/dist/custom-component.js ***!
  \*******************************************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){return function(t){window.customElements.define(e,t)}}function n(e){return function(t,o){let n=t[o];Object.defineProperty(t,o,{get:function(){return n},set:function(t){const r=n;n=t,t!=r&&(this.setAttribute(null!=e?e:o,n),this.stateHasChanged())},enumerable:!0,configurable:!0}),t.observeAttribute(o,null!=e?e:o)}}e.r(t),e.d(t,{CustomComponent:()=>r,customComponent:()=>o,parameter:()=>n});class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.renderDOM()}attributeChangedCallback(e,t,o){}get virtualDOM(){return(new DOMParser).parseFromString(this.render(),"text/html").body.children}renderDOM(){const e=this.resolveTemplate();this.shadowRoot.innerHTML=null,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.shadowRoot.append(...this.virtualDOM)}resolveTemplate(){const e=this.localName;return e in r._templates?r._templates[e]:this.createTemplate(e)}createTemplate(e){var t;const o=document.createElement("template"),n=Object.getPrototypeOf(this).constructor;return o.innerHTML=`<style>${null!==(t=n.styles)&&void 0!==t?t:""}</style>`,r._templates[e]=o,o}}return r._templates={},t})()));
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

/***/ "./scripts/classes/alpha-blend.ts":
/*!****************************************!*\
  !*** ./scripts/classes/alpha-blend.ts ***!
  \****************************************/
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

/***/ "./scripts/classes/currency.ts":
/*!*************************************!*\
  !*** ./scripts/classes/currency.ts ***!
  \*************************************/
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

/***/ "./scripts/classes/date-time.ts":
/*!**************************************!*\
  !*** ./scripts/classes/date-time.ts ***!
  \**************************************/
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

/***/ "./scripts/classes/navigation.ts":
/*!***************************************!*\
  !*** ./scripts/classes/navigation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigation)
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

/***/ "./scripts/classes/transaction-manager.ts":
/*!************************************************!*\
  !*** ./scripts/classes/transaction-manager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionManager: () => (/* binding */ TransactionManager)
/* harmony export */ });
/* harmony import */ var _components_context_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/context-menu */ "./scripts/components/context-menu.ts");
/* harmony import */ var _enums_operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/enums/operation */ "./scripts/enums/operation.ts");
/* harmony import */ var _enums_transaction_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/enums/transaction-type */ "./scripts/enums/transaction-type.ts");
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-time */ "./scripts/classes/date-time.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency */ "./scripts/classes/currency.ts");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");







class TransactionManager {
    constructor() {
        this.operation = _enums_operation__WEBPACK_IMPORTED_MODULE_1__.Operation.Create;
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
        this.contextMenu = _components_context_menu__WEBPACK_IMPORTED_MODULE_0__.globalContext.addMenu("transactions_row", this.container);
        // Options
        let options = ["Update", "Post", "Delete", "Cancel"];
        let menuOptions = options.reduce((mo, o) => {
            const option = new _components_context_menu__WEBPACK_IMPORTED_MODULE_0__.ContextMenuOption(o);
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
                this.operation = _enums_operation__WEBPACK_IMPORTED_MODULE_1__.Operation.Create;
                this.transactionType = type;
                clearForm();
                let typeInput = this.editor.querySelector("form input[name=TransactionType]");
                typeInput.value = type;
                let dateInput = this.editor.querySelector("form input[name=Date]");
                dateInput.value = _date_time__WEBPACK_IMPORTED_MODULE_3__.DateTime.now().toString("yyyy-MM-dd");
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
            if (this.transactionType == _enums_transaction_type__WEBPACK_IMPORTED_MODULE_2__.TransactionType.Withdraw)
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
        axios__WEBPACK_IMPORTED_MODULE_6__["default"].get("account/balance.php", { params: data })
            .then(response => {
            const payload = response.data;
            const content = payload.content;
            if (!payload.state) {
                alert(`Oops! ${content}`);
                return;
            }
            balances[0].innerText = (0,_currency__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(content.Balance);
            balances[1].innerText = (0,_currency__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(content.Projection);
        })
            .catch(error => {
            alert("An error occured.");
            console.log(error);
        });
    }
    loadTransactions() {
        const data = { AccountId: this.account.Id };
        axios__WEBPACK_IMPORTED_MODULE_6__["default"].get("transaction/read.php", { params: data })
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
        const dateTime = _date_time__WEBPACK_IMPORTED_MODULE_3__.DateTime.parse(date.slice(0, -1));
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
        amountPar.innerText = `${!isDebit ? "-" : ""} PHP ${(0,_currency__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(transAmount.toString())}`;
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
            (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
                targets: main,
                left: -snapPoint,
                duration: 200,
                easing: "easeInOutQuad"
            });
        });
        function collapseActions() {
            (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
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
        this.operation = _enums_operation__WEBPACK_IMPORTED_MODULE_1__.Operation.Update;
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
        const operation = _enums_operation__WEBPACK_IMPORTED_MODULE_1__.Operation[this.operation].toLowerCase();
        const endpoint = `transaction/${operation}.php`;
        // TODO: Refactor
        let form = this.editor.querySelector("form");
        let data = new FormData(form);
        data.append("AccountId", this.account.Id.toString());
        let trans = Object.fromEntries(data.entries());
        axios__WEBPACK_IMPORTED_MODULE_6__["default"]
            .post(endpoint, trans)
            .then(response => {
            if (response.data.state)
                this.refresh();
            this.operation = _enums_operation__WEBPACK_IMPORTED_MODULE_1__.Operation.Create;
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
        axios__WEBPACK_IMPORTED_MODULE_6__["default"]
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

/***/ "./scripts/components/account-card.ts":
/*!********************************************!*\
  !*** ./scripts/components/account-card.ts ***!
  \********************************************/
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

/***/ "./scripts/components/action-button.ts":
/*!*********************************************!*\
  !*** ./scripts/components/action-button.ts ***!
  \*********************************************/
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

/***/ "./scripts/components/card-balance.ts":
/*!********************************************!*\
  !*** ./scripts/components/card-balance.ts ***!
  \********************************************/
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

/***/ "./scripts/components/context-menu.ts":
/*!********************************************!*\
  !*** ./scripts/components/context-menu.ts ***!
  \********************************************/
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

/***/ "./scripts/components/transaction-panel.ts":
/*!*************************************************!*\
  !*** ./scripts/components/transaction-panel.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionPanel: () => (/* binding */ TransactionPanel)
/* harmony export */ });
/* harmony import */ var _classes_alpha_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/classes/alpha-blend */ "./scripts/classes/alpha-blend.ts");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/custom-component */ "./node_modules/@sagemodeninja/custom-component/dist/custom-component.js");
/* harmony import */ var _sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_custom_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
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
        const timeline = animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
        const theme = (0,_classes_alpha_blend__WEBPACK_IMPORTED_MODULE_0__.computeAlphaBlend)("f2f2f2", "000000", this._overlay.alpha);
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

/***/ "./scripts/enums/operation.ts":
/*!************************************!*\
  !*** ./scripts/enums/operation.ts ***!
  \************************************/
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

/***/ "./scripts/enums/transaction-type.ts":
/*!*******************************************!*\
  !*** ./scripts/enums/transaction-type.ts ***!
  \*******************************************/
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

/***/ "./scripts/services/account-service.ts":
/*!*********************************************!*\
  !*** ./scripts/services/account-service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-base */ "./scripts/services/service-base.ts");
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

/***/ "./scripts/services/service-base.ts":
/*!******************************************!*\
  !*** ./scripts/services/service-base.ts ***!
  \******************************************/
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
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
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
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
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
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
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
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))
        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
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
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










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

  adapter: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].isNode ? 'http' : 'xhr',

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
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data)) : data;
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
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
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
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].ERR_BAD_RESPONSE, this, null, this.response);
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
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.Blob
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
const VERSION = "1.5.0";

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
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
          cookie.push('path=' + path);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());


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
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
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
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");






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
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
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
/*!*****************************************!*\
  !*** ./scripts/views/dashboard-view.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sagemodeninja/fluent-icon-element-component */ "./node_modules/@sagemodeninja/fluent-icon-element-component/dist/fluent-icon-element-component.js");
/* harmony import */ var _sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_fluent_icon_element_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sagemodeninja/fluent-command-bar-component */ "./node_modules/@sagemodeninja/fluent-command-bar-component/dist/fluent-command-bar-component.js");
/* harmony import */ var _sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sagemodeninja_fluent_command_bar_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_account_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/account-card */ "./scripts/components/account-card.ts");
/* harmony import */ var _components_action_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/action-button */ "./scripts/components/action-button.ts");
/* harmony import */ var _components_card_balance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/card-balance */ "./scripts/components/card-balance.ts");
/* harmony import */ var _components_transaction_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/transaction-panel */ "./scripts/components/transaction-panel.ts");
/* harmony import */ var _classes_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/classes/navigation */ "./scripts/classes/navigation.ts");
/* harmony import */ var _classes_transaction_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/classes/transaction-manager */ "./scripts/classes/transaction-manager.ts");
/* harmony import */ var _components_context_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/context-menu */ "./scripts/components/context-menu.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/account-service */ "./scripts/services/account-service.ts");
/* harmony import */ var _classes_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/classes/currency */ "./scripts/classes/currency.ts");












class DashboardView {
    constructor() {
        (0,_classes_navigation__WEBPACK_IMPORTED_MODULE_6__["default"])();
        this.body = document.querySelector('#layout_body');
        this.refreshCommand = document.querySelector('#refresh_command');
        this.toggleCommand = document.querySelector('#toggle_closed_command');
        this.transactionPanel = document.querySelector('#transaction_panel');
        this.transaction = new _classes_transaction_manager__WEBPACK_IMPORTED_MODULE_7__.TransactionManager();
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
        this.contextMenu = _components_context_menu__WEBPACK_IMPORTED_MODULE_8__.globalContext.addMenu('accounts_card', this.body);
        // Context menu options...
        const closeOption = new _components_context_menu__WEBPACK_IMPORTED_MODULE_8__.ContextMenuOption('Close');
        const deleteOption = new _components_context_menu__WEBPACK_IMPORTED_MODULE_8__.ContextMenuOption('Delete');
        closeOption.visible(d => d.Status === 'Active');
        deleteOption.visible(d => d.Status === 'Active');
        closeOption.onClick(async (acct) => {
            const response = confirm(`Close account \"${acct.Title}\"?`);
            if (!response)
                return;
            const service = new _services_account_service__WEBPACK_IMPORTED_MODULE_9__.AccountService();
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
            const service = new _services_account_service__WEBPACK_IMPORTED_MODULE_9__.AccountService();
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
        axios__WEBPACK_IMPORTED_MODULE_11__["default"].get("account/crud/read_categorized.php")
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
        axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`/account/balance.php?accountId=${account.Id}`)
            .then(response => {
            const payload = response.data;
            if (payload.state) {
                let balances = payload.content;
                runningBalance.innerText = (0,_classes_currency__WEBPACK_IMPORTED_MODULE_10__.toCurrency)(balances.Balance);
                projectedBalance.innerText = (0,_classes_currency__WEBPACK_IMPORTED_MODULE_10__.toCurrency)(balances.Projection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSwrQkFBK0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSx5Q0FBeUMsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxrQ0FBa0MsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSx1Q0FBdUMsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2Q0FBNkMsRUFBRSxnQ0FBZ0MsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwwQ0FBMEMsRUFBRSx5Q0FBeUMsRUFBRSx1Q0FBdUMsRUFBRSx5QkFBeUIsRUFBRSxxQ0FBcUMsRUFBRSw0Q0FBNEMsRUFBRSwwQ0FBMEMsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSxxQ0FBcUMsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSw2Q0FBNkMsRUFBRSx1Q0FBdUMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx3QkFBd0IsRUFBRSxtQ0FBbUMsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSx3Q0FBd0MsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSwyQ0FBMkMsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSx3QkFBd0IsRUFBRSxxQ0FBcUMsRUFBRSwwQ0FBMEMsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSx5Q0FBeUMsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSx5Q0FBeUMsRUFBRSxxREFBcUQsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSwyQ0FBMkMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSwrQkFBK0IsRUFBRSwwQ0FBMEMsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxzQ0FBc0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSwyQ0FBMkMsRUFBRSx3Q0FBd0MsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSw2Q0FBNkMsRUFBRSx1Q0FBdUMsRUFBRSw2Q0FBNkMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSwyQ0FBMkMsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSx1Q0FBdUMsRUFBRSx3QkFBd0IsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSw4Q0FBOEMsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxxREFBcUQsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSw0Q0FBNEMsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSw0QkFBNEIsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx3Q0FBd0MsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSw0Q0FBNEMsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSw2Q0FBNkMsRUFBRSxrQ0FBa0MsRUFBRSxzQ0FBc0MsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSwwQ0FBMEMsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw2Q0FBNkMsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSw0Q0FBNEMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSwwQ0FBMEMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxrREFBa0QsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSx3Q0FBd0MsRUFBRSxnQ0FBZ0MsRUFBRSx5Q0FBeUMsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSxxQ0FBcUMsRUFBRSw0QkFBNEIsRUFBRSx3Q0FBd0MsRUFBRSwyQ0FBMkMsRUFBRSwyQ0FBMkMsRUFBRSwwQ0FBMEMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSwwQ0FBMEMsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSw2Q0FBNkMsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSw0Q0FBNEMsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxnREFBZ0QsRUFBRSxpREFBaUQsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSwyQ0FBMkMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSx3QkFBd0IsRUFBRSxxQ0FBcUMsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSw2Q0FBNkMsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSw2Q0FBNkMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxnREFBZ0QsRUFBRSw4QkFBOEIsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSwwQ0FBMEMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxpREFBaUQsRUFBRSxxQ0FBcUMsRUFBRSwrQkFBK0IsRUFBRSx3Q0FBd0MsRUFBRSxpREFBaUQsRUFBRSwrQ0FBK0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSx3QkFBd0IsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSw4Q0FBOEMsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSxtQ0FBbUMsRUFBRSwwQ0FBMEMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSw4Q0FBOEMsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSx5Q0FBeUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSxzQ0FBc0MsRUFBRSx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpREFBaUQsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSwrQ0FBK0MsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxvREFBb0QsRUFBRSxvREFBb0QsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSw2REFBNkQsRUFBRSwyQ0FBMkMsRUFBRSxtREFBbUQsRUFBRSxtREFBbUQsRUFBRSwyREFBMkQsRUFBRSxvREFBb0QsRUFBRSw0REFBNEQsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSw0Q0FBNEMsRUFBRSwyQ0FBMkMsRUFBRSw0Q0FBNEMsRUFBRSwwQ0FBMEMsRUFBRSw2Q0FBNkMsRUFBRSxnQ0FBZ0MsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSxpREFBaUQsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSxpREFBaUQsRUFBRSw4Q0FBOEMsRUFBRSxnQ0FBZ0MsRUFBRSw4Q0FBOEMsRUFBRSxtQ0FBbUMsRUFBRSwrQ0FBK0MsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSwyQ0FBMkMsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSx5Q0FBeUMsRUFBRSx3Q0FB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QUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RC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RSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50L2Rpc3QvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2ZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50L2Rpc3QvZmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9hbmltZWpzL2xpYi9hbmltZS5lcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jbGFzc2VzL2FscGhhLWJsZW5kLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NsYXNzZXMvY3VycmVuY3kudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY2xhc3Nlcy9kYXRlLXRpbWUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY2xhc3Nlcy9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NsYXNzZXMvdHJhbnNhY3Rpb24tbWFuYWdlci50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL2FjY291bnQtY2FyZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jb21wb25lbnRzL2FjdGlvbi1idXR0b24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9jYXJkLWJhbGFuY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9jb250ZXh0LW1lbnUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy90cmFuc2FjdGlvbi1wYW5lbC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9lbnVtcy9vcGVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvZW51bXMvdHJhbnNhY3Rpb24tdHlwZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9zZXJ2aWNlcy9hY2NvdW50LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvc2VydmljZXMvc2VydmljZS1iYXNlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NIZWFkZXJzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcGVlZG9tZXRlci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9CbG9iLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvdmlld3MvZGFzaGJvYXJkLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5DdXN0b21Db21wb25lbnQ9dCgpOmUuQ3VzdG9tQ29tcG9uZW50PXQoKX0oc2VsZiwoKCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOih0LG8pPT57Zm9yKHZhciBuIGluIG8pZS5vKG8sbikmJiFlLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6b1tuXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSxyOmU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sdD17fTtmdW5jdGlvbiBvKGUpe3JldHVybiBmdW5jdGlvbih0KXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsdCl9fWZ1bmN0aW9uIG4oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbyl7bGV0IG49dFtvXTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbn0sc2V0OmZ1bmN0aW9uKHQpe2NvbnN0IHI9bjtuPXQsdCE9ciYmKHRoaXMuc2V0QXR0cmlidXRlKG51bGwhPWU/ZTpvLG4pLHRoaXMuc3RhdGVIYXNDaGFuZ2VkKCkpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQub2JzZXJ2ZUF0dHJpYnV0ZShvLG51bGwhPWU/ZTpvKX19ZS5yKHQpLGUuZCh0LHtDdXN0b21Db21wb25lbnQ6KCk9PnIsY3VzdG9tQ29tcG9uZW50OigpPT5vLHBhcmFtZXRlcjooKT0+bn0pO2NsYXNzIHIgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnJlbmRlckRPTSgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLHQsbyl7fWdldCB2aXJ0dWFsRE9NKCl7cmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnJlbmRlcigpLFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW59cmVuZGVyRE9NKCl7Y29uc3QgZT10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuc2hhZG93Um9vdC5pbm5lckhUTUw9bnVsbCx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZS5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCBlPXRoaXMubG9jYWxOYW1lO3JldHVybiBlIGluIHIuX3RlbXBsYXRlcz9yLl90ZW1wbGF0ZXNbZV06dGhpcy5jcmVhdGVUZW1wbGF0ZShlKX1jcmVhdGVUZW1wbGF0ZShlKXt2YXIgdDtjb25zdCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtyZXR1cm4gby5pbm5lckhUTUw9YDxzdHlsZT4ke251bGwhPT0odD1uLnN0eWxlcykmJnZvaWQgMCE9PXQ/dDpcIlwifTwvc3R5bGU+YCxyLl90ZW1wbGF0ZXNbZV09byxvfX1yZXR1cm4gci5fdGVtcGxhdGVzPXt9LHR9KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tY29tcG9uZW50LmpzLm1hcCIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuRmx1ZW50Q29tbWFuZEJhcj1lKCk6dC5GbHVlbnRDb21tYW5kQmFyPWUoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciB0PXsyNjk6dD0+e3ZhciBlO3NlbGYsZT0oKT0+KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e2Q6KGUsbik9Pntmb3IodmFyIG8gaW4gbil0Lm8obixvKSYmIXQubyhlLG8pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHtlbnVtZXJhYmxlOiEwLGdldDpuW29dfSl9LG86KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLHI6dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxlPXt9O2Z1bmN0aW9uIG4odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodCxlKX19dC5yKGUpLHQuZChlLHtDdXN0b21Db21wb25lbnQ6KCk9Pm8sY3VzdG9tQ29tcG9uZW50OigpPT5ufSk7Y2xhc3MgbyBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKTtjb25zdCB0PXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCB0PXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gdCBpbiBvLl90ZW1wbGF0ZXM/by5fdGVtcGxhdGVzW3RdOnRoaXMuY3JlYXRlVGVtcGxhdGUodCl9Y3JlYXRlVGVtcGxhdGUodCl7dmFyIGU7Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksaT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIG4uaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGU9aS5zdHlsZXMpJiZ2b2lkIDAhPT1lP2U6XCJcIn08L3N0eWxlPmAsby5fdGVtcGxhdGVzW3RdPW4sbn1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9fXJldHVybiBvLl90ZW1wbGF0ZXM9e30sZX0pKCksdC5leHBvcnRzPWUoKX0sNDQxOih0LGUsbik9Pnt2YXIgbzshZnVuY3Rpb24oaSxyLHMpe2lmKGkpe2Zvcih2YXIgYSxsPXs4OlwiYmFja3NwYWNlXCIsOTpcInRhYlwiLDEzOlwiZW50ZXJcIiwxNjpcInNoaWZ0XCIsMTc6XCJjdHJsXCIsMTg6XCJhbHRcIiwyMDpcImNhcHNsb2NrXCIsMjc6XCJlc2NcIiwzMjpcInNwYWNlXCIsMzM6XCJwYWdldXBcIiwzNDpcInBhZ2Vkb3duXCIsMzU6XCJlbmRcIiwzNjpcImhvbWVcIiwzNzpcImxlZnRcIiwzODpcInVwXCIsMzk6XCJyaWdodFwiLDQwOlwiZG93blwiLDQ1OlwiaW5zXCIsNDY6XCJkZWxcIiw5MTpcIm1ldGFcIiw5MzpcIm1ldGFcIiwyMjQ6XCJtZXRhXCJ9LGM9ezEwNjpcIipcIiwxMDc6XCIrXCIsMTA5OlwiLVwiLDExMDpcIi5cIiwxMTE6XCIvXCIsMTg2OlwiO1wiLDE4NzpcIj1cIiwxODg6XCIsXCIsMTg5OlwiLVwiLDE5MDpcIi5cIiwxOTE6XCIvXCIsMTkyOlwiYFwiLDIxOTpcIltcIiwyMjA6XCJcXFxcXCIsMjIxOlwiXVwiLDIyMjpcIidcIn0sZD17XCJ+XCI6XCJgXCIsXCIhXCI6XCIxXCIsXCJAXCI6XCIyXCIsXCIjXCI6XCIzXCIsJDpcIjRcIixcIiVcIjpcIjVcIixcIl5cIjpcIjZcIixcIiZcIjpcIjdcIixcIipcIjpcIjhcIixcIihcIjpcIjlcIixcIilcIjpcIjBcIixfOlwiLVwiLFwiK1wiOlwiPVwiLFwiOlwiOlwiO1wiLCdcIic6XCInXCIsXCI8XCI6XCIsXCIsXCI+XCI6XCIuXCIsXCI/XCI6XCIvXCIsXCJ8XCI6XCJcXFxcXCJ9LHU9e29wdGlvbjpcImFsdFwiLGNvbW1hbmQ6XCJtZXRhXCIscmV0dXJuOlwiZW50ZXJcIixlc2NhcGU6XCJlc2NcIixwbHVzOlwiK1wiLG1vZDovTWFjfGlQb2R8aVBob25lfGlQYWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKT9cIm1ldGFcIjpcImN0cmxcIn0sbT0xO208MjA7KyttKWxbMTExK21dPVwiZlwiK207Zm9yKG09MDttPD05OysrbSlsW20rOTZdPW0udG9TdHJpbmcoKTt2LnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzO3JldHVybiB0PXQgaW5zdGFuY2VvZiBBcnJheT90Olt0XSxvLl9iaW5kTXVsdGlwbGUuY2FsbChvLHQsZSxuKSxvfSx2LnByb3RvdHlwZS51bmJpbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5iaW5kLmNhbGwodGhpcyx0LChmdW5jdGlvbigpe30pLGUpfSx2LnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztyZXR1cm4gbi5fZGlyZWN0TWFwW3QrXCI6XCIrZV0mJm4uX2RpcmVjdE1hcFt0K1wiOlwiK2VdKHt9LHQpLG59LHYucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdC5fY2FsbGJhY2tzPXt9LHQuX2RpcmVjdE1hcD17fSx0fSx2LnByb3RvdHlwZS5zdG9wQ2FsbGJhY2s9ZnVuY3Rpb24odCxlKXtpZigoXCIgXCIrZS5jbGFzc05hbWUrXCIgXCIpLmluZGV4T2YoXCIgbW91c2V0cmFwIFwiKT4tMSlyZXR1cm4hMTtpZihnKGUsdGhpcy50YXJnZXQpKXJldHVybiExO2lmKFwiY29tcG9zZWRQYXRoXCJpbiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbXBvc2VkUGF0aCl7dmFyIG49dC5jb21wb3NlZFBhdGgoKVswXTtuIT09dC50YXJnZXQmJihlPW4pfXJldHVyblwiSU5QVVRcIj09ZS50YWdOYW1lfHxcIlNFTEVDVFwiPT1lLnRhZ05hbWV8fFwiVEVYVEFSRUFcIj09ZS50YWdOYW1lfHxlLmlzQ29udGVudEVkaXRhYmxlfSx2LnByb3RvdHlwZS5oYW5kbGVLZXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faGFuZGxlS2V5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sdi5hZGRLZXljb2Rlcz1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gdCl0Lmhhc093blByb3BlcnR5KGUpJiYobFtlXT10W2VdKTthPW51bGx9LHYuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXYocik7Zm9yKHZhciBlIGluIHQpXCJfXCIhPT1lLmNoYXJBdCgwKSYmKHZbZV09ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRbZV0uYXBwbHkodCxhcmd1bWVudHMpfX0oZSkpfSx2LmluaXQoKSxpLk1vdXNldHJhcD12LHQuZXhwb3J0cyYmKHQuZXhwb3J0cz12KSx2b2lkIDA9PT0obz1mdW5jdGlvbigpe3JldHVybiB2fS5jYWxsKGUsbixlLHQpKXx8KHQuZXhwb3J0cz1vKX1mdW5jdGlvbiBoKHQsZSxuKXt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGUsbiwhMSk6dC5hdHRhY2hFdmVudChcIm9uXCIrZSxuKX1mdW5jdGlvbiBwKHQpe2lmKFwia2V5cHJlc3NcIj09dC50eXBlKXt2YXIgZT1TdHJpbmcuZnJvbUNoYXJDb2RlKHQud2hpY2gpO3JldHVybiB0LnNoaWZ0S2V5fHwoZT1lLnRvTG93ZXJDYXNlKCkpLGV9cmV0dXJuIGxbdC53aGljaF0/bFt0LndoaWNoXTpjW3Qud2hpY2hdP2NbdC53aGljaF06U3RyaW5nLmZyb21DaGFyQ29kZSh0LndoaWNoKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIGYodCl7cmV0dXJuXCJzaGlmdFwiPT10fHxcImN0cmxcIj09dHx8XCJhbHRcIj09dHx8XCJtZXRhXCI9PXR9ZnVuY3Rpb24geSh0LGUsbil7cmV0dXJuIG58fChuPWZ1bmN0aW9uKCl7aWYoIWEpZm9yKHZhciB0IGluIGE9e30sbCl0Pjk1JiZ0PDExMnx8bC5oYXNPd25Qcm9wZXJ0eSh0KSYmKGFbbFt0XV09dCk7cmV0dXJuIGF9KClbdF0/XCJrZXlkb3duXCI6XCJrZXlwcmVzc1wiKSxcImtleXByZXNzXCI9PW4mJmUubGVuZ3RoJiYobj1cImtleWRvd25cIiksbn1mdW5jdGlvbiBiKHQsZSl7dmFyIG4sbyxpLHI9W107Zm9yKG49ZnVuY3Rpb24odCl7cmV0dXJuXCIrXCI9PT10P1tcIitcIl06KHQ9dC5yZXBsYWNlKC9cXCt7Mn0vZyxcIitwbHVzXCIpKS5zcGxpdChcIitcIil9KHQpLGk9MDtpPG4ubGVuZ3RoOysraSlvPW5baV0sdVtvXSYmKG89dVtvXSksZSYmXCJrZXlwcmVzc1wiIT1lJiZkW29dJiYobz1kW29dLHIucHVzaChcInNoaWZ0XCIpKSxmKG8pJiZyLnB1c2gobyk7cmV0dXJue2tleTpvLG1vZGlmaWVyczpyLGFjdGlvbjplPXkobyxyLGUpfX1mdW5jdGlvbiBnKHQsZSl7cmV0dXJuIG51bGwhPT10JiZ0IT09ciYmKHQ9PT1lfHxnKHQucGFyZW50Tm9kZSxlKSl9ZnVuY3Rpb24gdih0KXt2YXIgZT10aGlzO2lmKHQ9dHx8ciwhKGUgaW5zdGFuY2VvZiB2KSlyZXR1cm4gbmV3IHYodCk7ZS50YXJnZXQ9dCxlLl9jYWxsYmFja3M9e30sZS5fZGlyZWN0TWFwPXt9O3ZhciBuLG89e30saT0hMSxzPSExLGE9ITE7ZnVuY3Rpb24gbCh0KXt0PXR8fHt9O3ZhciBlLG49ITE7Zm9yKGUgaW4gbyl0W2VdP249ITA6b1tlXT0wO258fChhPSExKX1mdW5jdGlvbiBjKHQsbixpLHIscyxhKXt2YXIgbCxjLGQsdSxtPVtdLGg9aS50eXBlO2lmKCFlLl9jYWxsYmFja3NbdF0pcmV0dXJuW107Zm9yKFwia2V5dXBcIj09aCYmZih0KSYmKG49W3RdKSxsPTA7bDxlLl9jYWxsYmFja3NbdF0ubGVuZ3RoOysrbClpZihjPWUuX2NhbGxiYWNrc1t0XVtsXSwocnx8IWMuc2VxfHxvW2Muc2VxXT09Yy5sZXZlbCkmJmg9PWMuYWN0aW9uJiYoXCJrZXlwcmVzc1wiPT1oJiYhaS5tZXRhS2V5JiYhaS5jdHJsS2V5fHwoZD1uLHU9Yy5tb2RpZmllcnMsZC5zb3J0KCkuam9pbihcIixcIik9PT11LnNvcnQoKS5qb2luKFwiLFwiKSkpKXt2YXIgcD0hciYmYy5jb21ibz09cyx5PXImJmMuc2VxPT1yJiZjLmxldmVsPT1hOyhwfHx5KSYmZS5fY2FsbGJhY2tzW3RdLnNwbGljZShsLDEpLG0ucHVzaChjKX1yZXR1cm4gbX1mdW5jdGlvbiBkKHQsbixvLGkpe2Uuc3RvcENhbGxiYWNrKG4sbi50YXJnZXR8fG4uc3JjRWxlbWVudCxvLGkpfHwhMT09PXQobixvKSYmKGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQ/dC5wcmV2ZW50RGVmYXVsdCgpOnQucmV0dXJuVmFsdWU9ITF9KG4pLGZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uP3Quc3RvcFByb3BhZ2F0aW9uKCk6dC5jYW5jZWxCdWJibGU9ITB9KG4pKX1mdW5jdGlvbiB1KHQpe1wibnVtYmVyXCIhPXR5cGVvZiB0LndoaWNoJiYodC53aGljaD10LmtleUNvZGUpO3ZhciBuPXAodCk7biYmKFwia2V5dXBcIiE9dC50eXBlfHxpIT09bj9lLmhhbmRsZUtleShuLGZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiB0LnNoaWZ0S2V5JiZlLnB1c2goXCJzaGlmdFwiKSx0LmFsdEtleSYmZS5wdXNoKFwiYWx0XCIpLHQuY3RybEtleSYmZS5wdXNoKFwiY3RybFwiKSx0Lm1ldGFLZXkmJmUucHVzaChcIm1ldGFcIiksZX0odCksdCk6aT0hMSl9ZnVuY3Rpb24gbSh0LHIscyx1LGgpe2UuX2RpcmVjdE1hcFt0K1wiOlwiK3NdPXI7dmFyIGYseT0odD10LnJlcGxhY2UoL1xccysvZyxcIiBcIikpLnNwbGl0KFwiIFwiKTt5Lmxlbmd0aD4xP2Z1bmN0aW9uKHQsZSxyLHMpe2Z1bmN0aW9uIGMoZSl7cmV0dXJuIGZ1bmN0aW9uKCl7YT1lLCsrb1t0XSxjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KGwsMWUzKX19ZnVuY3Rpb24gdShlKXtkKHIsZSx0KSxcImtleXVwXCIhPT1zJiYoaT1wKGUpKSxzZXRUaW1lb3V0KGwsMTApfW9bdF09MDtmb3IodmFyIGg9MDtoPGUubGVuZ3RoOysraCl7dmFyIGY9aCsxPT09ZS5sZW5ndGg/dTpjKHN8fGIoZVtoKzFdKS5hY3Rpb24pO20oZVtoXSxmLHMsdCxoKX19KHQseSxyLHMpOihmPWIodCxzKSxlLl9jYWxsYmFja3NbZi5rZXldPWUuX2NhbGxiYWNrc1tmLmtleV18fFtdLGMoZi5rZXksZi5tb2RpZmllcnMse3R5cGU6Zi5hY3Rpb259LHUsdCxoKSxlLl9jYWxsYmFja3NbZi5rZXldW3U/XCJ1bnNoaWZ0XCI6XCJwdXNoXCJdKHtjYWxsYmFjazpyLG1vZGlmaWVyczpmLm1vZGlmaWVycyxhY3Rpb246Zi5hY3Rpb24sc2VxOnUsbGV2ZWw6aCxjb21ibzp0fSkpfWUuX2hhbmRsZUtleT1mdW5jdGlvbih0LGUsbil7dmFyIG8saT1jKHQsZSxuKSxyPXt9LHU9MCxtPSExO2ZvcihvPTA7bzxpLmxlbmd0aDsrK28paVtvXS5zZXEmJih1PU1hdGgubWF4KHUsaVtvXS5sZXZlbCkpO2ZvcihvPTA7bzxpLmxlbmd0aDsrK28paWYoaVtvXS5zZXEpe2lmKGlbb10ubGV2ZWwhPXUpY29udGludWU7bT0hMCxyW2lbb10uc2VxXT0xLGQoaVtvXS5jYWxsYmFjayxuLGlbb10uY29tYm8saVtvXS5zZXEpfWVsc2UgbXx8ZChpW29dLmNhbGxiYWNrLG4saVtvXS5jb21ibyk7dmFyIGg9XCJrZXlwcmVzc1wiPT1uLnR5cGUmJnM7bi50eXBlIT1hfHxmKHQpfHxofHxsKHIpLHM9bSYmXCJrZXlkb3duXCI9PW4udHlwZX0sZS5fYmluZE11bHRpcGxlPWZ1bmN0aW9uKHQsZSxuKXtmb3IodmFyIG89MDtvPHQubGVuZ3RoOysrbyltKHRbb10sZSxuKX0saCh0LFwia2V5cHJlc3NcIix1KSxoKHQsXCJrZXlkb3duXCIsdSksaCh0LFwia2V5dXBcIix1KX19KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Om51bGwsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9kb2N1bWVudDpudWxsKX19LGU9e307ZnVuY3Rpb24gbihvKXt2YXIgaT1lW29dO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW29dPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtvXShyLHIuZXhwb3J0cyxuKSxyLmV4cG9ydHN9bi5uPXQ9Pnt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/KCk9PnQuZGVmYXVsdDooKT0+dDtyZXR1cm4gbi5kKGUse2E6ZX0pLGV9LG4uZD0odCxlKT0+e2Zvcih2YXIgbyBpbiBlKW4ubyhlLG8pJiYhbi5vKHQsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8se2VudW1lcmFibGU6ITAsZ2V0OmVbb119KX0sbi5vPSh0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxuLnI9dD0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBvPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO24ucihvKSxuLmQobyx7Rmx1ZW50QXBwQmFyQnV0dG9uOigpPT5yLEZsdWVudEFwcEJhclNlcGFyYXRvcjooKT0+cnQsRmx1ZW50Q29tbWFuZEJhcjooKT0+aXR9KTt2YXIgdD1uKDI2OSksZT1uKDQ0MSksaT1uLm4oZSk7bGV0IHI9Y2xhc3MgZXh0ZW5kcyB0LkN1c3RvbUNvbXBvbmVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcImljb25cIixcImxhYmVsXCIsXCJtb2RpZmllclwiLFwia2V5XCIsXCJ1c2UtYWNjZW50XCJdfWdldCBpY29uKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaWNvblwiKX1zZXQgaWNvbih0KXt0aGlzLnNldEF0dHJpYnV0ZShcImljb25cIix0KSx0aGlzLnNldEljb24oKX1nZXQgbGFiZWwoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKX1zZXQgbGFiZWwodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLHQpLHRoaXMuc2V0TGFiZWwoKX1nZXQgY29tbWFuZCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImNvbW1hbmRcIil9c2V0IGNvbW1hbmQodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJjb21tYW5kXCIsdCl9Z2V0IG1vZGlmaWVyKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwibW9kaWZpZXJcIil9c2V0IG1vZGlmaWVyKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwibW9kaWZpZXJcIix0KSx0aGlzLnNldEFjY2VsZXJhdG9yKCl9Z2V0IGtleSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImtleVwiKX1zZXQga2V5KHQpe3RoaXMuc2V0QXR0cmlidXRlKFwia2V5XCIsdCksdGhpcy5zZXRBY2NlbGVyYXRvcigpfWdldCB1c2VBY2NlbnQoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIil9c2V0IHVzZUFjY2VudCh0KXt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIix0KSx0aGlzLnNldEljb24oKX1nZXQgdGl0bGUoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKX1zZXQgdGl0bGUodCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQpLHRoaXMuc2V0VGl0bGUoKX1nZXQgZGlzYWJsZWQoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX1nZXQgYnV0dG9uKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9idXR0b24pJiZ2b2lkIDAhPT10fHwodGhpcy5fYnV0dG9uPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiKSksdGhpcy5fYnV0dG9ufWdldCBpY29uU3Bhbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5faWNvblNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5faWNvblNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKSksdGhpcy5faWNvblNwYW59Z2V0IGN1c3RvbUljb25TbG90KCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jdXN0b21JY29uU3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9jdXN0b21JY29uU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RbbmFtZT1pY29uXVwiKSksdGhpcy5fY3VzdG9tSWNvblNwYW59Z2V0IGNvbnRlbnRTcGFuKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9jb250ZW50U3BhbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9jb250ZW50U3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKSx0aGlzLl9jb250ZW50U3Bhbn1nZXQgYWNjZWxlcmF0b3JTcGFuKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9hY2NlbGVyYXRvclNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5fYWNjZWxlcmF0b3JTcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmtleWJvYXJkLWFjY2VsZXJhdG9yXCIpKSx0aGlzLl9hY2NlbGVyYXRvclNwYW59Z2V0IGZvcm1hdHRlZE1vZGlmaWVyKCl7cmV0dXJuIHRoaXMubW9kaWZpZXIucmVwbGFjZShcIkNvbnRyb2xcIixcIkN0cmxcIil9Z2V0IGZvcm1hdHRlZEFjY2VsZXJhdG9yKCl7cmV0dXJuIHRoaXMubW9kaWZpZXI/dGhpcy5mb3JtYXR0ZWRNb2RpZmllcitcIitcIit0aGlzLmtleTp0aGlzLmtleX1nZXQgc3VwcG9ydGVkTW9kaWZpZXIoKXtyZXR1cm4gdGhpcy5tb2RpZmllci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJjb250cm9sXCIsXCJtb2RcIil9Z2V0IHN1cHBvcnRlZEtleSgpe3JldHVybiB0aGlzLmtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJkZWxldGVcIixcImRlbFwiKS5yZXBsYWNlKFwiK1wiLFwiPVwiKS5yZXBsYWNlKFwiZXNjYXBlXCIsXCJlc2NcIil9cmVuZGVyKCl7cmV0dXJuXCJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdidXR0b24nPlxcbiAgICAgICAgICAgICAgICA8Zmx1ZW50LXN5bWJvbC1pY29uIGNsYXNzPSdpY29uJz48L2ZsdWVudC1zeW1ib2wtaWNvbj5cXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT0naWNvbic+PC9zbG90PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY29udGVudCc+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0na2V5Ym9hcmQtYWNjZWxlcmF0b3InPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwifWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5zZXRJY29uKCksdGhpcy5zZXRMYWJlbCgpLHRoaXMuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjBcIiksdGhpcy5jdXN0b21JY29uU2xvdC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCh0PT57Y29uc3QgZT10aGlzLmN1c3RvbUljb25TbG90LmFzc2lnbmVkTm9kZXMoKSxuPWUubGVuZ3RoPjA7dGhpcy5pY29uU3Bhbi5zdHlsZS5kaXNwbGF5PW4/XCJub25lXCI6XCJpbmxpbmUtYmxvY2tcIix0aGlzLmN1c3RvbUljb25TbG90LnN0eWxlLmRpc3BsYXk9bj9cImRlZmF1bHRcIjpcIm5vbmVcIixlLmZvckVhY2goKHQ9Pnt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCh0PT57dGhpcy5jbGljaygpLHQuc3RvcFByb3BhZ2F0aW9uKCl9KSl9KSl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQpe3N3aXRjaCh0KXtjYXNlXCJsYWJlbFwiOnRoaXMuc2V0TGFiZWwoKTticmVhaztjYXNlXCJpY29uXCI6Y2FzZVwidXNlLWFjY2VudFwiOnRoaXMuc2V0SWNvbigpO2JyZWFrO2Nhc2VcIm1vZGlmaWVyXCI6Y2FzZVwia2V5XCI6dGhpcy5zZXRBY2NlbGVyYXRvcigpfX1zZXRJY29uKCl7dmFyIHQ7dGhpcy5pY29uU3Bhbi5zZXRBdHRyaWJ1dGUoXCJzeW1ib2xcIixudWxsIT09KHQ9dGhpcy5pY29uKSYmdm9pZCAwIT09dD90OlwiXCIpLHRoaXMuaWNvblNwYW4udG9nZ2xlQXR0cmlidXRlKFwidXNlLWFjY2VudFwiLHRoaXMudXNlQWNjZW50KX1zZXRMYWJlbCgpe3RoaXMuY29udGVudFNwYW4udGV4dENvbnRlbnQ9dGhpcy5sYWJlbCx0aGlzLnNldFRpdGxlKCl9c2V0QWNjZWxlcmF0b3IoKXt2YXIgdDtpZih0aGlzLmtleSl7dGhpcy5hY2NlbGVyYXRvclNwYW4udGV4dENvbnRlbnQ9bnVsbCE9PSh0PXRoaXMuZm9ybWF0dGVkQWNjZWxlcmF0b3IpJiZ2b2lkIDAhPT10P3Q6XCJcIix0aGlzLnNldFRpdGxlKCk7dmFyIGU9dGhpcy5tb2RpZmllcj90aGlzLnN1cHBvcnRlZE1vZGlmaWVyK1wiK1wiK3RoaXMuc3VwcG9ydGVkS2V5OnRoaXMuc3VwcG9ydGVkS2V5O2koKS5iaW5kKGUsKCgpPT4odGhpcy5kaXNhYmxlZHx8KHRoaXMuY2xpY2soKSx0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW52b2tlZFwiKSxzZXRUaW1lb3V0KCgoKT0+dGhpcy5idXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludm9rZWRcIikpLDE1MCkpLCExKSkpfX1zZXRUaXRsZSgpe3ZhciB0LGU7Y29uc3Qgbj10aGlzLmZvcm1hdHRlZEFjY2VsZXJhdG9yP2AoJHt0aGlzLmZvcm1hdHRlZEFjY2VsZXJhdG9yfSlgOlwiXCI7bGV0IG89bnVsbCE9PShlPW51bGwhPT0odD10aGlzLnRpdGxlKSYmdm9pZCAwIT09dD90OnRoaXMubGFiZWwpJiZ2b2lkIDAhPT1lP2U6XCJcIjt0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLGAke299ICR7bn1gKX1zZXRBY2NlbGVyYXRvcldpZHRoKHQpe3RoaXMuYWNjZWxlcmF0b3JTcGFuLnN0eWxlLndpZHRoPXQrXCJweFwifX07ci5zdHlsZXM9J1xcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiAjMDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2lzLXNlY29uZGFyeV0pIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBtYXJnaW46IDRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEJ1dHRvbiAqL1xcbiAgICAgICAgLmJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXByaW1hcnkpO1xcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5idXR0b246YWN0aXZlLFxcbiAgICAgICAgLmJ1dHRvbi5pbnZva2VkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLXN1YnRsZS10ZXJ0aWFyeSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1zZWNvbmRhcnkpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1zdWJ0bGUtc2Vjb25kYXJ5KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LWRpc2FibGVkKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF1baXMtc2Vjb25kYXJ5XSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPWJvdHRvbV06bm90KFtpcy1zZWNvbmRhcnldKSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1jb2xsYXBzZWRdOm5vdChbaXMtc2Vjb25kYXJ5XSkpIC5idXR0b24ge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmJ1dHRvbjphY3RpdmUgLmljb25bdXNlLWFjY2VudF06OnBhcnQoaWNvbiksXFxuICAgICAgICAuYnV0dG9uLmludm9rZWQgLmljb25bdXNlLWFjY2VudF06OnBhcnQoaWNvbikge1xcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlsbC1hY2NlbnQtZGVmYXVsdCksIHRyYW5zcGFyZW50IDEwJSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSAuaWNvbjo6cGFydChpY29uKSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1kaXNhYmxlZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBDdXN0b20gaWNvbiAqL1xcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKGZsdWVudC1pbWFnZS1pY29uKSB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC40OTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLyogQ29udGVudCAqL1xcbiAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFwnU2Vnb2UgVUkgVmFyaWFibGVcXCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDAsIFwib3BzelwiIDE2O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDplbXB0eSxcXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPWNvbGxhcHNlZF06bm90KFtpcy1zZWNvbmRhcnldKSkgLmNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbaXMtc2Vjb25kYXJ5XSkgLmNvbnRlbnQge1xcbiAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDAsIFwib3BzelwiIDIwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6OmJlZm9yZSxcXG4gICAgICAgIC5jb250ZW50OjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogXFwnXFwnO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OjpiZWZvcmV7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OjphZnRlcntcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogS2V5Ym9hcmQgYWNjZWxlcmF0b3IgKi9cXG4gICAgICAgIC5rZXlib2FyZC1hY2NlbGVyYXRvciB7XFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWxsLXRleHQtcHJpbWFyeSksIHRyYW5zcGFyZW50IDQwJSk7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFwnU2Vnb2UgVUkgVmFyaWFibGUgU21hbGxcXCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2lzLXNlY29uZGFyeV0pIC5rZXlib2FyZC1hY2NlbGVyYXRvciB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmtleWJvYXJkLWFjY2VsZXJhdG9yIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LWRpc2FibGVkKSAhaW1wb3J0YW50O1xcbiAgICAgICAgfVxcbiAgICAnLHI9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGkscj1hcmd1bWVudHMubGVuZ3RoLHM9cjwzP2U6bnVsbD09PW8/bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbik6bztpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlzPVJlZmxlY3QuZGVjb3JhdGUodCxlLG4sbyk7ZWxzZSBmb3IodmFyIGE9dC5sZW5ndGgtMTthPj0wO2EtLSkoaT10W2FdKSYmKHM9KHI8Mz9pKHMpOnI+Mz9pKGUsbixzKTppKGUsbikpfHxzKTtyZXR1cm4gcj4zJiZzJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHMpLHN9KFsoMCx0LmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtYXBwLWJhci1idXR0b25cIildLHIpO2NvbnN0IHM9TWF0aC5taW4sYT1NYXRoLm1heCxsPU1hdGgucm91bmQsYz1NYXRoLmZsb29yLGQ9dD0+KHt4OnQseTp0fSksdT17bGVmdDpcInJpZ2h0XCIscmlnaHQ6XCJsZWZ0XCIsYm90dG9tOlwidG9wXCIsdG9wOlwiYm90dG9tXCJ9LG09e3N0YXJ0OlwiZW5kXCIsZW5kOlwic3RhcnRcIn07ZnVuY3Rpb24gaCh0LGUsbil7cmV0dXJuIGEodCxzKGUsbikpfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoZSk6dH1mdW5jdGlvbiBmKHQpe3JldHVybiB0LnNwbGl0KFwiLVwiKVswXX1mdW5jdGlvbiB5KHQpe3JldHVybiB0LnNwbGl0KFwiLVwiKVsxXX1mdW5jdGlvbiBiKHQpe3JldHVyblwieFwiPT09dD9cInlcIjpcInhcIn1mdW5jdGlvbiBnKHQpe3JldHVyblwieVwiPT09dD9cImhlaWdodFwiOlwid2lkdGhcIn1mdW5jdGlvbiB2KHQpe3JldHVybltcInRvcFwiLFwiYm90dG9tXCJdLmluY2x1ZGVzKGYodCkpP1wieVwiOlwieFwifWZ1bmN0aW9uIHgodCl7cmV0dXJuIGIodih0KSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gdC5yZXBsYWNlKC9zdGFydHxlbmQvZywodD0+bVt0XSkpfWZ1bmN0aW9uIEModCl7cmV0dXJuIHQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csKHQ9PnVbdF0pKX1mdW5jdGlvbiBBKHQpe3JldHVybnsuLi50LHRvcDp0LnksbGVmdDp0LngscmlnaHQ6dC54K3Qud2lkdGgsYm90dG9tOnQueSt0LmhlaWdodH19ZnVuY3Rpb24gayh0LGUsbil7bGV0e3JlZmVyZW5jZTpvLGZsb2F0aW5nOml9PXQ7Y29uc3Qgcj12KGUpLHM9eChlKSxhPWcocyksbD1mKGUpLGM9XCJ5XCI9PT1yLGQ9by54K28ud2lkdGgvMi1pLndpZHRoLzIsdT1vLnkrby5oZWlnaHQvMi1pLmhlaWdodC8yLG09b1thXS8yLWlbYV0vMjtsZXQgaDtzd2l0Y2gobCl7Y2FzZVwidG9wXCI6aD17eDpkLHk6by55LWkuaGVpZ2h0fTticmVhaztjYXNlXCJib3R0b21cIjpoPXt4OmQseTpvLnkrby5oZWlnaHR9O2JyZWFrO2Nhc2VcInJpZ2h0XCI6aD17eDpvLngrby53aWR0aCx5OnV9O2JyZWFrO2Nhc2VcImxlZnRcIjpoPXt4Om8ueC1pLndpZHRoLHk6dX07YnJlYWs7ZGVmYXVsdDpoPXt4Om8ueCx5Om8ueX19c3dpdGNoKHkoZSkpe2Nhc2VcInN0YXJ0XCI6aFtzXS09bSoobiYmYz8tMToxKTticmVhaztjYXNlXCJlbmRcIjpoW3NdKz1tKihuJiZjPy0xOjEpfXJldHVybiBofWFzeW5jIGZ1bmN0aW9uIFModCxlKXt2YXIgbjt2b2lkIDA9PT1lJiYoZT17fSk7Y29uc3R7eDpvLHk6aSxwbGF0Zm9ybTpyLHJlY3RzOnMsZWxlbWVudHM6YSxzdHJhdGVneTpsfT10LHtib3VuZGFyeTpjPVwiY2xpcHBpbmdBbmNlc3RvcnNcIixyb290Qm91bmRhcnk6ZD1cInZpZXdwb3J0XCIsZWxlbWVudENvbnRleHQ6dT1cImZsb2F0aW5nXCIsYWx0Qm91bmRhcnk6bT0hMSxwYWRkaW5nOmg9MH09cChlLHQpLGY9ZnVuY3Rpb24odCl7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIHQ/ZnVuY3Rpb24odCl7cmV0dXJue3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowLC4uLnR9fSh0KTp7dG9wOnQscmlnaHQ6dCxib3R0b206dCxsZWZ0OnR9fShoKSx5PWFbbT9cImZsb2F0aW5nXCI9PT11P1wicmVmZXJlbmNlXCI6XCJmbG9hdGluZ1wiOnVdLGI9QShhd2FpdCByLmdldENsaXBwaW5nUmVjdCh7ZWxlbWVudDpudWxsPT0obj1hd2FpdChudWxsPT1yLmlzRWxlbWVudD92b2lkIDA6ci5pc0VsZW1lbnQoeSkpKXx8bj95OnkuY29udGV4dEVsZW1lbnR8fGF3YWl0KG51bGw9PXIuZ2V0RG9jdW1lbnRFbGVtZW50P3ZvaWQgMDpyLmdldERvY3VtZW50RWxlbWVudChhLmZsb2F0aW5nKSksYm91bmRhcnk6Yyxyb290Qm91bmRhcnk6ZCxzdHJhdGVneTpsfSkpLGc9XCJmbG9hdGluZ1wiPT09dT97Li4ucy5mbG9hdGluZyx4Om8seTppfTpzLnJlZmVyZW5jZSx2PWF3YWl0KG51bGw9PXIuZ2V0T2Zmc2V0UGFyZW50P3ZvaWQgMDpyLmdldE9mZnNldFBhcmVudChhLmZsb2F0aW5nKSkseD1hd2FpdChudWxsPT1yLmlzRWxlbWVudD92b2lkIDA6ci5pc0VsZW1lbnQodikpJiZhd2FpdChudWxsPT1yLmdldFNjYWxlP3ZvaWQgMDpyLmdldFNjYWxlKHYpKXx8e3g6MSx5OjF9LHc9QShyLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0P2F3YWl0IHIuY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Qoe3JlY3Q6ZyxvZmZzZXRQYXJlbnQ6dixzdHJhdGVneTpsfSk6Zyk7cmV0dXJue3RvcDooYi50b3Atdy50b3ArZi50b3ApL3gueSxib3R0b206KHcuYm90dG9tLWIuYm90dG9tK2YuYm90dG9tKS94LnksbGVmdDooYi5sZWZ0LXcubGVmdCtmLmxlZnQpL3gueCxyaWdodDoody5yaWdodC1iLnJpZ2h0K2YucmlnaHQpL3gueH19Y29uc3QgUj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9e30pLHtuYW1lOlwiZmxpcFwiLG9wdGlvbnM6dCxhc3luYyBmbihlKXt2YXIgbjtjb25zdHtwbGFjZW1lbnQ6byxtaWRkbGV3YXJlRGF0YTppLHJlY3RzOnIsaW5pdGlhbFBsYWNlbWVudDpzLHBsYXRmb3JtOmEsZWxlbWVudHM6bH09ZSx7bWFpbkF4aXM6Yz0hMCxjcm9zc0F4aXM6ZD0hMCxmYWxsYmFja1BsYWNlbWVudHM6dSxmYWxsYmFja1N0cmF0ZWd5Om09XCJiZXN0Rml0XCIsZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbjpoPVwibm9uZVwiLGZsaXBBbGlnbm1lbnQ6Yj0hMCwuLi52fT1wKHQsZSksQT1mKG8pLGs9ZihzKT09PXMsUj1hd2FpdChudWxsPT1hLmlzUlRMP3ZvaWQgMDphLmlzUlRMKGwuZmxvYXRpbmcpKSxFPXV8fChrfHwhYj9bQyhzKV06ZnVuY3Rpb24odCl7Y29uc3QgZT1DKHQpO3JldHVyblt3KHQpLGUsdyhlKV19KHMpKTt1fHxcIm5vbmVcIj09PWh8fEUucHVzaCguLi5mdW5jdGlvbih0LGUsbixvKXtjb25zdCBpPXkodCk7bGV0IHI9ZnVuY3Rpb24odCxlLG4pe2NvbnN0IG89W1wibGVmdFwiLFwicmlnaHRcIl0saT1bXCJyaWdodFwiLFwibGVmdFwiXSxyPVtcInRvcFwiLFwiYm90dG9tXCJdLHM9W1wiYm90dG9tXCIsXCJ0b3BcIl07c3dpdGNoKHQpe2Nhc2VcInRvcFwiOmNhc2VcImJvdHRvbVwiOnJldHVybiBuP2U/aTpvOmU/bzppO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOnJldHVybiBlP3I6cztkZWZhdWx0OnJldHVybltdfX0oZih0KSxcInN0YXJ0XCI9PT1uLG8pO3JldHVybiBpJiYocj1yLm1hcCgodD0+dCtcIi1cIitpKSksZSYmKHI9ci5jb25jYXQoci5tYXAodykpKSkscn0ocyxiLGgsUikpO2NvbnN0IF89W3MsLi4uRV0sTD1hd2FpdCBTKGUsdiksUD1bXTtsZXQgVD0obnVsbD09KG49aS5mbGlwKT92b2lkIDA6bi5vdmVyZmxvd3MpfHxbXTtpZihjJiZQLnB1c2goTFtBXSksZCl7Y29uc3QgdD1mdW5jdGlvbih0LGUsbil7dm9pZCAwPT09biYmKG49ITEpO2NvbnN0IG89eSh0KSxpPXgodCkscj1nKGkpO2xldCBzPVwieFwiPT09aT9vPT09KG4/XCJlbmRcIjpcInN0YXJ0XCIpP1wicmlnaHRcIjpcImxlZnRcIjpcInN0YXJ0XCI9PT1vP1wiYm90dG9tXCI6XCJ0b3BcIjtyZXR1cm4gZS5yZWZlcmVuY2Vbcl0+ZS5mbG9hdGluZ1tyXSYmKHM9QyhzKSksW3MsQyhzKV19KG8scixSKTtQLnB1c2goTFt0WzBdXSxMW3RbMV1dKX1pZihUPVsuLi5ULHtwbGFjZW1lbnQ6byxvdmVyZmxvd3M6UH1dLCFQLmV2ZXJ5KCh0PT50PD0wKSkpe3ZhciBPLE07Y29uc3QgdD0oKG51bGw9PShPPWkuZmxpcCk/dm9pZCAwOk8uaW5kZXgpfHwwKSsxLGU9X1t0XTtpZihlKXJldHVybntkYXRhOntpbmRleDp0LG92ZXJmbG93czpUfSxyZXNldDp7cGxhY2VtZW50OmV9fTtsZXQgbj1udWxsPT0oTT1ULmZpbHRlcigodD0+dC5vdmVyZmxvd3NbMF08PTApKS5zb3J0KCgodCxlKT0+dC5vdmVyZmxvd3NbMV0tZS5vdmVyZmxvd3NbMV0pKVswXSk/dm9pZCAwOk0ucGxhY2VtZW50O2lmKCFuKXN3aXRjaChtKXtjYXNlXCJiZXN0Rml0XCI6e3ZhciBCO2NvbnN0IHQ9bnVsbD09KEI9VC5tYXAoKHQ9Plt0LnBsYWNlbWVudCx0Lm92ZXJmbG93cy5maWx0ZXIoKHQ9PnQ+MCkpLnJlZHVjZSgoKHQsZSk9PnQrZSksMCldKSkuc29ydCgoKHQsZSk9PnRbMV0tZVsxXSkpWzBdKT92b2lkIDA6QlswXTt0JiYobj10KTticmVha31jYXNlXCJpbml0aWFsUGxhY2VtZW50XCI6bj1zfWlmKG8hPT1uKXJldHVybntyZXNldDp7cGxhY2VtZW50Om59fX1yZXR1cm57fX19fSxFPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx7bmFtZTpcIm9mZnNldFwiLG9wdGlvbnM6dCxhc3luYyBmbihlKXtjb25zdHt4Om4seTpvfT1lLGk9YXdhaXQgYXN5bmMgZnVuY3Rpb24odCxlKXtjb25zdHtwbGFjZW1lbnQ6bixwbGF0Zm9ybTpvLGVsZW1lbnRzOml9PXQscj1hd2FpdChudWxsPT1vLmlzUlRMP3ZvaWQgMDpvLmlzUlRMKGkuZmxvYXRpbmcpKSxzPWYobiksYT15KG4pLGw9XCJ5XCI9PT12KG4pLGM9W1wibGVmdFwiLFwidG9wXCJdLmluY2x1ZGVzKHMpPy0xOjEsZD1yJiZsPy0xOjEsdT1wKGUsdCk7bGV0e21haW5BeGlzOm0sY3Jvc3NBeGlzOmgsYWxpZ25tZW50QXhpczpifT1cIm51bWJlclwiPT10eXBlb2YgdT97bWFpbkF4aXM6dSxjcm9zc0F4aXM6MCxhbGlnbm1lbnRBeGlzOm51bGx9OnttYWluQXhpczowLGNyb3NzQXhpczowLGFsaWdubWVudEF4aXM6bnVsbCwuLi51fTtyZXR1cm4gYSYmXCJudW1iZXJcIj09dHlwZW9mIGImJihoPVwiZW5kXCI9PT1hPy0xKmI6YiksbD97eDpoKmQseTptKmN9Ont4Om0qYyx5OmgqZH19KGUsdCk7cmV0dXJue3g6bitpLngseTpvK2kueSxkYXRhOml9fX19O2Z1bmN0aW9uIF8odCl7cmV0dXJuIFQodCk/KHQubm9kZU5hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCk6XCIjZG9jdW1lbnRcIn1mdW5jdGlvbiBMKHQpe3ZhciBlO3JldHVybihudWxsPT10fHxudWxsPT0oZT10Lm93bmVyRG9jdW1lbnQpP3ZvaWQgMDplLmRlZmF1bHRWaWV3KXx8d2luZG93fWZ1bmN0aW9uIFAodCl7dmFyIGU7cmV0dXJuIG51bGw9PShlPShUKHQpP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50KXx8d2luZG93LmRvY3VtZW50KT92b2lkIDA6ZS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gVCh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIE5vZGV8fHQgaW5zdGFuY2VvZiBMKHQpLk5vZGV9ZnVuY3Rpb24gTyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBMKHQpLkVsZW1lbnR9ZnVuY3Rpb24gTSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50fHx0IGluc3RhbmNlb2YgTCh0KS5IVE1MRWxlbWVudH1mdW5jdGlvbiBCKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTaGFkb3dSb290JiYodCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3R8fHQgaW5zdGFuY2VvZiBMKHQpLlNoYWRvd1Jvb3QpfWZ1bmN0aW9uIGoodCl7Y29uc3R7b3ZlcmZsb3c6ZSxvdmVyZmxvd1g6bixvdmVyZmxvd1k6byxkaXNwbGF5Oml9PXEodCk7cmV0dXJuL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3QoZStvK24pJiYhW1wiaW5saW5lXCIsXCJjb250ZW50c1wiXS5pbmNsdWRlcyhpKX1mdW5jdGlvbiBEKHQpe3JldHVybltcInRhYmxlXCIsXCJ0ZFwiLFwidGhcIl0uaW5jbHVkZXMoXyh0KSl9ZnVuY3Rpb24gTih0KXtjb25zdCBlPUkoKSxuPXEodCk7cmV0dXJuXCJub25lXCIhPT1uLnRyYW5zZm9ybXx8XCJub25lXCIhPT1uLnBlcnNwZWN0aXZlfHwhIW4uY29udGFpbmVyVHlwZSYmXCJub3JtYWxcIiE9PW4uY29udGFpbmVyVHlwZXx8IWUmJiEhbi5iYWNrZHJvcEZpbHRlciYmXCJub25lXCIhPT1uLmJhY2tkcm9wRmlsdGVyfHwhZSYmISFuLmZpbHRlciYmXCJub25lXCIhPT1uLmZpbHRlcnx8W1widHJhbnNmb3JtXCIsXCJwZXJzcGVjdGl2ZVwiLFwiZmlsdGVyXCJdLnNvbWUoKHQ9PihuLndpbGxDaGFuZ2V8fFwiXCIpLmluY2x1ZGVzKHQpKSl8fFtcInBhaW50XCIsXCJsYXlvdXRcIixcInN0cmljdFwiLFwiY29udGVudFwiXS5zb21lKCh0PT4obi5jb250YWlufHxcIlwiKS5pbmNsdWRlcyh0KSkpfWZ1bmN0aW9uIEkoKXtyZXR1cm4hKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBDU1N8fCFDU1Muc3VwcG9ydHMpJiZDU1Muc3VwcG9ydHMoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiLFwibm9uZVwiKX1mdW5jdGlvbiBGKHQpe3JldHVybltcImh0bWxcIixcImJvZHlcIixcIiNkb2N1bWVudFwiXS5pbmNsdWRlcyhfKHQpKX1mdW5jdGlvbiBxKHQpe3JldHVybiBMKHQpLmdldENvbXB1dGVkU3R5bGUodCl9ZnVuY3Rpb24geih0KXtyZXR1cm4gTyh0KT97c2Nyb2xsTGVmdDp0LnNjcm9sbExlZnQsc2Nyb2xsVG9wOnQuc2Nyb2xsVG9wfTp7c2Nyb2xsTGVmdDp0LnBhZ2VYT2Zmc2V0LHNjcm9sbFRvcDp0LnBhZ2VZT2Zmc2V0fX1mdW5jdGlvbiBWKHQpe2lmKFwiaHRtbFwiPT09Xyh0KSlyZXR1cm4gdDtjb25zdCBlPXQuYXNzaWduZWRTbG90fHx0LnBhcmVudE5vZGV8fEIodCkmJnQuaG9zdHx8UCh0KTtyZXR1cm4gQihlKT9lLmhvc3Q6ZX1mdW5jdGlvbiBLKHQpe2NvbnN0IGU9Vih0KTtyZXR1cm4gRihlKT90Lm93bmVyRG9jdW1lbnQ/dC5vd25lckRvY3VtZW50LmJvZHk6dC5ib2R5Ok0oZSkmJmooZSk/ZTpLKGUpfWZ1bmN0aW9uIEgodCxlKXt2YXIgbjt2b2lkIDA9PT1lJiYoZT1bXSk7Y29uc3Qgbz1LKHQpLGk9bz09PShudWxsPT0obj10Lm93bmVyRG9jdW1lbnQpP3ZvaWQgMDpuLmJvZHkpLHI9TChvKTtyZXR1cm4gaT9lLmNvbmNhdChyLHIudmlzdWFsVmlld3BvcnR8fFtdLGoobyk/bzpbXSk6ZS5jb25jYXQobyxIKG8pKX1mdW5jdGlvbiBXKHQpe2NvbnN0IGU9cSh0KTtsZXQgbj1wYXJzZUZsb2F0KGUud2lkdGgpfHwwLG89cGFyc2VGbG9hdChlLmhlaWdodCl8fDA7Y29uc3QgaT1NKHQpLHI9aT90Lm9mZnNldFdpZHRoOm4scz1pP3Qub2Zmc2V0SGVpZ2h0Om8sYT1sKG4pIT09cnx8bChvKSE9PXM7cmV0dXJuIGEmJihuPXIsbz1zKSx7d2lkdGg6bixoZWlnaHQ6bywkOmF9fWZ1bmN0aW9uIFUodCl7cmV0dXJuIE8odCk/dDp0LmNvbnRleHRFbGVtZW50fWZ1bmN0aW9uICQodCl7Y29uc3QgZT1VKHQpO2lmKCFNKGUpKXJldHVybiBkKDEpO2NvbnN0IG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx7d2lkdGg6byxoZWlnaHQ6aSwkOnJ9PVcoZSk7bGV0IHM9KHI/bChuLndpZHRoKTpuLndpZHRoKS9vLGE9KHI/bChuLmhlaWdodCk6bi5oZWlnaHQpL2k7cmV0dXJuIHMmJk51bWJlci5pc0Zpbml0ZShzKXx8KHM9MSksYSYmTnVtYmVyLmlzRmluaXRlKGEpfHwoYT0xKSx7eDpzLHk6YX19Y29uc3QgWD1kKDApO2Z1bmN0aW9uIFkodCl7Y29uc3QgZT1MKHQpO3JldHVybiBJKCkmJmUudmlzdWFsVmlld3BvcnQ/e3g6ZS52aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0LHk6ZS52aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3B9Olh9ZnVuY3Rpb24gRyh0LGUsbixvKXt2b2lkIDA9PT1lJiYoZT0hMSksdm9pZCAwPT09biYmKG49ITEpO2NvbnN0IGk9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPVUodCk7bGV0IHM9ZCgxKTtlJiYobz9PKG8pJiYocz0kKG8pKTpzPSQodCkpO2NvbnN0IGE9ZnVuY3Rpb24odCxlLG4pe3JldHVybiB2b2lkIDA9PT1lJiYoZT0hMSksISghbnx8ZSYmbiE9PUwodCkpJiZlfShyLG4sbyk/WShyKTpkKDApO2xldCBsPShpLmxlZnQrYS54KS9zLngsYz0oaS50b3ArYS55KS9zLnksdT1pLndpZHRoL3MueCxtPWkuaGVpZ2h0L3MueTtpZihyKXtjb25zdCB0PUwociksZT1vJiZPKG8pP0wobyk6bztsZXQgbj10LmZyYW1lRWxlbWVudDtmb3IoO24mJm8mJmUhPT10Oyl7Y29uc3QgdD0kKG4pLGU9bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXEobiksaT1lLmxlZnQrKG4uY2xpZW50TGVmdCtwYXJzZUZsb2F0KG8ucGFkZGluZ0xlZnQpKSp0Lngscj1lLnRvcCsobi5jbGllbnRUb3ArcGFyc2VGbG9hdChvLnBhZGRpbmdUb3ApKSp0Lnk7bCo9dC54LGMqPXQueSx1Kj10LngsbSo9dC55LGwrPWksYys9cixuPUwobikuZnJhbWVFbGVtZW50fX1yZXR1cm4gQSh7d2lkdGg6dSxoZWlnaHQ6bSx4OmwseTpjfSl9ZnVuY3Rpb24gSih0KXtyZXR1cm4gRyhQKHQpKS5sZWZ0K3oodCkuc2Nyb2xsTGVmdH1mdW5jdGlvbiBRKHQsZSxuKXtsZXQgbztpZihcInZpZXdwb3J0XCI9PT1lKW89ZnVuY3Rpb24odCxlKXtjb25zdCBuPUwodCksbz1QKHQpLGk9bi52aXN1YWxWaWV3cG9ydDtsZXQgcj1vLmNsaWVudFdpZHRoLHM9by5jbGllbnRIZWlnaHQsYT0wLGw9MDtpZihpKXtyPWkud2lkdGgscz1pLmhlaWdodDtjb25zdCB0PUkoKTsoIXR8fHQmJlwiZml4ZWRcIj09PWUpJiYoYT1pLm9mZnNldExlZnQsbD1pLm9mZnNldFRvcCl9cmV0dXJue3dpZHRoOnIsaGVpZ2h0OnMseDphLHk6bH19KHQsbik7ZWxzZSBpZihcImRvY3VtZW50XCI9PT1lKW89ZnVuY3Rpb24odCl7Y29uc3QgZT1QKHQpLG49eih0KSxvPXQub3duZXJEb2N1bWVudC5ib2R5LGk9YShlLnNjcm9sbFdpZHRoLGUuY2xpZW50V2lkdGgsby5zY3JvbGxXaWR0aCxvLmNsaWVudFdpZHRoKSxyPWEoZS5zY3JvbGxIZWlnaHQsZS5jbGllbnRIZWlnaHQsby5zY3JvbGxIZWlnaHQsby5jbGllbnRIZWlnaHQpO2xldCBzPS1uLnNjcm9sbExlZnQrSih0KTtjb25zdCBsPS1uLnNjcm9sbFRvcDtyZXR1cm5cInJ0bFwiPT09cShvKS5kaXJlY3Rpb24mJihzKz1hKGUuY2xpZW50V2lkdGgsby5jbGllbnRXaWR0aCktaSkse3dpZHRoOmksaGVpZ2h0OnIseDpzLHk6bH19KFAodCkpO2Vsc2UgaWYoTyhlKSlvPWZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1HKHQsITAsXCJmaXhlZFwiPT09ZSksbz1uLnRvcCt0LmNsaWVudFRvcCxpPW4ubGVmdCt0LmNsaWVudExlZnQscj1NKHQpPyQodCk6ZCgxKTtyZXR1cm57d2lkdGg6dC5jbGllbnRXaWR0aCpyLngsaGVpZ2h0OnQuY2xpZW50SGVpZ2h0KnIueSx4Omkqci54LHk6bypyLnl9fShlLG4pO2Vsc2V7Y29uc3Qgbj1ZKHQpO289ey4uLmUseDplLngtbi54LHk6ZS55LW4ueX19cmV0dXJuIEEobyl9ZnVuY3Rpb24gWih0LGUpe2NvbnN0IG49Vih0KTtyZXR1cm4hKG49PT1lfHwhTyhuKXx8RihuKSkmJihcImZpeGVkXCI9PT1xKG4pLnBvc2l0aW9ufHxaKG4sZSkpfWZ1bmN0aW9uIHR0KHQsZSxuKXtjb25zdCBvPU0oZSksaT1QKGUpLHI9XCJmaXhlZFwiPT09bixzPUcodCwhMCxyLGUpO2xldCBhPXtzY3JvbGxMZWZ0OjAsc2Nyb2xsVG9wOjB9O2NvbnN0IGw9ZCgwKTtpZihvfHwhbyYmIXIpaWYoKFwiYm9keVwiIT09XyhlKXx8aihpKSkmJihhPXooZSkpLG8pe2NvbnN0IHQ9RyhlLCEwLHIsZSk7bC54PXQueCtlLmNsaWVudExlZnQsbC55PXQueStlLmNsaWVudFRvcH1lbHNlIGkmJihsLng9SihpKSk7cmV0dXJue3g6cy5sZWZ0K2Euc2Nyb2xsTGVmdC1sLngseTpzLnRvcCthLnNjcm9sbFRvcC1sLnksd2lkdGg6cy53aWR0aCxoZWlnaHQ6cy5oZWlnaHR9fWZ1bmN0aW9uIGV0KHQsZSl7cmV0dXJuIE0odCkmJlwiZml4ZWRcIiE9PXEodCkucG9zaXRpb24/ZT9lKHQpOnQub2Zmc2V0UGFyZW50Om51bGx9ZnVuY3Rpb24gbnQodCxlKXtjb25zdCBuPUwodCk7aWYoIU0odCkpcmV0dXJuIG47bGV0IG89ZXQodCxlKTtmb3IoO28mJkQobykmJlwic3RhdGljXCI9PT1xKG8pLnBvc2l0aW9uOylvPWV0KG8sZSk7cmV0dXJuIG8mJihcImh0bWxcIj09PV8obyl8fFwiYm9keVwiPT09XyhvKSYmXCJzdGF0aWNcIj09PXEobykucG9zaXRpb24mJiFOKG8pKT9uOm98fGZ1bmN0aW9uKHQpe2xldCBlPVYodCk7Zm9yKDtNKGUpJiYhRihlKTspe2lmKE4oZSkpcmV0dXJuIGU7ZT1WKGUpfXJldHVybiBudWxsfSh0KXx8bn1jb25zdCBvdD17Y29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3Q6ZnVuY3Rpb24odCl7bGV0e3JlY3Q6ZSxvZmZzZXRQYXJlbnQ6bixzdHJhdGVneTpvfT10O2NvbnN0IGk9TShuKSxyPVAobik7aWYobj09PXIpcmV0dXJuIGU7bGV0IHM9e3Njcm9sbExlZnQ6MCxzY3JvbGxUb3A6MH0sYT1kKDEpO2NvbnN0IGw9ZCgwKTtpZigoaXx8IWkmJlwiZml4ZWRcIiE9PW8pJiYoKFwiYm9keVwiIT09XyhuKXx8aihyKSkmJihzPXoobikpLE0obikpKXtjb25zdCB0PUcobik7YT0kKG4pLGwueD10Lngrbi5jbGllbnRMZWZ0LGwueT10Lnkrbi5jbGllbnRUb3B9cmV0dXJue3dpZHRoOmUud2lkdGgqYS54LGhlaWdodDplLmhlaWdodCphLnkseDplLngqYS54LXMuc2Nyb2xsTGVmdCphLngrbC54LHk6ZS55KmEueS1zLnNjcm9sbFRvcCphLnkrbC55fX0sZ2V0RG9jdW1lbnRFbGVtZW50OlAsZ2V0Q2xpcHBpbmdSZWN0OmZ1bmN0aW9uKHQpe2xldHtlbGVtZW50OmUsYm91bmRhcnk6bixyb290Qm91bmRhcnk6byxzdHJhdGVneTppfT10O2NvbnN0IHI9Wy4uLlwiY2xpcHBpbmdBbmNlc3RvcnNcIj09PW4/ZnVuY3Rpb24odCxlKXtjb25zdCBuPWUuZ2V0KHQpO2lmKG4pcmV0dXJuIG47bGV0IG89SCh0KS5maWx0ZXIoKHQ9Pk8odCkmJlwiYm9keVwiIT09Xyh0KSkpLGk9bnVsbDtjb25zdCByPVwiZml4ZWRcIj09PXEodCkucG9zaXRpb247bGV0IHM9cj9WKHQpOnQ7Zm9yKDtPKHMpJiYhRihzKTspe2NvbnN0IGU9cShzKSxuPU4ocyk7bnx8XCJmaXhlZFwiIT09ZS5wb3NpdGlvbnx8KGk9bnVsbCksKHI/IW4mJiFpOiFuJiZcInN0YXRpY1wiPT09ZS5wb3NpdGlvbiYmaSYmW1wiYWJzb2x1dGVcIixcImZpeGVkXCJdLmluY2x1ZGVzKGkucG9zaXRpb24pfHxqKHMpJiYhbiYmWih0LHMpKT9vPW8uZmlsdGVyKCh0PT50IT09cykpOmk9ZSxzPVYocyl9cmV0dXJuIGUuc2V0KHQsbyksb30oZSx0aGlzLl9jKTpbXS5jb25jYXQobiksb10sbD1yWzBdLGM9ci5yZWR1Y2UoKCh0LG4pPT57Y29uc3Qgbz1RKGUsbixpKTtyZXR1cm4gdC50b3A9YShvLnRvcCx0LnRvcCksdC5yaWdodD1zKG8ucmlnaHQsdC5yaWdodCksdC5ib3R0b209cyhvLmJvdHRvbSx0LmJvdHRvbSksdC5sZWZ0PWEoby5sZWZ0LHQubGVmdCksdH0pLFEoZSxsLGkpKTtyZXR1cm57d2lkdGg6Yy5yaWdodC1jLmxlZnQsaGVpZ2h0OmMuYm90dG9tLWMudG9wLHg6Yy5sZWZ0LHk6Yy50b3B9fSxnZXRPZmZzZXRQYXJlbnQ6bnQsZ2V0RWxlbWVudFJlY3RzOmFzeW5jIGZ1bmN0aW9uKHQpe2xldHtyZWZlcmVuY2U6ZSxmbG9hdGluZzpuLHN0cmF0ZWd5Om99PXQ7Y29uc3QgaT10aGlzLmdldE9mZnNldFBhcmVudHx8bnQscj10aGlzLmdldERpbWVuc2lvbnM7cmV0dXJue3JlZmVyZW5jZTp0dChlLGF3YWl0IGkobiksbyksZmxvYXRpbmc6e3g6MCx5OjAsLi4uYXdhaXQgcihuKX19fSxnZXRDbGllbnRSZWN0czpmdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuZnJvbSh0LmdldENsaWVudFJlY3RzKCkpfSxnZXREaW1lbnNpb25zOmZ1bmN0aW9uKHQpe3JldHVybiBXKHQpfSxnZXRTY2FsZTokLGlzRWxlbWVudDpPLGlzUlRMOmZ1bmN0aW9uKHQpe3JldHVyblwicnRsXCI9PT1xKHQpLmRpcmVjdGlvbn19O2xldCBpdD1jbGFzcyBleHRlbmRzIHQuQ3VzdG9tQ29tcG9uZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlPXRoaXMuc2V0Q29tbWFuZEFwcGVhcmFuY2UuYmluZCh0aGlzKSx0aGlzLmhhbmRsZVNsb3RDaGFuZ2U9dGhpcy5oYW5kbGVTbG90Q2hhbmdlLmJpbmQodGhpcyksdGhpcy5hdXRvQWRqdXN0PXRoaXMuYXV0b0FkanVzdC5iaW5kKHRoaXMpLHRoaXMuaXNNb3ZpbmdDb21tYW5kPSExLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXg9MH1zdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcImlzLW9wZW5cIixcImRlZmF1bHQtbGFiZWwtcG9zaXRpb25cIixcImN1c3RvbS1tZW51XCJdfWdldCBkZWZhdWx0TGFiZWxQb3NpdGlvbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5nZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWxhYmVsLXBvc2l0aW9uXCIpKSYmdm9pZCAwIT09dD90OlwicmlnaHRcIn1zZXQgZGVmYXVsdExhYmVsUG9zaXRpb24odCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWxhYmVsLXBvc2l0aW9uXCIsdCksdGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9Z2V0IGlzT3Blbigpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImlzLW9wZW5cIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwiaXMtb3BlblwiKX1nZXQgY3VzdG9tTWVudSgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImN1c3RvbS1tZW51XCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcImN1c3RvbS1tZW51XCIpfXNldCBjdXN0b21NZW51KHQpe3RoaXMudG9nZ2xlQXR0cmlidXRlKFwiY3VzdG9tLW1lbnVcIix0KX1nZXQgY29tbWFuZEJhcigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY29tbWFuZEJhcikmJnZvaWQgMCE9PXR8fCh0aGlzLl9jb21tYW5kQmFyPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1hbmQtYmFyXCIpKSx0aGlzLl9jb21tYW5kQmFyfWdldCBwcmltYXJ5Q29tbWFuZHNDb250YWluZXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3ByaW1hcnlDb21tYW5kc0NvbnRhaW5lcikmJnZvaWQgMCE9PXR8fCh0aGlzLl9wcmltYXJ5Q29tbWFuZHNDb250YWluZXI9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbWFyeS1jb21tYW5kc1wiKSksdGhpcy5fcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyfWdldCBwcmltYXJ5Q29tbWFuZHNTbG90KCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9wcmltYXJ5Q29tbWFuZHNTbG90KSYmdm9pZCAwIT09dHx8KHRoaXMuX3ByaW1hcnlDb21tYW5kc1Nsb3Q9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbWFyeS1jb21tYW5kcyBzbG90XCIpKSx0aGlzLl9wcmltYXJ5Q29tbWFuZHNTbG90fWdldCBtb3JlQnV0dG9uKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9tb3JlQnV0dG9uKSYmdm9pZCAwIT09dHx8KHRoaXMuX21vcmVCdXR0b249dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZS1idXR0b25cIikpLHRoaXMuX21vcmVCdXR0b259Z2V0IHNlY29uZGFyeUNvbW1hbmRzRGl2KCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9zZWNvbmRhcnlDb21tYW5kc0RpdikmJnZvaWQgMCE9PXR8fCh0aGlzLl9zZWNvbmRhcnlDb21tYW5kc0Rpdj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRhcnktY29tbWFuZHNcIikpLHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzRGl2fWdldCBzZWNvbmRhcnlDb21tYW5kc1Nsb3QoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX3NlY29uZGFyeUNvbW1hbmRzU2xvdCkmJnZvaWQgMCE9PXR8fCh0aGlzLl9zZWNvbmRhcnlDb21tYW5kc1Nsb3Q9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzbG90W25hbWU9c2Vjb25kYXJ5LWNvbW1hbmRzXVwiKSksdGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNTbG90fWdldCBjb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIpJiZ2b2lkIDAhPT10fHwodGhpcy5fY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXI9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29sbGFwc2VkLWNvbW1hbmRzXCIpKSx0aGlzLl9jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcn1nZXQgY29tbWFuZHMoKXtyZXR1cm5bLi4udGhpcy5wcmltYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkRWxlbWVudHMoKS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiByKSksLi4udGhpcy5zZWNvbmRhcnlDb21tYW5kc1Nsb3QuYXNzaWduZWRFbGVtZW50cygpLmZpbHRlcigodD0+dCBpbnN0YW5jZW9mIHIpKSwuLi50aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLmNoaWxkTm9kZXNdfXJlbmRlcigpe3JldHVyblwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29tbWFuZC1iYXInPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcmltYXJ5LWNvbW1hbmRzJz5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vcmUtYnV0dG9uJyB0aXRsZT0nU2VlIG1vcmUnPlxcbiAgICAgICAgICAgICAgICAgICAgPGZsdWVudC1zeW1ib2wtaWNvbiBzeW1ib2w9J01vcmUnIGZvbnQtc2l6ZT0nMjAnPjwvZmx1ZW50LXN5bWJvbC1pY29uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2Vjb25kYXJ5LWNvbW1hbmRzJz5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9J3NlY29uZGFyeS1jb21tYW5kcyc+PC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29sbGFwc2VkLWNvbW1hbmRzJz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwifWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5tb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCh0PT57dC5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLmN1c3RvbU1lbnU/dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm1lbnVpbnZva2VkXCIse2J1YmJsZXM6ITB9KSk6dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJpcy1vcGVuXCIsIXRoaXMuaXNPcGVuKX0pKSx0aGlzLnByaW1hcnlDb21tYW5kc1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIix0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpLHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNTbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsKHQ9PntpZih0aGlzLnNlY29uZGFyeUNvbnRhaW5lcj10aGlzLnNlY29uZGFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZE5vZGVzKClbMF0sdGhpcy5zZXRNb3JlQnV0dG9uVmlzaWJpbGl0eSgpLCF0aGlzLnNlY29uZGFyeUNvbnRhaW5lcilyZXR1cm47dmFyIGU9dGhpcy5zZWNvbmRhcnlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImZsdWVudC1hcHAtYmFyLWJ1dHRvblwiKSxuPXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmbHVlbnQtYXBwLWJhci1zZXBhcmF0b3JcIik7Y29uc3Qgbz02KkFycmF5LmZyb20oZSkucmVkdWNlKCgodCxlKT0+dC5mb3JtYXR0ZWRBY2NlbGVyYXRvci5sZW5ndGg+ZS5mb3JtYXR0ZWRBY2NlbGVyYXRvci5sZW5ndGg/dDplKSkuZm9ybWF0dGVkQWNjZWxlcmF0b3IubGVuZ3RoO2UuZm9yRWFjaCgodD0+e3QudG9nZ2xlQXR0cmlidXRlKFwiaXMtc2Vjb25kYXJ5XCIsITApLHQuc2V0QWNjZWxlcmF0b3JXaWR0aChvKX0pKSxuLmZvckVhY2goKHQ9Pnt0LnRvZ2dsZUF0dHJpYnV0ZShcImhvcml6b250YWxcIiwhMCl9KSl9KSksdGhpcy5wYXJlbnRSZXNpemVPYnNlcnZlcj1uZXcgUmVzaXplT2JzZXJ2ZXIoKCgpPT50aGlzLmF1dG9BZGp1c3QoKSkpLHRoaXMucGFyZW50UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnBhcmVudEVsZW1lbnQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKCk9Pnt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcImlzLW9wZW5cIiwhMSl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQpe3N3aXRjaCh0KXtjYXNlXCJpcy1vcGVuXCI6dGhpcy5zZXRJc09wZW4oKTticmVhaztjYXNlXCJkZWZhdWx0LWxhYmVsLXBvc2l0aW9uXCI6dGhpcy5zZXRMYWJlbFBvc2l0aW9uKCl9fWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5wYXJlbnRSZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCl9c2V0TGFiZWxQb3NpdGlvbigpe2lmKFtcImJvdHRvbVwiLFwiY29sbGFwc2VkXCIsXCJyaWdodFwiXS5pbmNsdWRlcyh0aGlzLmRlZmF1bHRMYWJlbFBvc2l0aW9uKSl7dmFyIHQ9dGhpcy5kZWZhdWx0TGFiZWxQb3NpdGlvbjtcImJvdHRvbVwiIT09dHx8dGhpcy5pc09wZW58fCh0PVwiY29sbGFwc2VkXCIpLHRoaXMucHJpbWFyeUNvbW1hbmRzP3RoaXMuc2V0Q29tbWFuZEFwcGVhcmFuY2UodCk6c2V0VGltZW91dCgoKCk9PnRoaXMuc2V0Q29tbWFuZEFwcGVhcmFuY2UodCkpLDUwKX19c2V0Q29tbWFuZEFwcGVhcmFuY2UodCl7dmFyIGU7cmV0dXJuIG51bGw9PT0oZT10aGlzLnByaW1hcnlDb21tYW5kcyl8fHZvaWQgMD09PWV8fGUuZm9yRWFjaCgoZT0+e2Uuc2V0QXR0cmlidXRlKFwiYXBwZWFyYW5jZVwiLHQpfSkpLCEhdGhpcy5wcmltYXJ5Q29tbWFuZHN9c2V0TW9yZUJ1dHRvblZpc2liaWxpdHkoKXtjb25zdCB0PXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyJiZ0aGlzLnNlY29uZGFyeUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGh8fHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO3RoaXMubW9yZUJ1dHRvbi5zdHlsZS5kaXNwbGF5PXQ/XCJmbGV4XCI6XCJub25lXCJ9c2V0SXNPcGVuKCl7dGhpcy5jb21tYW5kQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIix0aGlzLmlzT3BlbiksdGhpcy5pc09wZW4/dGhpcy5fbWVudUNsZWFudXA9ZnVuY3Rpb24odCxlLG4sbyl7dm9pZCAwPT09byYmKG89e30pO2NvbnN0e2FuY2VzdG9yU2Nyb2xsOmk9ITAsYW5jZXN0b3JSZXNpemU6cj0hMCxlbGVtZW50UmVzaXplOmw9XCJmdW5jdGlvblwiPT10eXBlb2YgUmVzaXplT2JzZXJ2ZXIsbGF5b3V0U2hpZnQ6ZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlcixhbmltYXRpb25GcmFtZTp1PSExfT1vLG09VSh0KSxoPWl8fHI/Wy4uLm0/SChtKTpbXSwuLi5IKGUpXTpbXTtoLmZvckVhY2goKHQ9PntpJiZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixuLHtwYXNzaXZlOiEwfSksciYmdC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsbil9KSk7Y29uc3QgcD1tJiZkP2Z1bmN0aW9uKHQsZSl7bGV0IG4sbz1udWxsO2NvbnN0IGk9UCh0KTtmdW5jdGlvbiByKCl7Y2xlYXJUaW1lb3V0KG4pLG8mJm8uZGlzY29ubmVjdCgpLG89bnVsbH1yZXR1cm4gZnVuY3Rpb24gbChkLHUpe3ZvaWQgMD09PWQmJihkPSExKSx2b2lkIDA9PT11JiYodT0xKSxyKCk7Y29uc3R7bGVmdDptLHRvcDpoLHdpZHRoOnAsaGVpZ2h0OmZ9PXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoZHx8ZSgpLCFwfHwhZilyZXR1cm47Y29uc3QgeT17cm9vdE1hcmdpbjotYyhoKStcInB4IFwiKy1jKGkuY2xpZW50V2lkdGgtKG0rcCkpK1wicHggXCIrLWMoaS5jbGllbnRIZWlnaHQtKGgrZikpK1wicHggXCIrLWMobSkrXCJweFwiLHRocmVzaG9sZDphKDAscygxLHUpKXx8MX07bGV0IGI9ITA7ZnVuY3Rpb24gZyh0KXtjb25zdCBlPXRbMF0uaW50ZXJzZWN0aW9uUmF0aW87aWYoZSE9PXUpe2lmKCFiKXJldHVybiBsKCk7ZT9sKCExLGUpOm49c2V0VGltZW91dCgoKCk9PntsKCExLDFlLTcpfSksMTAwKX1iPSExfXRyeXtvPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihnLHsuLi55LHJvb3Q6aS5vd25lckRvY3VtZW50fSl9Y2F0Y2godCl7bz1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZyx5KX1vLm9ic2VydmUodCl9KCEwKSxyfShtLG4pOm51bGw7bGV0IGYseT0tMSxiPW51bGw7bCYmKGI9bmV3IFJlc2l6ZU9ic2VydmVyKCh0PT57bGV0W29dPXQ7byYmby50YXJnZXQ9PT1tJiZiJiYoYi51bm9ic2VydmUoZSksY2FuY2VsQW5pbWF0aW9uRnJhbWUoeSkseT1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCgpPT57YiYmYi5vYnNlcnZlKGUpfSkpKSxuKCl9KSksbSYmIXUmJmIub2JzZXJ2ZShtKSxiLm9ic2VydmUoZSkpO2xldCBnPXU/Ryh0KTpudWxsO3JldHVybiB1JiZmdW5jdGlvbiBlKCl7Y29uc3Qgbz1HKHQpOyFnfHxvLng9PT1nLngmJm8ueT09PWcueSYmby53aWR0aD09PWcud2lkdGgmJm8uaGVpZ2h0PT09Zy5oZWlnaHR8fG4oKSxnPW8sZj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9KCksbigpLCgpPT57aC5mb3JFYWNoKCh0PT57aSYmdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbiksciYmdC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsbil9KSkscCYmcCgpLGImJmIuZGlzY29ubmVjdCgpLGI9bnVsbCx1JiZjYW5jZWxBbmltYXRpb25GcmFtZShmKX19KHRoaXMubW9yZUJ1dHRvbix0aGlzLnNlY29uZGFyeUNvbW1hbmRzRGl2LHRoaXMudXBkYXRlTWVudVBvc2l0aW9uLmJpbmQodGhpcykpOnRoaXMuX21lbnVDbGVhbnVwJiZ0aGlzLl9tZW51Q2xlYW51cCgpLHRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfWhhbmRsZVNsb3RDaGFuZ2UoKXtjb25zdCB0PXRoaXMucHJpbWFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZE5vZGVzKCk7aWYodGhpcy5wcmltYXJ5Q29tbWFuZHM9dC5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmXCJGTFVFTlQtQVBQLUJBUi1CVVRUT05cIj09PXQubm9kZU5hbWUpKSwhdGhpcy5pc01vdmluZ0NvbW1hbmQpe3RoaXMuc3R5bGUub3BhY2l0eT1cIjBcIix0aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlPXRoaXMucHJpbWFyeUNvbW1hbmRzLm1hcCgodD0+KHtwYXJlbnQ6dC5wYXJlbnRFbGVtZW50LHNlbGY6dCxwcmV2aW91czp0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsYm91bmRzOnQuZ2V0Q2xpZW50UmVjdHMoKVswXS5yaWdodC10aGlzLmdldENsaWVudFJlY3RzKClbMF0ubGVmdH0pKSksdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleD10aGlzLnByaW1hcnlDb21tYW5kcy5sZW5ndGgtMTtjb25zdCB0PXNldEludGVydmFsKCgoKT0+e3RoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmUmJihjbGVhckludGVydmFsKHQpLHRoaXMucHJpbWFyeUNvbW1hbmRzU3RvcmUuZm9yRWFjaCh0aGlzLmF1dG9BZGp1c3QpLHRoaXMuc2V0TW9yZUJ1dHRvblZpc2liaWxpdHkoKSx0aGlzLnN0eWxlLm9wYWNpdHk9XCIxXCIpfSksMTApfXRoaXMuaXNNb3ZpbmdDb21tYW5kPSExLHRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfWF1dG9BZGp1c3QoKXt2YXIgdDtjb25zdCBlPW51bGwhPT0odD10aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlKSYmdm9pZCAwIT09dD90OltdO2lmKDA9PT1lLmxlbmd0aClyZXR1cm47Y29uc3Qgbj10aGlzLnBhcmVudEVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS53aWR0aC0odGhpcy5nZXRMZWZ0KCkrNDcrMTIpLG89dGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleCxpPU1hdGgubWluKGUubGVuZ3RoLTEsbysxKSxyPWVbb10scz1lW2ldO28+PTAmJnIuYm91bmRzPm4mJih0aGlzLm1vdmVDb21tYW5kcyhyLnNlbGYsdGhpcyx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4LT0xLG8+MCYmXCJGTFVFTlQtQVBQLUJBUi1TRVBBUkFUT1JcIj09PXIucHJldmlvdXMubm9kZU5hbWUmJnRoaXMubW92ZUNvbW1hbmRzKHIucHJldmlvdXMsdGhpcyx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKSksaSE9PW8mJnMuYm91bmRzPG4mJihpPjAmJlwiRkxVRU5ULUFQUC1CQVItU0VQQVJBVE9SXCI9PT1zLnByZXZpb3VzLm5vZGVOYW1lJiZ0aGlzLm1vdmVDb21tYW5kcyhzLnByZXZpb3VzLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIsdGhpcyksdGhpcy5tb3ZlQ29tbWFuZHMocy5zZWxmLHRoaXMuY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIsdGhpcyksdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleD1pKX1nZXRMZWZ0KCl7aWYoIXRoaXMucHJldmlvdXNFbGVtZW50U2libGluZylyZXR1cm4gMDtjb25zdCB0PXRoaXMucGFyZW50RWxlbWVudC5nZXRDbGllbnRSZWN0cygpWzBdLmxlZnQ7cmV0dXJuIHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRDbGllbnRSZWN0cygpWzBdLnJpZ2h0LXR9bW92ZUNvbW1hbmRzKHQsZSxuKXt2YXIgbztjb25zdCBpPWU9PT10aGlzO2lmKHRoaXMuaXNNb3ZpbmdDb21tYW5kPSEwLGUucmVtb3ZlQ2hpbGQodCksaSl7Y29uc3QgZT1uLmZpcnN0Q2hpbGQ7bi5pbnNlcnRCZWZvcmUodCxlKX1lbHNlIG4uYXBwZW5kQ2hpbGQodCk7dmFyIHI9e2J1YmJsZXM6ITAsZGV0YWlsOnt0eXBlOnQubm9kZU5hbWUsY29tbWFuZDpudWxsIT09KG89dC5kYXRhc2V0LmNvbW1hbmQpJiZ2b2lkIDAhPT1vP286bnVsbCxjb2xsYXBzZWQ6aX19LHM9bmV3IEN1c3RvbUV2ZW50KFwiY29tbWFuZG1vdmVkXCIscik7dGhpcy5kaXNwYXRjaEV2ZW50KHMpLHRoaXMudG9nZ2xlQXR0cmlidXRlcyh0LGkpLHRoaXMuc2V0TW9yZUJ1dHRvblZpc2liaWxpdHkoKX11cGRhdGVNZW51UG9zaXRpb24oKXt2YXIgdDsoKHQsZSxuKT0+e2NvbnN0IG89bmV3IE1hcCxpPXtwbGF0Zm9ybTpvdCwuLi5ufSxyPXsuLi5pLnBsYXRmb3JtLF9jOm99O3JldHVybihhc3luYyh0LGUsbik9Pntjb25zdHtwbGFjZW1lbnQ6bz1cImJvdHRvbVwiLHN0cmF0ZWd5Omk9XCJhYnNvbHV0ZVwiLG1pZGRsZXdhcmU6cj1bXSxwbGF0Zm9ybTpzfT1uLGE9ci5maWx0ZXIoQm9vbGVhbiksbD1hd2FpdChudWxsPT1zLmlzUlRMP3ZvaWQgMDpzLmlzUlRMKGUpKTtsZXQgYz1hd2FpdCBzLmdldEVsZW1lbnRSZWN0cyh7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZSxzdHJhdGVneTppfSkse3g6ZCx5OnV9PWsoYyxvLGwpLG09byxoPXt9LHA9MDtmb3IobGV0IG49MDtuPGEubGVuZ3RoO24rKyl7Y29uc3R7bmFtZTpyLGZuOmZ9PWFbbl0se3g6eSx5OmIsZGF0YTpnLHJlc2V0OnZ9PWF3YWl0IGYoe3g6ZCx5OnUsaW5pdGlhbFBsYWNlbWVudDpvLHBsYWNlbWVudDptLHN0cmF0ZWd5OmksbWlkZGxld2FyZURhdGE6aCxyZWN0czpjLHBsYXRmb3JtOnMsZWxlbWVudHM6e3JlZmVyZW5jZTp0LGZsb2F0aW5nOmV9fSk7ZD1udWxsIT15P3k6ZCx1PW51bGwhPWI/Yjp1LGg9ey4uLmgsW3JdOnsuLi5oW3JdLC4uLmd9fSx2JiZwPD01MCYmKHArKyxcIm9iamVjdFwiPT10eXBlb2YgdiYmKHYucGxhY2VtZW50JiYobT12LnBsYWNlbWVudCksdi5yZWN0cyYmKGM9ITA9PT12LnJlY3RzP2F3YWl0IHMuZ2V0RWxlbWVudFJlY3RzKHtyZWZlcmVuY2U6dCxmbG9hdGluZzplLHN0cmF0ZWd5Oml9KTp2LnJlY3RzKSwoe3g6ZCx5OnV9PWsoYyxtLGwpKSksbj0tMSl9cmV0dXJue3g6ZCx5OnUscGxhY2VtZW50Om0sc3RyYXRlZ3k6aSxtaWRkbGV3YXJlRGF0YTpofX0pKHQsZSx7Li4uaSxwbGF0Zm9ybTpyfSl9KSh0aGlzLm1vcmVCdXR0b24sdGhpcy5zZWNvbmRhcnlDb21tYW5kc0Rpdix7cGxhY2VtZW50OlwiYm90dG9tLWVuZFwiLG1pZGRsZXdhcmU6W0UoMTYpLFIoKSwodm9pZCAwPT09dCYmKHQ9e30pLHtuYW1lOlwic2hpZnRcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7Y29uc3R7eDpuLHk6byxwbGFjZW1lbnQ6aX09ZSx7bWFpbkF4aXM6cj0hMCxjcm9zc0F4aXM6cz0hMSxsaW1pdGVyOmE9e2ZuOnQ9PntsZXR7eDplLHk6bn09dDtyZXR1cm57eDplLHk6bn19fSwuLi5sfT1wKHQsZSksYz17eDpuLHk6b30sZD1hd2FpdCBTKGUsbCksdT12KGYoaSkpLG09Yih1KTtsZXQgeT1jW21dLGc9Y1t1XTtpZihyKXtjb25zdCB0PVwieVwiPT09bT9cImJvdHRvbVwiOlwicmlnaHRcIjt5PWgoeStkW1wieVwiPT09bT9cInRvcFwiOlwibGVmdFwiXSx5LHktZFt0XSl9aWYocyl7Y29uc3QgdD1cInlcIj09PXU/XCJib3R0b21cIjpcInJpZ2h0XCI7Zz1oKGcrZFtcInlcIj09PXU/XCJ0b3BcIjpcImxlZnRcIl0sZyxnLWRbdF0pfWNvbnN0IHg9YS5mbih7Li4uZSxbbV06eSxbdV06Z30pO3JldHVybnsuLi54LGRhdGE6e3g6eC54LW4seTp4Lnktb319fX0pXX0pLnRoZW4oKCh7eDp0LHk6ZX0pPT57T2JqZWN0LmFzc2lnbih0aGlzLnNlY29uZGFyeUNvbW1hbmRzRGl2LnN0eWxlLHtsZWZ0OmAke3R9cHhgLHRvcDpgJHtlfXB4YH0pfSkpfXRvZ2dsZUF0dHJpYnV0ZXModCxlKXtsZXQgbjtzd2l0Y2godC5ub2RlTmFtZSl7Y2FzZVwiRkxVRU5ULUFQUC1CQVItQlVUVE9OXCI6bj1cImlzLXNlY29uZGFyeVwiO2JyZWFrO2Nhc2VcIkZMVUVOVC1BUFAtQkFSLVNFUEFSQVRPUlwiOm49XCJob3Jpem9udGFsXCJ9dC50b2dnbGVBdHRyaWJ1dGUobixlKX19O2l0LnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbW1hbmQtYmFyIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmltYXJ5LWNvbW1hbmRzIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmltYXJ5LWNvbW1hbmRzOm5vdCg6ZW1wdHkpIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEJ1dHRvbiAqL1xcbiAgICAgICAgLm1vcmUtYnV0dG9uIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtcHJpbWFyeSk7XFxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAzcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5tb3JlLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1zdWJ0bGUtc2Vjb25kYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLm1vcmUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1zdWJ0bGUtdGVydGlhcnkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtc2Vjb25kYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLm1vcmUtYnV0dG9uIGZsdWVudC1zeW1ib2wtaWNvbiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIFNlY29uZGFyeSBjb21tYW5kcyAqL1xcbiAgICAgICAgLnNlY29uZGFyeS1jb21tYW5kcyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1maWxsLW1pY2EtYmFzZSk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvciwgbHVtaW5vc2l0eTtcXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMDBweCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwMHB4KTtcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1zdHJva2UtY2FyZC1kZWZhdWx0KTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IHZhcigtLXNoYWRvdy1mbHlvdXQpO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb21tYW5kLWJhci5hY3RpdmUgLnNlY29uZGFyeS1jb21tYW5kcyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb2xsYXBzZWQtY29tbWFuZHM6bm90KDplbXB0eSkge1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1zdHJva2UtZGl2aWRlci1kZWZhdWx0KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb2xsYXBzZWQtY29tbWFuZHMgZmx1ZW50LWFwcC1iYXItc2VwYXJhdG9yOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICBcIixpdD1mdW5jdGlvbih0LGUsbixvKXt2YXIgaSxyPWFyZ3VtZW50cy5sZW5ndGgscz1yPDM/ZTpudWxsPT09bz9vPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTpvO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsbixvKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xO2E+PTA7YS0tKShpPXRbYV0pJiYocz0ocjwzP2kocyk6cj4zP2koZSxuLHMpOmkoZSxuKSl8fHMpO3JldHVybiByPjMmJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4scyksc30oWygwLHQuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1jb21tYW5kLWJhclwiKV0saXQpO2xldCBydD1jbGFzcyBleHRlbmRzIHQuQ3VzdG9tQ29tcG9uZW50e3JlbmRlcigpe3JldHVyblwiXCJ9fTtydC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJva2UtZGl2aWRlci1kZWZhdWx0KTtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICB3aWR0aDogMXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2hvcml6b250YWxdKSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICBcIixydD1mdW5jdGlvbih0LGUsbixvKXt2YXIgaSxyPWFyZ3VtZW50cy5sZW5ndGgscz1yPDM/ZTpudWxsPT09bz9vPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTpvO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsbixvKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xO2E+PTA7YS0tKShpPXRbYV0pJiYocz0ocjwzP2kocyk6cj4zP2koZSxuLHMpOmkoZSxuKSl8fHMpO3JldHVybiByPjMmJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4scyksc30oWygwLHQuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1hcHAtYmFyLXNlcGFyYXRvclwiKV0scnQpfSkoKSxvfSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudC5qcy5tYXAiLCIhZnVuY3Rpb24oZSxhKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1hKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZsdWVudEljb25FbGVtZW50Q29tcG9uZW50PWEoKTplLkZsdWVudEljb25FbGVtZW50Q29tcG9uZW50PWEoKX0oc2VsZiwoKCk9PigoKT0+e3ZhciBlPXsyNjk6ZT0+e3ZhciBhO3NlbGYsYT0oKT0+KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KGEsbik9Pntmb3IodmFyIGwgaW4gbillLm8obixsKSYmIWUubyhhLGwpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxsLHtlbnVtZXJhYmxlOiEwLGdldDpuW2xdfSl9LG86KGUsYSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGEpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSxhPXt9O2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGZ1bmN0aW9uKGEpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoZSxhKX19ZS5yKGEpLGUuZChhLHtDdXN0b21Db21wb25lbnQ6KCk9PmwsY3VzdG9tQ29tcG9uZW50OigpPT5ufSk7Y2xhc3MgbCBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKTtjb25zdCBlPXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoZS5jb250ZW50LmNsb25lTm9kZSghMCkpLHRoaXMuc2hhZG93Um9vdC5hcHBlbmQoLi4udGhpcy52aXJ0dWFsRE9NKX1yZXNvbHZlVGVtcGxhdGUoKXtjb25zdCBlPXRoaXMuY29uc3RydWN0b3IubmFtZTtyZXR1cm4gZSBpbiBsLl90ZW1wbGF0ZXM/bC5fdGVtcGxhdGVzW2VdOnRoaXMuY3JlYXRlVGVtcGxhdGUoZSl9Y3JlYXRlVGVtcGxhdGUoZSl7dmFyIGE7Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksZz1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIG4uaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KGE9Zy5zdHlsZXMpJiZ2b2lkIDAhPT1hP2E6XCJcIn08L3N0eWxlPmAsbC5fdGVtcGxhdGVzW2VdPW4sbn1nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlcigpe3Rocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIil9fXJldHVybiBsLl90ZW1wbGF0ZXM9e30sYX0pKCksZS5leHBvcnRzPWEoKX19LGE9e307ZnVuY3Rpb24gbihsKXt2YXIgZz1hW2xdO2lmKHZvaWQgMCE9PWcpcmV0dXJuIGcuZXhwb3J0czt2YXIgcD1hW2xdPXtleHBvcnRzOnt9fTtyZXR1cm4gZVtsXShwLHAuZXhwb3J0cyxuKSxwLmV4cG9ydHN9bi5kPShlLGEpPT57Zm9yKHZhciBsIGluIGEpbi5vKGEsbCkmJiFuLm8oZSxsKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbCx7ZW51bWVyYWJsZTohMCxnZXQ6YVtsXX0pfSxuLm89KGUsYSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGEpLG4ucj1lPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGw9e307cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7bi5yKGwpLG4uZChsLHtGbHVlbnRGb250SWNvbjooKT0+cCxGbHVlbnRJbWFnZUljb246KCk9PnQsRmx1ZW50U3ltYm9sSWNvbjooKT0+aH0pO3ZhciBlPW4oMjY5KSxhPWZ1bmN0aW9uKGUsYSxuLGwpe3ZhciBnLHA9YXJndW1lbnRzLmxlbmd0aCxoPXA8Mz9hOm51bGw9PT1sP2w9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLG4pOmw7aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpaD1SZWZsZWN0LmRlY29yYXRlKGUsYSxuLGwpO2Vsc2UgZm9yKHZhciB0PWUubGVuZ3RoLTE7dD49MDt0LS0pKGc9ZVt0XSkmJihoPShwPDM/ZyhoKTpwPjM/ZyhhLG4saCk6ZyhhLG4pKXx8aCk7cmV0dXJuIHA+MyYmaCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsbixoKSxofTtjb25zdCBnPVt7bmFtZTpcIkdsb2JhbE5hdkJ1dHRvblwiLGdseXBoOlwiZTcwMFwifSx7bmFtZTpcIldpZmlcIixnbHlwaDpcImU3MDFcIn0se25hbWU6XCJCbHVldG9vdGhcIixnbHlwaDpcImU3MDJcIn0se25hbWU6XCJDb25uZWN0XCIsZ2x5cGg6XCJlNzAzXCJ9LHtuYW1lOlwiSW50ZXJuZXRTaGFyaW5nXCIsZ2x5cGg6XCJlNzA0XCJ9LHtuYW1lOlwiVlBOXCIsZ2x5cGg6XCJlNzA1XCJ9LHtuYW1lOlwiQnJpZ2h0bmVzc1wiLGdseXBoOlwiZTcwNlwifSx7bmFtZTpcIk1hcFBpblwiLGdseXBoOlwiZTcwN1wifSx7bmFtZTpcIlF1aWV0SG91cnNcIixnbHlwaDpcImU3MDhcIn0se25hbWU6XCJBaXJwbGFuZVwiLGdseXBoOlwiZTcwOVwifSx7bmFtZTpcIlRhYmxldFwiLGdseXBoOlwiZTcwYVwifSx7bmFtZTpcIlF1aWNrTm90ZVwiLGdseXBoOlwiZTcwYlwifSx7bmFtZTpcIlJlbWVtYmVyZWREZXZpY2VcIixnbHlwaDpcImU3MGNcIn0se25hbWU6XCJDaGV2cm9uRG93blwiLGdseXBoOlwiZTcwZFwifSx7bmFtZTpcIkNoZXZyb25VcFwiLGdseXBoOlwiZTcwZVwifSx7bmFtZTpcIkVkaXRcIixnbHlwaDpcImU3MGZcIn0se25hbWU6XCJBZGRcIixnbHlwaDpcImU3MTBcIn0se25hbWU6XCJDYW5jZWxcIixnbHlwaDpcImU3MTFcIn0se25hbWU6XCJNb3JlXCIsZ2x5cGg6XCJlNzEyXCJ9LHtuYW1lOlwiU2V0dGluZ3NcIixnbHlwaDpcImU3MTNcIn0se25hbWU6XCJWaWRlb1wiLGdseXBoOlwiZTcxNFwifSx7bmFtZTpcIk1haWxcIixnbHlwaDpcImU3MTVcIn0se25hbWU6XCJQZW9wbGVcIixnbHlwaDpcImU3MTZcIn0se25hbWU6XCJQaG9uZVwiLGdseXBoOlwiZTcxN1wifSx7bmFtZTpcIlBpblwiLGdseXBoOlwiZTcxOFwifSx7bmFtZTpcIlNob3BcIixnbHlwaDpcImU3MTlcIn0se25hbWU6XCJTdG9wXCIsZ2x5cGg6XCJlNzFhXCJ9LHtuYW1lOlwiTGlua1wiLGdseXBoOlwiZTcxYlwifSx7bmFtZTpcIkZpbHRlclwiLGdseXBoOlwiZTcxY1wifSx7bmFtZTpcIkFsbEFwcHNcIixnbHlwaDpcImU3MWRcIn0se25hbWU6XCJab29tXCIsZ2x5cGg6XCJlNzFlXCJ9LHtuYW1lOlwiWm9vbU91dFwiLGdseXBoOlwiZTcxZlwifSx7bmFtZTpcIk1pY3JvcGhvbmVcIixnbHlwaDpcImU3MjBcIn0se25hbWU6XCJTZWFyY2hcIixnbHlwaDpcImU3MjFcIn0se25hbWU6XCJDYW1lcmFcIixnbHlwaDpcImU3MjJcIn0se25hbWU6XCJBdHRhY2hcIixnbHlwaDpcImU3MjNcIn0se25hbWU6XCJTZW5kXCIsZ2x5cGg6XCJlNzI0XCJ9LHtuYW1lOlwiU2VuZEZpbGxcIixnbHlwaDpcImU3MjVcIn0se25hbWU6XCJXYWxrU29saWRcIixnbHlwaDpcImU3MjZcIn0se25hbWU6XCJJblByaXZhdGVcIixnbHlwaDpcImU3MjdcIn0se25hbWU6XCJGYXZvcml0ZUxpc3RcIixnbHlwaDpcImU3MjhcIn0se25hbWU6XCJQYWdlU29saWRcIixnbHlwaDpcImU3MjlcIn0se25hbWU6XCJGb3J3YXJkXCIsZ2x5cGg6XCJlNzJhXCJ9LHtuYW1lOlwiQmFja1wiLGdseXBoOlwiZTcyYlwifSx7bmFtZTpcIlJlZnJlc2hcIixnbHlwaDpcImU3MmNcIn0se25hbWU6XCJTaGFyZVwiLGdseXBoOlwiZTcyZFwifSx7bmFtZTpcIkxvY2tcIixnbHlwaDpcImU3MmVcIn0se25hbWU6XCJSZXBvcnRIYWNrZWRcIixnbHlwaDpcImU3MzBcIn0se25hbWU6XCJFTUlcIixnbHlwaDpcImU3MzFcIn0se25hbWU6XCJGYXZvcml0ZVN0YXJcIixnbHlwaDpcImU3MzRcIn0se25hbWU6XCJGYXZvcml0ZVN0YXJGaWxsXCIsZ2x5cGg6XCJlNzM1XCJ9LHtuYW1lOlwiUmVhZGluZ01vZGVcIixnbHlwaDpcImU3MzZcIn0se25hbWU6XCJGYXZpY29uXCIsZ2x5cGg6XCJlNzM3XCJ9LHtuYW1lOlwiUmVtb3ZlXCIsZ2x5cGg6XCJlNzM4XCJ9LHtuYW1lOlwiQ2hlY2tib3hcIixnbHlwaDpcImU3MzlcIn0se25hbWU6XCJDaGVja2JveENvbXBvc2l0ZVwiLGdseXBoOlwiZTczYVwifSx7bmFtZTpcIkNoZWNrYm94RmlsbFwiLGdseXBoOlwiZTczYlwifSx7bmFtZTpcIkNoZWNrYm94SW5kZXRlcm1pbmF0ZVwiLGdseXBoOlwiZTczY1wifSx7bmFtZTpcIkNoZWNrYm94Q29tcG9zaXRlUmV2ZXJzZWRcIixnbHlwaDpcImU3M2RcIn0se25hbWU6XCJDaGVja01hcmtcIixnbHlwaDpcImU3M2VcIn0se25hbWU6XCJCYWNrVG9XaW5kb3dcIixnbHlwaDpcImU3M2ZcIn0se25hbWU6XCJGdWxsU2NyZWVuXCIsZ2x5cGg6XCJlNzQwXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hMYXJnZXJcIixnbHlwaDpcImU3NDFcIn0se25hbWU6XCJSZXNpemVUb3VjaFNtYWxsZXJcIixnbHlwaDpcImU3NDJcIn0se25hbWU6XCJSZXNpemVNb3VzZVNtYWxsXCIsZ2x5cGg6XCJlNzQzXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VNZWRpdW1cIixnbHlwaDpcImU3NDRcIn0se25hbWU6XCJSZXNpemVNb3VzZVdpZGVcIixnbHlwaDpcImU3NDVcIn0se25hbWU6XCJSZXNpemVNb3VzZVRhbGxcIixnbHlwaDpcImU3NDZcIn0se25hbWU6XCJSZXNpemVNb3VzZUxhcmdlXCIsZ2x5cGg6XCJlNzQ3XCJ9LHtuYW1lOlwiU3dpdGNoVXNlclwiLGdseXBoOlwiZTc0OFwifSx7bmFtZTpcIlByaW50XCIsZ2x5cGg6XCJlNzQ5XCJ9LHtuYW1lOlwiVXBcIixnbHlwaDpcImU3NGFcIn0se25hbWU6XCJEb3duXCIsZ2x5cGg6XCJlNzRiXCJ9LHtuYW1lOlwiT0VNXCIsZ2x5cGg6XCJlNzRjXCJ9LHtuYW1lOlwiRGVsZXRlXCIsZ2x5cGg6XCJlNzRkXCJ9LHtuYW1lOlwiU2F2ZVwiLGdseXBoOlwiZTc0ZVwifSx7bmFtZTpcIk11dGVcIixnbHlwaDpcImU3NGZcIn0se25hbWU6XCJCYWNrU3BhY2VRV0VSVFlcIixnbHlwaDpcImU3NTBcIn0se25hbWU6XCJSZXR1cm5LZXlcIixnbHlwaDpcImU3NTFcIn0se25hbWU6XCJVcEFycm93U2hpZnRLZXlcIixnbHlwaDpcImU3NTJcIn0se25hbWU6XCJDbG91ZFwiLGdseXBoOlwiZTc1M1wifSx7bmFtZTpcIkZsYXNobGlnaHRcIixnbHlwaDpcImU3NTRcIn0se25hbWU6XCJSb3RhdGlvbkxvY2tcIixnbHlwaDpcImU3NTVcIn0se25hbWU6XCJDb21tYW5kUHJvbXB0XCIsZ2x5cGg6XCJlNzU2XCJ9LHtuYW1lOlwiU0lQTW92ZVwiLGdseXBoOlwiZTc1OVwifSx7bmFtZTpcIlNJUFVuZG9ja1wiLGdseXBoOlwiZTc1YVwifSx7bmFtZTpcIlNJUFJlZG9ja1wiLGdseXBoOlwiZTc1YlwifSx7bmFtZTpcIkVyYXNlVG9vbFwiLGdseXBoOlwiZTc1Y1wifSx7bmFtZTpcIlVuZGVyc2NvcmVTcGFjZVwiLGdseXBoOlwiZTc1ZFwifSx7bmFtZTpcIkdyaXBwZXJUb29sXCIsZ2x5cGg6XCJlNzVlXCJ9LHtuYW1lOlwiRGlhbHBhZFwiLGdseXBoOlwiZTc1ZlwifSx7bmFtZTpcIlBhZ2VMZWZ0XCIsZ2x5cGg6XCJlNzYwXCJ9LHtuYW1lOlwiUGFnZVJpZ2h0XCIsZ2x5cGg6XCJlNzYxXCJ9LHtuYW1lOlwiTXVsdGlTZWxlY3RcIixnbHlwaDpcImU3NjJcIn0se25hbWU6XCJLZXlib2FyZExlZnRIYW5kZWRcIixnbHlwaDpcImU3NjNcIn0se25hbWU6XCJLZXlib2FyZFJpZ2h0SGFuZGVkXCIsZ2x5cGg6XCJlNzY0XCJ9LHtuYW1lOlwiS2V5Ym9hcmRDbGFzc2ljXCIsZ2x5cGg6XCJlNzY1XCJ9LHtuYW1lOlwiS2V5Ym9hcmRTcGxpdFwiLGdseXBoOlwiZTc2NlwifSx7bmFtZTpcIlZvbHVtZVwiLGdseXBoOlwiZTc2N1wifSx7bmFtZTpcIlBsYXlcIixnbHlwaDpcImU3NjhcIn0se25hbWU6XCJQYXVzZVwiLGdseXBoOlwiZTc2OVwifSx7bmFtZTpcIkNoZXZyb25MZWZ0XCIsZ2x5cGg6XCJlNzZiXCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0XCIsZ2x5cGg6XCJlNzZjXCJ9LHtuYW1lOlwiSW5raW5nVG9vbFwiLGdseXBoOlwiZTc2ZFwifSx7bmFtZTpcIkVtb2ppMlwiLGdseXBoOlwiZTc2ZVwifSx7bmFtZTpcIkdyaXBwZXJCYXJIb3Jpem9udGFsXCIsZ2x5cGg6XCJlNzZmXCJ9LHtuYW1lOlwiU3lzdGVtXCIsZ2x5cGg6XCJlNzcwXCJ9LHtuYW1lOlwiUGVyc29uYWxpemVcIixnbHlwaDpcImU3NzFcIn0se25hbWU6XCJEZXZpY2VzXCIsZ2x5cGg6XCJlNzcyXCJ9LHtuYW1lOlwiU2VhcmNoQW5kQXBwc1wiLGdseXBoOlwiZTc3M1wifSx7bmFtZTpcIkdsb2JlXCIsZ2x5cGg6XCJlNzc0XCJ9LHtuYW1lOlwiVGltZUxhbmd1YWdlXCIsZ2x5cGg6XCJlNzc1XCJ9LHtuYW1lOlwiRWFzZU9mQWNjZXNzXCIsZ2x5cGg6XCJlNzc2XCJ9LHtuYW1lOlwiVXBkYXRlUmVzdG9yZVwiLGdseXBoOlwiZTc3N1wifSx7bmFtZTpcIkhhbmdVcFwiLGdseXBoOlwiZTc3OFwifSx7bmFtZTpcIkNvbnRhY3RJbmZvXCIsZ2x5cGg6XCJlNzc5XCJ9LHtuYW1lOlwiVW5waW5cIixnbHlwaDpcImU3N2FcIn0se25hbWU6XCJDb250YWN0XCIsZ2x5cGg6XCJlNzdiXCJ9LHtuYW1lOlwiTWVtb1wiLGdseXBoOlwiZTc3Y1wifSx7bmFtZTpcIkluY29taW5nQ2FsbFwiLGdseXBoOlwiZTc3ZVwifSx7bmFtZTpcIlBhc3RlXCIsZ2x5cGg6XCJlNzdmXCJ9LHtuYW1lOlwiUGhvbmVCb29rXCIsZ2x5cGg6XCJlNzgwXCJ9LHtuYW1lOlwiTEVETGlnaHRcIixnbHlwaDpcImU3ODFcIn0se25hbWU6XCJFcnJvclwiLGdseXBoOlwiZTc4M1wifSx7bmFtZTpcIkdyaXBwZXJCYXJWZXJ0aWNhbFwiLGdseXBoOlwiZTc4NFwifSx7bmFtZTpcIlVubG9ja1wiLGdseXBoOlwiZTc4NVwifSx7bmFtZTpcIlNsaWRlc2hvd1wiLGdseXBoOlwiZTc4NlwifSx7bmFtZTpcIkNhbGVuZGFyXCIsZ2x5cGg6XCJlNzg3XCJ9LHtuYW1lOlwiR3JpcHBlclJlc2l6ZVwiLGdseXBoOlwiZTc4OFwifSx7bmFtZTpcIk1lZ2FwaG9uZVwiLGdseXBoOlwiZTc4OVwifSx7bmFtZTpcIlRyaW1cIixnbHlwaDpcImU3OGFcIn0se25hbWU6XCJOZXdXaW5kb3dcIixnbHlwaDpcImU3OGJcIn0se25hbWU6XCJTYXZlTG9jYWxcIixnbHlwaDpcImU3OGNcIn0se25hbWU6XCJDb2xvclwiLGdseXBoOlwiZTc5MFwifSx7bmFtZTpcIkRhdGFTZW5zZVwiLGdseXBoOlwiZTc5MVwifSx7bmFtZTpcIlNhdmVBc1wiLGdseXBoOlwiZTc5MlwifSx7bmFtZTpcIkxpZ2h0XCIsZ2x5cGg6XCJlNzkzXCJ9LHtuYW1lOlwiQXNwZWN0UmF0aW9cIixnbHlwaDpcImU3OTlcIn0se25hbWU6XCJEYXRhU2Vuc2VCYXJcIixnbHlwaDpcImU3YTVcIn0se25hbWU6XCJSZWRvXCIsZ2x5cGg6XCJlN2E2XCJ9LHtuYW1lOlwiVW5kb1wiLGdseXBoOlwiZTdhN1wifSx7bmFtZTpcIkNyb3BcIixnbHlwaDpcImU3YThcIn0se25hbWU6XCJPcGVuV2l0aFwiLGdseXBoOlwiZTdhY1wifSx7bmFtZTpcIlJvdGF0ZVwiLGdseXBoOlwiZTdhZFwifSx7bmFtZTpcIlJlZEV5ZVwiLGdseXBoOlwiZTdiM1wifSx7bmFtZTpcIlNldGxvY2tTY3JlZW5cIixnbHlwaDpcImU3YjVcIn0se25hbWU6XCJNYXBQaW4yXCIsZ2x5cGg6XCJlN2I3XCJ9LHtuYW1lOlwiUGFja2FnZVwiLGdseXBoOlwiZTdiOFwifSx7bmFtZTpcIldhcm5pbmdcIixnbHlwaDpcImU3YmFcIn0se25hbWU6XCJSZWFkaW5nTGlzdFwiLGdseXBoOlwiZTdiY1wifSx7bmFtZTpcIkVkdWNhdGlvblwiLGdseXBoOlwiZTdiZVwifSx7bmFtZTpcIlNob3BwaW5nQ2FydFwiLGdseXBoOlwiZTdiZlwifSx7bmFtZTpcIlRyYWluXCIsZ2x5cGg6XCJlN2MwXCJ9LHtuYW1lOlwiRmxhZ1wiLGdseXBoOlwiZTdjMVwifSx7bmFtZTpcIk1vdmVcIixnbHlwaDpcImU3YzJcIn0se25hbWU6XCJQYWdlXCIsZ2x5cGg6XCJlN2MzXCJ9LHtuYW1lOlwiVGFza1ZpZXdcIixnbHlwaDpcImU3YzRcIn0se25hbWU6XCJCcm93c2VQaG90b3NcIixnbHlwaDpcImU3YzVcIn0se25hbWU6XCJIYWxmU3RhckxlZnRcIixnbHlwaDpcImU3YzZcIn0se25hbWU6XCJIYWxmU3RhclJpZ2h0XCIsZ2x5cGg6XCJlN2M3XCJ9LHtuYW1lOlwiUmVjb3JkXCIsZ2x5cGg6XCJlN2M4XCJ9LHtuYW1lOlwiVG91Y2hQb2ludGVyXCIsZ2x5cGg6XCJlN2M5XCJ9LHtuYW1lOlwiTGFuZ0pQTlwiLGdseXBoOlwiZTdkZVwifSx7bmFtZTpcIkZlcnJ5XCIsZ2x5cGg6XCJlN2UzXCJ9LHtuYW1lOlwiSGlnaGxpZ2h0XCIsZ2x5cGg6XCJlN2U2XCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyTm90aWZpY2F0aW9uXCIsZ2x5cGg6XCJlN2U3XCJ9LHtuYW1lOlwiUG93ZXJCdXR0b25cIixnbHlwaDpcImU3ZThcIn0se25hbWU6XCJSZXNpemVUb3VjaE5hcnJvd2VyXCIsZ2x5cGg6XCJlN2VhXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hTaG9ydGVyXCIsZ2x5cGg6XCJlN2ViXCJ9LHtuYW1lOlwiRHJpdmluZ01vZGVcIixnbHlwaDpcImU3ZWNcIn0se25hbWU6XCJSaW5nZXJTaWxlbnRcIixnbHlwaDpcImU3ZWRcIn0se25hbWU6XCJPdGhlclVzZXJcIixnbHlwaDpcImU3ZWVcIn0se25hbWU6XCJBZG1pblwiLGdseXBoOlwiZTdlZlwifSx7bmFtZTpcIkNDXCIsZ2x5cGg6XCJlN2YwXCJ9LHtuYW1lOlwiU0RDYXJkXCIsZ2x5cGg6XCJlN2YxXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRpbmdcIixnbHlwaDpcImU3ZjJcIn0se25hbWU6XCJTZXR0aW5nc0Rpc3BsYXlTb3VuZFwiLGdseXBoOlwiZTdmM1wifSx7bmFtZTpcIlRWTW9uaXRvclwiLGdseXBoOlwiZTdmNFwifSx7bmFtZTpcIlNwZWFrZXJzXCIsZ2x5cGg6XCJlN2Y1XCJ9LHtuYW1lOlwiSGVhZHBob25lXCIsZ2x5cGg6XCJlN2Y2XCJ9LHtuYW1lOlwiRGV2aWNlTGFwdG9wUGljXCIsZ2x5cGg6XCJlN2Y3XCJ9LHtuYW1lOlwiRGV2aWNlTGFwdG9wTm9QaWNcIixnbHlwaDpcImU3ZjhcIn0se25hbWU6XCJEZXZpY2VNb25pdG9yUmlnaHRQaWNcIixnbHlwaDpcImU3ZjlcIn0se25hbWU6XCJEZXZpY2VNb25pdG9yTGVmdFBpY1wiLGdseXBoOlwiZTdmYVwifSx7bmFtZTpcIkRldmljZU1vbml0b3JOb1BpY1wiLGdseXBoOlwiZTdmYlwifSx7bmFtZTpcIkdhbWVcIixnbHlwaDpcImU3ZmNcIn0se25hbWU6XCJIb3Jpem9udGFsVGFiS2V5XCIsZ2x5cGg6XCJlN2ZkXCJ9LHtuYW1lOlwiU3RyZWV0c2lkZVNwbGl0TWluaW1pemVcIixnbHlwaDpcImU4MDJcIn0se25hbWU6XCJTdHJlZXRzaWRlU3BsaXRFeHBhbmRcIixnbHlwaDpcImU4MDNcIn0se25hbWU6XCJDYXJcIixnbHlwaDpcImU4MDRcIn0se25hbWU6XCJXYWxrXCIsZ2x5cGg6XCJlODA1XCJ9LHtuYW1lOlwiQnVzXCIsZ2x5cGg6XCJlODA2XCJ9LHtuYW1lOlwiVGlsdFVwXCIsZ2x5cGg6XCJlODA5XCJ9LHtuYW1lOlwiVGlsdERvd25cIixnbHlwaDpcImU4MGFcIn0se25hbWU6XCJDYWxsQ29udHJvbFwiLGdseXBoOlwiZTgwYlwifSx7bmFtZTpcIlJvdGF0ZU1hcFJpZ2h0XCIsZ2x5cGg6XCJlODBjXCJ9LHtuYW1lOlwiUm90YXRlTWFwTGVmdFwiLGdseXBoOlwiZTgwZFwifSx7bmFtZTpcIkhvbWVcIixnbHlwaDpcImU4MGZcIn0se25hbWU6XCJQYXJraW5nTG9jYXRpb25cIixnbHlwaDpcImU4MTFcIn0se25hbWU6XCJNYXBDb21wYXNzVG9wXCIsZ2x5cGg6XCJlODEyXCJ9LHtuYW1lOlwiTWFwQ29tcGFzc0JvdHRvbVwiLGdseXBoOlwiZTgxM1wifSx7bmFtZTpcIkluY2lkZW50VHJpYW5nbGVcIixnbHlwaDpcImU4MTRcIn0se25hbWU6XCJUb3VjaFwiLGdseXBoOlwiZTgxNVwifSx7bmFtZTpcIk1hcERpcmVjdGlvbnNcIixnbHlwaDpcImU4MTZcIn0se25hbWU6XCJTdGFydFBvaW50XCIsZ2x5cGg6XCJlODE5XCJ9LHtuYW1lOlwiU3RvcFBvaW50XCIsZ2x5cGg6XCJlODFhXCJ9LHtuYW1lOlwiRW5kUG9pbnRcIixnbHlwaDpcImU4MWJcIn0se25hbWU6XCJIaXN0b3J5XCIsZ2x5cGg6XCJlODFjXCJ9LHtuYW1lOlwiTG9jYXRpb25cIixnbHlwaDpcImU4MWRcIn0se25hbWU6XCJNYXBMYXllcnNcIixnbHlwaDpcImU4MWVcIn0se25hbWU6XCJBY2NpZGVudFwiLGdseXBoOlwiZTgxZlwifSx7bmFtZTpcIldvcmtcIixnbHlwaDpcImU4MjFcIn0se25hbWU6XCJDb25zdHJ1Y3Rpb25cIixnbHlwaDpcImU4MjJcIn0se25hbWU6XCJSZWNlbnRcIixnbHlwaDpcImU4MjNcIn0se25hbWU6XCJCYW5rXCIsZ2x5cGg6XCJlODI1XCJ9LHtuYW1lOlwiRG93bmxvYWRNYXBcIixnbHlwaDpcImU4MjZcIn0se25hbWU6XCJJbmtpbmdUb29sRmlsbDJcIixnbHlwaDpcImU4MjlcIn0se25hbWU6XCJIaWdobGlnaHRGaWxsMlwiLGdseXBoOlwiZTgyYVwifSx7bmFtZTpcIkVyYXNlVG9vbEZpbGxcIixnbHlwaDpcImU4MmJcIn0se25hbWU6XCJFcmFzZVRvb2xGaWxsMlwiLGdseXBoOlwiZTgyY1wifSx7bmFtZTpcIkRpY3Rpb25hcnlcIixnbHlwaDpcImU4MmRcIn0se25hbWU6XCJEaWN0aW9uYXJ5QWRkXCIsZ2x5cGg6XCJlODJlXCJ9LHtuYW1lOlwiVG9vbFRpcFwiLGdseXBoOlwiZTgyZlwifSx7bmFtZTpcIkNocm9tZUJhY2tcIixnbHlwaDpcImU4MzBcIn0se25hbWU6XCJQcm92aXNpb25pbmdQYWNrYWdlXCIsZ2x5cGg6XCJlODM1XCJ9LHtuYW1lOlwiQWRkUmVtb3RlRGV2aWNlXCIsZ2x5cGg6XCJlODM2XCJ9LHtuYW1lOlwiRm9sZGVyT3BlblwiLGdseXBoOlwiZTgzOFwifSx7bmFtZTpcIkV0aGVybmV0XCIsZ2x5cGg6XCJlODM5XCJ9LHtuYW1lOlwiU2hhcmVCcm9hZGJhbmRcIixnbHlwaDpcImU4M2FcIn0se25hbWU6XCJEaXJlY3RBY2Nlc3NcIixnbHlwaDpcImU4M2JcIn0se25hbWU6XCJEaWFsVXBcIixnbHlwaDpcImU4M2NcIn0se25hbWU6XCJEZWZlbmRlckFwcFwiLGdseXBoOlwiZTgzZFwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzlcIixnbHlwaDpcImU4M2VcIn0se25hbWU6XCJCYXR0ZXJ5MTBcIixnbHlwaDpcImU4M2ZcIn0se25hbWU6XCJQaW5uZWRcIixnbHlwaDpcImU4NDBcIn0se25hbWU6XCJQaW5GaWxsXCIsZ2x5cGg6XCJlODQxXCJ9LHtuYW1lOlwiUGlubmVkRmlsbFwiLGdseXBoOlwiZTg0MlwifSx7bmFtZTpcIlBlcmlvZEtleVwiLGdseXBoOlwiZTg0M1wifSx7bmFtZTpcIlB1bmNLZXlcIixnbHlwaDpcImU4NDRcIn0se25hbWU6XCJSZXZUb2dnbGVLZXlcIixnbHlwaDpcImU4NDVcIn0se25hbWU6XCJSaWdodEFycm93S2V5VGltZTFcIixnbHlwaDpcImU4NDZcIn0se25hbWU6XCJSaWdodEFycm93S2V5VGltZTJcIixnbHlwaDpcImU4NDdcIn0se25hbWU6XCJMZWZ0UXVvdGVcIixnbHlwaDpcImU4NDhcIn0se25hbWU6XCJSaWdodFF1b3RlXCIsZ2x5cGg6XCJlODQ5XCJ9LHtuYW1lOlwiRG93blNoaWZ0S2V5XCIsZ2x5cGg6XCJlODRhXCJ9LHtuYW1lOlwiVXBTaGlmdEtleVwiLGdseXBoOlwiZTg0YlwifSx7bmFtZTpcIlB1bmNLZXkwXCIsZ2x5cGg6XCJlODRjXCJ9LHtuYW1lOlwiUHVuY0tleUxlZnRCb3R0b21cIixnbHlwaDpcImU4NGRcIn0se25hbWU6XCJSaWdodEFycm93S2V5VGltZTNcIixnbHlwaDpcImU4NGVcIn0se25hbWU6XCJSaWdodEFycm93S2V5VGltZTRcIixnbHlwaDpcImU4NGZcIn0se25hbWU6XCJCYXR0ZXJ5MFwiLGdseXBoOlwiZTg1MFwifSx7bmFtZTpcIkJhdHRlcnkxXCIsZ2x5cGg6XCJlODUxXCJ9LHtuYW1lOlwiQmF0dGVyeTJcIixnbHlwaDpcImU4NTJcIn0se25hbWU6XCJCYXR0ZXJ5M1wiLGdseXBoOlwiZTg1M1wifSx7bmFtZTpcIkJhdHRlcnk0XCIsZ2x5cGg6XCJlODU0XCJ9LHtuYW1lOlwiQmF0dGVyeTVcIixnbHlwaDpcImU4NTVcIn0se25hbWU6XCJCYXR0ZXJ5NlwiLGdseXBoOlwiZTg1NlwifSx7bmFtZTpcIkJhdHRlcnk3XCIsZ2x5cGg6XCJlODU3XCJ9LHtuYW1lOlwiQmF0dGVyeThcIixnbHlwaDpcImU4NThcIn0se25hbWU6XCJCYXR0ZXJ5OVwiLGdseXBoOlwiZTg1OVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzBcIixnbHlwaDpcImU4NWFcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcxXCIsZ2x5cGg6XCJlODViXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMlwiLGdseXBoOlwiZTg1Y1wifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzNcIixnbHlwaDpcImU4NWRcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc0XCIsZ2x5cGg6XCJlODVlXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nNVwiLGdseXBoOlwiZTg1ZlwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzZcIixnbHlwaDpcImU4NjBcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc3XCIsZ2x5cGg6XCJlODYxXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nOFwiLGdseXBoOlwiZTg2MlwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjBcIixnbHlwaDpcImU4NjNcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIxXCIsZ2x5cGg6XCJlODY0XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMlwiLGdseXBoOlwiZTg2NVwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjNcIixnbHlwaDpcImU4NjZcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI0XCIsZ2x5cGg6XCJlODY3XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyNVwiLGdseXBoOlwiZTg2OFwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjZcIixnbHlwaDpcImU4NjlcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI3XCIsZ2x5cGg6XCJlODZhXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyOFwiLGdseXBoOlwiZTg2YlwifSx7bmFtZTpcIlNpZ25hbEJhcnMxXCIsZ2x5cGg6XCJlODZjXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczJcIixnbHlwaDpcImU4NmRcIn0se25hbWU6XCJTaWduYWxCYXJzM1wiLGdseXBoOlwiZTg2ZVwifSx7bmFtZTpcIlNpZ25hbEJhcnM0XCIsZ2x5cGg6XCJlODZmXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczVcIixnbHlwaDpcImU4NzBcIn0se25hbWU6XCJTaWduYWxOb3RDb25uZWN0ZWRcIixnbHlwaDpcImU4NzFcIn0se25hbWU6XCJXaWZpMVwiLGdseXBoOlwiZTg3MlwifSx7bmFtZTpcIldpZmkyXCIsZ2x5cGg6XCJlODczXCJ9LHtuYW1lOlwiV2lmaTNcIixnbHlwaDpcImU4NzRcIn0se25hbWU6XCJNb2JTSU1Mb2NrXCIsZ2x5cGg6XCJlODc1XCJ9LHtuYW1lOlwiTW9iU0lNTWlzc2luZ1wiLGdseXBoOlwiZTg3NlwifSx7bmFtZTpcIlZpYnJhdGVcIixnbHlwaDpcImU4NzdcIn0se25hbWU6XCJSb2FtaW5nSW50ZXJuYXRpb25hbFwiLGdseXBoOlwiZTg3OFwifSx7bmFtZTpcIlJvYW1pbmdEb21lc3RpY1wiLGdseXBoOlwiZTg3OVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkSW50ZXJuYXRpb25hbFwiLGdseXBoOlwiZTg3YVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkUm9hbWluZ1wiLGdseXBoOlwiZTg3YlwifSx7bmFtZTpcIkpwblJvbWFuamlcIixnbHlwaDpcImU4N2NcIn0se25hbWU6XCJKcG5Sb21hbmppTG9ja1wiLGdseXBoOlwiZTg3ZFwifSx7bmFtZTpcIkpwblJvbWFuamlTaGlmdFwiLGdseXBoOlwiZTg3ZVwifSx7bmFtZTpcIkpwblJvbWFuamlTaGlmdExvY2tcIixnbHlwaDpcImU4N2ZcIn0se25hbWU6XCJTdGF0dXNEYXRhVHJhbnNmZXJcIixnbHlwaDpcImU4ODBcIn0se25hbWU6XCJTdGF0dXNEYXRhVHJhbnNmZXJWUE5cIixnbHlwaDpcImU4ODFcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMlwiLGdseXBoOlwiZTg4MlwifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0yVlBOXCIsZ2x5cGg6XCJlODgzXCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTFcIixnbHlwaDpcImU4ODRcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMVZQTlwiLGdseXBoOlwiZTg4NVwifSx7bmFtZTpcIlN0YXR1c1NHTFRFXCIsZ2x5cGg6XCJlODg2XCJ9LHtuYW1lOlwiU3RhdHVzU0dMVEVDZWxsXCIsZ2x5cGg6XCJlODg3XCJ9LHtuYW1lOlwiU3RhdHVzU0dMVEVEYXRhVlBOXCIsZ2x5cGg6XCJlODg4XCJ9LHtuYW1lOlwiU3RhdHVzVlBOXCIsZ2x5cGg6XCJlODg5XCJ9LHtuYW1lOlwiV2lmaUhvdHNwb3RcIixnbHlwaDpcImU4OGFcIn0se25hbWU6XCJMYW5ndWFnZUtvclwiLGdseXBoOlwiZTg4YlwifSx7bmFtZTpcIkxhbmd1YWdlQ2h0XCIsZ2x5cGg6XCJlODhjXCJ9LHtuYW1lOlwiTGFuZ3VhZ2VDaHNcIixnbHlwaDpcImU4OGRcIn0se25hbWU6XCJVU0JcIixnbHlwaDpcImU4OGVcIn0se25hbWU6XCJJbmtpbmdUb29sRmlsbFwiLGdseXBoOlwiZTg4ZlwifSx7bmFtZTpcIlZpZXdcIixnbHlwaDpcImU4OTBcIn0se25hbWU6XCJIaWdobGlnaHRGaWxsXCIsZ2x5cGg6XCJlODkxXCJ9LHtuYW1lOlwiUHJldmlvdXNcIixnbHlwaDpcImU4OTJcIn0se25hbWU6XCJOZXh0XCIsZ2x5cGg6XCJlODkzXCJ9LHtuYW1lOlwiQ2xlYXJcIixnbHlwaDpcImU4OTRcIn0se25hbWU6XCJTeW5jXCIsZ2x5cGg6XCJlODk1XCJ9LHtuYW1lOlwiRG93bmxvYWRcIixnbHlwaDpcImU4OTZcIn0se25hbWU6XCJIZWxwXCIsZ2x5cGg6XCJlODk3XCJ9LHtuYW1lOlwiVXBsb2FkXCIsZ2x5cGg6XCJlODk4XCJ9LHtuYW1lOlwiRW1vamlcIixnbHlwaDpcImU4OTlcIn0se25hbWU6XCJUd29QYWdlXCIsZ2x5cGg6XCJlODlhXCJ9LHtuYW1lOlwiTGVhdmVDaGF0XCIsZ2x5cGg6XCJlODliXCJ9LHtuYW1lOlwiTWFpbEZvcndhcmRcIixnbHlwaDpcImU4OWNcIn0se25hbWU6XCJSb3RhdGVDYW1lcmFcIixnbHlwaDpcImU4OWVcIn0se25hbWU6XCJDbG9zZVBhbmVcIixnbHlwaDpcImU4OWZcIn0se25hbWU6XCJPcGVuUGFuZVwiLGdseXBoOlwiZThhMFwifSx7bmFtZTpcIlByZXZpZXdMaW5rXCIsZ2x5cGg6XCJlOGExXCJ9LHtuYW1lOlwiQXR0YWNoQ2FtZXJhXCIsZ2x5cGg6XCJlOGEyXCJ9LHtuYW1lOlwiWm9vbUluXCIsZ2x5cGg6XCJlOGEzXCJ9LHtuYW1lOlwiQm9va21hcmtzXCIsZ2x5cGg6XCJlOGE0XCJ9LHtuYW1lOlwiRG9jdW1lbnRcIixnbHlwaDpcImU4YTVcIn0se25hbWU6XCJQcm90ZWN0ZWREb2N1bWVudFwiLGdseXBoOlwiZThhNlwifSx7bmFtZTpcIk9wZW5Jbk5ld1dpbmRvd1wiLGdseXBoOlwiZThhN1wifSx7bmFtZTpcIk1haWxGaWxsXCIsZ2x5cGg6XCJlOGE4XCJ9LHtuYW1lOlwiVmlld0FsbFwiLGdseXBoOlwiZThhOVwifSx7bmFtZTpcIlZpZGVvQ2hhdFwiLGdseXBoOlwiZThhYVwifSx7bmFtZTpcIlN3aXRjaFwiLGdseXBoOlwiZThhYlwifSx7bmFtZTpcIlJlbmFtZVwiLGdseXBoOlwiZThhY1wifSx7bmFtZTpcIkdvXCIsZ2x5cGg6XCJlOGFkXCJ9LHtuYW1lOlwiU3VyZmFjZUh1YlwiLGdseXBoOlwiZThhZVwifSx7bmFtZTpcIlJlbW90ZVwiLGdseXBoOlwiZThhZlwifSx7bmFtZTpcIkNsaWNrXCIsZ2x5cGg6XCJlOGIwXCJ9LHtuYW1lOlwiU2h1ZmZsZVwiLGdseXBoOlwiZThiMVwifSx7bmFtZTpcIk1vdmllc1wiLGdseXBoOlwiZThiMlwifSx7bmFtZTpcIlNlbGVjdEFsbFwiLGdseXBoOlwiZThiM1wifSx7bmFtZTpcIk9yaWVudGF0aW9uXCIsZ2x5cGg6XCJlOGI0XCJ9LHtuYW1lOlwiSW1wb3J0XCIsZ2x5cGg6XCJlOGI1XCJ9LHtuYW1lOlwiSW1wb3J0QWxsXCIsZ2x5cGg6XCJlOGI2XCJ9LHtuYW1lOlwiRm9sZGVyXCIsZ2x5cGg6XCJlOGI3XCJ9LHtuYW1lOlwiV2ViY2FtXCIsZ2x5cGg6XCJlOGI4XCJ9LHtuYW1lOlwiUGljdHVyZVwiLGdseXBoOlwiZThiOVwifSx7bmFtZTpcIkNhcHRpb25cIixnbHlwaDpcImU4YmFcIn0se25hbWU6XCJDaHJvbWVDbG9zZVwiLGdseXBoOlwiZThiYlwifSx7bmFtZTpcIlNob3dSZXN1bHRzXCIsZ2x5cGg6XCJlOGJjXCJ9LHtuYW1lOlwiTWVzc2FnZVwiLGdseXBoOlwiZThiZFwifSx7bmFtZTpcIkxlYWZcIixnbHlwaDpcImU4YmVcIn0se25hbWU6XCJDYWxlbmRhckRheVwiLGdseXBoOlwiZThiZlwifSx7bmFtZTpcIkNhbGVuZGFyV2Vla1wiLGdseXBoOlwiZThjMFwifSx7bmFtZTpcIkNoYXJhY3RlcnNcIixnbHlwaDpcImU4YzFcIn0se25hbWU6XCJNYWlsUmVwbHlBbGxcIixnbHlwaDpcImU4YzJcIn0se25hbWU6XCJSZWFkXCIsZ2x5cGg6XCJlOGMzXCJ9LHtuYW1lOlwiU2hvd0JjY1wiLGdseXBoOlwiZThjNFwifSx7bmFtZTpcIkhpZGVCY2NcIixnbHlwaDpcImU4YzVcIn0se25hbWU6XCJDdXRcIixnbHlwaDpcImU4YzZcIn0se25hbWU6XCJQYXltZW50Q2FyZFwiLGdseXBoOlwiZThjN1wifSx7bmFtZTpcIkNvcHlcIixnbHlwaDpcImU4YzhcIn0se25hbWU6XCJJbXBvcnRhbnRcIixnbHlwaDpcImU4YzlcIn0se25hbWU6XCJNYWlsUmVwbHlcIixnbHlwaDpcImU4Y2FcIn0se25hbWU6XCJTb3J0XCIsZ2x5cGg6XCJlOGNiXCJ9LHtuYW1lOlwiTW9iaWxlVGFibGV0XCIsZ2x5cGg6XCJlOGNjXCJ9LHtuYW1lOlwiRGlzY29ubmVjdERyaXZlXCIsZ2x5cGg6XCJlOGNkXCJ9LHtuYW1lOlwiTWFwRHJpdmVcIixnbHlwaDpcImU4Y2VcIn0se25hbWU6XCJDb250YWN0UHJlc2VuY2VcIixnbHlwaDpcImU4Y2ZcIn0se25hbWU6XCJQcmlvcml0eVwiLGdseXBoOlwiZThkMFwifSx7bmFtZTpcIkdvdG9Ub2RheVwiLGdseXBoOlwiZThkMVwifSx7bmFtZTpcIkZvbnRcIixnbHlwaDpcImU4ZDJcIn0se25hbWU6XCJGb250Q29sb3JcIixnbHlwaDpcImU4ZDNcIn0se25hbWU6XCJDb250YWN0MlwiLGdseXBoOlwiZThkNFwifSx7bmFtZTpcIkZvbGRlckZpbGxcIixnbHlwaDpcImU4ZDVcIn0se25hbWU6XCJBdWRpb1wiLGdseXBoOlwiZThkNlwifSx7bmFtZTpcIlBlcm1pc3Npb25zXCIsZ2x5cGg6XCJlOGQ3XCJ9LHtuYW1lOlwiRGlzYWJsZVVwZGF0ZXNcIixnbHlwaDpcImU4ZDhcIn0se25hbWU6XCJVbmZhdm9yaXRlXCIsZ2x5cGg6XCJlOGQ5XCJ9LHtuYW1lOlwiT3BlbkxvY2FsXCIsZ2x5cGg6XCJlOGRhXCJ9LHtuYW1lOlwiSXRhbGljXCIsZ2x5cGg6XCJlOGRiXCJ9LHtuYW1lOlwiVW5kZXJsaW5lXCIsZ2x5cGg6XCJlOGRjXCJ9LHtuYW1lOlwiQm9sZFwiLGdseXBoOlwiZThkZFwifSx7bmFtZTpcIk1vdmVUb0ZvbGRlclwiLGdseXBoOlwiZThkZVwifSx7bmFtZTpcIkxpa2VEaXNsaWtlXCIsZ2x5cGg6XCJlOGRmXCJ9LHtuYW1lOlwiRGlzbGlrZVwiLGdseXBoOlwiZThlMFwifSx7bmFtZTpcIkxpa2VcIixnbHlwaDpcImU4ZTFcIn0se25hbWU6XCJBbGlnblJpZ2h0XCIsZ2x5cGg6XCJlOGUyXCJ9LHtuYW1lOlwiQWxpZ25DZW50ZXJcIixnbHlwaDpcImU4ZTNcIn0se25hbWU6XCJBbGlnbkxlZnRcIixnbHlwaDpcImU4ZTRcIn0se25hbWU6XCJPcGVuRmlsZVwiLGdseXBoOlwiZThlNVwifSx7bmFtZTpcIkNsZWFyU2VsZWN0aW9uXCIsZ2x5cGg6XCJlOGU2XCJ9LHtuYW1lOlwiRm9udERlY3JlYXNlXCIsZ2x5cGg6XCJlOGU3XCJ9LHtuYW1lOlwiRm9udEluY3JlYXNlXCIsZ2x5cGg6XCJlOGU4XCJ9LHtuYW1lOlwiRm9udFNpemVcIixnbHlwaDpcImU4ZTlcIn0se25hbWU6XCJDZWxsUGhvbmVcIixnbHlwaDpcImU4ZWFcIn0se25hbWU6XCJSZXNoYXJlXCIsZ2x5cGg6XCJlOGViXCJ9LHtuYW1lOlwiVGFnXCIsZ2x5cGg6XCJlOGVjXCJ9LHtuYW1lOlwiUmVwZWF0T25lXCIsZ2x5cGg6XCJlOGVkXCJ9LHtuYW1lOlwiUmVwZWF0QWxsXCIsZ2x5cGg6XCJlOGVlXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvclwiLGdseXBoOlwiZThlZlwifSx7bmFtZTpcIkRpcmVjdGlvbnNcIixnbHlwaDpcImU4ZjBcIn0se25hbWU6XCJMaWJyYXJ5XCIsZ2x5cGg6XCJlOGYxXCJ9LHtuYW1lOlwiQ2hhdEJ1YmJsZXNcIixnbHlwaDpcImU4ZjJcIn0se25hbWU6XCJQb3N0VXBkYXRlXCIsZ2x5cGg6XCJlOGYzXCJ9LHtuYW1lOlwiTmV3Rm9sZGVyXCIsZ2x5cGg6XCJlOGY0XCJ9LHtuYW1lOlwiQ2FsZW5kYXJSZXBseVwiLGdseXBoOlwiZThmNVwifSx7bmFtZTpcIlVuc3luY0ZvbGRlclwiLGdseXBoOlwiZThmNlwifSx7bmFtZTpcIlN5bmNGb2xkZXJcIixnbHlwaDpcImU4ZjdcIn0se25hbWU6XCJCbG9ja0NvbnRhY3RcIixnbHlwaDpcImU4ZjhcIn0se25hbWU6XCJTd2l0Y2hBcHBzXCIsZ2x5cGg6XCJlOGY5XCJ9LHtuYW1lOlwiQWRkRnJpZW5kXCIsZ2x5cGg6XCJlOGZhXCJ9LHtuYW1lOlwiQWNjZXB0XCIsZ2x5cGg6XCJlOGZiXCJ9LHtuYW1lOlwiR29Ub1N0YXJ0XCIsZ2x5cGg6XCJlOGZjXCJ9LHtuYW1lOlwiQnVsbGV0ZWRMaXN0XCIsZ2x5cGg6XCJlOGZkXCJ9LHtuYW1lOlwiU2NhblwiLGdseXBoOlwiZThmZVwifSx7bmFtZTpcIlByZXZpZXdcIixnbHlwaDpcImU4ZmZcIn0se25hbWU6XCJHcm91cFwiLGdseXBoOlwiZTkwMlwifSx7bmFtZTpcIlplcm9CYXJzXCIsZ2x5cGg6XCJlOTA0XCJ9LHtuYW1lOlwiT25lQmFyXCIsZ2x5cGg6XCJlOTA1XCJ9LHtuYW1lOlwiVHdvQmFyc1wiLGdseXBoOlwiZTkwNlwifSx7bmFtZTpcIlRocmVlQmFyc1wiLGdseXBoOlwiZTkwN1wifSx7bmFtZTpcIkZvdXJCYXJzXCIsZ2x5cGg6XCJlOTA4XCJ9LHtuYW1lOlwiV29ybGRcIixnbHlwaDpcImU5MDlcIn0se25hbWU6XCJDb21tZW50XCIsZ2x5cGg6XCJlOTBhXCJ9LHtuYW1lOlwiTXVzaWNJbmZvXCIsZ2x5cGg6XCJlOTBiXCJ9LHtuYW1lOlwiRG9ja0xlZnRcIixnbHlwaDpcImU5MGNcIn0se25hbWU6XCJEb2NrUmlnaHRcIixnbHlwaDpcImU5MGRcIn0se25hbWU6XCJEb2NrQm90dG9tXCIsZ2x5cGg6XCJlOTBlXCJ9LHtuYW1lOlwiUmVwYWlyXCIsZ2x5cGg6XCJlOTBmXCJ9LHtuYW1lOlwiQWNjb3VudHNcIixnbHlwaDpcImU5MTBcIn0se25hbWU6XCJEdWxsU291bmRcIixnbHlwaDpcImU5MTFcIn0se25hbWU6XCJNYW5hZ2VcIixnbHlwaDpcImU5MTJcIn0se25hbWU6XCJTdHJlZXRcIixnbHlwaDpcImU5MTNcIn0se25hbWU6XCJQcmludGVyM0RcIixnbHlwaDpcImU5MTRcIn0se25hbWU6XCJSYWRpb0J1bGxldFwiLGdseXBoOlwiZTkxNVwifSx7bmFtZTpcIlN0b3B3YXRjaFwiLGdseXBoOlwiZTkxNlwifSx7bmFtZTpcIlBob3RvXCIsZ2x5cGg6XCJlOTFiXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyXCIsZ2x5cGg6XCJlOTFjXCJ9LHtuYW1lOlwiRnVsbENpcmNsZU1hc2tcIixnbHlwaDpcImU5MWZcIn0se25hbWU6XCJDaHJvbWVNaW5pbWl6ZVwiLGdseXBoOlwiZTkyMVwifSx7bmFtZTpcIkNocm9tZU1heGltaXplXCIsZ2x5cGg6XCJlOTIyXCJ9LHtuYW1lOlwiQ2hyb21lUmVzdG9yZVwiLGdseXBoOlwiZTkyM1wifSx7bmFtZTpcIkFubm90YXRpb25cIixnbHlwaDpcImU5MjRcIn0se25hbWU6XCJCYWNrU3BhY2VRV0VSVFlTbVwiLGdseXBoOlwiZTkyNVwifSx7bmFtZTpcIkJhY2tTcGFjZVFXRVJUWU1kXCIsZ2x5cGg6XCJlOTI2XCJ9LHtuYW1lOlwiU3dpcGVcIixnbHlwaDpcImU5MjdcIn0se25hbWU6XCJGaW5nZXJwcmludFwiLGdseXBoOlwiZTkyOFwifSx7bmFtZTpcIkhhbmR3cml0aW5nXCIsZ2x5cGg6XCJlOTI5XCJ9LHtuYW1lOlwiQ2hyb21lQmFja1RvV2luZG93XCIsZ2x5cGg6XCJlOTJjXCJ9LHtuYW1lOlwiQ2hyb21lRnVsbFNjcmVlblwiLGdseXBoOlwiZTkyZFwifSx7bmFtZTpcIktleWJvYXJkU3RhbmRhcmRcIixnbHlwaDpcImU5MmVcIn0se25hbWU6XCJLZXlib2FyZERpc21pc3NcIixnbHlwaDpcImU5MmZcIn0se25hbWU6XCJDb21wbGV0ZWRcIixnbHlwaDpcImU5MzBcIn0se25hbWU6XCJDaHJvbWVBbm5vdGF0ZVwiLGdseXBoOlwiZTkzMVwifSx7bmFtZTpcIkxhYmVsXCIsZ2x5cGg6XCJlOTMyXCJ9LHtuYW1lOlwiSUJlYW1cIixnbHlwaDpcImU5MzNcIn0se25hbWU6XCJJQmVhbU91dGxpbmVcIixnbHlwaDpcImU5MzRcIn0se25hbWU6XCJGbGlja0Rvd25cIixnbHlwaDpcImU5MzVcIn0se25hbWU6XCJGbGlja1VwXCIsZ2x5cGg6XCJlOTM2XCJ9LHtuYW1lOlwiRmxpY2tMZWZ0XCIsZ2x5cGg6XCJlOTM3XCJ9LHtuYW1lOlwiRmxpY2tSaWdodFwiLGdseXBoOlwiZTkzOFwifSx7bmFtZTpcIkZlZWRiYWNrQXBwXCIsZ2x5cGg6XCJlOTM5XCJ9LHtuYW1lOlwiTXVzaWNBbGJ1bVwiLGdseXBoOlwiZTkzY1wifSx7bmFtZTpcIlN0cmVhbWluZ1wiLGdseXBoOlwiZTkzZVwifSx7bmFtZTpcIkNvZGVcIixnbHlwaDpcImU5NDNcIn0se25hbWU6XCJSZXR1cm5Ub1dpbmRvd1wiLGdseXBoOlwiZTk0NFwifSx7bmFtZTpcIkxpZ2h0bmluZ0JvbHRcIixnbHlwaDpcImU5NDVcIn0se25hbWU6XCJJbmZvXCIsZ2x5cGg6XCJlOTQ2XCJ9LHtuYW1lOlwiQ2FsY3VsYXRvck11bHRpcGx5XCIsZ2x5cGg6XCJlOTQ3XCJ9LHtuYW1lOlwiQ2FsY3VsYXRvckFkZGl0aW9uXCIsZ2x5cGg6XCJlOTQ4XCJ9LHtuYW1lOlwiQ2FsY3VsYXRvclN1YnRyYWN0XCIsZ2x5cGg6XCJlOTQ5XCJ9LHtuYW1lOlwiQ2FsY3VsYXRvckRpdmlkZVwiLGdseXBoOlwiZTk0YVwifSx7bmFtZTpcIkNhbGN1bGF0b3JTcXVhcmVyb290XCIsZ2x5cGg6XCJlOTRiXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvclBlcmNlbnRhZ2VcIixnbHlwaDpcImU5NGNcIn0se25hbWU6XCJDYWxjdWxhdG9yTmVnYXRlXCIsZ2x5cGg6XCJlOTRkXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvckVxdWFsVG9cIixnbHlwaDpcImU5NGVcIn0se25hbWU6XCJDYWxjdWxhdG9yQmFja3NwYWNlXCIsZ2x5cGg6XCJlOTRmXCJ9LHtuYW1lOlwiQ29tcG9uZW50XCIsZ2x5cGg6XCJlOTUwXCJ9LHtuYW1lOlwiRE1DXCIsZ2x5cGg6XCJlOTUxXCJ9LHtuYW1lOlwiRG9ja1wiLGdseXBoOlwiZTk1MlwifSx7bmFtZTpcIk11bHRpbWVkaWFETVNcIixnbHlwaDpcImU5NTNcIn0se25hbWU6XCJNdWx0aW1lZGlhRFZSXCIsZ2x5cGg6XCJlOTU0XCJ9LHtuYW1lOlwiTXVsdGltZWRpYVBNUFwiLGdseXBoOlwiZTk1NVwifSx7bmFtZTpcIlByaW50ZmF4UHJpbnRlckZpbGVcIixnbHlwaDpcImU5NTZcIn0se25hbWU6XCJTZW5zb3JcIixnbHlwaDpcImU5NTdcIn0se25hbWU6XCJTdG9yYWdlT3B0aWNhbFwiLGdseXBoOlwiZTk1OFwifSx7bmFtZTpcIkNvbW11bmljYXRpb25zXCIsZ2x5cGg6XCJlOTVhXCJ9LHtuYW1lOlwiSGVhZHNldFwiLGdseXBoOlwiZTk1YlwifSx7bmFtZTpcIlByb2plY3RvclwiLGdseXBoOlwiZTk1ZFwifSx7bmFtZTpcIkhlYWx0aFwiLGdseXBoOlwiZTk1ZVwifSx7bmFtZTpcIldpcmVcIixnbHlwaDpcImU5NWZcIn0se25hbWU6XCJXZWJjYW0yXCIsZ2x5cGg6XCJlOTYwXCJ9LHtuYW1lOlwiSW5wdXRcIixnbHlwaDpcImU5NjFcIn0se25hbWU6XCJNb3VzZVwiLGdseXBoOlwiZTk2MlwifSx7bmFtZTpcIlNtYXJ0Y2FyZFwiLGdseXBoOlwiZTk2M1wifSx7bmFtZTpcIlNtYXJ0Y2FyZFZpcnR1YWxcIixnbHlwaDpcImU5NjRcIn0se25hbWU6XCJNZWRpYVN0b3JhZ2VUb3dlclwiLGdseXBoOlwiZTk2NVwifSx7bmFtZTpcIlJldHVybktleVNtXCIsZ2x5cGg6XCJlOTY2XCJ9LHtuYW1lOlwiR2FtZUNvbnNvbGVcIixnbHlwaDpcImU5NjdcIn0se25hbWU6XCJOZXR3b3JrXCIsZ2x5cGg6XCJlOTY4XCJ9LHtuYW1lOlwiU3RvcmFnZU5ldHdvcmtXaXJlbGVzc1wiLGdseXBoOlwiZTk2OVwifSx7bmFtZTpcIlN0b3JhZ2VUYXBlXCIsZ2x5cGg6XCJlOTZhXCJ9LHtuYW1lOlwiQ2hldnJvblVwU21hbGxcIixnbHlwaDpcImU5NmRcIn0se25hbWU6XCJDaGV2cm9uRG93blNtYWxsXCIsZ2x5cGg6XCJlOTZlXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnRTbWFsbFwiLGdseXBoOlwiZTk2ZlwifSx7bmFtZTpcIkNoZXZyb25SaWdodFNtYWxsXCIsZ2x5cGg6XCJlOTcwXCJ9LHtuYW1lOlwiQ2hldnJvblVwTWVkXCIsZ2x5cGg6XCJlOTcxXCJ9LHtuYW1lOlwiQ2hldnJvbkRvd25NZWRcIixnbHlwaDpcImU5NzJcIn0se25hbWU6XCJDaGV2cm9uTGVmdE1lZFwiLGdseXBoOlwiZTk3M1wifSx7bmFtZTpcIkNoZXZyb25SaWdodE1lZFwiLGdseXBoOlwiZTk3NFwifSx7bmFtZTpcIkRldmljZXMyXCIsZ2x5cGg6XCJlOTc1XCJ9LHtuYW1lOlwiRXhwYW5kVGlsZVwiLGdseXBoOlwiZTk3NlwifSx7bmFtZTpcIlBDMVwiLGdseXBoOlwiZTk3N1wifSx7bmFtZTpcIlByZXNlbmNlQ2hpY2tsZXRcIixnbHlwaDpcImU5NzhcIn0se25hbWU6XCJQcmVzZW5jZUNoaWNrbGV0VmlkZW9cIixnbHlwaDpcImU5NzlcIn0se25hbWU6XCJSZXBseVwiLGdseXBoOlwiZTk3YVwifSx7bmFtZTpcIlNldFRpbGVcIixnbHlwaDpcImU5N2JcIn0se25hbWU6XCJUeXBlXCIsZ2x5cGg6XCJlOTdjXCJ9LHtuYW1lOlwiS29yZWFuXCIsZ2x5cGg6XCJlOTdkXCJ9LHtuYW1lOlwiSGFsZkFscGhhXCIsZ2x5cGg6XCJlOTdlXCJ9LHtuYW1lOlwiRnVsbEFscGhhXCIsZ2x5cGg6XCJlOTdmXCJ9LHtuYW1lOlwiS2V5MTJPblwiLGdseXBoOlwiZTk4MFwifSx7bmFtZTpcIkNoaW5lc2VDaGFuZ2ppZVwiLGdseXBoOlwiZTk4MVwifSx7bmFtZTpcIlFXRVJUWU9uXCIsZ2x5cGg6XCJlOTgyXCJ9LHtuYW1lOlwiUVdFUlRZT2ZmXCIsZ2x5cGg6XCJlOTgzXCJ9LHtuYW1lOlwiQ2hpbmVzZVF1aWNrXCIsZ2x5cGg6XCJlOTg0XCJ9LHtuYW1lOlwiSmFwYW5lc2VcIixnbHlwaDpcImU5ODVcIn0se25hbWU6XCJGdWxsSGlyYWdhbmFcIixnbHlwaDpcImU5ODZcIn0se25hbWU6XCJGdWxsS2F0YWthbmFcIixnbHlwaDpcImU5ODdcIn0se25hbWU6XCJIYWxmS2F0YWthbmFcIixnbHlwaDpcImU5ODhcIn0se25hbWU6XCJDaGluZXNlQm9Qb01vRm9cIixnbHlwaDpcImU5ODlcIn0se25hbWU6XCJDaGluZXNlUGlueWluXCIsZ2x5cGg6XCJlOThhXCJ9LHtuYW1lOlwiQ29uc3RydWN0aW9uQ29uZVwiLGdseXBoOlwiZTk4ZlwifSx7bmFtZTpcIlhib3hPbmVDb25zb2xlXCIsZ2x5cGg6XCJlOTkwXCJ9LHtuYW1lOlwiVm9sdW1lMFwiLGdseXBoOlwiZTk5MlwifSx7bmFtZTpcIlZvbHVtZTFcIixnbHlwaDpcImU5OTNcIn0se25hbWU6XCJWb2x1bWUyXCIsZ2x5cGg6XCJlOTk0XCJ9LHtuYW1lOlwiVm9sdW1lM1wiLGdseXBoOlwiZTk5NVwifSx7bmFtZTpcIkJhdHRlcnlVbmtub3duXCIsZ2x5cGg6XCJlOTk2XCJ9LHtuYW1lOlwiV2lmaUF0dGVudGlvbk92ZXJsYXlcIixnbHlwaDpcImU5OThcIn0se25hbWU6XCJSb2JvdFwiLGdseXBoOlwiZTk5YVwifSx7bmFtZTpcIlRhcEFuZFNlbmRcIixnbHlwaDpcImU5YTFcIn0se25hbWU6XCJGaXRQYWdlXCIsZ2x5cGg6XCJlOWE2XCJ9LHtuYW1lOlwiUGFzc3dvcmRLZXlTaG93XCIsZ2x5cGg6XCJlOWE4XCJ9LHtuYW1lOlwiUGFzc3dvcmRLZXlIaWRlXCIsZ2x5cGg6XCJlOWE5XCJ9LHtuYW1lOlwiQmlkaUx0clwiLGdseXBoOlwiZTlhYVwifSx7bmFtZTpcIkJpZGlSdGxcIixnbHlwaDpcImU5YWJcIn0se25hbWU6XCJGb3J3YXJkU21cIixnbHlwaDpcImU5YWNcIn0se25hbWU6XCJDb21tYUtleVwiLGdseXBoOlwiZTlhZFwifSx7bmFtZTpcIkRhc2hLZXlcIixnbHlwaDpcImU5YWVcIn0se25hbWU6XCJEdWxsU291bmRLZXlcIixnbHlwaDpcImU5YWZcIn0se25hbWU6XCJIYWxmRHVsbFNvdW5kXCIsZ2x5cGg6XCJlOWIwXCJ9LHtuYW1lOlwiUmlnaHREb3VibGVRdW90ZVwiLGdseXBoOlwiZTliMVwifSx7bmFtZTpcIkxlZnREb3VibGVRdW90ZVwiLGdseXBoOlwiZTliMlwifSx7bmFtZTpcIlB1bmNLZXlSaWdodEJvdHRvbVwiLGdseXBoOlwiZTliM1wifSx7bmFtZTpcIlB1bmNLZXkxXCIsZ2x5cGg6XCJlOWI0XCJ9LHtuYW1lOlwiUHVuY0tleTJcIixnbHlwaDpcImU5YjVcIn0se25hbWU6XCJQdW5jS2V5M1wiLGdseXBoOlwiZTliNlwifSx7bmFtZTpcIlB1bmNLZXk0XCIsZ2x5cGg6XCJlOWI3XCJ9LHtuYW1lOlwiUHVuY0tleTVcIixnbHlwaDpcImU5YjhcIn0se25hbWU6XCJQdW5jS2V5NlwiLGdseXBoOlwiZTliOVwifSx7bmFtZTpcIlB1bmNLZXk5XCIsZ2x5cGg6XCJlOWJhXCJ9LHtuYW1lOlwiUHVuY0tleTdcIixnbHlwaDpcImU5YmJcIn0se25hbWU6XCJQdW5jS2V5OFwiLGdseXBoOlwiZTliY1wifSx7bmFtZTpcIkZyaWdpZFwiLGdseXBoOlwiZTljYVwifSx7bmFtZTpcIlVua25vd25cIixnbHlwaDpcImU5Y2VcIn0se25hbWU6XCJBcmVhQ2hhcnRcIixnbHlwaDpcImU5ZDJcIn0se25hbWU6XCJDaGVja0xpc3RcIixnbHlwaDpcImU5ZDVcIn0se25hbWU6XCJEaWFnbm9zdGljXCIsZ2x5cGg6XCJlOWQ5XCJ9LHtuYW1lOlwiRXF1YWxpemVyXCIsZ2x5cGg6XCJlOWU5XCJ9LHtuYW1lOlwiUHJvY2Vzc1wiLGdseXBoOlwiZTlmM1wifSx7bmFtZTpcIlByb2Nlc3NpbmdcIixnbHlwaDpcImU5ZjVcIn0se25hbWU6XCJSZXBvcnREb2N1bWVudFwiLGdseXBoOlwiZTlmOVwifSx7bmFtZTpcIkRlc2NyaXB0aW9uXCIsZ2x5cGg6XCJVbmljb2RlIHBvaW50XCJ9LHtuYW1lOlwiVmlkZW9Tb2xpZFwiLGdseXBoOlwiZWEwY1wifSx7bmFtZTpcIk1peGVkTWVkaWFCYWRnZVwiLGdseXBoOlwiZWEwZFwifSx7bmFtZTpcIkRpc2Nvbm5lY3REaXNwbGF5XCIsZ2x5cGg6XCJlYTE0XCJ9LHtuYW1lOlwiU2hpZWxkXCIsZ2x5cGg6XCJlYTE4XCJ9LHtuYW1lOlwiSW5mbzJcIixnbHlwaDpcImVhMWZcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJBc3Rlcmlza1wiLGdseXBoOlwiZWEyMVwifSx7bmFtZTpcIkJldGFcIixnbHlwaDpcImVhMjRcIn0se25hbWU6XCJTYXZlQ29weVwiLGdseXBoOlwiZWEzNVwifSx7bmFtZTpcIkxpc3RcIixnbHlwaDpcImVhMzdcIn0se25hbWU6XCJBc3Rlcmlza1wiLGdseXBoOlwiZWEzOFwifSx7bmFtZTpcIkVycm9yQmFkZ2VcIixnbHlwaDpcImVhMzlcIn0se25hbWU6XCJDaXJjbGVSaW5nXCIsZ2x5cGg6XCJlYTNhXCJ9LHtuYW1lOlwiQ2lyY2xlRmlsbFwiLGdseXBoOlwiZWEzYlwifSx7bmFtZTpcIk1lcmdlQ2FsbFwiLGdseXBoOlwiZWEzY1wifSx7bmFtZTpcIlByaXZhdGVDYWxsXCIsZ2x5cGg6XCJlYTNkXCJ9LHtuYW1lOlwiUmVjb3JkMlwiLGdseXBoOlwiZWEzZlwifSx7bmFtZTpcIkFsbEFwcHNNaXJyb3JlZFwiLGdseXBoOlwiZWE0MFwifSx7bmFtZTpcIkJvb2ttYXJrc01pcnJvcmVkXCIsZ2x5cGg6XCJlYTQxXCJ9LHtuYW1lOlwiQnVsbGV0ZWRMaXN0TWlycm9yZWRcIixnbHlwaDpcImVhNDJcIn0se25hbWU6XCJDYWxsRm9yd2FyZEludGVybmF0aW9uYWxNaXJyb3JlZFwiLGdseXBoOlwiZWE0M1wifSx7bmFtZTpcIkNhbGxGb3J3YXJkUm9hbWluZ01pcnJvcmVkXCIsZ2x5cGg6XCJlYTQ0XCJ9LHtuYW1lOlwiQ2hyb21lQmFja01pcnJvcmVkXCIsZ2x5cGg6XCJlYTQ3XCJ9LHtuYW1lOlwiQ2xlYXJTZWxlY3Rpb25NaXJyb3JlZFwiLGdseXBoOlwiZWE0OFwifSx7bmFtZTpcIkNsb3NlUGFuZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQ5XCJ9LHtuYW1lOlwiQ29udGFjdEluZm9NaXJyb3JlZFwiLGdseXBoOlwiZWE0YVwifSx7bmFtZTpcIkRvY2tSaWdodE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTRiXCJ9LHtuYW1lOlwiRG9ja0xlZnRNaXJyb3JlZFwiLGdseXBoOlwiZWE0Y1wifSx7bmFtZTpcIkV4cGFuZFRpbGVNaXJyb3JlZFwiLGdseXBoOlwiZWE0ZVwifSx7bmFtZTpcIkdvTWlycm9yZWRcIixnbHlwaDpcImVhNGZcIn0se25hbWU6XCJHcmlwcGVyUmVzaXplTWlycm9yZWRcIixnbHlwaDpcImVhNTBcIn0se25hbWU6XCJIZWxwTWlycm9yZWRcIixnbHlwaDpcImVhNTFcIn0se25hbWU6XCJJbXBvcnRNaXJyb3JlZFwiLGdseXBoOlwiZWE1MlwifSx7bmFtZTpcIkltcG9ydEFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUzXCJ9LHtuYW1lOlwiTGVhdmVDaGF0TWlycm9yZWRcIixnbHlwaDpcImVhNTRcIn0se25hbWU6XCJMaXN0TWlycm9yZWRcIixnbHlwaDpcImVhNTVcIn0se25hbWU6XCJNYWlsRm9yd2FyZE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU2XCJ9LHtuYW1lOlwiTWFpbFJlcGx5TWlycm9yZWRcIixnbHlwaDpcImVhNTdcIn0se25hbWU6XCJNYWlsUmVwbHlBbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE1OFwifSx7bmFtZTpcIk9wZW5QYW5lTWlycm9yZWRcIixnbHlwaDpcImVhNWJcIn0se25hbWU6XCJPcGVuV2l0aE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTVjXCJ9LHtuYW1lOlwiUGFya2luZ0xvY2F0aW9uTWlycm9yZWRcIixnbHlwaDpcImVhNWVcIn0se25hbWU6XCJSZXNpemVNb3VzZU1lZGl1bU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTVmXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VTbWFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYwXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VUYWxsTWlycm9yZWRcIixnbHlwaDpcImVhNjFcIn0se25hbWU6XCJSZXNpemVUb3VjaE5hcnJvd2VyTWlycm9yZWRcIixnbHlwaDpcImVhNjJcIn0se25hbWU6XCJTZW5kTWlycm9yZWRcIixnbHlwaDpcImVhNjNcIn0se25hbWU6XCJTZW5kRmlsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTY0XCJ9LHtuYW1lOlwiU2hvd1Jlc3VsdHNNaXJyb3JlZFwiLGdseXBoOlwiZWE2NVwifSx7bmFtZTpcIk1lZGlhXCIsZ2x5cGg6XCJlYTY5XCJ9LHtuYW1lOlwiU3luY0Vycm9yXCIsZ2x5cGg6XCJlYTZhXCJ9LHtuYW1lOlwiRGV2aWNlczNcIixnbHlwaDpcImVhNmNcIn0se25hbWU6XCJTbG93TW90aW9uT25cIixnbHlwaDpcImVhNzlcIn0se25hbWU6XCJMaWdodGJ1bGJcIixnbHlwaDpcImVhODBcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVcIixnbHlwaDpcImVhODFcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZVwiLGdseXBoOlwiZWE4MlwifSx7bmFtZTpcIlN0YXR1c0Vycm9yXCIsZ2x5cGg6XCJlYTgzXCJ9LHtuYW1lOlwiU3RhdHVzV2FybmluZ1wiLGdseXBoOlwiZWE4NFwifSx7bmFtZTpcIlB1enpsZVwiLGdseXBoOlwiZWE4NlwifSx7bmFtZTpcIkNhbGVuZGFyU29saWRcIixnbHlwaDpcImVhODlcIn0se25hbWU6XCJIb21lU29saWRcIixnbHlwaDpcImVhOGFcIn0se25hbWU6XCJQYXJraW5nTG9jYXRpb25Tb2xpZFwiLGdseXBoOlwiZWE4YlwifSx7bmFtZTpcIkNvbnRhY3RTb2xpZFwiLGdseXBoOlwiZWE4Y1wifSx7bmFtZTpcIkNvbnN0cnVjdGlvblNvbGlkXCIsZ2x5cGg6XCJlYThkXCJ9LHtuYW1lOlwiQWNjaWRlbnRTb2xpZFwiLGdseXBoOlwiZWE4ZVwifSx7bmFtZTpcIlJpbmdlclwiLGdseXBoOlwiZWE4ZlwifSx7bmFtZTpcIlBERlwiLGdseXBoOlwiZWE5MFwifSx7bmFtZTpcIlRob3VnaHRCdWJibGVcIixnbHlwaDpcImVhOTFcIn0se25hbWU6XCJIZWFydEJyb2tlblwiLGdseXBoOlwiZWE5MlwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzEwXCIsZ2x5cGg6XCJlYTkzXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyOVwiLGdseXBoOlwiZWE5NFwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjEwXCIsZ2x5cGg6XCJlYTk1XCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRpbmdNaXJyb3JlZFwiLGdseXBoOlwiZWE5N1wifSx7bmFtZTpcIk11bHRpU2VsZWN0TWlycm9yZWRcIixnbHlwaDpcImVhOThcIn0se25hbWU6XCJCcm9vbVwiLGdseXBoOlwiZWE5OVwifSx7bmFtZTpcIkZvcndhcmRDYWxsXCIsZ2x5cGg6XCJlYWMyXCJ9LHtuYW1lOlwiVHJhY2tlcnNcIixnbHlwaDpcImVhZGZcIn0se25hbWU6XCJNYXJrZXRcIixnbHlwaDpcImVhZmNcIn0se25hbWU6XCJQaWVTaW5nbGVcIixnbHlwaDpcImViMDVcIn0se25hbWU6XCJTdG9ja1VwXCIsZ2x5cGg6XCJlYjBmXCJ9LHtuYW1lOlwiU3RvY2tEb3duXCIsZ2x5cGg6XCJlYjExXCJ9LHtuYW1lOlwiRGVzaWduXCIsZ2x5cGg6XCJlYjNjXCJ9LHtuYW1lOlwiV2Vic2l0ZVwiLGdseXBoOlwiZWI0MVwifSx7bmFtZTpcIkRyb3BcIixnbHlwaDpcImViNDJcIn0se25hbWU6XCJSYWRhclwiLGdseXBoOlwiZWI0NFwifSx7bmFtZTpcIkJ1c1NvbGlkXCIsZ2x5cGg6XCJlYjQ3XCJ9LHtuYW1lOlwiRmVycnlTb2xpZFwiLGdseXBoOlwiZWI0OFwifSx7bmFtZTpcIlN0YXJ0UG9pbnRTb2xpZFwiLGdseXBoOlwiZWI0OVwifSx7bmFtZTpcIlN0b3BQb2ludFNvbGlkXCIsZ2x5cGg6XCJlYjRhXCJ9LHtuYW1lOlwiRW5kUG9pbnRTb2xpZFwiLGdseXBoOlwiZWI0YlwifSx7bmFtZTpcIkFpcnBsYW5lU29saWRcIixnbHlwaDpcImViNGNcIn0se25hbWU6XCJUcmFpblNvbGlkXCIsZ2x5cGg6XCJlYjRkXCJ9LHtuYW1lOlwiV29ya1NvbGlkXCIsZ2x5cGg6XCJlYjRlXCJ9LHtuYW1lOlwiUmVtaW5kZXJGaWxsXCIsZ2x5cGg6XCJlYjRmXCJ9LHtuYW1lOlwiUmVtaW5kZXJcIixnbHlwaDpcImViNTBcIn0se25hbWU6XCJIZWFydFwiLGdseXBoOlwiZWI1MVwifSx7bmFtZTpcIkhlYXJ0RmlsbFwiLGdseXBoOlwiZWI1MlwifSx7bmFtZTpcIkV0aGVybmV0RXJyb3JcIixnbHlwaDpcImViNTVcIn0se25hbWU6XCJFdGhlcm5ldFdhcm5pbmdcIixnbHlwaDpcImViNTZcIn0se25hbWU6XCJTdGF0dXNDb25uZWN0aW5nMVwiLGdseXBoOlwiZWI1N1wifSx7bmFtZTpcIlN0YXR1c0Nvbm5lY3RpbmcyXCIsZ2x5cGg6XCJlYjU4XCJ9LHtuYW1lOlwiU3RhdHVzVW5zZWN1cmVcIixnbHlwaDpcImViNTlcIn0se25hbWU6XCJXaWZpRXJyb3IwXCIsZ2x5cGg6XCJlYjVhXCJ9LHtuYW1lOlwiV2lmaUVycm9yMVwiLGdseXBoOlwiZWI1YlwifSx7bmFtZTpcIldpZmlFcnJvcjJcIixnbHlwaDpcImViNWNcIn0se25hbWU6XCJXaWZpRXJyb3IzXCIsZ2x5cGg6XCJlYjVkXCJ9LHtuYW1lOlwiV2lmaUVycm9yNFwiLGdseXBoOlwiZWI1ZVwifSx7bmFtZTpcIldpZmlXYXJuaW5nMFwiLGdseXBoOlwiZWI1ZlwifSx7bmFtZTpcIldpZmlXYXJuaW5nMVwiLGdseXBoOlwiZWI2MFwifSx7bmFtZTpcIldpZmlXYXJuaW5nMlwiLGdseXBoOlwiZWI2MVwifSx7bmFtZTpcIldpZmlXYXJuaW5nM1wiLGdseXBoOlwiZWI2MlwifSx7bmFtZTpcIldpZmlXYXJuaW5nNFwiLGdseXBoOlwiZWI2M1wifSx7bmFtZTpcIkRldmljZXM0XCIsZ2x5cGg6XCJlYjY2XCJ9LHtuYW1lOlwiTlVJSXJpc1wiLGdseXBoOlwiZWI2N1wifSx7bmFtZTpcIk5VSUZhY2VcIixnbHlwaDpcImViNjhcIn0se25hbWU6XCJHYXRld2F5Um91dGVyXCIsZ2x5cGg6XCJlYjc3XCJ9LHtuYW1lOlwiRWRpdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYjdlXCJ9LHtuYW1lOlwiTlVJRlBTdGFydFNsaWRlSGFuZFwiLGdseXBoOlwiZWI4MlwifSx7bmFtZTpcIk5VSUZQU3RhcnRTbGlkZUFjdGlvblwiLGdseXBoOlwiZWI4M1wifSx7bmFtZTpcIk5VSUZQQ29udGludWVTbGlkZUhhbmRcIixnbHlwaDpcImViODRcIn0se25hbWU6XCJOVUlGUENvbnRpbnVlU2xpZGVBY3Rpb25cIixnbHlwaDpcImViODVcIn0se25hbWU6XCJOVUlGUFJvbGxSaWdodEhhbmRcIixnbHlwaDpcImViODZcIn0se25hbWU6XCJOVUlGUFJvbGxSaWdodEhhbmRBY3Rpb25cIixnbHlwaDpcImViODdcIn0se25hbWU6XCJOVUlGUFJvbGxMZWZ0SGFuZFwiLGdseXBoOlwiZWI4OFwifSx7bmFtZTpcIk5VSUZQUm9sbExlZnRBY3Rpb25cIixnbHlwaDpcImViODlcIn0se25hbWU6XCJOVUlGUFByZXNzSGFuZFwiLGdseXBoOlwiZWI4YVwifSx7bmFtZTpcIk5VSUZQUHJlc3NBY3Rpb25cIixnbHlwaDpcImViOGJcIn0se25hbWU6XCJOVUlGUFByZXNzUmVwZWF0SGFuZFwiLGdseXBoOlwiZWI4Y1wifSx7bmFtZTpcIk5VSUZQUHJlc3NSZXBlYXRBY3Rpb25cIixnbHlwaDpcImViOGRcIn0se25hbWU6XCJTdGF0dXNFcnJvckZ1bGxcIixnbHlwaDpcImViOTBcIn0se25hbWU6XCJUYXNrVmlld0V4cGFuZGVkXCIsZ2x5cGg6XCJlYjkxXCJ9LHtuYW1lOlwiQ2VydGlmaWNhdGVcIixnbHlwaDpcImViOTVcIn0se25hbWU6XCJCYWNrU3BhY2VRV0VSVFlMZ1wiLGdseXBoOlwiZWI5NlwifSx7bmFtZTpcIlJldHVybktleUxnXCIsZ2x5cGg6XCJlYjk3XCJ9LHtuYW1lOlwiRmFzdEZvcndhcmRcIixnbHlwaDpcImViOWRcIn0se25hbWU6XCJSZXdpbmRcIixnbHlwaDpcImViOWVcIn0se25hbWU6XCJQaG90bzJcIixnbHlwaDpcImViOWZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MFwiLGdseXBoOlwiZWJhMFwifSx7bmFtZTpcIk1vYkJhdHRlcnkxXCIsZ2x5cGg6XCJlYmExXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTJcIixnbHlwaDpcImViYTJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5M1wiLGdseXBoOlwiZWJhM1wifSx7bmFtZTpcIk1vYkJhdHRlcnk0XCIsZ2x5cGg6XCJlYmE0XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTVcIixnbHlwaDpcImViYTVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5NlwiLGdseXBoOlwiZWJhNlwifSx7bmFtZTpcIk1vYkJhdHRlcnk3XCIsZ2x5cGg6XCJlYmE3XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeThcIixnbHlwaDpcImViYThcIn0se25hbWU6XCJNb2JCYXR0ZXJ5OVwiLGdseXBoOlwiZWJhOVwifSx7bmFtZTpcIk1vYkJhdHRlcnkxMFwiLGdseXBoOlwiZWJhYVwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzBcIixnbHlwaDpcImViYWJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcxXCIsZ2x5cGg6XCJlYmFjXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMlwiLGdseXBoOlwiZWJhZFwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzNcIixnbHlwaDpcImViYWVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc0XCIsZ2x5cGg6XCJlYmFmXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nNVwiLGdseXBoOlwiZWJiMFwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzZcIixnbHlwaDpcImViYjFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc3XCIsZ2x5cGg6XCJlYmIyXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nOFwiLGdseXBoOlwiZWJiM1wifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzlcIixnbHlwaDpcImViYjRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcxMFwiLGdseXBoOlwiZWJiNVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjBcIixnbHlwaDpcImViYjZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIxXCIsZ2x5cGg6XCJlYmI3XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMlwiLGdseXBoOlwiZWJiOFwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjNcIixnbHlwaDpcImViYjlcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI0XCIsZ2x5cGg6XCJlYmJhXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyNVwiLGdseXBoOlwiZWJiYlwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjZcIixnbHlwaDpcImViYmNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI3XCIsZ2x5cGg6XCJlYmJkXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyOFwiLGdseXBoOlwiZWJiZVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjlcIixnbHlwaDpcImViYmZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIxMFwiLGdseXBoOlwiZWJjMFwifSx7bmFtZTpcIkRpY3Rpb25hcnlDbG91ZFwiLGdseXBoOlwiZWJjM1wifSx7bmFtZTpcIlJlc2V0RHJpdmVcIixnbHlwaDpcImViYzRcIn0se25hbWU6XCJWb2x1bWVCYXJzXCIsZ2x5cGg6XCJlYmM1XCJ9LHtuYW1lOlwiUHJvamVjdFwiLGdseXBoOlwiZWJjNlwifSx7bmFtZTpcIkFkanVzdEhvbG9ncmFtXCIsZ2x5cGg6XCJlYmQyXCJ9LHtuYW1lOlwiQ2xvdWREb3dubG9hZFwiLGdseXBoOlwiZWJkM1wifSx7bmFtZTpcIk1vYldpZmlDYWxsQmFyc1wiLGdseXBoOlwiZWJkNFwifSx7bmFtZTpcIk1vYldpZmlDYWxsMFwiLGdseXBoOlwiZWJkNVwifSx7bmFtZTpcIk1vYldpZmlDYWxsMVwiLGdseXBoOlwiZWJkNlwifSx7bmFtZTpcIk1vYldpZmlDYWxsMlwiLGdseXBoOlwiZWJkN1wifSx7bmFtZTpcIk1vYldpZmlDYWxsM1wiLGdseXBoOlwiZWJkOFwifSx7bmFtZTpcIk1vYldpZmlDYWxsNFwiLGdseXBoOlwiZWJkOVwifSx7bmFtZTpcIkZhbWlseVwiLGdseXBoOlwiZWJkYVwifSx7bmFtZTpcIkxvY2tGZWVkYmFja1wiLGdseXBoOlwiZWJkYlwifSx7bmFtZTpcIkRldmljZURpc2NvdmVyeVwiLGdseXBoOlwiZWJkZVwifSx7bmFtZTpcIldpbmREaXJlY3Rpb25cIixnbHlwaDpcImViZTZcIn0se25hbWU6XCJSaWdodEFycm93S2V5VGltZTBcIixnbHlwaDpcImViZTdcIn0se25hbWU6XCJCdWdcIixnbHlwaDpcImViZThcIn0se25hbWU6XCJUYWJsZXRNb2RlXCIsZ2x5cGg6XCJlYmZjXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlTGVmdFwiLGdseXBoOlwiZWJmZFwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlTGVmdFwiLGdseXBoOlwiZWJmZVwifSx7bmFtZTpcIlN0YXR1c0Vycm9yTGVmdFwiLGdseXBoOlwiZWJmZlwifSx7bmFtZTpcIlN0YXR1c1dhcm5pbmdMZWZ0XCIsZ2x5cGg6XCJlYzAwXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVVua25vd25cIixnbHlwaDpcImVjMDJcIn0se25hbWU6XCJOZXR3b3JrVG93ZXJcIixnbHlwaDpcImVjMDVcIn0se25hbWU6XCJDaXR5TmV4dFwiLGdseXBoOlwiZWMwNlwifSx7bmFtZTpcIkNpdHlOZXh0MlwiLGdseXBoOlwiZWMwN1wifSx7bmFtZTpcIkNvdXJ0aG91c2VcIixnbHlwaDpcImVjMDhcIn0se25hbWU6XCJHcm9jZXJpZXNcIixnbHlwaDpcImVjMDlcIn0se25hbWU6XCJTdXN0YWluYWJsZVwiLGdseXBoOlwiZWMwYVwifSx7bmFtZTpcIkJ1aWxkaW5nRW5lcmd5XCIsZ2x5cGg6XCJlYzBiXCJ9LHtuYW1lOlwiVG9nZ2xlRmlsbGVkXCIsZ2x5cGg6XCJlYzExXCJ9LHtuYW1lOlwiVG9nZ2xlQm9yZGVyXCIsZ2x5cGg6XCJlYzEyXCJ9LHtuYW1lOlwiU2xpZGVyVGh1bWJcIixnbHlwaDpcImVjMTNcIn0se25hbWU6XCJUb2dnbGVUaHVtYlwiLGdseXBoOlwiZWMxNFwifSx7bmFtZTpcIk1pcmFjYXN0TG9nb1NtYWxsXCIsZ2x5cGg6XCJlYzE1XCJ9LHtuYW1lOlwiTWlyYWNhc3RMb2dvTGFyZ2VcIixnbHlwaDpcImVjMTZcIn0se25hbWU6XCJQTEFQXCIsZ2x5cGg6XCJlYzE5XCJ9LHtuYW1lOlwiQmFkZ2VcIixnbHlwaDpcImVjMWJcIn0se25hbWU6XCJTaWduYWxSb2FtaW5nXCIsZ2x5cGg6XCJlYzFlXCJ9LHtuYW1lOlwiTW9iaWxlTG9ja2VkXCIsZ2x5cGg6XCJlYzIwXCJ9LHtuYW1lOlwiSW5zaWRlckh1YkFwcFwiLGdseXBoOlwiZWMyNFwifSx7bmFtZTpcIlBlcnNvbmFsRm9sZGVyXCIsZ2x5cGg6XCJlYzI1XCJ9LHtuYW1lOlwiSG9tZUdyb3VwXCIsZ2x5cGg6XCJlYzI2XCJ9LHtuYW1lOlwiTXlOZXR3b3JrXCIsZ2x5cGg6XCJlYzI3XCJ9LHtuYW1lOlwiS2V5Ym9hcmRGdWxsXCIsZ2x5cGg6XCJlYzMxXCJ9LHtuYW1lOlwiQ2FmZVwiLGdseXBoOlwiZWMzMlwifSx7bmFtZTpcIk1vYlNpZ25hbDFcIixnbHlwaDpcImVjMzdcIn0se25hbWU6XCJNb2JTaWduYWwyXCIsZ2x5cGg6XCJlYzM4XCJ9LHtuYW1lOlwiTW9iU2lnbmFsM1wiLGdseXBoOlwiZWMzOVwifSx7bmFtZTpcIk1vYlNpZ25hbDRcIixnbHlwaDpcImVjM2FcIn0se25hbWU6XCJNb2JTaWduYWw1XCIsZ2x5cGg6XCJlYzNiXCJ9LHtuYW1lOlwiTW9iV2lmaTFcIixnbHlwaDpcImVjM2NcIn0se25hbWU6XCJNb2JXaWZpMlwiLGdseXBoOlwiZWMzZFwifSx7bmFtZTpcIk1vYldpZmkzXCIsZ2x5cGg6XCJlYzNlXCJ9LHtuYW1lOlwiTW9iV2lmaTRcIixnbHlwaDpcImVjM2ZcIn0se25hbWU6XCJNb2JBaXJwbGFuZVwiLGdseXBoOlwiZWM0MFwifSx7bmFtZTpcIk1vYkJsdWV0b290aFwiLGdseXBoOlwiZWM0MVwifSx7bmFtZTpcIk1vYkFjdGlvbkNlbnRlclwiLGdseXBoOlwiZWM0MlwifSx7bmFtZTpcIk1vYkxvY2F0aW9uXCIsZ2x5cGg6XCJlYzQzXCJ9LHtuYW1lOlwiTW9iV2lmaUhvdHNwb3RcIixnbHlwaDpcImVjNDRcIn0se25hbWU6XCJMYW5ndWFnZUpwblwiLGdseXBoOlwiZWM0NVwifSx7bmFtZTpcIk1vYlF1aWV0SG91cnNcIixnbHlwaDpcImVjNDZcIn0se25hbWU6XCJNb2JEcml2aW5nTW9kZVwiLGdseXBoOlwiZWM0N1wifSx7bmFtZTpcIlNwZWVkT2ZmXCIsZ2x5cGg6XCJlYzQ4XCJ9LHtuYW1lOlwiU3BlZWRNZWRpdW1cIixnbHlwaDpcImVjNDlcIn0se25hbWU6XCJTcGVlZEhpZ2hcIixnbHlwaDpcImVjNGFcIn0se25hbWU6XCJUaGlzUENcIixnbHlwaDpcImVjNGVcIn0se25hbWU6XCJNdXNpY05vdGVcIixnbHlwaDpcImVjNGZcIn0se25hbWU6XCJGaWxlRXhwbG9yZXJcIixnbHlwaDpcImVjNTBcIn0se25hbWU6XCJGaWxlRXhwbG9yZXJBcHBcIixnbHlwaDpcImVjNTFcIn0se25hbWU6XCJMZWZ0QXJyb3dLZXlUaW1lMFwiLGdseXBoOlwiZWM1MlwifSx7bmFtZTpcIk1pY09mZlwiLGdseXBoOlwiZWM1NFwifSx7bmFtZTpcIk1pY1NsZWVwXCIsZ2x5cGg6XCJlYzU1XCJ9LHtuYW1lOlwiTWljRXJyb3JcIixnbHlwaDpcImVjNTZcIn0se25hbWU6XCJQbGF5YmFja1JhdGUxeFwiLGdseXBoOlwiZWM1N1wifSx7bmFtZTpcIlBsYXliYWNrUmF0ZU90aGVyXCIsZ2x5cGg6XCJlYzU4XCJ9LHtuYW1lOlwiQ2FzaERyYXdlclwiLGdseXBoOlwiZWM1OVwifSx7bmFtZTpcIkJhcmNvZGVTY2FubmVyXCIsZ2x5cGg6XCJlYzVhXCJ9LHtuYW1lOlwiUmVjZWlwdFByaW50ZXJcIixnbHlwaDpcImVjNWJcIn0se25hbWU6XCJNYWdTdHJpcGVSZWFkZXJcIixnbHlwaDpcImVjNWNcIn0se25hbWU6XCJDb21wbGV0ZWRTb2xpZFwiLGdseXBoOlwiZWM2MVwifSx7bmFtZTpcIkNvbXBhbmlvbkFwcFwiLGdseXBoOlwiZWM2NFwifSx7bmFtZTpcIkZhdmljb24yXCIsZ2x5cGg6XCJlYzZjXCJ9LHtuYW1lOlwiU3dpcGVSZXZlYWxBcnRcIixnbHlwaDpcImVjNmRcIn0se25hbWU6XCJNaWNPblwiLGdseXBoOlwiZWM3MVwifSx7bmFtZTpcIk1pY0NsaXBwaW5nXCIsZ2x5cGg6XCJlYzcyXCJ9LHtuYW1lOlwiVGFibGV0U2VsZWN0ZWRcIixnbHlwaDpcImVjNzRcIn0se25hbWU6XCJNb2JpbGVTZWxlY3RlZFwiLGdseXBoOlwiZWM3NVwifSx7bmFtZTpcIkxhcHRvcFNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc2XCJ9LHtuYW1lOlwiVFZNb25pdG9yU2VsZWN0ZWRcIixnbHlwaDpcImVjNzdcIn0se25hbWU6XCJEZXZlbG9wZXJUb29sc1wiLGdseXBoOlwiZWM3YVwifSx7bmFtZTpcIk1vYkNhbGxGb3J3YXJkaW5nXCIsZ2x5cGg6XCJlYzdlXCJ9LHtuYW1lOlwiTW9iQ2FsbEZvcndhcmRpbmdNaXJyb3JlZFwiLGdseXBoOlwiZWM3ZlwifSx7bmFtZTpcIkJvZHlDYW1cIixnbHlwaDpcImVjODBcIn0se25hbWU6XCJQb2xpY2VDYXJcIixnbHlwaDpcImVjODFcIn0se25hbWU6XCJEcmF3XCIsZ2x5cGg6XCJlYzg3XCJ9LHtuYW1lOlwiRHJhd1NvbGlkXCIsZ2x5cGg6XCJlYzg4XCJ9LHtuYW1lOlwiTG93ZXJCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlYzhhXCJ9LHtuYW1lOlwiU2Nyb2xsVXBEb3duXCIsZ2x5cGg6XCJlYzhmXCJ9LHtuYW1lOlwiRGF0ZVRpbWVcIixnbHlwaDpcImVjOTJcIn0se25hbWU6XCJIb2xvTGVuc1wiLGdseXBoOlwiZWM5NFwifSx7bmFtZTpcIlRpbGVzXCIsZ2x5cGg6XCJlY2E1XCJ9LHtuYW1lOlwiUGFydHlMZWFkZXJcIixnbHlwaDpcImVjYTdcIn0se25hbWU6XCJBcHBJY29uRGVmYXVsdFwiLGdseXBoOlwiZWNhYVwifSx7bmFtZTpcIkNhbG9yaWVzXCIsZ2x5cGg6XCJlY2FkXCJ9LHtuYW1lOlwiUE9JXCIsZ2x5cGg6XCJlY2FmXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnkwXCIsZ2x5cGg6XCJlY2I5XCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnkxXCIsZ2x5cGg6XCJlY2JhXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnkyXCIsZ2x5cGg6XCJlY2JiXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnkzXCIsZ2x5cGg6XCJlY2JjXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnk0XCIsZ2x5cGg6XCJlY2JkXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnk1XCIsZ2x5cGg6XCJlY2JlXCJ9LHtuYW1lOlwiQmFuZEJhdHRlcnk2XCIsZ2x5cGg6XCJlY2JmXCJ9LHtuYW1lOlwiQWRkU3VyZmFjZUh1YlwiLGdseXBoOlwiZWNjNFwifSx7bmFtZTpcIkRldlVwZGF0ZVwiLGdseXBoOlwiZWNjNVwifSx7bmFtZTpcIlVuaXRcIixnbHlwaDpcImVjYzZcIn0se25hbWU6XCJBZGRUb1wiLGdseXBoOlwiZWNjOFwifSx7bmFtZTpcIlJlbW92ZUZyb21cIixnbHlwaDpcImVjYzlcIn0se25hbWU6XCJSYWRpb0J0bk9mZlwiLGdseXBoOlwiZWNjYVwifSx7bmFtZTpcIlJhZGlvQnRuT25cIixnbHlwaDpcImVjY2JcIn0se25hbWU6XCJSYWRpb0J1bGxldDJcIixnbHlwaDpcImVjY2NcIn0se25hbWU6XCJFeHBsb3JlQ29udGVudFwiLGdseXBoOlwiZWNjZFwifSx7bmFtZTpcIkJsb2NrZWQyXCIsZ2x5cGg6XCJlY2U0XCJ9LHtuYW1lOlwiU2Nyb2xsTW9kZVwiLGdseXBoOlwiZWNlN1wifSx7bmFtZTpcIlpvb21Nb2RlXCIsZ2x5cGg6XCJlY2U4XCJ9LHtuYW1lOlwiUGFuTW9kZVwiLGdseXBoOlwiZWNlOVwifSx7bmFtZTpcIldpcmVkVVNCXCIsZ2x5cGg6XCJlY2YwXCJ9LHtuYW1lOlwiV2lyZWxlc3NVU0JcIixnbHlwaDpcImVjZjFcIn0se25hbWU6XCJVU0JTYWZlQ29ubmVjdFwiLGdseXBoOlwiZWNmM1wifSx7bmFtZTpcIkFjdGlvbkNlbnRlck5vdGlmaWNhdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJlZDBjXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyTWlycm9yZWRcIixnbHlwaDpcImVkMGRcIn0se25hbWU6XCJTdWJzY3JpcHRpb25BZGRcIixnbHlwaDpcImVkMGVcIn0se25hbWU6XCJSZXNldERldmljZVwiLGdseXBoOlwiZWQxMFwifSx7bmFtZTpcIlN1YnNjcmlwdGlvbkFkZE1pcnJvcmVkXCIsZ2x5cGg6XCJlZDExXCJ9LHtuYW1lOlwiUVJDb2RlXCIsZ2x5cGg6XCJlZDE0XCJ9LHtuYW1lOlwiRmVlZGJhY2tcIixnbHlwaDpcImVkMTVcIn0se25hbWU6XCJIaWRlXCIsZ2x5cGg6XCJlZDFhXCJ9LHtuYW1lOlwiU3VidGl0bGVzXCIsZ2x5cGg6XCJlZDFlXCJ9LHtuYW1lOlwiU3VidGl0bGVzQXVkaW9cIixnbHlwaDpcImVkMWZcIn0se25hbWU6XCJPcGVuRm9sZGVySG9yaXpvbnRhbFwiLGdseXBoOlwiZWQyNVwifSx7bmFtZTpcIkNhbGVuZGFyTWlycm9yZWRcIixnbHlwaDpcImVkMjhcIn0se25hbWU6XCJNb2JlU0lNXCIsZ2x5cGg6XCJlZDJhXCJ9LHtuYW1lOlwiTW9iZVNJTU5vUHJvZmlsZVwiLGdseXBoOlwiZWQyYlwifSx7bmFtZTpcIk1vYmVTSU1Mb2NrZWRcIixnbHlwaDpcImVkMmNcIn0se25hbWU6XCJNb2JlU0lNQnVzeVwiLGdseXBoOlwiZWQyZFwifSx7bmFtZTpcIlNpZ25hbEVycm9yXCIsZ2x5cGg6XCJlZDJlXCJ9LHtuYW1lOlwiU3RyZWFtaW5nRW50ZXJwcmlzZVwiLGdseXBoOlwiZWQyZlwifSx7bmFtZTpcIkhlYWRwaG9uZTBcIixnbHlwaDpcImVkMzBcIn0se25hbWU6XCJIZWFkcGhvbmUxXCIsZ2x5cGg6XCJlZDMxXCJ9LHtuYW1lOlwiSGVhZHBob25lMlwiLGdseXBoOlwiZWQzMlwifSx7bmFtZTpcIkhlYWRwaG9uZTNcIixnbHlwaDpcImVkMzNcIn0se25hbWU6XCJBcHBzXCIsZ2x5cGg6XCJlZDM1XCJ9LHtuYW1lOlwiS2V5Ym9hcmRCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlZDM5XCJ9LHtuYW1lOlwiS2V5Ym9hcmRMb3dlckJyaWdodG5lc3NcIixnbHlwaDpcImVkM2FcIn0se25hbWU6XCJTa2lwQmFjazEwXCIsZ2x5cGg6XCJlZDNjXCJ9LHtuYW1lOlwiU2tpcEZvcndhcmQzMFwiLGdseXBoOlwiZWQzZFwifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJcIixnbHlwaDpcImVkNDFcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyRmlsbFwiLGdseXBoOlwiZWQ0MlwifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJPcGVuXCIsZ2x5cGg6XCJlZDQzXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlck9wZW5GaWxsXCIsZ2x5cGg6XCJlZDQ0XCJ9LHtuYW1lOlwiTXVsdGltZWRpYURNUFwiLGdseXBoOlwiZWQ0N1wifSx7bmFtZTpcIktleWJvYXJkT25lSGFuZGVkXCIsZ2x5cGg6XCJlZDRjXCJ9LHtuYW1lOlwiTmFycmF0b3JcIixnbHlwaDpcImVkNGRcIn0se25hbWU6XCJFbW9qaVRhYlBlb3BsZVwiLGdseXBoOlwiZWQ1M1wifSx7bmFtZTpcIkVtb2ppVGFiU21pbGVzQW5pbWFsc1wiLGdseXBoOlwiZWQ1NFwifSx7bmFtZTpcIkVtb2ppVGFiQ2VsZWJyYXRpb25PYmplY3RzXCIsZ2x5cGg6XCJlZDU1XCJ9LHtuYW1lOlwiRW1vamlUYWJGb29kUGxhbnRzXCIsZ2x5cGg6XCJlZDU2XCJ9LHtuYW1lOlwiRW1vamlUYWJUcmFuc2l0UGxhY2VzXCIsZ2x5cGg6XCJlZDU3XCJ9LHtuYW1lOlwiRW1vamlUYWJTeW1ib2xzXCIsZ2x5cGg6XCJlZDU4XCJ9LHtuYW1lOlwiRW1vamlUYWJUZXh0U21pbGVzXCIsZ2x5cGg6XCJlZDU5XCJ9LHtuYW1lOlwiRW1vamlUYWJGYXZvcml0ZXNcIixnbHlwaDpcImVkNWFcIn0se25hbWU6XCJFbW9qaVN3YXRjaFwiLGdseXBoOlwiZWQ1YlwifSx7bmFtZTpcIkNvbm5lY3RBcHBcIixnbHlwaDpcImVkNWNcIn0se25hbWU6XCJDb21wYW5pb25EZXZpY2VGcmFtZXdvcmtcIixnbHlwaDpcImVkNWRcIn0se25hbWU6XCJSdWxlclwiLGdseXBoOlwiZWQ1ZVwifSx7bmFtZTpcIkZpbmdlcklua2luZ1wiLGdseXBoOlwiZWQ1ZlwifSx7bmFtZTpcIlN0cm9rZUVyYXNlXCIsZ2x5cGg6XCJlZDYwXCJ9LHtuYW1lOlwiUG9pbnRFcmFzZVwiLGdseXBoOlwiZWQ2MVwifSx7bmFtZTpcIkNsZWFyQWxsSW5rXCIsZ2x5cGg6XCJlZDYyXCJ9LHtuYW1lOlwiUGVuY2lsXCIsZ2x5cGg6XCJlZDYzXCJ9LHtuYW1lOlwiTWFya2VyXCIsZ2x5cGg6XCJlZDY0XCJ9LHtuYW1lOlwiSW5raW5nQ2FyZXRcIixnbHlwaDpcImVkNjVcIn0se25hbWU6XCJJbmtpbmdDb2xvck91dGxpbmVcIixnbHlwaDpcImVkNjZcIn0se25hbWU6XCJJbmtpbmdDb2xvckZpbGxcIixnbHlwaDpcImVkNjdcIn0se25hbWU6XCJIYXJkRHJpdmVcIixnbHlwaDpcImVkYTJcIn0se25hbWU6XCJOZXR3b3JrQWRhcHRlclwiLGdseXBoOlwiZWRhM1wifSx7bmFtZTpcIlRvdWNoc2NyZWVuXCIsZ2x5cGg6XCJlZGE0XCJ9LHtuYW1lOlwiTmV0d29ya1ByaW50ZXJcIixnbHlwaDpcImVkYTVcIn0se25hbWU6XCJDbG91ZFByaW50ZXJcIixnbHlwaDpcImVkYTZcIn0se25hbWU6XCJLZXlib2FyZFNob3J0Y3V0XCIsZ2x5cGg6XCJlZGE3XCJ9LHtuYW1lOlwiQnJ1c2hTaXplXCIsZ2x5cGg6XCJlZGE4XCJ9LHtuYW1lOlwiTmFycmF0b3JGb3J3YXJkXCIsZ2x5cGg6XCJlZGE5XCJ9LHtuYW1lOlwiTmFycmF0b3JGb3J3YXJkTWlycm9yZWRcIixnbHlwaDpcImVkYWFcIn0se25hbWU6XCJTeW5jQmFkZ2UxMlwiLGdseXBoOlwiZWRhYlwifSx7bmFtZTpcIlJpbmdlckJhZGdlMTJcIixnbHlwaDpcImVkYWNcIn0se25hbWU6XCJBc3Rlcmlza0JhZGdlMTJcIixnbHlwaDpcImVkYWRcIn0se25hbWU6XCJFcnJvckJhZGdlMTJcIixnbHlwaDpcImVkYWVcIn0se25hbWU6XCJDaXJjbGVSaW5nQmFkZ2UxMlwiLGdseXBoOlwiZWRhZlwifSx7bmFtZTpcIkNpcmNsZUZpbGxCYWRnZTEyXCIsZ2x5cGg6XCJlZGIwXCJ9LHtuYW1lOlwiSW1wb3J0YW50QmFkZ2UxMlwiLGdseXBoOlwiZWRiMVwifSx7bmFtZTpcIk1haWxCYWRnZTEyXCIsZ2x5cGg6XCJlZGIzXCJ9LHtuYW1lOlwiUGF1c2VCYWRnZTEyXCIsZ2x5cGg6XCJlZGI0XCJ9LHtuYW1lOlwiUGxheUJhZGdlMTJcIixnbHlwaDpcImVkYjVcIn0se25hbWU6XCJQZW5Xb3Jrc3BhY2VcIixnbHlwaDpcImVkYzZcIn0se25hbWU6XCJDYXJldExlZnQ4XCIsZ2x5cGg6XCJlZGQ1XCJ9LHtuYW1lOlwiQ2FyZXRSaWdodDhcIixnbHlwaDpcImVkZDZcIn0se25hbWU6XCJDYXJldFVwOFwiLGdseXBoOlwiZWRkN1wifSx7bmFtZTpcIkNhcmV0RG93bjhcIixnbHlwaDpcImVkZDhcIn0se25hbWU6XCJDYXJldExlZnRTb2xpZDhcIixnbHlwaDpcImVkZDlcIn0se25hbWU6XCJDYXJldFJpZ2h0U29saWQ4XCIsZ2x5cGg6XCJlZGRhXCJ9LHtuYW1lOlwiQ2FyZXRVcFNvbGlkOFwiLGdseXBoOlwiZWRkYlwifSx7bmFtZTpcIkNhcmV0RG93blNvbGlkOFwiLGdseXBoOlwiZWRkY1wifSx7bmFtZTpcIlN0cmlrZXRocm91Z2hcIixnbHlwaDpcImVkZTBcIn0se25hbWU6XCJFeHBvcnRcIixnbHlwaDpcImVkZTFcIn0se25hbWU6XCJFeHBvcnRNaXJyb3JlZFwiLGdseXBoOlwiZWRlMlwifSx7bmFtZTpcIkJ1dHRvbk1lbnVcIixnbHlwaDpcImVkZTNcIn0se25hbWU6XCJDbG91ZFNlYXJjaFwiLGdseXBoOlwiZWRlNFwifSx7bmFtZTpcIlBpbnlpbklNRUxvZ29cIixnbHlwaDpcImVkZTVcIn0se25hbWU6XCJDYWxsaWdyYXBoeVBlblwiLGdseXBoOlwiZWRmYlwifSx7bmFtZTpcIlJlcGx5TWlycm9yZWRcIixnbHlwaDpcImVlMzVcIn0se25hbWU6XCJMb2Nrc2NyZWVuRGVza3RvcFwiLGdseXBoOlwiZWUzZlwifSx7bmFtZTpcIlRhc2tWaWV3U2V0dGluZ3NcIixnbHlwaDpcImVlNDBcIn0se25hbWU6XCJNaW5pRXhwYW5kMk1pcnJvcmVkXCIsZ2x5cGg6XCJlZTQ3XCJ9LHtuYW1lOlwiTWluaUNvbnRyYWN0Mk1pcnJvcmVkXCIsZ2x5cGg6XCJlZTQ5XCJ9LHtuYW1lOlwiUGxheTM2XCIsZ2x5cGg6XCJlZTRhXCJ9LHtuYW1lOlwiUGVuUGFsZXR0ZVwiLGdseXBoOlwiZWU1NlwifSx7bmFtZTpcIkd1ZXN0VXNlclwiLGdseXBoOlwiZWU1N1wifSx7bmFtZTpcIlNldHRpbmdzQmF0dGVyeVwiLGdseXBoOlwiZWU2M1wifSx7bmFtZTpcIlRhc2tiYXJQaG9uZVwiLGdseXBoOlwiZWU2NFwifSx7bmFtZTpcIkxvY2tTY3JlZW5HbGFuY2VcIixnbHlwaDpcImVlNjVcIn0se25hbWU6XCJHZW5lcmljU2NhblwiLGdseXBoOlwiZWU2ZlwifSx7bmFtZTpcIkltYWdlRXhwb3J0XCIsZ2x5cGg6XCJlZTcxXCJ9LHtuYW1lOlwiV2lmaUV0aGVybmV0XCIsZ2x5cGg6XCJlZTc3XCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyUXVpZXRcIixnbHlwaDpcImVlNzlcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJRdWlldE5vdGlmaWNhdGlvblwiLGdseXBoOlwiZWU3YVwifSx7bmFtZTpcIlRyYWNrZXJzTWlycm9yZWRcIixnbHlwaDpcImVlOTJcIn0se25hbWU6XCJEYXRlVGltZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZTkzXCJ9LHtuYW1lOlwiV2hlZWxcIixnbHlwaDpcImVlOTRcIn0se25hbWU6XCJWaXJ0dWFsTWFjaGluZUdyb3VwXCIsZ2x5cGg6XCJlZWEzXCJ9LHtuYW1lOlwiQnV0dG9uVmlldzJcIixnbHlwaDpcImVlY2FcIn0se25hbWU6XCJQZW5Xb3Jrc3BhY2VNaXJyb3JlZFwiLGdseXBoOlwiZWYxNVwifSx7bmFtZTpcIlBlblBhbGV0dGVNaXJyb3JlZFwiLGdseXBoOlwiZWYxNlwifSx7bmFtZTpcIlN0cm9rZUVyYXNlTWlycm9yZWRcIixnbHlwaDpcImVmMTdcIn0se25hbWU6XCJQb2ludEVyYXNlTWlycm9yZWRcIixnbHlwaDpcImVmMThcIn0se25hbWU6XCJDbGVhckFsbElua01pcnJvcmVkXCIsZ2x5cGg6XCJlZjE5XCJ9LHtuYW1lOlwiQmFja2dyb3VuZFRvZ2dsZVwiLGdseXBoOlwiZWYxZlwifSx7bmFtZTpcIk1hcnF1ZWVcIixnbHlwaDpcImVmMjBcIn0se25hbWU6XCJDaHJvbWVDbG9zZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJjXCJ9LHtuYW1lOlwiQ2hyb21lTWluaW1pemVDb250cmFzdFwiLGdseXBoOlwiZWYyZFwifSx7bmFtZTpcIkNocm9tZU1heGltaXplQ29udHJhc3RcIixnbHlwaDpcImVmMmVcIn0se25hbWU6XCJDaHJvbWVSZXN0b3JlQ29udHJhc3RcIixnbHlwaDpcImVmMmZcIn0se25hbWU6XCJUcmFmZmljTGlnaHRcIixnbHlwaDpcImVmMzFcIn0se25hbWU6XCJSZXBsYXlcIixnbHlwaDpcImVmM2JcIn0se25hbWU6XCJFeWVkcm9wcGVyXCIsZ2x5cGg6XCJlZjNjXCJ9LHtuYW1lOlwiTGluZURpc3BsYXlcIixnbHlwaDpcImVmM2RcIn0se25hbWU6XCJQSU5QYWRcIixnbHlwaDpcImVmM2VcIn0se25hbWU6XCJTaWduYXR1cmVDYXB0dXJlXCIsZ2x5cGg6XCJlZjNmXCJ9LHtuYW1lOlwiQ2hpcENhcmRDcmVkaXRDYXJkUmVhZGVyXCIsZ2x5cGg6XCJlZjQwXCJ9LHtuYW1lOlwiTWFya2V0RG93blwiLGdseXBoOlwiZWY0MlwifSx7bmFtZTpcIlBsYXllclNldHRpbmdzXCIsZ2x5cGg6XCJlZjU4XCJ9LHtuYW1lOlwiTGFuZHNjYXBlT3JpZW50YXRpb25cIixnbHlwaDpcImVmNmJcIn0se25hbWU6XCJGbG93XCIsZ2x5cGg6XCJlZjkwXCJ9LHtuYW1lOlwiVG91Y2hwYWRcIixnbHlwaDpcImVmYTVcIn0se25hbWU6XCJTcGVlY2hcIixnbHlwaDpcImVmYTlcIn0se25hbWU6XCJLbm93bGVkZ2VBcnRpY2xlXCIsZ2x5cGg6XCJmMDAwXCJ9LHtuYW1lOlwiUmVsYXRpb25zaGlwXCIsZ2x5cGg6XCJmMDAzXCJ9LHtuYW1lOlwiWmlwRm9sZGVyXCIsZ2x5cGg6XCJmMDEyXCJ9LHtuYW1lOlwiRGVmYXVsdEFQTlwiLGdseXBoOlwiZjA4MFwifSx7bmFtZTpcIlVzZXJBUE5cIixnbHlwaDpcImYwODFcIn0se25hbWU6XCJEb3VibGVQaW55aW5cIixnbHlwaDpcImYwODVcIn0se25hbWU6XCJCbHVlTGlnaHRcIixnbHlwaDpcImYwOGNcIn0se25hbWU6XCJDYXJldFNvbGlkTGVmdFwiLGdseXBoOlwiZjA4ZFwifSx7bmFtZTpcIkNhcmV0U29saWREb3duXCIsZ2x5cGg6XCJmMDhlXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZFJpZ2h0XCIsZ2x5cGg6XCJmMDhmXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZFVwXCIsZ2x5cGg6XCJmMDkwXCJ9LHtuYW1lOlwiQnV0dG9uQVwiLGdseXBoOlwiZjA5M1wifSx7bmFtZTpcIkJ1dHRvbkJcIixnbHlwaDpcImYwOTRcIn0se25hbWU6XCJCdXR0b25ZXCIsZ2x5cGg6XCJmMDk1XCJ9LHtuYW1lOlwiQnV0dG9uWFwiLGdseXBoOlwiZjA5NlwifSx7bmFtZTpcIkFycm93VXA4XCIsZ2x5cGg6XCJmMGFkXCJ9LHtuYW1lOlwiQXJyb3dEb3duOFwiLGdseXBoOlwiZjBhZVwifSx7bmFtZTpcIkFycm93UmlnaHQ4XCIsZ2x5cGg6XCJmMGFmXCJ9LHtuYW1lOlwiQXJyb3dMZWZ0OFwiLGdseXBoOlwiZjBiMFwifSx7bmFtZTpcIlF1YXJlbnRpbmVkSXRlbXNcIixnbHlwaDpcImYwYjJcIn0se25hbWU6XCJRdWFyZW50aW5lZEl0ZW1zTWlycm9yZWRcIixnbHlwaDpcImYwYjNcIn0se25hbWU6XCJQcm90cmFjdG9yXCIsZ2x5cGg6XCJmMGI0XCJ9LHtuYW1lOlwiQ2hlY2tsaXN0TWlycm9yZWRcIixnbHlwaDpcImYwYjVcIn0se25hbWU6XCJTdGF0dXNDaXJjbGU3XCIsZ2x5cGg6XCJmMGI2XCJ9LHtuYW1lOlwiU3RhdHVzQ2hlY2ttYXJrN1wiLGdseXBoOlwiZjBiN1wifSx7bmFtZTpcIlN0YXR1c0Vycm9yQ2lyY2xlN1wiLGdseXBoOlwiZjBiOFwifSx7bmFtZTpcIkNvbm5lY3RlZFwiLGdseXBoOlwiZjBiOVwifSx7bmFtZTpcIlBlbmNpbEZpbGxcIixnbHlwaDpcImYwYzZcIn0se25hbWU6XCJDYWxsaWdyYXBoeUZpbGxcIixnbHlwaDpcImYwYzdcIn0se25hbWU6XCJRdWFydGVyU3RhckxlZnRcIixnbHlwaDpcImYwY2FcIn0se25hbWU6XCJRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGNiXCJ9LHtuYW1lOlwiVGhyZWVRdWFydGVyU3RhckxlZnRcIixnbHlwaDpcImYwY2NcIn0se25hbWU6XCJUaHJlZVF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwY2RcIn0se25hbWU6XCJRdWlldEhvdXJzQmFkZ2UxMlwiLGdseXBoOlwiZjBjZVwifSx7bmFtZTpcIkJhY2tNaXJyb3JlZFwiLGdseXBoOlwiZjBkMlwifSx7bmFtZTpcIkZvcndhcmRNaXJyb3JlZFwiLGdseXBoOlwiZjBkM1wifSx7bmFtZTpcIkNocm9tZUJhY2tDb250cmFzdFwiLGdseXBoOlwiZjBkNVwifSx7bmFtZTpcIkNocm9tZUJhY2tDb250cmFzdE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGQ2XCJ9LHtuYW1lOlwiQ2hyb21lQmFja1RvV2luZG93Q29udHJhc3RcIixnbHlwaDpcImYwZDdcIn0se25hbWU6XCJDaHJvbWVGdWxsU2NyZWVuQ29udHJhc3RcIixnbHlwaDpcImYwZDhcIn0se25hbWU6XCJHcmlkVmlld1wiLGdseXBoOlwiZjBlMlwifSx7bmFtZTpcIkNsaXBib2FyZExpc3RcIixnbHlwaDpcImYwZTNcIn0se25hbWU6XCJDbGlwYm9hcmRMaXN0TWlycm9yZWRcIixnbHlwaDpcImYwZTRcIn0se25hbWU6XCJPdXRsaW5lUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGU1XCJ9LHtuYW1lOlwiT3V0bGluZVF1YXJ0ZXJTdGFyUmlnaHRcIixnbHlwaDpcImYwZTZcIn0se25hbWU6XCJPdXRsaW5lSGFsZlN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGU3XCJ9LHtuYW1lOlwiT3V0bGluZUhhbGZTdGFyUmlnaHRcIixnbHlwaDpcImYwZThcIn0se25hbWU6XCJPdXRsaW5lVGhyZWVRdWFydGVyU3RhckxlZnRcIixnbHlwaDpcImYwZTlcIn0se25hbWU6XCJPdXRsaW5lVGhyZWVRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGVhXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTBcIixnbHlwaDpcImYwZWJcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lMVwiLGdseXBoOlwiZjBlY1wifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUyXCIsZ2x5cGg6XCJmMGVkXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTNcIixnbHlwaDpcImYwZWVcIn0se25hbWU6XCJBcHBsaWNhdGlvbkd1YXJkXCIsZ2x5cGg6XCJmMGVmXCJ9LHtuYW1lOlwiT3V0bGluZVN0YXJMZWZ0SGFsZlwiLGdseXBoOlwiZjBmN1wifSx7bmFtZTpcIk91dGxpbmVTdGFyUmlnaHRIYWxmXCIsZ2x5cGg6XCJmMGY4XCJ9LHtuYW1lOlwiQ2hyb21lQW5ub3RhdGVDb250cmFzdFwiLGdseXBoOlwiZjBmOVwifSx7bmFtZTpcIkRlZmVuZGVyQmFkZ2UxMlwiLGdseXBoOlwiZjBmYlwifSx7bmFtZTpcIkRldGFjaGFibGVQQ1wiLGdseXBoOlwiZjEwM1wifSx7bmFtZTpcIkxlZnRTdGlja1wiLGdseXBoOlwiZjEwOFwifSx7bmFtZTpcIlJpZ2h0U3RpY2tcIixnbHlwaDpcImYxMDlcIn0se25hbWU6XCJUcmlnZ2VyTGVmdFwiLGdseXBoOlwiZjEwYVwifSx7bmFtZTpcIlRyaWdnZXJSaWdodFwiLGdseXBoOlwiZjEwYlwifSx7bmFtZTpcIkJ1bXBlckxlZnRcIixnbHlwaDpcImYxMGNcIn0se25hbWU6XCJCdW1wZXJSaWdodFwiLGdseXBoOlwiZjEwZFwifSx7bmFtZTpcIkRwYWRcIixnbHlwaDpcImYxMGVcIn0se25hbWU6XCJFbmdsaXNoUHVuY3R1YXRpb25cIixnbHlwaDpcImYxMTBcIn0se25hbWU6XCJDaGluZXNlUHVuY3R1YXRpb25cIixnbHlwaDpcImYxMTFcIn0se25hbWU6XCJITURcIixnbHlwaDpcImYxMTlcIn0se25hbWU6XCJDdHJsU3BhdGlhbFJpZ2h0XCIsZ2x5cGg6XCJmMTFiXCJ9LHtuYW1lOlwiUGFnaW5hdGlvbkRvdE91dGxpbmUxMFwiLGdseXBoOlwiZjEyNlwifSx7bmFtZTpcIlBhZ2luYXRpb25Eb3RTb2xpZDEwXCIsZ2x5cGg6XCJmMTI3XCJ9LHtuYW1lOlwiU3Ryb2tlRXJhc2UyXCIsZ2x5cGg6XCJmMTI4XCJ9LHtuYW1lOlwiU21hbGxFcmFzZVwiLGdseXBoOlwiZjEyOVwifSx7bmFtZTpcIkxhcmdlRXJhc2VcIixnbHlwaDpcImYxMmFcIn0se25hbWU6XCJGb2xkZXJIb3Jpem9udGFsXCIsZ2x5cGg6XCJmMTJiXCJ9LHtuYW1lOlwiTWljcm9waG9uZUxpc3RlbmluZ1wiLGdseXBoOlwiZjEyZVwifSx7bmFtZTpcIlN0YXR1c0V4Y2xhbWF0aW9uQ2lyY2xlN1wiLGdseXBoOlwiZjEyZlwifSx7bmFtZTpcIlZpZGVvMzYwXCIsZ2x5cGg6XCJmMTMxXCJ9LHtuYW1lOlwiR2lmdGJveE9wZW5cIixnbHlwaDpcImYxMzNcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVPdXRlclwiLGdseXBoOlwiZjEzNlwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUlubmVyXCIsZ2x5cGg6XCJmMTM3XCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlUmluZ1wiLGdseXBoOlwiZjEzOFwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlT3V0ZXJcIixnbHlwaDpcImYxMzlcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZUlubmVyXCIsZ2x5cGg6XCJmMTNhXCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVFeGNsYW1hdGlvblwiLGdseXBoOlwiZjEzYlwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUV4Y2xhbWF0aW9uXCIsZ2x5cGg6XCJmMTNjXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlRXJyb3JYXCIsZ2x5cGg6XCJmMTNkXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlQ2hlY2ttYXJrXCIsZ2x5cGg6XCJmMTNlXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlSW5mb1wiLGdseXBoOlwiZjEzZlwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUJsb2NrXCIsZ2x5cGg6XCJmMTQwXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlQmxvY2syXCIsZ2x5cGg6XCJmMTQxXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlUXVlc3Rpb25NYXJrXCIsZ2x5cGg6XCJmMTQyXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlU3luY1wiLGdseXBoOlwiZjE0M1wifSx7bmFtZTpcIkRpYWwxXCIsZ2x5cGg6XCJmMTQ2XCJ9LHtuYW1lOlwiRGlhbDJcIixnbHlwaDpcImYxNDdcIn0se25hbWU6XCJEaWFsM1wiLGdseXBoOlwiZjE0OFwifSx7bmFtZTpcIkRpYWw0XCIsZ2x5cGg6XCJmMTQ5XCJ9LHtuYW1lOlwiRGlhbDVcIixnbHlwaDpcImYxNGFcIn0se25hbWU6XCJEaWFsNlwiLGdseXBoOlwiZjE0YlwifSx7bmFtZTpcIkRpYWw3XCIsZ2x5cGg6XCJmMTRjXCJ9LHtuYW1lOlwiRGlhbDhcIixnbHlwaDpcImYxNGRcIn0se25hbWU6XCJEaWFsOVwiLGdseXBoOlwiZjE0ZVwifSx7bmFtZTpcIkRpYWwxMFwiLGdseXBoOlwiZjE0ZlwifSx7bmFtZTpcIkRpYWwxMVwiLGdseXBoOlwiZjE1MFwifSx7bmFtZTpcIkRpYWwxMlwiLGdseXBoOlwiZjE1MVwifSx7bmFtZTpcIkRpYWwxM1wiLGdseXBoOlwiZjE1MlwifSx7bmFtZTpcIkRpYWwxNFwiLGdseXBoOlwiZjE1M1wifSx7bmFtZTpcIkRpYWwxNVwiLGdseXBoOlwiZjE1NFwifSx7bmFtZTpcIkRpYWwxNlwiLGdseXBoOlwiZjE1NVwifSx7bmFtZTpcIkRpYWxTaGFwZTFcIixnbHlwaDpcImYxNTZcIn0se25hbWU6XCJEaWFsU2hhcGUyXCIsZ2x5cGg6XCJmMTU3XCJ9LHtuYW1lOlwiRGlhbFNoYXBlM1wiLGdseXBoOlwiZjE1OFwifSx7bmFtZTpcIkRpYWxTaGFwZTRcIixnbHlwaDpcImYxNTlcIn0se25hbWU6XCJDbG9zZWRDYXB0aW9uc0ludGVybmF0aW9uYWxcIixnbHlwaDpcImYxNWZcIn0se25hbWU6XCJUb2xsU29saWRcIixnbHlwaDpcImYxNjFcIn0se25hbWU6XCJUcmFmZmljQ29uZ2VzdGlvblNvbGlkXCIsZ2x5cGg6XCJmMTYzXCJ9LHtuYW1lOlwiRXhwbG9yZUNvbnRlbnRTaW5nbGVcIixnbHlwaDpcImYxNjRcIn0se25hbWU6XCJDb2xsYXBzZUNvbnRlbnRcIixnbHlwaDpcImYxNjVcIn0se25hbWU6XCJDb2xsYXBzZUNvbnRlbnRTaW5nbGVcIixnbHlwaDpcImYxNjZcIn0se25hbWU6XCJJbmZvU29saWRcIixnbHlwaDpcImYxNjdcIn0se25hbWU6XCJHcm91cExpc3RcIixnbHlwaDpcImYxNjhcIn0se25hbWU6XCJDYXJldEJvdHRvbVJpZ2h0U29saWRDZW50ZXI4XCIsZ2x5cGg6XCJmMTY5XCJ9LHtuYW1lOlwiUHJvZ3Jlc3NSaW5nRG90c1wiLGdseXBoOlwiZjE2YVwifSx7bmFtZTpcIkNoZWNrYm94MTRcIixnbHlwaDpcImYxNmJcIn0se25hbWU6XCJDaGVja2JveENvbXBvc2l0ZTE0XCIsZ2x5cGg6XCJmMTZjXCJ9LHtuYW1lOlwiQ2hlY2tib3hJbmRldGVybWluYXRlQ29tYm8xNFwiLGdseXBoOlwiZjE2ZFwifSx7bmFtZTpcIkNoZWNrYm94SW5kZXRlcm1pbmF0ZUNvbWJvXCIsZ2x5cGg6XCJmMTZlXCJ9LHtuYW1lOlwiU3RhdHVzUGF1c2U3XCIsZ2x5cGg6XCJmMTc1XCJ9LHtuYW1lOlwiQ2hhcmFjdGVyQXBwZWFyYW5jZVwiLGdseXBoOlwiZjE3ZlwifSx7bmFtZTpcIkxleGljb25cIixnbHlwaDpcImYxODBcIn0se25hbWU6XCJTY3JlZW5UaW1lXCIsZ2x5cGg6XCJmMTgyXCJ9LHtuYW1lOlwiSGVhZGxlc3NEZXZpY2VcIixnbHlwaDpcImYxOTFcIn0se25hbWU6XCJOZXR3b3JrU2hhcmluZ1wiLGdseXBoOlwiZjE5M1wifSx7bmFtZTpcIkV5ZUdhemVcIixnbHlwaDpcImYxOWRcIn0se25hbWU6XCJUb2dnbGVMZWZ0XCIsZ2x5cGg6XCJmMTllXCJ9LHtuYW1lOlwiVG9nZ2xlUmlnaHRcIixnbHlwaDpcImYxOWZcIn0se25hbWU6XCJXaW5kb3dzSW5zaWRlclwiLGdseXBoOlwiZjFhZFwifSx7bmFtZTpcIkNocm9tZVN3aXRjaFwiLGdseXBoOlwiZjFjYlwifSx7bmFtZTpcIkNocm9tZVN3aXRjaENvbnRhc3RcIixnbHlwaDpcImYxY2NcIn0se25hbWU6XCJTdGF0dXNDaGVja21hcmtcIixnbHlwaDpcImYxZDhcIn0se25hbWU6XCJTdGF0dXNDaGVja21hcmtMZWZ0XCIsZ2x5cGg6XCJmMWQ5XCJ9LHtuYW1lOlwiS2V5Ym9hcmRMZWZ0QWxpZ25lZFwiLGdseXBoOlwiZjIwY1wifSx7bmFtZTpcIktleWJvYXJkUmlnaHRBbGlnbmVkXCIsZ2x5cGg6XCJmMjBkXCJ9LHtuYW1lOlwiS2V5Ym9hcmRTZXR0aW5nc1wiLGdseXBoOlwiZjIxMFwifSx7bmFtZTpcIk5ldHdvcmtQaHlzaWNhbFwiLGdseXBoOlwiZjIxMVwifSx7bmFtZTpcIklPVFwiLGdseXBoOlwiZjIyY1wifSx7bmFtZTpcIlVua25vd25NaXJyb3JlZFwiLGdseXBoOlwiZjIyZVwifSx7bmFtZTpcIlZpZXdEYXNoYm9hcmRcIixnbHlwaDpcImYyNDZcIn0se25hbWU6XCJFeHBsb2l0UHJvdGVjdGlvblNldHRpbmdzXCIsZ2x5cGg6XCJmMjU5XCJ9LHtuYW1lOlwiS2V5Ym9hcmROYXJyb3dcIixnbHlwaDpcImYyNjBcIn0se25hbWU6XCJLZXlib2FyZDEyS2V5XCIsZ2x5cGg6XCJmMjYxXCJ9LHtuYW1lOlwiS2V5Ym9hcmREb2NrXCIsZ2x5cGg6XCJmMjZiXCJ9LHtuYW1lOlwiS2V5Ym9hcmRVbmRvY2tcIixnbHlwaDpcImYyNmNcIn0se25hbWU6XCJLZXlib2FyZExlZnREb2NrXCIsZ2x5cGg6XCJmMjZkXCJ9LHtuYW1lOlwiS2V5Ym9hcmRSaWdodERvY2tcIixnbHlwaDpcImYyNmVcIn0se25hbWU6XCJFYXJcIixnbHlwaDpcImYyNzBcIn0se25hbWU6XCJQb2ludGVySGFuZFwiLGdseXBoOlwiZjI3MVwifSx7bmFtZTpcIkJ1bGxzZXllXCIsZ2x5cGg6XCJmMjcyXCJ9LHtuYW1lOlwiRG9jdW1lbnRBcHByb3ZhbFwiLGdseXBoOlwiZjI4YlwifSx7bmFtZTpcIkxvY2FsZUxhbmd1YWdlXCIsZ2x5cGg6XCJmMmI3XCJ9LHtuYW1lOlwiUGFzc2l2ZUF1dGhlbnRpY2F0aW9uXCIsZ2x5cGg6XCJmMzJhXCJ9LHtuYW1lOlwiQ29sb3JTb2xpZFwiLGdseXBoOlwiZjM1NFwifSx7bmFtZTpcIk5ldHdvcmtPZmZsaW5lXCIsZ2x5cGg6XCJmMzg0XCJ9LHtuYW1lOlwiTmV0d29ya0Nvbm5lY3RlZFwiLGdseXBoOlwiZjM4NVwifSx7bmFtZTpcIk5ldHdvcmtDb25uZWN0ZWRDaGVja21hcmtcIixnbHlwaDpcImYzODZcIn0se25hbWU6XCJTaWduT3V0XCIsZ2x5cGg6XCJmM2IxXCJ9LHtuYW1lOlwiU3RhdHVzSW5mb1wiLGdseXBoOlwiZjNjY1wifSx7bmFtZTpcIlN0YXR1c0luZm9MZWZ0XCIsZ2x5cGg6XCJmM2NkXCJ9LHtuYW1lOlwiTmVhcmJ5U2hhcmluZ1wiLGdseXBoOlwiZjNlMlwifSx7bmFtZTpcIkN0cmxTcGF0aWFsTGVmdFwiLGdseXBoOlwiZjNlN1wifSx7bmFtZTpcIkludGVyYWN0aXZlRGFzaGJvYXJkXCIsZ2x5cGg6XCJmNDA0XCJ9LHtuYW1lOlwiRGVjbGluZUNhbGxcIixnbHlwaDpcImY0MDVcIn0se25hbWU6XCJDbGlwcGluZ1Rvb2xcIixnbHlwaDpcImY0MDZcIn0se25hbWU6XCJSZWN0YW5ndWxhckNsaXBwaW5nXCIsZ2x5cGg6XCJmNDA3XCJ9LHtuYW1lOlwiRnJlZUZvcm1DbGlwcGluZ1wiLGdseXBoOlwiZjQwOFwifSx7bmFtZTpcIkNvcHlUb1wiLGdseXBoOlwiZjQxM1wifSx7bmFtZTpcIklEQmFkZ2VcIixnbHlwaDpcImY0MjdcIn0se25hbWU6XCJEeW5hbWljTG9ja1wiLGdseXBoOlwiZjQzOVwifSx7bmFtZTpcIlBlblRpcHNcIixnbHlwaDpcImY0NWVcIn0se25hbWU6XCJQZW5UaXBzTWlycm9yZWRcIixnbHlwaDpcImY0NWZcIn0se25hbWU6XCJIV1BKb2luXCIsZ2x5cGg6XCJmNDYwXCJ9LHtuYW1lOlwiSFdQSW5zZXJ0XCIsZ2x5cGg6XCJmNDYxXCJ9LHtuYW1lOlwiSFdQU3RyaWtlVGhyb3VnaFwiLGdseXBoOlwiZjQ2MlwifSx7bmFtZTpcIkhXUFNjcmF0Y2hPdXRcIixnbHlwaDpcImY0NjNcIn0se25hbWU6XCJIV1BTcGxpdFwiLGdseXBoOlwiZjQ2NFwifSx7bmFtZTpcIkhXUE5ld0xpbmVcIixnbHlwaDpcImY0NjVcIn0se25hbWU6XCJIV1BPdmVyd3JpdGVcIixnbHlwaDpcImY0NjZcIn0se25hbWU6XCJNb2JXaWZpV2FybmluZzFcIixnbHlwaDpcImY0NzNcIn0se25hbWU6XCJNb2JXaWZpV2FybmluZzJcIixnbHlwaDpcImY0NzRcIn0se25hbWU6XCJNb2JXaWZpV2FybmluZzNcIixnbHlwaDpcImY0NzVcIn0se25hbWU6XCJNb2JXaWZpV2FybmluZzRcIixnbHlwaDpcImY0NzZcIn0se25hbWU6XCJNaWNMb2NhdGlvbkNvbWJvXCIsZ2x5cGg6XCJmNDdmXCJ9LHtuYW1lOlwiR2xvYmUyXCIsZ2x5cGg6XCJmNDlhXCJ9LHtuYW1lOlwiU3BlY2lhbEVmZmVjdFNpemVcIixnbHlwaDpcImY0YTVcIn0se25hbWU6XCJHSUZcIixnbHlwaDpcImY0YTlcIn0se25hbWU6XCJTdGlja2VyMlwiLGdseXBoOlwiZjRhYVwifSx7bmFtZTpcIlN1cmZhY2VIdWJTZWxlY3RlZFwiLGdseXBoOlwiZjRiZVwifSx7bmFtZTpcIkhvbG9MZW5zU2VsZWN0ZWRcIixnbHlwaDpcImY0YmZcIn0se25hbWU6XCJFYXJidWRcIixnbHlwaDpcImY0YzBcIn0se25hbWU6XCJNaXhWb2x1bWVzXCIsZ2x5cGg6XCJmNGMzXCJ9LHtuYW1lOlwiU2FmZVwiLGdseXBoOlwiZjU0MFwifSx7bmFtZTpcIkxhcHRvcFNlY3VyZVwiLGdseXBoOlwiZjU1MlwifSx7bmFtZTpcIlByaW50RGVmYXVsdFwiLGdseXBoOlwiZjU2ZFwifSx7bmFtZTpcIlBhZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU2ZVwifSx7bmFtZTpcIkxhbmRzY2FwZU9yaWVudGF0aW9uTWlycm9yZWRcIixnbHlwaDpcImY1NmZcIn0se25hbWU6XCJDb2xvck9mZlwiLGdseXBoOlwiZjU3MFwifSx7bmFtZTpcIlByaW50QWxsUGFnZXNcIixnbHlwaDpcImY1NzFcIn0se25hbWU6XCJQcmludEN1c3RvbVJhbmdlXCIsZ2x5cGg6XCJmNTcyXCJ9LHtuYW1lOlwiUGFnZU1hcmdpblBvcnRyYWl0TmFycm93XCIsZ2x5cGg6XCJmNTczXCJ9LHtuYW1lOlwiUGFnZU1hcmdpblBvcnRyYWl0Tm9ybWFsXCIsZ2x5cGg6XCJmNTc0XCJ9LHtuYW1lOlwiUGFnZU1hcmdpblBvcnRyYWl0TW9kZXJhdGVcIixnbHlwaDpcImY1NzVcIn0se25hbWU6XCJQYWdlTWFyZ2luUG9ydHJhaXRXaWRlXCIsZ2x5cGg6XCJmNTc2XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZU5hcnJvd1wiLGdseXBoOlwiZjU3N1wifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVOb3JtYWxcIixnbHlwaDpcImY1NzhcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlTW9kZXJhdGVcIixnbHlwaDpcImY1NzlcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlV2lkZVwiLGdseXBoOlwiZjU3YVwifSx7bmFtZTpcIkNvbGxhdGVMYW5kc2NhcGVcIixnbHlwaDpcImY1N2JcIn0se25hbWU6XCJDb2xsYXRlUG9ydHJhaXRcIixnbHlwaDpcImY1N2NcIn0se25hbWU6XCJDb2xsYXRlUG9ydHJhaXRTZXBhcmF0ZWRcIixnbHlwaDpcImY1N2RcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVPbmVTaWRlZFwiLGdseXBoOlwiZjU3ZVwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZU9uZVNpZGVkTWlycm9yZWRcIixnbHlwaDpcImY1N2ZcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZExvbmdFZGdlXCIsZ2x5cGg6XCJmNTgwXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRMb25nRWRnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTgxXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRTaG9ydEVkZ2VcIixnbHlwaDpcImY1ODJcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVUd29TaWRlZFNob3J0RWRnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTgzXCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRPbmVTaWRlZFwiLGdseXBoOlwiZjU4NFwifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0T25lU2lkZWRNaXJyb3JlZFwiLGdseXBoOlwiZjU4NVwifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0VHdvU2lkZWRMb25nRWRnZVwiLGdseXBoOlwiZjU4NlwifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0VHdvU2lkZWRMb25nRWRnZU1pcnJvcmVkXCIsZ2x5cGg6XCJmNTg3XCJ9LHtuYW1lOlwiRHVwbGV4UG9ydHJhaXRUd29TaWRlZFNob3J0RWRnZVwiLGdseXBoOlwiZjU4OFwifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0VHdvU2lkZWRTaG9ydEVkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4OVwifSx7bmFtZTpcIlBQU09uZUxhbmRzY2FwZVwiLGdseXBoOlwiZjU4YVwifSx7bmFtZTpcIlBQU1R3b0xhbmRzY2FwZVwiLGdseXBoOlwiZjU4YlwifSx7bmFtZTpcIlBQU1R3b1BvcnRyYWl0XCIsZ2x5cGg6XCJmNThjXCJ9LHtuYW1lOlwiUFBTRm91ckxhbmRzY2FwZVwiLGdseXBoOlwiZjU4ZFwifSx7bmFtZTpcIlBQU0ZvdXJQb3J0cmFpdFwiLGdseXBoOlwiZjU4ZVwifSx7bmFtZTpcIkhvbGVQdW5jaE9mZlwiLGdseXBoOlwiZjU4ZlwifSx7bmFtZTpcIkhvbGVQdW5jaFBvcnRyYWl0TGVmdFwiLGdseXBoOlwiZjU5MFwifSx7bmFtZTpcIkhvbGVQdW5jaFBvcnRyYWl0UmlnaHRcIixnbHlwaDpcImY1OTFcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdFRvcFwiLGdseXBoOlwiZjU5MlwifSx7bmFtZTpcIkhvbGVQdW5jaFBvcnRyYWl0Qm90dG9tXCIsZ2x5cGg6XCJmNTkzXCJ9LHtuYW1lOlwiSG9sZVB1bmNoTGFuZHNjYXBlTGVmdFwiLGdseXBoOlwiZjU5NFwifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZVJpZ2h0XCIsZ2x5cGg6XCJmNTk1XCJ9LHtuYW1lOlwiSG9sZVB1bmNoTGFuZHNjYXBlVG9wXCIsZ2x5cGg6XCJmNTk2XCJ9LHtuYW1lOlwiSG9sZVB1bmNoTGFuZHNjYXBlQm90dG9tXCIsZ2x5cGg6XCJmNTk3XCJ9LHtuYW1lOlwiU3RhcGxpbmdPZmZcIixnbHlwaDpcImY1OThcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VG9wTGVmdFwiLGdseXBoOlwiZjU5OVwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUb3BSaWdodFwiLGdseXBoOlwiZjU5YVwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRCb3R0b21SaWdodFwiLGdseXBoOlwiZjU5YlwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29MZWZ0XCIsZ2x5cGg6XCJmNTljXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b1JpZ2h0XCIsZ2x5cGg6XCJmNTlkXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFR3b1RvcFwiLGdseXBoOlwiZjU5ZVwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29Cb3R0b21cIixnbHlwaDpcImY1OWZcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0Qm9va0JpbmRpbmdcIixnbHlwaDpcImY1YTBcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVRvcExlZnRcIixnbHlwaDpcImY1YTFcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVRvcFJpZ2h0XCIsZ2x5cGg6XCJmNWEyXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVCb3R0b21MZWZ0XCIsZ2x5cGg6XCJmNWEzXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVCb3R0b21SaWdodFwiLGdseXBoOlwiZjVhNFwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVHdvTGVmdFwiLGdseXBoOlwiZjVhNVwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVHdvUmlnaHRcIixnbHlwaDpcImY1YTZcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b1RvcFwiLGdseXBoOlwiZjVhN1wifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlVHdvQm90dG9tXCIsZ2x5cGg6XCJmNWE4XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVCb29rQmluZGluZ1wiLGdseXBoOlwiZjVhOVwifSx7bmFtZTpcIlN0YXR1c0RhdGFUcmFuc2ZlclJvYW1pbmdcIixnbHlwaDpcImY1YWFcIn0se25hbWU6XCJNb2JTSU1FcnJvclwiLGdseXBoOlwiZjVhYlwifSx7bmFtZTpcIkNvbGxhdGVMYW5kc2NhcGVTZXBhcmF0ZWRcIixnbHlwaDpcImY1YWNcIn0se25hbWU6XCJQUFNPbmVQb3J0cmFpdFwiLGdseXBoOlwiZjVhZFwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRCb3R0b21MZWZ0XCIsZ2x5cGg6XCJmNWFlXCJ9LHtuYW1lOlwiUGxheVNvbGlkXCIsZ2x5cGg6XCJmNWIwXCJ9LHtuYW1lOlwiUmVwZWF0T2ZmXCIsZ2x5cGg6XCJmNWU3XCJ9LHtuYW1lOlwiU2V0XCIsZ2x5cGg6XCJmNWVkXCJ9LHtuYW1lOlwiU2V0U29saWRcIixnbHlwaDpcImY1ZWVcIn0se25hbWU6XCJGdXp6eVJlYWRpbmdcIixnbHlwaDpcImY1ZWZcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkwXCIsZ2x5cGg6XCJmNWYyXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MVwiLGdseXBoOlwiZjVmM1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTJcIixnbHlwaDpcImY1ZjRcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkzXCIsZ2x5cGg6XCJmNWY1XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5NFwiLGdseXBoOlwiZjVmNlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTVcIixnbHlwaDpcImY1ZjdcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk2XCIsZ2x5cGg6XCJmNWY4XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5N1wiLGdseXBoOlwiZjVmOVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeThcIixnbHlwaDpcImY1ZmFcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk5XCIsZ2x5cGg6XCJmNWZiXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MTBcIixnbHlwaDpcImY1ZmNcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzBcIixnbHlwaDpcImY1ZmRcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzFcIixnbHlwaDpcImY1ZmVcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzJcIixnbHlwaDpcImY1ZmZcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzNcIixnbHlwaDpcImY2MDBcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzRcIixnbHlwaDpcImY2MDFcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzVcIixnbHlwaDpcImY2MDJcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzZcIixnbHlwaDpcImY2MDNcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzdcIixnbHlwaDpcImY2MDRcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzhcIixnbHlwaDpcImY2MDVcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzlcIixnbHlwaDpcImY2MDZcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnlDaGFyZ2luZzEwXCIsZ2x5cGg6XCJmNjA3XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5VW5rbm93blwiLGdseXBoOlwiZjYwOFwifSx7bmFtZTpcIlNJTUVycm9yXCIsZ2x5cGg6XCJmNjE4XCJ9LHtuYW1lOlwiU0lNTWlzc2luZ1wiLGdseXBoOlwiZjYxOVwifSx7bmFtZTpcIlNJTUxvY2tcIixnbHlwaDpcImY2MWFcIn0se25hbWU6XCJlU0lNXCIsZ2x5cGg6XCJmNjFiXCJ9LHtuYW1lOlwiZVNJTU5vUHJvZmlsZVwiLGdseXBoOlwiZjYxY1wifSx7bmFtZTpcImVTSU1Mb2NrZWRcIixnbHlwaDpcImY2MWRcIn0se25hbWU6XCJlU0lNQnVzeVwiLGdseXBoOlwiZjYxZVwifSx7bmFtZTpcIk5vaXNlQ2FuY2VsYXRpb25cIixnbHlwaDpcImY2MWZcIn0se25hbWU6XCJOb2lzZUNhbmNlbGF0aW9uT2ZmXCIsZ2x5cGg6XCJmNjIwXCJ9LHtuYW1lOlwiTXVzaWNTaGFyaW5nXCIsZ2x5cGg6XCJmNjIzXCJ9LHtuYW1lOlwiTXVzaWNTaGFyaW5nT2ZmXCIsZ2x5cGg6XCJmNjI0XCJ9LHtuYW1lOlwiQ2lyY2xlU2hhcGVTb2xpZFwiLGdseXBoOlwiZjYzY1wifSx7bmFtZTpcIldpZmlDYWxsQmFyc1wiLGdseXBoOlwiZjY1N1wifSx7bmFtZTpcIldpZmlDYWxsMFwiLGdseXBoOlwiZjY1OFwifSx7bmFtZTpcIldpZmlDYWxsMVwiLGdseXBoOlwiZjY1OVwifSx7bmFtZTpcIldpZmlDYWxsMlwiLGdseXBoOlwiZjY1YVwifSx7bmFtZTpcIldpZmlDYWxsM1wiLGdseXBoOlwiZjY1YlwifSx7bmFtZTpcIldpZmlDYWxsNFwiLGdseXBoOlwiZjY1Y1wifSx7bmFtZTpcIkNIVExhbmd1YWdlQmFyXCIsZ2x5cGg6XCJmNjllXCJ9LHtuYW1lOlwiQ29tcG9zZU1vZGVcIixnbHlwaDpcImY2YTlcIn0se25hbWU6XCJFeHByZXNzaXZlSW5wdXRFbnRyeVwiLGdseXBoOlwiZjZiOFwifSx7bmFtZTpcIkVtb2ppVGFiTW9yZVN5bWJvbHNcIixnbHlwaDpcImY2YmFcIn0se25hbWU6XCJXZWJTZWFyY2hcIixnbHlwaDpcImY2ZmFcIn0se25hbWU6XCJLaW9za1wiLGdseXBoOlwiZjcxMlwifSx7bmFtZTpcIlJUVExvZ29cIixnbHlwaDpcImY3MTRcIn0se25hbWU6XCJWb2ljZUNhbGxcIixnbHlwaDpcImY3MTVcIn0se25hbWU6XCJHb1RvTWVzc2FnZVwiLGdseXBoOlwiZjcxNlwifSx7bmFtZTpcIlJldHVyblRvQ2FsbFwiLGdseXBoOlwiZjcxYVwifSx7bmFtZTpcIlN0YXJ0UHJlc2VudGluZ1wiLGdseXBoOlwiZjcxY1wifSx7bmFtZTpcIlN0b3BQcmVzZW50aW5nXCIsZ2x5cGg6XCJmNzFkXCJ9LHtuYW1lOlwiUHJvZHVjdGl2aXR5TW9kZVwiLGdseXBoOlwiZjcxZVwifSx7bmFtZTpcIlNldEhpc3RvcnlTdGF0dXNcIixnbHlwaDpcImY3MzhcIn0se25hbWU6XCJTZXRIaXN0b3J5U3RhdHVzMlwiLGdseXBoOlwiZjczOVwifSx7bmFtZTpcIktleWJvYXJkc2V0dGluZ3MyMFwiLGdseXBoOlwiZjczZFwifSx7bmFtZTpcIk9uZUhhbmRlZFJpZ2h0MjBcIixnbHlwaDpcImY3M2VcIn0se25hbWU6XCJPbmVIYW5kZWRMZWZ0MjBcIixnbHlwaDpcImY3M2ZcIn0se25hbWU6XCJTcGxpdDIwXCIsZ2x5cGg6XCJmNzQwXCJ9LHtuYW1lOlwiRnVsbDIwXCIsZ2x5cGg6XCJmNzQxXCJ9LHtuYW1lOlwiSGFuZHdyaXRpbmcyMFwiLGdseXBoOlwiZjc0MlwifSx7bmFtZTpcIkNoZXZyb25MZWZ0MjBcIixnbHlwaDpcImY3NDNcIn0se25hbWU6XCJDaGV2cm9uTGVmdDMyXCIsZ2x5cGg6XCJmNzQ0XCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0MjBcIixnbHlwaDpcImY3NDVcIn0se25hbWU6XCJDaGV2cm9uUmlnaHQzMlwiLGdseXBoOlwiZjc0NlwifSx7bmFtZTpcIkV2ZW50MTJcIixnbHlwaDpcImY3NjNcIn0se25hbWU6XCJNaWNPZmYyXCIsZ2x5cGg6XCJmNzgxXCJ9LHtuYW1lOlwiRGVsaXZlcnlPcHRpbWl6YXRpb25cIixnbHlwaDpcImY3ODVcIn0se25hbWU6XCJDYW5jZWxNZWRpdW1cIixnbHlwaDpcImY3OGFcIn0se25hbWU6XCJTZWFyY2hNZWRpdW1cIixnbHlwaDpcImY3OGJcIn0se25hbWU6XCJBY2NlcHRNZWRpdW1cIixnbHlwaDpcImY3OGNcIn0se25hbWU6XCJSZXZlYWxQYXNzd29yZE1lZGl1bVwiLGdseXBoOlwiZjc4ZFwifSx7bmFtZTpcIkRlbGV0ZVdvcmRcIixnbHlwaDpcImY3YWRcIn0se25hbWU6XCJEZWxldGVXb3JkRmlsbFwiLGdseXBoOlwiZjdhZVwifSx7bmFtZTpcIkRlbGV0ZUxpbmVzXCIsZ2x5cGg6XCJmN2FmXCJ9LHtuYW1lOlwiRGVsZXRlTGluZXNGaWxsXCIsZ2x5cGg6XCJmN2IwXCJ9LHtuYW1lOlwiSW5zdGVydFdvcmRzXCIsZ2x5cGg6XCJmN2IxXCJ9LHtuYW1lOlwiSW5zdGVydFdvcmRzRmlsbFwiLGdseXBoOlwiZjdiMlwifSx7bmFtZTpcIkpvaW5Xb3Jkc1wiLGdseXBoOlwiZjdiM1wifSx7bmFtZTpcIkpvaW5Xb3Jkc0ZpbGxcIixnbHlwaDpcImY3YjRcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc1wiLGdseXBoOlwiZjdiNVwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzRmlsbFwiLGdseXBoOlwiZjdiNlwifSx7bmFtZTpcIkFkZE5ld0xpbmVcIixnbHlwaDpcImY3YjdcIn0se25hbWU6XCJBZGROZXdMaW5lRmlsbFwiLGdseXBoOlwiZjdiOFwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzS29yZWFuXCIsZ2x5cGg6XCJmN2I5XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNGaWxsS29yZWFuXCIsZ2x5cGg6XCJmN2JhXCJ9LHtuYW1lOlwiRWR1Y2F0aW9uSWNvblwiLGdseXBoOlwiZjdiYlwifSx7bmFtZTpcIldpbmRvd1NuaXBwaW5nXCIsZ2x5cGg6XCJmN2VkXCJ9LHtuYW1lOlwiVmlkZW9DYXB0dXJlXCIsZ2x5cGg6XCJmN2VlXCJ9LHtuYW1lOlwiU3RhdHVzU2VjdXJlZFwiLGdseXBoOlwiZjgwOVwifSx7bmFtZTpcIk5hcnJhdG9yQXBwXCIsZ2x5cGg6XCJmODNiXCJ9LHtuYW1lOlwiUG93ZXJCdXR0b25VcGRhdGVcIixnbHlwaDpcImY4M2RcIn0se25hbWU6XCJSZXN0YXJ0VXBkYXRlXCIsZ2x5cGg6XCJmODNlXCJ9LHtuYW1lOlwiVXBkYXRlU3RhdHVzRG90XCIsZ2x5cGg6XCJmODNmXCJ9LHtuYW1lOlwiRWplY3RcIixnbHlwaDpcImY4NDdcIn0se25hbWU6XCJTcGVsbGluZ1wiLGdseXBoOlwiZjg3YlwifSx7bmFtZTpcIlNwZWxsaW5nS29yZWFuXCIsZ2x5cGg6XCJmODdjXCJ9LHtuYW1lOlwiU3BlbGxpbmdTZXJiaWFuXCIsZ2x5cGg6XCJmODdkXCJ9LHtuYW1lOlwiU3BlbGxpbmdDaGluZXNlXCIsZ2x5cGg6XCJmODdlXCJ9LHtuYW1lOlwiRm9sZGVyU2VsZWN0XCIsZ2x5cGg6XCJmODlhXCJ9LHtuYW1lOlwiU21hcnRTY3JlZW5cIixnbHlwaDpcImY4YTVcIn0se25hbWU6XCJFeHBsb2l0UHJvdGVjdGlvblwiLGdseXBoOlwiZjhhNlwifSx7bmFtZTpcIkFkZEJvbGRcIixnbHlwaDpcImY4YWFcIn0se25hbWU6XCJTdWJ0cmFjdEJvbGRcIixnbHlwaDpcImY4YWJcIn0se25hbWU6XCJCYWNrU29saWRCb2xkXCIsZ2x5cGg6XCJmOGFjXCJ9LHtuYW1lOlwiRm9yd2FyZFNvbGlkQm9sZFwiLGdseXBoOlwiZjhhZFwifSx7bmFtZTpcIlBhdXNlQm9sZFwiLGdseXBoOlwiZjhhZVwifSx7bmFtZTpcIkNsaWNrU29saWRcIixnbHlwaDpcImY4YWZcIn0se25hbWU6XCJTZXR0aW5nc1NvbGlkXCIsZ2x5cGg6XCJmOGIwXCJ9LHtuYW1lOlwiTWljcm9waG9uZVNvbGlkQm9sZFwiLGdseXBoOlwiZjhiMVwifSx7bmFtZTpcIlNwZWVjaFNvbGlkQm9sZFwiLGdseXBoOlwiZjhiMlwifSx7bmFtZTpcIkNsaWNrZWRPdXRMb3VkU29saWRCb2xkXCIsZ2x5cGg6XCJmOGIzXCJ9XTtsZXQgcD1jbGFzcyBleHRlbmRzIGUuQ3VzdG9tQ29tcG9uZW50e3N0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7cmV0dXJuW1wiZm9udC1mYW1pbHlcIixcImdseXBoXCIsXCJmb250LXNpemVcIixcImZvcmVncm91bmRcIixcInVzZS1hY2NlbnRcIl19Z2V0IGZvbnRGYW1pbHkoKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuZ2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIikpJiZ2b2lkIDAhPT1lP2U6XCJTZWdvZSBGbHVlbnQgSWNvbnNcIn1zZXQgZm9udEZhbWlseShlKXt0aGlzLnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsZSksdGhpcy5zZXRGb250RmFtaWx5KCl9Z2V0IGdseXBoKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZ2x5cGhcIil9c2V0IGdseXBoKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZ2x5cGhcIixlKSx0aGlzLnNldEdseXBoKCl9Z2V0IGZvbnRTaXplKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiZm9udC1zaXplXCIpP3BhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIpKToxNn1zZXQgZm9udFNpemUoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIixlLnRvU3RyaW5nKCkpLHRoaXMuc2V0Rm9udFNpemUoKX1nZXQgZm9yZWdyb3VuZCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImZvcmVncm91bmRcIil9c2V0IGZvcmVncm91bmQoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJmb3JlZ3JvdW5kXCIsZSksdGhpcy5zZXRGb3JlZ3JvdW5kKCl9Z2V0IHVzZUFjY2VudCgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInVzZS1hY2NlbnRcIikmJlwiZmFsc2VcIiE9PXRoaXMuZ2V0QXR0cmlidXRlKFwidXNlLWFjY2VudFwiKX1zZXQgdXNlQWNjZW50KGUpe3RoaXMudG9nZ2xlQXR0cmlidXRlKFwidXNlLWFjY2VudFwiLGUpLHRoaXMuc2V0Rm9yZWdyb3VuZCgpfWdldCBpY29uU3Bhbigpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5faWNvblNwYW4pJiZ2b2lkIDAhPT1lfHwodGhpcy5faWNvblNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKSksdGhpcy5faWNvblNwYW59cmVuZGVyKCl7cmV0dXJuJ1xcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHBhcnQ9XCJpY29uXCI+PC9zcGFuPlxcbiAgICAgICAgJ31jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMuc2V0Rm9udEZhbWlseSgpLHRoaXMuc2V0R2x5cGgoKSx0aGlzLnNldEZvbnRTaXplKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKXtzd2l0Y2goZSl7Y2FzZVwiZm9udC1mYW1pbHlcIjp0aGlzLnNldEZvbnRGYW1pbHkoKTticmVhaztjYXNlXCJnbHlwaFwiOnRoaXMuc2V0R2x5cGgoKTticmVhaztjYXNlXCJmb250LXNpemVcIjp0aGlzLnNldEZvbnRTaXplKCk7YnJlYWs7Y2FzZVwiZm9yZWdyb3VuZFwiOmNhc2VcInVzZS1hY2NlbnRcIjp0aGlzLnNldEZvcmVncm91bmQoKX19c2V0Rm9udEZhbWlseSgpe3RoaXMuaWNvblNwYW4uc3R5bGUuZm9udEZhbWlseT10aGlzLmZvbnRGYW1pbHkrXCIsIHNhbnMtc2VyaWZcIn1zZXRHbHlwaCgpe3RoaXMuaWNvblNwYW4uaW5uZXJIVE1MPXRoaXMuZ2x5cGh9c2V0Rm9udFNpemUoKXtpZihudWxsIT09dGhpcy5mb250U2l6ZSl7Y29uc3QgZT10aGlzLmZvbnRTaXplK1wicHhcIixhPXRoaXMuc3R5bGUsbj10aGlzLmljb25TcGFuLnN0eWxlO24uZm9udFNpemU9ZSxuLmxpbmVIZWlnaHQ9ZSxuLmhlaWdodD1lLG4ud2lkdGg9ZSxhLmhlaWdodD1lLGEud2lkdGg9ZX19c2V0Rm9yZWdyb3VuZCgpe3RoaXMuaWNvblNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcInVzZS1hY2NlbnRcIix0aGlzLnVzZUFjY2VudCksbnVsbCE9PXRoaXMuZm9yZWdyb3VuZCYmKHRoaXMuaWNvblNwYW4uc3R5bGUuY29sb3I9dGhpcy5mb3JlZ3JvdW5kKX19O3Auc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmljb24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmljb24udXNlLWFjY2VudCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtYWNjZW50LWRlZmF1bHQpO1xcbiAgICAgICAgfVxcbiAgICBcIixwPWEoWygwLGUuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1mb250LWljb25cIildLHApO2xldCBoPWNsYXNzIGV4dGVuZHMgcHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcImZvbnQtZmFtaWx5XCIsXCJnbHlwaFwiLFwiZm9udC1zaXplXCIsXCJmb3JlZ3JvdW5kXCIsXCJ1c2UtYWNjZW50XCIsXCJzeW1ib2xcIl19Z2V0IHN5bWJvbCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInN5bWJvbFwiKX1zZXQgc3ltYm9sKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwic3ltYm9sXCIsZSksdGhpcy5zZXRTeW1ib2woKX1nZXQgZ2x5cGhNYXAoKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuX2dseXBoTWFwKSYmdm9pZCAwIT09ZT9lOmd9c2V0IGdseXBoTWFwKGUpe3RoaXMuX2dseXBoTWFwPWUsdGhpcy5zZXRTeW1ib2woKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pe3N1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbiksXCJzeW1ib2xcIj09PWUmJnRoaXMuc2V0U3ltYm9sKCl9c2V0U3ltYm9sKCl7Y29uc3QgZT10aGlzLnN5bWJvbD9cIiYjeFwiK3RoaXMuZ2x5cGhNYXAuZmluZCgoZT0+ZS5uYW1lPT09dGhpcy5zeW1ib2wpKS5nbHlwaDpcIlwiO3N1cGVyLmdseXBoPWV9fTtoPWEoWygwLGUuY3VzdG9tQ29tcG9uZW50KShcImZsdWVudC1zeW1ib2wtaWNvblwiKV0saCk7bGV0IHQ9Y2xhc3MgZXh0ZW5kcyBlLkN1c3RvbUNvbXBvbmVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcInNvdXJjZVwiLFwic2l6ZVwiLFwiYWx0XCIsXCJ0aXRsZVwiXX1nZXQgc291cmNlKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic291cmNlXCIpfXNldCBzb3VyY2UoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJzb3VyY2VcIixlKX1nZXQgc2l6ZSgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInNpemVcIik/cGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpKToxNn1zZXQgc2l6ZShlKXt0aGlzLnNldEF0dHJpYnV0ZShcInNpemVcIixlLnRvU3RyaW5nKCkpfWdldCBhbHQoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJhbHRcIil9Z2V0IHRpdGxlKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwidGl0bGVcIil9Z2V0IGltYWdlKCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLl9pbWFnZSkmJnZvaWQgMCE9PWV8fCh0aGlzLl9pbWFnZT10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKSksdGhpcy5faW1hZ2V9cmVuZGVyKCl7cmV0dXJuJzxpbWcgY2xhc3M9XCJpbWFnZVwiIC8+J31jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMuc2V0U291cmNlKCksdGhpcy5zZXRTaXplKCksdGhpcy5zZXRBbHRPclRpdGxlKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKXtzd2l0Y2goZSl7Y2FzZVwic291cmNlXCI6dGhpcy5zZXRTb3VyY2UoKTticmVhaztjYXNlXCJzaXplXCI6dGhpcy5zZXRTaXplKCk7YnJlYWs7Y2FzZVwiYWx0XCI6Y2FzZVwidGl0bGVcIjp0aGlzLnNldEFsdE9yVGl0bGUoKX19c2V0U291cmNlKCl7dGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLnNvdXJjZSl9c2V0U2l6ZSgpe2NvbnN0IGU9dGhpcy5pbWFnZS5zdHlsZSxhPXRoaXMuc3R5bGU7ZS53aWR0aD10aGlzLnNpemUrXCJweFwiLGUuaGVpZ2h0PXRoaXMuc2l6ZStcInB4XCIsYS53aWR0aD10aGlzLnNpemUrXCJweFwiLGEuaGVpZ2h0PXRoaXMuc2l6ZStcInB4XCJ9c2V0QWx0T3JUaXRsZSgpe3RoaXMuaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsdGhpcy5hbHQpLHRoaXMuaW1hZ2Uuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0aGlzLnRpdGxlKX19O3Quc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmltYWdlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgXCIsdD1hKFsoMCxlLmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtaW1hZ2UtaWNvblwiKV0sdCl9KSgpLGx9KSgpKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudC5qcy5tYXAiLCIvKlxuICogYW5pbWUuanMgdjMuMi4xXG4gKiAoYykgMjAyMCBKdWxpYW4gR2FybmllclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBhbmltZWpzLmNvbVxuICovXG5cbi8vIERlZmF1bHRzXG5cbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcbiAgdXBkYXRlOiBudWxsLFxuICBiZWdpbjogbnVsbCxcbiAgbG9vcEJlZ2luOiBudWxsLFxuICBjaGFuZ2VCZWdpbjogbnVsbCxcbiAgY2hhbmdlOiBudWxsLFxuICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcbiAgbG9vcENvbXBsZXRlOiBudWxsLFxuICBjb21wbGV0ZTogbnVsbCxcbiAgbG9vcDogMSxcbiAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIHRpbWVsaW5lT2Zmc2V0OiAwXG59O1xuXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMCxcbiAgZW5kRGVsYXk6IDAsXG4gIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC41KScsXG4gIHJvdW5kOiAwXG59O1xuXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcblxuLy8gQ2FjaGluZ1xuXG52YXIgY2FjaGUgPSB7XG4gIENTUzoge30sXG4gIHNwcmluZ3M6IHt9XG59O1xuXG4vLyBVdGlsc1xuXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbnZhciBpcyA9IHtcbiAgYXJyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKTsgfSxcbiAgb2JqOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7IH0sXG4gIHB0aDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpOyB9LFxuICBzdmc6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDsgfSxcbiAgaW5wOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7IH0sXG4gIGRvbTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpOyB9LFxuICBzdHI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7IH0sXG4gIGZuYzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nOyB9LFxuICB1bmQ6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7IH0sXG4gIG5pbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsOyB9LFxuICBoZXg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTsgfSxcbiAgcmdiOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSk7IH0sXG4gIGhzbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpOyB9LFxuICBjb2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpOyB9LFxuICBrZXk6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJzsgfSxcbn07XG5cbi8vIEVhc2luZ3NcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGFyc2VGbG9hdChwKTsgfSkgOiBbXTtcbn1cblxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xuXG5mdW5jdGlvbiBzcHJpbmcoc3RyaW5nLCBkdXJhdGlvbikge1xuXG4gIHZhciBwYXJhbXMgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKTtcbiAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcbiAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XG4gIHZhciBkYW1waW5nID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMl0pID8gMTAgOiBwYXJhbXNbMl0sIC4xLCAxMDApO1xuICB2YXIgdmVsb2NpdHkgPSAgbWluTWF4KGlzLnVuZChwYXJhbXNbM10pID8gMCA6IHBhcmFtc1szXSwgLjEsIDEwMCk7XG4gIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICB2YXIgd2QgPSB6ZXRhIDwgMSA/IHcwICogTWF0aC5zcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xuICB2YXIgYSA9IDE7XG4gIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XG5cbiAgZnVuY3Rpb24gc29sdmVyKHQpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XG4gICAgaWYgKHpldGEgPCAxKSB7XG4gICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3MgPSAoYSArIGIgKiBwcm9ncmVzcykgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB3MCk7XG4gICAgfVxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHsgcmV0dXJuIHQ7IH1cbiAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLnNwcmluZ3Nbc3RyaW5nXTtcbiAgICBpZiAoY2FjaGVkKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgICB2YXIgZnJhbWUgPSAxLzY7XG4gICAgdmFyIGVsYXBzZWQgPSAwO1xuICAgIHZhciByZXN0ID0gMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICBlbGFwc2VkICs9IGZyYW1lO1xuICAgICAgaWYgKHNvbHZlcihlbGFwc2VkKSA9PT0gMSkge1xuICAgICAgICByZXN0Kys7XG4gICAgICAgIGlmIChyZXN0ID49IDE2KSB7IGJyZWFrOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcbiAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcblxufVxuXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XG4gIGlmICggc3RlcHMgPT09IHZvaWQgMCApIHN0ZXBzID0gMTA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7IH07XG59XG5cbi8vIEJlemllckVhc2luZyBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcblxudmFyIGJlemllciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbiAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxuICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTEgfVxuICBmdW5jdGlvbiBCKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTEgfVxuICBmdW5jdGlvbiBDKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTEgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVCB9XG4gIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKSB9XG5cbiAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHsgYUIgPSBjdXJyZW50VDsgfSBlbHNlIHsgYUEgPSBjdXJyZW50VDsgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XG4gICAgcmV0dXJuIGN1cnJlbnRUO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHsgcmV0dXJuIGFHdWVzc1Q7IH1cbiAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblxuICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkgeyByZXR1cm47IH1cbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcblxuICAgIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcblxuICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xuICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB9XG5cbiAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XG4gICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikgeyByZXR1cm4geDsgfVxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkgeyByZXR1cm4geDsgfVxuICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBiZXppZXI7XG5cbn0pKCk7XG5cbnZhciBwZW5uZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXG5cbiAgdmFyIGVhc2VzID0geyBsaW5lYXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9OyB9IH07XG5cbiAgdmFyIGZ1bmN0aW9uRWFzaW5ncyA9IHtcbiAgICBTaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7IH07IH0sXG4gICAgQ2lyYzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTsgfTsgfSxcbiAgICBCYWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTsgfTsgfSxcbiAgICBCb3VuY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgcG93MiwgYiA9IDQ7XG4gICAgICB3aGlsZSAodCA8ICgoIHBvdzIgPSBNYXRoLnBvdygyLCAtLWIpKSAtIDEpIC8gMTEpIHt9XG4gICAgICByZXR1cm4gMSAvIE1hdGgucG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIE1hdGgucG93KCggcG93MiAqIDMgLSAyICkgLyAyMiAtIHQsIDIpXG4gICAgfTsgfSxcbiAgICBFbGFzdGljOiBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICAgIGlmICggYW1wbGl0dWRlID09PSB2b2lkIDAgKSBhbXBsaXR1ZGUgPSAxO1xuICAgICAgaWYgKCBwZXJpb2QgPT09IHZvaWQgMCApIHBlcmlvZCA9IC41O1xuXG4gICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcbiAgICAgIHZhciBwID0gbWluTWF4KHBlcmlvZCwgLjEsIDIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOiBcbiAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xuXG4gIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpOyB9OyB9O1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xuICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XG4gICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6IFxuICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6IFxuICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoLFxuICAgIGg6IGhlaWdodCxcbiAgICB2Vzogdmlld0JveFsyXSxcbiAgICB2SDogdmlld0JveFszXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xuICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcbiAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIGVsOiBwYXRoRWwsXG4gICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxuICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcbiAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xuICAgIGNhc2UgJ3knOiByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xuICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsOiB2YWx1ZSxcbiAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcbiAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cbiAgfVxufVxuXG4vLyBBbmltYXRhYmxlc1xuXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcbiAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikgeyByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7IH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgcmV0dXJuIHt0YXJnZXQ6IHQsIGlkOiBpLCB0b3RhbDogcGFyc2VkLmxlbmd0aCwgdHJhbnNmb3JtczogeyBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KSB9IH07XG4gIH0pO1xufVxuXG4vLyBQcm9wZXJ0aWVzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XG4gIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xuICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpOyB9XG4gIGlmIChpcy5hcnIocHJvcCkpIHtcbiAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xuICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xuICAgIGlmICghaXNGcm9tVG8pIHtcbiAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcbiAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXG4gICAgICBwcm9wID0ge3ZhbHVlOiBwcm9wfTtcbiAgICB9XG4gIH1cbiAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XG4gIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge3ZhbHVlOiB2fTtcbiAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7IG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7IH1cbiAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHsgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDsgfVxuICAgIHJldHVybiBvYmo7XG4gIH0pLm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTsgfSk7XG59XG5cblxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcbiAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBPYmplY3Qua2V5cyhrZXkpOyB9KSksIGZ1bmN0aW9uIChwKSB7IHJldHVybiBpcy5rZXkocCk7IH0pXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGEsYikgeyBpZiAoYS5pbmRleE9mKGIpIDwgMCkgeyBhLnB1c2goYik7IH0gcmV0dXJuIGE7IH0sIFtdKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGkgKSB7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG5ld0tleSA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7IG5ld0tleS52YWx1ZSA9IGtleVtwXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoIGkgKTtcbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gW107XG4gIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xuICBpZiAoa2V5ZnJhbWVzKSB7IHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7IH1cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcbiAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBwLFxuICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gVHdlZW5zXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcbiAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7IH0pO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkgeyB2YWx1ZSA9IHZhbHVlWzBdOyB9XG4gICAgfVxuICAgIHRbcF0gPSB2YWx1ZTtcbiAgfVxuICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcbiAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xuICB2YXIgcHJldmlvdXNUd2VlbjtcbiAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xuICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XG4gICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XG4gICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xuICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xuICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xuICAgIGlmIChpcy51bmQodG8pKSB7IHRvID0gcHJldmlvdXNWYWx1ZTsgfVxuICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcbiAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcbiAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XG4gICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XG4gICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xuICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcbiAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcbiAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xuICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7IHR3ZWVuLnJvdW5kID0gMTsgfVxuICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH0pO1xufVxuXG4vLyBUd2VlbiBwcm9ncmVzc1xuXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcbiAgY3NzOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zdHlsZVtwXSA9IHY7IH0sXG4gIGF0dHJpYnV0ZTogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpOyB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0W3BdID0gdjsgfSxcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XG4gICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcbiAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7IHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjsgfSk7XG4gICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFNldCBWYWx1ZSBoZWxwZXJcblxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XG4gIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFuaW1hdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcbiAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcbiAgaWYgKGFuaW1UeXBlKSB7XG4gICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcbiAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYW5pbVR5cGUsXG4gICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxuICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcbiAgICAgIHR3ZWVuczogdHdlZW5zLFxuICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXG4gICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxuICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xuICAgIH0pO1xuICB9KSksIGZ1bmN0aW9uIChhKSB7IHJldHVybiAhaXMudW5kKGEpOyB9KTtcbn1cblxuLy8gQ3JlYXRlIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7IH07XG4gIHZhciB0aW1pbmdzID0ge307XG4gIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjsgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcbiAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xuICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcbiAgcmV0dXJuIHRpbWluZ3M7XG59XG5cbnZhciBpbnN0YW5jZUlEID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XG4gIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcbiAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XG4gIHZhciBpZCA9IGluc3RhbmNlSUQ7XG4gIGluc3RhbmNlSUQrKztcbiAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XG4gICAgaWQ6IGlkLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcbiAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcbiAgICBkZWxheTogdGltaW5ncy5kZWxheSxcbiAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxuICB9KTtcbn1cblxuLy8gQ29yZVxuXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmFmO1xuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0ZXAodCkge1xuICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxuICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXG4gICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXG4gICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgeyByZXR1cm47IH1cblxuICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcbiAgICAgIC8vIHN1c3BlbmQgdGlja3NcbiAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXG4gICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXG4gICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZSAuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7IH1cbiAgICAgICk7XG4gICAgICBlbmdpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH1cblxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XG4gIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcbn1cblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XG4gICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcbiAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xuICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgIH1cbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkKSB7IGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xuICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcbiAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG4gICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xuICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcbiAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xuICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xuICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xuICAgICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xuICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xuICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7IGluc3RhbmNlW2NiXShpbnN0YW5jZSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xuICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcbiAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcbiAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcbiAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xuICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XG4gICAgaWYgKGNoaWxkcmVuKSB7IHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpOyB9XG4gICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xuICAgIH1cbiAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XG4gICAgICB9XG4gICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xuICAgIGlmIChpbnN0YW5jZS5iZWdhbikgeyBzZXRDYWxsYmFjaygndXBkYXRlJyk7IH1cbiAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xuICAgICAgbGFzdFRpbWUgPSAwO1xuICAgICAgY291bnRJdGVyYXRpb24oKTtcbiAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XG4gICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93O1xuICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xuICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xuICB9O1xuXG4gIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXG4gIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcblxuICAvLyBTZXQgVmFsdWUgaGVscGVyXG5cbiAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xuICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICBub3cgPSB0O1xuICAgIGlmICghc3RhcnRUaW1lKSB7IHN0YXJ0VGltZSA9IG5vdzsgfVxuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xuICB9O1xuXG4gIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7IHJldHVybjsgfVxuICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHsgaW5zdGFuY2UucmVzZXQoKTsgfVxuICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICByZXNldFRpbWUoKTtcbiAgICBlbmdpbmUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XG4gIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xuICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgfVxuICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH1cbn1cblxuLy8gU3RhZ2dlciBoZWxwZXJzXG5cbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xuICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XG4gIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xuICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xuICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XG4gIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xuICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xuICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XG4gIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xuICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xuICB2YXIgdmFsdWVzID0gW107XG4gIHZhciBtYXhWYWx1ZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoZWwsIGksIHQpIHtcbiAgICBpZiAoZnJvbUZpcnN0KSB7IGZyb21JbmRleCA9IDA7IH1cbiAgICBpZiAoZnJvbUNlbnRlcikgeyBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjsgfVxuICAgIGlmIChmcm9tTGFzdCkgeyBmcm9tSW5kZXggPSB0IC0gMTsgfVxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCVncmlkWzBdIDogKGdyaWRbMF0tMSkvMjtcbiAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4L2dyaWRbMF0pIDogKGdyaWRbMV0tMSkvMjtcbiAgICAgICAgICB2YXIgdG9YID0gaW5kZXglZ3JpZFswXTtcbiAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleC9ncmlkWzBdKTtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHsgdmFsdWUgPSAtZGlzdGFuY2VYOyB9XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd5JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVk7IH1cbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKGVhc2luZykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTsgfSk7IH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7IH0pOyB9XG4gICAgfVxuICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XG4gICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xuICB9XG59XG5cbi8vIFRpbWVsaW5lXG5cbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcbiAgdGwuZHVyYXRpb24gPSAwO1xuICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcbiAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcbiAgICBpZiAodGxJbmRleCA+IC0xKSB7IGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7IH1cbiAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHsgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHsgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pOyB9XG4gICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcbiAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xuICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XG4gICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcbiAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xuICAgIHBhc3NUaHJvdWdoKHRsKTtcbiAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XG4gICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XG4gICAgcGFzc1Rocm91Z2goaW5zKTtcbiAgICBjaGlsZHJlbi5wdXNoKGlucyk7XG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XG4gICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xuICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcbiAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XG4gICAgdGwuc2VlaygwKTtcbiAgICB0bC5yZXNldCgpO1xuICAgIGlmICh0bC5hdXRvcGxheSkgeyB0bC5wbGF5KCk7IH1cbiAgICByZXR1cm4gdGw7XG4gIH07XG4gIHJldHVybiB0bDtcbn1cblxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XG5hbmltZS5zcGVlZCA9IDE7XG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iLCIvLyBTZWU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plbGJvdXJuLzc5YzQ3M2FhYjQwNGFiY2QzNmRjN2NmYWE3YWMwMmFjXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmdiRnJvbUhleChoZXgpIHtcclxuICBpZiAoaGV4WzBdID09PSBcIiNcIikge1xyXG4gICAgaGV4ID0gaGV4LnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHI6IHBhcnNlSW50KGhleFswXSArIGhleFsxXSwgMTYpLFxyXG4gICAgZzogcGFyc2VJbnQoaGV4WzJdICsgaGV4WzNdLCAxNiksXHJcbiAgICBiOiBwYXJzZUludChoZXhbNF0gKyBoZXhbNV0sIDE2KSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmxlbmQoYmFzZVZhbHVlLCBvdmVybGF5VmFsdWUsIGFscGhhKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQob3ZlcmxheVZhbHVlICogYWxwaGEgKyBiYXNlVmFsdWUgKiAoMSAtIGFscGhhKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQWxwaGFCbGVuZChiYXNlSGV4LCBvdmVybGF5SGV4LCBhbHBoYSkge1xyXG4gIGNvbnN0IGJhc2UgPSBnZXRSZ2JGcm9tSGV4KGJhc2VIZXgpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBnZXRSZ2JGcm9tSGV4KG92ZXJsYXlIZXgpO1xyXG5cclxuICBjb25zdCBibGVuZGVkID0ge1xyXG4gICAgcjogYmxlbmQoYmFzZS5yLCBvdmVybGF5LnIsIGFscGhhKSxcclxuICAgIGc6IGJsZW5kKGJhc2UuZywgb3ZlcmxheS5nLCBhbHBoYSksXHJcbiAgICBiOiBibGVuZChiYXNlLmIsIG92ZXJsYXkuYiwgYWxwaGEpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcIiNcIiArXHJcbiAgICBibGVuZGVkLnIudG9TdHJpbmcoMTYpICtcclxuICAgIGJsZW5kZWQuZy50b1N0cmluZygxNikgK1xyXG4gICAgYmxlbmRlZC5iLnRvU3RyaW5nKDE2KVxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uICB0b0N1cnJlbmN5KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KS5mb3JtYXQodmFsdWUpO1xyXG59IiwiLy8gV3JpdHRlbiBieSBHYXJ5IEFudGllclxyXG4vLyBDcmVhdGVkOiAyMDIwXHJcbi8vIE1vZGlmaWVkOiBBcHIgMjAsIDIwMjNcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsTW9udGggPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xyXG5jb25zdCBBYmJyTW9udGggPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG5jb25zdCBGdWxsRGF5c09mV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xyXG5jb25zdCBBYmJyRGF5c09mV2VlayA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ29uc3RhbnRzQmFzZSB7XHJcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BU2Vjb25kKCkge1xyXG4gICAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTZWNvbmRzSW5BTWludXRlKCkge1xyXG4gICAgICAgIHJldHVybiA2MDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BTWludXRlKCkge1xyXG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BU2Vjb25kICogdGhpcy5TZWNvbmRzSW5BTWludXRlO1xyXG4gICAgICAgIHJldHVybiBtaWxsaTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTWludXRlc0luQW5Ib3VyKCkge1xyXG4gICAgICAgIHJldHVybiA2MDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BbkhvdXIoKSB7XHJcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFNaW51dGUgKiB0aGlzLk1pbnV0ZXNJbkFuSG91cjtcclxuICAgICAgICByZXR1cm4gbWlsbGk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEhvdXJzSW5BRGF5KCkge1xyXG4gICAgICAgIHJldHVybiAyNDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTWlsbGlzZWNvbmRzSW5BRGF5KCkge1xyXG4gICAgICAgIGxldCBtaWxsaSA9IHRoaXMuTWlsbGlzZWNvbmRzSW5BbkhvdXIgKiB0aGlzLkhvdXJzSW5BRGF5O1xyXG4gICAgICAgIHJldHVybiBtaWxsaTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGF5c0luQVllYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDM2NTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgVGltZUNvbnN0YW50cyA9IG5ldyBUaW1lQ29uc3RhbnRzQmFzZSgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVTcGFuIHtcclxuICAgIG1pbGxpOiBudW1iZXI7XHJcbiAgICB0b3RhbFNlY29uZHM6IG51bWJlcjtcclxuICAgIHRvdGFsTWludXRlczogbnVtYmVyO1xyXG4gICAgdG90YWxIb3VyczogbnVtYmVyO1xyXG4gICAgdG90YWxEYXlzOiBudW1iZXI7XHJcbiAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBob3VyczogbnVtYmVyO1xyXG4gICAgZGF5czogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtaWxsaSkge1xyXG4gICAgICAgIHRoaXMubWlsbGkgPSBtaWxsaTtcclxuICAgICAgICB0aGlzLnRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQVNlY29uZCk7XHJcbiAgICAgICAgdGhpcy50b3RhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbGxpIC8gVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFNaW51dGUpO1xyXG4gICAgICAgIHRoaXMudG90YWxIb3VycyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyKTtcclxuICAgICAgICB0aGlzLnRvdGFsRGF5cyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQURheSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzICUgVGltZUNvbnN0YW50cy5TZWNvbmRzSW5BTWludXRlO1xyXG4gICAgICAgIHRoaXMubWludXRlcyA9IHRoaXMudG90YWxNaW51dGVzICUgVGltZUNvbnN0YW50cy5NaW51dGVzSW5BbkhvdXI7XHJcbiAgICAgICAgdGhpcy5ob3VycyA9IHRoaXMudG90YWxIb3VycyAlIFRpbWVDb25zdGFudHMuSG91cnNJbkFEYXk7XHJcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy50b3RhbERheXMgJSBUaW1lQ29uc3RhbnRzLkRheXNJbkFZZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRheXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMuZGF5c31kIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ob3VycyA+IDApIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5ob3Vyc31oIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5taW51dGVzID4gMCkge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLm1pbnV0ZXN9bSBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA+IDApIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5zZWNvbmRzfXNgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IFwiLi4uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlOiBhbnk7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZGF0ZSwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlKGRhdGVUaW1lLCBvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgaWYgKGRhdGVUaW1lKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXJyZWd1bGFyRm9ybWF0UmVnZXggPSAvKFxcL0RhdGVcXCgpKC4qKShcXClcXC8pL2k7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0ZVRpbWUgPT09IFwic3RyaW5nXCIgJiYgaXJyZWd1bGFyRm9ybWF0UmVnZXgudGVzdChkYXRlVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGlycmVndWxhckZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRpbWUgPSBwYXJzZUludChtYXRjaFsyXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtaWxsaSA9IHR5cGVvZiBkYXRlVGltZSA9PT0gXCJudW1iZXJcIiA/IGRhdGVUaW1lIDogRGF0ZS5wYXJzZShkYXRlVGltZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4obWlsbGkpKSB7XHJcbiAgICAgICAgICAgICAgICBtaWxsaSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVUQyBvZmZzZXQuLi5cclxuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICogVGltZUNvbnN0YW50cy5NaWxsaXNlY29uZHNJbkFuSG91cjtcclxuICAgICAgICAgICAgbWlsbGkgKz0gb2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShtaWxsaSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoZGF0ZSwgb2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vdygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ldyBEYXRlKCksIDgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZW5kT2ZNb250aChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeWVhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb250aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEhvdXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1pbnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWNvbmRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFNlY29uZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpZmZlcmVuY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHZhciB0aW1lRGlmZiA9IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lRGlmZik7XHJcbiAgICB9XHJcblxyXG4gICAgZGlmZmVyZW5jZShzZWNvbmREYXRlKSB7XHJcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnRpbWUgLSBzZWNvbmREYXRlLnRpbWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihkaWZmKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREYXlzKGRheXMpIHtcclxuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xyXG4gICAgICAgIG5ld0RhdGUuc2V0RGF0ZSh0aGlzLmRhdGUgKyBkYXlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShuZXdEYXRlLCB0aGlzLm9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkWWVhcnMoeWVhcnMpIHtcclxuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xyXG4gICAgICAgIG5ld0RhdGUuc2V0RnVsbFllYXIodGhpcy55ZWFyICsgeWVhcnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ld0RhdGUsIHRoaXMub2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZyhmb3JtYXQgPSBcInl5eXkvTU0vZGQgSEg6bW06c3NcIikge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2RhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBsZXQgeWVhciA9IHRoaXMueWVhci50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBzdWJZZWFyID0geWVhci5wYWRTdGFydCgyLCAnMCcpLnNsaWNlKC0yKTtcclxuICAgICAgICBsZXQgbW9udGggPSB0aGlzLm1vbnRoO1xyXG4gICAgICAgIGxldCBkYXkgPSB0aGlzLmRheTtcclxuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgICAgICBsZXQgaG91ciA9IHRoaXMuaG91cjtcclxuICAgICAgICBsZXQgXzEySG91ciA9IGhvdXIgPCAxMyA/IGhvdXIgOiBob3VyIC0gMTI7XHJcbiAgICAgICAgbGV0IGlzQU0gPSBob3VyIDwgMTI7XHJcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSB0aGlzLm1pbnV0ZXM7XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSB0aGlzLnNlY29uZHM7XHJcblxyXG4gICAgICAgIC8vIERheS4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9kZC9nLCBkYXRlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2QvZywgZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIDI0LUhvdXIuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvSEgvZywgaG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9IL2csIGhvdXIpO1xyXG5cclxuICAgICAgICAvLyAxMi1Ib3VyLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2hoL2csIF8xMkhvdXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaC9nLCBfMTJIb3VyKTtcclxuXHJcbiAgICAgICAgLy8gTWludXRlcy4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9tbS9nLCBtaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL20vZywgbWludXRlcyk7XHJcblxyXG4gICAgICAgIC8vIFNlY29uZHMuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvc3MvZywgc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9zL2csIHNlY29uZHMpO1xyXG5cclxuICAgICAgICAvLyBZZWFyLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eXl5L2csIHllYXIucGFkU3RhcnQoNSwgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5eXkvZywgeWVhci5wYWRTdGFydCg0LCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5L2csIHllYXIucGFkU3RhcnQoMywgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3l5L2csIHN1YlllYXIpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95L2csIHN1YlllYXIpO1xyXG5cclxuICAgICAgICAvLyBNb250aCBpbiB3b3Jkcy4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTU1NL2csIFwiIyMjI1wiKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTU1NL2csIFwiIyMjXCIpO1xyXG5cclxuICAgICAgICAvLyBNb250aCBpbiBudW1iZXIuLi5cclxuICAgICAgICBsZXQgX21vbnRoID0gbW9udGggKyAxO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTS9nLCBfbW9udGgudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvTS9nLCBfbW9udGgpO1xyXG5cclxuICAgICAgICAvLyBBTS9QTS4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC90dC9nLCBpc0FNID8gXCJBTVwiIDogXCJQTVwiKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvdC9nLCBpc0FNID8gXCJBXCIgOiBcIlBcIik7XHJcblxyXG4gICAgICAgIC8vIERheSBvZiB3ZWVrLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2RkZGQvZywgRnVsbERheXNPZldlZWtbZGF5XSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2RkZC9nLCBBYmJyRGF5c09mV2Vla1tkYXldKTtcclxuXHJcbiAgICAgICAgLy8gTW9udGggaW4gd29yZHMuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvIyMjIy9nLCBGdWxsTW9udGhbbW9udGhdKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvIyMjL2csIEFiYnJNb250aFttb250aF0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25fdmlldycpO1xyXG4gICAgXHJcbiAgICBuYXZpZ2F0aW9uVmlldy5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2VkJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBlLmRldGFpbC5hcmdzO1xyXG5cclxuICAgICAgICBpZihhcmdzLmlzU2V0dGluZ3NTZWxlY3RlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXJncy5zZWxlY3RlZEl0ZW0uaHJlZjtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgQ29udGV4dE1lbnUsIENvbnRleHRNZW51T3B0aW9uLCBnbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb250ZXh0LW1lbnVcIjtcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJ0AvZW50aXRpZXMvYWNjb3VudCc7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnQC9lbnRpdGllcy90cmFuc2FjdGlvbic7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJ0AvZW51bXMvb3BlcmF0aW9uJztcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25UeXBlIH0gZnJvbSAnQC9lbnVtcy90cmFuc2FjdGlvbi10eXBlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICcuL2RhdGUtdGltZSc7XHJcbmltcG9ydCB7IEFjY291bnRDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL2FjY291bnQtY2FyZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IENhcmRCYWxhbmNlIH0gZnJvbSAnQC9jb21wb25lbnRzL2NhcmQtYmFsYW5jZSc7XHJcbmltcG9ydCB7IHRvQ3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5JztcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbk1hbmFnZXIge1xyXG4gICAgLy8gRE9NXHJcbiAgICBjYXJkOiBBY2NvdW50Q2FyZDtcclxuICAgIGFjdGlvbnM6IE5vZGVMaXN0T2Y8Q2FyZEJhbGFuY2U+O1xyXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGVkaXRvcjogYW55OyAvLyBUT0RPOiBTdHJvbmcgdHlwZVxyXG4gICAgY29tbWFuZDogRWxlbWVudDtcclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgaXNSZWdpc3RlcmVkOiBib29sZWFuO1xyXG4gICAgb3BlcmF0aW9uOiBPcGVyYXRpb247XHJcbiAgICB0cmFuc2FjdGlvblR5cGU6IFRyYW5zYWN0aW9uVHlwZTtcclxuICAgIGNvbnRleHRNZW51OiBDb250ZXh0TWVudTtcclxuICAgIGFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBPcGVyYXRpb24uQ3JlYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBY2NvdW50KGFjY291bnQ6IEFjY291bnQpIHtcclxuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xyXG4gICAgICAgIHRoaXMubG9hZEJhbGFuY2VzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVnaXN0ZXJlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNZW51KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZWdpc3Rlck1lbnUoKSB7XHJcbiAgICAgICAgLy8gTWVudVxyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBnbG9iYWxDb250ZXh0LmFkZE1lbnUoXCJ0cmFuc2FjdGlvbnNfcm93XCIsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBPcHRpb25zXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXCJVcGRhdGVcIiwgXCJQb3N0XCIsIFwiRGVsZXRlXCIsIFwiQ2FuY2VsXCJdO1xyXG4gICAgICAgIGxldCBtZW51T3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChtbywgbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24obyk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSgodHJhbnM6IFRyYW5zYWN0aW9uKSA9PiB0cmFucy5Qb3N0ZWQgPT0gKG8gPT0gXCJDYW5jZWxcIikpO1xyXG4gICAgICAgICAgICBtby5wdXNoKG9wdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbW87XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lbnVPcHRpb25zWzBdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy51cGRhdGVCdG5DbGlja2VkKHRyYW5zKSk7XHJcbiAgICAgICAgbWVudU9wdGlvbnNbMV0ub25DbGljayh0cmFucyA9PiB0aGlzLnBvc3QodHJhbnMpKTtcclxuICAgICAgICBtZW51T3B0aW9uc1syXS5vbkNsaWNrKHRyYW5zID0+IHRoaXMuZGVsZXRlKHRyYW5zKSk7XHJcbiAgICAgICAgbWVudU9wdGlvbnNbM10ub25DbGljayh0cmFucyA9PiB0aGlzLmNhbmNlbCh0cmFucykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUuYWRkT3B0aW9ucyguLi5tZW51T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJBY3Rpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlOiBudW1iZXIgPSBwYXJzZUludChhY3Rpb24uZGF0YXNldC5hY3Rpb24pO1xyXG4gICAgICAgICAgICBhY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlID0gdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZUlucHV0ID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRbbmFtZT1UcmFuc2FjdGlvblR5cGVdXCIpO1xyXG4gICAgICAgICAgICAgICAgdHlwZUlucHV0LnZhbHVlID0gdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZUlucHV0ID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRbbmFtZT1EYXRlXVwiKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IERhdGVUaW1lLm5vdygpLnRvU3RyaW5nKFwieXl5eS1NTS1kZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC50eXBlICE9IFwibnVtYmVyXCIgPyBcIlwiIDogXCIwLjAwXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVkaXRvcigpIHtcclxuICAgICAgICBjb25zdCBhbW91bnRJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0I2Ftb3VudFwiKTtcclxuICAgICAgICBjb25zdCBhbW91bnRJbnB1dEhpZGRlbiA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9QW1vdW50XVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBhbW91bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvblR5cGUgPT0gVHJhbnNhY3Rpb25UeXBlLldpdGhkcmF3KVxyXG4gICAgICAgICAgICAgICAgYW1vdW50ICo9IC0xO1xyXG5cclxuICAgICAgICAgICAgYW1vdW50SW5wdXRIaWRkZW4udmFsdWUgPSBhbW91bnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICAgICAgY29uc3QgZGlzc21pc3NFZGl0b3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc21pc3NfZWRpdG9yX2RpYWxvZ19idG5cIik7XHJcbiAgICAgICAgZGlzc21pc3NFZGl0b3JCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiNkYWRhZGFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZV9idG4nKTtcclxuICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmFjY291bnQ7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyZC50aXRsZSA9IGFjY291bnQuVGl0bGU7XHJcbiAgICAgICAgdGhpcy5jYXJkLm51bWJlciA9IGFjY291bnQuQWNjb3VudE51bWJlcjtcclxuICAgICAgICB0aGlzLmNhcmQuY2F0ZWdvcnkgPSBhY2NvdW50LkNhdGVnb3J5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkQmFsYW5jZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgYWNjb3VudElkOiB0aGlzLmFjY291bnQuSWQgfTtcclxuICAgICAgICBjb25zdCBiYWxhbmNlcyA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FyZC1iYWxhbmNlXCIpIGFzIE5vZGVMaXN0T2Y8Q2FyZEJhbGFuY2U+O1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoXCJhY2NvdW50L2JhbGFuY2UucGhwXCIsIHsgcGFyYW1zOiBkYXRhIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHBheWxvYWQuY29udGVudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIXBheWxvYWQuc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgT29wcyEgJHtjb250ZW50fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlc1swXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuQmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlc1sxXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuUHJvamVjdGlvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZFRyYW5zYWN0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBBY2NvdW50SWQ6IHRoaXMuYWNjb3VudC5JZCB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChcInRyYW5zYWN0aW9uL3JlYWQucGhwXCIsIHsgcGFyYW1zOiBkYXRhIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHBheWxvYWQuY29udGVudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIXBheWxvYWQuc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjZW50ZXJlZFwiPk9vcHMhICR7Y29udGVudH08L3A+YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbnMgPSB0aGlzLmdyb3VwVHJhbnNhY3Rpb25zKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5uZXdHcm91cChrZXksIHRyYW5zYWN0aW9uc1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBncm91cFRyYW5zYWN0aW9ucyh0cmFucykge1xyXG4gICAgICAgIGxldCBncm91cHMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB0IG9mIHRyYW5zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHQuRGF0ZSArIHQuUG9zdGVkO1xyXG4gICAgICAgICAgICAoZ3JvdXBzW2tleV0gPz89IFtdKS5wdXNoKHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH1cclxuXHJcbiAgICBuZXdHcm91cChkYXRlLCB0cmFucykge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZ3JvdXAnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZ3JvdXAtaGVhZGVyJyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1ncm91cC1ib2R5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGl0bGUvaGVhZGVyLi4uXHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBEYXRlVGltZS5wYXJzZShkYXRlLnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGRhdGVUaW1lLnRvU3RyaW5nKCdNTU0uIGRkLCB5eXl5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdHJhbnNbMF0uUG9zdGVkID8gJ2FjdHVhbCcgOiAncHJvamVjdGlvbic7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcclxuICAgICAgICBcclxuICAgICAgICBncm91cC5hcHBlbmQoaGVhZGVyKTtcclxuICAgICAgICBncm91cC5hcHBlbmQoYm9keSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCB0IG9mIHRyYW5zKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLm5ld1Jvdyh0KTtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1Jvdyh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pIHtcclxuICAgICAgICAvLyBUT0RPOiBSZWZhY3Rvcj9cclxuICAgICAgICBjb25zdCBzdGF0dXMgPSB0cmFuc2FjdGlvbi5Qb3N0ZWQgPyAnYWN0dWFsJyA6ICdwcm9qZWN0aW9uJztcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZXNjUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tcm93Jywgc3RhdHVzKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xyXG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBkZXNjUGFyLmlubmVyVGV4dCA9IHRyYW5zYWN0aW9uLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY1Bhcik7XHJcbiAgICAgICAgc3VtbWFyeS5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1zdW1tYXJ5Jyk7XHJcblxyXG4gICAgICAgIG1haW4uYXBwZW5kKGRlc2MpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kKHN1bW1hcnkpO1xyXG4gICAgICAgIHJvdy5hcHBlbmQobWFpbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXNEZWJpdCA9IHRyYW5zYWN0aW9uLlRvdGFsID49IDA7XHJcbiAgICAgICAgY29uc3QgdHJhbnNBbW91bnQ6IG51bWJlciA9IE1hdGguYWJzKHRyYW5zYWN0aW9uLlRvdGFsKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbW91bnRQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgcmVmUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBhbW91bnRQYXIuaW5uZXJUZXh0ID0gYCR7IWlzRGViaXQgPyBcIi1cIiA6IFwiXCJ9IFBIUCAke3RvQ3VycmVuY3kodHJhbnNBbW91bnQudG9TdHJpbmcoKSl9YDtcclxuICAgICAgICByZWZQYXIuaW5uZXJUZXh0ID0gJ1JFRjogTi9BJztcclxuICAgICAgICBcclxuICAgICAgICBzdW1tYXJ5LmFwcGVuZChhbW91bnRQYXIpO1xyXG4gICAgICAgIHN1bW1hcnkuYXBwZW5kKHJlZlBhcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgKHJvdyBhcyBhbnkpLmFkZENvbnRleHQodGhpcy5jb250ZXh0TWVudSwgdHJhbnNhY3Rpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucy1jb250YWluZXInKTtcclxuICAgICAgICByb3cuYXBwZW5kKGFjdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoc3RhdHVzID09PSBcInByb2plY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0QWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJlZGl0XCIsIFwiRWRpdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwicG9zdFwiLCBcIkNvbXBsZXRlZFNvbGlkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImRlbGV0ZVwiLCBcIkRlbGV0ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuQ2xpY2tlZCh0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcG9zdEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0KHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGVBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZChlZGl0QWN0aW9uKTtcclxuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQocG9zdEFjdGlvbik7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGRlbGV0ZUFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJkZWxldGVcIiwgXCJDYW5jZWxcIik7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGNhbmNlbEFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjYW5jZWxBY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUb3VjaCBldmVudHMuLi5cclxuICAgICAgICBsZXQgaW5pdGlhbFRvdWNoO1xyXG4gICAgICAgIGxldCBpbml0aWFsTGVmdDtcclxuXHJcbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlID0+IHtcclxuICAgICAgICAgICAgaW5pdGlhbFRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICAgICAgaW5pdGlhbExlZnQgPSBwYXJzZUludChtYWluLnN0eWxlLmxlZnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gQXJyYXkuZnJvbShlLmNoYW5nZWRUb3VjaGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQodGNoID0+IHRjaC5pZGVudGlmaWVyID09PSBpbml0aWFsVG91Y2guaWRlbnRpZmllcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodG91Y2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtYXRjaGVzIGZvdW5kIG9mIHRoZSBpbml0aWFsIHRvdWNoLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgeERlbHRhID0gdG91Y2gucGFnZVggLSBpbml0aWFsVG91Y2gucGFnZVg7XHJcbiAgICAgICAgICAgIGNvbnN0IHlEZWx0YSA9IHRvdWNoLnBhZ2VZIC0gaW5pdGlhbFRvdWNoLnBhZ2VZO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5taW4oMCwgaW5pdGlhbExlZnQgKyB4RGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiBNYXRoLmFicyh5RGVsdGEpKVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbWFpbi5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IEFycmF5LmZyb20oZS5jaGFuZ2VkVG91Y2hlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKHRjaCA9PiB0Y2guaWRlbnRpZmllciA9PT0gaW5pdGlhbFRvdWNoLmlkZW50aWZpZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvdWNoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWF0Y2hlcyBmb3VuZCBvZiB0aGUgaW5pdGlhbCB0b3VjaC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBwYXJzZUludChtYWluLnN0eWxlLmxlZnQpO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25XaWR0aCA9IGFjdGlvbnMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGFjdGlvbldpZHRoIC8gMjtcclxuICAgICAgICAgICAgY29uc3Qgc25hcFBvaW50ID0gYWN0aW9uV2lkdGggKiAoKE1hdGguYWJzKGxlZnQpID4gdGhyZXNob2xkKSA/IDEgOiAwKTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW4sXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtc25hcFBvaW50LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbGxhcHNlQWN0aW9ucygpIHtcclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogbWFpblswXSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICBuZXdBY3Rpb24obmFtZSwgc3ltYm9sKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZsdWVudC1zeW1ib2wtaWNvbicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicsIGBhY3Rpb24tJHtuYW1lfWApO1xyXG4gICAgICAgIGFjdGlvbi50YWJJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAvLyBJY29uXHJcbiAgICAgICAgYWN0aW9uLmFwcGVuZChpY29uKTtcclxuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3ltYm9sJywgc3ltYm9sKTtcclxuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgJzIwJyk7XHJcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2ZvcmVncm91bmQnLCAnI2ZmZicpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ0bkNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLlVwZGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpbnB1dC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJBbW91bnRcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBuYW1lICE9IFwiXCIgLy8gRW1wdHlcclxuICAgICAgICAgICAgICAgID8gZGF0YVtuYW1lXVxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmFicyhkYXRhLkFtb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlID0gZGF0YS5UcmFuc2FjdGlvblR5cGU7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiIzk5OTk5OVwiKTtcclxuICAgICAgICB0aGlzLmVkaXRvci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBvcGVyYXRpb24gPSBPcGVyYXRpb25bdGhpcy5vcGVyYXRpb25dLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgdHJhbnNhY3Rpb24vJHtvcGVyYXRpb259LnBocGA7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yXHJcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcIkFjY291bnRJZFwiLCB0aGlzLmFjY291bnQuSWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGV0IHRyYW5zID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcclxuXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoZW5kcG9pbnQsIHRyYW5zKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IE9wZXJhdGlvbi5DcmVhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiI2RhZGFkYVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZSh0cmFuczogVHJhbnNhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVBvc3QoXCJ0cmFuc2FjdGlvbi9kZWxldGUucGhwXCIsIHRyYW5zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcG9zdCh0cmFuczogVHJhbnNhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVBvc3QoXCJ0cmFuc2FjdGlvbi9wb3N0LnBocFwiLCB0cmFucyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhbmNlbCh0cmFuczogVHJhbnNhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVBvc3QoXCJ0cmFuc2FjdGlvbi9jYW5jZWwucGhwXCIsIHRyYW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3N0KGVuZHBvaW50OiBzdHJpbmcsIHRyYW5zOiBUcmFuc2FjdGlvbikge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KGVuZHBvaW50LCB0cmFucylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW25hbWU9XCJ0aGVtZS1jb2xvclwiXWApXHJcbiAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCB0aGVtZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gXCJAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50XCI7XHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCdhY2NvdW50LWNhcmQnKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudENhcmQgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzI1MkEzMiA1MCUsICMyZDM0M2UgNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDE2JSksIDAgM3B4IDZweCByZ2IoMCAwIDAgLyAyMyUpO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDpob3N0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNEQ5MEZFO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDZweCk7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNnB4KTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgOmhvc3Q6YWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib2R5ID4gLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWxhbmNlcyB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5udW1iZXJzLFxyXG4gICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmY2M7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bWJlcnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5udW1iZXJzIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6c2xvdHRlZChpbWdbc2xvdD1pY29uXSkge1xyXG4gICAgICAgICAgICBib3R0b206IDIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMThweDtcclxuICAgICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNQcmVjaXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gW1wiZGF0YS10aXRsZVwiLCBcImRhdGEtbnVtYmVyXCIsIFwiZGF0YS1jYXRlZ29yeVwiXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aXRsZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHByaXZhdGUgX251bWJlclNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2NhdGVnb3J5U3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgXHJcbiAgICAvKiBBdHRyaWJ1dGVzICovXHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBudW1iZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIsIHZhbHVlID8/IFwi4oCi4oCi4oCi4oCiXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0TnVtYmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhdGVnb3J5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNhdGVnb3J5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5XCIsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRE9NICovXHJcbiAgICBnZXQgdGl0bGVTcGFuKCkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlU3BhbiA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlU3BhbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnVtYmVyU3BhbigpIHtcclxuICAgICAgICB0aGlzLl9udW1iZXJTcGFuID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5udW1iZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlclNwYW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhdGVnb3J5U3BhbigpIHtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yeVNwYW4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXRlZ29yeVNwYW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWxhbmNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJudW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCi4oCi4oCi4oCiPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAouKAouKAouKAojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKLigKLigKLigKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj7igKLigKLigKLigKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhdGVnb3J5XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgKi9cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgICAgICB0aGlzLnNldE51bWJlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xyXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6IHRoaXMuc2V0VGl0bGUoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLW51bWJlclwiOiB0aGlzLnNldE51bWJlcigpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGEtY2F0ZWdvcnlcIjogdGhpcy5zZXRDYXRlZ29yeSgpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZVNwYW4uaW5uZXJIVE1MID0gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy5udW1iZXI/LnNsaWNlKC00KTtcclxuICAgICAgICB0aGlzLm51bWJlclNwYW4uaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhdGVnb3J5KCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTcGFuLmlubmVySFRNTCA9IHRoaXMuY2F0ZWdvcnk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gXCJAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50XCI7XHJcblxyXG5AY3VzdG9tQ29tcG9uZW50KCdhY3Rpb24tYnV0dG9uJylcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbiBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDYsIDE5NiwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWZpbGwtcmVzdCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0KDpob3Zlcikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgOmhvc3QoOmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjMpO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnZGF0YS1pY29uJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3ltYm9sSWNvbjogYW55O1xyXG4gICAgXHJcbiAgICAvKiBBdHRyaWJ1dGVzICovXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpY29uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldEljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBzeW1ib2xJY29uKCkge1xyXG4gICAgICAgIHRoaXMuX3N5bWJvbEljb24gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3ltYm9sLWljb24nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ltYm9sSWNvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24+PC9mbHVlbnQtc3ltYm9sLWljb24+IFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRnVuY3Rpb25zICovXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnNldEljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lICE9ICdkYXRhLWljb24nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEljb24oKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xJY29uLnN5bWJvbCA9IHRoaXMuaWNvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSBcIkBzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnRcIjtcclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ2NhcmQtYmFsYW5jZScpXHJcbmV4cG9ydCBjbGFzcyBDYXJkQmFsYW5jZSBleHRlbmRzIEN1c3RvbUNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmY2M7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5maWd1cmUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlndXJlLm1lZGl1bSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWd1cmUuc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlndXJlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY4MDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWd1cmUubWVkaXVtOjphZnRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWd1cmUuc21hbGw6OmFmdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jdXJyZW5jeS1waHA6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJQSFBcIjtcclxuICAgICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHJldHVybiBbXCJkYXRhLXRpdGxlXCIsIFwiZGF0YS1jdXJyZW5jeVwiXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aXRsZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2ZpZ3VyZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3Nsb3Q6IEhUTUxTbG90RWxlbWVudDtcclxuXHJcbiAgICAvKiBBdHRyaWJ1dGVzICovXHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVuY3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiKSA/PyBcInBocFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjdXJyZW5jeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW5jeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIERPTSAqL1xyXG4gICAgZ2V0IHRpdGxlU3BhbigpIHtcclxuICAgICAgICB0aGlzLl90aXRsZVNwYW4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVNwYW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpZ3VyZVNwYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZmlndXJlU3BhbiA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWd1cmVTcGFuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzbG90RWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLl9zbG90ID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+UHJvamVjdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWd1cmUgY3VycmVuY3ktcGhwXCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEZ1bmN0aW9ucyAqL1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbG90RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5zbG90RWxlbWVudC5hc3NpZ25lZE5vZGVzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBub2Rlc1swXS50ZXh0Q29udGVudC5yZXBsYWNlKC8sL2csICcnKTtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IHBhcnNlRmxvYXQoY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICBpZihpc05hTihiYWxhbmNlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPj0gMTAwMDAwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlU3Bhbi5jbGFzc0xpc3QuYWRkKFwic21hbGxcIik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGJhbGFuY2UgPj0gMTAwMDAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVTcGFuLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZGF0YS10aXRsZVwiOiB0aGlzLnNldFRpdGxlKCk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGF0YS1jdXJyZW5jeVwiOiB0aGlzLnNldEN1cnJlbmN5KCk7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlU3Bhbi5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbmN5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYGZpZ3VyZSBjdXJyZW5jeS0ke3RoaXMuY3VycmVuY3l9YCk7XHJcbiAgICB9XHJcbn0iLCIvLyBXcml0dGVuIGJ5IEdhcnkgQW50aWVyIDIwMjBcclxuLy8gQ3VycmVudCB2ZXJzaW9uOiAxLjIuMC4xXHJcblxyXG5jb25zdCBDb250ZXh0TWFyZ2luID0gMztcclxuY29uc3QgQ29udGV4dFRvcE9mZnNldCA9IDc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVPcHRpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNhbGxiYWNrczogKChkYXRhOiBhbnkpID0+IHZvaWQpW107XHJcbiAgICBlbmFibGVDaGFsbGVuZ2U6IChkYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICB2aXNpYmxlQ2hhbGxlbmdlOiAoZGF0YTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVDaGFsbGVuZ2UgPSAoKSA9PiB0cnVlO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNoYWxsZW5nZSA9ICgpID0+IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHZpc2libGUoY2hhbGxlbmdlKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbGxlbmdlID0gY2hhbGxlbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZShjaGFsbGVuZ2UpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUNoYWxsZW5nZSA9IGNoYWxsZW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUNoYWxsZW5nZShkYXRhKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMubGFiZWw7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcmUtY29udGV4dC1hY3Rpb24nKVxyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICF0aGlzLmVuYWJsZUNoYWxsZW5nZShkYXRhKTtcclxuXHJcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGRhdGEpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICByb290OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIG9wdGlvbnM6IENvbnRleHRNZW51T3B0aW9uW107XHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcm9vdDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPcHRpb24ob3B0aW9uOiBDb250ZXh0TWVudU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3B0aW9ucyguLi5vcHRpb25zOiBDb250ZXh0TWVudU9wdGlvbltdKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRhdGFJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbZGF0YUluZGV4XTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24uZHJhdyhkYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERhdGEoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEucHVzaChkYXRhKSAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVHbG9iYWwge1xyXG4gICAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBtZW51czoge1trZXk6IHN0cmluZ106IENvbnRleHRNZW51fVxyXG5cclxuICAgIGFjdGl2ZVRyaWdnZXI6IGFueTtcclxuICAgIHRyaWdnZXJUb3A6IGFueTtcclxuICAgIHRyaWdnZXJMZWZ0OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tZW51cyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVRyaWdnZXI7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVG9wO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckxlZnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29yZS1jb250ZXh0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsICdhZGRDb250ZXh0JywgeyB2YWx1ZTogZnVuY3Rpb24oY29udGV4dCwgZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBjb250ZXh0LmFkZERhdGEoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5jb250ZXh0SWQgPSBjb250ZXh0LmlkO1xyXG4gICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5pbmRleCA9IGRhdGFJbmRleDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH19KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNZW51KGlkOiBzdHJpbmcsIHJvb3Q6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBDb250ZXh0TWVudShpZCwgcm9vdCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudXNbaWRdID0gbWVudTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZXh0KGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGxldCBpc0RvY3VtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvbnRleHRJZDtcclxuICAgICAgICBsZXQgZGF0YUluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldD8ucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpc0RvY3VtZW50ID0gdGFyZ2V0ID09PSBkb2N1bWVudDtcclxuICAgICAgICAgICAgY29udGV4dElkID0gIWlzRG9jdW1lbnQgPyB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb250ZXh0LWlkXCIpIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUoIWlzRG9jdW1lbnQgJiYgIWNvbnRleHRJZCk7XHJcblxyXG4gICAgICAgIGRhdGFJbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNvbnRleHRJZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlciA9IHRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVG9wID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0ID0gZS5jbGllbnRYO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93KGNvbnRleHRJZCwgZGF0YUluZGV4KTtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuaXNTYW1lTm9kZSh0aGlzLmVsZW1lbnQpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhjb250ZXh0SWQ6IHN0cmluZywgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudXNbY29udGV4dElkXTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gbWVudS5kcmF3KGRhdGFJbmRleCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQm91bmRzLi4uXHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IG1lbnUucm9vdDtcclxuICAgICAgICBjb25zdCB7bGVmdCwgdG9wLCByaWdodCwgYm90dG9tfSA9IHJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbGV0IHJvb3RUb3AgPSB0b3AgKyBDb250ZXh0TWFyZ2luO1xyXG4gICAgICAgIGxldCByb290UmlnaHQgPSByaWdodCAtIENvbnRleHRNYXJnaW47XHJcbiAgICAgICAgbGV0IHJvb3RCb3R0b20gPSBib3R0b20gLSBDb250ZXh0TWFyZ2luO1xyXG4gICAgICAgIGxldCByb290TGVmdCA9IGxlZnQgKyBDb250ZXh0TWFyZ2luO1xyXG5cclxuICAgICAgICAvLyBDb250ZXh0cy4uLlxyXG4gICAgICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBsZXQgY29udGV4dFRvcCA9IHRoaXMudHJpZ2dlclRvcCAtIENvbnRleHRUb3BPZmZzZXQ7XHJcbiAgICAgICAgbGV0IGNvbnRleHRMZWZ0ID0gdGhpcy50cmlnZ2VyTGVmdDtcclxuICAgICAgICBsZXQgY29udGV4dEJvdHRvbSA9IGNvbnRleHRUb3AgKyBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IGNvbnRleHRSaWdodCA9IGNvbnRleHRMZWZ0ICsgaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBYLWxpbWl0IGJvdW5kcy5cclxuICAgICAgICBpZiAoY29udGV4dExlZnQgPCByb290TGVmdCkge1xyXG4gICAgICAgICAgICBjb250ZXh0TGVmdCA9IHJvb3RMZWZ0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFJpZ2h0ID4gcm9vdFJpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRMZWZ0ID0gcm9vdFJpZ2h0IC0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBZLWxpbWl0IGJvdW5kcy5cclxuICAgICAgICBpZiAoY29udGV4dFRvcCA8IHJvb3RUb3ApIHtcclxuICAgICAgICAgICAgY29udGV4dFRvcCA9IHJvb3RUb3A7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Qm90dG9tID4gcm9vdEJvdHRvbSkge1xyXG4gICAgICAgICAgICBjb250ZXh0VG9wID0gcm9vdEJvdHRvbSAtIGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7Y29udGV4dFRvcH1weGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtjb250ZXh0TGVmdH1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclRvcCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2xvYmFsQ29udGV4dCA9IG5ldyBDb250ZXh0TWVudUdsb2JhbCgpOyIsImltcG9ydCB7IGNvbXB1dGVBbHBoYUJsZW5kIH0gZnJvbSAnQC9jbGFzc2VzL2FscGhhLWJsZW5kJztcclxuaW1wb3J0IHsgY3VzdG9tQ29tcG9uZW50LCBDdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcclxuXHJcbkBjdXN0b21Db21wb25lbnQoJ3RyYW5zYWN0aW9uLXBhbmVsJylcclxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uUGFuZWwgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHN0eWxlcyA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIC0tcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC0tcmFkaXVzLW1vYjogMTVweDtcclxuICAgICAgICAgICAgLS1tYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIC0tdG9wOiBjYWxjKDQ0cHggLyAyKTtcclxuICAgICAgICAgICAgLS13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0KC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucGFuZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWRpdXMtbW9iKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZGl1cy1tb2IpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCBjYWxjKDMyICogMC41cHgpIGNhbGMoKDMyICogMXB4KSkgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvcCkpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oYW5kbGUtYmFyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGFuZGxlLWJhcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE5NCwgMTk0LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsb3Qge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKiBUYWJsZXQgJiBVcCAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnBhbmVsIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLW1hcmdpbikgKiAyKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKHZhcigtLXdpZHRoKSAqIC0xKTtcclxuICAgICAgICAgICAgICAgIHRvcDogdmFyKC0tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmhhbmRsZS1iYXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBwcml2YXRlIF9wYW5lbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jbGlja2VkVGhyb3VnaFBhbmVsOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSB7IGFscGhhOiAwLjAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBET00gKi9cclxuICAgIGdldCBwYW5lbCgpIHtcclxuICAgICAgICB0aGlzLl9wYW5lbCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIucGFuZWxcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLWJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbih0cnVlLCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5fY2xpY2tlZFRocm91Z2hQYW5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbihmYWxzZSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbihzaG93OiBib29sZWFuLCBhbHBoYTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVpbnRcIixcclxuICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB0aGlzLmNoYW5nZVRoZW1lKCksXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighc2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUGFuZWxcclxuICAgICAgICBjb25zdCBwYW5lbEFuaW06IGFuaW1lLkFuaW1lQW5pbVBhcmFtcyA9IHt0YXJnZXRzOiB0aGlzLnBhbmVsfTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KVxyXG4gICAgICAgICAgICBwYW5lbEFuaW0udG9wID0gc2hvdyA/IDIyIDogd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcGFuZWxBbmltLnJpZ2h0ID0gc2hvdyA/IDE1IDogLTUzMTsgLy8gVE9ETzogRHluYW1pYz9cclxuXHJcbiAgICAgICAgdGltZWxpbmUuYWRkKHBhbmVsQW5pbSwgMCk7XHJcblxyXG4gICAgICAgIC8vIE92ZXJsYXlcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gYHJnYmEoMCwgMCwgMCwgJHthbHBoYX0pYDtcclxuICAgICAgICB0aW1lbGluZS5hZGQoe3RhcmdldHM6IHRoaXMsIGJhY2tncm91bmQ6IGJhY2tncm91bmR9LCAwKTtcclxuXHJcbiAgICAgICAgLy8gVGhlbWVcclxuICAgICAgICAvLyBGSVhNRTogRmxpY2tlciBvbiBzaG93IGZpcnN0IGF0dGVtcHQuXHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheUFuaW06IGFuaW1lLkFuaW1lUGFyYW1zID0geyB0YXJnZXRzOiB0aGlzLl9vdmVybGF5LCBhbHBoYTogYWxwaGEgfTtcclxuICAgICAgICB0aW1lbGluZS5hZGQob3ZlcmxheUFuaW0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gY29tcHV0ZUFscGhhQmxlbmQoXHJcbiAgICAgICAgICAgIFwiZjJmMmYyXCIsXHJcbiAgICAgICAgICAgIFwiMDAwMDAwXCIsIFxyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5LmFscGhhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl0nKVxyXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gT3BlcmF0aW9uIHtcclxuICAgIENyZWF0ZSxcclxuICAgIFVwZGF0ZVxyXG59IiwiZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25UeXBlIHtcclxuICAgIERlcG9zaXQsXHJcbiAgICBXaXRoZHJhdyxcclxuICAgIFRyYW5zZmVyXHJcbn0iLCJpbXBvcnQgeyBSZXNwb25zZVBheWxvYWQgfSBmcm9tICdAL2NsYXNzZXMvcmVzcG9uc2UtcGF5bG9hZCc7XHJcbmltcG9ydCB7IHNlcnZpY2UsIFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9zZXJ2aWNlLWJhc2UnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnQC9lbnRpdGllcy9hY2NvdW50JztcclxuXHJcbkBzZXJ2aWNlKCcvYWNjb3VudC9jcnVkJylcclxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xyXG4gICAgYXN5bmMgZ2V0KCkge1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgncmVhZC5waHAnKTtcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmdldChlbmRwb2ludCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhIGFzIFJlc3BvbnNlUGF5bG9hZDxBY2NvdW50W10+O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZShkYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY3JlYXRlLnBocCcpO1xyXG4gICAgICAgIGNvbnN0IHtkYXRhOiBwYXlsb2FkfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXlsb2FkIGFzIFJlc3BvbnNlUGF5bG9hZDxzdHJpbmc+O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZShkYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgndXBkYXRlLnBocCcpO1xyXG4gICAgICAgIGNvbnN0IHtkYXRhOiBwYXlsb2FkfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXlsb2FkIGFzIFJlc3BvbnNlUGF5bG9hZDxzdHJpbmc+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFVzZSBKU09OXHJcbiAgICBhc3luYyBjbG9zZShpZDogYmlnaW50KSB7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjbG9zZS5waHAnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBjb25zdCB7ZGF0YTogcGF5bG9hZH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBwYXlsb2FkIGFzIFJlc3BvbnNlUGF5bG9hZDxzdHJpbmc+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFVzZSBKU09OXHJcbiAgICBhc3luYyByZW1vdmUoaWQ6IGJpZ2ludCkge1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnZGVsZXRlLnBocCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ0lkJywgaWQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtkYXRhOiBwYXlsb2FkfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHBheWxvYWQgYXMgUmVzcG9uc2VQYXlsb2FkPHN0cmluZz47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYXhpb3MsIHtBeGlvc0luc3RhbmNlfSBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZUJhc2Uge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb25uZWN0aW9uOiBBeGlvc0luc3RhbmNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBheGlvcy5jcmVhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5kcG9pbnQocGF0aD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYmFzZVVSTCA9ICh0aGlzIGFzIGFueSkuX2Jhc2VVUkw7XHJcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VVUkx9LyR7cGF0aH1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShiYXNlVVJMOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiA8VCBleHRlbmRzIHsgbmV3KC4uLmFyZ3M6IGFueVtdKToge30gfT4oY29uc3RydWN0b3I6IFQpIHtcclxuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgICAgIF9iYXNlVVJMID0gYmFzZVVSTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IGh0dHBBZGFwdGVyIGZyb20gJy4vaHR0cC5qcyc7XG5pbXBvcnQgeGhyQWRhcHRlciBmcm9tICcuL3hoci5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXJcbn1cblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ25hbWUnLCB7dmFsdWV9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7dmFsdWV9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBuYW1lT3JBZGFwdGVyID0gYWRhcHRlcnNbaV07XG4gICAgICBpZigoYWRhcHRlciA9IHV0aWxzLmlzU3RyaW5nKG5hbWVPckFkYXB0ZXIpID8ga25vd25BZGFwdGVyc1tuYW1lT3JBZGFwdGVyLnRvTG93ZXJDYXNlKCldIDogbmFtZU9yQWRhcHRlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhZGFwdGVyKSB7XG4gICAgICBpZiAoYWRhcHRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgYEFkYXB0ZXIgJHtuYW1lT3JBZGFwdGVyfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudGAsXG4gICAgICAgICAgJ0VSUl9OT1RfU1VQUE9SVCdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICB1dGlscy5oYXNPd25Qcm9wKGtub3duQWRhcHRlcnMsIG5hbWVPckFkYXB0ZXIpID9cbiAgICAgICAgICBgQWRhcHRlciAnJHtuYW1lT3JBZGFwdGVyfScgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGRgIDpcbiAgICAgICAgICBgVW5rbm93biBhZGFwdGVyICcke25hbWVPckFkYXB0ZXJ9J2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhZGFwdGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG4gIH0sXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBzZXR0bGUgZnJvbSAnLi8uLi9jb3JlL3NldHRsZS5qcyc7XG5pbXBvcnQgY29va2llcyBmcm9tICcuLy4uL2hlbHBlcnMvY29va2llcy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi8uLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4uL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgaXNVUkxTYW1lT3JpZ2luIGZyb20gJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IHBhcnNlUHJvdG9jb2wgZnJvbSAnLi4vaGVscGVycy9wYXJzZVByb3RvY29sLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBzcGVlZG9tZXRlciBmcm9tICcuLi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzJztcblxuZnVuY3Rpb24gcHJvZ3Jlc3NFdmVudFJlZHVjZXIobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0pIHtcbiAgbGV0IGJ5dGVzTm90aWZpZWQgPSAwO1xuICBjb25zdCBfc3BlZWRvbWV0ZXIgPSBzcGVlZG9tZXRlcig1MCwgMjUwKTtcblxuICByZXR1cm4gZSA9PiB7XG4gICAgY29uc3QgbG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgY29uc3QgdG90YWwgPSBlLmxlbmd0aENvbXB1dGFibGUgPyBlLnRvdGFsIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBsb2FkZWQgLSBieXRlc05vdGlmaWVkO1xuICAgIGNvbnN0IHJhdGUgPSBfc3BlZWRvbWV0ZXIocHJvZ3Jlc3NCeXRlcyk7XG4gICAgY29uc3QgaW5SYW5nZSA9IGxvYWRlZCA8PSB0b3RhbDtcblxuICAgIGJ5dGVzTm90aWZpZWQgPSBsb2FkZWQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbG9hZGVkLFxuICAgICAgdG90YWwsXG4gICAgICBwcm9ncmVzczogdG90YWwgPyAobG9hZGVkIC8gdG90YWwpIDogdW5kZWZpbmVkLFxuICAgICAgYnl0ZXM6IHByb2dyZXNzQnl0ZXMsXG4gICAgICByYXRlOiByYXRlID8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCAmJiBpblJhbmdlID8gKHRvdGFsIC0gbG9hZGVkKSAvIHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBldmVudDogZVxuICAgIH07XG5cbiAgICBkYXRhW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddID0gdHJ1ZTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9O1xufVxuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoZmFsc2UpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZSgnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsnLCBmYWxzZSk7IC8vIG1vYmlsZS9kZXNrdG9wIGFwcCBmcmFtZXdvcmtzXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpXG4gICAgICAgICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKTtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXQoY29uZmlnLnhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbiB8fCBjb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGNhbmNlbCA9PiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCBjYW5jZWwudHlwZSA/IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZywgcmVxdWVzdCkgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKGZ1bGxQYXRoKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBwbGF0Zm9ybS5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi9hZGFwdGVycy9hZGFwdGVycy5qcyc7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcblxuYXhpb3MuSHR0cFN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzQ29kZTtcblxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xuXG4vLyB0aGlzIG1vZHVsZSBzaG91bGQgb25seSBoYXZlIGEgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGF4aW9zXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xuICAgICAgbGV0IF9yZXNvbHZlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAgICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAgICovXG4gIHN0YXRpYyBzb3VyY2UoKSB7XG4gICAgbGV0IGNhbmNlbDtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgICBjYW5jZWwgPSBjO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbixcbiAgICAgIGNhbmNlbFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbGVkRXJyb3JgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdD19IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3Q9fSByZXF1ZXN0IFRoZSByZXF1ZXN0LlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxlZEVycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIEF4aW9zRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlID09IG51bGwgPyAnY2FuY2VsZWQnIDogbWVzc2FnZSwgQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQsIGNvbmZpZywgcmVxdWVzdCk7XG4gIHRoaXMubmFtZSA9ICdDYW5jZWxlZEVycm9yJztcbn1cblxudXRpbHMuaW5oZXJpdHMoQ2FuY2VsZWRFcnJvciwgQXhpb3NFcnJvciwge1xuICBfX0NBTkNFTF9fOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsZWRFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyLmpzJztcbmltcG9ydCBkaXNwYXRjaFJlcXVlc3QgZnJvbSAnLi9kaXNwYXRjaFJlcXVlc3QuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnLi4vaGVscGVycy92YWxpZGF0b3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL0F4aW9zSGVhZGVycy5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuY2xhc3MgQXhpb3Mge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZUNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGNvbmZpZ09yVXJsIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBjb25maWdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICAgKi9cbiAgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICAgIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICBjb25zdCB7dHJhbnNpdGlvbmFsLCBwYXJhbXNTZXJpYWxpemVyLCBoZWFkZXJzfSA9IGNvbmZpZztcblxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyICE9IG51bGwpIHtcbiAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcmFtc1NlcmlhbGl6ZXIpKSB7XG4gICAgICAgIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZTogcGFyYW1zU2VyaWFsaXplclxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxuICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGxldCBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgaGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJldHVybiBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuICB9XG59XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kLFxuICAgICAgdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaHR0cE1ldGhvZCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVxuICAgICAgfSkpO1xuICAgIH07XG4gIH1cblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCgpO1xuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ10gVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQXhpb3NFcnJvcihtZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSAnQXhpb3NFcnJvcic7XG4gIGNvZGUgJiYgKHRoaXMuY29kZSA9IGNvZGUpO1xuICBjb25maWcgJiYgKHRoaXMuY29uZmlnID0gY29uZmlnKTtcbiAgcmVxdWVzdCAmJiAodGhpcy5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gIHJlc3BvbnNlICYmICh0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UpO1xufVxuXG51dGlscy5pbmhlcml0cyhBeGlvc0Vycm9yLCBFcnJvciwge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB1dGlscy50b0pTT05PYmplY3QodGhpcy5jb25maWcpLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zRXJyb3IucHJvdG90eXBlO1xuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcblxuW1xuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxuICAnRVJSX0JBRF9PUFRJT04nLFxuICAnRUNPTk5BQk9SVEVEJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFUlJfTkVUV09SSycsXG4gICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJyxcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcbiAgJ0VSUl9CQURfUkVTUE9OU0UnLFxuICAnRVJSX0JBRF9SRVFVRVNUJyxcbiAgJ0VSUl9DQU5DRUxFRCcsXG4gICdFUlJfTk9UX1NVUFBPUlQnLFxuICAnRVJSX0lOVkFMSURfVVJMJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChjb2RlID0+IHtcbiAgZGVzY3JpcHRvcnNbY29kZV0gPSB7dmFsdWU6IGNvZGV9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEF4aW9zRXJyb3IsIGRlc2NyaXB0b3JzKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcbiAgY29uc3QgYXhpb3NFcnJvciA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcblxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBFcnJvci5wcm90b3R5cGU7XG4gIH0sIHByb3AgPT4ge1xuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcbiAgfSk7XG5cbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gIGF4aW9zRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuICBheGlvc0Vycm9yLm5hbWUgPSBlcnJvci5uYW1lO1xuXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuXG4gIHJldHVybiBheGlvc0Vycm9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuXG5jb25zdCAkaW50ZXJuYWxzID0gU3ltYm9sKCdpbnRlcm5hbHMnKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbnMoc3RyKSB7XG4gIGNvbnN0IHRva2VucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XG4gICAgdG9rZW5zW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgaXNWYWxpZEhlYWRlck5hbWUgPSAoc3RyKSA9PiAvXlstX2EtekEtWjAtOV5gfH4sISMkJSYnKisuXSskLy50ZXN0KHN0ci50cmltKCkpO1xuXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcblxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSBpZih1dGlscy5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgIT0gbnVsbCAmJiBzZXRIZWFkZXIodmFsdWVPclJld3JpdGUsIGhlYWRlciwgcmV3cml0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcblxuICAgICAgICBpZiAoIXBhcnNlcikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZShoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmIChfaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG5cbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGZba2V5XTtcblxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlSGVhZGVyKGhlYWRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBjbGVhcihtYXRjaGVyKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gaGVhZGVyICsgJzogJyArIHZhbHVlKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0F4aW9zSGVhZGVycyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbSh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIHRoaXMgPyB0aGluZyA6IG5ldyB0aGlzKHRoaW5nKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcbiAgICBjb25zdCBjb21wdXRlZCA9IG5ldyB0aGlzKGZpcnN0KTtcblxuICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBjb21wdXRlZC5zZXQodGFyZ2V0KSk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWQ7XG4gIH1cblxuICBzdGF0aWMgYWNjZXNzb3IoaGVhZGVyKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gdGhpc1skaW50ZXJuYWxzXSA9ICh0aGlzWyRpbnRlcm5hbHNdID0ge1xuICAgICAgYWNjZXNzb3JzOiB7fVxuICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3JzID0gaW50ZXJuYWxzLmFjY2Vzc29ycztcbiAgICBjb25zdCBwcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIGRlZmluZUFjY2Vzc29yKF9oZWFkZXIpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghYWNjZXNzb3JzW2xIZWFkZXJdKSB7XG4gICAgICAgIGJ1aWxkQWNjZXNzb3JzKHByb3RvdHlwZSwgX2hlYWRlcik7XG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXRpbHMuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyLmZvckVhY2goZGVmaW5lQWNjZXNzb3IpIDogZGVmaW5lQWNjZXNzb3IoaGVhZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbkF4aW9zSGVhZGVycy5hY2Nlc3NvcihbJ0NvbnRlbnQtVHlwZScsICdDb250ZW50LUxlbmd0aCcsICdBY2NlcHQnLCAnQWNjZXB0LUVuY29kaW5nJywgJ1VzZXItQWdlbnQnLCAnQXV0aG9yaXphdGlvbiddKTtcblxuLy8gcmVzZXJ2ZWQgbmFtZXMgaG90Zml4XG51dGlscy5yZWR1Y2VEZXNjcmlwdG9ycyhBeGlvc0hlYWRlcnMucHJvdG90eXBlLCAoe3ZhbHVlfSwga2V5KSA9PiB7XG4gIGxldCBtYXBwZWQgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTsgLy8gbWFwIGBzZXRgID0+IGBTZXRgXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoKSA9PiB2YWx1ZSxcbiAgICBzZXQoaGVhZGVyVmFsdWUpIHtcbiAgICAgIHRoaXNbbWFwcGVkXSA9IGhlYWRlclZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnV0aWxzLmZyZWV6ZU1ldGhvZHMoQXhpb3NIZWFkZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NIZWFkZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gXCIuLi9hZGFwdGVycy9hZGFwdGVycy5qc1wiO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgY29uZmlnLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xuICAgIGNvbmZpZy5oZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdCBhZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcihjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyKTtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgIHJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHRoaW5nLnRvSlNPTigpIDogdGhpbmc7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBjYXNlbGVzcykge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UuY2FsbCh7Y2FzZWxlc3N9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBjYXNlbGVzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhhLCBiLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9BeGlvc0Vycm9yLmpzJztcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICBbQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRV1bTWF0aC5mbG9vcihyZXNwb25zZS5zdGF0dXMgLyAxMDApIC0gNF0sXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7P09iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShmbnMsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIGNvbnN0IGNvbnRleHQgPSByZXNwb25zZSB8fCBjb25maWc7XG4gIGNvbnN0IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb250ZXh0LmhlYWRlcnMpO1xuICBsZXQgZGF0YSA9IGNvbnRleHQuZGF0YTtcblxuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29uZmlnLCBkYXRhLCBoZWFkZXJzLm5vcm1hbGl6ZSgpLCByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1cyA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIGhlYWRlcnMubm9ybWFsaXplKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4vdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4uL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgdG9VUkxFbmNvZGVkRm9ybSBmcm9tICcuLi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDogdHJhbnNpdGlvbmFsRGVmYXVsdHMsXG5cbiAgYWRhcHRlcjogcGxhdGZvcm0uaXNOb2RlID8gJ2h0dHAnIDogJ3hocicsXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIGlmICghaGFzSlNPTkNvbnRlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IGlzRmlsZUxpc3Q7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xuICAgICAgICBjb25zdCBfRm9ybURhdGEgPSB0aGlzLmVudiAmJiB0aGlzLmVudi5Gb3JtRGF0YTtcblxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICBpc0ZpbGVMaXN0ID8geydmaWxlc1tdJzogZGF0YX0gOiBkYXRhLFxuICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlICkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgY29uc3QgSlNPTlJlcXVlc3RlZCA9IHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoZGF0YSAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiAoKGZvcmNlZEpTT05QYXJzaW5nICYmICF0aGlzLnJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIChtZXRob2QpID0+IHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZVxufTtcbiIsImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxLjUuMFwiOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBJdCBlbmNvZGVzIGEgc3RyaW5nIGJ5IHJlcGxhY2luZyBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgaW4gdGhlIHVucmVzZXJ2ZWQgc2V0IHdpdGhcbiAqIHRoZWlyIHBlcmNlbnQtZW5jb2RlZCBlcXVpdmFsZW50c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgY29uc3QgY2hhck1hcCA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH07XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKX5dfCUyMHwlMDAvZywgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGFyYW1zIG9iamVjdCBhbmQgY29udmVydHMgaXQgdG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIGNvbnZlcnRlZCB0byBhIEZvcm1EYXRhIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIEF4aW9zIGNvbnN0cnVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5fcGFpcnMgPSBbXTtcblxuICBwYXJhbXMgJiYgdG9Gb3JtRGF0YShwYXJhbXMsIHRoaXMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc1VSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcbn07XG5cbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kZXIpIHtcbiAgY29uc3QgX2VuY29kZSA9IGVuY29kZXIgPyBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVyLmNhbGwodGhpcywgdmFsdWUsIGVuY29kZSk7XG4gIH0gOiBlbmNvZGU7XG5cbiAgcmV0dXJuIHRoaXMuX3BhaXJzLm1hcChmdW5jdGlvbiBlYWNoKHBhaXIpIHtcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gIH0sICcnKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImNvbnN0IEh0dHBTdGF0dXNDb2RlID0ge1xuICBDb250aW51ZTogMTAwLFxuICBTd2l0Y2hpbmdQcm90b2NvbHM6IDEwMSxcbiAgUHJvY2Vzc2luZzogMTAyLFxuICBFYXJseUhpbnRzOiAxMDMsXG4gIE9rOiAyMDAsXG4gIENyZWF0ZWQ6IDIwMSxcbiAgQWNjZXB0ZWQ6IDIwMixcbiAgTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uOiAyMDMsXG4gIE5vQ29udGVudDogMjA0LFxuICBSZXNldENvbnRlbnQ6IDIwNSxcbiAgUGFydGlhbENvbnRlbnQ6IDIwNixcbiAgTXVsdGlTdGF0dXM6IDIwNyxcbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXG4gIEltVXNlZDogMjI2LFxuICBNdWx0aXBsZUNob2ljZXM6IDMwMCxcbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxuICBGb3VuZDogMzAyLFxuICBTZWVPdGhlcjogMzAzLFxuICBOb3RNb2RpZmllZDogMzA0LFxuICBVc2VQcm94eTogMzA1LFxuICBVbnVzZWQ6IDMwNixcbiAgVGVtcG9yYXJ5UmVkaXJlY3Q6IDMwNyxcbiAgUGVybWFuZW50UmVkaXJlY3Q6IDMwOCxcbiAgQmFkUmVxdWVzdDogNDAwLFxuICBVbmF1dGhvcml6ZWQ6IDQwMSxcbiAgUGF5bWVudFJlcXVpcmVkOiA0MDIsXG4gIEZvcmJpZGRlbjogNDAzLFxuICBOb3RGb3VuZDogNDA0LFxuICBNZXRob2ROb3RBbGxvd2VkOiA0MDUsXG4gIE5vdEFjY2VwdGFibGU6IDQwNixcbiAgUHJveHlBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA0MDcsXG4gIFJlcXVlc3RUaW1lb3V0OiA0MDgsXG4gIENvbmZsaWN0OiA0MDksXG4gIEdvbmU6IDQxMCxcbiAgTGVuZ3RoUmVxdWlyZWQ6IDQxMSxcbiAgUHJlY29uZGl0aW9uRmFpbGVkOiA0MTIsXG4gIFBheWxvYWRUb29MYXJnZTogNDEzLFxuICBVcmlUb29Mb25nOiA0MTQsXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgSW1BVGVhcG90OiA0MTgsXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxuICBVbnByb2Nlc3NhYmxlRW50aXR5OiA0MjIsXG4gIExvY2tlZDogNDIzLFxuICBGYWlsZWREZXBlbmRlbmN5OiA0MjQsXG4gIFRvb0Vhcmx5OiA0MjUsXG4gIFVwZ3JhZGVSZXF1aXJlZDogNDI2LFxuICBQcmVjb25kaXRpb25SZXF1aXJlZDogNDI4LFxuICBUb29NYW55UmVxdWVzdHM6IDQyOSxcbiAgUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlOiA0MzEsXG4gIFVuYXZhaWxhYmxlRm9yTGVnYWxSZWFzb25zOiA0NTEsXG4gIEludGVybmFsU2VydmVyRXJyb3I6IDUwMCxcbiAgTm90SW1wbGVtZW50ZWQ6IDUwMSxcbiAgQmFkR2F0ZXdheTogNTAyLFxuICBTZXJ2aWNlVW5hdmFpbGFibGU6IDUwMyxcbiAgR2F0ZXdheVRpbWVvdXQ6IDUwNCxcbiAgSHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ6IDUwNSxcbiAgVmFyaWFudEFsc29OZWdvdGlhdGVzOiA1MDYsXG4gIEluc3VmZmljaWVudFN0b3JhZ2U6IDUwNyxcbiAgTG9vcERldGVjdGVkOiA1MDgsXG4gIE5vdEV4dGVuZGVkOiA1MTAsXG4gIE5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA1MTEsXG59O1xuXG5PYmplY3QuZW50cmllcyhIdHRwU3RhdHVzQ29kZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gIEh0dHBTdGF0dXNDb2RlW3ZhbHVlXSA9IGtleTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIdHRwU3RhdHVzQ29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcblxuLyoqXG4gKiBJdCByZXBsYWNlcyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjaGFyYWN0ZXJzIGA6YCwgYCRgLCBgLGAsIGArYCwgYFtgLCBhbmQgYF1gIHdpdGggdGhlaXJcbiAqIFVSSSBlbmNvZGVkIGNvdW50ZXJwYXJ0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgVGhlIHZhbHVlIHRvIGJlIGVuY29kZWQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0gez9vYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIFxuICBjb25zdCBfZW5jb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgY29uc3Qgc2VyaWFsaXplRm4gPSBvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplO1xuXG4gIGxldCBzZXJpYWxpemVkUGFyYW1zO1xuXG4gIGlmIChzZXJpYWxpemVGbikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBzZXJpYWxpemVGbihwYXJhbXMsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSB1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpID9cbiAgICAgIHBhcmFtcy50b1N0cmluZygpIDpcbiAgICAgIG5ldyBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpLnRvU3RyaW5nKF9lbmNvZGUpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xuXG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5pc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel1cbiAgLy8gZm9vLngueS56XG4gIC8vIGZvby14LXktelxuICAvLyBmb28geCB5IHpcbiAgcmV0dXJuIHV0aWxzLm1hdGNoQWxsKC9cXHcrfFxcWyhcXHcqKV0vZywgbmFtZSkubWFwKG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2hbMF0gPT09ICdbXScgPyAnJyA6IG1hdGNoWzFdIHx8IG1hdGNoWzBdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFuZCB2YWx1ZXMgYXMgdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XG4gIGxldCBpO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGtleTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGNvbnZlcnQgdG8gSlNPTi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55PiB8IG51bGx9IFRoZSBjb252ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xuICBmdW5jdGlvbiBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcbiAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA+PSBwYXRoLmxlbmd0aDtcbiAgICBuYW1lID0gIW5hbWUgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0Lmxlbmd0aCA6IG5hbWU7XG5cbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtuYW1lXSB8fCAhdXRpbHMuaXNPYmplY3QodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGFUb0pTT047XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMuaXNPYmplY3QocGF5bG9hZCkgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4vLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIGNvbnN0IG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgbGV0IGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCk7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5leHBvcnQgZGVmYXVsdCBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmF3SGVhZGVycyA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmIHJhd0hlYWRlcnMuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gbGluZS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKTtcblxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgaWYgKHBhcnNlZFtrZXldKSB7XG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxuaW1wb3J0IFBsYXRmb3JtRm9ybURhdGEgZnJvbSAnLi4vcGxhdGZvcm0vbm9kZS9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB0aGluZyBpcyBhIGFycmF5IG9yIGpzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhpbmcgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGJlIHZpc2l0ZWQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmlzaXRhYmxlKHRoaW5nKSB7XG4gIHJldHVybiB1dGlscy5pc1BsYWluT2JqZWN0KHRoaW5nKSB8fCB1dGlscy5pc0FycmF5KHRoaW5nKTtcbn1cblxuLyoqXG4gKiBJdCByZW1vdmVzIHRoZSBicmFja2V0cyBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcGFyYW1ldGVyLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBrZXkgd2l0aG91dCB0aGUgYnJhY2tldHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJyYWNrZXRzKGtleSkge1xuICByZXR1cm4gdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSA/IGtleS5zbGljZSgwLCAtMikgOiBrZXk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXRoLCBhIGtleSwgYW5kIGEgYm9vbGVhbiwgYW5kIHJldHVybnMgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBjdXJyZW50IG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRvdHMgLSBJZiB0cnVlLCB0aGUga2V5IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCBkb3RzIGluc3RlYWQgb2YgYnJhY2tldHMuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICovXG5mdW5jdGlvbiByZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSB7XG4gIGlmICghcGF0aCkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIHBhdGguY29uY2F0KGtleSkubWFwKGZ1bmN0aW9uIGVhY2godG9rZW4sIGkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB0b2tlbiA9IHJlbW92ZUJyYWNrZXRzKHRva2VuKTtcbiAgICByZXR1cm4gIWRvdHMgJiYgaSA/ICdbJyArIHRva2VuICsgJ10nIDogdG9rZW47XG4gIH0pLmpvaW4oZG90cyA/ICcuJyA6ICcnKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgYXJyYXkgaXMgYW4gYXJyYXkgYW5kIG5vbmUgb2YgaXRzIGVsZW1lbnRzIGFyZSB2aXNpdGFibGUsIHRoZW4gaXQncyBhIGZsYXQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGbGF0QXJyYXkoYXJyKSB7XG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cblxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XG4gIHJldHVybiAvXmlzW0EtWl0vLnRlc3QocHJvcCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0gez9PYmplY3R9IFtmb3JtRGF0YV1cbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpdG9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tZXRhVG9rZW5zID0gdHJ1ZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gW29wdGlvbnMuaW5kZXhlcyA9IGZhbHNlXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiovXG5cbi8qKlxuICogSXQgY29udmVydHMgYW4gb2JqZWN0IGludG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgLSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGFwcGVuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChvcHRpb25zLCB7XG4gICAgbWV0YVRva2VuczogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBmYWxzZVxuICB9LCBmYWxzZSwgZnVuY3Rpb24gZGVmaW5lZChvcHRpb24sIHNvdXJjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICAgIHJldHVybiAhdXRpbHMuaXNVbmRlZmluZWQoc291cmNlW29wdGlvbl0pO1xuICB9KTtcblxuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9ucy5tZXRhVG9rZW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgY29uc3QgdmlzaXRvciA9IG9wdGlvbnMudmlzaXRvciB8fCBkZWZhdWx0VmlzaXRvcjtcbiAgY29uc3QgZG90cyA9IG9wdGlvbnMuZG90cztcbiAgY29uc3QgaW5kZXhlcyA9IG9wdGlvbnMuaW5kZXhlcztcbiAgY29uc3QgX0Jsb2IgPSBvcHRpb25zLkJsb2IgfHwgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2I7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcblxuICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24odmlzaXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VCbG9iICYmIHV0aWxzLmlzQmxvYih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdXNlQmxvYiAmJiB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBCbG9iKFt2YWx1ZV0pIDogQnVmZmVyLmZyb20odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZpc2l0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBrZXlcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm4gdHJ1ZSB0byB2aXNpdCB0aGUgZWFjaCBwcm9wIG9mIHRoZSB2YWx1ZSByZWN1cnNpdmVseVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdFZpc2l0b3IodmFsdWUsIGtleSwgcGF0aCkge1xuICAgIGxldCBhcnIgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMuZW5kc1dpdGgoa2V5LCAne30nKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gbWV0YVRva2VucyA/IGtleSA6IGtleS5zbGljZSgwLCAtMik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICh1dGlscy5pc0FycmF5KHZhbHVlKSAmJiBpc0ZsYXRBcnJheSh2YWx1ZSkpIHx8XG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKVxuICAgICAgICApKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goZWwsIGluZGV4KSB7XG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZSA/IHJlbmRlcktleShba2V5XSwgaW5kZXgsIGRvdHMpIDogKGluZGV4ZXMgPT09IG51bGwgPyBrZXkgOiBrZXkgKyAnW10nKSxcbiAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1Zpc2l0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzdGFjayA9IFtdO1xuXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XG4gICAgZGVmYXVsdFZpc2l0b3IsXG4gICAgY29udmVydFZhbHVlLFxuICAgIGlzVmlzaXRhYmxlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoKSB7XG4gICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGF0aC5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsdWUpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgdmlzaXRvci5jYWxsKFxuICAgICAgICBmb3JtRGF0YSwgZWwsIHV0aWxzLmlzU3RyaW5nKGtleSkgPyBrZXkudHJpbSgpIDoga2V5LCBwYXRoLCBleHBvc2VkSGVscGVyc1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGJ1aWxkKG9iaik7XG5cbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zvcm1EYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaXRvcjogZnVuY3Rpb24odmFsdWUsIGtleSwgcGF0aCwgaGVscGVycykge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzTm9kZSAmJiB1dGlscy5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygnYmFzZTY0JykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwZXJzLmRlZmF1bHRWaXNpdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi4vZW52L2RhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goKHR5cGUsIGkpID0+IHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbmNvbnN0IGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0JywgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGNvbnN0IG9wdCA9IGtleXNbaV07XG4gICAgY29uc3QgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW29wdF07XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbiAnICsgb3B0ICsgJyBtdXN0IGJlICcgKyByZXN1bHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhbGxvd1Vua25vd24gIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyA/IEJsb2IgOiBudWxsXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJpbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4vY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMnXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9jbGFzc2VzL0Zvcm1EYXRhLmpzJ1xuaW1wb3J0IEJsb2IgZnJvbSAnLi9jbGFzc2VzL0Jsb2IuanMnXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBpc1N0YW5kYXJkQnJvd3NlckVudiA9ICgoKSA9PiB7XG4gIGxldCBwcm9kdWN0O1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICAgIChwcm9kdWN0ID0gbmF2aWdhdG9yLnByb2R1Y3QpID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgcHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICBwcm9kdWN0ID09PSAnTlMnKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbn0pKCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbiBjb25zdCBpc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIHByb3RvY29sczogWydodHRwJywgJ2h0dHBzJywgJ2ZpbGUnLCAnYmxvYicsICd1cmwnLCAnZGF0YSddXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbmNvbnN0IHt0b1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3Qge2dldFByb3RvdHlwZU9mfSA9IE9iamVjdDtcblxuY29uc3Qga2luZE9mID0gKGNhY2hlID0+IHRoaW5nID0+IHtcbiAgICBjb25zdCBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaW5nKTtcbiAgICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuY29uc3Qga2luZE9mVGVzdCA9ICh0eXBlKSA9PiB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAodGhpbmcpID0+IGtpbmRPZih0aGluZykgPT09IHR5cGVcbn1cblxuY29uc3QgdHlwZU9mVGVzdCA9IHR5cGUgPT4gdGhpbmcgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3Qge2lzQXJyYXl9ID0gQXJyYXk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVbmRlZmluZWQgPSB0eXBlT2ZUZXN0KCd1bmRlZmluZWQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICBsZXQgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmIChpc0FycmF5QnVmZmVyKHZhbC5idWZmZXIpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gdGhpbmcgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB7XG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbCkgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gdmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZSA9IGtpbmRPZlRlc3QoJ0ZpbGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGVMaXN0ID0ga2luZE9mVGVzdCgnRmlsZUxpc3QnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmVhbSA9ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRm9ybURhdGEgPSAodGhpbmcpID0+IHtcbiAgbGV0IGtpbmQ7XG4gIHJldHVybiB0aGluZyAmJiAoXG4gICAgKHR5cGVvZiBGb3JtRGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGluZyBpbnN0YW5jZW9mIEZvcm1EYXRhKSB8fCAoXG4gICAgICBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgKFxuICAgICAgICAoa2luZCA9IGtpbmRPZih0aGluZykpID09PSAnZm9ybWRhdGEnIHx8XG4gICAgICAgIC8vIGRldGVjdCBmb3JtLWRhdGEgaW5zdGFuY2VcbiAgICAgICAgKGtpbmQgPT09ICdvYmplY3QnICYmIGlzRnVuY3Rpb24odGhpbmcudG9TdHJpbmcpICYmIHRoaW5nLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZvcm1EYXRhXScpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VSTFNlYXJjaFBhcmFtcyA9IGtpbmRPZlRlc3QoJ1VSTFNlYXJjaFBhcmFtcycpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4gc3RyLnRyaW0gP1xuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHthbGxPd25LZXlzID0gZmFsc2V9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG59KSgpO1xuXG5jb25zdCBpc0NvbnRleHREZWZpbmVkID0gKGNvbnRleHQpID0+ICFpc1VuZGVmaW5lZChjb250ZXh0KSAmJiBjb250ZXh0ICE9PSBfZ2xvYmFsO1xuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIGNvbnN0IHtjYXNlbGVzc30gPSBpc0NvbnRleHREZWZpbmVkKHRoaXMpICYmIHRoaXMgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRbdGFyZ2V0S2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcmd1bWVudHNbaV0gJiYgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHthbGxPd25LZXlzfT0ge30pID0+IHtcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcbiAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge2FsbE93bktleXN9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbZGVzY3JpcHRvcnNdXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpO1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbj0gMF1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PiB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA+IHN0ci5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW1N5bWJvbC5pdGVyYXRvcl07XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IHBhaXIgPSByZXN1bHQudmFsdWU7XG4gICAgZm4uY2FsbChvYmosIHBhaXJbMF0sIHBhaXJbMV0pO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgc3RyaW5nLCBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxib29sZWFuPn1cbiAqL1xuY29uc3QgbWF0Y2hBbGwgPSAocmVnRXhwLCBzdHIpID0+IHtcbiAgbGV0IG1hdGNoZXM7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgYXJyLnB1c2gobWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG4vKiBDaGVja2luZyBpZiB0aGUga2luZE9mVGVzdCBmdW5jdGlvbiByZXR1cm5zIHRydWUgd2hlbiBwYXNzZWQgYW4gSFRNTEZvcm1FbGVtZW50LiAqL1xuY29uc3QgaXNIVE1MRm9ybSA9IGtpbmRPZlRlc3QoJ0hUTUxGb3JtRWxlbWVudCcpO1xuXG5jb25zdCB0b0NhbWVsQ2FzZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9cXHNdKFthLXpcXGRdKShcXHcqKS9nLFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xuICAgICAgcmV0dXJuIHAxLnRvVXBwZXJDYXNlKCkgKyBwMjtcbiAgICB9XG4gICk7XG59O1xuXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9ICgoe2hhc093blByb3BlcnR5fSkgPT4gKG9iaiwgcHJvcCkgPT4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKShPYmplY3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5cbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gIGNvbnN0IHJlZHVjZWREZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZvckVhY2goZGVzY3JpcHRvcnMsIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSByZXQgfHwgZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuY29uc3QgQUxQSEEgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG5cbmNvbnN0IERJR0lUID0gJzAxMjM0NTY3ODknO1xuXG5jb25zdCBBTFBIQUJFVCA9IHtcbiAgRElHSVQsXG4gIEFMUEhBLFxuICBBTFBIQV9ESUdJVDogQUxQSEEgKyBBTFBIQS50b1VwcGVyQ2FzZSgpICsgRElHSVRcbn1cblxuY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoc2l6ZSA9IDE2LCBhbHBoYWJldCA9IEFMUEhBQkVULkFMUEhBX0RJR0lUKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgY29uc3Qge2xlbmd0aH0gPSBhbHBoYWJldDtcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIHN0ciArPSBhbHBoYWJldFtNYXRoLnJhbmRvbSgpICogbGVuZ3RofDBdXG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIHRoaW5nW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiYgdGhpbmdbU3ltYm9sLml0ZXJhdG9yXSk7XG59XG5cbmNvbnN0IHRvSlNPTk9iamVjdCA9IChvYmopID0+IHtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgQXJyYXkoMTApO1xuXG4gIGNvbnN0IHZpc2l0ID0gKHNvdXJjZSwgaSkgPT4ge1xuXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIGlmIChzdGFjay5pbmRleE9mKHNvdXJjZSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xuICAgICAgICBzdGFja1tpXSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiB7fTtcblxuICAgICAgICBmb3JFYWNoKHNvdXJjZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSwgaSArIDEpO1xuICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmICh0YXJnZXRba2V5XSA9IHJlZHVjZWRWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YWNrW2ldID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiB2aXNpdChvYmosIDApO1xufVxuXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XG5cbmNvbnN0IGlzVGhlbmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICYmIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiYgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdAc2FnZW1vZGVuaW5qYS9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudCc7XHJcbmltcG9ydCAnQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudCc7XHJcbmltcG9ydCAnQC9jb21wb25lbnRzL2FjY291bnQtY2FyZCc7XHJcbmltcG9ydCAnQC9jb21wb25lbnRzL2FjdGlvbi1idXR0b24nO1xyXG5pbXBvcnQgJ0AvY29tcG9uZW50cy9jYXJkLWJhbGFuY2UnO1xyXG5pbXBvcnQgJ0AvY29tcG9uZW50cy90cmFuc2FjdGlvbi1wYW5lbCc7XHJcbmltcG9ydCB1c2VOYXZpZ2F0aW9uIGZyb20gJ0AvY2xhc3Nlcy9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25NYW5hZ2VyIH0gZnJvbSAnQC9jbGFzc2VzL3RyYW5zYWN0aW9uLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudSwgQ29udGV4dE1lbnVPcHRpb24sIGdsb2JhbENvbnRleHQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29udGV4dC1tZW51JztcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25QYW5lbCB9IGZyb20gJ0AvY29tcG9uZW50cy90cmFuc2FjdGlvbi1wYW5lbCc7XHJcbmltcG9ydCB7IEZsdWVudEFwcEJhckJ1dHRvbiB9IGZyb20gJ0BzYWdlbW9kZW5pbmphL2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0Avc2VydmljZXMvYWNjb3VudC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWNjb3VudENhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvYWNjb3VudC1jYXJkJztcclxuaW1wb3J0IHsgUmVzcG9uc2VQYXlsb2FkIH0gZnJvbSAnQC9jbGFzc2VzL3Jlc3BvbnNlLXBheWxvYWQnO1xyXG5pbXBvcnQgeyB0b0N1cnJlbmN5IH0gZnJvbSAnQC9jbGFzc2VzL2N1cnJlbmN5JztcclxuXHJcbmNsYXNzIERhc2hib2FyZFZpZXcge1xyXG4gICAgcHJpdmF0ZSBib2R5OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVmcmVzaENvbW1hbmQ6IEZsdWVudEFwcEJhckJ1dHRvbjtcclxuICAgIHByaXZhdGUgdG9nZ2xlQ29tbWFuZDogRmx1ZW50QXBwQmFyQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvblBhbmVsOiBUcmFuc2FjdGlvblBhbmVsO1xyXG5cclxuICAgIHByaXZhdGUgY29udGV4dE1lbnU6IENvbnRleHRNZW51O1xyXG5cclxuICAgIHByaXZhdGUgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uTWFuYWdlcjtcclxuICAgIHByaXZhdGUgaXNTaG93Q2xvc2VkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjbG9zZWRBY2NvdW50czogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdXNlTmF2aWdhdGlvbigpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xheW91dF9ib2R5Jyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ29tbWFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoX2NvbW1hbmQnKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlX2Nsb3NlZF9jb21tYW5kJyk7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uX3BhbmVsJyk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyYW5zYWN0aW9uX2NhcmRcIik7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFjdGlvbi1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYW5zYWN0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uLmVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdG9yX2RpYWxvZ1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q29udGV4dE1lbnUoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQWNjb3VudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRDb250ZXh0TWVudSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51ID0gZ2xvYmFsQ29udGV4dC5hZGRNZW51KCdhY2NvdW50c19jYXJkJywgdGhpcy5ib2R5KTtcclxuXHJcbiAgICAgICAgLy8gQ29udGV4dCBtZW51IG9wdGlvbnMuLi5cclxuICAgICAgICBjb25zdCBjbG9zZU9wdGlvbiA9IG5ldyBDb250ZXh0TWVudU9wdGlvbignQ2xvc2UnKTtcclxuICAgICAgICBjb25zdCBkZWxldGVPcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24oJ0RlbGV0ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsb3NlT3B0aW9uLnZpc2libGUoZCA9PiBkLlN0YXR1cyA9PT0gJ0FjdGl2ZScpO1xyXG4gICAgICAgIGRlbGV0ZU9wdGlvbi52aXNpYmxlKGQgPT4gZC5TdGF0dXMgPT09ICdBY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgICAgICBjbG9zZU9wdGlvbi5vbkNsaWNrKGFzeW5jIGFjY3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oYENsb3NlIGFjY291bnQgXFxcIiR7YWNjdC5UaXRsZX1cXFwiP2ApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXJlc3BvbnNlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBzZXJ2aWNlLmNsb3NlKGFjY3QuSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChwYXlsb2FkLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyFcclxuICAgICAgICAgICAgLy8gcmVmcmVzaENhdGVnb3JpZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkZWxldGVPcHRpb24ub25DbGljayhhc3luYyBhY2N0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKGBEZWxldGUgYWNjb3VudCBcXFwiJHthY2N0LlRpdGxlfVxcXCI/YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighcmVzcG9uc2UpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgQWNjb3VudFNlcnZpY2UoKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHNlcnZpY2UucmVtb3ZlKGFjY3QuSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChwYXlsb2FkLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBGaXggdGhpcyFcclxuICAgICAgICAgICAgLy8gcmVmcmVzaENhdGVnb3JpZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51LmFkZE9wdGlvbnMoY2xvc2VPcHRpb24sIGRlbGV0ZU9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDb21tYW5kPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVmcmVzaEFjY291bnRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlZnJlc2hBY2NvdW50cygpIHtcclxuICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gJzxwIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPkZldGNoaW5nIEFjY291bnRzLi4uPC9wPic7XHJcbiAgICBcclxuICAgICAgICBheGlvcy5nZXQoXCJhY2NvdW50L2NydWQvcmVhZF9jYXRlZ29yaXplZC5waHBcIilcclxuICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYoYWNjb3VudHMuc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gYWNjb3VudHMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGNvbnRlbnQucmVkdWNlKChhcnIsIGFjY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5SWQgPSBhY2N0LkNhdGVnb3J5SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighYXJyLnNvbWUoY2F0ID0+IGNhdC5JZCA9PSBhY2N0LkNhdGVnb3J5SWQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBhY2N0LkNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yOiBhY2N0LkNhdGVnb3J5Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaXplZCA9IGNvbnRlbnQucmVkdWNlKChtYXAsIGFjY3QpID0+IG1hcC5zZXQoYWNjdC5DYXRlZ29yeUlkLCBbLi4ubWFwLmdldChhY2N0LkNhdGVnb3J5SWQpID8/IFtdLCBhY2N0XSksIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQmFsYW5jZXMoY2F0ZWdvcmllcywgY2F0ZWdvcml6ZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiY2VudGVyZWRcIj5Pb3BzISAke2FjY291bnRzLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVmcmVzaEJhbGFuY2VzKGNhdGVnb3JpZXMsIGNhdGVnb3JpemVkKSB7XHJcbiAgICAgICAgY2F0ZWdvcml6ZWQuZm9yRWFjaCgoYWNjb3VudHMsIF9jYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5JZCA9PSBfY2F0ZWdvcnkpID8/IHt9O1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBjYXRlZ29yeT8uQ29sb3IgPz8gXCI5RTlFOUVcIjtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gY2F0ZWdvcnk/LlRpdGxlID8/IFwiVW5jYXRlZ29yaXplZFwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmbHVlbnQtc3ltYm9sLWljb24nKVxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgIGFjY291bnRzR3JpZC5jbGFzc0xpc3QuYWRkKCdhY2NvdW50cy1ncmlkJyk7XHJcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ3N5bWJvbCcsICdUYWcnKTtcclxuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnZm9yZWdyb3VuZCcsIGAjJHtjb2xvcn1gKTtcclxuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgJzEzJyk7XHJcbiAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoYWNjb3VudHNHcmlkKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhZyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGFiZWwpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGFjY291bnRzLmZvckVhY2goYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5uZXdDYXJkKGFjY291bnQsIHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGFjY291bnRzR3JpZC5hcHBlbmQoY2FyZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZXdDYXJkKGFjY291bnQsIGNhdGVnb3J5KSB7XHJcbiAgICAgICAgbGV0IGFjY291bnROdW1iZXIgPSBhY2NvdW50LkFjY291bnROdW1iZXI/LnNsaWNlKC00KSA/PyBcIuKAouKAouKAouKAolwiO1xyXG4gICAgICAgIGxldCBiYW5rSWNvbiA9IGFjY291bnQuQmFua0ljb247XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWNjb3VudC1jYXJkJykgYXMgQWNjb3VudENhcmQ7XHJcbiAgICAgICAgY29uc3QgcnVubmluZ0JhbGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkLWJhbGFuY2UnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ZWRCYWxhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZC1iYWxhbmNlJyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudEJhbmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcnVubmluZ0JhbGFuY2UuaW5uZXJUZXh0ID0gJy4uLic7XHJcbiAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSAnLi4uJztcclxuICAgICAgICBhY2NvdW50QmFua0ljb24uY2xhc3NMaXN0LmFkZCgnYWNjb3VudC1iYW5rLWljb24nKTtcclxuICAgICAgICBhY2NvdW50QmFua0ljb24uc2xvdCA9ICdpY29uJztcclxuICAgIFxyXG4gICAgICAgIGNhcmQuYXBwZW5kKHJ1bm5pbmdCYWxhbmNlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZChwcm9qZWN0ZWRCYWxhbmNlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZChhY2NvdW50QmFua0ljb24pO1xyXG4gICAgXHJcbiAgICAgICAgY2FyZC50aXRsZSA9IGFjY291bnQuVGl0bGU7XHJcbiAgICAgICAgY2FyZC5udW1iZXIgPSBhY2NvdW50TnVtYmVyO1xyXG4gICAgICAgIGNhcmQuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICBcclxuICAgICAgICBydW5uaW5nQmFsYW5jZS50aXRsZSA9ICdBY3R1YWwnO1xyXG4gICAgICAgIHByb2plY3RlZEJhbGFuY2UudGl0bGUgPSAnUHJvamVjdGlvbic7XHJcbiAgICBcclxuICAgICAgICBpZihiYW5rSWNvbiAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNyYyA9YGFzc2V0cy9pbWFnZXMvYmFua19pY29ucy8ke2JhbmtJY29ufS5zdmdgO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYmFua0ljb24gPT0gXCJtYXN0ZXJfY2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvdHRvbToxNnB4O2hlaWdodDozNXB4O1wiKTtcclxuICAgICAgICAgICAgaWYoYmFua0ljb24gPT0gXCJ1YnBcIiB8fCBiYW5rSWNvbiA9PSBcImdjYXNoXCIpXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjIwcHg7aGVpZ2h0OjMwcHg7cmlnaHQ6MjVweDtcIik7XHJcbiAgICAgICAgICAgIGlmKGJhbmtJY29uID09IFwiY2ltYlwiKVxyXG4gICAgICAgICAgICAgICAgYWNjb3VudEJhbmtJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvdHRvbToyMHB4O2hlaWdodDoyOHB4O3JpZ2h0OjI1cHg7XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gQ29udGV4dCBtZW51Li4uXHJcbiAgICAgICAgKGNhcmQgYXMgYW55KS5hZGRDb250ZXh0KHRoaXMuY29udGV4dE1lbnUsIGFjY291bnQpO1xyXG4gICAgICBcclxuICAgICAgICAvLyBWaXNpYmlsaXR5Li4uXHJcbiAgICAgICAgaWYoYWNjb3VudC5TdGF0dXMgIT09ICdBY3RpdmUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkQWNjb3VudHMucHVzaChjYXJkKTtcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChgL2FjY291bnQvYmFsYW5jZS5waHA/YWNjb3VudElkPSR7YWNjb3VudC5JZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YSBhcyBSZXNwb25zZVBheWxvYWQ8YW55PjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwYXlsb2FkLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VzID0gcGF5bG9hZC5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koYmFsYW5jZXMuQmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGJhbGFuY2VzLlByb2plY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5nQmFsYW5jZS5pbm5lclRleHQgPSAnISc7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSAnISc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHBheWxvYWQuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25QYW5lbC5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb24ubG9hZEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVG9nZ2xlQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQuaWNvbiA9IHRoaXMuaXNTaG93Q2xvc2VkID8gJ1ZpZXcnIDogJ0hpZGUnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZC5sYWJlbCA9IHRoaXMuaXNTaG93Q2xvc2VkID8gJ1Nob3cgQ2xvc2VkIEFjY291bnRzJyA6ICdIaWRlIENsb3NlZCBBY2NvdW50cyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2hvd0Nsb3NlZClcclxuICAgICAgICAgICAgICBjYXJkLmhpZGUoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGNhcmQuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmlzU2hvd0Nsb3NlZCA9ICF0aGlzLmlzU2hvd0Nsb3NlZDtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGFzaGJvYXJkVmlldygpO1xyXG4gICAgdmlldy5yZWZyZXNoKCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==