import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'product',
        component: () => import('../views/Admin/IndexVue.vue'),
        props: true 
      },
      {
        path: 'user',
        component: () => import('../views/User/IndexVue.vue'),
        props: true 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
