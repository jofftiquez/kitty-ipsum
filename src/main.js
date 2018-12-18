// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import './vuetify';
import './mixins';
import app from './app';
import router from './router';
import VueClipboard from 'vue-clipboard2';
import SocialSharing from 'vue-social-sharing';

Vue.use(VueClipboard);
Vue.use(SocialSharing);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
});
