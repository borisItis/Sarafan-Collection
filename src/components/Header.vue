<template>
  <header class="header">
    <nav class="header__nav">
      <ul :class="['header__menu', { 'header__menu--active': menuOpen }]">
        <li v-for="link in links" :key="link.label" class="header__menu-item">
          <HeaderMenu>
            <router-link
              to="/catalog?category=clothes"
              class="header__menu-link"
              :to="link.to"
              active-class="header__menu-link--active"
            >
              {{ link.label }}
            </router-link>
          </HeaderMenu>
        </li>
      </ul>
      <div class="header__burger" @click="toggleMenu">
        <i class="bi bi-list"></i>
      </div>
      <div class="header__nav-logo">
        <router-link class="header__nav-logo-img" to="/">
          <img src="../assets/images/headerLogo.svg" alt="Sarafan" />
        </router-link>
      </div>
      <div class="header__nav-right">
        <div class="header__nav-right-search-wrapper">
          <i class="bi bi-search"></i>
          <input
            v-model="search"
            class="header__nav-right-search"
            type="text"
            @keyup.enter="onSearch"
            placeholder="Поиск"
          />
        </div>
        <div class="header__nav-right-icons">
          <router-link to="/favorites" class="header__nav-right-icon" title="Избранное">
            <img
              src="../assets/images/favorite.svg"
              alt="Favorite"
              class="header__favorite-icon"
              :class="{ active: isFavorite }"
            />
            <span class="header__favorite-count">{{ store.favorites.length }}</span>
          </router-link>
          <router-link to="/cart" class="header__nav-right-icon" title="Корзина">
            <img
              src="../assets/images/cart.svg"
              alt="Cart"
              class="header__favorite-icon"
              :class="{ active: cartStore.cart.length > 0 }"
            />
            <span class="header__cart-count">{{ cartStore.cart.length }}</span>
          </router-link>
          <router-link to="/profile" class="header__nav-right-icon" title="Профиль">
            <img src="../assets/images/person.svg" alt="Profile" class="header__profile-icon" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { useFavoritesStore } from '../store/favorites'
import HeaderMenu from '../components/HeaderMenu.vue'

const store = useFavoritesStore()
const cartStore = useCartStore()
const menuOpen = ref(false)
const search = ref('')
const router = useRouter()
const isFavorite = computed(() => store.favorites.length > 0)

const links = [
  { label: 'Новинки', to: { name: 'catalog', query: { category: 'new' } } },
  { label: 'Одежда', to: { name: 'catalog', query: { category: 'clothes' } } },
  { label: 'Аксессуары', to: { name: 'catalog', query: { category: 'accessories' } } },
  { label: 'SALE', to: { name: 'catalog', query: { sale: 'true' } } },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function onSearch() {
  if (search.value.trim() === '') return
  router.push({ path: '/catalog', query: { search: search.value } })
  search.value = ''
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }

  &__nav-logo {
    &-img {
      display: flex;
      align-items: center;
      img {
        width: 11.25rem;
      }
    }
  }

  &__nav-right {
    display: flex;
    align-items: center;
    gap: 4.375rem;

    &-search-wrapper {
      position: relative;

      i {
        position: absolute;
        left: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(111, 111, 111, 1);
        font-size: 1.188rem;
        pointer-events: none;
        transition:
          color 0.3s,
          transform 0.2s;

        &:hover {
          color: #e6cf03;
          transform: scale(1.05);
        }
      }

      input {
        background: transparent;
        border: none;
        border-bottom: 0.125rem solid #ccc;
        padding: 0.375rem 0.5rem 0.375rem 2rem;
        margin-left: 0.5rem;
        font-size: 1rem;
        color: rgba(111, 111, 111, 1);
        outline: none;
        width: 12rem;
        transition:
          border-color 0.3s,
          width 0.3s;

        &::placeholder {
          font-size: 1rem;
          color: rgba(111, 111, 111, 1);
        }
      }
    }

    &-icons {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      .header__nav-right-icon {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 0.25rem;
        font-size: 1.5rem;
        color: rgba(45, 45, 45, 1);
        transition:
          color 0.3s,
          transform 0.2s;

        .header__favorite-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: filter 0.3s;

          &.active {
            filter: none;
          }
        }

        .header__favorite-count {
          position: absolute;
          top: -0.25rem;
          right: -0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.15rem;
          height: 1.15rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          background-color: #ff3b3b;
          border-radius: 50%;
        }

        .header__cart-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: filter 0.3s;

          &.active {
            filter: none;
          }
        }
        .header__cart-count {
          position: absolute;
          top: -0.25rem;
          right: -0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.15rem;
          height: 1.15rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          background-color: #ff3b3b;
          border-radius: 50%;
        }

        .header__profile-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: filter 0.3s;

          &.active {
            filter: none;
          }
        }
      }
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 2.75rem;
    list-style: none;
    margin: 0;
    padding: 0;

    &-item {
      cursor: pointer;
    }

    &-link {
      text-decoration: none;
      color: rgba(45, 45, 45, 1);
      font-weight: 400;
      font-size: 1rem;

      &:hover {
        color: #e6cf03;
        transition: all 0.3s ease;
      }
    }
  }
}

