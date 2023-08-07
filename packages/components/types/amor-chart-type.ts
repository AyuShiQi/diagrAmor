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
  type: number,
  width: number,
  height: number,
  background: string,
  unitGap: number,
  attention: {
    color: string
    size: number
    font: string
  } | false
  axis: Axis,
  data: any[][],
  padding: {
    x: number,
    y: number,
    gap: number
  }
  title: {
    content: string,
    size: number,
    color: string,
    align: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right',
    font: string
  },
  info: {
    unit: string,
    unitSize: number,
    unitColor: string,
    unitAlign: 'left' | 'right' | 'center',
    unitFont: string, // 'Helvetica'// 'serif'
    source: string,
    sourceSize: number,
    sourceColor: string,
    sourceAlign: 'left' | 'right' | 'center',
    sourceFont: string // 'Helvetica'// 'serif'
  },
  unit: {
    content: string,
    size: number,
    color: string
  },
  label: {
    open: boolean
    content: ({ tag: string, color: string})[]
    size: number,
    color: string,
    align: 'top' | 'bottom',
    font: string
  }
}