<template lang='pug'>
  .tasks
    form(@submit.prevent='addTask')
      label(for='title') new
      input.title(v-model='newTasksTitle' value='title' placeholder='title')
      input.description(v-model='newTasksDescription' value='description' placeholder='description')
      button()
    .tasks-list
      table
        thead
          th(v-for='(title, index) in tableHead' :key='index') {{title}}
        tbody
          tr.taskLine(v-for='(tasks, index) in tasks',
            :key='tasks.title')
            td.index {{index + 1}}
            td.title {{tasks.title}}
            td.description {{tasks.description}}
            td.exTime {{tasks.exTime}}
            td.status
              select(
                v-model='tasks.status'
                v-if="tasks.status === 'todo'")
                option todo
                option inprogress
                option done
              //- select(v-else-if="tasks.status === 'inprogress'")
              //-   option inprogress
              //-   option todo
              //-   option done
              select(v-else)
                option done
                option todo
                option inprogress
            td
              button.del(@click='deleteTask(index)')
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tasks } from '../types';

const tableHead: string[] = ['№', 'Title', 'Description', 'Deadline', 'Status'];

@Component({
  name: 'TasksContainer',
})

export default class TasksContainer extends Vue {
  tableHead: string[] = tableHead;

  newTasksTitle: string = '';

  newTasksDescription: string = '';

  tasks: Array<Tasks> = [];

  created(): void {
    this.tasks = [
      {
        title: 'toDo4',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: 'todo',
      },
      {
        title: 'toDo3',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: 'inprogress',
      },
      {
        title: 'toDo2',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: 'done',
      },
    ];
  }

  mounted(): void {
    this.$emit('tasks-change', this.tasks.length);

    const zoomEl = this.$el.querySelectorAll('.taskLine');
    zoomEl.forEach((el, index) => {
      setTimeout(() => {
        zoomEl[index].classList.add('animations');
      }, 1500 * index);
    });
  }

  beforeUpdate(): void {
    const zoomEl = this.$el.querySelectorAll('.taskLine');
    zoomEl.forEach((el, index) => {
      zoomEl[index].classList.remove('animations');
    });
  }

  addTask(): void {
    if (this.newTasksTitle && this.newTasksDescription) {
      this.tasks.push({
        title: this.newTasksTitle,
        description: this.newTasksDescription,
        exTime: '12:30 PM',
        status: 'todo',
      });
    }

    this.newTasksTitle = '';
    this.newTasksDescription = '';
    this.$parent.$emit('tasks-change', this.tasks.length);

    this.$nextTick(() => {
      const tasksLength = this.$el.querySelector('tr:last-child');
      if (tasksLength != null) tasksLength.classList.add('blinking');
    });
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
      table{
        width: 100%;
        line-height: 30px;
        transition: 0.5s;
        thead th{
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        tbody tr{
          font-size: 14px;
          transition: 1s;
          .index{
            width: 5%;
          }
          .title{
            width: 20%;
          }
          .description{
            width: 40%;
          }
          .exTime{
            font-size: 14px;
            width: 15%;
          }
          .status{
            width: 5%;
            font-size: 15px;
            display: flex;
            align-content: center;
            select{
              width: 40px;
              border-radius: 5px;
            }
          }
          .del{
            width: 20px;
            height: 20px;
            border-radius: 3px;
            border-style: none;
            background-color: #fff;
            background-image: url('../assets/image/delete _1.svg');
            background-repeat: no-repeat;
            background-size: 100%;
            float: right;
            vertical-align: middle;
          }
        }
        @keyframes zoomElement {
          50% {transform: scale(1.2)}
          100% {transform: scale(1)}
        }
        .animations{
          animation-name: zoomElement;
          animation-duration: 1.5s;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: alternate;
        }
        tr:hover{
          background-color: #F7F6F3;
          border-radius: 15px;
        }
        @keyframes blinkElement {
          // 0% {opacity: 0; color: black}
          50% {opacity: .5; color: green}
          100% {opacity: 1; color: black}
        }
        .blinking{
          animation-name: blinkElement;
          animation-duration: 1.2s;
          animation-delay: .5s;
          animation-iteration-count: 3;
          animation-direction: alternate;
        }
      }
    }
  }
</style>
