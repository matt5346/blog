import axios from 'axios'

export default {
  name: 'Posts',
  namespaced: true,
  state: () => ({
    posts: [],
    post: [],
    isLoaded: false
  }),
  getters: {
    getPosts (state) {
      return state.posts
    },
    getPost (state) {
      return state.post
    }
  },
  mutations: {
    fetch_posts (state, posts) {
      state.posts = posts
    },
    fetch_single_post (state, post) {
      state.post = post
    },
    loader_init (state, result) {
      state.isLoaded = result
    }
  },
  actions: {
    fetchPosts ({ state, commit, rootState }, id = 10) {
      commit('loader_init', false)
      try {
        axios({
          method: 'get',
          url: `https://jsonplaceholder.typicode.com/posts/?_limit=${id}`,
          onDownloadProgress: function (progressEvent) {
            if (progressEvent.returnValue) {
              commit('loader_init', true)
            }
          }
        })
            .then(res => {
              commit('fetch_posts', res.data)
            })
            .catch(err => console.log(err))
      } catch (er) {
        console.log(er, 'fetchPosts')
      }
    },
    fetchSinglePost ({ commit }, id) {
      try {
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
          .then(result => {
            commit('fetch_single_post', result.data)
          })
      } catch (er) {
        console.log(er)
      }
    }
  }
}
