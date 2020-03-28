import React from 'react'
import { render } from 'react-dom'
import Tournament from './components/bracket/tournament'
import { tournament, teams } from './data/tournament'
import './styles/main.css'

function App(props) {
  return <Tournament tournament={tournament} teams={teams} />
}

render(<App />, document.getElementById('app-root'))
