import Vue from 'vue'
import App from './App'
import router from './router'
router.afterEach(() => {
  window.scroll({
    top: 0,
    left: 0,
    behaviour: 'smooth'
  })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
