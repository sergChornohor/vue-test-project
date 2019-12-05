<template lang='pug'>
  .tasks-list
    ul
      li(v-for='tasks in tasks',
      :key='tasks.title')
        span {{tasks.title}}
        span {{tasks.description}}
        span {{tasks.exTime}}
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import Tasks from '../types';

@Component({
  name: 'TasksContainer',
})

export default class TasksContainer extends Vue {
  tasks: Array<Tasks> = [
    {
      title: 'toDo1',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo2',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo3',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo4',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
  ];
}
</script>

<style scoped>
    .tasks-list{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: 20px;
    }
    li{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    span{
        font-size: 18px;
        padding: 15px;
    }
</style>
