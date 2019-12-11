import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import vueRouter from 'vue-router';

Vue.use(vueRouter);

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
