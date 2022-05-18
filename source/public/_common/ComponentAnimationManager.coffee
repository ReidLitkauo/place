import React from 'react'

class ComponentAnimationManager

	constructor: ->
		@_mapComponentsToStyleFunctions = new Map()
		window.requestAnimationFrame @_runAnimationFrame

	registerComponent: (reference, styleFunction, animationIndex) =>
		this._mapComponentsToStyleFunctions.set reference, { styleFunction, animationIndex }
		console.log this._mapComponentsToStyleFunctions
		this._sortMap()
	
	_sortMap: =>
		this._mapComponentsToStyleFunctions = new Map [...this._mapComponentsToStyleFunctions].sort (a, b) ->
			return a[1].animationIndex > b[1].animationIndex

	deregisterComponent: (reference) =>
		this._mapComponentsToStyleFunctions.delete reference
		
	_runAnimationFrame: =>
		this._mapComponentsToStyleFunctions.forEach (animationAttributes, component) =>
			style = animationAttributes.styleFunction()
			this._applyAnimationStyleToComponent style, component
		window.requestAnimationFrame this._runAnimationFrame
	
	_applyAnimationStyleToComponent: (style, component) =>
		for attribute of style
			component.style[attribute] = style[attribute]

export default cam = new ComponentAnimationManager

