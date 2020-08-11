<template>
  <div class="videoWrapper">
    <youtube
      :video-id="vid"
      ref="youtube"
      :playerVars="playerVars"
      @playing="playing"
      @paused="paused"
      @ended="ended"
    ></youtube>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "VideoFrame",
    props: {
      lessonid: Number,
      vid: String,
      sec: Number
    },
    data() {
      return {
        // videoId: this.id,
        playerVars: {
          autoplay: 0,
          rel: 0,
          start: this.sec,
          modestbranding: 1,
          showinfo: 0
        },
        time: 0,
        progress: 0,
        processId: null,
      }
    },
    computed: {
      player() {
        return this.$refs.youtube.player
      }
    },
    methods: {
      playVideo() {
        this.player.playVideo()
      },
      async playing() {
        let totalTime = await this.player.getDuration()
        this.processId = setInterval(() => {
          this.player.getCurrentTime().then((time) => {
            let progress = (time / totalTime) * 100

            this.progress = progress < 100 ? progress : 100
            this.time = Math.floor(time + 1)
            let url = 'https://www.hackfun.space/api'
            axios.post(url + '/vid_log', {
              id: this.lessonid,
              time: this.time,
              progress: this.progress
            })
          })
        }, 10000);
        console.log(this.lessonid, this.time, this.progress)
      },
      paused() {
        clearInterval(this.processId);
      }
    }
  }
</script>


<style>
  .videoWrapper {
    width: 64vw;
    height: 36vw;
    margin: 3rem 0;
    border: 12px solid #000000;
  }

  .videoWrapper iframe {
    width: 100%;
    height: 100%;
  }
</style>