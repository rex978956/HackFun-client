<template>
  <div
    id="lesson"
    class="main-container"
  >
    <div class="lesson-wrapper">
      <VideoFrame :src="lesson.vid_url" />

      <div class="lesson-info-container">
        <div class="lesson-info">
          <h1>{{lesson.name}}</h1>
          <p>{{lesson.description}}</p>
        </div>
        <div class="arrow-left">
          <a
            :href="`./${lesson.prev}`"
            v-if="lesson.prev"
          >
            <img src=/images/Back.svg />
            <p>上一堂</p>
          </a>
        </div>
        <div class="arrow-right">
          <a
            :href="`./${lesson.next}`"
            v-if="lesson.next"
          >
            <p>下一堂</p>
            <img src=/images/Next.svg />
          </a>
        </div>
      </div>
      <div
        class="lesson-quiz-container"
        v-if="lesson.practices && lesson.practices.length"
      >
        <div class="lesson-quiz-info">
          <p>精通這門課了嗎?</p>
          <p>挑戰看看吧!</p>
        </div>
        <div
          class="quiz-item"
          v-for="(item, index) in lesson.practices"
          :key="index"
        >
          <hr v-show="index">
          <div
            class="docker"
            v-if="item.type=='docker'"
          >
            <div class="docker-quiz-text">

              <img
                id="accepted"
                src=/images/accepted.svg
                v-if="isCorrect.indexOf(item.id) !== -1 "
              />
              <h1>{{item.name}}</h1>
              <p>{{item.docker.description}}</p>
              <p v-if="lesson.course === 'Pwn (程式漏洞分析與利用)'">服務位置:<a
                  :href="`http://${item.docker.url}:${item.docker.port}`"
                  target="_blank"
                >{{item.docker.url+':'+item.docker.port}}</a></p>
              <p v-if="lesson.course === 'Pwn (程式漏洞分析與利用)'">檔案: <a
                  :href="`#`"
                  target="_blank"
                >{{item.name}}</a></p>
              <p v-else>網站位置：<a
                  :href="`http://${item.docker.url}:${item.docker.port}`"
                  target="_blank"
                >{{item.docker.url+':'+item.docker.port}}</a></p>
            </div>
            <div class="quiz-flag-container">
              <div
                class="quiz-flag"
                v-if="isCorrect.indexOf(item.id) === -1 "
              >
                <input
                  class="flag"
                  type="text"
                  placeholder="Flag 格式 HackFun{xxxxxxx}"
                  name="flag"
                  maxlength="41"
                  v-model="flag"
                />
                <button
                  class="submit"
                  type="submit"
                  @click="handleSubmit(item.id , 1)"
                >送出</button>
              </div>
            </div>
          </div>
          <div
            class="choose"
            v-if="item.type=='choose'"
          >
            <div class="choose-quiz-text">
              <img
                id="accepted"
                src=/images/accepted.svg
                v-if="isCorrect.indexOf(item.id) !== -1 "
              />
              <h1>{{item.name}}</h1>
              <p>{{item.choose.statement}}</p>
              <div
                class="checkbox"
                v-for="(opt, index) in item.choose.options"
                :key="index"
              >
                <!-- <input
                  type="checkbox"
                  :id="opt.id"
                  v-model="choose"
                >
                <label
                  class="cbx"
                  :for="opt.id"
                >
                  <span>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                    >
                      <path d="M2 8.5L6 12.5L14 1.5"></path>
                    </svg>
                  </span>
                  <span>{{opt.value}}</span>
                </label> -->

                <input
                  class="inp-cbx"
                  :id="opt.id"
                  type="checkbox"
                  v-model="choose"
                  :value="opt.value"
                />
                <label
                  class="cbx"
                  :for="opt.id"
                >
                  <span>
                    <svg
                      width="12px"
                      height="10px"
                    >
                      <use xlink:href="#check"></use>
                    </svg>
                  </span>
                  <span>{{opt.value}}</span>
                </label>

                <svg class="inline-svg">
                  <symbol
                    id="check"
                    viewbox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </symbol>
                </svg>


              </div>
              <button
                v-if="isCorrect.indexOf(item.id) === -1 "
                class="submit"
                type="submit"
                @click="handleSubmit(item.id , 2)"
              >送出</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  import VideoFrame from "@/components/VideoFrame";
  import axios from 'axios'

  export default {
    data() {
      return {
        flag: '',
        choose: [],
        isCorrect: []
      }
    },
    components: {
      VideoFrame,
    },
    computed: {
      ...mapGetters(['lesson']),
      // ...mapGetters(['lessonInfo']),
    },
    created() {
      // this.isLoading = true
      this.getLesson(this.$route.params.lessonid)
    },
    mounted() {
      // this.getLoadingState()
    },
    methods: {
      ...mapActions(['getLesson']),
      handleSubmit(practice_id, type) {
        console.log('submit', practice_id, type)
        var url = 'https://www.hackfun.space/api'
        switch (type) {
          case 1:
            axios.post(url + '/flag', this.flag)
              .then(res => {
                console.log('res:', res)
              })
            break;

          case 2:
            axios.post(url + '/choose/' + practice_id, this.choose)
              .then(res => {
                console.log('res:', res)
              })
            break;

          default:
            break;
        }
        this.isCorrect.push(
          practice_id
        )
      },
    },
  }
