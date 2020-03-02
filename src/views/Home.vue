<template>
  <div class="home">
   
    <div class="container">
      <div class="alert alert-danger" role="alert" v-if="noPen">
        Please enter a valid Student’s Personal Educations Number (PEN)!
      </div>
      <h1>Student Graduation Status 128201845</h1>
      <p>Enter a Student’s Personal Educations Number (PEN) to retrieve the students current graduation status.</p>

      <p>If the student has no graduation status or their status is not up-to-date you can get their current status by clicking on 'Check Grad Status.'</p>
        <div class="form-group">
          <strong><label for="StudentPen">Personal Education Number:</label></strong>
          <input v-model="inputPen" class="form-control"  id="StudentPen"/>
        </div>
        <div class="btn-group">
          <button  v-on:click="search" class="btn btn-primary" id="find">Find Student</button>
        </div>
      <br>
      <br />
      <h1></h1>
      <div v-if="student" class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student</h2>
          <h3 class="card-subtitle mb-2 text-muted">{{legalFirstName}}, {{legalMiddleName}} {{legalLastName}}</h3>
          <ul>
            <li>Date of Birth: {{dob}}</li>
            <li>School: {{school}}</li>
            <li>Grade: {{gradeCode}}</li>
            <li>Graduation Program: {{graduationProgram}}</li>
          </ul>
        </div>
      </div>
      <br />
      <div v-if="student" class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Graduation Status</h2>
          <ul>
            <li>Graduation Status: <strong>{{gradMessages[1]}}</strong></li>
            <li>Last Update Status: 2020-02-18</li>
          </ul>

          <div class="btn-group">
            <button type="submit" class="btn btn-primary" id="find">Check Graduation Status</button>
          </div>
         
          <br />
          <br />
          <h3>Graduation Requirements</h3>
          <!-- Accordion -->
          <div class="accordion" id="graduationReqAccordion">
            <div class="card" >
              <div class="card-header alert alert-success" id="item1Header">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#expandable1" aria-expanded="false" aria-controls="expandable1">
                    Requirements Met:
                  </button>
                </h5>
              </div>
              <div id="expandable1" class="collapse" aria-labelledby="item1Header" data-parent="#graduationReqAccordion">
                <div class="card-body">
                    <ul>
                      <li v-for="rm in requirementsMet" :key="rm.message">{{rm}}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>  
          <div class="accordion" id="graduationReqAccordion2">  
            <div class="card" >
              <div class="card-header alert alert-danger" id="item2Header">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#expandable2" aria-expanded="false" aria-controls="expandable1">
                    Non-Grad Reasons:
                  </button>
                </h5>
              </div>
              <div id="expandable2" class="collapse" aria-labelledby="item2Header" data-parent="#graduationReqAccordion2">
                <div class="card-body">
                    <ul>
                      <li v-for="rnm in requirementsNotMet" :key="rnm.message">{{rnm}}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>  
<br>

          <router-link to="/course-achievements">All Course Achievements</router-link>
        </div>
      </div>
      <br />
      <div v-if="student" class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Graduation Reports</h2>
          <div class="mt-3">
            <ul>
              <li>Student Achievement Report</li>
              <li>Student Transcript Report</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GraduationStatusService from '@/services/GraduationStatusService.js';
export default {
  name: "home",
  data() {
    return {
      student: false,
      noPen:false,
      inputPen:"",
      graduationStatusData:[],
      pen: "",
      legalFirstName: "",
      legalMiddleName: "",
      legalLastName: "",
      graduationProgram: "",
      school: "",
      dob: "",
      sexCode: "",
      genderCode: "",
      dataSourceCode: "",
      usualFirstName: "",
      usualMiddleName: "",
      usualLastName: "",
      email: "",
      deceasedDate: "",
      gradeCode: "",
      citizenship: "",
      address: "",
      gradMessages: [],
      requirementsMet: [],
      requirementsNotMet: []
    }
  },
   methods: {
      search: function () {
        console.log(this.inputPen)
        GraduationStatusService.getGraduationStatus(this.inputPen)
          .then((response) => {
            console.log(response.data);
            this.noPen = false;
            if(this.inputPen != " "){
              this.student = true;
            }              
            this.graduationStatusData = response.data;
            this.legalFirstName = this.graduationStatusData.legalFirstName;
            this.legalMiddleName = this.graduationStatusData.legalMiddleName;
            this.legalLastName = this.graduationStatusData.legalLastName;
            this.graduationProgram = this.graduationStatusData.graduationProgram;
            this.school = this.graduationStatusData.school;
            this.dob = this.graduationStatusData.dob;
            this.sexCode = this.graduationStatusData.sexCode;
            this.genderCode = this.graduationStatusData.genderCode;
            this.dataSourceCode = this.graduationStatusData.dataSourceCode;
            this.usualFirstName = this.graduationStatusData.usualFirstName;
            this.usualMiddleName = this.graduationStatusData.usualMiddleName;
            this.usualLastName = this.graduationStatusData.usualLastName;
            this.email = this.graduationStatusData.email;
            this.deceasedDate = this.graduationStatusData.deceasedDate;
            this.gradeCode = this.graduationStatusData.gradeCode;
            this.citizenship = this.graduationStatusData.citizenship;
            this.address = this.graduationStatusData.address;
            this.gradMessages = this.graduationStatusData.gradMessages;
            this.requirementsMet = this.graduationStatusData.requirementsMet;
            this.requirementsNotMet = this.graduationStatusData.requirementsNotMet;
          })
          .catch((error) => {
            this.student = false;
            this.noPen = true;
            console.log('There was an error:' + error.response);
          });    
      }
   },
  components: {},
};
</script>
<style scoped>
.alert,
.card,
.btn.btn-primary
{
  position: inherit;
}
h6 {
  font-size: 1.5rem;
}

</style>