<template>
  <div class="dropdown" @mouseenter="open = true" @mouseleave="open = false">
    <slot></slot>
    <div class="dropdown__menu" v-if="open">
      <div class="dropdown__content">
        <div class="dropdown__columns">
          <ul class="dropdown__list">
            <li class="dropdown__item" v-for="category in left" :key="category">
              <router-link
                :to="{ name: 'catalog', query: { category: category } }"
                class="dropdown__link"
              >
                {{ category }}
              </router-link>
            </li>
          </ul>
          <ul class="dropdown__list">
            <li class="dropdown__item" v-for="category in right" :key="category">
              <router-link
                :to="{ name: 'catalog', query: { category: category } }"
                class="dropdown__link"
              >
                {{ category }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="dropdown__image-wrapper">
          <img :src="ImageHeaderMenu" alt="" class="dropdown__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '../services/api.js'
import ImageHeaderMenu from '../assets/images/ImageMenu.jpg'

const open = ref(false)
const categories = ref([])

const left = [
  'Платья',
  'Пальто и тренчи',
  'Пуховики',
  'Куртки и жилеты',
  'Деним',
  'Блузы и топы',
  'Брюки',
  'Юбки',
]

const right = [
  'Рубашки',
  'Футболки',
  'Свитеры',
  'Толстовки',
  'Комплекты',
  'Комбинезоны',
  'Шорты',
  'Купальники',
]

async function loadProducts() {
  const products = await fetchProducts()
  categories.value = Array.from(new Set(products.map((p) => p.category)))
}

function linkTo(name) {
  return { name: 'catalog', query: { category: name.toLowerCase() } }
}

onMounted(loadProducts)
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 80rem;
    background: #fff;
    padding: 2.5rem 3.75rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    animation: fade 0.25s ease;
    z-index: 1000;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    gap: 8.125rem;
  }

  &__columns {
    display: flex;
    flex: 1;
    gap: 8.125rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 14px;
  }

  &__link {
    font-size: 1rem;
    color: rgba(45, 45, 45, 1);
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
      color: #e6cf03;
    }
  }

  &__image-wrapper {
    max-width: 26.875rem;
    flex-shrink: 0;
  }

  &__image {
    width: 100%;
    display: block;
    object-fit: cover;
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
