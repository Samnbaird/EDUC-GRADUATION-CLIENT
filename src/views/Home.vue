<template>
  <div class="home">
    <div class="container">
      <h1>Student Graduation Status</h1>
      <p>Enter a Student’s Personal Educations Number (PEN) to retrieve the students current graduation status.</p>

      <p>If the student has no graduation status or their status is not up-to-date you can get their current status by clicking on 'Check Grad Status.'</p>
      <form @submit="formSubmit">
        <div class="form-group">
          <label for="StudentPen">Personal Education Number:</label>
          <input type="text" class="form-control"  id="StudentPen" />
        </div>
        <div class="btn-group">
          <button type="submit" class="btn btn-primary" id="find">Find Student</button>
        </div>
      </form>
      <br />
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
      <br />
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h2 class="card-title">Graduation Status</h2>
          <ul>
            <li>Graduation Status: Not graduated</li>
            <li>Last Update Status: 2020-02-18</li>
          </ul>

          <div class="btn-group">
            <button type="submit" class="btn btn-primary" id="find">Check Graduation Status</button>
          </div>
          <br />
          <br />
          <h3>Graduation Requirements</h3>
          <a href="#rec-met" class="btn btn-info" data-toggle="collapse">Completed</a>
          <div id="rec-met" class="collapse">
            <ul class="mt-3">
              <li>Language Arts 10</li>
              <li>Social Studies 10</li>
              <li>Language Arts 11</li>
              <li>Mathematics 10</li>
              <li>Numeracy 10 Assessment</li>
              <li>Literacy 10 Assessment</li>
              <li>Language Arts 12</li>
              <li>Science 10</li>
              <li>Social Studies 10</li>
              <li>Science 10</li>
              <li>Career Life Education</li>
            </ul>
          </div>
          <br />
          <a href="#rec-not-met" class="btn btn-warning mt-3" data-toggle="collapse">Not Completed</a>
          <div id="rec-not-met" class="collapse">
            <ul class="mt-3">
              <li>Fewer than 16 Gr 12 credits</li>
              <li>No Social Studies 11 or 12</li>
              <li>No Mathematics 11 or 12</li>
              <li>No Science 11 or 12</li>
              <li>No Literacy 12 Assessment</li>
              <li>No Physical and Health Education 10</li>
              <li>Fewer than 4 Arts Education/Applied</li>
              <li>Design, Skills, and Technologies</li>
              <li>No Career Life Connections</li>
              <li>Fewer than 28 Elective credits</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div class="card" style="width: 100%;">
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
      <!-- <div class="alert alert-success" style="width: 50%;">
        Requirements Met:
        <ul>
          <li>Language Arts 10</li>
          <li>Social Studies 10</li>
          <li>Language Arts 11</li>
          <li>Mathematics 10</li>
          <li>Numeracy 10 Assessment</li>
          <li>Literacy 10 Assessment</li>
          <li>Language Arts 12</li>
          <li>Science 10</li>
          <li>Social Studies 10</li>
          <li>Science 10</li>
          <li>Career Life Education</li>
        </ul>
      </div>
      <div class="alert alert-danger" style="width: 50%;">
        Non-Grad Reasons:
        <ul>
          <li>Fewer than 16 Gr 12 credits</li>
          <li>No Social Studies 11 or 12</li>
          <li>No Mathematics 11 or 12</li>
          <li>No Science 11 or 12</li>
          <li>No Literacy 12 Assessment</li>
          <li>No Physical and Health Education 10</li>
          <li>Fewer than 4 Arts Education/Applied </li>
          <li>Design, Skills, and Technologies</li>
          <li>No Career Life Connections</li>
          <li>Fewer than 28 Elective credits</li>
        </ul>
      </div>-->
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
.alert,
.card,
.btn-group.btn-group-vertical,
.btn-group > .btn {
  position: inherit;
}
h6 {
  font-size: 1.5rem;
}
</style>