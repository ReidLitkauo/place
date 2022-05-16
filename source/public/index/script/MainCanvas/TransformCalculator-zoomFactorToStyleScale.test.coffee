import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import TransformCalculator from "./TransformCalculator.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import Rand from "./../../../_common/Rand.coffee"

export default class UTM_TransformCalculator_zoomFactorToStyleScale extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		expectedScale = Rand.float 0, 1000
		testCase = expectedScale / 100
		expected = " scale(#{expectedScale}) "

		{ testCase, expected }
	
	_runOneTestCase: (testCase) =>
		TransformCalculator._zoomFactorToStyleScale testCase

new UTM_TransformCalculator_zoomFactorToStyleScale 'TransformCalculator_zoomFactorToStyleScale', 1000, {}
	.runUnitTest()

