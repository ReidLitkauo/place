import FloatPrecision from './FloatPrecision'

export default class Rand {

	static int(min: number, max: number): number {
		return Math.floor( this.float(min, max) )
	}

	static float(min: number, max: number): number {
		return FloatPrecision.floor(min + Math.random()*(max-min))
	}

	// Uses modern version of Fisher-Yates algorighm
	// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
	static getShuffledCopy<Type>(array: Type[]): Type[] {
		let arrayCopy = [...array]
		for(let currentIndex = 0; currentIndex < arrayCopy.length - 2; currentIndex++) {
			let randomIndexOfRemaining = this.int(currentIndex, arrayCopy.length)
			let randomSelected = arrayCopy[randomIndexOfRemaining]
			arrayCopy[randomIndexOfRemaining] = arrayCopy[currentIndex]
			arrayCopy[currentIndex] = randomSelected
		}
		return arrayCopy
	}

}

