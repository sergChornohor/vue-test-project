<template lang="pug">
.side-menu.flex-column
  .side-menu-head.flex.space-between.align-center.padding-30px
    .side-menu-head-icon.space-between.flex-column
      .side-menu-head-icon-row.flex.space-between.align-center
        .side-menu-head-icon-row-yes
          span
        .side-menu-head-icon-row-minus.flex.flex-center
          span
      .side-menu-head-icon-row.flex.space-between.align-center
        .side-menu-head-icon-row-yes
          span
        .side-menu-head-icon-row-minus.flex.flex-center
          span
    .side-menu-head-name
      p PROJECTUS
    .side-menu-head-search
      span
  .side-menu-user.flex.space-between.align-center.padding-30px
    .side-menu-user-icon
    .side-menu-user-name.flex
      h5 {{loginPerson}}
      h6 {{personStatus}}
    button.side-menu-user-etc.flex.justify-center
      span.etc
  .side-menu-tasks.flex.padding-30px
    #completed.side-menu-tasks-completed.justify-center.flex-column(
      @click='getTasksNumber')
      h4#completed-number {{compNumber}}
      h6 Completed Tasks
    router-link(v-if='openNumber !== 0'
        tag='div'
        :to='tasksurl'
      ).side-menu-tasks-open.justify-center.flex-column
      h4#open-number {{openNumber}}
      h6 Open Tasks
    div(v-else
      ).side-menu-tasks-open.justify-center.flex-column
      h4#open-number {{openNumber}}
      h6 Open Tasks
  .side-menu-menu.padding-30px
    menu
      li
        h6 MENU
      li
        a Home
      li
        a My tasks
      li
        a Notifications
        span#notifications {{notificationIndex}}
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'TheSideBar',
})
export default class TheSideBar extends Vue {
  @Prop({ default: 3 }) notificationIndex!: number;

  @Prop({}) openNumber!: number;

  @Prop({}) compNumber!: number;

  loginPerson: string = 'Jean Gonzales';

  personStatus: string = 'Product Owner';

  tasksurl: string = '/';

  getTasksNumber(): void {
    if (this.openNumber <= 0) {
      alert('There is no open tasks');// eslint-disable-line no-alert
    } else { // eslint-disable-next-line
      window.confirm('Are you sure you want to change the number of tasks?');
      this.compNumber += 1;
      this.openNumber -= 1;
    }
  }
}
</script>
