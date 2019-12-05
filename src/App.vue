<template lang="pug">
  div#app
    MainLayout
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import MainLayout from './layouts/MainLayout.vue';

@Component({
  name: 'app',
  components: {
    MainLayout,
  },
})

export default class App extends Vue {}

// import MainLayout from './layouts/MainLayout.vue';

// export default {
//   name: 'app',
//   components: {
//     MainLayout,
//   },
// };
</script>

<style lang="scss" scoped>
// @import '~materialize-css/dist/css/materialize.min.css';

@import "./assets/reset.css";
@import "./assets/style.css";
#app{
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
  "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  width: 100%;}
</style>
