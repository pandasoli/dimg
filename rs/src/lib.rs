use std::io::Cursor;
use image::{ ImageFormat, ImageOutputFormat };
use image::io::Reader;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Cube {
  x: u32,
  y: u32,
  w: u32,
  h: u32
}

#[wasm_bindgen]
impl Cube {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Self {
    Self {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }
  }
}

#[wasm_bindgen]
pub fn main() -> String {
  return String::from("Hello, World!");
}

#[wasm_bindgen]
pub fn crop(image: &[u8], new_dims: Cube) -> Vec<u8> {
  // Made by mattf_#6820
  // :) thx for holding on for hours while I didn't understand anything about Rust.

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
