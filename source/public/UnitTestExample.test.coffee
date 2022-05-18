import UnitTestManagerBase from "./UnitTestManagerBase.coffee"
import Rand from "./_common/Rand.coffee"
import FloatPrecision from "./_common/FloatPrecision.coffee"
#import ModuleToTest from "./ModuleToTest.coffee"

# Using this temporary function in place of a testable module
sum = (a, b) -> a + b

export default class UnitTestExample extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		result = Rand.float 0, this._params.upperBound
		firstAddend = Rand.float 0, this._params.upperBound
		secondAddend = result - firstAddend

		testCase: {firstAddend, secondAddend}
		expected: result
	
	_runOneTestCase: (testCase) =>
		FloatPrecision.round sum testCase.firstAddend, testCase.secondAddend

new UnitTestExample 1000, { upperBound: 10 }
	.runUnitTest()

