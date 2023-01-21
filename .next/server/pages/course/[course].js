/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/course/[course]";
exports.ids = ["pages/course/[course]"];
exports.modules = {

/***/ "./styles/Course.module.css":
/*!**********************************!*\
  !*** ./styles/Course.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"course\": \"Course_course__8y2Ve\",\n\t\"lesson\": \"Course_lesson__siBER\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ291cnNlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3N0eWxlcy9Db3Vyc2UubW9kdWxlLmNzcz85YjA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvdXJzZVwiOiBcIkNvdXJzZV9jb3Vyc2VfXzh5MlZlXCIsXG5cdFwibGVzc29uXCI6IFwiQ291cnNlX2xlc3Nvbl9fc2lCRVJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Course.module.css\n");

/***/ }),

/***/ "./pages/course/[course].js":
/*!**********************************!*\
  !*** ./pages/course/[course].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Course.module.css */ \"./styles/Course.module.css\");\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const course = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    //const paths = data.map(course => {return {params: {course: course.id}}})\n    const paths = course.map((course)=>`/course/${course.id}`);\n    return {\n        paths: paths,\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    return {\n        // Passed to the page component as props\n        props: {\n            course: {}\n        }\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDNEI7QUFFNUMsZUFBZUcsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVdILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ1Ysc0RBQWUsQ0FBQ0k7SUFDMUMsMEVBQTBFO0lBQzFFLE1BQU1RLFFBQVFKLE9BQU9LLEdBQUcsQ0FBQ0wsQ0FBQUEsU0FBVSxDQUFDLFFBQVEsRUFBRUEsT0FBT00sRUFBRSxDQUFDLENBQUM7SUFDekQsT0FBTztRQUNMRixPQUFPQTtRQUNQRyxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRUQsbURBQW1EO0FBQzVDLGVBQWVDLGVBQWVDLE9BQU8sRUFBRTtJQUM1QyxPQUFPO1FBQ0wsd0NBQXdDO1FBQ3hDQyxPQUFPO1lBQUVWLFFBQVEsQ0FBQztRQUFFO0lBQ3RCO0FBQ0YsQ0FBQztBQUVjLFNBQVNXLE9BQU8sRUFBRVgsT0FBTSxFQUFFLEVBQUU7SUFDekMscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVduQix5RUFBYTs7MEJBQzNCLDhEQUFDb0I7Z0JBQUdELFdBQVduQix5RUFBYTswQkFBR00sT0FBT2UsS0FBSzs7Ozs7OzBCQUMzQyw4REFBQ0M7Z0JBQUVILFdBQVduQix5RUFBYTswQkFBR00sT0FBT2lCLFdBQVc7Ozs7Ozs7Ozs7OztBQVl0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvY291cnNlL1tjb3Vyc2VdLmpzPzZmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NvdXJzZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJ0ZW1wbGF0ZS5qc29uXCIpXG4gIGNvbnN0IGNvdXJzZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgLy9jb25zdCBwYXRocyA9IGRhdGEubWFwKGNvdXJzZSA9PiB7cmV0dXJuIHtwYXJhbXM6IHtjb3Vyc2U6IGNvdXJzZS5pZH19fSlcbiAgY29uc3QgcGF0aHMgPSBjb3Vyc2UubWFwKGNvdXJzZSA9PiBgL2NvdXJzZS8ke2NvdXJzZS5pZH1gKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbiAgfVxufVxuXG4vLyBgZ2V0U3RhdGljUGF0aHNgIHJlcXVpcmVzIHVzaW5nIGBnZXRTdGF0aWNQcm9wc2BcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgLy8gUGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIHByb3BzOiB7IGNvdXJzZToge30gfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoeyBjb3Vyc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cnNlfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb3Vyc2V9Pntjb3Vyc2UudGl0bGV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZX0+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgPGgyPkxlc3NvbnM8L2gyPlxuICAgICAgICB7Y291cnNlLmxlc3NvbnMubWFwKGxlc3NvbiA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2xlc3Nvbi50aXRsZX0+XG4gICAgICAgICAgICA8aDM+e2xlc3Nvbi50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHNwYW4+RHVyYXRpb246IHtsZXNzb24uZHVyYXRpb259PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsInN0eWxlcyIsImdldFN0YXRpY1BhdGhzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImNvdXJzZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsInBhdGhzIiwibWFwIiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiQ291cnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/course/[course].js"));
module.exports = __webpack_exports__;

})();