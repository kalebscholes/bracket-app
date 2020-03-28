import React from 'react'
import styled from 'styled-components'
import { TeamContext } from '../../context'

const TeamContainer = styled.div(({ division }) => {
  const flexDirection = division === 'east' ? 'row-reverse' : 'row'
  const style = {
    display: 'flex',
    flex: '1 1 75px',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '5px',
    margin: '3px',
    height: '75px',
    lineHeight: '25px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
    flexDirection,
    ' @media (max-width: 768px)': {
      flex: '1 1 50px',
      height: '50px'
    },
    ':first-child': {
      borderBottom: ' 1px solid rgba(0, 0, 0, 0.05)'
    }
  }
  return style
})

const TeamName = styled.span`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TeamIndicator = styled.span(({ color = 'gray' }) => {
  return {
    width: '10px',
    height: '100%',
    backgroundColor: color,
    borderRadius: '10px',
    marginRight: '5px'
  }
})

//TODO: need to find points per round
export default function({ division, teamId }) {
  const teams = React.useContext(TeamContext)
  const team = teams.find(team => team.id === teamId)
  const name = team?.name ?? 'unknown'
  return (
    <TeamContainer division={division} className={`team team-${name}`}>
      {team && <TeamIndicator color={team?.color} className="team-indicator" />}
      <TeamName className="team-name">{team?.name}</TeamName>
    </TeamContainer>
  )
}
