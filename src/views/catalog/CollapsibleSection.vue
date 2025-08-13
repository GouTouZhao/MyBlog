<template>
  <div class="section">
    <h2 :id="id" @click="toggle">
      <span class="arrow bigger">{{ expanded ? '⯆' : '⯈' }}</span>
      <span class="title-text">{{ title }}</span>
    </h2>
    <div v-show="expanded">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  id: String
})

const expanded = ref(true)
const toggle = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>
h2 {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}

.arrow {
  display: inline-block;
  width: 40px;
  margin-right: 8px;
  transition: transform 0.2s ease;
  font-weight: bold;
  color:#00561f;
}

.bigger{
    font-size: 40px;
    margin-right: 40px;
}
</style>
