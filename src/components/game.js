import React from 'react'
import styled from 'styled-components'
import Team from './team'
// import GameSelector from './gameselector'

const GameContainer = styled.div(({ round }) => {
  return {
    margin: 0,
    width: '100%',
    // paddingTop: 10 + round * 40,
    // paddingRight: 0,
    // paddingBottom: 10 + round * 40,
    // paddingLeft: 0,
    height: '60px',
    transition: 'all 0.2s'
  }
})

export default function Game({
  round,
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
    <GameContainer round={round} className="game">
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

      {/*<GameSelector*/}
      {/*  games={games}*/}
      {/*  seeds={summary}*/}
      {/*  gamesPredicted={gamesPredicted}*/}
      {/*/>*/}
    </GameContainer>
  )
}
