import { type ICube } from '../types.ts'
import init, { crop } from '../rs/pkg/rs.js'
import '../rs/pkg/rs.d.ts'


const CropImg = async (img: Uint8Array, dim: ICube): Promise<Uint8Array> => {
  await init()
  return crop(img, dim)
}


export default CropImg
