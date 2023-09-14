<template>
  <div class="block" style="padding: 0 0 10px 0">
    <img :src="channelIntro.signed_cover" class="cover" />
    <img :src="channelIntro.signed_avart" class="avatar" />
    <div class="title-wrapper">
      <div class="title">{{ channelIntro.title }}</div>
      <ChannelTag :tags="channelIntro.tag ?? ''" />
      <p class="intro2">{{ channelIntro.intro2 }}</p>
      <ChannelSns :snses="channelIntro.channel_sns ?? []" />
    </div>
  </div>
  <div class="block">
    <ChannelIntro
      :intro="channelIntro.intro"
      :intro_img="channelIntro.signed_intro_img"
      :intro_video="channelIntro.signed_intro_video"
    />
  </div>

  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="block" v-for="c in contents" :key="c.id">
      <ChannelContentActivity v-if="c.ctype === 0" :content="c" />
      <ChannelContentArticle v-else :content="c" />
    </div>
  </van-list>
</template>
<script setup lang="ts">
import type { IChannelIntro, IContentProps } from '@/types/channel'
import request from '@/utils/request'

const props = defineProps<{
  channelIntro: IChannelIntro
}>()

const contents = ref<IContentProps[]>([])
const loading = ref(false)
const finished = ref(false)
const page = ref(0)
const size = 5

onMounted(onLoad)
async function onLoad() {
  loading.value = true
  page.value++
  try {
    const res = await request.get(
      `/content/list?page=${page.value}&size=${size}&channelToken=${props.channelIntro.token}`
    )
    contents.value = [...contents.value, ...res.data.data.content]
    if (contents.value.length >= res.data.data.totalSize) {
      finished.value = true
    }
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
    finished.value = true
  }
}
</script>
<style scoped>
.block {
  padding: 10px var(--vfans-content-horizontal-padding);
  margin-bottom: 10px;
  background-color: #ffffff;
}
.cover {
  width: 100vw;
  height: calc(100vw / 3);
  object-fit: cover;
}
.avatar {
  width: 88px;
  height: 88px;
  border: 4px solid #ffffff;
  position: relative;
  left: 12px;
  top: -16px;
  margin-bottom: -16px;
}
.title-wrapper {
  margin-left: 16px;
}
.title {
  font-size: 16px;
  font-weight: 700;
}

.intro2 {
  color: var(--color-text-sub-title);
  margin: 10px 0;
}
</style>
