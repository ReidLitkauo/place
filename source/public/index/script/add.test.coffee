import * as Add from '../../../source/public/index/script/add.coffee'

class TestManager

	constructor: (@numTestCases, @maxNumSize, @numDecimalPlaces) ->
		this.__buildTestCases()

	__buildTestCases: ->
		this.expected = []
		for i in [0 ... this.numTestCases]
			this.expected.push this.__buildOneTestCase()
	
	__buildOneTestCase: ->
		sum          = this.__getRandomNumber this.maxNumSize
		secondAddend = this.__getRandomNumber this.maxNumSize
		firstAddend  = this.__roundToDecimalPlace sum - secondAddend
		{ firstAddend, secondAddend, sum }
	
	__getRandomNumber: (max) ->
		this.__roundToDecimalPlace Math.random() * max
	
	__roundToDecimalPlace: (num) ->
		Math.round((10 ** this.numDecimalPlaces) * num) / (10 ** this.numDecimalPlaces)
	
	runTestCases: ->
		this.actual = []
		for i in [0 ... this.numTestCases]
			this.actual.push this.__runOneTestCase this.expected[i].firstAddend, this.expected[i].secondAddend
		this
	
	__runOneTestCase: (firstAddend, secondAddend) ->
		sum = Add.add firstAddend, secondAddend
		sum = this.__roundToDecimalPlace sum
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

