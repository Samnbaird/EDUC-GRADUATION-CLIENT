<template>
  <div>
    <h2>List of Graduation Rules</h2>
    <h6>To see graduation-rules you must run 'npx json-server --watch db.json --port 3000'</h6>
    <GraduationRule v-for="graduationrule in rules" :key="graduationrule.id" :graduationrule="rule" />
    <BaseIcon />
  </div>
</template>

<script>
import GraduationRule from "@/components/GraduationRule";
import GraduationRuleService from '@/services/GraduationRuleService.js';
export default {
  components: {
    GraduationRule
  },
  data() {
    return {
      achievements: []
    };
  },
  created() {
    GraduationRuleService.getGraduationRules()
      .then((response) => {
        this.rules = response.data;
      })
      .catch((error) => {
        console.log('There was an error:' + error.response);
      });
  }
};
</script>

<style></style>
