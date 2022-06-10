import Rand from "../../../_common/script/Rand";
import UnitTestBase from "../../../_testing/UnitTestBase";
import TransformCalculator from "./_TransformCalculator";

export default class TransformCalculator_zoomFactorToStyleScale extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let expectedScale = Rand.float(0, 1000)
		let testCase = expectedScale * 1
		let expected = ` scale(${expectedScale}) `
		return [ testCase, expected ]
	}

	protected runOneTestCase(testCase: any) {
		return TransformCalculator['zoomScaleToStyleScale'](testCase)
	}

}

new TransformCalculator_zoomFactorToStyleScale(1000, {}).runUnitTest()

