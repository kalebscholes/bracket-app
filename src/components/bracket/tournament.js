import React from 'react'
import styled from 'styled-components'

import Region from './region'

const Bracket = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  flex: 1;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  @media (min-width: 768px) {
    padding: 20px;
  }
`

const Tournament = styled.div`
  display: flex;
  flex: 1;
`

export default function({ tournament }) {
  return (
    <Tournament className="tournament">
      <Bracket className="bracket">
        {tournament.map((region, idx) => (
          <Region key={idx} region={region} />
        ))}
      </Bracket>
    </Tournament>
  )
}
