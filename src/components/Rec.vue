<template>
  <div>
    <Loading v-show="show"/>
    <div class="rec pub" v-for="m in msg">
      <div class="logo">
        <img :src="v.profile_image">
        <div class="name">
          <p>{{ v.name }}</p>
          <span>{{ v.passtime }}</span>
        </div>
      </div>
      <div class="con">
        <h4>{{ m.text }}</h4>
        <p><span>{{ m.theme_name }}</span>{{ m.passtime }}</p>
        <img :src="m.image0">
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Loading from './loading'
  export default {
    name:'Rec',
    components:{
      Loading
    },
    data(){
      return{
        msg:'',
        show:true
      }
    },
    created(){
      let url = 'https://www.apiopen.top/satinApi?type=29&page=1'
      axios.get(url).then(res => {
        this.show = false
        this.msg = res.data.data
      }).catch(e => alert(e));

    }
  }
</script>

<style scoped>

</style>
