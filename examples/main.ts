import { crop, resize, ResizeWay } from '../mod.ts'


const filename = 'Free Hub.png'
const method = 'resize'

try {
  await Deno.remove(`results/deno_${method}_${filename}`)
}
catch {}

const img = await Deno.readFile(`images/${filename}`)

resize(
  img,
  ResizeWay.Deform,
  {
    w: 428,
    h: 340
  }
)
.then(res => {
  Deno.writeFile(`results/deno_${method}_${filename}`, res)
  console.info('Ok')
})
.catch(err => {
  console.error(err)
})

