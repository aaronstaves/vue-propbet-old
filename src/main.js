// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import Buefy from 'buefy'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(Buefy);
Vue.use(VueFire);


Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
