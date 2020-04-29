/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import moment from 'moment';
import App from './components/App.vue';
import UserIndex from './components/user/Index.vue';

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
});

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
      name: 'home',
      path: '/',
      component: UserIndex
  }
];
  
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');