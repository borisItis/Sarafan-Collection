<template>
  <section class="hero">
    <Swiper
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }"
      class="hero__slider"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="hero__slide">
          <img :src="slide.image" :alt="slide.title" />
          <div class="hero__content">
            <p class="hero__subtitle">{{ slide.subtitle }}</p>
            <h1 class="hero__title">{{ slide.title }}</h1>
            <router-link :to="{ name: 'catalog' }" class="hero__button">
              Перейти в каталог
            </router-link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperClass from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'

SwiperClass.use([Pagination, Autoplay])
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss">
.swiper .swiper-pagination .swiper-pagination-bullet {
  width: 0.813rem !important;
  height: 0.813rem !important;
  background: rgba(229, 229, 229, 0.46) !important;
  opacity: 1 !important;
  margin-bottom: 5rem !important;
}

.swiper .swiper-pagination .swiper-pagination-bullet-active {
  background: rgba(220, 219, 219, 1) !important;
}
.hero {
  width: 100%;
  min-height: auto;
  position: relative;
  overflow: hidden;

  &__slider {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .hero__slide {
    position: relative;
    width: 100%;
    height: 55rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero__content {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      color: #fff;
      z-index: 2;
      max-width: 30%;
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .hero__subtitle {
        font-size: 1.563rem;
        font-weight: 400;
        letter-spacing: 3%;
        text-align: center;
        line-height: 113%;
      }

      .hero__title {
        font-size: 3.938rem;
        margin-top: 1.563rem;
        font-weight: 500;
        line-height: 113%;
        letter-spacing: 3%;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Playfair Display', serif;
      }

      .hero__button {
        display: inline-block;
        align-self: center;
        background: rgba(255, 255, 255, 1);
        padding: 1.25rem 4.375rem;
        color: rgba(45, 45, 45, 1);
        font-weight: 400;
        font-size: 1rem;
        margin-top: 1.563rem;
        text-decoration: none;

        &:hover {
          background: #d6bf03;
          transition: all 0.3s ease;
        }
      }
    }
  }
}

@media (max-width: 64rem) {
  .hero .hero__slider .hero__slide .hero__content {
    max-width: 50%;
    right: 5%;
    text-align: center;

    .hero__title {
      font-size: 2rem;
    }
    .hero__subtitle {
      font-size: 1.25rem;
    }
    .hero__button {
      align-self: center;
      padding: 1rem 2.5rem;
    }
  }
}

@media (max-width: 48rem) {
  .hero .hero__slider .hero__slide .hero__content {
    max-width: 60%;
    right: 2rem;

    .hero__title {
      font-size: 1.5rem;
    }
    .hero__subtitle {
      font-size: 1rem;
    }
    .hero__button {
      align-self: center;
      font-size: 0.8rem;
      padding: 0.75rem 1.25rem;
    }
  }
}

@media (max-width: 30rem) {
  .hero .hero__slider .hero__slide .hero__content {
    width: 32.688rem;
    left: 50%;
    gap: 0.15rem;
    right: auto;
    transform: translate(-50%, -50%);
    text-align: center;

    .hero__title {
      font-size: 1.6rem;
    }
    .hero__subtitle {
      font-size: 0.875rem;
    }
    .hero__button {
      align-self: center;
      font-size: 0.875rem;
      padding: 0.25rem 0.55rem;
    }
  }
}
</style>
