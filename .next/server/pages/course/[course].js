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

eval("// Exports\nmodule.exports = {\n\t\"course\": \"Course_course__8y2Ve\",\n\t\"lesson\": \"Course_lesson__siBER\",\n\t\"container\": \"Course_container__4oIw3\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ291cnNlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL0NvdXJzZS5tb2R1bGUuY3NzPzliMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291cnNlXCI6IFwiQ291cnNlX2NvdXJzZV9fOHkyVmVcIixcblx0XCJsZXNzb25cIjogXCJDb3Vyc2VfbGVzc29uX19zaUJFUlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNvdXJzZV9jb250YWluZXJfXzRvSXczXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Course.module.css\n");

/***/ }),

/***/ "./pages/course/[course].js":
/*!**********************************!*\
  !*** ./pages/course/[course].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Course.module.css */ \"./styles/Course.module.css\");\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const course = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    const paths = course.map((course)=>`/course/${course.title.replace(\" \", \"-\")}`);\n    return {\n        paths: paths,\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    return {\n        // Passed to the page component as props\n        props: {\n            course: {}\n        }\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: \"Hello World!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().lesson),\n                    children: \"Lessons\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 29,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDNEI7QUFFNUMsZUFBZUcsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVdILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ1Ysc0RBQWUsQ0FBQ0k7SUFDMUMsTUFBTVEsUUFBUUosT0FBT0ssR0FBRyxDQUFDTCxDQUFBQSxTQUFVLENBQUMsUUFBUSxFQUFFQSxPQUFPTSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxLQUFJLEtBQUssQ0FBQztJQUM3RSxPQUFPO1FBQ0xILE9BQU9BO1FBQ1BJLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFFRCxtREFBbUQ7QUFDNUMsZUFBZUMsZUFBZUMsT0FBTyxFQUFFO0lBQzVDLE9BQU87UUFDTCx3Q0FBd0M7UUFDeENDLE9BQU87WUFBRVgsUUFBUSxDQUFDO1FBQUU7SUFDdEI7QUFDRixDQUFDO0FBRWMsU0FBU1ksT0FBTyxFQUFFWixPQUFNLEVBQUUsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ2E7OzBCQUNELDhEQUFDQztnQkFBR0MsV0FBV3JCLHlFQUFhOzBCQUFHTSxPQUFPTSxLQUFLOzs7Ozs7MEJBQ3pDLDhEQUFDVTtnQkFBRUQsV0FBV3JCLHlFQUFhOzBCQUFHTSxPQUFPaUIsV0FBVzs7Ozs7OzBCQUNoRCw4REFBQ0Q7Z0JBQUVELFdBQVdyQix5RUFBYTswQkFBRTs7Ozs7OzBCQUM1Qiw4REFBQ21COzBCQUNBLDRFQUFDSztvQkFBR0gsV0FBV3JCLHlFQUFhOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVV0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvY291cnNlL1tjb3Vyc2VdLmpzPzZmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NvdXJzZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJ0ZW1wbGF0ZS5qc29uXCIpXG4gIGNvbnN0IGNvdXJzZSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgY29uc3QgcGF0aHMgPSBjb3Vyc2UubWFwKGNvdXJzZSA9PiBgL2NvdXJzZS8ke2NvdXJzZS50aXRsZS5yZXBsYWNlKFwiIFwiLFwiLVwiKX1gKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbiAgfVxufVxuXG4vLyBgZ2V0U3RhdGljUGF0aHNgIHJlcXVpcmVzIHVzaW5nIGBnZXRTdGF0aWNQcm9wc2BcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgLy8gUGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIHByb3BzOiB7IGNvdXJzZToge30gfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoeyBjb3Vyc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZX0+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY291cnNlfT57Y291cnNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZX0+SGVsbG8gV29ybGQhPC9wPlxuICAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sZXNzb259Pkxlc3NvbnM8L2gyPlxuICAgICAgICB7Lyoge2NvdXJzZS5sZXNzb25zLm1hcChsZXNzb24gPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtsZXNzb24udGl0bGV9PlxuICAgICAgICAgICAgPGgzPntsZXNzb24udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuPkR1cmF0aW9uOiB7bGVzc29uLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJzdHlsZXMiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJjb3Vyc2UiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJwYXRocyIsIm1hcCIsInRpdGxlIiwicmVwbGFjZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJDb3Vyc2UiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsImgyIiwibGVzc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n");

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