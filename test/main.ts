// import { encode as base64Encode } from 'https://deno.land/std@0.82.0/encoding/base64.ts'
import { crop } from '../mod.ts'


const filename = 'Free Hub.png'
const img = await Deno.readFile(`../examples/${filename}`)

await crop(img, {
  x: 328,
  y: 340,
  w: 100,
  h: 100
})
.then(res => {
  Deno.writeFile(`../results/deno_${filename}`, res)
  console.info('Ok')
})
.catch(err => {
  console.error(err)
})

