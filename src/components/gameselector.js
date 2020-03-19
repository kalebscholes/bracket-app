import React from 'react'

export default function GameSelector({ games, seeds, gamesPredicted }) {
  const createOptions = () => {
    const response = []
    for (let i = 1; i < 8; i++) {
      let seed
      if (games && i - 1 < games.length && seeds) {
        seed = games[i - 1]
        if (seed in seeds) {
          if (i === gamesPredicted) {
            response.push([
              seed,
              'game-option predicted background-' + seeds[seed]['name']
            ])
          } else {
            response.push([
              seed,
              'game-option background-' + seeds[seed]['name']
            ])
          }
        } else {
          if (i === gamesPredicted) {
            response.push([seed, 'game-option predicted unplayed'])
          } else {
            response.push([i - 1, 'game-option'])
          }
        }
      } else {
        if (i === gamesPredicted) {
          response.push([seed, 'game-option predicted unplayed'])
        } else {
          response.push([i - 1, 'game-option'])
        }
      }
    }
    return response
  }

  const options = createOptions()

  return (
    <div className="game-selector">
      {options.map((element, i) => (
        <span className={element[1]} value={element[0]} key={i}>
          {i + 1}
        </span>
      ))}
    </div>
  )
}
