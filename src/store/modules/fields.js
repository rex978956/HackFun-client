import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  fields: {}
}

const getters = {
  fields: state => state.fields
}

const mutations = {
  [types.FIELDS](state, fields) {
    state.fields = fields
  }
}

const actions = {
  async getAllFields({ commit }) {
    if (state.fields.length > 0) {
      return state.fields
    }
    let res = await axios.get('https://www.hackfun.space/api/tab')
    commit(types.FIELDS, res.data.result)
    return res.data.result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
