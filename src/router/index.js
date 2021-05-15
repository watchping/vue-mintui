import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '@/components/exam/Test.vue'
import Exam01 from '@/components/exam/Exam01.vue'
import Exam02 from '@/components/exam/Exam02.vue'


Vue.use(VueRouter)

const routes = [  
  {path:"/",component:Test},
  {path:"/Exam01",component:Exam01},
  {path:"/Exam02",component:Exam02}

]

const router = new VueRouter({
  routes
})

export default router
