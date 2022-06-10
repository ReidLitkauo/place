import FloatPrecision from "../../../_common/script/FloatPrecision";
import Point from "../../../_common/script/Point";
import Rand from "../../../_common/script/Rand";
import UnitTestBase from "../../../_testing/UnitTestBase";
import TransformCalculator from "./_TransformCalculator";

export default class TransformCalculator_canvasCoordToStyleTranslate extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let expectedRatio = new Point({x: Rand.float(0,1), y: Rand.float(0,1)})
		let testCase = new Point({
			x: FloatPrecision.round(expectedRatio.x * this.testParameters.sideLength),
			y: FloatPrecision.round(expectedRatio.y * this.testParameters.sideLength),
		})
		let expected = ` translate( ${this.buildTranslateStringForOneCoord(expectedRatio.x)} , ${this.buildTranslateStringForOneCoord(expectedRatio.y)} ) `
		return [testCase, expected]
	}

	private buildTranslateStringForOneCoord = (coord: number): string =>
		` -${FloatPrecision.round(coord * 100)}% `

	protected runOneTestCase(testCase: any) {
		return TransformCalculator['canvasCoordToStyleTranslate'](testCase)
	}

}

new TransformCalculator_canvasCoordToStyleTranslate(1000, {
	sideLength: 2000
}).runUnitTest()

