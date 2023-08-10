<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
const option = reactive({
  type: 0, // 条形图
  width: 300,
  height: 300,
  background: '#fff',
  unitGap: 20,
  attention: {
    color: '#888',
    size: 12,
    font: 'serif'
  },
  padding: {
    x: 8,
    y: 8,
    gap: 8
  },

  data: [
    ['类型', '数量'],
    ['高中', 482.3],
    ['学士', 568],
    ['硕士', 573.8],
    ['博士', 200]
  ],
  title: {
    content: '这里是标题',
    size: 32,
    color: '#000',
    align: 'top-left',
    font: 'serif' // 'Helvetica'// 'serif'
  },
  info: {
    unit: '单位：百万',
    unitSize: 16,
    unitColor: '#bbb',
    unitAlign: 'left',
    unitFont: 'serif', // 'Helvetica'// 'serif'
    source: '来源：百万青年人大学习网',
    sourceSize: 16,
    sourceColor: '#bbb',
    sourceAlign: 'left',
    sourceFont: 'serif' // 'Helvetica'// 'serif'
  },
  axis: {
    x: {
      type: 'arrow',
      label: true,
      line: 'dashed',
      color: '#000',
      lineColor: '#aaa',
      labelColor: '#888',
      labelSize: 12
    },
    y: {
      type: 'line', // none line arrow(带箭头的)
      label: true,
      line: 'line',
      color: '#000',
      lineColor: '#aaa',
      labelColor: '#888',
      labelSize: 24
    }
  },
  label: {
    open: true,
    content: [
      {
        tag: '高中',
        color: '#ffbe96'
      },
      {
        tag: '学士',
        color: '#ffff96'
      },
      {
        tag: '硕士',
        color: '#747bff'
      },
      {
        tag: '博士',
        color: '#96ffde'
      }
    ],
    color: '#aaa',
    size: 11,
    align: 'top',
    font: 'serif' // 'Helvetica'// 'serif'
  }
})

const chart = ref()

watch(option, () => {
  chart.value.render()
  // console.log(option.label.size)
})
</script>

<template>
  <input v-model="option.label.size"/>
  <amor-chart :option="option" ref="chart"></amor-chart>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
