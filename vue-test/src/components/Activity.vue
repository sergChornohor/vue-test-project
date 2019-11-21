<template>
     <div class="content-container-data-posts" id="posts">
        <div class="post flex space-between mark"> 
          <div class="text">{{post[0].text}}</div>
          <span class="time">{{post[0].time}}</span>
        </div>
        <div class="post flex space-between comment">
          <div class="text">{{post[1].text}}</div>
          <span class="time">{{post[1].time}}</span>
        </div>
        <div class="post flex space-between inform">
          <div class="text">{{post[2].text}}</div>
        </div>
        <div class="post felx  space-between upload">
          <div class="upload-text flex space-between"> 
            <div class="text">{{post[3].text}}</div>
            <span class="time">{{post[3].time}}</span>
          </div>
          <div class="uploaded-photos flex">
            <div class="uploaded-photo" ></div>
            <div class="uploaded-photo" ></div>
            <div class="uploaded-photo" ></div>
            <div class="uploaded-photo" ></div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Activity',
  data() {
    return{
      date: "TODAY",
      post: [
        {text:"Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users", time:"12:30 PM"},
        {text:"Emilee Simchenko commented on Account for teams and personal in bottom style", time:"12:30 PM"},
        {text:"During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes", time:""},
        {text:"Darika Samak uploaded 4 files on An option to search in current projects or in all projects", time:"18:30 PM"}
      ]
    }
  },
//   METHODS:{
//     getNotifications(index) {
//       this.notifications = index;
//     }
//   }
} 
</script>