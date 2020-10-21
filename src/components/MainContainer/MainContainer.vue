<template>
  <div class="container" ref="container">
    <slot></slot>
  </div>
</template>

<script>
import tools from '../../utils'

export default {
  name: 'MainContainer',
  props: {
    outSize: {
      type: Object,
      default() {
        return {
          width: 0,
          height: 0
        }
      }
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      originalWidth: 0,
      originalHeight: 0,
      currentWidth: 0,
      currentHeight: 0
    }
  },
  async mounted() {
    await this.initSize()
    this.updateSize()
    this.updateScale()

    window.addEventListener('resize', tools.debounce(this.onResize))
  },
  methods: {
    initSize() {
      var dom = (this.dom = this.$refs.container)
      return new Promise((resolve) => {
        this.$nextTick(() => {
          // 获取真实的适口尺寸
          if (this.outSize.width) {
            this.width = this.outSize.width
            this.height = this.outSize.height
          } else {
            this.width = dom.clientWidth
            this.height = dom.clientHeight
          }
          // 获取画布，屏幕整体大小
          if (!this.originalWidth || !this.originalHeight) {
            this.originalWidth = window.screen.width
            this.originalHeight = window.screen.height
          }
          resolve()
        })
      })
    },
    updateSize() {
      if (this.width && this.height) {
        this.dom.style.width = `${this.width}px`
        this.dom.style.height = `${this.height}px`
      } else {
        this.dom.style.width = `${this.originalWidth}px`
        this.dom.style.height = `${this.originalHeight}px`
      }
    },
    updateScale() {
      // 获取真实屏幕高度，比如F12时的宽度大小
      const currentWidth = (this.currentWidth = document.body.clientWidth)
      const currentHeight = (this.currentHeight = document.body.clientHeight)

      // 最终大屏宽高
      const realWidth = this.width || this.originalWidth
      const realHeight = this.height || this.originalHeight

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight

      this.dom.style.transform = `scale(${widthScale},${heightScale})`
    },
    async onResize() {
      await this.initSize()
      this.updateScale()
      // console.log(e)
    },
    initMutaionObserver() {
      const MutationObserver = window.MutationObserver
      let observer = new MutationObserver(this.onResize)
      observer.observe(this.dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="less" scoped>
.container {
  border: 3px solid green;
  transform-origin: top left;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
</style>
