<div align='center'>

  # DenoJS Image - dimg
</div>

### Features
- [x] Crop
- [ ] Resize
- [ ] Convert
- [ ] Get infos

### Use
Importing
```ts
  import {
    crop
  } from '../mod.ts'
```

### Crop image
```ts
  const img = await Deno.readFile(`./image.png`)

  crop(
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

