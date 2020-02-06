import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import HWTestTask from './pages/HWTestTask/index'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'hwtesttask',
        path: '/:lang?/HWTestTask',
        component: HWTestTask
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
