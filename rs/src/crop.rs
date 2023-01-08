use std::io::Cursor;
use image::{ ImageFormat, ImageOutputFormat };
use image::io::Reader;

use crate::types::*;


pub fn crop(image: &[u8], new_dims: Rect) -> Vec<u8> {
  let image = Cursor::new(image);
  let image = Reader::with_format(image, ImageFormat::Png)
    .decode()
    .unwrap();
  let mut res = Vec::new();

  image.crop_imm(
    new_dims.x,
    new_dims.y,
    new_dims.w,
    new_dims.h,
  )
  .write_to(&mut Cursor::new(&mut res), ImageOutputFormat::Png)
  .unwrap();

  res
}

