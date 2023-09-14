<template>
  <div class="sns-wrapper">
    <a
      class="sns"
      v-for="sns in snses"
      :key="sns.id"
      :href="sns.sns_url"
      target="_blank"
      rel="noreferrer"
    >
      <img class="sns-logo" :src="getSnsDesc(sns.type)?.icon" :alt="getSnsDesc(sns.type)?.label" />
      {{ getSnsDesc(sns.type)?.label }}
    </a>
  </div>
</template>
<script setup lang="ts">
import type { ISnsItem } from '@/types/channel'
defineProps<{
  snses: ISnsItem[]
}>()

function getSnsDesc(snsType: string) {
  return SNS_OPTIONS.find((s) => s.value === snsType)
}
</script>

<style scoped>
.sns-wrapper {
  display: flex;
  overflow: auto;
}

.sns {
  display: inline-flex;
  align-items: center;
  border-radius: 999em;
  background: #efecf2;
  height: 32px;
  margin-right: 20px;
  font-size: 12px;
  padding: 0 8px;
  color: var(--color-text-sub-title);
}

.sns-logo {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  display: inline-block;
  margin-right: 8px;
}
</style>
