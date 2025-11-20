import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || [])

  function save() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function toggleFavorite(id) {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter((item) => item !== id)
    } else {
      favorites.value.push(id)
    }
    save()
  }

  function isFavorite(id) {
    return favorites.value.includes(id)
  }

  return { favorites, toggleFavorite, isFavorite }
})
