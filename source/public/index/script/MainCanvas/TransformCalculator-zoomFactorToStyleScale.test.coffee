import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import TransformCalculator from "./TransformCalculator.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import Rand from "./../../../_common/Rand.coffee"

export default class UTM_TransformCalculator_zoomScaleToStyleScale extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		expectedScale = Rand.float 0, 1000
		testCase = expectedScale / 1
		expected = " scale(#{expectedScale}) "

		{ testCase, expected }
	
	_runOneTestCase: (testCase) =>
		TransformCalculator._zoomScaleToStyleScale testCase

new UTM_TransformCalculator_zoomScaleToStyleScale 1000, {}
	.runUnitTest()

