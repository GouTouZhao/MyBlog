<!-- PhotoOptions.vue -->
<template>
  <div class="options">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="option"
      :class="{ active: activeIndex === index }"
      :style="{
        '--optionBackground': `url(${option.bg})`,
        '--defaultBackground': option.color
      }"
      @click="activeIndex = index"
    >
      <div class="shadow"></div>
      <div class="label">
        <router-link :to="option.link" class="icon" @click.stop>
            <i :class="option.icon"></i>
        </router-link>

        <div class="info">
          <div class="main">{{ option.title }}</div>
          <div class="sub">{{ option.sub }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const options = [
  {
    bg: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
    icon: 'fas fa-walking',
    title: 'Blonkisoaz',
    sub: '没做够五个blog所以还是网图',
    color: '#ED5565',
    link: '/NonePage',
  },
  {
    bg: 'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg',
    icon: 'fas fa-snowflake',
    title: 'Oretemauw',
    sub: 'Omuke trughte a otufta',
    color: '#FC6E51',
    link: '/NonePage',
  },
  {
    bg: 'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg',
    icon: 'fas fa-tree',
    title: 'Iteresuselle',
    sub: 'Omuke trughte a otufta',
    color: '#FFCE54',
    link: '/NonePage',
  },
  {
    bg: 'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg',
    icon: 'fas fa-tint',
    title: 'Idiefe',
    sub: 'Omuke trughte a otufta',
    color: '#2ECC71',
    link: '/NonePage',
  },
  {
    bg: 'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg',
    icon: 'fas fa-sun',
    title: 'Inatethi',
    sub: 'Omuke trughte a otufta',
    color: '#5D9CEC',
    link: '/NonePage',
  }
]
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

.options {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 900px;
  max-width: 950px;
  width: calc(100% - 100px);  /* calc(100% - 100px);*/ 
  height: 400px;
}

.option {
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: var(--optionBackground, var(--defaultBackground, #E6E9ED));
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  border-radius: 30px;
  flex-grow: 1;
}

.option .shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
}

.option .label {
  display: flex;
  position: absolute;
  right: 0;
  height: 40px;
  bottom: 10px;
  left: 10px;
  transition: 0.5s;
}

.option .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  color: var(--defaultBackground);
}

.option .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: white;
}

.option .info > div {
  position: relative;
  left: 20px;
  opacity: 0;
  transition: 0.5s;
}

.option.active {
  flex-grow: 10000;
  max-width: 600px;
  margin: 0;
  border-radius: 40px;
  background-size: auto 100%;
}

.option.active .shadow {
  box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
}

.option.active .label {
  bottom: 20px;
  left: 20px;
}

.option.active .info > div {
  left: 0;
  opacity: 1;
}
</style>
