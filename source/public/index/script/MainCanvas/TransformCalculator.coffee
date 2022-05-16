import MainCanvas from "./_MainCanvas.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"

export default class TransformCalculator
	
	@_sideSize: '50vmin'
	@_borderWidth: '150vmax'

	@getTransformStyle: (canvasPosition) ->
		this._zoomFactorToStyleScale(canvasPosition.zoomFactor) + this._canvasCoordToStyleTranslate(canvasPosition)

	@_canvasCoordToStyleTranslate: (canvasCoord) ->
		" translate(#{this._canvasOneCoordToStyleTranslate canvasCoord.rawX}, #{this._canvasOneCoordToStyleTranslate canvasCoord.rawY})"

	@_canvasOneCoordToStyleTranslate: (canvasCoord1D) ->
		" calc(calc(#{this._canvasOneCoordToRatio canvasCoord1D} * -1 * #{this._sideSize}) - #{this._borderWidth}) "
	
	@_canvasOneCoordToRatio: (canvasCoord1D) -> FloatPrecision.round canvasCoord1D / MainCanvas.sideLengthInTiles

	@_zoomFactorToStyleScale: (zoomFactor) ->
		" scale(#{this._zoomFactorToScale(zoomFactor)}) "
	
	@_zoomFactorToScale: (zoomFactor) -> FloatPrecision.round zoomFactor * 100

