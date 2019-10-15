
export const state = () => ({
  isCollapse: false,
  userName: ''
})

export const actions = {
  async LOGIN_OUT({commit}) {
    commit('clearUserName')
  }
}
export const mutations = {
  setUserName(state, name) {
    state.userName = name
  },
  clearUserName(state) {
    state.userName = ''
  },
  toggle(state) {
    state.isCollapse = !state.isCollapse
  }
}
