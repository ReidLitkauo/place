import Point from "../../../_common/script/Point"

export default class RawCanvasPosition {

	pos:   Point
	floor: Point
	min:   Point
	max:   Point
	zoomLevel:  number
	zoomFactor: number
	zoomScale:  number

	constructor(init?:Partial<Point>) {
		Object.assign(this, init)
	}
	
}

