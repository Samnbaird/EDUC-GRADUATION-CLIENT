<template>
  <div class="container">
   
    <h2>Course Listing</h2>
    <table class="table table-striped table-hover table-sm">
      <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Course Grade Level</th>
              <th>credits</th>
              <th>language</th>
              <th>Course Start Date</th>
              <th>Course End Date</th>
              <th>Program Code</th>
              <th>Requirement Code</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
      <Course v-for="course in courses" :key="course.id" :course="course" />
      </tbody>
    </table>
     <!-- DEBUG
    <ul v-if="courses">
     
      <li v-for="course in courses" :key="course.id" :course="course">
        <p>{{course.courseName}}</p>
      </li>
    </ul>
    
     <h4>{{ courses }}</h4>
     -->
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
         //console.log('There was an error:' + error.response);
      });
  }
};
</script>

<style></style>
