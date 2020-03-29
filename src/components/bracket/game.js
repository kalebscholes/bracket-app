import React from 'react'
import styled from 'styled-components'
import Team from './team'

const Game = styled.div(({ active, division }) => {
  const marginTop = division === 'final' ? 50 : 0
  const opacity = active ? 1 : 0.5
  return {
    userSelect: 'none',
    background: 'white',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.1)',
    marginTop,
    opacity
  }
})

export default function({ active, division, pairing = [] }) {
  return (
    <Game active={active} division={division} className="game">
      {pairing.map((id, idx) => (
        <Team key={idx} teamId={id} division={division} />
      ))}
    </Game>
  )
}
