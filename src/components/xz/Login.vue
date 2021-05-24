<template>
  <div>
    <h3>用户登录</h3>
    <!--添加二个输入框-->
    <mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field placeholder="请输入密码"   v-model="upwd"></mt-field>
    <!--添加一个登录按钮-->
    <mt-button type="default" size="large" @click="myLogin">登陆</mt-button>
  </div>
</template>
<script>
import {Login} from "@/assets/js/apis/user.js"
export default {
  data() {
    return {
      uname: "dingding", //双向绑定
      upwd: "123456", //用户名和密码
    };
  },
  methods: {
    async myLogin() {
      //功能:完成用户登录验证方法
      //*1:创建正则表达式 字母数字3~12
      var reg = /^[a-z0-9]{3,12}$/i;
      //*2:获取用户名和密码
      var uname = this.uname;
      var upwd = this.upwd;
      console.log(`用户：${uname} | 密码：${upwd}`);
      // *3:验证用户名如果格式不正确
      //     提示格式错误
      if (!reg.test(uname)) {
        this.$messagebox("消息", "用户名格式不正确");
        return;
      }
      //  *4:验证密码如果格式不正确
      //    提示格式错误
      if (!reg.test(upwd)) {
        this.$messagebox("消息", "密码格式不正确");
        return;
      }      
      //5:创建请求时需要传递的参数数据
      var user = { uname, upwd};
      //6:发送ajax请求      
      let result  = await Login(user);
      console.log(result)
      //7判断返回结果
      if (result.code != 200) {
          this.$messagebox("登录错误", result.msg);
      } else {
          this.$toast("登录成功");
          //应该把用户ID数据保存在本地，待完成...
          //8:跳转商品列表组件 /product
          this.$router.push("/product");
      }      
    },
  },
};
</script>
