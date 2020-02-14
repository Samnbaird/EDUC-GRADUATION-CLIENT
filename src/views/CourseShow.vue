<template>
  <div class="container">
    <h2>Edit Course</h2>
    <!--
    <span class="eyebrow">CourseName: {{course.courseName}}</span>
      <h4 class="course">CourseCode: {{course.courseCode}}</h4>
      <h6>courseGradeLevel: {{course.courseGradeLevel}}</h6>
      <h6>credits: {{course.credits}}</h6>
      <h6>language: {{course.language}}</h6>
      <h6>courseStartDate: {{course.courseStartDate}}</h6>
      <h6>courseEndDate: {{course.courseEndDate}}</h6>
      <h6>programCode: {{course.programCode}}</h6>
      <h6>requirementCode: {{course.requirementCode}}</h6>
    -->  
    <form action="">
      <div class="form-group">
        <label for="CourseName">Course Name:</label>
        <input type="text" class="form-control" v-model="course.courseName" :placeholder="course.courseName" id="CourseName">
      </div>
      <div class="form-group">
        <label for="CourseCode">Course Code:</label>
        <input type="text" class="form-control" v-model="course.courseCode" :placeholder="course.courseCode" id="CourseCode">
      </div>
      <div class="form-group">
        <label for="courseGradeLevel">Course Grade Level:</label>
        <input type="text" class="form-control" v-model="course.courseGradeLevel"  :placeholder="course.courseGradeLevel" id="courseGradeLevel">
      </div>
      <div class="form-group">
        <label for="credits">Credits:</label>
        <input type="text" class="form-control" v-model="course.credits"  :placeholder="course.credits" id="credits">
      </div>
      <div class="form-group">
        <label for="language">Language:</label>
        <input type="text" class="form-control" v-model="course.language"  :placeholder="course.language" id="language">
      </div>
      <div class="form-group">
        <label for="courseStartDate">Course Start Date:</label>
        <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="form-control" v-model="course.courseStartDate"  :placeholder="course.courseStartDate" id="courseStartDate">
      </div>
      <div class="form-group">
        <label for="courseEndDate">Course End Date:</label>
        <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="form-control" v-model="course.courseEndDate"  :placeholder="course.courseEndDate" id="courseEndDate">
      </div>
      <div class="form-group">
        <label for="programCode">Program Code:</label>
        <input type="text" class="form-control" v-model="course.programCode"  :placeholder="course.programCode" id="programCode">
      </div>
      <div class="form-group">
        <label for="requirementCode">Requirement Code:</label>
        <input type="text" class="form-control" v-model="course.requirementCode"  :placeholder="course.requirementCode" id="requirementCode">
      </div>
      <router-link class="nav-item nav-link" to="/courses"><button>Cancel</button></router-link>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>  
     <p><pre>data: {{$data | json 2}}</pre></p>
  </div>

</template>

<script>

import CourseService from '@/services/CourseService.js'
export default {
  props: ["id"],
  data() {
    return {
      course: [],
      name: '',
      description: '',
      output: ''
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

