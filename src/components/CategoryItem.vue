<template>
    <div class="categoryItem-container">
      <div class="categoryItem">
        <slot>

        </slot>
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

.categoryItem{
  border: none;
  border-radius: 48px;
  height: 225px;
  width: 326px;
  background: aqua;
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: "Rubik Mono One", sans-serif;
  font-size:37px;
  color: white;
}

@media (min-width:1024px) {
  .categoryItem{
    border: 3px solid black;
  }
  .categoryItem-container{
    border: 3px solid black;
    border-radius: 63px;
    padding: 15px;
  }
}

</style>

