<template>
  <section class="favorites__page">
    <p class="favorites__page-breadcrumbs"><router-link to="/">Главная</router-link> / Избранное</p>
    <h1 class="favorites__page-title">Избранное</h1>
    <div class="favorites__page-cards">
      <p class="favorites__page-empty" v-if="favoriteProducts.length === 0">
        Нет избранных товаров
      </p>
      <ProductCard
        v-for="item in favoriteProducts"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :image="item.image"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { products } from '../store/products'
import ProductCard from '../components/ProductCard.vue'

const store = useFavoritesStore()
const favoriteProducts = computed(() =>
  products.filter((product) => store.favorites.includes(product.id)),
)
</script>

<style scoped lang="scss">
.favorites__page {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
  &-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.875rem;
  }
  &-title {
    font-size: 1.563rem;
    font-weight: 400;
    margin-bottom: 3.125rem;
    color: rgba(45, 45, 45, 1);
  }
  &-breadcrumbs {
    font-size: 0.813rem;
    margin-bottom: 0.625rem;
    color: rgba(45, 45, 45, 1);
    font-weight: 400;

    a {
      color: #666;
      text-decoration: none;
    }
  }

  &-empty {
    font-size: 1.563rem;
    font-weight: 400;
    margin-bottom: 3.125rem;
    color: rgba(45, 45, 45, 1);
  }
}

@media (max-width: 64rem) {
  .favorites__page-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 48rem) {
  .favorites__page-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 32rem) {
  .favorites__page-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
