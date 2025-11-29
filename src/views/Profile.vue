<template>
  <section class="profile__page">
    <p class="profile__page-breadcrumbs"><router-link to="/">Главная</router-link> / Профиль</p>
    <h1 class="profile__page-title">Профиль</h1>
  </section>
</template>

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
}
</style>
