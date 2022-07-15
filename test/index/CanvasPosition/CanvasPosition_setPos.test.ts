import UnitTestByScattershot from "../../UnitTestByScattershot";
import CanvasPosition from "../../../src/index/script/CanvasPosition/CanvasPosition";
import FloatPrecision from "../../../src/_common/script/FloatPrecision";
import Rand from "../../../src/_common/script/Rand";
import Point from "../../../src/_common/script/Point";

export default class CanvasPosition_setPos extends UnitTestByScattershot {

	protected readonly MIN: number
	protected readonly MAX: number

	constructor(numTestCases: number, testParameters: any) {
		super(numTestCases, testParameters)
		this.MIN = 0
		this.MAX = testParameters.sideLength - (10 ** -FloatPrecision.PRECISION)
	}

	protected buildOneRandomOutput = (): Point => {
		return this.buildOneRandomPoint()
	}

	private buildOneRandomPoint = (): Point => {
		return new Point({
			x: this.buildOneRandomPointCoord(),
			y: this.buildOneRandomPointCoord()
		})
	}

	private buildOneRandomPointCoord = (): number => {
		let coord = this.generateRawCoord()
		coord = this.clampCoordToMinMax(coord)
		return coord
	}

	private generateRawCoord = (): number => {
		return Rand.float(2*this.MIN - this.MAX, 2*this.MAX - this.MIN)
	}

	private clampCoordToMinMax = (coord: number): number => {
		coord = Math.max(coord, this.MIN)
		coord = Math.min(coord, this.MAX)
		return coord
	}

	protected buildTestInputFromOutput = (output: Point): any => {
		return new Point({
			x: this.buildInputCoordFromOutput(output.x),
			y: this.buildInputCoordFromOutput(output.y)
		})
	}

	protected buildInputCoordFromOutput = (output: number): number => {
		if (output >= this.MAX) {
			return this.generateOverflowInput()
		} else if (output <= this.MIN) {
			return this.generateUnderflowInput()
		} else {
			return output
		}
	}

	private generateOverflowInput = (): number => {
		return Rand.float(this.MAX, 2*this.MAX - this.MIN)
	}

	private generateUnderflowInput = (): number => {
		return Rand.float(2*this.MIN - this.MAX, this.MIN)
	}

	protected runOneTestInput(input: any): Point {
		return new CanvasPosition().setPos(input).pos
	}

}

//##############################################################################

new CanvasPosition_setPos(1000, {
	sideLength: 2000
}).runUnitTest()

