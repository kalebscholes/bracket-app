import React from 'react'
import Game from './game'
import styled from 'styled-components'

const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.5% 0 0;
  order: 1;
  scroll-snap-align: start;
  width: 100%;

  &:last-child {
    margin: 0;
  }

  @media (max-width: 768px) {
    min-width: 100vw;
    padding: 20px;
  }
`

const RoundHeader = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  color: #2c7399;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}
`

const RoundDate = styled.span`
  letter-spacing: 2px;
  color: #3f915f;
`

const RoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`

export default function({ division, round, number }) {
  return (
    <RoundContainer className={`round round-${number} division-${division}`}>
      <RoundHeader>
        <h6>{round.title}</h6>
        {round.date && <RoundDate>{round.date}</RoundDate>}
      </RoundHeader>
      <RoundContent className="round-content">
        {round?.pairings?.map((pairing, i) => (
          <Game division={division} pairing={pairing} key={i} />
        ))}
      </RoundContent>
    </RoundContainer>
  )
}