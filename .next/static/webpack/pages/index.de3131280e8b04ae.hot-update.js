"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/animation/B1.js":
/*!************************************!*\
  !*** ./components/animation/B1.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_B2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/B2 */ \"./components/animation/B2.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layer01 = (param)=>{\n    let { colorArray , delay , margin , autoChange , setAutoChange  } = param;\n    _s();\n    const [indexB1, setIndexB1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [changedB1, setChangedB1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeColor = ()=>{\n        if (indexB1 + 1 < colorArray.length) {\n            setIndexB1(indexB1 + 1), setAutoChange(false);\n        } else setIndexB1(0), setAutoChange(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexB1(Math.floor(Math.random() * colorArray.length));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (delay && autoChange) {\n            const interval = setInterval(()=>{\n                setIndexB1(Math.floor(Math.random() * colorArray.length));\n            }, delay);\n            return ()=>clearInterval(interval);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().B1),\n        style: scrollPosition < height + margin ? {\n            background: colorArray[indexB1]\n        } : {\n            opacity: 0\n        },\n        onClick: !changedB1 ? ()=>setChangedB1(true) : null,\n        onMouseEnter: !changedB1 ? ()=>changeColor() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_B2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedB1: changedB1,\n                indexB1: indexB1,\n                margin: 10\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/B1.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_B2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedB1: changedB1,\n                indexB1: indexB1,\n                margin: 50\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/B1.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/B1.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer01, \"NIcW3tFK8yIVZjRS6mMhTZzKlOg=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Layer01;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer01);\nvar _c;\n$RefreshReg$(_c, \"Layer01\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9CMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDcUI7QUFDYjtBQUNuQjtBQUVqQyxNQUFNSyxVQUFVLFNBQThEO1FBQTdELEVBQUVDLFdBQVUsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFOztJQUN2RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxFQUFFZSxPQUFNLEVBQUUsR0FBR2Isc0VBQW1CQTtJQUV0QyxNQUFNLENBQUNjLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNa0IsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVc7UUFDbkNKLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNRyxjQUFjLElBQU07UUFDeEIsSUFBSVgsVUFBVSxJQUFJTCxXQUFXaUIsTUFBTSxFQUFFO1lBQ25DWCxXQUFXRCxVQUFVLElBQUlELGNBQWMsS0FBSyxDQUFDO1FBQy9DLE9BQU9FLFdBQVcsSUFBSUYsY0FBYyxLQUFLLENBQUM7SUFDNUM7SUFFQVQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyxXQUFXWSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdpQixNQUFNO0lBQ3pELEdBQUcsRUFBRTtJQUVMdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFNBQVNFLFlBQVk7WUFDdkIsTUFBTWtCLFdBQVdDLFlBQVksSUFBTTtnQkFDakNoQixXQUFXWSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdpQixNQUFNO1lBQ3pELEdBQUdoQjtZQUNILE9BQU8sSUFBTXNCLGNBQWNGO1FBQzdCLENBQUM7SUFDSDtJQUVBMUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkbUIsT0FBT1UsZ0JBQWdCLENBQUMsVUFBVVosY0FBYztZQUFFYSxTQUFTLElBQUk7UUFBQztRQUVoRSxPQUFPLElBQU07WUFDWFgsT0FBT1ksbUJBQW1CLENBQUMsVUFBVWQ7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2U7UUFDQ0MsV0FBVy9CLHNFQUFRO1FBQ25CQSxPQUNFYSxpQkFBaUJELFNBQVNQLFNBQ3RCO1lBQUU0QixZQUFZOUIsVUFBVSxDQUFDSyxRQUFRO1FBQUMsSUFDbEM7WUFBRTBCLFNBQVM7UUFBRSxDQUFDO1FBRXBCQyxTQUFTLENBQUN6QixZQUFZLElBQU1DLGFBQWEsSUFBSSxJQUFJLElBQUk7UUFDckR5QixjQUFjLENBQUMxQixZQUFZLElBQU1TLGdCQUFnQixJQUFJOzswQkFFckQsOERBQUNsQixxREFBRUE7Z0JBQUNFLFlBQVlBO2dCQUFZTyxXQUFXQTtnQkFBV0YsU0FBU0E7Z0JBQVNILFFBQVE7Ozs7OzswQkFDNUUsOERBQUNKLHFEQUFFQTtnQkFBQ0UsWUFBWUE7Z0JBQVlPLFdBQVdBO2dCQUFXRixTQUFTQTtnQkFBU0gsUUFBUTs7Ozs7Ozs7Ozs7O0FBR2xGO0dBckRNSDs7UUFHZUgsa0VBQW1CQTs7O0tBSGxDRztBQXVETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9CMS5qcz9kN2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zXCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xhbmRpbmcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEIyIGZyb20gXCIuLi9hbmltYXRpb24vQjJcIjtcblxuY29uc3QgTGF5ZXIwMSA9ICh7IGNvbG9yQXJyYXksIGRlbGF5LCBtYXJnaW4sIGF1dG9DaGFuZ2UsIHNldEF1dG9DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbaW5kZXhCMSwgc2V0SW5kZXhCMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NoYW5nZWRCMSwgc2V0Q2hhbmdlZEIxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEIxICsgMSA8IGNvbG9yQXJyYXkubGVuZ3RoKSB7XG4gICAgICBzZXRJbmRleEIxKGluZGV4QjEgKyAxKSwgc2V0QXV0b0NoYW5nZShmYWxzZSk7XG4gICAgfSBlbHNlIHNldEluZGV4QjEoMCksIHNldEF1dG9DaGFuZ2UoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5kZXhCMShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVsYXkgJiYgYXV0b0NoYW5nZSkge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldEluZGV4QjEoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLkIxfVxuICAgICAgc3R5bGU9e1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiA8IGhlaWdodCArIG1hcmdpblxuICAgICAgICAgID8geyBiYWNrZ3JvdW5kOiBjb2xvckFycmF5W2luZGV4QjFdIH1cbiAgICAgICAgICA6IHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG4gICAgICBvbkNsaWNrPXshY2hhbmdlZEIxID8gKCkgPT4gc2V0Q2hhbmdlZEIxKHRydWUpIDogbnVsbH1cbiAgICAgIG9uTW91c2VFbnRlcj17IWNoYW5nZWRCMSA/ICgpID0+IGNoYW5nZUNvbG9yKCkgOiBudWxsfVxuICAgID5cbiAgICAgIDxCMiBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQjE9e2NoYW5nZWRCMX0gaW5kZXhCMT17aW5kZXhCMX0gbWFyZ2luPXsxMH0gLz5cbiAgICAgIDxCMiBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQjE9e2NoYW5nZWRCMX0gaW5kZXhCMT17aW5kZXhCMX0gbWFyZ2luPXs1MH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyMDE7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwic3R5bGUiLCJCMiIsIkxheWVyMDEiLCJjb2xvckFycmF5IiwiZGVsYXkiLCJtYXJnaW4iLCJhdXRvQ2hhbmdlIiwic2V0QXV0b0NoYW5nZSIsImluZGV4QjEiLCJzZXRJbmRleEIxIiwiY2hhbmdlZEIxIiwic2V0Q2hhbmdlZEIxIiwiaGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjaGFuZ2VDb2xvciIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiQjEiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/animation/B1.js\n"));

/***/ })

});