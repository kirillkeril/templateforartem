<script setup lang="ts">
const emit = defineEmits(['click']);

function onClick(event) {
  emit('click', event);
}
</script>

<template>
  <button @click="onClick">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    font-size: 20px;
    background: #fff;
    border: 1px solid $brandColor;
    border-radius: 10px;
    padding: 12px 24px;
  }
</style>
