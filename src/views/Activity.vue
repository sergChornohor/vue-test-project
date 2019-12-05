<template lang='pug'>
#posts.content-container-data-posts.activity
  .post.flex.space-between(
    v-for='(post, index) in posts',
    :key='index',
    :class='posts[index].postClass')
    div
      .text
        | {{posts[index].text}}
      span.time
        | {{posts[index].time}}
    .uploaded-photos.flex(
          f-if='posts.imgs')
      .uploaded-photo(
            v-for='(img, index) in post.imgs',
        :key='index',
        :style="{'background-image': 'url('+require('../assets/image/' + img)+')'}",
        @click="$parent.$emit('img-click', index)")
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import ActivityPosts from '../types';

@Component({
  name: 'Activity',
})

export default class Activity extends Vue {
  date: string = 'TODAY';

  posts: Array<ActivityPosts> = [
    {
      postClass: 'mark',
      text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
      time: '12:30 PM',
    },
    {
      postClass: 'comment',
      text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
      time: '12:30 PM',
    },
    {
      postClass: 'inform',
      text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
      time: '',
    },
    {
      postClass: 'upload',
      text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
      time: '18:30 PM',
      imgs: [
        'nature-1.jpg',
        'nature-2.jpg',
        'nature-3.jpg',
        'nature-4.jpg',
      ],
    },
  ];
}

</script>

<style lang="scss" scoped>

.content-container-data-posts {
  position: relative;
  width: 100%;
  height: 100%; }

.post {
  width: 100%;
  margin-left: 20px;
  padding: 25px; }

.text {
  width: 80%;
  font-size: 16px;
  color: #131313;
  line-height: 20px; }

.time {
  width: 60px;
  font-size: 14px;
  color: #131313;
  float: right;}

.mark::before,
.comment::before,
.upload::before {
  content: '';
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transform: translateX(-50px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30% 30%; }
  @media only screen and (max-width: 791px) {
    .mark::before,
    .comment::before,
    .upload::before {
      width: 30px;
      height: 30px; } }

.mark::before {
  background-color: #CEF9C6;
  background-image: url(../assets/image/Icon@3x.svg); }

.comment::before {
  background-color: #FFF8DD;
  background-image: url(../assets/image/message.svg); }

.upload::before {
  background-color: #E3EFFF;
  background-image: url(../assets/image/download.svg); }

.inform {
  width: 80%;
  margin-left: 40px;
  margin-right: 60px;
  border-radius: 10px;
  background-color: #F7F6F3; }

.inform .text {
  width: 100%; }

.upload {
  flex-direction: column; }

.upload-text {
  width: 100%;
  flex-direction: row; }

.uploaded-photos {

  -webkit-box-pack: start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start; }

.uploaded-photo {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 10px;
  background-size: 100%;
  background-repeat: none;
  cursor: pointer; }
  @media only screen and (max-width: 1023px) {
    .uploaded-photo {
      width: 80px;
      height: 80px;
      border-radius: 7px;
      margin-top: 20px;
      margin-right: 2%; } }
  @media only screen and (max-width: 791px) {
    .uploaded-photo {
      width: 70px;
      height: 70px; } }

</style>
