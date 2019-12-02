<template lang='pug'>
  .wrapper.flex.justify-center
    .content-wrapper
      TheHeader
      TheContent(@img-click='changeImgIndex($event)')
    SideBar(:notifications='notificationIndex')
</template>

<script>
import TheContent from '../components/Content.vue';
import TheHeader from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';

export default {
  name: 'MainLayout',
  components: {
    TheContent, SideBar, TheHeader,
  },
  data() {
    return {
      notificationIndex: 3,
    };
  },
  methods: {
    changeImgIndex(index) {
      this.notificationIndex = index;
    },
  },
};
</script>
