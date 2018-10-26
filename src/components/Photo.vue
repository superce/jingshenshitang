<template>
  <div>
    <Loading v-show="show"/>
    <div class="pub" v-for="v in video">
      <div class="logo">
        <img :src="v.profile_image">
        <div class="name">
          <p>{{ v.name }}</p>
          <span>{{ v.passtime }}</span>
        </div>
      </div>
      <div class="con">
        <img :src="v.image0" alt="">
        <p>{{ v.text }}</p>
      </div>
      <div class="bottom">
        <div class="love">
          <i class="iconfont icon-dianzan"></i>
          <span>{{ v.love }}</span>
        </div>
        <div class="hate">
          <i class="iconfont icon-dislike"></i>
          <span>{{ v.hate }}</span>
        </div>
        <div class="comment">
          <i class="iconfont icon-pinglun"></i>
          <span>{{ v.comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from './loading'
  export default {
    name:'Photo',
    components:{
      Loading
    },
    data(){
      return{
        video:'',
        show:true
      }
    },
    created(){
      let url = 'https://www.apiopen.top/satinApi?type=3&page=1'
      axios.get(url).then(res => {
        this.show = false
        this.video = res.data.data
      }).catch(e => alert(e))
    }
  }
</script>