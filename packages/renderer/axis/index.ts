import type { CalInfo } from '../../calculate/axis'
import type { Option, ResultInfo } from '../../components/types/amor-chart-type'

export default function (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo, cal: CalInfo): ResultInfo {
  if (option.axis.y.label !== false) {
    res.left += Math.max(ctx.measureText(cal.maxNum + '').width, ctx.measureText(cal.minNum + '').width) + 2 + option.padding.gap
  }
  // 计算0点位置
  renderY(option, ctx, res, cal)
  renderX(option, ctx, res, cal)
  ctx.stroke()
  return res
}

/**
 * 渲染y轴
 * @param option 配置信息
 * @param ctx 画布ctx 
 */
function renderY (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo, cal: CalInfo) {
  const { x, y } = option.axis
  let { left, bottom, top } = res

  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'
  if (x.label) {
    bottom -= x.labelSize + option.padding.gap - 1
  }

  ctx.strokeStyle = y.color
  // 零点画法
  if (y.label) {
    ctx.beginPath()
    ctx.setLineDash([0, 0])
    ctx.strokeStyle = y.color
    ctx.moveTo(left, cal.zero);
    ctx.lineTo(left - option.padding.gap, cal.zero)
    ctx.stroke()
    // 渲染 0 label
    ctx.fillStyle = y.labelColor
    ctx.fillText('0', left - option.padding.gap - 2, cal.zero)    // 渲染分界线
  }
  switch (y.line) {
    case 'dashed':
      ctx.beginPath()
      ctx.setLineDash([20, 5])
      ctx.strokeStyle = y.lineColor
      ctx.moveTo(res.left, cal.zero)
      ctx.lineTo(res.right, cal.zero)
      ctx.stroke()
      break
    case 'line':
      ctx.beginPath()
      ctx.setLineDash([0, 0])
      ctx.strokeStyle = y.lineColor
      ctx.moveTo(res.left, cal.zero)
      ctx.lineTo(res.right, cal.zero)
      ctx.stroke()
      break
  }
  // 正向画法
  for (let i = cal.unitGap; i < cal.maxNum; i += cal.unitGap) {
    const cur = cal.zero - i / cal.unitGap * cal.len

    if (y.label) {
      ctx.beginPath()
      ctx.strokeStyle = y.color
      ctx.setLineDash([0, 0])
      ctx.moveTo(left, cur);
      ctx.lineTo(left - option.padding.gap, cur)
      ctx.stroke()
      // 渲染标签字体
      ctx.fillStyle = y.labelColor
      ctx.fillText(String(i), left - option.padding.gap - 2, cur)
    }
    // 渲染分界线
    switch (y.line) {
      case 'dashed':
        ctx.beginPath()
        ctx.setLineDash([20, 10])
        ctx.strokeStyle = y.lineColor
        ctx.moveTo(res.left, cur)
        ctx.lineTo(res.right, cur)
        ctx.stroke()
        break
      case 'line':
        ctx.beginPath()
        ctx.setLineDash([0, 0])
        ctx.strokeStyle = y.lineColor
        ctx.moveTo(res.left, cur)
        ctx.lineTo(res.right, cur)
        ctx.stroke()
        break
    }
  }
  // 反向画法
  for (let i = -cal.unitGap; i > cal.minNum; i -= cal.unitGap) {
    const cur = cal.zero - i / cal.unitGap * cal.len
    if (y.label) {
      ctx.beginPath()
      ctx.strokeStyle = y.color
      ctx.setLineDash([0, 0])
      ctx.moveTo(left, cur);
      ctx.lineTo(left - option.padding.gap, cur)
      ctx.stroke()
      // 渲染标签字体
      ctx.fillStyle = y.labelColor
      ctx.fillText(String(i), left - option.padding.gap - 2, cur)
    }
    // 渲染分界线
    switch (y.line) {
      case 'dashed':
        ctx.beginPath()
        ctx.setLineDash([20, 5])
        ctx.strokeStyle = y.lineColor
        ctx.moveTo(res.left, cur)
        ctx.lineTo(res.right, cur)
        ctx.stroke()
        break
      case 'line':
        ctx.beginPath()
        ctx.setLineDash([0, 0])
        ctx.strokeStyle = y.lineColor
        ctx.moveTo(res.left, cur)
        ctx.lineTo(res.right, cur)
        ctx.stroke()
        break
    }
  }

  ctx.strokeStyle = y.color
  switch (y.type) {
    case 'arrow':
      ctx.beginPath()
      ctx.fillStyle = y.lineColor
      ctx.moveTo(res.left, top + 2)
      ctx.lineTo(res.left - 2, top + 2)
      ctx.lineTo(res.left, top - 2)
      ctx.lineTo(res.left + 2, top + 2)
      ctx.lineTo(res.left, top + 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(res.left, bottom)
      ctx.lineTo(res.left, top)
      ctx.stroke()
      break
    case 'line':
      ctx.beginPath()
      ctx.moveTo(res.left, bottom)
      ctx.lineTo(res.left, top)
      ctx.stroke()
      break
  }
}

/**
 * 渲染x轴
 * @param option 配置信息 
 * @param ctx 画布ctx 
 */
function renderX (option: Option, ctx: CanvasRenderingContext2D, res: ResultInfo, cal: CalInfo) {
  const { x } = option.axis
  const cellWidth = (res.right - res.left) / (option.data.length - 1)
  if (cellWidth <= 0) return
  let { left, bottom, top } = res

  // 渲染label
  if (x.label) {
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    ctx.font = `${x.labelSize}px ${'serif'}`
    const center = cellWidth / 2
    for (const line of option.data.slice(1)) {
      ctx.beginPath()
      ctx.setLineDash([0, 0])
      ctx.strokeStyle = x.color
      ctx.moveTo(left + center, bottom - x.labelSize - 2)
      ctx.lineTo(left + center, bottom - x.labelSize - option.padding.gap)
      ctx.stroke()
      ctx.fillStyle = x.labelColor
      ctx.fillText(line[0], left + center, bottom, cellWidth)
      // 渲染分界线
      switch (x.line) {
        case 'dashed':
          ctx.beginPath()
          ctx.setLineDash([20, 5])
          ctx.strokeStyle = x.lineColor
          ctx.moveTo(left + cellWidth, bottom - x.labelSize - option.padding.gap)
          ctx.lineTo(left + cellWidth, top)
          ctx.stroke()
          break
        case 'line':
          ctx.beginPath()
          ctx.setLineDash([0, 0])
          ctx.strokeStyle = x.lineColor
          ctx.moveTo(left + cellWidth, bottom - x.labelSize - option.padding.gap)
          ctx.lineTo(left + cellWidth, top)
          ctx.stroke()
          break
      }
      left += cellWidth
    }
    bottom -= x.labelSize + option.padding.gap
  }

  switch (x.type) {
    case 'arrow':
      ctx.beginPath()
      ctx.setLineDash([0, 0])
      ctx.strokeStyle = x.color
      ctx.fillStyle = x.lineColor
      ctx.moveTo(res.right - 2, cal.zero)
      ctx.lineTo(res.right - 2, cal.zero - 2)
      ctx.lineTo(res.right + 2, cal.zero)
      ctx.lineTo(res.right - 2, cal.zero + 2)
      ctx.lineTo(res.right - 2, cal.zero)
      ctx.fill()
      ctx.moveTo(res.left, cal.zero)
      ctx.lineTo(res.right, cal.zero)
      ctx.stroke()
      break
    case 'line':
      ctx.beginPath()
      ctx.setLineDash([0, 0])
      ctx.strokeStyle = x.color
      ctx.fillStyle = x.lineColor
      ctx.moveTo(res.left, cal.zero)
      ctx.lineTo(res.right, cal.zero)
      ctx.stroke()
      break
  }
}
