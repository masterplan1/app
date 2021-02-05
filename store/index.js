const API_URL = 'https://favqs.com/api/quotes/?filter=love&type=tag'
const API_KEY = process.env.API_KEY
export const state = () => ({
  quotes: [{id: 1, author: 'John Snow'}]
})

export const mutations = {
  SET_QUOTES(state, payload){
    state.quotes = payload
  }
}

export const actions = {
  async nuxtServerInit({commit}){
    // const response = await this.$axios.setHeader('Authorization', `Token token=${API_KEY}`).$get(API_URL)
    const response = await this.$axios.$get(API_URL, {
      headers: {
        'Authorization': `Token token=${API_KEY}`
      }
    })
    const quotes = response.quotes;
    commit('SET_QUOTES', quotes);
  }
}

// export const state = function(){
//   return {
//     quotes: [{id: 1, author: 'John Snow'}]
//   };
// }

export const getters = {
  getQuotes(state){
    return state.quotes
  }
}