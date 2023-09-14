<template>
  <h2 class="title">{{ content.title }}</h2>
  <ChannelContentTimestamp :time="content.update_dt" />
  <p class="activity" v-for="c in content.content.split('\n')">{{ c }}</p>
  <ChannelContentActivityImage :imgs="imgs" />
  <!-- <ChannelContentActivityVideo :video="video" />
  <ChannelContentActivityAttachment :attachment="attachment" /> -->
</template>
<script setup lang="ts">
import { IContentProps, MediaType } from '@/types/channel'

const props = defineProps<{
  content: IContentProps
}>()

const imgs = computed(
  () => props.content.medias?.filter((m) => m.type === MediaType.IMAGE.toString()) ?? []
)
const video = computed(
  () => props.content.medias?.filter((m) => m.type === MediaType.VIDEO.toString())?.[0]
)
const attachment = computed(
  () => props.content.medias?.filter((m) => m.type === MediaType.ATTACHMENT.toString())?.[0]
)
</script>
<style scoped>
.title {
  font-size: 20px;
  color: #18121f;
  margin: 5px 0;
}

.activity {
  font-size: 16px;
  color: #18121f;
  white-space: pre-wrap;
  line-height: 1.5;
}
</style>
