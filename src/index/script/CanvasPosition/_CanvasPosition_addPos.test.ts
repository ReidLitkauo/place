import Point from "../../../_common/script/Point";
import CanvasPosition from "./CanvasPosition";
import CanvasPosition_setPos from "./_CanvasPosition_setPos.test";

export default class CanvasPosition_addPos extends CanvasPosition_setPos {
	
	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let builtTestExpected = super.buildOneTestCaseAndExpected(i)
		let total = builtTestExpected[0]
		let addend1 = new Point({x: this.testParameters.sideLength / 2, y: this.testParameters.sideLength / 2})
		let addend2 = new Point({x: total.x - addend1.x, y: total.y - addend1.y})
		return [
			{addend1, addend2},
			builtTestExpected[1]
		]
	}

	protected runOneTestCase(testCase: any) {
		let canvasPosition = new CanvasPosition()
		canvasPosition.setPos(testCase.addend1)
		return canvasPosition.addPos(testCase.addend2).pos
	}

}

new CanvasPosition_addPos(1000, {
	sideLength: 2000
}).runUnitTest()

