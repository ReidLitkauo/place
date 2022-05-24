import React from 'react'
import Globals from '../../../_common/script/Globals.coffee'
import Button from '../../../_common/script/Button.coffee'
import ColorSwatch from './ColorSwatch.coffee'

export default class Palette extends React.Component

	constructor: (props) ->
		super props
		this.state =
			selectedColorCode: null
	
	render: =>
		<div id="palette" className={if this.props.isVisible then '' else 'hidden'}>
			<div className="colorSwatches">
				{ for color, code in Globals.PALETTE 
					<ColorSwatch key={code} code={code} color={color}
						colorSelected={this.colorUpdated}
						isSelected={code is this.props.selectedColorCode} /> }
			</div>
			<div className="buttonRow">
				<form onSubmit={this.hidePalette}>
					<Button appearance="cancel" />
				</form>
				<form onSubmit={this.placePixel}>
					<Button appearance="submit" disabled={!this.props.selectedColorCode?} />
				</form>
			</div>
		</div>

	colorUpdated: (code) =>
		this.props.colorUpdated code

	hidePalette: (e) =>
		e?.preventDefault()
		this.props.setPaletteVisibility false
	
	placePixel: (e) =>
		e?.preventDefault()
		this.hidePalette()
		this.props.placePixel()

