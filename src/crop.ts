import init, { crop, Rect } from './pkg/rs.js'
import './pkg/rs.d.ts'


export default async (img: Uint8Array, { x, y, w, h }: Rect): Promise<Uint8Array> => {
  await init()
  const dim = new Rect(x, y, w, h)
  const res = crop(img, dim)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