.header__burger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

@media (max-width: 64rem) {
  .header__nav {
    padding: 1rem 1.5rem;
  }

  .header__nav-right {
    gap: 1rem;
  }

  .header__nav-logo-search {
    width: 180px;
  }
}

@media (max-width: 48rem) {
  .header__nav {
    padding: 0.75rem 1rem;
  }

  .header__nav-logo-search {
    width: 140px;
  }

  .header__nav-right {
    gap: 0.75rem;
  }

  .header__nav-logo {
    &-img {
      img {
        width: 7.375rem;
      }
    }
  }

  .header__menu {
    gap: 0.75rem;
  }
}

@media (max-width: 58.75rem) {
  .header__nav-logo {
    &-img {
      img {
        width: 8.375rem;
      }
    }

    &-search-wrapper {
      i {
        display: block;
        cursor: pointer;
      }
    }

    &-search {
      display: none;
    }

    &-icon {
      font-size: 1.25rem;
    }
  }
}

@media (max-width: 38rem) {
  .header__nav {
    padding: 0.5rem 1rem;
  }

  .header__nav-right {
    gap: 0.5rem;
  }

  .header__nav-logo {
    &-img {
      img {
        width: 7rem;
      }
    }
    &-search-wrapper {
      width: 100%;
      flex: 1;
      i {
        display: none;
      }
    }

    &-search {
      display: none;
    }

    &-icon {
      font-size: 1.25rem;
    }
  }
  .header__menu {
    display: none;
    position: absolute;
    top: 100%;
    width: 50%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &--active {
      display: flex;
    }

    &-item {
      text-align: center;
    }

    &-link {
      display: block;
      padding: 0.75rem 0;
    }
  }
  .header__burger {
    display: block;
    order: 1;
  }
}

@media (max-width: 30rem) {
  .header__nav {
    padding: 0.5rem 1rem;
    position: relative;
  }

  .header__burger {
    display: block;
    order: 1;
  }

  .header__nav-logo {
    order: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &-img {
      img {
        width: 7.5rem;
      }
    }
  }

  .header__nav-right {
    order: 3;
    gap: 0.5rem;

    &-search-wrapper {
      width: 100%;
      flex: 1;
      i {
        display: none;
      }
    }

    &-search {
      display: none;
    }

    &-icon {
      font-size: 1.25rem;
    }
  }

  .header__menu {
    display: none;
    position: absolute;
    top: 100%;
    width: 50%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &--active {
      display: flex;
    }

    &-item {
      text-align: center;
    }

    &-link {
      display: block;
      padding: 0.75rem 0;
    }
  }
}
</style>
