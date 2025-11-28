<template>
  <div class="product__card">
    <slot></slot>
    <button class="product__card-favorite" @click="toggle">
      <svg
        class="favorite-icon"
        :class="{ active: isFavorite }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21s-6.2-4.4-9.3-8.3A6.2 6.2 0 0 1 4.5 3a6 6 0 0 1 7.5 1.3A6 6 0 0 1 19.5 3a6.2 6.2 0 0 1 1.8 9.7C18.2 16.6 12 21 12 21z"
        />
      </svg>
    </button>
    <img :src="image" :alt="title" class="product__card-image" />
    <h2 class="product__card-title">{{ title }}</h2>
    <p class="product__card-price">${{ price }}</p>
    <button v-if="showAddToCart" class="product__card-button" @click="addToCart(product)">
      Добавить в корзину
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
const store = useFavoritesStore()
const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  image: String,
  showAddToCart: Boolean,
  product: Object,
})

const isFavorite = computed(() => store.isFavorite(props.id))

function toggle() {
  store.toggleFavorite(props.id)
}

function addToCart(product) {
  cartStore.addToCart(product)
}
</script>

<style scoped lang="scss">
.product__card {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  text-align: left;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1.25rem;
  }

  &-title {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.13;
    margin-bottom: 0.5rem;
    color: #333;
  }

  &-price {
    font-size: 0.938rem;
    font-weight: 400;
    color: rgba(45, 45, 45, 1);
    margin-top: 0.5rem;
  }

  &-button {
    border: none;
    background-color: #ff3b3b;
    color: #fff;
    padding: 0.938rem 1.875rem;
    font-size: 0.938rem;
    font-weight: 400;
    cursor: pointer;
  }

  &-favorite {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 3;
    padding: 0;
  }

  .favorite-icon {
    fill: none;
    stroke: rgba(45, 45, 45, 1);
    transition:
      fill 0.3s,
      stroke 0.3s;

    &.active {
      fill: #ff3b3b;
      stroke: #ff3b3b;
    }
  }
}
</style>
