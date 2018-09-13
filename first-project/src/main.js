import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import bus from './bus'

Vue.config.productionTip = false

Vue.use(bus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
