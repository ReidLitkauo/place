import UnitTestBase from "./UnitTestBase";
import Rand from "../_common/script/Rand";
import FloatPrecision from "../_common/script/FloatPrecision";
// import ModuleToTest from './ModuleToTest'

// Using this temporary function in place of a testable module
let sum = (a: number, b: number): number => a + b

export default class UnitTestExample extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let result = Rand.float(0, this.testParameters.upperBound)
		let firstAddend = Rand.float(0, this.testParameters.upperBound)
		let secondAddend = result - firstAddend
		return [
			{ firstAddend, secondAddend },
			result
		]
	}

	protected runOneTestCase(testCase: any): any {
		return FloatPrecision.round(sum(testCase.firstAddend, testCase.secondAddend))
	}

}

new UnitTestExample(1000, {
	upperBound: 100000
}).runUnitTest()

