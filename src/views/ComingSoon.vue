<template lang='pug'>
  div
    h1 Coming soon..
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'ComingSoon',
})

export default class ComingSoon extends Vue {
}
</script>

<style lang='scss' scoped>
    div{
        height: 200px;
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-content: center;
      h1{
          font-size: 30px;
          margin: auto;
          vertical-align: center;
      }
    }
</style>
