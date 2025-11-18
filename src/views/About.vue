<template>
  <section class="about__page">
    <p class="about__page-breadcrumbs"><router-link to="/">Главная</router-link> / О нас</p>
    <h1 class="about__page-title">О нас</h1>
    <div class="about__page-description">
      <p>
        Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и
        реализации форм развития. С другой стороны реализация намеченных плановых заданий позволяет
        оценить значение форм развития. Повседневная практика показывает, что рамки и место обучения
        кадров способствует подготовки и реализации форм развития.
      </p>
    </div>
    <div class="about__page-image">
      <img class="about__page-image-img" :src="AboutImage1" alt="" />
      <img class="about__page-image-img" :src="AboutImage2" alt="" />
    </div>
  </section>
</template>

<script setup>
import AboutImage1 from '../assets/images/AboutImage1.jpg'
import AboutImage2 from '../assets/images/AboutImage2.jpg'
</script>

<style scoped lang="scss">
.about__page {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.about__page-breadcrumbs {
  font-size: 0.813rem;
  margin-bottom: 0.625rem;
  color: rgba(45, 45, 45, 1);
  font-weight: 400;
}

.about__page-breadcrumbs a {
  color: #666;
  text-decoration: none;
}

.about__page-title {
  font-size: 1.563rem;
  font-weight: 400;
  margin-bottom: 3.125rem;
  color: rgba(45, 45, 45, 1);
}

.about__page-description {
  line-height: 140%;
  margin-bottom: 3.125rem;
  font-size: 1rem;
  color: rgba(45, 45, 45, 1);
  max-width: 60.625rem;
}

.about__page-image {
  display: flex;
  gap: 1.875rem;
  margin-bottom: 6.25rem;
  &-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
