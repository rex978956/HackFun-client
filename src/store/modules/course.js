import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  course: {
    name: '',
    description: '',
    lessons: []
  }
}

const getters = {
  course: state => state.course
}

const mutations = {
  [types.COURSE](state, course) {
    state.course = course
  }
}

const actions = {
  async getCourse({ commit }, name) {
    if (state.course.name === name) {
      return state.course
    }
    let res = await axios.get('https://www.hackfun.space/api/course/' + name)
    commit(types.COURSE, res.data.course)
    return res.data.course
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
