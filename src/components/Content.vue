<template>
  <div class="content-container flex justify-center">
    <div class="content-container-data flex space-between align-center">
      <div class="date">
        <h6>{{date}}</h6>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TheContent',
  data() {
    return {
      date: 'TODAY',
    };
  },
};
</script>
