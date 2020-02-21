 
<template>    
  <div class="col-lg-12">
      <div>
        <div class="alert alert-dismissible alert-success">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <div class="message"><strong>{{message}}</strong></div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  props: {
    message: String
  },
  created() {
    //Check for any messages from routes
    this.message = this.$route.params.message;
  }

};

</script>
<style scoped>
.message{
  text-align:center;
}

</style>
