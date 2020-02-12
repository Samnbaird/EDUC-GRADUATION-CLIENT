<template>
    <tr>
      
      <td class="eyebrow">{{course.courseName}}</td>
      <td class="course">{{course.courseCode}}</td>
      <td>{{course.courseGradeLevel}}</td>
      <td>{{course.credits}}</td>
      <td>{{course.language}}</td>
      <td>{{course.courseStartDate}}</td>
      <td>{{course.courseEndDate}}</td>
      <td>{{course.programCode}}</td>
      <td>{{course.requirementCode}}</td>
      <td><router-link class="course-link" :to="{ name: 'course-show', params: { id: course.courseId} }"><button class="btn btn-primary active">EDIT</button></router-link></td>
    </tr>
</template>

<script>
export default {
  props: {
    //course: Array
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
