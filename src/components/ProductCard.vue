<template>
  <div class="product__card">
    <img :src="image" :alt="title" class="product-card__image" />
    <h3 class="product-card__title">{{ title }}</h3>
    <p class="product-card__price">{{ price }} ₽</p>
    <button class="product__card-button">Добавить в корзину</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  price: Number,
  image: String,
})
</script>

<style scoped>
.product__card {
  overflow: hidden;
  background-color: #fff;
  text-align: left;
  max-width: 16.875rem;
  display: flex;
  flex-direction: column;
}

.product__card-image {
  width: 100%;
  height: 22.063rem;
  object-fit: cover;
  margin-bottom: 1.25rem;
  transition: transform 0.3s ease;
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

.product__card-button {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(45, 45, 45, 1);
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: 400;
  align-self: flex-start;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6cf03;
  }
}

.product__card--large {
  height: 44.5rem;
}
</style>
