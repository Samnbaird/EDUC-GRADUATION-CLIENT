<template>
  <div class="post-item">
      <form @submit="formSubmit">
        <strong>Course Name:</strong>
        <input type="text" class="form-control" v-model="courseName">
        <strong>Course Code:</strong>
        <textarea class="form-control" v-model="courseCode"></textarea>
        <button class="btn btn-success">Add</button>
      </form>
      {{ output }}
  </div>
</template>

<script>

import CourseService from '@/services/CourseService.js';
export default {
  data() {
    return {
      courseName: '',
      courseCode: '',
      output: ''
    }
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
            
            currentObj.output = response.data;
        })
        .catch(function (error) {
            currentObj.output = error;
        });
      }
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