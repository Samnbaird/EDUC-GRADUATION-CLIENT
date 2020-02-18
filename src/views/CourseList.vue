<template>
  <div class="container">

  <!-- Button trigger modal -->
<button type="button" class="add-course-button btn btn-primary" data-toggle="modal" data-target="#addCourseModal">
  Add Course
</button>

  
<!-- Modal -->
<div class="modal fade" id="addCourseModal" tabindex="-1" role="dialog" aria-labelledby="addCourseModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addCourseModalLabel">Add Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <form @submit="formSubmit">
          <div class="modal-body">
            <div class="add-course">
            
              <form @submit="formSubmit">
                <strong>Course Name:</strong>
                <input type="text" class="form-control" v-model="courseName">
                <strong>Course Code:</strong>
                <textarea class="form-control" v-model="courseCode"></textarea>
                <strong>Course Grade Level:</strong>
                <input type="text" class="form-control" v-model="courseGradeLevel">
                <strong>Credits:</strong>
                <input type="number" class="form-control" v-model="credits">
                <strong>Language:</strong>
                <input type="text" class="form-control" v-model="language">
                <strong>Course Start Date:</strong>
                <input type="text" class="form-control" v-model="courseStartDate">
                <strong>Course End Date:</strong>
                <input type="text" class="form-control" v-model="courseEndDate">
                <strong>Program Code:</strong>
                <input type="text" class="form-control" v-model="programCode">
                 <strong>Requirement Code:</strong>
                <input type="text" class="form-control" v-model="requirementCode">
              </form>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button class="btn btn-success btn-primary" >Add</button>
          </div>
        </form>
    </div>
  </div>
</div>
    <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    <h2>Course Listing</h2>
    <table class="table table-responsive table-striped table-hover table-sm">
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
      courseGradeLevel:'',
      credits:0,
      language:'',
      courseStartDate:'',
      courseEndDate:'',
      programCode:'',
      requirementCode:'',
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
            "courseGradeLevel": this.courseGradeLevel,
            "credits": this.credits,
            "language": null,
            "courseStartDate": this.courseStartDate,
            "courseEndDate": this.courseEndDate,
            "programCode": this.programCode,
            "requirementCode": this.requirementCode
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

<style>
.add-course-button{
  float:right;
}
</style>