<script setup>
import Header from "@/components/Header.vue";
import NavMenu from "@/components/NavMenu.vue";
</script>

<template>
  <div class="layout">
    <Header></Header>
    <NavMenu/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>

</style>
