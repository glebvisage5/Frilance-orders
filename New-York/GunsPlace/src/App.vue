<template>
  <div id="app">
    <GunsPlace />
  </div>
</template>

<script>
  import GunsPlace from "./views/GunsPlace.vue";

  export default {
    name: "app",
    components: {
      GunsPlace
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>