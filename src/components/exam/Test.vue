
<template>
  <div>
    <div class="page-head">
      <span style="padding-left: 18px">微信(100)</span>
      <div class="right-head">
        <div>
          <img
            src="@/assets/img/ic_search.png"
            height="25"
            width="25"
            slot="icon"
          />
        </div>
        <div style="padding-left: 8px">
          <img
            src="@/assets/img/ic_add.png"
            height="25"
            width="25"
            slot="icon"
          />
        </div>
      </div>
    </div>

    <mt-tab-container v-model="selected" class="page-wrap">
      <mt-tab-container-item id="tab1">
        <div v-for="(item, i) in rows" :key="i" class="rootstyle itemstyle row">
          <!--2:左侧图片标题子标题-->
          <div class="leftimgtxt ">
            <img :src="require(`@/assets/img/${item.img}`)" class="imgstyle" />
            <div class="lefttitle">
              <span class="title">{{ item.title }}</span>
              <span class="subtitle"> {{ item.subtitle }}</span>
            </div>
          </div>
          <!--3:右侧发表时间-->
          <span class="sendtime ">
            {{ item.time }}
          </span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <mt-cell v-for="n in 25" :key="n" title="tab-container 2">{{
          n
        }}</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <mt-cell v-for="n in 27" :key="n" title="tab-container 3">{{
          n
        }}</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1">
        <img slot="icon" src="@/assets/img/01.png" />
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="@/assets/img/02.png" />
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="@/assets/img/03.png" />
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="@/assets/img/01.png" />
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import list from "@/assets/messagelist.json";
export default {
  data() {
    return {
      selected: "tab1",
      rows: list.data,
    };
  },
  updated() {
    this.$toast("选中的是:" + this.selected);
  },
};
</script>

<style scoped>
/*1:外层元素弹性布局*/
.page-head {
  display: flex; /*指定布局方式弹性*/
  position: fixed; /*固定定位*/
  top: 0px;
  right: 0px;
  z-index: 999; /*显示在其它元素上方*/
  justify-content: space-between; /*子元素两端对齐*/
  align-items: center; /*垂直居中*/
  background-color: #3e3a39;
  color: #fff; /*颜色大小*/
  padding-left: 8px; /*内边距*/
  padding-right: 8px;
  height: 48px; /*元素高度*/
  font-size: 18px;
  width: 100%;
}

/*内层元素 */
.page-wrap {
  /* overflow: auto;数据多出现滚动条 */
  padding-bottom: 60px; /* *底部导航空间 */
  padding-top: 48px; /* 顶部导航空间 */
}

.right-head {
  display: flex;
}

/*1:一条消息根元素 弹性布局*/
.rootstyle {
  display: flex; /*弹性布局*/
  justify-content: space-between;/*两端对齐  垂直居中*/
  align-items: center;
}
/*2:左侧图片与标题父元素*/
.leftimgtxt {
  display: flex; /*弹性布局，子元素水平排列*/
}
/*3:左侧图片*/
.imgstyle {
  width: 50px; /*图片宽度和高度*/
  height: 50px;
}
/*4:左侧标题[标题;子标题]*/
.lefttitle {
  display: flex; /*弹性布局*/
  flex-direction: column; /*子元素按列排*/
  justify-content: center;/*居中对齐 17*/
  margin-left: 7px;
}
/*5:左侧标题*/
.title {
  color: #000;
  font-size: 17px;
  text-align: left;
}
/*6:左侧子标题*/
.subtitle {
  color: gray;
  margin-top: 4px;
   text-align: left;
}
/*7:右侧发送时间 22*/
.sendtime {
  color: gray;
}

.itemstyle {
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;
}
</style>