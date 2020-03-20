import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// import Axios from 'axios'

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('loading', VueLoading)

sync(store, router)

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app')
