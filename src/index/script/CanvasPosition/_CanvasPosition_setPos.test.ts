import UnitTestBase from "../../../_testing/UnitTestBase";
import CanvasPosition from "./CanvasPosition";
import FloatPrecision from "../../../_common/script/FloatPrecision";
import Rand from "../../../_common/script/Rand";
import Point from "../../../_common/script/Point";

export default class CanvasPosition_setPos extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let [xRaw, xExpected] = this.getCoordRawAndExpected()
		let [yRaw, yExpected] = this.getCoordRawAndExpected()
		return [
			new Point({x: xRaw, y: yRaw}),
			new Point({x: xExpected, y: yExpected}),
		]
	}

	private getCoordRawAndExpected = (): [number, number] => {
		let willCoordBeOOB: number = this.getWillCoordBeOOB()
		let raw = this.getRandomCoord()
		if (willCoordBeOOB < 0) {
			return [
				raw - this.testParameters.sideLength,
				0
			]
		} else if (willCoordBeOOB > 0) {
			return [
				raw + this.testParameters.sideLength,
				this.testParameters.sideLength - (10 ** -FloatPrecision.PRECISION)
			]
		} else {
			return [
				raw,
				raw
			]
		}
	}

	private getWillCoordBeOOB = () => Rand.int(-1, 2)

	private getRandomCoord = () => Rand.float(0, this.testParameters.sideLength)

	//##########################################################################

	protected runOneTestCase(testCase: any) {
		return new CanvasPosition().setPos(testCase).pos
	}

}

//##############################################################################

new CanvasPosition_setPos(1000, {
	sideLength: 2000
}).runUnitTest()

