import * as React from 'react'
import Globals from '../../_common/script/Globals'
import CanvasPosition from './CanvasPosition/CanvasPosition'
import AppProps from './_AppProps'
import AppState from './_AppState'
import MainCanvas from './MainCanvas/MainCanvas'
import HeadsUpDisplay from './HeadsUpDisplay/HeadsUpDisplay'
import Palette from './Palette/Palette'

export default class App extends React.Component<AppProps, AppState> {

	props: AppProps
	state: AppState

	constructor (props: AppProps) {
		super(props)
		this.props = props
		this.state = {
			canvasPosition: new CanvasPosition(this.positionUpdated),
			selectedColorCode: null,
			status: Globals.STATUS_PLACETILE,
			isPaletteVisible: false,
		}
	}

	render = () => { return (
		<div id="app">
			<MainCanvas canvasPosition={this.state.canvasPosition} selectedColorCode={this.state.selectedColorCode} />
			<HeadsUpDisplay canvasPosition={this.state.canvasPosition} status={this.state.status} setPaletteVisibility={this.setPaletteVisibility} />
			<Palette isVisible={this.state.isPaletteVisible} selectedColorCode={this.state.selectedColorCode} colorUpdated={this.colorUpdated} setPaletteVisibility={this.setPaletteVisibility} placePixel={this.placePixel} />
		</div>
	) }

	positionUpdated = (position: CanvasPosition) => {
		this.setState({
			canvasPosition: position
		})
	}

	setPaletteVisibility = (isVisible: boolean) => {
		this.colorUpdated(null)
		this.setState({
			isPaletteVisible: isVisible
		})
	}

	colorUpdated = (colorCode: number) => {
		this.setState({
			selectedColorCode: colorCode
		})
	}

	statusUpdated = (status: string) => {
		this.setState({
			status: status
		})
	}

	placePixel = () => {
		let rawPos = this.state.canvasPosition.getRaw()
		let code = this.state.selectedColorCode
		console.log `Placing pixel: (${rawPos.pos.x},${rawPos.pos.y}) ${code}` // TOOD connect to WS
	}
	
}