<script lang="ts" setup>
import AppLayout from '@/layouts/AppLayout.vue';
import {onMounted} from "vue";
import {useGlobalStore} from "@/store/globalStore.ts";
const globalStore = useGlobalStore();
onMounted(() => {
  globalStore.checkUser();
})
</script>

<template>
  <AppLayout/>
</template>

<style lang="scss" scoped>

</style>
