<template>
  <section class="profile__page">
    <p class="profile__page-breadcrumbs"><router-link to="/">Главная</router-link> / Профиль</p>
    <h1 class="profile__page-title">Профиль</h1>
    <p v-if="auth.user">
      {{ auth.user.email }}
    </p>
    <AuthModal v-if="showAuth" @close="showAuth = false" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

if (!auth.isAuth) {
  router.push('/auth')
}
</script>

<style scoped lang="scss">
.profile__page {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
  &-breadcrumbs {
    font-size: 0.813rem;
    margin-bottom: 0.625rem;
    color: rgba(45, 45, 45, 1);
    font-weight: 400;

    a {
      color: #666;
      text-decoration: none;
    }
  }
  &-title {
    font-size: 1.563rem;
    font-weight: 400;
    margin-bottom: 3.125rem;
    color: rgba(45, 45, 45, 1);
  }

  &-content {
    font-size: 16px;
  }

  &__logout {
    margin-top: 20px;
    border: 1px solid #000;
    background: transparent;
    padding: 10px 16px;
    cursor: pointer;
  }
}
</style>
