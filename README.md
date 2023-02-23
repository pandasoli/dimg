<div align='center'>

# Deno Image Processor

Deno module for image processing
<img src='https://raw.githubusercontent.com/pandasoli/twemojis/master/1f5bc.svg' alt='Picture twemoji' width='17'/>
<img src='https://raw.githubusercontent.com/pandasoli/twemojis/master/1f995.svg' alt='Sauropod' width='17'/>

<br/>

## Features

<div align='left'>

- [x] Crop
- [x] Resize
- [ ] Convert
- [x] Flip
- [x] Rotate
- [ ] Apply filter
- [ ] Write text
- [ ] Join images
</div>

<details>
  <summary>

  ### To do
  </summary>

  <div align='left'>

  - [ ] Use `Result<>` to return features results
  </div>
</details>

<br/>
<br/>

## Accepted extensions

<div align='left'>

- Png
- Jpeg
- Gif
- WebP
- Pnm
- Tiff
- Tga
- Dds
- Bmp
- Ico
- Hdr
- OpenExr
- Farbfeld
- Avif
</div>
<br/>

## Use
Import it
<div align='left'>

```ts
import * as dimg from 'https://deno.land/x/dimg/mod.ts'
```
</div>
<br/>

## Crop image
`crop(img: Uint8Array, rect: Rect)`

Here's an example that we open a file and pass its data to crop.
<div align='left'>

```ts
const img = await Deno.readFile(`./image.png`)

dimg.crop(
  img,
  {
    y: 340, x: 328,
    h: 100, w: 100
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
<br/>

## Resize image
`resize(img: Uint8Array, deform: boolean, size: Size)`

The same thing as cropping, but this time use the `resize` function.  
And of course see the difference of the parameters type.

The `deform` parameter is for whether the image should be cut or deformed/resized depending on the dimensions.
<br/>

## Flip image
`flip(img: Uint8Array, dir: Direction)`

The `Direction` type definition:
<div align='left'>

```ts
export enum Direction {
  Horizontal,
  Vertical
}
```
</div>
<br/>

## Rotate image
`rotate(img: Uint8Array, deg: number)`

The `deg` parameter expects the number of degrees you want to rotate the image.  
(i.e.: from 0 to 360)
<br/>
