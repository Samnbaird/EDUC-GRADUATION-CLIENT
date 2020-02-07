<template>
  <router-link class="achievement-link" :to="{ name: 'achievement-show', params: { id: achievement.id} }">
    <div class="achievement-card -shadow">
      <span class="eyebrow">ID: {{achievement.courseAchievementId}}</span>
      <h4>Student: {{achievement.pen}}</h4>
      <h5>Course: {{achievement.courseId}}</h5>
      <h6>Final Letter Grade: {{achievement.finalLetterGrade}}</h6>
      <h6>Final Percent: {{achievement.finalPercent}}</h6>
      <h6>Interim Percent: {{achievement.interimPercent}}</h6>
      <h6>Interim Letter Grade: {{achievement.interimLetterGrade}}</h6>
      <h6>Course Type: {{achievement.courseType}}</h6> 
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    achievement: Object
  }
};
</script>

<style scoped>
.achievement-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.achievement-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.achievement-card > .student {
  margin: 0;
}

.achievement-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
