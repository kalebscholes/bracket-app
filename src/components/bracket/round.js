import React from 'react'
import Game from './game'
import styled, { css } from 'styled-components'

const Round = styled.div`
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
    
    ${props =>
      props.active === false &&
      css`
        display: none;
      `}
`

const RoundHeader = styled.div`
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .4);
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
    <Round
      active={round.active}
      className={`round round-${number} division-${division}`}
    >
      <RoundHeader>
        <h6>{round.title}</h6>
        {round.date && <RoundDate>{round.date}</RoundDate>}
      </RoundHeader>
      <RoundContent className="round-content">
        {round?.pairings?.map((pairing, i) => (
          <Game
            active={round.active}
            division={division}
            pairing={pairing}
            key={i}
          />
        ))}
      </RoundContent>
    </Round>
  )
}
