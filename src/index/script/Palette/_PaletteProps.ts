export default class PaletteProps {
	isVisible: boolean
	selectedColorCode: number
	colorUpdated: (code: number) => void
	setPaletteVisibility: (isVisible: boolean) => void
	placePixel: () => void
}

