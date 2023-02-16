use std::io::Cursor;
use image::{ ImageOutputFormat, imageops::FilterType };
use image::io::Reader as ImageReader;
use wasm_bindgen::prelude::*;

use crate::types::*;


#[wasm_bindgen]
pub fn resize(image: &[u8], deform: bool, new_dims: Size) -> Res {
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

  let image = image.unwrap();

  if deform {
    image.resize_exact(
      new_dims.w,
      new_dims.h,
      FilterType::Triangle
    )
      .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
      .unwrap();
  }
  else {
    image.resize_to_fill(
      new_dims.w,
      new_dims.h,
      FilterType::Triangle
    )
      .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
      .unwrap();
  }

  res.status = true;
  res
}
