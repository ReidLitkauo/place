import FloatPrecision from '../../../_common/script/FloatPrecision'
import Point from '../../../_common/script/Point'
import RawCanvasPosition from './RawCanvasPosition'

type CanvasUpdatedFunction = (updateFunction: CanvasPosition) => any

export default class CanvasPosition {

	private raw: RawCanvasPosition = new RawCanvasPosition()

	private static readonly allowableZoomFactors = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10]

	private updateFunction: CanvasUpdatedFunction

	//##########################################################################

	constructor(updateFunction: CanvasUpdatedFunction = null) {
		this.updateFunction = updateFunction
		this.setMinNoUpdate(new Point({x:0, y:0}))
		this.setMaxNoUpdate(new Point({x:2000, y:2000}))
		this.set(new Point({x:1000.5, y:1000.5}), 6)
	}

	//##########################################################################

	setMin = (arg: Point) => {
		this.setMinNoUpdate(arg)
		return this.set(this.raw.pos, this.raw.zoomLevel)
	}

	//==========================================================================

	private setMinNoUpdate = (arg: Point) => {
		this.raw.min = arg
	}

	//##########################################################################

	setMax = (arg: Point) => {
		this.setMaxNoUpdate(arg)
		return this.set(this.raw.pos, this.raw.zoomLevel)
	}

	//==========================================================================

	private setMaxNoUpdate = (arg: Point) => {
		this.raw.max = new Point({
			x: arg.x - (10 ** -FloatPrecision.PRECISION),
			y: arg.y - (10 ** -FloatPrecision.PRECISION),
		})
	}

	//##########################################################################

	setPos = (arg: Point) => {
		return this.set(arg, this.raw.zoomLevel)
	}

	//==========================================================================

	setZoomLevel = (zoomLevel: number) => {
		return this.set(this.raw.pos, zoomLevel)
	}

	//##########################################################################

	set = (pos: Point, zoomLevel: number) => {
		let [normalizedPos, normalizedZoomLevel] = this.normalizeCoords(pos, zoomLevel)
		this.setWithNormalizedCoords(normalizedPos, normalizedZoomLevel)
		this.updateFunction?.(this)
		return this.getRaw()
	}

	//==========================================================================

	private normalizeCoords = (pos: Point, zoomLevel: number): [Point, number] => {
		[pos, zoomLevel] = this.normalizeCoordsPrecision(pos, zoomLevel); // Don't remove this semicolon
		[pos, zoomLevel] = this.normalizeCoordsRange(pos, zoomLevel)
		return [pos, zoomLevel]
	}

	//--------------------------------------------------------------------------

	private normalizeCoordsPrecision = (pos: Point, zoomLevel: number): [Point, number] => {
		pos.x = FloatPrecision.round(pos.x)
		pos.y = FloatPrecision.round(pos.y)
		zoomLevel = Math.floor(zoomLevel)
		return [pos, zoomLevel]
	}

	//--------------------------------------------------------------------------

	private normalizeCoordsRange = (pos: Point, zoomLevel: number): [Point, number] => {
		pos.x = Math.max(pos.x, this.raw.min.x)
		pos.y = Math.max(pos.y, this.raw.min.y)
		zoomLevel = Math.max(zoomLevel, 0)
		pos.x = Math.min(pos.x, this.raw.max.x)
		pos.y = Math.min(pos.y, this.raw.max.y)
		zoomLevel = Math.min(zoomLevel, CanvasPosition.allowableZoomFactors.length - 1)
		return [pos, zoomLevel]
	}

	//==========================================================================

	private setWithNormalizedCoords = (pos: Point, zoomLevel: number) => {
		this.setRawCoords(pos)
		this.setFlooredCoords(pos)
		this.setZoomCoords(zoomLevel)
	}

	//--------------------------------------------------------------------------

	private setRawCoords = (pos: Point) => {
		this.raw.pos = pos
	}

	//--------------------------------------------------------------------------

	private setFlooredCoords = (pos: Point) => {
		this.raw.floor = new Point({
			x: Math.floor(pos.x),
			y: Math.floor(pos.y),
		})
	}

	//--------------------------------------------------------------------------

	private setZoomCoords = (zoomLevel: number) => {
		this.raw.zoomLevel = zoomLevel
		this.raw.zoomFactor = CanvasPosition.allowableZoomFactors[zoomLevel]
		this.raw.zoomScale = this.raw.zoomFactor * 100
	}

	//##########################################################################

	addPos = (pos: Point) => {
		return this.add(pos, 0)
	}

	//==========================================================================

	addZoomLevel = (zoomLevel: number) => {
		return this.add(new Point({x:0, y:0}), zoomLevel)
	}

	//==========================================================================

	add = (pos: Point, zoomLevel: number) => {
		return this.set(
			new Point({
				x: this.raw.pos.x + pos.x,
				y: this.raw.pos.y + pos.y,
			}),
			this.raw.zoomLevel + zoomLevel
		)
	}

	//##########################################################################

	getRaw = () => {
		return this.raw
	}

}

