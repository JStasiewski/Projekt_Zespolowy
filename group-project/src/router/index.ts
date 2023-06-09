import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CraftingView from '../views/GameView.vue'
import AccountInfoView from '../views/AccInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/crafting',
      name: 'crafting',
      component: CraftingView
    },
    {
      path:'/accinfo',
      name: 'accinfo',
      component: AccountInfoView
    }
  ]
})

export default router
