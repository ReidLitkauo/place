import AnimationAttributes from "./_AnimationAttributes"

class ElementAnimationManager {

	private mapOfComponentsToAnimationAttributes: Map<HTMLElement, AnimationAttributes>

	//##########################################################################

	constructor() {
		this.mapOfComponentsToAnimationAttributes = new Map<HTMLElement, AnimationAttributes>()
		window?.requestAnimationFrame(this.runAnimationFrame)
	}

	private runAnimationFrame = () => {
		this.mapOfComponentsToAnimationAttributes.forEach((attributes: AnimationAttributes, element: HTMLElement) => {
			let style = attributes.styleFunction?.()
			this.applyAnimationStyleToElement(style, element)
		})
		window?.requestAnimationFrame(this.runAnimationFrame)
	}

	private applyAnimationStyleToElement = (style: any, element: HTMLElement) => {
		for(const [k, v] of Object.entries(style)) {
			element.style[k] = v
		}
	}

	//##########################################################################

	registerComponent = (reference: HTMLElement, styleFunction: () => any, animationIndex: number) => {
		this.mapOfComponentsToAnimationAttributes.set(reference, new AnimationAttributes(
			styleFunction = styleFunction,
			animationIndex = animationIndex
		))
		this.sortMapByAnimationIndexAscending()
	}

	private sortMapByAnimationIndexAscending = () => {
		this.mapOfComponentsToAnimationAttributes = new Map<HTMLElement, AnimationAttributes>([...this.mapOfComponentsToAnimationAttributes].sort((a: [HTMLElement, AnimationAttributes], b: [HTMLElement, AnimationAttributes]): number => {
			return a[1].animationIndex > b[1].animationIndex ? 1 : 0
		}))
	}

	//##########################################################################

	deregisterComponent = (reference: HTMLElement) => {
		this.mapOfComponentsToAnimationAttributes.delete(reference)
	}

}

export default new ElementAnimationManager()

