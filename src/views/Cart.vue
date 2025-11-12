<template>
  <div>
    <Header />
    <h1>Корзина</h1>
    <div v-if="cart.items.length === 0">Ваша корзина пуста</div>
    <div v-else>
      <div v-for="it in cart.items" :key="it.product.id" class="cart-item">
        <img :src="it.product.image" />
        <div>{{ it.product.name }}</div>
        <input type="number" v-model.number="it.qty" @change="update(it)" min="1" />
        <button @click="remove(it.product.id)">Удалить</button>
      </div>
      <div class="total">Итого: {{ cart.total }}</div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { useCartStore } from '../store/cart'

export default {
  components: { Header },
  setup() {
    const cart = useCartStore()

    function update(it) {
      cart.updateQty(it.product.id, it.qty)
    }

    function remove(id) {
      cart.remove(id)
    }

    return { cart, update, remove }
  },
}
</script>

<style scoped lang="scss"></style>
