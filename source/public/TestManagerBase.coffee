

export default class TestManagerBase

	_expected: []
	_actual: []
	
	buildTestCases: =>
		for i in [0 ... this._numTestCases]
			this._expected[i] = this._buildOneTestCase()
		this
	
	# _buildOneTestCase: Expected to be created by child class
	
	runTestCases: =>
		for i in [0 ... this._numTestCases]
			testCase = this._stripResultFromTestCase this._expected[i]
			testCase.result = this._runOneTestCase testCase
			this._actual[i] = testCase
		this
	
	# _runOneTestCase: Expected to be created by child class
	
	_stripResultFromTestCase: (testCase) =>
		newTestCase = this._cloneObject testCase
		delete newTestCase.result
		newTestCase
	
	_cloneObject: (obj) => Object.assign {}, obj
	
	assertTestCases: =>
		expect this._actual
			.toStrictEqual this._expected
		return
	
	_randInt: (min, max) => this._randFloat min, max, 0

	_randFloat: (min, max, numPlaces = this._precision) =>
		min + this._roundToDecimalPlace Math.random()*(max-min), numPlaces

	_roundToDecimalPlace: (number, numPlaces = this._precision) =>
		Math.round((10 ** numPlaces) * number) / (10 ** numPlaces)
