"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/home/index.styles.ts":
/*!****************************************!*\
  !*** ./src/pages/home/index.styles.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DownloadBtn\": function() { return /* binding */ DownloadBtn; },\n/* harmony export */   \"InvestBanner\": function() { return /* binding */ InvestBanner; },\n/* harmony export */   \"InvestBannerInner\": function() { return /* binding */ InvestBannerInner; },\n/* harmony export */   \"InvestLeftSide\": function() { return /* binding */ InvestLeftSide; },\n/* harmony export */   \"InvestRightSide\": function() { return /* binding */ InvestRightSide; },\n/* harmony export */   \"PioneersImageWrap\": function() { return /* binding */ PioneersImageWrap; },\n/* harmony export */   \"PioneersNameWrap\": function() { return /* binding */ PioneersNameWrap; },\n/* harmony export */   \"PioneersSection\": function() { return /* binding */ PioneersSection; },\n/* harmony export */   \"WrapGrey\": function() { return /* binding */ WrapGrey; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    min-height: 700px;\\n    position: relative;\\n    width: 100%;\\n    background-color: #EEEEEE;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 700px;\\n    \\n    .blue-wrap {\\n        padding: 70px;\\n        background-color: #1F2ADE;\\n        height: 50%;\\n\\n        .text-wrap {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n\\n            h3 {\\n                color: #fff;\\n                font-size: 50px;\\n            }\\n        }\\n    }\\n\\n    .white-wrap {\\n        height: 50%;\\n        background-color: #fff;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    display: flex;\\n    gap: 20px;\\n    width: 60%;\\n    top: 60%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n\\n    .image-box {\\n        flex: 30%;\\n        position: relative;\\n\\n        img {\\n            object-fit: cover;\\n            object-position: center;\\n            width: 100%;\\n            height: 100%;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: -60px;\\n    background-color: #1F2ADE;\\n    padding: 20px 15px;\\n    border-radius: 0% 100% 18% 82% / 100% 0% 100% 0% ;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 19px;\\n    color: #fff;\\n    text-transform: capitalize;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    background-color: #000000;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    padding: 100px 250px;\\n    padding-bottom: 0;\\n    display: flex;\\n    gap: 20px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex: 30%;\\n    padding-bottom: 100px;\\n\\n    .header {\\n        padding-right: 100px;\\n        h2 {\\n            font-size: 50px;\\n            color: #fff;\\n            text-transform: capitalize;\\n        }\\n    }\\n\\n    .content {\\n        padding-top: 30px;\\n        color: #fff;\\n        font-size: 16px;\\n    }\\n\\n    .download-btn-wrap {\\n        padding-top: 40px;\\n        display: flex;\\n        align-items: center;\\n        gap: 15px;\\n    }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    border: solid 1px #fff;\\n    padding: 10px 25px;\\n    border-radius: 35px;\\n    flex: 45%;\\n    display: flex;\\n    justify-content: center;\\n    gap: 10px;\\n    cursor: pointer;\\n\\n    & img {\\n        width: 24px;\\n    }\\n\\n    & .txt-wrap {}\\n\\n    & p {\\n        font-size: 11px;\\n        color: #fff;\\n    }\\n\\n    & h5 {\\n        font-size: 16px;\\n        color: #fff;\\n    }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex: 50%;\\n    position: relative;\\n\\n    img {\\n        width: 100%;\\n        position: absolute;\\n        bottom: 0;\\n    }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\nvar WrapGrey = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar PioneersSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject1());\nvar PioneersImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar PioneersNameWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar InvestBanner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject4());\nvar InvestBannerInner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nvar InvestLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar DownloadBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nvar InvestRightSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC5zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUvQixJQUFNQyxRQUFRLEdBQUdELDZEQUFVLG1CQUtqQztBQUVNLElBQU1HLGVBQWUsR0FBR0gsaUVBQWMsb0JBMEI1QztBQUVNLElBQU1LLGlCQUFpQixHQUFHTCw2REFBVSxvQkFvQjFDO0FBRU0sSUFBTU0sZ0JBQWdCLEdBQUdOLDZEQUFVLG9CQWF6QztBQUVNLElBQU1PLFlBQVksR0FBR1AsaUVBQWMsb0JBSXpDO0FBRU0sSUFBTVEsaUJBQWlCLEdBQUdSLDZEQUFVLG9CQUsxQztBQUVNLElBQU1TLGNBQWMsR0FBR1QsNkRBQVUsb0JBeUJ2QztBQUVNLElBQU1VLFdBQVcsR0FBR1YsNkRBQVUsb0JBeUJwQztBQUVNLElBQU1XLGVBQWUsR0FBR1gsNkRBQVUsb0JBU3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnN0eWxlcy50cz85MTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwR3JleSA9IHN0eWxlZC5kaXYgYFxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuYFxuXG5leHBvcnQgY29uc3QgUGlvbmVlcnNTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb24gYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIFxuICAgIC5ibHVlLXdyYXAge1xuICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyQURFO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcblxuICAgICAgICAudGV4dC13cmFwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2hpdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFBpb25lZXJzSW1hZ2VXcmFwID0gc3R5bGVkLmRpdiBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLmltYWdlLWJveCB7XG4gICAgICAgIGZsZXg6IDMwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQaW9uZWVyc05hbWVXcmFwID0gc3R5bGVkLmRpdiBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMkFERTtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCUgMTAwJSAxOCUgODIlIC8gMTAwJSAwJSAxMDAlIDAlIDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgSW52ZXN0QmFubmVyID0gc3R5bGVkLnNlY3Rpb24gYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuYFxuXG5leHBvcnQgY29uc3QgSW52ZXN0QmFubmVySW5uZXIgPSBzdHlsZWQuZGl2IGBcbiAgICBwYWRkaW5nOiAxMDBweCAyNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEludmVzdExlZnRTaWRlID0gc3R5bGVkLmRpdiBgXG4gICAgZmxleDogMzAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLWJ0bi13cmFwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZEJ0biA9IHN0eWxlZC5kaXYgYFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgZmxleDogNDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJiAudHh0LXdyYXAge31cblxuICAgICYgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJiBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW52ZXN0UmlnaHRTaWRlID0gc3R5bGVkLmRpdiBgXG4gICAgZmxleDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIldyYXBHcmV5IiwiZGl2IiwiUGlvbmVlcnNTZWN0aW9uIiwic2VjdGlvbiIsIlBpb25lZXJzSW1hZ2VXcmFwIiwiUGlvbmVlcnNOYW1lV3JhcCIsIkludmVzdEJhbm5lciIsIkludmVzdEJhbm5lcklubmVyIiwiSW52ZXN0TGVmdFNpZGUiLCJEb3dubG9hZEJ0biIsIkludmVzdFJpZ2h0U2lkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.styles.ts\n"));

/***/ })

});