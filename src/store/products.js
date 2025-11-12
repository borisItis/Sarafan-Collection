import { defineStore } from 'pinia'
import { fetchProducts } from '../services/api'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    filteredProducts: [],
  }),
  actions: {
    async loadProducts() {
      this.products = await fetchProducts()
      this.filteredProducts = this.products
    },
    filterProducts(searchTerm = '') {
      this.filteredProducts = this.products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    },
  },
})
