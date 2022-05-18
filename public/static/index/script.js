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

/***/ "./source/public/_common/AnimatedComponent.coffee":
/*!********************************************************!*\
  !*** ./source/public/_common/AnimatedComponent.coffee ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComponentAnimationManager_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentAnimationManager.coffee */ \"./source/public/_common/ComponentAnimationManager.coffee\");\nvar AnimatedComponent,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedComponent = class AnimatedComponent extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.componentDidMount = this.componentDidMount.bind(this); // _computeAnimationStyle to be implemented by child\n\n    this.componentWillUnmount = this.componentWillUnmount.bind(this);\n    this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();\n  }\n\n  componentDidMount() {\n    boundMethodCheck(this, AnimatedComponent);\n    return _ComponentAnimationManager_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerComponent(this.ref.current, this._computeAnimationStyle);\n  }\n\n  componentWillUnmount() {\n    boundMethodCheck(this, AnimatedComponent);\n    return _ComponentAnimationManager_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deregisterComponent(this.ref.current);\n  }\n\n});\n/*\t_animationFrame: =>\n\tstyle = this._computeAnimationStyle()\n\tthis._applyAnimationStyle style\n\tif this._runAnimationFrame then window.requestAnimationFrame this._animationFrame\n\n * _computeAnimationStyle to be implemented by child\n\n_applyAnimationStyle: (style) =>\n\tfor attribute of style\n\t\tthis.ref.current.style[attribute] = style[attribute] */\n\n//# sourceURL=webpack:///./source/public/_common/AnimatedComponent.coffee?");

/***/ }),

/***/ "./source/public/_common/ComponentAnimationManager.coffee":
/*!****************************************************************!*\
  !*** ./source/public/_common/ComponentAnimationManager.coffee ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar ComponentAnimationManager, cam;\n\nComponentAnimationManager = class ComponentAnimationManager {\n  constructor() {\n    this.registerComponent = this.registerComponent.bind(this);\n    this.deregisterComponent = this.deregisterComponent.bind(this);\n    this._runAnimationFrame = this._runAnimationFrame.bind(this);\n    this._applyAnimationStyleToComponent = this._applyAnimationStyleToComponent.bind(this);\n    this.mapComponentsToStyleFunctions = new Map();\n    window.requestAnimationFrame(this._runAnimationFrame);\n  }\n\n  registerComponent(reference, styleFunction) {\n    this.mapComponentsToStyleFunctions.set(reference, styleFunction);\n    return console.log(this.mapComponentsToStyleFunctions);\n  }\n\n  deregisterComponent(reference) {\n    return this.mapComponentsToStyleFunctions.delete(reference);\n  }\n\n  _runAnimationFrame() {\n    this.mapComponentsToStyleFunctions.forEach((styleFunction, component) => {\n      var style;\n      style = styleFunction();\n      return this._applyAnimationStyleToComponent(style, component);\n    });\n    return window.requestAnimationFrame(this._runAnimationFrame);\n  }\n\n  _applyAnimationStyleToComponent(style, component) {\n    var attribute, results;\n    results = [];\n\n    for (attribute in style) {\n      results.push(component.style[attribute] = style[attribute]);\n    }\n\n    return results;\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cam = new ComponentAnimationManager());\n\n//# sourceURL=webpack:///./source/public/_common/ComponentAnimationManager.coffee?");

/***/ }),

/***/ "./source/public/_common/FloatPrecision.coffee":
/*!*****************************************************!*\
  !*** ./source/public/_common/FloatPrecision.coffee ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar FloatPrecision;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatPrecision = function () {\n  class FloatPrecision {\n    static round(number, precision = this.PRECISION) {\n      return Math.round(number * 10 ** precision) / 10 ** precision;\n    }\n\n    static floor(number, precision = this.PRECISION) {\n      return Math.floor(number * 10 ** precision) / 10 ** precision;\n    }\n\n  }\n\n  ;\n  FloatPrecision.PRECISION = 10;\n  return FloatPrecision;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/_common/FloatPrecision.coffee?");

/***/ }),

