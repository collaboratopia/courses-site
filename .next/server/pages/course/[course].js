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
exports.id = "pages/course/[course]";
exports.ids = ["pages/course/[course]"];
exports.modules = {

/***/ "./pages/course/[course].js":
/*!**********************************!*\
  !*** ./pages/course/[course].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Course),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticPaths() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"template.json\");\n    const data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath));\n    const paths = data.map((course)=>`/${course.id}`);\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"1\"\n                }\n            },\n            {\n                params: {\n                    id: \"2\"\n                }\n            }\n        ],\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    return {\n        // Passed to the page component as props\n        props: {\n            course: {}\n        }\n    };\n}\nfunction Course({ course  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: course.title\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: course.description\n            }, void 0, false, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Lessons\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    course.lessons.map((lesson)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: lesson.title\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Duration: \",\n                                        lesson.duration\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, lesson.title, true, {\n                            fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/courses-site/pages/course/[course].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtQjtBQUNJO0FBRWhCLGVBQWVFLGlCQUFpQjtJQUNyQyxNQUFNQyxXQUFXRixnREFBUyxDQUFDSSxRQUFRQyxHQUFHLElBQUksUUFBUTtJQUNsRCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNULHNEQUFlLENBQUNHO0lBQ3hDLE1BQU1RLFFBQVFKLEtBQUtLLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVSxDQUFDLENBQUMsRUFBRUEsT0FBT0MsRUFBRSxDQUFDLENBQUM7SUFDaEQsT0FBTztRQUNMSCxPQUFPO1lBQUM7Z0JBQUVJLFFBQVE7b0JBQUVELElBQUk7Z0JBQUk7WUFBRTtZQUFHO2dCQUFFQyxRQUFRO29CQUFFRCxJQUFJO2dCQUFJO1lBQUU7U0FBRTtRQUN6REUsVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQztBQUVELG1EQUFtRDtBQUM1QyxlQUFlQyxlQUFlQyxPQUFPLEVBQUU7SUFDNUMsT0FBTztRQUNMLHdDQUF3QztRQUN4Q0MsT0FBTztZQUFFTixRQUFRLENBQUM7UUFBRTtJQUN0QjtBQUNGLENBQUM7QUFFYyxTQUFTTyxPQUFPLEVBQUVQLE9BQU0sRUFBRSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDOzBCQUFJVCxPQUFPVSxLQUFLOzs7Ozs7MEJBQ2pCLDhEQUFDQzswQkFBR1gsT0FBT1ksV0FBVzs7Ozs7OzBCQUN0Qiw4REFBQ0o7O2tDQUNDLDhEQUFDSztrQ0FBRzs7Ozs7O29CQUNIYixPQUFPYyxPQUFPLENBQUNmLEdBQUcsQ0FBQ2dCLENBQUFBLHVCQUNsQiw4REFBQ1A7OzhDQUNDLDhEQUFDUTs4Q0FBSUQsT0FBT0wsS0FBSzs7Ozs7OzhDQUNqQiw4REFBQ087O3dDQUFLO3dDQUFXRixPQUFPRyxRQUFROzs7Ozs7OzsyQkFGeEJILE9BQU9MLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanM/NmYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgXCJ0ZW1wbGF0ZS5qc29uXCIpXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkpXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoY291cnNlID0+IGAvJHtjb3Vyc2UuaWR9YClcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IGlkOiAnMScgfSB9LCB7IHBhcmFtczogeyBpZDogJzInIH0gfV0sXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbiAgfVxufVxuXG4vLyBgZ2V0U3RhdGljUGF0aHNgIHJlcXVpcmVzIHVzaW5nIGBnZXRTdGF0aWNQcm9wc2BcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgLy8gUGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIHByb3BzOiB7IGNvdXJzZToge30gfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2UoeyBjb3Vyc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgPHA+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TGVzc29uczwvaDI+XG4gICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAobGVzc29uID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bGVzc29uLnRpdGxlfT5cbiAgICAgICAgICAgIDxoMz57bGVzc29uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3Bhbj5EdXJhdGlvbjoge2xlc3Nvbi5kdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicGF0aHMiLCJtYXAiLCJjb3Vyc2UiLCJpZCIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJDb3Vyc2UiLCJkaXYiLCJoMSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiaDIiLCJsZXNzb25zIiwibGVzc29uIiwiaDMiLCJzcGFuIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/course/[course].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/course/[course].js"));
module.exports = __webpack_exports__;

})();