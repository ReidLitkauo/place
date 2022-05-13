import TestManagerBase from "./../../../TestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

class TestManager extends TestManagerBase

	constructor: (@_numTestCases, @_precision, @_minPosition, @_maxPosition) ->
		super()

	_buildOneTestCase: (i) ->
		testX = this._getCoordRawAndExpected()
		testY = this._getCoordRawAndExpected()

		raw: 
			x: testX.raw
			y: testY.raw
		result: 
			x: testX.expected
			y: testY.expected
	
	_getCoordRawAndExpected: () ->
		oobStatus = this._getCoordOOBStatus()
		raw = this._getRandomCoord()
		if oobStatus < 0
			raw: raw - (this._maxPosition - this._minPosition)
			expected: this._minPosition
		else if oobStatus > 0
			raw: raw + (this._maxPosition - this._minPosition)
			expected: this._maxPosition - (10 ** -this._precision)
		else
			raw: raw
			expected: raw
	
	_getCoordOOBStatus: () ->
		this._randInt -1, 2
	
	_getRandomCoord: () -> this._randFloat this._minPosition, this._maxPosition

	_runOneTestCase: (testCase) ->
		pos = CanvasPosition.set testCase.raw.x, testCase.raw.y, null

		x: pos.rawX
		y: pos.rawY



test '_CanvasPosition-set-XY', ->
	new TestManager 5, 6, 0, 2000
		.buildTestCases()
		.runTestCases()
		.assertTestCases()

