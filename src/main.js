import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('../node_modules/@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css')
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
