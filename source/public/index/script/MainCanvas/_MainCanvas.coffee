import React from 'react'
import CoordinateSpaceConverter from './CoordinateSpaceConverter.coffee'
import MouseEventHandler from './MouseEventHandler.coffee'
import TransformCalculator from './TransformCalculator.coffee'

export default class MainCanvas extends React.Component

	@sideLengthInTiles: 2000
	@id: 'main-canvas'

	constructor: (props) ->
		super(props)
		@_coordinateSpaceConverter = new CoordinateSpaceConverter this.getBoundingBox
		@_mouseEventHandler = new MouseEventHandler props.canvasPosition

	computeStyle: => {
		transform: TransformCalculator.getTransformStyle this.props.canvasPosition.getRaw()
	}

	getBoundingBox: => document.getElementById(this.id).getBoundingClientRect()

	render: =>
		<canvas id={this.id}
			width={this.sideLengthInTiles} height={this.sideLengthInTiles}
			onMouseDown={this._mouseEventHandler.onMouseDown} onMouseMove={this._mouseEventHandler.onMouseMove}
			onMouseUp={this._mouseEventHandler.onMouseUp}     onWheel={this._mouseEventHandler.onWheel}
			style={this.computeStyle()} >
		</canvas>

