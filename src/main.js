import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import vueRouter from 'vue-router';

new Vue({
  el: '#app',
  vuetify,
  vueRouter,
  render: h => h(App)
})
