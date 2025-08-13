<template>
  <div class="zoomable-image-wrapper">
    <img :src="src" :alt="alt" class="zoomable-image" @click="openPreview" />

    <!-- 放大预览层 -->
    <div v-if="showPreview" class="image-preview-overlay" @click="closePreview">
      <img :src="src" class="image-preview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: String,
  alt: {
    type: String,
    default: ''
  }
})

const showPreview = ref(false)

const openPreview = () => {
  showPreview.value = true
}
const closePreview = () => {
  showPreview.value = false
}
</script>

<style scoped>

.zoomable-image-wrapper{
  height: auto;
  width: auto;
}

.zoomable-image {
  cursor: zoom-in;
  transition: transform 0.3s;
  height: 450px;
  width: auto;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.6);
}

.image-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 0 15px black;
  cursor: zoom-out;
}
</style>
