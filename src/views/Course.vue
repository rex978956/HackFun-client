  <template>
    <div
      id="course"
      class="main-container"
    >
      <header class="course-header">
        <h1>{{course.name}}</h1>
        <div class="course-description-container">
          <div class="course-description">
            <p>
              {{course.description}}
            </p>
          </div>
          <img
            class="block"
            src="../assets/images/Block.svg"
          >
        </div>
      </header>
      <section class="course-section">
        <div class="course-base-container">
          <h1>建議先備知識</h1>
          <hr>
          <p>Linux 基礎操作</p>
          <ol>
            <li>鳥哥的 Linux 基礎教學</li>
            <li>鳥哥的 Linux 基礎教學</li>
          </ol>
          <hr>
        </div>
        <div class="lesson-container">
          <div class="lesson-item">
            <p>0. HTTP 基礎教學</p>
            <a href="/0. HTTP 基礎教學">
            </a>
          </div>
          <div
            class="lesson-item"
            v-for="(item, index) in course.lessons"
            :key="index"
          >
            <p>{{index+'. '+item.name}}</p>
            <a :href="`${$route.params.courseid}/${item.uuid}`">
            </a>
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
    export default {
      computed: {
        ...mapGetters(['course']),
      },
      mounted() {
        this.getCourse(this.$route.params.courseid)
      },
      methods: {
        ...mapActions(['getCourse']),
      },
    }
  </script>



  <style>
    #course.main-container {
      padding: 3rem 0 25rem 0;
    }

    .course-header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .course-header>h1 {
      padding: 60px;
      font-size: 60px;
    }

    .course-header>.course-description-container {
      position: relative;
      box-shadow: 14px -14px #8384A4;
    }

    .course-header>.course-description-container>.course-description>p {
      background-color: #000;
      width: 65vw;
      padding: 35px 70px;
      text-align: left;
      font: 16px/36px Noto Sans CJK TC;
    }

    .course-header>.course-description-container>.block {
      width: 60px;
      position: absolute;
      right: -14px;
      bottom: -14px;
    }


    .course-section {
      display: flex;
      flex-direction: column;
      padding-top: 3rem;
      align-items: center;
    }

    .course-base-container {
      width: 65vw;
      text-align: left;
    }

    .course-base-container>h1 {
      font: Bold 32px/47px Noto Sans CJK TC;
    }

    .course-base-container>hr {
      border: 2px solid #FFFFFF;
      margin-top: 35px;
    }

    .course-base-container>p {
      margin-top: 25px;
      font: 24px/36px Noto Sans CJK TC;
    }

    .course-base-container>ol {

      margin-left: 3rem;
      list-style: none;
      counter-reset: line;
    }

    .course-base-container>ol>li {
      position: relative;
      margin-top: 10px;
      font: 20px/30px Noto Sans CJK TC;
    }

    .course-base-container>ol>li:before {
      position: absolute;
      left: -2em;
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 5px;
      background-color: #8384a4;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      line-height: 1em;
      counter-increment: line;
      content: counter(line);
    }

    .lesson-container {
      width: 65vw;
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lesson-item {
      margin: 20px 0;
      width: 100%;
      height: 3rem;
      border: 5px solid #A2A0E6;
      border-radius: 19px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .lesson-item>p {
      padding-left: 3.5rem;
      font: Bold 20px/30px Noto Sans CJK TC;
      color: #A2A0E6;
    }

    .lesson-item>a {
      padding-right: 3.5rem;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-left: 25px solid #A2A0E6;
      border-bottom: 12px solid transparent;
    }

    .lesson-item>a:hover {
      padding-right: 3.5rem;
      border-left: 25px solid #fff;
    }
  </style>