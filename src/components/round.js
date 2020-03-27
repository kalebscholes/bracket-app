import React from 'react'
import Game from './game'
import styled from 'styled-components'

const RoundContainer = styled.div(({ final }) => {
  return {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    margin: '0 2.5% 0 0',
    order: 1
  }
})

const RoundHeader = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 13px;
  color: #2c7399;
  text-transform: uppercase;
  text-align: center;
}
`

const RoundDate = styled.span`
  font-size: 10px;
  letter-spacing: 2px;
  font-family: 'Istok Web', sans-serif;
  color: #3f915f;
`

const RoundContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

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
    <RoundContainer
      final={final}
      number={number}
      className={'round ' + (final ? 'final' : '') + ' round-' + number}
    >
      <RoundHeader>
        <h6>Round {number + 1}</h6>
        {/*<RoundDate>hello</RoundDate>*/}
      </RoundHeader>
      <RoundContent className={'round-content'}>
        {gameTuples.map((element, i) => (
          <Game
            round={number}
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
      </RoundContent>
    </RoundContainer>
  )
}
