<template>
  <div>
    <div
      class="loading-container-transition-container"
      v-if="at=='transition-container'"
    >
      <div
        class="sk-chase-loading-wrapper"
        v-if="type=='sk-chase'"
      >
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>

        <div class="sk-chase-2">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Loading",
    props: {
      at: String,
      type: String,
    }
  };
</script>


<style>
  .loading-container-transition-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2f336d;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }

  .sk-chase-loading-wrapper {
    position: absolute;
  }

  .sk-chase,
  .sk-chase-2 {
    width: 60px;
    height: 60px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-2 {
    top: -60px;
  }

  .sk-chase-2 .sk-chase-dot::before {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: rgb(171, 128, 240);
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }

  .sk-chase-dot:nth-child(2) {
    animation-delay: -1.0s;
  }

  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }

  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }

  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }

  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }

  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }

  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1.0s;
  }

  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }

  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }

  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }

  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }


  @keyframes sk-chase-dot {

    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }

    100%,
    0% {
      transform: scale(0.8);
    }
  }
</style>