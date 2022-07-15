import * as React from 'react'
import PositionWidgetProps from './_PositionWidgetProps'
import PositionWidgetState from './_PositionWidgetState'

export default class PositionWidget extends React.Component<PositionWidgetProps, PositionWidgetState> {

	props: PositionWidgetProps
	
	constructor (props: PositionWidgetProps) {
		super(props)
		this.props = props
	}

	humanReadablePosition = () => {
		let rawPos = this.props.canvasPosition.getRaw()
		return `(${rawPos.floor.x},${rawPos.floor.y}) ${rawPos.zoomFactor}x`
	}

	render = () => { return (
		<div className="widget" id="position-widget">
			{this.humanReadablePosition()}
		</div>
	) }

}