/***/ "./source/public/_common/Globals.coffee":
/*!**********************************************!*\
  !*** ./source/public/_common/Globals.coffee ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Globals;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Globals = function () {\n  class Globals {}\n\n  ;\n  Globals.BOARD_SIDE_LENGTH_IN_TILES = 2000;\n  return Globals;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/_common/Globals.coffee?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MainCanvas_MainCanvas_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainCanvas/_MainCanvas.coffee */ \"./source/public/index/script/MainCanvas/_MainCanvas.coffee\");\n/* harmony import */ var _CanvasPosition_CanvasPosition_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasPosition/_CanvasPosition.coffee */ \"./source/public/index/script/CanvasPosition/_CanvasPosition.coffee\");\nvar App,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App = class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    var ref;\n    super(props);\n    this.positionUpdated = this.positionUpdated.bind(this);\n    this.render = this.render.bind(this);\n    this.canvasPosition = new _CanvasPosition_CanvasPosition_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.positionUpdated);\n    this.state = {\n      rawCanvasPosition: (ref = this.canvasPosition) != null ? ref.getRaw() : void 0\n    };\n  }\n\n  positionUpdated(position) {\n    var ref;\n    boundMethodCheck(this, App);\n    return this.setState({\n      rawCanvasPosition: (ref = this.canvasPosition) != null ? ref.getRaw() : void 0\n    });\n  }\n\n  render() {\n    boundMethodCheck(this, App);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainCanvas_MainCanvas_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      canvasPosition: this.canvasPosition\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///./source/public/index/script/App.coffee?");

/***/ }),

