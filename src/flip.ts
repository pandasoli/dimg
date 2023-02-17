import init, { flip, Direction } from './pkg/rs.js'
import './pkg/rs.d.ts'


export default async (img: Uint8Array, dir: Direction): Promise<Uint8Array> => {
  await init()
  const res = flip(img, dir)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
