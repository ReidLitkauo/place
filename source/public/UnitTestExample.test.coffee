import UnitTestManagerBase from "./UnitTestManagerBase.coffee"
#import ModuleToTest from "./ModuleToTest.coffee"

# Using this temporary function in place of a testable module
sum = (a, b) -> a + b

export default class UnitTestManager extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		result = this._randFloat 0, this._params.upperBound
		firstAddend = this._randFloat 0, this._params.upperBound
		secondAddend = result - firstAddend

		testCase: {firstAddend, secondAddend}
		expected: result
	
	_runOneTestCase: (testCase) =>
		this._roundToDecimalPlace sum testCase.firstAddend, testCase.secondAddend

new UnitTestManager 'UnitTestExample', 1000, { upperBound: 10 }
	.runUnitTest()

