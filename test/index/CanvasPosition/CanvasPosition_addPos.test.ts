import Point from "../../../src/_common/script/Point";
import CanvasPosition from "../../../src/index/script/CanvasPosition/CanvasPosition";
import CanvasPosition_setPos from "./CanvasPosition_setPos.test";

export default class CanvasPosition_addPos extends CanvasPosition_setPos {

	protected buildTestInputFromOutput = (output: Point): any => {
		let addend1 = new Point({
			x: Math.floor(this.testParameters.sideLength / 2),
			y: Math.floor(this.testParameters.sideLength / 2)
		})
		let addend2 = new Point({
			x: output.x - addend1.x,
			y: output.y - addend1.y
		})
		return { addend1, addend2 }
	}

	protected runOneTestInput(input: any): Point {
		let cp = new CanvasPosition()
		cp.setPos(input.addend1)
		return cp.addPos(input.addend2).pos
	}

}

new CanvasPosition_addPos(1000, {
	sideLength: 2000
}).runUnitTest()

