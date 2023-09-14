<template>
  <div class="timestamp-wrapper">
    <div class="timestamp">
      {{ dayjs(time).add(8, 'hour').format('YYYY-MM-DD HH:mm') }}
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
defineProps<{
  time: string
}>()
</script>
<style scoped>
.timestamp-wrapper {
  display: flex;
  align-items: center;
}

.timestamp {
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  color: #989799;
  flex: 1;
}
</style>
