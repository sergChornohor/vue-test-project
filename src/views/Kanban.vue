<template lang='pug'>
  table.task-cards
    thead
      th(v-for='(status, index) in tableStatus'
      :key='index') {{status}}
    tbody
      td.task-status(v-for='(status, index) in tableStatus'
      :key='index')
        tr(
        v-for='(tasks, index) in tasksStore'
        :key='tasks.title'
        v-if='tasks.status === status')
          .task-card
            span {{tasks.title}} :
            span {{tasks.exTime}}
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TasksContainer from './Tasks.vue';
import { Tasks, Status } from '../types';

export default class KanbanTable extends Vue {
  sessionStore: any = sessionStorage.getItem('tasks');

  tasksStore: any = JSON.parse(this.sessionStore);

  tableStatus: object = Status;
}
</script>

<style lang="scss" scoped>
    .task-cards{
      width: 100%;
      font-size: 15px;
      font-weight: bold;
      margin-top: 15px;
      tbody{
        .task-status{
          width: 31%;
          padding: 2.5%;
          line-height: 15px;
          font-weight: normal;
          tr{
            width: 100%;
            .task-card{
              width: 100%;
              line-height: 25px;
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
</style>
