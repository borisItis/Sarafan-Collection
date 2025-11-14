<template>
  <section class="Inspired">
    <div class="Inspired__top">
      <h2 class="Inspired__title">Вдохновленные весной</h2>
      <div class="Inspired__description">
        <p>
          Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и
          реализации форм развития. С другой стороны реализация намеченных плановых заданий
          способствует подготовки и реализации форм развития.
        </p>
        <a href="#" class="Inspired__link">О бренде</a>
      </div>
    </div>
    <div class="Inspired__image">
      <img :src="InspiredImage1" alt="" class="Inspired__image-left" />
      <img :src="InspiredImage2" alt="" class="Inspired__image-right" />
    </div>
  </section>
</template>

<script setup>
import InspiredImage1 from '../assets/images/Inspired1.jpg'
import InspiredImage2 from '../assets/images/Inspired2.jpg'

const InspiredImage = [InspiredImage1, InspiredImage2]
</script>

<style scoped lang="scss">
.Inspired {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
  &__top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 7.75rem;
    margin-bottom: 3.75rem;
  }
  &__title {
    text-align: left;
    font-size: 1.563rem;
    font-weight: 400;
    letter-spacing: 3%;
    line-height: 113%;
    color: rgba(45, 45, 45, 1);
  }
  &__description p {
    max-width: 23.125rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0%;
    line-height: 140%;
    margin-bottom: 1.25rem;
    color: rgba(45, 45, 45, 1);
  }
  &__link {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0%;
    line-height: 140%;
    color: rgba(111, 111, 111, 1);
  }
  &__image {
    display: grid;
    grid-template-columns: 2fr 1.4fr;
    gap: 1.875rem;
    &-left {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    &-right {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
