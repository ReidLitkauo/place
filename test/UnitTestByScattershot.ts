import TestCase from "./TestCase";
import UnitTestBase from "./UnitTestBase";

export default abstract class UnitTestByScattershot extends UnitTestBase {

	protected buildOneExpectedTestCase(i: number): TestCase {
		let output: any = this.buildOneRandomOutput()
		let input:  any = this.buildTestInputFromOutput(output)
		return new TestCase({ input, output })
	}

	protected abstract buildOneRandomOutput(): any
	protected abstract buildTestInputFromOutput(output: any): any

}