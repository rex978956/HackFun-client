<template>
  <div
    id="home"
    class="main-container"
  >
    <section v-if="isLoading">
      <Loading
        type="sk-chase"
        at="transition-container"
      />
    </section>
    <section :class="{ 'loading-blur': isLoading }">
      <header class="home-header">
        <div class="logo-title">
          <img src="@/assets/images/logo.svg">
        </div>
        <div class="subtitle">
          <h2>想接觸資安卻不知如何入門嗎？</h2>
          <h2>我們準備了一些教學，請找適合自己的服用 :)</h2>
        </div>
        <!-- <div class="info">
          <span>* 建議熟悉基本 HTML/JS 知識，若對這塊尚不了解可參考</span>
          <a href="#">這裡</a>
        </div> -->
        <div class="start">
          <a
            class="btn_style scroll"
            v-scroll-to="'#course'"
            @click="scrollToElement"
          >開始你的資安之旅！</a>
        </div>
        <div class="next">
          <img src="@/assets/images/arrow.svg">
        </div>
      </header>
      <div
        class="intro-container"
        id="course"
      >
        <h1 class="intro-title">資訊安全的領域</h1>
        <!-- <p class="intro-info">Demo</p> -->
      </div>
      <div
        class="content-container"
        v-for="(field, index) in fields"
        :key="index"
      >
        <div
          class="course-field"
          v-if="field.length > 0"
        >
          <!-- <h1 class="course-field-name">{{index}}</h1>
          <p class="course-field-info">{{'沒有東西QQ'}}</p> -->
          <div
            class="course-item-container"
            v-for="item in field"
            :key="item"
          >
            <div class="course-item">
              <div class="course-name">
                <h1>{{item.name}}</h1>
              </div>
              <div class="course-info-container">
                <div class="course-info">
                  <p>{{item.description}}</p>
                </div>
                <img
                  class="block"
                  src="@/assets/images/Block.svg"
                >
                <div class="btn_learn">
                  <router-link :to="`/course/${item.id}`">
                    <!-- <a :href="route.name"> -->
                    <!-- <h1>{{route.path}}</h1> -->
                    <svg class="icon-arrow before">
                      <use xlink:href="#arrow"></use>
                    </svg>
                    <span class="label">Let's learn!</span>
                    <svg class="icon-arrow after">
                      <use xlink:href="#arrow"></use>
                    </svg>
                  </router-link>
                  <svg style="display: none;">
                    <defs>
                      <symbol
                        id="arrow"
                        viewBox="0 0 35 15"
                      >
                        <title>Arrow</title>
                        <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z " />
                      </symbol>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  import Loading from "@/components/Loading";
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    components: {
      Loading
    },
    created() {
      this.isLoading = true
      this.getAllFields()
    },
    computed: {
      ...mapGetters(['fields']),
    },
    mounted() {

      this.isLoading = false
    },
    updated() {},
    methods: {
      ...mapActions(['getAllFields']),
      scrollToElement() {
        const el = this.$el.getElementsByClassName('scroll')[0];

        if (el) {
          el.scrollIntoView();
        }
      },
    },
  }
</script>

<style>
  #home.main-container {
    padding: 3rem 0 15rem 0;
  }

  .home-header {
    width: 100%;
    height: 100vh;
    background-color: #141430;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #home .logo-title {
    width: 350px;
  }

  #home .subtitle {
    font: Bold 26px/37px Noto Sans CJK TC;
    padding: 40px 0 40px 0;
    line-height: 1.5;
  }

  #home .info>span {
    padding-top: 10px;
    font: Bold 22px/32px Noto Sans CJK TC;
  }

  #home .info>a {
    font: Bold 22px/32px Noto Sans CJK TC;
    color: #b06aec;
    text-decoration: none;
  }

  #home .info>a:hover {
    color: #f39251;
    text-decoration: underline;
  }

  #home .start {
    padding-top: 3rem;
  }


  #home .btn_style {
    font: Bold 20px/37px Noto Sans CJK TC;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #883ccb;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
  }

  #home .btn_style:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    text-decoration: underline;
  }

  #home .next {
    width: 100%;
    filter: drop-shadow(0 0 8px #282828);
  }

  #home .next img {
    margin-top: 30px;
    animation: downArrow 2s infinite;
    width: 80pt;
    /* height: 60pt; */
  }

  @keyframes downArrow {
    0% {
      transform: translateY(0em);
      opacity: 0;
    }

    50% {
      transform: translateY(5em);
      opacity: 0.8;
    }

    100% {
      transform: translateY(0em);
      opacity: 0;
    }
  }

  #home .intro-container,
  #home .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #home .content-container:last-of-type {
    padding-bottom: 4rem;
  }


  #home .intro-container {
    padding-top: 3rem;
  }

  #home .course-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #home .intro-title {
    font: Bold 60px/87px Noto Sans CJK TC;
    border-bottom: 2px solid #ffffff;
    width: 430px;
  }

  #home .intro-info,
  #home .course-field-info {
    padding: 2rem 0 2rem 0;
    font: 20px/36px Noto Sans CJK TC;
    width: 400px;
  }

  #home .course-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 65vw;
  }

  #home .course-item {
    padding: 3rem 0 1rem 0;
    width: 100%;
  }

  #home .course-item>.course-name {
    padding-left: 13px;
  }

  #home .course-item>.course-name>h1 {
    text-align: left;
    font: bold 48px/60px Noto Sans CJK TC;
    padding-bottom: 2rem;
  }

  #home .course-info-container {
    position: relative;
    /* height: auto; */
    background-color: #000;
    box-shadow: 13px -15px #8384A4;
  }

  #home .course-info-container>.course-info>p {
    padding: 35px 55px 25px 55px;
    text-align: left;
    font: 18px/36px Noto Sans CJK TC;
  }

  #home .block {
    width: 60px;
    position: absolute;
    right: -14px;
    bottom: 0px;
  }

  #home .btn_learn>a {
    border: 4px solid #3F3F3F;
    color: #3F3F3F;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    /* margin: auto; */
    padding: 8px 30px 8px 80px;
    position: relative;
    text-decoration: none;
    margin-bottom: 15px;
  }

  #home .btn_learn>a .label,
  #home .btn_learn>a .icon-arrow {
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1000;
  }

  #home .btn_learn>a .label {
    display: inline-block;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  #home .btn_learn>a .icon-arrow {
    fill: #3F3F3F;
    height: 15px;
    top: 17px;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1), opacity .4s cubic-bezier(0.86, 0, 0.07, 1);
    width: 35px;
  }

  #home .btn_learn>a .icon-arrow.before {
    left: 32px;
    margin-right: 15px;
    position: absolute;
    transform-origin: left center;
  }

  #home .btn_learn>a .icon-arrow.after {
    margin-left: 15px;
    opacity: 0;
    position: absolute;
    right: 32px;
    transform: translateX(75%) scaleX(0.1);
    transform-origin: right center;
  }

  #home .btn_learn>a:hover {
    border-color: #8384a4;
    color: #8384a4;
  }

  #home .btn_learn>a:hover .label {
    transform: translateX(-52px);
  }

  #home .btn_learn>a:hover .icon-arrow.before {
    opacity: 0;
    transform: translateX(-75%) scaleX(0.1);
  }

  #home .btn_learn>a:hover .icon-arrow.after {
    fill: #8384a4;
    opacity: 1;
    transform: translateX(0) scaleX(1);
  }
</style>