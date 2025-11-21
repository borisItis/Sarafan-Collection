import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductsStore } from '../store/products'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || [])
  const productsStore = useProductsStore()

  const favoriteProducts = computed(() =>
    favorites.value.map((id) => productsStore.products.find((p) => p.id === id)).filter(Boolean),
  )

  function toggleFavorite(id) {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter((item) => item !== id)
    } else {
      favorites.value.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function isFavorite(id) {
    return favorites.value.includes(id)
  }

  return { favorites, favoriteProducts, toggleFavorite, isFavorite }
})
