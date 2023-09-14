<template>
  <slot />
  <van-tabbar fixed v-model="active" :placeholder="true">
    <van-tabbar-item icon="home-o" to="/home" name="home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search" name="search">发现</van-tabbar-item>
    <van-tabbar-item icon="info-o" to="/about" name="about">关于</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/me" name="me">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
const route = useRoute()
const active = ref(route.path.substring(1) ?? 'home')
watch(
  () => route.path,
  () => {
    active.value = route.path.substring(1)
  }
)
</script>
