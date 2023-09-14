<template>
  <van-nav-bar fixed :title="data?.data.title ?? '频道主页'" placeholder>
    <template #left>
      <van-icon name="wap-home-o" class="van-nav-bar__arrow" @click="$router.push('/home')" />
    </template>
  </van-nav-bar>
  <div class="container">
    <ChannelContent v-if="!!channelIntro" :channel-intro="channelIntro" />
    <div v-else class="not-found">您访问的频道主页不存在!</div>
  </div>
</template>
<script setup lang="ts">
import type { IChannelIntro } from '@/types/channel'
const route = useRoute()
const { data } = await useFetch<{ data: IChannelIntro }>(
  `https://api-staging.vfans.org/channel/short-link/${route.params.channel}`
)
const channelIntro = ref<IChannelIntro | null>(null)
if (data.value?.data) {
  channelIntro.value = data.value.data
  if (typeof channelIntro === 'object') {
    useHead({
      title: channelIntro.value!.title,
      meta: [{ name: 'description', content: channelIntro.value.intro2 }],
    })
  } else {
  }
}
</script>
<style scoped>
.container {
  min-height: calc(100vh - var(--van-nav-bar-height));
  background-color: #efecf2;
  /* padding: 10px; */
}
.not-found {
}
</style>
