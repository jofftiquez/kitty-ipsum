import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import counter from '@/components/foo/counter-page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/counter-demo',
      name: 'counter',
      component: counter
    }
  ]
});
