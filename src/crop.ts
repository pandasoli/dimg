/// <reference types='./pkg/rs.d.ts'/>
import init, { crop, Rect } from './pkg/rs.js'


export default async (img: Uint8Array, { x, y, w, h }: Rect): Promise<Uint8Array> => {
  await init()
  const dim = new Rect(x, y, w, h)
  const res = crop(img, dim)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
