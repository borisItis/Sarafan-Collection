<template>
  <div class="product__card">
    <button class="product__card-favorite" @click="toggle">
      <i class="bi" :class="isFav ? 'bi-heart-fill' : 'bi-heart'"></i>
    </button>
    <img :src="image" :alt="title" class="product__card-image" />
    <h3 class="product__card-title">{{ title }}</h3>
    <p class="product__card-price">{{ price }} ₽</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../store/favorites'

const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  image: String,
})

const favoritesStore = useFavoritesStore()
const isFavorite = computed(() => favoritesStore.isFavorite(props.id))

const toggle = () => {
  favoritesStore.toggleFavorite({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
  })
}
</script>

<style scoped>
.product__card {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  text-align: left;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

.product__card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1.25rem;
}

.product__card-title {
  font-size: 1rem;
  font-weight: 400;
  line-height: 113%;
  margin-bottom: 0.5rem;
  color: #333;
}

.product__card-price {
  font-size: 0.938rem;
  font-weight: 400;
  color: rgba(45, 45, 45, 1);
  margin-top: 0.5rem;
}

.product__card-favorite {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 1);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
}

.bi-heart-fill {
  color: #ff3b3b;
}
</style>
