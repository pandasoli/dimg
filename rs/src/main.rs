use std::fs::*;

mod crop;
mod types;

use crop::{ crop };
use types::*;


fn main() {
  let img = read("examples/Free Hub.png");

  if let Ok(img) = img {
    let new_dims = Rect::new(340, 378, 30, 30);
    let res = crop(&img, new_dims);

    let img = image::load_from_memory(res.as_slice());

    if let Ok(img) = img {
      img.save("results/Free Hub.png");
    }
  }
  else {
    println!("{:?}", img);
  }
}

