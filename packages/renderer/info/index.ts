import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

export default function (option: Option, ctx: CanvasRenderingContext2D,res: ResultInfo): ResultInfo {
  const { padding: { gap }, info: {
    unit, unitSize, unitFont, unitColor, unitAlign,
    source, sourceSize, sourceFont, sourceColor, sourceAlign
  } } = option
  const { width } = ctx.canvas
  // ctx.textBaseline = top'、'bottom'、'middle'、'alphabetic'、'hanging'，'ideograpgic' alphabetic

  if (!unit && !source) return res
  const { left, right, top, bottom } = res

  if (left >= right) return res
  // 首先渲染单位
  if (unit) {
    ctx.fillStyle = unitColor
    ctx.font = `${unitSize}px ${unitFont}`
    switch (unitAlign) {
        case 'left':
          ctx.textAlign = 'left'
          ctx.textBaseline = 'top'
          ctx.fillText(unit as string, left, top, right - left)
          res.top = top + unitSize + gap
          break
        case 'center':
          ctx.textAlign = 'center'
          ctx.textBaseline = 'top'
          ctx.fillText(unit as string, width / 2, top, right - left)
          res.top = top + unitSize + gap
          break
        case 'right':
          ctx.textAlign = 'right'
          ctx.textBaseline = 'top'
          ctx.fillText(unit as string, right, top, right - left)
          res.top = top + unitSize + gap
          break
      }
  }

  if (source) {
    ctx.fillStyle = sourceColor
    ctx.font = `${sourceSize}px ${sourceFont}`
    switch (sourceAlign) {
        case 'left':
          ctx.textAlign = 'left'
          ctx.textBaseline = 'bottom'
          ctx.fillText(source as string, left, bottom, right - left)
          res.bottom = bottom - sourceSize - gap
          break
        case 'center':
          ctx.textAlign = 'center'
          ctx.textBaseline = 'bottom'
          ctx.fillText(source as string, width / 2, bottom, right - left)
          res.bottom = bottom - sourceSize - gap
          break
        case 'right':
          ctx.textAlign = 'right'
          ctx.textBaseline = 'bottom'
          ctx.fillText(source as string, right, bottom, right - left)
          res.bottom = bottom - sourceSize - gap
          break
      }
  }

  return res
}