import React from 'react'

export default class Button extends React.Component

	constructor: (props) ->
		super props
	
	render: =>
		<button className={"button #{this.props.appearance}"} type="submit" disabled={this.props.disabled} />

