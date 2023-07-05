<template>
  <div class="categories-grid-container">
    <div class="categories-grid">
     <category-item>Категория</category-item>
     <category-item>Категория</category-item>
     <category-item>Категория</category-item>
     <category-item>Категория</category-item>
     <category-item>Категория</category-item>
     <category-item>Категория</category-item>
    </div>
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: {CategoryItem},
  setup() {


    return {}
  }
}
</script>

<style scoped>
.categories-grid-container {
  container-type: inline-size;
  margin-top: 23px;
  display: flex;
  justify-content: center;
}
.categories-grid {
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 25px;
}



@container (width > 777px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@container (width > 1028px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>

