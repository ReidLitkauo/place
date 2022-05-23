import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import Rand from "./../../../_common/script/Rand.coffee"
import FloatPrecision from "./../../../_common/script/FloatPrecision.coffee"
import CoordinateSpaceConverter from "./CoordinateSpaceConverter.coffee"

export default class UTM_CoordinateSpaceConverter_canvasToScreen extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		[ {
			testCase:
				point:
					x: 4.5
					y: 9.5
				canvasBoundingBox:
					x: 50
					y: 50
					width: 8000
					height: 8000
			expected:
				x: 68
				y: 88
		}, {
			testCase:
				point:
					x: -11
					y: -24
				canvasBoundingBox:
					x: -400
					y: -600
					width: 16000
					height: 16000
			expected:
				x: -488
				y: -792
		} ][i]
	
	_runOneTestCase: (testCase) =>
		csc = new CoordinateSpaceConverter -> testCase.canvasBoundingBox
		csc.canvasToScreen testCase.point

new UTM_CoordinateSpaceConverter_canvasToScreen 2, { canvasSideLength: 2000 }
	.runUnitTest()

