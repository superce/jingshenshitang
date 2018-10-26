<template>
  <div class="loading">
    <img src="../assets/img/loading_green.gif" alt="">
  </div>
</template>

<script>
  export default {
    name:'Loading' 
  }
</script>

<style>
  .loading{
    width:18rem;
    margin: 0 auto;
  }
  .loading img{
    width:4rem;
    height: 4rem;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%)
  }
</style>
