"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/course/[course]",{

/***/ "./pages/course/[course].js":
/*!**********************************!*\
  !*** ./pages/course/[course].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Course.module.css */ \"./styles/Course.module.css\");\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar __N_SSG = true;\nfunction Course(param) {\n    let { course  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1___default().course),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1___default().course),\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1___default().course),\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_1___default().course)\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Course;\nvar _c;\n$RefreshReg$(_c, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDs7QUFvQnBDLFNBQVNDLE9BQU8sS0FBVSxFQUFFO1FBQVosRUFBRUMsT0FBTSxFQUFFLEdBQVY7SUFDN0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdKLHlFQUFhOzswQkFDM0IsOERBQUNLO2dCQUFHRCxXQUFXSix5RUFBYTswQkFBR0UsT0FBT0ksS0FBSzs7Ozs7OzBCQUMzQyw4REFBQ0M7Z0JBQUVILFdBQVdKLHlFQUFhOzBCQUFHRSxPQUFPTSxXQUFXOzs7Ozs7MEJBQ2hELDhEQUFDRDtnQkFBRUgsV0FBV0oseUVBQWE7Ozs7Ozs7Ozs7OztBQVlqQyxDQUFDO0tBakJ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291cnNlL1tjb3Vyc2VdLmpzPzZmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NvdXJzZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJ0ZW1wbGF0ZS5qc29uXCIpXG4gIGNvbnN0IGNvdXJzZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgY29uc3QgcGF0aHMgPSBjb3Vyc2UubWFwKGNvdXJzZSA9PiBgL2NvdXJzZS8ke2NvdXJzZS50aXRsZS5yZXBsYWNlKFwiIFwiLFwiLVwiKX1gKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbiAgfVxufVxuXG4vLyBgZ2V0U3RhdGljUGF0aHNgIHJlcXVpcmVzIHVzaW5nIGBnZXRTdGF0aWNQcm9wc2BcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgLy8gUGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIHByb3BzOiB7IGNvdXJzZToge30gfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoeyBjb3Vyc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cnNlfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb3Vyc2V9Pntjb3Vyc2UudGl0bGV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZX0+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb3Vyc2V9PjwvcD5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8aDI+TGVzc29uczwvaDI+XG4gICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAobGVzc29uID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bGVzc29uLnRpdGxlfT5cbiAgICAgICAgICAgIDxoMz57bGVzc29uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3Bhbj5EdXJhdGlvbjoge2xlc3Nvbi5kdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ291cnNlIiwiY291cnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n"));

/***/ })

});