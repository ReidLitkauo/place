import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

export default class UTM_CanvasPosition_set_XY extends UnitTestManagerBase

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
			raw: raw - this._params.sideLength
			expected: 0
		else if oobStatus > 0
			raw: raw + this._params.sideLength
			expected: this._params.sideLength - (10 ** -this.PRECISION)
		else
			raw: raw
			expected: raw
	
	_getCoordOOBStatus: () ->
		this._randInt -1, 2
	
	_getRandomCoord: () -> this._randFloat 0, this._params.sideLength

	_runOneTestCase: (testCase) ->
		pos = CanvasPosition.setXY testCase.x, testCase.y

		x: pos.rawX
		y: pos.rawY

new UTM_CanvasPosition_set_XY '_CanvasPosition-set-XY', 1000, { sideLength: 2000 }
	.runUnitTest()

