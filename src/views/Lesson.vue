<template>
  <div
    id="lesson"
    class="main-container"
  >
    <VideoFrame src="https://www.youtube.com/embed/t6mdGGlv6oA" />
    <div class="lesson-info-container">
      <div class="lesson-info">
        <h1>5. Stored XSS</h1>
        <p>本堂課程會介紹 Stored XSS 的成因，並教大家成功觸發 XSS</p>
        <p>實作課程：在設計的情境下觸發一個 Stored XSS 並成功彈出視窗</p>
      </div>
      <div class="arrow-left">
        <p>上一堂</p>
      </div>
      <div class="arrow-right">
        <p>下一堂</p>
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   mapActions,
  //   mapGetters
  // } from 'vuex'
  import VideoFrame from "@/components/VideoFrame";
  export default {
    components: {
      VideoFrame
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    },
  }
</script>

<style>
  #lesson.main-container {
    padding: 3rem 0 15rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #lesson.main-container>.lesson-info-container {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: row;
    width: 60%;
    background: #5F4EB7 0% 0% no-repeat padding-box;
    border-radius: 35px;
    padding: 3% 3%;
  }

  .lesson-info-container>.lesson-info {
    text-align: left;
    width: 50%;
    padding-right: 25%;
  }

  .lesson-info-container>.arrow-left {
    width: 3rem;
    padding-right: 6%;
  }

  .lesson-info-container>.arrow-right {
    width: 3rem;
  }
</style>