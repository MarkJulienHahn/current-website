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

/***/ "./components/animation/A3.js":
/*!************************************!*\
  !*** ./components/animation/A3.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_A4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/A4 */ \"./components/animation/A4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst A3 = (param)=>{\n    let { indexA2 , changedA2 , colorArray , margin  } = param;\n    _s();\n    const [indexA3, setIndexA3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedA3, setChangedA3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        if (indexA2 + 1 < colorArray.length) {\n            setIndexA3(indexA2 + 1), setChangedA3(true);\n        } else setIndexA3(0), setChangedA3(true);\n    };\n    const changeColor = ()=>{\n        if (indexA3 + 1 < colorArray.length) setIndexA3(indexA3 + 1);\n        else setIndexA3(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().horizontal),\n        style: scrollPosition < 10 ? {\n            background: colorArray[indexA3]\n        } : {\n            background: \"none\"\n        },\n        onClick: changedA2 && !changedA3 ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A4__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedA3: changedA3,\n                indexA3: indexA3,\n                margin: 10\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A3.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A4__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedA3: changedA3,\n                indexA3: indexA3,\n                margin: 10\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A3.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A3.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(A3, \"kjOEd8JxMfam02EfLkl8zcKdHto=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = A3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (A3);\nvar _c;\n$RefreshReg$(_c, \"A3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDc0I7QUFDZDtBQUNuQjtBQUVqQyxNQUFNSyxLQUFLLFNBQWdEO1FBQS9DLEVBQUVDLFFBQU8sRUFBRUMsVUFBUyxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRTs7SUFDcEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxFQUFFYyxPQUFNLEVBQUUsR0FBR1osc0VBQW1CQTtJQUV0QyxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNaUIsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVc7UUFDbkNKLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNRyxjQUFjLElBQU07UUFDeEIsSUFBSWYsVUFBVSxJQUFJRSxXQUFXYyxNQUFNLEVBQUU7WUFDbkNYLFdBQVdMLFVBQVUsSUFBSU8sYUFBYSxJQUFJLENBQUM7UUFDN0MsT0FBT0YsV0FBVyxJQUFJRSxhQUFhLElBQUksQ0FBQztJQUMxQztJQUVBLE1BQU1VLGNBQWMsSUFBTTtRQUN4QixJQUFJYixVQUFVLElBQUlGLFdBQVdjLE1BQU0sRUFBRVgsV0FBV0QsVUFBVTthQUNyREMsV0FBVztJQUNsQjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RrQixPQUFPSyxnQkFBZ0IsQ0FBQyxVQUFVUCxjQUFjO1lBQUVRLFNBQVMsSUFBSTtRQUFDO1FBRWhFLE9BQU8sSUFBTTtZQUNYTixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVVDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVTtRQUNDQyxXQUFXekIsOEVBQWdCO1FBQzNCQSxPQUNFWSxpQkFBaUIsS0FDYjtZQUFFZSxZQUFZdEIsVUFBVSxDQUFDRSxRQUFRO1FBQUMsSUFDbEM7WUFBRW9CLFlBQVk7UUFBTyxDQUFDO1FBRTVCQyxTQUFTeEIsYUFBYSxDQUFDSyxZQUFZLElBQU1TLGdCQUFnQixJQUFJOzswQkFHN0QsOERBQUNqQixxREFBRUE7Z0JBQ0RJLFlBQVlBO2dCQUNaSSxXQUFXQTtnQkFDWEYsU0FBU0E7Z0JBQ1RELFFBQVE7Ozs7OzswQkFFViw4REFBQ0wscURBQUVBO2dCQUNESSxZQUFZQTtnQkFDWkksV0FBV0E7Z0JBQ1hGLFNBQVNBO2dCQUNURCxRQUFROzs7Ozs7Ozs7Ozs7QUFJaEI7R0F2RE1KOztRQUdlSCxrRUFBbUJBOzs7S0FIbENHO0FBeUROLCtEQUFlQSxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYW5pbWF0aW9uL0EzLmpzPzNkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xhbmRpbmcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEE0IGZyb20gXCIuLi9hbmltYXRpb24vQTRcIjtcblxuY29uc3QgQTMgPSAoeyBpbmRleEEyLCBjaGFuZ2VkQTIsIGNvbG9yQXJyYXksIG1hcmdpbiB9KSA9PiB7XG4gIGNvbnN0IFtpbmRleEEzLCBzZXRJbmRleEEzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2hhbmdlZEEzLCBzZXRDaGFuZ2VkQTNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhBMiArIDEgPCBjb2xvckFycmF5Lmxlbmd0aCkge1xuICAgICAgc2V0SW5kZXhBMyhpbmRleEEyICsgMSksIHNldENoYW5nZWRBMyh0cnVlKTtcbiAgICB9IGVsc2Ugc2V0SW5kZXhBMygwKSwgc2V0Q2hhbmdlZEEzKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEEzICsgMSA8IGNvbG9yQXJyYXkubGVuZ3RoKSBzZXRJbmRleEEzKGluZGV4QTMgKyAxKTtcbiAgICBlbHNlIHNldEluZGV4QTMoMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuaG9yaXpvbnRhbH1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPCAxMFxuICAgICAgICAgID8geyBiYWNrZ3JvdW5kOiBjb2xvckFycmF5W2luZGV4QTNdIH1cbiAgICAgICAgICA6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfVxuICAgICAgfVxuICAgICAgb25DbGljaz17Y2hhbmdlZEEyICYmICFjaGFuZ2VkQTMgPyAoKSA9PiBjaGFuZ2VJbmRleCgpIDogbnVsbH1cbiAgICAgIC8vIG9uTW91c2VFbnRlcj17Y2hhbmdlZEEyID8gKCkgPT4gY2hhbmdlQ29sb3IoKSA6IG51bGx9XG4gICAgPlxuICAgICAgPEE0XG4gICAgICAgIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9XG4gICAgICAgIGNoYW5nZWRBMz17Y2hhbmdlZEEzfVxuICAgICAgICBpbmRleEEzPXtpbmRleEEzfVxuICAgICAgICBtYXJnaW49ezEwfVxuICAgICAgLz5cbiAgICAgIDxBNFxuICAgICAgICBjb2xvckFycmF5PXtjb2xvckFycmF5fVxuICAgICAgICBjaGFuZ2VkQTM9e2NoYW5nZWRBM31cbiAgICAgICAgaW5kZXhBMz17aW5kZXhBM31cbiAgICAgICAgbWFyZ2luPXsxMH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBMztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJzdHlsZSIsIkE0IiwiQTMiLCJpbmRleEEyIiwiY2hhbmdlZEEyIiwiY29sb3JBcnJheSIsIm1hcmdpbiIsImluZGV4QTMiLCJzZXRJbmRleEEzIiwiY2hhbmdlZEEzIiwic2V0Q2hhbmdlZEEzIiwiaGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjaGFuZ2VJbmRleCIsImxlbmd0aCIsImNoYW5nZUNvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9yaXpvbnRhbCIsImJhY2tncm91bmQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/animation/A3.js\n"));

/***/ })

});