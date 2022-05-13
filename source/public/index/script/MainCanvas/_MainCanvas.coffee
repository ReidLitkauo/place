import React from 'react'

export default class MainCanvas extends React.Component

	@_size: '50vmin'
	@_borderWidth: '150vmax'

	constructor: (props) ->
		super(props)

	computeStyle: => {
		transform: this._computeStyleTransform()
	}

	_computeStyleTransform: =>
		this._computeStyleScale() + " " + this._computeStyleTranslateX() + " " + this._computeStyleTranslateY()
	
	_computeStyleScale: =>
		"scale(#{1})"
	
	_computeStyleTranslateX: =>
		"translateX(calc(calc(#{0} * -1 * #{this._size}) - #{this._borderWidth}))"
	
	_computeStyleTranslateY: =>
		"translateY(calc(calc(#{0} * -1 * #{this._size}) - #{this._borderWidth}))"

	render: =>
		<canvas id="main-canvas" width="2000" height="2000"
			style={this.computeStyle()} >
		</canvas>

