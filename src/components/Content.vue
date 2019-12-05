<template lang="pug">
.content-container.flex.justify-center
  .content-container-data.flex.space-between.align-center
    .date
      h6 {{date}}
    router-view
</template>


<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Content',
})

export default class Content extends Vue {
  date: string = 'TODAY';
}
</script>
