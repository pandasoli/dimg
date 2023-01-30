use std::io::Cursor;
use image::{io::Reader as ImageReader, ImageFormat};
use wasm_bindgen::prelude::*;

use crate::types::*;


#[wasm_bindgen]
pub fn get_info(image: &[u8]) -> Info {
  let mut res = Info::new();

  // Getting size
  res.size = image.len();

  // Opening
  let image = Cursor::new(image);
  let image = ImageReader::new(image)
    .with_guessed_format();

  if let Err(image) = image {
    res.err = image.to_string();
    return res;
  }

  // Getting format
  let image = image.unwrap();

  if let Some(format) = image.format() {
    res.format = match format {
      ImageFormat::Png => "Png",
      ImageFormat::Jpeg => "Jpeg",
      ImageFormat::Gif => "Gif",
      ImageFormat::WebP => "WebP",
      ImageFormat::Pnm => "Pnm",
      ImageFormat::Tiff => "Tiff",
      ImageFormat::Tga => "Tga",
      ImageFormat::Dds => "Dds",
      ImageFormat::Bmp => "Bmp",
      ImageFormat::Ico => "Ico",
      ImageFormat::Hdr => "Hdr",
      ImageFormat::OpenExr => "OpenExr",
      ImageFormat::Farbfeld => "Farbfeld",
      ImageFormat::Avif => "Avif",
      _ => ""
    }.to_string()
  }

  // Getting dimensions
  let image = image.decode();

  if let Err(image) = image {
    res.err = image.to_string();
    return res;
  }

  let image = image.unwrap();

  res.height = image.height();
  res.width = image.width();

  // Done
  res.status = true;
  res
}
