<template>


  <div class="categories-grid-container">
    <div class="categories-grid">
      <input type="button" class="ff" >
      <input type="button" class="ff" >
      <input type="button" class="ff" >
    </div>

  </div>
</template>

<script>
export default {
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
.ff{
  border: none;
  border-radius: 40px;
  height: 225px;
  width: 326px;
  background: aqua;
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
@media (min-width:1024px) {
  .ff{
    border: 3px solid black;
    padding: 15px;
  }

}
</style>

