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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ \"./hooks/useWindowDimensions.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _animation_A2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/A2 */ \"./components/animation/A2.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layer01 = (param)=>{\n    let { colorArray , indexA , setIndexA , delay , autoChange , setAutoChange  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedA, setChangedA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { height  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChangedA(true);\n    };\n    const changeColor = ()=>{\n        if (indexA + 1 < colorArray.length) setIndexA(indexA + 1), setAutoChange(false);\n        else setIndexA(0), setAutoChange(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndexA(index);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (delay && autoChange) {\n            const interval = setInterval(()=>{\n                setIndexA(Math.floor(Math.random() * colorArray.length));\n            }, delay);\n            return ()=>clearInterval(interval);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    console.log(indexA, index, height, scrollPosition);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_4___default().A),\n        style: scrollPosition < 100 ? {\n            background: colorArray[indexA]\n        } : {},\n        onClick: ()=>setChangedA(true),\n        onMouseEnter: !changedA ? ()=>changeColor() : null,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    colorArray: colorArray,\n                    changedA: changedA,\n                    margin: 10,\n                    indexA: indexA\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animation_A2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    colorArray: colorArray,\n                    changedA: changedA,\n                    margin: 100,\n                    indexA: indexA\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/animation/A.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer01, \"r0CJNO7W8Pac34xZ3fAAbC3KapE=\", false, function() {\n    return [\n        _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Layer01;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer01);\nvar _c;\n$RefreshReg$(_c, \"Layer01\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbi9BLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNzQjtBQUNkO0FBQ25CO0FBRWpDLE1BQU1LLFVBQVUsU0FBeUU7UUFBeEUsRUFBRUMsV0FBVSxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLGNBQWEsRUFBRTs7SUFDbEYsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxFQUFFZ0IsT0FBTSxFQUFFLEdBQUdkLHNFQUFtQkE7SUFFdEMsTUFBTSxDQUFDZSxnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTW1CLGVBQWUsSUFBTTtRQUN6QixNQUFNQyxXQUFXQyxPQUFPQyxXQUFXO1FBQ25DSixrQkFBa0JFO0lBQ3BCO0lBRUEsTUFBTUcsY0FBYyxJQUFNO1FBQ3hCVixTQUFTVyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3BCLFdBQVdxQixNQUFNLElBQUlaLFlBQVksSUFBSSxDQUFDO0lBQzVFO0lBRUEsTUFBTWEsY0FBYyxJQUFNO1FBQ3hCLElBQUlyQixTQUFRLElBQUlELFdBQVdxQixNQUFNLEVBQUVuQixVQUFVRCxTQUFTLElBQUlJLGNBQWMsS0FBSyxDQUFDO2FBQ3pFSCxVQUFVLElBQUlHLGNBQWMsS0FBSyxDQUFDO0lBQ3pDO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sVUFBVUk7SUFDWixHQUFHLEVBQUU7SUFFTFgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLFNBQVNDLFlBQWE7WUFDeEIsTUFBTW1CLFdBQVdDLFlBQVksSUFBTTtnQkFDakN0QixVQUFVZ0IsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtwQixXQUFXcUIsTUFBTTtZQUN4RCxHQUFHbEI7WUFDSCxPQUFPLElBQU1zQixjQUFjRjtRQUM3QixDQUFDO0lBQ0g7SUFFQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDZG9CLE9BQU9XLGdCQUFnQixDQUFDLFVBQVViLGNBQWM7WUFBRWMsU0FBUyxJQUFJO1FBQUM7UUFFaEUsT0FBTyxJQUFNO1lBQ1haLE9BQU9hLG1CQUFtQixDQUFDLFVBQVVmO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUxnQixRQUFRQyxHQUFHLENBQUM3QixRQUFRSyxPQUFPSSxRQUFRQztJQUVuQyxxQkFDRSw4REFBQ29CO1FBQ0NDLFdBQVduQyxxRUFBTztRQUNsQkEsT0FDRWMsaUJBQWlCLE1BQ2I7WUFBRXVCLFlBQVlsQyxVQUFVLENBQUNDLE9BQU87UUFBQyxJQUNqQyxDQUFFLENBQUM7UUFFVGtDLFNBQVMsSUFBTTFCLFlBQVksSUFBSTtRQUMvQjJCLGNBQWMsQ0FBQzVCLFdBQVcsSUFBTWMsZ0JBQWdCLElBQUk7a0JBRXBELDRFQUFDUztZQUNDbEMsT0FBTztnQkFDTHdDLE9BQU87Z0JBQ1AzQixRQUFRO2dCQUNSNEIsU0FBUztZQUNYOzs4QkFFQSw4REFBQ3hDLHFEQUFFQTtvQkFBQ0UsWUFBWUE7b0JBQVlRLFVBQVVBO29CQUFVK0IsUUFBUTtvQkFBSXRDLFFBQVFBOzs7Ozs7OEJBQ3BFLDhEQUFDSCxxREFBRUE7b0JBQUNFLFlBQVlBO29CQUFZUSxVQUFVQTtvQkFBVStCLFFBQVE7b0JBQUt0QyxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7R0FuRU1GOztRQUdlSCxrRUFBbUJBOzs7S0FIbENHO0FBcUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYW5pbWF0aW9uL0EuanM/OWY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQTIgZnJvbSBcIi4uL2FuaW1hdGlvbi9BMlwiO1xuXG5jb25zdCBMYXllcjAxID0gKHsgY29sb3JBcnJheSwgaW5kZXhBLCBzZXRJbmRleEEsIGRlbGF5LCBhdXRvQ2hhbmdlLCBzZXRBdXRvQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NoYW5nZWRBLCBzZXRDaGFuZ2VkQV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUluZGV4ID0gKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSksIHNldENoYW5nZWRBKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIGlmIChpbmRleEEgKzEgPCBjb2xvckFycmF5Lmxlbmd0aCkgc2V0SW5kZXhBKGluZGV4QSArIDEpLCBzZXRBdXRvQ2hhbmdlKGZhbHNlKTtcbiAgICBlbHNlIHNldEluZGV4QSgwKSwgc2V0QXV0b0NoYW5nZShmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbmRleEEoaW5kZXgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVsYXkgJiYgYXV0b0NoYW5nZSApIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRJbmRleEEoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coaW5kZXhBLCBpbmRleCwgaGVpZ2h0LCBzY3JvbGxQb3NpdGlvbilcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuQX1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPCAxMDBcbiAgICAgICAgICA/IHsgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleEFdIH1cbiAgICAgICAgICA6IHsgfVxuICAgICAgfVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2hhbmdlZEEodHJ1ZSl9XG4gICAgICBvbk1vdXNlRW50ZXI9eyFjaGFuZ2VkQSA/ICgpID0+IGNoYW5nZUNvbG9yKCkgOiBudWxsfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEEyIGNvbG9yQXJyYXk9e2NvbG9yQXJyYXl9IGNoYW5nZWRBPXtjaGFuZ2VkQX0gbWFyZ2luPXsxMH0gaW5kZXhBPXtpbmRleEF9IC8+XG4gICAgICAgIDxBMiBjb2xvckFycmF5PXtjb2xvckFycmF5fSBjaGFuZ2VkQT17Y2hhbmdlZEF9IG1hcmdpbj17MTAwfSBpbmRleEE9e2luZGV4QX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXIwMTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJzdHlsZSIsIkEyIiwiTGF5ZXIwMSIsImNvbG9yQXJyYXkiLCJpbmRleEEiLCJzZXRJbmRleEEiLCJkZWxheSIsImF1dG9DaGFuZ2UiLCJzZXRBdXRvQ2hhbmdlIiwiaW5kZXgiLCJzZXRJbmRleCIsImNoYW5nZWRBIiwic2V0Q2hhbmdlZEEiLCJoZWlnaHQiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaGFuZGxlU2Nyb2xsIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNoYW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbmdlQ29sb3IiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJBIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/animation/A.js\n"));

/***/ })

});