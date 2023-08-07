<template>
  <canvas class="amor-chart"
  :width="props.option.width"
  :height="props.option.height"
  :style="{
    background: props.option.background,
  }"
  ref="amorCanvas">
  </canvas>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue'
import propsImport from './props/amor-chart'
import type { AmorChartProps, ResultInfo } from './types/amor-chart-type'
const props = defineProps(propsImport) as AmorChartProps

import { calAxisY } from '../calculate/axis'
// 渲染器
import titleRenderer from '../renderer/title/index'
import infoRenderer from '../renderer/info'
import labelRenderer from '../renderer/label'
import axisRenderer from '../renderer/axis/'
import chartRenderer from '../renderer/charts/bar-charts'

const amorCanvas = ref()

function render () {
  const ctx = amorCanvas.value.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  const { option } = props
  const resInfo: ResultInfo = {
    left: option.padding.x,
    right: ctx.canvas.width - option.padding.x,
    top: option.padding.y,
    bottom: ctx.canvas.height - option.padding.y
  }

  if (resInfo.left >= resInfo.right || resInfo.top >= resInfo.bottom) return

  ctx.lineWidth = 1
  // 这里是标题渲染器
  titleRenderer(option, ctx, resInfo)
  // 这里是单位渲染器
  infoRenderer(option, ctx, resInfo)
  // 标签渲染器
  labelRenderer(option, ctx, resInfo)

  if (resInfo.left >= resInfo.right || resInfo.top >= resInfo.bottom) return
  const calInfo = calAxisY(option.data, resInfo.bottom - resInfo.top, option, resInfo)
  // 这里是坐标轴渲染器入口
  axisRenderer(option, ctx, resInfo, calInfo)
  // 这里是内容物渲染
  switch(option.type) {
    case 0:
      chartRenderer(option, ctx, resInfo, calInfo)
      break
  }
}

defineExpose({ render })

onMounted(() => {
  render()
})

onUpdated(() => {
  render()
})
</script>

<style lang="less">
</style>
