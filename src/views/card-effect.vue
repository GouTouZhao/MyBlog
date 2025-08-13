<template>
  <div class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header" />
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    dataImage: String
  },
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    }
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  },
  methods: {
    handleMouseMove(e) {
    const rect = this.$refs.card.getBoundingClientRect()
    this.mouseX = e.clientX - rect.left - this.width / 2
    this.mouseY = e.clientY - rect.top - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    }
  }
}
</script>

<!-- 如果你有样式，可以添加进来 -->
<style scoped>
/* 样式可选填 */
</style>
