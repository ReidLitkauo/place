import FloatPrecision from "../../../_common/script/FloatPrecision";
import Globals from "../../../_common/script/Globals";
import Point from "../../../_common/script/Point";
import RawCanvasPosition from "../CanvasPosition/RawCanvasPosition";

export default class TransformCalculator {

	static getTransformStyle (rawCanvasPosition: RawCanvasPosition): string {
		return this.zoomScaleToStyleScale(rawCanvasPosition.zoomScale) + this.canvasCoordToStyleTranslate(rawCanvasPosition.pos)
	}

	private static zoomScaleToStyleScale (zoomScale: number): string {
		return ` scale(${zoomScale}) `
	}

	private static canvasCoordToStyleTranslate (coord: Point): string {
		return ` translate( ${this.canvasOneCoordToStyleTranslate(coord.x)} , ${this.canvasOneCoordToStyleTranslate(coord.y)} ) `
	}

	private static canvasOneCoordToStyleTranslate (coord1D: number): string {
		return ` -${this.canvasOneCoordToPercent(coord1D)}% `
	}

	private static canvasOneCoordToPercent (coord1D: number): number {
		return FloatPrecision.round(coord1D * (100 / Globals.BOARD_SIDE_LENGTH_IN_TILES))
	}

}

