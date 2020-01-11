<template lang='pug'>
  .task-cards-template
    .task-cards
      .task-card(
        v-for='(tasks, index) in tasks'
        :key='tasks.title'
        v-if='tasks.status'
      ) {{tasks.title}}

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tasks } from '../types';

export default class Kanban extends Vue {
tasks: Array<Tasks> = [];
}
</script>

<style lang="scss" scoped>
  .task-card-template{
    display: flex;
    width: 100%;
    .task-cards{
      padding: 5%;
      .task-card{
        width: 30%;
      }
    }
  }
</style>
