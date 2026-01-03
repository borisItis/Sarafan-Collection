import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password) {
      console.log('Login', email, password)
      this.user = { email }
    },
    async register(name, email, password) {
      console.log('Register', name, email, password)
      this.user = { name, email }
    },
    logout() {
      this.user = null
    },
  },
})
