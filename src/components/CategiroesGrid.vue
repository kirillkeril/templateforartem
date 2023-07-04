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

  grid-template-columns: 1fr;
  display: grid;
  justify-items: center;
  grid-gap: 25px;
}
.ff{
  border: none;
  border-radius: 40px;
  height: 225px;
  width: 326px;
  background: aqua;
}

</style>