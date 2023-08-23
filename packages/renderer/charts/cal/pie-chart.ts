import type { ResultInfo } from "../../../components/types/amor-chart-type"

export type CalInfo = {
  zeroX: number,
  zeroY: number,
  radius: number,
  angels: number[]
}

export function calData (data: any[][], res: ResultInfo): CalInfo {
  const width = res.right - res.left
  const height = res.bottom - res.top
  // console.log(res.bottom, res.top, res.right, res.left)
  // debugger
  let total = 0
  for (const line of data.slice(1)) {
    total += Math.max(line[1], 0)
  }
  // console.log(unitGap, maxNum, minNum)
  const zeroX = res.left + (width / 2)
  const zeroY = res.top + (height / 2)
  const radius = Math.trunc(Math.min(width, height) / 2 - 40)
  const angels = [] as number[]
  for (const line of data.slice(1)) {
    angels.push(Math.max(line[1], 0) / total * Math.PI * 2)
  }
  return {
    zeroX,
    zeroY,
    radius,
    angels
  }
}