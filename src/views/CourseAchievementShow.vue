<template>
  <div class="achievement-header">
    <span class="title">{{courseachievement.id}} </span>
    <h3 class="title">{{ courseachievement.courseid }}</h3>
    <h5>Session: {{courseachievement.school}} {{courseachievement.session}}</h5>
    <h5>Letter Grade: {{courseachievement.grade}}</h5>
    <ul>
      <li v-for="(gradcode, index) in achievement.gradcodes" :key="index" class="list-item">
        <b>Graduation code: #{{ gradcode.id }} {{gradcode.description}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import CourseAchievementService from '@/services/CourseAchievementService.js'
export default {
  props: ["id"],
  data() {
    return {
      achievement: {}
    }
  },
  created() {
    CourseAchievementService.getCourseAchievement(this.id)
      .then((response) => {
        this.achievement = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  }
};
</script>

<style scoped>
.location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .achievement-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-bottom: solid 1px #e5e5e5;
    }
</style>
