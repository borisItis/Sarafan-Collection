import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'
import About from '../views/About.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Contacts from '../views/Contacts.vue'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/catalog', name: 'catalog', component: Catalog },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/favorites', name: 'favorites', component: Favorites },
  { path: '/about', name: 'about', component: About },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/contacts', name: 'contacts', component: Contacts },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/LoginForm.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/RegisterForm.vue'),
      },
      {
        path: 'reset',
        name: 'Reset',
        component: () => import('../views/ResetForm.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/Sarafan-Collection/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        const scrollOptions = { top: 0, behavior: 'smooth' }
        window.scrollTo(scrollOptions)
        setTimeout(() => resolve(scrollOptions), 300)
      })

      router.beforeEach((to, from, next) => {
        const authStore = useAuthStore()
        if (to.name === 'profile' && !authStore.isAuth) {
          next()
        } else {
          next()
        }
      })
    }
  },
})

export default router
