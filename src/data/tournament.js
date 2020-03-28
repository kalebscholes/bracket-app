//TODO: add data to pairings
export const tournament = [
  {
    type: 'region',
    division: 'west',
    rounds: [
      {
        title: 'Round 1',
        active: true,
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
        active: false,
        date: '',
        // pairings: [
        //   [1, 5],
        //   [2, 3]
        // ]
        pairings: [
          [0, 0],
          [0, 0]
        ]
      },
      {
        title: 'Round 3',
        active: false,
        date: '',
        pairings: [[0, 0]]
      }
    ]
  },
  {
    type: 'region',
    division: 'final',
    rounds: [{ title: 'Final', date: '', active: false, pairings: [[0, 0]] }]
  },
  {
    type: 'region',
    division: 'east',
    rounds: [
      { title: 'Round 3', date: '', active: false, pairings: [[0, 0]] },
      {
        title: 'Round 2',
        date: '',
        active: false,
        pairings: [
          [0, 0],
          [0, 0]
        ]
        // pairings: [
        //   [9, 12],
        //   [10, 11]
        // ]
      },
      {
        title: 'Round 1',
        date: '',
        active: true,
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
