<template>
  <div class="course-header">
    <span class="title">{{course.courseName}} </span>
    <h3 class="title">{{ course.courseCode }}</h3>
    <h5>courseGradeLevel: {{course.courseGradeLevel}}</h5>
    <h5>courseCredits: {{course.credits}}</h5>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService.js'
export default {
  props: ["id"],
  data() {
    return {
      course: {}
    }
  },
  created() {
    CourseService.getCourse(this.id)
      .then((response) => {
        this.course = response.data
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
    .course-header > .title {
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