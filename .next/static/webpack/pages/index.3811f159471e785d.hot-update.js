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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blog.config */ \"./blog.config.js\");\n/* harmony import */ var _blog_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/locale */ \"./lib/locale.js\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar NavBar = function() {\n    var _this1 = _this;\n    _s();\n    var locale = (0,_lib_locale__WEBPACK_IMPORTED_MODULE_4__.useLocale)();\n    var links = [\n        {\n            id: 0,\n            name: locale.NAV.INDEX,\n            to: (_blog_config__WEBPACK_IMPORTED_MODULE_3___default().path) || '/',\n            show: true\n        },\n        {\n            id: 1,\n            name: locale.NAV.SEARCH,\n            to: '/search',\n            show: true\n        },\n        {\n            id: 2,\n            name: locale.NAV.ABOUT,\n            to: '/about',\n            show: (_blog_config__WEBPACK_IMPORTED_MODULE_3___default().showAbout)\n        },\n        {\n            id: 3,\n            name: locale.NAV.LANG,\n            to: locale.NAV.LANGV,\n            show: true\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-shrink-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-row\",\n            children: links.map(function(link) {\n                return link.show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"block ml-4 text-black dark:text-gray-50 nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: link.to,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: link.name\n                        }, void 0, false, {\n                            fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                            lineNumber: 25,\n                            columnNumber: 19\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, _this1)\n                }, link.id, false, {\n                    fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(NavBar, \"ubkSS9Gz1bw7UV2c73rm/bCUdh8=\", false, function() {\n    return [\n        _lib_locale__WEBPACK_IMPORTED_MODULE_4__.useLocale\n    ];\n});\n_c = NavBar;\nvar Header = function(param1) {\n    var navBarTitle = param1.navBarTitle, fullWidth = param1.fullWidth;\n    _s1();\n    var useSticky = !(_blog_config__WEBPACK_IMPORTED_MODULE_3___default().autoCollapsedNavBar);\n    var navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var sentinalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    var handler = function(param) {\n        var _param = _slicedToArray(param, 1), entry = _param[0];\n        if (navRef && navRef.current && useSticky) {\n            if (!entry.isIntersecting && entry !== undefined) {\n                var ref;\n                (ref = navRef.current) === null || ref === void 0 ? void 0 : ref.classList.add('sticky-nav-full');\n            } else {\n                var ref1;\n                (ref1 = navRef.current) === null || ref1 === void 0 ? void 0 : ref1.classList.remove('sticky-nav-full');\n            }\n        } else {\n            var ref2;\n            (ref2 = navRef.current) === null || ref2 === void 0 ? void 0 : ref2.classList.add('remove-sticky');\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var obvserver = new window.IntersectionObserver(handler);\n        obvserver.observe(sentinalRef.current);\n    // Don't touch this, I have no idea how it works XD\n    // return () => {\n    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)\n    // }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        sentinalRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"observer-element h-4 md:h-12\",\n                ref: sentinalRef\n            }, void 0, false, {\n                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 \".concat(!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'),\n                id: \"sticky-nav\",\n                ref: navRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    \"aria-label\": (_blog_config__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            width: \"24\",\n                                            height: \"24\",\n                                            viewBox: \"0 0 24 24\",\n                                            fill: \"none\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                                    width: \"24\",\n                                                    height: \"24\",\n                                                    className: \"fill-current text-black dark:text-white\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                                    width: \"24\",\n                                                    height: \"24\",\n                                                    fill: \"url(#paint0_radial)\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"radialGradient\", {\n                                                        id: \"paint0_radial\",\n                                                        cx: \"0\",\n                                                        cy: \"0\",\n                                                        r: \"1\",\n                                                        gradientUnits: \"userSpaceOnUse\",\n                                                        gradientTransform: \"rotate(45) scale(39.598)\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                stopColor: \"#CFCFCF\",\n                                                                stopOpacity: \"0.6\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 23\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                offset: \"1\",\n                                                                stopColor: \"#E9E9E9\",\n                                                                stopOpacity: \"0\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this),\n                            navBarTitle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 font-medium text-day dark:text-night header-name\",\n                                children: navBarTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 font-medium text-day dark:text-night header-name\",\n                                children: [\n                                    (_blog_config__WEBPACK_IMPORTED_MODULE_3___default().title),\n                                    \",\",\n                                    ' ',\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-normal\",\n                                        children: (_blog_config__WEBPACK_IMPORTED_MODULE_3___default().description)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {}, void 0, false, {\n                        fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rey/Documents/Git/nobelium.en/components/Header.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s1(Header, \"7JghGA1Z4duW6C8lte961coKntc=\");\n_c1 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNiO0FBQ0k7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7OztJQUNwQixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysc0RBQVM7SUFDeEIsR0FBSyxDQUFDRyxLQUFLLEdBQUcsQ0FBQztRQUNiLENBQUM7WUFBQ0MsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFSCxNQUFNLENBQUNJLEdBQUcsQ0FBQ0MsS0FBSztZQUFFQyxFQUFFLEVBQUVULDBEQUFTLElBQUksQ0FBRztZQUFFVyxJQUFJLEVBQUUsSUFBSTtRQUFDLENBQUM7UUFDbkUsQ0FBQztZQUFDTixFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDSyxNQUFNO1lBQUVILEVBQUUsRUFBRSxDQUFTO1lBQUVFLElBQUksRUFBRSxJQUFJO1FBQUMsQ0FBQztRQUM3RCxDQUFDO1lBQUNOLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRUgsTUFBTSxDQUFDSSxHQUFHLENBQUNNLEtBQUs7WUFBRUosRUFBRSxFQUFFLENBQVE7WUFBRUUsSUFBSSxFQUFFWCwrREFBYztRQUFDLENBQUM7UUFDckUsQ0FBQztZQUFDSyxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDUSxJQUFJO1lBQUVOLEVBQUUsRUFBRU4sTUFBTSxDQUFDSSxHQUFHLENBQUNTLEtBQUs7WUFBRUwsSUFBSSxFQUFFLElBQUk7UUFBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxNQUFNLDZFQUNITSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFlOzhGQUMzQkMsQ0FBRTtZQUFDRCxTQUFTLEVBQUMsQ0FBZTtzQkFDMUJkLEtBQUssQ0FBQ2dCLEdBQUcsQ0FDUkMsUUFDVixDQURVQSxJQUFJO2dCQUNGQSxNQUFNLENBQU5BLElBQUksQ0FBQ1YsSUFBSSxnRkFDTlcsQ0FBRTtvQkFFREosU0FBUyxFQUFDLENBQTZDOzBHQUV0RG5CLGtEQUFJO3dCQUFDd0IsSUFBSSxFQUFFRixJQUFJLENBQUNaLEVBQUU7OEdBQ2hCZSxDQUFDO3NDQUFFSCxJQUFJLENBQUNmLElBQUk7Ozs7Ozs7Ozs7O21CQUpWZSxJQUFJLENBQUNoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBWTVCLENBQUM7R0EzQktILE1BQU07O1FBQ0tELGtEQUFTOzs7S0FEcEJDLE1BQU07QUE2QlosR0FBSyxDQUFDdUIsTUFBTSxHQUFHLFFBQVEsU0FBd0IsQ0FBQztRQUE5QkMsV0FBVyxVQUFYQSxXQUFXLEVBQUVDLFNBQVMsVUFBVEEsU0FBUzs7SUFDdEMsR0FBSyxDQUFDQyxTQUFTLElBQUk1Qix5RUFBd0I7SUFDM0MsR0FBSyxDQUFDOEIsTUFBTSxHQUFHaEMsNkNBQU0sQ0FBQyxJQUFJO0lBQzFCLEdBQUssQ0FBQ2lDLFdBQVcsR0FBR2pDLDZDQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdCLEdBQUssQ0FBQ2tDLE9BQU8sR0FBRyxRQUFRLFFBQUssQ0FBQzsrQ0FBWkMsS0FBSztRQUNyQixFQUFFLEVBQUVILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxPQUFPLElBQUlOLFNBQVMsRUFBRSxDQUFDO1lBQzFDLEVBQUUsR0FBR0ssS0FBSyxDQUFDRSxjQUFjLElBQUlGLEtBQUssS0FBS0csU0FBUyxFQUFFLENBQUM7b0JBQ2pETixHQUFjO2lCQUFkQSxHQUFjLEdBQWRBLE1BQU0sQ0FBQ0ksT0FBTyxjQUFkSixHQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLElBQUksQ0FBSkEsQ0FBeUIsR0FBekJBLEdBQWMsQ0FBRU8sU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBaUI7WUFDakQsQ0FBQyxNQUFNLENBQUM7b0JBQ05SLElBQWM7aUJBQWRBLElBQWMsR0FBZEEsTUFBTSxDQUFDSSxPQUFPLGNBQWRKLElBQWMsS0FBZEEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBYyxDQUFFTyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFpQjtZQUNwRCxDQUFDO1FBQ0gsQ0FBQyxNQUFNLENBQUM7Z0JBQ05ULElBQWM7YUFBZEEsSUFBYyxHQUFkQSxNQUFNLENBQUNJLE9BQU8sY0FBZEosSUFBYyxLQUFkQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFjLENBQUVPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQWU7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFDRHpDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDMkMsU0FBUyxHQUFHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQ1YsT0FBTztRQUN6RFEsU0FBUyxDQUFDRyxPQUFPLENBQUNaLFdBQVcsQ0FBQ0csT0FBTztJQUNyQyxFQUFtRDtJQUNuRCxFQUFpQjtJQUNqQixFQUFzRTtJQUN0RSxFQUFJO0lBQ0osRUFBdUQ7SUFDekQsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLFdBQVc7SUFBQSxDQUFDO0lBQ2hCLE1BQU07O3dGQUVEZCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBOEI7Z0JBQUMwQixHQUFHLEVBQUViLFdBQVc7Ozs7Ozt3RkFDN0RkLENBQUc7Z0JBQ0ZDLFNBQVMsRUFBRyxDQUF5RywyR0FFcEgsUUFERVMsU0FBUyxHQUFHLENBQWdCLGtCQUFHLENBQWU7Z0JBRWpEdEIsRUFBRSxFQUFDLENBQVk7Z0JBQ2Z1QyxHQUFHLEVBQUVkLE1BQU07O2dHQUVWYixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBbUI7O3dHQUMvQm5CLGtEQUFJO2dDQUFDd0IsSUFBSSxFQUFDLENBQUc7c0hBQ1hDLENBQUM7b0NBQUNxQixDQUFVLGFBQUU3QywyREFBVTswSEFDdEJpQixDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBSzs4SEFDakI2QixDQUFHOzRDQUNGQyxLQUFLLEVBQUMsQ0FBSTs0Q0FDVkMsTUFBTSxFQUFDLENBQUk7NENBQ1hDLE9BQU8sRUFBQyxDQUFXOzRDQUNuQkMsSUFBSSxFQUFDLENBQU07NENBQ1hDLEtBQUssRUFBQyxDQUE0Qjs7NEhBRWpDQyxDQUFJO29EQUNITCxLQUFLLEVBQUMsQ0FBSTtvREFDVkMsTUFBTSxFQUFDLENBQUk7b0RBQ1gvQixTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs0SEFFcERtQyxDQUFJO29EQUFDTCxLQUFLLEVBQUMsQ0FBSTtvREFBQ0MsTUFBTSxFQUFDLENBQUk7b0RBQUNFLElBQUksRUFBQyxDQUFxQjs7Ozs7OzRIQUN0REcsQ0FBSTswSUFDRkMsQ0FBYzt3REFDYmxELEVBQUUsRUFBQyxDQUFlO3dEQUNsQm1ELEVBQUUsRUFBQyxDQUFHO3dEQUNOQyxFQUFFLEVBQUMsQ0FBRzt3REFDTkMsQ0FBQyxFQUFDLENBQUc7d0RBQ0xDLGFBQWEsRUFBQyxDQUFnQjt3REFDOUJDLGlCQUFpQixFQUFDLENBQTBCOzt3SUFFM0NDLENBQUk7Z0VBQUNDLFNBQVMsRUFBQyxDQUFTO2dFQUFDQyxXQUFXLEVBQUMsQ0FBSzs7Ozs7O3dJQUMxQ0YsQ0FBSTtnRUFBQ0csTUFBTSxFQUFDLENBQUc7Z0VBQUNGLFNBQVMsRUFBQyxDQUFTO2dFQUFDQyxXQUFXLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTy9EckMsV0FBVywrRUFFVHVDLENBQUM7Z0NBQUMvQyxTQUFTLEVBQUMsQ0FBdUQ7MENBQ2pFUSxXQUFXOzs7OztvSEFJYnVDLENBQUM7Z0NBQUMvQyxTQUFTLEVBQUMsQ0FBdUQ7O29DQUNqRWxCLDJEQUFVO29DQUFDLENBQUM7b0NBQUMsQ0FBRztnSEFDaEJrRSxDQUFJO3dDQUFDaEQsU0FBUyxFQUFDLENBQWE7a0RBQUVsQixpRUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FJcERFLE1BQU07Ozs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0lBckZLdUIsTUFBTTtNQUFOQSxNQUFNO0FBdUZaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBCTE9HIGZyb20gJ0AvYmxvZy5jb25maWcnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICdAL2xpYi9sb2NhbGUnXG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gdXNlTG9jYWxlKClcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgeyBpZDogMCwgbmFtZTogbG9jYWxlLk5BVi5JTkRFWCwgdG86IEJMT0cucGF0aCB8fCAnLycsIHNob3c6IHRydWUgfSxcbiAgICB7IGlkOiAxLCBuYW1lOiBsb2NhbGUuTkFWLlNFQVJDSCwgdG86ICcvc2VhcmNoJywgc2hvdzogdHJ1ZSB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6IGxvY2FsZS5OQVYuQUJPVVQsIHRvOiAnL2Fib3V0Jywgc2hvdzogQkxPRy5zaG93QWJvdXQgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBsb2NhbGUuTkFWLkxBTkcsIHRvOiBsb2NhbGUuTkFWLkxBTkdWLCBzaG93OiB0cnVlIH1cbiAgXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAge2xpbmtzLm1hcChcbiAgICAgICAgICBsaW5rID0+XG4gICAgICAgICAgICBsaW5rLnNob3cgJiYgKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2xpbmsuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWwtNCB0ZXh0LWJsYWNrIGRhcms6dGV4dC1ncmF5LTUwIG5hdlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLnRvfT5cbiAgICAgICAgICAgICAgICAgIDxhPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgSGVhZGVyID0gKHsgbmF2QmFyVGl0bGUsIGZ1bGxXaWR0aCB9KSA9PiB7XG4gIGNvbnN0IHVzZVN0aWNreSA9ICFCTE9HLmF1dG9Db2xsYXBzZWROYXZCYXJcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHNlbnRpbmFsUmVmID0gdXNlUmVmKFtdKVxuICBjb25zdCBoYW5kbGVyID0gKFtlbnRyeV0pID0+IHtcbiAgICBpZiAobmF2UmVmICYmIG5hdlJlZi5jdXJyZW50ICYmIHVzZVN0aWNreSkge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5hdlJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdzdGlja3ktbmF2LWZ1bGwnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS1uYXYtZnVsbCcpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdlJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtc3RpY2t5JylcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnZzZXJ2ZXIgPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXIpXG4gICAgb2J2c2VydmVyLm9ic2VydmUoc2VudGluYWxSZWYuY3VycmVudClcbiAgICAvLyBEb24ndCB0b3VjaCB0aGlzLCBJIGhhdmUgbm8gaWRlYSBob3cgaXQgd29ya3MgWERcbiAgICAvLyByZXR1cm4gKCkgPT4ge1xuICAgIC8vICAgaWYgKHNlbnRpbmFsUmVmLmN1cnJlbnQpIG9idnNlcnZlci51bm9ic2VydmUoc2VudGluYWxSZWYuY3VycmVudClcbiAgICAvLyB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc2VudGluYWxSZWZdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9ic2VydmVyLWVsZW1lbnQgaC00IG1kOmgtMTJcIiByZWY9e3NlbnRpbmFsUmVmfT48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgc3RpY2t5LW5hdiBtLWF1dG8gdy1mdWxsIGgtNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMiBtZDptYi0xMiBweS04IGJnLW9wYWNpdHktNjAgJHtcbiAgICAgICAgICAhZnVsbFdpZHRoID8gJ21heC13LTN4bCBweC00JyA6ICdweC00IG1kOnB4LTI0J1xuICAgICAgICB9YH1cbiAgICAgICAgaWQ9XCJzdGlja3ktbmF2XCJcbiAgICAgICAgcmVmPXtuYXZSZWZ9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD17QkxPRy50aXRsZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02XCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cInVybCgjcGFpbnQwX3JhZGlhbClcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX3JhZGlhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgIHI9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKDQ1KSBzY2FsZSgzOS41OTgpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNDRkNGQ0ZcIiBzdG9wT3BhY2l0eT1cIjAuNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNFOUU5RTlcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge25hdkJhclRpdGxlXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgZm9udC1tZWRpdW0gdGV4dC1kYXkgZGFyazp0ZXh0LW5pZ2h0IGhlYWRlci1uYW1lXCI+XG4gICAgICAgICAgICAgIHtuYXZCYXJUaXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIGZvbnQtbWVkaXVtIHRleHQtZGF5IGRhcms6dGV4dC1uaWdodCBoZWFkZXItbmFtZVwiPlxuICAgICAgICAgICAgICB7QkxPRy50aXRsZX0seycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj57QkxPRy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwiQkxPRyIsInVzZUxvY2FsZSIsIk5hdkJhciIsImxvY2FsZSIsImxpbmtzIiwiaWQiLCJuYW1lIiwiTkFWIiwiSU5ERVgiLCJ0byIsInBhdGgiLCJzaG93IiwiU0VBUkNIIiwiQUJPVVQiLCJzaG93QWJvdXQiLCJMQU5HIiwiTEFOR1YiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImxpbmsiLCJsaSIsImhyZWYiLCJhIiwiSGVhZGVyIiwibmF2QmFyVGl0bGUiLCJmdWxsV2lkdGgiLCJ1c2VTdGlja3kiLCJhdXRvQ29sbGFwc2VkTmF2QmFyIiwibmF2UmVmIiwic2VudGluYWxSZWYiLCJoYW5kbGVyIiwiZW50cnkiLCJjdXJyZW50IiwiaXNJbnRlcnNlY3RpbmciLCJ1bmRlZmluZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvYnZzZXJ2ZXIiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJyZWYiLCJhcmlhLWxhYmVsIiwidGl0bGUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJyZWN0IiwiZGVmcyIsInJhZGlhbEdyYWRpZW50IiwiY3giLCJjeSIsInIiLCJncmFkaWVudFVuaXRzIiwiZ3JhZGllbnRUcmFuc2Zvcm0iLCJzdG9wIiwic3RvcENvbG9yIiwic3RvcE9wYWNpdHkiLCJvZmZzZXQiLCJwIiwic3BhbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});