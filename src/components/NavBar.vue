<template>
  <nav
    id="nav"
    class="navbar"
    v-if="$route.name!='Lesson'"
  >
    <div class="nav-left">
      <div class="logo-icon__normal">
        <router-link :to="{ path: '/'}">
          <img src="@/assets/images/logo.svg">
        </router-link>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-menu">
        <router-link
          v-for="item in menuList"
          :key="item.name"
          :to="item.path"
          class="menu-item font-bold"
        >
          <span>{{item.meta.label}}</span>
        </router-link>
      </div>
      <a
        class="sing"
        href="#"
      >Sing up</a>
    </div>
  </nav>
  <nav
    id="nav"
    class="navbar-lesson"
    v-else
  >
    <div class="nav-left">
      <div class="page-back">
        <router-link to=".">
          <img src="@/assets/images/Page_back.svg">
        </router-link>
      </div>
      <div class="course-name">
        <p>{{$route.params.courseid}}</p>
      </div>
      <div class="lesson-name">
        <p>{{lessonIndex+'. '+$route.params.lessonid}}</p>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-menu">
        <router-link
          v-for="item in menuList"
          :key="item.name"
          :to="item.path"
          class="menu-item font-bold"
        >
          <span>{{item.meta.label}}</span>
        </router-link>
      </div>
      <a
        class="sing"
        href="#"
      >Sing up</a>
    </div>
  </nav>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: "NavBar",
    computed: {
      menuList() {
        return this.$store.state.menuList;
      },
      ...mapGetters(['lessonIndex']),
    },
    mounted() {

    },
    methods: {},
  };
</script>


<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    z-index: 1000;
    background-color: #6b7bb9;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10%;
  }

  .nav-left>.logo-icon__normal {
    width: 100px;
    fill: #ffffff;
  }

  .nav-right {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10%;
  }

  .nav-right>.nav-menu {
    margin-right: 100px;
  }

  .nav-right>.nav-menu>.menu-item {
    margin-left: 30px;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 0;
  }

  .nav-right>.nav-menu>.menu-item:hover {
    color: #2d2e51;
  }

  .nav-right>.sing {
    padding: 6px 15px;
    text-align: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0;
  }

  .nav-right>.sing:hover {
    color: #2d2e51;
    border: 1px solid #2d2e51;
  }

  /*--------- navbar-lesson  ---------*/
  .navbar-lesson {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    z-index: 1000;
    background-color: #1F2836;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .page-back img {
    height: 1.5rem;
  }

  .course-name {
    margin-left: 30px;
  }

  .lesson-name {
    margin-left: 15px;
  }

  .course-name>p {
    font: bold 24px/36px Noto Sans CJK TC;
  }

  .lesson-name>p {
    font: bold 20px/30px Noto Sans CJK TC;
  }
</style>