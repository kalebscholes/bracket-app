import React from 'react'
import Round from './round'

export default function Region({ name, seeds, rounds, userData, games, type }) {
  if (name === 'Final') {
    return (
      <Round
        seeds={seeds}
        pairings={rounds[0]}
        games={games[0]}
        gamesPredicted={userData['games'][0]}
        pairingsPredicted={userData['matchups'][0]}
        final={true}
        number={0}
        key={0}
      />
    )
  }
  return (
    <div className={type === 'right' ? 'region region-right' : 'region'}>
      <h2 className="region-name">{name}</h2>
      {rounds.map((element, i) => (
        <Round
          seeds={seeds}
          pairings={element}
          games={games[i]}
          gamesPredicted={userData['games'][i]}
          pairingsPredicted={userData['matchups'][i]}
          final={false}
          number={i}
          key={i}
        />
      ))}
    </div>
  )
}
