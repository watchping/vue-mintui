<template>
  <div>
    <h4>这是Tab1.vue 测试</h4>
    <mt-swipe
      :auto="1000"
      style="height: 180px"
      class="bg-dark text-white"
      @change="handleChange"
    >
      <mt-swipe-item 
        ><span @click="onClick(1)">111111111111111111111111111</span>
        
      </mt-swipe-item>
      <mt-swipe-item @click="onClick(2)">22222222222</mt-swipe-item>
      <mt-swipe-item @click="onClick(3)">333333333333333333</mt-swipe-item>
    </mt-swipe>

    <mt-button @click="popupVisible = true"> 测试Popup=true </mt-button>
    <mt-button @click="popupVisible = false"> 测试Popup=false </mt-button>

    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div>popup的内容</div>
      <img src="@/assets/img/logo.png" />
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
  handleChange() {
    //console.log(index)
  },
  onClick(i){
      console.log(i)
  }
}
};
</script>

<style>
</style>