"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/waitlist",{

/***/ "./src/pages/waitlist/waitlist.styles.ts":
/*!***********************************************!*\
  !*** ./src/pages/waitlist/waitlist.styles.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WaitlistHeader\": function() { return /* binding */ WaitlistHeader; },\n/* harmony export */   \"WaitlistTxtWrap\": function() { return /* binding */ WaitlistTxtWrap; },\n/* harmony export */   \"WaitlistWrap\": function() { return /* binding */ WaitlistWrap; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    height: 100vh;\\n    width: 100%;\\n    border: solid 1px #1F2ADE;\\n    background-color: #1F2ADE;\\n    position: relative;\\n\\n    .waitlist-inner {\\n        position: relative;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    padding: 40px 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n    img {\\n\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 70px;\\n    justify-content: center;\\n    align-items: center;\\n    row-gap: 30px;\\n\\n    h4 {\\n        color: #fff;\\n        font-family: 'RecoletaAlt-Regular';\\n        font-size: 30px;\\n        font-weight: 500;\\n        text-align: center;\\n    }\\n\\n    h2 {\\n        color: #fff;\\n        font-size: 45px;\\n        font-weight: 500;\\n        text-align: center;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar WaitlistWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\nvar WaitlistHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nvar WaitlistTxtWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2FpdGxpc3Qvd2FpdGxpc3Quc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsWUFBWSxHQUFHRCxpRUFBYyxtQkFVekM7QUFFTSxJQUFNRyxjQUFjLEdBQUdILDZEQUFVLG9CQVN2QztBQUVNLElBQU1LLGVBQWUsR0FBR0wsNkRBQVUsb0JBc0J4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd2FpdGxpc3Qvd2FpdGxpc3Quc3R5bGVzLnRzPzRmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFdhaXRsaXN0V3JhcCA9IHN0eWxlZC5zZWN0aW9uIGBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMxRjJBREU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMkFERTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAud2FpdGxpc3QtaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgV2FpdGxpc3RIZWFkZXIgPSBzdHlsZWQuZGl2IGBcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcblxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFdhaXRsaXN0VHh0V3JhcCA9IHN0eWxlZC5kaXYgYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMzBweDtcblxuICAgIGg0IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmVjb2xldGFBbHQtUmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiV2FpdGxpc3RXcmFwIiwic2VjdGlvbiIsIldhaXRsaXN0SGVhZGVyIiwiZGl2IiwiV2FpdGxpc3RUeHRXcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/waitlist/waitlist.styles.ts\n"));

/***/ })

});