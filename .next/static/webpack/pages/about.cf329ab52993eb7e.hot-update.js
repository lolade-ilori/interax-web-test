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

/***/ "./src/components/header/header.styles.ts":
/*!************************************************!*\
  !*** ./src/components/header/header.styles.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CancelMenu\": function() { return /* binding */ CancelMenu; },\n/* harmony export */   \"DarkHeaderNav\": function() { return /* binding */ DarkHeaderNav; },\n/* harmony export */   \"DarkWaitlistBtn\": function() { return /* binding */ DarkWaitlistBtn; },\n/* harmony export */   \"HeaderNav\": function() { return /* binding */ HeaderNav; },\n/* harmony export */   \"HeaderOverlay\": function() { return /* binding */ HeaderOverlay; },\n/* harmony export */   \"InteraxDarkHeader\": function() { return /* binding */ InteraxDarkHeader; },\n/* harmony export */   \"InteraxHeader\": function() { return /* binding */ InteraxHeader; },\n/* harmony export */   \"WaitlistBtn\": function() { return /* binding */ WaitlistBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    height: 80px;\\n    width: 100%;\\n    padding: 0 50px;\\n    position: absolute;\\n    z-index: 100;\\n    background-color: #ffffff;\\n    box-shadow: 0px 2px 16px rgba(231, 231, 231, 0.2);\\n\\n    @media only screen and (max-width: 450px) {\\n        padding: 0 20px;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: rgba(0,0,0,0.3);\\n    position: fixed;\\n    z-index: 400;\\n    width: 100%;\\n    height: 100%;\\n    top:0;\\n    left: 0;\\n    display: \",\n        \"\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    box-shadow: unset;\\n    background-color: transparent;\\n    /* z-index: unset; */\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 100%;\\n    position: relative;\\n\\n    .logo-wrap {\\n        /* border: solid 1px green; */\\n        img {\\n            cursor: pointer;\\n        }\\n    }\\n\\n    .action-btns-wrap {\\n        /* border: solid 1px blue; */\\n        position: relative;\\n\\n        ul {\\n            list-style: none;\\n            display: flex;\\n            margin: 0;\\n            padding: 0;\\n            align-items: center;\\n            column-gap: 70px;\\n\\n            @media only screen and (max-width: 1024px) {\\n                column-gap: 40px;\\n            }\\n\\n            @media only screen and (max-width: 767px) {\\n                display: none;\\n            }\\n\\n            li a {\\n                text-decoration: none;\\n                color: \",\n        \";\\n                font-size: 18px;\\n\\n                @media only screen and (max-width: 1024px) {\\n                    font-size: 16px;\\n                }\\n\\n            }\\n        }\\n\\n        .hamburger {\\n            display: none;\\n\\n            img {\\n                width: 25px;\\n                cursor: pointer;\\n            }\\n\\n            @media only screen and (max-width: 767px)  {\\n                display: block;\\n            }\\n        }\\n    }\\n\\n    .mobile-menu {\\n        display: none;\\n\\n        @media only screen and (max-width: 767px)  {\\n            display: block;\\n            width: 40%;\\n            background-color: #1F2ADE;\\n            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);\\n            position: fixed;\\n            top: 0;\\n            right: -800px;\\n            height: 100%;\\n            z-index: 600;\\n            transition: right 0.3s ease;\\n            \\n\\n            &.active-mobile {\\n                right: 0;\\n            }\\n\\n            .inner-wrapper {\\n                padding: 30px;\\n\\n                .nav-list {\\n                    ul {\\n                        list-style: none;\\n\\n                        li {\\n                            padding: 20px 0;\\n                            a {\\n                                text-decoration: none;\\n                                color: #fff;\\n                                font-weight: 600;\\n                                font-size: 14px;\\n                            }\\n                        }\\n                    }\\n                }\\n            }\\n        }\\n\\n        @media only screen and (max-width: 639px) {\\n            width: 50%;\\n        } \\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    .action-btns-wrap {\\n        ul {\\n            li a {\\n                color: #fff;\\n            }\\n        }\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    border: none;\\n    outline: none;\\n    border-radius: 30px;\\n    background-color: #1F2ADE;\\n    color: #fff;\\n    padding: 14px 30px;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: #fff;\\n    color: #1F2ADE;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin: 20px 0;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\nvar InteraxHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject());\nvar HeaderOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1(), function(props) {\n    return props.active ? \"block\" : \"none\";\n});\nvar InteraxDarkHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(InteraxHeader)(_templateObject2());\nvar HeaderNav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject3(), function(props) {\n    return props.theme === \" light\" ? \"#fff\" : \"#000\";\n});\nvar DarkHeaderNav = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HeaderNav)(_templateObject4());\nvar WaitlistBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5());\nvar DarkWaitlistBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WaitlistBtn)(_templateObject6());\nvar CancelMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnN0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUvQixJQUFNQyxhQUFhLEdBQUdELGdFQUFhLG1CQVl6QztBQUVNLElBQU1HLGFBQWEsR0FBR0gsNkRBQVUscUJBUXhCLFNBQUNLLEtBQVM7V0FBS0EsS0FBSyxDQUFDQyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07Q0FBQSxDQUM1RDtBQUVNLElBQU1DLGlCQUFpQixHQUFHUCw2REFBTSxDQUFDQyxhQUFhLENBQUMsb0JBSXJEO0FBRU0sSUFBTU8sU0FBUyxHQUFHUiw2REFBVSxxQkFxQ1YsU0FBQ0ssS0FBUztXQUFLQSxLQUFLLENBQUNLLEtBQUssS0FBSyxRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU07Q0FBQSxDQXFFakY7QUFFTSxJQUFNQyxhQUFhLEdBQUdYLDZEQUFNLENBQUNRLFNBQVMsQ0FBQyxvQkFRN0M7QUFFTSxJQUFNSSxXQUFXLEdBQUdaLGdFQUFhLG9CQVF2QztBQUVNLElBQU1jLGVBQWUsR0FBR2QsNkRBQU0sQ0FBQ1ksV0FBVyxDQUFDLG9CQUdqRDtBQUVNLElBQU1HLFVBQVUsR0FBR2YsNkRBQVUsb0JBS25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc3R5bGVzLnRzPzdkYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEludGVyYXhIZWFkZXIgPSBzdHlsZWQuaGVhZGVyIGBcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjIpO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyT3ZlcmxheSA9IHN0eWxlZC5kaXYgPHthY3RpdmU/OiBib29sZWFufT4gIGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDQwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiAkeyhwcm9wczphbnkpID0+IHByb3BzLmFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZSd9XG5gXG5cbmV4cG9ydCBjb25zdCBJbnRlcmF4RGFya0hlYWRlciA9IHN0eWxlZChJbnRlcmF4SGVhZGVyKSBgXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogei1pbmRleDogdW5zZXQ7ICovXG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJOYXYgPSBzdHlsZWQubmF2IGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubG9nby13cmFwIHtcbiAgICAgICAgLyogYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47ICovXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0bnMtd3JhcCB7XG4gICAgICAgIC8qIGJvcmRlcjogc29saWQgMXB4IGJsdWU7ICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sdW1uLWdhcDogNzBweDtcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkeyhwcm9wczphbnkpID0+IHByb3BzLnRoZW1lID09PSAnIGxpZ2h0JyA/ICcjZmZmJyA6ICcjMDAwJ307XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tb2JpbGUtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjJBREU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IC04MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDYwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAmLmFjdGl2ZS1tb2JpbGUge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcblxuICAgICAgICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9IFxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IERhcmtIZWFkZXJOYXYgPSBzdHlsZWQoSGVhZGVyTmF2KSBgXG4gICAgLmFjdGlvbi1idG5zLXdyYXAge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFdhaXRsaXN0QnRuID0gc3R5bGVkLmJ1dHRvbiBgXG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyQURFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBEYXJrV2FpdGxpc3RCdG4gPSBzdHlsZWQoV2FpdGxpc3RCdG4pIGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMUYyQURFO1xuYFxuXG5leHBvcnQgY29uc3QgQ2FuY2VsTWVudSA9IHN0eWxlZC5kaXYgYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkludGVyYXhIZWFkZXIiLCJoZWFkZXIiLCJIZWFkZXJPdmVybGF5IiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJJbnRlcmF4RGFya0hlYWRlciIsIkhlYWRlck5hdiIsIm5hdiIsInRoZW1lIiwiRGFya0hlYWRlck5hdiIsIldhaXRsaXN0QnRuIiwiYnV0dG9uIiwiRGFya1dhaXRsaXN0QnRuIiwiQ2FuY2VsTWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/header.styles.ts\n"));

/***/ })

});