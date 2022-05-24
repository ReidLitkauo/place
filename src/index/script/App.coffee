import React from 'react'
import Globals from '../../_common/script/Globals.coffee'
import MainCanvas from './MainCanvas/_MainCanvas.coffee'
import HeadsUpDisplay from './HeadsUpDisplay/_HeadsUpDisplay.coffee'
import Palette from './Palette/_Palette.coffee'
import CanvasPosition from './CanvasPosition/_CanvasPosition.coffee'

export default class App extends React.Component

	constructor: (props) ->
		super props
		this.state =
			canvasPosition: new CanvasPosition this.positionUpdated
			status: Globals.STATUS_PLACETILE
			isPaletteVisible: false
	
	render: =>
		<div id="app">
			<MainCanvas canvasPosition={this.state.canvasPosition} selectedColorCode={this.state.selectedColorCode} />
			<HeadsUpDisplay canvasPosition={this.state.canvasPosition} status={this.state.status} setPaletteVisibility={this.setPaletteVisibility} />
			<Palette isVisible={this.state.isPaletteVisible} selectedColorCode={this.state.selectedColorCode} colorUpdated={this.colorUpdated} setPaletteVisibility={this.setPaletteVisibility} placePixel={this.placePixel} />
		</div>

	positionUpdated: (position) =>
		this.setState
			canvasPosition: position
	
	setPaletteVisibility: (isVisible) =>
		this.colorUpdated null
		this.setState
			isPaletteVisible: isVisible

	statusUpdated: (status) =>
		this.setState
			status: status
	
	colorUpdated: (code) =>
		this.setState
			selectedColorCode: code
	
	placePixel: =>
		pos = this.state.canvasPosition.getRaw()
		code = this.state.selectedColorCode
		console.log "Placing pixel: (#{pos.floorX},#{pos.floorY}) #{code}" # TODO connect to websocket

