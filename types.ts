
export type Rect = {
  x: number
  y: number
  w: number
  h: number
}

export type Res = {
  status: boolean
  err: string
  res: Uint8Array
}

export enum ResizeWay {
  Deform,
  Cut
}

export enum Direction {
  Horizontal,
  Vertical
}

export enum Degrees {
  NineTen,
  OneHundredAndEighty,
  TwoHundredAndSeventy
}
