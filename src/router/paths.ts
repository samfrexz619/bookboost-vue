import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue';

const paths: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }
]

export default paths;