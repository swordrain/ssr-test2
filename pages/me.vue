<template>
  <van-button v-if="!userStore.loggedIn" type="primary" to="/login">去登录</van-button>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
definePageMeta({
  layout: 'home',
})
</script>
