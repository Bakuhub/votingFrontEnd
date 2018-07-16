import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AddRecord from '@/components/AddRecord'
import Test from '@/components/Test'
Vue.use(Router)

export const routes = [

    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/addRecord',
      name: 'addRecord',
      component: AddRecord
    }


  ]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'base',
      component: Main,
      children: routes
    }
  ]
})
export default router
