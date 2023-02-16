import init, { resize, Size, ResizeWays } from './pkg/rs.js'
import './pkg/rs.d.ts'


export default async (img: Uint8Array, way: ResizeWays, { w, h }: Size): Promise<Uint8Array> => {
  await init()
  const dim = new Size(w, h)
  const res = resize(img, way, dim)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
