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

/***/ "./components/animation/A6.js":
/*!************************************!*\
  !*** ./components/animation/A6.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _animation_A7__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/A7 */ \"./components/animation/A7.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst A6 = (param)=>{\n    let { indexA5 , changedA5 , colorArray  } = param;\n    _s();\n    const [indexA6, setIndexA6] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedA6, setChangedA6] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const changeIndex = ()=>{\n        if (indexA5 + 1 < colorArray.length) {\n            setIndexA6(indexA5 + 1), setChangedA6(true);\n        } else setIndexA6(0), setChangedA6(true);\n    };\n    const changeColor = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().vertical),\n        style: {\n            background: colorArray[indexA6],\n            display: \"flex\",\n            flexWrap: \"wrap\"\n        },\n        onClick: changedA5 && !changedA6 ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                colorArray: colorArray,\n                changedA6: changedA6,\n                indexA6: indexA6,\n                margin: 10\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A6.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                colorArray: colorArray,\n                changedA6: changedA6,\n                indexA6: indexA6,\n                margin: 50\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A6.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                colorArray: colorArray,\n                changedA6: changedA6,\n                indexA6: indexA6,\n                margin: 30\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A6.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                colorArray: colorArray,\n                changedA6: changedA6,\n                indexA6: indexA6,\n                margin: 20\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A6.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A6.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(A6, \"q3kgg9e0qEptEMxYoij702iV4vU=\");\n_c = A6;\n/* harmony default export */ __webpack_exports__[\"default\"] = (A6);\nvar _c;\n$RefreshReg$(_c, \"A6\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BNi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpQztBQUNtQjtBQUNuQjtBQUVqQyxNQUFNRyxLQUFLLFNBQXdDO1FBQXZDLEVBQUVDLFFBQU8sRUFBRUMsVUFBUyxFQUFFQyxXQUFVLEVBQUU7O0lBQzVDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1XLGNBQWMsSUFBTTtRQUN4QixJQUFJUCxVQUFVLElBQUlFLFdBQVdNLE1BQU0sRUFBRTtZQUNuQ0osV0FBV0osVUFBVSxJQUFJTSxhQUFhLElBQUksQ0FBQztRQUM3QyxPQUFPRixXQUFXLElBQUlFLGFBQWEsSUFBSSxDQUFDO0lBQzFDO0lBRUEsTUFBTUcsY0FBYyxJQUFNO1FBQ3hCQyxTQUFTQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1gsV0FBV00sTUFBTTtJQUN2RDtJQUVBLHFCQUNFLDhEQUFDTTtRQUNDQyxXQUFXbEIsNEVBQWM7UUFDekJBLE9BQU87WUFDTG9CLFlBQVlmLFVBQVUsQ0FBQ0MsUUFBUTtZQUMvQmUsU0FBUztZQUNUQyxVQUFVO1FBQ1o7UUFDQUMsU0FBU25CLGFBQWEsQ0FBQ0ksWUFBWSxJQUFNRSxnQkFBZ0IsSUFBSTs7MEJBRzdELDhEQUFDVCxxREFBRUE7Z0JBQUNJLFlBQVlBO2dCQUFZRyxXQUFXQTtnQkFBV0YsU0FBU0E7Z0JBQVNrQixRQUFROzs7Ozs7MEJBQzVFLDhEQUFDdkIscURBQUVBO2dCQUFDSSxZQUFZQTtnQkFBWUcsV0FBV0E7Z0JBQVdGLFNBQVNBO2dCQUFTa0IsUUFBUTs7Ozs7OzBCQUM1RSw4REFBQ3ZCLHFEQUFFQTtnQkFBQ0ksWUFBWUE7Z0JBQVlHLFdBQVdBO2dCQUFXRixTQUFTQTtnQkFBU2tCLFFBQVE7Ozs7OzswQkFDNUUsOERBQUN2QixxREFBRUE7Z0JBQUNJLFlBQVlBO2dCQUFZRyxXQUFXQTtnQkFBV0YsU0FBU0E7Z0JBQVNrQixRQUFROzs7Ozs7Ozs7Ozs7QUFHbEY7R0EvQk10QjtLQUFBQTtBQWlDTiwrREFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BNi5qcz9kZDhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9MYW5kaW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBNyBmcm9tIFwiLi4vYW5pbWF0aW9uL0E3XCI7XG5cbmNvbnN0IEE2ID0gKHsgaW5kZXhBNSwgY2hhbmdlZEE1LCBjb2xvckFycmF5IH0pID0+IHtcbiAgY29uc3QgW2luZGV4QTYsIHNldEluZGV4QTZdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjaGFuZ2VkQTYsIHNldENoYW5nZWRBNl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhBNSArIDEgPCBjb2xvckFycmF5Lmxlbmd0aCkge1xuICAgICAgc2V0SW5kZXhBNihpbmRleEE1ICsgMSksIHNldENoYW5nZWRBNih0cnVlKTtcbiAgICB9IGVsc2Ugc2V0SW5kZXhBNigwKSwgc2V0Q2hhbmdlZEE2KHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLnZlcnRpY2FsfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleEE2XSxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXtjaGFuZ2VkQTUgJiYgIWNoYW5nZWRBNiA/ICgpID0+IGNoYW5nZUluZGV4KCkgOiBudWxsfVxuICAgICAgLy8gb25Nb3VzZUVudGVyPXtjaGFuZ2VkQ3VycmVudCA/ICgpID0+IGNoYW5nZUNvbG9yKCkgOiBudWxsfVxuICAgID5cbiAgICAgIDxBNyBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQTY9e2NoYW5nZWRBNn0gaW5kZXhBNj17aW5kZXhBNn0gbWFyZ2luPXsxMH0vPlxuICAgICAgPEE3IGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9IGNoYW5nZWRBNj17Y2hhbmdlZEE2fSBpbmRleEE2PXtpbmRleEE2fSBtYXJnaW49ezUwfS8+XG4gICAgICA8QTcgY29sb3JBcnJheT17Y29sb3JBcnJheX0gY2hhbmdlZEE2PXtjaGFuZ2VkQTZ9IGluZGV4QTY9e2luZGV4QTZ9IG1hcmdpbj17MzB9Lz5cbiAgICAgIDxBNyBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQTY9e2NoYW5nZWRBNn0gaW5kZXhBNj17aW5kZXhBNn0gbWFyZ2luPXsyMH0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQTY7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZSIsIkE3IiwiQTYiLCJpbmRleEE1IiwiY2hhbmdlZEE1IiwiY29sb3JBcnJheSIsImluZGV4QTYiLCJzZXRJbmRleEE2IiwiY2hhbmdlZEE2Iiwic2V0Q2hhbmdlZEE2IiwiY2hhbmdlSW5kZXgiLCJsZW5ndGgiLCJjaGFuZ2VDb2xvciIsInNldEluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGl2IiwiY2xhc3NOYW1lIiwidmVydGljYWwiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImZsZXhXcmFwIiwib25DbGljayIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animation/A6.js\n"));

/***/ })

});