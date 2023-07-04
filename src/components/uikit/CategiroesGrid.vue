<template>
  <div class="categories">
    <input type="button" class="ff" >
    <input type="button" class="ff" >
    <input type="button" class="ff" >

  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style  scoped>
.categories {
  width: 100vw;
  grid-template-columns: 1fr;
  display: grid;
  justify-items: center;
}
.ff{
  border: none;
  border-radius: 40px;
  margin: 30px 20px;
  height: 225px;
  width: 326px;
  background: aqua;
}

</style>