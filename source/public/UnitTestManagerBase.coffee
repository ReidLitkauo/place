

export default class UnitTestManagerBase

	_testCases: []
	_expected: []
	_actual: []

	constructor: (@_numTestCases, @_params) ->

	runUnitTest: () =>
		test this.constructor.name, =>
			this._buildTestCases()
			this._runTestCases()
			this._assertTestCases()
			return
	
	_buildTestCases: =>
		for i in [0 ... this._numTestCases]
			testCase = this._buildOneTestCaseAndExpected i
			this._testCases[i] = testCase.testCase
			this._expected[i] = testCase.expected
	
	# _buildOneTestCaseAndExpected: Expected to be created by child class
	
	_runTestCases: =>
		for i in [0 ... this._numTestCases]
			this._actual[i] = this._runOneTestCase this._testCases[i]
	
	# _runOneTestCase: Expected to be created by child class
	
	_stripResultFromTestCase: (testCase) =>
		newTestCase = this._cloneObject testCase
		delete newTestCase.result
		newTestCase
	
	_cloneObject: (obj) => Object.assign {}, obj
	
	_assertTestCases: =>
		zippedExpected = this._zipTestCasesAndResults this._testCases, this._expected
		zippedActual = this._zipTestCasesAndResults this._testCases, this._actual
		expect zippedActual
			.toStrictEqual zippedExpected
	
	_zipTestCasesAndResults: (testCases, results) =>
		ret = []
		length = Math.min testCases.length, results.length
		for i in [0 ... length]
			ret[i] =
				testCase: testCases[i]
				result:   results[i]
		ret

