import CanvasPosition from "./CanvasPosition";
import CanvasPosition_setZoomLevel from "./_CanvasPosition_setZoomLevel.test";

export default class CanvasPosition_addZoomLevel extends CanvasPosition_setZoomLevel {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let builtTestExpected = super.buildOneTestCaseAndExpected(i)
		let total = builtTestExpected[0]
		let addend1 = Math.floor(this.testParameters.numAllowableZooms / 2)
		let addend2 = total - addend1
		return [
			{addend1, addend2},
			builtTestExpected[1]
		]
	}

	protected runOneTestCase(testCase: any): number {
		let canvasPosition = new CanvasPosition()
		canvasPosition.setZoomLevel(testCase.addend1)
		return canvasPosition.addZoomLevel(testCase.addend2).zoomLevel
	}

}

new CanvasPosition_addZoomLevel(1000, {
	numAllowableZooms: CanvasPosition['allowableZoomFactors'].length,
}).runUnitTest()

