"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about/about.styles.ts":
/*!*****************************************!*\
  !*** ./src/pages/about/about.styles.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutBanner\": function() { return /* binding */ AboutBanner; },\n/* harmony export */   \"AboutSection\": function() { return /* binding */ AboutSection; },\n/* harmony export */   \"BannerImg\": function() { return /* binding */ BannerImg; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    height: 500px;\\n    background-color: #1F2ADE;\\n    position: relative;\\n\\n    .inner-wrap {\\n        padding-top: 150px;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        .header-wrap {\\n            padding: 0 420px;\\n            h2 {\\n                font-size: 65px;\\n                text-align: center;\\n                color: #fff;\\n                line-height: 70px;\\n                font-family: 'RecoletaAlt-Regular';\\n                font-weight: 500;\\n\\n            }\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top:110%; \\n    left:50%; \\n    transform:translate(-50%, -50%);\\n    width: 70%;\\n    z-index: 400;\\n\\n    img {\\n        height: 100%;\\n        width: 100%;\\n        border-top-left-radius: 30px;\\n        border-bottom-right-radius: 30px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: #fff;\\n    min-height: 700px;\\n    position: relative;\\n    width: 100%;\\n\\n    .absolute-img {\\n        width: 90%;\\n        height: 70%;\\n        bottom: 0;\\n        position: absolute;\\n    }\\n\\n    .subsection {\\n        padding: 0 250px;\\n        padding-top: 380px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar AboutBanner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar BannerImg = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nvar AboutSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQvYWJvdXQuc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsV0FBVyxHQUFHRCw2REFBVSxtQkF5QnBDO0FBRU0sSUFBTUcsU0FBUyxHQUFHSCw2REFBVSxvQkFjbEM7QUFFTSxJQUFNSSxZQUFZLEdBQUdKLGlFQUFjLG9CQWlCekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0L2Fib3V0LnN0eWxlcy50cz8zMzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBBYm91dEJhbm5lciA9IHN0eWxlZC5kaXYgYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMkFERTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaW5uZXItd3JhcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmhlYWRlci13cmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDIwcHg7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JlY29sZXRhQWx0LVJlZ3VsYXInO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJhbm5lckltZyA9IHN0eWxlZC5kaXYgYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTEwJTsgXG4gICAgbGVmdDo1MCU7IFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB6LWluZGV4OiA0MDA7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBBYm91dFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbiBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuYWJzb2x1dGUtaW1nIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMCAyNTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDM4MHB4O1xuICAgIH1cbmBcblxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkFib3V0QmFubmVyIiwiZGl2IiwiQmFubmVySW1nIiwiQWJvdXRTZWN0aW9uIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about/about.styles.ts\n"));

/***/ })

});