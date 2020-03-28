import React from 'react'
import styled from 'styled-components'
import { teams } from '../../data/tournament'

//TODO: add a team indicator instead of just a border
const TeamContainer = styled.div(({ type }) => {
  const style = {
    display: 'flex',
    flex: '1 1 50px',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '5px',
    margin: '3px',
    height: '50px',
    lineHeight: '25px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
    ':first-child': {
      borderBottom: ' 1px solid rgba(0, 0, 0, 0.05)'
    }
  }
  return style
})

const TeamSeed = styled.span`
  color: #999;
  flex: 0 1 30px;
  text-align: center;
`

const TeamName = styled.span`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TeamIndicator = styled.span(() => {
  return {
    width: '10px',
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: '10px',
    marginRight: '5px'
  }
})

//TODO: need to find points per round
export default function Team({ type, id }) {
  const team = teams.find(team => team.id === id)
  const name = team?.name ?? 'unknown'
  let className = `team team-${name}`

  return (
    <TeamContainer type={type} className={className}>
      {/*<TeamSeed className="team-seed">{currentSeed}</TeamSeed>*/}
      {team && <TeamIndicator className="team-indicator" />}
      <TeamName className="team-name">{team?.name}</TeamName>
    </TeamContainer>
  )
}
