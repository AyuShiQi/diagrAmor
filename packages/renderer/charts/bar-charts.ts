import type { CalInfo } from '../../calculate/axis'
import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo, cal: CalInfo): ResultInfo {
//   console.log(cal)
  const cellWidth = (res.right - res.left) / (option.data.length - 1)
  const rectwidth = cellWidth - (option.padding.gap * 2)
  let { left } = res
  let i = 0
  for (const line of option.data.slice(1)) {
    const len = -line[1] / cal.unitGap * cal.len
    ctx.beginPath()
    ctx.fillStyle = (option.label as any).content[i++].color
    ctx.fillRect(left + option.padding.gap, cal.zero, rectwidth, len)
    ctx.fill()
    if (option.attention) {
      // console.log(line[1])
      ctx.font = `${option.attention.size}px ${option.attention.font}`
      ctx.fillStyle = option.attention.color
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillText(line[1], left + cellWidth / 2, cal.zero + len - 2)
    }
    left += cellWidth
  }
  return res
}
