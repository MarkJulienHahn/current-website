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

/***/ "./components/animation/A.js":
/*!***********************************!*\
  !*** ./components/animation/A.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_A2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/A2 */ \"./components/animation/A2.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layer01 = (param)=>{\n    let { colorArray , indexA , setIndexA , delay , autoChange , setAutoChange  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedA, setChangedA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChangedA(true);\n    };\n    const changeColor = ()=>{\n        if (indexA + 1 < colorArray.length) setIndexA(indexA + 1), setAutoChange(false);\n        else setIndexA(0), setAutoChange(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexA(index);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexA(Math.floor(Math.random() * colorArray.length));\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    console.log(height, scrollPosition, index);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().A),\n        style: scrollPosition < height ? {\n            background: colorArray[index]\n        } : {\n            background: colorArray[index],\n            opacity: 0.5\n        },\n        onClick: ()=>setChangedA(true),\n        onMouseEnter: !changedA ? ()=>changeColor() : null,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    colorArray: colorArray,\n                    changedA: changedA,\n                    margin: 10,\n                    indexA: indexA\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    colorArray: colorArray,\n                    changedA: changedA,\n                    margin: 100,\n                    indexA: indexA\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer01, \"r0CJNO7W8Pac34xZ3fAAbC3KapE=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Layer01;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer01);\nvar _c;\n$RefreshReg$(_c, \"Layer01\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNzQjtBQUNkO0FBQ25CO0FBRWpDLE1BQU1LLFVBQVUsU0FPVjtRQVBXLEVBQ2ZDLFdBQVUsRUFDVkMsT0FBTSxFQUNOQyxVQUFTLEVBQ1RDLE1BQUssRUFDTEMsV0FBVSxFQUNWQyxjQUFhLEVBQ2Q7O0lBQ0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxFQUFFZ0IsT0FBTSxFQUFFLEdBQUdkLHNFQUFtQkE7SUFFdEMsTUFBTSxDQUFDZSxnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTW1CLGVBQWUsSUFBTTtRQUN6QixNQUFNQyxXQUFXQyxPQUFPQyxXQUFXO1FBQ25DSixrQkFBa0JFO0lBQ3BCO0lBRUEsTUFBTUcsY0FBYyxJQUFNO1FBQ3hCVixTQUFTVyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdxQixNQUFNLElBQUlaLFlBQVksSUFBSSxDQUFDO0lBQzVFO0lBRUEsTUFBTWEsY0FBYyxJQUFNO1FBQ3hCLElBQUlyQixTQUFTLElBQUlELFdBQVdxQixNQUFNLEVBQ2hDbkIsVUFBVUQsU0FBUyxJQUFJSSxjQUFjLEtBQUssQ0FBQzthQUN4Q0gsVUFBVSxJQUFJRyxjQUFjLEtBQUssQ0FBQztJQUN6QztJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFVBQVVJO0lBQ1osR0FBRyxFQUFFO0lBRUxYLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sVUFBVWdCLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLcEIsV0FBV3FCLE1BQU07SUFDeEQ7SUFFQTFCLGdEQUFTQSxDQUFDLElBQU07UUFDZG9CLE9BQU9RLGdCQUFnQixDQUFDLFVBQVVWLGNBQWM7WUFBRVcsU0FBUyxJQUFJO1FBQUM7UUFFaEUsT0FBTyxJQUFNO1lBQ1hULE9BQU9VLG1CQUFtQixDQUFDLFVBQVVaO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUxhLFFBQVFDLEdBQUcsQ0FBQ2pCLFFBQVFDLGdCQUFnQkw7SUFFcEMscUJBQ0UsOERBQUNzQjtRQUNDQyxXQUFXaEMscUVBQU87UUFDbEJBLE9BQ0VjLGlCQUFpQkQsU0FDYjtZQUFFcUIsWUFBWS9CLFVBQVUsQ0FBQ00sTUFBTTtRQUFDLElBQ2hDO1lBQUV5QixZQUFZL0IsVUFBVSxDQUFDTSxNQUFNO1lBQUUwQixTQUFTO1FBQUksQ0FBQztRQUVyREMsU0FBUyxJQUFNeEIsWUFBWSxJQUFJO1FBQy9CeUIsY0FBYyxDQUFDMUIsV0FBVyxJQUFNYyxnQkFBZ0IsSUFBSTtrQkFFcEQsNEVBQUNNO1lBQ0MvQixPQUFPO2dCQUNMc0MsT0FBTztnQkFDUHpCLFFBQVE7Z0JBQ1IwQixTQUFTO1lBQ1g7OzhCQUVBLDhEQUFDdEMscURBQUVBO29CQUNERSxZQUFZQTtvQkFDWlEsVUFBVUE7b0JBQ1Y2QixRQUFRO29CQUNScEMsUUFBUUE7Ozs7Ozs4QkFFViw4REFBQ0gscURBQUVBO29CQUNERSxZQUFZQTtvQkFDWlEsVUFBVUE7b0JBQ1Y2QixRQUFRO29CQUNScEMsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBaEZNRjs7UUFVZUgsa0VBQW1CQTs7O0tBVmxDRztBQWtGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BLmpzPzlmNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xhbmRpbmcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEEyIGZyb20gXCIuLi9hbmltYXRpb24vQTJcIjtcblxuY29uc3QgTGF5ZXIwMSA9ICh7XG4gIGNvbG9yQXJyYXksXG4gIGluZGV4QSxcbiAgc2V0SW5kZXhBLFxuICBkZWxheSxcbiAgYXV0b0NoYW5nZSxcbiAgc2V0QXV0b0NoYW5nZSxcbn0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NoYW5nZWRBLCBzZXRDaGFuZ2VkQV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUluZGV4ID0gKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSksIHNldENoYW5nZWRBKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEEgKyAxIDwgY29sb3JBcnJheS5sZW5ndGgpXG4gICAgICBzZXRJbmRleEEoaW5kZXhBICsgMSksIHNldEF1dG9DaGFuZ2UoZmFsc2UpO1xuICAgIGVsc2Ugc2V0SW5kZXhBKDApLCBzZXRBdXRvQ2hhbmdlKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEluZGV4QShpbmRleCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEluZGV4QShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGhlaWdodCwgc2Nyb2xsUG9zaXRpb24sIGluZGV4KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuQX1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPCBoZWlnaHRcbiAgICAgICAgICA/IHsgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleF0gfVxuICAgICAgICAgIDogeyBiYWNrZ3JvdW5kOiBjb2xvckFycmF5W2luZGV4XSwgb3BhY2l0eTogMC41IH1cbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZWRBKHRydWUpfVxuICAgICAgb25Nb3VzZUVudGVyPXshY2hhbmdlZEEgPyAoKSA9PiBjaGFuZ2VDb2xvcigpIDogbnVsbH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBMlxuICAgICAgICAgIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9XG4gICAgICAgICAgY2hhbmdlZEE9e2NoYW5nZWRBfVxuICAgICAgICAgIG1hcmdpbj17MTB9XG4gICAgICAgICAgaW5kZXhBPXtpbmRleEF9XG4gICAgICAgIC8+XG4gICAgICAgIDxBMlxuICAgICAgICAgIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9XG4gICAgICAgICAgY2hhbmdlZEE9e2NoYW5nZWRBfVxuICAgICAgICAgIG1hcmdpbj17MTAwfVxuICAgICAgICAgIGluZGV4QT17aW5kZXhBfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllcjAxO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2luZG93RGltZW5zaW9ucyIsInN0eWxlIiwiQTIiLCJMYXllcjAxIiwiY29sb3JBcnJheSIsImluZGV4QSIsInNldEluZGV4QSIsImRlbGF5IiwiYXV0b0NoYW5nZSIsInNldEF1dG9DaGFuZ2UiLCJpbmRleCIsInNldEluZGV4IiwiY2hhbmdlZEEiLCJzZXRDaGFuZ2VkQSIsImhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2hhbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFuZ2VDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJBIiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/animation/A.js\n"));

/***/ })

});