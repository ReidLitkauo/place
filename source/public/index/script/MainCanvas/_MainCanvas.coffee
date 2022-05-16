import React from 'react'
import TransformCalculator from './TransformCalculator.coffee'

export default class MainCanvas extends React.Component

	@sideLengthInTiles: 2000

	constructor: (props) ->
		super(props)

	computeStyle: => {
		transform: TransformCalculator.getTransformStyle this.props.canvasPosition
	}

	render: =>
		<canvas id="main-canvas" width={this.sideLengthInTiles} height={this.sideLengthInTiles}
			style={this.computeStyle()} >
		</canvas>

