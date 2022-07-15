import UnitTestByExamples from "../../UnitTestByExamples";
import CoordinateSpaceConverter from "../../../src/index/script/MainCanvas/_CoordinateSpaceConverter";
import Point from "../../../src/_common/script/Point";
import TestCase from "../../TestCase";

export default class CoordinateSpaceConverter_screenToCanvas extends UnitTestByExamples {

	protected runOneTestInput(input: any) {
		return new CoordinateSpaceConverter(() => input.canvasBoundingBox).screenToCanvas(input.screenPoint)
	}

}

new CoordinateSpaceConverter_screenToCanvas([
	new TestCase({
		input: {
			screenPoint: new Point({x: 200, y: 500}),
			canvasBoundingBox: {x: 50, y: 50, width: 8000, height: 8000}
		},
		output: new Point({x: 37.5, y: 112.5})
	}),
	new TestCase({
		input: {
			screenPoint: new Point({x: 850, y: 300}),
			canvasBoundingBox: {x: -550, y: -800, width: 16000, height: 16000}
		},
		output: new Point({x: 175, y: 137.5})
	})
], {}).runUnitTest()

