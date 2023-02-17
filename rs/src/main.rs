use std::{ env, fs::* };

mod prepare;
mod crop;
mod resize;
mod flip;
mod types;

use crop::*;
use resize::*;
use flip::*;
use types::*;


fn main() {
  let mut args = env::args();

  // Verifying operation
  let op = args.nth(1);
  let op = if let Some(op) = op {
    if !["crop", "resize", "flip"].contains(&op.as_str()) {
      panic!("What you mean with {}? Choose crop of resize!", op);
    }

    op
  }
  else {
    panic!("No operation. Just choose crop of resize!")
  };

  // Openning
  let filename = "Free Hub.png";
  let img = read("../examples/images/".to_owned() + filename);

  if let Err(_) = img {
    panic!("failed to open: {:?}", img);
  }

  let img = img.unwrap();
  let mut res: Res = Res::new();

  // Cropping
  if op == "crop" {
    let new_dims = Rect::new(328, 340, 100, 100);
    res = crop(&img, new_dims);

    if !res.status {
      panic!("failed on cropping: {}", res.err);
    }
  }
  // Resizing
  else if op == "resize" {
    let new_dims = Size::new(428, 340);
    res = resize(&img, ResizeWays::Cut, new_dims);

    if !res.status {
      panic!("failed on resizing: {}", res.err);
    }
  }
  // Fliping
  else if op == "flip" {
    res = flip(&img, Direction::Vertical);

    if !res.status {
      panic!("failed on fliping: {}", res.err);
    }
  }

  // Saving
  let img = image::load_from_memory(res.res.as_slice());

  if let Ok(img) = img {
    let res = img.save(["../examples/results/rs", op.as_str(), filename].join("_"));
    println!("result: {:?}", res); 
  }
  else {
    panic!("failed on loading from memory: {:?}", img); 
  }
}