</script>

<style>
  #lesson.main-container {
    padding: 4rem 0 15rem 0;
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
    content: "";
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 1.5em;
    line-height: 1.5em;
    color: #fff;
    background-color: #2d2e51;
  }

  .docker-quiz-text,
  .choose-quiz-text {
    position: relative;
  }

  .docker-quiz-text,
  .choose-quiz-text {
    border: 2px dashed #FFFFFF;
    margin-bottom: 2rem;
    display: relative;
  }

  .docker-quiz-text>h1,
  .choose-quiz-text>h1 {
    font: Bold 24px/36px Noto Sans CJK TC;
    padding: 1rem;
  }

  .docker-quiz-text>p {
    font: 18px/27px Noto Sans CJK TC;
    padding: 1rem;
  }

  .docker-quiz-text>p>a {
    font: 18px/27px Noto Sans CJK TC;
    color: #B06AEC;
  }

  #accepted {
    position: absolute;
    z-index: 1;
    width: 150px;
    top: -2rem;
    right: -2rem;
    transform: rotate(15deg);
    /* top: -1rem; */
    /* float: right; */
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

  .choose-quiz-text>p {
    text-align: left;
    font: 18px/27px Noto Sans CJK TC;
    padding: 1rem;
    margin-left: 3rem;
  }

  .checkbox {
    display: block;
    position: relative;
    text-align: left;
    margin-left: 4rem;
    padding: 1rem;
    font: 18px/27px Noto Sans CJK TC;
    user-select: none;
  }

  .cbx {
    width: 100%;
    user-select: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .cbx>span:last-child:hover {
    color: #B06AEC;
  }

  .cbx span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }

  .cbx span:first-child {
    position: relative;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    transform: scale(1);
    border: 2px solid #cccfdb;
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
  }

  .cbx span:first-child svg {
    position: absolute;
    top: 2px;
    left: 1.5px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  .cbx span:last-child {
    padding-left: 10px;
    line-height: 8px;
  }

  .cbx:hover span:first-child {
    border-color: #B06AEC;
  }

  .inp-cbx {
    position: absolute;
    visibility: hidden;
  }

  .inp-cbx:checked+.cbx span:first-child {
    background: #B06AEC;
    border-color: #B06AEC;
    animation: wave 0.4s ease;
  }

  .inp-cbx:checked+.cbx span:first-child svg {
    stroke-dashoffset: 0;
  }

  .inline-svg {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }

  .choose-quiz-text>button.submit {
    position: relative;
    /* float: right; */
    background: #5F4EB7;
    border-radius: 18px;
    padding: 10px 40px;
    cursor: pointer;
    outline: none;
    font: 20px/15px Noto Sans CJK TC;
    margin: 1rem 0;
  }
</style>