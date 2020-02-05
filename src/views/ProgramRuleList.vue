<template>
  <div>
    <h2>List of Program Rules</h2>
    <h6>To see program-rules you must run 'npx json-server --watch program-rules-db.json --port 3000'</h6>
    <ProgramRule v-for="programrule in rules" :key="programrule.id" :programrule="rule" />
    <BaseIcon />
  </div>
</template>

<script>
import ProgramRule from "@/components/ProgramRule";
import ProgramRuleService from '@/services/ProgramRuleService.js';
export default {
  components: {
    ProgramRule
  },
  data() {
    return {
      achievements: []
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

<style></style>
