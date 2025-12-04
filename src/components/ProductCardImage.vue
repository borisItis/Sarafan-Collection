<template>
  <div class="product__image-card">
    <img :src="image" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  image: String,
  alt: String,
})
</script>

<style scoped>
.product__image-card img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
