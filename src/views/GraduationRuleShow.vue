<template>
  <div class="graduation-rule-header">
    <span>ID: {{graduation-rule.id}} </span>
    <h3>Description: {{graduation-rule.description }}</h3>
    <h5>Graduation Code: {{graduation-rule.gradcode}}</h5>
  </div>
</template>

<script>
import GraduationRulesService from '@/services/GraduationRulesService.js'
export default {
  props: ["id"],
  data() {
    return {
      rule: {}
    }
  },
  created() {
    GraduationRulesService.getGraduationRules(this.id)
      .then((response) => {
        this.rule = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  }
};
</script>

<style scoped>
.location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .graduation-rule-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-bottom: solid 1px #e5e5e5;
    }
</style>
