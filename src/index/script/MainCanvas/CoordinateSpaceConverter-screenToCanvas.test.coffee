import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import Rand from "./../../../_common/script/Rand.coffee"
import FloatPrecision from "./../../../_common/script/FloatPrecision.coffee"
import CoordinateSpaceConverter from "./CoordinateSpaceConverter.coffee"

export default class UTM_CoordinateSpaceConverter_screenToCanvas extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		[ {
			testCase:
				point:
					x: 200
					y: 500
				canvasBoundingBox:
					x: 50
					y: 50
					width: 8000
					height: 8000
			expected:
				x: 37.5
				y: 112.5
		}, {
			testCase:
				point:
					x: 850
					y: 300
				canvasBoundingBox:
					x: -550
					y: -800
					width: 16000
					height: 16000
			expected:
				x: 175
				y: 137.5
		} ][i]
	
	_runOneTestCase: (testCase) =>
		csc = new CoordinateSpaceConverter -> testCase.canvasBoundingBox
		csc.screenToCanvas testCase.point

new UTM_CoordinateSpaceConverter_screenToCanvas 2, { canvasSideLength: 2000 }
	.runUnitTest()

