// import { encode as base64Encode } from 'https://deno.land/std@0.82.0/encoding/base64.ts'
import init, { main, crop, resize, Size, Rect } from '../rs/pkg/rs.js'

await init()
console.log( main() )

// lemon.svg -- 40x40
const lemon = await Deno.readFile('./images/lemon.svg')

const dim = new Rect
dim.x = 2
dim.y = 2
dim.w = 10
dim.h = 10

const size = new Size
size.w = 20
size.h = 20

console.log(
  crop(lemon, dim)
)

