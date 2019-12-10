<template lang='pug'>
  .wrapper.flex.justify-center
    .content-wrapper
      TheHeader
      TheContent(@img-click='changeImgIndex($event)')
    SideBar(:notifications='notificationIndex')
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TheContent from '../components/Content.vue';
import TheHeader from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';

@Component({
  name: 'MainLayout',
  components: {
    TheContent,
    SideBar,
    TheHeader,
  },
})
export default class MainLayout extends Vue {
  @Prop({ default: 3 })
  notificationIndex!: number;

  changeImgIndex(index: number) {
    this.notificationIndex = index;
  }
}
</script>
