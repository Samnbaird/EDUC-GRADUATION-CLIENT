<template>
  <router-link class="graduation-rule-link" :to="{ name: 'graduation-rule-show', params: { id: graduation-rule.id} }">
    <div class="graduation-rule-card -shadow">
      <span class="eyebrow">ID: {{graduation-rule.id}}</span>
      <h4>Description: {{graduation-rule.description}}</h4>
      <h5>Graduation Code: {{graduation-rule.gradcode}}</h5>
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
.graduation-rule-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.graduation-rule-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.graduation-rule-card > .description {
  margin: 0;
}

.graduation-rule-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
