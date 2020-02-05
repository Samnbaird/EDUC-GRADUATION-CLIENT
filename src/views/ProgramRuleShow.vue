<template>
  <div class="program-rule-header">
    <span>ID: {{programrule.id}} </span>
    <h3>Description: {{programrule.description }}</h3>
    <h5>Not finished Code: {{programrule.gradcode}}</h5>
  </div>
</template>

<script>
import ProgramRuleService from '@/services/ProgramRuleService.js'
export default {
  props: ["id"],
  data() {
    return {
      rule: {}
    }
  },
  created() {
    ProgramRuleService.getProgramRules(this.id)
      .then((response) => {
        this.rule = response.data
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.log('There was an error:', error.response)
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
