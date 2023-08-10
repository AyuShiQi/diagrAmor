import type { Option } from '../components/types/amor-chart-type'

/**
 * 将非数字数据转化为数字
 * @param option 
 */
export function handleOption (option: Option) {
  // 基础信息区
  option.width = Number(option.width)
  if (Number.isNaN(option.width)) {
    option.width = 300
  }
  option.height = Number(option.height)
  if (Number.isNaN(option.height)) {
    option.height = 300
  }
  option.unitGap = Number(option.unitGap)
  if (Number.isNaN(option.unitGap)) {
    option.unitGap = 40
  }
  // 提示信息
  option.attention.size = Number(option.attention.size)
  if (Number.isNaN(option.attention.size)) {
    option.attention.size = 12
  }
  // 坐标轴
  option.axis.y.labelSize = Number(option.axis.y.labelSize)
  if (Number.isNaN(option.axis.y.labelSize)) {
    option.axis.y.labelSize = 12
  }
  option.axis.x.labelSize = Number(option.axis.x.labelSize)
  if (Number.isNaN(option.axis.x.labelSize)) {
    option.axis.x.labelSize = 12
  }
  // padding
  option.padding.x = Number(option.padding.x)
  if (Number.isNaN(option.padding.x)) {
    option.padding.x = 8
  }
  option.padding.y = Number(option.padding.y)
  if (Number.isNaN(option.padding.y)) {
    option.padding.y = 8
  }
  option.padding.gap = Number(option.padding.gap)
  if (Number.isNaN(option.padding.gap)) {
    option.padding.gap = 8
  }
  // 标题
  option.title.size = Number(option.title.size)
  if (Number.isNaN(option.title.size)) {
    option.title.size = 12
  }
  const { info } = option
  // 附加信息
  info.unitSize = Number(info.unitSize)
  if (Number.isNaN(info.unitSize)) {
    info.unitSize = 12
  }
  info.sourceSize = Number(info.sourceSize)
  if (Number.isNaN(info.sourceSize)) {
    info.sourceSize = 12
  }
  // 提示标签
  option.label.size = Number(option.label.size)
  if (Number.isNaN(option.label.size)) {
    option.label.size = 12
  }
}