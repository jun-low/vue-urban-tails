import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import store from "./store/store";

import Home from './views/Home';
import Pets from './views/Pets'
import Favorites from './views/Favorites';
import Form from './views/Form';
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
  },
  {
    path: '/favorites',
    component: Favorites
  },
  {
    path: '/form',
    component: Form
  }
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})
