import Vue from 'vue'
import App from './App'
import router from './router'
router.afterEach((to, from, next) => {
  window.scroll({
    top: 0,
    left: 0,
    behaviour: 'smooth'
  })
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
