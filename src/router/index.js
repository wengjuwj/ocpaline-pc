import VueRouter from 'vue-router'
import Vue from 'vue'
import Layout from '@/layouts/Layout'


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
        component: () => import('@/views/Index.vue') ,
        meta:{
          title:"首页",
          showheader:false
        }
      },
      {
        path:'/special',
        name: 'special',
        component: () => import('@/views/Special.vue') ,
        meta:{
          title:"专栏",
          showheader:true
        }
      },
      {
        path:'/newKnowledge',
        name: 'newKnowledge',
        component: () => import('@/views/NewKnowledge.vue') ,
        meta:{
          title:"应用新知",
          showheader:true
        }
      },
      {
        path:'/news',
        name: 'news',
        component: () => import('@/views/News.vue') ,
        meta:{
          title:"行业资讯",
          showheader:true
        }
      },
      {
        path:'/recorded',
        name: 'recorded',
        component: () => import('@/views/Recorded.vue') ,
        meta:{
          title:"录播",
          showheader:true
        }
      },
      {
        path:'/direact',
        name: 'direact',
        component: () => import('@/views/DireactTelecast.vue') ,
        meta:{
          title:"直播",
          showheader:false
        }
      },
    ]
  },
  
];

const router =new VueRouter({routes});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
})

export default router

