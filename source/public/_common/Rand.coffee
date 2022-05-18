import FloatPrecision from "./FloatPrecision.coffee"

export default class Rand

	@int: (min, max) ->
		Math.floor this.float min, max

	@float: (min, max) ->
		FloatPrecision.floor min + Math.random()*(max-min)

	# Uses modern version of Fisher-Yates algorighm
	# https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
	@getShuffledCopy: (array) ->
		arrayCopy = [...array]
		for currentIndex in [0 .. arrayCopy.length-2]
			randomIndexOfRemaining = this.int currentIndex, arrayCopy.length
			[ arrayCopy[currentIndex], arrayCopy[randomIndexOfRemaining] ] =\
				[ arrayCopy[randomIndexOfRemaining], arrayCopy[currentIndex] ]
		arrayCopy

