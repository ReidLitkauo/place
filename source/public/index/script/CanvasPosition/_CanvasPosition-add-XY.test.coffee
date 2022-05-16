import UTM_CanvasPosition_set_XY from "./_CanvasPosition-set-XY.test.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

export default class UTM_CanvasPosition_add_XY extends UTM_CanvasPosition_set_XY

	_buildOneTestCaseAndExpected: (i) ->
		setTestExpected = super._buildOneTestCaseAndExpected i
		total =   { x: setTestExpected.testCase.x,  y: setTestExpected.testCase.y }
		addend1 = { x: this._params.sideLength / 2, y: this._params.sideLength / 2 }
		addend2 = { x: total.x - addend1.x,         y: total.y - addend1.y }

		testCase: { addend1, addend2 }
		expected: setTestExpected.expected

	_runOneTestCase: (testCase) ->
		super._runOneTestCase testCase.addend1
		pos = CanvasPosition.addXY testCase.addend2.x, testCase.addend2.y

		x: pos.rawX
		y: pos.rawY

new UTM_CanvasPosition_add_XY '_CanvasPosition-add-XY', 1000, { sideLength: 2000 }
	.runUnitTest()

