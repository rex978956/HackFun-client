<template>
  <div
    id="lesson"
    class="main-container"
  >
    <section v-if="isLoading">
      <Loading
        type="sk-chase"
        at="transition-container"
      />
    </section>
    <section
      v-else
      :class="{ 'loading-blur': isLoading }"
    >
      <div class="lesson-wrapper">
        <VideoFrame :src="lesson.ytsrc" />
        <div class="lesson-info-container">
          <div class="lesson-info">
            <h1>{{lesson.index+'. '+lesson.name}}</h1>
            <p
              v-for="(item, index) in lesson.description"
              :key="index"
            >{{item}}</p>
          </div>
          <div class="arrow-left">
            <a href="#">
              <img src=/images/Back.svg />
              <p>上一堂</p>
            </a>
          </div>
          <div class="arrow-right">
            <a href="#">
              <p>下一堂</p>
              <img src=/images/Next.svg />
            </a>
          </div>
        </div>
        <div
          class="lesson-quiz-container"
          v-if="lesson.quiz && lesson.quiz.length"
        >
          <div class="lesson-quiz-info">
            <p>精通這門課了嗎?</p>
            <p>挑戰看看吧!</p>
          </div>
          <div
            class="quiz-item"
            v-for="(item, index) in lesson.quiz"
            :key="index"
          >
            <hr v-show="index">
            <div class="quiz-text">
              <h1>{{index+1+'. '+item.title}}</h1>
              <p>{{item.content.text}}</p>
              <p>網站位置：<a
                  :href="item.content.path"
                  target="_blank"
                >{{item.content.path}}</a></p>
            </div>
            <div class="quiz-flag-container">
              <div class="quiz-flag">
                <input
                  class="flag"
                  type="text"
                  placeholder="Flag 格式 HackFun{xxxxxxx}"
                  name="flag"
                  maxlength="41"
                />
                <button
                  class="submit"
                  type="submit"
                >送出</button>
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

  import VideoFrame from "@/components/VideoFrame";
  import Loading from "@/components/Loading";

  export default {
    data() {
      return {
        isLoading: false
      }
    },
    components: {
      VideoFrame,
      Loading
    },
    computed: {
      ...mapGetters(['lesson']),
      ...mapGetters(['isAppending']),
    },
    created() {
      this.isLoading = true
      this.getLesson('meow')
    },
    mounted() {
      this.getLoadingState()
    },
    methods: {
      ...mapActions(['getLesson']),
      getLoadingState() {
        this.isLoading = this.lesson.isAppending
      }
    },
  }
</script>

<style>
  #lesson.main-container {
    padding: 3.5rem 0 15rem 0;
  }

  .lesson-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .lesson-wrapper>.lesson-info-container {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: row;
    width: 55%;
    background: #5F4EB7;
    border-radius: 35px;
    padding: 3% 3%;
    margin-bottom: 3rem;
  }

  .lesson-info-container>.lesson-info {
    text-align: left;
    width: 70%;
    /* padding-right: 3%; */
  }

  .lesson-info-container>.arrow-left {
    margin-right: 5%;
  }

  .lesson-info-container a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .lesson-info-container a>img {
    width: 30px;
  }

  .lesson-info-container>.arrow-right {
    width: auto;
  }

  .lesson-info-container>.lesson-info>h1 {
    margin-bottom: 1rem;
  }

  .lesson-info-container>.lesson-info>p {
    line-height: 2rem;
  }

  .lesson-quiz-container {
    scroll-padding-top: 30px;
    width: 55%;
    border: 7px solid #5F4EB7;
    border-radius: 35px;
    padding: 3% 3%;
  }

  .lesson-quiz-container>.lesson-quiz-info {
    text-align: left;
    font: 18px/27px Noto Sans CJK TC;
    margin-bottom: 2rem;
  }

  .quiz-item {
    margin-bottom: 3rem;
  }

  .quiz-item>hr {
    line-height: 1em;
    position: relative;
    text-align: center;
    height: 1.5em;
    margin-bottom: 3rem;
  }

  .quiz-item>hr:before {
    content: '';
    background: linear-gradient(to right, transparent, #FFFFFF, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }

  .quiz-item>hr:after {
    content: "MEOW";
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 1.5em;
    line-height: 1.5em;
    color: #fff;
    background-color: #2d2e51;
  }

  .quiz-item>.quiz-text {
    border: 2px dashed #FFFFFF;
    margin-bottom: 2rem;
  }

  .quiz-item>.quiz-text>h1 {
    font: Bold 24px/36px Noto Sans CJK TC;
    padding: 1rem;
  }

  .quiz-item>.quiz-text>p {
    font: 18px/27px Noto Sans CJK TC;
    padding: 1rem;
  }

  .quiz-item>.quiz-text>p>a {
    font: 18px/27px Noto Sans CJK TC;
    color: #B06AEC;
  }

  .quiz-flag-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quiz-flag {
    width: 60%;
    background: #1A1A1A;
    padding: 0.3rem;
    border-radius: 23px;
  }

  .quiz-flag-container>.quiz-flag>input.flag {
    text-align: center;
    font: 18px/27px Noto Sans CJK TC;
    background: #1A1A1A;
    width: 80%;
    cursor: pointer;
    outline: none;
    caret-color: auto;
  }

  .quiz-flag-container>.quiz-flag>input.flag:focus::placeholder {
    color: transparent;
  }


  .quiz-flag-container>.quiz-flag>button.submit {
    position: relative;
    float: right;
    background: #5F4EB7;
    border-radius: 18px;
    padding: 5px 20px;
    cursor: pointer;
    outline: none;
  }
</style>