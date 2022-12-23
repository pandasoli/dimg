import { encode as base64Encode } from 'https://deno.land/std@0.82.0/encoding/base64.ts'
import { crop } from '../mod.ts'

const img = await Deno.readFile('images/lemon.svg')

// lemon.svg -- 40x40

const res = await crop(
  img,
  {
    x: 2, y: 2,
    w: 10, h: 10
  }
)


await Deno.writeFile(
  'images/lemon-cropped.svg',
  res
)

