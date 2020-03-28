import React from 'react'
import Round from './round'

export default function({ region }) {
  return (
    <>
      {region?.rounds.map((round, i) => (
        <Round key={i} round={round} division={region?.division} number={i} />
      ))}
    </>
  )
}
