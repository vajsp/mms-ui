<template>
  <div class="mm-count-up">
    <div class="num-block">
      <div class="num-block_show">
        <div
          class="num-block_numbers"
          :class="{ ellipsis: !isNum(item) }"
          v-for="(item, key) in currentData"
          :key="currentData.length - key"
        >
          <ul
            class="num-block_ul"
            :style="ulStyles(item, key)"
            v-if="isNum(item)"
          >
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
          </ul>
          <div class="num-block_ellipsis" v-else>,</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MmCountUp',
  props: ['value', 'fontSize', 'fontWidth'],
  data() {
    return {
      currentData: '0',
      lastData: '0'
    }
  },
  mounted() {
    this.getNum(this.value || 0)
  },
  computed: {
    numbers() {
      let value = this.value
      if (!value) {
        return
      }
      value = this.dealData(value)
      return value
    }
  },
  watch: {
    data(val) {
      this.getNum(val)
    }
  },
  methods: {
    getNum(val) {
      const newData = this.dealData(val)
      this.currentData = newData
        .replace(/\d/g, '0')
        .split('')
        .reverse()
        .map((s, i) => this.currentData.split('').reverse()[i] || s)
        .reverse()
        .join('')
      setTimeout(() => {
        this.lastData = this.currentData
        this.currentData = newData
      }, 100)
    },
    ulStyles(item, key) {
      let top = 0
      let currentTop = -6.1 * Number(item)
      top = currentTop + 'vh'
      let lastItem = this.lastData[key]
      return {
        transform: `translate(0, ${top})`,
        transition: `${Math.abs(lastItem - item) / 5}s`
      }
    },
    isNum(val) {
      return val == ',' ? false : true
    },
    dealData(val) {
      let vals = val
        .toString()
        .split('')
        .reverse()
      let dealData = []
      for (let i = 0; i < vals.length; i++) {
        if (i > 0 && i % 3 == 0) {
          dealData.push(',')
        }
        dealData.push(vals[i])
      }
      dealData = dealData.reverse().join('')
      return dealData
    }
  }
}
</script>
<style lang="less">
@fontsize: 5.9vh;

.mm-count-up {
  .num-block {
    width: 100%;
    height: auto;
    .num-block_show {
      display: flex;
      height: @fontsize;
      overflow: hidden;
      font-size: @fontsize;
    }
    .num-block_numbers {
      position: relative;
      font-family: 'DIN Condensed';
    }
    .textcolor {
      background-image: linear-gradient(#27e1ff, #8affe2);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .num-block_ul {
      transform: translate(0, 0);
      position: relative;
      left: 0;
      list-style: none;
      padding: 0;
      margin: 0;
      transition: 1s;
    }
    .num-block_ul > li {
      height: @fontsize;
      .textcolor;
    }
    .num-block_ellipsis {
      position: relative;
      height: @fontsize;
      .textcolor;
    }
  }
}
</style>
