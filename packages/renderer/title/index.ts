import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

export default function (option: Option, ctx: CanvasRenderingContext2D,res: ResultInfo): ResultInfo {
  const { title, padding: { gap } } = option
  const { width } = ctx.canvas
  // ctx.textBaseline = top'、'bottom'、'middle'、'alphabetic'、'hanging'，'ideograpgic' alphabetic

  if (!title.content) return res
  const { left, right, top, bottom } = res
  // 调整文字颜色
  ctx.fillStyle = title.color
  ctx.font = `${title.size}px ${title.font}`
  switch (title.align) {
    case 'top-left':
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.fillText(title.content as string, left, top, right - left)
      res.top = top + title.size + gap
      break
    case 'top-center':
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillText(title.content as string, width / 2, top, right - left)
      res.top = top + title.size + gap
      break
    case 'top-right':
      ctx.textAlign = 'right'
      ctx.textBaseline = 'top'
      ctx.fillText(title.content as string, right, top, right - left)
      res.top = top + title.size + gap
      break
    case 'bottom-left':
      ctx.textAlign = 'left'
      ctx.textBaseline = 'bottom'
      ctx.fillText(title.content as string, left, bottom, right - left)
      res.bottom = bottom - title.size - gap
      break
    case 'bottom-center':
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillText(title.content as string, width / 2, bottom, right - left)
      res.bottom = bottom - title.size - gap
      break
    case 'bottom-right':
      ctx.textAlign = 'right'
      ctx.textBaseline = 'bottom'
      ctx.fillText(title.content as string, right, bottom, right - left)
      res.bottom = bottom - title.size - gap
      break
  }

  return res
}