<template>
  <div id="app">
    <House />
  </div>
</template>

<script>
  import House from "./views/House.vue";

  export default {
    name: "app",
    components: {
      House
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>