<template lang='pug'>
  .modal-background
    .modal-content
      form(@submit.prevent="$emit('add-task')")
        label(for='title') new
        input.title(v-model='newTasksTitle' value='title' placeholder='title')
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
    background-color: #ff2;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-content{
      display: flex;
      border: 2px solid black;
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
      button.close{

      }
    }

  }
</style>
