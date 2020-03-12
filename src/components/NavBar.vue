<template>
  <nav
    id="nav"
    class="navbar"
  >
    <div class="nav-left">
      <div class="logo">
        Hackfun
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