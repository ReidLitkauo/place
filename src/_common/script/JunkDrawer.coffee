# TODO Everything in here needs a home.
import Globals from './Globals.coffee'

export default class JunkDrawer

	@convertColorCodeToCSSColor: (code) =>
		if not code? or not Globals.PALETTE[code]?
			'transparent'
		else
			color = Globals.PALETTE[code]
			" rgba(#{color[0]},#{color[1]},#{color[2]},#{color[3]}) "

