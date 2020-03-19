import React from 'react'
import Game from './game'

export default function Round({
  pairings,
  seeds,
  gamesPredicted,
  pairingsPredicted,
  games,
  final,
  number
}) {
  const gameTuples = []
  for (let i = 0; i < pairings.length; i += 2) {
    gameTuples.push([pairings[i], pairings[i + 1]])
  }

  return (
    <section className={'round ' + (final ? 'final' : '') + ' round-' + number}>
      {gameTuples.map((element, i) => (
        <Game
          seeds={seeds}
          firstSeed={element[0]}
          secondSeed={element[1]}
          gamesPredicted={gamesPredicted[i]}
          firstSeedPredicted={
            pairingsPredicted ? pairingsPredicted[i * 2] : element[0]
          }
          secondSeedPredicted={
            pairingsPredicted ? pairingsPredicted[i * 2 + 1] : element[1]
          }
          games={games[i]}
          final={final}
          key={i}
        />
      ))}
    </section>
  )
}
