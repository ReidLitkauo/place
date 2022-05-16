

export default class UnitTestManagerBase

	_testCases: []
	_expected: []
	_actual: []

	constructor: (@_unitTestName, @_numTestCases, @_params) ->
		this.PRECISION = 6

	runUnitTest: () =>
		test this._unitTestName, =>
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
	
	_randInt: (min, max) => this._randFloat min, max, 0

	_randFloat: (min, max, numPlaces = this.PRECISION) =>
		min + this._floorToDecimalPlace Math.random()*(max-min), numPlaces

	_roundToDecimalPlace: (number, numPlaces = this.PRECISION) =>
		Math.round((10 ** numPlaces) * number) / (10 ** numPlaces)
	
	_floorToDecimalPlace: (number, numPlaces = this.PRECISION) =>
		Math.floor((10 ** numPlaces) * number) / (10 ** numPlaces)

	_zipTestCasesAndResults: (testCases, results) =>
		ret = []
		length = Math.min testCases.length, results.length
		for i in [0 ... length]
			ret[i] =
				testCase: testCases[i]
				result:   results[i]
		ret

