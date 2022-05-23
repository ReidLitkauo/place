import React from 'react'
import MainCanvas from './MainCanvas/_MainCanvas.coffee'
import HeadsUpDisplay from './HeadsUpDisplay/_HeadsUpDisplay.coffee'
import CanvasPosition from './CanvasPosition/_CanvasPosition.coffee'

export default class App extends React.Component

	constructor: (props) ->
		super props
		@canvasPosition = new CanvasPosition this.positionUpdated
		this.state =
			rawCanvasPosition: @canvasPosition?.getRaw()
	
	positionUpdated: (position) =>
		this.setState
			rawCanvasPosition: this.canvasPosition?.getRaw()

	render: =>
		<div id="app">
			<MainCanvas canvasPosition={this.canvasPosition} />
			<HeadsUpDisplay canvasPosition={this.canvasPosition} />
		</div>

