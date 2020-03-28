import React from 'react'
import styled from 'styled-components'
import Team from './team'

const GameContainer = styled.div(props => {
  return {
    background: 'white',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: ' 0 3px 6px rgba(0, 0, 0, 0.05)'
  }
})

//TODO: pass team id / round
export default function Game({ round, pairing = [], type }) {
  return (
    <GameContainer round={round} className="game">
      {pairing.map((id, idx) => (
        <Team key={idx} type={type} id={id} />
      ))}
    </GameContainer>
  )
}
