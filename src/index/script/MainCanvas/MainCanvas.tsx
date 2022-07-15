import * as React from 'react'
import AnimatedComponent from '../../../_common/script/AnimatedComponent/AnimatedComponent'
import Globals from '../../../_common/script/Globals'
import MainCanvasProps from './_MainCanvasProps';
import MainCanvasState from './_MainCanvasState';
import CoordinateSpaceConverter from './_CoordinateSpaceConverter';
import MouseEventHandler from './_MouseEventHandler';
import TransformCalculator from './_TransformCalculator'
import CanvasReticle from './CanvasReticle/CanvasReticle'

export default class MainCanvas extends AnimatedComponent<MainCanvasProps, MainCanvasState> {

	private static readonly id: string = 'main-canvas'

	props: MainCanvasProps
	private coordinateSpaceConverter: CoordinateSpaceConverter
	private mouseEventHandler: MouseEventHandler

	constructor (props: MainCanvasProps) {
		super(props, Globals.ANIMATION_INDICES.MAIN_CANVAS)
		this.props = props
		this.coordinateSpaceConverter = new CoordinateSpaceConverter(this.getBoundingBox)
		this.mouseEventHandler = new MouseEventHandler(props.canvasPosition, this.getBoundingBox)
	}

	// TODO Only for reference until I have WS running, lets me see tiles on screen
	componentDidMount = () => {
		super.componentDidMount()
		let placeImg = document.createElement('img')
		placeImg.src = '/place.png'
		placeImg.onload = () => (document.getElementById('main-canvas') as HTMLCanvasElement).getContext('2d').drawImage(placeImg, 0, 0)
	}

	computeAnimationStyle = () => {
		return {
			transform: TransformCalculator.getTransformStyle(this.props.canvasPosition.getRaw())
		}
	}

	getBoundingBox = () => {
		return document.getElementById(MainCanvas.id).getBoundingClientRect()
	}

	render = () => { return (
		<div id={MainCanvas.id + '-parent'}
			onMouseDown={this.mouseEventHandler.onMouseDown} onMouseMove={this.mouseEventHandler.onMouseMove}
			onMouseUp={this.mouseEventHandler.onMouseUp}     onWheel={this.mouseEventHandler.onWheel} >
			<canvas id={MainCanvas.id} ref={this.ref as React.LegacyRef<HTMLCanvasElement>}
				width={Globals.BOARD_SIDE_LENGTH_IN_TILES} height={Globals.BOARD_SIDE_LENGTH_IN_TILES} >
			</canvas>
			<CanvasReticle canvasPosition={this.props.canvasPosition} selectedColorCode={this.props.selectedColorCode} coordinateSpaceConverter={this.coordinateSpaceConverter} />
		</div>
	) }

}

