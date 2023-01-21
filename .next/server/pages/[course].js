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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticPaths() {\n    // read the .json file from the data directory\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    //console.log(data)\n    // paths will be the array of course ids\n    // const paths = data.map(course => `/courses/${course.id}`)\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"1\"\n                }\n            },\n            {\n                params: {\n                    id: \"2\"\n                },\n                // with i18n configured the locale for the path can be returned as well\n                locale: \"en\"\n            }\n        ],\n        fallback: false\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lessons\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/courses-site/pages/[course].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    course.lessons.map((lesson)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: lesson.title\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/courses-site/pages/[course].js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Duration: \",\n                                        lesson.duration\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/courses-site/pages/[course].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, lesson.title, true, {\n                            fileName: \"/workspaces/courses-site/pages/[course].js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/courses-site/pages/[course].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/[course].js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY291cnNlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUVoQixlQUFlRSxpQkFBaUI7SUFDbkMsOENBQThDO0lBQzlDLE1BQU1DLFdBQVdGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ2xELE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1Qsc0RBQWUsQ0FBQ0c7SUFDdEMsbUJBQW1CO0lBQ3JCLHdDQUF3QztJQUN4Qyw0REFBNEQ7SUFDNUQsT0FBTztRQUNIUSxPQUFPO1lBQ0w7Z0JBQUVDLFFBQVE7b0JBQUVDLElBQUk7Z0JBQUk7WUFBQztZQUNyQjtnQkFDRUQsUUFBUTtvQkFBRUMsSUFBSTtnQkFBSTtnQkFDbEIsdUVBQXVFO2dCQUN2RUMsUUFBUTtZQUNWO1NBQ0Q7UUFDREMsVUFBVSxLQUFLO0lBQ25CO0FBQ0osQ0FBQztBQUVjLFNBQVNDLE9BQU8sRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDekMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUlGLE9BQU9HLEtBQUs7Ozs7OzswQkFDakIsOERBQUNDOzBCQUFHSixPQUFPSyxXQUFXOzs7Ozs7MEJBQ3RCLDhEQUFDSjs7a0NBQ0MsOERBQUNLO2tDQUFHOzs7Ozs7b0JBQ0hOLE9BQU9PLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSx1QkFDbEIsOERBQUNSOzs4Q0FDQyw4REFBQ1M7OENBQUlELE9BQU9OLEtBQUs7Ozs7Ozs4Q0FDakIsOERBQUNROzt3Q0FBSzt3Q0FBV0YsT0FBT0csUUFBUTs7Ozs7Ozs7MkJBRnhCSCxPQUFPTixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvW2NvdXJzZV0uanM/NTE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgLy8gcmVhZCB0aGUgLmpzb24gZmlsZSBmcm9tIHRoZSBkYXRhIGRpcmVjdG9yeVxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJ0ZW1wbGF0ZS5qc29uXCIpXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKSlcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSlcbiAgICAvLyBwYXRocyB3aWxsIGJlIHRoZSBhcnJheSBvZiBjb3Vyc2UgaWRzXG4gICAgLy8gY29uc3QgcGF0aHMgPSBkYXRhLm1hcChjb3Vyc2UgPT4gYC9jb3Vyc2VzLyR7Y291cnNlLmlkfWApXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICB7IHBhcmFtczogeyBpZDogJzEnIH19LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBpZDogJzInIH0sXG4gICAgICAgICAgICAvLyB3aXRoIGkxOG4gY29uZmlndXJlZCB0aGUgbG9jYWxlIGZvciB0aGUgcGF0aCBjYW4gYmUgcmV0dXJuZWQgYXMgd2VsbFxuICAgICAgICAgICAgbG9jYWxlOiBcImVuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoeyBjb3Vyc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgPHA+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TGVzc29uczwvaDI+XG4gICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAobGVzc29uID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bGVzc29uLnRpdGxlfT5cbiAgICAgICAgICAgIDxoMz57bGVzc29uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3Bhbj5EdXJhdGlvbjoge2xlc3Nvbi5kdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicGF0aHMiLCJwYXJhbXMiLCJpZCIsImxvY2FsZSIsImZhbGxiYWNrIiwiQ291cnNlIiwiY291cnNlIiwiZGl2IiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImgyIiwibGVzc29ucyIsIm1hcCIsImxlc3NvbiIsImgzIiwic3BhbiIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[course].js\n");

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