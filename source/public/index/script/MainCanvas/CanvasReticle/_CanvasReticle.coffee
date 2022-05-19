import React from 'react'
import AnimatedComponent from "../../../../_common/script/AnimatedComponent/_AnimatedComponent.coffee"
import Globals from '../../../../_common/script/Globals.coffee'

export default class CanvasReticle extends AnimatedComponent

	constructor: (props) ->
		super props, Globals.ANIMATION_INDICES.CANVAS_RETICLE

	_computeAnimationStyle: =>
		currentPosition = this.props.canvasPosition.getRaw()
		topLeft = this.props.coordinateSpaceConverter.canvasToScreen {
			x: currentPosition.floorX
			y: currentPosition.floorY }
		bottomRight = this.props.coordinateSpaceConverter.canvasToScreen {
			x: currentPosition.floorX + 1
			y: currentPosition.floorY + 1 }

		top:    topLeft.y + "px"
		left:   topLeft.x + "px"
		width:  (bottomRight.x - topLeft.x) + "px"
		height: (bottomRight.y - topLeft.y) + "px"
	
	render: =>
		<div id="canvas-reticle" ref={this.ref}>
			<img src="/assets/images/reticle.svg" />
		</div>

