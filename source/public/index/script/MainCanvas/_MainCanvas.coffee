import React from 'react'
import AnimatedComponent from '../../../_common/AnimatedComponent.coffee'
import Globals from '../../../_common/Globals.coffee'
import CoordinateSpaceConverter from './CoordinateSpaceConverter.coffee'
import MouseEventHandler from './MouseEventHandler.coffee'
import TransformCalculator from './TransformCalculator.coffee'
import CanvasReticle from './CanvasReticule/_CanvasReticle.coffee'

export default class MainCanvas extends AnimatedComponent

	id: 'main-canvas'

	constructor: (props) ->
		super props
		@canvasPosition = props.canvasPosition
		@coordinateSpaceConverter = new CoordinateSpaceConverter this.getBoundingBox
		@mouseEventHandler = new MouseEventHandler @canvasPosition, this.getBoundingBox
	
	_computeAnimationStyle: =>
		transform: TransformCalculator.getTransformStyle this.props.canvasPosition.getRaw()

	getBoundingBox: =>

		if !document.getElementById this.id
			return { x: 0, y: 0, width: 1, height: 1 }

		zoomScale = this.props.canvasPosition.getRaw().zoomScale
		rawBoundingBox = document.getElementById(this.id).getBoundingClientRect()
		borderThickness = zoomScale * parseFloat getComputedStyle(document.getElementById 'main-canvas')['border-width']

		# The raw bounding box includes the large grey border around the canvas.
		# Remove that border from the bounding box used in calculations.
		x: rawBoundingBox.x + borderThickness
		y: rawBoundingBox.y + borderThickness
		width: rawBoundingBox.width - 2*borderThickness
		height: rawBoundingBox.height - 2*borderThickness

	render: =>
		<div id={this.id + '-parent'}>
			<canvas id={this.id}
				width={Globals.BOARD_SIDE_LENGTH_IN_TILES} height={Globals.BOARD_SIDE_LENGTH_IN_TILES}
				onMouseDown={this.mouseEventHandler.onMouseDown} onMouseMove={this.mouseEventHandler.onMouseMove}
				onMouseUp={this.mouseEventHandler.onMouseUp}     onWheel={this.mouseEventHandler.onWheel}
				ref={this.ref} >
			</canvas>
			<CanvasReticule canvasPosition={this.canvasPosition} coordinateSpaceConverter={this.coordinateSpaceConverter} />
		</div>

