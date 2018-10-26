<template>
  <div>
    <Loading v-show="show"/>
    <div class="pub" v-for="v in word">
      <div class="logo">
        <img :src="v.profile_image">
        <div class="name">
          <p>{{ v.name }}</p>
          <span>{{ v.passtime }}</span>
        </div>
      </div>
      <div class="con">
        <!-- <p><span>{{ v.theme_name }}</span><span>{{ v.passtime }}</span>{{ v.name }}<span></span></p> -->
        <h4>{{ v.text }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from './loading'
  export default {
    name:'Word',
    components:{
      Loading
    },
    data(){
      return{
        word:'',
        show:true
      }
    },
    created(){
      let url = 'https://www.apiopen.top/satinApi?type=2&page=1'
      axios.get(url).then(res => {
        this.show = false
        this.word = res.data.data
      }).catch(e => alert(e))
    }
  }
</script>
