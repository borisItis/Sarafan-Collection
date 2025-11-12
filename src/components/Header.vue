<template>
  <header class="header">
    <nav class="header__nav">
      <ul :class="['header__menu', { 'header__menu--active': menuOpen }]">
        <li v-for="link in links" :key="link.label" class="header__menu-item">
          <router-link
            class="header__menu-link"
            :to="link.to"
            active-class="header__menu-link--active"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>
      <div class="header__burger" @click="toggleMenu">
        <i class="bi bi-list"></i>
      </div>
      <div class="header__nav-logo">
        <a class="header__nav-logo-img" href="#!">
          <img src="../assets/images/headerLogo.svg" alt="Sarafan" />
        </a>
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
            <i class="bi bi-heart"></i>
          </router-link>
          <router-link to="/cart" class="header__nav-right-icon" title="Корзина">
            <i class="bi bi-cart"></i>
            <span v-if="cartCount > 0" class="header__nav-right-icon-count">
              {{ cartCount }}
            </span>
          </router-link>
          <router-link to="/profile" class="header__nav-right-icon" title="Профиль">
            <i class="bi bi-person"></i>
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

const cartStore = useCartStore()
const menuOpen = ref(false)
const search = ref('')
const router = useRouter()
const cartCount = computed(() => (Array.isArray(cartStore.cart) ? cartStore.cart.length : 0))

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
  router.push({ name: 'catalog', query: { q: search.value } })
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
        font-size: 1.5rem;
        cursor: pointer;
        color: rgba(45, 45, 45, 1);
        transition:
          color 0.3s,
          transform 0.2s;

        &:hover {
          color: #e6cf03;
          transform: scale(1.1);
        }

        &-count {
          position: absolute;
          top: -0.3125rem;
          right: -0.5rem;
          color: white;
          font-size: 0.6875rem;
          font-weight: bold;
          padding: 0.125rem 0.3125rem;
          border-radius: 50%;
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
}

@media (max-width: 48rem) {
  .header__nav {
    padding: 0.75rem 1rem;
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
