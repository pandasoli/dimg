use std::io::Cursor;
use image::{ ImageOutputFormat };
use image::io::Reader as ImageReader;
use wasm_bindgen::prelude::*;

use crate::types::*;


#[wasm_bindgen]
pub fn crop(image: &[u8], new_dims: Rect) -> Res {
  let mut res = Res::new();
  let image = Cursor::new(image);
  let image = ImageReader::new(image)
    .with_guessed_format();

  if let Err(image) = image {
    res.err = image.to_string();
    return res;
  }

  let image = image.unwrap().decode();

  if let Err(image) = image {
    res.err = image.to_string();
    return res;
  }

  let mut image = image.unwrap();

  image.crop(
    new_dims.x,
    new_dims.y,
    new_dims.w,
    new_dims.h
  )
    .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
    .unwrap();

  res.status = true;
  res
}
