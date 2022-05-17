import React from 'react'

class ComponentAnimationManager

	constructor: ->
		@mapComponentsToStyleFunctions = new Map()
		window.requestAnimationFrame @_runAnimationFrame

	registerComponent: (reference, styleFunction) =>
		this.mapComponentsToStyleFunctions.set reference, styleFunction

	deregisterComponent: (reference) =>
		this.mapComponentsToStyleFunctions.delete reference
		
	_runAnimationFrame: =>
		this.mapComponentsToStyleFunctions.forEach (styleFunction, component) =>
			console.log styleFunction
			console.log component
			style = styleFunction()
			this._applyAnimationStyleToComponent style, component
	
	_applyAnimationStyleToComponent: (style, component) =>
		for attribute of style
			component.style[attribute] = style[attribute]

export default cam = new ComponentAnimationManager

