<template>
  <div class="studentlist">
    <div class="container">     
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Student</h2>
          <h3 class="card-subtitle mb-2 text-muted">Timothy, Matthew Robert</h3>
          <ul>
            <li>Date of Birth: 2004-06-29</li>
            <li>School: Oak Bay High School</li>
            <li>Grade: 11</li>
            <li>Graduation Program: 2018</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "studentlist",
  components: {}
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