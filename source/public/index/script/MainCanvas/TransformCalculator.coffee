import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import Globals from "./../../../_common/Globals.coffee"

export default class TransformCalculator
	
	@_sideSize: '50vmin'
	@_borderWidth: '150vmax'

	@getTransformStyle: (canvasPosition) ->
		this._zoomScaleToStyleScale(canvasPosition.zoomScale) + this._canvasCoordToStyleTranslate(canvasPosition)

	@_canvasCoordToStyleTranslate: (canvasCoord) ->
		" translate(#{this._canvasOneCoordToStyleTranslate canvasCoord.rawX}, #{this._canvasOneCoordToStyleTranslate canvasCoord.rawY})"

	@_canvasOneCoordToStyleTranslate: (canvasCoord1D) ->
		" calc(calc(#{this._canvasOneCoordToRatio canvasCoord1D} * -1 * #{this._sideSize}) - #{this._borderWidth}) "
	
	@_canvasOneCoordToRatio: (canvasCoord1D) -> FloatPrecision.round canvasCoord1D / Globals.BOARD_SIDE_LENGTH_IN_TILES

	@_zoomScaleToStyleScale: (zoomScale) ->
		" scale(#{zoomScale}) "

