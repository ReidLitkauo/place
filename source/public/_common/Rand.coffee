import FloatPrecision from "./FloatPrecision.coffee"

export default class Rand

	@int: (min, max) ->
		Math.floor this.float min, max

	@float: (min, max) ->
		FloatPrecision.floor min + Math.random()*(max-min)

