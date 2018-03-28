import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

router.afterEach(() => {
  window.scroll({
    top: 0,
    left: 0,
    behaviour: 'smooth'
  })
})

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-111434172-1',
  router,
  debug: {
    enabled: process.env.NODE_ENV !== 'production',
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
