import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import UserList from '@/components/User/List'
import UserView from '@/components/User/View'



Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/users/:id',
      name: 'UserView',
      component: UserView,
      props: true
    }
  ]
})
