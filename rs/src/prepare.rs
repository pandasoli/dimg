use std::io::Cursor;
use image::{ DynamicImage };
use image::io::Reader as ImageReader;


pub fn prepare(image: &[u8]) -> Result<DynamicImage, String> {
  let image = Cursor::new(image);
  let image = ImageReader::new(image)
    .with_guessed_format();

  if let Err(image) = image {
    return Err(image.to_string());
  }

  let image = image.unwrap().decode();

  if let Err(image) = image {
    return Err(image.to_string());
  }

  Ok(image.unwrap())
}
