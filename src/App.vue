<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components:{
    Nav
  },
  name: 'App'
}
</script>

<style>
  #app{
    width:100%
  }
</style>
