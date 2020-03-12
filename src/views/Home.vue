<template>
  <div
    id="home"
    class="main-container"
  >
    <header class="header">
      <div class="inner-container">
        <h1 class="title font-white">Hackfun</h1>
        <div class="subtitle">
          <p class="font-white">想接觸資安卻不知如何入門嗎？</p>
          <p class="font-white">我們準備了一些教學，請找適合自己的服用 :)</p>
        </div>
        <h3 class="info font-white">
          <span>* 建議熟悉基本 HTML/JS 知識，若對這塊尚不了解可參考這裡</span>
          <a href="#">這裡</a></h3>
      </div>
      <div class="start">
        <button
          type="button"
          class="btn_style"
        >開始你的資安之旅！</button>
      </div>
      <div class="next">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjQxNCA1OS40MTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5LjQxNCA1OS40MTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cG9seWdvbiBwb2ludHM9IjU4LDE0LjE0NiAyOS43MDcsNDIuNDM5IDEuNDE0LDE0LjE0NiAwLDE1LjU2MSAyOS43MDcsNDUuMjY4IDU5LjQxNCwxNS41NjEgIiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=">
      </div>
    </header>
    <div class="content-container">
      <div class="course-area">
        <div class="course-area-title"></div>

      </div>
    </div>
  </div>
</template>

<style scope>
  .header {
    width: 100%;
    background-color: #141430;
    padding: 5rem 0 8rem 0;
  }

  .title {
    font: Bold 50px/72px Noto Sans CJK TC;
  }

  .subtitle {
    font: Bold 27px/49px Noto Sans CJK TC;
  }
  .subtitle > p {
    margin: 0;
  }
  .info {
    padding-top: 20px;
    font: Bold 20px/37px Noto Sans CJK TC;
  }

  .info > a {
    color: #b06aec;
  }

  .font-white {
    color: white;
  }
  .start {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }

  .btn_style {
    padding: 7px 12px;
    font: Bold 20px/37px Noto Sans CJK TC;
    color: #fff;
    background-color: #883ccb;
    border: 1px solid #883ccb;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0;
    cursor: pointer;
  }

  @keyframes downArrow {
    0% {
      transform: translateY(0em);
      opacity: 0;
    }

    50% {
      transform: translateY(4em);
      opacity: 0.8;
    }

    100% {
      transform: translateY(0em);
      opacity: 0;
    }
  }

  .next {
    width: 100%;
    position: absolute;
    filter: drop-shadow(0 0 8px #282828);
  }
  .next img {
    animation: downArrow 2s infinite;
    width: 108pt;
    height: 60pt;
  }
</style>