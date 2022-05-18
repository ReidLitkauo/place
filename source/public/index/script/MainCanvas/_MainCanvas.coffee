import React from 'react'
import AnimatedComponent from '../../../_common/AnimatedComponent.coffee'
import Globals from '../../../_common/Globals.coffee'
import CoordinateSpaceConverter from './CoordinateSpaceConverter.coffee'
import MouseEventHandler from './MouseEventHandler.coffee'
import TransformCalculator from './TransformCalculator.coffee'
import CanvasReticle from './CanvasReticle/_CanvasReticle.coffee'

export default class MainCanvas extends AnimatedComponent

	id: 'main-canvas'

	constructor: (props) ->
		super props
		@canvasPosition = props.canvasPosition
		@coordinateSpaceConverter = new CoordinateSpaceConverter this.getBoundingBox
		@mouseEventHandler = new MouseEventHandler @canvasPosition, this.getBoundingBox
	
	# TODO Only for reference while I don't have the ws server implemented so I can see tiles on the screen
	componentDidMount: =>
		super.componentDidMount()
		placeImg = document.createElement 'img'
		placeImg.src = '/place.png'
		placeImg.onload = () => document.getElementById('main-canvas').getContext('2d').drawImage placeImg, 0, 0
	
	_computeAnimationStyle: =>
		transform: TransformCalculator.getTransformStyle this.props.canvasPosition.getRaw()

	getBoundingBox: => document.getElementById(this.id).getBoundingClientRect()

	render: =>
		<div id={this.id + '-parent'}
			onMouseDown={this.mouseEventHandler.onMouseDown} onMouseMove={this.mouseEventHandler.onMouseMove}
			onMouseUp={this.mouseEventHandler.onMouseUp}     onWheel={this.mouseEventHandler.onWheel} >
			<canvas id={this.id} ref={this.ref}
				width={Globals.BOARD_SIDE_LENGTH_IN_TILES} height={Globals.BOARD_SIDE_LENGTH_IN_TILES} >
			</canvas>
			<CanvasReticle canvasPosition={this.canvasPosition} coordinateSpaceConverter={this.coordinateSpaceConverter} />
		</div>

