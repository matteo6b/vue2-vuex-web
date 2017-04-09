import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import NProgress from 'nprogress';
import Hello from '@/components/Hello';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
/* Vue.http.interceptors.push((request, next) => {


})*/
axios.interceptors.request.use((config) => {
  NProgress.inc(0.2);
  NProgress.done();
  return config;
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  NProgress.start();
  next();
});

/* router.beforeEach((to, from, next) => {
  // console.log('routing: ' + to + ' -> ' + from)
  const authenticated = store.getters['auth/isAuthenticated']

  if (to.name === 'login') {
    if (authenticated) {
      next({ name: 'dashboard' })
    }
  } else {
    if (to.meta.requiresAuth && !authenticated) {
      next({ name: 'login' })
    }
  }
  next()
})*/

router.afterEach(() => {
  NProgress.done();
});

export default router;
