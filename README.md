<div align='center'>

# Deno Image Processor

Deno module for image processing
<img src='https://raw.githubusercontent.com/pandasoli/pandasoli/main/assets/twemojis/1f5bc.svg' alt='Picture twemoji' width='17'/>
<img src='https://raw.githubusercontent.com/pandasoli/pandasoli/main/assets/twemojis/1f995.svg' alt='Sauropod' width='17'/>

<br/>

### Features

<div align='left'>

- [x] Crop;
- [ ] Resize;
- [ ] Convert;
- [ ] Get info;
  - [x] Width;
  - [x] Height;
  - [x] Format;
  - [ ] Last access time;
  - [ ] Last modification time;
  - [ ] Camera Make;
  - [ ] Camera Model;
  - [ ] Camera Focal length;
  - [ ] Camera Aperture;
  - [ ] Camera Exposure;
  - [ ] Camera ISO;
  - [ ] Camera Flash.
</div>

### To do

<div align='left'>

- [ ] Use `Result<>` to return features results.
</div>

<br/>
<br/>

## Accepted extensions

<div align='left'>

- Png;
- Jpeg;
- Gif;
- WebP;
- Pnm;
- Tiff;
- Tga;
- Dds;
- Bmp;
- Ico;
- Hdr;
- OpenExr;
- Farbfeld;
- Avif.
</div>
<br/>

## Use
Importing
<div align='left'>

```ts
  import * as dimg from 'https://deno.land/x/dimg/mod.ts'
```
</div>
<br/>

## Crop image
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
