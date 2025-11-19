import { defineStore } from 'pinia'
import { fetchProducts } from '../services/api'

export const products = [
  { id: 1, title: 'Товар 1', price: 1000, image: '/images/product1.jpg' },
  { id: 2, title: 'Товар 2', price: 1500, image: '/images/product2.jpg' },
]

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
