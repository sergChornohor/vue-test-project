<template lang="pug">
.content-container.flex.justify-center
  .content-container-data.flex.space-between.align-center
    .date
      h6 {{timestamp}}
    router-view
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'TheContent',
})

export default class TheContent extends Vue {
  timestamp: string = '';

  created(): void {
    setInterval(this.getNow, 1000);
  }

  getNow(): void {
    const today: any = new Date();
    const date: string = `${today.getDate()}.${(today.getMonth() + 1)}.${today.getFullYear()}`;
    const time: string = `${today.getHours()}:${today.getMinutes()}`;
    const dateTime: string = `${date} ${time}`;
    this.timestamp = dateTime;
  }
}
</script>
