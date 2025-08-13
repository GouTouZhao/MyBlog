<template>
  <aside class="profile-card">
    <header>
      <!-- Avatar with zoom -->
      <a href="javascript:void(0)" @click="showPreview = true">
        <img :src="avatarUrl" class="hoverZoomLink" />
      </a>

      <!-- Name -->
      <h1>{{ name }}</h1>

      <!-- Sub-title -->
      <h2>{{ subtitle }}</h2>
    </header>

    <!-- Bio -->
    <div class="profile-bio">
      <p>{{ bio }}</p>
    </div>

    <!-- Social Links -->
    <ul class="profile-social-links">
      <li v-for="(link, index) in socialLinks" :key="index">
        <a :href="link.href" target="_blank" rel="noopener noreferrer">
          <i :class="link.icon"></i>
        </a>
      </li>
    </ul>

    <!-- Image preview overlay -->
    <div v-if="showPreview" class="image-preview-overlay" @click="showPreview = false">
      <img :src="avatarUrl" class="image-preview" />
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const showPreview = ref(false)

const avatarUrl = 'http://lorempixel.com/150/150/people/'
const name = 'John Doe'
const subtitle = 'Better Visuals'
const bio = 'It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.'
const socialLinks = [
  { href: 'https://www.facebook.com/creativedonut', icon: 'fa fa-facebook' },
  { href: 'https://twitter.com/dropyourbass', icon: 'fa fa-twitter' },
  { href: 'https://github.com/vipulsaxena', icon: 'fa fa-github' },
  { href: 'https://www.behance.net/vipulsaxena', icon: 'fa fa-behance' }
]
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

/* 🔁 复制你的 profile-card CSS 到这里，略 */

/* 🔍 放大图片预览样式 */
.image-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-preview {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 0 20px #000;
  cursor: zoom-out;
}
</style>
