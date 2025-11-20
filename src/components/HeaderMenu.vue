<template>
  <!-- Только li элементы для вставки в ul -->
  <li
    v-for="item in menuItems"
    :key="item.title"
    class="header__menu-item"
    @mouseenter="openMenu(item)"
    @mouseleave="closeMenu"
  >
    <span class="header__menu-link">{{ item.title }}</span>

    <!-- Выпадающий блок -->
    <transition name="fade">
      <div v-if="activeMenu === item" class="mega-dropdown">
        <div class="mega-dropdown__content">
          <!-- Левые колонки -->
          <div class="mega-dropdown__columns">
            <div class="column" v-for="(col, i) in item.columns" :key="i">
              <router-link v-for="link in col" :key="link.text" :to="link.url" class="column__link">
                {{ link.text }}
              </router-link>
            </div>
          </div>

          <!-- Правая картинка -->
          <div class="mega-dropdown__image" v-if="item.image">
            <img :src="item.image" alt="preview" />
          </div>
        </div>
      </div>
    </transition>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref(null)

const openMenu = (item) => {
  activeMenu.value = item
}
const closeMenu = () => {
  activeMenu.value = null
}

// Данные меню
const menuItems = [
  { title: 'Новинки', columns: [], image: '' },
  {
    title: 'Одежда',
    columns: [
      [
        { text: 'Платья', url: '/catalog/dresses' },
        { text: 'Пальто и тренчи', url: '/catalog/coats' },
        { text: 'Пуховики', url: '/catalog/down' },
        { text: 'Куртки и жилеты', url: '/catalog/jackets' },
        { text: 'Деним', url: '/catalog/denim' },
        { text: 'Блузы и топы', url: '/catalog/tops' },
        { text: 'Брюки', url: '/catalog/pants' },
        { text: 'Юбки', url: '/catalog/skirts' },
      ],
      [
        { text: 'Рубашки', url: '/catalog/shirts' },
        { text: 'Футболки', url: '/catalog/tshirts' },
        { text: 'Свитеры', url: '/catalog/sweaters' },
        { text: 'Толстовки', url: '/catalog/hoodies' },
        { text: 'Комплекты', url: '/catalog/sets' },
        { text: 'Комбинезоны', url: '/catalog/jumpsuits' },
        { text: 'Шорты', url: '/catalog/shorts' },
        { text: 'Купальники', url: '/catalog/swimwear' },
      ],
    ],
    image: '/images/menu-photo.jpg',
  },
  { title: 'Аксессуары', columns: [], image: '' },
  { title: 'SALE', columns: [], image: '' },
]
</script>

<style scoped>
/* пример стилей, можно заменить на свои */
.header__menu-item {
  position: relative;
}

.mega-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 1000;
}

.mega-dropdown__columns {
  display: flex;
  gap: 2rem;
}

.column__link {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  text-decoration: none;
}

.mega-dropdown__image img {
  max-width: 200px;
  height: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
