<template>
  <router-link class="course-link" :to="{ name: 'course-show', params: { id: course.id} }">
    <div class="course-card -shadow">
      <span class="eyebrow">Session: {{course.session}}</span>
      <h4 class="course">{{achievement.student}}</h4>
      <h5>Course: {{achievement.course}}</h5>
      <h6>Grade: {{achievement.grade}}</h6>
      <BaseIcon name="check-circle">{{ achievement.gradcodes.length }} graduation codes satisfied</BaseIcon>
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
