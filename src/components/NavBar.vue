<template>
  <nav
    id="nav"
    class="navbar"
  >
    <div class="nav-left">
      <div class="logo-icon__normal">
        <img src="../assets/images/LOGO.svg">
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-menu">
        <router-link
          v-for="item in menuList"
          :key="item.name"
          :to="item.path"
          class="menu-item font-bold"
        >
          <span>{{item.meta.label}}</span>
        </router-link>
      </div>
      <a
        class="sing"
        href="#"
      >Sing up</a>
    </div>
  </nav>
</template>

<script>
  // import { MenuItem } from "../store/types/menu";
  export default {
    name: "NavBar",
    computed: {
      menuList() {
        return this.$store.state.menuList;
      }
    }
  };
</script>


<style>
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    z-index: 1000;
    background-color: #6b7bb9;
    transition: all ease-in-out 0.3s;
  }

  #nav .nav-left {
    height: 100%;
    display: flex;
    float: left;
    align-items: center;
    margin-left: 10%;
  }

  #nav .nav-left>.logo-icon__normal {
    width: 100px;
    fill: #ffffff;
  }

  #nav .nav-right {
    height: 100%;
    display: flex;
    float: right;
    align-items: center;
    margin-right: 10%;
  }

  #nav .nav-right>.nav-menu {
    padding-right: 100px;
  }

  #nav .nav-right>.nav-menu>.menu-item {
    padding-left: 30px;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 0;
  }

  #nav .nav-right>.nav-menu>.menu-item:hover {
    color: #2d2e51;
  }

  #nav .nav-right>.sing {
    padding: 6px 15px;
    text-align: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0;
  }

  #nav .nav-right>.sing:hover {
    color: #2d2e51;
    border: 1px solid #2d2e51;
  }

  .transition-group {
    text-align: center;
    margin: 0;
    padding: 0;
    border: 0;
  }
</style>