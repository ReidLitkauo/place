import UTM_CanvasPosition_set_Z from "./_CanvasPosition-set-Z.test.coffee"
import CanvasPosition from "./_CanvasPosition.coffee"

export default class UTM_CanvasPosition_add_Z extends UTM_CanvasPosition_set_Z

	_buildOneTestCaseAndExpected: (i) ->
		setTestExpected = super._buildOneTestCaseAndExpected i
		total =   setTestExpected.testCase
		addend1 = this._params.numAllowableZooms // 2
		addend2 = total - addend1

		testCase: { addend1, addend2 }
		expected: setTestExpected.expected
	
	_runOneTestCase: (testCase) ->
		super._runOneTestCase testCase.addend1
		pos = CanvasPosition.addZoomLevel testCase.addend2
		pos.zoomLevel

new UTM_CanvasPosition_add_Z '_CanvasPosition-add-Z', 1000, { minPosition: 0, maxPosition: 2000 }
	.runUnitTest()

