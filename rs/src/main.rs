use std::fs::*;

mod crop;
mod types;

use crop::{ crop };
use types::*;


fn main() {
  let img = read("../examples/images/Free Hub.png");

  if let Ok(img) = img {
    let new_dims = Rect::new(328, 340, 100, 100);
    let res = crop(&img, new_dims);

    if res.status {
      let img = image::load_from_memory(res.res.as_slice());

      if let Ok(img) = img {
        let res = img.save("../examples/results/Free Hub.png");
        println!("afer saiving: {:?}", res);
      }
    }
    else {
      println!("after crop: {:?}", res.err);
    }
  }
  else {
    println!("after open: {:?}", img);
  }
}

