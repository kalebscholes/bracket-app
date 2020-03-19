import React from 'react'
import { render } from 'react-dom'
import Region from './components/region'

import tournamentData from './data/playoffs2017.json'
import brackets from './data/brackets2017.json'

function App(props) {
  const regions = Object.keys(tournamentData)
  return (
    <div className="tournament">
      <canvas id="canvas"></canvas>
      {regions.map((element, i) => (
        <Region
          seeds={tournamentData[element]['seeds']}
          rounds={tournamentData[element]['rounds']}
          games={tournamentData[element]['games']}
          userData={brackets['rohan'][element]}
          type={i % 2 == 0 ? 'left' : 'right'}
          name={element}
          key={i}
        />
      ))}
    </div>
  )
}

render(<App />, document.getElementById('app-root'))
