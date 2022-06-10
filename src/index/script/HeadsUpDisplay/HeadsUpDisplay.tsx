import * as React from 'react'
import HeadsUpDisplayProps from './_HeadsUpDisplayProps'
import HeadsUpDisplayState from './_HeadsUpDisplayState'
import PositionWidget from './PositionWidget/PositionWidget'
import StatusWidget from './StatusWidget/StatusWidget'

export default class HeadsUpDisplay extends React.Component<HeadsUpDisplayProps, HeadsUpDisplayState> {

	props: HeadsUpDisplayProps

	constructor (props: HeadsUpDisplayProps) {
		super(props)
		this.props = props
	}

	render = () => { return (
		<div id="headsUpDisplay">
			<PositionWidget canvasPosition={this.props.canvasPosition} />
			<StatusWidget status={this.props.status} setPaletteVisibility={this.props.setPaletteVisibility} />
		</div>
	) }

}