import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import allTest from '@/components/allTest'
import vText from '@/components/v-text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allTest',
      component: allTest
    },
    {
      path: '/vText',
      name: 'vText',
      component: vText
    }
  ]
})
