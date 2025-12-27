import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'
import About from '../views/About.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/catalog', name: 'catalog', component: Catalog },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/favorites', name: 'favorites', component: Favorites },
  { path: '/about', name: 'about', component: About },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/contacts', name: 'contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory('/Sarafan-Collection/'),
  routes,
})

export default router
