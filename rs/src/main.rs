use std::fs::*;

mod crop;
mod types;
mod info;

use crop::*;
use types::*;
use info::*;


fn main() {
  // Openning
  let filename = "Free Hub.png";
  let img = read("../examples/images/".to_owned() + filename);

  if let Ok(img) = img {
    // Getting info
    let info = get_info(&img);

    if info.status {
      println!("Dimentions: {}x{}", info.height, info.width);
      println!("Format: {}", info.format);
      println!("Size: {}", info.size);
      println!("Accessed: {}", info.accessed);
      println!("Modified: {}", info.modified);
    }
    else {
      println!("failed on getting information: {}", info.err);
    }

    // Cropping
    let new_dims = Rect::new(328, 340, 100, 100);
    let res = crop(&img, new_dims);

    if !res.status {
      println!("failed on cropping: {}", res.err);
    }

    // Saving
    let img = image::load_from_memory(res.res.as_slice());

    if let Ok(img) = img {
      let res = img.save("../examples/results/rs_".to_owned() + filename);
      println!("result: {:?}", res); 
    }
    else {
      println!("failed on loading from memory: {:?}", img); 
    }
  }
  else {
    println!("failed to open: {:?}", img);
  }
}

