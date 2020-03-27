import React from 'react'
import { render } from 'react-dom'
import Region from './components/region'

import tournamentData from './data/playoffs2017.json'
import brackets from './data/brackets2017.json'
import Tournament from './components/tournament'

function App(props) {
  const regions = Object.keys(tournamentData)
  return <Tournament id="canvas" regions={regions} />
}

render(<App />, document.getElementById('app-root'))
