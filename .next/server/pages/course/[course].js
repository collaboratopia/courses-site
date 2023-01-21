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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Course.module.css */ \"./styles/Course.module.css\");\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    const paths = data.map((course)=>`/${course.id}`);\n    return {\n        paths: [\n            {\n                params: {\n                    course: \"template\"\n                }\n            },\n            {\n                params: {\n                    course: \"2\"\n                }\n            }\n        ],\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    return {\n        // Passed to the page component as props\n        props: {\n            course: {}\n        }\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().Course),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDNEI7QUFFNUMsZUFBZUcsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVdILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1Ysc0RBQWUsQ0FBQ0k7SUFDeEMsTUFBTVEsUUFBUUosS0FBS0ssR0FBRyxDQUFDQyxDQUFBQSxTQUFVLENBQUMsQ0FBQyxFQUFFQSxPQUFPQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxPQUFPO1FBQ0xILE9BQU87WUFBQztnQkFBRUksUUFBUTtvQkFBRUYsUUFBUTtnQkFBVztZQUFFO1lBQUc7Z0JBQUVFLFFBQVE7b0JBQUVGLFFBQVE7Z0JBQUk7WUFBRTtTQUFFO1FBQ3hFRyxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRUQsbURBQW1EO0FBQzVDLGVBQWVDLGVBQWVDLE9BQU8sRUFBRTtJQUM1QyxPQUFPO1FBQ0wsd0NBQXdDO1FBQ3hDQyxPQUFPO1lBQUVOLFFBQVEsQ0FBQztRQUFFO0lBQ3RCO0FBQ0YsQ0FBQztBQUVjLFNBQVNPLE9BQU8sRUFBRVAsT0FBTSxFQUFFLEVBQUU7SUFDekMscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdyQix5RUFBYTs7MEJBQzNCLDhEQUFDc0I7MEJBQUlWLE9BQU9XLEtBQUs7Ozs7OzswQkFDakIsOERBQUNDOzBCQUFHWixPQUFPYSxXQUFXOzs7Ozs7Ozs7Ozs7QUFZNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2NvdXJzZS9bY291cnNlXS5qcz82ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db3Vyc2UubW9kdWxlLmNzcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsIFwidGVtcGxhdGUuanNvblwiKVxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpKVxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKGNvdXJzZSA9PiBgLyR7Y291cnNlLmlkfWApXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFt7IHBhcmFtczogeyBjb3Vyc2U6ICd0ZW1wbGF0ZScgfSB9LCB7IHBhcmFtczogeyBjb3Vyc2U6ICcyJyB9IH1dLFxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy8gY2FuIGFsc28gYmUgdHJ1ZSBvciAnYmxvY2tpbmcnXG4gIH1cbn1cblxuLy8gYGdldFN0YXRpY1BhdGhzYCByZXF1aXJlcyB1c2luZyBgZ2V0U3RhdGljUHJvcHNgXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIC8vIFBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICBwcm9wczogeyBjb3Vyc2U6IHt9IH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlKHsgY291cnNlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvdXJzZX0+XG4gICAgICA8aDE+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgPHA+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgPGgyPkxlc3NvbnM8L2gyPlxuICAgICAgICB7Y291cnNlLmxlc3NvbnMubWFwKGxlc3NvbiA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2xlc3Nvbi50aXRsZX0+XG4gICAgICAgICAgICA8aDM+e2xlc3Nvbi50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHNwYW4+RHVyYXRpb246IHtsZXNzb24uZHVyYXRpb259PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsInN0eWxlcyIsImdldFN0YXRpY1BhdGhzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJwYXRocyIsIm1hcCIsImNvdXJzZSIsImlkIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsIkNvdXJzZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n");

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