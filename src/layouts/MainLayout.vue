<template lang='pug'>
  .wrapper.flex.justify-center
    .content-wrapper
      TheHeader
      TheContent(@img-click='changeImgIndex($event)')
    TheSideBar(:notificationIndex='notifications')
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TheContent from '../components/TheContent.vue';
import TheHeader from '../components/TheHeader.vue';
import TheSideBar from '../components/TheSideBar.vue';

@Component({
  name: 'MainLayout',
  components: {
    TheContent,
    TheSideBar,
    TheHeader,
  },
})
export default class MainLayout extends Vue {
  notifications: Number = 3;

  changeImgIndex(index: Number) {
    this.notifications = index;
  }
}
</script>
