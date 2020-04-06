import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  authState: {
    isLoggedIn: false,
    profile: {}
  }
}

const getters = {
  authState: state => state.authState
  // profile: state => state.profile
}

const mutations = {
  // [types.PROFILE](state, profile) {
  //   state.profile = profile
  // },
  [types.AUTHSTATE](state, authState) {
    state.authState = authState
  }
}

const actions = {
  async getAuthState({ commit }) {
    if (state.authState.isLoggedIn) {
      return state.authState
    } else {
      let res = await axios.get('https://www.hackfun.space/auth/user', {
        timeout: 1000
      })

      let tmp = {
        isLoggedIn: false,
        profile: {}
      }

      if (res.status == 200) {
        tmp = {
          isLoggedIn: true,
          profile: res.data.result
        }
      }
      commit(types.AUTHSTATE, tmp)
      console.log('getAuthState')
      return state.authState
    }
  },
  // async getProfile({ commit }) {
  //   // console.log('state',)
  //   if (state.authState.isLoggedIn) {
  //     let res = await axios.get(
  //       'https://www.hackfun.space/auth/user',
  //       {
  //         timeout: 1000
  //       },
  //       res => {
  //         if (res.status == 401) {
  //           commit(types.AUTHSTATE, {
  //             isLoggedIn: false
  //           })
  //         } else if (res.status == 200) {
  //           commit(types.PROFILE, res.data.result)
  //           console.log('getProfile')
  //         }
  //       }
  //     )
  //     return state.profile
  //   }
  // },

  async logoutHandler({ commit }) {
    await axios.get('https://www.hackfun.space/auth/logout', {
      timeout: 1000
    })
    commit(types.AUTHSTATE, {
      isLoggedIn: false,
      profile: {}
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
