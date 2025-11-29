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
  { id: 1, image: img1, title: 'Платье в полоску с запахом', price: '6 999 руб.', link: '#' },
  { id: 2, image: img2, title: 'Объемный пиджак', price: '12 499 руб.', link: '#' },
  { id: 3, image: img3, title: 'Комбинезон с принтом', price: '6 999 руб.', link: '#' },
  { id: 4, image: img4, title: 'Атласный топ-комбинация', price: '2 799 руб.', link: '#' },
  {
    id: 5,
    image: img5,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 6,
    image: img6,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 7,
    image: img7,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 8,
    image: img8,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 9,
    image: img9,
    title: 'Блейзер с декоративными пуговицами',
    price: '4 500 руб.',
    link: '#',
  },
]

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [...mockProducts],
    filteredProducts: [...mockProducts],
    isLoaded: false,
    _loadingPromise: null,
  }),
  actions: {
    loadProducts() {
      if (this.isLoaded) {
        return Promise.resolve()
      }
      if (this._loadingPromise) {
        return this._loadingPromise
      }

      this._loadingPromise = this._fetchProducts()
      return this._loadingPromise
    },

    async _fetchProducts() {
      try {
        const apiProducts = await fetchProducts()

        if (apiProducts && apiProducts.length > 0) {
          const allProductsMap = new Map()
          ;[...this.products, ...apiProducts].forEach((p) => allProductsMap.set(p.id, p))
          this.products = Array.from(allProductsMap.values())
          this.filteredProducts = [...this.products]
        }

        this.isLoaded = true
        console.log('Продукты успешно загружены из API.')
      } catch (error) {
        console.error('Ошибка при загрузке продуктов из API:', error)
      } finally {
        this._loadingPromise = null
      }
    },

    filterByCategory(category) {
      this.filteredProducts = category
        ? this.products.filter((p) => p.category === category)
        : [...this.products]
    },

    addProduct(product) {
      if (!this.products.some((p) => p.id === product.id)) {
        this.filteredProducts.push(product)
      }
    },
  },
})
