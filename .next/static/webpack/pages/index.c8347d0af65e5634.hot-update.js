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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_C3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/C3 */ \"./components/animation/C3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst C2 = (param)=>{\n    let { changed , delay , colorArray , margin , autoChange , setAutoChange  } = param;\n    _s();\n    const [indexC2, setIndexC2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [changedC2, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        if (indexC2 + 1 < colorArray.length) {\n            setIndexC2(indexC2 + 1), setChanged(true), setAutoChange(false);\n        } else setIndexC2(0), setChanged(true), setAutoChange(false);\n        ;\n    };\n    const changeColor = ()=>{\n        if (indexC2 + 1 < colorArray.length) {\n            setIndexC2(indexC2 + 1);\n        } else setIndexC2(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexC2(Math.floor(Math.random() * colorArray.length));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (delay && autoChange) {\n            const interval = setInterval(()=>{\n                setIndexC2(Math.floor(Math.random() * colorArray.length));\n            }, delay);\n            return ()=>clearInterval(interval);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    console.log(scrollPosition, height);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().horizontal_frst),\n        style: scrollPosition < height * 1.3 + margin ? {\n            background: colorArray[indexC2]\n        } : {\n            opacity: 1\n        },\n        onClick: !changedC2 ? ()=>setChanged(true) : null,\n        onMouseEnter: !changedC2 ? ()=>changeColor() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_C3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedC2: changedC2,\n                indexC2: indexC2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_C3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedC2: changedC2,\n                indexC2: indexC2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/C2.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(C2, \"ZbT8QOzd0ugF9inGEk2DaPYJ8sE=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = C2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (C2);\nvar _c;\n$RefreshReg$(_c, \"C2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9DMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDcUI7QUFDYjtBQUNuQjtBQUVqQyxNQUFNSyxLQUFLLFNBQXFFO1FBQXBFLEVBQUNDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsV0FBVSxFQUFFQyxjQUFhLEVBQUM7O0lBQ3pFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFdBQVdDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLEVBQUVnQixPQUFNLEVBQUUsR0FBR2Qsc0VBQW1CQTtJQUV0QyxNQUFNLENBQUNlLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNbUIsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVc7UUFDbkNKLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNRyxjQUFjLElBQU07UUFDeEIsSUFBSVgsVUFBUyxJQUFJSixXQUFXZ0IsTUFBTSxFQUNsQztZQUFDWCxXQUFXRCxVQUFVLElBQUlHLFdBQVcsSUFBSSxHQUFHSixjQUFjLEtBQUssQ0FBQztRQUFDLE9BQzVERSxXQUFXLElBQUlFLFdBQVcsSUFBSSxHQUFHSixjQUFjLEtBQUssQ0FBQzs7SUFDNUQ7SUFFQSxNQUFNYyxjQUFjLElBQU07UUFDeEIsSUFBSWIsVUFBUyxJQUFJSixXQUFXZ0IsTUFBTSxFQUNsQztZQUFDWCxXQUFXRCxVQUFVO1FBQUUsT0FDbkJDLFdBQVc7SUFDbEI7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxXQUFXYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdnQixNQUFNO0lBQ3pELEdBQUcsRUFBRTtJQUVMdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFNBQVNHLFlBQVk7WUFDdkIsTUFBTW1CLFdBQVdDLFlBQVksSUFBTTtnQkFDakNqQixXQUFXYSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdnQixNQUFNO1lBQ3pELEdBQUdqQjtZQUNILE9BQU8sSUFBTXdCLGNBQWNGO1FBQzdCLENBQUM7SUFDSDtJQUVBNUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkb0IsT0FBT1csZ0JBQWdCLENBQUMsVUFBVWIsY0FBYztZQUFFYyxTQUFTLElBQUk7UUFBQztRQUVoRSxPQUFPLElBQU07WUFDWFosT0FBT2EsbUJBQW1CLENBQUMsVUFBVWY7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTGdCLFFBQVFDLEdBQUcsQ0FBQ25CLGdCQUFnQkQ7SUFFNUIscUJBQ0UsOERBQUNxQjtRQUNDQyxXQUFXbkMsbUZBQXFCO1FBQ2hDQSxPQUNFYyxpQkFBaUIsU0FBVSxNQUFPUixTQUM5QjtZQUFFK0IsWUFBWWhDLFVBQVUsQ0FBQ0ksUUFBUTtRQUFDLElBQ2xDO1lBQUU2QixTQUFTO1FBQUUsQ0FBQztRQUVwQkMsU0FBUyxDQUFDNUIsWUFBWSxJQUFNQyxXQUFXLElBQUksSUFBSSxJQUFJO1FBQ25ENEIsY0FBYyxDQUFDN0IsWUFBWSxJQUFNVyxnQkFBZ0IsSUFBSTs7MEJBRXJELDhEQUFDckIscURBQUVBO2dCQUFDSSxZQUFZQTtnQkFBWU0sV0FBV0E7Z0JBQVdGLFNBQVNBOzs7Ozs7MEJBQzNELDhEQUFDUixxREFBRUE7Z0JBQUNJLFlBQVlBO2dCQUFZTSxXQUFXQTtnQkFBV0YsU0FBU0E7Ozs7Ozs7Ozs7OztBQUdqRTtHQTdETVA7O1FBR2VILGtFQUFtQkE7OztLQUhsQ0c7QUErRE4sK0RBQWVBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbmltYXRpb24vQzIuanM/YjdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9MYW5kaW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDMyBmcm9tIFwiLi4vYW5pbWF0aW9uL0MzXCI7XG5cbmNvbnN0IEMyID0gKHtjaGFuZ2VkLCBkZWxheSwgY29sb3JBcnJheSwgbWFyZ2luLCBhdXRvQ2hhbmdlLCBzZXRBdXRvQ2hhbmdlfSkgPT4ge1xuICBjb25zdCBbaW5kZXhDMiwgc2V0SW5kZXhDMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NoYW5nZWRDMiwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhDMiArMSA8IGNvbG9yQXJyYXkubGVuZ3RoKSBcbiAgICB7c2V0SW5kZXhDMihpbmRleEMyICsgMSksIHNldENoYW5nZWQodHJ1ZSksIHNldEF1dG9DaGFuZ2UoZmFsc2UpO31cbiAgICBlbHNlIHNldEluZGV4QzIoMCksIHNldENoYW5nZWQodHJ1ZSksIHNldEF1dG9DaGFuZ2UoZmFsc2UpOztcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhDMiArMSA8IGNvbG9yQXJyYXkubGVuZ3RoKSBcbiAgICB7c2V0SW5kZXhDMihpbmRleEMyICsgMSl9XG4gICAgZWxzZSBzZXRJbmRleEMyKDApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbmRleEMyKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWxheSAmJiBhdXRvQ2hhbmdlKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0SW5kZXhDMihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhzY3JvbGxQb3NpdGlvbiwgaGVpZ2h0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5ob3Jpem9udGFsX2Zyc3R9XG4gICAgICBzdHlsZT17XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uIDwgKGhlaWdodCAqIDEuMykgKyBtYXJnaW5cbiAgICAgICAgICA/IHsgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleEMyXSB9XG4gICAgICAgICAgOiB7IG9wYWNpdHk6IDEgfVxuICAgICAgfVxuICAgICAgb25DbGljaz17IWNoYW5nZWRDMiA/ICgpID0+IHNldENoYW5nZWQodHJ1ZSkgOiBudWxsfVxuICAgICAgb25Nb3VzZUVudGVyPXshY2hhbmdlZEMyID8gKCkgPT4gY2hhbmdlQ29sb3IoKSA6IG51bGx9XG4gICAgPlxuICAgICAgPEMzIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9IGNoYW5nZWRDMj17Y2hhbmdlZEMyfSBpbmRleEMyPXtpbmRleEMyfS8+XG4gICAgICA8QzMgY29sb3JBcnJheT17Y29sb3JBcnJheX0gY2hhbmdlZEMyPXtjaGFuZ2VkQzJ9IGluZGV4QzI9e2luZGV4QzJ9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEMyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2luZG93RGltZW5zaW9ucyIsInN0eWxlIiwiQzMiLCJDMiIsImNoYW5nZWQiLCJkZWxheSIsImNvbG9yQXJyYXkiLCJtYXJnaW4iLCJhdXRvQ2hhbmdlIiwic2V0QXV0b0NoYW5nZSIsImluZGV4QzIiLCJzZXRJbmRleEMyIiwiY2hhbmdlZEMyIiwic2V0Q2hhbmdlZCIsImhlaWdodCIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2hhbmdlSW5kZXgiLCJsZW5ndGgiLCJjaGFuZ2VDb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhvcml6b250YWxfZnJzdCIsImJhY2tncm91bmQiLCJvcGFjaXR5Iiwib25DbGljayIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animation/C2.js\n"));

/***/ })

});