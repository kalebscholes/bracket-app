import React from 'react'
import styled from 'styled-components'

const TeamContainer = styled.div`
  padding: 0 5px;
  margin: 3px 0;
  height: 25px;
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  
  background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    opacity: 1;
}
`

export default function Team({
  name,
  namePredicted,
  seedPredicted,
  seed,
  displayName,
  displayNamePredicted
}) {
  let className = 'team team-' + name
  let dataTeam = name
  let currentSeed = seed
  let teamDisplayName = displayName
  let wrongName = ''

  if (name && !namePredicted) {
  } else if (!name && namePredicted) {
    className = 'team team-' + namePredicted
    dataTeam = namePredicted
    currentSeed = seedPredicted
    teamDisplayName = displayNamePredicted
  } else if (name === namePredicted) {
  } else {
    currentSeed = seed
    teamDisplayName = displayName
    wrongName = displayNamePredicted
  }
  console.log('team', currentSeed, teamDisplayName, wrongName)
  return (
    <TeamContainer className={className}>
      <span className="team-seed">{currentSeed}</span>
      <span className="team-name">
        <div className="correct">{teamDisplayName}</div>
        <div className="incorrect">{wrongName}</div>
      </span>
    </TeamContainer>
  )
}
