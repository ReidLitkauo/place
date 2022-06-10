import * as React from 'react'
import ButtonProps from './_ButtonProps'
import ButtonState from './_ButtonState'

export default class Button extends React.Component<ButtonProps, ButtonState> {

	props: ButtonProps

	constructor(props: ButtonProps) {
		super(props)
		this.props = props
	}

	render = () => { return (
		<button className={"button " + this.props.appearance} type="submit" disabled={this.props.disabled} />
	) }

}

