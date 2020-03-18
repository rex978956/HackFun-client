import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  fields: {}
  // field: {
  //   misc: [],
  //   web: [
  //     {
  //       name: 'SSRF\uff08Server-Side Request Forgery\uff09',
  //       description:
  //         'SSRF\uff08Server-Side Request Forgery\uff09\u662f\u900f\u904e\u4f3a\u670d\u5668\u7aef\u7684\u8acb\u6c42\u6f0f\u6d1e\uff0c\u507d\u9020\u4e00\u500b\u8acb\u6c42\u9032\u4e00\u6b65\u4f86\u63a5\u89f8\u5230\u6c92\u6709\u5c0d\u5916\u958b\u653e\u7684\u5167\u7db2\u7cfb\u7d71\uff0c\u5728\u672c\u7ae0\u7bc0\u5c07\u6703\u4ecb\u7d39\u4ec0\u9ebc\u662f SSRF \u4ee5\u53ca\u5e7e\u7a2e\u5e38\u898b\u7684\u5229\u7528\u624b\u6cd5\uff0c\u4e26\u642d\u914d\u7c21\u55ae\u7684 Lab \u4f86\u8b93\u5b78\u54e1\u80fd\u5920\u521d\u6b65\u8a8d\u8b58 SSRF'
  //     }
  //   ]
  // }
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
    console.log('hi')
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
