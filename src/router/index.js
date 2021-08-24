import VueRouter from 'vue-router'
import Vue from 'vue'
import LayoutPC from '@/layouts/LayoutPC'
import LayoutH5 from '@/layouts/LayoutH5'


Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    name:'layout',
    component:LayoutPC,
    redirect: '/index',
    children:[
      {
        path:'/index',
        name: 'index',
        component: () => import('@/views/pc/Index.vue') ,
        meta:{
          title:"首页",
          showheader:false
        }
      },
      {
        path:'/special',
        name: 'special',
        component: () => import('@/views/pc/Special.vue') ,
        meta:{
          title:"专栏",
          showheader:true
        }
      },
      {
        path:'/newKnowledge',
        name: 'newKnowledge',
        component: () => import('@/views/pc/NewKnowledge.vue') ,
        meta:{
          title:"应用新知",
          showheader:true
        }
      },
      {
        path:'/news',
        name: 'news',
        component: () => import('@/views/pc/News.vue') ,
        meta:{
          title:"行业资讯",
          showheader:true
        }
      },
      {
        path:'/recorded',
        name: 'recorded',
        component: () => import('@/views/pc/Recorded.vue') ,
        meta:{
          title:"录播",
          showheader:true
        }
      },
      {
        path:'/direact',
        name: 'direact',
        component: () => import('@/views/pc/DireactTelecast.vue') ,
        meta:{
          title:"直播",
          showheader:true
        }
      },
      {
        path:'/direactmore',
        name: 'direactmore',
        component: () => import('@/views/pc/DireactMore.vue') ,
        meta:{
          title:"直播-更多",
          showheader:true
        }
      },
      {
        path:'/searchlist',
        name: 'searchlist',
        component: () => import('@/views/pc/SearchList.vue') ,
        meta:{
          title:"搜索结果",
          showheader:true
        }
      },
    ]
  },
  {
    path:'/h5',
    name:'layout',
    component:LayoutH5,
    redirect: '/h5/index',
    children:[
      {
        path:'/h5/index',
        name: 'h5index',
        component: () => import('@/views/h5/Index.vue') ,
        meta:{
          title:"直播"
        }
      },
      {
        path:'/h5/advance',
        name: 'advance',
        component: () => import('@/views/h5/Advance.vue') ,
        meta:{
          title:"直播预告"
        }
      },
      {
        path:'/h5/advancedetail',
        name: 'advancedetail',
        component: () => import('@/views/h5/AdvanceDetail.vue') ,
        meta:{
          title:"直播预告"
        }
      },
    ]
  }
  
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

