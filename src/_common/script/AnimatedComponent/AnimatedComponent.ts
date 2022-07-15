import * as React from 'react'
import ComponentAnimationManager from './_ComponentAnimationManager'

export default abstract class AnimatedComponent<Props, State> extends React.Component<Props, State> {

	private animationIndex: number
	protected ref: React.RefObject<HTMLElement>

	constructor(props: Props, animationIndex: number = 0) {
		super(props)
		this.animationIndex = animationIndex
		this.ref = React.createRef()
	}

	componentDidMount() {
		ComponentAnimationManager.registerComponent(this.ref, this.computeAnimationStyle, this.animationIndex)
	}

	abstract computeAnimationStyle(): any

}

