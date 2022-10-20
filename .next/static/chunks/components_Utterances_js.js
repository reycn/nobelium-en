"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Utterances_js"],{

/***/ "./components/Utterances.js":
/*!**********************************!*\
  !*** ./components/Utterances.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blog.config */ \"./blog.config.js\");\n/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blog_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Utterances = function(param) {\n    var issueTerm = param.issueTerm, layout = param.layout;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var theme = (_blog_config__WEBPACK_IMPORTED_MODULE_1___default().appearance) === 'auto' ? 'preferred-color-scheme' : (_blog_config__WEBPACK_IMPORTED_MODULE_1___default().appearance) === 'light' ? 'github-light' : 'github-dark';\n        var script = document.createElement('script');\n        var anchor = document.getElementById('comments');\n        script.setAttribute('src', 'https://utteranc.es/client.js');\n        script.setAttribute('crossorigin', 'anonymous');\n        script.setAttribute('async', true);\n        script.setAttribute('repo', (_blog_config__WEBPACK_IMPORTED_MODULE_1___default().comment.utterancesConfig.repo));\n        script.setAttribute('issue-term', issueTerm);\n        script.setAttribute('theme', theme);\n        anchor.appendChild(script);\n        return function() {\n            anchor.innerHTML = '';\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"comments\",\n            className: layout && layout === 'fullWidth' ? '' : 'md:-ml-16',\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"utterances-frame\"\n            }, void 0, false, {\n                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Utterances.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Utterances.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Utterances, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Utterances;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utterances);\nvar _c;\n$RefreshReg$(_c, \"Utterances\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1V0dGVyYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDQzs7O0FBQ2pDLEdBQUssQ0FBQ0UsVUFBVSxHQUFHLFFBQVEsUUFBbUIsQ0FBQztRQUF6QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTs7SUFDckNILGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDSSxLQUFLLEdBQ1RMLGdFQUFlLEtBQUssQ0FBTSxRQUN0QixDQUF3QiwwQkFDeEJBLGdFQUFlLEtBQUssQ0FBTyxTQUN6QixDQUFjLGdCQUNkLENBQWE7UUFDckIsR0FBSyxDQUFDTyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVE7UUFDOUMsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLENBQVU7UUFDakRKLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDLENBQUssTUFBRSxDQUErQjtRQUMxREwsTUFBTSxDQUFDSyxZQUFZLENBQUMsQ0FBYSxjQUFFLENBQVc7UUFDOUNMLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDLENBQU8sUUFBRSxJQUFJO1FBQ2pDTCxNQUFNLENBQUNLLFlBQVksQ0FBQyxDQUFNLE9BQUVaLG1GQUFrQztRQUM5RE8sTUFBTSxDQUFDSyxZQUFZLENBQUMsQ0FBWSxhQUFFVCxTQUFTO1FBQzNDSSxNQUFNLENBQUNLLFlBQVksQ0FBQyxDQUFPLFFBQUVQLEtBQUs7UUFDbENLLE1BQU0sQ0FBQ00sV0FBVyxDQUFDVCxNQUFNO1FBQ3pCLE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWkcsTUFBTSxDQUFDTyxTQUFTLEdBQUcsQ0FBRTtRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07OEZBRURDLENBQUc7WUFDRkMsRUFBRSxFQUFDLENBQVU7WUFDYkMsU0FBUyxFQUFFaEIsTUFBTSxJQUFJQSxNQUFNLEtBQUssQ0FBVyxhQUFHLENBQUUsSUFBRyxDQUFXO2tHQUU3RGMsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7QUFJekMsQ0FBQztHQS9CS2xCLFVBQVU7S0FBVkEsVUFBVTtBQWlDaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VdHRlcmFuY2VzLmpzPzI4N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJMT0cgZnJvbSAnQC9ibG9nLmNvbmZpZydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuY29uc3QgVXR0ZXJhbmNlcyA9ICh7IGlzc3VlVGVybSwgbGF5b3V0IH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9XG4gICAgICBCTE9HLmFwcGVhcmFuY2UgPT09ICdhdXRvJ1xuICAgICAgICA/ICdwcmVmZXJyZWQtY29sb3Itc2NoZW1lJ1xuICAgICAgICA6IEJMT0cuYXBwZWFyYW5jZSA9PT0gJ2xpZ2h0J1xuICAgICAgICAgID8gJ2dpdGh1Yi1saWdodCdcbiAgICAgICAgICA6ICdnaXRodWItZGFyaydcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzJylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2FzeW5jJywgdHJ1ZSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdyZXBvJywgQkxPRy5jb21tZW50LnV0dGVyYW5jZXNDb25maWcucmVwbylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpc3N1ZS10ZXJtJywgaXNzdWVUZXJtKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpXG4gICAgYW5jaG9yLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5jaG9yLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICB9KVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiY29tbWVudHNcIlxuICAgICAgICBjbGFzc05hbWU9e2xheW91dCAmJiBsYXlvdXQgPT09ICdmdWxsV2lkdGgnID8gJycgOiAnbWQ6LW1sLTE2J31cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1dHRlcmFuY2VzLWZyYW1lXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdHRlcmFuY2VzXG4iXSwibmFtZXMiOlsiQkxPRyIsInVzZUVmZmVjdCIsIlV0dGVyYW5jZXMiLCJpc3N1ZVRlcm0iLCJsYXlvdXQiLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhbmNob3IiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImNvbW1lbnQiLCJ1dHRlcmFuY2VzQ29uZmlnIiwicmVwbyIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Utterances.js\n");

/***/ })

}]);