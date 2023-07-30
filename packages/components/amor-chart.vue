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
import { ref, onMounted } from 'vue'
import propsImport from './props/amor-chart'
import type { AmorChartProps, ResultInfo } from './types/amor-chart-type'
const props = defineProps(propsImport) as AmorChartProps

// 渲染器
import titleRenderer from '../renderer/title/index'
import infoRenderer from '../renderer/info'
import labelRenderer from '../renderer/label'
import axisRenderer from '../renderer/axis/'

const amorCanvas = ref()

onMounted(() => {
  const ctx = amorCanvas.value.getContext('2d')
  // console.log(ctx)
  const { option } = props
  const resInfo: ResultInfo = {
    left: option.padding.x,
    right: ctx.canvas.width - option.padding.x,
    top: option.padding.y,
    bottom: ctx.canvas.height - option.padding.y
  }
  // 这里是标题渲染器
  titleRenderer(option, ctx, resInfo)
  // 这里是单位渲染器
  infoRenderer(option, ctx, resInfo)
  // 标签渲染器
  labelRenderer(option, ctx, resInfo)
  // 这里是坐标轴渲染器入口
  axisRenderer(option, ctx, resInfo)
})
</script>

<style lang="less">
</style>
