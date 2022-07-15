import Rand from "../../../src/_common/script/Rand";
import UnitTestByScattershot from "../../UnitTestByScattershot";
import CanvasPosition from "../../../src/index/script/CanvasPosition/CanvasPosition";

export default class CanvasPosition_setZoomLevel extends UnitTestByScattershot {

	protected buildOneRandomOutput() {
		return Rand.int(0, this.testParameters.numAllowableZooms)
	}

	protected buildTestInputFromOutput(output: any) {
		let input = this.buildTestInputIntFromOutput(output)
		input = this.fudgeUpward(input)
		return input
	}

	private buildTestInputIntFromOutput = (output: number): number => {
		if (output == 0) {
			return this.buildUnderflowInput()
		} else if (output == this.testParameters.numAllowableZooms - 1) {
			return this.buildOverflowInput()
		} else {
			return output
		}
	}

	private buildUnderflowInput = (): number => {
		return Rand.int(-this.testParameters.numAllowableZooms, 1)
	}

	private buildOverflowInput = (): number => {
		return Rand.int(this.testParameters.numAllowableZooms - 1, 2 * this.testParameters.numAllowableZooms)
	}

	private fudgeUpward = (input: number): number =>
		input + Rand.float(0, 1)

	protected runOneTestInput(input: any) {
		return new CanvasPosition().setZoomLevel(input).zoomLevel
	}

}

//##############################################################################

new CanvasPosition_setZoomLevel(1000, {
	numAllowableZooms: CanvasPosition['allowableZoomFactors'].length,
}).runUnitTest()

