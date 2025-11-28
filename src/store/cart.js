import { defineStore } from 'pinia'
import { useProductsStore } from '../store/products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  actions: {
    add(product) {
      const item = this.cart.find((p) => p.id === product.id)
      if (item) item.qty++
      else this.cart.push({ ...product, qty: 1 })
    },

    remove(id) {
      this.cart = this.cart.filter((p) => p.id !== id)
    },
  },
})
