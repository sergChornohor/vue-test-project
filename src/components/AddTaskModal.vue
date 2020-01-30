<template lang='pug'>
  .modal-background(
    @keyup.esc="$emit('close-window')"
    @click.self="$emit('close-window')")
    .modal-content
      form(@submit.prevent="addNewTask")
        label(for='title') new
        input.title(v-model='newTasksTitle'
          value='title' placeholder='title')
        input.description(v-model='newTasksDescription'
          value='description' placeholder='description')
        button()
      button.close(@click="$emit('close-window')") close
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Tasks, Status } from '../types';

@Component({
  name: 'AddTask',
})

export default class AddTask extends Vue {
  newTasksTitle: string = '';

  newTasksDescription: string = '';

  addNewTask(): void {
    if (this.newTasksTitle && this.newTasksDescription) {
      this.$emit('add-task', this.newTasksTitle, this.newTasksDescription);

      this.newTasksTitle = '';
      this.newTasksDescription = '';
    }
  }
}
</script>

<style lang='scss' scoped>
  .modal-background{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgba(240, 250, 230, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-content{
      width: 40%;
      display: flex;
      flex-direction: column;
      border: 2px solid black;
      border-radius: 5px;
      background-color: #fff;
      padding-bottom: 15px;
      opacity: 1;
      z-index: 999;
      form{
        width: 100%;
        height: 100px;
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
      button.close{
        align-self: center;
        width: 100px;
        height: 25px;
        border-radius: 3px;
        border-style: none;
        color: #fff;
        background-color: rgb(189, 28, 28);
      }
    }

  }
</style>
