<template>
  <div id="app">
    <div class="wrapper flex justify-center">
      <div class="content-wrapper">
        <Header/>
        <Content />
      </div>
    <sideMenu />
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Header from './components/Header.vue'
import sideMenu from './components/sideMenu.vue'

export default {
  name: 'app',
  components: {
    Content, sideMenu, Header
  },
  methods: {
    showtasks () {
      this.$$children.isHidden = true;
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~materialize-css/dist/css/materialize.min.css';

@import "./assets/reset.css"; 
@import "./assets/style.css";
#app{
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 400;}
</style>
