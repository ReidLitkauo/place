

export default class FloatPrecision

	@PRECISION: 10

	@round: (number, precision = this.PRECISION) ->
		Math.round( number * (10 ** precision) ) / (10 ** precision)
	
	@floor: (number, precision = this.PRECISION) ->
		Math.floor( number * (10 ** precision) ) / (10 ** precision)
	
