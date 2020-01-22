<template lang='pug'>
  .tasks
    button.add(@click='showAddTaskForm')
    .tasks-list
      table
        thead
          th(v-for='(title, index) in tableHead' :key='index') {{title}}
        tbody
          tr.taskLine(:tasks = tasks
            v-for='(tasks, index) in tasks',
            :key='tasks.title')
            td.index {{index + 1}}
            td.status {{tasks.status}}
            td.title {{tasks.title}}
            td.description {{tasks.description}}
            td.exTime {{tasks.exTime}}
            td
              button.del(@click='deleteTask(index)')
    addTask(v-if='showAddForm'
      @close-window='showAddForm = false'
      @add-task='addTask'
      :newTasksTitle='newTasksTitle'
      :newTasksDescription='newTasksDescription')
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tasks, Status } from '../types';
import addTask from '../components/AddTaskModal.vue';

const tableHead: string[] = ['№', 'Status', 'Title', 'Description', 'Deadline'];

@Component({
  name: 'TasksContainer',
  components: {
    addTask,
  },
})

export default class TasksContainer extends Vue {
  tableHead: string[] = tableHead;

  newTasksTitle: string = '';

  newTasksDescription: string = '';

  Status: object = Status;

  tasks: Array<Tasks> = [];

  sessionStore: any = '';

  showAddForm: boolean = false;

  created(): void {
    this.tasks = [
      {
        title: 'toDo4',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: Status.ToDo,
      },
      {
        title: 'toDo3',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: Status.InProgress,
      },
      {
        title: 'toDo2',
        description: 'what I must to do',
        exTime: '12:30 PM',
        status: Status.Done,
      },
    ];
  }

  mounted(): void {
    if (sessionStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(sessionStorage.getItem('tasks') || '{}');
      } catch (e) {
        sessionStorage.removeItem('tasks');
      }
    }

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

  showAddTaskForm(): void {
    this.showAddForm = true;
  }

  addTask(): void {
    if (this.newTasksTitle && this.newTasksDescription) {
      this.tasks.push({
        title: this.newTasksTitle,
        description: this.newTasksDescription,
        exTime: '12:30 PM',
        status: Status.ToDo,
      });
    }

    this.newTasksTitle = '';
    this.newTasksDescription = '';
    this.saveTasks();
    this.$parent.$emit('tasks-change', this.tasks.length);

    this.$nextTick(() => {
      const tasksLength = this.$el.querySelector('tr:last-child');
      if (tasksLength != null) tasksLength.classList.add('blinking');
    });
  }

  deleteTask(index: number): void{
    this.tasks.splice(index, 1);
    this.saveTasks();
    this.$parent.$emit('tasks-change', this.tasks.length);
  }

  saveTasks(): void{
    const parsed = JSON.stringify(this.tasks);
    this.sessionStore = sessionStorage.setItem('tasks', parsed);
  }
}
</script>

<style lang='scss' scoped>
  .tasks{
    width: 100%;
    float: left;
    .add{
      width: 20px;
      height: 20px;
      border-radius: 3px;
      border-style: none;
      background-color: #fff;
      background-image: url('../assets/image/add_1.svg');
      background-repeat: no-repeat;
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
            width: 18%;
          }
          .description{
            width: 40%;
          }
          .exTime{
            font-size: 14px;
            width: 15%;
          }
          .status{
            width: 7%;
            font-size: 13px;
            line-height: 20px;
            display: flex;
            align-content: center;
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
