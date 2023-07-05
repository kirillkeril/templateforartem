<script setup lang="ts">
interface UserData {
  email: string,
  password: string,
  username: string
}

import AuthController from "@/controllers/authController.ts";
import {reactive} from "vue";
const init: UserData = {email: '', password: '', username: ''};
const userData:UserData = reactive(init);

function onSubmit() {
  AuthController.register({...userData});
}
</script>

<template>
  <form class="register-form" @submit.prevent="onSubmit()">
    <input type="text" placeholder="username" v-model="userData.username"/>
    <input type="email" placeholder="email" v-model="userData.email"/>
    <input type="password" placeholder="password" v-model="userData.password"/>
    <button>login</button>
  </form>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
