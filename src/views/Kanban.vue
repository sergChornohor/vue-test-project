<template lang='pug'>
  table.task-cards
    thead
      th(v-for='(status, index) in tableStatus'
      :key='index') {{status}}
    tbody
      //- td.task-status.drag-in(v-for='(status, index) in tableStatus'
      //- :key='index'
      //- v-if='dragging > -1'
      //- :class='{drag: isDragging}')
      td.task-status(
      v-for='(status, index) in tableStatus'
      :key='index')
        tr(
        v-for='(tasks, index) in tasksStore'
        :key='tasks.title'
        v-if='tasks.status === status'
        @dragenter='dragEnter'
        @dragleave='dragLeave'
        @dragend='dragEnd'
        @drop='dragFinish')
          .task-card(
            draggable='true'
            @dragstart='dragStart(i, $event)'
            @dragover.prevent
          )
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

  taskStatus: string = this.tasksStore.status;

  dragging: number = -1;

  dragStart(which: any, ev: any): void {
    const e: any = ev;
    e.dataTransfer.dropEffect = 'move';
    this.dragging = which;
  }

  removeItem(taskStatus: string): void {
    this.tasksStore.splice(this.tasksStore.indexOf(taskStatus), 1);
  }

  removeItemAt(index: number): void {
    this.tasksStore.splice(index, 1);
  }

  dragEnd(ev: any) :void {
    this.dragging = -1;
  }

  dragFinish(to: number, ev: any): void {
    const e: any = ev;
    this.moveItem(this.dragging, to);
    e.target.style.marginTop = '2px';
    e.target.style.marginBottom = '2px';
  }

  moveItem(from: number, to: number): void {
    if (to === -1) {
      this.removeItemAt(from);
    } else {
      this.tasksStore.splice(to, 0, this.tasksStore.splice(from, 1)[0]);
    }
  }

  // watch todos change for localStorage persistence
  // watch(): void {
  //   todos: {
  //     handler: function(todos) {
  //       todoStorage.save(todos);
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
    .task-cards{
      width: 100%;
      font-size: 15px;
      font-weight: bold;
      margin-top: 15px;
      thead{
          line-height: 20px;
          th{
            background-color: #f8f8f8;
            border-radius: 10px;
            border: 2px solid red;
            margin-bottom: 10px;
          }
        }
      tbody{
        .task-status{
          width: 31%;
          padding: 2.5%;
          line-height: 15px;
          font-weight: normal;
          tr{
            width: 100%;
            .task-card{
              width: 150px;
              line-height: 25px;
              height: 40px;
              display: flex;
              justify-content: space-between;
              background-color: #f8f8f8;
              border: 2px solid;
              border-radius: 5px;
              margin-bottom: 10px;
              cursor: pointer;
            }
          }
        }
        .drag-in{
          border: 2px dashed #ccc !important;
          text-align: center;
          color: #e33;
        }
      }
    }
</style>
