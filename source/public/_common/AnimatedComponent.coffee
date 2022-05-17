import React from 'react'

export default class AnimatedComponent extends React.Component

	constructor: (props) ->
		super props
		@ref = React.createRef()

	componentDidMount: =>
		this._runAnimationFrame = true
		window.requestAnimationFrame this._animationFrame
	
	componentWillUnmount: =>
		this._runAnimationFrame = false
	
	_animationFrame: =>
		style = this._computeAnimationStyle()
		this._applyAnimationStyle style
		if this._runAnimationFrame then window.requestAnimationFrame this._animationFrame
	
	# _computeAnimationStyle to be implemented by child

	_applyAnimationStyle: (style) =>
		for attribute of style
			this.ref.current.style[attribute] = style[attribute]

