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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./assets/i18n lazy recursive ^\\.\\/(\\w+)\\/([\\w-]+)\\.json$":
/*!*******************************************************!*\
  !*** ./assets/i18n/ lazy ^\.\/(\w+)\/([\w-]+)\.json$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./basic/en-US.json": [
		"./assets/i18n/basic/en-US.json",
		"assets_i18n_basic_en-US_json"
	],
	"./basic/es-ES.json": [
		"./assets/i18n/basic/es-ES.json",
		"assets_i18n_basic_es-ES_json"
	],
	"./basic/ja-JP.json": [
		"./assets/i18n/basic/ja-JP.json",
		"assets_i18n_basic_ja-JP_json"
	],
	"./basic/zh-CN.json": [
		"./assets/i18n/basic/zh-CN.json",
		"assets_i18n_basic_zh-CN_json"
	],
	"./basic/zh-HK.json": [
		"./assets/i18n/basic/zh-HK.json",
		"assets_i18n_basic_zh-HK_json"
	],
	"./basic/zh-TW.json": [
		"./assets/i18n/basic/zh-TW.json",
		"assets_i18n_basic_zh-TW_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./assets/i18n lazy recursive ^\\.\\/(\\w+)\\/([\\w-]+)\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./assets/i18n/index.js":
/*!******************************!*\
  !*** ./assets/i18n/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadLocale)\n/* harmony export */ });\nconst requireAsset = __webpack_require__(\"./assets/i18n lazy recursive ^\\\\.\\\\/(\\\\w+)\\\\/([\\\\w-]+)\\\\.json$\");\n/**\n * Lazy-load lang data\n *\n * @param {string} section - The section of lang data to load\n * @param {string} lang    - The language name\n * @returns {Promise<object>} - The content of a lang JSON\n */ function loadLocale(section, lang) {\n    return requireAsset(`./${section}/${lang}.json`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvaTE4bi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsZUFBZUMscUZBQTBEO0FBRS9FOzs7Ozs7Q0FNQyxHQUNjLFNBQVNFLFdBQVlDLE9BQU8sRUFBRUMsSUFBSTtJQUMvQyxPQUFPTCxhQUFhLENBQUMsRUFBRSxFQUFFSSxRQUFRLENBQUMsRUFBRUMsS0FBSyxLQUFLLENBQUM7QUFDakQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JlbGl1bS8uL2Fzc2V0cy9pMThuL2luZGV4LmpzPzUzMTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWlyZUFzc2V0ID0gcmVxdWlyZS5jb250ZXh0KCcuJywgdHJ1ZSwgL15cXC5cXC8oXFx3KylcXC8oW1xcdy1dKylcXC5qc29uJC8sICdsYXp5JylcblxuLyoqXG4gKiBMYXp5LWxvYWQgbGFuZyBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlY3Rpb24gLSBUaGUgc2VjdGlvbiBvZiBsYW5nIGRhdGEgdG8gbG9hZFxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgICAgLSBUaGUgbGFuZ3VhZ2UgbmFtZVxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gLSBUaGUgY29udGVudCBvZiBhIGxhbmcgSlNPTlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTG9jYWxlIChzZWN0aW9uLCBsYW5nKSB7XG4gIHJldHVybiByZXF1aXJlQXNzZXQoYC4vJHtzZWN0aW9ufS8ke2xhbmd9Lmpzb25gKVxufVxuIl0sIm5hbWVzIjpbInJlcXVpcmVBc3NldCIsInJlcXVpcmUiLCJjb250ZXh0IiwibG9hZExvY2FsZSIsInNlY3Rpb24iLCJsYW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/i18n/index.js\n");

/***/ }),

