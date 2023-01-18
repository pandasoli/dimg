import init, { crop as rs_crop, Rect as rs_rect } from './pkg/rs.js'
import type { Rect } from '../types.ts'
import './pkg/rs.d.ts'


export const crop = async (img: Uint8Array, rect: Rect): Promise<Uint8Array> => {
  await init()
  const dim = new rs_rect(rect.x, rect.y, rect.w, rect.h)
  const res = rs_crop(img, dim)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
