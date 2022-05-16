import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import Rand from "./../../../_common/Rand.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import CoordinateSpaceConverter from "./CoordinateSpaceConverter.coffee"

export default class UTM_CoordinateSpaceConverter_canvasToScreenToCanvas extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		point =
			x: Rand.float(0, this._params.canvasSideLength)
			y: Rand.float(0, this._params.canvasSideLength)
		


		testCase:
			boundingBox:
				x: Rand.float(0, this._params.upperBound) - Rand.float(0, this._params.upperBound)
				y: Rand.float(0, this._params.upperBound) - Rand.float(0, this._params.upperBound)
				size: Rand.float(0, this._params.canvasSideLength)
			point:
				x: Rand.float(0, this._params.canvasSideLength)
				y: Rand.float(0, this._params.canvasSideLength)
		



		result = Rand.float 0, this._params.upperBound
		firstAddend = Rand.float 0, this._params.upperBound
		secondAddend = result - firstAddend

		testCase: {firstAddend, secondAddend}
		expected: result
	
	_runOneTestCase: (testCase) =>
		FloatPrecision.round sum testCase.firstAddend, testCase.secondAddend

new UTM_CoordinateSpaceConverter_canvasToScreenToCanvas 5, { upperBound: 100000, canvasSideLength: 2000 }
	.runUnitTest()

