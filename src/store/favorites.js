import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    isFavorite(id) {
      return this.favorites.includes(id)
    },
    toggleFavorite(id) {
      if (this.isFavorite(id)) {
        this.favorites = this.favorites.filter((f) => f !== id)
      } else {
        this.favorites.push(id)
      }
    },
  },
})
