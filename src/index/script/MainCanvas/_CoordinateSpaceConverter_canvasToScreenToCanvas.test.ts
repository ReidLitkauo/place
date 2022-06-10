import Point from "../../../_common/script/Point";
import Rand from "../../../_common/script/Rand";
import UnitTestBase from "../../../_testing/UnitTestBase";
import CoordinateSpaceConverter from "./_CoordinateSpaceConverter";

export default class CoordinateSpaceConverter_canvasToScreenToCanvas extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let canvasPoint = new Point({x: this.getRandomCanvasCoord(), y: this.getRandomCanvasCoord()})
		let boundingBoxSize = Rand.float(0, this.testParameters.upperBound)
		let boundingBox = {
			x: Rand.float(0, this.testParameters.upperBound) - Rand.float(0, this.testParameters.upperBound),
			y: Rand.float(0, this.testParameters.upperBound) - Rand.float(0, this.testParameters.upperBound),
			width: boundingBoxSize,
			height: boundingBoxSize,
		}
		return [
			{ canvasPoint, boundingBox },
			canvasPoint
		]
	}

	private getRandomCanvasCoord = (): number =>
		Rand.float(0, this.testParameters.canvasSideLength)

	protected runOneTestCase(testCase: any) {
		let csc = new CoordinateSpaceConverter(() => testCase.boundingBox)
		return csc.screenToCanvas(csc.canvasToScreen(testCase.canvasPoint))
	}

}

new CoordinateSpaceConverter_canvasToScreenToCanvas(5, {
	upperBound: 100000,
	canvasSideLength: 2000,
}).runUnitTest()

