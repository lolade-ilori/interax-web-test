"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog-post/[slug]",{

/***/ "./src/pages/blog-post/[slug].tsx":
/*!****************************************!*\
  !*** ./src/pages/blog-post/[slug].tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ BlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_blogExtras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/blogExtras */ \"./src/components/blogExtras/index.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/footer */ \"./src/components/footer/index.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/header */ \"./src/components/header/index.tsx\");\n/* harmony import */ var _components_subscriptionBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/subscriptionBox */ \"./src/components/subscriptionBox/index.tsx\");\n/* harmony import */ var _blogpost_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogpost.styles */ \"./src/pages/blog-post/blogpost.styles.ts\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction BlogPost(param) {\n    var blog = param.blog, extraBlogs = param.extraBlogs;\n    var _this = this;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;\n    if (!blog) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.LoadingWrap, {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n        lineNumber: 60,\n        columnNumber: 23\n    }, this);\n    var ref8 = blog === null || blog === void 0 ? void 0 : blog.fields, featuredImage = ref8.featuredImage, ingredients = ref8.ingredients, title = ref8.title, cookingTime = ref8.cookingTime, content = ref8.content, author = ref8.author;\n    console.log(blog);\n    console.log(extraBlogs, \"extra\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.PostWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.PostImgBanner, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image-wrap\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https:\".concat(featuredImage === null || featuredImage === void 0 ? void 0 : (ref = featuredImage.fields) === null || ref === void 0 ? void 0 : (ref1 = ref.file) === null || ref1 === void 0 ? void 0 : ref1.url)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.PostContentSection, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.PostContentHead, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.ContentSubHead, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inner-wrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"name-wrap\",\n                                            children: author === null || author === void 0 ? void 0 : (ref2 = author.fields) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.avatar) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.fields) === null || ref4 === void 0 ? void 0 : ref4.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"date-wrap\",\n                                            children: author === null || author === void 0 ? void 0 : (ref5 = author.fields) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.avatar) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.sys) === null || ref7 === void 0 ? void 0 : ref7.updatedAt\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.ContentBody, {\n                                children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_6__.documentToReactComponents)(content)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.ExtraReadWrap, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-wrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"You can also read these:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"extras-wrap\",\n                                children: extraBlogs === null || extraBlogs === void 0 ? void 0 : extraBlogs.map(function(item) {\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_blogExtras__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.SeeMoreOverall, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blogpost_styles__WEBPACK_IMPORTED_MODULE_5__.SeeMoreBtn, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"See More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/assets/svg/arrow-right.svg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                            lineNumber: 115,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subscriptionBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ilorilolade/Documents/interax-web/src/pages/blog-post/[slug].tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = BlogPost;\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozt3Q0FDbkU7Ozs7O29DQUNPOzBDQUVqQiw4REFBQ2pDLHlEQUFXOzBDQUNQVSwrRkFBeUIsQ0FBQ1UsT0FBTyxDQUFDOzs7OztvQ0FDekI7Ozs7Ozs0QkFDRztrQ0FFckIsOERBQUNsQiwyREFBYTs7MENBQ1YsOERBQUNxQixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsYUFBYTswQ0FDeEIsNEVBQUNVLElBQUU7OENBQUMsMEJBQXdCOzs7Ozt3Q0FBSzs7Ozs7b0NBQy9COzBDQUVOLDhEQUFDWCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsYUFBYTswQ0FFcEJYLFVBQVUsYUFBVkEsVUFBVSxXQUFLLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsVUFBVSxDQUFFc0IsR0FBRyxDQUFDLFNBQUNDLElBQVEsRUFBSztrREFDMUIsOERBQUN4Qyw4REFBVTs7Ozs2Q0FNVDtnQ0FDTixDQUFDLENBQUM7Ozs7O29DQUdKOzs7Ozs7NEJBQ007a0NBRWhCLDhEQUFDYSw0REFBYztrQ0FDWCw0RUFBQ0Qsd0RBQVU7OzhDQUNQLDhEQUFDc0IsR0FBQzs4Q0FBQyxVQUFROzs7Ozt3Q0FBSTs4Q0FFZiw4REFBQ0wsS0FBRztvQ0FBQ0MsR0FBRyxFQUFDLDZCQUE2Qjs7Ozs7d0NBQUc7Ozs7OztnQ0FDaEM7Ozs7OzRCQUNBOzs7Ozs7b0JBRVY7MEJBRVgsOERBQUMzQixtRUFBZTs7OztvQkFBRzswQkFDbkIsOERBQUNGLDBEQUFNOzs7O29CQUFHOztvQkFDWCxDQUNKO0FBQ0gsQ0FBQztBQXJFdUJjLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2ctcG9zdC9bc2x1Z10udHN4P2JjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dFeHRyYXMgZnJvbSAnQGNvbXBvbmVudHMvYmxvZ0V4dHJhcydcbmltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdAY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgU3Vic2NyaXB0aW9uQm94IGZyb20gJ0Bjb21wb25lbnRzL3N1YnNjcmlwdGlvbkJveCdcbmltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tIFwiY29udGVudGZ1bFwiXG5pbXBvcnQgeyBDb250ZW50Qm9keSwgQ29udGVudFN1YkhlYWQsIEV4dHJhUmVhZFdyYXAsIExvYWRpbmdXcmFwLCBQb3N0Q29udGVudEhlYWQsIFBvc3RDb250ZW50U2VjdGlvbiwgUG9zdEltZ0Jhbm5lciwgUG9zdFdyYXAsIFNlZU1vcmVCdG4sIFNlZU1vcmVPdmVyYWxsIH0gZnJvbSAnLi9ibG9ncG9zdC5zdHlsZXMnXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcblxuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX0tFWSAsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgICBjb250ZW50X3R5cGU6ICdwYWdlQmxvZ1Bvc3QnXG4gICAgfSkgXG5cbiAgICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoKGl0ZW1zOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7c2x1ZzogaXRlbXMuZmllbGRzLnNsdWd9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc306YW55KSA9PiB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgICAgY29udGVudF90eXBlOiAncGFnZUJsb2dQb3N0JyxcbiAgICAgICAgJ2ZpZWxkcy5zbHVnJyA6IHBhcmFtcy5zbHVnXG4gICAgfSlcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtjb250ZW50X3R5cGU6ICdwYWdlQmxvZ1Bvc3QnfSlcblxuICAgIGlmKCFpdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6eyBibG9nOiBpdGVtc1swXSwgZXh0cmFCbG9nczogcmVzPy5pdGVtc30sXG4gICAgICAgIHJldmFsaWRhdGU6IDEsXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KHtibG9nLCBleHRyYUJsb2dzfTphbnkpIHtcbiAgICBpZiAoIWJsb2cpIHJldHVybiA8TG9hZGluZ1dyYXA+TG9hZGluZy4uLjwvTG9hZGluZ1dyYXA+XG5cbiAgICBjb25zdCAge2ZlYXR1cmVkSW1hZ2UsIGluZ3JlZGllbnRzLCB0aXRsZSwgY29va2luZ1RpbWUsIGNvbnRlbnQsIGF1dGhvcn0gPSBibG9nPy5maWVsZHNcbiAgICBjb25zb2xlLmxvZyhibG9nKVxuICAgIGNvbnNvbGUubG9nKGV4dHJhQmxvZ3MsICdleHRyYScpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxQb3N0V3JhcD5cbiAgICAgICAgICAgIDxQb3N0SW1nQmFubmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOiR7ZmVhdHVyZWRJbWFnZT8uZmllbGRzPy5maWxlPy51cmx9YH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUG9zdEltZ0Jhbm5lcj5cblxuICAgICAgICAgICAgPFBvc3RDb250ZW50U2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8UG9zdENvbnRlbnRIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9Qb3N0Q29udGVudEhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8Q29udGVudFN1YkhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZS13cmFwXCI+e2F1dGhvcj8uZmllbGRzPy5hdmF0YXI/LmZpZWxkcz8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZS13cmFwXCI+e2F1dGhvcj8uZmllbGRzPy5hdmF0YXI/LnN5cz8udXBkYXRlZEF0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50U3ViSGVhZD5cblxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm9keT5cbiAgICAgICAgICAgICAgICAgICAge2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMoY29udGVudCl9XG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm9keT5cbiAgICAgICAgICAgIDwvUG9zdENvbnRlbnRTZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RXh0cmFSZWFkV3JhcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5Zb3UgY2FuIGFsc28gcmVhZCB0aGVzZTo8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYXMtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUJsb2dzPy5tYXAoKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2dFeHRyYXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtleT17aXRlbT8uc3lzPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1nTGluaz17aXRlbT8uZmllbGRzPy50aHVtYm5haWw/LmZpZWxkcz8uZmlsZT8udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT17aXRlbT8uZmllbGRzPy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvcnRzPXtpdGVtPy5maWVsZHM/LnNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsdWc9e2l0ZW0/LmZpZWxkcz8uc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRXh0cmFSZWFkV3JhcD5cblxuICAgICAgICAgICAgPFNlZU1vcmVPdmVyYWxsPlxuICAgICAgICAgICAgICAgIDxTZWVNb3JlQnRuPlxuICAgICAgICAgICAgICAgICAgICA8cD5TZWUgTW9yZTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvc3ZnL2Fycm93LXJpZ2h0LnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPC9TZWVNb3JlQnRuPlxuICAgICAgICAgICAgPC9TZWVNb3JlT3ZlcmFsbD5cblxuICAgICAgICA8L1Bvc3RXcmFwPlxuXG4gICAgICAgIDxTdWJzY3JpcHRpb25Cb3ggLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiQmxvZ0V4dHJhcyIsIkZvb3RlciIsIkhlYWRlciIsIlN1YnNjcmlwdGlvbkJveCIsIkNvbnRlbnRCb2R5IiwiQ29udGVudFN1YkhlYWQiLCJFeHRyYVJlYWRXcmFwIiwiTG9hZGluZ1dyYXAiLCJQb3N0Q29udGVudEhlYWQiLCJQb3N0Q29udGVudFNlY3Rpb24iLCJQb3N0SW1nQmFubmVyIiwiUG9zdFdyYXAiLCJTZWVNb3JlQnRuIiwiU2VlTW9yZU92ZXJhbGwiLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIiwiQmxvZ1Bvc3QiLCJibG9nIiwiZXh0cmFCbG9ncyIsImZlYXR1cmVkSW1hZ2UiLCJhdXRob3IiLCJmaWVsZHMiLCJpbmdyZWRpZW50cyIsInRpdGxlIiwiY29va2luZ1RpbWUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImZpbGUiLCJ1cmwiLCJoMyIsInAiLCJhdmF0YXIiLCJzeXMiLCJ1cGRhdGVkQXQiLCJoNCIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog-post/[slug].tsx\n"));

/***/ })

});