/***/ "./source/public/index/script/CanvasPosition/_CanvasPosition.coffee":
/*!**************************************************************************!*\
  !*** ./source/public/index/script/CanvasPosition/_CanvasPosition.coffee ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_common/FloatPrecision.coffee */ \"./source/public/_common/FloatPrecision.coffee\");\nvar CanvasPosition;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasPosition = function () {\n  class CanvasPosition {\n    constructor(_updateFunction = null) {\n      this.getRaw = this.getRaw.bind(this);\n      this.setMin = this.setMin.bind(this);\n      this.setMax = this.setMax.bind(this);\n      this.setXY = this.setXY.bind(this);\n      this.setZoomLevel = this.setZoomLevel.bind(this);\n      this.set = this.set.bind(this);\n      this._normalizeCoords = this._normalizeCoords.bind(this);\n      this._fillNulledParameters = this._fillNulledParameters.bind(this);\n      this._normalizeCoordsPrecision = this._normalizeCoordsPrecision.bind(this);\n      this._normalizeCoordsRange = this._normalizeCoordsRange.bind(this);\n      this._setWithNormalizedCoords = this._setWithNormalizedCoords.bind(this);\n      this._setRawCoords = this._setRawCoords.bind(this);\n      this._setFlooredCoords = this._setFlooredCoords.bind(this);\n      this._setZoomCoords = this._setZoomCoords.bind(this);\n      this.addXY = this.addXY.bind(this);\n      this.addZoomLevel = this.addZoomLevel.bind(this);\n      this.add = this.add.bind(this);\n      this._updateFunction = _updateFunction;\n      this.setMin(0, 0);\n      this.setMax(2000, 2000);\n      this.set(1000.5, 1000.5, 6);\n    }\n\n    getRaw() {\n      return {\n        rawX: this._rawX,\n        rawY: this._rawY,\n        floorX: this._floorX,\n        floorY: this._floorY,\n        minX: this._minX,\n        minY: this._minY,\n        maxX: this._maxX,\n        maxY: this._maxY,\n        zoomLevel: this._zoomLevel,\n        zoomFactor: this._zoomFactor,\n        zoomScale: this._zoomScale\n      };\n    }\n\n    setMin(x, y) {\n      this._minX = x;\n      this._minY = y;\n      return this.set(this._rawX, this._rawY, this._zoomLevel);\n    }\n\n    setMax(x, y) {\n      this._maxX = x - 10 ** -_common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PRECISION;\n      this._maxY = y - 10 ** -_common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].PRECISION;\n      return this.set(this._rawX, this._rawY, this._zoomLevel);\n    }\n\n    setXY(x, y) {\n      return this.set(x, y, null);\n    }\n\n    setZoomLevel(zoomLevel) {\n      return this.set(null, null, zoomLevel);\n    }\n\n    set(x, y, zoomLevel) {\n      var normalizedX, normalizedY, normalizedZoomLevel;\n      [normalizedX, normalizedY, normalizedZoomLevel] = this._normalizeCoords(x, y, zoomLevel);\n\n      this._setWithNormalizedCoords(normalizedX, normalizedY, normalizedZoomLevel);\n\n      if (typeof this._updateFunction === \"function\") {\n        this._updateFunction(this.getRaw());\n      }\n\n      return this.getRaw();\n    }\n\n    _normalizeCoords(x, y, zoomLevel) {\n      [x, y, zoomLevel] = this._fillNulledParameters(x, y, zoomLevel);\n      [x, y, zoomLevel] = this._normalizeCoordsPrecision(x, y, zoomLevel);\n      [x, y, zoomLevel] = this._normalizeCoordsRange(x, y, zoomLevel);\n      return [x, y, zoomLevel];\n    }\n\n    _fillNulledParameters(x, y, zoomLevel) {\n      return [x != null ? x : this._rawX, y != null ? y : this._rawY, zoomLevel != null ? zoomLevel : this._zoomLevel];\n    }\n\n    _normalizeCoordsPrecision(x, y, zoomLevel) {\n      return [_common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(x), _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(y), Math.floor(zoomLevel)];\n    }\n\n    _normalizeCoordsRange(x, y, zoomLevel) {\n      x = Math.max(x, this._minX);\n      y = Math.max(y, this._minY);\n      zoomLevel = Math.max(zoomLevel, 0);\n      x = Math.min(x, this._maxX);\n      y = Math.min(y, this._maxY);\n      zoomLevel = Math.min(zoomLevel, this._allowableZoomFactors.length - 1);\n      return [x, y, zoomLevel];\n    }\n\n    _setWithNormalizedCoords(x, y, zoomLevel) {\n      this._setRawCoords(x, y, zoomLevel);\n\n      this._setFlooredCoords(x, y);\n\n      return this._setZoomCoords(zoomLevel);\n    }\n\n    _setRawCoords(x, y, zoomLevel) {\n      this._rawX = x;\n      this._rawY = y;\n      return this._zoomLevel = zoomLevel;\n    }\n\n    _setFlooredCoords(x, y) {\n      this._floorX = Math.floor(x);\n      return this._floorY = Math.floor(y);\n    }\n\n    _setZoomCoords(zoomLevel) {\n      this._zoomFactor = this._allowableZoomFactors[zoomLevel];\n      return this._zoomScale = this._zoomFactor * 100;\n    }\n\n    addXY(x, y) {\n      return this.add(x, y, 0);\n    }\n\n    addZoomLevel(zoomLevel) {\n      return this.add(0, 0, zoomLevel);\n    }\n\n    add(x, y, zoomLevel) {\n      return this.set(this._rawX + x, this._rawY + y, this._zoomLevel + zoomLevel);\n    }\n\n  }\n\n  ;\n  CanvasPosition.prototype._rawX = 0;\n  CanvasPosition.prototype._rawY = 0;\n  CanvasPosition.prototype._floorX = 0;\n  CanvasPosition.prototype._floorY = 0;\n  CanvasPosition.prototype._minX = 0;\n  CanvasPosition.prototype._minY = 0;\n  CanvasPosition.prototype._maxX = 1;\n  CanvasPosition.prototype._maxY = 1;\n  CanvasPosition.prototype._zoomLevel = 0;\n  CanvasPosition.prototype._zoomFactor = 0.01;\n  CanvasPosition.prototype._zoomScale = 1;\n  CanvasPosition.prototype._allowableZoomFactors = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10];\n  return CanvasPosition;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/index/script/CanvasPosition/_CanvasPosition.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/CanvasReticle/_CanvasReticle.coffee":
