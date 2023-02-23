import { rotate, crop, flip, resize, ResizeWay, Direction } from '../mod.ts'


const filename = 'Free Hub.png'
const method = 'rotate'

try {
  await Deno.remove(`results/deno_${method}_${filename}`)
}
catch {}

const img = await Deno.readFile(`images/${filename}`)

rotate(
  img,
  75
)
.then(res => {
  Deno.writeFile(`results/deno_${method}_${filename}`, res)
  console.info('Ok')
})
.catch(err => {
  console.error(err)
})
