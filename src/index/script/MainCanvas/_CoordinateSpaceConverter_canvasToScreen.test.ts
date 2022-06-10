import Point from "../../../_common/script/Point";
import UnitTestByExamplesBase from "../../../_testing/UnitTestByExamplesBase";
import CoordinateSpaceConverter from "./_CoordinateSpaceConverter";

const examples: any[][2] = [
	[
		{
			canvasPoint: new Point({x: 4.5, y: 9.5}),
			canvasBoundingBox: {x: 50, y: 50, width: 8000, height: 8000}
		},
		new Point({x: 68, y: 88})
	],
	[
		{
			canvasPoint: new Point({x: -11, y: -24}),
			canvasBoundingBox: {x: -400, y: -600, width: 16000, height: 16000}
		},
		new Point({x: -488, y: -792})
	]
]

//##############################################################################

export default class CoordinateSpaceConverter_canvasToScreen extends UnitTestByExamplesBase {

	protected runOneTestCase(testCase: any) {
		let csc = new CoordinateSpaceConverter(() => testCase.canvasBoundingBox)
		return csc.canvasToScreen(testCase.canvasPoint)
	}

}

//##############################################################################

new CoordinateSpaceConverter_canvasToScreen(examples, {}).runUnitTest()

