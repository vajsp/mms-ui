<template>
  <span class="mm-count-to" ref="domCount">
    <countTo
      :startVal="startVal"
      :endVal="value"
      :separator="separatorPlus"
      :duration="duration"
      :style="{
        width: widthSpan,
        transition: `all  ${0.2}s`
      }"
    ></countTo>
  </span>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  name: 'MmCountTo',
  props: {
    duration: {
      type: Number,
      default: 1500
    },
    separator: {
      default: true
    },
    value: {
      type: Number,
      default: 60
    }
  },
  components: { countTo },
  computed: {
    separatorPlus() {
      if (this.separator) {
        return '.'
      } else {
        return ''
      }
    },
    valueNum() {
      return Number(this.value)
    }
  },
  data() {
    return {
      startVal: 0,
      endVal: 0,
      widthSpan: '8px',
      rootPx: 9
    }
  },
  created() {
    this.endVal = this.valueNum
  },
  mounted() {
    this.setSpanWidth()
  },
  methods: {
    setSpanWidth() {
      // 通过字体大小来算出滚动数字固定的宽度，防止后面的单位抖动
      // 取16px数字字体作为参照

      var fontSize = parseFloat(
        getComputedStyle(this.$refs.domCount, null)['fontSize']
      )

      var valueLength = this.value.toString().length
      var separatorNum = 3

      this.widthSpan = (fontSize / 16) * this.rootPx * valueLength

      if (this.separator && valueLength > separatorNum) {
        // 有分隔符时添加分隔符占的宽度
        var pointNum = Math.floor(valueLength / separatorNum)
        this.widthSpan = this.widthSpan + pointNum * 3.5
      }

      this.widthSpan = this.widthSpan + 'px'
    }
  },
  watch: {
    valueNum(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.startVal = oldVal
        this.endVal = newVal
        // this.setSpanWidth()
        if (newVal > oldVal) {
          setTimeout(() => {
            this.setSpanWidth()
          })
        } else {
          setTimeout(() => {
            this.setSpanWidth()
          }, this.duration)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mm-count-to {
  display: inline-block;
  border: 1px solid red;

  span {
    display: inline-block;
    text-align: center;
  }
}
</style>
