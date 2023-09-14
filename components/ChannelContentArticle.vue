<template>
  <h2 class="title">{{ content.title }}</h2>
  <ChannelContentTimestamp :time="content.update_dt" />
  <p class="article" v-html="signedContent" />
  <ChannelContentTags :tags="content.tag" />
</template>
<script setup lang="ts">
import { IContentProps } from 'types/channel'
import { replaceGetMediaDom } from '@/utils/util'

const props = defineProps<{
  content: IContentProps
}>()
const mediaMap = computed(() => {
  if (props.content.medias && props.content.medias.length > 0) {
    const map = new Map()
    props.content.medias.forEach((m) => {
      map.set(m.fileId, m)
    })
    return map
  } else {
    return new Map()
  }
})

const signedContent = replaceGetMediaDom(props.content.content, mediaMap.value)
</script>
<style scoped>
.title {
  font-size: 20px;
  color: #18121f;
  margin: 5px 0;
}

.remove {
  color: var(--color-primary);
  font-size: 14px;
  cursor: pointer;
}

.article {
  font-size: 16px;
  color: #18121f;
  margin: 8px 0;
}

.article :deep(a) {
  text-decoration: underline;
  color: #2440b3;
}

.article :deep(p) {
  line-height: 1.5;
  margin: 10px 0;
}

.article :deep(img) {
  max-width: 100%;
}

.article :deep(video) {
  max-width: 100%;
}
</style>
