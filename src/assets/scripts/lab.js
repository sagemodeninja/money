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

document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container');
    const forwardBtn = document.querySelector('#forward');
    const backwardBtn = document.querySelector('#backward');
    const { width } = testContainer.getBoundingClientRect();
    let index = 0;
    testContainer.addEventListener('scroll', () => {
        console.log(1);
        const left = testContainer.scrollLeft;
        index = Math.round(left / width);
    });
    forwardBtn.addEventListener('click', () => {
        index += 1;
        goToIndex(index);
    });
    backwardBtn.addEventListener('click', () => {
        index -= 1;
        goToIndex(index);
    });
    function goToIndex(index) {
        testContainer.scrollTo({
            left: index * width,
            behavior: 'smooth'
        });
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsS0FBSyxHQUFHLEtBQUs7WUFDbkIsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtbW9uZXkvLi9ub2RlX21vZHVsZXMvQHNhZ2Vtb2RlbmluamEvY3VzdG9tLWNvbXBvbmVudC9kaXN0L2N1c3RvbS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZS1tb25leS8uL3NjcmlwdHMvY29tcG9uZW50cy93YWxsZXQtY2FyZC50cyIsIndlYnBhY2s6Ly9lLW1vbmV5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZS1tb25leS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2UtbW9uZXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lLW1vbmV5Ly4vc2NyaXB0cy92aWV3cy9sYWItdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkN1c3RvbUNvbXBvbmVudD10KCk6ZS5DdXN0b21Db21wb25lbnQ9dCgpfShzZWxmLCgoKT0+KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsbyk9Pntmb3IodmFyIG4gaW4gbyllLm8obyxuKSYmIWUubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpvW25dfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoZSx0KX19ZnVuY3Rpb24gbihlKXtyZXR1cm4gZnVuY3Rpb24odCxvKXtsZXQgbj10W29dO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8se2dldDpmdW5jdGlvbigpe3JldHVybiBufSxzZXQ6ZnVuY3Rpb24odCl7Y29uc3Qgcj1uO249dCx0IT1yJiYodGhpcy5zZXRBdHRyaWJ1dGUobnVsbCE9ZT9lOm8sbiksdGhpcy5zdGF0ZUhhc0NoYW5nZWQoKSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5vYnNlcnZlQXR0cmlidXRlKG8sbnVsbCE9ZT9lOm8pfX1lLnIodCksZS5kKHQse0N1c3RvbUNvbXBvbmVudDooKT0+cixjdXN0b21Db21wb25lbnQ6KCk9Pm8scGFyYW1ldGVyOigpPT5ufSk7Y2xhc3MgciBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHRoaXMucmVuZGVyRE9NKCl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGUsdCxvKXt9Z2V0IHZpcnR1YWxET00oKXtyZXR1cm4obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHRoaXMucmVuZGVyKCksXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbn1yZW5kZXJET00oKXtjb25zdCBlPXRoaXMucmVzb2x2ZVRlbXBsYXRlKCk7dGhpcy5zaGFkb3dSb290LmlubmVySFRNTD1udWxsLHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChlLmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksdGhpcy5zaGFkb3dSb290LmFwcGVuZCguLi50aGlzLnZpcnR1YWxET00pfXJlc29sdmVUZW1wbGF0ZSgpe2NvbnN0IGU9dGhpcy5sb2NhbE5hbWU7cmV0dXJuIGUgaW4gci5fdGVtcGxhdGVzP3IuX3RlbXBsYXRlc1tlXTp0aGlzLmNyZWF0ZVRlbXBsYXRlKGUpfWNyZWF0ZVRlbXBsYXRlKGUpe3ZhciB0O2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO3JldHVybiBvLmlubmVySFRNTD1gPHN0eWxlPiR7bnVsbCE9PSh0PW4uc3R5bGVzKSYmdm9pZCAwIT09dD90OlwiXCJ9PC9zdHlsZT5gLHIuX3RlbXBsYXRlc1tlXT1vLG99fXJldHVybiByLl90ZW1wbGF0ZXM9e30sdH0pKCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1jb21wb25lbnQuanMubWFwIiwiaW1wb3J0IHsgY3VzdG9tQ29tcG9uZW50LCBDdXN0b21Db21wb25lbnQgfSBmcm9tICdAc2FnZW1vZGVuaW5qYS9jdXN0b20tY29tcG9uZW50JztcblxuQGN1c3RvbUNvbXBvbmVudCgnd2FsbGV0LWNhcmQnKVxuZXhwb3J0IGNsYXNzIFdhbGxldENhcmQgZXh0ZW5kcyBDdXN0b21Db21wb25lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4MHB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTJBMzI5OTtcbiAgICAgICAgICAgIGluc2V0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2Ige1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9iXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0AvY29tcG9uZW50cy93YWxsZXQtY2FyZCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdGVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0X2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcndhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yd2FyZCcpO1xuICAgIGNvbnN0IGJhY2t3YXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2t3YXJkJyk7XG5cbiAgICBjb25zdCB7d2lkdGh9ID0gdGVzdENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0ZXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0ZXN0Q29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChsZWZ0IC8gd2lkdGgpO1xuICAgIH0pO1xuXG4gICAgZm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgZ29Ub0luZGV4KGluZGV4KTtcbiAgICB9KTtcblxuICAgIGJhY2t3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbmRleCAtPSAxO1xuICAgICAgICBnb1RvSW5kZXgoaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ29Ub0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGVzdENvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICBsZWZ0OiBpbmRleCAqIHdpZHRoLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9