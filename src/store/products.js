import { defineStore } from 'pinia'
import { fetchProducts } from '../services/api'

import img1 from '../assets/images/CollectionImage1.jpg'
import img2 from '../assets/images/CollectionImage2.jpg'
import img3 from '../assets/images/CollectionImage3.jpg'
import img4 from '../assets/images/CollectionImage4.jpg'
import img5 from '../assets/images/CollectionImage5.jpg'
import img6 from '../assets/images/CollectionImage6.jpg'
import img7 from '../assets/images/CollectionImage7.jpg'
import img8 from '../assets/images/CollectionImage8.jpg'
import img9 from '../assets/images/CollectionImage9.jpg'

export const mockProducts = [
  {
    id: 1,
    image: img1,
    title: 'Платье в полоску с запахом',
    price: '6 999 руб.',
    createdAt: 20250120,
    popularity: 135,
  },
  { id: 2, image: img2, title: 'Объемный пиджак', price: '12 499 руб.' },
  { id: 3, image: img3, title: 'Комбинезон с принтом', price: '6 999 руб.' },
  { id: 4, image: img4, title: 'Атласный топ-комбинация', price: '2 799 руб.' },
  { id: 5, image: img5, title: 'Блейзер с декоративными пуговицами', price: '9 999 руб.' },
  { id: 6, image: img6, title: 'Блейзер с декоративными пуговицами', price: '9 999 руб.' },
  { id: 7, image: img7, title: 'Блейзер с декоративными пуговицами', price: '9 999 руб.' },
  { id: 8, image: img8, title: 'Блейзер с декоративными пуговицами', price: '9 999 руб.' },
  { id: 9, image: img9, title: 'Блейзер с декоративными пуговицами', price: '4 500 руб.' },
]

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [...mockProducts],
    filteredProducts: [...mockProducts],
    isLoaded: false,
    _loadingPromise: null,
    sortType: 'default',
  }),

  actions: {
    loadProducts() {
      if (this.isLoaded) return Promise.resolve()
      if (this._loadingPromise) return this._loadingPromise
      this._loadingPromise = this._fetchProducts()
      return this._loadingPromise
    },

    _price(product) {
      if (!product.price) return 0
      return Number(product.price.replace(/\s+/g, '').replace('руб.', '')) || 0
    },

    sortProducts(type) {
      this.sortType = type
      let sorted = [...this.filteredProducts]
      switch (type) {
        case 'price-asc':
          sorted.sort((a, b) => this._price(a) - this._price(b))
          break
        case 'price-desc':
          sorted.sort((a, b) => this._price(b) - this._price(a))
          break
        case 'newest':
          sorted.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
          break
        case 'popular':
          sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
          break
        default:
          sorted = [...this.products]
      }
      this.filteredProducts = sorted
    },

    async _fetchProducts() {
      try {
        const apiProducts = await fetchProducts().catch(() => [])

        if (Array.isArray(apiProducts) && apiProducts.length > 0) {
          apiProducts.forEach((p) => {
            p.popularity = p.popularity || Math.floor(Math.random() * 500)
            p.createdAt = p.createdAt || Date.now()
          })
          const combined = [...this.products]
          apiProducts.forEach((p) => {
            if (!p || !p.id) return
            if (!combined.some((local) => local.id === p.id)) {
              combined.push(p)
            }
          })

          this.products = combined
          this.filteredProducts = [...combined]
        }

        this.isLoaded = true
        console.log('Загрузка товаров завершена (локальные + API).')
      } catch (error) {
        console.error('Ошибка загрузки API. Используем только локальные:', error)
        this.isLoaded = true
      } finally {
        this._loadingPromise = null
      }
    },

    filterByCategory(category) {
      const list = category
        ? this.products.filter((p) => p.category === category)
        : [...this.products]

      this.filteredProducts = list.filter(Boolean)
    },

    addProduct(product) {
      if (!product || !product.id) return

      if (!this.products.some((p) => p.id === product.id)) {
        this.products.push(product)
        this.filteredProducts.push(product)
      }
    },
  },
})
