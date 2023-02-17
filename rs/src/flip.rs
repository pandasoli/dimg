use std::io::Cursor;
use image::{ ImageOutputFormat };
use image::io::Reader as ImageReader;
use wasm_bindgen::prelude::*;

use crate::types::*;


#[wasm_bindgen]
pub fn flip(image: &[u8], dir: Direction) -> Res {
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

  match dir {
    Direction::Horizontal => image.fliph(),
    Direction::Vertical => image.flipv()
  }
    .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
    .unwrap();

  res.status = true;
  res
}
