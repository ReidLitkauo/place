import Point from "../../../src/_common/script/Point";
import UnitTestByExamples from "../../UnitTestByExamples";
import CoordinateSpaceConverter from "../../../src/index/script/MainCanvas/_CoordinateSpaceConverter";
import TestCase from "../../TestCase";

export default class CoordinateSpaceConverter_canvasToScreen extends UnitTestByExamples {

	protected runOneTestInput(input: any) {
		return new CoordinateSpaceConverter(() => input.canvasBoundingBox).canvasToScreen(input.canvasPoint)
	}

}

new CoordinateSpaceConverter_canvasToScreen([
	new TestCase({
		input: {
			canvasPoint: new Point({x: 4.5, y: 9.5}),
			canvasBoundingBox: {x: 50, y: 50, width: 8000, height: 8000}
		},
		output: new Point({x: 68, y: 88})
	}),
	new TestCase({
		input: {
			canvasPoint: new Point({x: -11, y: -24}),
			canvasBoundingBox: {x: -400, y: -600, width: 16000, height: 16000}
		},
		output: new Point({x: -488, y: -792})
	})
], {}).runUnitTest()

