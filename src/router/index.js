import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      index: 0,
      label: '首頁',
      menuItem: true
    }
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      index: 1,
      label: '瀏覽課程',
      menuItem: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