/*!***********************************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/CanvasReticle/_CanvasReticle.coffee ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_AnimatedComponent_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_common/AnimatedComponent.coffee */ \"./source/public/_common/AnimatedComponent.coffee\");\nvar CanvasReticle,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasReticle = class CanvasReticle extends _common_AnimatedComponent_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this._computeAnimationStyle = this._computeAnimationStyle.bind(this);\n    this.render = this.render.bind(this);\n  }\n\n  _computeAnimationStyle() {\n    var bottomRight, currentPosition, topLeft;\n    boundMethodCheck(this, CanvasReticle);\n    currentPosition = this.props.canvasPosition.getRaw();\n    topLeft = this.props.coordinateSpaceConverter.canvasToScreen({\n      x: currentPosition.floorX,\n      y: currentPosition.floorY\n    });\n    bottomRight = this.props.coordinateSpaceConverter.canvasToScreen({\n      x: currentPosition.floorX + 1,\n      y: currentPosition.floorY + 1\n    });\n    return {\n      top: topLeft.y + \"px\",\n      left: topLeft.x + \"px\",\n      width: bottomRight.x - topLeft.x + \"px\",\n      height: bottomRight.y - topLeft.y + \"px\"\n    };\n  }\n\n  render() {\n    boundMethodCheck(this, CanvasReticle);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"canvas-reticle\",\n      ref: this.ref\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"/assets/images/reticle.svg\"\n    }));\n  }\n\n});\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/CanvasReticle/_CanvasReticle.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/CoordinateSpaceConverter.coffee":
/*!*******************************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/CoordinateSpaceConverter.coffee ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_common/FloatPrecision.coffee */ \"./source/public/_common/FloatPrecision.coffee\");\n/* harmony import */ var _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_common/Globals.coffee */ \"./source/public/_common/Globals.coffee\");\nvar CoordinateSpaceConverter;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoordinateSpaceConverter = class CoordinateSpaceConverter {\n  constructor(getBoundingBox) {\n    this.screenToCanvas = this.screenToCanvas.bind(this);\n    this.canvasToScreen = this.canvasToScreen.bind(this);\n    this.getBoundingBox = getBoundingBox;\n  }\n\n  screenToCanvas(screenCoords) {\n    var canvasBoundingBox, canvasCoords, proportionIntoCanvas, screenCoordsRelativeToCanvasOrigin;\n    canvasBoundingBox = this.getBoundingBox();\n    screenCoordsRelativeToCanvasOrigin = {\n      x: screenCoords.x - canvasBoundingBox.x,\n      y: screenCoords.y - canvasBoundingBox.y\n    };\n    proportionIntoCanvas = {\n      x: screenCoordsRelativeToCanvasOrigin.x / canvasBoundingBox.width,\n      y: screenCoordsRelativeToCanvasOrigin.y / canvasBoundingBox.height\n    };\n    canvasCoords = {\n      x: proportionIntoCanvas.x * _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES,\n      y: proportionIntoCanvas.y * _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES\n    };\n    return {\n      x: _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(canvasCoords.x),\n      y: _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(canvasCoords.y)\n    };\n  }\n\n  canvasToScreen(canvasCoords) {\n    var canvasBoundingBox, proportionIntoCanvas, screenCoords, screenCoordsRelativeToCanvasOrigin;\n    canvasBoundingBox = this.getBoundingBox();\n    proportionIntoCanvas = {\n      x: canvasCoords.x / _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES,\n      y: canvasCoords.y / _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES\n    };\n    screenCoordsRelativeToCanvasOrigin = {\n      x: proportionIntoCanvas.x * canvasBoundingBox.width,\n      y: proportionIntoCanvas.y * canvasBoundingBox.height\n    };\n    screenCoords = {\n      x: screenCoordsRelativeToCanvasOrigin.x + canvasBoundingBox.x,\n      y: screenCoordsRelativeToCanvasOrigin.y + canvasBoundingBox.y\n    };\n    return {\n      x: _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(screenCoords.x),\n      y: _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(screenCoords.y)\n    };\n  }\n\n});\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/CoordinateSpaceConverter.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/MouseEventHandler.coffee":
/*!************************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/MouseEventHandler.coffee ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_common/Globals.coffee */ \"./source/public/_common/Globals.coffee\");\nvar MouseEventHandler;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseEventHandler = class MouseEventHandler {\n  constructor(canvasPosition, getBoundingBox) {\n    this.onMouseDown = this.onMouseDown.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseUp = this.onMouseUp.bind(this);\n    this.onWheel = this.onWheel.bind(this);\n    this._setAnchor = this._setAnchor.bind(this);\n    this._clearAnchor = this._clearAnchor.bind(this);\n    this._moveCanvasViaMouseDrag = this._moveCanvasViaMouseDrag.bind(this);\n    this.canvasPosition = canvasPosition;\n    this.getBoundingBox = getBoundingBox;\n  }\n\n  onMouseDown(evt) {\n    return this._setAnchor(evt);\n  }\n\n  onMouseMove(evt) {\n    var ref;\n\n    if ((ref = this._anchor) != null ? ref.isSet : void 0) {\n      return this._moveCanvasViaMouseDrag(evt);\n    }\n  }\n\n  onMouseUp(evt) {\n    return this._clearAnchor();\n  }\n\n  onWheel(evt) {\n    var zoomLevelDelta;\n    zoomLevelDelta = -1 * Math.round(evt.deltaY / Math.abs(evt.deltaY));\n    return this.canvasPosition.addZoomLevel(zoomLevelDelta);\n  }\n\n  _setAnchor(evt) {\n    var rawPos;\n    rawPos = this.canvasPosition.getRaw();\n    return this._anchor = {\n      isSet: true,\n      screenCoords: {\n        x: evt.clientX,\n        y: evt.clientY\n      },\n      canvasCoords: {\n        x: rawPos.rawX,\n        y: rawPos.rawY\n      }\n    };\n  }\n\n  _clearAnchor() {\n    return this._anchor = {\n      isSet: false,\n      screenCoords: {\n        x: null,\n        y: null\n      },\n      canvasCoords: {\n        x: null,\n        y: null\n      }\n    };\n  }\n\n  _moveCanvasViaMouseDrag(evt) {\n    var boundingBox, mouseDeltaFromAnchorCanvasCoords, mouseDeltaFromAnchorScreenCoords, mouseScreenCoords, newCanvasPosition;\n    boundingBox = this.getBoundingBox();\n    mouseScreenCoords = {\n      x: evt.clientX,\n      y: evt.clientY\n    };\n    mouseDeltaFromAnchorScreenCoords = {\n      x: mouseScreenCoords.x - this._anchor.screenCoords.x,\n      y: mouseScreenCoords.y - this._anchor.screenCoords.y\n    };\n    mouseDeltaFromAnchorCanvasCoords = {\n      x: mouseDeltaFromAnchorScreenCoords.x * _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES / boundingBox.width,\n      y: mouseDeltaFromAnchorScreenCoords.y * _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES / boundingBox.height\n    };\n    newCanvasPosition = {\n      x: this._anchor.canvasCoords.x - mouseDeltaFromAnchorCanvasCoords.x,\n      y: this._anchor.canvasCoords.y - mouseDeltaFromAnchorCanvasCoords.y\n    };\n    return this.canvasPosition.setXY(newCanvasPosition.x, newCanvasPosition.y);\n  }\n\n});\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/MouseEventHandler.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/TransformCalculator.coffee":
/*!**************************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/TransformCalculator.coffee ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../_common/FloatPrecision.coffee */ \"./source/public/_common/FloatPrecision.coffee\");\n/* harmony import */ var _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../_common/Globals.coffee */ \"./source/public/_common/Globals.coffee\");\nvar TransformCalculator;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransformCalculator = function () {\n  class TransformCalculator {\n    static getTransformStyle(canvasPosition) {\n      return this._zoomScaleToStyleScale(canvasPosition.zoomScale) + this._canvasCoordToStyleTranslate(canvasPosition.rawX, canvasPosition.rawY);\n    }\n\n    static _canvasCoordToStyleTranslate(x, y) {\n      return ` translate(${this._canvasOneCoordToStyleTranslate(x)}, ${this._canvasOneCoordToStyleTranslate(y)})`;\n    }\n\n    static _canvasOneCoordToStyleTranslate(canvasCoord1D) {\n      return ` -${this._canvasOneCoordToPercent(canvasCoord1D)}% `;\n    }\n\n    static _canvasOneCoordToPercent(canvasCoord1D) {\n      return 100 * this._canvasOneCoordToRatio(canvasCoord1D);\n    }\n\n    static _canvasOneCoordToRatio(canvasCoord1D) {\n      return _common_FloatPrecision_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].round(canvasCoord1D / _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES);\n    }\n\n    static _zoomScaleToStyleScale(zoomScale) {\n      return ` scale(${zoomScale}) `;\n    }\n\n  }\n\n  ;\n  TransformCalculator._sideSize = '50vmin';\n  return TransformCalculator;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/TransformCalculator.coffee?");

