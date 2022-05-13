import TestManagerBase from "./../../../TestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

class TestManager extends TestManagerBase

	constructor: (@_numTestCases, @_precision, @_length) ->
		super()

	_buildOneTestCase: () =>
		expected = this._generateIndex()
		input = this._transformExpected expected

		input: input
		result: expected
	
	_generateIndex: () => this._randInt 0, this._length

	_transformExpected: (input) =>
		if this._shouldMakeLowerThanAcceptable input
			input = this._lowerBelowAcceptable input
		if this._shouldMakeHigherThanAcceptable input
			input = this._raiseAboveAcceptable input
		this._fudgeUpward input
	
	_shouldMakeLowerThanAcceptable: (input) => input == 10 && this._randInt 0, 2
	_shouldMakeHigherThanAcceptable: (input) => input == this._length - 1 && this._randInt 0, 2

	_lowerBelowAcceptable: (input) => 0 - this._randInt 0, this._length
	_raiseAboveAcceptable: (input) => this._length - 1 + this._randInt 0, this._length

	_fudgeUpward: (input) => input + this._randFloat 0, 1

	_runOneTestCase: (testCase) =>
		CanvasPosition.set(null, null, testCase.input).zoomLevel

test '_CanvasPosition-set-Z', ->
	new TestManager 5, 6, 10
		.buildTestCases()
		.runTestCases()
		.assertTestCases()
