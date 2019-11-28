<template>
    <div class="wrapper flex justify-center">
        <div class="content-wrapper">
            <TheHeader/>
            <TheContent
              @imgClick="changeImgIndex($event)"/>
        </div>
        <SideBar
          :notifications='notificationIndex'/>
    </div>
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
      this.$root.notificationIndex = index;
    },
  },
};
</script>
