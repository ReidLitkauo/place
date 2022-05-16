

class CanvasPosition

	_rawX: 0
	_rawY: 0

	_floorX: 0
	_floorY: 0

	_minX: 0
	_minY: 0
	_maxX: 1
	_maxY: 1

	_zoomLevel: 0
	_zoomFactor: 0.01
	_allowableZoomFactors: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10]

	constructor: (@_precision) ->
		this.setMin 0, 0
		this.setMax 2000, 2000
		this.set 1000.5, 1000.5, 6
	
	get: =>
		rawX: this._rawX
		rawY: this._rawY
		floorX: this._floorX
		floorY: this._floorY
		minX: this._minX
		minY: this._minY
		maxX: this._maxX
		maxY: this._maxY
		zoomLevel: this._zoomLevel
		zoomFactor: this._zoomFactor

	setMin: (x, y) =>
		this._minX = x
		this._minY = y
		this.set this._rawX, this._rawY, this._zoomLevel

	setMax: (x, y) =>
		this._maxX = x - (10 ** -this._precision)
		this._maxY = y - (10 ** -this._precision)
		this.set this._rawX, this._rawY, this._zoomLevel
	
	setXY: (x, y) => this.set x, y, null

	setZoomLevel: (zoomLevel) => this.set null, null, zoomLevel

	set: (x, y, zoomLevel) =>
		[normalizedX, normalizedY, normalizedZoomLevel] = this._normalizeCoords x, y, zoomLevel
		this._setWithNormalizedCoords normalizedX, normalizedY, normalizedZoomLevel
		this.get()
	
	_normalizeCoords: (x, y, zoomLevel) =>
		[x, y, zoomLevel] = this._fillNulledParameters x, y, zoomLevel
		[x, y, zoomLevel] = this._normalizeCoordsPrecision x, y, zoomLevel
		[x, y, zoomLevel] = this._normalizeCoordsRange x, y, zoomLevel
		[x, y, zoomLevel]
	
	_fillNulledParameters: (x, y, zoomLevel) => [
		x ? this._rawX
		y ? this._rawY
		zoomLevel ? this._zoomLevel ]
	
	_normalizeCoordsPrecision: (x, y, zoomLevel) => [
		this._roundToPrecision x
		this._roundToPrecision y
		Math.floor zoomLevel ]
		
	_roundToPrecision: (number, precision = this._precision) =>
		Math.round((10 ** precision) * number) / (10 ** precision)
		
	_normalizeCoordsRange: (x, y, zoomLevel) =>
		x = Math.max x, this._minX
		y = Math.max y, this._minY
		zoomLevel = Math.max zoomLevel, 0
		x = Math.min x, this._maxX
		y = Math.min y, this._maxY
		zoomLevel = Math.min zoomLevel, this._allowableZoomFactors.length - 1
		[ x, y, zoomLevel ]
	
	_setWithNormalizedCoords: (x, y, zoomLevel) =>
		this._setRawCoords x, y, zoomLevel
		this._setFlooredCoords x, y
		this._setZoomCoords zoomLevel
	
	_setRawCoords: (x, y, zoomLevel) =>
		this._rawX = x
		this._rawY = y
		this._zoomLevel = zoomLevel
	
	_setFlooredCoords: (x, y) =>
		this._floorX = Math.floor x
		this._floorY = Math.floor y
	
	_setZoomCoords: (zoomLevel) =>
		this._zoomFactor = this._allowableZoomFactors[zoomLevel]
	
	addXY: (x, y) => this.add x, y, 0

	addZoomLevel: (zoomLevel) => this.add 0, 0, zoomLevel

	add: (x, y, zoomLevel) => this.set this._rawX + x, this._rawY + y, this._zoomLevel + zoomLevel



export default canvasPosition = new CanvasPosition 6

