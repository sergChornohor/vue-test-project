<template lang='pug'>
  .wrapper.flex.justify-center
    .content-wrapper
      TheHeader
      TheContent(
        @img-click='changeImgIndex($event)'
        @tasks-change='changeOpenTasksNumber($event)')
    TheSideBar(
      :notificationIndex='notifications'
      :openNumber='openTasks'
      :compNumber='closeTask')
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
  notifications: number = 3;

  openTasks: number = 4;

  closeTask: number = 372;

  changeImgIndex(index: number) {
    this.notifications = index;
  }

  changeOpenTasksNumber(index: number) {
    if (this.openTasks > index) {
      this.openTasks = index;
      this.closeTask = this.closeTask - 1;
    } else {
      this.openTasks = index;
      this.closeTask = this.closeTask + 1;
    }
  }
}
</script>
