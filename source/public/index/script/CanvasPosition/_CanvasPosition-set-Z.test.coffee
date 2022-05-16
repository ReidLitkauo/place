import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

export default class UTM_CanvasPosition_set_Z extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		expected = this._generateIndex()
		input = this._transformExpected expected

		testCase: input
		expected: expected
	
	_generateIndex: () => this._randInt 0, this._params.numAllowableZooms

	_transformExpected: (input) =>
		if this._shouldMakeLowerThanAcceptable input
			input = this._lowerBelowAcceptable input
		if this._shouldMakeHigherThanAcceptable input
			input = this._raiseAboveAcceptable input
		this._fudgeUpward input
	
	_shouldMakeLowerThanAcceptable: (input) => input == 0 && this._randInt 0, 2
	_shouldMakeHigherThanAcceptable: (input) => input == this._params.numAllowableZooms - 1 && this._randInt 0, 2

	_lowerBelowAcceptable: (input) => 0 - this._randInt 0, this._params.numAllowableZooms
	_raiseAboveAcceptable: (input) => this._params.numAllowableZooms - 1 + this._randInt 0, this._params.numAllowableZooms

	_fudgeUpward: (input) => input + this._randFloat 0, 1

	_runOneTestCase: (testCase) =>
		pos = CanvasPosition.setZoomLevel(testCase)
		pos.zoomLevel

new UTM_CanvasPosition_set_Z '_CanvasPosition-set-Z', 1000, { numAllowableZooms: 10 }
	.runUnitTest()

