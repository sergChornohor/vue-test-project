<template>
  <div id="app">
    <div class="wrapper flex justify-center">
      <div class="content-wrapper">
        <Header/>
        <Content />
      </div>
    <SideBar />
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    Content, SideBar, Header
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