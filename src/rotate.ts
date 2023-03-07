/// <reference types='./pkg/rs.d.ts'/>
import init, { rotate } from './pkg/rs.js'


export default async (img: Uint8Array, deg: number): Promise<Uint8Array> => {
  await init()
  const res = rotate(img, deg)

  if (res.status)
    return res.res

  throw new Error(res.err)
}
