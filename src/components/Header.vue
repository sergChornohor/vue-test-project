<template lang='pug'>
header
  .header-container.flex.space-between
    .header-container-menu.flex.space-between
      .header-container-menu-head.flex.space-between.align-center
        h3 Website Redesign
        button.header-container-menu-head-etc.flex.flex-center
          span.etc
      .header-container-menu-nav
        menu.flex.space-between
          li(
            v-for='link in links',
            :key='link.url')
            router-link(
              :to='link.url',
              :exact='link.exact',
              active-class='active') {{link.title}}
    .header-container-activity.flex.space-between
      .header-container-activity-icons.flex.space-between
        .icon
        .icon
        .icon
      .header-container-activity-button.flex.flex-center.share
        span Share
      .header-container-activity-button.flex.flex-center.chat.space-between
        .chat-icon
        span Chat
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      links: [
        { title: 'Tasks', url: '/', exact: true },
        { title: 'Kanban', url: '/kanban' },
        { title: 'Activity', url: '/activity' },
        { title: 'Calendar', url: '/calendar' },
        { title: 'Files', url: '/files' },
      ],
    };
  },
};

</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .header-container-menu-nav {
  width: 100%;
  height: 22px; }
  .header-container-menu-nav menu {
    width: 100%;
    flex-direction: row;
    list-style-type: none;
    transition: 0.5s; }
    .header-container-menu-nav menu li {
      position: relative; }
      .header-container-menu-nav menu li a {
        text-align: center;
        font-size: 16px;
        opacity: 0.7;
        color: #131313; }
        @media only screen and (max-width: 791px) {
          .header-container-menu-nav menu li a {
            font-size: 14px; } }
      .header-container-menu-nav menu li a:hover,
      .header-container-menu-nav menu li a:active,
      .header-container-menu-nav menu li .active {
        color: #000;
        opacity: 1;
        cursor: pointer; }
      .header-container-menu-nav menu li a:hover::before,
      .header-container-menu-nav menu li .active::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background-color: #FFC200;
        transform: translateY(31px); }
</style>
