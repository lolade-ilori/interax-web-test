"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./src/pages/team/team.styles.ts":
/*!***************************************!*\
  !*** ./src/pages/team/team.styles.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderText\": function() { return /* binding */ HeaderText; },\n/* harmony export */   \"OurTeamWrap\": function() { return /* binding */ OurTeamWrap; },\n/* harmony export */   \"TeamOverallWrap\": function() { return /* binding */ TeamOverallWrap; },\n/* harmony export */   \"TextSection\": function() { return /* binding */ TextSection; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: #EEEEEE;\\n    width: 100%;\\n    height: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: transparent;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    padding-top: 130px;\\n    padding-bottom: 100px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    justify-content: center;\\n    color: #1F2ADE;\\n    font-size: 13px;\\n    font-weight: 600;\\n    border-radius: 30px;\\n    min-width: 200px;\\n    padding: 10px 0;\\n    background-color: rgba(31, 42, 222, 0.1);\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    justify-content: center;\\n    padding: 0 340px;\\n    padding-top: 40px;\\n\\n    h2 {\\n        color: #1F2ADE;\\n        font-size: 65px;\\n        text-align: center;\\n        font-family: 'RecoletaAlt-Regular';\\n        font-weight: 500;\\n        line-height: 58px;\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar TeamOverallWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\nvar TextSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nvar OurTeamWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVhbS90ZWFtLnN0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxJQUFNQyxlQUFlLEdBQUdELGlFQUFjLG1CQUk1QztBQUNNLElBQU1HLFdBQVcsR0FBR0gsNkRBQVUsb0JBUXBDO0FBRU0sSUFBTUssV0FBVyxHQUFHTCw2REFBVSxvQkFVcEM7QUFFTSxJQUFNTSxVQUFVLEdBQUdOLDZEQUFVLG9CQWNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGVhbS90ZWFtLnN0eWxlcy50cz8wYTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBUZWFtT3ZlcmFsbFdyYXAgPSBzdHlsZWQuc2VjdGlvbiBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5gXG5leHBvcnQgY29uc3QgVGV4dFNlY3Rpb24gPSBzdHlsZWQuZGl2IGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgT3VyVGVhbVdyYXAgPSBzdHlsZWQuZGl2IGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjMUYyQURFO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDIsIDIyMiwgMC4xKTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuZGl2IGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMzQwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjMUYyQURFO1xuICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSZWNvbGV0YUFsdC1SZWd1bGFyJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUZWFtT3ZlcmFsbFdyYXAiLCJzZWN0aW9uIiwiVGV4dFNlY3Rpb24iLCJkaXYiLCJPdXJUZWFtV3JhcCIsIkhlYWRlclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/team/team.styles.ts\n"));

/***/ })

});