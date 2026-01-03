<template>
  <form @submit.prevent="submit" class="auth__form">
    <p>Введите ваш E-mail, чтобы получить ссылку для сброса пароля:</p>
    <input v-model="email" type="email" placeholder="E-mail" required />
    <button class="auth__button" type="submit">Отправить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '..//store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')

const submit = async () => {
  await auth.reset(email.value)
  router.push('/auth')
}
</script>

<style scoped lang="scss">
.auth__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 0;
    font-size: 14px;
    margin-bottom: 22px;
  }
  & button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    background: rgba(45, 45, 45, 1);
    color: rgba(255, 255, 255, 1);
    border: none;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      background-color: #424242;
    }
  }
}
</style>
