import UnitTestBase from "../../../_testing/UnitTestBase";
import Rand from "../Rand";
import ComponentAnimationManager from "./_ComponentAnimationManager";

export default class ComponentAnimationManager_sortMapByAnimationIndexAscending extends UnitTestBase {

	protected buildOneTestCaseAndExpected(i: number): [any, any] {
		let sortedArray = this.buildSortedArray()
		let shuffledArray = Rand.getShuffledCopy(sortedArray)
		return [
			shuffledArray,
			new Map(sortedArray)
		]
	}

	private buildSortedArray = (): any[] => {
		let sortedArray: any[] = []
		for ( let i = 0; i < this.testParameters.componentCount; i++ ) {
			sortedArray.push([
				"index for " + i,
				{ animationIndex: i }
			])
		}
		return sortedArray
	}

	protected runOneTestCase(testCase: any) {
		ComponentAnimationManager['mapOfComponentsToAnimationAttributes'] = new Map(testCase)
		ComponentAnimationManager['sortMapByAnimationIndexAscending']()
		return ComponentAnimationManager['mapOfComponentsToAnimationAttributes']
	}

}

new ComponentAnimationManager_sortMapByAnimationIndexAscending(1, {
		componentCount: 50
	}).runUnitTest()

