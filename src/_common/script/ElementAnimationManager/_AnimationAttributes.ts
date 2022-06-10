export default class AnimationAttributes {

	styleFunction: () => any
	animationIndex: number

	constructor(styleFunction: () => any, animationIndex: number) {
		this.styleFunction = styleFunction
		this.animationIndex = animationIndex
	}

}

