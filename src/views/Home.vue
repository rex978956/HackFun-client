<template>
  <div
    id="home"
    class="main-container"
  >
    <header class="header">
      <div class="logo-title">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="subtitle">
        <h2>想接觸資安卻不知如何入門嗎？</h2>
        <h2>我們準備了一些教學，請找適合自己的服用 :)</h2>
      </div>
      <div class="info">
        <span>* 建議熟悉基本 HTML/JS 知識，若對這塊尚不了解可參考</span>
        <a href="#">這裡</a>
      </div>
      <div class="start">
        <a
          class="btn_style"
          href="#course"
        >開始你的資安之旅！</a>
      </div>
      <div class="next">
        <img src="../assets/images/arrow.svg">
      </div>
    </header>
    <div
      id="course"
      class="content-container"
    >
      <div class="course-field">
        <h1 class="course-field-name">REVERSE</h1>
        <p class="course-field-info">Web 領域的大致介紹，為什麼分這個領域 底下有哪些東西，常見於哪些應用</p>
        <div class="course-item-container">
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-field">
        <h1 class="course-field-name">REVERSE</h1>
        <p class="course-field-info">Web 領域的大致介紹，為什麼分這個領域 底下有哪些東西，常見於哪些應用</p>
        <div class="course-item-container">
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
          <div class="course-item">
            <div class="course-name">
              <h1>XSS</h1>
            </div>
            <div class="course-info-container">
              <div class="course-info">
                <p>跨網站腳本攻擊（Cross-site scripting，通常簡稱為 XSS 或跨站腳本）是一種網站應用程式的安全漏洞攻擊，是惡意注入攻擊的一種。</p>
                <p>它允許惡意用戶將惡意語法注入到網頁上，使其他用戶在觀看網頁時受到影響。此網站風險是 OWAPS Top 10 常見名單之一。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .main-container {
    padding: 3rem 0 15rem 0;
  }

  .header {
    width: 100%;
    height: 100vh;
    background-color: #141430;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-title {
    width: 350px;
  }

  .subtitle {
    font: Bold 26px/37px Noto Sans CJK TC;
    padding: 40px 0 40px 0;
    line-height: 1.5;
  }

  .info {
    padding-top: 10px;
    font: Bold 22px/32px Noto Sans CJK TC;
  }

  .info>a {
    color: #b06aec;
    text-decoration: none;
  }

  .info>a:hover {
    color: #f39251;
  }

  .start {
    padding-top: 3rem;
  }


  .btn_style {
    font: Bold 20px/37px Noto Sans CJK TC;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #883ccb;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
  }

  .btn_style:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    text-decoration: underline;
  }

  .next {
    width: 100%;
    filter: drop-shadow(0 0 8px #282828);
  }

  .next img {
    margin-top: 30px;
    animation: downArrow 2s infinite;
    width: 80pt;
    /* height: 60pt; */
  }

  @keyframes downArrow {
    0% {
      transform: translateY(0em);
      opacity: 0;
    }

    50% {
      transform: translateY(5em);
      opacity: 0.8;
    }

    100% {
      transform: translateY(0em);
      opacity: 0;
    }
  }


  .content-container {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .course-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .course-field-name {
    font: Bold 60px/87px Noto Sans CJK TC;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 8px;
    width: 430px;
  }

  .course-field-info {
    padding: 2rem 0 2rem 0;
    font: 20px/36px Noto Sans CJK TC;
    width: 400px;
  }

  .course-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 2rem 0;
    width: 84vw;
  }

  .course-item {
    width: 25vw;
  }

  .course-item>.course-name>h1 {
    font: Black 36px/52px Noto Sans CJK TC;
    padding-bottom: 2rem;
  }

  .course-info-container {
    height: auto;
    background-color: #000;
    box-shadow: 15px -15px #8384A4;
  }

  .course-info-container>.course-info>p {
    padding: 25px 20px 25px 20px;
    text-align: left;
    font: 16px/36px Noto Sans CJK TC;
  }
</style>