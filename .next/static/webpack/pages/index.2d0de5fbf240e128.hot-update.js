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

/***/ "./components/animation/C2.js":
/*!************************************!*\
  !*** ./components/animation/C2.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_C3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/C3 */ \"./components/animation/C3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst C2 = (param)=>{\n    let { changed , delay , colorArray , margin , autoChange , setAutoChange  } = param;\n    _s();\n    const [indexC2, setIndexC2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [changedC2, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        if (indexC2 + 1 < colorArray.length) {\n            setIndexC2(indexC2 + 1), setChanged(true), setAutoChange(false);\n        } else setIndexC2(0), setChanged(true), setAutoChange(false);\n        ;\n    };\n    const changeColor = ()=>{\n        if (indexC2 + 1 < colorArray.length) {\n            setIndexC2(indexC2 + 1);\n        } else setIndexC2(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexC2(Math.floor(Math.random() * colorArray.length));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (delay && autoChange) {\n            const interval = setInterval(()=>{\n                setIndexC2(Math.floor(Math.random() * colorArray.length));\n            }, delay);\n            return ()=>clearInterval(interval);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().horizontal_frst),\n        style: scrollPosition < height * 1.3 + margin ? {\n            background: colorArray[indexC2]\n        } : {\n            opacity: 0\n        },\n        onClick: !changedC2 ? ()=>setChanged(true) : null,\n        onMouseEnter: !changedC2 ? ()=>changeColor() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_C3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedC2: changedC2,\n                indexC2: indexC2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_C3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedC2: changedC2,\n                indexC2: indexC2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(C2, \"ZbT8QOzd0ugF9inGEk2DaPYJ8sE=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = C2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (C2);\nvar _c;\n$RefreshReg$(_c, \"C2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9DMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDcUI7QUFDYjtBQUNuQjtBQUVqQyxNQUFNSyxLQUFLLFNBQXFFO1FBQXBFLEVBQUNDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsV0FBVSxFQUFFQyxjQUFhLEVBQUM7O0lBQ3pFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFdBQVdDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLEVBQUVnQixPQUFNLEVBQUUsR0FBR2Qsc0VBQW1CQTtJQUV0QyxNQUFNLENBQUNlLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNbUIsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVc7UUFDbkNKLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNRyxjQUFjLElBQU07UUFDeEIsSUFBSVgsVUFBUyxJQUFJSixXQUFXZ0IsTUFBTSxFQUNsQztZQUFDWCxXQUFXRCxVQUFVLElBQUlHLFdBQVcsSUFBSSxHQUFHSixjQUFjLEtBQUssQ0FBQztRQUFDLE9BQzVERSxXQUFXLElBQUlFLFdBQVcsSUFBSSxHQUFHSixjQUFjLEtBQUssQ0FBQzs7SUFDNUQ7SUFFQSxNQUFNYyxjQUFjLElBQU07UUFDeEIsSUFBSWIsVUFBUyxJQUFJSixXQUFXZ0IsTUFBTSxFQUNsQztZQUFDWCxXQUFXRCxVQUFVO1FBQUUsT0FDbkJDLFdBQVc7SUFDbEI7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxXQUFXYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdnQixNQUFNO0lBQ3pELEdBQUcsRUFBRTtJQUVMdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFNBQVNHLFlBQVk7WUFDdkIsTUFBTW1CLFdBQVdDLFlBQVksSUFBTTtnQkFDakNqQixXQUFXYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdnQixNQUFNO1lBQ3pELEdBQUdqQjtZQUNILE9BQU8sSUFBTXdCLGNBQWNGO1FBQzdCLENBQUM7SUFDSDtJQUVBNUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkb0IsT0FBT1csZ0JBQWdCLENBQUMsVUFBVWIsY0FBYztZQUFFYyxTQUFTLElBQUk7UUFBQztRQUVoRSxPQUFPLElBQU07WUFDWFosT0FBT2EsbUJBQW1CLENBQUMsVUFBVWY7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ2dCO1FBQ0NDLFdBQVdqQyxtRkFBcUI7UUFDaENBLE9BQ0VjLGlCQUFpQixTQUFVLE1BQU9SLFNBQzlCO1lBQUU2QixZQUFZOUIsVUFBVSxDQUFDSSxRQUFRO1FBQUMsSUFDbEM7WUFBRTJCLFNBQVM7UUFBRSxDQUFDO1FBRXBCQyxTQUFTLENBQUMxQixZQUFZLElBQU1DLFdBQVcsSUFBSSxJQUFJLElBQUk7UUFDbkQwQixjQUFjLENBQUMzQixZQUFZLElBQU1XLGdCQUFnQixJQUFJOzswQkFFckQsOERBQUNyQixxREFBRUE7Z0JBQUNJLFlBQVlBO2dCQUFZTSxXQUFXQTtnQkFBV0YsU0FBU0E7Ozs7OzswQkFDM0QsOERBQUNSLHFEQUFFQTtnQkFBQ0ksWUFBWUE7Z0JBQVlNLFdBQVdBO2dCQUFXRixTQUFTQTs7Ozs7Ozs7Ozs7O0FBR2pFO0dBN0RNUDs7UUFHZUgsa0VBQW1CQTs7O0tBSGxDRztBQStETiwrREFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9DMi5qcz9iN2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zXCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xhbmRpbmcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEMzIGZyb20gXCIuLi9hbmltYXRpb24vQzNcIjtcblxuY29uc3QgQzIgPSAoe2NoYW5nZWQsIGRlbGF5LCBjb2xvckFycmF5LCBtYXJnaW4sIGF1dG9DaGFuZ2UsIHNldEF1dG9DaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IFtpbmRleEMyLCBzZXRJbmRleEMyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbmdlZEMyLCBzZXRDaGFuZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUluZGV4ID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEMyICsxIDwgY29sb3JBcnJheS5sZW5ndGgpIFxuICAgIHtzZXRJbmRleEMyKGluZGV4QzIgKyAxKSwgc2V0Q2hhbmdlZCh0cnVlKSwgc2V0QXV0b0NoYW5nZShmYWxzZSk7fVxuICAgIGVsc2Ugc2V0SW5kZXhDMigwKSwgc2V0Q2hhbmdlZCh0cnVlKSwgc2V0QXV0b0NoYW5nZShmYWxzZSk7O1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEMyICsxIDwgY29sb3JBcnJheS5sZW5ndGgpIFxuICAgIHtzZXRJbmRleEMyKGluZGV4QzIgKyAxKX1cbiAgICBlbHNlIHNldEluZGV4QzIoMCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEluZGV4QzIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlbGF5ICYmIGF1dG9DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRJbmRleEMyKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuaG9yaXpvbnRhbF9mcnN0fVxuICAgICAgc3R5bGU9e1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiA8IChoZWlnaHQgKiAxLjMpICsgbWFyZ2luXG4gICAgICAgICAgPyB7IGJhY2tncm91bmQ6IGNvbG9yQXJyYXlbaW5kZXhDMl0gfVxuICAgICAgICAgIDogeyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9eyFjaGFuZ2VkQzIgPyAoKSA9PiBzZXRDaGFuZ2VkKHRydWUpIDogbnVsbH1cbiAgICAgIG9uTW91c2VFbnRlcj17IWNoYW5nZWRDMiA/ICgpID0+IGNoYW5nZUNvbG9yKCkgOiBudWxsfVxuICAgID5cbiAgICAgIDxDMyBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQzI9e2NoYW5nZWRDMn0gaW5kZXhDMj17aW5kZXhDMn0vPlxuICAgICAgPEMzIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9IGNoYW5nZWRDMj17Y2hhbmdlZEMyfSBpbmRleEMyPXtpbmRleEMyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDMjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJzdHlsZSIsIkMzIiwiQzIiLCJjaGFuZ2VkIiwiZGVsYXkiLCJjb2xvckFycmF5IiwibWFyZ2luIiwiYXV0b0NoYW5nZSIsInNldEF1dG9DaGFuZ2UiLCJpbmRleEMyIiwic2V0SW5kZXhDMiIsImNoYW5nZWRDMiIsInNldENoYW5nZWQiLCJoZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaGFuZGxlU2Nyb2xsIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNoYW5nZUluZGV4IiwibGVuZ3RoIiwiY2hhbmdlQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhvcml6b250YWxfZnJzdCIsImJhY2tncm91bmQiLCJvcGFjaXR5Iiwib25DbGljayIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animation/C2.js\n"));

/***/ })

});