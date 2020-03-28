//TODO: add data to pairings
export const tournament = [
  {
    type: 'region',
    division: 'west',
    rounds: [
      {
        title: 'Round 1',
        date: '',
        pairings: [
          [1, 8],
          [4, 5],
          [2, 7],
          [3, 6]
        ]
      },
      {
        title: 'Round 2',
        date: '',
        pairings: [
          [1, 5],
          [2, 3]
        ]
      },
      {
        date: '',
        title: 'Round 3',
        pairings: [[0, 0]]
      }
    ]
  },
  {
    type: 'region',
    division: 'final',
    rounds: [{ title: 'Final', date: '', pairings: [[0, 0]] }]
  },
  {
    type: 'region',
    division: 'east',
    rounds: [
      { title: 'Round 3', date: '', pairings: [[0, 0]] },
      {
        title: 'Round 2',
        date: '',
        pairings: [
          [9, 12],
          [10, 11]
        ]
      },
      {
        title: 'Round 1',
        date: '',
        pairings: [
          [9, 16],
          [12, 13],
          [10, 15],
          [11, 14]
        ]
      }
    ]
  }
]
