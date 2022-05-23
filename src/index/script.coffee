import React from 'react'
import ReactDom from 'react-dom'

import App from './script/App.coffee'

ReactDom.createRoot document.getElementById 'react-root'
	.render <App />

