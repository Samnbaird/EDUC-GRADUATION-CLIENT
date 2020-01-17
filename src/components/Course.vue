<template>
  <router-link class="course-link" :to="{ name: 'course-show', params: { id: course.courseCode} }">
    <div class="course-card -shadow">
      <span class="eyebrow">CourseName: {{course.courseName}}</span>
      <h4 class="course">CourseCode: {{course.courseCode}}</h4>
      <h6>courseGradeLevel: {{course.courseGradeLevel}}</h6>
      <h6>credits: {{course.credits}}</h6>
      <h5>What is this? -> sortOrder: {{course.sortOrder}}</h5>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    course: Object
  }
};
</script>

<style scoped>
.course-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.course-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.course-card > .courseCode {
  margin: 0;
}

.course-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
