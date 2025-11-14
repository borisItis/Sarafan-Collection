<template>
  <section class="product-carousel-section">
    <h2 class="section-title">Успей купить</h2>
    <swiper
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="30"
      :breakpoints="swiperBreakpoints"
      :navigation="{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }"
      class="product-swiper"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <a :href="product.link" class="product-card-link">
          <div class="product-card">
            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.title" class="product-image" />
            </div>
            <div class="product-details">
              <p class="product-title">{{ product.title }}</p>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CollectionImage1 from '../assets/images/CollectionImage1.jpg'
import CollectionImage2 from '../assets/images/CollectionImage2.jpg'
import CollectionImage3 from '../assets/images/CollectionImage3.jpg'
import CollectionImage4 from '../assets/images/CollectionImage4.jpg'
import CollectionImage5 from '../assets/images/CollectionImage5.jpg'
import CollectionImage6 from '../assets/images/CollectionImage6.jpg'
const products = reactive([
  {
    id: 1,
    image: CollectionImage1,
    title: 'Платье в полоску с запахом',
    price: '6 999 руб.',
    link: '#',
  },
  {
    id: 2,
    image: CollectionImage2,
    title: 'Объемный пиджак',
    price: '12 499 руб.',
    link: '#',
  },
  {
    id: 3,
    image: CollectionImage3,
    title: 'Комбинезон с принтом',
    price: '6 999 руб.',
    link: '#',
  },
  {
    id: 4,
    image: CollectionImage4,
    title: 'Атласный топ-комбинация',
    price: '2 799 руб.',
    link: '#',
  },
  {
    id: 5,
    image: CollectionImage5,
    title: 'Пятое платье',
    price: '4 500 руб.',
    link: '#',
  },
  {
    id: 6,
    image: CollectionImage6,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
])

// --- 2. Настройки Swiper ---
const modules = [Navigation]

const swiperBreakpoints = {
  // На мобильных (от 0px):
  0: {
    slidesPerView: 1.2, // Показываем 1 полный и часть следующего
    spaceBetween: 10,
  },
  // На планшетах (от 768px):
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  // На десктопах (от 1024px):
  1024: {
    slidesPerView: 4, // 4 товара, как на макете
    spaceBetween: 30,
  },
}
</script>

<style scoped>
.product-carousel-section {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.section-title {
  font-size: 1.563rem;
  line-height: 113%;
  color: rgba(45, 45, 45, 1);
  margin-bottom: 1.875rem;
  font-weight: 400;
  text-align: left;
  letter-spacing: 3%;
}

.product-card {
  display: flex;
  flex-direction: column;
}

.product-image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;
}
.product-image {
  max-width: 100%;
  object-fit: cover;
  height: auto;
  margin-bottom: 1.25rem;
}

.product-card-link {
  text-decoration: none;
}

.product-details {
  margin-top: 15px;
}

.product-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
  line-height: 113%;
  text-align: left;
  letter-spacing: 0%;
}

.product-price {
  font-size: 0.938rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
  line-height: 113%;
  text-align: left;
  letter-spacing: 0%;
  margin-top: 0.5rem;
}
</style>
