
<template>
  <div class="container">
    <!-- 1-标题行 -->
    <title-bar
      :leftTitle="myLeftTitle"
      :search="mySearch"
      :add="myAdd"
    ></title-bar>

    <mt-tab-container v-model="selected" swipeable class="py-5">
      <mt-tab-container-item id="微信">
        <message-list></message-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="通讯录">
        <div>
          <h5>这是“通讯录”页面板内容，待完成...</h5>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <div>
          <h5>这是“发现”页面板内容，待完成...</h5>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="我">
        <div>
          <h5>这是“我”的面板页内容，待完成...</h5>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="微信">
        <img slot="icon" src="@/assets/img/01.png" />
        微信
      </mt-tab-item>
      <mt-tab-item id="通讯录">
        <img slot="icon" src="@/assets/img/02.png" />
        通讯录
      </mt-tab-item>
      <mt-tab-item id="发现">
        <!-- <img slot="icon" src="@/assets/img/03.png" /> -->
        <!-- <i slot="icon" class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;"></i> -->
        <tabbaricon
          :focused="tabbarSelected[2]"
          :selectedImage="require('@/assets/img/ic_find_selected.png')"
          :normalImage="require('@/assets/img/ic_find_normal.png')"
        ></tabbaricon>
        <span>发现</span>
      </mt-tab-item>
      <mt-tab-item id="我">
        <img slot="icon" src="@/assets/img/01.png" />
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

import TitleBar from "@/components/weixin/TitleBar.vue";
import TabBarIcon from "@/components/weixin/TabbarIcon.vue";
import MessageList from '../components/weixin/MessageList.vue';

export default {
  data() {
    return {
      selected: "微信",
      myLeftTitle: "微信(49)",      

      //创建数组保存tabbar图片状态
      tabbarSelected: [true, false, false, false], //第1\2\3\4个按钮是否选中状态
      
    };
  },  
  
  components: {
    TitleBar,
    MessageList,
    tabbaricon: TabBarIcon   
  },
  methods:{
    mySearch(){
      this.$toast("搜索功能，待完成...");
    },
    myAdd(){
      this.$toast("增加功能，待完成...");
    }
  },
  watch: {
    selected() {
      this.tabbarSelected = [false, false, false, false];
      console.log(this.tabbarSelected);

      //this.$toast("选中的是:" + this.selected);
      // if(this.selected=="tab1"){
      //   this.status[0]=true;
      // }else if(this.selected=="tab2"){
      //   this.status[1]=true;
      // }else if(this.selected=="tab3"){
      //   this.status[2]=true;
      // }else if(this.selected=="tab4"){
      //   this.status[3]=true;
      // }

      switch (this.selected) {
        case "微信":
          this.tabbarSelected[0] = true;
          break;
        case "通讯录":
          this.tabbarSelected[1] = true;
          break;
        case "发现":
          this.tabbarSelected[2] = true;
          break;
        case "我":
          this.tabbarSelected[3] = true;
          break;

        default:
          break;
      }

      console.log(this.tabbarSelected);
    },
  },
};
</script>

<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: blue;
}
.mint-tab-container-wrap {
  width: 100%;
  min-height: 617px; /* // 需要设置最小高度 */
}
</style>