import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      name: 'website',
      path: '/',
      component: () => import(/* webpackChunkName: "website" */ '@/components/WebsiteWrapper.vue'),
      children: [
        {
          name: 'home',
          path: '',
          component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue')
        },
        {
          name: 'integrations',
          path: 'integrations',
          redirect: '/integrations/calendar',
          component: {render (c) { return c('router-view') }},
          children: [{
            name: 'integrations.calendar',
            path: 'calendar',
            component: () => import(/* webpackChunkName: "integrations.calendar" */ '@/components/IntegrationCalendar.vue')
          }]
        },
        {
          name: 'kb',
          path: 'kb',
          redirect: '/kb/integrations/calendar',
          component: {render (c) { return c('router-view') }},
          children: [{
            name: 'kb.calendar',
            path: 'integrations/calendar',
            component: () => import(/* webpackChunkName: "kb.integrations.calendar" */ '@/components/kb/Calendar.vue')
          }]
        },
        {
          name: 'uninstall',
          path: 'uninstall',
          component: () => import(/* webpackChunkName: "uninstall" */ '@/components/Uninstall.vue')
        },
        {
          name: 'privacy',
          path: 'privacy',
          component: () => import(/* webpackChunkName: "privacy" */ '@/components/Privacy.vue')
        }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
