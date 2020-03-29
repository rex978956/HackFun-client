import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  lesson: {
    name: '',
    isAppending: true
  }
}

const getters = {
  lesson: state => state.lesson,
  lessonIndex: state => state.lesson.index,
  isAppending: state => state.lesson.isAppending
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
    let res = await axios.get('http://163.13.127.158:5555/api/lesson/' + name, {
      timeout: 5000
    })
    res.data.lesson['isAppending'] = false
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
