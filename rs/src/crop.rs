use std::io::Cursor;
use image::{ ImageOutputFormat };
use wasm_bindgen::prelude::*;

use crate::prepare::prepare;
use crate::types::*;


#[wasm_bindgen]
pub fn crop(img: &[u8], new_dims: Rect) -> Res {
  let mut res = Res::new();

  let mut img = match prepare(img) {
    Ok(img) => img,
    Err(msg) => {
      res.err = msg;
      return res;
    }
  };

  img.crop(
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
