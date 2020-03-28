import React from 'react'
import Round from './round'
import styled from 'styled-components'

//TODO: fix the flex direction
const RegionContainer = styled.div(({ type = 'left' }) => {
  return {
    display: 'flex',
    flex: 1,
    flexDirection: type === 'left' ? 'row' : 'row-reverse'
  }
})
//TODO: normal regions should be flex 2 , final = 1
export default function Region({ region }) {
  const { type, name, final, rounds, games } = region
  return (
    <>
      {/*<h2 className="region-name">{name}</h2>*/}
      {rounds.map((round, i) => (
        <Round
          key={i}
          type={type}
          round={round}
          games={games[i]}
          final={final}
          number={i}
        />
      ))}
    </>
  )
}
