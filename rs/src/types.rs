use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub struct Rect {
  pub x: u32,
  pub y: u32,
  pub w: u32,
  pub h: u32
}

#[wasm_bindgen]
pub struct Size {
  pub w: u32,
  pub h: u32
}

#[wasm_bindgen]
pub struct Res {
  pub status: bool,
  #[wasm_bindgen(getter_with_clone)]
  pub err: String,

  #[wasm_bindgen(getter_with_clone)]
  pub res: Vec<u8>
}


#[wasm_bindgen]
impl Res {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Self {
    Self {
      status: false,
      err: String::new(),

      res: Vec::<u8>::new()
    }
  }
}

#[wasm_bindgen]
impl Rect {
  #[wasm_bindgen(constructor)]
  pub fn new(x: u32, y: u32, w: u32, h: u32) -> Self {
    Self { x, y, w, h }
  }
}

#[wasm_bindgen]
impl Size {
  #[wasm_bindgen(constructor)]
  pub fn new(w: u32, h: u32) -> Self {
    Self { w, h }
  }
}
