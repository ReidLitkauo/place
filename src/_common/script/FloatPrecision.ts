export default class FloatPrecision {

	static PRECISION: number = 6

	private static fixPrecision(operation: (argument: number) => number, argument: number, precision: number = this.PRECISION): number {
		return operation( argument * (10 ** precision) ) / (10 ** precision)
	}

	static round(argument: number, precision: number = this.PRECISION): number {
		return this.fixPrecision(Math.round, argument, precision)
	}

	static floor(argument: number, precision: number = this.PRECISION): number {
		return this.fixPrecision(Math.floor, argument, precision)
	}

}

