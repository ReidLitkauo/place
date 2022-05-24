import React from 'react'
import PositionWidget from './PositionWidget/_PositionWidget.coffee'
import StatusWidget from './StatusWidget/_StatusWidget.coffee'

export default class HeadsUpDisplay extends React.Component

	constructor: (props) ->
		super props

	render: =>
		<div id="headsupdisplay">
			<PositionWidget canvasPosition={this.props.canvasPosition} />
			<StatusWidget status={this.props.status} setPaletteVisibility={this.props.setPaletteVisibility} />
		</div>

