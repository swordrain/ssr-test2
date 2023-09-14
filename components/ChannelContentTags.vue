<template>
  <template :key="tag" v-for="tag in tagList">
    <span v-if="tag" class="tag"> #{{ tag }}#</span>
  </template>
</template>
<script setup lang="ts">
const props = defineProps<{
  tags: string
}>()
const tagList = computed(() => props.tags.split(','))
</script>
<style scoped>
.tag {
  color: var(--color-text-sub-title);
  margin-right: 15px;
  font-size: 16px;
}
</style>
