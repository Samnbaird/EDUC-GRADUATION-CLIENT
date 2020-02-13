<template>
  <div class="container">
    <div class="add-course">
      <form @submit="formSubmit">
        <strong>Course Name:</strong>
        <input type="text" class="form-control" v-model="courseName">
        <strong>Course Code:</strong>
        <textarea class="form-control" v-model="courseCode"></textarea>
        <button class="btn btn-success">Add</button>
      </form>
  </div>
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
      courses: [],
      courseName: '',
      courseCode: '',
      output: ''
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
  },
  methods: {
      formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
        CourseService.getApiClient().post('http://localhost:9999/api/v1/courses',  {
            "courseName": this.courseName,
            "courseCode": this.courseCode,
            "courseGradeLevel": "10",
            "credits": 2,
            "language": null,
            "courseStartDate": "01-Jul-2018",
            "courseEndDate": null,
            "programCode": "2018",
            "requirementCode": "101"
        },{ useCredentails: false })
        .then(function (response) {
            CourseService.getCourses()
            .then((response) => {
              currentObj.courses = response.data;
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
              console.log('There was an error:' + error.response);
            });
            currentObj.output = response.data;
        })
        .catch(function (error) {
            currentObj.output = error;
        });
      }
    }
};
</script>

<style></style>
