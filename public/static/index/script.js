/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/public/index/script.coffee":
/*!*******************************************!*\
  !*** ./source/public/index/script.coffee ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script_App_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/App.coffee */ \"./source/public/index/script/App.coffee\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.getElementById('react-root')).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_script_App_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n\n//# sourceURL=webpack:///./source/public/index/script.coffee?");

/***/ }),

/***/ "./source/public/index/script/App.coffee":
/*!***********************************************!*\
  !*** ./source/public/index/script/App.coffee ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MainCanvas_MainCanvas_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainCanvas/_MainCanvas.coffee */ \"./source/public/index/script/MainCanvas/_MainCanvas.coffee\");\n/* harmony import */ var _CanvasPosition_CanvasPosition_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasPosition/_CanvasPosition.coffee */ \"./source/public/index/script/CanvasPosition/_CanvasPosition.coffee\");\nvar App,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App = class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor() {\n    super(...arguments);\n    this.render = this.render.bind(this);\n  }\n\n  render() {\n    boundMethodCheck(this, App);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainCanvas_MainCanvas_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n  }\n\n});\n\n//# sourceURL=webpack:///./source/public/index/script/App.coffee?");

/***/ }),

/***/ "./source/public/index/script/CanvasPosition/_CanvasPosition.coffee":
/*!**************************************************************************!*\
  !*** ./source/public/index/script/CanvasPosition/_CanvasPosition.coffee ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CanvasPosition, canvasPosition;\n\nCanvasPosition = function () {\n  class CanvasPosition {\n    constructor(_precision) {\n      this.setMin = this.setMin.bind(this);\n      this.setMax = this.setMax.bind(this);\n      this.set = this.set.bind(this);\n      this._normalizeCoords = this._normalizeCoords.bind(this);\n      this._fillNulledParameters = this._fillNulledParameters.bind(this);\n      this._normalizeCoordsPrecision = this._normalizeCoordsPrecision.bind(this);\n      this._roundToPrecision = this._roundToPrecision.bind(this);\n      this._normalizeCoordsRange = this._normalizeCoordsRange.bind(this);\n      this._setWithNormalizedCoords = this._setWithNormalizedCoords.bind(this);\n      this._setRawCoords = this._setRawCoords.bind(this);\n      this._setFlooredCoords = this._setFlooredCoords.bind(this);\n      this._setZoomCoords = this._setZoomCoords.bind(this);\n      this.get = this.get.bind(this);\n      this._precision = _precision;\n      this.setMin(0, 0);\n      this.setMax(2000, 2000);\n      this.set(1000.5, 1000.5, 6);\n    }\n\n    setMin(x, y) {\n      this._minX = x;\n      this._minY = y;\n      return this.set(this._rawX, this._rawY, this._zoomLevel);\n    }\n\n    setMax(x, y) {\n      this._maxX = x - 10 ** -this._precision;\n      this._maxY = y - 10 ** -this._precision;\n      return this.set(this._rawX, this._rawY, this._zoomLevel);\n    }\n\n    set(x, y, zoomLevel) {\n      var normalizedX, normalizedY, normalizedZoomLevel;\n      [normalizedX, normalizedY, normalizedZoomLevel] = this._normalizeCoords(x, y, zoomLevel);\n\n      this._setWithNormalizedCoords(normalizedX, normalizedY, normalizedZoomLevel);\n\n      return this.get();\n    }\n\n    _normalizeCoords(x, y, zoomLevel) {\n      [x, y, zoomLevel] = this._fillNulledParameters(x, y, zoomLevel);\n      [x, y, zoomLevel] = this._normalizeCoordsPrecision(x, y, zoomLevel);\n      [x, y, zoomLevel] = this._normalizeCoordsRange(x, y, zoomLevel);\n      return [x, y, zoomLevel];\n    }\n\n    _fillNulledParameters(x, y, zoomLevel) {\n      return [x != null ? x : this._rawX, y != null ? y : this._rawY, zoomLevel != null ? zoomLevel : this._zoomLevel];\n    }\n\n    _normalizeCoordsPrecision(x, y, zoomLevel) {\n      return [this._roundToPrecision(x), this._roundToPrecision(y), Math.floor(zoomLevel)];\n    }\n\n    _roundToPrecision(number, precision = this._precision) {\n      return Math.round(10 ** precision * number) / 10 ** precision;\n    }\n\n    _normalizeCoordsRange(x, y, zoomLevel) {\n      x = Math.max(x, this._minX);\n      y = Math.max(y, this._minY);\n      zoomLevel = Math.max(zoomLevel, 0);\n      x = Math.min(x, this._maxX);\n      y = Math.min(y, this._maxY);\n      zoomLevel = Math.min(zoomLevel, this._allowableZoomFactors.length - 1);\n      return [x, y, zoomLevel];\n    }\n\n    _setWithNormalizedCoords(x, y, zoomLevel) {\n      this._setRawCoords(x, y, zoomLevel);\n\n      this._setFlooredCoords(x, y);\n\n      return this._setZoomCoords(zoomLevel);\n    }\n\n    _setRawCoords(x, y, zoomLevel) {\n      this._rawX = x;\n      this._rawY = y;\n      return this._zoomLevel = zoomLevel;\n    }\n\n    _setFlooredCoords(x, y) {\n      this._floorX = Math.floor(x);\n      return this._floorY = Math.floor(y);\n    }\n\n    _setZoomCoords(zoomLevel) {\n      return this._zoomFactor = this._allowableZoomFactors[zoomLevel];\n    }\n\n    get() {\n      return {\n        rawX: this._rawX,\n        rawY: this._rawY,\n        floorX: this._floorX,\n        floorY: this._floorY,\n        minX: this._minX,\n        minY: this._minY,\n        maxX: this._maxX,\n        maxY: this._maxY,\n        zoomLevel: this._zoomLevel,\n        zoomFactor: this._zoomFactor\n      };\n    }\n\n  }\n\n  ;\n  CanvasPosition.prototype._rawX = 0;\n  CanvasPosition.prototype._rawY = 0;\n  CanvasPosition.prototype._floorX = 0;\n  CanvasPosition.prototype._floorY = 0;\n  CanvasPosition.prototype._minX = 0;\n  CanvasPosition.prototype._minY = 0;\n  CanvasPosition.prototype._maxX = 1;\n  CanvasPosition.prototype._maxY = 1;\n  CanvasPosition.prototype._zoomLevel = 0;\n  CanvasPosition.prototype._zoomFactor = 0.01;\n  CanvasPosition.prototype._allowableZoomFactors = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10];\n  return CanvasPosition;\n}.call(undefined);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canvasPosition = new CanvasPosition(6));\n\n//# sourceURL=webpack:///./source/public/index/script/CanvasPosition/_CanvasPosition.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/_MainCanvas.coffee":
/*!******************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/_MainCanvas.coffee ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar MainCanvas,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainCanvas = function () {\n  class MainCanvas extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n    constructor(props) {\n      super(props);\n      this.computeStyle = this.computeStyle.bind(this);\n      this._computeStyleTransform = this._computeStyleTransform.bind(this);\n      this._computeStyleScale = this._computeStyleScale.bind(this);\n      this._computeStyleTranslateX = this._computeStyleTranslateX.bind(this);\n      this._computeStyleTranslateY = this._computeStyleTranslateY.bind(this);\n      this.render = this.render.bind(this);\n    }\n\n    computeStyle() {\n      boundMethodCheck(this, MainCanvas);\n      return {\n        transform: this._computeStyleTransform()\n      };\n    }\n\n    _computeStyleTransform() {\n      boundMethodCheck(this, MainCanvas);\n      return this._computeStyleScale() + \" \" + this._computeStyleTranslateX() + \" \" + this._computeStyleTranslateY();\n    }\n\n    _computeStyleScale() {\n      boundMethodCheck(this, MainCanvas);\n      return `scale(${1})`;\n    }\n\n    _computeStyleTranslateX() {\n      boundMethodCheck(this, MainCanvas);\n      return `translateX(calc(calc(${0} * -1 * ${this._size}) - ${this._borderWidth}))`;\n    }\n\n    _computeStyleTranslateY() {\n      boundMethodCheck(this, MainCanvas);\n      return `translateY(calc(calc(${0} * -1 * ${this._size}) - ${this._borderWidth}))`;\n    }\n\n    render() {\n      boundMethodCheck(this, MainCanvas);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n        id: \"main-canvas\",\n        width: \"2000\",\n        height: \"2000\",\n        style: this.computeStyle()\n      });\n    }\n\n  }\n\n  ;\n  MainCanvas._size = '50vmin';\n  MainCanvas._borderWidth = '150vmax';\n  return MainCanvas;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/_MainCanvas.coffee?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/public/index/script.coffee");
/******/ 	
/******/ })()
;