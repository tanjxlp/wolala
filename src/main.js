// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'//A1.1
axios.defaults.withCredentials=true;
Vue.config.productionTip = false

var myAxios = axios.create({//A1.2
	baseURL:'http://localhost:3000'
})
Vue.prototype.$axios=myAxios //A1.3

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
