<template lang='pug'>
  div
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'NotFound',
})

export default class ComingSoon extends Vue {
}
</script>

<style lang='scss' scoped>
    div{
        height: 300px;
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        background-image: url(../assets/image/404.jpg);
        background-size: 100% 100%;
    }
</style>
