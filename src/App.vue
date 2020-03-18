<template>
  <div id="app">
    <NavBar />
    <router-view class="transition-group" />
    <Footer />
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import Footer from "@/components/Footer";

  export default {
    name: "app",
    components: {
      NavBar,
      Footer
    },
    computed: {},
    mounted() {}
  };
</script>

<style src="./assets/css/style.css"></style>