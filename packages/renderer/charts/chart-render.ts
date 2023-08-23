import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

const barCharts = import('./bar-charts')
const lineCharts = import('./line-charts')
const pieCharts = import('./pie-charts')

let pre = -1
let fne: any

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo): ResultInfo {
  switch (option.type) {
    case 0:
      if (pre !== 0) {
        barCharts.then(fn => {
          fn.default(option, ctx, res)
          fne = fn.default
        })
      } else fne(option, ctx, res)
      break
    case 1:
      if (pre !== 1) {
        lineCharts.then(fn => {
          fn.default(option, ctx, res)
          fne = fn.default
        })
      } else fne(option, ctx, res)
      break
    case 2:
      if (pre !== 2) {
        pieCharts.then(fn => {
          fn.default(option, ctx, res)
          fne = fn.default
        })
      } else fne(option, ctx, res)
      break
  }
  pre = option.type
  return res
}