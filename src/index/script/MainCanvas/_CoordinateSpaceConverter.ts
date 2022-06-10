import FloatPrecision from "../../../_common/script/FloatPrecision"
import Globals from "../../../_common/script/Globals"
import Point from "../../../_common/script/Point"


export default class CoordinateSpaceConverter {

	getBoundingBox: () => any

	constructor (getBoundingBox: () => any) {
		this.getBoundingBox = getBoundingBox
	}

	screenToCanvas = (screenCoords: Point): Point => {
		let canvasBoundingBox = this.getBoundingBox()
		let screenCoordsRelativeToCanvasOrigin = new Point({
			x: screenCoords.x - canvasBoundingBox.x,
			y: screenCoords.y - canvasBoundingBox.y,
		})
		let proportionIntoCanvas = new Point({
			x: screenCoordsRelativeToCanvasOrigin.x / canvasBoundingBox.width,
			y: screenCoordsRelativeToCanvasOrigin.y / canvasBoundingBox.height,
		})
		let canvasCoords = new Point({
			x: proportionIntoCanvas.x * Globals.BOARD_SIDE_LENGTH_IN_TILES,
			y: proportionIntoCanvas.y * Globals.BOARD_SIDE_LENGTH_IN_TILES,
		})
		return new Point({
			x: FloatPrecision.round(canvasCoords.x),
			y: FloatPrecision.round(canvasCoords.y),
		})
	}

	canvasToScreen = (canvasCoords: Point): Point => {
		let canvasBoundingBox = this.getBoundingBox()
		let proportionIntoCanvas = new Point({
			x: canvasCoords.x / Globals.BOARD_SIDE_LENGTH_IN_TILES,
			y: canvasCoords.y / Globals.BOARD_SIDE_LENGTH_IN_TILES,
		})
		let screenCoordsRelativeToCanvasOrigin = new Point({
			x: proportionIntoCanvas.x * canvasBoundingBox.width,
			y: proportionIntoCanvas.y * canvasBoundingBox.height,
		})
		let screenCoords = new Point({
			x: screenCoordsRelativeToCanvasOrigin.x + canvasBoundingBox.x,
			y: screenCoordsRelativeToCanvasOrigin.y + canvasBoundingBox.y,
		})
		return new Point({
			x: FloatPrecision.round(screenCoords.x),
			y: FloatPrecision.round(screenCoords.y),
		})
	}

}