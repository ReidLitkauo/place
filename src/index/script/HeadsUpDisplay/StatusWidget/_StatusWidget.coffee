import React from 'react'
import Globals from '../../../../_common/script/Globals.coffee'

export default class StatusWidget extends React.Component

	############################################################################

	constructor: (props) ->
		super props

	############################################################################

	render: =>
		<form onSubmit={this.handleSubmit}>
			<button type="submit" className="widget" id="status-widget">
				{this.props.status}
			</button>
		</form>

	#///////////////////////////////////////////////////////////////////////////
	
	handleSubmit: (e) =>
		e?.preventDefault()
		switch this.props.status
			when Globals.STATUS_PLACETILE
				this.showPalette()
	
	#===========================================================================
	
	showPalette: =>
		this.props.setPaletteVisibility true

