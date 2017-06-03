// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import { sync } from 'vuex-router-sync';

import App from './App';
import router from './router';
import store from './store';

import './styles/app.scss';
import './../node_modules/font-awesome/scss/font-awesome.scss';

sync(store, router);

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'black',
  accent: 'red',
  warn: 'red',
  background: 'deep-purple',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
