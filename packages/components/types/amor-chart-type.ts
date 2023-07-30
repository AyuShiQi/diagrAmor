import type { Axis } from '../../renderer/axis/types'

export type ResultInfo = {
  left: number,
  right: number,
  top: number,
  bottom: number
}

export type AmorChartProps = {
  option: Option
}

export type Option = {
  width: number,
  height: number,
  background: string,
  axis: Axis,
  data: any[][],
  padding: {
    x: number,
    y: number,
    gap: number
  }
  title: {
    content: string | false,
    size: number,
    color: string,
    align: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right',
    font: string
  },
  info: {
    unit: string | false,
    unitSize: number,
    unitColor: string,
    unitAlign: 'left' | 'right' | 'center',
    unitFont: string, // 'Helvetica'// 'serif'
    source: string | false,
    sourceSize: number,
    sourceColor: string,
    sourceAlign: 'left' | 'right' | 'center',
    sourceFont: string // 'Helvetica'// 'serif'
  },
  unit: {
    content: string | false,
    size: number,
    color: string
  },
  label: {
    content: ({ tag: string, color: string})[] | false
    size: number,
    color: string,
    align: 'top' | 'bottom',
    font: string
  }
}