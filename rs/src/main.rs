use std::fs::*;

mod crop;
mod types;

use crop::{ crop };
use types::*;


fn main() {
  let img = read("examples/Free Hub.png");

  if let Ok(img) = img {
    let new_dims = Rect::new(328, 340, 100, 100);
    let res = crop(&img, new_dims);

    if let Ok(res) = res {
      let img = image::load_from_memory(res.as_slice());

      if let Ok(img) = img {
        let res = img.save("results/Free Hub.png");
        println!("{:?}", res);
      }
    }
    else {
      println!("{:?}", res);
    }
  }
  else {
    println!("{:?}", img);
  }
}

