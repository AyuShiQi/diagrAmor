import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

import chartAxis from './axis/line-chart'
import { calAxisY } from './cal/line-axis'

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo): ResultInfo {
  const cal = calAxisY(option.data, res.bottom - res.top, option, res)
  chartAxis(option, ctx, res, cal)
  if (!option.data || !option.data[0] || (option.data[0] as any).length < 2) return res
  const cellWidth = (res.right - res.left) / ((option.data[0] as any)?.length - 1)
  if (res.left >= res.right || cellWidth <= 0) return res

  const halfWidth = cellWidth / 2
  let i = 0
  for (const line of option.data.slice(1)) {
    let { left } = res
    let pre: [number, number] | undefined
    for (const p of line.slice(1)) {
      const len = -p / cal.unitGap * cal.len
      ctx.beginPath()
      ctx.fillStyle = (option.label as any).content[i].color
      ctx.arc(left + halfWidth, cal.zero + len, 3, 0, Math.PI * 2)
      ctx.fill()
      if (pre) {
        ctx.beginPath()
        ctx.strokeStyle = (option.label as any).content[i].color
        ctx.lineWidth = 2
        ctx.moveTo(...pre)
        ctx.lineTo(left + halfWidth, cal.zero + len)
        ctx.stroke()
      }
      pre = [left + halfWidth, cal.zero + len]
      if (option.attention.open) {
        // console.log(line[1])
        ctx.font = `${option.attention.size}px ${option.attention.font}`
        ctx.fillStyle = option.attention.color
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.fillText(p, left + cellWidth / 2, cal.zero + len - 6)
      }
      left += cellWidth
    }
    i++
  }
  return res
}
