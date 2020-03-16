<template>
  <footer id="footer">
    <div class="footer-container">
      <div class="about">
        <span class="title">關於我們</span>
        <span>Allen0099 is hacker meow</span>
      </div>
      <div class="icon-container">
        <a
          v-for="media in communityMedia"
          :key="`media-${ media.icon[1] }`"
          :href="media.link"
          target="_blank"
          rel="noopener"
        >
          <font-awesome-icon
            :icon="media.icon"
            transform="shrink-3.5 down-1.6 right-1.25"
            size="2x"
            class="media-icon"
          />
        </a>
      </div>
      <div class="contact">
        <span class="title">聯絡我們</span>
        <span>contact@hackfun.space</span>
      </div>
      <div class="source">
        <span class="title">專案程式碼</span>
        <a>
          <font-awesome-icon
            :icon="githubIcon.icon"
            transform="shrink-3.5 down-1.6 right-1.25"
            size="2x"
            class="media-icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "Footer",
    data() {
      return {
        communityMedia: [{
            icon: ['fab', 'youtube'],
            link: '#youtube'
          },
          {
            icon: ['fab', 'facebook-f'],
            link: '#facebook'
          },
          {
            icon: ['fab', 'twitter'],
            link: '#twitter'
          },
          {
            icon: ['fab', 'telegram-plane'],
            link: '#telegram'
          },
        ],
        githubIcon: {
          icon: ['fab', 'github'],
          link: '#github'
        }
      }
    },
  };
</script>

<style>
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #000;
    /* z-index: 1000; */
    /* flex-direction: row; */
    /* justify-content: space-between; */
  }

  .footer-container {
    display: grid;
    vertical-align: baseline;
    grid-auto-flow: column;
    grid-template-areas:
      "about contact"
      "icon-container source";
    grid-gap: 30px;
    padding: 2rem 10%;
    transition: all .3s ease-in-out;
    z-index: 1000;
  }

  .footer-container>.about,
  .footer-container>.contact {
    display: flex;
    flex-direction: column;
  }

  span {
    font: 18px/24px Noto Sans CJK TC;
    padding: 5px;
  }

  span.title {
    text-align: left;
    font: Bold 21px/34px Noto Sans CJK TC;
  }

  .media-icon {
    padding-right: 10px;
  }

  .media-icon path:hover {
    color: #6b7bb9;
    fill: currentColor;
  }


  /* svg-inline--fa fa-youtube fa-w-18 fa-3x */
</style>