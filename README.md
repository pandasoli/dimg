<div align='center'>

# Deno.js Image Processor - dimg


### Features
- [x] Crop
- [ ] Resize
- [ ] Convert
- [ ] Get info

## Use
Importing
<div align='left'>

```ts
  import * as dimg from 'https://deno.land/x/dimg/mod.ts'
```
</div>

## Crop image
<div align='left'>

```ts
  const img = await Deno.readFile(`./image.png`)

  dimg.crop(
    img,
    {
      x: 328,
      y: 340,
      w: 100,
      h: 100
    }
  )

  .then((res: Uint8Array) => {
    Deno.writeFile(`./res_image.png`, res)
    console.info('Done')
  })
  .catch((err: Error) => {
    console.error(err)
  })
```
</div>
