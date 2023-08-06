export type Axis = {
  x: {
    type: 'none' | 'line' | 'arrow', // 坐标轴样式
    label: boolean, // 是否有标签
    labelSize: number, // 标签大小
    line: 'none' | 'line' | 'dashed', // 水平线样式
    color: string, // 坐标轴颜色
    lineColor: string, // 水平线颜色
    labelColor: string // 标签颜色
  },
  y: {
    type: 'none' | 'line' | 'arrow', // 坐标轴样式
    label: boolean, // 是否有标签
    labelSize: number, // 标签大小
    line: 'none' | 'line' | 'dashed', // 水平线样式
    color: string, // 坐标轴颜色
    lineColor: string, // 水平线颜色
    labelColor: string // 标签颜色
  }
}
