<template>
  <section class="product__card">
    <div class="container">
      <h2 class="product__card-title">New Collection</h2>
      <div class="product__card-cards">
        <ProductCard
          v-for="(item, index) in products"
          :key="item.id"
          :id="item.id"
          :product="item"
          :class="{ 'product__card--large': index >= 4 }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import CollectionImage1 from '../assets/images/CollectionImage1.jpg'
import CollectionImage2 from '../assets/images/CollectionImage2.jpg'
import CollectionImage3 from '../assets/images/CollectionImage3.jpg'
import CollectionImage4 from '../assets/images/CollectionImage4.jpg'
import CollectionImage5 from '../assets/images/CollectionImage5.jpg'
import CollectionImage6 from '../assets/images/CollectionImage6.jpg'

const products = [
  { id: 1, image: CollectionImage1, title: 'Платье в полоску с запахом', price: 6999 },
  { id: 2, image: CollectionImage2, title: 'Объёмный пиджак', price: 12499 },
  { id: 3, image: CollectionImage3, title: 'Комбинезон с принтом', price: 6999 },
  { id: 4, image: CollectionImage4, title: 'Атласный топ-комбинация', price: 2799 },
  { id: 5, image: CollectionImage5, title: 'Блейзер с декоративными пуговицами', price: 9999 },
  { id: 6, image: CollectionImage6, title: 'Блейзер с декоративными пуговицами', price: 9999 },
]
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: 1.875rem;
}

.product__card-title {
  text-align: left;
  font-size: 1.563rem;
  font-weight: 400;
  letter-spacing: 3%;
  line-height: 113%;
  color: rgba(45, 45, 45, 1);
  margin-bottom: 1.875rem;
  padding: 7.5rem 0 0 0;
}

.product__card-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: start;
  gap: 1.875rem;
}

.product__card-cards > .product__card--large {
  grid-column: span 2;
  height: auto;
}

@media (max-width: 64rem) {
  .product__card-cards {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .product__card-title {
    font-size: 1.45rem;
  }
}

@media (max-width: 48rem) {
  .container {
    padding: 1.5rem;
  }

  .product__card-title {
    font-size: 1.35rem;
    margin-bottom: 1.5rem;
  }

  .product__card-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .product__card--large {
    grid-column: span 2;
  }
}

@media (max-width: 38.125rem) {
  .product__card-title {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .product__card-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 30rem) {
  .container {
    padding: 1rem;
  }

  .product__card-title {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  .product__card-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .product__card--large {
    grid-column: span 1;
  }
}

@media (max-width: 20rem) {
  .product__card-title {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .product__card-cards {
    gap: 0.8rem;
  }
}
</style>
