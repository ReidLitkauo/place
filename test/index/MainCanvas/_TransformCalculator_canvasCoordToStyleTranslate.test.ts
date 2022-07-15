import FloatPrecision from "../../../src/_common/script/FloatPrecision";
import Point from "../../../src/_common/script/Point";
import Rand from "../../../src/_common/script/Rand";
import UnitTestByScattershot from "../../UnitTestByScattershot";
import TransformCalculator from "../../../src/index/script/MainCanvas/_TransformCalculator";

export default class TransformCalculator_canvasCoordToStyleTranslate extends UnitTestByScattershot {

	protected buildOneRandomOutput() {
		let expectedRatio = new Point({x: Rand.float(0,1), y: Rand.float(0,1)})
		let testCase = new Point({
			x: FloatPrecision.round(expectedRatio.x * this.testParameters.sideLength),
			y: FloatPrecision.round(expectedRatio.y * this.testParameters.sideLength),
		})
		let expected = ` translate( ${this.buildTranslateStringForOneCoord(expectedRatio.x)} , ${this.buildTranslateStringForOneCoord(expectedRatio.y)} ) `
		return expected
	}

	private buildTranslateStringForOneCoord = (coord: number): string =>
		` -${FloatPrecision.round(coord * 100)}% `

	protected buildTestInputFromOutput(output: any) {
		let [x, y] = this.extractCoordFromOutput(output)
		x = x * this.testParameters.sideLength / 100
		y = y * this.testParameters.sideLength / 100
		return new Point({x, y})

	}

	private extractCoordFromOutput = (output: string): [number, number] => {
		const regex = /([0-9.]+).*?([0-9.]+)/
		let matches = regex.exec(output)
		return [
			Number.parseFloat(matches?.[1] || Number.NaN.toString()),
			Number.parseFloat(matches?.[2] || Number.NaN.toString())
		]
	}

	protected runOneTestInput(input: Point) {
		return TransformCalculator['canvasCoordToStyleTranslate'](input)
	}

}

new TransformCalculator_canvasCoordToStyleTranslate(2, {
	sideLength: 2000
}).runUnitTest()

