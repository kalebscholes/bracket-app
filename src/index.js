import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Tournament from './components/bracket/tournament'
import { tournament } from './data/tournament'
import { teams } from './data/teams'
import { TeamContext } from './context'
import './serviceWorker'
import './analytics'
import './styles/main.css'

const Header = styled.div`
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 20px 0;
`

const HeaderTitle = styled.h3`
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`
const HeaderSubTitle = styled.h4``

import BackgroundImage from './images/slc_temple_spring.jpg'

const AppContainer = styled.div(() => {
  return {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: `url(${BackgroundImage}) no-repeat`,
    backgroundSize: 'cover'
  }
})

const Wrapper = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), #9198e5);
  backdrop-filter: blur(5px);
  height: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <TeamContext.Provider value={teams}>
      <AppContainer>
        <Wrapper>
          <Header>
            <HeaderSubTitle>
              Sunset Ridge 7<sup>th</sup> Ward
            </HeaderSubTitle>
            <HeaderTitle>2020 Indexing Challenge</HeaderTitle>
          </Header>
          <Tournament tournament={tournament} />
        </Wrapper>
      </AppContainer>
    </TeamContext.Provider>
  )
}

render(<App />, document.getElementById('app-root'))
