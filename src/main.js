// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.eot'
import './assets/font/iconfont.ttf'
import './assets/font/iconfont.woff'
import './assets/font/iconfont.svg'
import './assets/css/pub.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
