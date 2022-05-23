import React from 'react'
import ComponentAnimationManager from './ComponentAnimationManager.coffee'

export default class AnimatedComponent extends React.Component

	constructor: (props, @_animationIndex = 0) ->
		super props
		@ref = React.createRef()

	componentDidMount: =>
		ComponentAnimationManager.registerComponent this.ref.current, this._computeAnimationStyle, this._animationIndex
	
	# _computeAnimationStyle to be implemented by child
	
	componentWillUnmount: =>
		ComponentAnimationManager.deregisterComponent this.ref.current
	
