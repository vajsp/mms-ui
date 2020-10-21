<template>
  <div class="num-block" :style="spanStyle">
    <div class="num-block_show">
      <div
        class="num-block_numbers"
        v-for="(item, key) in currentData"
        :key="currentData.length - key"
      >
        <ul class="num-block_ul_v" v-if="isNum(item)">
          <li>{{ item }}</li>
        </ul>
        <div class="num-block_ul_v num-block_ellipsis" v-else>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ws-num-version-block',
  props: ['data', 'fontSize', 'lineColor'],
  data() {
    return {
      currentData: '0',
      spanStyle: {
        '--fontsize': this.fontSize + 'vh' || '1.4vh',
        '--linecolor': this.lineColor || '#A5E9FA,#4190F1'
      }
    }
  },
  mounted() {
    this.getNum(this.data || 0)
    console.log(this.fontSize, '8888')
  },
  computed: {
    numbers() {
      let data = this.data
      if (!data) {
        return
      }
      return data
    }
  },
  watch: {
    data(val) {
      this.getNum(val)
    },
    fontSize(val) {
      this.spanStyle = {
        '--fontsize': val + 'vh' || '1.4vh',
        '--linecolor': this.lineColor || '#A5E9FA,#4190F1'
      }
    },
    linecolor(val) {
      this.spanStyle = {
        '--fontsize': this.fontSize + 'vh' || '1.4vh',
        '--linecolor': val || '#A5E9FA,#4190F1'
      }
    }
  },
  methods: {
    getNum(val) {
      const newData = val
      this.currentData = newData.split('')
    },
    isNum(val) {
      return parseFloat(val).toString() == 'NaN' ? false : true
    }
  }
}
</script>
<style lang="less" scoped>
@fontsize: var(--fontsize);
@fontsize1: calc(var(--fontsize) * 0.9);
@height: calc(var(--fontsize) * 1.1);
@height1: calc(var(--fontsize) * 1.2);
@top: calc(var(--fontsize) * 0.9 - var(--fontsize));
@lineColor: var(--linecolor);
.num-block {
  width: 100%;
  height: auto;
  .num-block_show {
    display: flex;
    height: @height;
    overflow: hidden;
    font-size: @fontsize;
  }
  .num-block_numbers {
    position: relative;
  }
  .textcolor {
    // #A5E9FA-下#4190F1
    background-image: linear-gradient(@lineColor);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .num-block_ul_v {
    transform: translate(0, 0);
    position: relative;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: 1s;
    font-family: PingFangSC-Regular;
    // font-family: 'DIN Condensed';
  }
  .num-block_ul_v > li {
    height: @height;
    .textcolor;
  }
  .num-block_ellipsis {
    height: @height;
    font-size: @fontsize1;
    // top: @top;
    .textcolor;
  }
}
</style>
