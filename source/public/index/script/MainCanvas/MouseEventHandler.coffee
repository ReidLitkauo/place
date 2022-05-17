import Globals from "../../../_common/Globals.coffee"

export default class MouseEventHandler

	constructor: (@mainCanvas) ->

	onMouseDown: (evt) =>
		this._setAnchor evt
	
	onMouseMove: (evt) =>
		if this._anchor?.isSet
			this._moveCanvasViaMouseDrag evt
	
	onMouseUp: (evt) =>
		this._clearAnchor()
	
	onWheel: (evt) =>
		zoomLevelDelta = -1 * Math.round evt.deltaY / Math.abs evt.deltaY
		this.mainCanvas.canvasPosition.addZoomLevel zoomLevelDelta

	_setAnchor: (evt) =>
		rawPos = this.mainCanvas.canvasPosition.getRaw()
		this._anchor =
			isSet: true
			screenCoords: { x: evt.clientX, y: evt.clientY }
			canvasCoords: { x: rawPos.rawX, y: rawPos.rawY }

	_clearAnchor: =>
		this._anchor =
			isSet: false
			screenCoords: { x: null, y: null }
			canvasCoords: { x: null, y: null }
	
	_moveCanvasViaMouseDrag: (evt) =>
		boundingBox = this.mainCanvas.getBoundingBox()
		mouseScreenCoords =
			x: evt.clientX
			y: evt.clientY
		mouseDeltaFromAnchorScreenCoords =
			x: mouseScreenCoords.x - this._anchor.screenCoords.x
			y: mouseScreenCoords.y - this._anchor.screenCoords.y
		mouseDeltaFromAnchorCanvasCoords =
			x: mouseDeltaFromAnchorScreenCoords.x * Globals.BOARD_SIDE_LENGTH_IN_TILES / boundingBox.width
			y: mouseDeltaFromAnchorScreenCoords.y * Globals.BOARD_SIDE_LENGTH_IN_TILES / boundingBox.height
		newCanvasPosition =
			x: this._anchor.canvasCoords.x - mouseDeltaFromAnchorCanvasCoords.x
			y: this._anchor.canvasCoords.y - mouseDeltaFromAnchorCanvasCoords.y
		this.mainCanvas.canvasPosition.setXY newCanvasPosition.x, newCanvasPosition.y

