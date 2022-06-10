export default class ColorSwatchProps {
	isSelected: boolean
	colorCode: number
	colorRGBA: number[]
	colorSelected: (colorCode: number) => void
}

