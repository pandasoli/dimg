use std::io::Cursor;
use image::{ ImageOutputFormat };
use wasm_bindgen::prelude::*;

use crate::prepare::prepare;
use crate::types::*;


#[wasm_bindgen]
pub fn flip(img: &[u8], dir: Direction) -> Res {
  let mut res = Res::new();

  let img = match prepare(img) {
    Ok(img) => img,
    Err(msg) => {
      res.err = msg;
      return res;
    }
  };

  match dir {
    Direction::Horizontal => img.fliph(),
    Direction::Vertical => img.flipv()
  }
    .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
    .unwrap();

  res.status = true;
  res
}
