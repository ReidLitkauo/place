

export default class MouseEventHandler

	anchor:
		isSet: false
		screenCoords:
			x: null
			y: null
		canvasCoords:
			x: null
			y: null

	constructor: (@canvasPosition) ->

	onMouseDown: (e) =>
		console.log 'onMouseDown'
		console.log e
	
	onMouseMove: (e) =>
		console.log 'onMouseMove'
		console.log e
	
	onMouseUp: (e) =>
		console.log 'onMouseUp'
		console.log e
	
	onWheel: (e) =>
		zoomLevelDelta = -1 * Math.round e.deltaY / Math.abs e.deltaY
		this.canvasPosition.addZoomLevel zoomLevelDelta

	_setAnchor: (e) =>
		anchor.isSet = true
		anchor.screenCoords = { x: e.clientX, y: e.clientY }

	_clearAnchor: (e) =>
		anchor.isSet = false
		anchor.screenCoords = { x: null, y: null }
		anchor.canvasCoords = { x: null, y: null }

