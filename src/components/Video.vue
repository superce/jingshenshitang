<template>
  <div>
    <Loading v-show="show"/>
    <div class="video pub" v-for="v in video">
      <div class="logo">
        <img :src="v.profile_image">
        <div class="name">
          <p>{{ v.name }}</p>
          <span>{{ v.passtime }}</span>
        </div>
      </div>
      <div class="con">
        <h4>{{ v.text }}</h4>
        <!-- <p>{{ v.theme_name }}</p> -->
        <video :src="v.videouri"></video>
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
    name:'Video',
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
      let url = 'https://www.apiopen.top/satinApi?type=4&page=1'
      axios.get(url).then(res => {
        this.show = false
        // console.log(res.data.data)
        this.video = res.data.data
      }).catch(e => alert(e))
    }
  }
</script>

<style>
  .bottom{
    display: flex;
    justify-content: space-around;
  }
  .bottom i{
    font-size: .7rem;
  }
  .bottom span{
    color:#333;
    font-size:.7rem;
  }
</style>
