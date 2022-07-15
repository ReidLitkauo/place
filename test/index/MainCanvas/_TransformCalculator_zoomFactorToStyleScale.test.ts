import Rand from "../../../src/_common/script/Rand";
import UnitTestByScattershot from "../../UnitTestByScattershot";
import TransformCalculator from "../../../src/index/script/MainCanvas/_TransformCalculator";

export default class TransformCalculator_zoomFactorToStyleScale extends UnitTestByScattershot {

	protected buildOneRandomOutput(): string {
		let expectedScale = Rand.float(this.testParameters.min, this.testParameters.max)
		return ` scale(${expectedScale}) `
	}

	protected buildTestInputFromOutput(output: string): number {
		let scale = this.extractScaleFromOutput(output)
		let zoomFactor = this.transformScaleIntoZoomFactor(scale)
		return zoomFactor
	}

	private extractScaleFromOutput = (output: string): number => {
		const regex = /([0-9.]+)/
		return Number.parseFloat( regex.exec(output)?.[1] || Number.NaN.toString() )
	}

	private transformScaleIntoZoomFactor = (scale: number): number => {
		return scale * 1
	}

	protected runOneTestInput(input: number): string {
		return TransformCalculator['zoomScaleToStyleScale'](input)
	}

}

new TransformCalculator_zoomFactorToStyleScale(1000, {}).runUnitTest()

