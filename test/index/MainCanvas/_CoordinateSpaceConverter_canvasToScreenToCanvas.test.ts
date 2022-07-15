import Point from "../../../src/_common/script/Point";
import Rand from "../../../src/_common/script/Rand";
import UnitTestByScattershot from "../../UnitTestByScattershot";
import CoordinateSpaceConverter from "../../../src/index/script/MainCanvas/_CoordinateSpaceConverter";

export default class CoordinateSpaceConverter_canvasToScreenToCanvas extends UnitTestByScattershot {

	protected buildOneRandomOutput() {
		return new Point({x: this.getRandomCanvasCoord(), y: this.getRandomCanvasCoord()})
	}

	private getRandomCanvasCoord = (): number =>
		Rand.float(0, this.testParameters.canvasSideLength)

	protected buildTestInputFromOutput(output: any) {
		let boundingBoxSize = Rand.float(0, this.testParameters.upperBound)
		return {
			canvasPoint: output,
			boundingBox: {
				x: Rand.float(0, this.testParameters.upperBound) - Rand.float(0, this.testParameters.upperBound),
				y: Rand.float(0, this.testParameters.upperBound) - Rand.float(0, this.testParameters.upperBound),
				width: boundingBoxSize,
				height: boundingBoxSize,
			}
		}
	}

	protected runOneTestInput(input: any) {
		let csc = new CoordinateSpaceConverter(() => input.boundingBox)
		return csc.screenToCanvas(csc.canvasToScreen(input.canvasPoint))
	}

}

new CoordinateSpaceConverter_canvasToScreenToCanvas(10, {
	upperBound: 100000,
	canvasSideLength: 2000,
}).runUnitTest()

