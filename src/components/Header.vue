<script lang="ts" setup>
import {Ref, ref} from "vue";
import UiModal from "@/components/uikit/UiModal.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const isModalOpened: Ref<boolean> = ref(true);
</script>

<template>
  <header class="header">
    <div class="logo">
        <h1>рецепт.ру</h1>
    </div>
    <div class="search">
      <div class="searchInput">
        <input type ="text" class="search1">
        <div class="icon"></div>
      </div>
    </div>
    <div class="account">
      <button class="loginButton" @click="isModalOpened = true">Войти</button>
      <UiModal :isModalOpened="isModalOpened" @setActive="isModalOpened = false">
        <RegisterForm/>
      </UiModal>
      <button class="profile"></button>
    </div>
  </header>
</template>

<style scoped>
.header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:50fr auto ;
  grid-template-areas:"logo account"
    "search search";
  align-items: center;
  padding: 0 10px;

}
@media (min-width: 800px) {
  .header{
    grid-template-columns: 250px auto 300px;
    grid-template-rows: 1fr;
    grid-template-areas: "logo search account";
    padding: 0 20px;
  }
  .logo{
    margin-right:40px;
    font-size: 15px;

  }
}
.logo{
  grid-area: logo;
}
.account{
  grid-area: account;
  display:flex;
  justify-content: flex-end;
}
.search{
  grid-area: search;
  position: relative;


}
.icon{
  background: black;
  width: 10px;
  height: 10px;
  position: absolute;
  top:50%;
  right: 12px;
  transform: translateY(-50%);
}
.search1{
  border-radius: 10px;
  height: 38px;
  width: 99%;
}
.searchInput{

}
.loginButton{
  background: none;
  border: none;
  font-family: "Rubik Mono One",sans-serif;
}
.logo {
  font-family:  "Rubik Mono One",sans-serif;;


}
.profile{
  border-radius: 15px;
  width: 40px;
  height: 40px;
  border:2px solid black ;

}
</style>