/***/ }),

/***/ "./source/public/index/script/MainCanvas/_MainCanvas.coffee":
/*!******************************************************************!*\
  !*** ./source/public/index/script/MainCanvas/_MainCanvas.coffee ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_AnimatedComponent_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_common/AnimatedComponent.coffee */ \"./source/public/_common/AnimatedComponent.coffee\");\n/* harmony import */ var _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_common/Globals.coffee */ \"./source/public/_common/Globals.coffee\");\n/* harmony import */ var _CoordinateSpaceConverter_coffee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoordinateSpaceConverter.coffee */ \"./source/public/index/script/MainCanvas/CoordinateSpaceConverter.coffee\");\n/* harmony import */ var _MouseEventHandler_coffee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MouseEventHandler.coffee */ \"./source/public/index/script/MainCanvas/MouseEventHandler.coffee\");\n/* harmony import */ var _TransformCalculator_coffee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransformCalculator.coffee */ \"./source/public/index/script/MainCanvas/TransformCalculator.coffee\");\n/* harmony import */ var _CanvasReticle_CanvasReticle_coffee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CanvasReticle/_CanvasReticle.coffee */ \"./source/public/index/script/MainCanvas/CanvasReticle/_CanvasReticle.coffee\");\nvar MainCanvas,\n    boundMethodCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new Error('Bound instance method accessed before binding');\n  }\n};\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainCanvas = function () {\n  class MainCanvas extends _common_AnimatedComponent_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(props) {\n      super(props); // TODO Only for reference while I don't have the ws server implemented so I can see tiles on the screen\n\n      this.componentDidMount = this.componentDidMount.bind(this);\n      this._computeAnimationStyle = this._computeAnimationStyle.bind(this);\n      this.getBoundingBox = this.getBoundingBox.bind(this);\n      this.render = this.render.bind(this);\n      this.canvasPosition = props.canvasPosition;\n      this.coordinateSpaceConverter = new _CoordinateSpaceConverter_coffee__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.getBoundingBox);\n      this.mouseEventHandler = new _MouseEventHandler_coffee__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.canvasPosition, this.getBoundingBox);\n    }\n\n    componentDidMount() {\n      var placeImg;\n      boundMethodCheck(this, MainCanvas);\n      super.componentDidMount();\n      placeImg = document.createElement('img');\n      placeImg.src = '/place.png';\n      return placeImg.onload = () => {\n        return document.getElementById('main-canvas').getContext('2d').drawImage(placeImg, 0, 0);\n      };\n    }\n\n    _computeAnimationStyle() {\n      boundMethodCheck(this, MainCanvas);\n      return {\n        transform: _TransformCalculator_coffee__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getTransformStyle(this.props.canvasPosition.getRaw())\n      };\n    }\n\n    getBoundingBox() {\n      boundMethodCheck(this, MainCanvas);\n      return document.getElementById(this.id).getBoundingClientRect();\n    }\n\n    render() {\n      boundMethodCheck(this, MainCanvas);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: this.id + '-parent',\n        onMouseDown: this.mouseEventHandler.onMouseDown,\n        onMouseMove: this.mouseEventHandler.onMouseMove,\n        onMouseUp: this.mouseEventHandler.onMouseUp,\n        onWheel: this.mouseEventHandler.onWheel\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n        id: this.id,\n        ref: this.ref,\n        width: _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES,\n        height: _common_Globals_coffee__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BOARD_SIDE_LENGTH_IN_TILES\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CanvasReticle_CanvasReticle_coffee__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        canvasPosition: this.canvasPosition,\n        coordinateSpaceConverter: this.coordinateSpaceConverter\n      }));\n    }\n\n  }\n\n  ;\n  MainCanvas.prototype.id = 'main-canvas';\n  return MainCanvas;\n}.call(undefined));\n\n//# sourceURL=webpack:///./source/public/index/script/MainCanvas/_MainCanvas.coffee?");

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