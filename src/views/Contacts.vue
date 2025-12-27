<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="contacts__info">
        <div class="contacts__breadcrumbs">
          <router-link to="/">Главная</router-link> / Контакты
        </div>
        <h1 class="contacts__title">Связаться с нами</h1>
        <div class="contacts__block">
          <h3 class="contacts__block-title">Телефон</h3>
          <p class="contacts__block-text">8 977 409-41-99</p>
        </div>
        <div class="contacts__block">
          <h3 class="contacts__block-title">E-mail</h3>
          <p class="contacts__block-text">online_store@gmail.com</p>
        </div>
        <div class="contacts__block">
          <h3 class="contacts__block-title">Адрес шоурума</h3>
          <p class="contacts__block-text">
            Москва, ул. Новый Арбат 36/3, ТЦ «Сфера», 1 этаж Часы работы Пн-Вс 12:00 – 21:00
          </p>
        </div>
        <p class="contacts__text">
          Если у вас есть идеи, пожелания, замечания — пишите! И мы сделаем все, чтобы стать лучше.
        </p>
        <form class="contacts__form" @submit.prevent="submitForm">
          <input type="text" placeholder="Имя *" v-model="form.name" required />
          <input type="tel" placeholder="Телефон *" v-model="form.phone" required />
          <textarea
            rows="4"
            placeholder="Опишите суть вашего обращения *"
            v-model="form.message"
            required
          ></textarea>
          <p class="contacts__note">* Поля, обязательные для заполнения</p>
          <p class="contacts__policy">
            Нажимая на кнопку «Отправить», я соглашаюсь с политикой конфиденциальности и обработки
            персональных данных
          </p>
          <button class="contacts__button" type="submit">Отправить</button>
        </form>
      </div>
      <div class="contacts__map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.6208%2C55.7539&z=15&mode=search&text=Москва%2C%20Новый%20Арбат%2036%2C%20ТЦ%20Сфера&ol=biz"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

function submitForm() {
  alert('Спасибо! Мы с вами свяжемся.')
}
</script>

<style scoped lang="scss">
.contacts {
  &__container {
    width: 100%;
    padding: 1.875rem;
    margin-top: 7.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    &__breadcrumbs {
      font-size: 0.813rem;
      margin-bottom: 0.625rem;
      color: rgba(45, 45, 45, 1);
      font-weight: 400;
    }
    a {
      color: #666;
      text-decoration: none;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-size: 25px;
    margin-bottom: 50px;
    font-weight: 400;
    color: rgba(45, 45, 45, 1);
  }

  &__block {
    margin-bottom: 40px;
    &-title {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 400;
      color: rgba(45, 45, 45, 1);
    }
    &-text {
      font-size: 16px;
      font-weight: 400;
      color: rgba(45, 45, 45, 1);
    }
  }

  &__text {
    margin: 20px 0;
    color: rgba(45, 45, 45, 1);
  }

  &__form {
    input,
    textarea {
      width: 100%;
      padding: 10px 0;
      border: none;
      border-bottom: 1px solid #ddd;
      margin-bottom: 40px;
      font-size: 14px;
      color: rgba(196, 196, 196, 1);
      font-weight: 400;
    }
    .contacts__note {
      font-size: 14px;
      color: rgba(196, 196, 196, 1);
      font-weight: 400;
      margin-top: 30px;
    }
    .contacts__policy {
      font-size: 14px;
      color: rgba(111, 111, 111, 1);
      font-weight: 400;
      margin-top: 10px;
    }
  }

  &__button {
    background: rgba(45, 45, 45, 1);
    color: rgba(255, 255, 255, 1);
    padding: 20px 140px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-top: 40px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: rgba(66, 66, 66, 1);
    }
  }

  &__map {
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>
