<template>
  <section class="catalog-page">
    <p class="catalog-page__breadcrumbs">
      <router-link to="/" class="catalog-page__link">Главная</router-link>
      / Каталог
    </p>
    <h1 class="catalog-page__title">Каталог</h1>
    <div class="catalog-page__grid">
      <span>Сортировать:</span>
      <select @change="products.sortProducts($event.target.value)" class="catalog-page__select">
        <option value="default">По умолчанию</option>
        <option value="price-asc">Цена: по возрастанию</option>
        <option value="price-desc">Цена: по убыванию</option>
        <option value="newest">Новинки</option>
        <option value="popular">Популярное</option>
      </select>
      <template v-for="(item, index) in visibleProducts">
        <ProductCard
          v-if="(index + 1) % 3 !== 0"
          :key="item.id"
          :product="item"
          class="catalog-page__card"
          @click="goToProduct(item.id)"
        />
        <ProductCardImage
          v-else
          :key="'big-' + item.id"
          :image="item.image"
          :title="item.title"
          :price="item.price"
          class="catalog-page__card catalog-page__card--big"
          @click="goToProduct(item.id)"
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
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import ProductCardImage from '../components/ProductCardImage.vue'
import { useProductsStore } from '../store/products.js'

const route = useRoute()
const router = useRouter()
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

function goToProduct(id) {
  if (!id) return
  router.push(`/product/${id}`)
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

  a {
    color: #666;
    text-decoration: none;
  }
}

.catalog-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.125rem;
  justify-items: center;
}

.catalog-page__card {
  max-width: 29.375rem;
  width: 100%;
}

.catalog-page__card--big {
  grid-column: 1 / -1;

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
  margin-bottom: 1.5rem;
  color: rgba(45, 45, 45, 1);
}

.catalog-card__price {
  font-weight: 400;
  font-size: 0.938rem;
  margin-bottom: 1.5rem;
  color: rgba(45, 45, 45, 1);
}

.catalog-card__button {
  background-color: rgba(45, 45, 45, 1);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(45, 45, 45, 0.8);
  }
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

.catalog-page__select {
  padding: 6px 30px 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff
    url("data:image/svg+xml;utf8,<svg fill='black' height='10' width='10' xmlns='http://www.w3.org/2000/svg'><polygon points='0,0 10,0 5,6'/></svg>")
    no-repeat right 10px center;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.catalog-page__select:hover {
  border-color: #999;
}

.catalog-page__select:focus {
  border-color: #333;
}

@media (max-width: 1200px) {
  .catalog-page__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .catalog-page {
    padding: 1rem;
  }

  .catalog-page__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .catalog-page__card--big {
    grid-column: 1 / -1;
  }
}
</style>
