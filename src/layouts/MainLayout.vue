<template>
    <div class="wrapper flex justify-center">
        <div class="content-wrapper">
            <Header/>
            <Content
              @imgClick="changeImgIndex($event)"/>
        </div>
        <SideBar
          :notifications='notificationIndex'/>
    </div>
</template>

<script>
import Content from '../components/Content.vue';
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';

export default {
  name: 'MainLayout',
  components: {
    Content, SideBar, Header,
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
