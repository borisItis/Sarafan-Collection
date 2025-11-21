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
      @swiper="onSwiper"
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
          </div>
        </a>
        <button class="product__carousel-favorite" @click="toggleFavorite(product.id)">
          <svg
            class="product__carousel-favorite-icon"
            :class="{ active: isFavorite(product.id) }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21s-6.2-4.4-9.3-8.3A6.2 6.2 0 0 1 4.5 3a6 6 0 0 1 7.5 1.3A6 6 0 0 1 19.5 3a6.2 6.2 0 0 1 1.8 9.7C18.2 16.6 12 21 12 21z"
            />
          </svg>
        </button>
      </swiper-slide>
      <div class="custom-swiper-button-prev">&#10094;</div>
      <div class="custom-swiper-button-next">&#10095;</div>
    </swiper>
  </section>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const store = useFavoritesStore()

const isFavorite = (id) => store.isFavorite(id)
const toggleFavorite = (id) => store.toggleFavorite(id)

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
const prevRef = ref(null)
const nextRef = ref(null)
let swiperInstance = null

function onSwiper(swiper) {
  swiperInstance = swiper

  nextTick(() => {
    swiperInstance.params.navigation.prevEl = prevRef.value
    swiperInstance.params.navigation.nextEl = nextRef.value
    swiperInstance.navigation.init()
    swiperInstance.navigation.update()
  })
}

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

<style scoped lang="scss">
.product__carousel-section {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;

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

    &-img {
      width: 100%;
      object-fit: cover;
      height: auto;
      margin-bottom: 1.25rem;
    }
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
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 3;
    padding: 0;

    .product__carousel-favorite-icon {
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
  }

  .custom-swiper-button-prev,
  .custom-swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    background: rgba(45, 45, 45, 0.69);
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    font-size: 1.25rem;
    transition: background 0.3s;

    &:hover {
      background: rgba(45, 45, 45, 1);
    }
  }

  .custom-swiper-button-prev {
    left: 0.625rem;
  }

  .custom-swiper-button-next {
    right: 0.625rem;
  }
}
</style>
