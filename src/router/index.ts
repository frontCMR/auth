import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
// import AuthViewVue from '@/views/LogIn/AuthView.vue'
import FirebaseView from '@/views/LogIn/FirebaseView.vue'
import RegisterFView from '@/views/Register/RegisterFView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginAuth',
    component: FirebaseView
  },
  {
    path: '/register',
    name: 'registerAuth',
    component: RegisterFView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
