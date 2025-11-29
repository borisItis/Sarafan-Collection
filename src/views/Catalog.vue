<template>
  <section class="catalog">
    <p class="сatalog__breadcrumbs"><router-link to="/">Главная</router-link> / Каталог</p>
    <h1 class="catalog__title">Каталог</h1>
    <p v-if="category" class="catalog__subtitle">Фильтр по категории: {{ store.category }}</p>
    <div class="catalog-grid">
      <ProductCard
        v-for="product in store.filteredProducts"
        :key="product.id"
        :product="product"
        :showAddToCart="true"
        @add-to-cart="addToCart"
        class="catalog-card"
      >
        <img :src="product.image" :alt="product.title" class="catalog-card__image" />
        <h2 class="catalog-card__title">{{ product.title }}</h2>
        <p class="catalog-card__price">${{ product.price }}</p>
        <button class="catalog-card__button" @click="addToCart(product)">Добавить в корзину</button>
      </ProductCard>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { useProductsStore } from '../store/products.js'

const route = useRoute()
const store = useProductsStore()

onMounted(() => store.loadProducts())

watch(
  () => route.query.category,
  (newCat) => store.filterByCategory(newCat),
)

function addToCart(product) {}
</script>

<style scoped lang="scss">
.catalog {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.сatalog__breadcrumbs {
  font-size: 0.813rem;
  margin-bottom: 0.625rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
}

.сatalog__breadcrumbs a {
  color: #666;
  text-decoration: none;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;
}
.catalog-card {
  padding: 10px;
  text-align: left;
  transition: transform 0.2s;
}

.catalog-card__image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}
.catalog-card__title {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.13;
  margin-bottom: 1.5rem;
  color: rgba(45, 45, 45, 1);
}
.catalog-card__price {
  font-weight: 400;
  font-size: 0.938rem;
  line-height: 1.13;
  margin-bottom: 1.5rem;
  color: rgba(45, 45, 45, 1);
}
.catalog-card__button {
  background-color: rgba(45, 45, 45, 1);
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
}
.catalog-card__button:hover {
  background-color: rgba(45, 45, 45, 0.8);
}
</style>
