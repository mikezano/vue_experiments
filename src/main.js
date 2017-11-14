// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VuePrism from 'vue-prism'
import App from './App'
import router from './router'
import {store} from './store/store';


Vue.config.productionTip = false
Vue.use(VuePrism)


import 'prismjs/themes/prism-tomorrow.css'
//import registry from './components/vuer/registry';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  template: '<App/>',
  components: { App }
})
