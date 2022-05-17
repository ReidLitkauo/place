import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import Rand from "./../../../_common/Rand.coffee"
import FloatPrecision from "./../../../_common/FloatPrecision.coffee"
import CoordinateSpaceConverter from "./CoordinateSpaceConverter.coffee"

export default class UTM_CoordinateSpaceConverter_canvasToScreenToCanvas extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		pointInCanvasSpace =
			x: Rand.float 0, this._params.canvasSideLength
			y: Rand.float 0, this._params.canvasSideLength
		boundingBoxSize = Rand.float 0, this._params.upperBound

		testCase:
			point: pointInCanvasSpace
			canvasBoundingBox:
				x: Rand.float(0, this._params.upperBound) - Rand.float(0, this._params.upperBound)
				y: Rand.float(0, this._params.upperBound) - Rand.float(0, this._params.upperBound)
				width: boundingBoxSize
				height: boundingBoxSize
		expected: pointInCanvasSpace
	
	_runOneTestCase: (testCase) =>
		csc = new CoordinateSpaceConverter -> testCase.canvasBoundingBox
		csc.screenToCanvas csc.canvasToScreen testCase.point

new UTM_CoordinateSpaceConverter_canvasToScreenToCanvas 5, { upperBound: 100000, canvasSideLength: 2000 }
	.runUnitTest()

