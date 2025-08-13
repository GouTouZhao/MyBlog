<template>
  <div class="container" >
    <!-- 侧边目录 -->
     <div class="rightnav hide-text" style="top: 0;">

        <router-link to="/helloworld" style="text-decoration: none; display: flex;"> <!--头像板块-->
            <img src="/picture/头像.png" class="circle touxiang" >
            <p class="touxiangtext allnohide">goutou</p>
        </router-link>
        
        <aside class="toc" style="top: 20%; left: 7%;">
            <ul class="catalogul">
                <li v-for="item in tocList" :key="item.id" :class="{ active: activeId === item.id }" class="catalogtext">
                <a :href="'#' + item.id" @click.prevent="scrollToAnchor(item.id)">{{ item.text }}</a>
                </li>
            </ul>
        </aside>

     </div>
    

    <!-- 正文区域 -->
    <section class="content">
      <slot />
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const tocList = ref([])
const activeId = ref('')

// 监听滚动以更新当前高亮目录
const handleScroll = () => {
  const headings = document.querySelectorAll('.content h2')
  let current = ''
  for (const heading of headings) {
    const rect = heading.getBoundingClientRect()
    if (rect.top < 100) current = heading.id
  }
  activeId.value = current
}

onMounted(() => {
  const headings = document.querySelectorAll('.content h2')
  tocList.value = Array.from(headings).map((h, i) => {
    if (!h.id) h.id = `heading-${i}`
    const titleSpan = h.querySelector('.title-text')
    return {
      id: h.id,
      text: titleSpan ? titleSpan.innerText : h.innerText // 优先使用 span 内容
    }
  })

  window.addEventListener('scroll', handleScroll)
})


const scrollToAnchor = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })  // 平滑滚动
    // 可选：更新地址栏但不跳转页面
    //history.replaceState(null, '', '#' + id)
  }
}

</script>

<style scoped>
.container {
  display: flex;
}
.toc {
  width: 200px;
  position: sticky;
  top: 100px;
}
.toc ul {
  list-style: none;
  padding-left: 0;
}
.toc li {
  margin: 5px 0;
}
.toc li.active a {
  font-weight: bold;
  color:burlywood;
}
.content {
  margin-left: 25%;
  flex: 1;
}
</style>
