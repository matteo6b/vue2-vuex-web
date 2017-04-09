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

sync(store, router);

Vue.use(VueMaterial);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
