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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// import fs from 'fs'\n\nvar __N_SSG = true;\nfunction Course(param) {\n    let { course  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lessons\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    course.lessons.map((lesson)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: lesson.title\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Duration: \",\n                                        lesson.duration\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, lesson.title, true, {\n                            fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = Course;\nvar _c;\n$RefreshReg$(_c, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNCQUFzQjs7O0FBa0NQLFNBQVNBLE9BQU8sS0FBVSxFQUFFO1FBQVosRUFBRUMsT0FBTSxFQUFFLEdBQVY7SUFDN0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUlGLE9BQU9HLEtBQUs7Ozs7OzswQkFDakIsOERBQUNDOzBCQUFHSixPQUFPSyxXQUFXOzs7Ozs7MEJBQ3RCLDhEQUFDSjs7a0NBQ0MsOERBQUNLO2tDQUFHOzs7Ozs7b0JBQ0hOLE9BQU9PLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSx1QkFDbEIsOERBQUNSOzs4Q0FDQyw4REFBQ1M7OENBQUlELE9BQU9OLEtBQUs7Ozs7Ozs4Q0FDakIsOERBQUNROzt3Q0FBSzt3Q0FBV0YsT0FBT0csUUFBUTs7Ozs7Ozs7MkJBRnhCSCxPQUFPTixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQyxDQUFDO0tBaEJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291cnNlL1tjb3Vyc2VdLmpzPzZmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICAgIC8vIHJlYWQgdGhlIC5qc29uIGZpbGUgZnJvbSB0aGUgZGF0YSBkaXJlY3Rvcnlcbi8vICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsIFwidGVtcGxhdGUuanNvblwiKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkpXG4vLyAgICAgLy8gcGF0aHMgd2lsbCBiZSB0aGUgYXJyYXkgb2YgY291cnNlIGlkc1xuLy8gICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoY291cnNlID0+IGAvJHtjb3Vyc2UuaWR9YClcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcGF0aHM6IFt7IHBhcmFtczogeyBpZDogcGF0aHMgfSB9XSxcbi8vICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuLy8gICAgIH1cbi8vIH1cblxuLy8gR2VuZXJhdGVzIGAvcG9zdHMvMWAgYW5kIGAvcG9zdHMvMmBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCBcInRlbXBsYXRlLmpzb25cIilcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChjb3Vyc2UgPT4gYC8ke2NvdXJzZS5pZH1gKVxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgaWQ6ICcxJyB9IH0sIHsgcGFyYW1zOiB7IGlkOiAnMicgfSB9XSxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vIGNhbiBhbHNvIGJlIHRydWUgb3IgJ2Jsb2NraW5nJ1xuICB9XG59XG5cbi8vIGBnZXRTdGF0aWNQYXRoc2AgcmVxdWlyZXMgdXNpbmcgYGdldFN0YXRpY1Byb3BzYFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBQYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgcHJvcHM6IHsgY291cnNlOiB7fSB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZSh7IGNvdXJzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57Y291cnNlLnRpdGxlfTwvaDE+XG4gICAgICA8cD57Y291cnNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5MZXNzb25zPC9oMj5cbiAgICAgICAge2NvdXJzZS5sZXNzb25zLm1hcChsZXNzb24gPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtsZXNzb24udGl0bGV9PlxuICAgICAgICAgICAgPGgzPntsZXNzb24udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuPkR1cmF0aW9uOiB7bGVzc29uLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNvdXJzZSIsImNvdXJzZSIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJoMiIsImxlc3NvbnMiLCJtYXAiLCJsZXNzb24iLCJoMyIsInNwYW4iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n"));

/***/ })

});