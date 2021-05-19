<template>
  <div>
    <div
      v-for="(item, i) in rows"
      :key="i"
      class="row d-flex align-items-center justify-content-between py-1 pr-3"
      style="border-bottom: 1px solid #d9d9d9"
    >
      <!--2:左侧图片标题子标题-->
      <div class="col-2 col-sm-1">
        <img
          :src="require(`@/assets/img/${item.img}`)"
          class="rounded mx-auto d-block"
          width="50"
          height="50"
        />
      </div>
      <div class="col-8 col-sm-10 col-lg-10 text-left text-truncate">
        <div class="text-dark font-weight-bold">{{ item.title }}</div>
        <div class="text-muted">{{ item.subtitle }}</div>
      </div>

      <!--3:右侧发表时间-->
      <div class="col-2 col-sm-1 text-muted">
        {{ item.time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: { default: [] },
  },
};
</script>

<style>
</style>