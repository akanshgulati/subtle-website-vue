import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'integrations',
      path: '/integrations',
      redirect: '/integrations/calendar',
      component: () => import(/* webpackChunkName: "integrations.wrapper" */ '@/components/IntegrationWrapper.vue'),
      children: [{
        name: 'integrations.calendar',
        path: '/integrations/calendar',
        component: () => import(/* webpackChunkName: "integrations.calendar" */ '@/components/IntegrationCalendar.vue')
      }]
    },
    {
      name: 'Home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue')
    },
    {
      path:'*',
      redirect: '/'
    }
  ]
})
