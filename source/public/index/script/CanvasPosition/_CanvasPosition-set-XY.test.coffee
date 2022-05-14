import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

class UnitTestManager extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) ->
		testX = this._getCoordRawAndExpected()
		testY = this._getCoordRawAndExpected()

		testCase:
			x: testX.raw
			y: testY.raw
		expected:
			x: testX.expected
			y: testY.expected
	
	_getCoordRawAndExpected: () ->
		oobStatus = this._getCoordOOBStatus()
		raw = this._getRandomCoord()
		if oobStatus < 0
			raw: raw - (this._params.maxPosition - this._params.minPosition)
			expected: this._params.minPosition
		else if oobStatus > 0
			raw: raw + (this._params.maxPosition - this._params.minPosition)
			expected: this._params.maxPosition - (10 ** -this.PRECISION)
		else
			raw: raw
			expected: raw
	
	_getCoordOOBStatus: () ->
		this._randInt -1, 2
	
	_getRandomCoord: () -> this._randFloat this._params.minPosition, this._params.maxPosition

	_runOneTestCase: (testCase) ->
		pos = CanvasPosition.set testCase.x, testCase.y, null

		x: pos.rawX
		y: pos.rawY

new UnitTestManager '_CanvasPosition-set-XY', 1000, { minPosition: 0, maxPosition: 2000 }
	.runUnitTest()

