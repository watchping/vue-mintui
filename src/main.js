import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'

import MintUI from "mint-ui"   //引入系统路径下的组件，可以不带路径名的
import "mint-ui/lib/style.css"
Vue.use(MintUI)

//引入图标样式文件
import "@/assets/font/font_test/iconfont.css"

import "bootstrap-icons/font/bootstrap-icons.css"

Vue.config.productionTip = false

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
