<template lang="pug">
.content-container.flex.justify-center
  .content-container-data.flex.space-between.align-center
    .date
      h6 {{date}}
    router-view
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
