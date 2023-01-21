"use strict";
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
exports.id = "pages/[course]";
exports.ids = ["pages/[course]"];
exports.modules = {

/***/ "./pages/[course].js":
/*!***************************!*\
  !*** ./pages/[course].js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getServerSideProps() {\n    // read the .json file from the data directory\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"course.json\");\n    const data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    // paths will be the array of course ids\n    const paths = data.map((course)=>`/courses/${course.id}`);\n    return {\n        paths,\n        fallback: false\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lessons\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/courses-site/pages/[course].js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    course.lessons.map((lesson)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: lesson.title\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/courses-site/pages/[course].js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Duration: \",\n                                        lesson.duration\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/courses-site/pages/[course].js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, lesson.title, true, {\n                            fileName: \"/workspaces/courses-site/pages/[course].js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/[course].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY291cnNlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUVoQixlQUFlRSxxQkFBcUI7SUFDdkMsOENBQThDO0lBQzlDLE1BQU1DLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1Qsc0RBQWUsQ0FBQ0c7SUFDeEMsd0NBQXdDO0lBQ3hDLE1BQU1RLFFBQVFKLEtBQUtLLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVSxDQUFDLFNBQVMsRUFBRUEsT0FBT0MsRUFBRSxDQUFDLENBQUM7SUFDeEQsT0FBTztRQUNISDtRQUNBSSxVQUFVLEtBQUs7SUFDbkI7QUFDSixDQUFDO0FBRWMsU0FBU0MsT0FBTyxFQUFFSCxPQUFNLEVBQUUsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBSUwsT0FBT00sS0FBSzs7Ozs7OzBCQUNqQiw4REFBQ0M7MEJBQUdQLE9BQU9RLFdBQVc7Ozs7OzswQkFDdEIsOERBQUNKOztrQ0FDQyw4REFBQ0s7a0NBQUc7Ozs7OztvQkFDSFQsT0FBT1UsT0FBTyxDQUFDWCxHQUFHLENBQUNZLENBQUFBLHVCQUNsQiw4REFBQ1A7OzhDQUNDLDhEQUFDUTs4Q0FBSUQsT0FBT0wsS0FBSzs7Ozs7OzhDQUNqQiw4REFBQ087O3dDQUFLO3dDQUFXRixPQUFPRyxRQUFROzs7Ozs7OzsyQkFGeEJILE9BQU9MLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9bY291cnNlXS5qcz81MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgLy8gcmVhZCB0aGUgLmpzb24gZmlsZSBmcm9tIHRoZSBkYXRhIGRpcmVjdG9yeVxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJjb3Vyc2UuanNvblwiKVxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkpXG4gICAgLy8gcGF0aHMgd2lsbCBiZSB0aGUgYXJyYXkgb2YgY291cnNlIGlkc1xuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoY291cnNlID0+IGAvY291cnNlcy8ke2NvdXJzZS5pZH1gKVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZSh7IGNvdXJzZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57Y291cnNlLnRpdGxlfTwvaDE+XG4gICAgICA8cD57Y291cnNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5MZXNzb25zPC9oMj5cbiAgICAgICAge2NvdXJzZS5sZXNzb25zLm1hcChsZXNzb24gPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtsZXNzb24udGl0bGV9PlxuICAgICAgICAgICAgPGgzPntsZXNzb24udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxzcGFuPkR1cmF0aW9uOiB7bGVzc29uLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldFNlcnZlclNpZGVQcm9wcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicGF0aHMiLCJtYXAiLCJjb3Vyc2UiLCJpZCIsImZhbGxiYWNrIiwiQ291cnNlIiwiZGl2IiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImgyIiwibGVzc29ucyIsImxlc3NvbiIsImgzIiwic3BhbiIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[course].js\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[course].js"));
module.exports = __webpack_exports__;

})();