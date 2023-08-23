import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

const barCharts = import('./bar-charts')
const lineCharts = import('./line-charts')

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo): ResultInfo {
  switch (option.type) {
    case 0:
      barCharts.then(fn => {
        fn.default(option, ctx, res)
      })
      break
    case 1:
      lineCharts.then(fn => {
        fn.default(option, ctx, res)
      })
      break
  }
  return res
}