<template>
  <div class="container">
    <h1>Home Work</h1>
    <nuxt-link :to="{ name: 'hwtesttask' }" class="hw-link" exact exact-active-class="active">
      6.02.2020    Home Work Test Task
    </nuxt-link>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  h1 {
    width: 450px;
    height: 47px;
    color: #222222;
    font-family: "SWScrps";
    font-size: 50px;
    font-weight: 800;
  //padding: 0 0 5px 0;
    margin: 0 auto;

  }
  .hw-link {
    color: black;
    font-family: "Arial - Bold MT";
    font-size: 30px;
    font-weight: 400;
    line-height: 14px;
    margin: 20px auto 30px 0px;
  }
</style>
