use std::io::Cursor;
use image::{ ImageOutputFormat, imageops::FilterType };
use wasm_bindgen::prelude::*;

use crate::prepare::prepare;
use crate::types::*;


#[wasm_bindgen]
pub fn resize(img: &[u8], way: ResizeWays, new_dims: Size) -> Res {
  let mut res = Res::new();

  let img = match prepare(img) {
    Ok(img) => img,
    Err(msg) => {
      res.err = msg;
      return res;
    }
  };

  match way {
    ResizeWays::Deform => img.resize_exact(new_dims.w, new_dims.h, FilterType::Triangle),
    ResizeWays::Cut => img.resize_to_fill(new_dims.w, new_dims.h, FilterType::Triangle)
  }
    .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
    .unwrap();

  res.status = true;
  res
}
