<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style lang="css">
  @import '/node_modules/@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css';
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
