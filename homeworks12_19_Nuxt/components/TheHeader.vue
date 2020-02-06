<template>
  <header>
    <div class="logo layout">
      <img src="../components/Logo.png"/><span>Группа Java Script 12_19</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">
  .layout {
    margin: 0 auto;
    position: relative;
    width: 1170px;
  }
  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;

    border-bottom: 10px solid transparent;
    border-image: linear-gradient(#00BBD6 , #EBFFFF);
    border-image-slice: 100;
  }

  .logo img {
    height: 50px;
    margin-left: 40px;
  }
  .logo span{
    position: absolute;
    width: 450px;
    height: 47px;
    color: lightslategrey;
    font-family: "Arial - Bold MT";
    font-size: 20px;
    font-weight: 800;
    font-style: italic;
    margin-top: 30px;

  }
</style>
