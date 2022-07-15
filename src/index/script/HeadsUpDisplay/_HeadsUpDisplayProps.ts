import CanvasPosition from "../CanvasPosition/CanvasPosition";

export default class HeadsUpDisplayProps {
	canvasPosition: CanvasPosition
	status: string
	setPaletteVisibility: (visibility: boolean) => void
}

