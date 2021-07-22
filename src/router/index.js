import VueRouter from 'vue-router'
import Vue from 'vue'
import Layout from '@/layouts/layout'


Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    name:'layout',
    component:Layout,
    redirect: '/index',
    children:[
      {
        path:'/index',
        name: 'index',
        component: () => import('@/views/index.vue') ,
      },
      {
        path:'/special',
        name: 'special',
        component: () => import('@/views/special.vue') ,
      },
      {
        path:'/newKnowledge',
        name: 'newKnowledge',
        component: () => import('@/views/newKnowledge.vue') ,
      },
      {
        path:'/news',
        name: 'news',
        component: () => import('@/views/news.vue') ,
      },
      {
        path:'/recorded',
        name: 'recorded',
        component: () => import('@/views/recorded.vue') ,
      },
      {
        path:'/direact',
        name: 'direact',
        component: () => import('@/views/direactTelecast.vue') ,
      },
    ]
  },
  
];

const router =new VueRouter({routes});

export default router

