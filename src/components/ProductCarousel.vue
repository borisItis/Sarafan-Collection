<template>
  <section class="product__carousel-section">
    <h2 class="product__carousel-title">Успей купить</h2>
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
        <a :href="product.link" class="product__carousel-link">
          <div class="product__carousel-card">
            <div class="product__carousel-image">
              <img :src="product.image" :alt="product.title" class="product__carousel-image-img" />
            </div>
            <div class="product__carousel-info">
              <p class="product__carousel-paragraph">{{ product.title }}</p>
              <p class="product__carousel-price">{{ product.price }}</p>
            </div>
            <button class="product__carousel-favorite" @click="toggle">
              <i class="bi" :class="isFav ? 'bi-heart-fill' : 'bi-heart'"></i>
            </button>
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
import CollectionImage7 from '../assets/images/CollectionImage7.jpg'
import CollectionImage8 from '../assets/images/CollectionImage8.jpg'
import CollectionImage9 from '../assets/images/CollectionImage9.jpg'

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
    id: 5,
    image: CollectionImage5,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 6,
    image: CollectionImage6,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
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
    id: 7,
    image: CollectionImage7,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },
  {
    id: 8,
    image: CollectionImage8,
    title: 'Блейзер с декоративными пуговицами',
    price: '9 999 руб.',
    link: '#',
  },

  {
    id: 9,
    image: CollectionImage9,
    title: 'Блейзер с декоративными пуговицами',
    price: '4 500 руб.',
    link: '#',
  },
])

const modules = [Navigation]

const swiperBreakpoints = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
}
</script>

<style scoped>
.product__carousel-section {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.product__carousel-title {
  font-size: 1.563rem;
  line-height: 113%;
  color: rgba(45, 45, 45, 1);
  margin-bottom: 1.875rem;
  font-weight: 400;
  text-align: left;
  letter-spacing: 3%;
}

.product__carousel-card {
  display: flex;
  flex-direction: column;
}

.product__carousel-image {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;
}
.product__carousel-image-img {
  width: 100%;
  object-fit: cover;
  height: auto;
  margin-bottom: 1.25rem;
}

.product__carousel-link {
  text-decoration: none;
}

.product__carousel-info {
  margin-top: 15px;
}

.product__carousel-paragraph {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
  line-height: 113%;
  text-align: left;
  letter-spacing: 0%;
}

.product__carousel-price {
  font-size: 0.938rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
  line-height: 113%;
  text-align: left;
  letter-spacing: 0%;
  margin-top: 0.5rem;
}

.product__carousel-favorite {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  color: rgba(45, 45, 45, 1);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
}

.bi-heart-fill {
  color: #ff3b3b;
}
</style>
