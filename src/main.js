import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/css/main.css'
import Routes from './router/router.js'
import i18n from './plugins/i18n'
// usare le parentesi graffe solo se lo store è una costante, altrimenti senza parentesi se si usa export default

import _ from 'lodash';  

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: Routes
});

new Vue({
  el: '#app',
  router: router,
  vuetify,
  i18n,
  _,
  render: h => h(App)
});