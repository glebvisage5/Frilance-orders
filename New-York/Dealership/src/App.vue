<template>
  <div id="app">
    <Dealership />
  </div>
</template>

<script>
  import Dealership from "./views/Dealership.vue";

  export default {
    name: "app",
    components: {
      Dealership
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>