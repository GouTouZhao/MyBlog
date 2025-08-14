<template>
  <div class="code-container">
    <button class="copy-btn" :data-clipboard-target="`#${codeId}`">
      复制
    </button>
    <pre :id="codeId"><slot /></pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ClipboardJS from 'clipboard'

// 生成一个唯一 ID，避免多个组件冲突
const codeId = 'code-' + Math.random().toString(36).substr(2, 9)

onMounted(() => {
  const clipboard = new ClipboardJS('.copy-btn')
  clipboard.on('success', e => {
    e.trigger.textContent = '已复制'
    setTimeout(() => e.trigger.textContent = '复制', 1500)
  })
})
</script>

<style scoped>

.code-container pre {
  white-space: pre-wrap; /* 保留换行和空格 */
}

.code-container {
  position: relative;
  background-color: #1e1e1e; /* 黑色背景 */
  color: #d4d4d4; /* 文字颜色 */
  font-family: 'Fira Code', monospace;
  font-size: 20px;
  line-height: 1;
  padding: 0px;
  border-radius: 8px;
  overflow-x: auto;
  margin-left: 70px;
  margin-right: auto;
  text-align: left;
  padding-left: 30px;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #2d2d2d;
  color: #ccc;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
}

.copy-btn:hover {
  background: #444;
  color: #fff;
}
</style>
