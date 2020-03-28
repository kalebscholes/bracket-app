//TODO: add colors to teams
const teams = [
  {
    id: 1,
    name: 'golden-state'
  },
  {
    id: 2,
    name: 'san-antonio'
  },
  {
    id: 3,
    name: 'houston'
  },
  {
    id: 4,
    name: 'la-clippers'
  },
  {
    id: 5,
    name: 'utah'
  },
  {
    id: 6,
    name: 'oklahoma-city'
  },
  {
    id: 7,
    name: 'memphis'
  },
  {
    id: 8,
    name: 'portland'
  },
  {
    id: 9,
    name: 'boston'
  },
  {
    id: 10,
    name: 'cleveland'
  },
  {
    id: 11,
    name: 'toronto'
  },
  {
    id: 12,
    name: 'washington'
  },
  {
    id: 13,
    name: 'atlanta'
  },
  {
    id: 14,
    name: 'milwaukee'
  },
  {
    id: 15,
    name: 'indiana'
  },
  {
    id: 16,
    name: 'chicago'
  }
]

//TODO: add data to pairings
const tournament = [
  {
    type: 'region',
    name: 'west',
    final: false,
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
    ],
    games: [
      [
        [1, 1, 1, 1],
        [5, 4, 4, 5, 5, 4, 5],
        [2, 2, 7, 7, 2, 2],
        [3, 3, 6, 3, 3]
      ],
      [[1], [3]],
      []
    ]
  },
  {
    type: 'region',
    name: 'final',
    final: true,
    rounds: [{ title: 'Final', date: '', pairings: [[0, 0]] }],
    games: [[]]
  },
  {
    type: 'region',
    name: 'east',
    final: false,
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
    ],
    games: [
      [
        [8, 8, 1, 1, 1, 1],
        [4, 4, 5, 5, 4, 4],
        [2, 2, 2, 2],
        [6, 3, 6, 3, 3, 3]
      ],
      [[1, 1], [2]],
      []
    ]
  }
]

export { tournament, teams }
