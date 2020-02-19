<template>
  
  <div class="container">
  <!-- Button trigger modal -->

<div id="search">
  <!-- `greet` is the name of a method defined below -->
  <input v-model="InputPen" placeholder="Enter Student PEN">
  <button class="btn btn-primary active" v-on:click="search">Search</button>
</div>

    <h2>Student Course Achievement</h2>
    <table class="table table-responsive table-striped table-hover table-md text-center align-middle">
      <thead>
        <tr>
          <td>PEN</td>
          <td>Course</td>
          <td>Final Letter Grade</td>
          <td>Final Percent</td>
          <td>Interim Percent</td>
          <td>Interim Letter Grade</td>
          <td>Course Type</td>
          <td>EDIT</td>
        </tr>
      </thead>
      <tbody>
        <CourseAchievement v-for="achievement in achievements" :key="achievement.id" :achievement="achievement" />
      </tbody>
    </table>

    <blockquote>Note: Search by pen endpoints are not created yet. Search by coursecahivementid: 9d625a49-85ab-c3b1-e053-9ae9228ecc75
    </blockquote>
  </div>
</template>

<script>
import CourseAchievement from "@/components/CourseAchievement";
import CourseAchievementService from '@/services/CourseAchievementService.js';
export default {
  props: ["pen"],
  components: {
    CourseAchievement
  },
  data() {
    return {
      achievements: [],
      InputPen: ''
    };
  },
  created() {
    CourseAchievementService.getCourseAchievements()
      .then((response) => {
        this.achievements = response.data;
      })
      .catch((error) => {
        console.log('There was an error:' + error.response);
      });
  },
   methods: {
      search: function () {
          
          CourseAchievementService.getCourseAchievement(this.InputPen)
          .then((response) => {
            console.log(response.data)
            console.log(this.achievements)
            this.achievements = [response.data];

          })
          .catch((error) => {
            console.log('There was an error:' + error.response);
          });
    
    }
   }
};
</script>

<style>
#search{
  float:right
}
</style>
