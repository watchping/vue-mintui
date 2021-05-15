<template>
  <div>
      <button @click="openToast">测试提示框</button>
  </div>
</template>

<script>
export default {
    methods:{
        openToast(){
            //this.$toast("点击测试提示框后的提示信息");
            // this.$toast({
            //     message:"添加成功",  //显示文字
            //     position:"top",//文字位置
            //     //iconClass："iconfont icon-diannao" //指定字体图标 电脑图标  后面会实现的
            // })

            this.$toast({
                message: '操作成功',
                position:"top",//文字位置  
                iconClass:"iconfont icon-auto" //指定字体图标 汽车图标  后面会实现的          
            });
        }
    }
}
</script>

<style>

</style>