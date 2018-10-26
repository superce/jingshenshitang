import Vue from 'vue'
import Router from 'vue-router'
import Rec from '@/components/Rec'
import Video from '@/components/Video'
import Photo from '@/components/Photo'
import Word from '@/components/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Rec
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:'/Word',
      component:Word
    },
    {
      path:'/video',
      component:Video
    }
  ]
})
