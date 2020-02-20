<template>
  
  <div class="container">
  <!-- Button trigger modal -->

<div id="search">
  <!-- `greet` is the name of a method defined below -->
  <input v-model="InputPen" placeholder="Enter Student PEN">
  <button class="btn btn-primary active" v-on:click="search">Search</button>
</div>

    <h1>Student Course Achievement</h1>
    <div class="search-input">
      <input class="form-control" v-model="filters.name.value" placeholder="Enter a PEN"/>
    </div>
    <v-table
        :data="achievements"
        :filters="filters"
        :currentPage.sync="currentPage"
        :pageSize="10"
        @totalPagesChanged="totalPages = $event"
        class="table table-responsive table-striped table-hover table-md text-center align-middle">
          <thead slot="head">
              <v-th sortKey="pen">PEN</v-th>
              <v-th sortKey="courseId">Course</v-th>
              <v-th sortKey="finalLetterGrade">Final Letter Grade</v-th>
              <v-th sortKey="finalPercent">Final Percent</v-th>
              <v-th sortKey="interimPercent">Interim Percent</v-th>
              <v-th sortKey="interimLetterGrade">Interim Letter Grade</v-th>
              <v-th sortKey="courseType">Course Type</v-th>
              <th><button type="button" class="add-course-achievement-button btn btn-primary" data-toggle="modal" data-target="#addCourseAchievementModal">Add Course
</button></th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.courseId">
              <td>{{row.pen}}</td>
              <td>{{row.courseId}}</td>
              <td>{{row.finalLetterGrade}}</td>
              <td>{{row.finalPercent}}</td>
              <td>{{row.interimPercent}}</td>
              <td>{{row.interimLetterGrade}}</td>
              <td>{{row.courseType}}</td> 
              <td><router-link class="course-achievement-show" :to="{ name: 'course-achievement-show', params: { id: '' + row.courseAchievementId} }"><button class="btn btn-primary active">EDIT</button></router-link></td>
            </tr>
          </tbody>
    </v-table>
    <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
      />

  </div>
</template>

<script>
import CourseAchievementService from '@/services/CourseAchievementService.js';
export default {
  props: ["pen"],
  components: {
  },
  name: 'BasicFiltering',
  data() {
    return {
      achievements: [],
      InputPen: '',
      filters: {
        name: { value: '', keys: ['pen'] }
      },
      currentPage: 1,
      totalPages: 0
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

<style scoped>
#search{
  display: none; /* will unhide when endpoint filter by pen is implemented */
}
.add-course-button{
  float:right;
}
.search-input{
  float:right;
  width:300px;

}
.container h1{
  width: 500px; 
  float:left; 
}
</style>
