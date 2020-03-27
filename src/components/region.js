import React from 'react'
import Round from './round'
import styled from 'styled-components'

const RegionContainer = styled.div(({ type }) => {
  return {
    float: 'left',
    display: 'flex',
    width: '42%',
    flexDirection: type === 'left' ? 'row' : 'row-reverse',

    '@screen and (max-width: 1099px) and (min-width: 981px)': {
      width: '43%'
    }
  }
})

export default function Region({ name, seeds, rounds, userData, games, type }) {
  return (
    <RegionContainer
      type={type}
      className={
        type === 'right' ? 'region region--right' : 'region region--left'
      }
    >
      {/*<h2 className="region-name">{name}</h2>*/}
      {rounds.map((element, i) => (
        <Round
          seeds={seeds}
          pairings={element}
          games={games[i]}
          gamesPredicted={userData['games'][i]}
          pairingsPredicted={userData['matchups'][i]}
          final={false}
          number={i}
          key={i}
        />
      ))}
    </RegionContainer>
  )
}
