// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = document.createElement('div');

document.body.appendChild(app);

/* eslint-disable no-new */
new Vue({
  el: app,
  components: { App },
  template: '<App/>'
})
