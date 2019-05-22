import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/deviceInformation',
      children: [
        {
          path: '/home',
          component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
        path: '/deviceInformation',
        name: 'deviceInformation',
        component: () => import('./views/deviceInformation/index.vue')
      },
      {
        path: '/equipmentManage',
        name: 'equipmentManage',
        component: () => import('./views/equipmentManage/index.vue')
      },
      {
        path: '/materialManagement',
        name: 'materialManagement',
        component: () => import('./views/materialManagement/index.vue')
      },
      {
        path: '/suppliesManagement',
        name: 'suppliesManagement',
        component: () => import('./views/suppliesManagement/index.vue')
      },
    ]
    }
  ]
})