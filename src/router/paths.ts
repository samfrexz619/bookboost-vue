import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue';

const paths: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/DemoView.vue'),
  },
]

export default paths;