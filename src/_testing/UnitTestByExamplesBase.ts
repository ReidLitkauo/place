import UnitTestBase from "./UnitTestBase";

export default abstract class UnitTestByExamplesBase extends UnitTestBase {

	private readonly examples: any[][2]

	constructor (examples: any[][2], testParameters: any) {
		super(examples.length, testParameters)
		this.examples = examples
	}

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		return this.examples[i]
	}

}

