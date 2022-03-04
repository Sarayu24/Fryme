import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './styles.css'

// Set Project Selector for FreeCodeCamp Test Runner
localStorage.setItem('project_selector', 'random-quote-machine')

// Append FreeCodeCamp's Test Runner
const scriptDiv = document.createElement('script')
scriptDiv.src =
  'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'

document.body.appendChild(scriptDiv)
// End of Append

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
