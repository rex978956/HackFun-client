import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  lesson: {
    id: -1,
    // isAppending: true,
  },
}

const getters = {
  lesson: (state) => state.lesson,
  lessonInfo: (state) => {
    return {
      index: state.lesson.index,
      name: state.lesson.name,
      coursename: state.lesson.course,
    }
  },
  // isAppending: (state) => state.lesson.isAppending,
}

const mutations = {
  [types.LESSON](state, lesson) {
    state.lesson = lesson
  },
}

const actions = {
  async getLesson({ commit }, lessonid) {
    if (state.lesson.id === lessonid) {
      return state.lesson
    }
    let res = await axios.get(
      'https://www.hackfun.space/api/lesson/' + lessonid,
      {
        timeout: 1000,
      }
    )
    // res.data.lesson['isAppending'] = false
    commit(types.LESSON, res.data.lesson)
    return res.data.lesson
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
