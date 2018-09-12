import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      name:"home",
      meta:{
        title:'首页'
      }
    },
    {
      path:'/about/:id',
      name:"about",
      meta:{
        title:'详情'
      },
      component:()=>import("../components/about")
    },
    {
      path:'/login',
      meta:{
        title:'登录'
      },
      component:()=>import("../components/login")
    },
    {
      path:'/main',
      component:()=>import("../views/layout/index"),
      children:[
        {
          path: 'home',
          component: home,
          name:"home1",
          meta:{
            title:'首页'
          }
        },
        {
          path:'about',
          name:"about1",
          meta:{
            title:'详情'
          },
          component:()=>import("../components/about")
        },
        {
          path:'login',
          name:'login1',
          meta:{
            title:'登录'
          },
          component:()=>import("../components/login")
        }
      ]
    }
  ]
})
router.beforeEach((to,from,next) =>{
  if(to.meta && to.meta.title){
    document.title = to.meta.title
  }
  next()
})
export default router
