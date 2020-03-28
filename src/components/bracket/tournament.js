import React from 'react'
import Region from './region'

import styled from 'styled-components'

const Bracket = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: rgba(225, 225, 225, 0.9);
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
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Hero = styled.header``

export default function({ tournament }) {
  return (
    <Tournament className="tournament">
      {/*<Hero className="hero">*/}
      {/*  <div className="hero-wrap">*/}
      {/*    <h1 id="headline">Tournament</h1>*/}
      {/*    <p className="year">*/}
      {/*      <i className="fa fa-star" /> 2015 <i className="fa fa-star" />*/}
      {/*    </p>*/}
      {/*    <p>Ballin' Outta Control</p>*/}
      {/*  </div>*/}
      {/*</Hero>*/}

      <Bracket className="bracket">
        {tournament.map((region, idx) => (
          <Region key={idx} region={region} />
        ))}
      </Bracket>
    </Tournament>
  )
}
