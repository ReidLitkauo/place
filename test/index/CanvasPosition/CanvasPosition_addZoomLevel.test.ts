import Rand from "../../../src/_common/script/Rand";
import UnitTestByScattershot from "../../UnitTestByScattershot";
import CanvasPosition from "../../../src/index/script/CanvasPosition/CanvasPosition";
import CanvasPosition_setZoomLevel from "./CanvasPosition_setZoomLevel.test";

export default class CanvasPosition_addZoomLevel extends CanvasPosition_setZoomLevel {

	protected buildTestInputFromOutput(output: any): any {
		let addend1 = Math.floor(this.testParameters.numAllowableZooms / 2)
		let addend2 = output - addend1
		return { addend1, addend2 }
	}

	protected runOneTestInput(input: any): number {
		let cp = new CanvasPosition()
		cp.setZoomLevel(input.addend1)
		return cp.addZoomLevel(input.addend2).zoomLevel
	}
	
}

new CanvasPosition_addZoomLevel(1000, {
	numAllowableZooms: CanvasPosition['allowableZoomFactors'].length,
}).runUnitTest()

