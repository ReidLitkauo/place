import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import TransformCalculator from "./TransformCalculator.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import Rand from "./../../../_common/Rand.coffee"

export default class UTM_TransformCalculator_canvasCoordToStyleTranslate extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		expectedRatio =
			x: Rand.float 0, 1
			y: Rand.float 0, 1
		testCase =
			rawX: FloatPrecision.round expectedRatio.x * this._params.sideLength
			rawY: FloatPrecision.round expectedRatio.y * this._params.sideLength
		expected = " translate(#{this._buildTranslateStringForOneCoord expectedRatio.x}, #{this._buildTranslateStringForOneCoord expectedRatio.y}) "

		{ testCase, expected }

	_buildTranslateStringForOneCoord: (coord) =>
		" -#{coord * 100}% "
	
	_runOneTestCase: (testCase) =>
		TransformCalculator._canvasCoordToStyleTranslate testCase.rawX, testCase.rawY

new UTM_TransformCalculator_canvasCoordToStyleTranslate 1000, { sideLength: 2000 }
	.runUnitTest()

