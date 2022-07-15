import * as React from 'react'
import AnimatedComponent from '../../../../_common/script/AnimatedComponent/AnimatedComponent';
import CanvasReticleProps from './_CanvasReticleProps';
import CanvasReticleState from './_CanvasReticleState';
import Globals from '../../../../_common/script/Globals';
import JunkDrawer from '../../../../_common/script/JunkDrawer';
import Point from '../../../../_common/script/Point';

export default class CanvasReticle extends AnimatedComponent<CanvasReticleProps, CanvasReticleState> {

	props: CanvasReticleProps

	constructor (props: CanvasReticleProps) {
		super(props, Globals.ANIMATION_INDICES.CANVAS_RETICLE)
		this.props = props
	}

	computeAnimationStyle = (): any => {
		let currentPosition = this.props.canvasPosition.getRaw()
		let topLeft = this.props.coordinateSpaceConverter.canvasToScreen(new Point({
			x: currentPosition.floor.x,
			y: currentPosition.floor.y,
		}))
		let bottomRight = this.props.coordinateSpaceConverter.canvasToScreen(new Point({
			x: currentPosition.floor.x + 1,
			y: currentPosition.floor.y + 1,
		}))

		return {
			top:    topLeft.y + "px",
			left:   topLeft.x + "px",
			width:  (bottomRight.x - topLeft.x) + "px",
			height: (bottomRight.y - topLeft.y) + "px",
		}
	}

	render = () => { return (
		<div id="canvas-reticle" ref={this.ref as React.LegacyRef<HTMLDivElement>} style={this.computeStyle()}>
			<img src="/assets/images/reticle.svg" />
		</div>
	) }

	computeStyle = () => {
		return {
			backgroundColor: JunkDrawer.convertColorCodeToCSSColor(this.props.selectedColorCode),
		}
	}

}