import AnimationAttributes from "./_AnimationAttributes"

class ComponentAnimationManager {

	private mapOfComponentsToAnimationAttributes: Map<React.RefObject<HTMLElement>, AnimationAttributes>

	constructor() {
		this.mapOfComponentsToAnimationAttributes = new Map<React.RefObject<HTMLElement>, AnimationAttributes>()
		window.requestAnimationFrame(this.runAnimationFrame)
	}

	private runAnimationFrame = () => {
		this.mapOfComponentsToAnimationAttributes.forEach((attributes: AnimationAttributes, element: React.RefObject<HTMLElement>) => {
			let style = attributes.styleFunction?.()
			this.applyAnimationStyleToElement(style, element)
		})
		window.requestAnimationFrame(this.runAnimationFrame)
	}

	private applyAnimationStyleToElement = (style: any, element: React.RefObject<HTMLElement>) => {
		for(const [k, v] of Object.entries(style)) {
			element.current.style[k] = v
		}
	}

	registerComponent = (reference: React.RefObject<HTMLElement>, styleFunction: () => any, animationIndex: number) => {
		this.mapOfComponentsToAnimationAttributes.set(reference, new AnimationAttributes(
			styleFunction = styleFunction,
			animationIndex = animationIndex
		))
		this.sortMapByAnimationIndexAscending()
	}

	private sortMapByAnimationIndexAscending = () => {
		this.mapOfComponentsToAnimationAttributes = new Map<React.RefObject<HTMLElement>, AnimationAttributes>([...this.mapOfComponentsToAnimationAttributes].sort((a: [React.RefObject<HTMLElement>, AnimationAttributes], b: [React.RefObject<HTMLElement>, AnimationAttributes]): number => {
			return a[1].animationIndex > b[1].animationIndex ? 1 : 0
		}))
	}

	deregisterComponent = (reference: React.RefObject<HTMLElement>) => {
		this.mapOfComponentsToAnimationAttributes.delete(reference)
	}

}

export default new ComponentAnimationManager()

