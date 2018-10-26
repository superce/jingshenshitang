<template>
  <div class="header-box">
    <div class="header">
      <div class="top">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="nav">
        <router-link to='/'>推荐</router-link>
        <router-link to='/video'>视频</router-link>
        <router-link to='/word'>文字</router-link>
        <router-link to='/photo'>图片</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Nav'
  }
</script>

<style scoped>
  .header-box{
    padding-top: .5rem;
    width:100%;
    background: #33CCFF;
  }
  .header{
    width:18rem;
    margin: 0 auto;
  }
  .nav a{
    color:#fff;
    font-size: .8rem;
    padding: 0 1.3rem;
    line-height: 1.5rem;
  }
  .router-link-exact-active{
    color:#00AA00 !important;
  }
  .top{
    width:5rem;
    margin:.5rem 0;
  }
  .top img{
    width:100%;
  }
  .top span{
    background: #fff;
    width:1rem;
    height: .1rem;
    display: block;
    margin:.2rem 0;
    transition: .3s;
  }
</style>
