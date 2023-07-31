import type { Option, ResultInfo } from "../components/types/amor-chart-type"
const map = [10, 20, 30, 40, 50, 60, 70, 80, 90]

export type CalInfo = {
  minNum: number,
  maxNum: number,
  unitGap: number,
  zero: number,
  len: number
}

export function calAxisY (data: any[][], lineHeight: number, option: Option, res: ResultInfo): CalInfo {
  let maxNum = Number.MIN_SAFE_INTEGER
  let minNum = Number.MAX_SAFE_INTEGER
  for(const line of data.slice(1)) {
    maxNum = Math.max(line[1], maxNum)
    minNum = Math.min(line[1], minNum)
  }

  const distance = maxNum - minNum
  const maxAbsNum = Math.max(Math.abs(maxNum), Math.abs(minNum))
  // 自动计算间距
  let now = 1
  let unitGap = 0
  while (true) {
    // break出界标志
    let flag = false
    let t = now * 10
    if (Math.floor((maxAbsNum + t) / t) * t >= maxAbsNum) {
      for (const gap of map) {
        // 当前的单位间距
        const cur = gap * now
        // const unit = 
        if (maxNum * minNum >= 0) {
          const unit = lineHeight / Math.floor((cur + maxAbsNum) / cur)
          if (unit >= 20) {
            unitGap = cur
            flag = true
            break
          }
        } else {
          const unit = lineHeight / Math.floor((cur * 2 + distance) / cur)
          if (unit >= 20) {
            unitGap = cur
            flag = true
            break
          }
        }
      }
    }
    if (flag) break
    now *= 10
  }
  // 计算最小负数位与最大正数位  
  if (maxNum * minNum >= 0) {
    if (maxNum >= 0) {
      maxNum = Math.floor((unitGap + maxAbsNum) / unitGap) * unitGap
      minNum = 0
    } else {
      minNum = -Math.floor((unitGap + maxAbsNum) / unitGap) * unitGap
      maxNum = 0
    }
  } else {
    maxNum = Math.floor((unitGap + maxNum) / unitGap) * unitGap
    minNum = Math.floor((minNum - unitGap) / unitGap) * unitGap
  }
  // console.log(unitGap, maxNum, minNum)
  return {
    minNum,
    maxNum,
    unitGap,
    ...calZero(option, res, minNum, maxNum, unitGap)
  }
}

export type CalZero = { zero: number, len: number }

export function calZero (option: Option, res: ResultInfo, minNum: number, maxNum: number, unitGap: number): CalZero {
  let { top, bottom } = res
  if (option.axis.x.label) {
    bottom -= option.axis.x.labelSize + option.padding.gap - 1
  }
  const distance = bottom - top
  // 比例
  const p = maxNum / (maxNum - minNum)
  // 长度比例
  const len = distance / (maxNum - minNum) * unitGap
  top += distance * p
  return {
    zero: top,
    len
  }
}