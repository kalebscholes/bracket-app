import React from 'react'
import styled from 'styled-components'
import Team from './team'

const Game = styled.div(({ division }) => {
  const marginTop = division === 'final' ? 50 : 0
  return {
    background: 'white',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.1)',
    marginTop
  }
})

export default function({ division, pairing = [] }) {
  return (
    <Game division={division} className="game">
      {pairing.map((id, idx) => (
        <Team key={idx} teamId={id} division={division} />
      ))}
    </Game>
  )
}
