import React from 'react'
import ReactDom from 'react-dom'
import * as Add from './script/add.coffee'

root = ReactDom.createRoot document.getElementById 'root'
root.render do ->
	<h1>
		If this text is big, React is set up properly!
	</h1>

