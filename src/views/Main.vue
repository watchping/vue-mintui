
<template>
  <div class="container">
    <!-- 1-标题行 -->
    <title-bar
      :leftTitle="myLeftTitle"
      :search="mySearch"
      :add="myAdd"
    ></title-bar>

    <mt-tab-container v-model="selected" class="py-5">
      <mt-tab-container-item id="微信">
        <message-list :rows="rows"></message-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="通讯录">
        <div>
          <h5>这是“通讯录”页面板内容，待完成...</h5>
          <tab-1></tab-1>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">        
          <!-- <h5>这是“发现”页面板内容，待完成...</h5> -->
          <router-view ></router-view>        
      </mt-tab-container-item>
      <mt-tab-container-item id="我">
        <div>
          <h5>这是“我”的面板页内容，待完成...</h5>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="微信">
        <tabbaricon
          :focused="tabbarSelected[0]"
          :selectedImage="require('@/assets/img/ic_weixin_selected.png')"
          :normalImage="require('@/assets/img/ic_weixin_normal.png')"
        ></tabbaricon>
        微信
      </mt-tab-item>
      <mt-tab-item id="通讯录">
        <tabbaricon
          :focused="tabbarSelected[1]"
          :selectedImage="require('@/assets/img/ic_contacts_selected.png')"
          :normalImage="require('@/assets/img/ic_contacts_normal.png')"
        ></tabbaricon>
        通讯录
      </mt-tab-item>
      <mt-tab-item id="发现">
        <tabbaricon
          :focused="tabbarSelected[2]"
          :selectedImage="require('@/assets/img/ic_find_selected.png')"
          :normalImage="require('@/assets/img/ic_find_normal.png')"
        ></tabbaricon>
        发现
      </mt-tab-item>
      <mt-tab-item id="我">
        <tabbaricon
          :focused="tabbarSelected[3]"
          :selectedImage="require('@/assets/img/ic_me_selected.png')"
          :normalImage="require('@/assets/img/ic_me_normal.png')"
        ></tabbaricon>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

import TitleBar from "@/components/weixin/TitleBar.vue";
import TabBarIcon from "@/components/weixin/TabbarIcon.vue";
import MessageList from "../components/weixin/MessageList.vue";
import list from "@/assets/json/messagelist.json"; //从JSON文件导入微信消息列表内容
import Tab1 from './test/Tab1.vue';
export default {
  data() {
    return {
      rows: list.data,//微信消息列表内容
      selected: "微信", //选中的TabBar
      myLeftTitle: "微信(49)",

      //创建数组保存tabbar图片状态
      tabbarSelected: [true, false, false, false], //第1\2\3\4个按钮是否选中状态
    };
  },
  components: {
    TitleBar,
    MessageList,
    tabbaricon: TabBarIcon,
    Tab1,
  },
  methods: {
    mySearch() {
      this.$toast("搜索功能，待完成...");
    },
    myAdd() {
      this.$toast("增加功能，待完成...");
    },
    updateTitle(){
      this.myLeftTitle = `微信(${this.rows.length})`;
    }
  },
  watch: {
    selected() {
      this.tabbarSelected = [false, false, false, false];
      switch (this.selected) {
        case "微信":
          this.tabbarSelected[0] = true;
          break;
        case "通讯录":
          this.tabbarSelected[1] = true;
          break;
        case "发现":
          this.tabbarSelected[2] = true;
          console.log(this.$route);
          if(this.$route.path=="/"){
            this.$router.push("/login");
          }
          break;
        case "我":
          this.tabbarSelected[3] = true;
          break;
        default:
          break;
      }
      //console.log(this.tabbarSelected);
    },
    rows(){
      this.updateTitle();
    }
  },
  created(){
    this.updateTitle();
  }
};
</script>

<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #28a745;
}
.mint-tabbar > .mint-tab-item {
  color: #6c757d;
}
</style>