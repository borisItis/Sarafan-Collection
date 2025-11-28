<template>
  <section class="cart__page">
    <p class="cart__page-breadcrumbs"><router-link to="/">Главная</router-link> / Корзина</p>
    <h1 class="cart__page-title">Корзина</h1>
    <div class="cart__page-cards">
      <p class="cart__page-empty" v-if="cartProducts.length === 0">Корзина пуста</p>
      <ProductCard
        v-for="item in cartProducts"
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

<script>
import { products } from '../store/products'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../store/cart'

export default {
  components: {
    ProductCard,
  },
  setup() {
    const store = useCartStore()
    return {
      products,
      store,
      cartProducts: computed(() => store.cart),
    }
  },
}
</script>

<style scoped lang="scss">
.cart__page {
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
