<template>
  
  <div class="container">
    <SiteMessage v-bind:message=this.displayMessage v-if="displayMessage"></SiteMessage>
  <!-- Button trigger modal -->
<div id="search">
  <!-- `greet` is the name of a method defined below -->
  <input v-model="InputCourse" placeholder="Filter Course">
  <button class="btn btn-primary active" v-on:click="search">Search</button>
</div>
<div class="modal fade" id="addCourseAchievementModal" tabindex="-1" role="dialog" aria-labelledby="addCourseAchievementModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="addCourseAchievementModalLabel">Add Course</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <form @submit="formSubmit">
              <div class="modal-body">
                <div class="add-course-achievement">
                  
                    <strong>Pen:</strong>
                    <input type="text" class="form-control" v-model="pen">
                    123383473
                    <strong>Session Date:</strong>
                    <input type="text" class="form-control" v-model="sessionDate">
                    01-Nov.-2018
                    <strong>Final Percent:</strong>
                    <input type="text" class="form-control" v-model="finalPercent">
                    100.0
                    <strong>Interim Percent:</strong>
                    <input type="text" class="form-control" v-model="interimPercent">
                    100.0
                    <strong>Final Letter Grade:</strong>
                    <input type="text" class="form-control" v-model="finalLetterGrade">
                    <strong>Credits:</strong>
                    <input type="text" class="form-control" v-model="credits">
                    <strong>Course ID:</strong>
                    <input type="text" class="form-control" v-model="courseId">
                    <strong>Course Type:</strong>
                    <input type="text" class="form-control" v-model="courseType">
                    <strong>Interim Letter Grade:</strong>
                    <input type="text" class="form-control" v-model="interimLetterGrade">
                  
                </div>
              </div>

              <div class="modal-footer">
                
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button class="btn btn-success btn-primary" v-on:click="addButton" >Add</button>
                
              </div>
            </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-sm-12">
        <h1> Student Course Achievement</h1>
      </div>
      <div class="search-input col-lg-5 col-sm-12">
      <input class="form-control" v-model="filters.name.value" placeholder="Filter by Course ID"/>
    </div>
    </div>
    <div class="row">
      <div class="col-12 student-pen-display"><h3>PEN: {{this.personalEducationNumber }}</h3></div>
    </div>
    
    
    <v-table
        :data="achievements"
        :filters="filters"
        class="table table-responsive table-striped table-hover table-md text-center align-middle">
          <thead slot="head">
              <v-th sortKey="courseId">Course ID</v-th>
              <v-th sortKey="sessionDate">Session Date</v-th>
              <v-th sortKey="finalPercent">Final Percent</v-th>
              <v-th sortKey="interimPercent">Interim Percent</v-th>
              <v-th sortKey="finalLetterGrade">Final Letter Grade</v-th>
              <v-th sortKey="credits">Credits</v-th>
              <v-th sortKey="courseType">Course Type</v-th>
              <v-th sortKey="interimLetterGrade">Interim Letter Grade</v-th>

                         
              
              <th><button type="button" class="add-course-achievement-button btn btn-primary" data-toggle="modal" data-target="#addCourseAchievementModal">Add Course
</button></th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.courseAchievementId">
              <td>{{row.courseId}}</td>
              <td>{{row.sessionDate}}</td>
              <td>{{row.finalPercent}}</td>
              <td>{{row.interimPercent}}</td>
              <td>{{row.finalLetterGrade}}</td>
              <td>{{row.credits}}</td>
              <td>{{row.courseType}}</td>             
              <td>{{row.interimLetterGrade}}</td>
              <td><router-link class="course-achievement-show" :to="{ name: 'course-achievement-show', params: { id: '' + row.courseAchievementId} }"><button class="btn btn-primary active">EDIT</button></router-link></td>
            </tr>
          </tbody>
    </v-table>


  </div>
</template>

<script>
import CourseAchievementService from '@/services/CourseAchievementService.js';
import SiteMessage from '@/components/SiteMessage';
export default {
  props: ["personalEducationNumber"],
  components: {
    'SiteMessage': SiteMessage
  },
  name: 'BasicFiltering',
  data() {
    return {
      achievements: [],
      InputPen: '',
      filters: {
        name: { value: '', keys: ['courseId'] }
      },
      pen: '',
      sessionDate: '',
      finalPercent: '',
      interimPercent: '',
      finalLetterGrade: '',
      credits: '',
      courseId: '',
      courseType: '',
      interimLetterGrade: '',
      currentPage: 1,
      totalPages: 0,
      displayMessage: null,
      modalVisible: null
    };
  },
  created() {
    
    this.displayMessage = this.$route.params.message;
    CourseAchievementService.getStudentCourseAchievements(this.personalEducationNumber)
      .then((response) => {
        this.achievements = response.data;
      })
      .catch((error) => {
        console.log('There was an error:' + error.response);
      });
  },
   methods: {
      search: function () {
          
          CourseAchievementService.getStudentCourseAchievements(this.InputPen)
          .then((response) => {
            console.log(response.data)
            console.log(this.achievements)
            this.achievements = [response.data];

          })
          .catch((error) => {
            console.log('There was an error:' + error.response);
          });
    
      },
      addButton: function () {
          if(this.modalVisible){
             this.modalVisible = null;
          }else{
            this.modalVisible = true;
          }
    
      },
      formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
          
        CourseAchievementService.addStudentCourseAchievement({
            "pen": this.pen,
            "sessionDate": this.sessionDate,
            "finalPercent": parseInt(this.finalPercent),
            "interimPercent": parseInt(this.interimPercent),
            "finalLetterGrade": this.finalLetterGrade,
            "credits": parseInt(this.credits),
            "courseId": this.courseId,
            "courseType": this.courseType,
            "interimLetterGrade": this.interimLetterGrade,
          
        })
       .then(function (response) {
            CourseAchievementService.getCourseAchievements()
            .then((response) => {
              
              currentObj.achievements = response.data;
              currentObj.displayMessage = "You have successfully added a Course Achievement";
  
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
.student-pen-display{
  float:left;
  clear:both;
  width: 100%;
  position:relative;
  
}
</style>
