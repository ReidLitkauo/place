import React from 'react'
import MainCanvas from './MainCanvas/_MainCanvas.coffee'
import CanvasPosition from './CanvasPosition/_CanvasPosition.coffee'

export default class App extends React.Component

	constructor: (props) ->
		super props
		this.state =
			canvasPosition: CanvasPosition.get()

	render: =>
		<MainCanvas canvasPosition={this.state.canvasPosition} />

