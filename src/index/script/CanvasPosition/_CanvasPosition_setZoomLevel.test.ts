import Rand from "../../../_common/script/Rand";
import UnitTestBase from "../../../_testing/UnitTestBase";
import CanvasPosition from "./CanvasPosition";

export default class CanvasPosition_setZoomLevel extends UnitTestBase {

	//##########################################################################

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let expected = this.generateIndex()
		let input = this.transformExpected(expected)
		return [
			input,
			expected
		]
	}

	//==========================================================================

	private generateIndex = () => Rand.int(0, this.testParameters.numAllowableZooms)

	//==========================================================================

	private transformExpected = (input: number): number => {
		if (this.shouldMakeLowerThanAcceptable(input)) {
			input = this.makeLowerThanAcceptable(input)
		} else if (this.shouldMakeHigherThanAcceptable(input)) {
			input = this.makeHigherThanAcceptable(input)
		}
		return this.fudgeUpward(input)
	}

	private shouldMakeLowerThanAcceptable = (input: number): number =>
		input == 0 && Rand.int(0, 2)
	
	private makeLowerThanAcceptable = (input: number): number =>
		input - this.testParameters.numAllowableZooms
	
	private shouldMakeHigherThanAcceptable = (input: number): number =>
		input == this.testParameters.numAllowableZooms - 1 && Rand.int(0, 2)
	
	private makeHigherThanAcceptable = (input: number): number =>
		input + this.testParameters.numAllowableZooms
	
	private fudgeUpward = (input: number): number =>
		input + Rand.float(0, 1)

	//##########################################################################

	protected runOneTestCase(testCase: any) {
		return new CanvasPosition().setZoomLevel(testCase).zoomLevel
	}

}

//##############################################################################

new CanvasPosition_setZoomLevel(1000, {
	numAllowableZooms: CanvasPosition['allowableZoomFactors'].length,
}).runUnitTest()

