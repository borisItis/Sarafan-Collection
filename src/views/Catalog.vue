<template>
  <section class="catalog-page">
    <p class="catalog-page__breadcrumbs">
      <router-link to="/" class="catalog-page__link">Главная</router-link>
      / Каталог
    </p>
    <h1 class="catalog-page__title">Каталог</h1>
    <div class="catalog-page__grid">
      <template v-for="(product, index) in visibleProducts" :key="product.id">
        <ProductCard
          v-if="(index + 1) % 3 !== 0"
          :product="product"
          :showAddToCart="true"
          :isInCartPage="false"
          @click="goToProduct(item.id)"
          class="catalog-page__card"
        />
        <ProductCardImage
          v-else
          :image="product.image"
          class="catalog-page__card catalog-page__card--big"
        />
      </template>
    </div>
    <div class="catalog-page__more" v-if="visibleCount < store.filteredProducts.length">
      <button class="catalog-page__more-btn" @click="loadMore">Показать ещё</button>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import ProductCardImage from '../components/ProductCardImage.vue'
import { useProductsStore } from '../store/products.js'

const route = useRoute()
const store = useProductsStore()
const visibleCount = ref(6)

const visibleProducts = computed(() => store.filteredProducts.slice(0, visibleCount.value))

function loadMore() {
  visibleCount.value += 6
}
watch(
  () => route.query.category,
  (newCat) => {
    store.filterByCategory(newCat)
    visibleCount.value = 6
  },
  { immediate: true },
)

function addToCart(product) {
  console.log('Добавлено в корзину:', product.title)
}

function goToProduct(productId) {
  router.push({ name: 'ProductDetail', params: { id: productId } })
}
</script>

<style scoped lang="scss">
.catalog-page {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.catalog-page__breadcrumbs {
  font-size: 0.813rem;
  margin-bottom: 0.625rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
}

.catalog-page__breadcrumbs a {
  color: #666;
  text-decoration: none;
}

.catalog-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29.375rem, max-content));
  gap: 3.125rem;
  justify-content: center;
}

.catalog-page__card {
  display: block;
  width: 100%;
  max-width: 29.375rem;
  margin-bottom: 0;
  break-inside: avoid;
  margin: 0 auto;
}

.catalog-page__card--big {
  grid-column: 1 / -1;
  width: 100%;

  img {
    width: 100%;
    display: block;
  }
}

.catalog-card {
  padding: 10px;
  text-align: left;
  transition: transform 0.2s;
  width: 100%;
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

.catalog-page__more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.catalog-page__more-btn {
  background: #2d2d2d;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #424242;
  }
}

/* Адаптив */
@media (max-width: 1200px) {
  .catalog-page__grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .catalog-page {
    padding: 1rem;
  }

  .catalog-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
