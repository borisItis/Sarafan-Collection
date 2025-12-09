<template>
  <div class="product__card" @click="$emit('click', product.id)">
    <button class="product__card-favorite" @click.stop="toggle">
      <svg
        class="favorite-icon"
        :class="{ active: isFavorite }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21s-6.2-4.4-9.3-8.3A6.2 6.2 0 0 1 4.5 3a6 6 0 0 1 7.5 1.3A6 6 0 0 1 19.5 3a6.2 6.2 0 0 1 1.8 9.7C18.2 16.6 12 21 12 21z"
        />
      </svg>
    </button>
    <img :src="product.image" :alt="product.title" class="product__card-image" />
    <h2 class="product__card-title">{{ product.title }}</h2>
    <p class="product__card-price">{{ product.price }} ₽</p>
    <div class="product__card-buttons">
      <button
        v-if="showAddToCart && !isInCartPage"
        class="product__card-button"
        @click.stop="addToCart"
      >
        Добавить в корзину
      </button>
      <button
        v-if="isInCartPage"
        class="product__card-button product__card-button--remove"
        @click.stop="removeFromCart"
      >
        Удалить из корзины
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { useCartStore } from '../store/cart'

const store = useFavoritesStore()
const cartStore = useCartStore()

const props = defineProps({
  product: { type: Object, required: true },
  showAddToCart: { type: Boolean, default: true },
  isInCartPage: Boolean,
})

const isFavorite = computed(() => store.isFavorite(props.product.id))

function toggle() {
  store.toggleFavorite(props.product.id)
}

function addToCart() {
  cartStore.addToCart(props.product)
}

function removeFromCart() {
  cartStore.removeFromCart(props.product.id)
}
</script>

<style scoped lang="scss">
.product__card {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  text-align: left;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1.25rem;
  }

  &-title {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.13;
    margin-bottom: 0.5rem;
    color: #333;
  }

  &-price {
    font-size: 0.938rem;
    font-weight: 400;
    color: rgba(45, 45, 45, 1);
    margin-top: 0.5rem;
  }

  .product__card-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.563rem;
  }

  &-button {
    border: 1px solid rgba(45, 45, 45, 1);
    background: rgba(255, 255, 255, 1);
    color: rgba(45, 45, 45, 1);
    font-weight: 400;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background: rgba(45, 45, 45, 1);
      color: #fff;
      transition: 0.3s ease;
    }
  }

  .catalog-card__button--remove {
    border: 1px solid rgba(45, 45, 45, 1);
    background: rgba(255, 255, 255, 1);
    color: rgba(45, 45, 45, 1);
    font-weight: 400;
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    cursor: pointer;

    &:hover {
      background: rgba(45, 45, 45, 1);
      color: #fff;
      transition: 0.3s ease;
    }
  }

  &-favorite {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 3;
    padding: 0;
  }

  .favorite-icon {
    fill: none;
    stroke: rgba(45, 45, 45, 1);
    transition:
      fill 0.3s,
      stroke 0.3s;

    &.active {
      fill: #ff3b3b;
      stroke: #ff3b3b;
    }
  }
  @media (max-width: 30rem) {
    width: 100%;
    max-width: 100%;
  }
}
</style>
