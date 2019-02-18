// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/lib/bootstrap/css/bootstrap.min.css'
import './assets/lib/bootstrap/js/bootstrap.min.js'
// import './assets/lib/zoom/css/zoom.css'
// import './assets/lib/zoom/zoom.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
