import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

import { calData } from './cal/pie-chart'

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo): ResultInfo {
  if (res.left >= res.right || res.bottom >= res.top) return res
  if (!option.data || !option.data[0] || (option.data[0] as any).length < 2) return res
  const {
    zeroX,
    zeroY,
    radius,
    angels
  } = calData(option.data, res)

  let nowStart = 0
  for (let i = 0; i < option.data.length - 1; i++) {
    ctx.beginPath()
    ctx.fillStyle = option.label.content[i].color
    ctx.moveTo(zeroX, zeroY)
    ctx.arc(zeroX, zeroY, radius, nowStart, nowStart + angels[i])
    ctx.fill()
    if (option.attention.open) {
      ctx.fillStyle = option.attention.color
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const lens = nowStart + angels[i] / 2
      ctx.fillText(option.data[i + 1][1] + '', zeroX + Math.cos(lens) * radius / 2, zeroY + Math.sin(lens) * radius / 2)
    }
    nowStart += angels[i]
    // if (i === 0) break
  }
  return res
}
