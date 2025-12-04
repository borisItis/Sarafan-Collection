<template>
  <div v-if="currentProduct" class="product-page">
    <p class="product-page__breadcrumbs">
      <router-link to="/" class="product-page__link">Главная</router-link>
      / <router-link to="/catalog" class="product-page__link">Каталог</router-link> /
      {{ currentProduct.title }}
    </p>
    <div class="product-detail">
      <div class="product-detail__gallery">
        <div class="product-detail__thumbnails">
          <img
            :src="currentProduct.image"
            :alt="currentProduct.title"
            class="product-detail__thumbnail"
          />
        </div>
        <div class="product-detail__main-image-wrapper">
          <img
            :src="currentProduct.image"
            :alt="currentProduct.title"
            class="product-detail__main-image"
          />
        </div>
      </div>
      <div class="product-detail__info">
        <h1 class="product-detail__title">{{ currentProduct.title }}</h1>
        <p class="product-detail__sku">Артикул: SHP00294</p>
        <p class="product-detail__price">{{ currentProduct.price }}</p>
        <div class="product-detail__description">
          <p>
            Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и
            реализации форм развития. Разнообразный и богатый опыт рамки и место обучения кадров
            способствует подготовки и реализации форм развития.
          </p>
        </div>
        <div class="product-detail__color-selector">
          <p class="product-detail__color-label">Цвет: Красный</p>
          <div class="product-detail__color-options">
            <span
              class="product-detail__color-swatch product-detail__color-swatch--red is-active"
            ></span>
            <span class="product-detail__color-swatch product-detail__color-swatch--black"></span>
          </div>
        </div>
        <div class="product-detail__size-selector">
          <select class="product-detail__size-select">
            <option disabled>Выберите размер</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <button class="product-detail__size-guide-btn">Таблица размеров</button>
        </div>
        <button class="product-detail__add-to-cart-btn" @click="addToCart">
          Добавить в корзину
        </button>
        <div class="product-detail__additional-info">
          <div class="info-block">
            <h3 class="info-block__title">Описание товара</h3>
          </div>
          <div class="info-block">
            <h3 class="info-block__title">Состав и уход</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="product-page-loading">
    <p v-if="!productsStore.isLoaded">Загрузка...</p>
    <p v-else>Товар не найден.</p>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '../store/products.js'
import { useCartStore } from '../store/cart.js'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.loadProducts()
  }
})

const productId = computed(() => Number(route.params.id))

const currentProduct = computed(() => productsStore.products.find((p) => p.id === productId.value))

function addToCart() {
  if (currentProduct.value) {
    cartStore.addToCart(currentProduct.value)
  }
}
if (productsStore.isLoaded && !currentProduct.value) {
  console.error(`Товар с ID ${productId.value} не найден.`)
}
</script>

<style scoped lang="scss">
$primary-color: #2d2d2d;
$accent-color: #cc2c2c;

.product-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;

  &__breadcrumbs {
    font-size: 14px;
    margin-bottom: 30px;
    color: #999;
  }

  &__link {
    color: #999;
    text-decoration: none;

    &:hover {
      color: $primary-color;
      text-decoration: underline;
    }
  }
}

.product-detail {
  display: flex;
  gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  &__gallery {
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    flex: 1 1 60%;
  }

  &__thumbnails {
    width: 90px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__thumbnail {
    width: 100%;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
    border: 1px solid #eee;
    transition: border-color 0.2s;

    &:hover {
      border-color: $primary-color;
    }
  }

  &__main-image-wrapper {
    flex-grow: 1;
  }

  &__main-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__info {
    flex: 1 1 40%;
  }

  &__title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  &__sku {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
  }

  &__price {
    font-size: 24px;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 30px;
  }

  &__description {
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 1.6;
    color: #333;
  }

  &__color-selector {
    margin-bottom: 20px;
  }

  &__color-label {
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__color-options {
    display: flex;
    gap: 10px;
  }

  &__color-swatch {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #ccc;

    &--red {
      background-color: #cc2c2c;
    }

    &--black {
      background-color: #000;
    }

    &.is-active {
      border: 2px solid $primary-color;
    }
  }

  &__size-selector {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__size-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  &__size-guide-btn {
    background: none;
    border: none;
    text-align: left;
    color: #555;
    text-decoration: underline;
    cursor: pointer;
  }

  &__add-to-cart-btn {
    width: 100%;
    padding: 15px 20px;
    background-color: $primary-color;
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-bottom: 20px;

    &:hover {
      background-color: lighten($primary-color, 15%);
    }
  }
}

.info-block {
  border-top: 1px solid #eee;
  padding: 15px 0;

  &__title {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
