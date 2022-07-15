import TestCase from "./TestCase"

export default abstract class UnitTestBase {

	protected readonly numTestCases: number
	protected readonly testParameters: any

	protected expected: TestCase[] = []
	protected actual:   TestCase[] = []

	constructor (numTestCases: number, testParameters: any) {
		this.numTestCases = numTestCases
		this.testParameters = testParameters
	}

	//##########################################################################

	runUnitTest = () => {
		test(this.constructor.name, () => {
			this.buildTestCases()
			this.runTestCases()
			this.assertTestCases()
		})
	}

	//==========================================================================

	private buildTestCases = () => {
		for (let i = 0; i < this.numTestCases; i++) {
			this.expected[i] = this.buildOneExpectedTestCase(i)
		}
	}

	protected abstract buildOneExpectedTestCase(i: number): TestCase

	//==========================================================================

	private runTestCases = () => {
		for (let i = 0; i < this.numTestCases; i++) {
			this.actual[i] = new TestCase({
				input:  this.expected[i].input,
				output: this.runOneTestInput(this.expected[i].input)
			})
		}
	}

	protected abstract runOneTestInput(input: any): any

	//==========================================================================

	private assertTestCases = () => {
		expect(this.actual).toStrictEqual(this.expected)
	}

}

