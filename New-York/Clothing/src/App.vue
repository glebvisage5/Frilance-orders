<template>
  <div id="app">
    <Clothing />
  </div>
</template>

<script>
  import Clothing from "./views/Clothing.vue";

  export default {
    name: "app",
    components: {
      Clothing
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>