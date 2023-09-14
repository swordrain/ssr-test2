<template>
  <div class="image-wrapper">
    <img
      :key="img.signedUrl"
      v-for="(img, index) in imgs"
      class="image"
      :src="img.signedUrl"
      @click="preview(index)"
    />
  </div>
</template>
<script setup lang="ts">
import { IContentMediaProps } from '@/types/channel'
const props = defineProps<{
  imgs: IContentMediaProps[]
}>()

function preview(index: number) {
  showImagePreview({
    images: props.imgs.map((i) => i.signedUrl),
    startPosition: index,
  })
}
</script>
<style scoped>
.image-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--vfans-content-activity-image-gap);
}
.image {
  /* width: calc(
    (
        100vw - 2 * var(--vfans-content-horizontal-padding) - 2 *
          var(--vfans-content-activity-image-gap)
      ) / 3
  ); */
  height: calc(
    (
        100vw - 2 * var(--vfans-content-horizontal-padding) - 2 *
          var(--vfans-content-activity-image-gap)
      ) / 3
  );
  object-fit: cover;
  object-position: center;
}
</style>
