<template>
  <van-nav-bar fixed :title="title" placeholder left-arrow @click-left="back()" />
</template>
<script setup lang="ts">
const router = useRouter()
defineProps<{
  title: string
}>()
function back() {
  if (window.history.length > 0) {
    router.back()
  } else {
    router.replace('/')
  }
}
</script>
