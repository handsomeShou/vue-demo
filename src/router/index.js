import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AbstractEssay from '@/components/AbstractEssay'
import companyInfo from '@/components/companyInfo'
import Carousel from '@/components/Carousel'
import Emvironment from '@/components/Env'
import newsInfo from '@/components/newsInfo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'AbstractEssay',
      component: AbstractEssay
    },
    {
      path: '/info',
      name: 'companyInfo',
      component: companyInfo
    },
    {
      path: '/env',
      name: 'Emvironment',
      component: Emvironment
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: newsInfo
    }
  ]
})
