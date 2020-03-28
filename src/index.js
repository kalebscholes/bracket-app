import React from 'react'
import { render } from 'react-dom'
import Tournament from './components/bracket/tournament'
import { tournament } from './data/tournament'
import { teams } from './data/teams'
import { TeamContext } from './context'
import './styles/main.css'

function App() {
  return (
    <TeamContext.Provider value={teams}>
      <Tournament tournament={tournament} />
    </TeamContext.Provider>
  )
}

render(<App />, document.getElementById('app-root'))
