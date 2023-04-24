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
exports.id = "pages/api/submit";
exports.ids = ["pages/api/submit"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./src/pages/api/submit.ts":
/*!*********************************!*\
  !*** ./src/pages/api/submit.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n    }\n    const body = req.body;\n    try {\n        const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n            credentials: {\n                client_email: process.env.GOOGLE_CLIENT_EMAIL,\n                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\")\n            },\n            scopes: [\n                \"https://www.googleapis.com/auth/drive\",\n                \"https://www.googleapis.com/auth/drive.file\",\n                \"https://www.googleapis.com/auth/spreadsheets\"\n            ]\n        });\n        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n            auth,\n            version: \"v4\"\n        });\n        const response = await sheets.spreadsheets.values.append({\n            spreadsheetId: process.env.GOOGLE_SHEET_ID,\n            range: \"A1:D1\",\n            valueInputOption: \"USER_ENTERED\",\n            requestBody: {\n                values: [\n                    [\n                        body.name,\n                        body.email,\n                        body.phone,\n                        body.message\n                    ]\n                ]\n            }\n        });\n        return res.status(201).json({\n            data: response.data\n        });\n    } catch (e) {\n        return res.status(e.code).send({\n            message: e.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1Ym1pdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0M7QUFTbkIsZUFBZUMsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDRCQUE0QjtTQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELE1BQU1DLElBQUksR0FBR04sR0FBRyxDQUFDTSxJQUFJO0lBRXJCLElBQUk7UUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSVQsOERBQXNCLENBQUM7WUFDcENXLFdBQVcsRUFBRTtnQkFDVEMsWUFBWSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsbUJBQW1CO2dCQUM3Q0MsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCLEVBQUVDLE9BQU8sU0FBUyxJQUFJLENBQUM7YUFDckU7WUFDREMsTUFBTSxFQUFFO2dCQUNKLHVDQUF1QztnQkFDdkMsNENBQTRDO2dCQUM1Qyw4Q0FBOEM7YUFDakQ7U0FDSixDQUFDO1FBRUYsTUFBTUMsTUFBTSxHQUFHcEIscURBQWEsQ0FBQztZQUN6QlMsSUFBSTtZQUNKWSxPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDO1FBRUYsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csWUFBWSxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQztZQUNyREMsYUFBYSxFQUFFYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsZUFBZTtZQUMxQ0MsS0FBSyxFQUFFLE9BQU87WUFDZEMsZ0JBQWdCLEVBQUUsY0FBYztZQUNoQ0MsV0FBVyxFQUFFO2dCQUNUTixNQUFNLEVBQUU7b0JBQ0o7d0JBQUNoQixJQUFJLENBQUN1QixJQUFJO3dCQUFFdkIsSUFBSSxDQUFDd0IsS0FBSzt3QkFBRXhCLElBQUksQ0FBQ3lCLEtBQUs7d0JBQUV6QixJQUFJLENBQUNELE9BQU87cUJBQUM7aUJBQ3BEO2FBQ0o7U0FDSixDQUFDO1FBRUYsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM2QixJQUFJLENBQUM7WUFDeEJDLElBQUksRUFBRWIsUUFBUSxDQUFDYSxJQUFJO1NBQ3RCLENBQUM7SUFDTixFQUFDLE9BQU9DLENBQUMsRUFBTztRQUNaLE9BQU9qQyxHQUFHLENBQUNFLE1BQU0sQ0FBQytCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMvQixJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFNkIsQ0FBQyxDQUFDN0IsT0FBTztTQUFDLENBQUM7SUFDeEQsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmF4LWFwcC8uL3NyYy9wYWdlcy9hcGkvc3VibWl0LnRzPzdiOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7Z29vZ2xlfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xuXG50eXBlIFNoZWV0Rm9ybSA9IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgcGhvbmU6IHN0cmluZ1xuICAgIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5zZW5kKHsgbWVzc2FnZTogJ09ubHkgUE9TVCByZXF1ZXN0cyBhbGxvd2VkJyB9KVxuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSBhcyBTaGVldEZvcm1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBuZXcgZ29vZ2xlLmF1dGguR29vZ2xlQXV0aCh7XG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9FTUFJTCxcbiAgICAgICAgICAgICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuR09PR0xFX1BSSVZBVEVfS0VZPy5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZXM6IFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZScsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUuZmlsZScsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoe1xuICAgICAgICAgICAgYXV0aCxcbiAgICAgICAgICAgIHZlcnNpb246ICd2NCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1NIRUVUX0lELFxuICAgICAgICAgICAgcmFuZ2U6ICdBMTpEMScsXG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIFtib2R5Lm5hbWUsIGJvZHkuZW1haWwsIGJvZHkucGhvbmUsIGJvZHkubWVzc2FnZV1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhXG4gICAgICAgIH0pXG4gICAgfWNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5jb2RlKS5zZW5kKHttZXNzYWdlOiBlLm1lc3NhZ2V9KVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJnb29nbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJib2R5IiwiYXV0aCIsIkdvb2dsZUF1dGgiLCJjcmVkZW50aWFscyIsImNsaWVudF9lbWFpbCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJHT09HTEVfUFJJVkFURV9LRVkiLCJyZXBsYWNlIiwic2NvcGVzIiwic2hlZXRzIiwidmVyc2lvbiIsInJlc3BvbnNlIiwic3ByZWFkc2hlZXRzIiwidmFsdWVzIiwiYXBwZW5kIiwic3ByZWFkc2hlZXRJZCIsIkdPT0dMRV9TSEVFVF9JRCIsInJhbmdlIiwidmFsdWVJbnB1dE9wdGlvbiIsInJlcXVlc3RCb2R5IiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJqc29uIiwiZGF0YSIsImUiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/submit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/submit.ts"));
module.exports = __webpack_exports__;

})();