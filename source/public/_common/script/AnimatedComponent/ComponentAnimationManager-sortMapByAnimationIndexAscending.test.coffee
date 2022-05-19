import UnitTestManagerBase from "./../../UnitTestManagerBase.coffee"
import Rand from "./../Rand.coffee"
import FloatPrecision from "./../FloatPrecision.coffee"
import ComponentAnimationManager from './ComponentAnimationManager.coffee'

export default class ComponentAnimationManager_sortMapByAnimationIndexAscending extends UnitTestManagerBase

	_buildOneTestCaseAndExpected: (i) =>
		sortedArray = this._buildSortedArray()
		shuffledArray = Rand.getShuffledCopy sortedArray

		testCase: shuffledArray
		expected: new Map sortedArray
	
	_buildSortedArray: =>
		sortedArray = []
		for i in [0 ... this._params.numberOfComponentsToTest]
			sortedArray.push [
				"index for " + i,
				{ animationIndex: i } ]
		sortedArray

	_runOneTestCase: (testCase) =>
		ComponentAnimationManager._mapOfComponentsToStyleFunctions = new Map testCase
		ComponentAnimationManager._sortMapByAnimationIndexAscending()
		ComponentAnimationManager._mapOfComponentsToStyleFunctions

new ComponentAnimationManager_sortMapByAnimationIndexAscending 1, { numberOfComponentsToTest: 5 }
	.runUnitTest()

