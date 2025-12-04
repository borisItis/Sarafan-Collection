import { defineStore } from 'pinia'
import { useProductsStore } from '../store/products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  actions: {
    loadCart() {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        this.cart = JSON.parse(savedCart)
      }
    },

    addToCart(product) {
      if (!this.cart.find((item) => item.id === product.id)) {
        this.cart.push(product)
        this.saveCart()
      }
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
      this.saveCart()
    },

    clearCart() {
      this.cart = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
})
