<template>
  <div
    id="lesson"
    class="main-container"
  >
    <VideoFrame src="https://www.youtube.com/embed/t6mdGGlv6oA" />

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
    /* align-items: center; */
    justify-content: center;
  }
</style>