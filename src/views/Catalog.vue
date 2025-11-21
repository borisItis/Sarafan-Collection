<template>
  <section class="catalog">
    <p class="сatalog__breadcrumbs"><router-link to="/">Главная</router-link> / О нас</p>
    <h1 class="catalog__title">Каталог</h1>
    <p v-if="category" class="catalog__subtitle">Фильтр по категории: {{ category }}</p>
    <div class="catalog-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="catalog-card">
        <img :src="product.image" :alt="product.title" class="catalog-card__image" />
        <h2 class="catalog-card__title">{{ product.title }}</h2>
        <p class="catalog-card__price">${{ product.price }}</p>
      </div>
    </div>
    <p v-if="!filteredProducts.length">Товары не найдены</p>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchProducts } from '../services/api.js'

const route = useRoute()
const products = ref([])
const filteredProducts = ref([])
const category = ref('')

function filterByCategory(category) {
  category.value = category
  filteredProducts.value = category
    ? products.value.filter((p) => p.category === category)
    : products.value
}

async function loadProducts() {
  products.value = await fetchProducts()
  filterByCategory(route.query.category)
}

onMounted(loadProducts)

watch(
  () => route.query.category,
  (newCategory) => {
    filterByCategory(newCategory)
  },
)
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
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.catalog-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
}
.catalog-card:hover {
  transform: scale(1.05);
}
.catalog-card__image {
  max-width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}
.catalog-card__title {
  font-size: 16px;
  margin: 5px 0;
}
.catalog-card__price {
  font-weight: bold;
  color: #333;
}
</style>
