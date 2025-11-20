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

export const products = [
  {
    id: 1,
    image: img1,
    title: 'Платье в полоску с запахом',
    price: '6 999 руб.',
    link: '#',
  },
  {
    id: 2,
    image: img2,
    title: 'Объемный пиджак',
    price: '12 499 руб.',
    link: '#',
  },
  {
    id: 3,
    image: img3,
    title: 'Комбинезон с принтом',
    price: '6 999 руб.',
    link: '#',
  },
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
    id: 4,
    image: img4,
    title: 'Атласный топ-комбинация',
    price: '2 799 руб.',
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
