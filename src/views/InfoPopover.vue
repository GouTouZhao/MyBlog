<template>
  <div class="popover-container" ref="container">
    <slot name="trigger" :toggle="toggle">
      <button @click="toggle" class="popover-trigger">
        {{ triggerText }}
      </button>
    </slot>

    <div v-if="visible" class="popover-content" @click.stop>
      <p class="popover-text">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps({
  content: { type: String, default: '这是提示内容' },
  triggerText: { type: String, default: '显示提示' }
})

const visible = ref(false)
const container = ref(null)

function toggle() {
  visible.value = !visible.value
}

onClickOutside(container, () => {
  visible.value = false
})
</script>

<style scoped>
.popover-container {
  position: relative;
  display: inline-block;
}

.popover-trigger {
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popover-content {
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 999;
  min-width: 180px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.popover-text {
  margin: 0;
  font-size: 14px;
  color: #333;
}
</style>
