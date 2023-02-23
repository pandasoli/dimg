use std::io::Cursor;
use image::{ GenericImageView, Rgba, DynamicImage, GenericImage };

use wasm_bindgen::prelude::*;

use crate::prepare::prepare;
use crate::types::*;


#[wasm_bindgen]
pub fn rotate(img: &[u8], deg: u16) -> Res {
  let mut res = Res::new();

  let img = match prepare(img) {
    Ok(img) => img,
    Err(msg) => {
      res.err = msg;
      return res;
    }
  };
  
  let (width, height) = img.dimensions();

  // Check if degree is valid
  let degrees = if deg > 360 { 360 } else { deg };

  // Create a new `DynamicImage` to hold the rotated image.
  let mut rotated_img = DynamicImage::new_rgba8(width, height);

  // Compute the center point of the image.
  let center_x = (width as f32 / 2.0).round() as i32;
  let center_y = (height as f32 / 2.0).round() as i32;

  // Convert the rotation angle from degrees to radians.
  let radians = degrees as f32 * std::f32::consts::PI / 180.0;

  // Loop over each pixel in the rotated image and copy the corresponding pixel from the original image.
  for y in 0..height {
    for x in 0..width {
      // Compute the coordinates of the pixel in the original image relative to the center.
      let rel_x = x as i32 - center_x;
      let rel_y = y as i32 - center_y;

      // Compute the coordinates of the pixel in the rotated image.
      let rot_x = (rel_x as f32 * radians.cos() - rel_y as f32 * radians.sin()).round() as i32 + center_x;
      let rot_y = (rel_x as f32 * radians.sin() + rel_y as f32 * radians.cos()).round() as i32 + center_y;

      // If the pixel is within the bounds of the original image, copy its color to the rotated image.
      if rot_x >= 0 && rot_x < width as i32 && rot_y >= 0 && rot_y < height as i32 {
        let pixel = img.get_pixel(rot_x as u32, rot_y as u32);
        rotated_img.put_pixel(x, y, pixel);
      } else {
        rotated_img.put_pixel(x, y, Rgba([0, 0, 0, 0])); // Set background color for out of bounds pixels
      }
    }
  }

  // Encode the rotated image data as a byte vector.
  rotated_img
    .write_to(&mut Cursor::new(&mut res.res), image::ImageFormat::Png)
    .unwrap();

  res.status = true;
  res
}
