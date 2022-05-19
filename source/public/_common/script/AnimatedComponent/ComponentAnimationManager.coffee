import React from 'react'

class ComponentAnimationManager

	constructor: ->
		@_mapOfComponentsToAnimationAttributes = new Map()
		window?.requestAnimationFrame @_runAnimationFrame

	_runAnimationFrame: =>
		this._mapOfComponentsToAnimationAttributes.forEach (animationAttributes, component) =>
			style = animationAttributes.styleFunction()
			this._applyAnimationStyleToComponent style, component
		window?.requestAnimationFrame this._runAnimationFrame
	
	_applyAnimationStyleToComponent: (style, component) =>
		for attribute of style
			component.style[attribute] = style[attribute]

	registerComponent: (reference, styleFunction, animationIndex) =>
		this._mapOfComponentsToAnimationAttributes.set reference, { styleFunction, animationIndex }
		this._sortMapByAnimationIndexAscending()
	
	_sortMapByAnimationIndexAscending: =>
		this._mapOfComponentsToAnimationAttributes = new Map [...this._mapOfComponentsToAnimationAttributes].sort (a, b) ->
			return a[1].animationIndex > b[1].animationIndex

	deregisterComponent: (reference) =>
		this._mapOfComponentsToAnimationAttributes.delete reference
		
export default cam = new ComponentAnimationManager

