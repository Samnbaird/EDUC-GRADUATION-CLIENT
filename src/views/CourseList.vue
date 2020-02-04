<template>
  <div>
    <h2>List of Courses</h2>
    <h6>To see courses you must run 'npx json-server --watch course-db.json --port 3000'</h6>
   <Course v-for="course in courses" :key="course.id" :course="course" />

    <ul v-if="courses">
      <li v-for="course in courses" :key="course.id" :course="course">
        <p>{{course.courseName}}</p>
      </li>
    </ul>
     <h4>{{ courses }}</h4>
  </div>
</template>

<script>
import Course from "@/components/Course";
import CourseService from '@/services/CourseService.js';
export default {
  components: {
    Course
  },
  data() {
    return {
      courses: []
    };
  },
  created() {
    CourseService.getCourses()
      .then((response) => {
        this.courses = response.data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
         console.log('There was an error:' + error.response);
      });
  }
};
</script>

<style></style>
