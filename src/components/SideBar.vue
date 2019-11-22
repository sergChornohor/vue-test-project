<template>
    <div class="side-menu flex-column">
      <div class="side-menu-head flex space-between align-center padding-30px">
        <div class="side-menu-head-icon space-between flex-column">
          <div class="side-menu-head-icon-row flex  space-between align-center">
            <div class="side-menu-head-icon-row-yes"><span></span></div>
            <div class="side-menu-head-icon-row-minus flex flex-center"><span></span></div>
          </div>
          <div class="side-menu-head-icon-row flex   space-between align-center">
            <div class="side-menu-head-icon-row-yes"><span></span></div>
            <div class="side-menu-head-icon-row-minus flex flex-center"><span></span></div>
          </div>
        </div>
        <div class="side-menu-head-name">
          <p>PROJECTUS</p></div>
        <div class="side-menu-head-search"><span></span></div>
      </div>
      <div class="side-menu-user flex space-between  align-center padding-30px">
        <div class="side-menu-user-icon"></div>
        <div class="side-menu-user-name flex">
          <h5>{{loginPerson}}</h5>
          <h6>{{personStatus}}</h6>
        </div>
        <button class="side-menu-user-etc flex justify-center"><span class="etc"></span></button>
      </div>
      <div class="side-menu-tasks flex padding-30px">
        <div class="side-menu-tasks-completed justify-center flex-column" id="completed" @click="getTasksNumber">
          <h4 id="completed-number">{{compNumber}}</h4>
          <h6>Completed Tasks</h6>
        </div>
        <div class="side-menu-tasks-open  justify-center flex-column">
          <h4 id="open-number">{{openNumber}}</h4>
          <h6>Open Tasks</h6>
        </div>
      </div>
      <div class="side-menu-menu padding-30px">
        <menu>
          <li><h6>MENU</h6></li>
          <li><a>Home</a></li>
          <li><a>My tasks</a></li>
          <li><a>Notifications</a><span id="notifications">{{notifications}}</span></li>
        </menu>  
      </div>
    </div>
</template>

<script>

export default {
  name: 'SideBar',

  data() {
    return{
      loginPerson: 'Jean Gonzales',
      personStatus: 'Product Owner',
      compNumber : 372,
      openNumber : 11,
      notifications: 3
    }
  },
   methods: {
    getTasksNumber() {
      if (this.openNumber <= 0) {
          alert('There is no open tasks');
      } else {
          confirm('Are you sure you want to change the number of tasks?');
          this.compNumber++;
          this.openNumber--;
      }
    },
    tasksList() {

    }
  }
}  
</script>