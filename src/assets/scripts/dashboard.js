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
    } /* Attributes */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSwrQkFBK0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSx5Q0FBeUMsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxrQ0FBa0MsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSx1Q0FBdUMsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2Q0FBNkMsRUFBRSxnQ0FBZ0MsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwwQ0FBMEMsRUFBRSx5Q0FBeUMsRUFBRSx1Q0FBdUMsRUFBRSx5QkFBeUIsRUFBRSxxQ0FBcUMsRUFBRSw0Q0FBNEMsRUFBRSwwQ0FBMEMsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSx5QkFBeUIsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSxxQ0FBcUMsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSw2Q0FBNkMsRUFBRSx1Q0FBdUMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx3QkFBd0IsRUFBRSxtQ0FBbUMsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSx3Q0FBd0MsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSwyQ0FBMkMsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSx3QkFBd0IsRUFBRSxxQ0FBcUMsRUFBRSwwQ0FBMEMsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSx5Q0FBeUMsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSx5Q0FBeUMsRUFBRSxxREFBcUQsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSwyQ0FBMkMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSwrQkFBK0IsRUFBRSwwQ0FBMEMsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxzQ0FBc0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSwyQ0FBMkMsRUFBRSx3Q0FBd0MsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSw2Q0FBNkMsRUFBRSx1Q0FBdUMsRUFBRSw2Q0FBNkMsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSwyQ0FBMkMsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSxvQ0FBb0MsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSx1Q0FBdUMsRUFBRSx3QkFBd0IsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSx5QkFBeUIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxzQ0FBc0MsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSxtQ0FBbUMsRUFBRSxzQ0FBc0MsRUFBRSw4Q0FBOEMsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSw2QkFBNkIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxxREFBcUQsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSxnQ0FBZ0MsRUFBRSw0Q0FBNEMsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSw0QkFBNEIsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSx3Q0FBd0MsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSw0Q0FBNEMsRUFBRSwrQkFBK0IsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSw2Q0FBNkMsRUFBRSxrQ0FBa0MsRUFBRSxzQ0FBc0MsRUFBRSw2QkFBNkIsRUFBRSxtQ0FBbUMsRUFBRSwwQ0FBMEMsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSw2Q0FBNkMsRUFBRSwwQkFBMEIsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSxvQ0FBb0MsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSw0Q0FBNEMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSwyQkFBMkIsRUFBRSxtQ0FBbUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSwwQ0FBMEMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSxnQ0FBZ0MsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsRUFBRSxrREFBa0QsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSx3Q0FBd0MsRUFBRSxnQ0FBZ0MsRUFBRSx5Q0FBeUMsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSx1Q0FBdUMsRUFBRSx3Q0FBd0MsRUFBRSxxQ0FBcUMsRUFBRSw0QkFBNEIsRUFBRSx3Q0FBd0MsRUFBRSwyQ0FBMkMsRUFBRSwyQ0FBMkMsRUFBRSwwQ0FBMEMsRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSx5Q0FBeUMsRUFBRSx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSx1Q0FBdUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSx5Q0FBeUMsRUFBRSwwQ0FBMEMsRUFBRSxzQ0FBc0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSx1Q0FBdUMsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSw2Q0FBNkMsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSw0Q0FBNEMsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxnREFBZ0QsRUFBRSxpREFBaUQsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSwyQ0FBMkMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBRSx1Q0FBdUMsRUFBRSx1Q0FBdUMsRUFBRSx3QkFBd0IsRUFBRSxxQ0FBcUMsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSw2Q0FBNkMsRUFBRSw2QkFBNkIsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSxzQ0FBc0MsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSx1Q0FBdUMsRUFBRSwwQ0FBMEMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSw2Q0FBNkMsRUFBRSxxQ0FBcUMsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSwrQkFBK0IsRUFBRSxnREFBZ0QsRUFBRSw4QkFBOEIsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSxvQ0FBb0MsRUFBRSwwQ0FBMEMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxpREFBaUQsRUFBRSxxQ0FBcUMsRUFBRSwrQkFBK0IsRUFBRSx3Q0FBd0MsRUFBRSxpREFBaUQsRUFBRSwrQ0FBK0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxnQ0FBZ0MsRUFBRSxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxvQ0FBb0MsRUFBRSx3Q0FBd0MsRUFBRSx3Q0FBd0MsRUFBRSx5Q0FBeUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSx3QkFBd0IsRUFBRSxvQ0FBb0MsRUFBRSxrQ0FBa0MsRUFBRSw4Q0FBOEMsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSxtQ0FBbUMsRUFBRSwwQ0FBMEMsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSw4Q0FBOEMsRUFBRSw0QkFBNEIsRUFBRSwrQkFBK0IsRUFBRSxtQ0FBbUMsRUFBRSxrQ0FBa0MsRUFBRSxvQ0FBb0MsRUFBRSx5Q0FBeUMsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsRUFBRSx3Q0FBd0MsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSxrQ0FBa0MsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSxzQ0FBc0MsRUFBRSx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpQ0FBaUMsRUFBRSxpREFBaUQsRUFBRSw2QkFBNkIsRUFBRSxrQ0FBa0MsRUFBRSxxQ0FBcUMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSwrQ0FBK0MsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxvREFBb0QsRUFBRSxvREFBb0QsRUFBRSw0REFBNEQsRUFBRSxxREFBcUQsRUFBRSw2REFBNkQsRUFBRSwyQ0FBMkMsRUFBRSxtREFBbUQsRUFBRSxtREFBbUQsRUFBRSwyREFBMkQsRUFBRSxvREFBb0QsRUFBRSw0REFBNEQsRUFBRSxvQ0FBb0MsRUFBRSxvQ0FBb0MsRUFBRSxtQ0FBbUMsRUFBRSxxQ0FBcUMsRUFBRSxvQ0FBb0MsRUFBRSxpQ0FBaUMsRUFBRSwwQ0FBMEMsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSw0Q0FBNEMsRUFBRSwyQ0FBMkMsRUFBRSw0Q0FBNEMsRUFBRSwwQ0FBMEMsRUFBRSw2Q0FBNkMsRUFBRSxnQ0FBZ0MsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSxpREFBaUQsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSxpREFBaUQsRUFBRSw4Q0FBOEMsRUFBRSxnQ0FBZ0MsRUFBRSw4Q0FBOEMsRUFBRSxtQ0FBbUMsRUFBRSwrQ0FBK0MsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxpQ0FBaUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSwyQ0FBMkMsRUFBRSw2QkFBNkIsRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSxrQ0FBa0MsRUFBRSwrQkFBK0IsRUFBRSw2QkFBNkIsRUFBRSxxQ0FBcUMsRUFBRSx3Q0FBd0MsRUFBRSxpQ0FBaUMsRUFBRSxvQ0FBb0MsRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsRUFBRSxtQ0FBbUMsRUFBRSxnQ0FBZ0MsRUFBRSx5Q0FBeUMsRUFBRSx3Q0FB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QUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNB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QztJQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL0BzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnQvZGlzdC9jdXN0b20tY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudC9kaXN0L2ZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9Ac2FnZW1vZGVuaW5qYS9mbHVlbnQtaWNvbi1lbGVtZW50LWNvbXBvbmVudC9kaXN0L2ZsdWVudC1pY29uLWVsZW1lbnQtY29tcG9uZW50LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY2xhc3Nlcy9hbHBoYS1ibGVuZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jbGFzc2VzL2N1cnJlbmN5LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NsYXNzZXMvZGF0ZS10aW1lLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NsYXNzZXMvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy9jbGFzc2VzL3RyYW5zYWN0aW9uLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50LWNhcmQudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC1iYWxhbmNlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvY29udGV4dC1tZW51LnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tcGFuZWwudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvZW51bXMvb3BlcmF0aW9uLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL2VudW1zL3RyYW5zYWN0aW9uLXR5cGUudHMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvc2VydmljZXMvYWNjb3VudC1zZXJ2aWNlLnRzIiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3NlcnZpY2VzL3NlcnZpY2UtYmFzZS50cyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2UtbW9uZXkvLi9zY3JpcHRzL3ZpZXdzL2Rhc2hib2FyZC12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQ3VzdG9tQ29tcG9uZW50PXQoKTplLkN1c3RvbUNvbXBvbmVudD10KCl9KHNlbGYsKCgpPT4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ZDoodCxvKT0+e2Zvcih2YXIgbiBpbiBvKWUubyhvLG4pJiYhZS5vKHQsbikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0Om9bbl19KX0sbzooZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkscjplPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX19LHQ9e307ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZnVuY3Rpb24odCl7d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShlLHQpfX1mdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbih0LG8pe2xldCBuPXRbb107T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG59LHNldDpmdW5jdGlvbih0KXtjb25zdCByPW47bj10LHQhPXImJih0aGlzLnNldEF0dHJpYnV0ZShudWxsIT1lP2U6byxuKSx0aGlzLnN0YXRlSGFzQ2hhbmdlZCgpKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0Lm9ic2VydmVBdHRyaWJ1dGUobyxudWxsIT1lP2U6byl9fWUucih0KSxlLmQodCx7Q3VzdG9tQ29tcG9uZW50OigpPT5yLGN1c3RvbUNvbXBvbmVudDooKT0+byxwYXJhbWV0ZXI6KCk9Pm59KTtjbGFzcyByIGV4dGVuZHMgSFRNTEVsZW1lbnR7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5yZW5kZXJET00oKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSx0LG8pe31nZXQgdmlydHVhbERPTSgpe3JldHVybihuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGhpcy5yZW5kZXIoKSxcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVufXJlbmRlckRPTSgpe2NvbnN0IGU9dGhpcy5yZXNvbHZlVGVtcGxhdGUoKTt0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MPW51bGwsdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGUuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgZT10aGlzLmxvY2FsTmFtZTtyZXR1cm4gZSBpbiByLl90ZW1wbGF0ZXM/ci5fdGVtcGxhdGVzW2VdOnRoaXMuY3JlYXRlVGVtcGxhdGUoZSl9Y3JlYXRlVGVtcGxhdGUoZSl7dmFyIHQ7Y29uc3Qgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7cmV0dXJuIG8uaW5uZXJIVE1MPWA8c3R5bGU+JHtudWxsIT09KHQ9bi5zdHlsZXMpJiZ2b2lkIDAhPT10P3Q6XCJcIn08L3N0eWxlPmAsci5fdGVtcGxhdGVzW2VdPW8sb319cmV0dXJuIHIuX3RlbXBsYXRlcz17fSx0fSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWNvbXBvbmVudC5qcy5tYXAiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZsdWVudENvbW1hbmRCYXI9ZSgpOnQuRmx1ZW50Q29tbWFuZEJhcj1lKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgdD17MjY5OnQ9Pnt2YXIgZTtzZWxmLGU9KCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciB0PXtkOihlLG4pPT57Zm9yKHZhciBvIGluIG4pdC5vKG4sbykmJiF0Lm8oZSxvKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbyx7ZW51bWVyYWJsZTohMCxnZXQ6bltvXX0pfSxvOih0LGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSxyOnQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sZT17fTtmdW5jdGlvbiBuKHQpe3JldHVybiBmdW5jdGlvbihlKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsZSl9fXQucihlKSx0LmQoZSx7Q3VzdG9tQ29tcG9uZW50OigpPT5vLGN1c3RvbUNvbXBvbmVudDooKT0+bn0pO2NsYXNzIG8gZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCk7Y29uc3QgdD10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHQuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgdD10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIHQgaW4gby5fdGVtcGxhdGVzP28uX3RlbXBsYXRlc1t0XTp0aGlzLmNyZWF0ZVRlbXBsYXRlKHQpfWNyZWF0ZVRlbXBsYXRlKHQpe3ZhciBlO2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGk9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBuLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShlPWkuc3R5bGVzKSYmdm9pZCAwIT09ZT9lOlwiXCJ9PC9zdHlsZT5gLG8uX3RlbXBsYXRlc1t0XT1uLG59Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfX1yZXR1cm4gby5fdGVtcGxhdGVzPXt9LGV9KSgpLHQuZXhwb3J0cz1lKCl9LDQ0MToodCxlLG4pPT57dmFyIG87IWZ1bmN0aW9uKGkscixzKXtpZihpKXtmb3IodmFyIGEsbD17ODpcImJhY2tzcGFjZVwiLDk6XCJ0YWJcIiwxMzpcImVudGVyXCIsMTY6XCJzaGlmdFwiLDE3OlwiY3RybFwiLDE4OlwiYWx0XCIsMjA6XCJjYXBzbG9ja1wiLDI3OlwiZXNjXCIsMzI6XCJzcGFjZVwiLDMzOlwicGFnZXVwXCIsMzQ6XCJwYWdlZG93blwiLDM1OlwiZW5kXCIsMzY6XCJob21lXCIsMzc6XCJsZWZ0XCIsMzg6XCJ1cFwiLDM5OlwicmlnaHRcIiw0MDpcImRvd25cIiw0NTpcImluc1wiLDQ2OlwiZGVsXCIsOTE6XCJtZXRhXCIsOTM6XCJtZXRhXCIsMjI0OlwibWV0YVwifSxjPXsxMDY6XCIqXCIsMTA3OlwiK1wiLDEwOTpcIi1cIiwxMTA6XCIuXCIsMTExOlwiL1wiLDE4NjpcIjtcIiwxODc6XCI9XCIsMTg4OlwiLFwiLDE4OTpcIi1cIiwxOTA6XCIuXCIsMTkxOlwiL1wiLDE5MjpcImBcIiwyMTk6XCJbXCIsMjIwOlwiXFxcXFwiLDIyMTpcIl1cIiwyMjI6XCInXCJ9LGQ9e1wiflwiOlwiYFwiLFwiIVwiOlwiMVwiLFwiQFwiOlwiMlwiLFwiI1wiOlwiM1wiLCQ6XCI0XCIsXCIlXCI6XCI1XCIsXCJeXCI6XCI2XCIsXCImXCI6XCI3XCIsXCIqXCI6XCI4XCIsXCIoXCI6XCI5XCIsXCIpXCI6XCIwXCIsXzpcIi1cIixcIitcIjpcIj1cIixcIjpcIjpcIjtcIiwnXCInOlwiJ1wiLFwiPFwiOlwiLFwiLFwiPlwiOlwiLlwiLFwiP1wiOlwiL1wiLFwifFwiOlwiXFxcXFwifSx1PXtvcHRpb246XCJhbHRcIixjb21tYW5kOlwibWV0YVwiLHJldHVybjpcImVudGVyXCIsZXNjYXBlOlwiZXNjXCIscGx1czpcIitcIixtb2Q6L01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk/XCJtZXRhXCI6XCJjdHJsXCJ9LG09MTttPDIwOysrbSlsWzExMSttXT1cImZcIittO2ZvcihtPTA7bTw9OTsrK20pbFttKzk2XT1tLnRvU3RyaW5nKCk7di5wcm90b3R5cGUuYmluZD1mdW5jdGlvbih0LGUsbil7dmFyIG89dGhpcztyZXR1cm4gdD10IGluc3RhbmNlb2YgQXJyYXk/dDpbdF0sby5fYmluZE11bHRpcGxlLmNhbGwobyx0LGUsbiksb30sdi5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYmluZC5jYWxsKHRoaXMsdCwoZnVuY3Rpb24oKXt9KSxlKX0sdi5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIG4uX2RpcmVjdE1hcFt0K1wiOlwiK2VdJiZuLl9kaXJlY3RNYXBbdCtcIjpcIitlXSh7fSx0KSxufSx2LnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHQuX2NhbGxiYWNrcz17fSx0Ll9kaXJlY3RNYXA9e30sdH0sdi5wcm90b3R5cGUuc3RvcENhbGxiYWNrPWZ1bmN0aW9uKHQsZSl7aWYoKFwiIFwiK2UuY2xhc3NOYW1lK1wiIFwiKS5pbmRleE9mKFwiIG1vdXNldHJhcCBcIik+LTEpcmV0dXJuITE7aWYoZyhlLHRoaXMudGFyZ2V0KSlyZXR1cm4hMTtpZihcImNvbXBvc2VkUGF0aFwiaW4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb21wb3NlZFBhdGgpe3ZhciBuPXQuY29tcG9zZWRQYXRoKClbMF07biE9PXQudGFyZ2V0JiYoZT1uKX1yZXR1cm5cIklOUFVUXCI9PWUudGFnTmFtZXx8XCJTRUxFQ1RcIj09ZS50YWdOYW1lfHxcIlRFWFRBUkVBXCI9PWUudGFnTmFtZXx8ZS5pc0NvbnRlbnRFZGl0YWJsZX0sdi5wcm90b3R5cGUuaGFuZGxlS2V5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2hhbmRsZUtleS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHYuYWRkS2V5Y29kZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShlKSYmKGxbZV09dFtlXSk7YT1udWxsfSx2LmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD12KHIpO2Zvcih2YXIgZSBpbiB0KVwiX1wiIT09ZS5jaGFyQXQoMCkmJih2W2VdPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0W2VdLmFwcGx5KHQsYXJndW1lbnRzKX19KGUpKX0sdi5pbml0KCksaS5Nb3VzZXRyYXA9dix0LmV4cG9ydHMmJih0LmV4cG9ydHM9diksdm9pZCAwPT09KG89ZnVuY3Rpb24oKXtyZXR1cm4gdn0uY2FsbChlLG4sZSx0KSl8fCh0LmV4cG9ydHM9byl9ZnVuY3Rpb24gaCh0LGUsbil7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvblwiK2Usbil9ZnVuY3Rpb24gcCh0KXtpZihcImtleXByZXNzXCI9PXQudHlwZSl7dmFyIGU9U3RyaW5nLmZyb21DaGFyQ29kZSh0LndoaWNoKTtyZXR1cm4gdC5zaGlmdEtleXx8KGU9ZS50b0xvd2VyQ2FzZSgpKSxlfXJldHVybiBsW3Qud2hpY2hdP2xbdC53aGljaF06Y1t0LndoaWNoXT9jW3Qud2hpY2hdOlN0cmluZy5mcm9tQ2hhckNvZGUodC53aGljaCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBmKHQpe3JldHVyblwic2hpZnRcIj09dHx8XCJjdHJsXCI9PXR8fFwiYWx0XCI9PXR8fFwibWV0YVwiPT10fWZ1bmN0aW9uIHkodCxlLG4pe3JldHVybiBufHwobj1mdW5jdGlvbigpe2lmKCFhKWZvcih2YXIgdCBpbiBhPXt9LGwpdD45NSYmdDwxMTJ8fGwuaGFzT3duUHJvcGVydHkodCkmJihhW2xbdF1dPXQpO3JldHVybiBhfSgpW3RdP1wia2V5ZG93blwiOlwia2V5cHJlc3NcIiksXCJrZXlwcmVzc1wiPT1uJiZlLmxlbmd0aCYmKG49XCJrZXlkb3duXCIpLG59ZnVuY3Rpb24gYih0LGUpe3ZhciBuLG8saSxyPVtdO2ZvcihuPWZ1bmN0aW9uKHQpe3JldHVyblwiK1wiPT09dD9bXCIrXCJdOih0PXQucmVwbGFjZSgvXFwrezJ9L2csXCIrcGx1c1wiKSkuc3BsaXQoXCIrXCIpfSh0KSxpPTA7aTxuLmxlbmd0aDsrK2kpbz1uW2ldLHVbb10mJihvPXVbb10pLGUmJlwia2V5cHJlc3NcIiE9ZSYmZFtvXSYmKG89ZFtvXSxyLnB1c2goXCJzaGlmdFwiKSksZihvKSYmci5wdXNoKG8pO3JldHVybntrZXk6byxtb2RpZmllcnM6cixhY3Rpb246ZT15KG8scixlKX19ZnVuY3Rpb24gZyh0LGUpe3JldHVybiBudWxsIT09dCYmdCE9PXImJih0PT09ZXx8Zyh0LnBhcmVudE5vZGUsZSkpfWZ1bmN0aW9uIHYodCl7dmFyIGU9dGhpcztpZih0PXR8fHIsIShlIGluc3RhbmNlb2YgdikpcmV0dXJuIG5ldyB2KHQpO2UudGFyZ2V0PXQsZS5fY2FsbGJhY2tzPXt9LGUuX2RpcmVjdE1hcD17fTt2YXIgbixvPXt9LGk9ITEscz0hMSxhPSExO2Z1bmN0aW9uIGwodCl7dD10fHx7fTt2YXIgZSxuPSExO2ZvcihlIGluIG8pdFtlXT9uPSEwOm9bZV09MDtufHwoYT0hMSl9ZnVuY3Rpb24gYyh0LG4saSxyLHMsYSl7dmFyIGwsYyxkLHUsbT1bXSxoPWkudHlwZTtpZighZS5fY2FsbGJhY2tzW3RdKXJldHVybltdO2ZvcihcImtleXVwXCI9PWgmJmYodCkmJihuPVt0XSksbD0wO2w8ZS5fY2FsbGJhY2tzW3RdLmxlbmd0aDsrK2wpaWYoYz1lLl9jYWxsYmFja3NbdF1bbF0sKHJ8fCFjLnNlcXx8b1tjLnNlcV09PWMubGV2ZWwpJiZoPT1jLmFjdGlvbiYmKFwia2V5cHJlc3NcIj09aCYmIWkubWV0YUtleSYmIWkuY3RybEtleXx8KGQ9bix1PWMubW9kaWZpZXJzLGQuc29ydCgpLmpvaW4oXCIsXCIpPT09dS5zb3J0KCkuam9pbihcIixcIikpKSl7dmFyIHA9IXImJmMuY29tYm89PXMseT1yJiZjLnNlcT09ciYmYy5sZXZlbD09YTsocHx8eSkmJmUuX2NhbGxiYWNrc1t0XS5zcGxpY2UobCwxKSxtLnB1c2goYyl9cmV0dXJuIG19ZnVuY3Rpb24gZCh0LG4sbyxpKXtlLnN0b3BDYWxsYmFjayhuLG4udGFyZ2V0fHxuLnNyY0VsZW1lbnQsbyxpKXx8ITE9PT10KG4sbykmJihmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0P3QucHJldmVudERlZmF1bHQoKTp0LnJldHVyblZhbHVlPSExfShuKSxmdW5jdGlvbih0KXt0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwfShuKSl9ZnVuY3Rpb24gdSh0KXtcIm51bWJlclwiIT10eXBlb2YgdC53aGljaCYmKHQud2hpY2g9dC5rZXlDb2RlKTt2YXIgbj1wKHQpO24mJihcImtleXVwXCIhPXQudHlwZXx8aSE9PW4/ZS5oYW5kbGVLZXkobixmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gdC5zaGlmdEtleSYmZS5wdXNoKFwic2hpZnRcIiksdC5hbHRLZXkmJmUucHVzaChcImFsdFwiKSx0LmN0cmxLZXkmJmUucHVzaChcImN0cmxcIiksdC5tZXRhS2V5JiZlLnB1c2goXCJtZXRhXCIpLGV9KHQpLHQpOmk9ITEpfWZ1bmN0aW9uIG0odCxyLHMsdSxoKXtlLl9kaXJlY3RNYXBbdCtcIjpcIitzXT1yO3ZhciBmLHk9KHQ9dC5yZXBsYWNlKC9cXHMrL2csXCIgXCIpKS5zcGxpdChcIiBcIik7eS5sZW5ndGg+MT9mdW5jdGlvbih0LGUscixzKXtmdW5jdGlvbiBjKGUpe3JldHVybiBmdW5jdGlvbigpe2E9ZSwrK29bdF0sY2xlYXJUaW1lb3V0KG4pLG49c2V0VGltZW91dChsLDFlMyl9fWZ1bmN0aW9uIHUoZSl7ZChyLGUsdCksXCJrZXl1cFwiIT09cyYmKGk9cChlKSksc2V0VGltZW91dChsLDEwKX1vW3RdPTA7Zm9yKHZhciBoPTA7aDxlLmxlbmd0aDsrK2gpe3ZhciBmPWgrMT09PWUubGVuZ3RoP3U6YyhzfHxiKGVbaCsxXSkuYWN0aW9uKTttKGVbaF0sZixzLHQsaCl9fSh0LHkscixzKTooZj1iKHQscyksZS5fY2FsbGJhY2tzW2Yua2V5XT1lLl9jYWxsYmFja3NbZi5rZXldfHxbXSxjKGYua2V5LGYubW9kaWZpZXJzLHt0eXBlOmYuYWN0aW9ufSx1LHQsaCksZS5fY2FsbGJhY2tzW2Yua2V5XVt1P1widW5zaGlmdFwiOlwicHVzaFwiXSh7Y2FsbGJhY2s6cixtb2RpZmllcnM6Zi5tb2RpZmllcnMsYWN0aW9uOmYuYWN0aW9uLHNlcTp1LGxldmVsOmgsY29tYm86dH0pKX1lLl9oYW5kbGVLZXk9ZnVuY3Rpb24odCxlLG4pe3ZhciBvLGk9Yyh0LGUsbikscj17fSx1PTAsbT0hMTtmb3Iobz0wO288aS5sZW5ndGg7KytvKWlbb10uc2VxJiYodT1NYXRoLm1heCh1LGlbb10ubGV2ZWwpKTtmb3Iobz0wO288aS5sZW5ndGg7KytvKWlmKGlbb10uc2VxKXtpZihpW29dLmxldmVsIT11KWNvbnRpbnVlO209ITAscltpW29dLnNlcV09MSxkKGlbb10uY2FsbGJhY2ssbixpW29dLmNvbWJvLGlbb10uc2VxKX1lbHNlIG18fGQoaVtvXS5jYWxsYmFjayxuLGlbb10uY29tYm8pO3ZhciBoPVwia2V5cHJlc3NcIj09bi50eXBlJiZzO24udHlwZSE9YXx8Zih0KXx8aHx8bChyKSxzPW0mJlwia2V5ZG93blwiPT1uLnR5cGV9LGUuX2JpbmRNdWx0aXBsZT1mdW5jdGlvbih0LGUsbil7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDsrK28pbSh0W29dLGUsbil9LGgodCxcImtleXByZXNzXCIsdSksaCh0LFwia2V5ZG93blwiLHUpLGgodCxcImtleXVwXCIsdSl9fShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpudWxsLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/ZG9jdW1lbnQ6bnVsbCl9fSxlPXt9O2Z1bmN0aW9uIG4obyl7dmFyIGk9ZVtvXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVtvXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbb10ocixyLmV4cG9ydHMsbiksci5leHBvcnRzfW4ubj10PT57dmFyIGU9dCYmdC5fX2VzTW9kdWxlPygpPT50LmRlZmF1bHQ6KCk9PnQ7cmV0dXJuIG4uZChlLHthOmV9KSxlfSxuLmQ9KHQsZSk9Pntmb3IodmFyIG8gaW4gZSluLm8oZSxvKSYmIW4ubyh0LG8pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHtlbnVtZXJhYmxlOiEwLGdldDplW29dfSl9LG4ubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksbi5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbz17fTtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjtuLnIobyksbi5kKG8se0ZsdWVudEFwcEJhckJ1dHRvbjooKT0+cixGbHVlbnRBcHBCYXJTZXBhcmF0b3I6KCk9PnJ0LEZsdWVudENvbW1hbmRCYXI6KCk9Pml0fSk7dmFyIHQ9bigyNjkpLGU9big0NDEpLGk9bi5uKGUpO2xldCByPWNsYXNzIGV4dGVuZHMgdC5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJpY29uXCIsXCJsYWJlbFwiLFwibW9kaWZpZXJcIixcImtleVwiLFwidXNlLWFjY2VudFwiXX1nZXQgaWNvbigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImljb25cIil9c2V0IGljb24odCl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJpY29uXCIsdCksdGhpcy5zZXRJY29uKCl9Z2V0IGxhYmVsKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil9c2V0IGxhYmVsKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwibGFiZWxcIix0KSx0aGlzLnNldExhYmVsKCl9Z2V0IGNvbW1hbmQoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjb21tYW5kXCIpfXNldCBjb21tYW5kKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiY29tbWFuZFwiLHQpfWdldCBtb2RpZmllcigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcIm1vZGlmaWVyXCIpfXNldCBtb2RpZmllcih0KXt0aGlzLnNldEF0dHJpYnV0ZShcIm1vZGlmaWVyXCIsdCksdGhpcy5zZXRBY2NlbGVyYXRvcigpfWdldCBrZXkoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJrZXlcIil9c2V0IGtleSh0KXt0aGlzLnNldEF0dHJpYnV0ZShcImtleVwiLHQpLHRoaXMuc2V0QWNjZWxlcmF0b3IoKX1nZXQgdXNlQWNjZW50KCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwidXNlLWFjY2VudFwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpfXNldCB1c2VBY2NlbnQodCl7dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIsdCksdGhpcy5zZXRJY29uKCl9Z2V0IHRpdGxlKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwidGl0bGVcIil9c2V0IHRpdGxlKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0KSx0aGlzLnNldFRpdGxlKCl9Z2V0IGRpc2FibGVkKCl7cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9Z2V0IGJ1dHRvbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fYnV0dG9uKSYmdm9pZCAwIT09dHx8KHRoaXMuX2J1dHRvbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIikpLHRoaXMuX2J1dHRvbn1nZXQgaWNvblNwYW4oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2ljb25TcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2ljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIikpLHRoaXMuX2ljb25TcGFufWdldCBjdXN0b21JY29uU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY3VzdG9tSWNvblNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5fY3VzdG9tSWNvblNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzbG90W25hbWU9aWNvbl1cIikpLHRoaXMuX2N1c3RvbUljb25TcGFufWdldCBjb250ZW50U3Bhbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fY29udGVudFNwYW4pJiZ2b2lkIDAhPT10fHwodGhpcy5fY29udGVudFNwYW49dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSksdGhpcy5fY29udGVudFNwYW59Z2V0IGFjY2VsZXJhdG9yU3Bhbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fYWNjZWxlcmF0b3JTcGFuKSYmdm9pZCAwIT09dHx8KHRoaXMuX2FjY2VsZXJhdG9yU3Bhbj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5rZXlib2FyZC1hY2NlbGVyYXRvclwiKSksdGhpcy5fYWNjZWxlcmF0b3JTcGFufWdldCBmb3JtYXR0ZWRNb2RpZmllcigpe3JldHVybiB0aGlzLm1vZGlmaWVyLnJlcGxhY2UoXCJDb250cm9sXCIsXCJDdHJsXCIpfWdldCBmb3JtYXR0ZWRBY2NlbGVyYXRvcigpe3JldHVybiB0aGlzLm1vZGlmaWVyP3RoaXMuZm9ybWF0dGVkTW9kaWZpZXIrXCIrXCIrdGhpcy5rZXk6dGhpcy5rZXl9Z2V0IHN1cHBvcnRlZE1vZGlmaWVyKCl7cmV0dXJuIHRoaXMubW9kaWZpZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiY29udHJvbFwiLFwibW9kXCIpfWdldCBzdXBwb3J0ZWRLZXkoKXtyZXR1cm4gdGhpcy5rZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiZGVsZXRlXCIsXCJkZWxcIikucmVwbGFjZShcIitcIixcIj1cIikucmVwbGFjZShcImVzY2FwZVwiLFwiZXNjXCIpfXJlbmRlcigpe3JldHVyblwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnV0dG9uJz5cXG4gICAgICAgICAgICAgICAgPGZsdWVudC1zeW1ib2wtaWNvbiBjbGFzcz0naWNvbic+PC9mbHVlbnQtc3ltYm9sLWljb24+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9J2ljb24nPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NvbnRlbnQnPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2tleWJvYXJkLWFjY2VsZXJhdG9yJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIn1jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMuc2V0SWNvbigpLHRoaXMuc2V0TGFiZWwoKSx0aGlzLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCIwXCIpLHRoaXMuY3VzdG9tSWNvblNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwodD0+e2NvbnN0IGU9dGhpcy5jdXN0b21JY29uU2xvdC5hc3NpZ25lZE5vZGVzKCksbj1lLmxlbmd0aD4wO3RoaXMuaWNvblNwYW4uc3R5bGUuZGlzcGxheT1uP1wibm9uZVwiOlwiaW5saW5lLWJsb2NrXCIsdGhpcy5jdXN0b21JY29uU2xvdC5zdHlsZS5kaXNwbGF5PW4/XCJkZWZhdWx0XCI6XCJub25lXCIsZS5mb3JFYWNoKCh0PT57dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwodD0+e3RoaXMuY2xpY2soKSx0LnN0b3BQcm9wYWdhdGlvbigpfSkpfSkpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0KXtzd2l0Y2godCl7Y2FzZVwibGFiZWxcIjp0aGlzLnNldExhYmVsKCk7YnJlYWs7Y2FzZVwiaWNvblwiOmNhc2VcInVzZS1hY2NlbnRcIjp0aGlzLnNldEljb24oKTticmVhaztjYXNlXCJtb2RpZmllclwiOmNhc2VcImtleVwiOnRoaXMuc2V0QWNjZWxlcmF0b3IoKX19c2V0SWNvbigpe3ZhciB0O3RoaXMuaWNvblNwYW4uc2V0QXR0cmlidXRlKFwic3ltYm9sXCIsbnVsbCE9PSh0PXRoaXMuaWNvbikmJnZvaWQgMCE9PXQ/dDpcIlwiKSx0aGlzLmljb25TcGFuLnRvZ2dsZUF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIix0aGlzLnVzZUFjY2VudCl9c2V0TGFiZWwoKXt0aGlzLmNvbnRlbnRTcGFuLnRleHRDb250ZW50PXRoaXMubGFiZWwsdGhpcy5zZXRUaXRsZSgpfXNldEFjY2VsZXJhdG9yKCl7dmFyIHQ7aWYodGhpcy5rZXkpe3RoaXMuYWNjZWxlcmF0b3JTcGFuLnRleHRDb250ZW50PW51bGwhPT0odD10aGlzLmZvcm1hdHRlZEFjY2VsZXJhdG9yKSYmdm9pZCAwIT09dD90OlwiXCIsdGhpcy5zZXRUaXRsZSgpO3ZhciBlPXRoaXMubW9kaWZpZXI/dGhpcy5zdXBwb3J0ZWRNb2RpZmllcitcIitcIit0aGlzLnN1cHBvcnRlZEtleTp0aGlzLnN1cHBvcnRlZEtleTtpKCkuYmluZChlLCgoKT0+KHRoaXMuZGlzYWJsZWR8fCh0aGlzLmNsaWNrKCksdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcImludm9rZWRcIiksc2V0VGltZW91dCgoKCk9PnRoaXMuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZva2VkXCIpKSwxNTApKSwhMSkpKX19c2V0VGl0bGUoKXt2YXIgdCxlO2NvbnN0IG49dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcj9gKCR7dGhpcy5mb3JtYXR0ZWRBY2NlbGVyYXRvcn0pYDpcIlwiO2xldCBvPW51bGwhPT0oZT1udWxsIT09KHQ9dGhpcy50aXRsZSkmJnZvaWQgMCE9PXQ/dDp0aGlzLmxhYmVsKSYmdm9pZCAwIT09ZT9lOlwiXCI7dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIixgJHtvfSAke259YCl9c2V0QWNjZWxlcmF0b3JXaWR0aCh0KXt0aGlzLmFjY2VsZXJhdG9yU3Bhbi5zdHlsZS53aWR0aD10K1wicHhcIn19O3Iuc3R5bGVzPSdcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogIzAwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBCdXR0b24gKi9cXG4gICAgICAgIC5idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1wcmltYXJ5KTtcXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDhweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAuYnV0dG9uOmFjdGl2ZSxcXG4gICAgICAgIC5idXR0b24uaW52b2tlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1zdWJ0bGUtdGVydGlhcnkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtc2Vjb25kYXJ5KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXNlY29uZGFyeSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmJ1dHRvbiB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1kaXNhYmxlZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbZGlzYWJsZWRdW2lzLXNlY29uZGFyeV0pIC5idXR0b24ge1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1ib3R0b21dOm5vdChbaXMtc2Vjb25kYXJ5XSkpIC5idXR0b24ge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9Y29sbGFwc2VkXTpub3QoW2lzLXNlY29uZGFyeV0pKSAuYnV0dG9uIHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idXR0b246YWN0aXZlIC5pY29uW3VzZS1hY2NlbnRdOjpwYXJ0KGljb24pLFxcbiAgICAgICAgLmJ1dHRvbi5pbnZva2VkIC5pY29uW3VzZS1hY2NlbnRdOjpwYXJ0KGljb24pIHtcXG4gICAgICAgICAgICBjb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtYWNjZW50LWRlZmF1bHQpLCB0cmFuc3BhcmVudCAxMCUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLmljb246OnBhcnQoaWNvbikge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLXRleHQtZGlzYWJsZWQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQ3VzdG9tIGljb24gKi9cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChmbHVlbnQtaW1hZ2UtaWNvbikge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC8qIENvbnRlbnQgKi9cXG4gICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcJ1NlZ29lIFVJIFZhcmlhYmxlXFwnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwLCBcIm9wc3pcIiAxNjtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQ6ZW1wdHksXFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1jb2xsYXBzZWRdOm5vdChbaXMtc2Vjb25kYXJ5XSkpIC5jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOmhvc3QoW2lzLXNlY29uZGFyeV0pIC5jb250ZW50IHtcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwLCBcIm9wc3pcIiAyMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50OjpiZWZvcmUsXFxuICAgICAgICAuY29udGVudDo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcJ1xcJztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YmVmb3Jle1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29udGVudDo6YWZ0ZXJ7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEtleWJvYXJkIGFjY2VsZXJhdG9yICovXFxuICAgICAgICAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZmlsbC10ZXh0LXByaW1hcnkpLCB0cmFuc3BhcmVudCA0MCUpO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcJ1NlZ29lIFVJIFZhcmlhYmxlIFNtYWxsXFwnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtpcy1zZWNvbmRhcnldKSAua2V5Ym9hcmQtYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC5rZXlib2FyZC1hY2NlbGVyYXRvciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZpbGwtdGV4dC1kaXNhYmxlZCkgIWltcG9ydGFudDtcXG4gICAgICAgIH1cXG4gICAgJyxyPWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpLHI9YXJndW1lbnRzLmxlbmd0aCxzPXI8Mz9lOm51bGw9PT1vP289T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOm87aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLG8pO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKGk9dFthXSkmJihzPShyPDM/aShzKTpyPjM/aShlLG4scyk6aShlLG4pKXx8cyk7cmV0dXJuIHI+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfShbKDAsdC5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWFwcC1iYXItYnV0dG9uXCIpXSxyKTtjb25zdCBzPU1hdGgubWluLGE9TWF0aC5tYXgsbD1NYXRoLnJvdW5kLGM9TWF0aC5mbG9vcixkPXQ9Pih7eDp0LHk6dH0pLHU9e2xlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwiLGJvdHRvbTpcInRvcFwiLHRvcDpcImJvdHRvbVwifSxtPXtzdGFydDpcImVuZFwiLGVuZDpcInN0YXJ0XCJ9O2Z1bmN0aW9uIGgodCxlLG4pe3JldHVybiBhKHQscyhlLG4pKX1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KGUpOnR9ZnVuY3Rpb24gZih0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMF19ZnVuY3Rpb24geSh0KXtyZXR1cm4gdC5zcGxpdChcIi1cIilbMV19ZnVuY3Rpb24gYih0KXtyZXR1cm5cInhcIj09PXQ/XCJ5XCI6XCJ4XCJ9ZnVuY3Rpb24gZyh0KXtyZXR1cm5cInlcIj09PXQ/XCJoZWlnaHRcIjpcIndpZHRoXCJ9ZnVuY3Rpb24gdih0KXtyZXR1cm5bXCJ0b3BcIixcImJvdHRvbVwiXS5pbmNsdWRlcyhmKHQpKT9cInlcIjpcInhcIn1mdW5jdGlvbiB4KHQpe3JldHVybiBiKHYodCkpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIHQucmVwbGFjZSgvc3RhcnR8ZW5kL2csKHQ9Pm1bdF0pKX1mdW5jdGlvbiBDKHQpe3JldHVybiB0LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCh0PT51W3RdKSl9ZnVuY3Rpb24gQSh0KXtyZXR1cm57Li4udCx0b3A6dC55LGxlZnQ6dC54LHJpZ2h0OnQueCt0LndpZHRoLGJvdHRvbTp0LnkrdC5oZWlnaHR9fWZ1bmN0aW9uIGsodCxlLG4pe2xldHtyZWZlcmVuY2U6byxmbG9hdGluZzppfT10O2NvbnN0IHI9dihlKSxzPXgoZSksYT1nKHMpLGw9ZihlKSxjPVwieVwiPT09cixkPW8ueCtvLndpZHRoLzItaS53aWR0aC8yLHU9by55K28uaGVpZ2h0LzItaS5oZWlnaHQvMixtPW9bYV0vMi1pW2FdLzI7bGV0IGg7c3dpdGNoKGwpe2Nhc2VcInRvcFwiOmg9e3g6ZCx5Om8ueS1pLmhlaWdodH07YnJlYWs7Y2FzZVwiYm90dG9tXCI6aD17eDpkLHk6by55K28uaGVpZ2h0fTticmVhaztjYXNlXCJyaWdodFwiOmg9e3g6by54K28ud2lkdGgseTp1fTticmVhaztjYXNlXCJsZWZ0XCI6aD17eDpvLngtaS53aWR0aCx5OnV9O2JyZWFrO2RlZmF1bHQ6aD17eDpvLngseTpvLnl9fXN3aXRjaCh5KGUpKXtjYXNlXCJzdGFydFwiOmhbc10tPW0qKG4mJmM/LTE6MSk7YnJlYWs7Y2FzZVwiZW5kXCI6aFtzXSs9bSoobiYmYz8tMToxKX1yZXR1cm4gaH1hc3luYyBmdW5jdGlvbiBTKHQsZSl7dmFyIG47dm9pZCAwPT09ZSYmKGU9e30pO2NvbnN0e3g6byx5OmkscGxhdGZvcm06cixyZWN0czpzLGVsZW1lbnRzOmEsc3RyYXRlZ3k6bH09dCx7Ym91bmRhcnk6Yz1cImNsaXBwaW5nQW5jZXN0b3JzXCIscm9vdEJvdW5kYXJ5OmQ9XCJ2aWV3cG9ydFwiLGVsZW1lbnRDb250ZXh0OnU9XCJmbG9hdGluZ1wiLGFsdEJvdW5kYXJ5Om09ITEscGFkZGluZzpoPTB9PXAoZSx0KSxmPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCIhPXR5cGVvZiB0P2Z1bmN0aW9uKHQpe3JldHVybnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MCwuLi50fX0odCk6e3RvcDp0LHJpZ2h0OnQsYm90dG9tOnQsbGVmdDp0fX0oaCkseT1hW20/XCJmbG9hdGluZ1wiPT09dT9cInJlZmVyZW5jZVwiOlwiZmxvYXRpbmdcIjp1XSxiPUEoYXdhaXQgci5nZXRDbGlwcGluZ1JlY3Qoe2VsZW1lbnQ6bnVsbD09KG49YXdhaXQobnVsbD09ci5pc0VsZW1lbnQ/dm9pZCAwOnIuaXNFbGVtZW50KHkpKSl8fG4/eTp5LmNvbnRleHRFbGVtZW50fHxhd2FpdChudWxsPT1yLmdldERvY3VtZW50RWxlbWVudD92b2lkIDA6ci5nZXREb2N1bWVudEVsZW1lbnQoYS5mbG9hdGluZykpLGJvdW5kYXJ5OmMscm9vdEJvdW5kYXJ5OmQsc3RyYXRlZ3k6bH0pKSxnPVwiZmxvYXRpbmdcIj09PXU/ey4uLnMuZmxvYXRpbmcseDpvLHk6aX06cy5yZWZlcmVuY2Usdj1hd2FpdChudWxsPT1yLmdldE9mZnNldFBhcmVudD92b2lkIDA6ci5nZXRPZmZzZXRQYXJlbnQoYS5mbG9hdGluZykpLHg9YXdhaXQobnVsbD09ci5pc0VsZW1lbnQ/dm9pZCAwOnIuaXNFbGVtZW50KHYpKSYmYXdhaXQobnVsbD09ci5nZXRTY2FsZT92b2lkIDA6ci5nZXRTY2FsZSh2KSl8fHt4OjEseToxfSx3PUEoci5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdD9hd2FpdCByLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KHtyZWN0Omcsb2Zmc2V0UGFyZW50OnYsc3RyYXRlZ3k6bH0pOmcpO3JldHVybnt0b3A6KGIudG9wLXcudG9wK2YudG9wKS94LnksYm90dG9tOih3LmJvdHRvbS1iLmJvdHRvbStmLmJvdHRvbSkveC55LGxlZnQ6KGIubGVmdC13LmxlZnQrZi5sZWZ0KS94LngscmlnaHQ6KHcucmlnaHQtYi5yaWdodCtmLnJpZ2h0KS94Lnh9fWNvbnN0IFI9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSx7bmFtZTpcImZsaXBcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7dmFyIG47Y29uc3R7cGxhY2VtZW50Om8sbWlkZGxld2FyZURhdGE6aSxyZWN0czpyLGluaXRpYWxQbGFjZW1lbnQ6cyxwbGF0Zm9ybTphLGVsZW1lbnRzOmx9PWUse21haW5BeGlzOmM9ITAsY3Jvc3NBeGlzOmQ9ITAsZmFsbGJhY2tQbGFjZW1lbnRzOnUsZmFsbGJhY2tTdHJhdGVneTptPVwiYmVzdEZpdFwiLGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb246aD1cIm5vbmVcIixmbGlwQWxpZ25tZW50OmI9ITAsLi4udn09cCh0LGUpLEE9ZihvKSxrPWYocyk9PT1zLFI9YXdhaXQobnVsbD09YS5pc1JUTD92b2lkIDA6YS5pc1JUTChsLmZsb2F0aW5nKSksRT11fHwoa3x8IWI/W0MocyldOmZ1bmN0aW9uKHQpe2NvbnN0IGU9Qyh0KTtyZXR1cm5bdyh0KSxlLHcoZSldfShzKSk7dXx8XCJub25lXCI9PT1ofHxFLnB1c2goLi4uZnVuY3Rpb24odCxlLG4sbyl7Y29uc3QgaT15KHQpO2xldCByPWZ1bmN0aW9uKHQsZSxuKXtjb25zdCBvPVtcImxlZnRcIixcInJpZ2h0XCJdLGk9W1wicmlnaHRcIixcImxlZnRcIl0scj1bXCJ0b3BcIixcImJvdHRvbVwiXSxzPVtcImJvdHRvbVwiLFwidG9wXCJdO3N3aXRjaCh0KXtjYXNlXCJ0b3BcIjpjYXNlXCJib3R0b21cIjpyZXR1cm4gbj9lP2k6bzplP286aTtjYXNlXCJsZWZ0XCI6Y2FzZVwicmlnaHRcIjpyZXR1cm4gZT9yOnM7ZGVmYXVsdDpyZXR1cm5bXX19KGYodCksXCJzdGFydFwiPT09bixvKTtyZXR1cm4gaSYmKHI9ci5tYXAoKHQ9PnQrXCItXCIraSkpLGUmJihyPXIuY29uY2F0KHIubWFwKHcpKSkpLHJ9KHMsYixoLFIpKTtjb25zdCBfPVtzLC4uLkVdLEw9YXdhaXQgUyhlLHYpLFA9W107bGV0IFQ9KG51bGw9PShuPWkuZmxpcCk/dm9pZCAwOm4ub3ZlcmZsb3dzKXx8W107aWYoYyYmUC5wdXNoKExbQV0pLGQpe2NvbnN0IHQ9ZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTtjb25zdCBvPXkodCksaT14KHQpLHI9ZyhpKTtsZXQgcz1cInhcIj09PWk/bz09PShuP1wiZW5kXCI6XCJzdGFydFwiKT9cInJpZ2h0XCI6XCJsZWZ0XCI6XCJzdGFydFwiPT09bz9cImJvdHRvbVwiOlwidG9wXCI7cmV0dXJuIGUucmVmZXJlbmNlW3JdPmUuZmxvYXRpbmdbcl0mJihzPUMocykpLFtzLEMocyldfShvLHIsUik7UC5wdXNoKExbdFswXV0sTFt0WzFdXSl9aWYoVD1bLi4uVCx7cGxhY2VtZW50Om8sb3ZlcmZsb3dzOlB9XSwhUC5ldmVyeSgodD0+dDw9MCkpKXt2YXIgTyxNO2NvbnN0IHQ9KChudWxsPT0oTz1pLmZsaXApP3ZvaWQgMDpPLmluZGV4KXx8MCkrMSxlPV9bdF07aWYoZSlyZXR1cm57ZGF0YTp7aW5kZXg6dCxvdmVyZmxvd3M6VH0scmVzZXQ6e3BsYWNlbWVudDplfX07bGV0IG49bnVsbD09KE09VC5maWx0ZXIoKHQ9PnQub3ZlcmZsb3dzWzBdPD0wKSkuc29ydCgoKHQsZSk9PnQub3ZlcmZsb3dzWzFdLWUub3ZlcmZsb3dzWzFdKSlbMF0pP3ZvaWQgMDpNLnBsYWNlbWVudDtpZighbilzd2l0Y2gobSl7Y2FzZVwiYmVzdEZpdFwiOnt2YXIgQjtjb25zdCB0PW51bGw9PShCPVQubWFwKCh0PT5bdC5wbGFjZW1lbnQsdC5vdmVyZmxvd3MuZmlsdGVyKCh0PT50PjApKS5yZWR1Y2UoKCh0LGUpPT50K2UpLDApXSkpLnNvcnQoKCh0LGUpPT50WzFdLWVbMV0pKVswXSk/dm9pZCAwOkJbMF07dCYmKG49dCk7YnJlYWt9Y2FzZVwiaW5pdGlhbFBsYWNlbWVudFwiOm49c31pZihvIT09bilyZXR1cm57cmVzZXQ6e3BsYWNlbWVudDpufX19cmV0dXJue319fX0sRT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCkse25hbWU6XCJvZmZzZXRcIixvcHRpb25zOnQsYXN5bmMgZm4oZSl7Y29uc3R7eDpuLHk6b309ZSxpPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKHQsZSl7Y29uc3R7cGxhY2VtZW50Om4scGxhdGZvcm06byxlbGVtZW50czppfT10LHI9YXdhaXQobnVsbD09by5pc1JUTD92b2lkIDA6by5pc1JUTChpLmZsb2F0aW5nKSkscz1mKG4pLGE9eShuKSxsPVwieVwiPT09dihuKSxjPVtcImxlZnRcIixcInRvcFwiXS5pbmNsdWRlcyhzKT8tMToxLGQ9ciYmbD8tMToxLHU9cChlLHQpO2xldHttYWluQXhpczptLGNyb3NzQXhpczpoLGFsaWdubWVudEF4aXM6Yn09XCJudW1iZXJcIj09dHlwZW9mIHU/e21haW5BeGlzOnUsY3Jvc3NBeGlzOjAsYWxpZ25tZW50QXhpczpudWxsfTp7bWFpbkF4aXM6MCxjcm9zc0F4aXM6MCxhbGlnbm1lbnRBeGlzOm51bGwsLi4udX07cmV0dXJuIGEmJlwibnVtYmVyXCI9PXR5cGVvZiBiJiYoaD1cImVuZFwiPT09YT8tMSpiOmIpLGw/e3g6aCpkLHk6bSpjfTp7eDptKmMseTpoKmR9fShlLHQpO3JldHVybnt4Om4raS54LHk6bytpLnksZGF0YTppfX19fTtmdW5jdGlvbiBfKHQpe3JldHVybiBUKHQpPyh0Lm5vZGVOYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpOlwiI2RvY3VtZW50XCJ9ZnVuY3Rpb24gTCh0KXt2YXIgZTtyZXR1cm4obnVsbD09dHx8bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5kZWZhdWx0Vmlldyl8fHdpbmRvd31mdW5jdGlvbiBQKHQpe3ZhciBlO3JldHVybiBudWxsPT0oZT0oVCh0KT90Lm93bmVyRG9jdW1lbnQ6dC5kb2N1bWVudCl8fHdpbmRvdy5kb2N1bWVudCk/dm9pZCAwOmUuZG9jdW1lbnRFbGVtZW50fWZ1bmN0aW9uIFQodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBOb2RlfHx0IGluc3RhbmNlb2YgTCh0KS5Ob2RlfWZ1bmN0aW9uIE8odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBFbGVtZW50fHx0IGluc3RhbmNlb2YgTCh0KS5FbGVtZW50fWZ1bmN0aW9uIE0odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudHx8dCBpbnN0YW5jZW9mIEwodCkuSFRNTEVsZW1lbnR9ZnVuY3Rpb24gQih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgU2hhZG93Um9vdCYmKHQgaW5zdGFuY2VvZiBTaGFkb3dSb290fHx0IGluc3RhbmNlb2YgTCh0KS5TaGFkb3dSb290KX1mdW5jdGlvbiBqKHQpe2NvbnN0e292ZXJmbG93OmUsb3ZlcmZsb3dYOm4sb3ZlcmZsb3dZOm8sZGlzcGxheTppfT1xKHQpO3JldHVybi9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbnxjbGlwLy50ZXN0KGUrbytuKSYmIVtcImlubGluZVwiLFwiY29udGVudHNcIl0uaW5jbHVkZXMoaSl9ZnVuY3Rpb24gRCh0KXtyZXR1cm5bXCJ0YWJsZVwiLFwidGRcIixcInRoXCJdLmluY2x1ZGVzKF8odCkpfWZ1bmN0aW9uIE4odCl7Y29uc3QgZT1JKCksbj1xKHQpO3JldHVyblwibm9uZVwiIT09bi50cmFuc2Zvcm18fFwibm9uZVwiIT09bi5wZXJzcGVjdGl2ZXx8ISFuLmNvbnRhaW5lclR5cGUmJlwibm9ybWFsXCIhPT1uLmNvbnRhaW5lclR5cGV8fCFlJiYhIW4uYmFja2Ryb3BGaWx0ZXImJlwibm9uZVwiIT09bi5iYWNrZHJvcEZpbHRlcnx8IWUmJiEhbi5maWx0ZXImJlwibm9uZVwiIT09bi5maWx0ZXJ8fFtcInRyYW5zZm9ybVwiLFwicGVyc3BlY3RpdmVcIixcImZpbHRlclwiXS5zb21lKCh0PT4obi53aWxsQ2hhbmdlfHxcIlwiKS5pbmNsdWRlcyh0KSkpfHxbXCJwYWludFwiLFwibGF5b3V0XCIsXCJzdHJpY3RcIixcImNvbnRlbnRcIl0uc29tZSgodD0+KG4uY29udGFpbnx8XCJcIikuaW5jbHVkZXModCkpKX1mdW5jdGlvbiBJKCl7cmV0dXJuIShcInVuZGVmaW5lZFwiPT10eXBlb2YgQ1NTfHwhQ1NTLnN1cHBvcnRzKSYmQ1NTLnN1cHBvcnRzKFwiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIixcIm5vbmVcIil9ZnVuY3Rpb24gRih0KXtyZXR1cm5bXCJodG1sXCIsXCJib2R5XCIsXCIjZG9jdW1lbnRcIl0uaW5jbHVkZXMoXyh0KSl9ZnVuY3Rpb24gcSh0KXtyZXR1cm4gTCh0KS5nZXRDb21wdXRlZFN0eWxlKHQpfWZ1bmN0aW9uIHoodCl7cmV0dXJuIE8odCk/e3Njcm9sbExlZnQ6dC5zY3JvbGxMZWZ0LHNjcm9sbFRvcDp0LnNjcm9sbFRvcH06e3Njcm9sbExlZnQ6dC5wYWdlWE9mZnNldCxzY3JvbGxUb3A6dC5wYWdlWU9mZnNldH19ZnVuY3Rpb24gVih0KXtpZihcImh0bWxcIj09PV8odCkpcmV0dXJuIHQ7Y29uc3QgZT10LmFzc2lnbmVkU2xvdHx8dC5wYXJlbnROb2RlfHxCKHQpJiZ0Lmhvc3R8fFAodCk7cmV0dXJuIEIoZSk/ZS5ob3N0OmV9ZnVuY3Rpb24gSyh0KXtjb25zdCBlPVYodCk7cmV0dXJuIEYoZSk/dC5vd25lckRvY3VtZW50P3Qub3duZXJEb2N1bWVudC5ib2R5OnQuYm9keTpNKGUpJiZqKGUpP2U6SyhlKX1mdW5jdGlvbiBIKHQsZSl7dmFyIG47dm9pZCAwPT09ZSYmKGU9W10pO2NvbnN0IG89Syh0KSxpPW89PT0obnVsbD09KG49dC5vd25lckRvY3VtZW50KT92b2lkIDA6bi5ib2R5KSxyPUwobyk7cmV0dXJuIGk/ZS5jb25jYXQocixyLnZpc3VhbFZpZXdwb3J0fHxbXSxqKG8pP286W10pOmUuY29uY2F0KG8sSChvKSl9ZnVuY3Rpb24gVyh0KXtjb25zdCBlPXEodCk7bGV0IG49cGFyc2VGbG9hdChlLndpZHRoKXx8MCxvPXBhcnNlRmxvYXQoZS5oZWlnaHQpfHwwO2NvbnN0IGk9TSh0KSxyPWk/dC5vZmZzZXRXaWR0aDpuLHM9aT90Lm9mZnNldEhlaWdodDpvLGE9bChuKSE9PXJ8fGwobykhPT1zO3JldHVybiBhJiYobj1yLG89cykse3dpZHRoOm4saGVpZ2h0Om8sJDphfX1mdW5jdGlvbiBVKHQpe3JldHVybiBPKHQpP3Q6dC5jb250ZXh0RWxlbWVudH1mdW5jdGlvbiAkKHQpe2NvbnN0IGU9VSh0KTtpZighTShlKSlyZXR1cm4gZCgxKTtjb25zdCBuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkse3dpZHRoOm8saGVpZ2h0OmksJDpyfT1XKGUpO2xldCBzPShyP2wobi53aWR0aCk6bi53aWR0aCkvbyxhPShyP2wobi5oZWlnaHQpOm4uaGVpZ2h0KS9pO3JldHVybiBzJiZOdW1iZXIuaXNGaW5pdGUocyl8fChzPTEpLGEmJk51bWJlci5pc0Zpbml0ZShhKXx8KGE9MSkse3g6cyx5OmF9fWNvbnN0IFg9ZCgwKTtmdW5jdGlvbiBZKHQpe2NvbnN0IGU9TCh0KTtyZXR1cm4gSSgpJiZlLnZpc3VhbFZpZXdwb3J0P3t4OmUudmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCx5OmUudmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wfTpYfWZ1bmN0aW9uIEcodCxlLG4sbyl7dm9pZCAwPT09ZSYmKGU9ITEpLHZvaWQgMD09PW4mJihuPSExKTtjb25zdCBpPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscj1VKHQpO2xldCBzPWQoMSk7ZSYmKG8/TyhvKSYmKHM9JChvKSk6cz0kKHQpKTtjb25zdCBhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLCEoIW58fGUmJm4hPT1MKHQpKSYmZX0ocixuLG8pP1kocik6ZCgwKTtsZXQgbD0oaS5sZWZ0K2EueCkvcy54LGM9KGkudG9wK2EueSkvcy55LHU9aS53aWR0aC9zLngsbT1pLmhlaWdodC9zLnk7aWYocil7Y29uc3QgdD1MKHIpLGU9byYmTyhvKT9MKG8pOm87bGV0IG49dC5mcmFtZUVsZW1lbnQ7Zm9yKDtuJiZvJiZlIT09dDspe2NvbnN0IHQ9JChuKSxlPW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbz1xKG4pLGk9ZS5sZWZ0KyhuLmNsaWVudExlZnQrcGFyc2VGbG9hdChvLnBhZGRpbmdMZWZ0KSkqdC54LHI9ZS50b3ArKG4uY2xpZW50VG9wK3BhcnNlRmxvYXQoby5wYWRkaW5nVG9wKSkqdC55O2wqPXQueCxjKj10LnksdSo9dC54LG0qPXQueSxsKz1pLGMrPXIsbj1MKG4pLmZyYW1lRWxlbWVudH19cmV0dXJuIEEoe3dpZHRoOnUsaGVpZ2h0Om0seDpsLHk6Y30pfWZ1bmN0aW9uIEoodCl7cmV0dXJuIEcoUCh0KSkubGVmdCt6KHQpLnNjcm9sbExlZnR9ZnVuY3Rpb24gUSh0LGUsbil7bGV0IG87aWYoXCJ2aWV3cG9ydFwiPT09ZSlvPWZ1bmN0aW9uKHQsZSl7Y29uc3Qgbj1MKHQpLG89UCh0KSxpPW4udmlzdWFsVmlld3BvcnQ7bGV0IHI9by5jbGllbnRXaWR0aCxzPW8uY2xpZW50SGVpZ2h0LGE9MCxsPTA7aWYoaSl7cj1pLndpZHRoLHM9aS5oZWlnaHQ7Y29uc3QgdD1JKCk7KCF0fHx0JiZcImZpeGVkXCI9PT1lKSYmKGE9aS5vZmZzZXRMZWZ0LGw9aS5vZmZzZXRUb3ApfXJldHVybnt3aWR0aDpyLGhlaWdodDpzLHg6YSx5Omx9fSh0LG4pO2Vsc2UgaWYoXCJkb2N1bWVudFwiPT09ZSlvPWZ1bmN0aW9uKHQpe2NvbnN0IGU9UCh0KSxuPXoodCksbz10Lm93bmVyRG9jdW1lbnQuYm9keSxpPWEoZS5zY3JvbGxXaWR0aCxlLmNsaWVudFdpZHRoLG8uc2Nyb2xsV2lkdGgsby5jbGllbnRXaWR0aCkscj1hKGUuc2Nyb2xsSGVpZ2h0LGUuY2xpZW50SGVpZ2h0LG8uc2Nyb2xsSGVpZ2h0LG8uY2xpZW50SGVpZ2h0KTtsZXQgcz0tbi5zY3JvbGxMZWZ0K0oodCk7Y29uc3QgbD0tbi5zY3JvbGxUb3A7cmV0dXJuXCJydGxcIj09PXEobykuZGlyZWN0aW9uJiYocys9YShlLmNsaWVudFdpZHRoLG8uY2xpZW50V2lkdGgpLWkpLHt3aWR0aDppLGhlaWdodDpyLHg6cyx5Omx9fShQKHQpKTtlbHNlIGlmKE8oZSkpbz1mdW5jdGlvbih0LGUpe2NvbnN0IG49Ryh0LCEwLFwiZml4ZWRcIj09PWUpLG89bi50b3ArdC5jbGllbnRUb3AsaT1uLmxlZnQrdC5jbGllbnRMZWZ0LHI9TSh0KT8kKHQpOmQoMSk7cmV0dXJue3dpZHRoOnQuY2xpZW50V2lkdGgqci54LGhlaWdodDp0LmNsaWVudEhlaWdodCpyLnkseDppKnIueCx5Om8qci55fX0oZSxuKTtlbHNle2NvbnN0IG49WSh0KTtvPXsuLi5lLHg6ZS54LW4ueCx5OmUueS1uLnl9fXJldHVybiBBKG8pfWZ1bmN0aW9uIFoodCxlKXtjb25zdCBuPVYodCk7cmV0dXJuIShuPT09ZXx8IU8obil8fEYobikpJiYoXCJmaXhlZFwiPT09cShuKS5wb3NpdGlvbnx8WihuLGUpKX1mdW5jdGlvbiB0dCh0LGUsbil7Y29uc3Qgbz1NKGUpLGk9UChlKSxyPVwiZml4ZWRcIj09PW4scz1HKHQsITAscixlKTtsZXQgYT17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfTtjb25zdCBsPWQoMCk7aWYob3x8IW8mJiFyKWlmKChcImJvZHlcIiE9PV8oZSl8fGooaSkpJiYoYT16KGUpKSxvKXtjb25zdCB0PUcoZSwhMCxyLGUpO2wueD10LngrZS5jbGllbnRMZWZ0LGwueT10LnkrZS5jbGllbnRUb3B9ZWxzZSBpJiYobC54PUooaSkpO3JldHVybnt4OnMubGVmdCthLnNjcm9sbExlZnQtbC54LHk6cy50b3ArYS5zY3JvbGxUb3AtbC55LHdpZHRoOnMud2lkdGgsaGVpZ2h0OnMuaGVpZ2h0fX1mdW5jdGlvbiBldCh0LGUpe3JldHVybiBNKHQpJiZcImZpeGVkXCIhPT1xKHQpLnBvc2l0aW9uP2U/ZSh0KTp0Lm9mZnNldFBhcmVudDpudWxsfWZ1bmN0aW9uIG50KHQsZSl7Y29uc3Qgbj1MKHQpO2lmKCFNKHQpKXJldHVybiBuO2xldCBvPWV0KHQsZSk7Zm9yKDtvJiZEKG8pJiZcInN0YXRpY1wiPT09cShvKS5wb3NpdGlvbjspbz1ldChvLGUpO3JldHVybiBvJiYoXCJodG1sXCI9PT1fKG8pfHxcImJvZHlcIj09PV8obykmJlwic3RhdGljXCI9PT1xKG8pLnBvc2l0aW9uJiYhTihvKSk/bjpvfHxmdW5jdGlvbih0KXtsZXQgZT1WKHQpO2Zvcig7TShlKSYmIUYoZSk7KXtpZihOKGUpKXJldHVybiBlO2U9VihlKX1yZXR1cm4gbnVsbH0odCl8fG59Y29uc3Qgb3Q9e2NvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0OmZ1bmN0aW9uKHQpe2xldHtyZWN0OmUsb2Zmc2V0UGFyZW50Om4sc3RyYXRlZ3k6b309dDtjb25zdCBpPU0obikscj1QKG4pO2lmKG49PT1yKXJldHVybiBlO2xldCBzPXtzY3JvbGxMZWZ0OjAsc2Nyb2xsVG9wOjB9LGE9ZCgxKTtjb25zdCBsPWQoMCk7aWYoKGl8fCFpJiZcImZpeGVkXCIhPT1vKSYmKChcImJvZHlcIiE9PV8obil8fGoocikpJiYocz16KG4pKSxNKG4pKSl7Y29uc3QgdD1HKG4pO2E9JChuKSxsLng9dC54K24uY2xpZW50TGVmdCxsLnk9dC55K24uY2xpZW50VG9wfXJldHVybnt3aWR0aDplLndpZHRoKmEueCxoZWlnaHQ6ZS5oZWlnaHQqYS55LHg6ZS54KmEueC1zLnNjcm9sbExlZnQqYS54K2wueCx5OmUueSphLnktcy5zY3JvbGxUb3AqYS55K2wueX19LGdldERvY3VtZW50RWxlbWVudDpQLGdldENsaXBwaW5nUmVjdDpmdW5jdGlvbih0KXtsZXR7ZWxlbWVudDplLGJvdW5kYXJ5Om4scm9vdEJvdW5kYXJ5Om8sc3RyYXRlZ3k6aX09dDtjb25zdCByPVsuLi5cImNsaXBwaW5nQW5jZXN0b3JzXCI9PT1uP2Z1bmN0aW9uKHQsZSl7Y29uc3Qgbj1lLmdldCh0KTtpZihuKXJldHVybiBuO2xldCBvPUgodCkuZmlsdGVyKCh0PT5PKHQpJiZcImJvZHlcIiE9PV8odCkpKSxpPW51bGw7Y29uc3Qgcj1cImZpeGVkXCI9PT1xKHQpLnBvc2l0aW9uO2xldCBzPXI/Vih0KTp0O2Zvcig7TyhzKSYmIUYocyk7KXtjb25zdCBlPXEocyksbj1OKHMpO258fFwiZml4ZWRcIiE9PWUucG9zaXRpb258fChpPW51bGwpLChyPyFuJiYhaTohbiYmXCJzdGF0aWNcIj09PWUucG9zaXRpb24mJmkmJltcImFic29sdXRlXCIsXCJmaXhlZFwiXS5pbmNsdWRlcyhpLnBvc2l0aW9uKXx8aihzKSYmIW4mJloodCxzKSk/bz1vLmZpbHRlcigodD0+dCE9PXMpKTppPWUscz1WKHMpfXJldHVybiBlLnNldCh0LG8pLG99KGUsdGhpcy5fYyk6W10uY29uY2F0KG4pLG9dLGw9clswXSxjPXIucmVkdWNlKCgodCxuKT0+e2NvbnN0IG89UShlLG4saSk7cmV0dXJuIHQudG9wPWEoby50b3AsdC50b3ApLHQucmlnaHQ9cyhvLnJpZ2h0LHQucmlnaHQpLHQuYm90dG9tPXMoby5ib3R0b20sdC5ib3R0b20pLHQubGVmdD1hKG8ubGVmdCx0LmxlZnQpLHR9KSxRKGUsbCxpKSk7cmV0dXJue3dpZHRoOmMucmlnaHQtYy5sZWZ0LGhlaWdodDpjLmJvdHRvbS1jLnRvcCx4OmMubGVmdCx5OmMudG9wfX0sZ2V0T2Zmc2V0UGFyZW50Om50LGdldEVsZW1lbnRSZWN0czphc3luYyBmdW5jdGlvbih0KXtsZXR7cmVmZXJlbmNlOmUsZmxvYXRpbmc6bixzdHJhdGVneTpvfT10O2NvbnN0IGk9dGhpcy5nZXRPZmZzZXRQYXJlbnR8fG50LHI9dGhpcy5nZXREaW1lbnNpb25zO3JldHVybntyZWZlcmVuY2U6dHQoZSxhd2FpdCBpKG4pLG8pLGZsb2F0aW5nOnt4OjAseTowLC4uLmF3YWl0IHIobil9fX0sZ2V0Q2xpZW50UmVjdHM6ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmZyb20odC5nZXRDbGllbnRSZWN0cygpKX0sZ2V0RGltZW5zaW9uczpmdW5jdGlvbih0KXtyZXR1cm4gVyh0KX0sZ2V0U2NhbGU6JCxpc0VsZW1lbnQ6Tyxpc1JUTDpmdW5jdGlvbih0KXtyZXR1cm5cInJ0bFwiPT09cSh0KS5kaXJlY3Rpb259fTtsZXQgaXQ9Y2xhc3MgZXh0ZW5kcyB0LkN1c3RvbUNvbXBvbmVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5zZXRDb21tYW5kQXBwZWFyYW5jZT10aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlLmJpbmQodGhpcyksdGhpcy5oYW5kbGVTbG90Q2hhbmdlPXRoaXMuaGFuZGxlU2xvdENoYW5nZS5iaW5kKHRoaXMpLHRoaXMuYXV0b0FkanVzdD10aGlzLmF1dG9BZGp1c3QuYmluZCh0aGlzKSx0aGlzLmlzTW92aW5nQ29tbWFuZD0hMSx0aGlzLmxhc3RWaXNpYmxlQ29tbWFuZEluZGV4PTB9c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJpcy1vcGVuXCIsXCJkZWZhdWx0LWxhYmVsLXBvc2l0aW9uXCIsXCJjdXN0b20tbWVudVwiXX1nZXQgZGVmYXVsdExhYmVsUG9zaXRpb24oKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiKSkmJnZvaWQgMCE9PXQ/dDpcInJpZ2h0XCJ9c2V0IGRlZmF1bHRMYWJlbFBvc2l0aW9uKHQpe3RoaXMuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiLHQpLHRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfWdldCBpc09wZW4oKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJpcy1vcGVuXCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcImlzLW9wZW5cIil9Z2V0IGN1c3RvbU1lbnUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiKSYmXCJmYWxzZVwiIT09dGhpcy5nZXRBdHRyaWJ1dGUoXCJjdXN0b20tbWVudVwiKX1zZXQgY3VzdG9tTWVudSh0KXt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcImN1c3RvbS1tZW51XCIsdCl9Z2V0IGNvbW1hbmRCYXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbW1hbmRCYXIpJiZ2b2lkIDAhPT10fHwodGhpcy5fY29tbWFuZEJhcj10aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jb21tYW5kLWJhclwiKSksdGhpcy5fY29tbWFuZEJhcn1nZXQgcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyKCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9wcmltYXJ5Q29tbWFuZHNDb250YWluZXIpJiZ2b2lkIDAhPT10fHwodGhpcy5fcHJpbWFyeUNvbW1hbmRzQ29udGFpbmVyPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktY29tbWFuZHNcIikpLHRoaXMuX3ByaW1hcnlDb21tYW5kc0NvbnRhaW5lcn1nZXQgcHJpbWFyeUNvbW1hbmRzU2xvdCgpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdCkmJnZvaWQgMCE9PXR8fCh0aGlzLl9wcmltYXJ5Q29tbWFuZHNTbG90PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktY29tbWFuZHMgc2xvdFwiKSksdGhpcy5fcHJpbWFyeUNvbW1hbmRzU2xvdH1nZXQgbW9yZUJ1dHRvbigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fbW9yZUJ1dHRvbikmJnZvaWQgMCE9PXR8fCh0aGlzLl9tb3JlQnV0dG9uPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUtYnV0dG9uXCIpKSx0aGlzLl9tb3JlQnV0dG9ufWdldCBzZWNvbmRhcnlDb21tYW5kc0Rpdigpe3ZhciB0O3JldHVybiBudWxsIT09KHQ9dGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXYpJiZ2b2lkIDAhPT10fHwodGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNEaXY9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5LWNvbW1hbmRzXCIpKSx0aGlzLl9zZWNvbmRhcnlDb21tYW5kc0Rpdn1nZXQgc2Vjb25kYXJ5Q29tbWFuZHNTbG90KCl7dmFyIHQ7cmV0dXJuIG51bGwhPT0odD10aGlzLl9zZWNvbmRhcnlDb21tYW5kc1Nsb3QpJiZ2b2lkIDAhPT10fHwodGhpcy5fc2Vjb25kYXJ5Q29tbWFuZHNTbG90PXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPXNlY29uZGFyeS1jb21tYW5kc11cIikpLHRoaXMuX3NlY29uZGFyeUNvbW1hbmRzU2xvdH1nZXQgY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXIoKXt2YXIgdDtyZXR1cm4gbnVsbCE9PSh0PXRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyKSYmdm9pZCAwIT09dHx8KHRoaXMuX2NvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNvbGxhcHNlZC1jb21tYW5kc1wiKSksdGhpcy5fY29sbGFwc2VkQ29tbWFuZHNDb250YWluZXJ9Z2V0IGNvbW1hbmRzKCl7cmV0dXJuWy4uLnRoaXMucHJpbWFyeUNvbW1hbmRzU2xvdC5hc3NpZ25lZEVsZW1lbnRzKCkuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgcikpLC4uLnRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNTbG90LmFzc2lnbmVkRWxlbWVudHMoKS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiByKSksLi4udGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lci5jaGlsZE5vZGVzXX1yZW5kZXIoKXtyZXR1cm5cIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbW1hbmQtYmFyJz5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJpbWFyeS1jb21tYW5kcyc+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb3JlLWJ1dHRvbicgdGl0bGU9J1NlZSBtb3JlJz5cXG4gICAgICAgICAgICAgICAgICAgIDxmbHVlbnQtc3ltYm9sLWljb24gc3ltYm9sPSdNb3JlJyBmb250LXNpemU9JzIwJz48L2ZsdWVudC1zeW1ib2wtaWNvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NlY29uZGFyeS1jb21tYW5kcyc+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPSdzZWNvbmRhcnktY29tbWFuZHMnPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbGxhcHNlZC1jb21tYW5kcyc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIn1jb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMubW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwodD0+e3Quc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5jdXN0b21NZW51P3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJtZW51aW52b2tlZFwiLHtidWJibGVzOiEwfSkpOnRoaXMudG9nZ2xlQXR0cmlidXRlKFwiaXMtb3BlblwiLCF0aGlzLmlzT3Blbil9KSksdGhpcy5wcmltYXJ5Q29tbWFuZHNTbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsdGhpcy5oYW5kbGVTbG90Q2hhbmdlKSx0aGlzLnNlY29uZGFyeUNvbW1hbmRzU2xvdC5hZGRFdmVudExpc3RlbmVyKFwic2xvdGNoYW5nZVwiLCh0PT57aWYodGhpcy5zZWNvbmRhcnlDb250YWluZXI9dGhpcy5zZWNvbmRhcnlDb21tYW5kc1Nsb3QuYXNzaWduZWROb2RlcygpWzBdLHRoaXMuc2V0TW9yZUJ1dHRvblZpc2liaWxpdHkoKSwhdGhpcy5zZWNvbmRhcnlDb250YWluZXIpcmV0dXJuO3ZhciBlPXRoaXMuc2Vjb25kYXJ5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmbHVlbnQtYXBwLWJhci1idXR0b25cIiksbj10aGlzLnNlY29uZGFyeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZmx1ZW50LWFwcC1iYXItc2VwYXJhdG9yXCIpO2NvbnN0IG89NipBcnJheS5mcm9tKGUpLnJlZHVjZSgoKHQsZSk9PnQuZm9ybWF0dGVkQWNjZWxlcmF0b3IubGVuZ3RoPmUuZm9ybWF0dGVkQWNjZWxlcmF0b3IubGVuZ3RoP3Q6ZSkpLmZvcm1hdHRlZEFjY2VsZXJhdG9yLmxlbmd0aDtlLmZvckVhY2goKHQ9Pnt0LnRvZ2dsZUF0dHJpYnV0ZShcImlzLXNlY29uZGFyeVwiLCEwKSx0LnNldEFjY2VsZXJhdG9yV2lkdGgobyl9KSksbi5mb3JFYWNoKCh0PT57dC50b2dnbGVBdHRyaWJ1dGUoXCJob3Jpem9udGFsXCIsITApfSkpfSkpLHRoaXMucGFyZW50UmVzaXplT2JzZXJ2ZXI9bmV3IFJlc2l6ZU9ic2VydmVyKCgoKT0+dGhpcy5hdXRvQWRqdXN0KCkpKSx0aGlzLnBhcmVudFJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5wYXJlbnRFbGVtZW50KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCgpPT57dGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJpcy1vcGVuXCIsITEpfSkpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0KXtzd2l0Y2godCl7Y2FzZVwiaXMtb3BlblwiOnRoaXMuc2V0SXNPcGVuKCk7YnJlYWs7Y2FzZVwiZGVmYXVsdC1sYWJlbC1wb3NpdGlvblwiOnRoaXMuc2V0TGFiZWxQb3NpdGlvbigpfX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMucGFyZW50UmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpfXNldExhYmVsUG9zaXRpb24oKXtpZihbXCJib3R0b21cIixcImNvbGxhcHNlZFwiLFwicmlnaHRcIl0uaW5jbHVkZXModGhpcy5kZWZhdWx0TGFiZWxQb3NpdGlvbikpe3ZhciB0PXRoaXMuZGVmYXVsdExhYmVsUG9zaXRpb247XCJib3R0b21cIiE9PXR8fHRoaXMuaXNPcGVufHwodD1cImNvbGxhcHNlZFwiKSx0aGlzLnByaW1hcnlDb21tYW5kcz90aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlKHQpOnNldFRpbWVvdXQoKCgpPT50aGlzLnNldENvbW1hbmRBcHBlYXJhbmNlKHQpKSw1MCl9fXNldENvbW1hbmRBcHBlYXJhbmNlKHQpe3ZhciBlO3JldHVybiBudWxsPT09KGU9dGhpcy5wcmltYXJ5Q29tbWFuZHMpfHx2b2lkIDA9PT1lfHxlLmZvckVhY2goKGU9PntlLnNldEF0dHJpYnV0ZShcImFwcGVhcmFuY2VcIix0KX0pKSwhIXRoaXMucHJpbWFyeUNvbW1hbmRzfXNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCl7Y29uc3QgdD10aGlzLnNlY29uZGFyeUNvbnRhaW5lciYmdGhpcy5zZWNvbmRhcnlDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RofHx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDt0aGlzLm1vcmVCdXR0b24uc3R5bGUuZGlzcGxheT10P1wiZmxleFwiOlwibm9uZVwifXNldElzT3Blbigpe3RoaXMuY29tbWFuZEJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsdGhpcy5pc09wZW4pLHRoaXMuaXNPcGVuP3RoaXMuX21lbnVDbGVhbnVwPWZ1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPXt9KTtjb25zdHthbmNlc3RvclNjcm9sbDppPSEwLGFuY2VzdG9yUmVzaXplOnI9ITAsZWxlbWVudFJlc2l6ZTpsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFJlc2l6ZU9ic2VydmVyLGxheW91dFNoaWZ0OmQ9XCJmdW5jdGlvblwiPT10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsYW5pbWF0aW9uRnJhbWU6dT0hMX09byxtPVUodCksaD1pfHxyP1suLi5tP0gobSk6W10sLi4uSChlKV06W107aC5mb3JFYWNoKCh0PT57aSYmdC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbix7cGFzc2l2ZTohMH0pLHImJnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG4pfSkpO2NvbnN0IHA9bSYmZD9mdW5jdGlvbih0LGUpe2xldCBuLG89bnVsbDtjb25zdCBpPVAodCk7ZnVuY3Rpb24gcigpe2NsZWFyVGltZW91dChuKSxvJiZvLmRpc2Nvbm5lY3QoKSxvPW51bGx9cmV0dXJuIGZ1bmN0aW9uIGwoZCx1KXt2b2lkIDA9PT1kJiYoZD0hMSksdm9pZCAwPT09dSYmKHU9MSkscigpO2NvbnN0e2xlZnQ6bSx0b3A6aCx3aWR0aDpwLGhlaWdodDpmfT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKGR8fGUoKSwhcHx8IWYpcmV0dXJuO2NvbnN0IHk9e3Jvb3RNYXJnaW46LWMoaCkrXCJweCBcIistYyhpLmNsaWVudFdpZHRoLShtK3ApKStcInB4IFwiKy1jKGkuY2xpZW50SGVpZ2h0LShoK2YpKStcInB4IFwiKy1jKG0pK1wicHhcIix0aHJlc2hvbGQ6YSgwLHMoMSx1KSl8fDF9O2xldCBiPSEwO2Z1bmN0aW9uIGcodCl7Y29uc3QgZT10WzBdLmludGVyc2VjdGlvblJhdGlvO2lmKGUhPT11KXtpZighYilyZXR1cm4gbCgpO2U/bCghMSxlKTpuPXNldFRpbWVvdXQoKCgpPT57bCghMSwxZS03KX0pLDEwMCl9Yj0hMX10cnl7bz1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZyx7Li4ueSxyb290Omkub3duZXJEb2N1bWVudH0pfWNhdGNoKHQpe289bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGcseSl9by5vYnNlcnZlKHQpfSghMCkscn0obSxuKTpudWxsO2xldCBmLHk9LTEsYj1udWxsO2wmJihiPW5ldyBSZXNpemVPYnNlcnZlcigodD0+e2xldFtvXT10O28mJm8udGFyZ2V0PT09bSYmYiYmKGIudW5vYnNlcnZlKGUpLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHkpLHk9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+e2ImJmIub2JzZXJ2ZShlKX0pKSksbigpfSkpLG0mJiF1JiZiLm9ic2VydmUobSksYi5vYnNlcnZlKGUpKTtsZXQgZz11P0codCk6bnVsbDtyZXR1cm4gdSYmZnVuY3Rpb24gZSgpe2NvbnN0IG89Ryh0KTshZ3x8by54PT09Zy54JiZvLnk9PT1nLnkmJm8ud2lkdGg9PT1nLndpZHRoJiZvLmhlaWdodD09PWcuaGVpZ2h0fHxuKCksZz1vLGY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpfSgpLG4oKSwoKT0+e2guZm9yRWFjaCgodD0+e2kmJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG4pLHImJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLG4pfSkpLHAmJnAoKSxiJiZiLmRpc2Nvbm5lY3QoKSxiPW51bGwsdSYmY2FuY2VsQW5pbWF0aW9uRnJhbWUoZil9fSh0aGlzLm1vcmVCdXR0b24sdGhpcy5zZWNvbmRhcnlDb21tYW5kc0Rpdix0aGlzLnVwZGF0ZU1lbnVQb3NpdGlvbi5iaW5kKHRoaXMpKTp0aGlzLl9tZW51Q2xlYW51cCYmdGhpcy5fbWVudUNsZWFudXAoKSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1oYW5kbGVTbG90Q2hhbmdlKCl7Y29uc3QgdD10aGlzLnByaW1hcnlDb21tYW5kc1Nsb3QuYXNzaWduZWROb2RlcygpO2lmKHRoaXMucHJpbWFyeUNvbW1hbmRzPXQuZmlsdGVyKCh0PT50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlwiRkxVRU5ULUFQUC1CQVItQlVUVE9OXCI9PT10Lm5vZGVOYW1lKSksIXRoaXMuaXNNb3ZpbmdDb21tYW5kKXt0aGlzLnN0eWxlLm9wYWNpdHk9XCIwXCIsdGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZT10aGlzLnByaW1hcnlDb21tYW5kcy5tYXAoKHQ9Pih7cGFyZW50OnQucGFyZW50RWxlbWVudCxzZWxmOnQscHJldmlvdXM6dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGJvdW5kczp0LmdldENsaWVudFJlY3RzKClbMF0ucmlnaHQtdGhpcy5nZXRDbGllbnRSZWN0cygpWzBdLmxlZnR9KSkpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXg9dGhpcy5wcmltYXJ5Q29tbWFuZHMubGVuZ3RoLTE7Y29uc3QgdD1zZXRJbnRlcnZhbCgoKCk9Pnt0aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlJiYoY2xlYXJJbnRlcnZhbCh0KSx0aGlzLnByaW1hcnlDb21tYW5kc1N0b3JlLmZvckVhY2godGhpcy5hdXRvQWRqdXN0KSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCksdGhpcy5zdHlsZS5vcGFjaXR5PVwiMVwiKX0pLDEwKX10aGlzLmlzTW92aW5nQ29tbWFuZD0hMSx0aGlzLnNldExhYmVsUG9zaXRpb24oKX1hdXRvQWRqdXN0KCl7dmFyIHQ7Y29uc3QgZT1udWxsIT09KHQ9dGhpcy5wcmltYXJ5Q29tbWFuZHNTdG9yZSkmJnZvaWQgMCE9PXQ/dDpbXTtpZigwPT09ZS5sZW5ndGgpcmV0dXJuO2NvbnN0IG49dGhpcy5wYXJlbnRFbGVtZW50LmdldENsaWVudFJlY3RzKClbMF0ud2lkdGgtKHRoaXMuZ2V0TGVmdCgpKzQ3KzEyKSxvPXRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXgsaT1NYXRoLm1pbihlLmxlbmd0aC0xLG8rMSkscj1lW29dLHM9ZVtpXTtvPj0wJiZyLmJvdW5kcz5uJiYodGhpcy5tb3ZlQ29tbWFuZHMoci5zZWxmLHRoaXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lciksdGhpcy5sYXN0VmlzaWJsZUNvbW1hbmRJbmRleC09MSxvPjAmJlwiRkxVRU5ULUFQUC1CQVItU0VQQVJBVE9SXCI9PT1yLnByZXZpb3VzLm5vZGVOYW1lJiZ0aGlzLm1vdmVDb21tYW5kcyhyLnByZXZpb3VzLHRoaXMsdGhpcy5jb2xsYXBzZWRDb21tYW5kc0NvbnRhaW5lcikpLGkhPT1vJiZzLmJvdW5kczxuJiYoaT4wJiZcIkZMVUVOVC1BUFAtQkFSLVNFUEFSQVRPUlwiPT09cy5wcmV2aW91cy5ub2RlTmFtZSYmdGhpcy5tb3ZlQ29tbWFuZHMocy5wcmV2aW91cyx0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLHRoaXMpLHRoaXMubW92ZUNvbW1hbmRzKHMuc2VsZix0aGlzLmNvbGxhcHNlZENvbW1hbmRzQ29udGFpbmVyLHRoaXMpLHRoaXMubGFzdFZpc2libGVDb21tYW5kSW5kZXg9aSl9Z2V0TGVmdCgpe2lmKCF0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpcmV0dXJuIDA7Y29uc3QgdD10aGlzLnBhcmVudEVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS5sZWZ0O3JldHVybiB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Q2xpZW50UmVjdHMoKVswXS5yaWdodC10fW1vdmVDb21tYW5kcyh0LGUsbil7dmFyIG87Y29uc3QgaT1lPT09dGhpcztpZih0aGlzLmlzTW92aW5nQ29tbWFuZD0hMCxlLnJlbW92ZUNoaWxkKHQpLGkpe2NvbnN0IGU9bi5maXJzdENoaWxkO24uaW5zZXJ0QmVmb3JlKHQsZSl9ZWxzZSBuLmFwcGVuZENoaWxkKHQpO3ZhciByPXtidWJibGVzOiEwLGRldGFpbDp7dHlwZTp0Lm5vZGVOYW1lLGNvbW1hbmQ6bnVsbCE9PShvPXQuZGF0YXNldC5jb21tYW5kKSYmdm9pZCAwIT09bz9vOm51bGwsY29sbGFwc2VkOml9fSxzPW5ldyBDdXN0b21FdmVudChcImNvbW1hbmRtb3ZlZFwiLHIpO3RoaXMuZGlzcGF0Y2hFdmVudChzKSx0aGlzLnRvZ2dsZUF0dHJpYnV0ZXModCxpKSx0aGlzLnNldE1vcmVCdXR0b25WaXNpYmlsaXR5KCl9dXBkYXRlTWVudVBvc2l0aW9uKCl7dmFyIHQ7KCh0LGUsbik9Pntjb25zdCBvPW5ldyBNYXAsaT17cGxhdGZvcm06b3QsLi4ubn0scj17Li4uaS5wbGF0Zm9ybSxfYzpvfTtyZXR1cm4oYXN5bmModCxlLG4pPT57Y29uc3R7cGxhY2VtZW50Om89XCJib3R0b21cIixzdHJhdGVneTppPVwiYWJzb2x1dGVcIixtaWRkbGV3YXJlOnI9W10scGxhdGZvcm06c309bixhPXIuZmlsdGVyKEJvb2xlYW4pLGw9YXdhaXQobnVsbD09cy5pc1JUTD92b2lkIDA6cy5pc1JUTChlKSk7bGV0IGM9YXdhaXQgcy5nZXRFbGVtZW50UmVjdHMoe3JlZmVyZW5jZTp0LGZsb2F0aW5nOmUsc3RyYXRlZ3k6aX0pLHt4OmQseTp1fT1rKGMsbyxsKSxtPW8saD17fSxwPTA7Zm9yKGxldCBuPTA7bjxhLmxlbmd0aDtuKyspe2NvbnN0e25hbWU6cixmbjpmfT1hW25dLHt4OnkseTpiLGRhdGE6ZyxyZXNldDp2fT1hd2FpdCBmKHt4OmQseTp1LGluaXRpYWxQbGFjZW1lbnQ6byxwbGFjZW1lbnQ6bSxzdHJhdGVneTppLG1pZGRsZXdhcmVEYXRhOmgscmVjdHM6YyxwbGF0Zm9ybTpzLGVsZW1lbnRzOntyZWZlcmVuY2U6dCxmbG9hdGluZzplfX0pO2Q9bnVsbCE9eT95OmQsdT1udWxsIT1iP2I6dSxoPXsuLi5oLFtyXTp7Li4uaFtyXSwuLi5nfX0sdiYmcDw9NTAmJihwKyssXCJvYmplY3RcIj09dHlwZW9mIHYmJih2LnBsYWNlbWVudCYmKG09di5wbGFjZW1lbnQpLHYucmVjdHMmJihjPSEwPT09di5yZWN0cz9hd2FpdCBzLmdldEVsZW1lbnRSZWN0cyh7cmVmZXJlbmNlOnQsZmxvYXRpbmc6ZSxzdHJhdGVneTppfSk6di5yZWN0cyksKHt4OmQseTp1fT1rKGMsbSxsKSkpLG49LTEpfXJldHVybnt4OmQseTp1LHBsYWNlbWVudDptLHN0cmF0ZWd5OmksbWlkZGxld2FyZURhdGE6aH19KSh0LGUsey4uLmkscGxhdGZvcm06cn0pfSkodGhpcy5tb3JlQnV0dG9uLHRoaXMuc2Vjb25kYXJ5Q29tbWFuZHNEaXYse3BsYWNlbWVudDpcImJvdHRvbS1lbmRcIixtaWRkbGV3YXJlOltFKDE2KSxSKCksKHZvaWQgMD09PXQmJih0PXt9KSx7bmFtZTpcInNoaWZ0XCIsb3B0aW9uczp0LGFzeW5jIGZuKGUpe2NvbnN0e3g6bix5Om8scGxhY2VtZW50Oml9PWUse21haW5BeGlzOnI9ITAsY3Jvc3NBeGlzOnM9ITEsbGltaXRlcjphPXtmbjp0PT57bGV0e3g6ZSx5Om59PXQ7cmV0dXJue3g6ZSx5Om59fX0sLi4ubH09cCh0LGUpLGM9e3g6bix5Om99LGQ9YXdhaXQgUyhlLGwpLHU9dihmKGkpKSxtPWIodSk7bGV0IHk9Y1ttXSxnPWNbdV07aWYocil7Y29uc3QgdD1cInlcIj09PW0/XCJib3R0b21cIjpcInJpZ2h0XCI7eT1oKHkrZFtcInlcIj09PW0/XCJ0b3BcIjpcImxlZnRcIl0seSx5LWRbdF0pfWlmKHMpe2NvbnN0IHQ9XCJ5XCI9PT11P1wiYm90dG9tXCI6XCJyaWdodFwiO2c9aChnK2RbXCJ5XCI9PT11P1widG9wXCI6XCJsZWZ0XCJdLGcsZy1kW3RdKX1jb25zdCB4PWEuZm4oey4uLmUsW21dOnksW3VdOmd9KTtyZXR1cm57Li4ueCxkYXRhOnt4OngueC1uLHk6eC55LW99fX19KV19KS50aGVuKCgoe3g6dCx5OmV9KT0+e09iamVjdC5hc3NpZ24odGhpcy5zZWNvbmRhcnlDb21tYW5kc0Rpdi5zdHlsZSx7bGVmdDpgJHt0fXB4YCx0b3A6YCR7ZX1weGB9KX0pKX10b2dnbGVBdHRyaWJ1dGVzKHQsZSl7bGV0IG47c3dpdGNoKHQubm9kZU5hbWUpe2Nhc2VcIkZMVUVOVC1BUFAtQkFSLUJVVFRPTlwiOm49XCJpcy1zZWNvbmRhcnlcIjticmVhaztjYXNlXCJGTFVFTlQtQVBQLUJBUi1TRVBBUkFUT1JcIjpuPVwiaG9yaXpvbnRhbFwifXQudG9nZ2xlQXR0cmlidXRlKG4sZSl9fTtpdC5zdHlsZXM9XCJcXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb21tYW5kLWJhciB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJpbWFyeS1jb21tYW5kcyB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJpbWFyeS1jb21tYW5kczpub3QoOmVtcHR5KSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBCdXR0b24gKi9cXG4gICAgICAgIC5tb3JlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXByaW1hcnkpO1xcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubW9yZS1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5tb3JlLWJ1dHRvbjphY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtc3VidGxlLXRlcnRpYXJ5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZmlsbC10ZXh0LXNlY29uZGFyeSk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5tb3JlLWJ1dHRvbiBmbHVlbnQtc3ltYm9sLWljb24ge1xcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBTZWNvbmRhcnkgY29tbWFuZHMgKi9cXG4gICAgICAgIC5zZWNvbmRhcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZmlsbC1taWNhLWJhc2UpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3IsIGx1bWlub3NpdHk7XFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTAwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMDBweCk7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc3Ryb2tlLWNhcmQtZGVmYXVsdCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCB2YXIoLS1zaGFkb3ctZmx5b3V0KTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWFuZC1iYXIuYWN0aXZlIC5zZWNvbmRhcnktY29tbWFuZHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29sbGFwc2VkLWNvbW1hbmRzOm5vdCg6ZW1wdHkpIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tc3Ryb2tlLWRpdmlkZXItZGVmYXVsdCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29sbGFwc2VkLWNvbW1hbmRzIGZsdWVudC1hcHAtYmFyLXNlcGFyYXRvcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgXCIsaXQ9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGkscj1hcmd1bWVudHMubGVuZ3RoLHM9cjwzP2U6bnVsbD09PW8/bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbik6bztpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlzPVJlZmxlY3QuZGVjb3JhdGUodCxlLG4sbyk7ZWxzZSBmb3IodmFyIGE9dC5sZW5ndGgtMTthPj0wO2EtLSkoaT10W2FdKSYmKHM9KHI8Mz9pKHMpOnI+Mz9pKGUsbixzKTppKGUsbikpfHxzKTtyZXR1cm4gcj4zJiZzJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHMpLHN9KFsoMCx0LmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtY29tbWFuZC1iYXJcIildLGl0KTtsZXQgcnQ9Y2xhc3MgZXh0ZW5kcyB0LkN1c3RvbUNvbXBvbmVudHtyZW5kZXIoKXtyZXR1cm5cIlwifX07cnQuc3R5bGVzPVwiXFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Ryb2tlLWRpdmlkZXItZGVmYXVsdCk7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDFweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDpob3N0KFtob3Jpem9udGFsXSkge1xcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgXCIscnQ9ZnVuY3Rpb24odCxlLG4sbyl7dmFyIGkscj1hcmd1bWVudHMubGVuZ3RoLHM9cjwzP2U6bnVsbD09PW8/bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsbik6bztpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlzPVJlZmxlY3QuZGVjb3JhdGUodCxlLG4sbyk7ZWxzZSBmb3IodmFyIGE9dC5sZW5ndGgtMTthPj0wO2EtLSkoaT10W2FdKSYmKHM9KHI8Mz9pKHMpOnI+Mz9pKGUsbixzKTppKGUsbikpfHxzKTtyZXR1cm4gcj4zJiZzJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHMpLHN9KFsoMCx0LmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtYXBwLWJhci1zZXBhcmF0b3JcIildLHJ0KX0pKCksb30pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsdWVudC1jb21tYW5kLWJhci1jb21wb25lbnQuanMubWFwIiwiIWZ1bmN0aW9uKGUsYSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9YSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5GbHVlbnRJY29uRWxlbWVudENvbXBvbmVudD1hKCk6ZS5GbHVlbnRJY29uRWxlbWVudENvbXBvbmVudD1hKCl9KHNlbGYsKCgpPT4oKCk9Pnt2YXIgZT17MjY5OmU9Pnt2YXIgYTtzZWxmLGE9KCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOihhLG4pPT57Zm9yKHZhciBsIGluIG4pZS5vKG4sbCkmJiFlLm8oYSxsKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsbCx7ZW51bWVyYWJsZTohMCxnZXQ6bltsXX0pfSxvOihlLGEpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxhKSxyOmU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sYT17fTtmdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbihhKXt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGUsYSl9fWUucihhKSxlLmQoYSx7Q3VzdG9tQ29tcG9uZW50OigpPT5sLGN1c3RvbUNvbXBvbmVudDooKT0+bn0pO2NsYXNzIGwgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCk7Y29uc3QgZT10aGlzLnJlc29sdmVUZW1wbGF0ZSgpO3RoaXMuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGUuY29udGVudC5jbG9uZU5vZGUoITApKSx0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKC4uLnRoaXMudmlydHVhbERPTSl9cmVzb2x2ZVRlbXBsYXRlKCl7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLm5hbWU7cmV0dXJuIGUgaW4gbC5fdGVtcGxhdGVzP2wuX3RlbXBsYXRlc1tlXTp0aGlzLmNyZWF0ZVRlbXBsYXRlKGUpfWNyZWF0ZVRlbXBsYXRlKGUpe3ZhciBhO2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGc9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBuLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PShhPWcuc3R5bGVzKSYmdm9pZCAwIT09YT9hOlwiXCJ9PC9zdHlsZT5gLGwuX3RlbXBsYXRlc1tlXT1uLG59Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXIoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpfX1yZXR1cm4gbC5fdGVtcGxhdGVzPXt9LGF9KSgpLGUuZXhwb3J0cz1hKCl9fSxhPXt9O2Z1bmN0aW9uIG4obCl7dmFyIGc9YVtsXTtpZih2b2lkIDAhPT1nKXJldHVybiBnLmV4cG9ydHM7dmFyIHA9YVtsXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbbF0ocCxwLmV4cG9ydHMsbikscC5leHBvcnRzfW4uZD0oZSxhKT0+e2Zvcih2YXIgbCBpbiBhKW4ubyhhLGwpJiYhbi5vKGUsbCkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGwse2VudW1lcmFibGU6ITAsZ2V0OmFbbF19KX0sbi5vPShlLGEpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxhKSxuLnI9ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBsPXt9O3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO24ucihsKSxuLmQobCx7Rmx1ZW50Rm9udEljb246KCk9PnAsRmx1ZW50SW1hZ2VJY29uOigpPT50LEZsdWVudFN5bWJvbEljb246KCk9Pmh9KTt2YXIgZT1uKDI2OSksYT1mdW5jdGlvbihlLGEsbixsKXt2YXIgZyxwPWFyZ3VtZW50cy5sZW5ndGgsaD1wPDM/YTpudWxsPT09bD9sPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxuKTpsO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKWg9UmVmbGVjdC5kZWNvcmF0ZShlLGEsbixsKTtlbHNlIGZvcih2YXIgdD1lLmxlbmd0aC0xO3Q+PTA7dC0tKShnPWVbdF0pJiYoaD0ocDwzP2coaCk6cD4zP2coYSxuLGgpOmcoYSxuKSl8fGgpO3JldHVybiBwPjMmJmgmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLG4saCksaH07Y29uc3QgZz1be25hbWU6XCJHbG9iYWxOYXZCdXR0b25cIixnbHlwaDpcImU3MDBcIn0se25hbWU6XCJXaWZpXCIsZ2x5cGg6XCJlNzAxXCJ9LHtuYW1lOlwiQmx1ZXRvb3RoXCIsZ2x5cGg6XCJlNzAyXCJ9LHtuYW1lOlwiQ29ubmVjdFwiLGdseXBoOlwiZTcwM1wifSx7bmFtZTpcIkludGVybmV0U2hhcmluZ1wiLGdseXBoOlwiZTcwNFwifSx7bmFtZTpcIlZQTlwiLGdseXBoOlwiZTcwNVwifSx7bmFtZTpcIkJyaWdodG5lc3NcIixnbHlwaDpcImU3MDZcIn0se25hbWU6XCJNYXBQaW5cIixnbHlwaDpcImU3MDdcIn0se25hbWU6XCJRdWlldEhvdXJzXCIsZ2x5cGg6XCJlNzA4XCJ9LHtuYW1lOlwiQWlycGxhbmVcIixnbHlwaDpcImU3MDlcIn0se25hbWU6XCJUYWJsZXRcIixnbHlwaDpcImU3MGFcIn0se25hbWU6XCJRdWlja05vdGVcIixnbHlwaDpcImU3MGJcIn0se25hbWU6XCJSZW1lbWJlcmVkRGV2aWNlXCIsZ2x5cGg6XCJlNzBjXCJ9LHtuYW1lOlwiQ2hldnJvbkRvd25cIixnbHlwaDpcImU3MGRcIn0se25hbWU6XCJDaGV2cm9uVXBcIixnbHlwaDpcImU3MGVcIn0se25hbWU6XCJFZGl0XCIsZ2x5cGg6XCJlNzBmXCJ9LHtuYW1lOlwiQWRkXCIsZ2x5cGg6XCJlNzEwXCJ9LHtuYW1lOlwiQ2FuY2VsXCIsZ2x5cGg6XCJlNzExXCJ9LHtuYW1lOlwiTW9yZVwiLGdseXBoOlwiZTcxMlwifSx7bmFtZTpcIlNldHRpbmdzXCIsZ2x5cGg6XCJlNzEzXCJ9LHtuYW1lOlwiVmlkZW9cIixnbHlwaDpcImU3MTRcIn0se25hbWU6XCJNYWlsXCIsZ2x5cGg6XCJlNzE1XCJ9LHtuYW1lOlwiUGVvcGxlXCIsZ2x5cGg6XCJlNzE2XCJ9LHtuYW1lOlwiUGhvbmVcIixnbHlwaDpcImU3MTdcIn0se25hbWU6XCJQaW5cIixnbHlwaDpcImU3MThcIn0se25hbWU6XCJTaG9wXCIsZ2x5cGg6XCJlNzE5XCJ9LHtuYW1lOlwiU3RvcFwiLGdseXBoOlwiZTcxYVwifSx7bmFtZTpcIkxpbmtcIixnbHlwaDpcImU3MWJcIn0se25hbWU6XCJGaWx0ZXJcIixnbHlwaDpcImU3MWNcIn0se25hbWU6XCJBbGxBcHBzXCIsZ2x5cGg6XCJlNzFkXCJ9LHtuYW1lOlwiWm9vbVwiLGdseXBoOlwiZTcxZVwifSx7bmFtZTpcIlpvb21PdXRcIixnbHlwaDpcImU3MWZcIn0se25hbWU6XCJNaWNyb3Bob25lXCIsZ2x5cGg6XCJlNzIwXCJ9LHtuYW1lOlwiU2VhcmNoXCIsZ2x5cGg6XCJlNzIxXCJ9LHtuYW1lOlwiQ2FtZXJhXCIsZ2x5cGg6XCJlNzIyXCJ9LHtuYW1lOlwiQXR0YWNoXCIsZ2x5cGg6XCJlNzIzXCJ9LHtuYW1lOlwiU2VuZFwiLGdseXBoOlwiZTcyNFwifSx7bmFtZTpcIlNlbmRGaWxsXCIsZ2x5cGg6XCJlNzI1XCJ9LHtuYW1lOlwiV2Fsa1NvbGlkXCIsZ2x5cGg6XCJlNzI2XCJ9LHtuYW1lOlwiSW5Qcml2YXRlXCIsZ2x5cGg6XCJlNzI3XCJ9LHtuYW1lOlwiRmF2b3JpdGVMaXN0XCIsZ2x5cGg6XCJlNzI4XCJ9LHtuYW1lOlwiUGFnZVNvbGlkXCIsZ2x5cGg6XCJlNzI5XCJ9LHtuYW1lOlwiRm9yd2FyZFwiLGdseXBoOlwiZTcyYVwifSx7bmFtZTpcIkJhY2tcIixnbHlwaDpcImU3MmJcIn0se25hbWU6XCJSZWZyZXNoXCIsZ2x5cGg6XCJlNzJjXCJ9LHtuYW1lOlwiU2hhcmVcIixnbHlwaDpcImU3MmRcIn0se25hbWU6XCJMb2NrXCIsZ2x5cGg6XCJlNzJlXCJ9LHtuYW1lOlwiUmVwb3J0SGFja2VkXCIsZ2x5cGg6XCJlNzMwXCJ9LHtuYW1lOlwiRU1JXCIsZ2x5cGg6XCJlNzMxXCJ9LHtuYW1lOlwiRmF2b3JpdGVTdGFyXCIsZ2x5cGg6XCJlNzM0XCJ9LHtuYW1lOlwiRmF2b3JpdGVTdGFyRmlsbFwiLGdseXBoOlwiZTczNVwifSx7bmFtZTpcIlJlYWRpbmdNb2RlXCIsZ2x5cGg6XCJlNzM2XCJ9LHtuYW1lOlwiRmF2aWNvblwiLGdseXBoOlwiZTczN1wifSx7bmFtZTpcIlJlbW92ZVwiLGdseXBoOlwiZTczOFwifSx7bmFtZTpcIkNoZWNrYm94XCIsZ2x5cGg6XCJlNzM5XCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGVcIixnbHlwaDpcImU3M2FcIn0se25hbWU6XCJDaGVja2JveEZpbGxcIixnbHlwaDpcImU3M2JcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVcIixnbHlwaDpcImU3M2NcIn0se25hbWU6XCJDaGVja2JveENvbXBvc2l0ZVJldmVyc2VkXCIsZ2x5cGg6XCJlNzNkXCJ9LHtuYW1lOlwiQ2hlY2tNYXJrXCIsZ2x5cGg6XCJlNzNlXCJ9LHtuYW1lOlwiQmFja1RvV2luZG93XCIsZ2x5cGg6XCJlNzNmXCJ9LHtuYW1lOlwiRnVsbFNjcmVlblwiLGdseXBoOlwiZTc0MFwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoTGFyZ2VyXCIsZ2x5cGg6XCJlNzQxXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hTbWFsbGVyXCIsZ2x5cGg6XCJlNzQyXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VTbWFsbFwiLGdseXBoOlwiZTc0M1wifSx7bmFtZTpcIlJlc2l6ZU1vdXNlTWVkaXVtXCIsZ2x5cGg6XCJlNzQ0XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VXaWRlXCIsZ2x5cGg6XCJlNzQ1XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VUYWxsXCIsZ2x5cGg6XCJlNzQ2XCJ9LHtuYW1lOlwiUmVzaXplTW91c2VMYXJnZVwiLGdseXBoOlwiZTc0N1wifSx7bmFtZTpcIlN3aXRjaFVzZXJcIixnbHlwaDpcImU3NDhcIn0se25hbWU6XCJQcmludFwiLGdseXBoOlwiZTc0OVwifSx7bmFtZTpcIlVwXCIsZ2x5cGg6XCJlNzRhXCJ9LHtuYW1lOlwiRG93blwiLGdseXBoOlwiZTc0YlwifSx7bmFtZTpcIk9FTVwiLGdseXBoOlwiZTc0Y1wifSx7bmFtZTpcIkRlbGV0ZVwiLGdseXBoOlwiZTc0ZFwifSx7bmFtZTpcIlNhdmVcIixnbHlwaDpcImU3NGVcIn0se25hbWU6XCJNdXRlXCIsZ2x5cGg6XCJlNzRmXCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZXCIsZ2x5cGg6XCJlNzUwXCJ9LHtuYW1lOlwiUmV0dXJuS2V5XCIsZ2x5cGg6XCJlNzUxXCJ9LHtuYW1lOlwiVXBBcnJvd1NoaWZ0S2V5XCIsZ2x5cGg6XCJlNzUyXCJ9LHtuYW1lOlwiQ2xvdWRcIixnbHlwaDpcImU3NTNcIn0se25hbWU6XCJGbGFzaGxpZ2h0XCIsZ2x5cGg6XCJlNzU0XCJ9LHtuYW1lOlwiUm90YXRpb25Mb2NrXCIsZ2x5cGg6XCJlNzU1XCJ9LHtuYW1lOlwiQ29tbWFuZFByb21wdFwiLGdseXBoOlwiZTc1NlwifSx7bmFtZTpcIlNJUE1vdmVcIixnbHlwaDpcImU3NTlcIn0se25hbWU6XCJTSVBVbmRvY2tcIixnbHlwaDpcImU3NWFcIn0se25hbWU6XCJTSVBSZWRvY2tcIixnbHlwaDpcImU3NWJcIn0se25hbWU6XCJFcmFzZVRvb2xcIixnbHlwaDpcImU3NWNcIn0se25hbWU6XCJVbmRlcnNjb3JlU3BhY2VcIixnbHlwaDpcImU3NWRcIn0se25hbWU6XCJHcmlwcGVyVG9vbFwiLGdseXBoOlwiZTc1ZVwifSx7bmFtZTpcIkRpYWxwYWRcIixnbHlwaDpcImU3NWZcIn0se25hbWU6XCJQYWdlTGVmdFwiLGdseXBoOlwiZTc2MFwifSx7bmFtZTpcIlBhZ2VSaWdodFwiLGdseXBoOlwiZTc2MVwifSx7bmFtZTpcIk11bHRpU2VsZWN0XCIsZ2x5cGg6XCJlNzYyXCJ9LHtuYW1lOlwiS2V5Ym9hcmRMZWZ0SGFuZGVkXCIsZ2x5cGg6XCJlNzYzXCJ9LHtuYW1lOlwiS2V5Ym9hcmRSaWdodEhhbmRlZFwiLGdseXBoOlwiZTc2NFwifSx7bmFtZTpcIktleWJvYXJkQ2xhc3NpY1wiLGdseXBoOlwiZTc2NVwifSx7bmFtZTpcIktleWJvYXJkU3BsaXRcIixnbHlwaDpcImU3NjZcIn0se25hbWU6XCJWb2x1bWVcIixnbHlwaDpcImU3NjdcIn0se25hbWU6XCJQbGF5XCIsZ2x5cGg6XCJlNzY4XCJ9LHtuYW1lOlwiUGF1c2VcIixnbHlwaDpcImU3NjlcIn0se25hbWU6XCJDaGV2cm9uTGVmdFwiLGdseXBoOlwiZTc2YlwifSx7bmFtZTpcIkNoZXZyb25SaWdodFwiLGdseXBoOlwiZTc2Y1wifSx7bmFtZTpcIklua2luZ1Rvb2xcIixnbHlwaDpcImU3NmRcIn0se25hbWU6XCJFbW9qaTJcIixnbHlwaDpcImU3NmVcIn0se25hbWU6XCJHcmlwcGVyQmFySG9yaXpvbnRhbFwiLGdseXBoOlwiZTc2ZlwifSx7bmFtZTpcIlN5c3RlbVwiLGdseXBoOlwiZTc3MFwifSx7bmFtZTpcIlBlcnNvbmFsaXplXCIsZ2x5cGg6XCJlNzcxXCJ9LHtuYW1lOlwiRGV2aWNlc1wiLGdseXBoOlwiZTc3MlwifSx7bmFtZTpcIlNlYXJjaEFuZEFwcHNcIixnbHlwaDpcImU3NzNcIn0se25hbWU6XCJHbG9iZVwiLGdseXBoOlwiZTc3NFwifSx7bmFtZTpcIlRpbWVMYW5ndWFnZVwiLGdseXBoOlwiZTc3NVwifSx7bmFtZTpcIkVhc2VPZkFjY2Vzc1wiLGdseXBoOlwiZTc3NlwifSx7bmFtZTpcIlVwZGF0ZVJlc3RvcmVcIixnbHlwaDpcImU3NzdcIn0se25hbWU6XCJIYW5nVXBcIixnbHlwaDpcImU3NzhcIn0se25hbWU6XCJDb250YWN0SW5mb1wiLGdseXBoOlwiZTc3OVwifSx7bmFtZTpcIlVucGluXCIsZ2x5cGg6XCJlNzdhXCJ9LHtuYW1lOlwiQ29udGFjdFwiLGdseXBoOlwiZTc3YlwifSx7bmFtZTpcIk1lbW9cIixnbHlwaDpcImU3N2NcIn0se25hbWU6XCJJbmNvbWluZ0NhbGxcIixnbHlwaDpcImU3N2VcIn0se25hbWU6XCJQYXN0ZVwiLGdseXBoOlwiZTc3ZlwifSx7bmFtZTpcIlBob25lQm9va1wiLGdseXBoOlwiZTc4MFwifSx7bmFtZTpcIkxFRExpZ2h0XCIsZ2x5cGg6XCJlNzgxXCJ9LHtuYW1lOlwiRXJyb3JcIixnbHlwaDpcImU3ODNcIn0se25hbWU6XCJHcmlwcGVyQmFyVmVydGljYWxcIixnbHlwaDpcImU3ODRcIn0se25hbWU6XCJVbmxvY2tcIixnbHlwaDpcImU3ODVcIn0se25hbWU6XCJTbGlkZXNob3dcIixnbHlwaDpcImU3ODZcIn0se25hbWU6XCJDYWxlbmRhclwiLGdseXBoOlwiZTc4N1wifSx7bmFtZTpcIkdyaXBwZXJSZXNpemVcIixnbHlwaDpcImU3ODhcIn0se25hbWU6XCJNZWdhcGhvbmVcIixnbHlwaDpcImU3ODlcIn0se25hbWU6XCJUcmltXCIsZ2x5cGg6XCJlNzhhXCJ9LHtuYW1lOlwiTmV3V2luZG93XCIsZ2x5cGg6XCJlNzhiXCJ9LHtuYW1lOlwiU2F2ZUxvY2FsXCIsZ2x5cGg6XCJlNzhjXCJ9LHtuYW1lOlwiQ29sb3JcIixnbHlwaDpcImU3OTBcIn0se25hbWU6XCJEYXRhU2Vuc2VcIixnbHlwaDpcImU3OTFcIn0se25hbWU6XCJTYXZlQXNcIixnbHlwaDpcImU3OTJcIn0se25hbWU6XCJMaWdodFwiLGdseXBoOlwiZTc5M1wifSx7bmFtZTpcIkFzcGVjdFJhdGlvXCIsZ2x5cGg6XCJlNzk5XCJ9LHtuYW1lOlwiRGF0YVNlbnNlQmFyXCIsZ2x5cGg6XCJlN2E1XCJ9LHtuYW1lOlwiUmVkb1wiLGdseXBoOlwiZTdhNlwifSx7bmFtZTpcIlVuZG9cIixnbHlwaDpcImU3YTdcIn0se25hbWU6XCJDcm9wXCIsZ2x5cGg6XCJlN2E4XCJ9LHtuYW1lOlwiT3BlbldpdGhcIixnbHlwaDpcImU3YWNcIn0se25hbWU6XCJSb3RhdGVcIixnbHlwaDpcImU3YWRcIn0se25hbWU6XCJSZWRFeWVcIixnbHlwaDpcImU3YjNcIn0se25hbWU6XCJTZXRsb2NrU2NyZWVuXCIsZ2x5cGg6XCJlN2I1XCJ9LHtuYW1lOlwiTWFwUGluMlwiLGdseXBoOlwiZTdiN1wifSx7bmFtZTpcIlBhY2thZ2VcIixnbHlwaDpcImU3YjhcIn0se25hbWU6XCJXYXJuaW5nXCIsZ2x5cGg6XCJlN2JhXCJ9LHtuYW1lOlwiUmVhZGluZ0xpc3RcIixnbHlwaDpcImU3YmNcIn0se25hbWU6XCJFZHVjYXRpb25cIixnbHlwaDpcImU3YmVcIn0se25hbWU6XCJTaG9wcGluZ0NhcnRcIixnbHlwaDpcImU3YmZcIn0se25hbWU6XCJUcmFpblwiLGdseXBoOlwiZTdjMFwifSx7bmFtZTpcIkZsYWdcIixnbHlwaDpcImU3YzFcIn0se25hbWU6XCJNb3ZlXCIsZ2x5cGg6XCJlN2MyXCJ9LHtuYW1lOlwiUGFnZVwiLGdseXBoOlwiZTdjM1wifSx7bmFtZTpcIlRhc2tWaWV3XCIsZ2x5cGg6XCJlN2M0XCJ9LHtuYW1lOlwiQnJvd3NlUGhvdG9zXCIsZ2x5cGg6XCJlN2M1XCJ9LHtuYW1lOlwiSGFsZlN0YXJMZWZ0XCIsZ2x5cGg6XCJlN2M2XCJ9LHtuYW1lOlwiSGFsZlN0YXJSaWdodFwiLGdseXBoOlwiZTdjN1wifSx7bmFtZTpcIlJlY29yZFwiLGdseXBoOlwiZTdjOFwifSx7bmFtZTpcIlRvdWNoUG9pbnRlclwiLGdseXBoOlwiZTdjOVwifSx7bmFtZTpcIkxhbmdKUE5cIixnbHlwaDpcImU3ZGVcIn0se25hbWU6XCJGZXJyeVwiLGdseXBoOlwiZTdlM1wifSx7bmFtZTpcIkhpZ2hsaWdodFwiLGdseXBoOlwiZTdlNlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlck5vdGlmaWNhdGlvblwiLGdseXBoOlwiZTdlN1wifSx7bmFtZTpcIlBvd2VyQnV0dG9uXCIsZ2x5cGg6XCJlN2U4XCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hOYXJyb3dlclwiLGdseXBoOlwiZTdlYVwifSx7bmFtZTpcIlJlc2l6ZVRvdWNoU2hvcnRlclwiLGdseXBoOlwiZTdlYlwifSx7bmFtZTpcIkRyaXZpbmdNb2RlXCIsZ2x5cGg6XCJlN2VjXCJ9LHtuYW1lOlwiUmluZ2VyU2lsZW50XCIsZ2x5cGg6XCJlN2VkXCJ9LHtuYW1lOlwiT3RoZXJVc2VyXCIsZ2x5cGg6XCJlN2VlXCJ9LHtuYW1lOlwiQWRtaW5cIixnbHlwaDpcImU3ZWZcIn0se25hbWU6XCJDQ1wiLGdseXBoOlwiZTdmMFwifSx7bmFtZTpcIlNEQ2FyZFwiLGdseXBoOlwiZTdmMVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkaW5nXCIsZ2x5cGg6XCJlN2YyXCJ9LHtuYW1lOlwiU2V0dGluZ3NEaXNwbGF5U291bmRcIixnbHlwaDpcImU3ZjNcIn0se25hbWU6XCJUVk1vbml0b3JcIixnbHlwaDpcImU3ZjRcIn0se25hbWU6XCJTcGVha2Vyc1wiLGdseXBoOlwiZTdmNVwifSx7bmFtZTpcIkhlYWRwaG9uZVwiLGdseXBoOlwiZTdmNlwifSx7bmFtZTpcIkRldmljZUxhcHRvcFBpY1wiLGdseXBoOlwiZTdmN1wifSx7bmFtZTpcIkRldmljZUxhcHRvcE5vUGljXCIsZ2x5cGg6XCJlN2Y4XCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvclJpZ2h0UGljXCIsZ2x5cGg6XCJlN2Y5XCJ9LHtuYW1lOlwiRGV2aWNlTW9uaXRvckxlZnRQaWNcIixnbHlwaDpcImU3ZmFcIn0se25hbWU6XCJEZXZpY2VNb25pdG9yTm9QaWNcIixnbHlwaDpcImU3ZmJcIn0se25hbWU6XCJHYW1lXCIsZ2x5cGg6XCJlN2ZjXCJ9LHtuYW1lOlwiSG9yaXpvbnRhbFRhYktleVwiLGdseXBoOlwiZTdmZFwifSx7bmFtZTpcIlN0cmVldHNpZGVTcGxpdE1pbmltaXplXCIsZ2x5cGg6XCJlODAyXCJ9LHtuYW1lOlwiU3RyZWV0c2lkZVNwbGl0RXhwYW5kXCIsZ2x5cGg6XCJlODAzXCJ9LHtuYW1lOlwiQ2FyXCIsZ2x5cGg6XCJlODA0XCJ9LHtuYW1lOlwiV2Fsa1wiLGdseXBoOlwiZTgwNVwifSx7bmFtZTpcIkJ1c1wiLGdseXBoOlwiZTgwNlwifSx7bmFtZTpcIlRpbHRVcFwiLGdseXBoOlwiZTgwOVwifSx7bmFtZTpcIlRpbHREb3duXCIsZ2x5cGg6XCJlODBhXCJ9LHtuYW1lOlwiQ2FsbENvbnRyb2xcIixnbHlwaDpcImU4MGJcIn0se25hbWU6XCJSb3RhdGVNYXBSaWdodFwiLGdseXBoOlwiZTgwY1wifSx7bmFtZTpcIlJvdGF0ZU1hcExlZnRcIixnbHlwaDpcImU4MGRcIn0se25hbWU6XCJIb21lXCIsZ2x5cGg6XCJlODBmXCJ9LHtuYW1lOlwiUGFya2luZ0xvY2F0aW9uXCIsZ2x5cGg6XCJlODExXCJ9LHtuYW1lOlwiTWFwQ29tcGFzc1RvcFwiLGdseXBoOlwiZTgxMlwifSx7bmFtZTpcIk1hcENvbXBhc3NCb3R0b21cIixnbHlwaDpcImU4MTNcIn0se25hbWU6XCJJbmNpZGVudFRyaWFuZ2xlXCIsZ2x5cGg6XCJlODE0XCJ9LHtuYW1lOlwiVG91Y2hcIixnbHlwaDpcImU4MTVcIn0se25hbWU6XCJNYXBEaXJlY3Rpb25zXCIsZ2x5cGg6XCJlODE2XCJ9LHtuYW1lOlwiU3RhcnRQb2ludFwiLGdseXBoOlwiZTgxOVwifSx7bmFtZTpcIlN0b3BQb2ludFwiLGdseXBoOlwiZTgxYVwifSx7bmFtZTpcIkVuZFBvaW50XCIsZ2x5cGg6XCJlODFiXCJ9LHtuYW1lOlwiSGlzdG9yeVwiLGdseXBoOlwiZTgxY1wifSx7bmFtZTpcIkxvY2F0aW9uXCIsZ2x5cGg6XCJlODFkXCJ9LHtuYW1lOlwiTWFwTGF5ZXJzXCIsZ2x5cGg6XCJlODFlXCJ9LHtuYW1lOlwiQWNjaWRlbnRcIixnbHlwaDpcImU4MWZcIn0se25hbWU6XCJXb3JrXCIsZ2x5cGg6XCJlODIxXCJ9LHtuYW1lOlwiQ29uc3RydWN0aW9uXCIsZ2x5cGg6XCJlODIyXCJ9LHtuYW1lOlwiUmVjZW50XCIsZ2x5cGg6XCJlODIzXCJ9LHtuYW1lOlwiQmFua1wiLGdseXBoOlwiZTgyNVwifSx7bmFtZTpcIkRvd25sb2FkTWFwXCIsZ2x5cGg6XCJlODI2XCJ9LHtuYW1lOlwiSW5raW5nVG9vbEZpbGwyXCIsZ2x5cGg6XCJlODI5XCJ9LHtuYW1lOlwiSGlnaGxpZ2h0RmlsbDJcIixnbHlwaDpcImU4MmFcIn0se25hbWU6XCJFcmFzZVRvb2xGaWxsXCIsZ2x5cGg6XCJlODJiXCJ9LHtuYW1lOlwiRXJhc2VUb29sRmlsbDJcIixnbHlwaDpcImU4MmNcIn0se25hbWU6XCJEaWN0aW9uYXJ5XCIsZ2x5cGg6XCJlODJkXCJ9LHtuYW1lOlwiRGljdGlvbmFyeUFkZFwiLGdseXBoOlwiZTgyZVwifSx7bmFtZTpcIlRvb2xUaXBcIixnbHlwaDpcImU4MmZcIn0se25hbWU6XCJDaHJvbWVCYWNrXCIsZ2x5cGg6XCJlODMwXCJ9LHtuYW1lOlwiUHJvdmlzaW9uaW5nUGFja2FnZVwiLGdseXBoOlwiZTgzNVwifSx7bmFtZTpcIkFkZFJlbW90ZURldmljZVwiLGdseXBoOlwiZTgzNlwifSx7bmFtZTpcIkZvbGRlck9wZW5cIixnbHlwaDpcImU4MzhcIn0se25hbWU6XCJFdGhlcm5ldFwiLGdseXBoOlwiZTgzOVwifSx7bmFtZTpcIlNoYXJlQnJvYWRiYW5kXCIsZ2x5cGg6XCJlODNhXCJ9LHtuYW1lOlwiRGlyZWN0QWNjZXNzXCIsZ2x5cGg6XCJlODNiXCJ9LHtuYW1lOlwiRGlhbFVwXCIsZ2x5cGg6XCJlODNjXCJ9LHtuYW1lOlwiRGVmZW5kZXJBcHBcIixnbHlwaDpcImU4M2RcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJlODNlXCJ9LHtuYW1lOlwiQmF0dGVyeTEwXCIsZ2x5cGg6XCJlODNmXCJ9LHtuYW1lOlwiUGlubmVkXCIsZ2x5cGg6XCJlODQwXCJ9LHtuYW1lOlwiUGluRmlsbFwiLGdseXBoOlwiZTg0MVwifSx7bmFtZTpcIlBpbm5lZEZpbGxcIixnbHlwaDpcImU4NDJcIn0se25hbWU6XCJQZXJpb2RLZXlcIixnbHlwaDpcImU4NDNcIn0se25hbWU6XCJQdW5jS2V5XCIsZ2x5cGg6XCJlODQ0XCJ9LHtuYW1lOlwiUmV2VG9nZ2xlS2V5XCIsZ2x5cGg6XCJlODQ1XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUxXCIsZ2x5cGg6XCJlODQ2XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUyXCIsZ2x5cGg6XCJlODQ3XCJ9LHtuYW1lOlwiTGVmdFF1b3RlXCIsZ2x5cGg6XCJlODQ4XCJ9LHtuYW1lOlwiUmlnaHRRdW90ZVwiLGdseXBoOlwiZTg0OVwifSx7bmFtZTpcIkRvd25TaGlmdEtleVwiLGdseXBoOlwiZTg0YVwifSx7bmFtZTpcIlVwU2hpZnRLZXlcIixnbHlwaDpcImU4NGJcIn0se25hbWU6XCJQdW5jS2V5MFwiLGdseXBoOlwiZTg0Y1wifSx7bmFtZTpcIlB1bmNLZXlMZWZ0Qm90dG9tXCIsZ2x5cGg6XCJlODRkXCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUzXCIsZ2x5cGg6XCJlODRlXCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWU0XCIsZ2x5cGg6XCJlODRmXCJ9LHtuYW1lOlwiQmF0dGVyeTBcIixnbHlwaDpcImU4NTBcIn0se25hbWU6XCJCYXR0ZXJ5MVwiLGdseXBoOlwiZTg1MVwifSx7bmFtZTpcIkJhdHRlcnkyXCIsZ2x5cGg6XCJlODUyXCJ9LHtuYW1lOlwiQmF0dGVyeTNcIixnbHlwaDpcImU4NTNcIn0se25hbWU6XCJCYXR0ZXJ5NFwiLGdseXBoOlwiZTg1NFwifSx7bmFtZTpcIkJhdHRlcnk1XCIsZ2x5cGg6XCJlODU1XCJ9LHtuYW1lOlwiQmF0dGVyeTZcIixnbHlwaDpcImU4NTZcIn0se25hbWU6XCJCYXR0ZXJ5N1wiLGdseXBoOlwiZTg1N1wifSx7bmFtZTpcIkJhdHRlcnk4XCIsZ2x5cGg6XCJlODU4XCJ9LHtuYW1lOlwiQmF0dGVyeTlcIixnbHlwaDpcImU4NTlcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJlODVhXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZTg1YlwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzJcIixnbHlwaDpcImU4NWNcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJlODVkXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZTg1ZVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzVcIixnbHlwaDpcImU4NWZcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJlODYwXCJ9LHtuYW1lOlwiQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZTg2MVwifSx7bmFtZTpcIkJhdHRlcnlDaGFyZ2luZzhcIixnbHlwaDpcImU4NjJcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIwXCIsZ2x5cGg6XCJlODYzXCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyMVwiLGdseXBoOlwiZTg2NFwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjJcIixnbHlwaDpcImU4NjVcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIzXCIsZ2x5cGg6XCJlODY2XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyNFwiLGdseXBoOlwiZTg2N1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjVcIixnbHlwaDpcImU4NjhcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXI2XCIsZ2x5cGg6XCJlODY5XCJ9LHtuYW1lOlwiQmF0dGVyeVNhdmVyN1wiLGdseXBoOlwiZTg2YVwifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjhcIixnbHlwaDpcImU4NmJcIn0se25hbWU6XCJTaWduYWxCYXJzMVwiLGdseXBoOlwiZTg2Y1wifSx7bmFtZTpcIlNpZ25hbEJhcnMyXCIsZ2x5cGg6XCJlODZkXCJ9LHtuYW1lOlwiU2lnbmFsQmFyczNcIixnbHlwaDpcImU4NmVcIn0se25hbWU6XCJTaWduYWxCYXJzNFwiLGdseXBoOlwiZTg2ZlwifSx7bmFtZTpcIlNpZ25hbEJhcnM1XCIsZ2x5cGg6XCJlODcwXCJ9LHtuYW1lOlwiU2lnbmFsTm90Q29ubmVjdGVkXCIsZ2x5cGg6XCJlODcxXCJ9LHtuYW1lOlwiV2lmaTFcIixnbHlwaDpcImU4NzJcIn0se25hbWU6XCJXaWZpMlwiLGdseXBoOlwiZTg3M1wifSx7bmFtZTpcIldpZmkzXCIsZ2x5cGg6XCJlODc0XCJ9LHtuYW1lOlwiTW9iU0lNTG9ja1wiLGdseXBoOlwiZTg3NVwifSx7bmFtZTpcIk1vYlNJTU1pc3NpbmdcIixnbHlwaDpcImU4NzZcIn0se25hbWU6XCJWaWJyYXRlXCIsZ2x5cGg6XCJlODc3XCJ9LHtuYW1lOlwiUm9hbWluZ0ludGVybmF0aW9uYWxcIixnbHlwaDpcImU4NzhcIn0se25hbWU6XCJSb2FtaW5nRG9tZXN0aWNcIixnbHlwaDpcImU4NzlcIn0se25hbWU6XCJDYWxsRm9yd2FyZEludGVybmF0aW9uYWxcIixnbHlwaDpcImU4N2FcIn0se25hbWU6XCJDYWxsRm9yd2FyZFJvYW1pbmdcIixnbHlwaDpcImU4N2JcIn0se25hbWU6XCJKcG5Sb21hbmppXCIsZ2x5cGg6XCJlODdjXCJ9LHtuYW1lOlwiSnBuUm9tYW5qaUxvY2tcIixnbHlwaDpcImU4N2RcIn0se25hbWU6XCJKcG5Sb21hbmppU2hpZnRcIixnbHlwaDpcImU4N2VcIn0se25hbWU6XCJKcG5Sb21hbmppU2hpZnRMb2NrXCIsZ2x5cGg6XCJlODdmXCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyXCIsZ2x5cGg6XCJlODgwXCJ9LHtuYW1lOlwiU3RhdHVzRGF0YVRyYW5zZmVyVlBOXCIsZ2x5cGg6XCJlODgxXCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTJcIixnbHlwaDpcImU4ODJcIn0se25hbWU6XCJTdGF0dXNEdWFsU0lNMlZQTlwiLGdseXBoOlwiZTg4M1wifSx7bmFtZTpcIlN0YXR1c0R1YWxTSU0xXCIsZ2x5cGg6XCJlODg0XCJ9LHtuYW1lOlwiU3RhdHVzRHVhbFNJTTFWUE5cIixnbHlwaDpcImU4ODVcIn0se25hbWU6XCJTdGF0dXNTR0xURVwiLGdseXBoOlwiZTg4NlwifSx7bmFtZTpcIlN0YXR1c1NHTFRFQ2VsbFwiLGdseXBoOlwiZTg4N1wifSx7bmFtZTpcIlN0YXR1c1NHTFRFRGF0YVZQTlwiLGdseXBoOlwiZTg4OFwifSx7bmFtZTpcIlN0YXR1c1ZQTlwiLGdseXBoOlwiZTg4OVwifSx7bmFtZTpcIldpZmlIb3RzcG90XCIsZ2x5cGg6XCJlODhhXCJ9LHtuYW1lOlwiTGFuZ3VhZ2VLb3JcIixnbHlwaDpcImU4OGJcIn0se25hbWU6XCJMYW5ndWFnZUNodFwiLGdseXBoOlwiZTg4Y1wifSx7bmFtZTpcIkxhbmd1YWdlQ2hzXCIsZ2x5cGg6XCJlODhkXCJ9LHtuYW1lOlwiVVNCXCIsZ2x5cGg6XCJlODhlXCJ9LHtuYW1lOlwiSW5raW5nVG9vbEZpbGxcIixnbHlwaDpcImU4OGZcIn0se25hbWU6XCJWaWV3XCIsZ2x5cGg6XCJlODkwXCJ9LHtuYW1lOlwiSGlnaGxpZ2h0RmlsbFwiLGdseXBoOlwiZTg5MVwifSx7bmFtZTpcIlByZXZpb3VzXCIsZ2x5cGg6XCJlODkyXCJ9LHtuYW1lOlwiTmV4dFwiLGdseXBoOlwiZTg5M1wifSx7bmFtZTpcIkNsZWFyXCIsZ2x5cGg6XCJlODk0XCJ9LHtuYW1lOlwiU3luY1wiLGdseXBoOlwiZTg5NVwifSx7bmFtZTpcIkRvd25sb2FkXCIsZ2x5cGg6XCJlODk2XCJ9LHtuYW1lOlwiSGVscFwiLGdseXBoOlwiZTg5N1wifSx7bmFtZTpcIlVwbG9hZFwiLGdseXBoOlwiZTg5OFwifSx7bmFtZTpcIkVtb2ppXCIsZ2x5cGg6XCJlODk5XCJ9LHtuYW1lOlwiVHdvUGFnZVwiLGdseXBoOlwiZTg5YVwifSx7bmFtZTpcIkxlYXZlQ2hhdFwiLGdseXBoOlwiZTg5YlwifSx7bmFtZTpcIk1haWxGb3J3YXJkXCIsZ2x5cGg6XCJlODljXCJ9LHtuYW1lOlwiUm90YXRlQ2FtZXJhXCIsZ2x5cGg6XCJlODllXCJ9LHtuYW1lOlwiQ2xvc2VQYW5lXCIsZ2x5cGg6XCJlODlmXCJ9LHtuYW1lOlwiT3BlblBhbmVcIixnbHlwaDpcImU4YTBcIn0se25hbWU6XCJQcmV2aWV3TGlua1wiLGdseXBoOlwiZThhMVwifSx7bmFtZTpcIkF0dGFjaENhbWVyYVwiLGdseXBoOlwiZThhMlwifSx7bmFtZTpcIlpvb21JblwiLGdseXBoOlwiZThhM1wifSx7bmFtZTpcIkJvb2ttYXJrc1wiLGdseXBoOlwiZThhNFwifSx7bmFtZTpcIkRvY3VtZW50XCIsZ2x5cGg6XCJlOGE1XCJ9LHtuYW1lOlwiUHJvdGVjdGVkRG9jdW1lbnRcIixnbHlwaDpcImU4YTZcIn0se25hbWU6XCJPcGVuSW5OZXdXaW5kb3dcIixnbHlwaDpcImU4YTdcIn0se25hbWU6XCJNYWlsRmlsbFwiLGdseXBoOlwiZThhOFwifSx7bmFtZTpcIlZpZXdBbGxcIixnbHlwaDpcImU4YTlcIn0se25hbWU6XCJWaWRlb0NoYXRcIixnbHlwaDpcImU4YWFcIn0se25hbWU6XCJTd2l0Y2hcIixnbHlwaDpcImU4YWJcIn0se25hbWU6XCJSZW5hbWVcIixnbHlwaDpcImU4YWNcIn0se25hbWU6XCJHb1wiLGdseXBoOlwiZThhZFwifSx7bmFtZTpcIlN1cmZhY2VIdWJcIixnbHlwaDpcImU4YWVcIn0se25hbWU6XCJSZW1vdGVcIixnbHlwaDpcImU4YWZcIn0se25hbWU6XCJDbGlja1wiLGdseXBoOlwiZThiMFwifSx7bmFtZTpcIlNodWZmbGVcIixnbHlwaDpcImU4YjFcIn0se25hbWU6XCJNb3ZpZXNcIixnbHlwaDpcImU4YjJcIn0se25hbWU6XCJTZWxlY3RBbGxcIixnbHlwaDpcImU4YjNcIn0se25hbWU6XCJPcmllbnRhdGlvblwiLGdseXBoOlwiZThiNFwifSx7bmFtZTpcIkltcG9ydFwiLGdseXBoOlwiZThiNVwifSx7bmFtZTpcIkltcG9ydEFsbFwiLGdseXBoOlwiZThiNlwifSx7bmFtZTpcIkZvbGRlclwiLGdseXBoOlwiZThiN1wifSx7bmFtZTpcIldlYmNhbVwiLGdseXBoOlwiZThiOFwifSx7bmFtZTpcIlBpY3R1cmVcIixnbHlwaDpcImU4YjlcIn0se25hbWU6XCJDYXB0aW9uXCIsZ2x5cGg6XCJlOGJhXCJ9LHtuYW1lOlwiQ2hyb21lQ2xvc2VcIixnbHlwaDpcImU4YmJcIn0se25hbWU6XCJTaG93UmVzdWx0c1wiLGdseXBoOlwiZThiY1wifSx7bmFtZTpcIk1lc3NhZ2VcIixnbHlwaDpcImU4YmRcIn0se25hbWU6XCJMZWFmXCIsZ2x5cGg6XCJlOGJlXCJ9LHtuYW1lOlwiQ2FsZW5kYXJEYXlcIixnbHlwaDpcImU4YmZcIn0se25hbWU6XCJDYWxlbmRhcldlZWtcIixnbHlwaDpcImU4YzBcIn0se25hbWU6XCJDaGFyYWN0ZXJzXCIsZ2x5cGg6XCJlOGMxXCJ9LHtuYW1lOlwiTWFpbFJlcGx5QWxsXCIsZ2x5cGg6XCJlOGMyXCJ9LHtuYW1lOlwiUmVhZFwiLGdseXBoOlwiZThjM1wifSx7bmFtZTpcIlNob3dCY2NcIixnbHlwaDpcImU4YzRcIn0se25hbWU6XCJIaWRlQmNjXCIsZ2x5cGg6XCJlOGM1XCJ9LHtuYW1lOlwiQ3V0XCIsZ2x5cGg6XCJlOGM2XCJ9LHtuYW1lOlwiUGF5bWVudENhcmRcIixnbHlwaDpcImU4YzdcIn0se25hbWU6XCJDb3B5XCIsZ2x5cGg6XCJlOGM4XCJ9LHtuYW1lOlwiSW1wb3J0YW50XCIsZ2x5cGg6XCJlOGM5XCJ9LHtuYW1lOlwiTWFpbFJlcGx5XCIsZ2x5cGg6XCJlOGNhXCJ9LHtuYW1lOlwiU29ydFwiLGdseXBoOlwiZThjYlwifSx7bmFtZTpcIk1vYmlsZVRhYmxldFwiLGdseXBoOlwiZThjY1wifSx7bmFtZTpcIkRpc2Nvbm5lY3REcml2ZVwiLGdseXBoOlwiZThjZFwifSx7bmFtZTpcIk1hcERyaXZlXCIsZ2x5cGg6XCJlOGNlXCJ9LHtuYW1lOlwiQ29udGFjdFByZXNlbmNlXCIsZ2x5cGg6XCJlOGNmXCJ9LHtuYW1lOlwiUHJpb3JpdHlcIixnbHlwaDpcImU4ZDBcIn0se25hbWU6XCJHb3RvVG9kYXlcIixnbHlwaDpcImU4ZDFcIn0se25hbWU6XCJGb250XCIsZ2x5cGg6XCJlOGQyXCJ9LHtuYW1lOlwiRm9udENvbG9yXCIsZ2x5cGg6XCJlOGQzXCJ9LHtuYW1lOlwiQ29udGFjdDJcIixnbHlwaDpcImU4ZDRcIn0se25hbWU6XCJGb2xkZXJGaWxsXCIsZ2x5cGg6XCJlOGQ1XCJ9LHtuYW1lOlwiQXVkaW9cIixnbHlwaDpcImU4ZDZcIn0se25hbWU6XCJQZXJtaXNzaW9uc1wiLGdseXBoOlwiZThkN1wifSx7bmFtZTpcIkRpc2FibGVVcGRhdGVzXCIsZ2x5cGg6XCJlOGQ4XCJ9LHtuYW1lOlwiVW5mYXZvcml0ZVwiLGdseXBoOlwiZThkOVwifSx7bmFtZTpcIk9wZW5Mb2NhbFwiLGdseXBoOlwiZThkYVwifSx7bmFtZTpcIkl0YWxpY1wiLGdseXBoOlwiZThkYlwifSx7bmFtZTpcIlVuZGVybGluZVwiLGdseXBoOlwiZThkY1wifSx7bmFtZTpcIkJvbGRcIixnbHlwaDpcImU4ZGRcIn0se25hbWU6XCJNb3ZlVG9Gb2xkZXJcIixnbHlwaDpcImU4ZGVcIn0se25hbWU6XCJMaWtlRGlzbGlrZVwiLGdseXBoOlwiZThkZlwifSx7bmFtZTpcIkRpc2xpa2VcIixnbHlwaDpcImU4ZTBcIn0se25hbWU6XCJMaWtlXCIsZ2x5cGg6XCJlOGUxXCJ9LHtuYW1lOlwiQWxpZ25SaWdodFwiLGdseXBoOlwiZThlMlwifSx7bmFtZTpcIkFsaWduQ2VudGVyXCIsZ2x5cGg6XCJlOGUzXCJ9LHtuYW1lOlwiQWxpZ25MZWZ0XCIsZ2x5cGg6XCJlOGU0XCJ9LHtuYW1lOlwiT3BlbkZpbGVcIixnbHlwaDpcImU4ZTVcIn0se25hbWU6XCJDbGVhclNlbGVjdGlvblwiLGdseXBoOlwiZThlNlwifSx7bmFtZTpcIkZvbnREZWNyZWFzZVwiLGdseXBoOlwiZThlN1wifSx7bmFtZTpcIkZvbnRJbmNyZWFzZVwiLGdseXBoOlwiZThlOFwifSx7bmFtZTpcIkZvbnRTaXplXCIsZ2x5cGg6XCJlOGU5XCJ9LHtuYW1lOlwiQ2VsbFBob25lXCIsZ2x5cGg6XCJlOGVhXCJ9LHtuYW1lOlwiUmVzaGFyZVwiLGdseXBoOlwiZThlYlwifSx7bmFtZTpcIlRhZ1wiLGdseXBoOlwiZThlY1wifSx7bmFtZTpcIlJlcGVhdE9uZVwiLGdseXBoOlwiZThlZFwifSx7bmFtZTpcIlJlcGVhdEFsbFwiLGdseXBoOlwiZThlZVwifSx7bmFtZTpcIkNhbGN1bGF0b3JcIixnbHlwaDpcImU4ZWZcIn0se25hbWU6XCJEaXJlY3Rpb25zXCIsZ2x5cGg6XCJlOGYwXCJ9LHtuYW1lOlwiTGlicmFyeVwiLGdseXBoOlwiZThmMVwifSx7bmFtZTpcIkNoYXRCdWJibGVzXCIsZ2x5cGg6XCJlOGYyXCJ9LHtuYW1lOlwiUG9zdFVwZGF0ZVwiLGdseXBoOlwiZThmM1wifSx7bmFtZTpcIk5ld0ZvbGRlclwiLGdseXBoOlwiZThmNFwifSx7bmFtZTpcIkNhbGVuZGFyUmVwbHlcIixnbHlwaDpcImU4ZjVcIn0se25hbWU6XCJVbnN5bmNGb2xkZXJcIixnbHlwaDpcImU4ZjZcIn0se25hbWU6XCJTeW5jRm9sZGVyXCIsZ2x5cGg6XCJlOGY3XCJ9LHtuYW1lOlwiQmxvY2tDb250YWN0XCIsZ2x5cGg6XCJlOGY4XCJ9LHtuYW1lOlwiU3dpdGNoQXBwc1wiLGdseXBoOlwiZThmOVwifSx7bmFtZTpcIkFkZEZyaWVuZFwiLGdseXBoOlwiZThmYVwifSx7bmFtZTpcIkFjY2VwdFwiLGdseXBoOlwiZThmYlwifSx7bmFtZTpcIkdvVG9TdGFydFwiLGdseXBoOlwiZThmY1wifSx7bmFtZTpcIkJ1bGxldGVkTGlzdFwiLGdseXBoOlwiZThmZFwifSx7bmFtZTpcIlNjYW5cIixnbHlwaDpcImU4ZmVcIn0se25hbWU6XCJQcmV2aWV3XCIsZ2x5cGg6XCJlOGZmXCJ9LHtuYW1lOlwiR3JvdXBcIixnbHlwaDpcImU5MDJcIn0se25hbWU6XCJaZXJvQmFyc1wiLGdseXBoOlwiZTkwNFwifSx7bmFtZTpcIk9uZUJhclwiLGdseXBoOlwiZTkwNVwifSx7bmFtZTpcIlR3b0JhcnNcIixnbHlwaDpcImU5MDZcIn0se25hbWU6XCJUaHJlZUJhcnNcIixnbHlwaDpcImU5MDdcIn0se25hbWU6XCJGb3VyQmFyc1wiLGdseXBoOlwiZTkwOFwifSx7bmFtZTpcIldvcmxkXCIsZ2x5cGg6XCJlOTA5XCJ9LHtuYW1lOlwiQ29tbWVudFwiLGdseXBoOlwiZTkwYVwifSx7bmFtZTpcIk11c2ljSW5mb1wiLGdseXBoOlwiZTkwYlwifSx7bmFtZTpcIkRvY2tMZWZ0XCIsZ2x5cGg6XCJlOTBjXCJ9LHtuYW1lOlwiRG9ja1JpZ2h0XCIsZ2x5cGg6XCJlOTBkXCJ9LHtuYW1lOlwiRG9ja0JvdHRvbVwiLGdseXBoOlwiZTkwZVwifSx7bmFtZTpcIlJlcGFpclwiLGdseXBoOlwiZTkwZlwifSx7bmFtZTpcIkFjY291bnRzXCIsZ2x5cGg6XCJlOTEwXCJ9LHtuYW1lOlwiRHVsbFNvdW5kXCIsZ2x5cGg6XCJlOTExXCJ9LHtuYW1lOlwiTWFuYWdlXCIsZ2x5cGg6XCJlOTEyXCJ9LHtuYW1lOlwiU3RyZWV0XCIsZ2x5cGg6XCJlOTEzXCJ9LHtuYW1lOlwiUHJpbnRlcjNEXCIsZ2x5cGg6XCJlOTE0XCJ9LHtuYW1lOlwiUmFkaW9CdWxsZXRcIixnbHlwaDpcImU5MTVcIn0se25hbWU6XCJTdG9wd2F0Y2hcIixnbHlwaDpcImU5MTZcIn0se25hbWU6XCJQaG90b1wiLGdseXBoOlwiZTkxYlwifSx7bmFtZTpcIkFjdGlvbkNlbnRlclwiLGdseXBoOlwiZTkxY1wifSx7bmFtZTpcIkZ1bGxDaXJjbGVNYXNrXCIsZ2x5cGg6XCJlOTFmXCJ9LHtuYW1lOlwiQ2hyb21lTWluaW1pemVcIixnbHlwaDpcImU5MjFcIn0se25hbWU6XCJDaHJvbWVNYXhpbWl6ZVwiLGdseXBoOlwiZTkyMlwifSx7bmFtZTpcIkNocm9tZVJlc3RvcmVcIixnbHlwaDpcImU5MjNcIn0se25hbWU6XCJBbm5vdGF0aW9uXCIsZ2x5cGg6XCJlOTI0XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZU21cIixnbHlwaDpcImU5MjVcIn0se25hbWU6XCJCYWNrU3BhY2VRV0VSVFlNZFwiLGdseXBoOlwiZTkyNlwifSx7bmFtZTpcIlN3aXBlXCIsZ2x5cGg6XCJlOTI3XCJ9LHtuYW1lOlwiRmluZ2VycHJpbnRcIixnbHlwaDpcImU5MjhcIn0se25hbWU6XCJIYW5kd3JpdGluZ1wiLGdseXBoOlwiZTkyOVwifSx7bmFtZTpcIkNocm9tZUJhY2tUb1dpbmRvd1wiLGdseXBoOlwiZTkyY1wifSx7bmFtZTpcIkNocm9tZUZ1bGxTY3JlZW5cIixnbHlwaDpcImU5MmRcIn0se25hbWU6XCJLZXlib2FyZFN0YW5kYXJkXCIsZ2x5cGg6XCJlOTJlXCJ9LHtuYW1lOlwiS2V5Ym9hcmREaXNtaXNzXCIsZ2x5cGg6XCJlOTJmXCJ9LHtuYW1lOlwiQ29tcGxldGVkXCIsZ2x5cGg6XCJlOTMwXCJ9LHtuYW1lOlwiQ2hyb21lQW5ub3RhdGVcIixnbHlwaDpcImU5MzFcIn0se25hbWU6XCJMYWJlbFwiLGdseXBoOlwiZTkzMlwifSx7bmFtZTpcIklCZWFtXCIsZ2x5cGg6XCJlOTMzXCJ9LHtuYW1lOlwiSUJlYW1PdXRsaW5lXCIsZ2x5cGg6XCJlOTM0XCJ9LHtuYW1lOlwiRmxpY2tEb3duXCIsZ2x5cGg6XCJlOTM1XCJ9LHtuYW1lOlwiRmxpY2tVcFwiLGdseXBoOlwiZTkzNlwifSx7bmFtZTpcIkZsaWNrTGVmdFwiLGdseXBoOlwiZTkzN1wifSx7bmFtZTpcIkZsaWNrUmlnaHRcIixnbHlwaDpcImU5MzhcIn0se25hbWU6XCJGZWVkYmFja0FwcFwiLGdseXBoOlwiZTkzOVwifSx7bmFtZTpcIk11c2ljQWxidW1cIixnbHlwaDpcImU5M2NcIn0se25hbWU6XCJTdHJlYW1pbmdcIixnbHlwaDpcImU5M2VcIn0se25hbWU6XCJDb2RlXCIsZ2x5cGg6XCJlOTQzXCJ9LHtuYW1lOlwiUmV0dXJuVG9XaW5kb3dcIixnbHlwaDpcImU5NDRcIn0se25hbWU6XCJMaWdodG5pbmdCb2x0XCIsZ2x5cGg6XCJlOTQ1XCJ9LHtuYW1lOlwiSW5mb1wiLGdseXBoOlwiZTk0NlwifSx7bmFtZTpcIkNhbGN1bGF0b3JNdWx0aXBseVwiLGdseXBoOlwiZTk0N1wifSx7bmFtZTpcIkNhbGN1bGF0b3JBZGRpdGlvblwiLGdseXBoOlwiZTk0OFwifSx7bmFtZTpcIkNhbGN1bGF0b3JTdWJ0cmFjdFwiLGdseXBoOlwiZTk0OVwifSx7bmFtZTpcIkNhbGN1bGF0b3JEaXZpZGVcIixnbHlwaDpcImU5NGFcIn0se25hbWU6XCJDYWxjdWxhdG9yU3F1YXJlcm9vdFwiLGdseXBoOlwiZTk0YlwifSx7bmFtZTpcIkNhbGN1bGF0b3JQZXJjZW50YWdlXCIsZ2x5cGg6XCJlOTRjXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvck5lZ2F0ZVwiLGdseXBoOlwiZTk0ZFwifSx7bmFtZTpcIkNhbGN1bGF0b3JFcXVhbFRvXCIsZ2x5cGg6XCJlOTRlXCJ9LHtuYW1lOlwiQ2FsY3VsYXRvckJhY2tzcGFjZVwiLGdseXBoOlwiZTk0ZlwifSx7bmFtZTpcIkNvbXBvbmVudFwiLGdseXBoOlwiZTk1MFwifSx7bmFtZTpcIkRNQ1wiLGdseXBoOlwiZTk1MVwifSx7bmFtZTpcIkRvY2tcIixnbHlwaDpcImU5NTJcIn0se25hbWU6XCJNdWx0aW1lZGlhRE1TXCIsZ2x5cGg6XCJlOTUzXCJ9LHtuYW1lOlwiTXVsdGltZWRpYURWUlwiLGdseXBoOlwiZTk1NFwifSx7bmFtZTpcIk11bHRpbWVkaWFQTVBcIixnbHlwaDpcImU5NTVcIn0se25hbWU6XCJQcmludGZheFByaW50ZXJGaWxlXCIsZ2x5cGg6XCJlOTU2XCJ9LHtuYW1lOlwiU2Vuc29yXCIsZ2x5cGg6XCJlOTU3XCJ9LHtuYW1lOlwiU3RvcmFnZU9wdGljYWxcIixnbHlwaDpcImU5NThcIn0se25hbWU6XCJDb21tdW5pY2F0aW9uc1wiLGdseXBoOlwiZTk1YVwifSx7bmFtZTpcIkhlYWRzZXRcIixnbHlwaDpcImU5NWJcIn0se25hbWU6XCJQcm9qZWN0b3JcIixnbHlwaDpcImU5NWRcIn0se25hbWU6XCJIZWFsdGhcIixnbHlwaDpcImU5NWVcIn0se25hbWU6XCJXaXJlXCIsZ2x5cGg6XCJlOTVmXCJ9LHtuYW1lOlwiV2ViY2FtMlwiLGdseXBoOlwiZTk2MFwifSx7bmFtZTpcIklucHV0XCIsZ2x5cGg6XCJlOTYxXCJ9LHtuYW1lOlwiTW91c2VcIixnbHlwaDpcImU5NjJcIn0se25hbWU6XCJTbWFydGNhcmRcIixnbHlwaDpcImU5NjNcIn0se25hbWU6XCJTbWFydGNhcmRWaXJ0dWFsXCIsZ2x5cGg6XCJlOTY0XCJ9LHtuYW1lOlwiTWVkaWFTdG9yYWdlVG93ZXJcIixnbHlwaDpcImU5NjVcIn0se25hbWU6XCJSZXR1cm5LZXlTbVwiLGdseXBoOlwiZTk2NlwifSx7bmFtZTpcIkdhbWVDb25zb2xlXCIsZ2x5cGg6XCJlOTY3XCJ9LHtuYW1lOlwiTmV0d29ya1wiLGdseXBoOlwiZTk2OFwifSx7bmFtZTpcIlN0b3JhZ2VOZXR3b3JrV2lyZWxlc3NcIixnbHlwaDpcImU5NjlcIn0se25hbWU6XCJTdG9yYWdlVGFwZVwiLGdseXBoOlwiZTk2YVwifSx7bmFtZTpcIkNoZXZyb25VcFNtYWxsXCIsZ2x5cGg6XCJlOTZkXCJ9LHtuYW1lOlwiQ2hldnJvbkRvd25TbWFsbFwiLGdseXBoOlwiZTk2ZVwifSx7bmFtZTpcIkNoZXZyb25MZWZ0U21hbGxcIixnbHlwaDpcImU5NmZcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRTbWFsbFwiLGdseXBoOlwiZTk3MFwifSx7bmFtZTpcIkNoZXZyb25VcE1lZFwiLGdseXBoOlwiZTk3MVwifSx7bmFtZTpcIkNoZXZyb25Eb3duTWVkXCIsZ2x5cGg6XCJlOTcyXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnRNZWRcIixnbHlwaDpcImU5NzNcIn0se25hbWU6XCJDaGV2cm9uUmlnaHRNZWRcIixnbHlwaDpcImU5NzRcIn0se25hbWU6XCJEZXZpY2VzMlwiLGdseXBoOlwiZTk3NVwifSx7bmFtZTpcIkV4cGFuZFRpbGVcIixnbHlwaDpcImU5NzZcIn0se25hbWU6XCJQQzFcIixnbHlwaDpcImU5NzdcIn0se25hbWU6XCJQcmVzZW5jZUNoaWNrbGV0XCIsZ2x5cGg6XCJlOTc4XCJ9LHtuYW1lOlwiUHJlc2VuY2VDaGlja2xldFZpZGVvXCIsZ2x5cGg6XCJlOTc5XCJ9LHtuYW1lOlwiUmVwbHlcIixnbHlwaDpcImU5N2FcIn0se25hbWU6XCJTZXRUaWxlXCIsZ2x5cGg6XCJlOTdiXCJ9LHtuYW1lOlwiVHlwZVwiLGdseXBoOlwiZTk3Y1wifSx7bmFtZTpcIktvcmVhblwiLGdseXBoOlwiZTk3ZFwifSx7bmFtZTpcIkhhbGZBbHBoYVwiLGdseXBoOlwiZTk3ZVwifSx7bmFtZTpcIkZ1bGxBbHBoYVwiLGdseXBoOlwiZTk3ZlwifSx7bmFtZTpcIktleTEyT25cIixnbHlwaDpcImU5ODBcIn0se25hbWU6XCJDaGluZXNlQ2hhbmdqaWVcIixnbHlwaDpcImU5ODFcIn0se25hbWU6XCJRV0VSVFlPblwiLGdseXBoOlwiZTk4MlwifSx7bmFtZTpcIlFXRVJUWU9mZlwiLGdseXBoOlwiZTk4M1wifSx7bmFtZTpcIkNoaW5lc2VRdWlja1wiLGdseXBoOlwiZTk4NFwifSx7bmFtZTpcIkphcGFuZXNlXCIsZ2x5cGg6XCJlOTg1XCJ9LHtuYW1lOlwiRnVsbEhpcmFnYW5hXCIsZ2x5cGg6XCJlOTg2XCJ9LHtuYW1lOlwiRnVsbEthdGFrYW5hXCIsZ2x5cGg6XCJlOTg3XCJ9LHtuYW1lOlwiSGFsZkthdGFrYW5hXCIsZ2x5cGg6XCJlOTg4XCJ9LHtuYW1lOlwiQ2hpbmVzZUJvUG9Nb0ZvXCIsZ2x5cGg6XCJlOTg5XCJ9LHtuYW1lOlwiQ2hpbmVzZVBpbnlpblwiLGdseXBoOlwiZTk4YVwifSx7bmFtZTpcIkNvbnN0cnVjdGlvbkNvbmVcIixnbHlwaDpcImU5OGZcIn0se25hbWU6XCJYYm94T25lQ29uc29sZVwiLGdseXBoOlwiZTk5MFwifSx7bmFtZTpcIlZvbHVtZTBcIixnbHlwaDpcImU5OTJcIn0se25hbWU6XCJWb2x1bWUxXCIsZ2x5cGg6XCJlOTkzXCJ9LHtuYW1lOlwiVm9sdW1lMlwiLGdseXBoOlwiZTk5NFwifSx7bmFtZTpcIlZvbHVtZTNcIixnbHlwaDpcImU5OTVcIn0se25hbWU6XCJCYXR0ZXJ5VW5rbm93blwiLGdseXBoOlwiZTk5NlwifSx7bmFtZTpcIldpZmlBdHRlbnRpb25PdmVybGF5XCIsZ2x5cGg6XCJlOTk4XCJ9LHtuYW1lOlwiUm9ib3RcIixnbHlwaDpcImU5OWFcIn0se25hbWU6XCJUYXBBbmRTZW5kXCIsZ2x5cGg6XCJlOWExXCJ9LHtuYW1lOlwiRml0UGFnZVwiLGdseXBoOlwiZTlhNlwifSx7bmFtZTpcIlBhc3N3b3JkS2V5U2hvd1wiLGdseXBoOlwiZTlhOFwifSx7bmFtZTpcIlBhc3N3b3JkS2V5SGlkZVwiLGdseXBoOlwiZTlhOVwifSx7bmFtZTpcIkJpZGlMdHJcIixnbHlwaDpcImU5YWFcIn0se25hbWU6XCJCaWRpUnRsXCIsZ2x5cGg6XCJlOWFiXCJ9LHtuYW1lOlwiRm9yd2FyZFNtXCIsZ2x5cGg6XCJlOWFjXCJ9LHtuYW1lOlwiQ29tbWFLZXlcIixnbHlwaDpcImU5YWRcIn0se25hbWU6XCJEYXNoS2V5XCIsZ2x5cGg6XCJlOWFlXCJ9LHtuYW1lOlwiRHVsbFNvdW5kS2V5XCIsZ2x5cGg6XCJlOWFmXCJ9LHtuYW1lOlwiSGFsZkR1bGxTb3VuZFwiLGdseXBoOlwiZTliMFwifSx7bmFtZTpcIlJpZ2h0RG91YmxlUXVvdGVcIixnbHlwaDpcImU5YjFcIn0se25hbWU6XCJMZWZ0RG91YmxlUXVvdGVcIixnbHlwaDpcImU5YjJcIn0se25hbWU6XCJQdW5jS2V5UmlnaHRCb3R0b21cIixnbHlwaDpcImU5YjNcIn0se25hbWU6XCJQdW5jS2V5MVwiLGdseXBoOlwiZTliNFwifSx7bmFtZTpcIlB1bmNLZXkyXCIsZ2x5cGg6XCJlOWI1XCJ9LHtuYW1lOlwiUHVuY0tleTNcIixnbHlwaDpcImU5YjZcIn0se25hbWU6XCJQdW5jS2V5NFwiLGdseXBoOlwiZTliN1wifSx7bmFtZTpcIlB1bmNLZXk1XCIsZ2x5cGg6XCJlOWI4XCJ9LHtuYW1lOlwiUHVuY0tleTZcIixnbHlwaDpcImU5YjlcIn0se25hbWU6XCJQdW5jS2V5OVwiLGdseXBoOlwiZTliYVwifSx7bmFtZTpcIlB1bmNLZXk3XCIsZ2x5cGg6XCJlOWJiXCJ9LHtuYW1lOlwiUHVuY0tleThcIixnbHlwaDpcImU5YmNcIn0se25hbWU6XCJGcmlnaWRcIixnbHlwaDpcImU5Y2FcIn0se25hbWU6XCJVbmtub3duXCIsZ2x5cGg6XCJlOWNlXCJ9LHtuYW1lOlwiQXJlYUNoYXJ0XCIsZ2x5cGg6XCJlOWQyXCJ9LHtuYW1lOlwiQ2hlY2tMaXN0XCIsZ2x5cGg6XCJlOWQ1XCJ9LHtuYW1lOlwiRGlhZ25vc3RpY1wiLGdseXBoOlwiZTlkOVwifSx7bmFtZTpcIkVxdWFsaXplclwiLGdseXBoOlwiZTllOVwifSx7bmFtZTpcIlByb2Nlc3NcIixnbHlwaDpcImU5ZjNcIn0se25hbWU6XCJQcm9jZXNzaW5nXCIsZ2x5cGg6XCJlOWY1XCJ9LHtuYW1lOlwiUmVwb3J0RG9jdW1lbnRcIixnbHlwaDpcImU5ZjlcIn0se25hbWU6XCJEZXNjcmlwdGlvblwiLGdseXBoOlwiVW5pY29kZSBwb2ludFwifSx7bmFtZTpcIlZpZGVvU29saWRcIixnbHlwaDpcImVhMGNcIn0se25hbWU6XCJNaXhlZE1lZGlhQmFkZ2VcIixnbHlwaDpcImVhMGRcIn0se25hbWU6XCJEaXNjb25uZWN0RGlzcGxheVwiLGdseXBoOlwiZWExNFwifSx7bmFtZTpcIlNoaWVsZFwiLGdseXBoOlwiZWExOFwifSx7bmFtZTpcIkluZm8yXCIsZ2x5cGg6XCJlYTFmXCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyQXN0ZXJpc2tcIixnbHlwaDpcImVhMjFcIn0se25hbWU6XCJCZXRhXCIsZ2x5cGg6XCJlYTI0XCJ9LHtuYW1lOlwiU2F2ZUNvcHlcIixnbHlwaDpcImVhMzVcIn0se25hbWU6XCJMaXN0XCIsZ2x5cGg6XCJlYTM3XCJ9LHtuYW1lOlwiQXN0ZXJpc2tcIixnbHlwaDpcImVhMzhcIn0se25hbWU6XCJFcnJvckJhZGdlXCIsZ2x5cGg6XCJlYTM5XCJ9LHtuYW1lOlwiQ2lyY2xlUmluZ1wiLGdseXBoOlwiZWEzYVwifSx7bmFtZTpcIkNpcmNsZUZpbGxcIixnbHlwaDpcImVhM2JcIn0se25hbWU6XCJNZXJnZUNhbGxcIixnbHlwaDpcImVhM2NcIn0se25hbWU6XCJQcml2YXRlQ2FsbFwiLGdseXBoOlwiZWEzZFwifSx7bmFtZTpcIlJlY29yZDJcIixnbHlwaDpcImVhM2ZcIn0se25hbWU6XCJBbGxBcHBzTWlycm9yZWRcIixnbHlwaDpcImVhNDBcIn0se25hbWU6XCJCb29rbWFya3NNaXJyb3JlZFwiLGdseXBoOlwiZWE0MVwifSx7bmFtZTpcIkJ1bGxldGVkTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTQyXCJ9LHtuYW1lOlwiQ2FsbEZvcndhcmRJbnRlcm5hdGlvbmFsTWlycm9yZWRcIixnbHlwaDpcImVhNDNcIn0se25hbWU6XCJDYWxsRm9yd2FyZFJvYW1pbmdNaXJyb3JlZFwiLGdseXBoOlwiZWE0NFwifSx7bmFtZTpcIkNocm9tZUJhY2tNaXJyb3JlZFwiLGdseXBoOlwiZWE0N1wifSx7bmFtZTpcIkNsZWFyU2VsZWN0aW9uTWlycm9yZWRcIixnbHlwaDpcImVhNDhcIn0se25hbWU6XCJDbG9zZVBhbmVNaXJyb3JlZFwiLGdseXBoOlwiZWE0OVwifSx7bmFtZTpcIkNvbnRhY3RJbmZvTWlycm9yZWRcIixnbHlwaDpcImVhNGFcIn0se25hbWU6XCJEb2NrUmlnaHRNaXJyb3JlZFwiLGdseXBoOlwiZWE0YlwifSx7bmFtZTpcIkRvY2tMZWZ0TWlycm9yZWRcIixnbHlwaDpcImVhNGNcIn0se25hbWU6XCJFeHBhbmRUaWxlTWlycm9yZWRcIixnbHlwaDpcImVhNGVcIn0se25hbWU6XCJHb01pcnJvcmVkXCIsZ2x5cGg6XCJlYTRmXCJ9LHtuYW1lOlwiR3JpcHBlclJlc2l6ZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUwXCJ9LHtuYW1lOlwiSGVscE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTUxXCJ9LHtuYW1lOlwiSW1wb3J0TWlycm9yZWRcIixnbHlwaDpcImVhNTJcIn0se25hbWU6XCJJbXBvcnRBbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE1M1wifSx7bmFtZTpcIkxlYXZlQ2hhdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU0XCJ9LHtuYW1lOlwiTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU1XCJ9LHtuYW1lOlwiTWFpbEZvcndhcmRNaXJyb3JlZFwiLGdseXBoOlwiZWE1NlwifSx7bmFtZTpcIk1haWxSZXBseU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTU3XCJ9LHtuYW1lOlwiTWFpbFJlcGx5QWxsTWlycm9yZWRcIixnbHlwaDpcImVhNThcIn0se25hbWU6XCJPcGVuUGFuZU1pcnJvcmVkXCIsZ2x5cGg6XCJlYTViXCJ9LHtuYW1lOlwiT3BlbldpdGhNaXJyb3JlZFwiLGdseXBoOlwiZWE1Y1wifSx7bmFtZTpcIlBhcmtpbmdMb2NhdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJlYTVlXCJ9LHtuYW1lOlwiUmVzaXplTW91c2VNZWRpdW1NaXJyb3JlZFwiLGdseXBoOlwiZWE1ZlwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlU21hbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2MFwifSx7bmFtZTpcIlJlc2l6ZU1vdXNlVGFsbE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYxXCJ9LHtuYW1lOlwiUmVzaXplVG91Y2hOYXJyb3dlck1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYyXCJ9LHtuYW1lOlwiU2VuZE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTYzXCJ9LHtuYW1lOlwiU2VuZEZpbGxNaXJyb3JlZFwiLGdseXBoOlwiZWE2NFwifSx7bmFtZTpcIlNob3dSZXN1bHRzTWlycm9yZWRcIixnbHlwaDpcImVhNjVcIn0se25hbWU6XCJNZWRpYVwiLGdseXBoOlwiZWE2OVwifSx7bmFtZTpcIlN5bmNFcnJvclwiLGdseXBoOlwiZWE2YVwifSx7bmFtZTpcIkRldmljZXMzXCIsZ2x5cGg6XCJlYTZjXCJ9LHtuYW1lOlwiU2xvd01vdGlvbk9uXCIsZ2x5cGg6XCJlYTc5XCJ9LHtuYW1lOlwiTGlnaHRidWxiXCIsZ2x5cGg6XCJlYTgwXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlXCIsZ2x5cGg6XCJlYTgxXCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVcIixnbHlwaDpcImVhODJcIn0se25hbWU6XCJTdGF0dXNFcnJvclwiLGdseXBoOlwiZWE4M1wifSx7bmFtZTpcIlN0YXR1c1dhcm5pbmdcIixnbHlwaDpcImVhODRcIn0se25hbWU6XCJQdXp6bGVcIixnbHlwaDpcImVhODZcIn0se25hbWU6XCJDYWxlbmRhclNvbGlkXCIsZ2x5cGg6XCJlYTg5XCJ9LHtuYW1lOlwiSG9tZVNvbGlkXCIsZ2x5cGg6XCJlYThhXCJ9LHtuYW1lOlwiUGFya2luZ0xvY2F0aW9uU29saWRcIixnbHlwaDpcImVhOGJcIn0se25hbWU6XCJDb250YWN0U29saWRcIixnbHlwaDpcImVhOGNcIn0se25hbWU6XCJDb25zdHJ1Y3Rpb25Tb2xpZFwiLGdseXBoOlwiZWE4ZFwifSx7bmFtZTpcIkFjY2lkZW50U29saWRcIixnbHlwaDpcImVhOGVcIn0se25hbWU6XCJSaW5nZXJcIixnbHlwaDpcImVhOGZcIn0se25hbWU6XCJQREZcIixnbHlwaDpcImVhOTBcIn0se25hbWU6XCJUaG91Z2h0QnViYmxlXCIsZ2x5cGg6XCJlYTkxXCJ9LHtuYW1lOlwiSGVhcnRCcm9rZW5cIixnbHlwaDpcImVhOTJcIn0se25hbWU6XCJCYXR0ZXJ5Q2hhcmdpbmcxMFwiLGdseXBoOlwiZWE5M1wifSx7bmFtZTpcIkJhdHRlcnlTYXZlcjlcIixnbHlwaDpcImVhOTRcIn0se25hbWU6XCJCYXR0ZXJ5U2F2ZXIxMFwiLGdseXBoOlwiZWE5NVwifSx7bmFtZTpcIkNhbGxGb3J3YXJkaW5nTWlycm9yZWRcIixnbHlwaDpcImVhOTdcIn0se25hbWU6XCJNdWx0aVNlbGVjdE1pcnJvcmVkXCIsZ2x5cGg6XCJlYTk4XCJ9LHtuYW1lOlwiQnJvb21cIixnbHlwaDpcImVhOTlcIn0se25hbWU6XCJGb3J3YXJkQ2FsbFwiLGdseXBoOlwiZWFjMlwifSx7bmFtZTpcIlRyYWNrZXJzXCIsZ2x5cGg6XCJlYWRmXCJ9LHtuYW1lOlwiTWFya2V0XCIsZ2x5cGg6XCJlYWZjXCJ9LHtuYW1lOlwiUGllU2luZ2xlXCIsZ2x5cGg6XCJlYjA1XCJ9LHtuYW1lOlwiU3RvY2tVcFwiLGdseXBoOlwiZWIwZlwifSx7bmFtZTpcIlN0b2NrRG93blwiLGdseXBoOlwiZWIxMVwifSx7bmFtZTpcIkRlc2lnblwiLGdseXBoOlwiZWIzY1wifSx7bmFtZTpcIldlYnNpdGVcIixnbHlwaDpcImViNDFcIn0se25hbWU6XCJEcm9wXCIsZ2x5cGg6XCJlYjQyXCJ9LHtuYW1lOlwiUmFkYXJcIixnbHlwaDpcImViNDRcIn0se25hbWU6XCJCdXNTb2xpZFwiLGdseXBoOlwiZWI0N1wifSx7bmFtZTpcIkZlcnJ5U29saWRcIixnbHlwaDpcImViNDhcIn0se25hbWU6XCJTdGFydFBvaW50U29saWRcIixnbHlwaDpcImViNDlcIn0se25hbWU6XCJTdG9wUG9pbnRTb2xpZFwiLGdseXBoOlwiZWI0YVwifSx7bmFtZTpcIkVuZFBvaW50U29saWRcIixnbHlwaDpcImViNGJcIn0se25hbWU6XCJBaXJwbGFuZVNvbGlkXCIsZ2x5cGg6XCJlYjRjXCJ9LHtuYW1lOlwiVHJhaW5Tb2xpZFwiLGdseXBoOlwiZWI0ZFwifSx7bmFtZTpcIldvcmtTb2xpZFwiLGdseXBoOlwiZWI0ZVwifSx7bmFtZTpcIlJlbWluZGVyRmlsbFwiLGdseXBoOlwiZWI0ZlwifSx7bmFtZTpcIlJlbWluZGVyXCIsZ2x5cGg6XCJlYjUwXCJ9LHtuYW1lOlwiSGVhcnRcIixnbHlwaDpcImViNTFcIn0se25hbWU6XCJIZWFydEZpbGxcIixnbHlwaDpcImViNTJcIn0se25hbWU6XCJFdGhlcm5ldEVycm9yXCIsZ2x5cGg6XCJlYjU1XCJ9LHtuYW1lOlwiRXRoZXJuZXRXYXJuaW5nXCIsZ2x5cGg6XCJlYjU2XCJ9LHtuYW1lOlwiU3RhdHVzQ29ubmVjdGluZzFcIixnbHlwaDpcImViNTdcIn0se25hbWU6XCJTdGF0dXNDb25uZWN0aW5nMlwiLGdseXBoOlwiZWI1OFwifSx7bmFtZTpcIlN0YXR1c1Vuc2VjdXJlXCIsZ2x5cGg6XCJlYjU5XCJ9LHtuYW1lOlwiV2lmaUVycm9yMFwiLGdseXBoOlwiZWI1YVwifSx7bmFtZTpcIldpZmlFcnJvcjFcIixnbHlwaDpcImViNWJcIn0se25hbWU6XCJXaWZpRXJyb3IyXCIsZ2x5cGg6XCJlYjVjXCJ9LHtuYW1lOlwiV2lmaUVycm9yM1wiLGdseXBoOlwiZWI1ZFwifSx7bmFtZTpcIldpZmlFcnJvcjRcIixnbHlwaDpcImViNWVcIn0se25hbWU6XCJXaWZpV2FybmluZzBcIixnbHlwaDpcImViNWZcIn0se25hbWU6XCJXaWZpV2FybmluZzFcIixnbHlwaDpcImViNjBcIn0se25hbWU6XCJXaWZpV2FybmluZzJcIixnbHlwaDpcImViNjFcIn0se25hbWU6XCJXaWZpV2FybmluZzNcIixnbHlwaDpcImViNjJcIn0se25hbWU6XCJXaWZpV2FybmluZzRcIixnbHlwaDpcImViNjNcIn0se25hbWU6XCJEZXZpY2VzNFwiLGdseXBoOlwiZWI2NlwifSx7bmFtZTpcIk5VSUlyaXNcIixnbHlwaDpcImViNjdcIn0se25hbWU6XCJOVUlGYWNlXCIsZ2x5cGg6XCJlYjY4XCJ9LHtuYW1lOlwiR2F0ZXdheVJvdXRlclwiLGdseXBoOlwiZWI3N1wifSx7bmFtZTpcIkVkaXRNaXJyb3JlZFwiLGdseXBoOlwiZWI3ZVwifSx7bmFtZTpcIk5VSUZQU3RhcnRTbGlkZUhhbmRcIixnbHlwaDpcImViODJcIn0se25hbWU6XCJOVUlGUFN0YXJ0U2xpZGVBY3Rpb25cIixnbHlwaDpcImViODNcIn0se25hbWU6XCJOVUlGUENvbnRpbnVlU2xpZGVIYW5kXCIsZ2x5cGg6XCJlYjg0XCJ9LHtuYW1lOlwiTlVJRlBDb250aW51ZVNsaWRlQWN0aW9uXCIsZ2x5cGg6XCJlYjg1XCJ9LHtuYW1lOlwiTlVJRlBSb2xsUmlnaHRIYW5kXCIsZ2x5cGg6XCJlYjg2XCJ9LHtuYW1lOlwiTlVJRlBSb2xsUmlnaHRIYW5kQWN0aW9uXCIsZ2x5cGg6XCJlYjg3XCJ9LHtuYW1lOlwiTlVJRlBSb2xsTGVmdEhhbmRcIixnbHlwaDpcImViODhcIn0se25hbWU6XCJOVUlGUFJvbGxMZWZ0QWN0aW9uXCIsZ2x5cGg6XCJlYjg5XCJ9LHtuYW1lOlwiTlVJRlBQcmVzc0hhbmRcIixnbHlwaDpcImViOGFcIn0se25hbWU6XCJOVUlGUFByZXNzQWN0aW9uXCIsZ2x5cGg6XCJlYjhiXCJ9LHtuYW1lOlwiTlVJRlBQcmVzc1JlcGVhdEhhbmRcIixnbHlwaDpcImViOGNcIn0se25hbWU6XCJOVUlGUFByZXNzUmVwZWF0QWN0aW9uXCIsZ2x5cGg6XCJlYjhkXCJ9LHtuYW1lOlwiU3RhdHVzRXJyb3JGdWxsXCIsZ2x5cGg6XCJlYjkwXCJ9LHtuYW1lOlwiVGFza1ZpZXdFeHBhbmRlZFwiLGdseXBoOlwiZWI5MVwifSx7bmFtZTpcIkNlcnRpZmljYXRlXCIsZ2x5cGg6XCJlYjk1XCJ9LHtuYW1lOlwiQmFja1NwYWNlUVdFUlRZTGdcIixnbHlwaDpcImViOTZcIn0se25hbWU6XCJSZXR1cm5LZXlMZ1wiLGdseXBoOlwiZWI5N1wifSx7bmFtZTpcIkZhc3RGb3J3YXJkXCIsZ2x5cGg6XCJlYjlkXCJ9LHtuYW1lOlwiUmV3aW5kXCIsZ2x5cGg6XCJlYjllXCJ9LHtuYW1lOlwiUGhvdG8yXCIsZ2x5cGg6XCJlYjlmXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTBcIixnbHlwaDpcImViYTBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MVwiLGdseXBoOlwiZWJhMVwifSx7bmFtZTpcIk1vYkJhdHRlcnkyXCIsZ2x5cGg6XCJlYmEyXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTNcIixnbHlwaDpcImViYTNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5NFwiLGdseXBoOlwiZWJhNFwifSx7bmFtZTpcIk1vYkJhdHRlcnk1XCIsZ2x5cGg6XCJlYmE1XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTZcIixnbHlwaDpcImViYTZcIn0se25hbWU6XCJNb2JCYXR0ZXJ5N1wiLGdseXBoOlwiZWJhN1wifSx7bmFtZTpcIk1vYkJhdHRlcnk4XCIsZ2x5cGg6XCJlYmE4XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeTlcIixnbHlwaDpcImViYTlcIn0se25hbWU6XCJNb2JCYXR0ZXJ5MTBcIixnbHlwaDpcImViYWFcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJlYmFiXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMVwiLGdseXBoOlwiZWJhY1wifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzJcIixnbHlwaDpcImViYWRcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJlYmFlXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nNFwiLGdseXBoOlwiZWJhZlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzVcIixnbHlwaDpcImViYjBcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJlYmIxXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nN1wiLGdseXBoOlwiZWJiMlwifSx7bmFtZTpcIk1vYkJhdHRlcnlDaGFyZ2luZzhcIixnbHlwaDpcImViYjNcIn0se25hbWU6XCJNb2JCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJlYmI0XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeUNoYXJnaW5nMTBcIixnbHlwaDpcImViYjVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIwXCIsZ2x5cGg6XCJlYmI2XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMVwiLGdseXBoOlwiZWJiN1wifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjJcIixnbHlwaDpcImViYjhcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXIzXCIsZ2x5cGg6XCJlYmI5XCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyNFwiLGdseXBoOlwiZWJiYVwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjVcIixnbHlwaDpcImViYmJcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI2XCIsZ2x5cGg6XCJlYmJjXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyN1wiLGdseXBoOlwiZWJiZFwifSx7bmFtZTpcIk1vYkJhdHRlcnlTYXZlcjhcIixnbHlwaDpcImViYmVcIn0se25hbWU6XCJNb2JCYXR0ZXJ5U2F2ZXI5XCIsZ2x5cGg6XCJlYmJmXCJ9LHtuYW1lOlwiTW9iQmF0dGVyeVNhdmVyMTBcIixnbHlwaDpcImViYzBcIn0se25hbWU6XCJEaWN0aW9uYXJ5Q2xvdWRcIixnbHlwaDpcImViYzNcIn0se25hbWU6XCJSZXNldERyaXZlXCIsZ2x5cGg6XCJlYmM0XCJ9LHtuYW1lOlwiVm9sdW1lQmFyc1wiLGdseXBoOlwiZWJjNVwifSx7bmFtZTpcIlByb2plY3RcIixnbHlwaDpcImViYzZcIn0se25hbWU6XCJBZGp1c3RIb2xvZ3JhbVwiLGdseXBoOlwiZWJkMlwifSx7bmFtZTpcIkNsb3VkRG93bmxvYWRcIixnbHlwaDpcImViZDNcIn0se25hbWU6XCJNb2JXaWZpQ2FsbEJhcnNcIixnbHlwaDpcImViZDRcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDBcIixnbHlwaDpcImViZDVcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDFcIixnbHlwaDpcImViZDZcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDJcIixnbHlwaDpcImViZDdcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDNcIixnbHlwaDpcImViZDhcIn0se25hbWU6XCJNb2JXaWZpQ2FsbDRcIixnbHlwaDpcImViZDlcIn0se25hbWU6XCJGYW1pbHlcIixnbHlwaDpcImViZGFcIn0se25hbWU6XCJMb2NrRmVlZGJhY2tcIixnbHlwaDpcImViZGJcIn0se25hbWU6XCJEZXZpY2VEaXNjb3ZlcnlcIixnbHlwaDpcImViZGVcIn0se25hbWU6XCJXaW5kRGlyZWN0aW9uXCIsZ2x5cGg6XCJlYmU2XCJ9LHtuYW1lOlwiUmlnaHRBcnJvd0tleVRpbWUwXCIsZ2x5cGg6XCJlYmU3XCJ9LHtuYW1lOlwiQnVnXCIsZ2x5cGg6XCJlYmU4XCJ9LHtuYW1lOlwiVGFibGV0TW9kZVwiLGdseXBoOlwiZWJmY1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUxlZnRcIixnbHlwaDpcImViZmRcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZUxlZnRcIixnbHlwaDpcImViZmVcIn0se25hbWU6XCJTdGF0dXNFcnJvckxlZnRcIixnbHlwaDpcImViZmZcIn0se25hbWU6XCJTdGF0dXNXYXJuaW5nTGVmdFwiLGdseXBoOlwiZWMwMFwifSx7bmFtZTpcIk1vYkJhdHRlcnlVbmtub3duXCIsZ2x5cGg6XCJlYzAyXCJ9LHtuYW1lOlwiTmV0d29ya1Rvd2VyXCIsZ2x5cGg6XCJlYzA1XCJ9LHtuYW1lOlwiQ2l0eU5leHRcIixnbHlwaDpcImVjMDZcIn0se25hbWU6XCJDaXR5TmV4dDJcIixnbHlwaDpcImVjMDdcIn0se25hbWU6XCJDb3VydGhvdXNlXCIsZ2x5cGg6XCJlYzA4XCJ9LHtuYW1lOlwiR3JvY2VyaWVzXCIsZ2x5cGg6XCJlYzA5XCJ9LHtuYW1lOlwiU3VzdGFpbmFibGVcIixnbHlwaDpcImVjMGFcIn0se25hbWU6XCJCdWlsZGluZ0VuZXJneVwiLGdseXBoOlwiZWMwYlwifSx7bmFtZTpcIlRvZ2dsZUZpbGxlZFwiLGdseXBoOlwiZWMxMVwifSx7bmFtZTpcIlRvZ2dsZUJvcmRlclwiLGdseXBoOlwiZWMxMlwifSx7bmFtZTpcIlNsaWRlclRodW1iXCIsZ2x5cGg6XCJlYzEzXCJ9LHtuYW1lOlwiVG9nZ2xlVGh1bWJcIixnbHlwaDpcImVjMTRcIn0se25hbWU6XCJNaXJhY2FzdExvZ29TbWFsbFwiLGdseXBoOlwiZWMxNVwifSx7bmFtZTpcIk1pcmFjYXN0TG9nb0xhcmdlXCIsZ2x5cGg6XCJlYzE2XCJ9LHtuYW1lOlwiUExBUFwiLGdseXBoOlwiZWMxOVwifSx7bmFtZTpcIkJhZGdlXCIsZ2x5cGg6XCJlYzFiXCJ9LHtuYW1lOlwiU2lnbmFsUm9hbWluZ1wiLGdseXBoOlwiZWMxZVwifSx7bmFtZTpcIk1vYmlsZUxvY2tlZFwiLGdseXBoOlwiZWMyMFwifSx7bmFtZTpcIkluc2lkZXJIdWJBcHBcIixnbHlwaDpcImVjMjRcIn0se25hbWU6XCJQZXJzb25hbEZvbGRlclwiLGdseXBoOlwiZWMyNVwifSx7bmFtZTpcIkhvbWVHcm91cFwiLGdseXBoOlwiZWMyNlwifSx7bmFtZTpcIk15TmV0d29ya1wiLGdseXBoOlwiZWMyN1wifSx7bmFtZTpcIktleWJvYXJkRnVsbFwiLGdseXBoOlwiZWMzMVwifSx7bmFtZTpcIkNhZmVcIixnbHlwaDpcImVjMzJcIn0se25hbWU6XCJNb2JTaWduYWwxXCIsZ2x5cGg6XCJlYzM3XCJ9LHtuYW1lOlwiTW9iU2lnbmFsMlwiLGdseXBoOlwiZWMzOFwifSx7bmFtZTpcIk1vYlNpZ25hbDNcIixnbHlwaDpcImVjMzlcIn0se25hbWU6XCJNb2JTaWduYWw0XCIsZ2x5cGg6XCJlYzNhXCJ9LHtuYW1lOlwiTW9iU2lnbmFsNVwiLGdseXBoOlwiZWMzYlwifSx7bmFtZTpcIk1vYldpZmkxXCIsZ2x5cGg6XCJlYzNjXCJ9LHtuYW1lOlwiTW9iV2lmaTJcIixnbHlwaDpcImVjM2RcIn0se25hbWU6XCJNb2JXaWZpM1wiLGdseXBoOlwiZWMzZVwifSx7bmFtZTpcIk1vYldpZmk0XCIsZ2x5cGg6XCJlYzNmXCJ9LHtuYW1lOlwiTW9iQWlycGxhbmVcIixnbHlwaDpcImVjNDBcIn0se25hbWU6XCJNb2JCbHVldG9vdGhcIixnbHlwaDpcImVjNDFcIn0se25hbWU6XCJNb2JBY3Rpb25DZW50ZXJcIixnbHlwaDpcImVjNDJcIn0se25hbWU6XCJNb2JMb2NhdGlvblwiLGdseXBoOlwiZWM0M1wifSx7bmFtZTpcIk1vYldpZmlIb3RzcG90XCIsZ2x5cGg6XCJlYzQ0XCJ9LHtuYW1lOlwiTGFuZ3VhZ2VKcG5cIixnbHlwaDpcImVjNDVcIn0se25hbWU6XCJNb2JRdWlldEhvdXJzXCIsZ2x5cGg6XCJlYzQ2XCJ9LHtuYW1lOlwiTW9iRHJpdmluZ01vZGVcIixnbHlwaDpcImVjNDdcIn0se25hbWU6XCJTcGVlZE9mZlwiLGdseXBoOlwiZWM0OFwifSx7bmFtZTpcIlNwZWVkTWVkaXVtXCIsZ2x5cGg6XCJlYzQ5XCJ9LHtuYW1lOlwiU3BlZWRIaWdoXCIsZ2x5cGg6XCJlYzRhXCJ9LHtuYW1lOlwiVGhpc1BDXCIsZ2x5cGg6XCJlYzRlXCJ9LHtuYW1lOlwiTXVzaWNOb3RlXCIsZ2x5cGg6XCJlYzRmXCJ9LHtuYW1lOlwiRmlsZUV4cGxvcmVyXCIsZ2x5cGg6XCJlYzUwXCJ9LHtuYW1lOlwiRmlsZUV4cGxvcmVyQXBwXCIsZ2x5cGg6XCJlYzUxXCJ9LHtuYW1lOlwiTGVmdEFycm93S2V5VGltZTBcIixnbHlwaDpcImVjNTJcIn0se25hbWU6XCJNaWNPZmZcIixnbHlwaDpcImVjNTRcIn0se25hbWU6XCJNaWNTbGVlcFwiLGdseXBoOlwiZWM1NVwifSx7bmFtZTpcIk1pY0Vycm9yXCIsZ2x5cGg6XCJlYzU2XCJ9LHtuYW1lOlwiUGxheWJhY2tSYXRlMXhcIixnbHlwaDpcImVjNTdcIn0se25hbWU6XCJQbGF5YmFja1JhdGVPdGhlclwiLGdseXBoOlwiZWM1OFwifSx7bmFtZTpcIkNhc2hEcmF3ZXJcIixnbHlwaDpcImVjNTlcIn0se25hbWU6XCJCYXJjb2RlU2Nhbm5lclwiLGdseXBoOlwiZWM1YVwifSx7bmFtZTpcIlJlY2VpcHRQcmludGVyXCIsZ2x5cGg6XCJlYzViXCJ9LHtuYW1lOlwiTWFnU3RyaXBlUmVhZGVyXCIsZ2x5cGg6XCJlYzVjXCJ9LHtuYW1lOlwiQ29tcGxldGVkU29saWRcIixnbHlwaDpcImVjNjFcIn0se25hbWU6XCJDb21wYW5pb25BcHBcIixnbHlwaDpcImVjNjRcIn0se25hbWU6XCJGYXZpY29uMlwiLGdseXBoOlwiZWM2Y1wifSx7bmFtZTpcIlN3aXBlUmV2ZWFsQXJ0XCIsZ2x5cGg6XCJlYzZkXCJ9LHtuYW1lOlwiTWljT25cIixnbHlwaDpcImVjNzFcIn0se25hbWU6XCJNaWNDbGlwcGluZ1wiLGdseXBoOlwiZWM3MlwifSx7bmFtZTpcIlRhYmxldFNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc0XCJ9LHtuYW1lOlwiTW9iaWxlU2VsZWN0ZWRcIixnbHlwaDpcImVjNzVcIn0se25hbWU6XCJMYXB0b3BTZWxlY3RlZFwiLGdseXBoOlwiZWM3NlwifSx7bmFtZTpcIlRWTW9uaXRvclNlbGVjdGVkXCIsZ2x5cGg6XCJlYzc3XCJ9LHtuYW1lOlwiRGV2ZWxvcGVyVG9vbHNcIixnbHlwaDpcImVjN2FcIn0se25hbWU6XCJNb2JDYWxsRm9yd2FyZGluZ1wiLGdseXBoOlwiZWM3ZVwifSx7bmFtZTpcIk1vYkNhbGxGb3J3YXJkaW5nTWlycm9yZWRcIixnbHlwaDpcImVjN2ZcIn0se25hbWU6XCJCb2R5Q2FtXCIsZ2x5cGg6XCJlYzgwXCJ9LHtuYW1lOlwiUG9saWNlQ2FyXCIsZ2x5cGg6XCJlYzgxXCJ9LHtuYW1lOlwiRHJhd1wiLGdseXBoOlwiZWM4N1wifSx7bmFtZTpcIkRyYXdTb2xpZFwiLGdseXBoOlwiZWM4OFwifSx7bmFtZTpcIkxvd2VyQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWM4YVwifSx7bmFtZTpcIlNjcm9sbFVwRG93blwiLGdseXBoOlwiZWM4ZlwifSx7bmFtZTpcIkRhdGVUaW1lXCIsZ2x5cGg6XCJlYzkyXCJ9LHtuYW1lOlwiSG9sb0xlbnNcIixnbHlwaDpcImVjOTRcIn0se25hbWU6XCJUaWxlc1wiLGdseXBoOlwiZWNhNVwifSx7bmFtZTpcIlBhcnR5TGVhZGVyXCIsZ2x5cGg6XCJlY2E3XCJ9LHtuYW1lOlwiQXBwSWNvbkRlZmF1bHRcIixnbHlwaDpcImVjYWFcIn0se25hbWU6XCJDYWxvcmllc1wiLGdseXBoOlwiZWNhZFwifSx7bmFtZTpcIlBPSVwiLGdseXBoOlwiZWNhZlwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MFwiLGdseXBoOlwiZWNiOVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MVwiLGdseXBoOlwiZWNiYVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5MlwiLGdseXBoOlwiZWNiYlwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5M1wiLGdseXBoOlwiZWNiY1wifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NFwiLGdseXBoOlwiZWNiZFwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NVwiLGdseXBoOlwiZWNiZVwifSx7bmFtZTpcIkJhbmRCYXR0ZXJ5NlwiLGdseXBoOlwiZWNiZlwifSx7bmFtZTpcIkFkZFN1cmZhY2VIdWJcIixnbHlwaDpcImVjYzRcIn0se25hbWU6XCJEZXZVcGRhdGVcIixnbHlwaDpcImVjYzVcIn0se25hbWU6XCJVbml0XCIsZ2x5cGg6XCJlY2M2XCJ9LHtuYW1lOlwiQWRkVG9cIixnbHlwaDpcImVjYzhcIn0se25hbWU6XCJSZW1vdmVGcm9tXCIsZ2x5cGg6XCJlY2M5XCJ9LHtuYW1lOlwiUmFkaW9CdG5PZmZcIixnbHlwaDpcImVjY2FcIn0se25hbWU6XCJSYWRpb0J0bk9uXCIsZ2x5cGg6XCJlY2NiXCJ9LHtuYW1lOlwiUmFkaW9CdWxsZXQyXCIsZ2x5cGg6XCJlY2NjXCJ9LHtuYW1lOlwiRXhwbG9yZUNvbnRlbnRcIixnbHlwaDpcImVjY2RcIn0se25hbWU6XCJCbG9ja2VkMlwiLGdseXBoOlwiZWNlNFwifSx7bmFtZTpcIlNjcm9sbE1vZGVcIixnbHlwaDpcImVjZTdcIn0se25hbWU6XCJab29tTW9kZVwiLGdseXBoOlwiZWNlOFwifSx7bmFtZTpcIlBhbk1vZGVcIixnbHlwaDpcImVjZTlcIn0se25hbWU6XCJXaXJlZFVTQlwiLGdseXBoOlwiZWNmMFwifSx7bmFtZTpcIldpcmVsZXNzVVNCXCIsZ2x5cGg6XCJlY2YxXCJ9LHtuYW1lOlwiVVNCU2FmZUNvbm5lY3RcIixnbHlwaDpcImVjZjNcIn0se25hbWU6XCJBY3Rpb25DZW50ZXJOb3RpZmljYXRpb25NaXJyb3JlZFwiLGdseXBoOlwiZWQwY1wifSx7bmFtZTpcIkFjdGlvbkNlbnRlck1pcnJvcmVkXCIsZ2x5cGg6XCJlZDBkXCJ9LHtuYW1lOlwiU3Vic2NyaXB0aW9uQWRkXCIsZ2x5cGg6XCJlZDBlXCJ9LHtuYW1lOlwiUmVzZXREZXZpY2VcIixnbHlwaDpcImVkMTBcIn0se25hbWU6XCJTdWJzY3JpcHRpb25BZGRNaXJyb3JlZFwiLGdseXBoOlwiZWQxMVwifSx7bmFtZTpcIlFSQ29kZVwiLGdseXBoOlwiZWQxNFwifSx7bmFtZTpcIkZlZWRiYWNrXCIsZ2x5cGg6XCJlZDE1XCJ9LHtuYW1lOlwiSGlkZVwiLGdseXBoOlwiZWQxYVwifSx7bmFtZTpcIlN1YnRpdGxlc1wiLGdseXBoOlwiZWQxZVwifSx7bmFtZTpcIlN1YnRpdGxlc0F1ZGlvXCIsZ2x5cGg6XCJlZDFmXCJ9LHtuYW1lOlwiT3BlbkZvbGRlckhvcml6b250YWxcIixnbHlwaDpcImVkMjVcIn0se25hbWU6XCJDYWxlbmRhck1pcnJvcmVkXCIsZ2x5cGg6XCJlZDI4XCJ9LHtuYW1lOlwiTW9iZVNJTVwiLGdseXBoOlwiZWQyYVwifSx7bmFtZTpcIk1vYmVTSU1Ob1Byb2ZpbGVcIixnbHlwaDpcImVkMmJcIn0se25hbWU6XCJNb2JlU0lNTG9ja2VkXCIsZ2x5cGg6XCJlZDJjXCJ9LHtuYW1lOlwiTW9iZVNJTUJ1c3lcIixnbHlwaDpcImVkMmRcIn0se25hbWU6XCJTaWduYWxFcnJvclwiLGdseXBoOlwiZWQyZVwifSx7bmFtZTpcIlN0cmVhbWluZ0VudGVycHJpc2VcIixnbHlwaDpcImVkMmZcIn0se25hbWU6XCJIZWFkcGhvbmUwXCIsZ2x5cGg6XCJlZDMwXCJ9LHtuYW1lOlwiSGVhZHBob25lMVwiLGdseXBoOlwiZWQzMVwifSx7bmFtZTpcIkhlYWRwaG9uZTJcIixnbHlwaDpcImVkMzJcIn0se25hbWU6XCJIZWFkcGhvbmUzXCIsZ2x5cGg6XCJlZDMzXCJ9LHtuYW1lOlwiQXBwc1wiLGdseXBoOlwiZWQzNVwifSx7bmFtZTpcIktleWJvYXJkQnJpZ2h0bmVzc1wiLGdseXBoOlwiZWQzOVwifSx7bmFtZTpcIktleWJvYXJkTG93ZXJCcmlnaHRuZXNzXCIsZ2x5cGg6XCJlZDNhXCJ9LHtuYW1lOlwiU2tpcEJhY2sxMFwiLGdseXBoOlwiZWQzY1wifSx7bmFtZTpcIlNraXBGb3J3YXJkMzBcIixnbHlwaDpcImVkM2RcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyXCIsZ2x5cGg6XCJlZDQxXCJ9LHtuYW1lOlwiVHJlZUZvbGRlckZvbGRlckZpbGxcIixnbHlwaDpcImVkNDJcIn0se25hbWU6XCJUcmVlRm9sZGVyRm9sZGVyT3BlblwiLGdseXBoOlwiZWQ0M1wifSx7bmFtZTpcIlRyZWVGb2xkZXJGb2xkZXJPcGVuRmlsbFwiLGdseXBoOlwiZWQ0NFwifSx7bmFtZTpcIk11bHRpbWVkaWFETVBcIixnbHlwaDpcImVkNDdcIn0se25hbWU6XCJLZXlib2FyZE9uZUhhbmRlZFwiLGdseXBoOlwiZWQ0Y1wifSx7bmFtZTpcIk5hcnJhdG9yXCIsZ2x5cGg6XCJlZDRkXCJ9LHtuYW1lOlwiRW1vamlUYWJQZW9wbGVcIixnbHlwaDpcImVkNTNcIn0se25hbWU6XCJFbW9qaVRhYlNtaWxlc0FuaW1hbHNcIixnbHlwaDpcImVkNTRcIn0se25hbWU6XCJFbW9qaVRhYkNlbGVicmF0aW9uT2JqZWN0c1wiLGdseXBoOlwiZWQ1NVwifSx7bmFtZTpcIkVtb2ppVGFiRm9vZFBsYW50c1wiLGdseXBoOlwiZWQ1NlwifSx7bmFtZTpcIkVtb2ppVGFiVHJhbnNpdFBsYWNlc1wiLGdseXBoOlwiZWQ1N1wifSx7bmFtZTpcIkVtb2ppVGFiU3ltYm9sc1wiLGdseXBoOlwiZWQ1OFwifSx7bmFtZTpcIkVtb2ppVGFiVGV4dFNtaWxlc1wiLGdseXBoOlwiZWQ1OVwifSx7bmFtZTpcIkVtb2ppVGFiRmF2b3JpdGVzXCIsZ2x5cGg6XCJlZDVhXCJ9LHtuYW1lOlwiRW1vamlTd2F0Y2hcIixnbHlwaDpcImVkNWJcIn0se25hbWU6XCJDb25uZWN0QXBwXCIsZ2x5cGg6XCJlZDVjXCJ9LHtuYW1lOlwiQ29tcGFuaW9uRGV2aWNlRnJhbWV3b3JrXCIsZ2x5cGg6XCJlZDVkXCJ9LHtuYW1lOlwiUnVsZXJcIixnbHlwaDpcImVkNWVcIn0se25hbWU6XCJGaW5nZXJJbmtpbmdcIixnbHlwaDpcImVkNWZcIn0se25hbWU6XCJTdHJva2VFcmFzZVwiLGdseXBoOlwiZWQ2MFwifSx7bmFtZTpcIlBvaW50RXJhc2VcIixnbHlwaDpcImVkNjFcIn0se25hbWU6XCJDbGVhckFsbElua1wiLGdseXBoOlwiZWQ2MlwifSx7bmFtZTpcIlBlbmNpbFwiLGdseXBoOlwiZWQ2M1wifSx7bmFtZTpcIk1hcmtlclwiLGdseXBoOlwiZWQ2NFwifSx7bmFtZTpcIklua2luZ0NhcmV0XCIsZ2x5cGg6XCJlZDY1XCJ9LHtuYW1lOlwiSW5raW5nQ29sb3JPdXRsaW5lXCIsZ2x5cGg6XCJlZDY2XCJ9LHtuYW1lOlwiSW5raW5nQ29sb3JGaWxsXCIsZ2x5cGg6XCJlZDY3XCJ9LHtuYW1lOlwiSGFyZERyaXZlXCIsZ2x5cGg6XCJlZGEyXCJ9LHtuYW1lOlwiTmV0d29ya0FkYXB0ZXJcIixnbHlwaDpcImVkYTNcIn0se25hbWU6XCJUb3VjaHNjcmVlblwiLGdseXBoOlwiZWRhNFwifSx7bmFtZTpcIk5ldHdvcmtQcmludGVyXCIsZ2x5cGg6XCJlZGE1XCJ9LHtuYW1lOlwiQ2xvdWRQcmludGVyXCIsZ2x5cGg6XCJlZGE2XCJ9LHtuYW1lOlwiS2V5Ym9hcmRTaG9ydGN1dFwiLGdseXBoOlwiZWRhN1wifSx7bmFtZTpcIkJydXNoU2l6ZVwiLGdseXBoOlwiZWRhOFwifSx7bmFtZTpcIk5hcnJhdG9yRm9yd2FyZFwiLGdseXBoOlwiZWRhOVwifSx7bmFtZTpcIk5hcnJhdG9yRm9yd2FyZE1pcnJvcmVkXCIsZ2x5cGg6XCJlZGFhXCJ9LHtuYW1lOlwiU3luY0JhZGdlMTJcIixnbHlwaDpcImVkYWJcIn0se25hbWU6XCJSaW5nZXJCYWRnZTEyXCIsZ2x5cGg6XCJlZGFjXCJ9LHtuYW1lOlwiQXN0ZXJpc2tCYWRnZTEyXCIsZ2x5cGg6XCJlZGFkXCJ9LHtuYW1lOlwiRXJyb3JCYWRnZTEyXCIsZ2x5cGg6XCJlZGFlXCJ9LHtuYW1lOlwiQ2lyY2xlUmluZ0JhZGdlMTJcIixnbHlwaDpcImVkYWZcIn0se25hbWU6XCJDaXJjbGVGaWxsQmFkZ2UxMlwiLGdseXBoOlwiZWRiMFwifSx7bmFtZTpcIkltcG9ydGFudEJhZGdlMTJcIixnbHlwaDpcImVkYjFcIn0se25hbWU6XCJNYWlsQmFkZ2UxMlwiLGdseXBoOlwiZWRiM1wifSx7bmFtZTpcIlBhdXNlQmFkZ2UxMlwiLGdseXBoOlwiZWRiNFwifSx7bmFtZTpcIlBsYXlCYWRnZTEyXCIsZ2x5cGg6XCJlZGI1XCJ9LHtuYW1lOlwiUGVuV29ya3NwYWNlXCIsZ2x5cGg6XCJlZGM2XCJ9LHtuYW1lOlwiQ2FyZXRMZWZ0OFwiLGdseXBoOlwiZWRkNVwifSx7bmFtZTpcIkNhcmV0UmlnaHQ4XCIsZ2x5cGg6XCJlZGQ2XCJ9LHtuYW1lOlwiQ2FyZXRVcDhcIixnbHlwaDpcImVkZDdcIn0se25hbWU6XCJDYXJldERvd244XCIsZ2x5cGg6XCJlZGQ4XCJ9LHtuYW1lOlwiQ2FyZXRMZWZ0U29saWQ4XCIsZ2x5cGg6XCJlZGQ5XCJ9LHtuYW1lOlwiQ2FyZXRSaWdodFNvbGlkOFwiLGdseXBoOlwiZWRkYVwifSx7bmFtZTpcIkNhcmV0VXBTb2xpZDhcIixnbHlwaDpcImVkZGJcIn0se25hbWU6XCJDYXJldERvd25Tb2xpZDhcIixnbHlwaDpcImVkZGNcIn0se25hbWU6XCJTdHJpa2V0aHJvdWdoXCIsZ2x5cGg6XCJlZGUwXCJ9LHtuYW1lOlwiRXhwb3J0XCIsZ2x5cGg6XCJlZGUxXCJ9LHtuYW1lOlwiRXhwb3J0TWlycm9yZWRcIixnbHlwaDpcImVkZTJcIn0se25hbWU6XCJCdXR0b25NZW51XCIsZ2x5cGg6XCJlZGUzXCJ9LHtuYW1lOlwiQ2xvdWRTZWFyY2hcIixnbHlwaDpcImVkZTRcIn0se25hbWU6XCJQaW55aW5JTUVMb2dvXCIsZ2x5cGg6XCJlZGU1XCJ9LHtuYW1lOlwiQ2FsbGlncmFwaHlQZW5cIixnbHlwaDpcImVkZmJcIn0se25hbWU6XCJSZXBseU1pcnJvcmVkXCIsZ2x5cGg6XCJlZTM1XCJ9LHtuYW1lOlwiTG9ja3NjcmVlbkRlc2t0b3BcIixnbHlwaDpcImVlM2ZcIn0se25hbWU6XCJUYXNrVmlld1NldHRpbmdzXCIsZ2x5cGg6XCJlZTQwXCJ9LHtuYW1lOlwiTWluaUV4cGFuZDJNaXJyb3JlZFwiLGdseXBoOlwiZWU0N1wifSx7bmFtZTpcIk1pbmlDb250cmFjdDJNaXJyb3JlZFwiLGdseXBoOlwiZWU0OVwifSx7bmFtZTpcIlBsYXkzNlwiLGdseXBoOlwiZWU0YVwifSx7bmFtZTpcIlBlblBhbGV0dGVcIixnbHlwaDpcImVlNTZcIn0se25hbWU6XCJHdWVzdFVzZXJcIixnbHlwaDpcImVlNTdcIn0se25hbWU6XCJTZXR0aW5nc0JhdHRlcnlcIixnbHlwaDpcImVlNjNcIn0se25hbWU6XCJUYXNrYmFyUGhvbmVcIixnbHlwaDpcImVlNjRcIn0se25hbWU6XCJMb2NrU2NyZWVuR2xhbmNlXCIsZ2x5cGg6XCJlZTY1XCJ9LHtuYW1lOlwiR2VuZXJpY1NjYW5cIixnbHlwaDpcImVlNmZcIn0se25hbWU6XCJJbWFnZUV4cG9ydFwiLGdseXBoOlwiZWU3MVwifSx7bmFtZTpcIldpZmlFdGhlcm5ldFwiLGdseXBoOlwiZWU3N1wifSx7bmFtZTpcIkFjdGlvbkNlbnRlclF1aWV0XCIsZ2x5cGg6XCJlZTc5XCJ9LHtuYW1lOlwiQWN0aW9uQ2VudGVyUXVpZXROb3RpZmljYXRpb25cIixnbHlwaDpcImVlN2FcIn0se25hbWU6XCJUcmFja2Vyc01pcnJvcmVkXCIsZ2x5cGg6XCJlZTkyXCJ9LHtuYW1lOlwiRGF0ZVRpbWVNaXJyb3JlZFwiLGdseXBoOlwiZWU5M1wifSx7bmFtZTpcIldoZWVsXCIsZ2x5cGg6XCJlZTk0XCJ9LHtuYW1lOlwiVmlydHVhbE1hY2hpbmVHcm91cFwiLGdseXBoOlwiZWVhM1wifSx7bmFtZTpcIkJ1dHRvblZpZXcyXCIsZ2x5cGg6XCJlZWNhXCJ9LHtuYW1lOlwiUGVuV29ya3NwYWNlTWlycm9yZWRcIixnbHlwaDpcImVmMTVcIn0se25hbWU6XCJQZW5QYWxldHRlTWlycm9yZWRcIixnbHlwaDpcImVmMTZcIn0se25hbWU6XCJTdHJva2VFcmFzZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE3XCJ9LHtuYW1lOlwiUG9pbnRFcmFzZU1pcnJvcmVkXCIsZ2x5cGg6XCJlZjE4XCJ9LHtuYW1lOlwiQ2xlYXJBbGxJbmtNaXJyb3JlZFwiLGdseXBoOlwiZWYxOVwifSx7bmFtZTpcIkJhY2tncm91bmRUb2dnbGVcIixnbHlwaDpcImVmMWZcIn0se25hbWU6XCJNYXJxdWVlXCIsZ2x5cGg6XCJlZjIwXCJ9LHtuYW1lOlwiQ2hyb21lQ2xvc2VDb250cmFzdFwiLGdseXBoOlwiZWYyY1wifSx7bmFtZTpcIkNocm9tZU1pbmltaXplQ29udHJhc3RcIixnbHlwaDpcImVmMmRcIn0se25hbWU6XCJDaHJvbWVNYXhpbWl6ZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJlXCJ9LHtuYW1lOlwiQ2hyb21lUmVzdG9yZUNvbnRyYXN0XCIsZ2x5cGg6XCJlZjJmXCJ9LHtuYW1lOlwiVHJhZmZpY0xpZ2h0XCIsZ2x5cGg6XCJlZjMxXCJ9LHtuYW1lOlwiUmVwbGF5XCIsZ2x5cGg6XCJlZjNiXCJ9LHtuYW1lOlwiRXllZHJvcHBlclwiLGdseXBoOlwiZWYzY1wifSx7bmFtZTpcIkxpbmVEaXNwbGF5XCIsZ2x5cGg6XCJlZjNkXCJ9LHtuYW1lOlwiUElOUGFkXCIsZ2x5cGg6XCJlZjNlXCJ9LHtuYW1lOlwiU2lnbmF0dXJlQ2FwdHVyZVwiLGdseXBoOlwiZWYzZlwifSx7bmFtZTpcIkNoaXBDYXJkQ3JlZGl0Q2FyZFJlYWRlclwiLGdseXBoOlwiZWY0MFwifSx7bmFtZTpcIk1hcmtldERvd25cIixnbHlwaDpcImVmNDJcIn0se25hbWU6XCJQbGF5ZXJTZXR0aW5nc1wiLGdseXBoOlwiZWY1OFwifSx7bmFtZTpcIkxhbmRzY2FwZU9yaWVudGF0aW9uXCIsZ2x5cGg6XCJlZjZiXCJ9LHtuYW1lOlwiRmxvd1wiLGdseXBoOlwiZWY5MFwifSx7bmFtZTpcIlRvdWNocGFkXCIsZ2x5cGg6XCJlZmE1XCJ9LHtuYW1lOlwiU3BlZWNoXCIsZ2x5cGg6XCJlZmE5XCJ9LHtuYW1lOlwiS25vd2xlZGdlQXJ0aWNsZVwiLGdseXBoOlwiZjAwMFwifSx7bmFtZTpcIlJlbGF0aW9uc2hpcFwiLGdseXBoOlwiZjAwM1wifSx7bmFtZTpcIlppcEZvbGRlclwiLGdseXBoOlwiZjAxMlwifSx7bmFtZTpcIkRlZmF1bHRBUE5cIixnbHlwaDpcImYwODBcIn0se25hbWU6XCJVc2VyQVBOXCIsZ2x5cGg6XCJmMDgxXCJ9LHtuYW1lOlwiRG91YmxlUGlueWluXCIsZ2x5cGg6XCJmMDg1XCJ9LHtuYW1lOlwiQmx1ZUxpZ2h0XCIsZ2x5cGg6XCJmMDhjXCJ9LHtuYW1lOlwiQ2FyZXRTb2xpZExlZnRcIixnbHlwaDpcImYwOGRcIn0se25hbWU6XCJDYXJldFNvbGlkRG93blwiLGdseXBoOlwiZjA4ZVwifSx7bmFtZTpcIkNhcmV0U29saWRSaWdodFwiLGdseXBoOlwiZjA4ZlwifSx7bmFtZTpcIkNhcmV0U29saWRVcFwiLGdseXBoOlwiZjA5MFwifSx7bmFtZTpcIkJ1dHRvbkFcIixnbHlwaDpcImYwOTNcIn0se25hbWU6XCJCdXR0b25CXCIsZ2x5cGg6XCJmMDk0XCJ9LHtuYW1lOlwiQnV0dG9uWVwiLGdseXBoOlwiZjA5NVwifSx7bmFtZTpcIkJ1dHRvblhcIixnbHlwaDpcImYwOTZcIn0se25hbWU6XCJBcnJvd1VwOFwiLGdseXBoOlwiZjBhZFwifSx7bmFtZTpcIkFycm93RG93bjhcIixnbHlwaDpcImYwYWVcIn0se25hbWU6XCJBcnJvd1JpZ2h0OFwiLGdseXBoOlwiZjBhZlwifSx7bmFtZTpcIkFycm93TGVmdDhcIixnbHlwaDpcImYwYjBcIn0se25hbWU6XCJRdWFyZW50aW5lZEl0ZW1zXCIsZ2x5cGg6XCJmMGIyXCJ9LHtuYW1lOlwiUXVhcmVudGluZWRJdGVtc01pcnJvcmVkXCIsZ2x5cGg6XCJmMGIzXCJ9LHtuYW1lOlwiUHJvdHJhY3RvclwiLGdseXBoOlwiZjBiNFwifSx7bmFtZTpcIkNoZWNrbGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGI1XCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlN1wiLGdseXBoOlwiZjBiNlwifSx7bmFtZTpcIlN0YXR1c0NoZWNrbWFyazdcIixnbHlwaDpcImYwYjdcIn0se25hbWU6XCJTdGF0dXNFcnJvckNpcmNsZTdcIixnbHlwaDpcImYwYjhcIn0se25hbWU6XCJDb25uZWN0ZWRcIixnbHlwaDpcImYwYjlcIn0se25hbWU6XCJQZW5jaWxGaWxsXCIsZ2x5cGg6XCJmMGM2XCJ9LHtuYW1lOlwiQ2FsbGlncmFwaHlGaWxsXCIsZ2x5cGg6XCJmMGM3XCJ9LHtuYW1lOlwiUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGNhXCJ9LHtuYW1lOlwiUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBjYlwifSx7bmFtZTpcIlRocmVlUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGNjXCJ9LHtuYW1lOlwiVGhyZWVRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGNkXCJ9LHtuYW1lOlwiUXVpZXRIb3Vyc0JhZGdlMTJcIixnbHlwaDpcImYwY2VcIn0se25hbWU6XCJCYWNrTWlycm9yZWRcIixnbHlwaDpcImYwZDJcIn0se25hbWU6XCJGb3J3YXJkTWlycm9yZWRcIixnbHlwaDpcImYwZDNcIn0se25hbWU6XCJDaHJvbWVCYWNrQ29udHJhc3RcIixnbHlwaDpcImYwZDVcIn0se25hbWU6XCJDaHJvbWVCYWNrQ29udHJhc3RNaXJyb3JlZFwiLGdseXBoOlwiZjBkNlwifSx7bmFtZTpcIkNocm9tZUJhY2tUb1dpbmRvd0NvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ3XCJ9LHtuYW1lOlwiQ2hyb21lRnVsbFNjcmVlbkNvbnRyYXN0XCIsZ2x5cGg6XCJmMGQ4XCJ9LHtuYW1lOlwiR3JpZFZpZXdcIixnbHlwaDpcImYwZTJcIn0se25hbWU6XCJDbGlwYm9hcmRMaXN0XCIsZ2x5cGg6XCJmMGUzXCJ9LHtuYW1lOlwiQ2xpcGJvYXJkTGlzdE1pcnJvcmVkXCIsZ2x5cGg6XCJmMGU0XCJ9LHtuYW1lOlwiT3V0bGluZVF1YXJ0ZXJTdGFyTGVmdFwiLGdseXBoOlwiZjBlNVwifSx7bmFtZTpcIk91dGxpbmVRdWFydGVyU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGU2XCJ9LHtuYW1lOlwiT3V0bGluZUhhbGZTdGFyTGVmdFwiLGdseXBoOlwiZjBlN1wifSx7bmFtZTpcIk91dGxpbmVIYWxmU3RhclJpZ2h0XCIsZ2x5cGg6XCJmMGU4XCJ9LHtuYW1lOlwiT3V0bGluZVRocmVlUXVhcnRlclN0YXJMZWZ0XCIsZ2x5cGg6XCJmMGU5XCJ9LHtuYW1lOlwiT3V0bGluZVRocmVlUXVhcnRlclN0YXJSaWdodFwiLGdseXBoOlwiZjBlYVwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUwXCIsZ2x5cGg6XCJmMGViXCJ9LHtuYW1lOlwiU3BhdGlhbFZvbHVtZTFcIixnbHlwaDpcImYwZWNcIn0se25hbWU6XCJTcGF0aWFsVm9sdW1lMlwiLGdseXBoOlwiZjBlZFwifSx7bmFtZTpcIlNwYXRpYWxWb2x1bWUzXCIsZ2x5cGg6XCJmMGVlXCJ9LHtuYW1lOlwiQXBwbGljYXRpb25HdWFyZFwiLGdseXBoOlwiZjBlZlwifSx7bmFtZTpcIk91dGxpbmVTdGFyTGVmdEhhbGZcIixnbHlwaDpcImYwZjdcIn0se25hbWU6XCJPdXRsaW5lU3RhclJpZ2h0SGFsZlwiLGdseXBoOlwiZjBmOFwifSx7bmFtZTpcIkNocm9tZUFubm90YXRlQ29udHJhc3RcIixnbHlwaDpcImYwZjlcIn0se25hbWU6XCJEZWZlbmRlckJhZGdlMTJcIixnbHlwaDpcImYwZmJcIn0se25hbWU6XCJEZXRhY2hhYmxlUENcIixnbHlwaDpcImYxMDNcIn0se25hbWU6XCJMZWZ0U3RpY2tcIixnbHlwaDpcImYxMDhcIn0se25hbWU6XCJSaWdodFN0aWNrXCIsZ2x5cGg6XCJmMTA5XCJ9LHtuYW1lOlwiVHJpZ2dlckxlZnRcIixnbHlwaDpcImYxMGFcIn0se25hbWU6XCJUcmlnZ2VyUmlnaHRcIixnbHlwaDpcImYxMGJcIn0se25hbWU6XCJCdW1wZXJMZWZ0XCIsZ2x5cGg6XCJmMTBjXCJ9LHtuYW1lOlwiQnVtcGVyUmlnaHRcIixnbHlwaDpcImYxMGRcIn0se25hbWU6XCJEcGFkXCIsZ2x5cGg6XCJmMTBlXCJ9LHtuYW1lOlwiRW5nbGlzaFB1bmN0dWF0aW9uXCIsZ2x5cGg6XCJmMTEwXCJ9LHtuYW1lOlwiQ2hpbmVzZVB1bmN0dWF0aW9uXCIsZ2x5cGg6XCJmMTExXCJ9LHtuYW1lOlwiSE1EXCIsZ2x5cGg6XCJmMTE5XCJ9LHtuYW1lOlwiQ3RybFNwYXRpYWxSaWdodFwiLGdseXBoOlwiZjExYlwifSx7bmFtZTpcIlBhZ2luYXRpb25Eb3RPdXRsaW5lMTBcIixnbHlwaDpcImYxMjZcIn0se25hbWU6XCJQYWdpbmF0aW9uRG90U29saWQxMFwiLGdseXBoOlwiZjEyN1wifSx7bmFtZTpcIlN0cm9rZUVyYXNlMlwiLGdseXBoOlwiZjEyOFwifSx7bmFtZTpcIlNtYWxsRXJhc2VcIixnbHlwaDpcImYxMjlcIn0se25hbWU6XCJMYXJnZUVyYXNlXCIsZ2x5cGg6XCJmMTJhXCJ9LHtuYW1lOlwiRm9sZGVySG9yaXpvbnRhbFwiLGdseXBoOlwiZjEyYlwifSx7bmFtZTpcIk1pY3JvcGhvbmVMaXN0ZW5pbmdcIixnbHlwaDpcImYxMmVcIn0se25hbWU6XCJTdGF0dXNFeGNsYW1hdGlvbkNpcmNsZTdcIixnbHlwaDpcImYxMmZcIn0se25hbWU6XCJWaWRlbzM2MFwiLGdseXBoOlwiZjEzMVwifSx7bmFtZTpcIkdpZnRib3hPcGVuXCIsZ2x5cGg6XCJmMTMzXCJ9LHtuYW1lOlwiU3RhdHVzQ2lyY2xlT3V0ZXJcIixnbHlwaDpcImYxMzZcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVJbm5lclwiLGdseXBoOlwiZjEzN1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVJpbmdcIixnbHlwaDpcImYxMzhcIn0se25hbWU6XCJTdGF0dXNUcmlhbmdsZU91dGVyXCIsZ2x5cGg6XCJmMTM5XCJ9LHtuYW1lOlwiU3RhdHVzVHJpYW5nbGVJbm5lclwiLGdseXBoOlwiZjEzYVwifSx7bmFtZTpcIlN0YXR1c1RyaWFuZ2xlRXhjbGFtYXRpb25cIixnbHlwaDpcImYxM2JcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVFeGNsYW1hdGlvblwiLGdseXBoOlwiZjEzY1wifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUVycm9yWFwiLGdseXBoOlwiZjEzZFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUNoZWNrbWFya1wiLGdseXBoOlwiZjEzZVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUluZm9cIixnbHlwaDpcImYxM2ZcIn0se25hbWU6XCJTdGF0dXNDaXJjbGVCbG9ja1wiLGdseXBoOlwiZjE0MFwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZUJsb2NrMlwiLGdseXBoOlwiZjE0MVwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVF1ZXN0aW9uTWFya1wiLGdseXBoOlwiZjE0MlwifSx7bmFtZTpcIlN0YXR1c0NpcmNsZVN5bmNcIixnbHlwaDpcImYxNDNcIn0se25hbWU6XCJEaWFsMVwiLGdseXBoOlwiZjE0NlwifSx7bmFtZTpcIkRpYWwyXCIsZ2x5cGg6XCJmMTQ3XCJ9LHtuYW1lOlwiRGlhbDNcIixnbHlwaDpcImYxNDhcIn0se25hbWU6XCJEaWFsNFwiLGdseXBoOlwiZjE0OVwifSx7bmFtZTpcIkRpYWw1XCIsZ2x5cGg6XCJmMTRhXCJ9LHtuYW1lOlwiRGlhbDZcIixnbHlwaDpcImYxNGJcIn0se25hbWU6XCJEaWFsN1wiLGdseXBoOlwiZjE0Y1wifSx7bmFtZTpcIkRpYWw4XCIsZ2x5cGg6XCJmMTRkXCJ9LHtuYW1lOlwiRGlhbDlcIixnbHlwaDpcImYxNGVcIn0se25hbWU6XCJEaWFsMTBcIixnbHlwaDpcImYxNGZcIn0se25hbWU6XCJEaWFsMTFcIixnbHlwaDpcImYxNTBcIn0se25hbWU6XCJEaWFsMTJcIixnbHlwaDpcImYxNTFcIn0se25hbWU6XCJEaWFsMTNcIixnbHlwaDpcImYxNTJcIn0se25hbWU6XCJEaWFsMTRcIixnbHlwaDpcImYxNTNcIn0se25hbWU6XCJEaWFsMTVcIixnbHlwaDpcImYxNTRcIn0se25hbWU6XCJEaWFsMTZcIixnbHlwaDpcImYxNTVcIn0se25hbWU6XCJEaWFsU2hhcGUxXCIsZ2x5cGg6XCJmMTU2XCJ9LHtuYW1lOlwiRGlhbFNoYXBlMlwiLGdseXBoOlwiZjE1N1wifSx7bmFtZTpcIkRpYWxTaGFwZTNcIixnbHlwaDpcImYxNThcIn0se25hbWU6XCJEaWFsU2hhcGU0XCIsZ2x5cGg6XCJmMTU5XCJ9LHtuYW1lOlwiQ2xvc2VkQ2FwdGlvbnNJbnRlcm5hdGlvbmFsXCIsZ2x5cGg6XCJmMTVmXCJ9LHtuYW1lOlwiVG9sbFNvbGlkXCIsZ2x5cGg6XCJmMTYxXCJ9LHtuYW1lOlwiVHJhZmZpY0Nvbmdlc3Rpb25Tb2xpZFwiLGdseXBoOlwiZjE2M1wifSx7bmFtZTpcIkV4cGxvcmVDb250ZW50U2luZ2xlXCIsZ2x5cGg6XCJmMTY0XCJ9LHtuYW1lOlwiQ29sbGFwc2VDb250ZW50XCIsZ2x5cGg6XCJmMTY1XCJ9LHtuYW1lOlwiQ29sbGFwc2VDb250ZW50U2luZ2xlXCIsZ2x5cGg6XCJmMTY2XCJ9LHtuYW1lOlwiSW5mb1NvbGlkXCIsZ2x5cGg6XCJmMTY3XCJ9LHtuYW1lOlwiR3JvdXBMaXN0XCIsZ2x5cGg6XCJmMTY4XCJ9LHtuYW1lOlwiQ2FyZXRCb3R0b21SaWdodFNvbGlkQ2VudGVyOFwiLGdseXBoOlwiZjE2OVwifSx7bmFtZTpcIlByb2dyZXNzUmluZ0RvdHNcIixnbHlwaDpcImYxNmFcIn0se25hbWU6XCJDaGVja2JveDE0XCIsZ2x5cGg6XCJmMTZiXCJ9LHtuYW1lOlwiQ2hlY2tib3hDb21wb3NpdGUxNFwiLGdseXBoOlwiZjE2Y1wifSx7bmFtZTpcIkNoZWNrYm94SW5kZXRlcm1pbmF0ZUNvbWJvMTRcIixnbHlwaDpcImYxNmRcIn0se25hbWU6XCJDaGVja2JveEluZGV0ZXJtaW5hdGVDb21ib1wiLGdseXBoOlwiZjE2ZVwifSx7bmFtZTpcIlN0YXR1c1BhdXNlN1wiLGdseXBoOlwiZjE3NVwifSx7bmFtZTpcIkNoYXJhY3RlckFwcGVhcmFuY2VcIixnbHlwaDpcImYxN2ZcIn0se25hbWU6XCJMZXhpY29uXCIsZ2x5cGg6XCJmMTgwXCJ9LHtuYW1lOlwiU2NyZWVuVGltZVwiLGdseXBoOlwiZjE4MlwifSx7bmFtZTpcIkhlYWRsZXNzRGV2aWNlXCIsZ2x5cGg6XCJmMTkxXCJ9LHtuYW1lOlwiTmV0d29ya1NoYXJpbmdcIixnbHlwaDpcImYxOTNcIn0se25hbWU6XCJFeWVHYXplXCIsZ2x5cGg6XCJmMTlkXCJ9LHtuYW1lOlwiVG9nZ2xlTGVmdFwiLGdseXBoOlwiZjE5ZVwifSx7bmFtZTpcIlRvZ2dsZVJpZ2h0XCIsZ2x5cGg6XCJmMTlmXCJ9LHtuYW1lOlwiV2luZG93c0luc2lkZXJcIixnbHlwaDpcImYxYWRcIn0se25hbWU6XCJDaHJvbWVTd2l0Y2hcIixnbHlwaDpcImYxY2JcIn0se25hbWU6XCJDaHJvbWVTd2l0Y2hDb250YXN0XCIsZ2x5cGg6XCJmMWNjXCJ9LHtuYW1lOlwiU3RhdHVzQ2hlY2ttYXJrXCIsZ2x5cGg6XCJmMWQ4XCJ9LHtuYW1lOlwiU3RhdHVzQ2hlY2ttYXJrTGVmdFwiLGdseXBoOlwiZjFkOVwifSx7bmFtZTpcIktleWJvYXJkTGVmdEFsaWduZWRcIixnbHlwaDpcImYyMGNcIn0se25hbWU6XCJLZXlib2FyZFJpZ2h0QWxpZ25lZFwiLGdseXBoOlwiZjIwZFwifSx7bmFtZTpcIktleWJvYXJkU2V0dGluZ3NcIixnbHlwaDpcImYyMTBcIn0se25hbWU6XCJOZXR3b3JrUGh5c2ljYWxcIixnbHlwaDpcImYyMTFcIn0se25hbWU6XCJJT1RcIixnbHlwaDpcImYyMmNcIn0se25hbWU6XCJVbmtub3duTWlycm9yZWRcIixnbHlwaDpcImYyMmVcIn0se25hbWU6XCJWaWV3RGFzaGJvYXJkXCIsZ2x5cGg6XCJmMjQ2XCJ9LHtuYW1lOlwiRXhwbG9pdFByb3RlY3Rpb25TZXR0aW5nc1wiLGdseXBoOlwiZjI1OVwifSx7bmFtZTpcIktleWJvYXJkTmFycm93XCIsZ2x5cGg6XCJmMjYwXCJ9LHtuYW1lOlwiS2V5Ym9hcmQxMktleVwiLGdseXBoOlwiZjI2MVwifSx7bmFtZTpcIktleWJvYXJkRG9ja1wiLGdseXBoOlwiZjI2YlwifSx7bmFtZTpcIktleWJvYXJkVW5kb2NrXCIsZ2x5cGg6XCJmMjZjXCJ9LHtuYW1lOlwiS2V5Ym9hcmRMZWZ0RG9ja1wiLGdseXBoOlwiZjI2ZFwifSx7bmFtZTpcIktleWJvYXJkUmlnaHREb2NrXCIsZ2x5cGg6XCJmMjZlXCJ9LHtuYW1lOlwiRWFyXCIsZ2x5cGg6XCJmMjcwXCJ9LHtuYW1lOlwiUG9pbnRlckhhbmRcIixnbHlwaDpcImYyNzFcIn0se25hbWU6XCJCdWxsc2V5ZVwiLGdseXBoOlwiZjI3MlwifSx7bmFtZTpcIkRvY3VtZW50QXBwcm92YWxcIixnbHlwaDpcImYyOGJcIn0se25hbWU6XCJMb2NhbGVMYW5ndWFnZVwiLGdseXBoOlwiZjJiN1wifSx7bmFtZTpcIlBhc3NpdmVBdXRoZW50aWNhdGlvblwiLGdseXBoOlwiZjMyYVwifSx7bmFtZTpcIkNvbG9yU29saWRcIixnbHlwaDpcImYzNTRcIn0se25hbWU6XCJOZXR3b3JrT2ZmbGluZVwiLGdseXBoOlwiZjM4NFwifSx7bmFtZTpcIk5ldHdvcmtDb25uZWN0ZWRcIixnbHlwaDpcImYzODVcIn0se25hbWU6XCJOZXR3b3JrQ29ubmVjdGVkQ2hlY2ttYXJrXCIsZ2x5cGg6XCJmMzg2XCJ9LHtuYW1lOlwiU2lnbk91dFwiLGdseXBoOlwiZjNiMVwifSx7bmFtZTpcIlN0YXR1c0luZm9cIixnbHlwaDpcImYzY2NcIn0se25hbWU6XCJTdGF0dXNJbmZvTGVmdFwiLGdseXBoOlwiZjNjZFwifSx7bmFtZTpcIk5lYXJieVNoYXJpbmdcIixnbHlwaDpcImYzZTJcIn0se25hbWU6XCJDdHJsU3BhdGlhbExlZnRcIixnbHlwaDpcImYzZTdcIn0se25hbWU6XCJJbnRlcmFjdGl2ZURhc2hib2FyZFwiLGdseXBoOlwiZjQwNFwifSx7bmFtZTpcIkRlY2xpbmVDYWxsXCIsZ2x5cGg6XCJmNDA1XCJ9LHtuYW1lOlwiQ2xpcHBpbmdUb29sXCIsZ2x5cGg6XCJmNDA2XCJ9LHtuYW1lOlwiUmVjdGFuZ3VsYXJDbGlwcGluZ1wiLGdseXBoOlwiZjQwN1wifSx7bmFtZTpcIkZyZWVGb3JtQ2xpcHBpbmdcIixnbHlwaDpcImY0MDhcIn0se25hbWU6XCJDb3B5VG9cIixnbHlwaDpcImY0MTNcIn0se25hbWU6XCJJREJhZGdlXCIsZ2x5cGg6XCJmNDI3XCJ9LHtuYW1lOlwiRHluYW1pY0xvY2tcIixnbHlwaDpcImY0MzlcIn0se25hbWU6XCJQZW5UaXBzXCIsZ2x5cGg6XCJmNDVlXCJ9LHtuYW1lOlwiUGVuVGlwc01pcnJvcmVkXCIsZ2x5cGg6XCJmNDVmXCJ9LHtuYW1lOlwiSFdQSm9pblwiLGdseXBoOlwiZjQ2MFwifSx7bmFtZTpcIkhXUEluc2VydFwiLGdseXBoOlwiZjQ2MVwifSx7bmFtZTpcIkhXUFN0cmlrZVRocm91Z2hcIixnbHlwaDpcImY0NjJcIn0se25hbWU6XCJIV1BTY3JhdGNoT3V0XCIsZ2x5cGg6XCJmNDYzXCJ9LHtuYW1lOlwiSFdQU3BsaXRcIixnbHlwaDpcImY0NjRcIn0se25hbWU6XCJIV1BOZXdMaW5lXCIsZ2x5cGg6XCJmNDY1XCJ9LHtuYW1lOlwiSFdQT3ZlcndyaXRlXCIsZ2x5cGg6XCJmNDY2XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmcxXCIsZ2x5cGg6XCJmNDczXCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmcyXCIsZ2x5cGg6XCJmNDc0XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmczXCIsZ2x5cGg6XCJmNDc1XCJ9LHtuYW1lOlwiTW9iV2lmaVdhcm5pbmc0XCIsZ2x5cGg6XCJmNDc2XCJ9LHtuYW1lOlwiTWljTG9jYXRpb25Db21ib1wiLGdseXBoOlwiZjQ3ZlwifSx7bmFtZTpcIkdsb2JlMlwiLGdseXBoOlwiZjQ5YVwifSx7bmFtZTpcIlNwZWNpYWxFZmZlY3RTaXplXCIsZ2x5cGg6XCJmNGE1XCJ9LHtuYW1lOlwiR0lGXCIsZ2x5cGg6XCJmNGE5XCJ9LHtuYW1lOlwiU3RpY2tlcjJcIixnbHlwaDpcImY0YWFcIn0se25hbWU6XCJTdXJmYWNlSHViU2VsZWN0ZWRcIixnbHlwaDpcImY0YmVcIn0se25hbWU6XCJIb2xvTGVuc1NlbGVjdGVkXCIsZ2x5cGg6XCJmNGJmXCJ9LHtuYW1lOlwiRWFyYnVkXCIsZ2x5cGg6XCJmNGMwXCJ9LHtuYW1lOlwiTWl4Vm9sdW1lc1wiLGdseXBoOlwiZjRjM1wifSx7bmFtZTpcIlNhZmVcIixnbHlwaDpcImY1NDBcIn0se25hbWU6XCJMYXB0b3BTZWN1cmVcIixnbHlwaDpcImY1NTJcIn0se25hbWU6XCJQcmludERlZmF1bHRcIixnbHlwaDpcImY1NmRcIn0se25hbWU6XCJQYWdlTWlycm9yZWRcIixnbHlwaDpcImY1NmVcIn0se25hbWU6XCJMYW5kc2NhcGVPcmllbnRhdGlvbk1pcnJvcmVkXCIsZ2x5cGg6XCJmNTZmXCJ9LHtuYW1lOlwiQ29sb3JPZmZcIixnbHlwaDpcImY1NzBcIn0se25hbWU6XCJQcmludEFsbFBhZ2VzXCIsZ2x5cGg6XCJmNTcxXCJ9LHtuYW1lOlwiUHJpbnRDdXN0b21SYW5nZVwiLGdseXBoOlwiZjU3MlwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE5hcnJvd1wiLGdseXBoOlwiZjU3M1wifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE5vcm1hbFwiLGdseXBoOlwiZjU3NFwifSx7bmFtZTpcIlBhZ2VNYXJnaW5Qb3J0cmFpdE1vZGVyYXRlXCIsZ2x5cGg6XCJmNTc1XCJ9LHtuYW1lOlwiUGFnZU1hcmdpblBvcnRyYWl0V2lkZVwiLGdseXBoOlwiZjU3NlwifSx7bmFtZTpcIlBhZ2VNYXJnaW5MYW5kc2NhcGVOYXJyb3dcIixnbHlwaDpcImY1NzdcIn0se25hbWU6XCJQYWdlTWFyZ2luTGFuZHNjYXBlTm9ybWFsXCIsZ2x5cGg6XCJmNTc4XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZU1vZGVyYXRlXCIsZ2x5cGg6XCJmNTc5XCJ9LHtuYW1lOlwiUGFnZU1hcmdpbkxhbmRzY2FwZVdpZGVcIixnbHlwaDpcImY1N2FcIn0se25hbWU6XCJDb2xsYXRlTGFuZHNjYXBlXCIsZ2x5cGg6XCJmNTdiXCJ9LHtuYW1lOlwiQ29sbGF0ZVBvcnRyYWl0XCIsZ2x5cGg6XCJmNTdjXCJ9LHtuYW1lOlwiQ29sbGF0ZVBvcnRyYWl0U2VwYXJhdGVkXCIsZ2x5cGg6XCJmNTdkXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlT25lU2lkZWRcIixnbHlwaDpcImY1N2VcIn0se25hbWU6XCJEdXBsZXhMYW5kc2NhcGVPbmVTaWRlZE1pcnJvcmVkXCIsZ2x5cGg6XCJmNTdmXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRMb25nRWRnZVwiLGdseXBoOlwiZjU4MFwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkTG9uZ0VkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4MVwifSx7bmFtZTpcIkR1cGxleExhbmRzY2FwZVR3b1NpZGVkU2hvcnRFZGdlXCIsZ2x5cGg6XCJmNTgyXCJ9LHtuYW1lOlwiRHVwbGV4TGFuZHNjYXBlVHdvU2lkZWRTaG9ydEVkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4M1wifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0T25lU2lkZWRcIixnbHlwaDpcImY1ODRcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdE9uZVNpZGVkTWlycm9yZWRcIixnbHlwaDpcImY1ODVcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkTG9uZ0VkZ2VcIixnbHlwaDpcImY1ODZcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkTG9uZ0VkZ2VNaXJyb3JlZFwiLGdseXBoOlwiZjU4N1wifSx7bmFtZTpcIkR1cGxleFBvcnRyYWl0VHdvU2lkZWRTaG9ydEVkZ2VcIixnbHlwaDpcImY1ODhcIn0se25hbWU6XCJEdXBsZXhQb3J0cmFpdFR3b1NpZGVkU2hvcnRFZGdlTWlycm9yZWRcIixnbHlwaDpcImY1ODlcIn0se25hbWU6XCJQUFNPbmVMYW5kc2NhcGVcIixnbHlwaDpcImY1OGFcIn0se25hbWU6XCJQUFNUd29MYW5kc2NhcGVcIixnbHlwaDpcImY1OGJcIn0se25hbWU6XCJQUFNUd29Qb3J0cmFpdFwiLGdseXBoOlwiZjU4Y1wifSx7bmFtZTpcIlBQU0ZvdXJMYW5kc2NhcGVcIixnbHlwaDpcImY1OGRcIn0se25hbWU6XCJQUFNGb3VyUG9ydHJhaXRcIixnbHlwaDpcImY1OGVcIn0se25hbWU6XCJIb2xlUHVuY2hPZmZcIixnbHlwaDpcImY1OGZcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdExlZnRcIixnbHlwaDpcImY1OTBcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdFJpZ2h0XCIsZ2x5cGg6XCJmNTkxXCJ9LHtuYW1lOlwiSG9sZVB1bmNoUG9ydHJhaXRUb3BcIixnbHlwaDpcImY1OTJcIn0se25hbWU6XCJIb2xlUHVuY2hQb3J0cmFpdEJvdHRvbVwiLGdseXBoOlwiZjU5M1wifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZUxlZnRcIixnbHlwaDpcImY1OTRcIn0se25hbWU6XCJIb2xlUHVuY2hMYW5kc2NhcGVSaWdodFwiLGdseXBoOlwiZjU5NVwifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZVRvcFwiLGdseXBoOlwiZjU5NlwifSx7bmFtZTpcIkhvbGVQdW5jaExhbmRzY2FwZUJvdHRvbVwiLGdseXBoOlwiZjU5N1wifSx7bmFtZTpcIlN0YXBsaW5nT2ZmXCIsZ2x5cGg6XCJmNTk4XCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdFRvcExlZnRcIixnbHlwaDpcImY1OTlcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VG9wUmlnaHRcIixnbHlwaDpcImY1OWFcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0Qm90dG9tUmlnaHRcIixnbHlwaDpcImY1OWJcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvTGVmdFwiLGdseXBoOlwiZjU5Y1wifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29SaWdodFwiLGdseXBoOlwiZjU5ZFwifSx7bmFtZTpcIlN0YXBsaW5nUG9ydHJhaXRUd29Ub3BcIixnbHlwaDpcImY1OWVcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0VHdvQm90dG9tXCIsZ2x5cGg6XCJmNTlmXCJ9LHtuYW1lOlwiU3RhcGxpbmdQb3J0cmFpdEJvb2tCaW5kaW5nXCIsZ2x5cGg6XCJmNWEwXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUb3BMZWZ0XCIsZ2x5cGg6XCJmNWExXCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUb3BSaWdodFwiLGdseXBoOlwiZjVhMlwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm90dG9tTGVmdFwiLGdseXBoOlwiZjVhM1wifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm90dG9tUmlnaHRcIixnbHlwaDpcImY1YTRcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b0xlZnRcIixnbHlwaDpcImY1YTVcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b1JpZ2h0XCIsZ2x5cGg6XCJmNWE2XCJ9LHtuYW1lOlwiU3RhcGxpbmdMYW5kc2NhcGVUd29Ub3BcIixnbHlwaDpcImY1YTdcIn0se25hbWU6XCJTdGFwbGluZ0xhbmRzY2FwZVR3b0JvdHRvbVwiLGdseXBoOlwiZjVhOFwifSx7bmFtZTpcIlN0YXBsaW5nTGFuZHNjYXBlQm9va0JpbmRpbmdcIixnbHlwaDpcImY1YTlcIn0se25hbWU6XCJTdGF0dXNEYXRhVHJhbnNmZXJSb2FtaW5nXCIsZ2x5cGg6XCJmNWFhXCJ9LHtuYW1lOlwiTW9iU0lNRXJyb3JcIixnbHlwaDpcImY1YWJcIn0se25hbWU6XCJDb2xsYXRlTGFuZHNjYXBlU2VwYXJhdGVkXCIsZ2x5cGg6XCJmNWFjXCJ9LHtuYW1lOlwiUFBTT25lUG9ydHJhaXRcIixnbHlwaDpcImY1YWRcIn0se25hbWU6XCJTdGFwbGluZ1BvcnRyYWl0Qm90dG9tTGVmdFwiLGdseXBoOlwiZjVhZVwifSx7bmFtZTpcIlBsYXlTb2xpZFwiLGdseXBoOlwiZjViMFwifSx7bmFtZTpcIlJlcGVhdE9mZlwiLGdseXBoOlwiZjVlN1wifSx7bmFtZTpcIlNldFwiLGdseXBoOlwiZjVlZFwifSx7bmFtZTpcIlNldFNvbGlkXCIsZ2x5cGg6XCJmNWVlXCJ9LHtuYW1lOlwiRnV6enlSZWFkaW5nXCIsZ2x5cGg6XCJmNWVmXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5MFwiLGdseXBoOlwiZjVmMlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTFcIixnbHlwaDpcImY1ZjNcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnkyXCIsZ2x5cGg6XCJmNWY0XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5M1wiLGdseXBoOlwiZjVmNVwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTRcIixnbHlwaDpcImY1ZjZcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk1XCIsZ2x5cGg6XCJmNWY3XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5NlwiLGdseXBoOlwiZjVmOFwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTdcIixnbHlwaDpcImY1ZjlcIn0se25hbWU6XCJWZXJ0aWNhbEJhdHRlcnk4XCIsZ2x5cGg6XCJmNWZhXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5OVwiLGdseXBoOlwiZjVmYlwifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeTEwXCIsZ2x5cGg6XCJmNWZjXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcwXCIsZ2x5cGg6XCJmNWZkXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcxXCIsZ2x5cGg6XCJmNWZlXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcyXCIsZ2x5cGg6XCJmNWZmXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmczXCIsZ2x5cGg6XCJmNjAwXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc0XCIsZ2x5cGg6XCJmNjAxXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc1XCIsZ2x5cGg6XCJmNjAyXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc2XCIsZ2x5cGg6XCJmNjAzXCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc3XCIsZ2x5cGg6XCJmNjA0XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc4XCIsZ2x5cGg6XCJmNjA1XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmc5XCIsZ2x5cGg6XCJmNjA2XCJ9LHtuYW1lOlwiVmVydGljYWxCYXR0ZXJ5Q2hhcmdpbmcxMFwiLGdseXBoOlwiZjYwN1wifSx7bmFtZTpcIlZlcnRpY2FsQmF0dGVyeVVua25vd25cIixnbHlwaDpcImY2MDhcIn0se25hbWU6XCJTSU1FcnJvclwiLGdseXBoOlwiZjYxOFwifSx7bmFtZTpcIlNJTU1pc3NpbmdcIixnbHlwaDpcImY2MTlcIn0se25hbWU6XCJTSU1Mb2NrXCIsZ2x5cGg6XCJmNjFhXCJ9LHtuYW1lOlwiZVNJTVwiLGdseXBoOlwiZjYxYlwifSx7bmFtZTpcImVTSU1Ob1Byb2ZpbGVcIixnbHlwaDpcImY2MWNcIn0se25hbWU6XCJlU0lNTG9ja2VkXCIsZ2x5cGg6XCJmNjFkXCJ9LHtuYW1lOlwiZVNJTUJ1c3lcIixnbHlwaDpcImY2MWVcIn0se25hbWU6XCJOb2lzZUNhbmNlbGF0aW9uXCIsZ2x5cGg6XCJmNjFmXCJ9LHtuYW1lOlwiTm9pc2VDYW5jZWxhdGlvbk9mZlwiLGdseXBoOlwiZjYyMFwifSx7bmFtZTpcIk11c2ljU2hhcmluZ1wiLGdseXBoOlwiZjYyM1wifSx7bmFtZTpcIk11c2ljU2hhcmluZ09mZlwiLGdseXBoOlwiZjYyNFwifSx7bmFtZTpcIkNpcmNsZVNoYXBlU29saWRcIixnbHlwaDpcImY2M2NcIn0se25hbWU6XCJXaWZpQ2FsbEJhcnNcIixnbHlwaDpcImY2NTdcIn0se25hbWU6XCJXaWZpQ2FsbDBcIixnbHlwaDpcImY2NThcIn0se25hbWU6XCJXaWZpQ2FsbDFcIixnbHlwaDpcImY2NTlcIn0se25hbWU6XCJXaWZpQ2FsbDJcIixnbHlwaDpcImY2NWFcIn0se25hbWU6XCJXaWZpQ2FsbDNcIixnbHlwaDpcImY2NWJcIn0se25hbWU6XCJXaWZpQ2FsbDRcIixnbHlwaDpcImY2NWNcIn0se25hbWU6XCJDSFRMYW5ndWFnZUJhclwiLGdseXBoOlwiZjY5ZVwifSx7bmFtZTpcIkNvbXBvc2VNb2RlXCIsZ2x5cGg6XCJmNmE5XCJ9LHtuYW1lOlwiRXhwcmVzc2l2ZUlucHV0RW50cnlcIixnbHlwaDpcImY2YjhcIn0se25hbWU6XCJFbW9qaVRhYk1vcmVTeW1ib2xzXCIsZ2x5cGg6XCJmNmJhXCJ9LHtuYW1lOlwiV2ViU2VhcmNoXCIsZ2x5cGg6XCJmNmZhXCJ9LHtuYW1lOlwiS2lvc2tcIixnbHlwaDpcImY3MTJcIn0se25hbWU6XCJSVFRMb2dvXCIsZ2x5cGg6XCJmNzE0XCJ9LHtuYW1lOlwiVm9pY2VDYWxsXCIsZ2x5cGg6XCJmNzE1XCJ9LHtuYW1lOlwiR29Ub01lc3NhZ2VcIixnbHlwaDpcImY3MTZcIn0se25hbWU6XCJSZXR1cm5Ub0NhbGxcIixnbHlwaDpcImY3MWFcIn0se25hbWU6XCJTdGFydFByZXNlbnRpbmdcIixnbHlwaDpcImY3MWNcIn0se25hbWU6XCJTdG9wUHJlc2VudGluZ1wiLGdseXBoOlwiZjcxZFwifSx7bmFtZTpcIlByb2R1Y3Rpdml0eU1vZGVcIixnbHlwaDpcImY3MWVcIn0se25hbWU6XCJTZXRIaXN0b3J5U3RhdHVzXCIsZ2x5cGg6XCJmNzM4XCJ9LHtuYW1lOlwiU2V0SGlzdG9yeVN0YXR1czJcIixnbHlwaDpcImY3MzlcIn0se25hbWU6XCJLZXlib2FyZHNldHRpbmdzMjBcIixnbHlwaDpcImY3M2RcIn0se25hbWU6XCJPbmVIYW5kZWRSaWdodDIwXCIsZ2x5cGg6XCJmNzNlXCJ9LHtuYW1lOlwiT25lSGFuZGVkTGVmdDIwXCIsZ2x5cGg6XCJmNzNmXCJ9LHtuYW1lOlwiU3BsaXQyMFwiLGdseXBoOlwiZjc0MFwifSx7bmFtZTpcIkZ1bGwyMFwiLGdseXBoOlwiZjc0MVwifSx7bmFtZTpcIkhhbmR3cml0aW5nMjBcIixnbHlwaDpcImY3NDJcIn0se25hbWU6XCJDaGV2cm9uTGVmdDIwXCIsZ2x5cGg6XCJmNzQzXCJ9LHtuYW1lOlwiQ2hldnJvbkxlZnQzMlwiLGdseXBoOlwiZjc0NFwifSx7bmFtZTpcIkNoZXZyb25SaWdodDIwXCIsZ2x5cGg6XCJmNzQ1XCJ9LHtuYW1lOlwiQ2hldnJvblJpZ2h0MzJcIixnbHlwaDpcImY3NDZcIn0se25hbWU6XCJFdmVudDEyXCIsZ2x5cGg6XCJmNzYzXCJ9LHtuYW1lOlwiTWljT2ZmMlwiLGdseXBoOlwiZjc4MVwifSx7bmFtZTpcIkRlbGl2ZXJ5T3B0aW1pemF0aW9uXCIsZ2x5cGg6XCJmNzg1XCJ9LHtuYW1lOlwiQ2FuY2VsTWVkaXVtXCIsZ2x5cGg6XCJmNzhhXCJ9LHtuYW1lOlwiU2VhcmNoTWVkaXVtXCIsZ2x5cGg6XCJmNzhiXCJ9LHtuYW1lOlwiQWNjZXB0TWVkaXVtXCIsZ2x5cGg6XCJmNzhjXCJ9LHtuYW1lOlwiUmV2ZWFsUGFzc3dvcmRNZWRpdW1cIixnbHlwaDpcImY3OGRcIn0se25hbWU6XCJEZWxldGVXb3JkXCIsZ2x5cGg6XCJmN2FkXCJ9LHtuYW1lOlwiRGVsZXRlV29yZEZpbGxcIixnbHlwaDpcImY3YWVcIn0se25hbWU6XCJEZWxldGVMaW5lc1wiLGdseXBoOlwiZjdhZlwifSx7bmFtZTpcIkRlbGV0ZUxpbmVzRmlsbFwiLGdseXBoOlwiZjdiMFwifSx7bmFtZTpcIkluc3RlcnRXb3Jkc1wiLGdseXBoOlwiZjdiMVwifSx7bmFtZTpcIkluc3RlcnRXb3Jkc0ZpbGxcIixnbHlwaDpcImY3YjJcIn0se25hbWU6XCJKb2luV29yZHNcIixnbHlwaDpcImY3YjNcIn0se25hbWU6XCJKb2luV29yZHNGaWxsXCIsZ2x5cGg6XCJmN2I0XCJ9LHtuYW1lOlwiT3ZlcndyaXRlV29yZHNcIixnbHlwaDpcImY3YjVcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0ZpbGxcIixnbHlwaDpcImY3YjZcIn0se25hbWU6XCJBZGROZXdMaW5lXCIsZ2x5cGg6XCJmN2I3XCJ9LHtuYW1lOlwiQWRkTmV3TGluZUZpbGxcIixnbHlwaDpcImY3YjhcIn0se25hbWU6XCJPdmVyd3JpdGVXb3Jkc0tvcmVhblwiLGdseXBoOlwiZjdiOVwifSx7bmFtZTpcIk92ZXJ3cml0ZVdvcmRzRmlsbEtvcmVhblwiLGdseXBoOlwiZjdiYVwifSx7bmFtZTpcIkVkdWNhdGlvbkljb25cIixnbHlwaDpcImY3YmJcIn0se25hbWU6XCJXaW5kb3dTbmlwcGluZ1wiLGdseXBoOlwiZjdlZFwifSx7bmFtZTpcIlZpZGVvQ2FwdHVyZVwiLGdseXBoOlwiZjdlZVwifSx7bmFtZTpcIlN0YXR1c1NlY3VyZWRcIixnbHlwaDpcImY4MDlcIn0se25hbWU6XCJOYXJyYXRvckFwcFwiLGdseXBoOlwiZjgzYlwifSx7bmFtZTpcIlBvd2VyQnV0dG9uVXBkYXRlXCIsZ2x5cGg6XCJmODNkXCJ9LHtuYW1lOlwiUmVzdGFydFVwZGF0ZVwiLGdseXBoOlwiZjgzZVwifSx7bmFtZTpcIlVwZGF0ZVN0YXR1c0RvdFwiLGdseXBoOlwiZjgzZlwifSx7bmFtZTpcIkVqZWN0XCIsZ2x5cGg6XCJmODQ3XCJ9LHtuYW1lOlwiU3BlbGxpbmdcIixnbHlwaDpcImY4N2JcIn0se25hbWU6XCJTcGVsbGluZ0tvcmVhblwiLGdseXBoOlwiZjg3Y1wifSx7bmFtZTpcIlNwZWxsaW5nU2VyYmlhblwiLGdseXBoOlwiZjg3ZFwifSx7bmFtZTpcIlNwZWxsaW5nQ2hpbmVzZVwiLGdseXBoOlwiZjg3ZVwifSx7bmFtZTpcIkZvbGRlclNlbGVjdFwiLGdseXBoOlwiZjg5YVwifSx7bmFtZTpcIlNtYXJ0U2NyZWVuXCIsZ2x5cGg6XCJmOGE1XCJ9LHtuYW1lOlwiRXhwbG9pdFByb3RlY3Rpb25cIixnbHlwaDpcImY4YTZcIn0se25hbWU6XCJBZGRCb2xkXCIsZ2x5cGg6XCJmOGFhXCJ9LHtuYW1lOlwiU3VidHJhY3RCb2xkXCIsZ2x5cGg6XCJmOGFiXCJ9LHtuYW1lOlwiQmFja1NvbGlkQm9sZFwiLGdseXBoOlwiZjhhY1wifSx7bmFtZTpcIkZvcndhcmRTb2xpZEJvbGRcIixnbHlwaDpcImY4YWRcIn0se25hbWU6XCJQYXVzZUJvbGRcIixnbHlwaDpcImY4YWVcIn0se25hbWU6XCJDbGlja1NvbGlkXCIsZ2x5cGg6XCJmOGFmXCJ9LHtuYW1lOlwiU2V0dGluZ3NTb2xpZFwiLGdseXBoOlwiZjhiMFwifSx7bmFtZTpcIk1pY3JvcGhvbmVTb2xpZEJvbGRcIixnbHlwaDpcImY4YjFcIn0se25hbWU6XCJTcGVlY2hTb2xpZEJvbGRcIixnbHlwaDpcImY4YjJcIn0se25hbWU6XCJDbGlja2VkT3V0TG91ZFNvbGlkQm9sZFwiLGdseXBoOlwiZjhiM1wifV07bGV0IHA9Y2xhc3MgZXh0ZW5kcyBlLkN1c3RvbUNvbXBvbmVudHtzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybltcImZvbnQtZmFtaWx5XCIsXCJnbHlwaFwiLFwiZm9udC1zaXplXCIsXCJmb3JlZ3JvdW5kXCIsXCJ1c2UtYWNjZW50XCJdfWdldCBmb250RmFtaWx5KCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLmdldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIpKSYmdm9pZCAwIT09ZT9lOlwiU2Vnb2UgRmx1ZW50IEljb25zXCJ9c2V0IGZvbnRGYW1pbHkoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLGUpLHRoaXMuc2V0Rm9udEZhbWlseSgpfWdldCBnbHlwaCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImdseXBoXCIpfXNldCBnbHlwaChlKXt0aGlzLnNldEF0dHJpYnV0ZShcImdseXBoXCIsZSksdGhpcy5zZXRHbHlwaCgpfWdldCBmb250U2l6ZSgpe3JldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImZvbnQtc2l6ZVwiKT9wYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiKSk6MTZ9c2V0IGZvbnRTaXplKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsZS50b1N0cmluZygpKSx0aGlzLnNldEZvbnRTaXplKCl9Z2V0IGZvcmVncm91bmQoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJmb3JlZ3JvdW5kXCIpfXNldCBmb3JlZ3JvdW5kKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwiZm9yZWdyb3VuZFwiLGUpLHRoaXMuc2V0Rm9yZWdyb3VuZCgpfWdldCB1c2VBY2NlbnQoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJ1c2UtYWNjZW50XCIpJiZcImZhbHNlXCIhPT10aGlzLmdldEF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIil9c2V0IHVzZUFjY2VudChlKXt0aGlzLnRvZ2dsZUF0dHJpYnV0ZShcInVzZS1hY2NlbnRcIixlKSx0aGlzLnNldEZvcmVncm91bmQoKX1nZXQgaWNvblNwYW4oKXt2YXIgZTtyZXR1cm4gbnVsbCE9PShlPXRoaXMuX2ljb25TcGFuKSYmdm9pZCAwIT09ZXx8KHRoaXMuX2ljb25TcGFuPXRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIikpLHRoaXMuX2ljb25TcGFufXJlbmRlcigpe3JldHVybidcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBwYXJ0PVwiaWNvblwiPjwvc3Bhbj5cXG4gICAgICAgICd9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldEZvbnRGYW1pbHkoKSx0aGlzLnNldEdseXBoKCksdGhpcy5zZXRGb250U2l6ZSgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3dpdGNoKGUpe2Nhc2VcImZvbnQtZmFtaWx5XCI6dGhpcy5zZXRGb250RmFtaWx5KCk7YnJlYWs7Y2FzZVwiZ2x5cGhcIjp0aGlzLnNldEdseXBoKCk7YnJlYWs7Y2FzZVwiZm9udC1zaXplXCI6dGhpcy5zZXRGb250U2l6ZSgpO2JyZWFrO2Nhc2VcImZvcmVncm91bmRcIjpjYXNlXCJ1c2UtYWNjZW50XCI6dGhpcy5zZXRGb3JlZ3JvdW5kKCl9fXNldEZvbnRGYW1pbHkoKXt0aGlzLmljb25TcGFuLnN0eWxlLmZvbnRGYW1pbHk9dGhpcy5mb250RmFtaWx5K1wiLCBzYW5zLXNlcmlmXCJ9c2V0R2x5cGgoKXt0aGlzLmljb25TcGFuLmlubmVySFRNTD10aGlzLmdseXBofXNldEZvbnRTaXplKCl7aWYobnVsbCE9PXRoaXMuZm9udFNpemUpe2NvbnN0IGU9dGhpcy5mb250U2l6ZStcInB4XCIsYT10aGlzLnN0eWxlLG49dGhpcy5pY29uU3Bhbi5zdHlsZTtuLmZvbnRTaXplPWUsbi5saW5lSGVpZ2h0PWUsbi5oZWlnaHQ9ZSxuLndpZHRoPWUsYS5oZWlnaHQ9ZSxhLndpZHRoPWV9fXNldEZvcmVncm91bmQoKXt0aGlzLmljb25TcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJ1c2UtYWNjZW50XCIsdGhpcy51c2VBY2NlbnQpLG51bGwhPT10aGlzLmZvcmVncm91bmQmJih0aGlzLmljb25TcGFuLnN0eWxlLmNvbG9yPXRoaXMuZm9yZWdyb3VuZCl9fTtwLnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uLnVzZS1hY2NlbnQge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1maWxsLWFjY2VudC1kZWZhdWx0KTtcXG4gICAgICAgIH1cXG4gICAgXCIscD1hKFsoMCxlLmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtZm9udC1pY29uXCIpXSxwKTtsZXQgaD1jbGFzcyBleHRlbmRzIHB7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJmb250LWZhbWlseVwiLFwiZ2x5cGhcIixcImZvbnQtc2l6ZVwiLFwiZm9yZWdyb3VuZFwiLFwidXNlLWFjY2VudFwiLFwic3ltYm9sXCJdfWdldCBzeW1ib2woKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzeW1ib2xcIil9c2V0IHN5bWJvbChlKXt0aGlzLnNldEF0dHJpYnV0ZShcInN5bWJvbFwiLGUpLHRoaXMuc2V0U3ltYm9sKCl9Z2V0IGdseXBoTWFwKCl7dmFyIGU7cmV0dXJuIG51bGwhPT0oZT10aGlzLl9nbHlwaE1hcCkmJnZvaWQgMCE9PWU/ZTpnfXNldCBnbHlwaE1hcChlKXt0aGlzLl9nbHlwaE1hcD1lLHRoaXMuc2V0U3ltYm9sKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsYSxuKXtzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZSxhLG4pLFwic3ltYm9sXCI9PT1lJiZ0aGlzLnNldFN5bWJvbCgpfXNldFN5bWJvbCgpe2NvbnN0IGU9dGhpcy5zeW1ib2w/XCImI3hcIit0aGlzLmdseXBoTWFwLmZpbmQoKGU9PmUubmFtZT09PXRoaXMuc3ltYm9sKSkuZ2x5cGg6XCJcIjtzdXBlci5nbHlwaD1lfX07aD1hKFsoMCxlLmN1c3RvbUNvbXBvbmVudCkoXCJmbHVlbnQtc3ltYm9sLWljb25cIildLGgpO2xldCB0PWNsYXNzIGV4dGVuZHMgZS5DdXN0b21Db21wb25lbnR7c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXtyZXR1cm5bXCJzb3VyY2VcIixcInNpemVcIixcImFsdFwiLFwidGl0bGVcIl19Z2V0IHNvdXJjZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInNvdXJjZVwiKX1zZXQgc291cmNlKGUpe3RoaXMuc2V0QXR0cmlidXRlKFwic291cmNlXCIsZSl9Z2V0IHNpemUoKXtyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJzaXplXCIpP3BhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk6MTZ9c2V0IHNpemUoZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsZS50b1N0cmluZygpKX1nZXQgYWx0KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiYWx0XCIpfWdldCB0aXRsZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfWdldCBpbWFnZSgpe3ZhciBlO3JldHVybiBudWxsIT09KGU9dGhpcy5faW1hZ2UpJiZ2b2lkIDAhPT1lfHwodGhpcy5faW1hZ2U9dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VcIikpLHRoaXMuX2ltYWdlfXJlbmRlcigpe3JldHVybic8aW1nIGNsYXNzPVwiaW1hZ2VcIiAvPid9Y29ubmVjdGVkQ2FsbGJhY2soKXt0aGlzLnNldFNvdXJjZSgpLHRoaXMuc2V0U2l6ZSgpLHRoaXMuc2V0QWx0T3JUaXRsZSgpfWF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlLGEsbil7c3dpdGNoKGUpe2Nhc2VcInNvdXJjZVwiOnRoaXMuc2V0U291cmNlKCk7YnJlYWs7Y2FzZVwic2l6ZVwiOnRoaXMuc2V0U2l6ZSgpO2JyZWFrO2Nhc2VcImFsdFwiOmNhc2VcInRpdGxlXCI6dGhpcy5zZXRBbHRPclRpdGxlKCl9fXNldFNvdXJjZSgpe3RoaXMuaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpcy5zb3VyY2UpfXNldFNpemUoKXtjb25zdCBlPXRoaXMuaW1hZ2Uuc3R5bGUsYT10aGlzLnN0eWxlO2Uud2lkdGg9dGhpcy5zaXplK1wicHhcIixlLmhlaWdodD10aGlzLnNpemUrXCJweFwiLGEud2lkdGg9dGhpcy5zaXplK1wicHhcIixhLmhlaWdodD10aGlzLnNpemUrXCJweFwifXNldEFsdE9yVGl0bGUoKXt0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLHRoaXMuYWx0KSx0aGlzLmltYWdlLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdGhpcy50aXRsZSl9fTt0LnN0eWxlcz1cIlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pbWFnZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuICAgIFwiLHQ9YShbKDAsZS5jdXN0b21Db21wb25lbnQpKFwiZmx1ZW50LWltYWdlLWljb25cIildLHQpfSkoKSxsfSkoKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQuanMubWFwIiwiLypcbiAqIGFuaW1lLmpzIHYzLjIuMVxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBuaWw6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDsgfSxcbiAgaGV4OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7IH0sXG4gIHJnYjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9ecmdiLy50ZXN0KGEpOyB9LFxuICBoc2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXmhzbC8udGVzdChhKTsgfSxcbiAgY29sOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTsgfSxcbiAga2V5OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7IH0sXG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xuICBpZiAoIHN0ZXBzID09PSB2b2lkIDAgKSBzdGVwcyA9IDEwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOiBcbiAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjsgfTsgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xuICB9XG59XG5cbi8vIFN0cmluZ3NcblxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xuICB0cnkge1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBBcnJheXNcblxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpIGluIGFycikge1xuICAgICAgdmFyIHZhbCA9IGFycltpXTtcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTsgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcbiAgaWYgKGlzLmFycihvKSkgeyByZXR1cm4gbzsgfVxuICBpZiAoaXMuc3RyKG8pKSB7IG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbzsgfVxuICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgeyByZXR1cm4gW10uc2xpY2UuY2FsbChvKTsgfVxuICByZXR1cm4gW29dO1xufVxuXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSA9PT0gdmFsOyB9KTtcbn1cblxuLy8gT2JqZWN0c1xuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XG4gIHZhciBjbG9uZSA9IHt9O1xuICBmb3IgKHZhciBwIGluIG8pIHsgY2xvbmVbcF0gPSBvW3BdOyB9XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMSkgeyBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8yKSB7IG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuLy8gQ29sb3JzXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAobSwgciwgZywgYikgeyByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiOyB9ICk7XG4gIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxuICAgIGlmICh0ID4gMSkgeyB0IC09IDE7IH1cbiAgICBpZiAodCA8IDEvNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDsgfVxuICAgIGlmICh0IDwgMS8yKSB7IHJldHVybiBxOyB9XG4gICAgaWYgKHQgPCAyLzMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjsgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIHZhciByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gIH1cbiAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHsgcmV0dXJuIHJnYlRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oZXgodmFsKSkgeyByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhzbCh2YWwpKSB7IHJldHVybiBoc2xUb1JnYmEodmFsKTsgfVxufVxuXG4vLyBVbml0c1xuXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xuICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xuICBpZiAoc3BsaXQpIHsgcmV0dXJuIHNwbGl0WzFdOyB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHsgcmV0dXJuICdweCc7IH1cbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHsgcmV0dXJuICdkZWcnOyB9XG59XG5cbi8vIFZhbHVlc1xuXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xuICBpZiAoIWlzLmZuYyh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XG4gIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xuICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgdmFyIGJhc2VsaW5lID0gMTAwO1xuICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcbiAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xuICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XG4gIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XG4gIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcbiAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XG59XG5cbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XG4gIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XG4gICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xuICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7IHJldHVybiAnYXR0cmlidXRlJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHsgcmV0dXJuICd0cmFuc2Zvcm0nOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7IHJldHVybiAnY3NzJzsgfVxuICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkgeyByZXR1cm4gJ29iamVjdCc7IH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcbiAgaWYgKCFpcy5kb20oZWwpKSB7IHJldHVybjsgfVxuICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xuICB2YXIgcmVnICA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XG4gIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuICB2YXIgbTsgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7IHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pOyB9XG4gIHJldHVybiB0cmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcbiAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xuICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xuICBpZiAoYW5pbWF0YWJsZSkge1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XG4gIH1cbiAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcbiAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XG4gICAgY2FzZSAndHJhbnNmb3JtJzogcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xuICAgIGNhc2UgJ2Nzcyc6IHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcbiAgICBjYXNlICdhdHRyaWJ1dGUnOiByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGRlZmF1bHQ6IHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xuICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcbiAgaWYgKCFvcGVyYXRvcikgeyByZXR1cm4gdG87IH1cbiAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xuICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XG4gICAgY2FzZSAnKyc6IHJldHVybiB4ICsgeSArIHU7XG4gICAgY2FzZSAnLSc6IHJldHVybiB4IC0geSArIHU7XG4gICAgY2FzZSAnKic6IHJldHVybiB4ICogeSArIHU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgaWYgKGlzLmNvbCh2YWwpKSB7IHJldHVybiBjb2xvclRvUmdiKHZhbCk7IH1cbiAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgaWYgKHVuaXQpIHsgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDsgfVxuICByZXR1cm4gdW5pdExlc3M7XG59XG5cbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xuICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBnZXREaXN0YW5jZShcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKX0sIFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpfVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICB2YXIgcHJldmlvdXNQb3M7XG4gIGZvciAodmFyIGkgPSAwIDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xuICAgIGlmIChpID4gMCkgeyB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7IH1cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG4gIH1cbiAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XG59XG5cbi8vIFBhdGggYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XG4gIGlmIChlbC5nZXRUb3RhbExlbmd0aCkgeyByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTsgfVxuICBzd2l0Y2goZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnY2lyY2xlJzogcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncmVjdCc6IHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcbiAgICBjYXNlICdsaW5lJzogcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzogcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5Z29uJzogcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcbiAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xuICByZXR1cm4gcGF0aExlbmd0aDtcbn1cblxuLy8gTW90aW9uIHBhdGhcblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcbiAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcbiAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkgeyBicmVhazsgfVxuICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcGFyZW50RWw7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcbiAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XG4gIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xuICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XG4gIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcbiAgcmV0dXJuIHtcbiAgICBlbDogcGFyZW50U3ZnRWwsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICB4OiB2aWV3Qm94WzBdIC8gMSxcbiAgICB5OiB2aWV3Qm94WzFdIC8gMSxcbiAgICB3OiB3aWR0aCxcbiAgICBoOiBoZWlnaHQsXG4gICAgdlc6IHZpZXdCb3hbMl0sXG4gICAgdkg6IHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XG4gIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xuICAgIGlmICggb2Zmc2V0ID09PSB2b2lkIDAgKSBvZmZzZXQgPSAwO1xuXG4gICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xuICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XG4gIH1cbiAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XG4gIHZhciBwID0gcG9pbnQoKTtcbiAgdmFyIHAwID0gcG9pbnQoLTEpO1xuICB2YXIgcDEgPSBwb2ludCgrMSk7XG4gIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XG4gIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XG4gIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3gnOiByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhZjtcblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcbiAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxuICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxuICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XG4gICAgICAvLyBzdXNwZW5kIHRpY2tzXG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxuICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxuICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UgLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpOyB9XG4gICAgICApO1xuICAgICAgZW5naW5lKCk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xuICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xuICAgIH1cbiAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XG4gICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xuICAgICAgfVxuICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcbiAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHsgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpOyB9XG4gICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcbiAgICAgIGxhc3RUaW1lID0gMDtcbiAgICAgIGNvdW50SXRlcmF0aW9uKCk7XG4gICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdztcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xuICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XG4gICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHsgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTsgfVxuICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7IGluc3RhbmNlLnJlbWFpbmluZysrOyB9XG4gICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcbiAgfTtcblxuICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxuICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgZW5naW5lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnJlc2V0KCk7XG4gICAgaW5zdGFuY2UucGxheSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xuICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xuICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHsgY2hpbGRyZW4uc3BsaWNlKGMsIDEpOyB9XG4gIH1cbiAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xuYW5pbWUuc3BlZWQgPSAxO1xuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiLy8gU2VlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWxib3Vybi83OWM0NzNhYWI0MDRhYmNkMzZkYzdjZmFhN2FjMDJhY1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmdiRnJvbUhleChoZXgpIHtcbiAgaWYgKGhleFswXSA9PT0gXCIjXCIpIHtcbiAgICBoZXggPSBoZXguc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHI6IHBhcnNlSW50KGhleFswXSArIGhleFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KGhleFsyXSArIGhleFszXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KGhleFs0XSArIGhleFs1XSwgMTYpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxlbmQoYmFzZVZhbHVlLCBvdmVybGF5VmFsdWUsIGFscGhhKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG92ZXJsYXlWYWx1ZSAqIGFscGhhICsgYmFzZVZhbHVlICogKDEgLSBhbHBoYSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUFscGhhQmxlbmQoYmFzZUhleCwgb3ZlcmxheUhleCwgYWxwaGEpIHtcbiAgY29uc3QgYmFzZSA9IGdldFJnYkZyb21IZXgoYmFzZUhleCk7XG4gIGNvbnN0IG92ZXJsYXkgPSBnZXRSZ2JGcm9tSGV4KG92ZXJsYXlIZXgpO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7XG4gICAgcjogYmxlbmQoYmFzZS5yLCBvdmVybGF5LnIsIGFscGhhKSxcbiAgICBnOiBibGVuZChiYXNlLmcsIG92ZXJsYXkuZywgYWxwaGEpLFxuICAgIGI6IGJsZW5kKGJhc2UuYiwgb3ZlcmxheS5iLCBhbHBoYSksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICBcIiNcIiArXG4gICAgYmxlbmRlZC5yLnRvU3RyaW5nKDE2KSArXG4gICAgYmxlbmRlZC5nLnRvU3RyaW5nKDE2KSArXG4gICAgYmxlbmRlZC5iLnRvU3RyaW5nKDE2KVxuICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uICB0b0N1cnJlbmN5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkuZm9ybWF0KHZhbHVlKTtcbn0iLCIvLyBXcml0dGVuIGJ5IEdhcnkgQW50aWVyXHJcbi8vIENyZWF0ZWQ6IDIwMjBcclxuLy8gTW9kaWZpZWQ6IEFwciAyMCwgMjAyM1xyXG5cclxuZXhwb3J0IGNvbnN0IEZ1bGxNb250aCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XHJcbmNvbnN0IEFiYnJNb250aCA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcHRcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbmNvbnN0IEZ1bGxEYXlzT2ZXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XHJcbmNvbnN0IEFiYnJEYXlzT2ZXZWVrID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVDb25zdGFudHNCYXNlIHtcclxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFTZWNvbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFNlY29uZHNJbkFNaW51dGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDYwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFNaW51dGUoKSB7XHJcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFTZWNvbmQgKiB0aGlzLlNlY29uZHNJbkFNaW51dGU7XHJcbiAgICAgICAgcmV0dXJuIG1pbGxpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNaW51dGVzSW5BbkhvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDYwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFuSG91cigpIHtcclxuICAgICAgICBsZXQgbWlsbGkgPSB0aGlzLk1pbGxpc2Vjb25kc0luQU1pbnV0ZSAqIHRoaXMuTWludXRlc0luQW5Ib3VyO1xyXG4gICAgICAgIHJldHVybiBtaWxsaTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSG91cnNJbkFEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIDI0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBNaWxsaXNlY29uZHNJbkFEYXkoKSB7XHJcbiAgICAgICAgbGV0IG1pbGxpID0gdGhpcy5NaWxsaXNlY29uZHNJbkFuSG91ciAqIHRoaXMuSG91cnNJbkFEYXk7XHJcbiAgICAgICAgcmV0dXJuIG1pbGxpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEYXlzSW5BWWVhcigpIHtcclxuICAgICAgICByZXR1cm4gMzY1O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBUaW1lQ29uc3RhbnRzID0gbmV3IFRpbWVDb25zdGFudHNCYXNlKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVNwYW4ge1xyXG4gICAgbWlsbGk6IG51bWJlcjtcclxuICAgIHRvdGFsU2Vjb25kczogbnVtYmVyO1xyXG4gICAgdG90YWxNaW51dGVzOiBudW1iZXI7XHJcbiAgICB0b3RhbEhvdXJzOiBudW1iZXI7XHJcbiAgICB0b3RhbERheXM6IG51bWJlcjtcclxuICAgIHNlY29uZHM6IG51bWJlcjtcclxuICAgIG1pbnV0ZXM6IG51bWJlcjtcclxuICAgIGhvdXJzOiBudW1iZXI7XHJcbiAgICBkYXlzOiBudW1iZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1pbGxpKSB7XHJcbiAgICAgICAgdGhpcy5taWxsaSA9IG1pbGxpO1xyXG4gICAgICAgIHRoaXMudG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaSAvIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BU2Vjb25kKTtcclxuICAgICAgICB0aGlzLnRvdGFsTWludXRlcyA9IE1hdGguZmxvb3IobWlsbGkgLyBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQU1pbnV0ZSk7XHJcbiAgICAgICAgdGhpcy50b3RhbEhvdXJzID0gTWF0aC5mbG9vcihtaWxsaSAvIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BbkhvdXIpO1xyXG4gICAgICAgIHRoaXMudG90YWxEYXlzID0gTWF0aC5mbG9vcihtaWxsaSAvIFRpbWVDb25zdGFudHMuTWlsbGlzZWNvbmRzSW5BRGF5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gdGhpcy50b3RhbFNlY29uZHMgJSBUaW1lQ29uc3RhbnRzLlNlY29uZHNJbkFNaW51dGU7XHJcbiAgICAgICAgdGhpcy5taW51dGVzID0gdGhpcy50b3RhbE1pbnV0ZXMgJSBUaW1lQ29uc3RhbnRzLk1pbnV0ZXNJbkFuSG91cjtcclxuICAgICAgICB0aGlzLmhvdXJzID0gdGhpcy50b3RhbEhvdXJzICUgVGltZUNvbnN0YW50cy5Ib3Vyc0luQURheTtcclxuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLnRvdGFsRGF5cyAlIFRpbWVDb25zdGFudHMuRGF5c0luQVllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5cyA+IDApIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gYCR7dGhpcy5kYXlzfWQgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhvdXJzID4gMCkge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLmhvdXJzfWggYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1pbnV0ZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IGAke3RoaXMubWludXRlc31tIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWNvbmRzID4gMCkge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSBgJHt0aGlzLnNlY29uZHN9c2A7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gXCIuLi5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGU6IGFueTtcclxuICAgIG9mZnNldDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlLCBvZmZzZXQpIHtcclxuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2UoZGF0ZVRpbWUsIG9mZnNldCA9IDApIHtcclxuICAgICAgICBpZiAoZGF0ZVRpbWUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpcnJlZ3VsYXJGb3JtYXRSZWdleCA9IC8oXFwvRGF0ZVxcKCkoLiopKFxcKVxcLykvaTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRlVGltZSA9PT0gXCJzdHJpbmdcIiAmJiBpcnJlZ3VsYXJGb3JtYXRSZWdleC50ZXN0KGRhdGVUaW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gaXJyZWd1bGFyRm9ybWF0UmVnZXguZXhlYyhkYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVGltZSA9IHBhcnNlSW50KG1hdGNoWzJdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG1pbGxpID0gdHlwZW9mIGRhdGVUaW1lID09PSBcIm51bWJlclwiID8gZGF0ZVRpbWUgOiBEYXRlLnBhcnNlKGRhdGVUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihtaWxsaSkpIHtcclxuICAgICAgICAgICAgICAgIG1pbGxpID0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVVRDIG9mZnNldC4uLlxyXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKiBUaW1lQ29uc3RhbnRzLk1pbGxpc2Vjb25kc0luQW5Ib3VyO1xyXG4gICAgICAgICAgICBtaWxsaSArPSBvZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG1pbGxpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShkYXRlLCBvZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm93KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUobmV3IERhdGUoKSwgOCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBlbmRPZk1vbnRoKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5ZWFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vbnRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldE1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0SG91cnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWludXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY29uZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlmZmVyZW5jZShzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHRpbWVEaWZmID0gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWVEaWZmKTtcclxuICAgIH1cclxuXHJcbiAgICBkaWZmZXJlbmNlKHNlY29uZERhdGUpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IHRoaXMudGltZSAtIHNlY29uZERhdGUudGltZTtcclxuICAgICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKGRpZmYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERheXMoZGF5cykge1xyXG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XHJcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKHRoaXMuZGF0ZSArIGRheXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKG5ld0RhdGUsIHRoaXMub2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRZZWFycyh5ZWFycykge1xyXG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XHJcbiAgICAgICAgbmV3RGF0ZS5zZXRGdWxsWWVhcih0aGlzLnllYXIgKyB5ZWFycyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUobmV3RGF0ZSwgdGhpcy5vZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKGZvcm1hdCA9IFwieXl5eS9NTS9kZCBISDptbTpzc1wiKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCB5ZWFyID0gdGhpcy55ZWFyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHN1YlllYXIgPSB5ZWFyLnBhZFN0YXJ0KDIsICcwJykuc2xpY2UoLTIpO1xyXG4gICAgICAgIGxldCBtb250aCA9IHRoaXMubW9udGg7XHJcbiAgICAgICAgbGV0IGRheSA9IHRoaXMuZGF5O1xyXG4gICAgICAgIGxldCBkYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICAgIGxldCBob3VyID0gdGhpcy5ob3VyO1xyXG4gICAgICAgIGxldCBfMTJIb3VyID0gaG91ciA8IDEzID8gaG91ciA6IGhvdXIgLSAxMjtcclxuICAgICAgICBsZXQgaXNBTSA9IGhvdXIgPCAxMjtcclxuICAgICAgICBsZXQgbWludXRlcyA9IHRoaXMubWludXRlcztcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuc2Vjb25kcztcclxuXHJcbiAgICAgICAgLy8gRGF5Li4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2RkL2csIGRhdGUudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZC9nLCBkYXRlKTtcclxuXHJcbiAgICAgICAgLy8gMjQtSG91ci4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9ISC9nLCBob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL0gvZywgaG91cik7XHJcblxyXG4gICAgICAgIC8vIDEyLUhvdXIuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvaGgvZywgXzEySG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9oL2csIF8xMkhvdXIpO1xyXG5cclxuICAgICAgICAvLyBNaW51dGVzLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL21tL2csIG1pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvbS9nLCBtaW51dGVzKTtcclxuXHJcbiAgICAgICAgLy8gU2Vjb25kcy4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9zcy9nLCBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3MvZywgc2Vjb25kcyk7XHJcblxyXG4gICAgICAgIC8vIFllYXIuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5eXkvZywgeWVhci5wYWRTdGFydCg1LCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXl5eS9nLCB5ZWFyLnBhZFN0YXJ0KDQsICcwJykpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC95eXkvZywgeWVhci5wYWRTdGFydCgzLCAnMCcpKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgveXkvZywgc3ViWWVhcik7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3kvZywgc3ViWWVhcik7XHJcblxyXG4gICAgICAgIC8vIE1vbnRoIGluIHdvcmRzLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL01NTU0vZywgXCIjIyMjXCIpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NTU0vZywgXCIjIyNcIik7XHJcblxyXG4gICAgICAgIC8vIE1vbnRoIGluIG51bWJlci4uLlxyXG4gICAgICAgIGxldCBfbW9udGggPSBtb250aCArIDE7XHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL01NL2csIF9tb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9NL2csIF9tb250aCk7XHJcblxyXG4gICAgICAgIC8vIEFNL1BNLi4uXHJcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3R0L2csIGlzQU0gPyBcIkFNXCIgOiBcIlBNXCIpO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC90L2csIGlzQU0gPyBcIkFcIiA6IFwiUFwiKTtcclxuXHJcbiAgICAgICAgLy8gRGF5IG9mIHdlZWsuLi5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGRkZC9nLCBGdWxsRGF5c09mV2Vla1tkYXldKTtcclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZGRkL2csIEFiYnJEYXlzT2ZXZWVrW2RheV0pO1xyXG5cclxuICAgICAgICAvLyBNb250aCBpbiB3b3Jkcy4uLlxyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8jIyMjL2csIEZ1bGxNb250aFttb250aF0pO1xyXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8jIyMvZywgQWJick1vbnRoW21vbnRoXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25fdmlldycpO1xuICAgIFxuICAgIG5hdmlnYXRpb25WaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZWQnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGFyZ3MgPSBlLmRldGFpbC5hcmdzO1xuXG4gICAgICAgIGlmKGFyZ3MuaXNTZXR0aW5nc1NlbGVjdGVkKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFyZ3Muc2VsZWN0ZWRJdGVtLmhyZWY7XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgQ29udGV4dE1lbnUsIENvbnRleHRNZW51T3B0aW9uLCBnbG9iYWxDb250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb250ZXh0LW1lbnVcIjtcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdAL2VudGl0aWVzL2FjY291bnQnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICdAL2VudGl0aWVzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJ0AvZW51bXMvb3BlcmF0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gJ0AvZW51bXMvdHJhbnNhY3Rpb24tdHlwZSc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJy4vZGF0ZS10aW1lJztcbmltcG9ydCB7IEFjY291bnRDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL2FjY291bnQtY2FyZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ2FyZEJhbGFuY2UgfSBmcm9tICdAL2NvbXBvbmVudHMvY2FyZC1iYWxhbmNlJztcbmltcG9ydCB7IHRvQ3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5JztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbk1hbmFnZXIge1xuICAgIC8vIERPTVxuICAgIGNhcmQ6IEFjY291bnRDYXJkO1xuICAgIGFjdGlvbnM6IE5vZGVMaXN0T2Y8Q2FyZEJhbGFuY2U+O1xuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgZWRpdG9yOiBhbnk7IC8vIFRPRE86IFN0cm9uZyB0eXBlXG4gICAgY29tbWFuZDogRWxlbWVudDtcblxuICAgIC8vIFN0YXRlXG4gICAgaXNSZWdpc3RlcmVkOiBib29sZWFuO1xuICAgIG9wZXJhdGlvbjogT3BlcmF0aW9uO1xuICAgIHRyYW5zYWN0aW9uVHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICAgIGNvbnRleHRNZW51OiBDb250ZXh0TWVudTtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcbiAgICB9XG5cbiAgICBsb2FkQWNjb3VudChhY2NvdW50OiBBY2NvdW50KSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZCgpO1xuICAgICAgICB0aGlzLmxvYWRCYWxhbmNlcygpO1xuICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVnaXN0ZXJlZCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1lbnUoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRvcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck1lbnUoKSB7XG4gICAgICAgIC8vIE1lbnVcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudSA9IGdsb2JhbENvbnRleHQuYWRkTWVudShcInRyYW5zYWN0aW9uc19yb3dcIiwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtcIlVwZGF0ZVwiLCBcIlBvc3RcIiwgXCJEZWxldGVcIiwgXCJDYW5jZWxcIl07XG4gICAgICAgIGxldCBtZW51T3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChtbywgbykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IENvbnRleHRNZW51T3B0aW9uKG8pO1xuXG4gICAgICAgICAgICBvcHRpb24udmlzaWJsZSgodHJhbnM6IFRyYW5zYWN0aW9uKSA9PiB0cmFucy5Qb3N0ZWQgPT0gKG8gPT0gXCJDYW5jZWxcIikpO1xuICAgICAgICAgICAgbW8ucHVzaChvcHRpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbW87XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgXG4gICAgICAgIG1lbnVPcHRpb25zWzBdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy51cGRhdGVCdG5DbGlja2VkKHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzFdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5wb3N0KHRyYW5zKSk7XG4gICAgICAgIG1lbnVPcHRpb25zWzJdLm9uQ2xpY2sodHJhbnMgPT4gdGhpcy5kZWxldGUodHJhbnMpKTtcbiAgICAgICAgbWVudU9wdGlvbnNbM10ub25DbGljayh0cmFucyA9PiB0aGlzLmNhbmNlbCh0cmFucykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudS5hZGRPcHRpb25zKC4uLm1lbnVPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIGlucHV0XCIpO1xuXG4gICAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlOiBudW1iZXIgPSBwYXJzZUludChhY3Rpb24uZGF0YXNldC5hY3Rpb24pO1xuICAgICAgICAgICAgYWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBPcGVyYXRpb24uQ3JlYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlID0gdHlwZTtcblxuICAgICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHR5cGVJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9VHJhbnNhY3Rpb25UeXBlXVwiKTtcbiAgICAgICAgICAgICAgICB0eXBlSW5wdXQudmFsdWUgPSB0eXBlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9RGF0ZV1cIik7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gRGF0ZVRpbWUubm93KCkudG9TdHJpbmcoXCJ5eXl5LU1NLWRkXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGhlbWUoXCIjOTk5OTk5XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LnR5cGUgIT0gXCJudW1iZXJcIiA/IFwiXCIgOiBcIjAuMDBcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFZGl0b3IoKSB7XG4gICAgICAgIGNvbnN0IGFtb3VudElucHV0ID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXQjYW1vdW50XCIpO1xuICAgICAgICBjb25zdCBhbW91bnRJbnB1dEhpZGRlbiA9IHRoaXMuZWRpdG9yLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0W25hbWU9QW1vdW50XVwiKTtcbiAgICAgICAgXG4gICAgICAgIGFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnRJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9uVHlwZSA9PSBUcmFuc2FjdGlvblR5cGUuV2l0aGRyYXcpXG4gICAgICAgICAgICAgICAgYW1vdW50ICo9IC0xO1xuXG4gICAgICAgICAgICBhbW91bnRJbnB1dEhpZGRlbi52YWx1ZSA9IGFtb3VudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgY29uc3QgZGlzc21pc3NFZGl0b3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc21pc3NfZWRpdG9yX2RpYWxvZ19idG5cIik7XG4gICAgICAgIGRpc3NtaXNzRWRpdG9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiI2RhZGFkYVwiKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZV9idG4nKTtcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBsb2FkQ2FyZCgpIHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcblxuICAgICAgICB0aGlzLmNhcmQudGl0bGUgPSBhY2NvdW50LlRpdGxlO1xuICAgICAgICB0aGlzLmNhcmQubnVtYmVyID0gYWNjb3VudC5BY2NvdW50TnVtYmVyO1xuICAgICAgICB0aGlzLmNhcmQuY2F0ZWdvcnkgPSBhY2NvdW50LkNhdGVnb3J5O1xuICAgIH1cbiAgICBcbiAgICBsb2FkQmFsYW5jZXMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY291bnRJZDogdGhpcy5hY2NvdW50LklkIH07XG4gICAgICAgIGNvbnN0IGJhbGFuY2VzID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYXJkLWJhbGFuY2VcIikgYXMgTm9kZUxpc3RPZjxDYXJkQmFsYW5jZT47XG5cbiAgICAgICAgYXhpb3MuZ2V0KFwiYWNjb3VudC9iYWxhbmNlLnBocFwiLCB7IHBhcmFtczogZGF0YSB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYE9vcHMhICR7Y29udGVudH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJhbGFuY2VzWzBdLmlubmVyVGV4dCA9IHRvQ3VycmVuY3koY29udGVudC5CYWxhbmNlKTtcbiAgICAgICAgICAgICAgICBiYWxhbmNlc1sxXS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGNvbnRlbnQuUHJvamVjdGlvbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNhY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBkYXRhID0geyBBY2NvdW50SWQ6IHRoaXMuYWNjb3VudC5JZCB9O1xuICAgICAgICBcbiAgICAgICAgYXhpb3MuZ2V0KFwidHJhbnNhY3Rpb24vcmVhZC5waHBcIiwgeyBwYXJhbXM6IGRhdGEgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImNlbnRlcmVkXCI+T29wcyEgJHtjb250ZW50fTwvcD5gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb25zID0gdGhpcy5ncm91cFRyYW5zYWN0aW9ucyhjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRyYW5zYWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IHRoaXMubmV3R3JvdXAoa2V5LCB0cmFuc2FjdGlvbnNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdyb3VwVHJhbnNhY3Rpb25zKHRyYW5zKSB7XG4gICAgICAgIGxldCBncm91cHMgPSB7fTtcblxuICAgICAgICBmb3IobGV0IHQgb2YgdHJhbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHQuRGF0ZSArIHQuUG9zdGVkO1xuICAgICAgICAgICAgKGdyb3Vwc1trZXldID8/PSBbXSkucHVzaCh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgfVxuXG4gICAgbmV3R3JvdXAoZGF0ZSwgdHJhbnMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tZ3JvdXAnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwLWhlYWRlcicpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWdyb3VwLWJvZHknKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRpdGxlL2hlYWRlci4uLlxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IERhdGVUaW1lLnBhcnNlKGRhdGUuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGRhdGVUaW1lLnRvU3RyaW5nKCdNTU0uIGRkLCB5eXl5Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdGF0dXMgPSB0cmFuc1swXS5Qb3N0ZWQgPyAnYWN0dWFsJyA6ICdwcm9qZWN0aW9uJztcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgICAgICAgXG4gICAgICAgIGdyb3VwLmFwcGVuZChoZWFkZXIpO1xuICAgICAgICBncm91cC5hcHBlbmQoYm9keSk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IHQgb2YgdHJhbnMpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLm5ld1Jvdyh0KTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICBuZXdSb3codHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yP1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0cmFuc2FjdGlvbi5Qb3N0ZWQgPyAnYWN0dWFsJyA6ICdwcm9qZWN0aW9uJztcblxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCd0cmFuc2FjdGlvbi1yb3cnLCBzdGF0dXMpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RyYW5zYWN0aW9uLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NQYXIuaW5uZXJUZXh0ID0gdHJhbnNhY3Rpb24uRGVzY3JpcHRpb247XG4gICAgICAgIGRlc2MuYXBwZW5kQ2hpbGQoZGVzY1Bhcik7XG4gICAgICAgIHN1bW1hcnkuY2xhc3NMaXN0LmFkZCgndHJhbnNhY3Rpb24tc3VtbWFyeScpO1xuXG4gICAgICAgIG1haW4uYXBwZW5kKGRlc2MpO1xuICAgICAgICBtYWluLmFwcGVuZChzdW1tYXJ5KTtcbiAgICAgICAgcm93LmFwcGVuZChtYWluKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzRGViaXQgPSB0cmFuc2FjdGlvbi5Ub3RhbCA+PSAwO1xuICAgICAgICBjb25zdCB0cmFuc0Ftb3VudDogbnVtYmVyID0gTWF0aC5hYnModHJhbnNhY3Rpb24uVG90YWwpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYW1vdW50UGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCByZWZQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgYW1vdW50UGFyLmlubmVyVGV4dCA9IGAkeyFpc0RlYml0ID8gXCItXCIgOiBcIlwifSBQSFAgJHt0b0N1cnJlbmN5KHRyYW5zQW1vdW50LnRvU3RyaW5nKCkpfWA7XG4gICAgICAgIHJlZlBhci5pbm5lclRleHQgPSAnUkVGOiBOL0EnO1xuICAgICAgICBcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQoYW1vdW50UGFyKTtcbiAgICAgICAgc3VtbWFyeS5hcHBlbmQocmVmUGFyKTtcbiAgICAgICAgXG4gICAgICAgIChyb3cgYXMgYW55KS5hZGRDb250ZXh0KHRoaXMuY29udGV4dE1lbnUsIHRyYW5zYWN0aW9uKTtcblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zLWNvbnRhaW5lcicpO1xuICAgICAgICByb3cuYXBwZW5kKGFjdGlvbnMpO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwicHJvamVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0QWN0aW9uID0gdGhpcy5uZXdBY3Rpb24oXCJlZGl0XCIsIFwiRWRpdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcInBvc3RcIiwgXCJDb21wbGV0ZWRTb2xpZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUFjdGlvbiA9IHRoaXMubmV3QWN0aW9uKFwiZGVsZXRlXCIsIFwiRGVsZXRlXCIpO1xuXG4gICAgICAgICAgICBlZGl0QWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuQ2xpY2tlZCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcG9zdEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZUFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZSh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmQoZWRpdEFjdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZChwb3N0QWN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGRlbGV0ZUFjdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxBY3Rpb24gPSB0aGlzLm5ld0FjdGlvbihcImRlbGV0ZVwiLCBcIkNhbmNlbFwiKTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kKGNhbmNlbEFjdGlvbik7XG5cbiAgICAgICAgICAgIGNhbmNlbEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvdWNoIGV2ZW50cy4uLlxuICAgICAgICBsZXQgaW5pdGlhbFRvdWNoO1xuICAgICAgICBsZXQgaW5pdGlhbExlZnQ7XG5cbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlID0+IHtcbiAgICAgICAgICAgIGluaXRpYWxUb3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpbml0aWFsTGVmdCA9IHBhcnNlSW50KG1haW4uc3R5bGUubGVmdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gQXJyYXkuZnJvbShlLmNoYW5nZWRUb3VjaGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKHRjaCA9PiB0Y2guaWRlbnRpZmllciA9PT0gaW5pdGlhbFRvdWNoLmlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodG91Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWF0Y2hlcyBmb3VuZCBvZiB0aGUgaW5pdGlhbCB0b3VjaC5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB4RGVsdGEgPSB0b3VjaC5wYWdlWCAtIGluaXRpYWxUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IHlEZWx0YSA9IHRvdWNoLnBhZ2VZIC0gaW5pdGlhbFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgubWluKDAsIGluaXRpYWxMZWZ0ICsgeERlbHRhKTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEZWx0YSkgPiBNYXRoLmFicyh5RGVsdGEpKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbWFpbi5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBBcnJheS5mcm9tKGUuY2hhbmdlZFRvdWNoZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQodGNoID0+IHRjaC5pZGVudGlmaWVyID09PSBpbml0aWFsVG91Y2guaWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtYXRjaGVzIGZvdW5kIG9mIHRoZSBpbml0aWFsIHRvdWNoLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBwYXJzZUludChtYWluLnN0eWxlLmxlZnQpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uV2lkdGggPSBhY3Rpb25zLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gYWN0aW9uV2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3Qgc25hcFBvaW50ID0gYWN0aW9uV2lkdGggKiAoKE1hdGguYWJzKGxlZnQpID4gdGhyZXNob2xkKSA/IDEgOiAwKTtcblxuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IG1haW4sXG4gICAgICAgICAgICAgICAgbGVmdDogLXNuYXBQb2ludCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjb2xsYXBzZUFjdGlvbnMoKSB7XG4gICAgICAgICAgICBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogbWFpblswXSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuXG4gICAgbmV3QWN0aW9uKG5hbWUsIHN5bWJvbCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZsdWVudC1zeW1ib2wtaWNvbicpXG4gICAgICAgIFxuICAgICAgICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aW9uJywgYGFjdGlvbi0ke25hbWV9YCk7XG4gICAgICAgIGFjdGlvbi50YWJJbmRleCA9IC0xO1xuXG4gICAgICAgIC8vIEljb25cbiAgICAgICAgYWN0aW9uLmFwcGVuZChpY29uKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3N5bWJvbCcsIHN5bWJvbCk7XG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCAnMjAnKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2ZvcmVncm91bmQnLCAnI2ZmZicpO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgdXBkYXRlQnRuQ2xpY2tlZChkYXRhKSB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLlVwZGF0ZTtcblxuICAgICAgICBsZXQgaW5wdXRzID0gdGhpcy5lZGl0b3IucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRcIik7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gaW5wdXQubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJBbW91bnRcIikgcmV0dXJuO1xuXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG5hbWUgIT0gXCJcIiAvLyBFbXB0eVxuICAgICAgICAgICAgICAgID8gZGF0YVtuYW1lXVxuICAgICAgICAgICAgICAgIDogTWF0aC5hYnMoZGF0YS5BbW91bnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZSA9IGRhdGEuVHJhbnNhY3Rpb25UeXBlO1xuICAgIFxuICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKFwiIzk5OTk5OVwiKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2hvdygpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IE9wZXJhdGlvblt0aGlzLm9wZXJhdGlvbl0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgdHJhbnNhY3Rpb24vJHtvcGVyYXRpb259LnBocGA7XG5cbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmVkaXRvci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGRhdGEuYXBwZW5kKFwiQWNjb3VudElkXCIsIHRoaXMuYWNjb3VudC5JZC50b1N0cmluZygpKTtcbiAgICAgICAgbGV0IHRyYW5zID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEuZW50cmllcygpKTtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoZW5kcG9pbnQsIHRyYW5zKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gT3BlcmF0aW9uLkNyZWF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZShcIiNkYWRhZGFcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlKHRyYW5zOiBUcmFuc2FjdGlvbikge1xuICAgICAgICB0aGlzLmhhbmRsZVBvc3QoXCJ0cmFuc2FjdGlvbi9kZWxldGUucGhwXCIsIHRyYW5zKTtcbiAgICB9XG4gICAgXG4gICAgcG9zdCh0cmFuczogVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3N0KFwidHJhbnNhY3Rpb24vcG9zdC5waHBcIiwgdHJhbnMpO1xuICAgIH1cbiAgICBcbiAgICBjYW5jZWwodHJhbnM6IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdChcInRyYW5zYWN0aW9uL2NhbmNlbC5waHBcIiwgdHJhbnMpO1xuICAgIH1cblxuICAgIGhhbmRsZVBvc3QoZW5kcG9pbnQ6IHN0cmluZywgdHJhbnM6IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChlbmRwb2ludCwgdHJhbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW25hbWU9XCJ0aGVtZS1jb2xvclwiXWApXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDdXN0b21Db21wb25lbnQsIGN1c3RvbUNvbXBvbmVudCB9IGZyb20gXCJAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50XCI7XG5cbkBjdXN0b21Db21wb25lbnQoJ2FjY291bnQtY2FyZCcpXG5leHBvcnQgY2xhc3MgQWNjb3VudENhcmQgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzI1MkEzMiA1MCUsICMyZDM0M2UgNTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiKDAgMCAwIC8gMTYlKSwgMCAzcHggNnB4IHJnYigwIDAgMCAvIDIzJSk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM0RDkwRkU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgICAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2cHgpO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3Q6YWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYm9keSA+IC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWxhbmNlcyB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1iZXJzLFxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZjYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm51bWJlcnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm51bWJlcnMgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2xvdHRlZChpbWdbc2xvdD1pY29uXSkge1xuICAgICAgICAgICAgYm90dG9tOiAyM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY1ByZWNpc2lvbjtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcImRhdGEtdGl0bGVcIiwgXCJkYXRhLW51bWJlclwiLCBcImRhdGEtY2F0ZWdvcnlcIl07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdGl0bGVTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfbnVtYmVyU3BhbjogSFRNTFNwYW5FbGVtZW50O1xuICAgIHByaXZhdGUgX2NhdGVnb3J5U3BhbjogSFRNTFNwYW5FbGVtZW50O1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFsYW5jZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKLigKLigKLigKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAouKAouKAouKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCi4oCi4oCi4oCiPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bWJlclwiPuKAouKAouKAouKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXRlZ29yeVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+XG4gICAgICAgIGA7XG4gICAgfS8qIEF0dHJpYnV0ZXMgKi9cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIik7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS10aXRsZVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcbiAgICB9XG5cbiAgICBzZXQgbnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgdmFsdWUgPz8gXCLigKLigKLigKLigKJcIik7XG4gICAgICAgIHRoaXMuc2V0TnVtYmVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhdGVnb3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5XCIpO1xuICAgIH1cblxuICAgIHNldCBjYXRlZ29yeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldENhdGVnb3J5KCk7XG4gICAgfVxuXG4gICAgLyogRE9NICovXG4gICAgZ2V0IHRpdGxlU3BhbigpIHtcbiAgICAgICAgdGhpcy5fdGl0bGVTcGFuID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlU3BhbjtcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyU3BhbigpIHtcbiAgICAgICAgdGhpcy5fbnVtYmVyU3BhbiA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIubnVtYmVyXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyU3BhbjtcbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcnlTcGFuKCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yeVNwYW4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcnlTcGFuO1xuICAgIH1cblxuICAgIC8qIEZ1bmN0aW9ucyAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgICAgIHRoaXMuc2V0TnVtYmVyKCk7XG4gICAgICAgIHRoaXMuc2V0Q2F0ZWdvcnkoKTtcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSkge1xuICAgICAgICBzd2l0Y2gobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImRhdGEtdGl0bGVcIjogdGhpcy5zZXRUaXRsZSgpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLW51bWJlclwiOiB0aGlzLnNldE51bWJlcigpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLWNhdGVnb3J5XCI6IHRoaXMuc2V0Q2F0ZWdvcnkoKTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaXRsZSgpIHtcbiAgICAgICAgdGhpcy50aXRsZVNwYW4uaW5uZXJIVE1MID0gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXROdW1iZXIoKSB7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyPy5zbGljZSgtNCk7XG4gICAgICAgIHRoaXMubnVtYmVyU3Bhbi5pbm5lckhUTUwgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgc2V0Q2F0ZWdvcnkoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTcGFuLmlubmVySFRNTCA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgfVxufSIsImltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCwgY3VzdG9tQ29tcG9uZW50IH0gZnJvbSBcIkBzYWdlbW9kZW5pbmphL2N1c3RvbS1jb21wb25lbnRcIjtcblxuQGN1c3RvbUNvbXBvbmVudCgnYWN0aW9uLWJ1dHRvbicpXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDYsIDE5NiwgMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZmlsbC1yZXN0KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCg6aG92ZXIpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTA2LCAxOTYsIDAuMjUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdCg6YWN0aXZlKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDEwNiwgMTk2LCAwLjMpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWydkYXRhLWljb24nXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zeW1ib2xJY29uOiBhbnk7XG4gICAgXG4gICAgLyogQXR0cmlidXRlcyAqL1xuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICAgIH1cblxuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0SWNvbigpO1xuICAgIH1cblxuICAgIC8qIERPTSAqL1xuICAgIGdldCBzeW1ib2xJY29uKCkge1xuICAgICAgICB0aGlzLl9zeW1ib2xJY29uID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignZmx1ZW50LXN5bWJvbC1pY29uJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xJY29uO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8Zmx1ZW50LXN5bWJvbC1pY29uPjwvZmx1ZW50LXN5bWJvbC1pY29uPiBcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICAvKiBGdW5jdGlvbnMgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgIT0gJ2RhdGEtaWNvbicpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXRJY29uKCk7XG4gICAgfVxuXG4gICAgc2V0SWNvbigpIHtcbiAgICAgICAgdGhpcy5zeW1ib2xJY29uLnN5bWJvbCA9IHRoaXMuaWNvbjtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50LCBjdXN0b21Db21wb25lbnQgfSBmcm9tIFwiQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudFwiO1xuXG5AY3VzdG9tQ29tcG9uZW50KCdjYXJkLWJhbGFuY2UnKVxuZXhwb3J0IGNsYXNzIENhcmRCYWxhbmNlIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGdhcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmY2M7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZ3VyZS5tZWRpdW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpZ3VyZS5zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlndXJlOjphZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjgwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlndXJlLm1lZGl1bTo6YWZ0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWd1cmUuc21hbGw6OmFmdGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbmN5LXBocDo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJQSFBcIjtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcImRhdGEtdGl0bGVcIiwgXCJkYXRhLWN1cnJlbmN5XCJdO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RpdGxlU3BhbjogSFRNTFNwYW5FbGVtZW50O1xuICAgIHByaXZhdGUgX2ZpZ3VyZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcbiAgICBwcml2YXRlIF9zbG90OiBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgICAvKiBBdHRyaWJ1dGVzICovXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIpO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtdGl0bGVcIiwgdmFsdWUpO1xuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbmN5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbmN5XCIpID8/IFwicGhwXCI7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbmN5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVuY3koKTtcbiAgICB9XG5cbiAgICAvKiBET00gKi9cbiAgICBnZXQgdGl0bGVTcGFuKCkge1xuICAgICAgICB0aGlzLl90aXRsZVNwYW4gPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVTcGFuO1xuICAgIH1cblxuICAgIGdldCBmaWd1cmVTcGFuKCkge1xuICAgICAgICB0aGlzLl9maWd1cmVTcGFuID8/PSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5maWd1cmVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWd1cmVTcGFuO1xuICAgIH1cblxuICAgIGdldCBzbG90RWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5fc2xvdCA/Pz0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzbG90XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2xvdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlByb2plY3Rpb248L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZ3VyZSBjdXJyZW5jeS1waHBcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgLyogRnVuY3Rpb25zICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW5jeSgpO1xuXG4gICAgICAgIHRoaXMuc2xvdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNsb3RjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLnNsb3RFbGVtZW50LmFzc2lnbmVkTm9kZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBub2Rlc1swXS50ZXh0Q29udGVudC5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICBpZihpc05hTihiYWxhbmNlKSkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYmFsYW5jZSA+PSAxMDAwMDAwKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlU3Bhbi5jbGFzc0xpc3QuYWRkKFwic21hbGxcIik7XG4gICAgICAgICAgICBlbHNlIGlmIChiYWxhbmNlID49IDEwMDAwMClcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZVNwYW4uY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJkYXRhLXRpdGxlXCI6IHRoaXMuc2V0VGl0bGUoKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF0YS1jdXJyZW5jeVwiOiB0aGlzLnNldEN1cnJlbmN5KCk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGl0bGUoKSB7XG4gICAgICAgIHRoaXMudGl0bGVTcGFuLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVuY3koKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYGZpZ3VyZSBjdXJyZW5jeS0ke3RoaXMuY3VycmVuY3l9YCk7XG4gICAgfVxufSIsIi8vIFdyaXR0ZW4gYnkgR2FyeSBBbnRpZXIgMjAyMFxuLy8gQ3VycmVudCB2ZXJzaW9uOiAxLjIuMC4xXG5cbmNvbnN0IENvbnRleHRNYXJnaW4gPSAzO1xuY29uc3QgQ29udGV4dFRvcE9mZnNldCA9IDc7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU9wdGlvbiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBjYWxsYmFja3M6ICgoZGF0YTogYW55KSA9PiB2b2lkKVtdO1xuICAgIGVuYWJsZUNoYWxsZW5nZTogKGRhdGE6IGFueSkgPT4gYm9vbGVhbjtcbiAgICB2aXNpYmxlQ2hhbGxlbmdlOiAoZGF0YTogYW55KSA9PiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG5cbiAgICAgICAgdGhpcy5lbmFibGVDaGFsbGVuZ2UgPSAoKSA9PiB0cnVlO1xuICAgICAgICB0aGlzLnZpc2libGVDaGFsbGVuZ2UgPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIG9uQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgdmlzaWJsZShjaGFsbGVuZ2UpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgIH1cblxuICAgIGVuYWJsZShjaGFsbGVuZ2UpIHtcbiAgICAgICAgdGhpcy5lbmFibGVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2U7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlQ2hhbGxlbmdlKGRhdGEpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRoaXMubGFiZWw7XG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdjb3JlLWNvbnRleHQtYWN0aW9uJylcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gIXRoaXMuZW5hYmxlQ2hhbGxlbmdlKGRhdGEpO1xuXG4gICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJvb3Q6IEhUTUxEaXZFbGVtZW50O1xuICAgIG9wdGlvbnM6IENvbnRleHRNZW51T3B0aW9uW107XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcm9vdDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgfVxuXG4gICAgYWRkT3B0aW9uKG9wdGlvbjogQ29udGV4dE1lbnVPcHRpb24pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICB9XG5cbiAgICBhZGRPcHRpb25zKC4uLm9wdGlvbnM6IENvbnRleHRNZW51T3B0aW9uW10pIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pKTtcbiAgICB9XG5cbiAgICBkcmF3KGRhdGFJbmRleCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhW2RhdGFJbmRleF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbi5kcmF3KGRhdGEpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgYWRkRGF0YShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEucHVzaChkYXRhKSAtIDE7XG4gICAgfVxuXG4gICAgY2xlYXJEYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUdsb2JhbCB7XG4gICAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgbWVudXM6IHtba2V5OiBzdHJpbmddOiBDb250ZXh0TWVudX1cblxuICAgIGFjdGl2ZVRyaWdnZXI6IGFueTtcbiAgICB0cmlnZ2VyVG9wOiBhbnk7XG4gICAgdHJpZ2dlckxlZnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5tZW51cyA9IHt9O1xuXG4gICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlcjtcbiAgICAgICAgdGhpcy50cmlnZ2VyVG9wO1xuICAgICAgICB0aGlzLnRyaWdnZXJMZWZ0O1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JlLWNvbnRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgJ2FkZENvbnRleHQnLCB7IHZhbHVlOiBmdW5jdGlvbihjb250ZXh0LCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gY29udGV4dC5hZGREYXRhKGRhdGEpO1xuXG4gICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5jb250ZXh0SWQgPSBjb250ZXh0LmlkO1xuICAgICAgICAgICAgdGFyZ2V0LmRhdGFzZXQuaW5kZXggPSBkYXRhSW5kZXg7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9fSk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0LmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBhZGRNZW51KGlkOiBzdHJpbmcsIHJvb3Q6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBuZXcgQ29udGV4dE1lbnUoaWQsIHJvb3QpO1xuXG4gICAgICAgIHRoaXMubWVudXNbaWRdID0gbWVudTtcblxuICAgICAgICByZXR1cm4gbWVudTtcbiAgICB9XG5cbiAgICBvbkNvbnRleHQoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgaXNEb2N1bWVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgY29udGV4dElkO1xuICAgICAgICBsZXQgZGF0YUluZGV4O1xuICAgICAgICBcbiAgICAgICAgZG9cbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Py5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXNEb2N1bWVudCA9IHRhcmdldCA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBjb250ZXh0SWQgPSAhaXNEb2N1bWVudCA/IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbnRleHQtaWRcIikgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKCFpc0RvY3VtZW50ICYmICFjb250ZXh0SWQpO1xuXG4gICAgICAgIGRhdGFJbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICBcbiAgICAgICAgaWYoY29udGV4dElkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVHJpZ2dlciA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclRvcCA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckxlZnQgPSBlLmNsaWVudFg7XG5cbiAgICAgICAgICAgIHRoaXMuc2hvdyhjb250ZXh0SWQsIGRhdGFJbmRleCk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5lbGVtZW50KSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhjb250ZXh0SWQ6IHN0cmluZywgZGF0YUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnVzW2NvbnRleHRJZF07XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBtZW51LmRyYXcoZGF0YUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJvdW5kcy4uLlxuICAgICAgICBjb25zdCByb290ID0gbWVudS5yb290O1xuICAgICAgICBjb25zdCB7bGVmdCwgdG9wLCByaWdodCwgYm90dG9tfSA9IHJvb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCByb290VG9wID0gdG9wICsgQ29udGV4dE1hcmdpbjtcbiAgICAgICAgbGV0IHJvb3RSaWdodCA9IHJpZ2h0IC0gQ29udGV4dE1hcmdpbjtcbiAgICAgICAgbGV0IHJvb3RCb3R0b20gPSBib3R0b20gLSBDb250ZXh0TWFyZ2luO1xuICAgICAgICBsZXQgcm9vdExlZnQgPSBsZWZ0ICsgQ29udGV4dE1hcmdpbjtcblxuICAgICAgICAvLyBDb250ZXh0cy4uLlxuICAgICAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjb250ZXh0VG9wID0gdGhpcy50cmlnZ2VyVG9wIC0gQ29udGV4dFRvcE9mZnNldDtcbiAgICAgICAgbGV0IGNvbnRleHRMZWZ0ID0gdGhpcy50cmlnZ2VyTGVmdDtcbiAgICAgICAgbGV0IGNvbnRleHRCb3R0b20gPSBjb250ZXh0VG9wICsgaGVpZ2h0O1xuICAgICAgICBsZXQgY29udGV4dFJpZ2h0ID0gY29udGV4dExlZnQgKyBoZWlnaHQ7XG5cbiAgICAgICAgLy8gWC1saW1pdCBib3VuZHMuXG4gICAgICAgIGlmIChjb250ZXh0TGVmdCA8IHJvb3RMZWZ0KSB7XG4gICAgICAgICAgICBjb250ZXh0TGVmdCA9IHJvb3RMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRSaWdodCA+IHJvb3RSaWdodCkge1xuICAgICAgICAgICAgY29udGV4dExlZnQgPSByb290UmlnaHQgLSB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFktbGltaXQgYm91bmRzLlxuICAgICAgICBpZiAoY29udGV4dFRvcCA8IHJvb3RUb3ApIHtcbiAgICAgICAgICAgIGNvbnRleHRUb3AgPSByb290VG9wO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRCb3R0b20gPiByb290Qm90dG9tKSB7XG4gICAgICAgICAgICBjb250ZXh0VG9wID0gcm9vdEJvdHRvbSAtIGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke2NvbnRleHRUb3B9cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2NvbnRleHRMZWZ0fXB4YDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBudWxsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVUcmlnZ2VyPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZVRyaWdnZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHJpZ2dlclRvcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50cmlnZ2VyTGVmdCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnbG9iYWxDb250ZXh0ID0gbmV3IENvbnRleHRNZW51R2xvYmFsKCk7IiwiaW1wb3J0IHsgY29tcHV0ZUFscGhhQmxlbmQgfSBmcm9tICdAL2NsYXNzZXMvYWxwaGEtYmxlbmQnO1xuaW1wb3J0IHsgY3VzdG9tQ29tcG9uZW50LCBDdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5cbkBjdXN0b21Db21wb25lbnQoJ3RyYW5zYWN0aW9uLXBhbmVsJylcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblBhbmVsIGV4dGVuZHMgQ3VzdG9tQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAtLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLS1yYWRpdXMtbW9iOiAxNXB4O1xuICAgICAgICAgICAgLS1tYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAtLXRvcDogY2FsYyg0NHB4IC8gMik7XG4gICAgICAgICAgICAtLXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmlzaWJsZSkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcmFkaXVzLW1vYik7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tcmFkaXVzLW1vYik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCBjYWxjKDMyICogMC41cHgpIGNhbGMoKDMyICogMXB4KSkgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9wKSk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYW5kbGUtYmFyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYW5kbGUtYmFyOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE5NCwgMTk0LCAxKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2xvdCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKiBUYWJsZXQgJiBVcCAqL1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAucGFuZWwge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1tYXJnaW4pICogMik7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGModmFyKC0td2lkdGgpICogLTEpO1xuICAgICAgICAgICAgICAgIHRvcDogdmFyKC0tbWFyZ2luKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5oYW5kbGUtYmFyOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgcHJpdmF0ZSBfcGFuZWw6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgX2NsaWNrZWRUaHJvdWdoUGFuZWw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IHsgYWxwaGE6IDAuMCB9O1xuICAgIH1cblxuICAgIC8qIERPTSAqL1xuICAgIGdldCBwYW5lbCgpIHtcbiAgICAgICAgdGhpcy5fcGFuZWwgPz89IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnBhbmVsXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFuZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZSk7XG4gICAgICAgIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9jbGlja2VkVGhyb3VnaFBhbmVsID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbih0cnVlLCAwLjEpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrZWRUaHJvdWdoUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbihmYWxzZSwgMCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbihzaG93OiBib29sZWFuLCBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoe1xuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVpbnRcIixcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4gdGhpcy5jaGFuZ2VUaGVtZSgpLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZighc2hvdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUGFuZWxcbiAgICAgICAgY29uc3QgcGFuZWxBbmltOiBhbmltZS5BbmltZUFuaW1QYXJhbXMgPSB7dGFyZ2V0czogdGhpcy5wYW5lbH07XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KVxuICAgICAgICAgICAgcGFuZWxBbmltLnRvcCA9IHNob3cgPyAyMiA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcGFuZWxBbmltLnJpZ2h0ID0gc2hvdyA/IDE1IDogLTUzMTsgLy8gVE9ETzogRHluYW1pYz9cblxuICAgICAgICB0aW1lbGluZS5hZGQocGFuZWxBbmltLCAwKTtcblxuICAgICAgICAvLyBPdmVybGF5XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBgcmdiYSgwLCAwLCAwLCAke2FscGhhfSlgO1xuICAgICAgICB0aW1lbGluZS5hZGQoe3RhcmdldHM6IHRoaXMsIGJhY2tncm91bmQ6IGJhY2tncm91bmR9LCAwKTtcblxuICAgICAgICAvLyBUaGVtZVxuICAgICAgICAvLyBGSVhNRTogRmxpY2tlciBvbiBzaG93IGZpcnN0IGF0dGVtcHQuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlBbmltOiBhbmltZS5BbmltZVBhcmFtcyA9IHsgdGFyZ2V0czogdGhpcy5fb3ZlcmxheSwgYWxwaGE6IGFscGhhIH07XG4gICAgICAgIHRpbWVsaW5lLmFkZChvdmVybGF5QW5pbSwgMCk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGhlbWUoKSB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gY29tcHV0ZUFscGhhQmxlbmQoXG4gICAgICAgICAgICBcImYyZjJmMlwiLFxuICAgICAgICAgICAgXCIwMDAwMDBcIiwgXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5LmFscGhhXG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl0nKVxuICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIHRoZW1lKTtcbiAgICB9XG59IiwiZXhwb3J0IGVudW0gT3BlcmF0aW9uIHtcbiAgICBDcmVhdGUsXG4gICAgVXBkYXRlXG59IiwiZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25UeXBlIHtcbiAgICBEZXBvc2l0LFxuICAgIFdpdGhkcmF3LFxuICAgIFRyYW5zZmVyXG59IiwiaW1wb3J0IHsgUmVzcG9uc2VQYXlsb2FkIH0gZnJvbSAnQC9jbGFzc2VzL3Jlc3BvbnNlLXBheWxvYWQnO1xuaW1wb3J0IHsgc2VydmljZSwgU2VydmljZUJhc2UgfSBmcm9tICcuL3NlcnZpY2UtYmFzZSc7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnQC9lbnRpdGllcy9hY2NvdW50JztcblxuQHNlcnZpY2UoJy9hY2NvdW50L2NydWQnKVxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xuICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdyZWFkLnBocCcpO1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLmdldChlbmRwb2ludCk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGEgYXMgUmVzcG9uc2VQYXlsb2FkPEFjY291bnRbXT47XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKGRhdGE6IEZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5lbmRwb2ludCgnY3JlYXRlLnBocCcpO1xuICAgICAgICBjb25zdCB7ZGF0YTogcGF5bG9hZH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiBwYXlsb2FkIGFzIFJlc3BvbnNlUGF5bG9hZDxzdHJpbmc+O1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZShkYXRhOiBGb3JtRGF0YSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuZW5kcG9pbnQoJ3VwZGF0ZS5waHAnKTtcbiAgICAgICAgY29uc3Qge2RhdGE6IHBheWxvYWR9ID0gYXdhaXQgdGhpcy5fY29ubmVjdGlvbi5wb3N0KGVuZHBvaW50LCBkYXRhKTtcblxuICAgICAgICByZXR1cm4gcGF5bG9hZCBhcyBSZXNwb25zZVBheWxvYWQ8c3RyaW5nPjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgSlNPTlxuICAgIGFzeW5jIGNsb3NlKGlkOiBiaWdpbnQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdjbG9zZS5waHAnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGRhdGEuYXBwZW5kKCdJZCcsIGlkLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGNvbnN0IHtkYXRhOiBwYXlsb2FkfSA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkIGFzIFJlc3BvbnNlUGF5bG9hZDxzdHJpbmc+O1xuICAgIH1cblxuICAgIC8vIFRPRE86IFVzZSBKU09OXG4gICAgYXN5bmMgcmVtb3ZlKGlkOiBiaWdpbnQpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLmVuZHBvaW50KCdkZWxldGUucGhwJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBkYXRhLmFwcGVuZCgnSWQnLCBpZC50b1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCB7ZGF0YTogcGF5bG9hZH0gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnBvc3QoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gcGF5bG9hZCBhcyBSZXNwb25zZVBheWxvYWQ8c3RyaW5nPjtcbiAgICB9XG59IiwiaW1wb3J0IGF4aW9zLCB7QXhpb3NJbnN0YW5jZX0gZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZUJhc2Uge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfY29ubmVjdGlvbjogQXhpb3NJbnN0YW5jZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jb25uZWN0aW9uID0gYXhpb3MuY3JlYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGVuZHBvaW50KHBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBiYXNlVVJMID0gKHRoaXMgYXMgYW55KS5fYmFzZVVSTDtcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VVUkx9LyR7cGF0aH1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UoYmFzZVVSTDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIDxUIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiB7fSB9Pihjb25zdHJ1Y3RvcjogVCkge1xuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICAgICAgICBfYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZihmbikge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge3ZhbHVlfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFkYXB0ZXI6IChhZGFwdGVycykgPT4ge1xuICAgIGFkYXB0ZXJzID0gdXRpbHMuaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyA6IFthZGFwdGVyc107XG5cbiAgICBjb25zdCB7bGVuZ3RofSA9IGFkYXB0ZXJzO1xuICAgIGxldCBuYW1lT3JBZGFwdGVyO1xuICAgIGxldCBhZGFwdGVyO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgICAgaWYoKGFkYXB0ZXIgPSB1dGlscy5pc1N0cmluZyhuYW1lT3JBZGFwdGVyKSA/IGtub3duQWRhcHRlcnNbbmFtZU9yQWRhcHRlci50b0xvd2VyQ2FzZSgpXSA6IG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYWRhcHRlcikge1xuICAgICAgaWYgKGFkYXB0ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgIGBBZGFwdGVyICR7bmFtZU9yQWRhcHRlcn0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnRgLFxuICAgICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgdXRpbHMuaGFzT3duUHJvcChrbm93bkFkYXB0ZXJzLCBuYW1lT3JBZGFwdGVyKSA/XG4gICAgICAgICAgYEFkYXB0ZXIgJyR7bmFtZU9yQWRhcHRlcn0nIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkYCA6XG4gICAgICAgICAgYFVua25vd24gYWRhcHRlciAnJHtuYW1lT3JBZGFwdGVyfSdgXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWRhcHRlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi8uLi9oZWxwZXJzL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4vLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi4vaGVscGVycy9zcGVlZG9tZXRlci5qcyc7XG5cbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtKSB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGVcbiAgICB9O1xuXG4gICAgZGF0YVtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXSA9IHRydWU7XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfTtcbn1cblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52KSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKGZhbHNlKTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ211bHRpcGFydC9mb3JtLWRhdGE7JywgZmFsc2UpOyAvLyBtb2JpbGUvZGVza3RvcCBhcHAgZnJhbWV3b3Jrc1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCwgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnIDogJ3RpbWVvdXQgZXhjZWVkZWQnO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gQXhpb3NFcnJvci5FVElNRURPVVQgOiBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmIChwbGF0Zm9ybS5pc1N0YW5kYXJkQnJvd3NlckVudikge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICBjb25zdCB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKVxuICAgICAgICAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgJiYgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSk7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0KGNvbmZpZy54c3JmSGVhZGVyTmFtZSwgeHNyZlZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgcmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShudWxsKTtcblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLnRvSlNPTigpLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25VcGxvYWRQcm9ncmVzcykpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBjYW5jZWwgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChmdWxsUGF0aCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnLi9jb3JlL0F4aW9zLmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL2NvcmUvbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBDYW5jZWxUb2tlbiBmcm9tICcuL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuL2Vudi9kYXRhLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBzcHJlYWQgZnJvbSAnLi9oZWxwZXJzL3NwcmVhZC5qcyc7XG5pbXBvcnQgaXNBeGlvc0Vycm9yIGZyb20gJy4vaGVscGVycy9pc0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJy4vYWRhcHRlcnMvYWRhcHRlcnMuanMnO1xuaW1wb3J0IEh0dHBTdGF0dXNDb2RlIGZyb20gJy4vaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJucyB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgY29uc3QgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0LCBudWxsLCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbiAgaW5zdGFuY2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbmNvbnN0IGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsZWRFcnJvciA9IENhbmNlbGVkRXJyb3I7XG5heGlvcy5DYW5jZWxUb2tlbiA9IENhbmNlbFRva2VuO1xuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcbmF4aW9zLlZFUlNJT04gPSBWRVJTSU9OO1xuYXhpb3MudG9Gb3JtRGF0YSA9IHRvRm9ybURhdGE7XG5cbi8vIEV4cG9zZSBBeGlvc0Vycm9yIGNsYXNzXG5heGlvcy5BeGlvc0Vycm9yID0gQXhpb3NFcnJvcjtcblxuLy8gYWxpYXMgZm9yIENhbmNlbGVkRXJyb3IgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmF4aW9zLkNhbmNlbCA9IGF4aW9zLkNhbmNlbGVkRXJyb3I7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xuXG4vLyBFeHBvc2UgbWVyZ2VDb25maWdcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XG5cbmF4aW9zLkF4aW9zSGVhZGVycyA9IEF4aW9zSGVhZGVycztcblxuYXhpb3MuZm9ybVRvSlNPTiA9IHRoaW5nID0+IGZvcm1EYXRhVG9KU09OKHV0aWxzLmlzSFRNTEZvcm0odGhpbmcpID8gbmV3IEZvcm1EYXRhKHRoaW5nKSA6IHRoaW5nKTtcblxuYXhpb3MuZ2V0QWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXI7XG5cbmF4aW9zLkh0dHBTdGF0dXNDb2RlID0gSHR0cFN0YXR1c0NvZGU7XG5cbmF4aW9zLmRlZmF1bHQgPSBheGlvcztcblxuLy8gdGhpcyBtb2R1bGUgc2hvdWxkIG9ubHkgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBheGlvc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL0NhbmNlbGVkRXJyb3IuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxUb2tlbn1cbiAqL1xuY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG5cbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbihjYW5jZWwgPT4ge1xuICAgICAgaWYgKCF0b2tlbi5fbGlzdGVuZXJzKSByZXR1cm47XG5cbiAgICAgIGxldCBpID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbiA9IG9uZnVsZmlsbGVkID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gICAqL1xuICBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgY2FuY2VsID0gYztcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICBjYW5jZWxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmNsYXNzIEF4aW9zIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb25cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxuICAgICAgaGVhZGVycy5jb21tb24sXG4gICAgICBoZWFkZXJzW2NvbmZpZy5tZXRob2RdXG4gICAgKTtcblxuICAgIGhlYWRlcnMgJiYgdXRpbHMuZm9yRWFjaChcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgbGV0IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGxlbiA9IGNoYWluLmxlbmd0aDtcblxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICBsZXQgbmV3Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogaXNGb3JtID8ge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kICsgJ0Zvcm0nXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICByZXNwb25zZSAmJiAodGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlKTtcbn1cblxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcGFyc2VIZWFkZXJzIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gKHN0cikgPT4gL15bLV9hLXpBLVowLTleYHx+LCEjJCUmJyorLl0rJC8udGVzdChzdHIudHJpbSgpKTtcblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIsIGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICBpZiAodXRpbHMuaXNGdW5jdGlvbihmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xuICB9XG5cbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICAgIHZhbHVlID0gaGVhZGVyO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHJldHVybjtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzUmVnRXhwKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLnRlc3QodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlci50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKCcgJyArIGhlYWRlcik7XG5cbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kTmFtZSArIGFjY2Vzc29yTmFtZSwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCBoZWFkZXIsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn1cblxuY2xhc3MgQXhpb3NIZWFkZXJzIHtcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xuICAgIGhlYWRlcnMgJiYgdGhpcy5zZXQoaGVhZGVycyk7XG4gIH1cblxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hlYWRlciBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgbEhlYWRlcik7XG5cbiAgICAgIGlmKCFrZXkgfHwgc2VsZltrZXldID09PSB1bmRlZmluZWQgfHwgX3Jld3JpdGUgPT09IHRydWUgfHwgKF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSkpIHtcbiAgICAgICAgc2VsZltrZXkgfHwgX2hlYWRlcl0gPSBub3JtYWxpemVWYWx1ZShfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+XG4gICAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIChfdmFsdWUsIF9oZWFkZXIpID0+IHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSk7XG5cbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChoZWFkZXIpIHx8IGhlYWRlciBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgIHNldEhlYWRlcnMoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSlcbiAgICB9IGVsc2UgaWYodXRpbHMuaXNTdHJpbmcoaGVhZGVyKSAmJiAoaGVhZGVyID0gaGVhZGVyLnRyaW0oKSkgJiYgIWlzVmFsaWRIZWFkZXJOYW1lKGhlYWRlcikpIHtcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG5cbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VyID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuZXhlYyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgcmV0dXJuICEhKGtleSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlcikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhlYWRlcihfaGVhZGVyKSB7XG4gICAgICBfaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIF9oZWFkZXIpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG5cbiAgICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlci5mb3JFYWNoKGRlbGV0ZUhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlciwgdHJ1ZSkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBub3JtYWxpemUoZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHNlbGZba2V5XSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gZm9ybWF0ID8gZm9ybWF0SGVhZGVyKGhlYWRlcikgOiBTdHJpbmcoaGVhZGVyKS50cmltKCk7XG5cbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBoZWFkZXIpIHtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgIH1cblxuICAgICAgc2VsZltub3JtYWxpemVkXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcblxuICAgICAgaGVhZGVyc1tub3JtYWxpemVkXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbmNhdCguLi50YXJnZXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29uY2F0KHRoaXMsIC4uLnRhcmdldHMpO1xuICB9XG5cbiAgdG9KU09OKGFzU3RyaW5ncykge1xuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiAob2JqW2hlYWRlcl0gPSBhc1N0cmluZ3MgJiYgdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSkubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+IGhlYWRlciArICc6ICcgKyB2YWx1ZSkuam9pbignXFxuJyk7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cblxuICBzdGF0aWMgY29uY2F0KGZpcnN0LCAuLi50YXJnZXRzKSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBuZXcgdGhpcyhmaXJzdCk7XG5cbiAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gY29tcHV0ZWQuc2V0KHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xuICB9XG5cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFsc10gPSAodGhpc1skaW50ZXJuYWxzXSA9IHtcbiAgICAgIGFjY2Vzc29yczoge31cbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc29ycyA9IGludGVybmFscy5hY2Nlc3NvcnM7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVBY2Nlc3NvcihfaGVhZGVyKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWFjY2Vzc29yc1tsSGVhZGVyXSkge1xuICAgICAgICBidWlsZEFjY2Vzc29ycyhwcm90b3R5cGUsIF9oZWFkZXIpO1xuICAgICAgICBhY2Nlc3NvcnNbbEhlYWRlcl0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHV0aWxzLmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlci5mb3JFYWNoKGRlZmluZUFjY2Vzc29yKSA6IGRlZmluZUFjY2Vzc29yKGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5BeGlvc0hlYWRlcnMuYWNjZXNzb3IoWydDb250ZW50LVR5cGUnLCAnQ29udGVudC1MZW5ndGgnLCAnQWNjZXB0JywgJ0FjY2VwdC1FbmNvZGluZycsICdVc2VyLUFnZW50JywgJ0F1dGhvcml6YXRpb24nXSk7XG5cbi8vIHJlc2VydmVkIG5hbWVzIGhvdGZpeFxudXRpbHMucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHt2YWx1ZX0sIGtleSkgPT4ge1xuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxuICByZXR1cm4ge1xuICAgIGdldDogKCkgPT4gdmFsdWUsXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XG4gICAgICB0aGlzW21hcHBlZF0gPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSGVhZGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAgICovXG4gIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW50ZXJjZXB0b3Igd2FzIHJlbW92ZWQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNBYnNvbHV0ZVVSTCBmcm9tICcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMnO1xuaW1wb3J0IGNvbWJpbmVVUkxzIGZyb20gJy4uL2hlbHBlcnMvY29tYmluZVVSTHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vQXhpb3NIZWFkZXJzLmpzXCI7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB0aGluZy50b0pTT04oKSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIGNhc2VsZXNzKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIsIGNhc2VsZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlRW5jb2Rpbmc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdmFsaWRhdGVTdGF0dXM6IG1lcmdlRGlyZWN0S2V5cyxcbiAgICBoZWFkZXJzOiAoYSwgYikgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSwgdHJ1ZSlcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZzEsIGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IHBsYXRmb3JtLmlzTm9kZSA/ICdodHRwJyA6ICd4aHInLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICBjb25zdCBpc09iamVjdFBheWxvYWQgPSB1dGlscy5pc09iamVjdChkYXRhKTtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMuaXNIVE1MRm9ybShkYXRhKSkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMuaXNGb3JtRGF0YShkYXRhKTtcblxuICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICBpZiAoIWhhc0pTT05Db250ZW50VHlwZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCddLCAobWV0aG9kKSA9PiB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS41LjBcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/b2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBcbiAgY29uc3QgX2VuY29kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSA/XG4gICAgICBwYXJhbXMudG9TdHJpbmcoKSA6XG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgY29uc3QgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4vLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICBjb25zdCBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbi8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcbiAgLy8gZm9vW3hdW3ldW3pdXG4gIC8vIGZvby54LnkuelxuICAvLyBmb28teC15LXpcbiAgLy8gZm9vIHggeSB6XG4gIHJldHVybiB1dGlscy5tYXRjaEFsbCgvXFx3K3xcXFsoXFx3KildL2csIG5hbWUpLm1hcChtYXRjaCA9PiB7XG4gICAgcmV0dXJuIG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY29udmVydCB0byBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpO1xuICBsZXQgaTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGxldCBrZXk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgb2JqW2tleV0gPSBhcnJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgRm9ybURhdGEgb2JqZWN0IGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXG4gKlxuICogQHJldHVybnMge09iamVjdDxzdHJpbmcsIGFueT4gfCBudWxsfSBUaGUgY29udmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZm9ybURhdGFUb0pTT04oZm9ybURhdGEpIHtcbiAgZnVuY3Rpb24gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xuICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IE51bWJlci5pc0Zpbml0ZSgrbmFtZSk7XG4gICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPj0gcGF0aC5sZW5ndGg7XG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuXG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSBbdGFyZ2V0W25hbWVdLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRbbmFtZV0gfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0W25hbWVdLCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gYXJyYXlUb09iamVjdCh0YXJnZXRbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzLmlzRnVuY3Rpb24oZm9ybURhdGEuZW50cmllcykpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2hFbnRyeShmb3JtRGF0YSwgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBidWlsZFBhdGgocGFyc2VQcm9wUGF0aChuYW1lKSwgdmFsdWUsIG9iaiwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1EYXRhVG9KU09OO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZCtcXC0uXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICBjb25zdCBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIGxldCBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0cmljdFxuZXhwb3J0IGRlZmF1bHQgbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5jb25zdCBpZ25vcmVEdXBsaWNhdGVPZiA9IHV0aWxzLnRvT2JqZWN0U2V0KFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd0hlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJhd0hlYWRlcnMgPT4ge1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGtleTtcbiAgbGV0IHZhbDtcbiAgbGV0IGk7XG5cbiAgcmF3SGVhZGVycyAmJiByYXdIZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IGxpbmUuc3Vic3RyaW5nKGkgKyAxKS50cmltKCk7XG5cbiAgICBpZiAoIWtleSB8fCAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2Zba2V5XSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSkge1xuICAgICAgICBwYXJzZWRba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IFt2YWxdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBkYXRhIG1heFJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlc0NvdW50PSAxMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xuICBzYW1wbGVzQ291bnQgPSBzYW1wbGVzQ291bnQgfHwgMTA7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCBmaXJzdFNhbXBsZVRTO1xuXG4gIG1pbiA9IG1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogMTAwMDtcblxuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBjb25zdCBzdGFydGVkQXQgPSB0aW1lc3RhbXBzW3RhaWxdO1xuXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XG4gICAgICBmaXJzdFNhbXBsZVRTID0gbm93O1xuICAgIH1cblxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcblxuICAgIGxldCBpID0gdGFpbDtcbiAgICBsZXQgYnl0ZXNDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoaSAhPT0gaGVhZCkge1xuICAgICAgYnl0ZXNDb3VudCArPSBieXRlc1tpKytdO1xuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG5cbiAgICBpZiAoaGVhZCA9PT0gdGFpbCkge1xuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoYnl0ZXNDb3VudCAqIDEwMDAgLyBwYXNzZWQpIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVlZG9tZXRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuLy8gdGVtcG9yYXJ5IGhvdGZpeCB0byBhdm9pZCBjaXJjdWxhciByZWZlcmVuY2VzIHVudGlsIEF4aW9zVVJMU2VhcmNoUGFyYW1zIGlzIHJlZmFjdG9yZWRcbmltcG9ydCBQbGF0Zm9ybUZvcm1EYXRhIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3Qob3B0aW9ucywge1xuICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgaW5kZXhlczogZmFsc2VcbiAgfSwgZmFsc2UsIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xuICBjb25zdCB1c2VCbG9iID0gX0Jsb2IgJiYgdXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHVzZUJsb2IgJiYgdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgIXBhdGggJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IG1ldGFUb2tlbnMgPyBrZXkgOiBrZXkuc2xpY2UoMCwgLTIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxuICAgICAgICAoKHV0aWxzLmlzRmlsZUxpc3QodmFsdWUpIHx8IHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykpICYmIChhcnIgPSB1dGlscy50b0FycmF5KHZhbHVlKSlcbiAgICAgICAgKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcblxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xuICAgICAgICAgICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGluZGV4ZXMgPT09IHRydWUgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKSA6IChpbmRleGVzID09PSBudWxsID8ga2V5IDoga2V5ICsgJ1tdJyksXG4gICAgICAgICAgICBjb252ZXJ0VmFsdWUoZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICBjb25zdCBleHBvc2VkSGVscGVycyA9IE9iamVjdC5hc3NpZ24ocHJlZGljYXRlcywge1xuICAgIGRlZmF1bHRWaXNpdG9yLFxuICAgIGNvbnZlcnRWYWx1ZSxcbiAgICBpc1Zpc2l0YWJsZVxuICB9KTtcblxuICBmdW5jdGlvbiBidWlsZCh2YWx1ZSwgcGF0aCkge1xuICAgIGlmICh1dGlscy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHJldHVybjtcblxuICAgIGlmIChzdGFjay5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcblxuICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIGVhY2goZWwsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIHZpc2l0b3IuY2FsbChcbiAgICAgICAgZm9ybURhdGEsIGVsLCB1dGlscy5pc1N0cmluZyhrZXkpID8ga2V5LnRyaW0oKSA6IGtleSwgcGF0aCwgZXhwb3NlZEhlbHBlcnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICBidWlsZChvYmopO1xuXG4gIHJldHVybiBmb3JtRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Gb3JtRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvRm9ybURhdGEoZGF0YSwgbmV3IHBsYXRmb3JtLmNsYXNzZXMuVVJMU2VhcmNoUGFyYW1zKCksIE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2l0b3I6IGZ1bmN0aW9uKHZhbHVlLCBrZXksIHBhdGgsIGhlbHBlcnMpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscGVycy5kZWZhdWx0VmlzaXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4uL2Vudi9kYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKCh0eXBlLCBpKSA9PiB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG5jb25zdCBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiAodmFsdWUsIG9wdCwgb3B0cykgPT4ge1xuICAgIGlmICh2YWxpZGF0b3IgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShvcHQsICcgaGFzIGJlZW4gcmVtb3ZlZCcgKyAodmVyc2lvbiA/ICcgaW4gJyArIHZlcnNpb24gOiAnJykpLFxuICAgICAgICBBeGlvc0Vycm9yLkVSUl9ERVBSRUNBVEVEXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtib29sZWFuP30gYWxsb3dVbmtub3duXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yc1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnID8gRm9ybURhdGEgOiBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyA/IFVSTFNlYXJjaFBhcmFtcyA6IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tICcuL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzJ1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vY2xhc3Nlcy9Gb3JtRGF0YS5qcydcbmltcG9ydCBCbG9iIGZyb20gJy4vY2xhc3Nlcy9CbG9iLmpzJ1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNTdGFuZGFyZEJyb3dzZXJFbnYgPSAoKCkgPT4ge1xuICBsZXQgcHJvZHVjdDtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChcbiAgICAocHJvZHVjdCA9IG5hdmlnYXRvci5wcm9kdWN0KSA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgIHByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgcHJvZHVjdCA9PT0gJ05TJylcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG59KSgpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG4gY29uc3QgaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcbiAgICB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nXG4gICk7XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNCcm93c2VyOiB0cnVlLFxuICBjbGFzc2VzOiB7XG4gICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgIEZvcm1EYXRhLFxuICAgIEJsb2JcbiAgfSxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGxldCBraW5kO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHwgKFxuICAgICAgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIChcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgICAgICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gICAgICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cbiAgc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGk7XG4gIGxldCBsO1xuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICBjb25zdCB7Y2FzZWxlc3N9ID0gaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzIHx8IHt9O1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsLCBrZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRLZXkgPSBjYXNlbGVzcyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSB8fCBrZXk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShyZXN1bHRbdGFyZ2V0S2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0sIHthbGxPd25LZXlzfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICB9KTtcbiAgcHJvcHMgJiYgT2JqZWN0LmFzc2lnbihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gdGhpbmcgPT4ge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRQcm90b3R5cGVPZihVaW50OEFycmF5KSk7XG5cbi8qKlxuICogRm9yIGVhY2ggZW50cnkgaW4gdGhlIG9iamVjdCwgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUga2V5IGFuZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBlbnRyeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gb2JqICYmIG9ialtTeW1ib2wuaXRlcmF0b3JdO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcblxuICBsZXQgcmVzdWx0O1xuXG4gIHdoaWxlICgocmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuLyogQ2hlY2tpbmcgaWYgdGhlIGtpbmRPZlRlc3QgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHdoZW4gcGFzc2VkIGFuIEhUTUxGb3JtRWxlbWVudC4gKi9cbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcblxuY29uc3QgdG9DYW1lbENhc2UgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcbiAgICBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gICAgfVxuICApO1xufTtcblxuLyogQ3JlYXRpbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHByb3BlcnR5LiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSAoKHtoYXNPd25Qcm9wZXJ0eX0pID0+IChvYmosIHByb3ApID0+IGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlZ0V4cCA9IGtpbmRPZlRlc3QoJ1JlZ0V4cCcpO1xuXG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcblxuICBmb3JFYWNoKGRlc2NyaXB0b3JzLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIGxldCByZXQ7XG4gICAgaWYgKChyZXQgPSByZWR1Y2VyKGRlc2NyaXB0b3IsIG5hbWUsIG9iaikpICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gcmV0IHx8IGRlc2NyaXB0b3I7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHJlZHVjZWREZXNjcmlwdG9ycyk7XG59XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IChvYmopID0+IHtcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIC8vIHNraXAgcmVzdHJpY3RlZCBwcm9wcyBpbiBzdHJpY3QgbW9kZVxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm47XG5cbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcblxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NhbiBub3QgcmV3cml0ZSByZWFkLW9ubHkgbWV0aG9kIFxcJycgKyBuYW1lICsgJ1xcJycpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCB0b09iamVjdFNldCA9IChhcnJheU9yU3RyaW5nLCBkZWxpbWl0ZXIpID0+IHtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgY29uc3QgZGVmaW5lID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHRvRmluaXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmNvbnN0IEFMUEhBID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuXG5jb25zdCBESUdJVCA9ICcwMTIzNDU2Nzg5JztcblxuY29uc3QgQUxQSEFCRVQgPSB7XG4gIERJR0lULFxuICBBTFBIQSxcbiAgQUxQSEFfRElHSVQ6IEFMUEhBICsgQUxQSEEudG9VcHBlckNhc2UoKSArIERJR0lUXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IHtsZW5ndGh9ID0gYWxwaGFiZXQ7XG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBzdHIgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGxlbmd0aHwwXVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdGhpbmcgaXMgYSBGb3JtRGF0YSBvYmplY3QsIHJldHVybiB0cnVlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gY2hlY2suXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3BlY0NvbXBsaWFudEZvcm0odGhpbmcpIHtcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl0pO1xufVxuXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IEFycmF5KDEwKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcblxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighKCd0b0pTT04nIGluIHNvdXJjZSkpIHtcbiAgICAgICAgc3RhY2tbaV0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcbiAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGFja1tpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdmlzaXQob2JqLCAwKTtcbn1cblxuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxuICB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24odGhpbmcpKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRoZW4pICYmIGlzRnVuY3Rpb24odGhpbmcuY2F0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlLFxuICBpc0ZpbGUsXG4gIGlzQmxvYixcbiAgaXNSZWdFeHAsXG4gIGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNUeXBlZEFycmF5LFxuICBpc0ZpbGVMaXN0LFxuICBmb3JFYWNoLFxuICBtZXJnZSxcbiAgZXh0ZW5kLFxuICB0cmltLFxuICBzdHJpcEJPTSxcbiAgaW5oZXJpdHMsXG4gIHRvRmxhdE9iamVjdCxcbiAga2luZE9mLFxuICBraW5kT2ZUZXN0LFxuICBlbmRzV2l0aCxcbiAgdG9BcnJheSxcbiAgZm9yRWFjaEVudHJ5LFxuICBtYXRjaEFsbCxcbiAgaXNIVE1MRm9ybSxcbiAgaGFzT3duUHJvcGVydHksXG4gIGhhc093blByb3A6IGhhc093blByb3BlcnR5LCAvLyBhbiBhbGlhcyB0byBhdm9pZCBFU0xpbnQgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIGRldGVjdGlvblxuICByZWR1Y2VEZXNjcmlwdG9ycyxcbiAgZnJlZXplTWV0aG9kcyxcbiAgdG9PYmplY3RTZXQsXG4gIHRvQ2FtZWxDYXNlLFxuICBub29wLFxuICB0b0Zpbml0ZU51bWJlcixcbiAgZmluZEtleSxcbiAgZ2xvYmFsOiBfZ2xvYmFsLFxuICBpc0NvbnRleHREZWZpbmVkLFxuICBBTFBIQUJFVCxcbiAgZ2VuZXJhdGVTdHJpbmcsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWljb24tZWxlbWVudC1jb21wb25lbnQnO1xuaW1wb3J0ICdAc2FnZW1vZGVuaW5qYS9mbHVlbnQtY29tbWFuZC1iYXItY29tcG9uZW50JztcbmltcG9ydCAnQC9jb21wb25lbnRzL2FjY291bnQtY2FyZCc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uJztcbmltcG9ydCAnQC9jb21wb25lbnRzL2NhcmQtYmFsYW5jZSc7XG5pbXBvcnQgJ0AvY29tcG9uZW50cy90cmFuc2FjdGlvbi1wYW5lbCc7XG5pbXBvcnQgdXNlTmF2aWdhdGlvbiBmcm9tICdAL2NsYXNzZXMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbk1hbmFnZXIgfSBmcm9tICdAL2NsYXNzZXMvdHJhbnNhY3Rpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBDb250ZXh0TWVudSwgQ29udGV4dE1lbnVPcHRpb24sIGdsb2JhbENvbnRleHQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29udGV4dC1tZW51JztcbmltcG9ydCB7IFRyYW5zYWN0aW9uUGFuZWwgfSBmcm9tICdAL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tcGFuZWwnO1xuaW1wb3J0IHsgRmx1ZW50QXBwQmFyQnV0dG9uIH0gZnJvbSAnQHNhZ2Vtb2RlbmluamEvZmx1ZW50LWNvbW1hbmQtYmFyLWNvbXBvbmVudCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdAL3NlcnZpY2VzL2FjY291bnQtc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50Q2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9hY2NvdW50LWNhcmQnO1xuaW1wb3J0IHsgUmVzcG9uc2VQYXlsb2FkIH0gZnJvbSAnQC9jbGFzc2VzL3Jlc3BvbnNlLXBheWxvYWQnO1xuaW1wb3J0IHsgdG9DdXJyZW5jeSB9IGZyb20gJ0AvY2xhc3Nlcy9jdXJyZW5jeSc7XG5cbmNsYXNzIERhc2hib2FyZFZpZXcge1xuICAgIHByaXZhdGUgYm9keTogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWZyZXNoQ29tbWFuZDogRmx1ZW50QXBwQmFyQnV0dG9uO1xuICAgIHByaXZhdGUgdG9nZ2xlQ29tbWFuZDogRmx1ZW50QXBwQmFyQnV0dG9uO1xuICAgIHByaXZhdGUgdHJhbnNhY3Rpb25QYW5lbDogVHJhbnNhY3Rpb25QYW5lbDtcblxuICAgIHByaXZhdGUgY29udGV4dE1lbnU6IENvbnRleHRNZW51O1xuXG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgaXNTaG93Q2xvc2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgY2xvc2VkQWNjb3VudHM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHVzZU5hdmlnYXRpb24oKTtcbiAgICBcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xheW91dF9ib2R5Jyk7XG4gICAgICAgIHRoaXMucmVmcmVzaENvbW1hbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaF9jb21tYW5kJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29tbWFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGVfY2xvc2VkX2NvbW1hbmQnKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uX3BhbmVsJyk7XG5cbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5jbG9zZWRBY2NvdW50cyA9IFtdO1xuXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJhbnNhY3Rpb25fY2FyZFwiKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFjdGlvbi1idXR0b25cIik7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFuc2FjdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb24uZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JfZGlhbG9nXCIpO1xuXG4gICAgICAgIHRoaXMuaW5pdENvbnRleHRNZW51KCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWNjb3VudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRDb250ZXh0TWVudSgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudSA9IGdsb2JhbENvbnRleHQuYWRkTWVudSgnYWNjb3VudHNfY2FyZCcsIHRoaXMuYm9keSk7XG5cbiAgICAgICAgLy8gQ29udGV4dCBtZW51IG9wdGlvbnMuLi5cbiAgICAgICAgY29uc3QgY2xvc2VPcHRpb24gPSBuZXcgQ29udGV4dE1lbnVPcHRpb24oJ0Nsb3NlJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZU9wdGlvbiA9IG5ldyBDb250ZXh0TWVudU9wdGlvbignRGVsZXRlJyk7XG4gICAgICAgIFxuICAgICAgICBjbG9zZU9wdGlvbi52aXNpYmxlKGQgPT4gZC5TdGF0dXMgPT09ICdBY3RpdmUnKTtcbiAgICAgICAgZGVsZXRlT3B0aW9uLnZpc2libGUoZCA9PiBkLlN0YXR1cyA9PT0gJ0FjdGl2ZScpO1xuICAgICAgICBcbiAgICAgICAgY2xvc2VPcHRpb24ub25DbGljayhhc3luYyBhY2N0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybShgQ2xvc2UgYWNjb3VudCBcXFwiJHthY2N0LlRpdGxlfVxcXCI/YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFyZXNwb25zZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IEFjY291bnRTZXJ2aWNlKCk7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc2VydmljZS5jbG9zZShhY2N0LklkKTtcblxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocGF5bG9hZC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IEZpeCB0aGlzIVxuICAgICAgICAgICAgLy8gcmVmcmVzaENhdGVnb3JpZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBkZWxldGVPcHRpb24ub25DbGljayhhc3luYyBhY2N0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybShgRGVsZXRlIGFjY291bnQgXFxcIiR7YWNjdC5UaXRsZX1cXFwiP2ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighcmVzcG9uc2UpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IG5ldyBBY2NvdW50U2VydmljZSgpO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHNlcnZpY2UucmVtb3ZlKGFjY3QuSWQpO1xuXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChwYXlsb2FkLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogRml4IHRoaXMhXG4gICAgICAgICAgICAvLyByZWZyZXNoQ2F0ZWdvcmllcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUuYWRkT3B0aW9ucyhjbG9zZU9wdGlvbiwgZGVsZXRlT3B0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hDb21tYW5kPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVmcmVzaEFjY291bnRzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbW1hbmQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBcbiAgICByZWZyZXNoQWNjb3VudHMoKSB7XG4gICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSAnPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+RmV0Y2hpbmcgQWNjb3VudHMuLi48L3A+JztcbiAgICBcbiAgICAgICAgYXhpb3MuZ2V0KFwiYWNjb3VudC9jcnVkL3JlYWRfY2F0ZWdvcml6ZWQucGhwXCIpXG4gICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBudWxsO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYoYWNjb3VudHMuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGFjY291bnRzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGNvbnRlbnQucmVkdWNlKChhcnIsIGFjY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUlkID0gYWNjdC5DYXRlZ29yeUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighYXJyLnNvbWUoY2F0ID0+IGNhdC5JZCA9PSBhY2N0LkNhdGVnb3J5SWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBhY2N0LkNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvcjogYWNjdC5DYXRlZ29yeUNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaXplZCA9IGNvbnRlbnQucmVkdWNlKChtYXAsIGFjY3QpID0+IG1hcC5zZXQoYWNjdC5DYXRlZ29yeUlkLCBbLi4ubWFwLmdldChhY2N0LkNhdGVnb3J5SWQpID8/IFtdLCBhY2N0XSksIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJhbGFuY2VzKGNhdGVnb3JpZXMsIGNhdGVnb3JpemVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiY2VudGVyZWRcIj5Pb3BzISAke2FjY291bnRzLmNvbnRlbnR9PC9wPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZWZyZXNoQmFsYW5jZXMoY2F0ZWdvcmllcywgY2F0ZWdvcml6ZWQpIHtcbiAgICAgICAgY2F0ZWdvcml6ZWQuZm9yRWFjaCgoYWNjb3VudHMsIF9jYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdCA9PiBjYXQuSWQgPT0gX2NhdGVnb3J5KSA/PyB7fTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGNhdGVnb3J5Py5Db2xvciA/PyBcIjlFOUU5RVwiO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gY2F0ZWdvcnk/LlRpdGxlID8/IFwiVW5jYXRlZ29yaXplZFwiO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50c0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmx1ZW50LXN5bWJvbC1pY29uJylcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgICAgICAgICAgYWNjb3VudHNHcmlkLmNsYXNzTGlzdC5hZGQoJ2FjY291bnRzLWdyaWQnKTtcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ3N5bWJvbCcsICdUYWcnKTtcbiAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2ZvcmVncm91bmQnLCBgIyR7Y29sb3J9YCk7XG4gICAgICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCAnMTMnKTtcbiAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGFjY291bnRzR3JpZCk7XG4gICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhZyk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGFjY291bnRzLmZvckVhY2goYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMubmV3Q2FyZChhY2NvdW50LCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgYWNjb3VudHNHcmlkLmFwcGVuZChjYXJkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgbmV3Q2FyZChhY2NvdW50LCBjYXRlZ29yeSkge1xuICAgICAgICBsZXQgYWNjb3VudE51bWJlciA9IGFjY291bnQuQWNjb3VudE51bWJlcj8uc2xpY2UoLTQpID8/IFwi4oCi4oCi4oCi4oCiXCI7XG4gICAgICAgIGxldCBiYW5rSWNvbiA9IGFjY291bnQuQmFua0ljb247XG4gICAgXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhY2NvdW50LWNhcmQnKSBhcyBBY2NvdW50Q2FyZDtcbiAgICAgICAgY29uc3QgcnVubmluZ0JhbGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXJkLWJhbGFuY2UnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdGVkQmFsYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcmQtYmFsYW5jZScpO1xuICAgICAgICBjb25zdCBhY2NvdW50QmFua0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgXG4gICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgICBwcm9qZWN0ZWRCYWxhbmNlLmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgICBhY2NvdW50QmFua0ljb24uY2xhc3NMaXN0LmFkZCgnYWNjb3VudC1iYW5rLWljb24nKTtcbiAgICAgICAgYWNjb3VudEJhbmtJY29uLnNsb3QgPSAnaWNvbic7XG4gICAgXG4gICAgICAgIGNhcmQuYXBwZW5kKHJ1bm5pbmdCYWxhbmNlKTtcbiAgICAgICAgY2FyZC5hcHBlbmQocHJvamVjdGVkQmFsYW5jZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kKGFjY291bnRCYW5rSWNvbik7XG4gICAgXG4gICAgICAgIGNhcmQudGl0bGUgPSBhY2NvdW50LlRpdGxlO1xuICAgICAgICBjYXJkLm51bWJlciA9IGFjY291bnROdW1iZXI7XG4gICAgICAgIGNhcmQuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgXG4gICAgICAgIHJ1bm5pbmdCYWxhbmNlLnRpdGxlID0gJ0FjdHVhbCc7XG4gICAgICAgIHByb2plY3RlZEJhbGFuY2UudGl0bGUgPSAnUHJvamVjdGlvbic7XG4gICAgXG4gICAgICAgIGlmKGJhbmtJY29uICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zcmMgPWBhc3NldHMvaW1hZ2VzL2JhbmtfaWNvbnMvJHtiYW5rSWNvbn0uc3ZnYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoYmFua0ljb24gPT0gXCJtYXN0ZXJfY2FyZFwiKVxuICAgICAgICAgICAgICAgIGFjY291bnRCYW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJib3R0b206MTZweDtoZWlnaHQ6MzVweDtcIik7XG4gICAgICAgICAgICBpZihiYW5rSWNvbiA9PSBcInVicFwiIHx8IGJhbmtJY29uID09IFwiZ2Nhc2hcIilcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjIwcHg7aGVpZ2h0OjMwcHg7cmlnaHQ6MjVweDtcIik7XG4gICAgICAgICAgICBpZihiYW5rSWNvbiA9PSBcImNpbWJcIilcbiAgICAgICAgICAgICAgICBhY2NvdW50QmFua0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm90dG9tOjIwcHg7aGVpZ2h0OjI4cHg7cmlnaHQ6MjVweDtcIik7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBDb250ZXh0IG1lbnUuLi5cbiAgICAgICAgKGNhcmQgYXMgYW55KS5hZGRDb250ZXh0KHRoaXMuY29udGV4dE1lbnUsIGFjY291bnQpO1xuICAgICAgXG4gICAgICAgIC8vIFZpc2liaWxpdHkuLi5cbiAgICAgICAgaWYoYWNjb3VudC5TdGF0dXMgIT09ICdBY3RpdmUnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZEFjY291bnRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXhpb3MuZ2V0KGAvYWNjb3VudC9iYWxhbmNlLnBocD9hY2NvdW50SWQ9JHthY2NvdW50LklkfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlc3BvbnNlLmRhdGEgYXMgUmVzcG9uc2VQYXlsb2FkPGFueT47XG5cbiAgICAgICAgICAgICAgICBpZihwYXlsb2FkLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlcyA9IHBheWxvYWQuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0JhbGFuY2UuaW5uZXJUZXh0ID0gdG9DdXJyZW5jeShiYWxhbmNlcy5CYWxhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSB0b0N1cnJlbmN5KGJhbGFuY2VzLlByb2plY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlLmlubmVyVGV4dCA9ICchJztcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGVkQmFsYW5jZS5pbm5lclRleHQgPSAnISc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF5bG9hZC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uUGFuZWwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbi5sb2FkQWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub2dnbGVDbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb21tYW5kLmljb24gPSB0aGlzLmlzU2hvd0Nsb3NlZCA/ICdWaWV3JyA6ICdIaWRlJztcbiAgICAgICAgdGhpcy50b2dnbGVDb21tYW5kLmxhYmVsID0gdGhpcy5pc1Nob3dDbG9zZWQgPyAnU2hvdyBDbG9zZWQgQWNjb3VudHMnIDogJ0hpZGUgQ2xvc2VkIEFjY291bnRzJztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2xvc2VkQWNjb3VudHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNTaG93Q2xvc2VkKVxuICAgICAgICAgICAgICBjYXJkLmhpZGUoKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY2FyZC5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXNTaG93Q2xvc2VkID0gIXRoaXMuaXNTaG93Q2xvc2VkO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhc2hib2FyZFZpZXcoKTtcbiAgICB2aWV3LnJlZnJlc2goKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==