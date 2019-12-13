import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";

import Home from './views/Home';
import Pets from './views/Pets'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/pets',
    component: Pets
  }
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})
