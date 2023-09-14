<template>
  <div class="tag-wrapper">
    <van-tag
      class="tag"
      type="primary"
      v-for="tag in tags.split(',')"
      :key="tag"
      size="large"
      :color="TAG_BACKGROUND"
      :text-color="PRIMARY_COLOR"
    >
      {{ CHANNEL_TAGS[Number(tag)] }}
    </van-tag>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  tags: string
}>()
</script>
<style scoped>
.tag-wrapper {
  margin-top: 8px;
}
.tag {
  margin-right: 10px;
  height: 24px;
  line-height: 24px;
}
</style>
