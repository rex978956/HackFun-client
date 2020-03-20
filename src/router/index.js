import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Course from '../views/Course.vue'
import Lesson from '../views/Lesson.vue'
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
  },
  {
    path: '/course/:courseid',
    name: 'Course',
    component: Course,
    props: true,
    meta: {
      menuItem: false
    }
  },
  {
    path: '/course/:courseid/:lessonid',
    name: 'Lesson',
    component: Lesson
  },
  {
    path: '*',
    redirect: '/',
    meta: {
      menuItem: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/HackFun-client/',
  routes
})

export default router
