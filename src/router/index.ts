import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/remote01',
      name: 'remote01',
      component: () => import('remote_app_01/Remote01HomeView')
    }
  ]
})

export default router
