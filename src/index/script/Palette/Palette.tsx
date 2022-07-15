import * as React from 'react'
import PaletteProps from './_PaletteProps';
import PaletteState from './_PaletteState';
import Globals from '../../../_common/script/Globals'
import Button from '../../../_common/script/Button/Button'
import ColorSwatch from './ColorSwatch/ColorSwatch'

export default class Palette extends React.Component<PaletteProps, PaletteState> {

	props: PaletteProps

	constructor (props: PaletteProps) {
		super(props)
	}

	render = () => { return (
		<div id="palette" className={this.props.isVisible ? '' : 'hidden'}>
			<div className="colorSwatches">
				{ Globals.PALETTE.map( (colorRGBA: number[], colorCode: number) => { return (
					<ColorSwatch key={colorCode} colorCode={colorCode} colorRGBA={colorRGBA}
						colorSelected={this.colorSelected}
						isSelected={colorCode == this.props.selectedColorCode} />
				) } ) }
			</div>
			<div className="buttonRow">
				<form onSubmit={this.hidePalette}>
					<Button appearance="cancel" disabled={false} />
				</form>
				<form onSubmit={this.placePixel}>
					<Button appearance="submit" disabled={this.props.selectedColorCode == null} />
				</form>
			</div>
		</div>
	) }

	colorSelected = (code: number) => {
		this.props.colorUpdated(code)
	}

	hidePalette = (evt: React.FormEvent) => {
		evt?.preventDefault()
		this.props.setPaletteVisibility(false)
	}

	placePixel = (evt: React.FormEvent) => {
		evt?.preventDefault()
		this.hidePalette(evt)
		this.props.placePixel()
	}

}