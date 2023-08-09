import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

export default function (option: Option, ctx: CanvasRenderingContext2D,res: ResultInfo): ResultInfo {
  const { label: {
    open,
    content,
    size,
    align,
    font,
    color
  }, padding: { gap } } = option
  // ctx.textBaseline = top'、'bottom'、'middle'、'alphabetic'、'hanging'，'ideograpgic' alphabetic

  if (!open) return res
  const { right } = res
  let { left } = res
  ctx.font = `${size}px ${font}`

//   console.log(align)
  switch (align) {
    case 'top':
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      for (const label of content) {
        // console.log('before', res.top, res.bottom)
        while (left + 4 + size + ctx.measureText(label.tag).width + gap > right) {
          left = res.left
          res.top += gap + size
          if (res.top >= res.bottom) break
        }
        if (res.top >= res.bottom) break
        ctx.fillStyle = label.color
        ctx.fillRect(left, res.top, size, size)
        left += 4 + size
        ctx.fillStyle = color
        ctx.fillText(label.tag, left, res.top)
        left += label.tag.length * size + gap
      }
      res.top += gap + size
      break
    case 'bottom':
      ctx.textAlign = 'left'
      ctx.textBaseline = 'bottom'
      for (const label of content) {
        if (res.top >= res.bottom) break
        if (left + 4 + size + label.tag.length * size + gap > right) {
          left = res.left
          res.bottom -= gap + size
        }
        ctx.fillStyle = label.color
        ctx.fillRect(left, res.bottom - size, size, size)
        left += 4 + size
        ctx.fillStyle = color
        ctx.fillText(label.tag, left, res.bottom)
        left += label.tag.length * size + gap
      }
      res.bottom -= gap + size
      break
  }

  return res
}