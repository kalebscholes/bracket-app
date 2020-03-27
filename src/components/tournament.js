import React from 'react'
import Region from './region'
import tournamentData from '../data/playoffs2017.json'
import brackets from '../data/brackets2017.json'

import styled from 'styled-components'

const Bracket = styled.div`
  overflow: hidden;
  background-color: rgba(225, 225, 225, 0.9);
  padding-top: 20px;
  font-size: 12px;
  padding: 40px 0;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

export default function Tournament({ regions, ...props }) {
  return (
    <div className="tournament">
      {/*TODO: adjust */}
      <header className="hero">
        <div className="hero-wrap">
          <p className="intro" id="intro">
            flexbox
          </p>
          <h1 id="headline">Tournament</h1>
          <p className="year">
            <i className="fa fa-star"></i> 2015 <i className="fa fa-star"></i>
          </p>
          <p>Ballin' Outta Control</p>
        </div>
      </header>

      <Bracket className="bracket">
        <Container className="container">
          {regions.map((element, i) => (
            <Region
              seeds={tournamentData[element]['seeds']}
              rounds={tournamentData[element]['rounds']}
              games={tournamentData[element]['games']}
              userData={brackets['rohan'][element]}
              type={i % 2 == 0 ? 'left' : 'right'}
              name={element}
              key={i}
            />
          ))}
        </Container>
      </Bracket>
    </div>
  )
}
