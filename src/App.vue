<template>
  <div id="app">
    <!-- <Header></Header> -->
    <Bcheader style="margin-top:50px;margin-bottom: 28px;"></Bcheader>
    <!-- <Sidebar>
        <ul class="sidebar-panel-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/students">Students</router-link></li>
          <li><router-link to="/course-achievements">Course Achievements</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
          <li><router-link to="/program-rules">Program Rules</router-link></li>
        </ul>
    </Sidebar> -->
    <div style="margin-top: 130px;">
      <router-view />
    </div>

    <!-- <div class="container mt-3">
      <Burger style="float:right;"></Burger>
      
    </div>   -->
  </div>
</template>
<script>
//import Header from "@/components/Header";
import Bcheader from "@/components/BCHeader";
//import Burger from './components/Menu/Burger.vue';
//import Sidebar from './components/Menu/Sidebar.vue';
export default {
  components: {
    //Header,
    //Burger,
    //Sidebar,
    Bcheader
  }
};
</script>
<style lang="css">
@import "/node_modules/@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
