// TODO Everything in here needs a home.
import Globals from './Globals'

export default class JunkDrawer {

	static convertColorCodeToCSSColor(code: number): string {
		let color = Globals.PALETTE[code]
		if (color == null) {
			return ' transparent '
		} else {
			return ` rgba(${color[0]},${color[1]},${color[2]},${color[3]}) `
		}
	}

}

