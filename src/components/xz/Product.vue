<template>
  <!--1:弹性布局-->
  <div class="row p-3 d-flex flex-wrap">
    <!--2:一个商品-->
    <div
      style="width: 47%; border-radius: 5px"
      class="m-1 p-1 border"
      v-for="(item, i) of list"
      :key="i"
    >
      <!--3:商品图片-->
      <img :src="`${baseURL}/${item.pic}`" class="w-100 px-1" />
      <!--4:商品名称-->
      <div>{{ item.title }}</div>
      <!--5:商品价格-->
      <h5 class="price font-weight-bold">￥{{ item.price }}</h5>
      <!--6:加入购物车按钮-->
      <mt-button size="small" @click="addCart(item.lid)">
        加入购物车
      </mt-button>
    </div>
    <!--7:查看购物车按钮-->
    <mt-button size="large" @click="jumpCart"> 查看购物车 </mt-button>
    <!--8:加载更多按钮-->
    <mt-button size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
import { getProductList, baseURL } from "@/assets/js/apis/product.js";
import { addCart } from "@/assets/js/apis/cart.js";
export default {
  data() {
    return {
      list: [], //保存服务器返回数据
      pno: 0, //表示当前页码
      pageSize: 2,
      baseURL: baseURL,
    };
  },
  created() {
    //生命周期:组件创建成功
    this.loadMore();
  },
  methods: {
    jumpCart() {
      //功能:跳转购物车组件
      this.$router.push("/cart");
    },

    async addCart(lid) {
      //1:创建传递的参数
      let buyCount = 1; //添加购物车 默认数量是1
      let params = { lid, buyCount }; //根据学子商城的API接口规范
      //2:发送ajax请求
      let result = await addCart(params);
      console.log(result); //调试输出返回结果
      //3:处理服务器返回结果
      
      if (result.code == 300) {
        //提示请登录 跳转登录组件。根据学子商城的API接口规范
        this.$toast("请登录");
        this.$router.push("/login");
      } else {
        this.$toast("添加成功");
      }
    },
    async loadMore() {
      //加载商品列表
      //1:创建需要传递的参数
      this.pno++;
      let pno = this.pno;
      let pageSize = this.pageSize;
      let params = { pno, pageSize };
      //2:发送请求
      let result = await getProductList(params);
      console.log(result); //调试输出
      //3:处理服务器返回结果
      if (result.code == 300) {
        //需要登录（没有登录，或session过期）
        this.$router.push("/login");
      }
      //问题:保存多页数据
      //解决:concat 数组拼接
      //this.list = result.data;
      //拼接多页数据
      var rows = this.list.concat(result.data);
      //赋值
      this.list = rows;
    },
  },
};
</script>
<style scoped>
/*一个商品*/
.goods-item {
  width: 48%; /*占用屏幕一半*/
  border: 1px solid #ccc;
  border-radius: 5px; /*圆角*/
  margin: 2px 0; /*外边距*/
  padding: 2px;
  display: flex; /*子元素弹性*/
  flex-direction: column; /*列*/
  min-height: 257px;
}
/*商品里图片*/
</style>
