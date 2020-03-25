import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  lesson: {
    name: ''
  }
}

const getters = {
  lesson: state => state.lesson,
  lessonIndex: state => state.lesson.index
}

const mutations = {
  [types.LESSON](state, lesson) {
    state.lesson = lesson
  }
}

const actions = {
  async getLesson({ commit }, name) {
    if (state.lesson.name === name) {
      return state.lesson
    }
    let res = await axios.get('http://163.13.127.158:5555/api/lesson/' + name)
    commit(types.LESSON, res.data.lesson)
    return res.data.lesson
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
