<template>
  <nav class="nav-container">
    <router-link to="/" class="nav-item">рецепты</router-link>
    <router-link to="/" class="nav-item">авторы</router-link>
    <router-link to="/" class="nav-item">журналы</router-link>
    <router-link to="/" class="nav-item">статьи</router-link>
    <router-link to="/" class="nav-item">сотрудничество</router-link>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  border: 3px solid black;
  border-right: none;
  border-left: none;
}
.nav-item {
  color: black;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  padding: .2rem 0.5rem;
}
@media (min-width: 768px) {
  .nav-container {
    justify-content: center;
    & > *:not(:last-child) {
      margin-right: 33px;
    }
  }
  .nav-item {
    font-size: 1.2rem;
    padding: 0;
  }
}
@media (min-width: 1024px) {
  .nav-container > *:not(:last-child) {
    margin-right: 66px;
  }
  .nav-item {
    font-size: 1.5rem;
  }
}
</style>
