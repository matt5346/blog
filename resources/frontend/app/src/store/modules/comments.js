import axios from 'axios'

export default {
  namespaced: true,
  state: {
    postComments: [],
    isLoaded: false
  },
  getters: {
    getComments (state) {
      return state.postComments
    }
  },
  mutations: {
    changeComments (state, comments) {
      state.postComments = comments
    },
    CREATE_COMMENT (state, item) {
      state.postComments.push(item)
    },
    loader_init (state, result) {
      state.isLoaded = result
    }
  },
  actions: {
    fetchComments ({ commit }, id) {
      const baseUrl = 'http://localhost:8000/api/comments'
      try {
        axios({
          method: 'get',
          url: `${baseUrl}/${id}`
        })
          .then(res => {
            console.log(res.data, 'COMMENTS RESPONSE')
            commit('changeComments', res.data)
          })
          .catch(err => console.log(err, 'fetchComments'))
      } catch (er) {
        console.log(er, 'fetchComments')
      }
    },
    postComment ({ commit }, item) {
      const baseUrl = 'http://localhost:8000/api/comments'
      try {
        axios({
          method: 'post',
          data: item,
          url: `${baseUrl}`
        })
          .then(res => {
            console.log(res.data, 'COMMENTS RESPONSE')
            commit('CREATE_COMMENT', item)
          })
          .catch(err => console.log(err, 'postComment'))
      } catch (er) {
        console.log(er, 'postComment')
      }
    }
  }
}
