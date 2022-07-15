import * as React from 'react'
import Globals from '../../../../_common/script/Globals'
import StatusWidgetProps from './_StatusWidgetProps'
import StatusWidgetState from './_StatusWidgetState'

export default class StatusWidget extends React.Component<StatusWidgetProps, StatusWidgetState> {

	props: StatusWidgetProps

	constructor (props: StatusWidgetProps) {
		super(props)
		this.props = props
	}

	render = () => { return (
		<form onSubmit={this.handleSubmit}>
			<button type="submit" className="widget" id="status-widget">
				{this.props.status}
			</button>
		</form>
	) }

	handleSubmit = (evt: React.FormEvent) => {
		evt?.preventDefault?.()
		switch (this.props.status) {
			case Globals.STATUS_PLACETILE: {
				this.showPalette();
				break;
			}
			// TODO more case statements in here...
		}
	}

	showPalette = () => {
		this.props.setPaletteVisibility(true);
	}

}