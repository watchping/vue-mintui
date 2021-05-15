<template>
  <div>

       <h3>表单组件</h3>
       <!--添加用户名输入框-->
       <mt-field label="用户名"
       placeholder="请输入用户名"
       v-model="uname"       
       ></mt-field>
       <!--添加密码输入框-->
       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
       <!--登录按钮-->
       <mt-button size="large" type="primary" icon="back" :disabled="disabled" @click="login">登录</mt-button>


  </div>
</template>

<script>
// import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            uname:"dingding",//双向绑定用户名
            upwd:"123456",
            disabled:false,
        }
    },

    methods:{
        login(){
          // MessageBox({
          //   title: 'Notice',
          //   message: 'Are you sure?',
          //   showCancelButton: true
          // });

          var message='Are you sure?'
          var title = "Notice"
          //MessageBox.alert(message, title);

          // MessageBox.alert(message, title).then(action => {
          //   this.$toast(action)
          // });   
          
          this.$messagebox.prompt(message, title).then(({value, action }) => {
             this.$toast(value + "_" + action)
          }).catch((value, action)=>{
            this.$toast(value + "_" + action);
          });

          // this.$messagebox('Notice', 'You clicked the button');
          return ;

          //  //功能:用户登录任务
          //  //1:创建正则表达式验证用户名和密码格式
          //  //  规则:字母数字3~12
          //  var reg = /^[a-z0-9]{3,12}$/i;
          //  //2:获取用户输入用户名
          //  var u = this.uname;
          //  //3:获取用户输入密码
          //  var p = this.upwd;
          //  console.log(u+"_"+p);
          //  //4:通过正则表达式验证用户名
          //  //  如果格式不正确 确认消息 "用户名格式不正确"
          //  if(!reg.test(u)){
          //     this.$messagebox("消息","用户名格式不正确");
          //     return; //返回
          //  }
          //  //5:通过正则表达式验证密码  17:43
          //  //  如果格式不正确 确认消息  "密码格式不正确"
          //  if(!reg.test(p)){
          //    this.$messagebox("消息","密码格式不正确");
          //    return;
          //  }
          //  //#6:输出正确 通过ajax请求服务器程序帮助完成登录任务
          //  this.$messagebox("消息","用户名格式正确，后端提取数据验证后续会介绍");

        }
    }
}
</script>

<style>

</style>