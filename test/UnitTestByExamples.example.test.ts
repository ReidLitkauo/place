import UnitTestByExamples from "./UnitTestByExamples";
import ModuleToTestExample from "./ModuleToTest.example";
import TestCase from "./TestCase";

const examples: TestCase[] = [
	new TestCase({
		input: {
			firstAddend: 1,
			secondAddend: 2,
		},
		output: 3
	}),
	new TestCase({
		input: {
			firstAddend: -3,
			secondAddend: 5
		},
		output: 2
	}),
	new TestCase({
		input: {
			firstAddend: 96.1896,
			secondAddend: -8.9156
		},
		output: 87.2740
	})
]

export default class UnitTestByExamplesExample extends UnitTestByExamples {
	protected runOneTestInput(input: any) {
		return ModuleToTestExample.add(input.firstAddend, input.secondAddend)
	}
}

new UnitTestByExamplesExample(examples, {}).runUnitTest()

