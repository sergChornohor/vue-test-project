<template lang='pug'>
  .tasks
    form(@submit.prevent='addTask')
      label(for='title') new
      input.title(v-model='newTasksTitle' value='title' placeholder='title')
      input.description(v-model='newTasksDescription' value='description' placeholder='description')
      button()
    .tasks-list
      ul
        li(v-for='(tasks, index) in tasks',
        :key='tasks.title')
          div
            span.index {{index + 1}}
            span.title {{tasks.title}}
            span.description {{tasks.description}}
            span.exTime {{tasks.exTime}}
          button(@click='deleteTask(index)')
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tasks } from '../types';

@Component({
  name: 'TasksContainer',
})

export default class TasksContainer extends Vue {
  newTasksTitle: string = '';

  newTasksDescription: string = '';

  tasks: Array<Tasks> = [
    {
      title: 'toDo4',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo3',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo2',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
    {
      title: 'toDo1',
      description: 'what I must to do',
      exTime: '12:30 PM',
    },
  ];

  beforeCreated(): void {
    console.log(this.tasks);
    this.$nextTick(() => document.body.classList.add('animations'));
  }

  mounted(): void {
    this.$emit('tasks-change', this.tasks.length);
  }

  addTask(): void {
    if (this.newTasksTitle && this.newTasksDescription) {
      this.tasks.push({
        title: this.newTasksTitle,
        description: this.newTasksDescription,
        exTime: '12:30 PM',
      });
    }

    this.newTasksTitle = '';
    this.newTasksDescription = '';
    this.$parent.$emit('tasks-change', this.tasks.length);
  }

  deleteTask(index: number): void{
    this.tasks.splice(index, 1);
    this.$parent.$emit('tasks-change', this.tasks.length);
  }
}
</script>

<style lang='scss' scoped>
  .tasks{
    width: 100%;
    float: left;
    form{
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 3% 0 5%;
      margin-bottom: 10px;
      .title{
        width: 30%;
      }
      .description{
        width: 50%;
      }
      label{
        font-size: 120%;
        color: red;
      }
      button{
        width: 20px;
        height: 20px;
        border-radius: 3px;
        border-style: none;
        background-color: #fff;
        background-image: url('../assets/image/add_1.svg');
        background-repeat: no-repeat;
      }
    }
    .tasks-list{
      width: 100%;
      padding: 3%;
      ul{
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 40px;
          div{
            display: flex;
            justify-content: space-between;
            width: 90%;
            span{
              font-size: 18px;
            }
            .index{
              width: 5%;
            }
            .title{
              width: 20%;
            }
            .description{
              width: 60%;
            }
            .exTime{
              font-size: 14px;
              width: 15%;
            }
            .animations{
              transform: scale(1.5);
            }
          }
          button{
            width: 20px;
            height: 20px;
            border-radius: 3px;
            border-style: none;
            background-color: #fff;
            background-image: url('../assets/image/delete _1.svg');
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
      }
    }
  }
</style>
