import axios from 'axios'

export default {
  namespaced: true,
  state: {
    portfolio: [],
    portfolioItem: [],
    isLoaded: false
  },
  getters: {
    getPortfolio (state) {
      return state.portfolio
    },
    getPortfolioItem (state) {
      return state.portfolioItem
    }
  },
  mutations: {
    changePortfolio (state, portfolio) {
      state.portfolio = portfolio
    },
    changePortfolioItem (state, item) {
      state.portfolioItem = item
    },
    loader_init (state, result) {
      state.isLoaded = result
    }
  },
  actions: {
    fetchPortfolio ({ commit }, id = 10) {
      commit('loader_init', false)
      try {
        axios({
          method: 'get',
          url: `https://jsonplaceholder.typicode.com/photos/?_limit=${id}`,
          onDownloadProgress: function (progressEvent) {
            if (progressEvent.returnValue) {
              commit('loader_init', true)
            }
          }
        })
          .then(res => {
            commit('changePortfolio', res.data)
          })
          .catch(err => console.log(err))
      } catch (er) {
        console.log(er, 'fetchPosts')
      }
    },
    fetchPortfolioItem ({ commit }, id) {
      try {
        axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
          .then(result => {
            console.log(result, 'changePortfolioItem')
            commit('changePortfolioItem', result.data)
          })
      } catch (er) {
        console.log(er)
      }
    }
  }
}
