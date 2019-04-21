import React from 'react'
import ReactDom from 'react-dom';

import App from './js/App'

let appContainer = document.getElementById('app')

ReactDom.render(<App />, appContainer)

if (module.hot) {
  module.hot.accept('./js/App', () => {
    const App = require('./js/App').default
    ReactDom.render(<App />, appContainer)
  })
}
