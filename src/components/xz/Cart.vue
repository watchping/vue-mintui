<template>
  <div class="d-flex flex-column" style="fontSize:12px">
    <!--Cart.vue 购物车组件-->
    <!--(1)顶部全选复选框-->
    <div class="d-flex align-items-center" >
      <input type="checkbox" v-model="checkAll" @change="selectAll" />全选
    </div>
    
    <!--(2)购物车列表-->
    <div
      class="d-flex align-items-center border-bottom py-2"
      v-for="(item, i) of list"
      :key="i"
    >
      <div class="col-1 col-sm-1"><input type="checkbox" v-model="item.cb" @change="changeCheckItem" /></div>
      <div class="col-7 col-sm-8 text-left " >{{ item.title }}</div>
      <div class="col-2 col-sm-2 ">￥{{ item.price }}</div>
      <div class="col-2 col-sm-1 ">
        <mt-button @click="delItem(item.iid)" > <span >删</span></mt-button>
      </div>
      
    </div>
    <!--(3)一组按钮-->
    <!--删除选中商品 清空购物车-->
    <!--商品数量-->
    <div>
      购物车商品数量<span style="color: red">
        <!-- {{ $store.getters.getCart }} -->
        {{ count }}
      </span>
      <mt-button @click="delCheckedItems"> 删除选中商品 </mt-button>
      <mt-button>清空购物车</mt-button>
      <mt-button @click="$router.push('/product')" icon="back">返回</mt-button>
      <mt-button type="default">default</mt-button>
    </div>
  </div>
</template>
<script>
import { deleteCart } from "@/assets/js/apis/cart.js";
import { listCart } from "@/assets/js/apis/cart.js";
export default {
  data() {
    return {
      list: [], //购物车列表
      checkAll: false, //全选状态
    };
  },

  computed: {
    // 获取state值
    count() {
      return this.$store.state.count;
    },
  },
  created() {
    //组件创建成功后调用加载购物车函数
    this.loadMore();
  },
  methods: {
    set_count(count) {
      //分发action中的add方法
      this.$store.dispatch("set_count", count);
    },

    async delCheckedItems() {
      //功能:删除选中商品
      //当前商品列表中长度0，提示:没有可以删除商品
      if (this.list.length == 0) {
        this.$messagebox("消息", "当前没有可删除商品");
        return;
      }
      //拼接商品id字符串,用“,”分割
      var str_iids = "";
      //创建循环遍历商品,如果当前状态等于true 将id拼接str
      for (var item of this.list) {
        if (item.cb) {
          //选中
          str_iids += item.iid + ",";
        }
      }
      //提示:请选择要删除商品
      if (str_iids.length == 0) {
        this.$messagebox("消息", "请选择需要删除商品");
        return;
      }
      //截取字符串 ,去掉最后一个“，”
      str_iids = str_iids.substring(0, str_iids.length - 1);
      this.delItem(str_iids); //调用的是同一个API接口
    },

    changeCheckItem() {
      //功能:商品前复选状修改函数
      //获取商品列表数组长度
      var size = this.list.length;
      //计算选中状态商品个数
      var sum = 0;
      for (var item of this.list) {
        if (item.cb == true) sum++;
      }
      //如果商品选中数量与数组长度，则表示全选
      if (size == sum) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },

    selectAll() {
      //功能:全选复选框
      //获取全选状态
      var cb = this.checkAll;
      //创建循环遍历商品列表，将全选状态赋值商品列表项状态
      for (var item of this.list) {
        item.cb = cb;
      }
    },

    async delItem(iid) {
      //功能:发送请求完成删除商品任务
      //获取购物车商品id
      //console.log(iid); //调试输出
      //显示交互对话框，防止用户误操作
      try {
        await this.$messagebox.confirm("是否删除指定商品?" + iid);
        //If the user clicks the cancel button in prompt, the returned Promise will be rejected
        //用户选择确认
        //创建需要传递的参数变量
        var params = { iid };
        //发送请求
        let result = await deleteCart(params);
        console.log(result); //调试输出
        //code == 300 需要登录，根据学子商城的API接口规范
        if (result.code == 300) {
          this.$toast("请登录");
          this.$router.push("/login");
          return;
        }

        //处理返回数据
        if (result.code == 200) {
          //提示删除成功
          this.$toast("删除成功");
          //重新加载购物车商品列表
          this.loadMore();
        } else {
          this.$messagebox("错误", result.msg);
        }
      } catch {
        console.log("你选择了cancel"); //调试输出
      }
    },

    async loadMore() {
      //加载购物车列表
      //发送ajax请求并且获取服务器返回结果
      let result = await listCart();
      console.log(result); //调试输出

      //code == 300 需要登录，根据学子商城的API接口规范
      if (result.code == 300) {
        this.$toast("请登录");
        this.$router.push("/login");
        return;
      }

      if (result.code == 200) {
        //处理返回数据
        //获数据保存list
        //this.list = result.data;
        var rows = result.data;
        //给返回列表数据添加属性cb，表示商品选中状态
        for (var item of rows) {
          item.cb = false;
        }
        //将新数组赋值list
        this.list = rows;
        this.set_count(this.list.length); //处理购物车商品总数
      } else {
        //错误提示
        this.$messagebox("错误", result.msg);
      }
    },
  },
};
</script>
<style scoped>
.mint-button {
  font-size: 12px;
}

label{
  margin-bottom: 0rem;
}
</style>
