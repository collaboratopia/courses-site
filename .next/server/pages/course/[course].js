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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Course.module.css */ \"./styles/Course.module.css\");\n/* harmony import */ var _styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const course = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    const paths = course.map((course)=>`/course/${course.title.replace(\" \", \"-\")}`);\n    return {\n        paths: paths,\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    return {\n        // Passed to the page component as props\n        props: {\n            course: {}\n        }\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Course_module_css__WEBPACK_IMPORTED_MODULE_3___default().course),\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDNEI7QUFFNUMsZUFBZUcsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVdILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ1Ysc0RBQWUsQ0FBQ0k7SUFDMUMsTUFBTVEsUUFBUUosT0FBT0ssR0FBRyxDQUFDTCxDQUFBQSxTQUFVLENBQUMsUUFBUSxFQUFFQSxPQUFPTSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxLQUFJLEtBQUssQ0FBQztJQUM3RSxPQUFPO1FBQ0xILE9BQU9BO1FBQ1BJLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFFRCxtREFBbUQ7QUFDNUMsZUFBZUMsZUFBZUMsT0FBTyxFQUFFO0lBQzVDLE9BQU87UUFDTCx3Q0FBd0M7UUFDeENDLE9BQU87WUFBRVgsUUFBUSxDQUFDO1FBQUU7SUFDdEI7QUFDRixDQUFDO0FBRWMsU0FBU1ksT0FBTyxFQUFFWixPQUFNLEVBQUUsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBV3BCLHlFQUFhOzswQkFDM0IsOERBQUNxQjtnQkFBR0QsV0FBV3BCLHlFQUFhOzBCQUFHTSxPQUFPTSxLQUFLOzs7Ozs7MEJBQzNDLDhEQUFDVTtnQkFBRUYsV0FBV3BCLHlFQUFhOzBCQUFHTSxPQUFPaUIsV0FBVzs7Ozs7Ozs7Ozs7O0FBWXRELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanM/NmYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ291cnNlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCBcInRlbXBsYXRlLmpzb25cIilcbiAgY29uc3QgY291cnNlID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpKVxuICBjb25zdCBwYXRocyA9IGNvdXJzZS5tYXAoY291cnNlID0+IGAvY291cnNlLyR7Y291cnNlLnRpdGxlLnJlcGxhY2UoXCIgXCIsXCItXCIpfWApO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsIC8vIGNhbiBhbHNvIGJlIHRydWUgb3IgJ2Jsb2NraW5nJ1xuICB9XG59XG5cbi8vIGBnZXRTdGF0aWNQYXRoc2AgcmVxdWlyZXMgdXNpbmcgYGdldFN0YXRpY1Byb3BzYFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBQYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgcHJvcHM6IHsgY291cnNlOiB7fSB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZSh7IGNvdXJzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Vyc2V9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvdXJzZX0+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY291cnNlfT57Y291cnNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8aDI+TGVzc29uczwvaDI+XG4gICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAobGVzc29uID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bGVzc29uLnRpdGxlfT5cbiAgICAgICAgICAgIDxoMz57bGVzc29uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3Bhbj5EdXJhdGlvbjoge2xlc3Nvbi5kdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwic3R5bGVzIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY291cnNlIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicGF0aHMiLCJtYXAiLCJ0aXRsZSIsInJlcGxhY2UiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiQ291cnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n");

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