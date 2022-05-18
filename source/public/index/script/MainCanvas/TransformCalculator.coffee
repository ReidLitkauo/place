import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import Globals from "./../../../_common/Globals.coffee"

export default class TransformCalculator
	
	@getTransformStyle: (canvasPosition) ->
		this._zoomScaleToStyleScale(canvasPosition.zoomScale) + this._canvasCoordToStyleTranslate(canvasPosition.rawX, canvasPosition.rawY)

	@_canvasCoordToStyleTranslate: (x, y) ->
		" translate(#{this._canvasOneCoordToStyleTranslate x}, #{this._canvasOneCoordToStyleTranslate y}) "

	@_canvasOneCoordToStyleTranslate: (canvasCoord1D) ->
		" -#{this._canvasOneCoordToPercent canvasCoord1D}% "
	
	@_canvasOneCoordToPercent: (canvasCoord1D) -> 100 * this._canvasOneCoordToRatio canvasCoord1D

	@_canvasOneCoordToRatio: (canvasCoord1D) -> FloatPrecision.round canvasCoord1D / Globals.BOARD_SIDE_LENGTH_IN_TILES

	@_zoomScaleToStyleScale: (zoomScale) ->
		" scale(#{zoomScale}) "

