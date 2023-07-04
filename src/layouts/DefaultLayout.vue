<script setup>
import Header from "@/components/Header.vue";
import NavMenu from "@/components/NavMenu.vue";
import CategiroesGrid from "@/components/uikit/CategiroesGrid.vue";
</script>

<template>
  <div class="layout">
    <Header></Header>
    <NavMenu/>
    <categiroes-grid></categiroes-grid>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>

</style>
