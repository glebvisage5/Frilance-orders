<template>
  <div id="app">
    <Store />
  </div>
</template>

<script>
  import Store from "./views/Store.vue";

  export default {
    name: "app",
    components: {
      Store
    }
  }
</script>

<style>
@import url("./css/setting.css");
</style>