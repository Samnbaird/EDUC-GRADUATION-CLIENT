<template>
  
  <div class="container">
  <!-- Button trigger modal -->


    <h1>Graduation Program Rules</h1>
    <div class="search-input">
      <input class="form-control" v-model="filters.name.value" placeholder="Enter a Rule"/>
    </div>
    <v-table
        :data="rules"
        :filters="filters"
        :currentPage.sync="currentPage"
        :pageSize="10"
        @totalPagesChanged="totalPages = $event"
        class="table table-responsive table-striped table-hover table-md text-center align-middle">
          <thead slot="head">
              <v-th sortKey="requirementCode">Requirement Code</v-th>
              <v-th sortKey="requirementName">Requirement Name</v-th>
              <v-th sortKey="requiredCredits">Requiremen Credits</v-th>
              <v-th sortKey="notMetDescription">Not Met Description</v-th>
              <v-th sortKey="programCode">Program Code</v-th>
              <th><button type="button" class="add-course-achievement-button btn btn-primary" data-toggle="modal" data-target="#addCourseAchievementModal">Add Rule
</button></th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.requirementCode">
              <td>{{row.requirementCode}}</td>
              <td>{{row.requirementName}}</td>
              <td>{{row.requiredCredits}}</td>
              <td>{{row.notMetDescription}}</td>
              <td>{{row.programCode}}</td>
              <td><router-link class="achievement-link" :to="{ name: 'achievement-show', params: { id: row.id} }"><button class="btn btn-primary active">EDIT</button></router-link></td>
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
import ProgramRuleService from '@/services/ProgramRuleService.js';
export default {
  
  components: {
  },
  name: 'BasicFiltering',
  data() {
    return {
      rules: [],
      filters: {
        name: { value: '', keys: ['requirementCode'] }
      },
      currentPage: 1,
      totalPages: 0
    };
  },
  created() {
    ProgramRuleService.getProgramRules()
      .then((response) => {
        this.rules = response.data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // console.log('There was an error:' + error.response);
      });
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
