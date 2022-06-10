import Point from "../../../_common/script/Point";
import UnitTestByExamplesBase from "../../../_testing/UnitTestByExamplesBase";
import CoordinateSpaceConverter from "./_CoordinateSpaceConverter";

const examples: any[][2] = [
	[
		{
			screenPoint: new Point({x: 200, y: 500}),
			canvasBoundingBox: {x: 50, y: 50, width: 8000, height: 8000}
		},
		new Point({x: 37.5, y: 112.5})
	],
	[
		{
			screenPoint: new Point({x:850, y: 300}),
			canvasBoundingBox: {x: -550, y: -800, width: 16000, height: 16000}
		},
		new Point({x: 175, y: 137.5})
	]
]

//##############################################################################

export default class CoordinateSpaceConverter_screenToCanvas extends UnitTestByExamplesBase {

	protected runOneTestCase(testCase: any) {
		let csc = new CoordinateSpaceConverter(() => testCase.canvasBoundingBox)
		return csc.screenToCanvas(testCase.screenPoint)
	}

}

//##############################################################################

new CoordinateSpaceConverter_screenToCanvas(examples, {}).runUnitTest()

