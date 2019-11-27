<template>
     <header>
        <div class="header-container flex space-between">
          <div class="header-container-menu flex space-between">
            <div class="header-container-menu-head flex space-between align-center">
              <h3>Website Redesign</h3>
              <button class="header-container-menu-head-etc flex flex-center">
                <span class="etc"></span>
              </button>
            </div>
            <div class="header-container-menu-nav">
              <menu class="flex space-between">
                <li>
                    <router-link
                      to="/"
                      exact-active-class="active">Tasks</router-link>
                </li>
                <li><a>Kanban</a></li>
                <li>
                    <router-link
                      to="/activity"
                      exact-active-class="active">Activity</router-link>
                </li>
                <li><a>Calendar</a></li>
                <li><a>Files</a></li>
              </menu>
            </div>
          </div>
          <div class="header-container-activity flex space-between">
            <div class="header-container-activity-icons flex space-between">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
            </div>
            <div class="header-container-activity-button flex flex-center share">
              <span>Share</span>
            </div>
            <div class="header-container-activity-button flex flex-center chat space-between">
              <div class="chat-icon"></div>
              <span>Chat</span>
            </div>
          </div>
        </div>
      </header>
</template>

<script>
export default {
  name: 'Header',
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
