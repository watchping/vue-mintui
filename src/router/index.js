import Vue from 'vue'
import VueRouter from 'vue-router'

//作为联系的组件，随时可以删除的
import Exam01 from '@/components/exam/Exam01.vue'
import Exam02 from '@/components/exam/Exam02.vue'

//微信消息主界面组件
import Main from '@/views/Main.vue'
import Login from '@/components/xz/Login.vue'//学子商城登录组件
import Product from '@/components/xz/Product.vue'//学子商城登录组件
import Cart from '@/components/xz/Cart.vue'//学子商城登录组件

Vue.use(VueRouter)

const routes = [  
  {
    path:"/",
    component:Main,
    children: [
      {        
        path: 'login', //当/login匹配成功，Login会被渲染在 Main 的 <router-view> 中
        component: Login,
      },
      {        
        path: 'product',//当/product匹配成功,Product会被渲染在 Main 的 <router-view> 中
        component: Product,
      },
      {        
        path: 'cart',//当/product匹配成功,Cart会被渲染在 Main 的 <router-view> 中
        component: Cart,
      }
    ]
  },




  {path:"/Exam01",component:Exam01},
  {path:"/Exam02",component:Exam02}

]

const router = new VueRouter({
  routes
})

export default router
