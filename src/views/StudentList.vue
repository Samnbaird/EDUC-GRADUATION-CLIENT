<template>
  <div class="studentlist">
    <div class="container">     
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student 126398841</h2>
          <h3 class="card-subtitle mb-2 text-muted">Timothy, Matthew Robert</h3>
          <ul>
            <li>Date of Birth: 2004-06-29</li>
            <li>School: Oak Bay High School</li>
            <li>Grade: 11</li>
            <li>Graduation Program: 2018</li>
          </ul>
          
          <button class="btn btn-primary active" v-on:click="storePen(126398841)">View Graduation Status</button>
          <router-link class="course-achievement-list" :to="{ name: 'course-achievement-list', params: { personalEducationNumber: '' + 126398841} }"><button class="btn btn-primary active">View Course Achievements</button></router-link>
          
        </div>
      </div>
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student 126214493</h2>
          <h3 class="card-subtitle mb-2 text-muted">Henley, Clifford</h3>
          <ul>
            <li>Date of Birth: 2004-06-29</li>
            <li>School: Oak Bay High School</li>
            <li>Grade: 11</li>
            <li>Graduation Program: 2018</li>
          </ul>
          <button class="btn btn-primary active" v-on:click="storePen(126214493)">View Graduation Status</button>
          <router-link class="course-achievement-list" :to="{ name: 'course-achievement-list', params: { personalEducationNumber: '' + 126214493} }"><button class="btn btn-primary active">View Course Achivements</button></router-link>
          
        </div>
      </div>
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student 123456789</h2>
          <h3 class="card-subtitle mb-2 text-muted">O'Moore, Timothy</h3>
          <ul>
            <li>Date of Birth: 2004-06-29</li>
            <li>School: Oak Bay High School</li>
            <li>Grade: 11</li>
            <li>Graduation Program: 2018</li>
          </ul>
        <button class="btn btn-primary active" v-on:click="storePen(123456789)">View Graduation Status</button>
        <router-link class="course-achievement-list" :to="{ name: 'course-achievement-list', params: { personalEducationNumber: '' + 123456789} }"><button class="btn btn-primary active">View Course Achivements</button></router-link>
        
        </div>
        
      </div>
       
      
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student 128201845</h2>
          <h3 class="card-subtitle mb-2 text-muted">Mill, Nicole</h3>
          <ul>
            <li>Date of Birth: 2004-06-29</li>
            <li>School: Oak Bay High School</li>
            <li>Grade: 11</li>
            <li>Graduation Program: 2018</li>
          </ul>
          <button class="btn btn-primary active" v-on:click="storePen(128201845)">View Graduation Status</button>
          <router-link class="course-achievement-list" :to="{ name: 'course-achievement-list', params: { personalEducationNumber: '' + 128201845} }"><button class="btn btn-primary active">View Course Achivements</button></router-link>
          
        </div>
      </div>
    </div>
    </div>
</template>
<script>
// @ is an alias to /src
import { store } from "@/store.js";
export default {
  name: "studentlist",
  components: {},
  methods: {
    storePen: function(pen){
        console.log(pen);
        store.currentPen = pen;
        this.$router.push({name: 'home'});        
        
    }
  }
};
</script>
<style scoped>
.alert,
.card,
.btn.btn-primary
{
  position: inherit;
  margin-right: 10px;
}
h6 {
  font-size: 1.5rem;
}
</style>