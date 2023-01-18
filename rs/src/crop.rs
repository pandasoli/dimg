use std::io::Cursor;
use image::{ ImageOutputFormat, ImageError };
use image::io::Reader as ImageReader;

use crate::types::*;


pub fn crop(image: &[u8], new_dims: Rect) -> Result<Vec<u8>, ImageError> {
  let image = Cursor::new(image);
  let image = ImageReader::new(image)
    .with_guessed_format()?
    .decode()?;
  let mut res = Vec::new();

  image.crop_imm(
    new_dims.x,
    new_dims.y,
    new_dims.w,
    new_dims.h,
  )
  .write_to(&mut Cursor::new(&mut res), ImageOutputFormat::Png)
  .unwrap();

  Ok(res)
}

