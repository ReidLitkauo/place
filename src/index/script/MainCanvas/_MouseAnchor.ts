import Point from "../../../_common/script/Point"


export default class MouseAnchor {

	isSet: boolean
	screenCoords: Point
	canvasCoords: Point

	constructor(init?:Partial<MouseAnchor>) {
		Object.assign(this, init)
	}


}