/***/ "./components/Scripts.js":
/*!*******************************!*\
  !*** ./components/Scripts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/config */ \"./lib/config.js\");\n\n\n\nconst Scripts = ()=>{\n    const BLOG = (0,_lib_config__WEBPACK_IMPORTED_MODULE_2__.useConfig)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            BLOG.analytics && BLOG.analytics.provider === \"ackee\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: BLOG.analytics.ackeeConfig.tracker,\n                \"data-ackee-server\": BLOG.analytics.ackeeConfig.dataAckeeServer,\n                \"data-ackee-domain-id\": BLOG.analytics.ackeeConfig.domainId\n            }, void 0, false, {\n                fileName: \"/Users/rey/Developer/nobelium-en/components/Scripts.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            BLOG.analytics && BLOG.analytics.provider === \"ga\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: `https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`\n                    }, void 0, false, {\n                        fileName: \"/Users/rey/Developer/nobelium-en/components/Scripts.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        strategy: \"lazyOnload\",\n                        id: \"ga\",\n                        children: `window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {\n                page_path: window.location.pathname,\n              });`\n                    }, void 0, false, {\n                        fileName: \"/Users/rey/Developer/nobelium-en/components/Scripts.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNRO0FBRXhDLE1BQU1FLFVBQVU7SUFDZCxNQUFNQyxPQUFPRixzREFBU0E7SUFFdEIscUJBQ0U7O1lBQ0dFLEtBQUtDLFNBQVMsSUFBSUQsS0FBS0MsU0FBUyxDQUFDQyxRQUFRLEtBQUsseUJBQzdDLDhEQUFDTCxvREFBTUE7Z0JBQ0xNLEtBQUtILEtBQUtDLFNBQVMsQ0FBQ0csV0FBVyxDQUFDQyxPQUFPO2dCQUN2Q0MscUJBQW1CTixLQUFLQyxTQUFTLENBQUNHLFdBQVcsQ0FBQ0csZUFBZTtnQkFDN0RDLHdCQUFzQlIsS0FBS0MsU0FBUyxDQUFDRyxXQUFXLENBQUNLLFFBQVE7Ozs7OztZQUc1RFQsS0FBS0MsU0FBUyxJQUFJRCxLQUFLQyxTQUFTLENBQUNDLFFBQVEsS0FBSyxzQkFDN0M7O2tDQUNFLDhEQUFDTCxvREFBTUE7d0JBQ0xNLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRUgsS0FBS0MsU0FBUyxDQUFDUyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7a0NBRTdGLDhEQUFDZCxvREFBTUE7d0JBQUNlLFVBQVM7d0JBQWFDLElBQUc7a0NBQzlCLENBQUM7Ozs4QkFHZ0IsRUFBRWIsS0FBS0MsU0FBUyxDQUFDUyxRQUFRLENBQUNDLGFBQWEsQ0FBQzs7aUJBRXJELENBQUM7Ozs7Ozs7Ozs7QUFNbEI7QUFFQSxpRUFBZVosT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmVsaXVtLy4vY29tcG9uZW50cy9TY3JpcHRzLmpzPzdhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJ0AvbGliL2NvbmZpZydcblxuY29uc3QgU2NyaXB0cyA9ICgpID0+IHtcbiAgY29uc3QgQkxPRyA9IHVzZUNvbmZpZygpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0JMT0cuYW5hbHl0aWNzICYmIEJMT0cuYW5hbHl0aWNzLnByb3ZpZGVyID09PSAnYWNrZWUnICYmIChcbiAgICAgICAgPFNjcmlwdFxuICAgICAgICAgIHNyYz17QkxPRy5hbmFseXRpY3MuYWNrZWVDb25maWcudHJhY2tlcn1cbiAgICAgICAgICBkYXRhLWFja2VlLXNlcnZlcj17QkxPRy5hbmFseXRpY3MuYWNrZWVDb25maWcuZGF0YUFja2VlU2VydmVyfVxuICAgICAgICAgIGRhdGEtYWNrZWUtZG9tYWluLWlkPXtCTE9HLmFuYWx5dGljcy5hY2tlZUNvbmZpZy5kb21haW5JZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7QkxPRy5hbmFseXRpY3MgJiYgQkxPRy5hbmFseXRpY3MucHJvdmlkZXIgPT09ICdnYScgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtCTE9HLmFuYWx5dGljcy5nYUNvbmZpZy5tZWFzdXJlbWVudElkfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiIGlkPVwiZ2FcIj5cbiAgICAgICAgICAgIHtgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7QkxPRy5hbmFseXRpY3MuZ2FDb25maWcubWVhc3VyZW1lbnRJZH0nLCB7XG4gICAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICAgIH0pO2B9XG4gICAgICAgICAgPC9TY3JpcHQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRzXG4iXSwibmFtZXMiOlsiU2NyaXB0IiwidXNlQ29uZmlnIiwiU2NyaXB0cyIsIkJMT0ciLCJhbmFseXRpY3MiLCJwcm92aWRlciIsInNyYyIsImFja2VlQ29uZmlnIiwidHJhY2tlciIsImRhdGEtYWNrZWUtc2VydmVyIiwiZGF0YUFja2VlU2VydmVyIiwiZGF0YS1hY2tlZS1kb21haW4taWQiLCJkb21haW5JZCIsImdhQ29uZmlnIiwibWVhc3VyZW1lbnRJZCIsInN0cmF0ZWd5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Scripts.js\n");

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigProvider: () => (/* binding */ ConfigProvider),\n/* harmony export */   useConfig: () => (/* binding */ useConfig)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction ConfigProvider({ value, children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rey/Developer/nobelium-en/lib/config.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nfunction useConfig() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsTUFBTUUsOEJBQWdCRixvREFBYUEsQ0FBQ0c7QUFFN0IsU0FBU0MsZUFBZ0IsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDakQscUJBQ0UsOERBQUNKLGNBQWNLLFFBQVE7UUFBQ0YsT0FBT0E7a0JBQzVCQzs7Ozs7O0FBR1A7QUFFTyxTQUFTRTtJQUNkLE9BQU9QLGlEQUFVQSxDQUFDQztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmVsaXVtLy4vbGliL2NvbmZpZy5qcz8wNmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKVxuXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnUHJvdmlkZXIgKHsgdmFsdWUsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29uZmlnICgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJ1bmRlZmluZWQiLCJDb25maWdQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInVzZUNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/dayjs.js":
/*!**********************!*\
  !*** ./lib/dayjs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prepareDayjs: () => (/* binding */ prepareDayjs)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ \"./node_modules/dayjs/plugin/utc.js\");\n/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/timezone */ \"./node_modules/dayjs/plugin/timezone.js\");\n/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));\nfunction prepareDayjs(timezone) {\n    dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.setDefault(timezone);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF5anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNVO0FBRTVDQSxtREFBWSxDQUFDQyx5REFBR0E7QUFDaEJELG1EQUFZLENBQUNFLDhEQUFRQTtBQUVkLFNBQVNFLGFBQWNGLFFBQVE7SUFDcENGLCtDQUFRLENBQUNNLFVBQVUsQ0FBQ0o7QUFDdEI7QUFFQSxpRUFBZUYsOENBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2JlbGl1bS8uL2xpYi9kYXlqcy5qcz9kNjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB1dGMgZnJvbSAnZGF5anMvcGx1Z2luL3V0YydcbmltcG9ydCB0aW1lem9uZSBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUnXG5cbmRheWpzLmV4dGVuZCh1dGMpXG5kYXlqcy5leHRlbmQodGltZXpvbmUpXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlRGF5anMgKHRpbWV6b25lKSB7XG4gIGRheWpzLnR6LnNldERlZmF1bHQodGltZXpvbmUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRheWpzXG4iXSwibmFtZXMiOlsiZGF5anMiLCJ1dGMiLCJ0aW1lem9uZSIsImV4dGVuZCIsInByZXBhcmVEYXlqcyIsInR6Iiwic2V0RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/dayjs.js\n");

