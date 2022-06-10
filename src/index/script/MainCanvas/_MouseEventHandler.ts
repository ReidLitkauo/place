import * as React from 'react'
import CanvasPosition from '../CanvasPosition/CanvasPosition'
import Point from '../../../_common/script/Point'
import MouseAnchor from './_MouseAnchor'
import Globals from '../../../_common/script/Globals'

export default class MouseEventHandler {

	canvasPosition: CanvasPosition
	getBoundingBox: () => any

	private anchor: MouseAnchor

	constructor (canvasPosition: CanvasPosition, getBoundingBox: () => any) {
		this.canvasPosition = canvasPosition
		this.getBoundingBox = getBoundingBox
	}

	//##########################################################################

	onMouseDown = (evt: React.MouseEvent) => {
		this.setAnchor(evt)
	}

	onMouseMove = (evt: React.MouseEvent) => {
		if (evt.buttons && this.anchor?.isSet) {
			this.moveCanvasViaMouseDrag(evt)
		} else {
			this.clearAnchor()
		}
	}

	onMouseUp = (evt: React.MouseEvent) => {
		this.clearAnchor()
	}

	onWheel = (evt: React.WheelEvent) => {
		let zoomLevelDelta = -1 * Math.round(evt.deltaY) / Math.abs(evt.deltaY)
		this.canvasPosition.addZoomLevel(zoomLevelDelta)
		if (evt.buttons) {
			this.setAnchor(evt)
		}
	}

	//##########################################################################

	private setAnchor = (evt: React.MouseEvent) => {
		let rawPos = this.canvasPosition.getRaw()
		this.anchor = new MouseAnchor({
			isSet: true,
			screenCoords: new Point({ x: evt.clientX,  y: evt.clientY  }),
			canvasCoords: new Point({ x: rawPos.pos.x, y: rawPos.pos.y }),
		})
	}

	private clearAnchor = () => {
		this.anchor = new MouseAnchor({
			isSet: false,
			screenCoords: null,
			canvasCoords: null,
		})
	}

	//##########################################################################

	private moveCanvasViaMouseDrag = (evt: React.MouseEvent) => {
		let boundingBox = this.getBoundingBox()
		let mouseScreenCoords = new Point({
			x: evt.clientX,
			y: evt.clientY,
		})
		let mouseDeltaFromAnchorScreenCoords = new Point({
			x: mouseScreenCoords.x - this.anchor.screenCoords.x,
			y: mouseScreenCoords.y - this.anchor.screenCoords.y,
		})
		let mouseDeltaFromAnchorCanvasCoords = new Point({
			x: mouseDeltaFromAnchorScreenCoords.x * Globals.BOARD_SIDE_LENGTH_IN_TILES / boundingBox.width,
			y: mouseDeltaFromAnchorScreenCoords.y * Globals.BOARD_SIDE_LENGTH_IN_TILES / boundingBox.height,
		})
		let newCanvasPosition = new Point({
			x: this.anchor.canvasCoords.x - mouseDeltaFromAnchorCanvasCoords.x,
			y: this.anchor.canvasCoords.y - mouseDeltaFromAnchorCanvasCoords.y,
		})
		this.canvasPosition.setPos(newCanvasPosition)
	}

}