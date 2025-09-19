<template>
  <div id="app">
    <Jewellery />
  </div>
</template>

<script>
  import Jewellery from "./views/Jewellery.vue";

  export default {
    name: "app",
    components: {
      Jewellery
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>