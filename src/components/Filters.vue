<template></template>

<script setup>
import { ref, watch } from 'vue'

const search = ref('')

defineProps({
  modelValue: String,
})

watch(search, (val) => {
  emit('update:modelValue', val)
})
</script>
