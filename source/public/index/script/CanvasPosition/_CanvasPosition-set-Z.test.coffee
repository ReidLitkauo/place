import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"
import Rand from "./../../../_common/Rand.coffee"

export default class UTM_CanvasPosition_set_Z extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		expected = this._generateIndex()
		input = this._transformExpected expected

		testCase: input
		expected: expected
	
	_generateIndex: () => Rand.int 0, this._params.numAllowableZooms

	_transformExpected: (input) =>
		if this._shouldMakeLowerThanAcceptable input
			input = this._lowerBelowAcceptable input
		if this._shouldMakeHigherThanAcceptable input
			input = this._raiseAboveAcceptable input
		this._fudgeUpward input
	
	_shouldMakeLowerThanAcceptable: (input) => input == 0 && Rand.int 0, 2
	_shouldMakeHigherThanAcceptable: (input) => input == this._params.numAllowableZooms - 1 && Rand.int 0, 2

	_lowerBelowAcceptable: (input) => 0 - Rand.int 0, this._params.numAllowableZooms
	_raiseAboveAcceptable: (input) => this._params.numAllowableZooms - 1 + Rand.int 0, this._params.numAllowableZooms

	_fudgeUpward: (input) => input + Rand.float 0, 1

	_runOneTestCase: (testCase) =>
		pos = CanvasPosition.setZoomLevel(testCase)
		pos.zoomLevel

new UTM_CanvasPosition_set_Z '_CanvasPosition-set-Z', 1000, { numAllowableZooms: 10 }
	.runUnitTest()

