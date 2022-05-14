import UnitTestManagerBase from "./../../../UnitTestManagerBase.coffee"
import ModuleToTest from "./ModuleToTest.coffee"

class UnitTestManager extends TestManagerBase

	_buildOneTestCaseAndExpected: () =>
		sum = this._randFloat 0, this._params.upperBound
		firstAddend = this._randFloat 0, this._params.upperBound
		secondAddend = sum - firstAddend

		testCase: {firstAddend, secondAddend}
		expected: sum
	
	_runOneTestCase: (testCase) =>
		ModuleToTest.sum testCase.firstAddend, testCase.secondAddend

new UnitTestManager 'UnitTestTemplate', 1000, { upperBound: 10 }
	.runUnitTest()

