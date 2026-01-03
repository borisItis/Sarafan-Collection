<template>
  <section class="auth">
    <p class="auth__breadcrumbs"><router-link to="/">Главная</router-link> / Профиль</p>
    <div class="auth__container">
      <h1 class="auth__title">{{ currentTitle }}</h1>
      <router-view />
      <div class="auth__actions">
        <router-link
          v-if="route.name !== 'Register'"
          class="auth__button--secondary"
          to="/auth/register"
        >
          Регистрация
        </router-link>
        <span class="auth__divider">/</span>
        <router-link v-if="route.name !== 'Reset'" class="auth__button--secondary" to="/auth/reset">
          Забыли пароль?
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../store/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const currentTitle = computed(() => {
  if (route.name === 'Register') return 'Регистрация'
  if (route.name === 'Reset') return 'Восстановление пароля'
  return 'Вход'
})

async function submit() {
  try {
    await auth.login(email.value, password.value)
    router.push('/profile')
  } catch (err) {
    console.error('Ошибка входа:', err)
    alert('Неверный email или пароль')
  }
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;

  &__container {
    width: 420px;
    margin: 0 auto;
    text-align: center;
  }
  &__breadcrumbs {
    font-size: 0.813rem;
    margin-bottom: 0.625rem;
    color: rgba(45, 45, 45, 1);
    font-weight: 400;
    text-align: left;

    a {
      color: #666;
      text-decoration: none;
    }
  }

  &__title {
    font-size: 25px;
    margin-bottom: 40px;
  }

  &__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 0;
    font-size: 14px;
    margin-bottom: 22px;

    &:focus {
      outline: none;
      border-bottom: 1px solid #000;
    }
  }

  &__button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    background: rgba(45, 45, 45, 1);
    color: rgba(255, 255, 255, 1);
    border: none;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .auth__button--secondary {
    background: none;
    color: rgba(45, 45, 45, 1);
    border: none;
    padding: 0;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }

  &__link {
    margin-top: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
    font-size: 14px;
    text-decoration: none;
  }

  &__divider {
    margin: 0 5px;
    color: #555;
  }
  @media (max-width: 768px) {
    .auth__container {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    .auth__container {
      width: 100%;
      padding: 0 16px;
    }

    .auth__title {
      font-size: 20px;
    }

    .auth__button {
      width: 100%;
    }
  }
}
</style>
