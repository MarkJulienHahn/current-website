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

/***/ "./components/animation/A2.js":
/*!************************************!*\
  !*** ./components/animation/A2.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_A3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/A3 */ \"./components/animation/A3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst A2 = (param)=>{\n    let { changedA , colorArray , indexA , margin  } = param;\n    _s();\n    const [indexA2, setIndexA2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedA2, setChangedA2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        if (indexA + 1 < colorArray.length) {\n            setIndexA2(indexA + 1), setChangedA2(true);\n        } else setIndexA2(0), setChangedA2(true);\n    };\n    const changeColor = ()=>{\n        if (indexA2 + 1 < colorArray.length) setIndexA2(indexA2 + 1);\n        else setIndexA2(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    console.log(scrollPosition, height);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().vertical),\n        style: scrollPosition < height ? {\n            background: colorArray[indexA2]\n        } : {\n            opacity: 1\n        },\n        onClick: !changedA2 ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedA2: changedA2,\n                margin: -50,\n                indexA2: indexA2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A2.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                colorArray: colorArray,\n                changedA2: changedA2,\n                margin: 20,\n                indexA2: indexA2\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A2.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A2.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(A2, \"zwaWYfEGdnwxE1nYh+ueFoHLUxk=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = A2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (A2);\nvar _c;\n$RefreshReg$(_c, \"A2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDc0I7QUFDZDtBQUNuQjtBQUVqQyxNQUFNSyxLQUFLLFNBQThDO1FBQTdDLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRTs7SUFDbEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxFQUFFYyxPQUFNLEVBQUUsR0FBR1osc0VBQW1CQTtJQUV0QyxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNaUIsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVc7UUFDbkNKLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNRyxjQUFjLElBQU07UUFDeEIsSUFBSWIsU0FBUyxJQUFJRCxXQUFXZSxNQUFNLEVBQUU7WUFDbENYLFdBQVdILFNBQVMsSUFBSUssYUFBYSxJQUFJLENBQUM7UUFDNUMsT0FBT0YsV0FBVyxJQUFJRSxhQUFhLElBQUksQ0FBQztJQUMxQztJQUVBLE1BQU1VLGNBQWMsSUFBTTtRQUN4QixJQUFJYixVQUFVLElBQUlILFdBQVdlLE1BQU0sRUFBRVgsV0FBV0QsVUFBVTthQUNyREMsV0FBVztJQUNsQjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RrQixPQUFPSyxnQkFBZ0IsQ0FBQyxVQUFVUCxjQUFjO1lBQUVRLFNBQVMsSUFBSTtRQUFDO1FBRWhFLE9BQU8sSUFBTTtZQUNYTixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVVDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMVSxRQUFRQyxHQUFHLENBQUNiLGdCQUFnQkQ7SUFFNUIscUJBQ0UsOERBQUNlO1FBQ0NDLFdBQVczQiw0RUFBYztRQUN6QkEsT0FDRVksaUJBQWlCRCxTQUNiO1lBQUVrQixZQUFZekIsVUFBVSxDQUFDRyxRQUFRO1FBQUMsSUFDbEM7WUFBRXVCLFNBQVM7UUFBRSxDQUFDO1FBRXBCQyxTQUFTLENBQUN0QixZQUFZLElBQU1TLGdCQUFnQixJQUFJOzswQkFHaEQsOERBQUNqQixxREFBRUE7Z0JBQ0RHLFlBQVlBO2dCQUNaSyxXQUFXQTtnQkFDWEgsUUFBUSxDQUFDO2dCQUNUQyxTQUFTQTs7Ozs7OzBCQUVYLDhEQUFDTixxREFBRUE7Z0JBQ0RHLFlBQVlBO2dCQUNaSyxXQUFXQTtnQkFDWEgsUUFBUTtnQkFDUkMsU0FBU0E7Ozs7Ozs7Ozs7OztBQUlqQjtHQXpETUw7O1FBR2VILGtFQUFtQkE7OztLQUhsQ0c7QUEyRE4sK0RBQWVBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbmltYXRpb24vQTIuanM/NTM1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQTMgZnJvbSBcIi4uL2FuaW1hdGlvbi9BM1wiO1xuXG5jb25zdCBBMiA9ICh7IGNoYW5nZWRBLCBjb2xvckFycmF5LCBpbmRleEEsIG1hcmdpbiB9KSA9PiB7XG4gIGNvbnN0IFtpbmRleEEyLCBzZXRJbmRleEEyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2hhbmdlZEEyLCBzZXRDaGFuZ2VkQTJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhBICsgMSA8IGNvbG9yQXJyYXkubGVuZ3RoKSB7XG4gICAgICBzZXRJbmRleEEyKGluZGV4QSArIDEpLCBzZXRDaGFuZ2VkQTIodHJ1ZSk7XG4gICAgfSBlbHNlIHNldEluZGV4QTIoMCksIHNldENoYW5nZWRBMih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXhBMiArIDEgPCBjb2xvckFycmF5Lmxlbmd0aCkgc2V0SW5kZXhBMihpbmRleEEyICsgMSk7XG4gICAgZWxzZSBzZXRJbmRleEEyKDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coc2Nyb2xsUG9zaXRpb24sIGhlaWdodClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUudmVydGljYWx9XG4gICAgICBzdHlsZT17XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uIDwgaGVpZ2h0XG4gICAgICAgICAgPyB7IGJhY2tncm91bmQ6IGNvbG9yQXJyYXlbaW5kZXhBMl0gfVxuICAgICAgICAgIDogeyBvcGFjaXR5OiAxIH1cbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9eyFjaGFuZ2VkQTIgPyAoKSA9PiBjaGFuZ2VJbmRleCgpIDogbnVsbH1cbiAgICAgIC8vIG9uTW91c2VFbnRlcj17Y2hhbmdlZEEyID8gKCkgPT4gY2hhbmdlQ29sb3IoKSA6IG51bGx9XG4gICAgPlxuICAgICAgPEEzXG4gICAgICAgIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9XG4gICAgICAgIGNoYW5nZWRBMj17Y2hhbmdlZEEyfVxuICAgICAgICBtYXJnaW49ey01MH1cbiAgICAgICAgaW5kZXhBMj17aW5kZXhBMn1cbiAgICAgIC8+XG4gICAgICA8QTNcbiAgICAgICAgY29sb3JBcnJheT17Y29sb3JBcnJheX1cbiAgICAgICAgY2hhbmdlZEEyPXtjaGFuZ2VkQTJ9XG4gICAgICAgIG1hcmdpbj17MjB9XG4gICAgICAgIGluZGV4QTI9e2luZGV4QTJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQTI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwic3R5bGUiLCJBMyIsIkEyIiwiY2hhbmdlZEEiLCJjb2xvckFycmF5IiwiaW5kZXhBIiwibWFyZ2luIiwiaW5kZXhBMiIsInNldEluZGV4QTIiLCJjaGFuZ2VkQTIiLCJzZXRDaGFuZ2VkQTIiLCJoZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaGFuZGxlU2Nyb2xsIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNoYW5nZUluZGV4IiwibGVuZ3RoIiwiY2hhbmdlQ29sb3IiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidmVydGljYWwiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/animation/A2.js\n"));

/***/ })

});