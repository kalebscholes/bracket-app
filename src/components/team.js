import React from 'react'

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
  console.log('team')
  return (
    <div className={className} data-team={dataTeam}>
      <span className="team-seed">{currentSeed}</span>
      <span className="team-name">
        <div className="correct">{teamDisplayName}</div>
        <div className="incorrect">{wrongName}</div>
      </span>
    </div>
  )
}
