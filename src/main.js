// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'


Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
