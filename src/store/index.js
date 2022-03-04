import { createStore } from 'vuex'


export default createStore({
  state: {
    projectsEnum: ['natours', 'portfolio', 'arcanoid'],
    projectSheet: {
      'natours': {
        'stack': ['Express', 'MongoDB/Mongoose', 'PUG', 'SCSS', 'AdminBro', 'Stripe', 'Mapbox', 'Parcel'],
        'desc': ['In this project, I acted as a full stack.',
          'The most difficult moment of creating the project was the development of Authentication, Authorization and Security.'],
        'code': 'https://github.com/Lormida/natours'
      },
      'portfolio': {
        'stack': ['Vue', 'GSAP', 'Express', 'Canvas', 'SCSS', 'Swiper'],
        'desc': ['Due to the long absence of frontend practice, it was decided to develop the resume website as a small practice.',
          'During the development, it was necessary to study the interaction with canvas, GSAP, complex 3D transformations, etc.',
          'The most difficult thing during the writing of the project was to overcome your own perfectionism.'
        ],
        'code': 'https://github.com/Lormida/Portfolio'
      },
      'arcanoid': {
        'stack': ['Express', 'Phaser 3', 'Socket.io'],
        'desc': ['The game was developed as part of a course project at the university.',
          `The hardest part was creating multiplayer with websockets.`],
        'code': 'https://github.com/Lormida/MultiArcanoid'
      },
      'coach': {
        'stack': ['Vue', 'Express', 'MongoDB/Mongoose', 'Jsonwebtoken'],
        'desc': ['A simple project where everyone can find a suitable coach, register a new coach or send a requests to any coach.',
          'Also, each coach can only view and remove requests addressed to him personally.',
          'The administrator can view and remove the requests of any other coaches.'
        ],
        'code': 'https://github.com/Lormida/Coach'
      },
    },
    words: [
      'searching',
      'underestimation',
      'support',
      'relationship',
      'web',
      'red eyes',
      'hate',
      'tea with milk',
      'bugs',
      'denial',
      'anger',
      'bargain',
      'depression',
      'acceptance',
      'justice',
      'destiny',
      'goal',
      'resume',
    ]
  },
  mutations: {


  },
  actions: {

  },
  getters: {
    getCurrentProjectSheet: function (state) {
      return function (id) {
        if (state.projectSheet[id]) {
          return state.projectSheet[id]['stack']
        }
        else return null
      }
    },
    getCurrentProjectDesc: function (state) {
      return function (id) {
        if (state.projectSheet[id]) {
          return state.projectSheet[id]['desc']
        }
        else return null
      }
    },
    getCurrentProjectSrcCode: function (state) {
      return function (id) {
        if (state.projectSheet[id]) {
          return state.projectSheet[id]['code']
        }
        else return null
      }
    },
    getWords(state) {
      return state.words
    }
  },
})
