<template>
  <canvas class="amor-chart"
  :width="props.option.width"
  :height="props.option.height">
  </canvas>
</template>

<script lang="ts" setup>
import propsImport from './props/amor-chart'
import type { AmorChartProps } from './types/amor-chart-type'
const props = defineProps(propsImport) as AmorChartProps


</script>

<style lang="less">
</style>
