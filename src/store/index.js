import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation-types'

import fields from './modules/fields'
import course from './modules/course'

import { routes } from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    menuList: routes.filter(route => {
      return route.meta.menuItem
    })
  },
  getters: {},
  mutations,
  actions: {},
  modules: {
    fields,
    course
  }
})
