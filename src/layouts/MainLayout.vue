<template>
    <div class="wrapper flex justify-center">
        <div class="content-wrapper">
            <TheHeader/>
            <TheContent @imgClick="changeImgIndex($event)"/>
        </div>
        <SideBar :notifications='notificationIndex'/>
    </div>
  <!-- .wrapper.flex.justify-center
    .content-wrapper
      theheader
        thecontent(@imgclick='changeImgIndex($event)')
    sidebar(:notifications='notificationIndex') -->

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
    changeImgIndex() {
      this.$root.$on('changeImgIndex', (index) => {
        // console.log(this.$root);
        this.notificationIndex = index;
      });
    },
  },
};
</script>
