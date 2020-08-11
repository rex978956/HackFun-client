<template>
  <div class="videoWrapper">
    <iframe
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
  export default {
    name: "VideoFrame",
    props: {
      src: String,
    }
  };
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