/***/ }),

/***/ "./lib/locale.js":
/*!***********************!*\
  !*** ./lib/locale.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LocaleProvider: () => (/* binding */ LocaleProvider),\n/* harmony export */   useLocale: () => (/* binding */ useLocale)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LocaleContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction LocaleProvider({ value, children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocaleContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rey/Developer/nobelium-en/lib/locale.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nconst useLocale = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocaleContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbG9jYWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsTUFBTUUsOEJBQWdCRixvREFBYUEsQ0FBQ0c7QUFFN0IsU0FBU0MsZUFBZ0IsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDakQscUJBQ0UsOERBQUNKLGNBQWNLLFFBQVE7UUFBQ0YsT0FBT0E7a0JBQzVCQzs7Ozs7O0FBR1A7QUFFTyxNQUFNRSxZQUFZLElBQU1QLGlEQUFVQSxDQUFDQyxlQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9iZWxpdW0vLi9saWIvbG9jYWxlLmpzP2IwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2NhbGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpXG5cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbGVQcm92aWRlciAoeyB2YWx1ZSwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2NhbGVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbGUgPSAoKSA9PiB1c2VDb250ZXh0KExvY2FsZUNvbnRleHQpXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJMb2NhbGVDb250ZXh0IiwidW5kZWZpbmVkIiwiTG9jYWxlUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ1c2VMb2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/locale.js\n");

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   \"default\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_useMedia_react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=useMedia!=!react-use */ \"__barrel_optimize__?names=useMedia!=!./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/config */ \"./lib/config.js\");\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    dark: true\n});\nfunction ThemeProvider({ children }) {\n    const { appearance } = (0,_lib_config__WEBPACK_IMPORTED_MODULE_2__.useConfig)();\n    // `defaultState` should normally be a boolean. But it causes initial loading flashes in slow\n    // rendering. Setting it to `null` so that we can differentiate the initial loading phase\n    const prefersDark = (0,_barrel_optimize_names_useMedia_react_use__WEBPACK_IMPORTED_MODULE_3__.useMedia)(\"(prefers-color-scheme: dark)\", null);\n    const dark = appearance === \"dark\" || appearance === \"auto\" && prefersDark;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Only decide color scheme after initial loading, i.e. when `dark` is really representing a\n        // media query result\n        if (typeof dark === \"boolean\") {\n            document.documentElement.classList.toggle(\"dark\", dark);\n            document.documentElement.classList.remove(\"color-scheme-unset\");\n        }\n    }, [\n        dark\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            dark\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rey/Developer/nobelium-en/lib/theme.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\nfunction useTheme() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ3hCO0FBQ0k7QUFFeEMsTUFBTUssNkJBQWVMLG9EQUFhQSxDQUFDO0lBQUVNLE1BQU07QUFBSztBQUV6QyxTQUFTQyxjQUFlLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxzREFBU0E7SUFFaEMsNkZBQTZGO0lBQzdGLHlGQUF5RjtJQUN6RixNQUFNTSxjQUFjUCxtRkFBUUEsQ0FBQyxnQ0FBZ0M7SUFDN0QsTUFBTUcsT0FBT0csZUFBZSxVQUFXQSxlQUFlLFVBQVVDO0lBRWhFUixnREFBU0EsQ0FBQztRQUNSLDRGQUE0RjtRQUM1RixxQkFBcUI7UUFDckIsSUFBSSxPQUFPSSxTQUFTLFdBQVc7WUFDN0JLLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUVI7WUFDbERLLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDNUM7SUFDRixHQUFHO1FBQUNUO0tBQUs7SUFFVCxxQkFDRSw4REFBQ0QsYUFBYVcsUUFBUTtRQUFDQyxPQUFPO1lBQUVYO1FBQUs7a0JBQ2xDRTs7Ozs7O0FBR1A7QUFFZSxTQUFTVTtJQUN0QixPQUFPakIsaURBQVVBLENBQUNJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9iZWxpdW0vLi9saWIvdGhlbWUuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1lZGlhIH0gZnJvbSAncmVhY3QtdXNlJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnQC9saWIvY29uZmlnJ1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgZGFyazogdHJ1ZSB9KVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVQcm92aWRlciAoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgYXBwZWFyYW5jZSB9ID0gdXNlQ29uZmlnKClcblxuICAvLyBgZGVmYXVsdFN0YXRlYCBzaG91bGQgbm9ybWFsbHkgYmUgYSBib29sZWFuLiBCdXQgaXQgY2F1c2VzIGluaXRpYWwgbG9hZGluZyBmbGFzaGVzIGluIHNsb3dcbiAgLy8gcmVuZGVyaW5nLiBTZXR0aW5nIGl0IHRvIGBudWxsYCBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHRoZSBpbml0aWFsIGxvYWRpbmcgcGhhc2VcbiAgY29uc3QgcHJlZmVyc0RhcmsgPSB1c2VNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScsIG51bGwpXG4gIGNvbnN0IGRhcmsgPSBhcHBlYXJhbmNlID09PSAnZGFyaycgfHwgKGFwcGVhcmFuY2UgPT09ICdhdXRvJyAmJiBwcmVmZXJzRGFyaylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE9ubHkgZGVjaWRlIGNvbG9yIHNjaGVtZSBhZnRlciBpbml0aWFsIGxvYWRpbmcsIGkuZS4gd2hlbiBgZGFya2AgaXMgcmVhbGx5IHJlcHJlc2VudGluZyBhXG4gICAgLy8gbWVkaWEgcXVlcnkgcmVzdWx0XG4gICAgaWYgKHR5cGVvZiBkYXJrID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgZGFyaylcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvci1zY2hlbWUtdW5zZXQnKVxuICAgIH1cbiAgfSwgW2RhcmtdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkYXJrIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lICgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVkaWEiLCJ1c2VDb25maWciLCJUaGVtZUNvbnRleHQiLCJkYXJrIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsInByZWZlcnNEYXJrIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=useMedia!=!./node_modules/react-use/esm/index.js":
/*!**********************************************************************************!*\
  !*** __barrel_optimize__?names=useMedia!=!./node_modules/react-use/esm/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMedia: () => (/* reexport safe */ _useMedia__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMedia */ "./node_modules/react-use/esm/useMedia.js");



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion-x/src/styles.css */ \"./node_modules/react-notion-x/src/styles.css\");\n/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/notion.css */ \"./styles/notion.css\");\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_notion_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/i18n */ \"./assets/i18n/index.js\");\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/config */ \"./lib/config.js\");\n/* harmony import */ var _lib_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/lib/locale */ \"./lib/locale.js\");\n/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/lib/dayjs */ \"./lib/dayjs.js\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/lib/theme */ \"./lib/theme.js\");\n/* harmony import */ var _components_Scripts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Scripts */ \"./components/Scripts.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Ackee = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"components_Ackee_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/components/Ackee */ \"./components/Ackee.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"_app.js -> \" + \"@/components/Ackee\"\n        ]\n    },\n    ssr: false\n});\nconst Gtag = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"components_Gtag_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/components/Gtag */ \"./components/Gtag.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"_app.js -> \" + \"@/components/Gtag\"\n        ]\n    },\n    ssr: false\n});\nfunction MyApp({ Component, pageProps, config, locale }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_config__WEBPACK_IMPORTED_MODULE_9__.ConfigProvider, {\n        value: config,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Scripts__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_locale__WEBPACK_IMPORTED_MODULE_10__.LocaleProvider, {\n                value: locale,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_theme__WEBPACK_IMPORTED_MODULE_12__.ThemeProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            process.env.VERCEL_ENV === \"production\" && config?.analytics?.provider === \"ackee\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ackee, {\n                                ackeeServerUrl: config.analytics.ackeeConfig.dataAckeeServer,\n                                ackeeDomainId: config.analytics.ackeeConfig.domainId\n                            }, void 0, false, {\n                                fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this),\n                            process.env.VERCEL_ENV === \"production\" && config?.analytics?.provider === \"ga\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gtag, {}, void 0, false, {\n                                fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                                lineNumber: 31,\n                                columnNumber: 97\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rey/Developer/nobelium-en/pages/_app.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\nMyApp.getInitialProps = async (ctx)=>{\n    const config =  false ? 0 : await __webpack_require__.e(/*! import() */ \"lib_server_config_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @/lib/server/config */ \"./lib/server/config.js\", 23)).then((module)=>module.clientConfig);\n    (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_11__.prepareDayjs)(config.timezone);\n    return {\n        ...next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(ctx),\n        config,\n        locale: await (0,_assets_i18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"basic\", config.lang)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNLO0FBQ0w7QUFDUDtBQUNHO0FBQ0Q7QUFDTTtBQUNJO0FBQ087QUFDQTtBQUNIO0FBQ0M7QUFDRDtBQUUxQyxNQUFNUSxRQUFRUCxtREFBT0EsQ0FBQyxJQUFNLDhOQUFPOzs7Ozs7SUFBeUJRLEtBQUs7O0FBQ2pFLE1BQU1DLE9BQU9ULG1EQUFPQSxDQUFDLElBQU0sMk5BQU87Ozs7OztJQUF3QlEsS0FBSzs7QUFFaEQsU0FBU0UsTUFBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDckUscUJBQ0UsOERBQUNaLHVEQUFjQTtRQUFDYSxPQUFPRjs7MEJBQ3JCLDhEQUFDUCw0REFBT0E7Ozs7OzBCQUNSLDhEQUFDSCx3REFBY0E7Z0JBQUNZLE9BQU9EOzBCQUNyQiw0RUFBQ1Qsc0RBQWFBOzhCQUNaOzs0QkFDR1csUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEtBQUssZ0JBQWdCTCxRQUFRTSxXQUFXQyxhQUFhLHlCQUMxRSw4REFBQ2I7Z0NBQ0NjLGdCQUFnQlIsT0FBT00sU0FBUyxDQUFDRyxXQUFXLENBQUNDLGVBQWU7Z0NBQzVEQyxlQUFlWCxPQUFPTSxTQUFTLENBQUNHLFdBQVcsQ0FBQ0csUUFBUTs7Ozs7OzRCQUd2RFQsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEtBQUssZ0JBQWdCTCxRQUFRTSxXQUFXQyxhQUFhLHNCQUFRLDhEQUFDWDs7Ozs7MENBQ3JGLDhEQUFDRTtnQ0FBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7QUFFQUYsTUFBTWdCLGVBQWUsR0FBRyxPQUFNQztJQUM1QixNQUFNZCxTQUFTLE1BQWtCLEdBQzdCLENBQWtELEdBQ2xELE1BQU0sNEtBQU8sQ0FBdUJnQixJQUFJLENBQUNHLENBQUFBLFNBQVVBLE9BQU9DLFlBQVk7SUFFMUU3Qix5REFBWUEsQ0FBQ1MsT0FBT3FCLFFBQVE7SUFFNUIsT0FBTztRQUNMLEdBQUduQywrREFBbUIsQ0FBQzRCLElBQUk7UUFDM0JkO1FBQ0FDLFFBQVEsTUFBTWIsd0RBQVVBLENBQUMsU0FBU1ksT0FBT3NCLElBQUk7SUFDL0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vYmVsaXVtLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20uY3NzJ1xuaW1wb3J0ICdyZWFjdC1ub3Rpb24teC9zcmMvc3R5bGVzLmNzcydcbmltcG9ydCAna2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzJ1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL25vdGlvbi5jc3MnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgbG9hZExvY2FsZSBmcm9tICdAL2Fzc2V0cy9pMThuJ1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdAL2xpYi9jb25maWcnXG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlciB9IGZyb20gJ0AvbGliL2xvY2FsZSdcbmltcG9ydCB7IHByZXBhcmVEYXlqcyB9IGZyb20gJ0AvbGliL2RheWpzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0AvbGliL3RoZW1lJ1xuaW1wb3J0IFNjcmlwdHMgZnJvbSAnQC9jb21wb25lbnRzL1NjcmlwdHMnXG5cbmNvbnN0IEFja2VlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9BY2tlZScpLCB7IHNzcjogZmFsc2UgfSlcbmNvbnN0IEd0YWcgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL0d0YWcnKSwgeyBzc3I6IGZhbHNlIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjb25maWcsIGxvY2FsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbmZpZ1Byb3ZpZGVyIHZhbHVlPXtjb25maWd9PlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDxMb2NhbGVQcm92aWRlciB2YWx1ZT17bG9jYWxlfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5WRVJDRUxfRU5WID09PSAncHJvZHVjdGlvbicgJiYgY29uZmlnPy5hbmFseXRpY3M/LnByb3ZpZGVyID09PSAnYWNrZWUnICYmIChcbiAgICAgICAgICAgICAgPEFja2VlXG4gICAgICAgICAgICAgICAgYWNrZWVTZXJ2ZXJVcmw9e2NvbmZpZy5hbmFseXRpY3MuYWNrZWVDb25maWcuZGF0YUFja2VlU2VydmVyfVxuICAgICAgICAgICAgICAgIGFja2VlRG9tYWluSWQ9e2NvbmZpZy5hbmFseXRpY3MuYWNrZWVDb25maWcuZG9tYWluSWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52LlZFUkNFTF9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWc/LmFuYWx5dGljcz8ucHJvdmlkZXIgPT09ICdnYScgJiYgPEd0YWcgLz59XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgKVxufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICBjb25zdCBjb25maWcgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0J1xuICAgID8gYXdhaXQgZmV0Y2goJy9hcGkvY29uZmlnJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICA6IGF3YWl0IGltcG9ydCgnQC9saWIvc2VydmVyL2NvbmZpZycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5jbGllbnRDb25maWcpXG5cbiAgcHJlcGFyZURheWpzKGNvbmZpZy50aW1lem9uZSlcblxuICByZXR1cm4ge1xuICAgIC4uLkFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KSxcbiAgICBjb25maWcsXG4gICAgbG9jYWxlOiBhd2FpdCBsb2FkTG9jYWxlKCdiYXNpYycsIGNvbmZpZy5sYW5nKVxuICB9XG59XG4iXSwibmFtZXMiOlsiQXBwIiwiZHluYW1pYyIsImxvYWRMb2NhbGUiLCJDb25maWdQcm92aWRlciIsIkxvY2FsZVByb3ZpZGVyIiwicHJlcGFyZURheWpzIiwiVGhlbWVQcm92aWRlciIsIlNjcmlwdHMiLCJBY2tlZSIsInNzciIsIkd0YWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsImxvY2FsZSIsInZhbHVlIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9FTlYiLCJhbmFseXRpY3MiLCJwcm92aWRlciIsImFja2VlU2VydmVyVXJsIiwiYWNrZWVDb25maWciLCJkYXRhQWNrZWVTZXJ2ZXIiLCJhY2tlZURvbWFpbklkIiwiZG9tYWluSWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibW9kdWxlIiwiY2xpZW50Q29uZmlnIiwidGltZXpvbmUiLCJsYW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/notion.css":
/*!***************************!*\
  !*** ./styles/notion.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "use-ackee":
/*!****************************!*\
  !*** external "use-ackee" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-ackee");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/dayjs","vendor-chunks/react-notion-x","vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-use","vendor-chunks/prismjs","vendor-chunks/katex"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();