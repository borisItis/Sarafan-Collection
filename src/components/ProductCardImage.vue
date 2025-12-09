<template>
  <div class="product__card product__card--big" @click="$emit('click')">
    <img :src="image" alt="" class="product__card-image" />
    <h2 class="product__card-title">{{ title }}</h2>
    <p class="product__card-price">{{ price }}₽</p>
    <button class="product__card-button" @click.stop="$emit('add-to-cart')">
      Добавить в корзину
    </button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: Number,
})
</script>

<style scoped lang="scss">
.product__card {
  text-align: center;
}

.product__card--big {
  text-align: center;
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
  line-height: 1.13;
  text-align: left;
  margin-bottom: 0.5rem;
  color: #333;
}

.product__card-price {
  font-size: 0.938rem;
  font-weight: 400;
  text-align: left;
  color: rgba(45, 45, 45, 1);
  margin-top: 0.5rem;
}

.product__card-button {
  border: 1px solid rgba(45, 45, 45, 1);
  background: rgba(255, 255, 255, 1);
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
  display: flex;
  margin-top: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
}

.product__card-button:hover {
  background: rgba(45, 45, 45, 1);
  color: #fff;
  transition: 0.3s ease;
}
</style>
