import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
  }),
  getters: {
    total: (state) => state.items.reduce((s, i) => s + i.product.price * i.qty, 0),
    count: (state) => state.items.reduce((s, i) => s + i.qty, 0),
  },
  actions: {
    addToCart(product, qty = 1) {
      const found = this.items.find((i) => i.product.id === product.id)
      if (found) found.qty += qty
      else this.items.push({ product, qty })
      this._save()
    },
    remove(productId) {
      this.items = this.items.filter((i) => i.product.id !== productId)
      this._save()
    },
    updateQty(productId, qty) {
      const it = this.items.find((i) => i.product.id === productId)
      if (it) it.qty = qty
      this._save()
    },
    _save() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
  },
})
