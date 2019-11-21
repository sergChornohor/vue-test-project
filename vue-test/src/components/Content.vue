<template>
  <div class="content-container flex justify-center">
    <div class="content-container-data flex space-between align-center">
      <div class="date">
        <h6>{{date}}</h6>
      </div>
      <component :is="activeBlock"
       @clickTasks="this.activeBlock='tasksContainer'"
      >
      </component> 
    </div>
  </div>
</template>


<script>
import tasksContainer from './tasks.vue'
import Activity from './Activity.vue'

export default {
  name: 'Content',
  components: {
    tasksContainer, Activity
  },
  data() {
    return{
      date: "TODAY",
      activeBlock: 'Activity',
    }
  },
  
  METHODS:{
    getNotifications(index) {
      this.notifications = index;
    }
  }
} 
</script>