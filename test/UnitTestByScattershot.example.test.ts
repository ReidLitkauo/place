import UnitTestByScattershot from "./UnitTestByScattershot";
import ModuleToTestExample from './ModuleToTest.example'
import Rand from "../src/_common/script/Rand";
import FloatPrecision from "../src/_common/script/FloatPrecision";

export default class UnitTestByScattershotExample extends UnitTestByScattershot {

	protected buildOneRandomOutput(): any {
		return Rand.float(0, this.testParameters.upperBound)
	}

	protected buildTestInputFromOutput(output: any): any {
		let firstAddend = Rand.float(0, this.testParameters.upperBound)
		let secondAddend = output - firstAddend
		return { firstAddend, secondAddend }
	}

	protected runOneTestInput(input: any): any {
		return FloatPrecision.round(ModuleToTestExample.add(input.firstAddend, input.secondAddend))
	}

}

new UnitTestByScattershotExample(1000, {
	upperBound: 100000
}).runUnitTest()

