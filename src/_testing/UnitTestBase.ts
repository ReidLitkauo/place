export default abstract class UnitTestBase {

	protected readonly numTestCases: number
	protected readonly testParameters: any

	protected testCases: any[] = []
	protected expected: any[] = []
	protected actual: any[] = []

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
			[ this.testCases[i], this.expected[i] ] = this.buildOneTestCaseAndExpected(i)
		}
	}

	protected abstract buildOneTestCaseAndExpected(i: number): [any, any]

	//==========================================================================

	private runTestCases = () => {
		for (let i = 0; i < this.numTestCases; i++) {
			this.actual[i] = this.runOneTestCase(this.testCases[i])
		}
	}

	protected abstract runOneTestCase(testCase: any): any

	//==========================================================================

	private assertTestCases = () => {
		let zippedExpected = this.zipTestCasesAndResults(this.testCases, this.expected)
		let zippedActual   = this.zipTestCasesAndResults(this.testCases, this.actual)
		expect(zippedActual).toStrictEqual(zippedExpected)
	}

	private zipTestCasesAndResults = (testCases: any[], results: any[]): any[] => {
		let ret: any[] = []
		let length: number = Math.min(testCases.length, results.length)
		for ( let i = 0; i < length; i++ ) {
			ret[i] = {
				testCase: testCases[i],
				result:   results[i],
			}
		}
		return ret
	}

}

