import TestCase from "./TestCase";
import UnitTestBase from "./UnitTestBase";

export default abstract class UnitTestByExamples extends UnitTestBase {

	private readonly examples: TestCase[]

	constructor (examples: TestCase[], testParameters: any) {
		super(examples.length, testParameters)
		this.examples = examples
	}

	protected buildOneExpectedTestCase(i: number): TestCase {
		return this.examples[i]
	}

}

