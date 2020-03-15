<template>
  <div id="app">
    <NavBar />
    <router-view class="transition-group" />
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  export default {
    name: "app",
    components: {
      NavBar
    },
    computed: {},
    mounted() {}
  };
</script>

<style src="./assets/css/style.css"></style>