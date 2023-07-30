export type Axis = {
  x: {
    type: 'none' | 'line' | 'arrow',
    label: boolean,
    labelSize: number,
    line: 'none' | 'line' | 'dashed',
    color: string,
    labelColor: string
  },
  y: {
    type: 'none' | 'line' | 'arrow',
    label: boolean,
    labelSize: number,
    line: 'none' | 'line' | 'dashed',
    color: string,
    labelColor: string
  }
}