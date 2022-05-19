import React from 'react'

export default class PositionWidget extends React.Component

	constructor: (props) ->
		super props
	
	humanReadablePosition: =>
		rawpos = this.props.canvasPosition.getRaw()
		"(#{rawpos.floorX},#{rawpos.floorY}) #{rawpos.zoomFactor}x"

	render: =>
		<div className="widget" id="position-widget">
			{this.humanReadablePosition()}
		</div>

