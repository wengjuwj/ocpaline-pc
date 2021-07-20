import VueRouter from 'vue-router'
import Vue from 'vue'
import Live from '@/view/live.vue'


Vue.use(VueRouter);
const routers=[
  {
    path:'/live',
    name: 'live',
    component: Live
  },
];

const router =new VueRouter({routers});

export default router

