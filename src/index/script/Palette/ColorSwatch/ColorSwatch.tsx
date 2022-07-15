import * as React from 'react'
import * as _ from 'lodash'
import JunkDrawer from '../../../../_common/script/JunkDrawer'
import ColorSwatchState from './_ColorSwatchState'
import ColorSwatchProps from './_ColorSwatchProps'

export default class ColorSwatch extends React.Component<ColorSwatchState, ColorSwatchProps> {
	
	props: ColorSwatchProps

	constructor (props: ColorSwatchProps) {
		super(props)
		this.props = props
	}

	render = () => { return (
		<form onSubmit={this.processSubmit}>
			<button type="submit" className={"colorSwatch" + (this.props.isSelected ? " selected" : "")}
				id={"swatch-" + this.props.colorCode} style={this.computeStyle()}></button>
		</form>
	) }

	processSubmit = (evt: React.FormEvent) => {
		evt?.preventDefault()
		this.props.colorSelected(this.props.colorCode)
	}

	computeStyle = () => {
		let rgbaString = `rgba(${this.props.colorRGBA[0]},${this.props.colorRGBA[1]},${this.props.colorRGBA[2]},${this.props.colorRGBA[3]})`
		if (_.isEqual(this.props.colorRGBA, [255,255,255,255])) {
			return this.computeStyleForWhite()
		} else {
			return this.computeStyleNormally(JunkDrawer.convertColorCodeToCSSColor(this.props.colorCode))
		}
	}

	computeStyleForWhite = () => {
		return {
			backgroundColor: 'white',
			borderColor: this.props.isSelected ? '' : 'black !important',
		}
	}

	computeStyleNormally = (rgbaString: string) => {
		return {
			backgroundColor: rgbaString,
			borderColor: rgbaString,
		}
	}

}