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
      <div
        class="sing"
        v-if="authState.isLoggedIn"
      >
        <!-- <p class="username">{{authState.profile.name}}</p> -->
        <!-- authState.profile.pic -->
        <img
          :src="authState.profile.pic"
          @click="showDropdown = !showDropdown"
        >
        <!-- <div
          class="arrow-down"
          @click="showDropdown = !showDropdown"
        ></div> -->
        <div class="dropdown-box">
          <!-- <transition
            name="fade"
            mode="out-in"
          > -->
          <div
            v-if="showDropdown"
            class="dropdown"
          >
            <p class="dropdown-username">{{'Hi! '+ authState.profile.name}}</p>
            <ul @click="showDropdown = !showDropdown">
              <li class="dropdown-item">Profile</li>
              <li class="dropdown-item">Submissions</li>
              <li
                class="dropdown-item"
                @click="logoutHandler"
              >Log out</li>
            </ul>
          </div>
          <!-- </transition> -->
        </div>
      </div>
      <div
        class="sing"
        v-else
      >
        <a href="https://www.hackfun.space/auth/google">
          Sign in with Google</a>
        <!-- <a href="#">{{'profile:'+authState.profile.name}}</a> -->
      </div>

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
        <p>{{lessonInfo.coursename}}</p>
      </div>
      <!-- <div class="lesson-name">
        <p>{{lessonInfo.index+'. '+lessonInfo.name}}</p>
      </div> -->
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
    </div>
  </nav>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: "NavBar",
    data() {
      return {
        showDropdown: false
      }
    },
    computed: {
      menuList() {
        return this.$store.state.menuList;
      },
      ...mapGetters(['lessonInfo']),
      ...mapGetters(['authState']),
      // ...mapGetters(['profile']),
    },
    created() {
      this.getAuthState().then(
        this.getAuthState
      )
      // this.getProfile()
      // this.handleGetProfile()
    },
    mounted() {

      // this.getAuthState().then(
      //   this.getProfile
      // )
      // this.getProfile()
      // console.log('state authState', authState)
      // console.log('state profile', profile)
    },
    methods: {
      ...mapActions(['getAuthState']),
      // ...mapActions(['getProfile']),
      ...mapActions(['logoutHandler']),
      // handleGetProfile() {
      //   if (this.state.authState.isLoggedIn) {
      //     this.getProfile()
      //   }
      // }
      handleLogout() {
        this.logoutHandler().then(() => {
          this.$router.push({
            name: 'Home'
          })
        })
      },
      handleFocusOut() {
        this.showDropdown = false
        console.log('fk')
      }
    },
  };
</script>



<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
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
    transition: all ease-in-out 0.3s;
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
    margin-right: 10px;
  }

  .nav-right>.nav-menu>.menu-item {
    margin-left: 30px;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 0;
    padding: 5px;
  }

  .nav-right>.nav-menu>.menu-item:hover {
    border-bottom: 5px solid #58B2DC;
  }

  .nav-right>.sing {
    display: flex;
    align-items: center;
    padding-left: 90px;
  }

  .nav-right>.sing>a {
    padding: 6px 15px;
    text-align: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0;
  }

  .nav-right>.sing>a:hover {
    color: #2d2e51;
    border: 1px solid #2d2e51;
  }

  .nav-right>.sing>img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    margin-right: 0px;
  }

  .nav-right>.sing>.username {
    margin-right: 15px;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 0;
  }

  .nav-right>.sing>.arrow-down {
    border-style: solid;
    border-width: 13px 7px 0px 7px;
    /* display: flex;
    flex-direction: column; */
    /* border-radius: 1px; */
    border-color: #fff transparent transparent transparent;
    margin-right: 10px;
    cursor: pointer;
  }

  .nav-right>.sing>.dropdown-box>.dropdown {
    margin-top: 2.5rem;
    background-color: #434343;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 7px 0px #a3a3a3;
    border-radius: 5px;
    width: 12rem;
    right: 10%;
    transition: all ease-in-out 0.3s;
  }

  .nav-right>.sing>.dropdown-box>.dropdown:before {
    content: '';
    background-color: 0;
    border-right: 12px solid transparent;
    position: absolute;
    border-left: 12px solid transparent;
    border-bottom: 12px solid #434343;
    border-top: 12px solid transparent;
    top: -24px;
    right: 5px;
    box-shadow: 0px 0px 0px 0px #a3a3a3;
    transition: all ease-in-out 0.3s;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>.dropdown-username {
    padding: 15px 0px;
    /* width: 100%; */
    position: relative;
    text-align: center;
    font: Bold 20px/16px Noto Sans CJK TC;
    color: #fff;
    /* background-color: #D9D9D9; */
    cursor: default;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul {
    list-style-type: none;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul>.dropdown-item {
    padding: 18px 0px;
    width: 8rem;
    position: relative;
    cursor: pointer;
    text-align: center;
    font: Bold 20px/16px Noto Sans CJK TC;
    letter-spacing: 0px;
    color: #D9D9D9;
    background-color: #434343;
    border-bottom: 1px solid #FFF;
    /* width: 100%; */
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul>.dropdown-item:hover {
    color: #FFF;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul>.dropdown-item:last-of-type {
    border-bottom: 0;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul>.dropdown-item:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 25px;
    background-color: #FFF;
    left: -33px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .nav-right>.sing>.dropdown-box>.dropdown>ul>.dropdown-item:hover:before {
    display: block;
  }


  /*--------- navbar-lesson  ---------*/
  .navbar-lesson {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
    z-index: 1000;
    background-color: #1F2836;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-lesson .page-back img {
    height: 1.5rem;
    transition: all ease-in-out 0.3s;
  }

  .navbar-lesson .course-name {
    margin-left: 30px;
  }

  .navbar-lesson.lesson-name {
    margin-left: 15px;
  }

  .navbar-lesson .course-name>p {
    font: bold 24px/36px Noto Sans CJK TC;
  }

  .navbar-lesson .lesson-name>p {
    font: bold 20px/30px Noto Sans CJK TC;
  }
</style>