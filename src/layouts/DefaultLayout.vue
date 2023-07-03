<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <div class="layout">
    <Header class="layout-header"/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  padding: 0 10px;
}
.layout-header {
  margin-bottom: 1rem;
}
@media (min-width: 1024px) {
  .layout {
    padding: 0 1rem;
  }
}
</style>