use std::io::Cursor;
use image::{ ImageOutputFormat };
use wasm_bindgen::prelude::*;

use crate::prepare::prepare;
use crate::types::*;


#[wasm_bindgen]
pub fn rotate(img: &[u8], deg: Degrees) -> Res {
  let mut res = Res::new();

  let img = match prepare(img) {
    Ok(img) => img,
    Err(msg) => {
      res.err = msg;
      return res;
    }
  };

  match deg {
    Degrees::NineTen => img.rotate90(),
    Degrees::OneHundredAndEighty => img.rotate180(),
    Degrees::TwoHundredAndSeventy => img.rotate270()
  }
    .write_to(&mut Cursor::new(&mut res.res), ImageOutputFormat::Png)
    .unwrap();

  res.status = true;
  res
}
