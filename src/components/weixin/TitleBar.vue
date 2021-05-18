<template>
  <div>
    <div class="row p-2 align-items-center justify-content-between bg-dark fixed-top">
      <div class="col-8 text-left text-white" style="font-size:18px">{{leftTitle}}</div>
      <div class="col-4 d-flex d-flex-row justify-content-end">
        <div>
          <img src="@/assets/img/ic_search.png" height="25" width="25" @click="search"/>
        </div>
        <div class="pl-2">
          <img src="@/assets/img/ic_add.png" height="25" width="25" @click="add"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        leftTitle:{default:""},
        add:{type:Function},
        search:{type:Function},
    }
};
</script>
<style scoped>
.page-head {  
  background-color: #3e3a39;
  color: #fff; /*颜色大小*/
  height: 48px; /*元素高度*/
  font-size: 18px;
}
</style>