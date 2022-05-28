import React from 'react'
import _ from 'lodash'
import JunkDrawer from "../../../_common/script/JunkDrawer.coffee"

export default class ColorSwatch extends React.Component

	constructor: (props) ->
		super props
	
	render: =>
		<form onSubmit={this.processSelected}>
			<button type="submit" className={"colorSwatch" + if this.props.isSelected then " selected" else ""}
				id={"swatch-" + this.props.code} style={this.computeStyle()}></button>
		</form>
	
	processSelected: (e) =>
		e?.preventDefault()
		this.props.colorSelected this.props.code
	
	computeStyle: =>
		rgba = this.props.color
		rgbaString = "rgba(#{rgba[0]},#{rgba[1]},#{rgba[2]},#{rgba[3]})"
		if _.isEqual this.props.color, [255,255,255,255]
			this.computeStyleForWhite()
		else
			this.computeStyleNormally JunkDrawer.convertColorCodeToCSSColor this.props.code

	computeStyleForWhite: =>
		backgroundColor: 'white'
		borderColor: if this.props.isSelected then '' else 'black !important'

	computeStyleNormally: (rgbaString) =>
		backgroundColor: rgbaString
		borderColor: rgbaString

