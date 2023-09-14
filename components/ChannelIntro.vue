<template>
  <img v-if="intro_img" :src="intro_img" class="intro-image" alt="intro-image" />
  <video v-if="intro_video" id="introVideo" :src="intro_video" playsinline controls></video>
  <div v-html="intro" class="intro"></div>
</template>
<script setup lang="ts">
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
const props = defineProps<{
  intro_img?: string | null
  intro_video?: string | null
  intro: string
}>()

onMounted(() => {
  if (props.intro_video) {
    new Plyr('#introVideo', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'settings', 'fullscreen'],
      i18n: {
        speed: '播放速度',
        normal: '正常',
      },
    })
  }
})
</script>
<style scoped>
.intro {
  color: var(--color-text-sub-title);
  margin: 0;
}
.intro-image {
  width: 100%;
}
.intro :deep(p) {
  margin-top: 10px;
  margin-bottom: 0;
}
</style>
