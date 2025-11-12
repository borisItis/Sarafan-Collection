import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/catalog', name: 'catalog', component: Catalog },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/favorites', name: 'favorites', component: Favorites },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
