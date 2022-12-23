use std::io::Cursor;
use image::{ ImageFormat, ImageOutputFormat };
use image::io::Reader;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Cube {
  pub x: u32,
  pub y: u32,
  pub w: u32,
  pub h: u32
}

#[wasm_bindgen]
pub fn main() -> String {
  return String::from("Hello, World!");
}

#[wasm_bindgen]
pub fn crop(image: &[u8], new_dims: Cube) -> Vec<u8> {
  let image = Cursor::new(image);
  let image = Reader::with_format(image, ImageFormat::Png)
    .decode()
    .unwrap();
 
  let cropped = image.crop_imm(
    new_dims.x,
    new_dims.y,
    new_dims.w,
    new_dims.h,
  );

  let mut ret = Vec::new();
  cropped
    .write_to(&mut Cursor::new(&mut ret), ImageOutputFormat::Png)
    .unwrap();

  ret
}

