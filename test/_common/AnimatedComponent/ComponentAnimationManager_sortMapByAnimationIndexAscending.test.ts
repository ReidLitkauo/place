import Rand from "../../../src/_common/script/Rand";
import ComponentAnimationManager from "../../../src/_common/script/AnimatedComponent/_ComponentAnimationManager";
import UnitTestByScattershot from "../../UnitTestByScattershot";

export default class ComponentAnimationManager_sortMapByAnimationIndexAscending extends UnitTestByScattershot {

	protected buildOneRandomOutput() {
		let sortedArray: any[] = []
		for ( let i = 0; i < this.testParameters.componentCount; i++ ) {
			sortedArray.push([
				"index for " + i,
				{ animationIndex: i }
			])
		}
		return new Map(sortedArray)
	}
	protected buildTestInputFromOutput(output: any) {
		return Rand.getShuffledCopy(output)
	}

	protected runOneTestInput(input: any) {
		ComponentAnimationManager['mapOfComponentsToAnimationAttributes'] = new Map(input)
		ComponentAnimationManager['sortMapByAnimationIndexAscending']()
		return ComponentAnimationManager['mapOfComponentsToAnimationAttributes']
	}

}

new ComponentAnimationManager_sortMapByAnimationIndexAscending(1, {
		componentCount: 5
	}).runUnitTest()

