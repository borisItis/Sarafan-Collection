<template>
  <Header />
  <main>
    <HeroSlider :slides="slider" />
    <Product />
  </main>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSlider from '../components/HeroSlider.vue'
import Product from '../components/Product.vue'
import HeroImage1 from '../assets/images/HeroImage1.jpg'
import HeroImage2 from '../assets/images/HeroImage2.jpg'
import HeroImage3 from '../assets/images/HeroImage3.jpg'

const slider = [
  {
    id: 1,
    image: HeroImage1,
    title: 'with love, to you',
    subtitle: 'Весна-лето 2025',
  },
  {
    id: 2,
    image: HeroImage2,
    title: 'with love, to you',
    subtitle: 'Весна-лето 2025',
  },
  {
    id: 3,
    image: HeroImage3,
    title: 'with love, to you',
    subtitle: 'Весна-лето 2025',
  },
]
</script>

<style scoped lang="scss"></style>
