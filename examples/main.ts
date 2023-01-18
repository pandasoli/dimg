import { crop } from '../mod.ts'


const filename = 'Free Hub.svg'
const img = await Deno.readFile(`images/${filename}`)

crop(img, {
  x: 328,
  y: 340,
  w: 100,
  h: 100
})
.then(res => {
  Deno.writeFile(`results/deno_${filename}`, res)
  console.info('Ok')
})
.catch(err => {
  console.error(err)
})

