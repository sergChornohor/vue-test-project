<template>
     <header>
        <div class="header-container flex space-between">
          <div class="header-container-menu flex space-between">
            <div class="header-container-menu-head flex space-between align-center">
              <h3>Website Redesign</h3>
              <button class="header-container-menu-head-etc flex flex-center"><span class="etc"></span></button>         
            </div>
            <div class="header-container-menu-nav">
              <menu class="flex space-between">
                <li><a @click.prevent="$emit('clickTasks', $event)">Tasks</a></li>
                <li><a>Kanban</a></li>
                <li><a>Activity</a></li>
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
            <div class="header-container-activity-button flex flex-center share"><span>Share</span></div>
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
  name: 'Header'

}

</script>