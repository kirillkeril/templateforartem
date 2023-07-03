<template>
  <header class="header">
    <div class="logo">
        <h1>рецепт.ру</h1>
    </div>
    <div class="search">
      <div class="searchInput">
        <input type ="text" class="search1">
        <div class="icon"></div>
      </div>
    </div>
    <div class="account">
      <button class="loginButton">Войти</button>
      <button class="profile"></button>
    </div>
  </header>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
.header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:50fr auto ;
  grid-template-areas:"logo account"
    "search search";
  align-items: center;
  margin: 40px;

}
.logo{
  grid-area: logo;
}
.account{
  grid-area: account;
  display:flex;
  justify-content: flex-end;
}
.search{
  grid-area: search;
  position: relative;
}
.icon{
  background: black;
  width: 10px;
  height: 10px;
  position: absolute;
  top:50%;
  right: 1px;
  transform: translateY(-50%);
}
.search1{
width: 100%;
  border-radius: 10px;
}
.loginButton{
  background: none;
  border: none;
  font-family: "Rubik Mono One",sans-serif;
}
.logo {
  font-family:  "Raleway",sans-serif;;

}
.profile{
  border-radius: 15px;
  width: 40px;
  height: 40px;
  border:2px solid black ;

}
</style>