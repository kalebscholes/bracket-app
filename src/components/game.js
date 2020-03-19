import React from 'react'

import Team from './team'
import GameSelector from './gameselector'

export default function Game({
  firstSeed,
  firstSeedPredicted,
  secondSeed,
  secondSeedPredicted,
  seeds,
  final,
  gamesPredicted,
  games
}) {
  const firstName = firstSeed !== 0 ? seeds[firstSeed] : null
  const secondName = secondSeed !== 0 ? seeds[secondSeed] : null

  let firstNamePredicted = ''
  let secondNamePredicted = ''

  if (firstSeedPredicted) {
    firstSeedPredicted = final
      ? seeds[firstSeedPredicted[0]][firstSeedPredicted[1]]
      : seeds[firstSeedPredicted]

    secondNamePredicted = final
      ? seeds[secondSeedPredicted[0]][secondSeedPredicted[1]]
      : seeds[secondSeedPredicted]
  }

  const summary = {
    [firstSeed]: { name: firstName },
    [secondSeed]: { name: secondName }
  }

  return (
    <article className="game">
      <Team
        name={firstName}
        namePredicted={firstNamePredicted}
        displayName={firstName}
        displayNamePredicted={firstNamePredicted}
        seed={firstSeed}
        seedPredicted={final ? firstSeedPredicted[1] : firstSeedPredicted}
      />

      <Team
        name={secondName}
        namePredicted={secondNamePredicted}
        displayName={secondName}
        displayNamePredicted={secondNamePredicted}
        seed={secondSeed}
        seedPredicted={final ? secondSeedPredicted[1] : secondSeedPredicted}
      />

      <GameSelector
        games={games}
        seeds={summary}
        gamesPredicted={gamesPredicted}
      />
    </article>
  )
}
