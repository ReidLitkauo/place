import FloatPrecision from '../../../_common/FloatPrecision.coffee'
import Globals from '../../../_common/Globals.coffee'

export default class CoordinateSpaceConverter

	constructor: (@getBoundingBox) ->

	screenToCanvas: (screenCoords) =>
		canvasBoundingBox = this.getBoundingBox()
		screenCoordsRelativeToCanvasOrigin =
			x: screenCoords.x - canvasBoundingBox.x
			y: screenCoords.y - canvasBoundingBox.y
		proportionIntoCanvas =
			x: screenCoordsRelativeToCanvasOrigin.x / canvasBoundingBox.width
			y: screenCoordsRelativeToCanvasOrigin.y / canvasBoundingBox.height
		canvasCoords =
			x: proportionIntoCanvas.x * Globals.BOARD_SIDE_LENGTH_IN_TILES
			y: proportionIntoCanvas.y * Globals.BOARD_SIDE_LENGTH_IN_TILES
		x: FloatPrecision.round canvasCoords.x
		y: FloatPrecision.round canvasCoords.y

	canvasToScreen: (canvasCoords) =>
		canvasBoundingBox = this.getBoundingBox()
		proportionIntoCanvas =
			x: canvasCoords.x / Globals.BOARD_SIDE_LENGTH_IN_TILES
			y: canvasCoords.y / Globals.BOARD_SIDE_LENGTH_IN_TILES
		screenCoordsRelativeToCanvasOrigin =
			x: proportionIntoCanvas.x * canvasBoundingBox.width
			y: proportionIntoCanvas.y * canvasBoundingBox.height
		screenCoords =
			x: screenCoordsRelativeToCanvasOrigin.x + canvasBoundingBox.x
			y: screenCoordsRelativeToCanvasOrigin.y + canvasBoundingBox.y
		x: FloatPrecision.round screenCoords.x
		y: FloatPrecision.round screenCoords.y

