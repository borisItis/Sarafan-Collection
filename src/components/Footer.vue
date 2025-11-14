<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link to="/" class="footer__logo">
        <img src="../assets/images/FooterLogo.svg" alt="Sarafan" />
      </router-link>
      <div v-for="section in footerLinks" :key="section.title" class="footer__nav-links">
        <h4 class="footer__nav-title">{{ section.title }}</h4>
        <ul class="footer__nav-list">
          <li v-for="link in section.links" :key="link.text">
            <a :href="link.url" class="footer__nav-link">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="footer__copyright-text">
        Все права защищены.Пользовательское соглашение.Политика конфиденциальности <br />
        © 2022 sarafancollection.ru
      </p>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  {
    title: 'Помощь',
    links: [
      { text: 'Оплата', url: '#' },
      { text: 'Доставка', url: '#' },
      { text: 'Возврат и обмен', url: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { text: 'О нас', url: '#' },
      { text: 'Наши магазины', url: '#' },
      { text: 'Контакты', url: '#' },
    ],
  },
  {
    title: 'Следите за нами',
    links: [
      { text: 'TikTok', url: '#' },
      { text: 'Vk', url: '#' },
      { text: 'Telegram', url: '#' },
      { text: 'Pinterest', url: '#' },
    ],
  },
]
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 1.875rem;
  margin-top: 7.5rem;
}

.footer__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.813rem;
}

.footer__nav-title {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1.688rem;
  text-transform: uppercase;
  color: rgba(45, 45, 45, 1);
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__nav-link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(45, 45, 45, 1);
  display: block;
  margin-bottom: 10px;
}

.footer__copyright {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 105%;
  color: rgba(206, 206, 206, 1);
}
</style>
