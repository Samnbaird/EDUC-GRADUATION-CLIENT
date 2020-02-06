<template>
  <div class="course-header">
    <span class="eyebrow">CourseName: {{course.courseName}}</span>
      <h4 class="course">CourseCode: {{course.courseCode}}</h4>
      <h6>courseGradeLevel: {{course.courseGradeLevel}}</h6>
      <h6>credits: {{course.credits}}</h6>
      <h6>language: {{course.language}}</h6>
      <h6>courseStartDate: {{course.courseStartDate}}</h6>
      <h6>courseEndDate: {{course.courseEndDate}}</h6>
      <h6>programCode: {{course.programCode}}</h6>
      <h6>requirementCode: {{course.requirementCode}}</h6>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService.js'
export default {
  props: ["id"],
  data() {
    return {
      course: []
    }
  },
  created() {
    CourseService.getCourse(this.id)
      .then((response) => {
        this.course = response.data
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
         //console.log('There was an error:', error.response)
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