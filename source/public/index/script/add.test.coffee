import * as Add from './add.coffee'

class TestManager

	constructor: (@numTestCases, @maxNumSize, @numDecimalPlaces) ->
		this._buildTestCases()

	_buildTestCases: ->
		this.expected = []
		for i in [0 ... this.numTestCases]
			this.expected.push this._buildOneTestCase()
	
	_buildOneTestCase: ->
		sum          = this._getRandomNumber this.maxNumSize
		secondAddend = this._getRandomNumber this.maxNumSize
		firstAddend  = this._roundToDecimalPlace sum - secondAddend
		{ firstAddend, secondAddend, sum }
	
	_getRandomNumber: (max) ->
		this._roundToDecimalPlace Math.random() * max
	
	_roundToDecimalPlace: (num) ->
		Math.round((10 ** this.numDecimalPlaces) * num) / (10 ** this.numDecimalPlaces)
	
	runTestCases: ->
		this.actual = []
		for i in [0 ... this.numTestCases]
			this.actual.push this._runOneTestCase this.expected[i].firstAddend, this.expected[i].secondAddend
		this
	
	_runOneTestCase: (firstAddend, secondAddend) ->
		sum = Add.add firstAddend, secondAddend
		sum = this._roundToDecimalPlace sum
		{ firstAddend, secondAddend, sum }

	assertTestCases: ->
		expect this.actual
			.toStrictEqual this.expected
		this

test 'index/add.add', ->
	new TestManager 5, 9999999, 6
		.runTestCases()
		.assertTestCases()
	return

