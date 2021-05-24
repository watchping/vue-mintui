import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局引入mint-ui组件
import MintUI from "mint-ui"   //引入系统路径下的组件，可以不带路径名的
Vue.use(MintUI)
import "mint-ui/lib/style.css"  //不管是否按需引入mint-ui组件，都需要单独引入样式文件

//引入图标样式文件
import "@/assets/font/font_test/iconfont.css"
// import "bootstrap-icons/font/bootstrap-icons.css"

//import "@/assets/css/mybase.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
